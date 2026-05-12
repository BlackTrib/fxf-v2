import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cpu, ArrowRight, Check, Server, Shield, Zap, HardDrive, Globe, RefreshCw, Headphones, Lock, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servere Dedicate România | Hardware Enterprise de la 499 lei | FXF',
  description: 'Servere dedicate cu hardware exclusiv. Procesoare Intel Xeon, RAM DDR4 ECC, SSD NVMe Enterprise. Bandwidth nelimitat și suport prioritar 24/7. De la 499 lei/lună.',
  keywords: ['servere dedicate', 'server dedicat românia', 'dedicated server', 'server fizic', 'hosting enterprise'],
  openGraph: {
    title: 'Servere Dedicate România | Hardware Enterprise de la 499 lei | FXF',
    description: 'Servere dedicate cu hardware exclusiv, procesoare Intel Xeon și suport prioritar 24/7.',
    url: 'https://fxfweb.ro/servere/dedicat',
  },
  alternates: { canonical: 'https://fxfweb.ro/servere/dedicat' },
}

const features = [
  { icon: Cpu, title: 'Hardware dedicat', desc: 'Server fizic exclusiv pentru tine, fără virtualizare.' },
  { icon: Shield, title: 'Securitate totală', desc: 'Izolare completă și control total asupra hardware-ului.' },
  { icon: Zap, title: 'Performanță maximă', desc: 'Procesoare Intel Xeon și RAM DDR4 ECC.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare ultrarapidă pentru aplicații exigente.' },
]

const packages = [
  { 
    name: 'Dedicat Start', 
    price: '499', 
    cpu: 'Intel Xeon E-2136', 
    cores: '6 Core / 12 Threads',
    ram: '32GB DDR4 ECC', 
    storage: '2x 500GB NVMe', 
    bandwidth: '10TB',
    desc: 'Perfect pentru proiecte medii și baze de date.'
  },
  { 
    name: 'Dedicat Pro', 
    price: '799', 
    cpu: 'Intel Xeon E-2288G', 
    cores: '8 Core / 16 Threads',
    ram: '64GB DDR4 ECC', 
    storage: '2x 1TB NVMe', 
    bandwidth: '30TB',
    popular: true,
    desc: 'Ideal pentru aplicații business și magazine mari.'
  },
  { 
    name: 'Dedicat Business', 
    price: '1299', 
    cpu: 'AMD EPYC 7302P', 
    cores: '16 Core / 32 Threads',
    ram: '128GB DDR4 ECC', 
    storage: '4x 1TB NVMe RAID', 
    bandwidth: 'Nelimitat',
    desc: 'Pentru aplicații enterprise cu trafic intens.'
  },
  { 
    name: 'Dedicat Enterprise', 
    price: '2499', 
    cpu: 'AMD EPYC 7402P', 
    cores: '24 Core / 48 Threads',
    ram: '256GB DDR4 ECC', 
    storage: '4x 2TB NVMe RAID', 
    bandwidth: 'Nelimitat',
    desc: 'Putere maximă pentru cele mai exigente proiecte.'
  },
]

const benefits = [
  { icon: Cpu, title: 'Procesoare Enterprise', desc: 'Intel Xeon și AMD EPYC de ultimă generație pentru performanță maximă.' },
  { icon: Database, title: 'RAM DDR4 ECC', desc: 'Memorie cu corectare erori pentru stabilitate și fiabilitate maximă.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare enterprise cu viteze de până la 7000 MB/s și redundanță RAID.' },
  { icon: Globe, title: 'Bandwidth generos', desc: 'Trafic generos sau nelimitat în funcție de pachet, la 10 Gbps.' },
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
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Cpu size={14} />
                Servere Dedicate
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Servere Dedicate
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Hardware exclusiv pentru performanță maximă</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                Servere fizice dedicate cu procesoare Intel Xeon și AMD EPYC, RAM DDR4 ECC și stocare SSD NVMe enterprise. 
                Putere brută pentru cele mai exigente proiecte.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{f.title}</h3>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                )
              })}
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
                <div key={pkg.name} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 min-h-[32px]">{pkg.desc}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground text-sm">lei/lună</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500 shrink-0" /><span className="text-xs">{pkg.cpu}</span></li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500 shrink-0" /><span className="text-xs">{pkg.cores}</span></li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500 shrink-0" /><span className="text-xs">{pkg.ram}</span></li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500 shrink-0" /><span className="text-xs">{pkg.storage}</span></li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500 shrink-0" /><span className="text-xs">{pkg.bandwidth} trafic</span></li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500 shrink-0" /><span className="text-xs">IPMI/KVM</span></li>
                  </ul>
                  <Link href="/contact" className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                    Comandă acum
                  </Link>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Servere Dedicate în România - Hardware Enterprise</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serverele dedicate oferă cea mai înaltă formă de hosting - un server fizic complet dedicat proiectului tău, fără nicio formă de partajare a resurselor. Aceasta înseamnă performanță maximă, securitate totală și control complet asupra întregului stack hardware și software.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toate serverele noastre dedicate sunt echipate cu procesoare Intel Xeon sau AMD EPYC de ultimă generație, memorie RAM DDR4 ECC pentru stabilitate maximă, și stocare SSD NVMe enterprise cu viteze de până la 7000 MB/s. Configurațiile RAID asigură redundanța datelor pentru protecție împotriva defectării hardware.
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
