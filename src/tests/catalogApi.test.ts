import { beforeEach, describe, expect, it, vi } from 'vitest';

const getDocsMock = vi.fn();

vi.mock('../lib/firebase', () => ({
  db: {},
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn((db, name) => ({ db, name })),
  doc: vi.fn(),
  getDoc: vi.fn(),
  getDocs: getDocsMock,
  limit: vi.fn(),
  query: vi.fn((...args) => args),
  where: vi.fn(),
}));

describe('catalogApi', () => {
  beforeEach(() => {
    vi.resetModules();
    getDocsMock.mockReset();
  });

  function resolveProductsOnce(products: Array<Record<string, unknown>>) {
    getDocsMock.mockResolvedValueOnce({
      docs: products.map((product) => ({
        id: String(product.id),
        data: () => product,
      })),
    });
  }

  it('normalizes backend product href values to frontend product routes', async () => {
    resolveProductsOnce([
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
    resolveProductsOnce([
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

  it('preserves backend blob image URLs for product cards', async () => {
    const blobUrl = 'https://dzkjreaxn5ennfih.public.blob.vercel-storage.com/products/microscope.jpg';
    resolveProductsOnce([
      {
        id: 'prod-microscope',
        slug: 'microscope',
        name: 'Microscopio digital',
        categoryId: 'cat-equipos',
        image: blobUrl,
      },
    ]);

    const { getProducts } = await import('../features/catalog/catalogApi');
    const products = await getProducts();

    expect(products[0].image).toBe(blobUrl);
    expect(products[0].imageUrl).toBe(blobUrl);
  });
});
