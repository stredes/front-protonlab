export interface ProductCategory {
  id: string;
  name: string;
  slug?: string;
  description: string;
  image?: string;
  href?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  brand: string;
  shortDescription: string;
  longDescription: string;
  specs: Record<string, string>;
  technicalSpecs?: Record<string, string>;
  availability?: 'disponible' | 'bajo_pedido' | 'sujeto_stock';
  requiresInstallation: boolean;
  requiresMaintenance?: boolean;
  image?: string;
  imageUrl?: string;
  images?: string[];
  hoverImage?: string;
  code?: string;
  familia?: string;
  subfamilia?: string;
  href?: string;
  precio?: number;
  price?: number;
  stock?: number;
  isActive?: boolean;
  createdAt?: string | any;
}

export interface ProductFilters {
  categoryId?: string;
  search?: string;
}
