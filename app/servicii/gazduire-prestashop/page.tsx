import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShoppingCart, ArrowRight, Check, Zap, Shield, Database, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Găzduire PrestaShop România | Hosting E-Commerce | FXF',
  description: 'Găzduire optimizată pentru PrestaShop cu resurse dedicate. Performanță ridicată pentru magazine cu mii de produse. SSL gratuit, suport specializat.',
  keywords: ['gazduire prestashop', 'hosting prestashop', 'prestashop romania', 'hosting magazin online'],
  openGraph: {
    title: 'Găzduire PrestaShop România | Hosting E-Commerce | FXF',
    description: 'Hosting optimizat PrestaShop cu resurse dedicate și suport specializat.',
    url: 'https://fxfweb.ro/servicii/gazduire-prestashop',
  },
  alternates: { canonical: 'https://fxfweb.ro/servicii/gazduire-prestashop' },
}

const features = [
  { icon: Zap, title: 'Optimizat PrestaShop', desc: 'Configurație server optimizată pentru performanță PrestaShop maximă.' },
  { icon: Database, title: 'MySQL performant', desc: 'Baze de date optimizate pentru mii de produse și comenzi simultane.' },
  { icon: Shield, title: 'SSL pentru plăți', desc: 'Certificat SSL gratuit pentru tranzacții online securizate.' },
  { icon: Headphones, title: 'Suport e-commerce', desc: 'Echipă cu experiență în configurarea și optimizarea PrestaShop.' },
]

const packages = [
  { name: 'PS Starter', price: '207', features: ['10GB NVMe SSD', '2 CPU / 2GB RAM', 'SSL + Backup', 'Suport e-commerce'] },
  { name: 'PS Business', price: '455', popular: true, features: ['30GB NVMe SSD', '3 CPU / 3GB RAM', 'SSL + Backup', 'Suport prioritar', 'Optimizare inclusă'] },
  { name: 'PS Enterprise', price: '799', features: ['60GB NVMe SSD', '4 CPU / 6GB RAM', 'SSL + Backup', 'Suport dedicat', 'Optimizare + Monitorizare'] },
]

export default function GazduirePrestashopPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <ShoppingCart size={14} />
                Hosting e-commerce
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Găzduire PrestaShop
                <span className="block text-2xl sm:text-3xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Performanță pentru magazine online
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Găzduire optimizată pentru PrestaShop cu resurse dedicate și configurații speciale 
                pentru magazine cu mii de produse și trafic intens.
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
                  {pkg.popular && <span className="text-xs font-bold text-primary">RECOMANDAT</span>}
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
            <h2 className="font-display text-2xl font-bold text-white mb-4">Ai deja un magazin PrestaShop?</h2>
            <p className="text-white/60 mb-6">Migrăm gratuit magazinul tău fără pierdere de date sau downtime.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold">
              Solicită migrare <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
