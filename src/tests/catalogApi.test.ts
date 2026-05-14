import { beforeEach, describe, expect, it, vi } from 'vitest';

const httpRequestMock = vi.fn();

vi.mock('../lib/httpClient', () => ({
  httpRequest: httpRequestMock,
}));

describe('catalogApi', () => {
  beforeEach(() => {
    httpRequestMock.mockReset();
  });

  it('normalizes backend product href values to frontend product routes', async () => {
    httpRequestMock.mockResolvedValueOnce([
      {
        id: 'prod-hardware-ia',
        slug: 'cluster-ia-nexus',
        name: 'Clúster de IA Nexus Server',
        categoryId: 'cat-equipos',
        href: '/products/cluster-ia-nexus',
      },
    ]);

    const { getProducts } = await import('../features/catalog/catalogApi');
    const products = await getProducts();

    expect(products[0].href).toBe('/productos/cluster-ia-nexus');
    expect(products[0].slug).toBe('cluster-ia-nexus');
  });
});
