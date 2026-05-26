function normalizeBaseUrl(raw?: string): string {
  if (!raw) return '';
  const trimmed = raw.trim();
  const unquoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;
  return unquoted.replace(/\/+$/, '');
}

export function resolveBackendBaseUrl(raw?: string): string {
  const normalized = normalizeBaseUrl(raw);
  const retiredBackendAliases = new Set([
    'https://protonlab-backend-delta.vercel.app',
  ]);

  if (retiredBackendAliases.has(normalized)) {
    return 'https://protonlab-backend-kappa.vercel.app';
  }

  return normalized;
}

export const API_BASE_URL = resolveBackendBaseUrl(
  ((import.meta.env.VITE_PROTONLAB_API_BASE_URL as string | undefined) ??
    (import.meta.env.VITE_API_URL as string | undefined) ??
    (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
    'http://localhost:3000')
);
function parsePositiveInteger(raw: string | undefined, fallback: number): number {
  const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN;

  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export const API_TIMEOUT_MS = parsePositiveInteger(
  import.meta.env.VITE_API_TIMEOUT_MS as string | undefined,
  45000
);
export const API_VERSION = ((import.meta.env.VITE_API_VERSION as string | undefined) ?? 'legacy').toLowerCase();
export const ENABLE_API_DIAGNOSTICS =
  (import.meta.env.VITE_ENABLE_API_DIAGNOSTICS as string | undefined) === 'true';

const rawLoginMock = import.meta.env.VITE_ENABLE_LOGIN_MOCK as string | undefined;
export const ENABLE_LOGIN_MOCK =
  rawLoginMock === 'true'
    ? true
    : rawLoginMock === 'false'
      ? false
      : !import.meta.env.VITE_FIREBASE_PROJECT_ID || import.meta.env.DEV;
