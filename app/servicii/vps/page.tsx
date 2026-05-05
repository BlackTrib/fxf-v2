import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cloud, ArrowRight, Check, Server, Shield, Zap, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VPS Cloud România | Servere Virtuale Private | FXF',
  description: 'Servere VPS cloud cu resurse dedicate. Root access, SSD NVMe, IP dedicat. Scalare flexibilă pentru proiecte de orice dimensiune. De la 150 lei/lună.',
  keywords: ['vps romania', 'server virtual', 'vps cloud', 'server dedicat', 'vps ssd'],
  openGraph: {
    title: 'VPS Cloud România | Servere Virtuale Private | FXF',
    description: 'Servere VPS cu resurse dedicate, root access și SSD NVMe.',
    url: 'https://fxfweb.ro/servicii/vps',
  },
  alternates: { canonical: 'https://fxfweb.ro/servicii/vps' },
}

const features = [
  { icon: Server, title: 'Resurse dedicate', desc: 'CPU și RAM garantate, fără supraalocare.' },
  { icon: Settings, title: 'Root access', desc: 'Control total asupra serverului tău virtual.' },
  { icon: Zap, title: 'SSD NVMe rapid', desc: 'Stocare ultrarapidă pentru performanță maximă.' },
  { icon: Shield, title: 'IP dedicat', desc: 'Adresă IP proprie inclusă în fiecare pachet.' },
]

const packages = [
  { name: 'VPS Start', price: '150', cpu: '2 vCPU', ram: '4GB', storage: '50GB NVMe', bandwidth: '2TB' },
  { name: 'VPS Pro', price: '299', cpu: '4 vCPU', ram: '8GB', storage: '100GB NVMe', bandwidth: '4TB', popular: true },
  { name: 'VPS Business', price: '499', cpu: '6 vCPU', ram: '16GB', storage: '200GB NVMe', bandwidth: '8TB' },
  { name: 'VPS Enterprise', price: '899', cpu: '8 vCPU', ram: '32GB', storage: '400GB NVMe', bandwidth: 'Nelimitat' },
]

export default function VPSPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Cloud size={14} />
                Servere virtuale
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                VPS Cloud
                <span className="block text-2xl sm:text-3xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Resurse dedicate, control total
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Servere VPS cloud pentru proiecte care necesită resurse dedicate și control complet. 
                Root access, SSD NVMe și scalare flexibilă după nevoile tale.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
                  {pkg.popular && <span className="text-xs font-bold text-primary">POPULAR</span>}
                  <h3 className="font-display text-lg font-bold mt-2 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{pkg.price} <span className="text-sm text-muted-foreground">lei/lună</span></p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-500" />{pkg.cpu}</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-500" />{pkg.ram} RAM</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-500" />{pkg.storage}</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-500" />{pkg.bandwidth} trafic</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-500" />IP dedicat</li>
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
            <h2 className="font-display text-2xl font-bold text-white mb-4">Ai nevoie de configurație custom?</h2>
            <p className="text-white/60 mb-6">Contactează-ne pentru oferte personalizate.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold">
              Solicită ofertă <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
