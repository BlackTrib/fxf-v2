import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HardDrive, ArrowRight, Check, Zap, Shield, Clock, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Găzduire WordPress România | Hosting Optimizat | FXF',
  description: 'Găzduire WordPress optimizată cu LiteSpeed Cache. Instalare 1-click, SSL gratuit, backup zilnic și suport specializat. De la 83 lei/6 luni.',
  keywords: ['gazduire wordpress', 'hosting wordpress', 'wordpress romania', 'wordpress hosting', 'litespeed wordpress'],
  openGraph: {
    title: 'Găzduire WordPress România | Hosting Optimizat | FXF',
    description: 'Găzduire WordPress optimizată cu LiteSpeed Cache, SSL gratuit și suport 24/7.',
    url: 'https://fxfweb.ro/servicii/gazduire-wordpress',
  },
  alternates: { canonical: 'https://fxfweb.ro/servicii/gazduire-wordpress' },
}

const features = [
  { icon: Zap, title: 'LiteSpeed Cache', desc: 'Cache WordPress optimizat pentru viteze de încărcare sub 1 secundă.' },
  { icon: RefreshCw, title: 'Instalare 1-Click', desc: 'WordPress pre-instalat sau instalare cu un click din Softaculous.' },
  { icon: Shield, title: 'Securitate WordPress', desc: 'Imunify360, firewall WAF și protecție împotriva atacurilor brute-force.' },
  { icon: Clock, title: 'Actualizări automate', desc: 'Actualizări automate opționale pentru core, teme și plugin-uri.' },
]

const packages = [
  { name: 'WP Starter', price: '83', features: ['5GB NVMe SSD', '1 CPU / 1GB RAM', 'LiteSpeed Cache', 'SSL + Backup zilnic'] },
  { name: 'WP Business', price: '248', popular: true, features: ['15GB NVMe SSD', '2 CPU / 2GB RAM', 'LiteSpeed Cache', 'SSL + Backup zilnic', 'Staging environment'] },
  { name: 'WP Pro', price: '499', features: ['40GB NVMe SSD', '4 CPU / 4GB RAM', 'LiteSpeed Cache', 'SSL + Backup zilnic', 'Staging + Priority support'] },
]

export default function GazduireWordPressPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <HardDrive size={14} />
                Hosting specializat
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Găzduire WordPress
                <span className="block text-2xl sm:text-3xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Optimizat pentru viteză maximă
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Hosting WordPress cu LiteSpeed Cache pre-instalat, actualizări automate și 
                protecție avansată. Site-ul tău WordPress va fi rapid, sigur și mereu actualizat.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="bg-card border border-border rounded-xl p-5">
                    <Icon size={24} className="text-primary mb-3" />
                    <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
                  {pkg.popular && <span className="text-xs font-bold text-primary">CEL MAI POPULAR</span>}
                  <h3 className="font-display text-xl font-bold mt-2 mb-4">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{pkg.price} <span className="text-sm text-muted-foreground">lei/6 luni</span></p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check size={14} className="text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors">
                    Comandă
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Vrei să migrezi de la alt hosting?</h2>
            <p className="text-white/60 mb-6">Migrarea este gratuită! Ne ocupăm noi de tot.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold">
              Solicită migrare gratuită <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
