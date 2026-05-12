import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cloud, ArrowRight, Check, Server, Shield, Zap, Settings, HardDrive, Globe, Cpu, RefreshCw, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VPS Cloud România | Servere Virtuale Private de la 150 lei | FXF',
  description: 'Servere VPS cloud cu resurse dedicate. Root access, SSD NVMe, IP dedicat, alegere OS Linux/Windows. Scalare flexibilă și suport 24/7. De la 150 lei/lună.',
  keywords: ['vps românia', 'server virtual', 'vps cloud', 'vps ssd', 'server vps', 'cloud hosting'],
  openGraph: {
    title: 'VPS Cloud România | Servere Virtuale Private de la 150 lei | FXF',
    description: 'Servere VPS cu resurse dedicate, root access și SSD NVMe.',
    url: 'https://fxfweb.ro/servere/vps',
  },
  alternates: { canonical: 'https://fxfweb.ro/servere/vps' },
}

const features = [
  { icon: Server, title: 'Resurse dedicate', desc: 'CPU și RAM garantate, fără supraalocare.' },
  { icon: Settings, title: 'Root access', desc: 'Control total asupra serverului tău virtual.' },
  { icon: Zap, title: 'SSD NVMe rapid', desc: 'Stocare ultrarapidă pentru performanță maximă.' },
  { icon: Shield, title: 'IP dedicat', desc: 'Adresă IP proprie inclusă în fiecare pachet.' },
]

const packages = [
  { name: 'VPS Start', price: '150', cpu: '2 vCPU', ram: '4GB', storage: '50GB NVMe', bandwidth: '2TB', desc: 'Perfect pentru proiecte mici și dezvoltare.' },
  { name: 'VPS Pro', price: '299', cpu: '4 vCPU', ram: '8GB', storage: '100GB NVMe', bandwidth: '4TB', popular: true, desc: 'Ideal pentru aplicații web și site-uri cu trafic mediu.' },
  { name: 'VPS Business', price: '499', cpu: '6 vCPU', ram: '16GB', storage: '200GB NVMe', bandwidth: '8TB', desc: 'Pentru proiecte business și baze de date.' },
  { name: 'VPS Enterprise', price: '899', cpu: '8 vCPU', ram: '32GB', storage: '400GB NVMe', bandwidth: 'Nelimitat', desc: 'Putere maximă pentru aplicații enterprise.' },
]

const benefits = [
  { icon: Cpu, title: 'Procesoare de ultimă generație', desc: 'CPU-uri Intel Xeon și AMD EPYC pentru performanță maximă.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare pe discuri NVMe cu viteze de citire/scriere de până la 3500 MB/s.' },
  { icon: Globe, title: 'Alegere sistem operare', desc: 'Linux (Ubuntu, CentOS, Debian) sau Windows Server disponibil.' },
  { icon: Shield, title: 'Protecție DDoS', desc: 'Protecție împotriva atacurilor DDoS inclusă în toate pachetele.' },
  { icon: RefreshCw, title: 'Scalare instantanee', desc: 'Upgrade resurse în câteva minute, fără migrare sau downtime.' },
  { icon: Server, title: 'Panouri de control', desc: 'Opțional: cPanel, Plesk sau DirectAdmin la prețuri preferențiale.' },
  { icon: Zap, title: 'Rețea 10 Gbps', desc: 'Conectivitate de 10 Gbps pentru latență minimă și transfer rapid.' },
  { icon: Headphones, title: 'Suport tehnic 24/7', desc: 'Administratori de sistem disponibili non-stop pentru asistență.' },
]

export default function VPSPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Cloud size={14} />
                VPS Cloud
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                VPS Cloud
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Resurse dedicate, control total</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                Servere VPS cloud pentru proiecte care necesită resurse dedicate și control complet. 
                Root access, SSD NVMe și scalare flexibilă după nevoile tale.
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
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete VPS Cloud</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Alege configurația potrivită
              </h2>
              <p className="text-muted-foreground text-lg">Toate pachetele includ IP dedicat, root access și suport tehnic 24/7.</p>
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
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500" />{pkg.cpu}</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500" />{pkg.ram} RAM</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500" />{pkg.storage}</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500" />{pkg.bandwidth} trafic</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500" />IP dedicat</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={14} className="text-green-500" />Root access</li>
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce VPS Cloud la FXF?</h2>
              <p className="text-muted-foreground">Infrastructură de ultimă generație pentru proiecte care contează.</p>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">VPS Cloud în România - Servere Virtuale Private</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serverele VPS (Virtual Private Server) reprezintă soluția ideală pentru proiecte care au depășit limitele găzduirii shared, dar nu necesită încă un server dedicat. Cu un VPS, beneficiezi de resurse garantate într-un mediu izolat, oferind performanță constantă și securitate sporită.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toate serverele noastre VPS sunt echipate cu stocare SSD NVMe enterprise pentru viteze incredibile de I/O, și sunt conectate la o rețea de 10 Gbps pentru latență minimă. Protecția DDoS este inclusă în toate pachetele pentru a asigura disponibilitatea serviciilor tale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cu root access complet, ai control total asupra serverului și poți instala orice software necesită proiectul tău. Scalarea este instantanee - poți face upgrade la resurse mai mari în câteva minute, fără migrare sau downtime.
              </p>
            </div>
          </div>
        </section>

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
