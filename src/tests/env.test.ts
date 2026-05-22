import { describe, expect, it } from 'vitest';
import { resolveBackendBaseUrl } from '../config/env';

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
});
