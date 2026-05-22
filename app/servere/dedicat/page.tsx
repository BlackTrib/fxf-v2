import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cpu, ArrowRight, Check, Server, Shield, Zap, HardDrive, Globe, RefreshCw, Headphones, Lock, Database } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Servere Dedicate România | Hardware AMD Ryzen & Intel de la 726 € | FXF',
  description: 'Servere dedicate cu hardware exclusiv. Procesoare AMD Ryzen și Intel Core Ultra, RAM DDR5, SSD NVMe. Trafic nelimitat și suport prioritar 24/7. De la 726 €/6 luni.',
  keywords: ['servere dedicate', 'server dedicat românia', 'dedicated server', 'server fizic', 'hosting enterprise', 'amd ryzen server', 'intel core ultra server'],
  openGraph: {
    title: 'Servere Dedicate România | Hardware AMD Ryzen & Intel de la 726 € | FXF',
    description: 'Servere dedicate cu hardware exclusiv, procesoare AMD Ryzen și Intel Core Ultra și suport prioritar 24/7.',
    url: 'https://fxfweb.ro/servere/dedicat',
  },
  alternates: { canonical: 'https://fxfweb.ro/servere/dedicat' },
}

const features = [
  { icon: Cpu, title: 'Hardware dedicat', desc: 'Server fizic exclusiv pentru tine, fără virtualizare.' },
  { icon: Shield, title: 'Securitate totală', desc: 'Izolare completă și control total asupra hardware-ului.' },
  { icon: Zap, title: 'Performanță maximă', desc: 'Procesoare AMD Ryzen și Intel Core Ultra.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare ultrarapidă pentru aplicații exigente.' },
]

const packages = [
  { 
    name: 'Dedicat Start', 
    price: '726', 
    period: '6 luni',
    desc: 'Perfect pentru proiecte medii și aplicații business.',
    features: [
      { label: 'procesor', value: 'AMD Ryzen 5 3600' },
      { label: 'CPU', value: '12 threads @ 3.6 GHz' },
      { label: 'memorie RAM', value: '64 GB DDR5' },
      { label: 'stocare', value: '512 GB NVMe SSD' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7 prioritar' },
    ],
  },
  { 
    name: 'Dedicat Pro', 
    price: '944', 
    period: '6 luni',
    popular: true,
    desc: 'Ideal pentru aplicații business și magazine mari.',
    features: [
      { label: 'procesor', value: 'AMD Ryzen 7 8700GE' },
      { label: 'CPU', value: '16 threads @ 3.65 GHz' },
      { label: 'memorie RAM', value: '64 GB DDR5' },
      { label: 'stocare', value: '512 GB NVMe SSD' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7 prioritar' },
    ],
  },
  { 
    name: 'Dedicat Business', 
    price: '1452', 
    period: '6 luni',
    desc: 'Pentru aplicații enterprise cu trafic intens.',
    features: [
      { label: 'procesor', value: 'Intel Core Ultra 7 265' },
      { label: 'CPU', value: '20 threads @ 2.4 GHz' },
      { label: 'memorie RAM', value: '64 GB DDR5' },
      { label: 'stocare', value: '1 TB NVMe SSD' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7 prioritar' },
    ],
  },
  { 
    name: 'Dedicat Enterprise', 
    price: '2179', 
    period: '6 luni',
    desc: 'Putere maximă pentru cele mai exigente proiecte.',
    features: [
      { label: 'procesor', value: 'AMD Ryzen 9 7950X3D' },
      { label: 'CPU', value: '32 threads @ 4.2 GHz' },
      { label: 'memorie RAM', value: '128 GB DDR5' },
      { label: 'stocare', value: '2 TB NVMe SSD' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'IP dedicat', value: 'IPv4' },
      { label: 'root access', value: 'complet' },
      { label: 'os', value: 'Ubuntu / Debian / AlmaLinux' },
      { label: 'protecție DDoS', value: 'inclusă' },
      { label: 'rețea', value: '10 Gbps' },
      { label: 'asistență ticket', value: '24/7 prioritar' },
    ],
  },
]

const benefits = [
  { icon: Cpu, title: 'Procesoare Performante', desc: 'AMD Ryzen și Intel Core Ultra de ultimă generație pentru performanță maximă.' },
  { icon: Database, title: 'RAM DDR5', desc: 'Memorie rapidă DDR5 pentru aplicații moderne și workload-uri intensive.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare enterprise cu viteze de până la 7000 MB/s.' },
  { icon: Globe, title: 'Trafic nelimitat', desc: 'Trafic nelimitat la toate pachetele, fără restricții.' },
  { icon: Shield, title: 'Protecție DDoS Pro', desc: 'Protecție avansată DDoS cu mitigare în timp real.' },
  { icon: Lock, title: 'IPMI/KVM', desc: 'Acces remote la consolă pentru control total, chiar și offline.' },
  { icon: RefreshCw, title: 'Hardware Swap', desc: 'Înlocuire rapidă a componentelor defecte în caz de nevoie.' },
  { icon: Headphones, title: 'Suport prioritar 24/7', desc: 'Răspuns în maxim 15 minute pentru problemele critice.' },
]

export default function DedicatPage() {
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
                  <Cpu size={14} />
                  Servere Dedicate
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Servere Dedicate
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">AMD Ryzen & Intel Core Ultra</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Server fizic exclusiv cu procesoare AMD Ryzen 5 / 7 / 9 și Intel Core Ultra, RAM DDR5, SSD NVMe și trafic nelimitat. Root access complet, IP dedicat, protecție DDoS inclusă.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['de la 726 €/6 luni', 'Trafic nelimitat', 'Root access', 'IP dedicat IPv4'].map((tag) => (
                    <span key={tag} className="bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <PageHeroVisual page="servere-dedicat" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Servere Dedicate</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Alege puterea de care ai nevoie
              </h2>
              <p className="text-muted-foreground text-lg">Toate serverele includ IPMI/KVM, protecție DDoS și suport prioritar 24/7.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-5 border-2 ${pkg.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>}
                  <div className="text-center mb-5">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{pkg.desc}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">€/{pkg.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">+ taxă instalare și configurare <span className="font-semibold text-foreground">50 €</span></p>
                  </div>
                  <ul className="space-y-1.5 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 text-sm">
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
                  <div className="mt-2 border border-red-400 bg-red-50 dark:bg-red-950/40 rounded-lg px-3 py-2 text-center">
                    <p className="text-xs font-bold text-red-600 dark:text-red-400">Administrare gratuită</p>
                  </div>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare server dedicat, configurat pentru performanță</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Hardware de ultimă generație cu procesoare AMD Ryzen și Intel Core Ultra pentru putere maximă.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hardware exclusiv 100%',
                  desc: 'Spre deosebire de VPS, serverele dedicate îți oferă un server fizic complet. Toate resursele sunt ale tale - CPU, RAM, stocare, fără nicio partajare.',
                },
                {
                  title: 'Control total',
                  desc: 'Acces root complet și IPMI/KVM pentru control total asupra serverului. Instalează orice sistem de operare și configurează exact cum ai nevoie.',
                },
                {
                  title: 'Scalare hardware',
                  desc: 'Ai nevoie de mai multă putere? Upgrade-ul la un server mai puternic se face rapid, cu migrare asistată și downtime minim.',
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

        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce servere dedicate la FXF?</h2>
              <p className="text-muted-foreground">Hardware enterprise și suport expert pentru proiecte critice.</p>
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

        {/* SEO Content */}
        <section className="py-14 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-sm max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Servere Dedicate în România - Hardware Performant</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serverele dedicate oferă cea mai înaltă formă de hosting - un server fizic complet dedicat proiectului tău, fără nicio formă de partajare a resurselor. Aceasta înseamnă performanță maximă, securitate totală și control complet asupra întregului stack hardware și software.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toate serverele noastre dedicate sunt echipate cu procesoare AMD Ryzen sau Intel Core Ultra de ultimă generație, memorie RAM DDR5 pentru performanță maximă, și stocare SSD NVMe enterprise cu viteze de până la 7000 MB/s.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cu acces IPMI/KVM, ai control total asupra serverului chiar și când sistemul de operare nu răspunde. Suportul nostru prioritar garantează răspuns în maxim 15 minute pentru problemele critice, iar echipa de administratori de sistem este disponibilă 24/7 pentru asistență tehnică.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ai nevoie de configurație custom?</h2>
            <p className="text-white/60 text-lg mb-8">Contactează-ne pentru servere personalizate adaptate exact nevoilor tale.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
              Solicită ofertă personalizată <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
