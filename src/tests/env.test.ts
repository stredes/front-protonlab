import { describe, expect, it } from 'vitest';
import { API_TIMEOUT_MS, resolveBackendBaseUrl } from '../config/env';

describe('env config', () => {
  it('redirects retired backend deployments to the stable backend alias', () => {
    expect(resolveBackendBaseUrl('https://protonlab-backend-delta.vercel.app')).toBe(
      'https://protonlab-backend-kappa.vercel.app'
    );
  });

  it('normalizes trailing slashes and preserves current backend URLs', () => {
    expect(resolveBackendBaseUrl('https://protonlab-backend-kappa.vercel.app/')).toBe(
      'https://protonlab-backend-kappa.vercel.app'
    );
  });

  it('uses a timeout long enough for local Ollama responses', () => {
    expect(API_TIMEOUT_MS).toBeGreaterThanOrEqual(30000);
  });
});
