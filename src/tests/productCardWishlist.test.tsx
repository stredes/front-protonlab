import React, { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createRoot, Root } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { WishlistProvider } from '../contexts/WishlistContext';
import { CartProvider } from '../features/cart/cartContext';
import type { Product } from '../features/catalog/types';

vi.mock('../components/ui/Toast', () => ({
  ToastContainer: () => null,
  showToast: {
    success: vi.fn(),
    info: vi.fn(),
    error: vi.fn(),
  },
  toast: {
    success: vi.fn(),
    info: vi.fn(),
    error: vi.fn(),
  },
}));

const product: Product = {
  id: 'prod-test-1',
  slug: 'producto-test',
  name: 'Producto Test',
  categoryId: 'cat-test',
  brand: 'Protonlab',
  shortDescription: 'Producto de prueba',
  longDescription: 'Producto de prueba',
  specs: {},
  image: 'https://example.com/product.jpg',
  imageUrl: 'https://example.com/product.jpg',
  price: 1200,
  stock: 4,
};

describe('ProductCard wishlist action', () => {
  let container: HTMLDivElement;
  let root: Root;
  const storage = new Map<string, string>();

  beforeEach(() => {
    storage.clear();
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => storage.get(key) ?? null),
      setItem: vi.fn((key: string, value: string) => {
        storage.set(key, value);
      }),
      removeItem: vi.fn((key: string) => {
        storage.delete(key);
      }),
      clear: vi.fn(() => {
        storage.clear();
      }),
    });
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
    vi.unstubAllGlobals();
    storage.clear();
  });

  it('adds the card product to the wishlist when the like button is clicked', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <CartProvider>
            <WishlistProvider>
              <ProductCard product={product} onQuote={() => undefined} />
            </WishlistProvider>
          </CartProvider>
        </MemoryRouter>
      );
    });

    const wishlistButton = container.querySelector<HTMLButtonElement>(
      'button[title="Agregar a favoritos"]'
    );

    expect(wishlistButton).not.toBeNull();

    act(() => {
      wishlistButton?.click();
    });

    const savedLists = JSON.parse(localStorage.getItem('protonlab_wishlists') || '[]');
    expect(savedLists[0].items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: product.id,
          name: product.name,
          image: product.imageUrl,
          slug: product.slug,
          brand: product.brand,
        }),
      ])
    );
  });
});
