import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShoppingCart, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Globe, Database, Cpu, Lock, RefreshCw, Server, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Găzduire PrestaShop România | Hosting E-Commerce de la 55 lei | FXF',
  description: 'Găzduire PrestaShop optimizată pe servere SSD NVMe. Auto-instalare, SSL gratuit, backup zilnic. Perfect pentru magazine online cu mii de produse!',
  keywords: ['gazduire prestashop', 'hosting prestashop', 'prestashop romania', 'hosting magazin online', 'prestashop hosting'],
  openGraph: {
    title: 'Găzduire PrestaShop România | Hosting E-Commerce de la 55 lei | FXF',
    description: 'Găzduire PrestaShop optimizată cu auto-instalare, SSL gratuit și suport specializat.',
    url: 'https://fxfweb.ro/servicii/gazduire-prestashop',
  },
  alternates: { canonical: 'https://fxfweb.ro/servicii/gazduire-prestashop' },
}

const packages = [
  {
    name: 'PS Starter',
    price: '55',
    period: '6 luni',
    desc: 'Pentru magazine mici cu până la 500 produse.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '1 GB' },
      { label: 'Magazine PrestaShop', value: '1' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '1 Core' },
      { label: 'Memorie RAM', value: '1 GB' },
      { label: 'Auto-instalare PS', value: 'Inclus' },
    ],
  },
  {
    name: 'PS Business',
    price: '207',
    period: '6 luni',
    desc: 'Ideal pentru magazine cu 500-2000 produse.',
    popular: true,
    features: [
      { label: 'Spațiu SSD NVMe', value: '10 GB' },
      { label: 'Magazine PrestaShop', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '2 Core' },
      { label: 'Memorie RAM', value: '2 GB' },
      { label: 'Auto-instalare PS', value: 'Inclus' },
    ],
  },
  {
    name: 'PS E-Commerce',
    price: '455',
    period: '6 luni',
    desc: 'Pentru magazine cu 2000-10000 produse.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '30 GB' },
      { label: 'Magazine PrestaShop', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '3 Core' },
      { label: 'Memorie RAM', value: '3 GB' },
      { label: 'Auto-instalare PS', value: 'Inclus' },
    ],
  },
  {
    name: 'PS Performance',
    price: '621',
    period: '6 luni',
    desc: 'Magazine mari cu peste 10000 produse și trafic intens.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '50 GB' },
      { label: 'Magazine PrestaShop', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '4 Core' },
      { label: 'Memorie RAM', value: '4 GB' },
      { label: 'Auto-instalare PS', value: 'Inclus' },
    ],
  },
]

const benefits = [
  { icon: Zap, title: 'Auto-Instalare PrestaShop', desc: 'Instalare PrestaShop cu un click direct din cPanel.' },
  { icon: Database, title: 'MySQL Optimizat', desc: 'Baze de date optimizate pentru mii de produse și comenzi.' },
  { icon: HardDrive, title: 'LiteSpeed Server', desc: 'Viteză de încărcare sub 1 secundă pentru magazinul tău.' },
  { icon: Shield, title: 'SSL Gratuit', desc: 'Certificat SSL pentru plăți online securizate.' },
  { icon: Clock, title: 'Backup Zilnic', desc: 'Backup automat pentru produse, comenzi și clienți.' },
  { icon: Lock, title: 'Imunify360', desc: 'Protecție avansată împotriva atacurilor și malware.' },
  { icon: Server, title: 'cPanel Inclus', desc: 'Gestionare ușoară a fișierelor și bazelor de date.' },
  { icon: CreditCard, title: 'Plăți Securizate', desc: 'Compatible cu procesatori de plăți: Stripe, PayU, etc.' },
  { icon: Globe, title: 'Multistore Support', desc: 'Găzduiește mai multe magazine pe același cont.' },
  { icon: Cpu, title: 'PHP 8.x', desc: 'Ultimele versiuni PHP pentru performanță maximă.' },
  { icon: RefreshCw, title: 'Uptime 99.9%', desc: 'Monitorizare 24/7 pentru magazin mereu online.' },
  { icon: Headphones, title: 'Suport E-Commerce', desc: 'Echipă specializată în magazine online PrestaShop.' },
]

export default function GazduirePrestashopPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <ShoppingCart size={14} />
                Găzduire PrestaShop
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Găzduire PrestaShop
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Performanță pentru magazine online</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                Găzduire PrestaShop optimizată cu resurse dedicate pentru magazine cu mii de produse. 
                Auto-instalare, SSL gratuit, backup zilnic și suport tehnic specializat e-commerce.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete PrestaShop</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Găzduire optimizată pentru PrestaShop
              </h2>
              <p className="text-muted-foreground text-lg">Auto-instalare, MySQL optimizat, LiteSpeed cache și suport e-commerce specializat.</p>
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce găzduire PrestaShop la FXF?</h2>
              <p className="text-muted-foreground">Tot ce ai nevoie pentru un magazin online de succes.</p>
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
            <h2 className="font-display text-3xl font-bold text-white mb-4">Migrare PrestaShop gratuită!</h2>
            <p className="text-white/60 text-lg mb-8">Migrăm gratuit magazinul tău PrestaShop fără pierdere de date sau downtime.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
              Solicită migrare gratuită <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
