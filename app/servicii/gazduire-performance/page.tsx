import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Rocket, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Globe, Database, Cpu, Lock, RefreshCw, Server, Gauge } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Găzduire Performance România | Hosting Ultra-Rapid de la 455 lei | FXF',
  description: 'Găzduire Performance pe servere SSD NVMe cu resurse dedicate. Ideal pentru site-uri cu trafic intens, aplicații web și proiecte enterprise.',
  keywords: ['gazduire performance', 'hosting rapid', 'hosting romania', 'web hosting performance', 'gazduire ssd nvme'],
  openGraph: {
    title: 'Găzduire Performance România | Hosting Ultra-Rapid de la 455 lei | FXF',
    description: 'Găzduire Performance cu resurse dedicate pentru site-uri cu trafic intens.',
    url: 'https://fxfweb.ro/servicii/gazduire-performance',
  },
  alternates: { canonical: 'https://fxfweb.ro/servicii/gazduire-performance' },
}

const packages = [
  {
    name: 'Performance S',
    price: '455',
    period: '6 luni',
    desc: 'Pentru site-uri medii cu trafic crescut.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '30 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '3 Core' },
      { label: 'Memorie RAM', value: '3 GB' },
      { label: 'Priority Support', value: 'Inclus' },
    ],
  },
  {
    name: 'Performance M',
    price: '497',
    period: '6 luni',
    desc: 'Ideal pentru aplicații web și magazine online.',
    popular: true,
    features: [
      { label: 'Spațiu SSD NVMe', value: '40 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '4 Core' },
      { label: 'Memorie RAM', value: '4 GB' },
      { label: 'Priority Support', value: 'Inclus' },
    ],
  },
  {
    name: 'Performance L',
    price: '538',
    period: '6 luni',
    desc: 'Pentru proiecte mari cu cerințe ridicate.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '60 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '5 Core' },
      { label: 'Memorie RAM', value: '5 GB' },
      { label: 'Priority Support', value: 'Inclus' },
    ],
  },
  {
    name: 'Performance XL',
    price: '621',
    period: '6 luni',
    desc: 'Enterprise-grade pentru aplicații mission-critical.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '80 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '6 Core' },
      { label: 'Memorie RAM', value: '6 GB' },
      { label: 'Priority Support', value: 'Inclus' },
    ],
  },
]

const benefits = [
  { icon: Gauge, title: 'Resurse Dedicate', desc: 'CPU și RAM garantate, fără partajare cu alte conturi.' },
  { icon: Zap, title: 'LiteSpeed Enterprise', desc: 'Server web ultrarapid cu HTTP/3 și cache avansat.' },
  { icon: HardDrive, title: 'SSD NVMe Premium', desc: 'Stocare de 5x mai rapidă decât SSD tradițional.' },
  { icon: Shield, title: 'SSL Wildcard', desc: 'Certificat SSL pentru domeniu principal și subdomenii.' },
  { icon: Clock, title: 'Backup 2x/zi', desc: 'Backup de două ori pe zi cu retenție extinsă.' },
  { icon: Lock, title: 'Imunify360 Pro', desc: 'Protecție avansată cu firewall WAF și anti-malware.' },
  { icon: Server, title: 'cPanel Pro', desc: 'Panou de control cu funcționalități extinse.' },
  { icon: Database, title: 'MySQL Optimizat', desc: 'Baze de date cu query cache și optimizări avansate.' },
  { icon: Globe, title: 'CDN Inclus', desc: 'Distribuție globală pentru încărcare rapidă worldwide.' },
  { icon: Cpu, title: 'PHP 8.x OPcache', desc: 'PHP optimizat cu OPcache și JIT compiler.' },
  { icon: RefreshCw, title: 'Uptime 99.99%', desc: 'SLA premium cu monitorizare activă.' },
  { icon: Headphones, title: 'Suport Prioritar', desc: 'Răspuns în maxim 30 minute, 24/7.' },
]

export default function GazduirePerformancePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Rocket size={14} />
                Găzduire Performance
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Găzduire Performance
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Resurse dedicate pentru viteză maximă</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                Găzduire Performance cu resurse CPU și RAM garantate. Ideal pentru site-uri cu 
                trafic intens, aplicații web complexe și proiecte enterprise care necesită putere maximă.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete Performance</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Putere maximă pentru proiectele tale
              </h2>
              <p className="text-muted-foreground text-lg">Resurse dedicate, suport prioritar și performanță enterprise-grade.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">RECOMANDAT</span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{pkg.desc}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">lei/{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f.label} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{f.label}</span>
                        <span className="font-medium text-foreground">{f.value}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                    Comandă acum
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">Cod promoțional <span className="font-bold text-primary">FXF10</span> pentru 10% reducere!</p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce Găzduire Performance?</h2>
              <p className="text-muted-foreground">Funcționalități premium pentru proiecte care nu tolerează compromisuri.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.title} className="bg-white rounded-xl p-5 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1 text-sm">{b.title}</h3>
                    <p className="text-xs text-muted-foreground">{b.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Upgrade gratuit de la alt pachet!</h2>
            <p className="text-white/60 text-lg mb-8">Migrăm gratuit site-ul tău și configurăm totul pentru performanță maximă.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
              Solicită upgrade gratuit <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
