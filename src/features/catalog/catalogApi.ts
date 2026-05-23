/**
 * catalogApi.ts
 * Fuente única de verdad: Firestore.
 * Sin fallback a REST backend para productos ni categorías.
 */

import { Product, ProductCategory, ProductFilters } from './types';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  limit,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';

// ─── Asset resolver (imágenes locales del bundle) ─────────────────────────────

const catalogAssetUrls = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function resolveCatalogAssetUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  // URL externa o ruta pública: devolver tal cual
  if (!trimmed.startsWith('/src/assets/images/')) return trimmed;

  // Imagen del bundle: resolver con Vite
  const resolved = catalogAssetUrls[trimmed];
  return resolved && resolved !== trimmed ? resolved : `${trimmed}?url`;
}

function normalizeFrontendHref(href: string | undefined, slug: string, id: string): string {
  if (!href) return `/productos/${slug || id}`;
  if (href.startsWith('/products/')) return href.replace('/products/', '/productos/');
  return href;
}

// ─── Mappers ──────────────────────────────────────────────────────────────────

function toProduct(data: Record<string, unknown>): Product {
  const id = String(data.id || '');
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
    categoryId: String(data.categoryId || data.familia || ''),
    brand: String(data.brand || data.marca || ''),
    shortDescription: String(data.shortDescription || data.descripcion || ''),
    longDescription,
    specs: (data.specs as Record<string, string>) || {},
    availability: (data.availability as Product['availability']) || undefined,
    requiresInstallation: Boolean(data.requiresInstallation ?? false),
    requiresMaintenance: Boolean(data.requiresMaintenance ?? false),
    image,
    imageUrl: image || undefined,
    hoverImage,
    code: (data.code as string) || (data.codigo as string) || undefined,
    familia: (data.family as string) || (data.familia as string) || undefined,
    subfamilia: (data.subfamily as string) || (data.subfamilia as string) || undefined,
    href: normalizeFrontendHref(data.href as string | undefined, slug, id),
    precio:
      typeof data.price === 'number'
        ? data.price
        : typeof data.precio === 'number'
          ? data.precio
          : undefined,
    stock: typeof data.stock === 'number' ? data.stock : undefined,
  };
}

function toCategory(id: string, data: Record<string, unknown>): ProductCategory {
  return {
    id,
    name: String(data.name || ''),
    slug: String(data.slug || id),
    description: String(data.description || data.name || ''),
    image: resolveCatalogAssetUrl(data.image),
    href: (data.href as string) || undefined,
  };
}

// ─── API pública ──────────────────────────────────────────────────────────────

/**
 * Obtiene todas las categorías desde Firestore.
 * Devuelve [] si no hay categorías o si ocurre un error.
 */
export async function getCategories(): Promise<ProductCategory[]> {
  try {
    const snapshot = await getDocs(collection(db, 'categories'));
    return snapshot.docs.map((d) => toCategory(d.id, d.data() as Record<string, unknown>));
  } catch (error) {
    console.error('[catalogApi] Error al obtener categorías de Firestore:', error);
    return [];
  }
}

/**
 * Obtiene productos desde Firestore.
 * - Filtro por categoryId: query nativa en Firestore.
 * - Filtro por search: filtrado local después de traer todos los productos.
 * - Ordenamiento: por nombre en memoria (evita requerir índices compuestos).
 */
export async function getProducts(filters?: ProductFilters): Promise<Product[]> {
  try {
    const productsRef = collection(db, 'products');

    // IMPORTANTE: No usamos orderBy en la query para evitar requerir índices
    // compuestos de Firestore. El ordenamiento se hace en memoria.
    const q = filters?.categoryId
      ? query(productsRef, where('categoryId', '==', filters.categoryId))
      : query(productsRef);

    const snapshot = await getDocs(q);
    let products = snapshot.docs.map((d) =>
      toProduct({ id: d.id, ...(d.data() as Record<string, unknown>) })
    );

    // Filtrado local por término de búsqueda
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.brand?.toLowerCase().includes(search) ||
          p.shortDescription?.toLowerCase().includes(search)
      );
    }

    // Ordenar por nombre en memoria
    products.sort((a, b) => a.name.localeCompare(b.name, 'es'));

    return products;
  } catch (error) {
    console.error('[catalogApi] Error al obtener productos de Firestore:', error);
    return [];
  }
}

/**
 * Obtiene un producto por su slug desde Firestore.
 * Primero busca por campo 'slug', luego por Document ID como fallback.
 */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!slug) return undefined;

  try {
    // 1. Query por campo 'slug' (los productos del seed tienen este campo)
    const q = query(
      collection(db, 'products'),
      where('slug', '==', slug),
      limit(1)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const d = snapshot.docs[0];
      return toProduct({ id: d.id, ...(d.data() as Record<string, unknown>) });
    }

    // 2. Fallback: buscar por Document ID (por si el ID es igual al slug)
    const docSnap = await getDoc(doc(db, 'products', slug));
    if (docSnap.exists()) {
      return toProduct({ id: docSnap.id, ...(docSnap.data() as Record<string, unknown>) });
    }

    console.warn(`[catalogApi] Producto no encontrado para slug: "${slug}"`);
    return undefined;
  } catch (error) {
    console.error('[catalogApi] Error al obtener producto por slug:', error);
    return undefined;
  }
}
