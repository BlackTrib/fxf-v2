import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CookieConsent } from '@/components/cookie-consent'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Găzduire Web SSD România | FXF Hosting de la 3€/lună',
  description:
    'Găzduire web rapidă pe servere SSD NVMe în România. Hosting WordPress, PrestaShop, E-Commerce cu cPanel, SSL gratuit și suport 24/7. Uptime 99.9% garantat!',
  keywords: [
    'gazduire web',
    'hosting romania',
    'gazduire ssd',
    'web hosting',
    'gazduire wordpress',
    'gazduire prestashop',
    'gazduire magazin online',
    'hosting ieftin',
    'server romania',
    'cpanel hosting',
    'gazduire nvme',
    'hosting rapid',
    'domenii web',
    'certificat ssl gratuit',
    'FXF Web Hosting',
  ],
  authors: [{ name: 'FXF Web Hosting' }],
  creator: 'FXF Web Hosting',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  alternates: {
    canonical: 'https://fxfweb.ro',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://fxfweb.ro',
    siteName: 'FXF Web Hosting',
    title: 'Găzduire Web SSD România | FXF Web Hosting',
    description:
      'Găzduire web rapidă pe servere SSD NVMe. Hosting WordPress, PrestaShop, E-Commerce cu cPanel, SSL gratuit și suport 24/7. Uptime 99.9% garantat!',
    images: [
      {
        url: 'https://fxfweb.ro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FXF Web Hosting - Găzduire Web România',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Găzduire Web SSD România | FXF Web Hosting',
    description: 'Hosting rapid pe servere SSD NVMe. WordPress, PrestaShop, E-Commerce. SSL gratuit, cPanel, suport 24/7!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0f2340',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://fxfweb.ro/#website',
        url: 'https://fxfweb.ro',
        name: 'FXF Web Hosting',
        description: 'Găzduire web profesională în România - Servere SSD NVMe, cPanel, SSL gratuit',
        publisher: { '@id': 'https://fxfweb.ro/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://fxfweb.ro/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'ro-RO',
      },
      {
        '@type': 'Organization',
        '@id': 'https://fxfweb.ro/#organization',
        name: 'FXF Web Hosting',
        url: 'https://fxfweb.ro',
        logo: {
          '@type': 'ImageObject',
          url: 'https://fxfweb.ro/logo.png',
          width: 512,
          height: 512,
        },
        description: 'Furnizor de găzduire web în România cu servere SSD NVMe, cPanel și suport tehnic 24/7.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RO',
          addressLocality: 'București',
          addressRegion: 'Ilfov',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+40-785-277-566',
          contactType: 'customer service',
          availableLanguage: ['Romanian', 'English'],
        },
        sameAs: [
          'https://www.facebook.com/fxfwebhosting',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://fxfweb.ro/#localbusiness',
        name: 'FXF Web Hosting',
        image: 'https://fxfweb.ro/og-image.jpg',
        priceRange: '€',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'RO',
          addressLocality: 'București',
          addressRegion: 'Ilfov',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 44.4268,
          longitude: 26.1025,
        },
        url: 'https://fxfweb.ro',
        telephone: '+40-785-277-566',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicii Găzduire Web',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Găzduire WordPress',
                description: 'Hosting optimizat pentru WordPress cu LiteSpeed, cPanel și backup automat.',
              },
              priceCurrency: 'EUR',
              price: '17.50',
              priceValidUntil: '2026-12-31',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Găzduire PrestaShop',
                description: 'Găzduire optimizată pentru magazine PrestaShop cu performanță ridicată.',
              },
              priceCurrency: 'EUR',
              price: '17.50',
              priceValidUntil: '2026-12-31',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Găzduire Magento',
                description: 'Găzduire optimizată pentru Magento 2 Enterprise cu performanță ridicată.',
              },
              priceCurrency: 'EUR',
              price: '17.50',
              priceValidUntil: '2026-12-31',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Înregistrare Domenii',
                description: 'Domenii .ro, .com, .eu și alte extensii la prețuri competitive.',
              },
              priceCurrency: 'EUR',
              price: '8',
              priceValidUntil: '2026-12-31',
            },
          ],
        },
      },
    ],
  }

  return (
    <html lang="ro" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preload" as="image" href="/og-image.jpg" type="image/jpeg" />
        <link rel="preload" as="image" href="/logo.png" type="image/png" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  )
}
