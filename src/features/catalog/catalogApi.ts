import { httpRequest } from '../../lib/httpClient';
import { Product, ProductCategory, ProductFilters } from './types';

const catalogAssetUrls = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function normalizeFrontendProductHref(href: string | undefined, slug: string, id: string): string {
  const fallbackHref = `/productos/${slug || id}`;

  if (!href) {
    return fallbackHref;
  }

  if (href.startsWith('/products/')) {
    return href.replace('/products/', '/productos/');
  }

  return href;
}

function resolveCatalogAssetUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  if (!trimmed.startsWith('/src/assets/images/')) {
    return trimmed;
  }

  const resolved = catalogAssetUrls[trimmed];
  if (resolved && resolved !== trimmed) {
    return resolved;
  }

  return `${trimmed}?url`;
}

function toProduct(data: Record<string, unknown>): Product {
  const id = String(data.id || '');
  const categoryId = String(data.categoryId || data.familia || '');
  const slug = String(data.slug || id);
  const image = resolveCatalogAssetUrl(data.image || data.imageUrl || data.imagen) || '';
  const hoverImage = resolveCatalogAssetUrl(data.hoverImage);
  const longDescription = String(
    data.technicalDescription || data.longDescription || data.descripcion || ''
  );

  return {
    id,
    slug,
    name: String(data.name || data.nombre || 'Producto sin nombre'),
    categoryId,
    brand: String(data.brand || data.marca || ''),
    shortDescription: String(data.shortDescription || data.descripcion || ''),
    longDescription,
    specs: (data.specs as Record<string, string>) || {},
    availability: (data.availability as Product['availability']) || undefined,
    requiresInstallation: Boolean(data.requiresInstallation || false),
    requiresMaintenance: Boolean(data.requiresMaintenance || false),
    image,
    imageUrl: image || undefined,
    hoverImage,
    code: (data.code as string) || (data.codigo as string) || undefined,
    familia: (data.family as string) || (data.familia as string) || undefined,
    subfamilia: (data.subfamily as string) || (data.subfamilia as string) || undefined,
    href: normalizeFrontendProductHref(data.href as string | undefined, slug, id),
    precio:
      typeof data.price === 'number'
        ? data.price
        : typeof data.precio === 'number'
          ? data.precio
          : undefined,
    stock: typeof data.stock === 'number' ? data.stock : undefined,
  };
}

export async function getCategories(): Promise<ProductCategory[]> {
  const categories = await httpRequest<Array<Record<string, unknown>>>('/api/categories', { method: 'GET' });

  return categories.map((category) => ({
    id: String(category.id || ''),
    name: String(category.name || ''),
    slug: String(category.slug || ''),
    description: String(category.description || category.name || ''),
    image: resolveCatalogAssetUrl(category.image),
    href: (category.href as string) || undefined,
  }));
}

export async function getProducts(filters?: ProductFilters): Promise<Product[]> {
  const params = new URLSearchParams();

  if (filters?.categoryId) {
    params.append('categoryId', filters.categoryId);
  }

  if (filters?.search) {
    params.append('search', filters.search);
  }

  const queryString = params.toString();
  const endpoint = `/api/products${queryString ? `?${queryString}` : ''}`;
  const response = await httpRequest<Array<Record<string, unknown>>>(endpoint, { method: 'GET' });

  return response.map((item) => toProduct(item));
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const product = await httpRequest<Record<string, unknown> | null>(`/api/products/slug/${slug}`, {
    method: 'GET',
  }).catch(() => null);

  if (!product) {
    return undefined;
  }

  return toProduct(product);
}
