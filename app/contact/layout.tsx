import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Solicită Ofertă Hosting | FXF Web Hosting',
  description: 'Contactează FXF Web Hosting pentru găzduire web profesională. Consultanță gratuită, răspuns în 24h. Telefon: +40 785 277 566.',
  keywords: [
    'contact hosting',
    'oferta gazduire web',
    'consultanta hosting gratuita',
    'contact fxf hosting',
    'cerere oferta hosting',
    'pret gazduire web',
    'contact gazduire',
    'oferta hosting romania',
  ],
  openGraph: {
    title: 'Contact | Solicită Ofertă Hosting | FXF Web Hosting',
    description: 'Contactează FXF Web Hosting pentru găzduire web profesională. Consultanță gratuită, răspuns în 24h. Telefon: +40 785 277 566.',
    url: 'https://fxfweb.ro/contact',
  },
  alternates: {
    canonical: 'https://fxfweb.ro/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
