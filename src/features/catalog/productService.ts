/**
 * productService.ts
 * Servicio centralizado para CRUD de Productos y Categorías en Firestore.
 */

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import type { Product, ProductCategory } from './types';

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function fromFirestore(id: string, data: Record<string, unknown>): Product {
  const createdAt = data.createdAt instanceof Timestamp
    ? data.createdAt.toDate().toISOString()
    : (data.createdAt as string | undefined);

  return {
    id,
    slug: String(data.slug || id),
    name: String(data.name || ''),
    categoryId: String(data.categoryId || ''),
    brand: String(data.brand || ''),
    shortDescription: String(data.shortDescription || ''),
    longDescription: String(data.longDescription || data.technicalDescription || ''),
    specs: (data.specs as Record<string, string>) || {},
    technicalSpecs: (data.technicalSpecs as Record<string, string>) || {},
    availability: (data.availability as Product['availability']) || undefined,
    requiresInstallation: Boolean(data.requiresInstallation ?? false),
    requiresMaintenance: Boolean(data.requiresMaintenance ?? false),
    image: (data.image as string) || undefined,
    imageUrl: (data.imageUrl as string) || (data.image as string) || undefined,
    images: (data.images as string[]) || [],
    hoverImage: (data.hoverImage as string) || undefined,
    code: (data.code as string) || undefined,
    familia: (data.familia as string) || (data.family as string) || undefined,
    subfamilia: (data.subfamilia as string) || (data.subfamily as string) || undefined,
    href: (data.href as string) || `/productos/${data.slug || id}`,
    precio: typeof data.precio === 'number' ? data.precio : undefined,
    price: typeof data.price === 'number' ? data.price : undefined,
    stock: typeof data.stock === 'number' ? data.stock : undefined,
    isActive: data.isActive !== false,
    createdAt,
  };
}

function categoryFromFirestore(id: string, data: Record<string, unknown>): ProductCategory {
  return {
    id,
    name: String(data.name || ''),
    slug: String(data.slug || id),
    description: String(data.description || data.name || ''),
    image: (data.image as string) || undefined,
    href: (data.href as string) || `/productos?categoryId=${id}`,
  };
}

// ─────────────────────────────────────────────
// Imágenes en Firebase Storage
// ─────────────────────────────────────────────

export async function uploadProductImage(file: File): Promise<string> {
  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;
  const storageRef = ref(storage, `products/${fileName}`);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
}

export async function deleteProductImage(imageUrl: string): Promise<void> {
  try {
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef);
  } catch {
    // Si la imagen ya no existe o es externa, ignoramos
  }
}

// ─────────────────────────────────────────────
// CRUD de Productos
// ─────────────────────────────────────────────

export async function fetchAllProducts(): Promise<Product[]> {
  // Sin orderBy en la query — evita requerir índice compuesto en Firestore
  // El ordenamiento se hace en memoria
  const snapshot = await getDocs(collection(db, 'products'));
  const products = snapshot.docs.map((d) =>
    fromFirestore(d.id, d.data() as Record<string, unknown>)
  );
  return products.sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const docRef = doc(db, 'products', id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) return null;
  return fromFirestore(snap.id, snap.data() as Record<string, unknown>);
}

export interface CreateProductInput {
  name: string;
  categoryId: string;
  brand: string;
  shortDescription: string;
  longDescription: string;
  availability: Product['availability'];
  requiresInstallation: boolean;
  requiresMaintenance: boolean;
  price?: number;
  stock?: number;
  isActive: boolean;
  imageFile?: File | null;
}

export async function createProduct(input: CreateProductInput): Promise<Product> {
  let imageUrl = '';
  if (input.imageFile) {
    imageUrl = await uploadProductImage(input.imageFile);
  }

  const slug = slugify(input.name);
  const data = {
    name: input.name,
    slug,
    categoryId: input.categoryId,
    brand: input.brand,
    shortDescription: input.shortDescription,
    longDescription: input.longDescription,
    availability: input.availability || 'disponible',
    requiresInstallation: input.requiresInstallation,
    requiresMaintenance: input.requiresMaintenance,
    price: input.price ?? 0,
    stock: input.stock ?? 0,
    isActive: input.isActive,
    image: imageUrl || '',
    imageUrl: imageUrl || '',
    images: imageUrl ? [imageUrl] : [],
    href: `/productos/${slug}`,
    specs: {},
    technicalSpecs: {},
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'products'), data);
  return fromFirestore(docRef.id, data);
}

export interface UpdateProductInput {
  name?: string;
  categoryId?: string;
  brand?: string;
  shortDescription?: string;
  longDescription?: string;
  availability?: Product['availability'];
  requiresInstallation?: boolean;
  requiresMaintenance?: boolean;
  price?: number;
  stock?: number;
  isActive?: boolean;
  imageFile?: File | null;
}

export async function updateProduct(id: string, input: UpdateProductInput): Promise<void> {
  const docRef = doc(db, 'products', id);

  const updates: Record<string, unknown> = {};

  if (input.name !== undefined) {
    updates.name = input.name;
    updates.slug = slugify(input.name);
    updates.href = `/productos/${slugify(input.name)}`;
  }
  if (input.categoryId !== undefined) updates.categoryId = input.categoryId;
  if (input.brand !== undefined) updates.brand = input.brand;
  if (input.shortDescription !== undefined) updates.shortDescription = input.shortDescription;
  if (input.longDescription !== undefined) updates.longDescription = input.longDescription;
  if (input.availability !== undefined) updates.availability = input.availability;
  if (input.requiresInstallation !== undefined) updates.requiresInstallation = input.requiresInstallation;
  if (input.requiresMaintenance !== undefined) updates.requiresMaintenance = input.requiresMaintenance;
  if (input.price !== undefined) updates.price = input.price;
  if (input.stock !== undefined) updates.stock = input.stock;
  if (input.isActive !== undefined) updates.isActive = input.isActive;

  if (input.imageFile) {
    const imageUrl = await uploadProductImage(input.imageFile);
    updates.image = imageUrl;
    updates.imageUrl = imageUrl;
    updates.images = [imageUrl];
  }

  await updateDoc(docRef, updates);
}

export async function deleteProduct(id: string): Promise<void> {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
}

// ─────────────────────────────────────────────
// CRUD de Categorías
// ─────────────────────────────────────────────

export async function fetchAllCategories(): Promise<ProductCategory[]> {
  // Sin orderBy — ordenamos en memoria para evitar requerir índice
  const snapshot = await getDocs(collection(db, 'categories'));
  const cats = snapshot.docs.map((d) =>
    categoryFromFirestore(d.id, d.data() as Record<string, unknown>)
  );
  return cats.sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

export interface CreateCategoryInput {
  name: string;
  description: string;
  imageFile?: File | null;
}

export async function createCategory(input: CreateCategoryInput): Promise<ProductCategory> {
  let imageUrl = '';
  if (input.imageFile) {
    const ext = input.imageFile.name.split('.').pop() || 'jpg';
    const fileName = `${Date.now()}-cat.${ext}`;
    const storageRef = ref(storage, `categories/${fileName}`);
    const snapshot = await uploadBytes(storageRef, input.imageFile);
    imageUrl = await getDownloadURL(snapshot.ref);
  }

  const slug = slugify(input.name);
  const data = {
    name: input.name,
    slug,
    description: input.description,
    image: imageUrl || '',
    href: `/productos?categoryId=${slug}`,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'categories'), data);
  return categoryFromFirestore(docRef.id, data);
}

export async function updateCategory(id: string, input: Partial<CreateCategoryInput>): Promise<void> {
  const docRef = doc(db, 'categories', id);
  const updates: Record<string, unknown> = {};

  if (input.name !== undefined) {
    updates.name = input.name;
    updates.slug = slugify(input.name);
    updates.href = `/productos?categoryId=${slugify(input.name)}`;
  }
  if (input.description !== undefined) updates.description = input.description;
  if (input.imageFile) {
    const ext = input.imageFile.name.split('.').pop() || 'jpg';
    const fileName = `${Date.now()}-cat.${ext}`;
    const storageRef = ref(storage, `categories/${fileName}`);
    const snapshot = await uploadBytes(storageRef, input.imageFile);
    updates.image = await getDownloadURL(snapshot.ref);
  }

  await updateDoc(docRef, updates);
}

export async function deleteCategory(id: string): Promise<void> {
  const docRef = doc(db, 'categories', id);
  await deleteDoc(docRef);
}
