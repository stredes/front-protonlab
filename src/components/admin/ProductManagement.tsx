import React, { useState, useEffect, useCallback } from 'react';
import './ProductManagement.css';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Loader2,
  X,
  Upload,
  Image as ImageIcon,
  RefreshCw,
  Package,
  AlertTriangle,
} from 'lucide-react';
import {
  fetchAllProducts,
  fetchAllCategories,
  createProduct,
  updateProduct,
  deleteProduct,
  type CreateProductInput,
} from '../../features/catalog/productService';
import type { Product, ProductCategory } from '../../features/catalog/types';
import { toast } from '../ui/Toast';

// ─────────────────────────────────────────────
// Tipos internos del formulario
// ─────────────────────────────────────────────

interface ProductFormData {
  name: string;
  categoryId: string;
  brand: string;
  shortDescription: string;
  longDescription: string;
  availability: 'disponible' | 'bajo_pedido' | 'sujeto_stock';
  requiresInstallation: boolean;
  requiresMaintenance: boolean;
  price: number;
  stock: number;
  isActive: boolean;
}

const EMPTY_FORM: ProductFormData = {
  name: '',
  categoryId: '',
  brand: '',
  shortDescription: '',
  longDescription: '',
  availability: 'disponible',
  requiresInstallation: false,
  requiresMaintenance: false,
  price: 0,
  stock: 0,
  isActive: true,
};

function productToForm(p: Product): ProductFormData {
  return {
    name: p.name,
    categoryId: p.categoryId,
    brand: p.brand || '',
    shortDescription: p.shortDescription || '',
    longDescription: p.longDescription || '',
    availability: p.availability || 'disponible',
    requiresInstallation: p.requiresInstallation ?? false,
    requiresMaintenance: p.requiresMaintenance ?? false,
    price: p.price ?? p.precio ?? 0,
    stock: p.stock ?? 0,
    isActive: p.isActive !== false,
  };
}

// ─────────────────────────────────────────────
// Badges de disponibilidad
// ─────────────────────────────────────────────

const AVAILABILITY_LABELS: Record<string, string> = {
  disponible: 'Disponible',
  bajo_pedido: 'Bajo Pedido',
  sujeto_stock: 'Sujeto a Stock',
};

const AVAILABILITY_COLORS: Record<string, string> = {
  disponible: 'bg-green-100 text-green-800',
  bajo_pedido: 'bg-yellow-100 text-yellow-800',
  sujeto_stock: 'bg-blue-100 text-blue-800',
};

// ─────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────

export function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Confirm delete state
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form state
  const [formData, setFormData] = useState<ProductFormData>(EMPTY_FORM);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // ───────── Data loading ─────────

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [prods, cats] = await Promise.all([fetchAllProducts(), fetchAllCategories()]);
      setProducts(prods);
      setCategories(cats);
    } catch (error) {
      console.error('Error loading products/categories:', error);
      toast.error('No se pudieron cargar los datos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // ───────── Modal helpers ─────────

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormData(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData(productToForm(product));
    setImageFile(null);
    setImagePreview(product.image || product.imageUrl || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
  };

  // ───────── Image handling ─────────

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  // ───────── Submit ─────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('El nombre del producto es requerido');
      return;
    }

    setIsSubmitting(true);
    try {
      if (editingProduct) {
        // Update existing product
        await updateProduct(editingProduct.id, {
          ...formData,
          imageFile,
        });
        toast.success('Producto actualizado con éxito');
      } else {
        // Create new product
        const input: CreateProductInput = {
          ...formData,
          imageFile,
        };
        await createProduct(input);
        toast.success('Producto creado con éxito');
      }

      closeModal();
      await loadData();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error(editingProduct ? 'Error al actualizar el producto' : 'Error al crear el producto');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ───────── Delete ─────────

  const handleDeleteConfirm = async () => {
    if (!deletingProduct) return;
    setIsDeleting(true);
    try {
      await deleteProduct(deletingProduct.id);
      toast.success(`"${deletingProduct.name}" eliminado`);
      setDeletingProduct(null);
      await loadData();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error al eliminar el producto');
    } finally {
      setIsDeleting(false);
    }
  };

  // ───────── Filter ─────────

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.brand?.toLowerCase().includes(term) ||
      p.categoryId?.toLowerCase().includes(term) ||
      p.shortDescription?.toLowerCase().includes(term)
    );
  });

  // ───────── Category name lookup ─────────

  const getCategoryName = (categoryId: string) => {
    const cat = categories.find((c) => c.id === categoryId || c.slug === categoryId);
    return cat?.name || categoryId;
  };

  // ─────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────

  return (
    <div className="product-management">
      {/* Header / Toolbar */}
      <div className="pm-toolbar">
        <div className="pm-search">
          <Search className="pm-search__icon" />
          <input
            id="product-search"
            type="text"
            placeholder="Buscar por nombre, marca o categoría..."
            className="pm-search__input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="pm-toolbar__actions">
          <button id="refresh-products-btn" className="pm-btn pm-btn--ghost" onClick={loadData} title="Recargar">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button id="add-product-btn" className="pm-btn pm-btn--primary" onClick={openCreateModal}>
            <Plus className="h-4 w-4" />
            Agregar Producto
          </button>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="pm-loader">
          <Loader2 className="pm-loader__spinner" />
          <span>Cargando productos...</span>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="pm-empty">
          <Package className="pm-empty__icon" />
          <p className="pm-empty__title">
            {searchTerm ? 'Sin resultados para tu búsqueda' : 'No hay productos en Firestore'}
          </p>
          <p className="pm-empty__hint">
            {searchTerm ? 'Prueba con otro término.' : 'Haz clic en "Agregar Producto" para comenzar.'}
          </p>
        </div>
      ) : (
        <div className="pm-table-wrapper">
          <table className="pm-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Disponibilidad</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  {/* Producto */}
                  <td>
                    <div className="pm-product-cell">
                      <div className="pm-product-thumb">
                        {product.image || product.imageUrl || (product.images && product.images.length > 0) ? (
                          <img
                            src={product.images?.[0] || product.image || product.imageUrl}
                            alt={product.name}
                            className="pm-product-thumb__img"
                          />
                        ) : (
                          <ImageIcon className="pm-product-thumb__placeholder" />
                        )}
                      </div>
                      <div>
                        <div className="pm-product-name">{product.name}</div>
                        <div className="pm-product-slug">{product.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="pm-td-muted">{getCategoryName(product.categoryId)}</td>
                  <td className="pm-td-muted">{product.brand || '—'}</td>
                  <td className="pm-td-price">
                    {product.price || product.precio
                      ? `$${(product.price ?? product.precio ?? 0).toLocaleString('es-CL')}`
                      : '—'}
                  </td>
                  <td className="pm-td-muted">{product.stock ?? '—'}</td>
                  <td>
                    <span
                      className={`pm-badge ${
                        AVAILABILITY_COLORS[product.availability || ''] || 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {AVAILABILITY_LABELS[product.availability || ''] || product.availability || '—'}
                    </span>
                  </td>
                  <td>
                    <span className={`pm-badge ${product.isActive !== false ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.isActive !== false ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td>
                    <div className="pm-actions">
                      <button
                        id={`edit-product-${product.id}`}
                        className="pm-action-btn pm-action-btn--edit"
                        onClick={() => openEditModal(product)}
                        title="Editar producto"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        id={`delete-product-${product.id}`}
                        className="pm-action-btn pm-action-btn--delete"
                        onClick={() => setDeletingProduct(product)}
                        title="Eliminar producto"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ────── Modal Crear / Editar ────── */}
      {isModalOpen && (
        <div className="pm-modal-overlay" role="dialog" aria-modal="true" aria-label={editingProduct ? 'Editar producto' : 'Agregar producto'}>
          <div className="pm-modal">
            <div className="pm-modal__header">
              <h3 className="pm-modal__title">
                {editingProduct ? `Editar: ${editingProduct.name}` : 'Agregar Nuevo Producto'}
              </h3>
              <button id="close-product-modal" className="pm-modal__close" onClick={closeModal} aria-label="Cerrar">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form id="product-form" onSubmit={handleSubmit} className="pm-modal__body">
              <div className="pm-form-grid">
                {/* Nombre */}
                <div className="pm-form-field pm-form-field--full">
                  <label htmlFor="field-name" className="pm-label">
                    Nombre del Producto <span className="pm-required">*</span>
                  </label>
                  <input
                    id="field-name"
                    required
                    type="text"
                    className="pm-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Categoría */}
                <div className="pm-form-field">
                  <label htmlFor="field-category" className="pm-label">
                    Categoría <span className="pm-required">*</span>
                  </label>
                  {categories.length > 0 ? (
                    <select
                      id="field-category"
                      required
                      className="pm-input"
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    >
                      <option value="">Seleccionar categoría...</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id="field-category"
                      required
                      type="text"
                      className="pm-input"
                      placeholder="ID de la categoría"
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    />
                  )}
                </div>

                {/* Marca */}
                <div className="pm-form-field">
                  <label htmlFor="field-brand" className="pm-label">Marca</label>
                  <input
                    id="field-brand"
                    type="text"
                    className="pm-input"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  />
                </div>

                {/* Precio */}
                <div className="pm-form-field">
                  <label htmlFor="field-price" className="pm-label">Precio (USD)</label>
                  <input
                    id="field-price"
                    type="number"
                    min={0}
                    className="pm-input"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  />
                </div>

                {/* Stock */}
                <div className="pm-form-field">
                  <label htmlFor="field-stock" className="pm-label">Stock</label>
                  <input
                    id="field-stock"
                    type="number"
                    min={0}
                    className="pm-input"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                  />
                </div>

                {/* Disponibilidad */}
                <div className="pm-form-field">
                  <label htmlFor="field-availability" className="pm-label">Disponibilidad</label>
                  <select
                    id="field-availability"
                    className="pm-input"
                    value={formData.availability}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        availability: e.target.value as ProductFormData['availability'],
                      })
                    }
                  >
                    <option value="disponible">Disponible</option>
                    <option value="bajo_pedido">Bajo Pedido</option>
                    <option value="sujeto_stock">Sujeto a Stock</option>
                  </select>
                </div>

                {/* Checkboxes */}
                <div className="pm-form-field pm-form-field--full pm-form-checks">
                  <label className="pm-check">
                    <input
                      id="field-requires-installation"
                      type="checkbox"
                      checked={formData.requiresInstallation}
                      onChange={(e) => setFormData({ ...formData, requiresInstallation: e.target.checked })}
                    />
                    Requiere instalación
                  </label>
                  <label className="pm-check">
                    <input
                      id="field-requires-maintenance"
                      type="checkbox"
                      checked={formData.requiresMaintenance}
                      onChange={(e) => setFormData({ ...formData, requiresMaintenance: e.target.checked })}
                    />
                    Requiere mantenimiento
                  </label>
                  <label className="pm-check">
                    <input
                      id="field-is-active"
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    />
                    Producto activo
                  </label>
                </div>

                {/* Imagen */}
                <div className="pm-form-field pm-form-field--full">
                  <label className="pm-label">Imagen del Producto</label>
                  <div className="pm-image-upload">
                    {imagePreview ? (
                      <div className="pm-image-preview">
                        <img src={imagePreview} alt="Preview" className="pm-image-preview__img" />
                        <button
                          type="button"
                          className="pm-image-preview__remove"
                          onClick={() => { setImageFile(null); setImagePreview(null); }}
                          aria-label="Quitar imagen"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="field-image" className="pm-image-dropzone">
                        <Upload className="h-6 w-6 text-gray-400" />
                        <span className="pm-image-dropzone__text">
                          {imageFile ? imageFile.name : 'Haz clic para subir una imagen'}
                        </span>
                        <span className="pm-image-dropzone__hint">PNG, JPG, WebP hasta 10MB</span>
                        <input
                          id="field-image"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* Descripción corta */}
                <div className="pm-form-field pm-form-field--full">
                  <label htmlFor="field-short-desc" className="pm-label">Descripción Corta</label>
                  <textarea
                    id="field-short-desc"
                    className="pm-input pm-textarea pm-textarea--sm"
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    rows={2}
                  />
                </div>

                {/* Descripción técnica */}
                <div className="pm-form-field pm-form-field--full">
                  <label htmlFor="field-long-desc" className="pm-label">Descripción Técnica</label>
                  <textarea
                    id="field-long-desc"
                    className="pm-input pm-textarea"
                    value={formData.longDescription}
                    onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="pm-modal__footer">
                <button type="button" id="cancel-product-modal" className="pm-btn pm-btn--ghost" onClick={closeModal}>
                  Cancelar
                </button>
                <button
                  type="submit"
                  id="submit-product-form"
                  disabled={isSubmitting}
                  className="pm-btn pm-btn--primary"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isSubmitting ? 'Guardando...' : editingProduct ? 'Guardar Cambios' : 'Crear Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ────── Modal Confirmar Eliminar ────── */}
      {deletingProduct && (
        <div className="pm-modal-overlay" role="dialog" aria-modal="true" aria-label="Confirmar eliminación">
          <div className="pm-modal pm-modal--confirm">
            <div className="pm-modal__header pm-modal__header--danger">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h3 className="pm-modal__title">Confirmar eliminación</h3>
            </div>
            <div className="pm-modal__body pm-confirm-body">
              <p>
                ¿Estás seguro de que querés eliminar <strong>"{deletingProduct.name}"</strong>?
              </p>
              <p className="pm-confirm-hint">Esta acción no se puede deshacer.</p>
            </div>
            <div className="pm-modal__footer">
              <button
                id="cancel-delete-product"
                className="pm-btn pm-btn--ghost"
                onClick={() => setDeletingProduct(null)}
                disabled={isDeleting}
              >
                Cancelar
              </button>
              <button
                id="confirm-delete-product"
                className="pm-btn pm-btn--danger"
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
              >
                {isDeleting && <Loader2 className="h-4 w-4 animate-spin" />}
                {isDeleting ? 'Eliminando...' : 'Sí, eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
