import { memo, useMemo, useState } from 'react';
import {
  productImageFallback,
  resolveProductImageUrl,
} from '../../features/catalog/imagePerformance';

type ProductImageProps = {
  imageUrl?: string;
  image?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const ProductImage = memo(function ProductImage({
  imageUrl,
  image,
  alt,
  className,
  priority = false,
  sizes = '(min-width: 1100px) 25vw, (min-width: 720px) 33vw, 100vw',
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const src = useMemo(
    () => (failed ? productImageFallback : resolveProductImageUrl(imageUrl, image)),
    [failed, image, imageUrl]
  );

  return (
    <img
      src={src}
      alt={alt}
      width="640"
      height="480"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={priority ? 'high' : 'low'}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
});

export default ProductImage;
