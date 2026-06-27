import { beforeEach, describe, expect, it, vi } from 'vitest';

const authMock = {
  currentUser: null as null | { getIdToken: () => Promise<string> },
};

vi.mock('../lib/firebase', () => ({
  auth: authMock,
}));

vi.mock('../lib/logger', () => ({
  logger: {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('../lib/eventLogger', () => ({
  logApiEvent: {
    request: vi.fn(),
    success: vi.fn(),
    error: vi.fn(),
    timeout: vi.fn(),
  },
}));

describe('httpClient auth header', () => {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
      getItem: vi.fn((key: string) => store[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  beforeEach(() => {
    vi.resetModules();
    authMock.currentUser = null;
    localStorageMock.clear();
    vi.stubGlobal('localStorage', localStorageMock);
    vi.stubGlobal(
      'fetch',
      vi.fn(async () =>
        new Response(JSON.stringify({ success: true, data: { ok: true } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      )
    );
  });

  it('uses a stored Firebase token when Firebase auth is not hydrated yet', async () => {
    localStorage.setItem(
      'protonlab_auth',
      JSON.stringify({ user: { id: 'admin' }, token: 'firebase-token' })
    );

    const { httpRequest } = await import('../lib/httpClient');
    await httpRequest('/api/ai/sql-assistant', { method: 'POST', body: { question: 'x' } });

    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: 'Bearer firebase-token',
        }),
      })
    );
  });

  it('sends the development mock token while mock login is active in local dev', async () => {
    localStorage.setItem(
      'protonlab_auth',
      JSON.stringify({ user: { id: 'mock-admin' }, token: 'mock-token-dev:admin:admin%40protonlab.cl' })
    );

    const { httpRequest } = await import('../lib/httpClient');
    await httpRequest('/api/ai/sql-assistant', { method: 'POST', body: { question: 'x' } });

    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: 'Bearer mock-token-dev:admin:admin%40protonlab.cl',
        }),
      })
    );
  });
});
