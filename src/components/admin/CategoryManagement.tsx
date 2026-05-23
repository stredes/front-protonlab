import React, { useState, useEffect, useCallback } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Loader2,
  X,
  Upload,
  Tag,
  RefreshCw,
  AlertTriangle,
} from 'lucide-react';
import {
  fetchAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  type CreateCategoryInput,
} from '../../features/catalog/productService';
import type { ProductCategory } from '../../features/catalog/types';
import { toast } from '../ui/Toast';

interface CategoryFormData {
  name: string;
  description: string;
}

const EMPTY_FORM: CategoryFormData = {
  name: '',
  description: '',
};

export function CategoryManagement() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ProductCategory | null>(null);

  const [deletingCategory, setDeletingCategory] = useState<ProductCategory | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [formData, setFormData] = useState<CategoryFormData>(EMPTY_FORM);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const loadCategories = useCallback(async () => {
    setLoading(true);
    try {
      const cats = await fetchAllCategories();
      setCategories(cats);
    } catch (error) {
      console.error('Error loading categories:', error);
      toast.error('No se pudieron cargar las categorías');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const openCreateModal = () => {
    setEditingCategory(null);
    setFormData(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
    setIsModalOpen(true);
  };

  const openEditModal = (cat: ProductCategory) => {
    setEditingCategory(cat);
    setFormData({ name: cat.name, description: cat.description });
    setImageFile(null);
    setImagePreview(cat.image || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error('El nombre de la categoría es requerido');
      return;
    }

    setIsSubmitting(true);
    try {
      const input: CreateCategoryInput = {
        name: formData.name,
        description: formData.description,
        imageFile,
      };

      if (editingCategory) {
        await updateCategory(editingCategory.id, input);
        toast.success('Categoría actualizada');
      } else {
        await createCategory(input);
        toast.success('Categoría creada');
      }

      closeModal();
      await loadCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      toast.error('Error al guardar la categoría');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deletingCategory) return;
    setIsDeleting(true);
    try {
      await deleteCategory(deletingCategory.id);
      toast.success(`"${deletingCategory.name}" eliminada`);
      setDeletingCategory(null);
      await loadCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Error al eliminar la categoría');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="product-management">
      {/* Toolbar */}
      <div className="pm-toolbar">
        <h3 className="pm-toolbar__title">
          <Tag className="h-5 w-5" />
          Categorías del Catálogo
        </h3>
        <div className="pm-toolbar__actions">
          <button id="refresh-categories-btn" className="pm-btn pm-btn--ghost" onClick={loadCategories} title="Recargar">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button id="add-category-btn" className="pm-btn pm-btn--primary" onClick={openCreateModal}>
            <Plus className="h-4 w-4" />
            Nueva Categoría
          </button>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="pm-loader">
          <Loader2 className="pm-loader__spinner" />
          <span>Cargando categorías...</span>
        </div>
      ) : categories.length === 0 ? (
        <div className="pm-empty">
          <Tag className="pm-empty__icon" />
          <p className="pm-empty__title">No hay categorías en Firestore</p>
          <p className="pm-empty__hint">Haz clic en "Nueva Categoría" para comenzar.</p>
        </div>
      ) : (
        <div className="cat-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="cat-card">
              <div className="cat-card__image-wrap">
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} className="cat-card__image" />
                ) : (
                  <div className="cat-card__image-placeholder">
                    <Tag className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
              <div className="cat-card__body">
                <h4 className="cat-card__name">{cat.name}</h4>
                <p className="cat-card__slug">{cat.slug}</p>
                {cat.description && (
                  <p className="cat-card__desc">{cat.description}</p>
                )}
              </div>
              <div className="cat-card__actions">
                <button
                  id={`edit-cat-${cat.id}`}
                  className="pm-action-btn pm-action-btn--edit"
                  onClick={() => openEditModal(cat)}
                  title="Editar categoría"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  id={`delete-cat-${cat.id}`}
                  className="pm-action-btn pm-action-btn--delete"
                  onClick={() => setDeletingCategory(cat)}
                  title="Eliminar categoría"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Crear/Editar */}
      {isModalOpen && (
        <div className="pm-modal-overlay" role="dialog" aria-modal="true">
          <div className="pm-modal">
            <div className="pm-modal__header">
              <h3 className="pm-modal__title">
                {editingCategory ? `Editar: ${editingCategory.name}` : 'Nueva Categoría'}
              </h3>
              <button id="close-category-modal" className="pm-modal__close" onClick={closeModal}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <form id="category-form" onSubmit={handleSubmit} className="pm-modal__body">
              <div className="pm-form-grid">
                <div className="pm-form-field pm-form-field--full">
                  <label htmlFor="cat-field-name" className="pm-label">
                    Nombre <span className="pm-required">*</span>
                  </label>
                  <input
                    id="cat-field-name"
                    required
                    type="text"
                    className="pm-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="pm-form-field pm-form-field--full">
                  <label htmlFor="cat-field-desc" className="pm-label">Descripción</label>
                  <textarea
                    id="cat-field-desc"
                    className="pm-input pm-textarea pm-textarea--sm"
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="pm-form-field pm-form-field--full">
                  <label className="pm-label">Imagen</label>
                  <div className="pm-image-upload">
                    {imagePreview ? (
                      <div className="pm-image-preview">
                        <img src={imagePreview} alt="Preview" className="pm-image-preview__img" />
                        <button
                          type="button"
                          className="pm-image-preview__remove"
                          onClick={() => { setImageFile(null); setImagePreview(null); }}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="cat-field-image" className="pm-image-dropzone">
                        <Upload className="h-6 w-6 text-gray-400" />
                        <span className="pm-image-dropzone__text">
                          {imageFile ? imageFile.name : 'Subir imagen de categoría'}
                        </span>
                        <input
                          id="cat-field-image"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              <div className="pm-modal__footer">
                <button type="button" id="cancel-category-modal" className="pm-btn pm-btn--ghost" onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" id="submit-category-form" disabled={isSubmitting} className="pm-btn pm-btn--primary">
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isSubmitting ? 'Guardando...' : editingCategory ? 'Guardar Cambios' : 'Crear Categoría'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Confirmar Eliminar */}
      {deletingCategory && (
        <div className="pm-modal-overlay" role="dialog" aria-modal="true">
          <div className="pm-modal pm-modal--confirm">
            <div className="pm-modal__header pm-modal__header--danger">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h3 className="pm-modal__title">Confirmar eliminación</h3>
            </div>
            <div className="pm-modal__body pm-confirm-body">
              <p>
                ¿Eliminar la categoría <strong>"{deletingCategory.name}"</strong>?
              </p>
              <p className="pm-confirm-hint">Los productos asociados no se eliminarán, pero quedarán sin categoría.</p>
            </div>
            <div className="pm-modal__footer">
              <button
                id="cancel-delete-category"
                className="pm-btn pm-btn--ghost"
                onClick={() => setDeletingCategory(null)}
                disabled={isDeleting}
              >
                Cancelar
              </button>
              <button
                id="confirm-delete-category"
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
