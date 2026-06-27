#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

function normalizeBaseUrl(raw) {
  if (!raw) return '';
  return String(raw).trim().replace(/\/+$/, '');
}

function resolveApiPath(apiPath, version) {
  if (version !== 'v1') {
    return apiPath;
  }

  if (apiPath.startsWith('/api/v1')) {
    return apiPath;
  }

  if (apiPath === '/api') {
    return '/api/v1';
  }

  if (apiPath.startsWith('/api/')) {
    return apiPath.replace('/api/', '/api/v1/');
  }

  return apiPath;
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
      continue;
    }

    const [rawKey, ...rawValueParts] = trimmed.split('=');
    const key = rawKey.trim();
    const rawValue = rawValueParts.join('=').trim();
    const unquoted =
      (rawValue.startsWith('"') && rawValue.endsWith('"')) ||
      (rawValue.startsWith("'") && rawValue.endsWith("'"))
        ? rawValue.slice(1, -1)
        : rawValue;

    if (!(key in process.env)) {
      process.env[key] = unquoted;
    }
  }
}

const cwd = process.cwd();
loadEnvFile(path.join(cwd, '.env'));

const baseUrl = normalizeBaseUrl(
  process.env.API_BASE_URL ||
    process.env.VITE_PROTONLAB_API_BASE_URL ||
    process.env.VITE_API_URL ||
    process.env.VITE_API_BASE_URL ||
    'http://localhost:3000'
);
const apiVersion = (process.env.API_VERSION || process.env.VITE_API_VERSION || 'legacy').toLowerCase();
const bearerToken = process.env.SMOKE_BEARER_TOKEN;
const frontendOrigin = normalizeBaseUrl(
  process.env.FRONTEND_ORIGIN ||
    process.env.FRONTEND_DEPLOY_URL ||
    process.env.VITE_FRONTEND_ORIGIN ||
    'http://localhost:5173'
);

if (!baseUrl) {
  console.error('API base URL no definida. Usa API_BASE_URL, VITE_PROTONLAB_API_BASE_URL o VITE_API_URL.');
  process.exit(1);
}

let failed = false;

console.log(`Smoke API against ${baseUrl} (version=${apiVersion}, frontendOrigin=${frontendOrigin})`);

async function parseResponseBody(response) {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }

  return response.text();
}

async function runCheck(name, method, path, configure = {}) {
  const finalPath = resolveApiPath(path, apiVersion);
  const url = `${baseUrl}${finalPath}`;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        Origin: frontendOrigin,
        ...(bearerToken ? { Authorization: `Bearer ${bearerToken}` } : {}),
        ...(configure.headers || {}),
      },
      ...(configure.body ? { body: JSON.stringify(configure.body) } : {}),
    });

    const payload = await parseResponseBody(response);
    const requestId = response.headers.get('x-request-id') || response.headers.get('x-vercel-id') || 'n/a';
    const acao = response.headers.get('access-control-allow-origin') || 'n/a';
    const ok = configure.assert(response, payload);

    console.log(
      `${ok ? 'OK' : 'FAIL'} ${name}: ${response.status} | URL=${url} | requestId=${requestId} | ACAO=${acao}`
    );

    if (!ok) {
      failed = true;
      if (payload) {
        console.log(`  payload=${JSON.stringify(payload)}`);
      }
    }
  } catch (error) {
    failed = true;
    console.log(
      `FAIL ${name}: network error | URL=${url} | error=${error instanceof Error ? error.message : String(error)}`
    );
  }
}

await runCheck('health', 'GET', '/api/health', {
  assert: (response) => response.status === 200,
});

await runCheck('status', 'GET', '/api/status', {
  assert: (response, payload) =>
    response.status === 200 &&
    payload &&
    payload.success === true &&
    payload.data &&
    payload.data.frontend &&
    payload.data.frontend.expectedOrigin,
});

await runCheck('products', 'GET', '/api/products?page=1&pageSize=5', {
  assert: (response, payload) =>
    response.status === 200 && payload && payload.success === true,
});

await runCheck('auth_me', 'GET', '/api/auth/me', {
  assert: (response) => (bearerToken ? response.status === 200 : response.status === 401),
});

await runCheck('assistant_preflight', 'OPTIONS', '/api/ai/sql-assistant', {
  headers: {
    'Access-Control-Request-Method': 'POST',
    'Access-Control-Request-Headers': 'Content-Type, Authorization',
  },
  assert: (response) =>
    response.status === 204 &&
    response.headers.get('access-control-allow-origin') === frontendOrigin &&
    (response.headers.get('access-control-allow-methods') || '').includes('POST') &&
    (response.headers.get('access-control-allow-headers') || '').includes('Authorization'),
});

await runCheck('assistant_route', 'POST', '/api/ai/sql-assistant', {
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    question: 'Muéstrame 5 pedidos pendientes',
    schema: 'orders(id, status, customer_id, created_at)',
    dialect: 'PostgreSQL',
    businessContext: 'ERP Proton Lab para pedidos y clientes.',
  },
  assert: (response, payload) => {
    if (!bearerToken) {
      return response.status === 401 && payload && payload.code === 'TOKEN_MISSING';
    }

    return (
      (response.status === 200 && payload && payload.success === true) ||
      (response.status === 503 && payload && payload.code === 'AI_UNAVAILABLE')
    );
  },
});

if (failed) {
  process.exit(1);
}

console.log('Smoke API passed.');
