import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre FXF Web Hosting | Găzduire Web România',
  description:
    'FXF Web Hosting - furnizor român de găzduire web din 2021. Servere SSD NVMe, uptime 99.9% garantat, suport tehnic 24/7. Peste 200 de clienți activi.',
  keywords: [
    'fxf web hosting',
    'gazduire web romania',
    'despre fxf',
    'hosting romania',
    'furnizor hosting romania',
    'gazduire web profesionala',
    'hosting ssd nvme',
    'web hosting bucuresti',
    'gazduire site romania',
  ],
  openGraph: {
    title: 'Despre FXF Web Hosting | Găzduire Web Profesională România',
    description: 'FXF Web Hosting - furnizor român de găzduire web din 2021. Servere SSD NVMe, uptime 99.9%, suport 24/7. Peste 200 clienți activi.',
    url: 'https://fxfweb.ro/despre',
  },
  alternates: {
    canonical: 'https://fxfweb.ro/despre',
  },
}

export default function DespreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
