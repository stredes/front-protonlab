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

  it('resolves backend /src asset image paths to bundled frontend asset URLs', async () => {
    httpRequestMock.mockResolvedValueOnce([
      {
        id: 'prod-hardware-ia',
        slug: 'cluster-ia-nexus',
        name: 'Clúster de IA Nexus Server',
        categoryId: 'cat-equipos',
        image: '/src/assets/images/protonlab/ai_hardware_1777123776193.png',
      },
    ]);

    const { getProducts } = await import('../features/catalog/catalogApi');
    const products = await getProducts();

    expect(products[0].image).toBeTruthy();
    expect(products[0].image).not.toBe('/src/assets/images/protonlab/ai_hardware_1777123776193.png');
    expect(products[0].imageUrl).toBe(products[0].image);
  });
});
