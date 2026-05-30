const connectedOrigins = new Set<string>();

export const productImageFallback =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480"><rect width="640" height="480" fill="%23f5f7fa"/><rect x="40" y="44" width="560" height="392" rx="28" fill="%23ffffff" stroke="%23d6dde8" stroke-width="2"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="30" fill="%230b1f33">PROTONLAB</text></svg>';

export function resolveProductImageUrl(imageUrl?: string, image?: string): string {
  const candidate = imageUrl?.trim() || image?.trim();
  return candidate || productImageFallback;
}

export function preconnectImageOrigins(imageUrls: Array<string | undefined>): void {
  if (typeof document === 'undefined') return;

  imageUrls.forEach((imageUrl) => {
    if (!imageUrl || imageUrl.startsWith('data:') || imageUrl.startsWith('/')) return;

    let origin = '';
    try {
      origin = new URL(imageUrl).origin;
    } catch {
      return;
    }

    if (!origin || connectedOrigins.has(origin)) return;
    connectedOrigins.add(origin);

    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = origin;
    document.head.appendChild(dnsPrefetch);

    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = origin;
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);
  });
}
