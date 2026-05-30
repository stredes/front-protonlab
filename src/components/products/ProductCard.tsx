import { memo, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../features/catalog/types';
import Button from '../ui/Button';
import GlareHover from '../ui/GlareHover';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../features/cart/cartContext';
import { ROUTES } from '../../config/routes';
import { WishlistButton } from '../ui/WishlistButton';
import ProductImage from './ProductImage';
import { resolveProductImageUrl } from '../../features/catalog/imagePerformance';
import './ProductCard.css';

type ProductCardProps = {
  product: Product;
  categoryName?: string;
  onQuote: (product: Product) => void;
  priorityImage?: boolean;
};

const ProductCard = memo(function ProductCard({
  product,
  categoryName: _categoryName,
  onQuote,
  priorityImage = false,
}: ProductCardProps) {
  const { addItem } = useCart();
  
  const detailPath = useMemo(
    () => ROUTES.productDetail.replace(':slug', product.slug || product.id),
    [product.id, product.slug]
  );
  
  const imageSrc = useMemo(() => {
    return resolveProductImageUrl(product.imageUrl, product.image);
  }, [product.image, product.imageUrl]);

  const productCode = useMemo(() => product.code?.trim() || 'Sin código', [product.code]);
  const productPrice = useMemo(() => product.price ?? product.precio, [product.price, product.precio]);
  const stockLabel = useMemo(() => {
    if (typeof product.stock !== 'number') {
      return 'Stock no informado';
    }
    return `${product.stock} en stock`;
  }, [product.stock]);

  const handleAddToCart = useCallback(() => {
    addItem(product);
  }, [addItem, product]);

  const handleQuote = useCallback(() => {
    onQuote(product);
  }, [onQuote, product]);

  return (
    <GlareHover
      className="product-card-wrapper"
      width="100%"
      height="auto"
      background="transparent"
      borderRadius="var(--radius-lg)"
      borderColor="transparent"
      glareColor="#ffffff"
      glareOpacity={0.15}
      glareAngle={-30}
      glareSize={200}
      transitionDuration={600}
    >
      <div className="product-card">
        {/* Imagen del producto */}
        <div className="product-card__image">
          <ProductImage
            imageUrl={product.imageUrl}
            image={product.image}
            alt={product.name}
            priority={priorityImage}
            className="product-card__img"
          />
          <div className="product-card__badge">{product.brand || 'Protonlab'}</div>
          <WishlistButton
            productId={product.id}
            productName={product.name}
            productPrice={productPrice}
            productImage={imageSrc}
            productSlug={product.slug}
            productBrand={product.brand}
            productCategory={product.categoryId}
            size="md"
            className="product-card__wishlist"
          />
          <div className="product-card__summary">
            <h3 className="product-card__title" title={product.name}>
              {product.name}
            </h3>
            <p className="product-card__code" title={productCode}>
              Código: {productCode}
            </p>
            <p className="product-card__stock">{stockLabel}</p>
          </div>
        </div>

        {/* Acciones */}
        <div className="product-card__actions">
          <Link to={detailPath} className="product-card__link-full">
            <Button variant="primary" size="md" className="product-card__btn-detail">
              Ver detalle
            </Button>
          </Link>
          <Button variant="secondary" size="md" onClick={handleQuote}>
            Cotizar
          </Button>
          <button 
            type="button" 
            onClick={handleAddToCart}
            className="product-card__btn-cart"
            aria-label="Agregar al carrito"
            title="Agregar al carrito"
          >
            <FiShoppingCart size={18} aria-hidden="true" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </GlareHover>
  );
});

export default ProductCard;
