/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === 'true'

const nextConfig = {
  ...(isStaticExport && { output: 'export', trailingSlash: true }),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    ...(isStaticExport && { unoptimized: true }),
  },
  // Minification and optimization
  productionBrowserSourceMaps: false,
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-dialog', 'lucide-react'],
  },
  // Performance & Security headers
  async headers() {
    return [
      // HTML pages - no cache
      {
        source: '/:path((?!.*\\.(?:js|css|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|eot|ico)$).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
      // Static assets - aggressive caching
      {
        source: '/portfolio/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        source: '/public/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // JavaScript & CSS - 1 year cache
      {
        source: '/:path(.*\\.(?:js|css)$)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Images - 1 year cache
      {
        source: '/:path(.*\\.(?:jpg|jpeg|png|gif|svg|webp|avif|ico)$)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Fonts - 1 year cache
      {
        source: '/:path(.*\\.(?:woff2?|ttf|eot)$)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
}

export default nextConfig
