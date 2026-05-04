// Preload critical images for better LCP (Largest Contentful Paint)
export function preloadPortfolioImages() {
  if (typeof document === 'undefined') return;

  const images = [
    '/portfolio/divahome.jpg',
    '/portfolio/wrapking.jpg',
    '/portfolio/aromaflorilor.jpg',
  ];

  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
}

// Prefetch non-critical images
export function prefetchNonCriticalImages() {
  if (typeof document === 'undefined') return;

  const images = [
    '/portfolio/iragazzi.jpg',
    '/portfolio/sixty8.jpg',
    '/portfolio/welovepuzzle.jpg',
    '/portfolio/copacking.jpg',
    '/portfolio/mktsolutions.jpg',
    '/portfolio/magazinddd.jpg',
    '/portfolio/epresta.jpg',
  ];

  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}
