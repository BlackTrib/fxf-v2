import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Rocket, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Database, Cpu, Lock, RefreshCw, Globe } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Găzduire Performance România | Hosting Premium de la 455 lei | FXF',
  description: 'Găzduire Performance cu resurse CPU și RAM dedicate. LiteSpeed Enterprise, backup 2x/zi, CDN inclus, uptime 99.99% SLA. Suport prioritar 24/7!',
  keywords: ['găzduire performance', 'hosting premium', 'găzduire resurse dedicate', 'hosting enterprise', 'găzduire rapidă'],
  openGraph: {
    title: 'Găzduire Performance România | Hosting Premium de la 455 lei | FXF',
    description: 'Găzduire Performance cu resurse dedicate, LiteSpeed Enterprise și uptime 99.99% SLA.',
    url: 'https://fxfweb.ro/gazduire/performance',
  },
  alternates: { canonical: 'https://fxfweb.ro/gazduire/performance' },
}

const packages = [
  {
    name: 'Performance Start',
    price: '455',
    period: '6 luni',
    desc: 'Pentru site-uri cu trafic în creștere și cerințe de performanță.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '40 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '4 Core (garantat)' },
      { label: 'Memorie RAM', value: '4 GB (garantat)' },
      { label: 'Backup 2x/zi', value: 'Inclus' },
    ],
  },
  {
    name: 'Performance Pro',
    price: '621',
    period: '6 luni',
    desc: 'Ideal pentru aplicații complexe și magazine online mari.',
    popular: true,
    features: [
      { label: 'Spațiu SSD NVMe', value: '70 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '6 Core (garantat)' },
      { label: 'Memorie RAM', value: '6 GB (garantat)' },
      { label: 'CDN inclus', value: 'Da' },
    ],
  },
  {
    name: 'Performance Business',
    price: '899',
    period: '6 luni',
    desc: 'Pentru proiecte enterprise cu trafic intens.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '100 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '8 Core (garantat)' },
      { label: 'Memorie RAM', value: '8 GB (garantat)' },
      { label: 'Suport prioritar', value: '< 30 min' },
    ],
  },
  {
    name: 'Performance Enterprise',
    price: '1299',
    period: '6 luni',
    desc: 'Putere maximă pentru cele mai exigente proiecte.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '150 GB' },
      { label: 'Domenii găzduite', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '12 Core (garantat)' },
      { label: 'Memorie RAM', value: '12 GB (garantat)' },
      { label: 'Manager dedicat', value: 'Inclus' },
    ],
  },
]

const benefits = [
  { icon: Cpu, title: 'Resurse Garantate', desc: 'CPU și RAM dedicate, fără supraalocare. Performanță constantă garantată.' },
  { icon: Zap, title: 'LiteSpeed Enterprise', desc: 'Server web LiteSpeed Enterprise cu cache avansat și HTTP/3.' },
  { icon: Clock, title: 'Backup 2x pe Zi', desc: 'Backup-uri de două ori pe zi pentru protecție maximă a datelor.' },
  { icon: Globe, title: 'CDN Inclus', desc: 'Content Delivery Network pentru încărcare rapidă globală.' },
  { icon: Shield, title: 'Uptime 99.99% SLA', desc: 'Garanție SLA enterprise cu compensare pentru orice downtime.' },
  { icon: Headphones, title: 'Suport Prioritar', desc: 'Răspuns în maxim 30 minute pentru cererile de suport.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare ultrarapidă pe discuri NVMe enterprise-grade.' },
  { icon: Lock, title: 'DDoS Protection', desc: 'Protecție avansată DDoS și firewall enterprise.' },
  { icon: Database, title: 'MySQL Optimizat', desc: 'Baze de date MySQL cu configurații optimizate pentru performanță.' },
  { icon: RefreshCw, title: 'Scalabilitate', desc: 'Posibilitate de upgrade instant fără migrare sau downtime.' },
  { icon: Shield, title: 'Imunify360 Pro', desc: 'Suite completă de securitate pentru protecție maximă.' },
  { icon: Headphones, title: 'Manager Dedicat', desc: 'Account manager dedicat pentru pachetele enterprise.' },
]

export default function GazduirePerformancePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                  <Rocket size={14} />
                  Găzduire Performance
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Găzduire Performance
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Resurse dedicate pentru performanță maximă</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Găzduire Performance cu resurse CPU și RAM garantate, LiteSpeed Enterprise, backup 2x pe zi și 
                  suport prioritar. Ideal pentru site-uri cu trafic intens și aplicații complexe.
                </p>
              </div>
              <PageHeroVisual page="gazduire-performance" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete Performance</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Putere maximă pentru proiecte exigente
              </h2>
              <p className="text-muted-foreground text-lg">Resurse CPU și RAM garantate, fără supraalocare. Performanță constantă 24/7.</p>
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce găzduire Performance la FXF?</h2>
              <p className="text-muted-foreground">Tehnologii enterprise și resurse dedicate pentru cele mai exigente proiecte.</p>
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

        {/* Platform config info */}
        <section className="py-14 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare pachet, configurat special pentru performance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Găzduirea performance nu este despre mai multă putere brută — este despre arhitectură. Fiecare plan FXF Performance este construit pentru a livra consiliență și viteză maximă sub presiune.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Resurse dedicate și izolate',
                  desc: 'CPU și RAM alocate sunt exclusiv pentru contul tău, fără partajare cu alți clienți. Comportamentul oricărui alt site pe server nu va putea niciodată să-ți afecteze resursele sau disponibilitatea.',
                },
                {
                  title: 'LiteSpeed Enterprise cu cache avansat',
                  desc: 'LiteSpeed Web Server Enterprise oferă cache la nivel de server, suport HTTP/3 QUIC, și compresie Brotli. Combinat cu LSCache, rezultatul este viteză de încarcare sub 500ms chiar și pentru pagini complexe.',
                },
                {
                  title: 'Backup frecvent și CDN global inclus',
                  desc: 'Backup-urile sunt create de două ori pe zi și stocate redundant pe mai mult de o locație, iar CDN-ul inclus distribuie conținutul tău în 50+ țări, reducând latența pentru toți vizitatorii tăi.',
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

        {/* SEO Content */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-sm max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Găzduire Performance Premium în România</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pachetele noastre de Găzduire Performance sunt concepute pentru proiecte care necesită resurse garantate și performanță constantă, indiferent de trafic. Spre deosebire de găzduirea shared tradițională, resursele CPU și RAM sunt dedicate contului tău, fără supraalocare.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                LiteSpeed Enterprise oferă cele mai rapide timpi de răspuns și cache avansat, în timp ce CDN-ul inclus asigură încărcare rapidă a conținutului pentru vizitatorii din toată lumea. Backup-urile de două ori pe zi garantează că poți restaura oricând la cea mai recentă versiune a site-ului.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cu uptime garantat de 99.99% și suport prioritar cu răspuns în maxim 30 de minute, pachetele Performance sunt alegerea ideală pentru site-uri business-critical, magazine online cu trafic intens și aplicații web complexe.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Migrare gratuită cu zero downtime!</h2>
            <p className="text-white/60 text-lg mb-8">Ne ocupăm noi de tot - migrăm site-ul tău fără întrerupere a serviciilor.</p>
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
