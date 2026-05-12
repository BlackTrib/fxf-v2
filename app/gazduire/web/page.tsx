import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Server, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Globe, Database, Mail, Cpu, Lock, RefreshCw } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Găzduire Web SSD România | Hosting de la 55 lei | FXF Web Hosting',
  description: 'Găzduire web pe servere SSD NVMe în România. 6 pachete de la 55 lei/6 luni cu cPanel, SSL gratuit, backup zilnic și suport 24/7. Uptime 99.9% garantat!',
  keywords: ['găzduire web', 'hosting românia', 'găzduire ssd', 'web hosting', 'găzduire nvme', 'hosting ieftin', 'cpanel hosting'],
  openGraph: {
    title: 'Găzduire Web SSD România | Hosting de la 55 lei | FXF Web Hosting',
    description: 'Găzduire web pe servere SSD NVMe. cPanel, SSL gratuit, backup zilnic, suport 24/7.',
    url: 'https://fxfweb.ro/gazduire/web',
  },
  alternates: { canonical: 'https://fxfweb.ro/gazduire/web' },
}

const packages = [
  {
    name: 'Start',
    price: '55',
    period: '6 luni',
    desc: 'Ideal pentru site-uri mici de prezentare și bloguri personale.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '1 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '1 Core' },
      { label: 'Memorie RAM', value: '1 GB' },
      { label: 'cPanel + JetBackup', value: 'Inclus' },
    ],
  },
  {
    name: 'Basic',
    price: '97',
    period: '6 luni',
    desc: 'Perfect pentru site-uri în creștere cu mai mult conținut.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '3 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '1 Core' },
      { label: 'Memorie RAM', value: '1.5 GB' },
      { label: 'cPanel + JetBackup', value: 'Inclus' },
    ],
  },
  {
    name: 'Business',
    price: '207',
    period: '6 luni',
    desc: 'Recomandat pentru site-uri de afaceri și proiecte medii.',
    popular: true,
    features: [
      { label: 'Spațiu SSD NVMe', value: '10 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '2 Core' },
      { label: 'Memorie RAM', value: '2 GB' },
      { label: 'cPanel + JetBackup', value: 'Inclus' },
    ],
  },
  {
    name: 'Professional',
    price: '345',
    period: '6 luni',
    desc: 'Pentru site-uri profesionale cu trafic în creștere.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '20 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '2.5 Core' },
      { label: 'Memorie RAM', value: '2.5 GB' },
      { label: 'cPanel + JetBackup', value: 'Inclus' },
    ],
  },
  {
    name: 'E-Commerce',
    price: '455',
    period: '6 luni',
    desc: 'Optimizat pentru magazine online cu trafic mediu.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '30 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '3 Core' },
      { label: 'Memorie RAM', value: '3 GB' },
      { label: 'cPanel + JetBackup', value: 'Inclus' },
    ],
  },
  {
    name: 'Enterprise',
    price: '621',
    period: '6 luni',
    desc: 'Putere maximă pentru aplicații și site-uri cu trafic intens.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '50 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '4 Core' },
      { label: 'Memorie RAM', value: '4 GB' },
      { label: 'cPanel + JetBackup', value: 'Inclus' },
    ],
  },
]

const benefits = [
  { icon: HardDrive, title: 'SSD NVMe Ultrarapid', desc: 'Stocare de până la 5x mai rapidă decât SSD tradițional pentru încărcare instant.' },
  { icon: Server, title: 'cPanel Inclus', desc: 'Panou de control intuitiv pentru gestionarea ușoară a găzduirii.' },
  { icon: Shield, title: 'SSL Gratuit', desc: 'Certificat Let\'s Encrypt pentru criptare și securitate.' },
  { icon: Clock, title: 'Backup Zilnic', desc: 'JetBackup cu restaurare cu un click pentru siguranța datelor.' },
  { icon: Zap, title: 'LiteSpeed Server', desc: 'Server web rapid cu cache integrat și HTTP/3 support.' },
  { icon: Lock, title: 'Imunify360', desc: 'Protecție avansată împotriva malware și atacuri.' },
  { icon: Globe, title: 'Domenii Nelimitate', desc: 'Găzduiește câte domenii dorești pe același cont.' },
  { icon: Database, title: 'Baze de Date Nelimitate', desc: 'MySQL nelimitat pentru orice aplicație.' },
  { icon: Mail, title: 'Email Profesional', desc: 'Conturi email nelimitate cu webmail și SMTP.' },
  { icon: Cpu, title: 'CloudLinux OS', desc: 'Izolare resurse și stabilitate garantată.' },
  { icon: RefreshCw, title: 'Uptime 99.9%', desc: 'Monitorizare 24/7 cu garanție SLA.' },
  { icon: Headphones, title: 'Suport 24/7', desc: 'Echipă tehnică disponibilă non-stop prin ticket.' },
]

export default function GazduireWebPage() {
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
                  <Server size={14} />
                  Găzduire Web
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Găzduire Web SSD
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Servere NVMe rapide în Germania</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Găzduire web profesională pe servere SSD NVMe ultrarapide. Toate pachetele includ 
                  cPanel, SSL gratuit, backup zilnic și suport tehnic 24/7. Uptime 99.9% garantat.
                </p>
              </div>
              <PageHeroVisual page="gazduire-web" />
            </div>
          </div>
        </section>

        {/* Pricing - 6 Packages */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete Găzduire Web</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Alege pachetul potrivit pentru tine
              </h2>
              <p className="text-muted-foreground text-lg">Toate pachetele includ SSL gratuit, cPanel, backup zilnic și suport 24/7.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">RECOMANDAT</span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Găzduire {pkg.name}</h3>
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
              <p className="text-sm text-muted-foreground">
                Cod promoțional <span className="font-bold text-primary">FXF10</span> pentru 10% reducere la prima comandă!
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Inclus în toate pachetele</h2>
              <p className="text-muted-foreground">Tehnologii enterprise pentru performanță și securitate maximă.</p>
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

        {/* Server Specs */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">Specificații Server</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Procesor', value: '64 Core CPU' },
                  { label: 'Memorie', value: '96GB RAM DDR4' },
                  { label: 'Stocare', value: '6x 1TB SSD NVMe' },
                  { label: 'Redundanță', value: 'RAID 10' },
                  { label: 'Sistem operare', value: 'CloudLinux' },
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Găzduire Web Profesională în România</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serviciile noastre de găzduire web sunt concepute pentru a oferi performanță maximă și fiabilitate pentru orice tip de proiect online. Folosim exclusiv servere SSD NVMe de ultimă generație, care oferă viteze de citire și scriere de până la 5 ori mai rapide decât SSD-urile tradiționale.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fiecare pachet de găzduire include acces la cPanel, cel mai popular panou de control pentru găzduire web, care îți permite să gestionezi cu ușurință fișierele, bazele de date, conturile de email și multe alte funcționalități. De asemenea, beneficiezi de certificate SSL gratuite Let&apos;s Encrypt pentru securizarea site-ului tău.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Serverele noastre sunt găzduite în datacenter-uri de nivel Tier III din Germania, oferind redundanță completă și un uptime garantat de 99.9%. Cu suport tehnic disponibil 24/7 și backup-uri zilnice automate prin JetBackup, poți fi sigur că site-ul tău este în mâini bune.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Pregătit să începi?</h2>
            <p className="text-white/60 text-lg mb-8">Contactează-ne pentru pachetul de găzduire perfect pentru proiectul tău.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
              Comandă acum <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
