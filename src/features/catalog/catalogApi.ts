import { httpRequest } from '../../lib/httpClient';
import { Product, ProductCategory, ProductFilters } from './types';

function toProduct(data: Record<string, unknown>): Product {
  const id = String(data.id || '');
  const categoryId = String(data.categoryId || data.familia || '');
  const slug = String(data.slug || id);
  const image =
    (data.image as string) ||
    (data.imageUrl as string) ||
    (data.imagen as string) ||
    '';
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
    hoverImage: (data.hoverImage as string) || undefined,
    code: (data.code as string) || (data.codigo as string) || undefined,
    familia: (data.family as string) || (data.familia as string) || undefined,
    subfamilia: (data.subfamily as string) || (data.subfamilia as string) || undefined,
    href: (data.href as string) || `/productos/${slug}`,
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
    image: (category.image as string) || undefined,
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
