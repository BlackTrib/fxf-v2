import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cloud, ArrowRight, Server, Shield, Zap, Settings, HardDrive, Globe, Cpu, RefreshCw, Headphones, Lock } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'VPS Cloud România | Servere Virtuale AMD EPYC de la 25 EUR | FXF',
  description: 'Servere VPS cloud cu procesoare AMD EPYC, resurse dedicate și SSD NVMe. Root access, IP dedicat IPv4, scalare flexibilă și suport 24/7. De la 25 EUR/lună. Linux: Ubuntu, Debian, AlmaLinux.',
  keywords: ['vps românia', 'server virtual', 'vps cloud', 'vps ssd', 'server vps', 'vps epyc', 'cloud hosting'],
  openGraph: {
    title: 'VPS Cloud România | Servere Virtuale Private de la 15 EUR | FXF',
    description: 'Servere VPS cu resurse dedicate, root access și SSD NVMe.',
    url: 'https://fxfweb.ro/servere/vps',
  },
  alternates: { canonical: 'https://fxfweb.ro/servere/vps' },
}

const packages = [
  {
    name: 'Pro Start',
    price: '25',
    period: 'lună',
    desc: 'Ideal pentru aplicații web și site-uri cu trafic mediu.',
    popular: true,
    features: [
      { label: 'procesor', value: '4 vCPU AMD EPYC' },
      { label: 'memorie RAM', value: '8 GB DDR4' },
      { label: 'stocare', value: '160 GB NVMe' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4 + IPv6' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'backup', value: 'săptămânal' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
  {
    name: 'Pro Business',
    price: '45',
    period: 'lună',
    desc: 'Pentru proiecte business și baze de date.',
    features: [
      { label: 'procesor', value: '8 vCPU AMD EPYC' },
      { label: 'memorie RAM', value: '16 GB DDR4' },
      { label: 'stocare', value: '320 GB NVMe' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4 + IPv6' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'backup', value: 'săptămânal' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
  {
    name: 'Pro Advanced',
    price: '75',
    period: 'lună',
    desc: 'Putere pentru aplicații enterprise și trafic intens.',
    features: [
      { label: 'procesor', value: '12 vCPU AMD EPYC' },
      { label: 'memorie RAM', value: '24 GB DDR4' },
      { label: 'stocare', value: '480 GB NVMe' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4 + IPv6' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'backup', value: 'săptămânal' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
  {
    name: 'Pro Enterprise',
    price: '120',
    period: 'lună',
    desc: 'Maxim de performanță pentru proiecte critice.',
    features: [
      { label: 'procesor', value: '16 vCPU AMD EPYC' },
      { label: 'memorie RAM', value: '32 GB DDR4' },
      { label: 'stocare', value: '640 GB NVMe' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4 + IPv6' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'backup', value: 'zilnic' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7 prioritar' },
    ],
  },
]

const benefits = [
  { icon: Cpu, title: 'AMD EPYC', desc: 'Procesoare de ultimă generație pentru performanță maximă.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare rapidă cu viteze de până la 3500 MB/s.' },
  { icon: Globe, title: 'Alegere OS', desc: 'Linux (Ubuntu, CentOS, Debian) sau Windows Server.' },
  { icon: Shield, title: 'Protecție DDoS', desc: 'Protecție inclusă împotriva atacurilor DDoS.' },
  { icon: RefreshCw, title: 'Scalare instantanee', desc: 'Upgrade resurse fără migrare sau downtime.' },
  { icon: Server, title: 'Panouri de control', desc: 'Opțional: cPanel, Plesk sau DirectAdmin.' },
  { icon: Zap, title: 'Rețea 10 Gbps', desc: 'Conectivitate rapidă pentru latență minimă.' },
  { icon: Headphones, title: 'Suport 24/7', desc: 'Administratori de sistem disponibili non-stop.' },
  { icon: Lock, title: 'Root Access', desc: 'Control total asupra serverului tău.' },
  { icon: Settings, title: 'IP Dedicat', desc: 'Adresă IPv4 și IPv6 proprie inclusă.' },
]

export default function VPSPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                  <Cloud size={14} />
                  VPS Cloud
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  VPS Cloud AMD EPYC
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Resurse dedicate, control total</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Servere VPS cloud cu procesoare AMD EPYC de ultimă generație. Root access complet, 
                  SSD NVMe ultrarapid, trafic nelimitat și scalare flexibilă după nevoile tale.
                </p>
              </div>
              <PageHeroVisual page="vps" />
            </div>
          </div>
        </section>

        {/* Pricing - 5 Packages */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete VPS Cloud</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Alege configurația potrivită
              </h2>
              <p className="text-muted-foreground text-lg">Toate pachetele includ IP dedicat, root access, trafic nelimitat și suport tehnic 24/7.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-5 border-2 ${pkg.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                  )}
                  <div className="text-center mb-5">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3 min-h-[32px]">{pkg.desc}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground text-sm">EUR/{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-1.5 shrink-0" />
                        <span className="text-muted-foreground">
                          {f.label} <span className="font-bold text-foreground">{f.value}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                    Comandă acum
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Configurație custom? <Link href="/contact" className="font-bold text-primary hover:underline">Contactează-ne</Link> pentru oferte personalizate!
              </p>
            </div>
          </div>
        </section>

        {/* Platform config info */}
        <section className="py-14 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare pachet VPS, configurat pentru performanță</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Infrastructură cloud de nivel enterprise cu procesoare AMD EPYC și stocare NVMe ultrarapidă.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Resurse garantate 100%',
                  desc: 'Spre deosebire de găzduirea shared, resursele VPS (CPU, RAM, stocare) sunt dedicate exclusiv ție. Fără supraalocare, fără vecini care îți afectează performanța.',
                },
                {
                  title: 'Izolare completă',
                  desc: 'Fiecare VPS rulează într-un container izolat cu propriul kernel. Securitate sporită și stabilitate garantată, indiferent de activitatea altor utilizatori.',
                },
                {
                  title: 'Scalare în minute',
                  desc: 'Ai nevoie de mai multă putere? Upgrade-ul se face în câteva minute, fără migrare și fără downtime. Plătești doar pentru resursele de care ai nevoie.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce VPS Cloud la FXF?</h2>
              <p className="text-muted-foreground">Infrastructură de ultimă generație pentru proiecte care contează.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.title} className="bg-white rounded-xl p-4 border border-border">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1 text-sm">{b.title}</h3>
                    <p className="text-xs text-muted-foreground">{b.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Server Specs */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">Specificații Infrastructură VPS</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Procesoare', value: 'AMD EPYC' },
                  { label: 'Memorie', value: 'DDR4 ECC' },
                  { label: 'Stocare', value: 'SSD NVMe Enterprise' },
                  { label: 'Rețea', value: '10 Gbps' },
                  { label: 'Virtualizare', value: 'KVM' },
                  { label: 'Locație', value: 'Datacenter Germania' },
                ].map((spec) => (
                  <div key={spec.label} className="text-center">
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
                    <p className="font-bold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-sm max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">VPS Cloud în România - Servere Virtuale Private</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serverele VPS (Virtual Private Server) reprezintă soluția ideală pentru proiecte care au depășit limitele găzduirii shared, dar nu necesită încă un server dedicat. Cu un VPS, beneficiezi de resurse garantate într-un mediu izolat, oferind performanță constantă și securitate sporită.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toate serverele noastre VPS sunt echipate cu procesoare AMD EPYC de ultimă generație și stocare SSD NVMe enterprise pentru viteze incredibile de I/O. Conectivitatea la o rețea de 10 Gbps asigură latență minimă și transfer rapid de date.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cu root access complet, ai control total asupra serverului și poți instala orice software necesită proiectul tău. Traficul este nelimitat la toate pachetele, iar scalarea este instantanee - poți face upgrade la resurse mai mari în câteva minute, fără migrare sau downtime.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ai nevoie de configurație custom?</h2>
            <p className="text-white/60 text-lg mb-8">Contactează-ne pentru oferte personalizate adaptate nevoilor tale.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
              Solicită ofertă <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
