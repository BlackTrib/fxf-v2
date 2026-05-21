import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cloud, Cpu, HardDrive, ArrowRight, Check, Zap, Shield, Clock, Headphones, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servere VPS și Dedicate România | FXF Web Hosting',
  description: 'Servere VPS Cloud și Servere Dedicate în România. Resurse garantate, root access, SSD NVMe, suport 24/7. Prețuri de la 150 lei/lună.',
  keywords: [
    'servere vps',
    'servere dedicate',
    'vps românia',
    'server dedicat',
    'cloud server',
    'hosting vps',
    'server virtual',
  ],
  openGraph: {
    title: 'Servere VPS și Dedicate România | FXF Web Hosting',
    description: 'Servere VPS Cloud și Dedicate cu resurse garantate, root access și SSD NVMe.',
    url: 'https://fxfweb.ro/servere',
  },
  alternates: {
    canonical: 'https://fxfweb.ro/servere',
  },
}

const servers = [
  {
    id: 'vps',
    href: '/servere/vps',
    icon: Cloud,
    title: 'VPS Cloud',
    subtitle: 'Servere virtuale private cu resurse dedicate',
    desc: 'Servere VPS cloud cu procesoare AMD EPYC, RAM DDR5 și SSD NVMe pentru performanță maximă. Root access complet, scalare flexibilă și suport 24/7. Ideal pentru aplicații web, API, baze de date și proiecte în creștere.',
    features: [
      'Resurse CPU/RAM dedicate (AMD EPYC)',
      'RAM DDR5 ultrarapidă',
      'Root access complet',
      'SSD NVMe rapid (160-1000GB)',
      'IP dedicat IPv4+IPv6',
      'DDoS inclus',
    ],
    price: 'de la 210 €/6 luni',
    color: 'bg-indigo-50',
  },
  {
    id: 'dedicat',
    href: '/servere/dedicat',
    icon: Cpu,
    title: 'Servere Dedicate',
    subtitle: 'Hardware dedicat pentru proiecte enterprise',
    desc: 'Servere fizice dedicate cu procesoare AMD Ryzen 5/7/9 și Intel Core Ultra, RAM DDR5, SSD NVMe Enterprise. Trafic nelimitat, 10 Gbps, root access complet și suport prioritar 24/7. Pentru baze de date mari și aplicații enterprise.',
    features: [
      'Procesoare AMD Ryzen / Intel Core Ultra',
      'RAM DDR5 (64GB - 128GB)',
      'SSD NVMe Enterprise (2TB)',
      'Trafic nelimitat',
      'Rețea 10 Gbps',
      'Root access + DDoS',
    ],
    price: 'de la 726 €/6 luni',
    color: 'bg-purple-50',
  },
  {
    id: 'storage',
    href: '/servere/storage',
    icon: HardDrive,
    title: 'Cloud Storage',
    subtitle: 'Stocare sigură cu protocoale profesionale',
    desc: 'Cloud storage cu trafic nelimitat, protocoale multiple (FTP, SFTP, WebDAV, Samba) și tool-uri profesionale (BorgBackup, Restic, Rclone). Backup automat, criptare AES-256 și acces de oriunde în siguranță.',
    features: [
      'Trafic nelimitat',
      'Protocoale: FTP, SFTP, WebDAV, Samba',
      'BorgBackup, Restic, Rclone inclus',
      'Criptare AES-256',
      'Usable as network drive',
      'Acces API și securizat',
    ],
    price: 'de la 150 €/6 luni',
    color: 'bg-green-50',
  },
]

const stats = [
  { value: '99.99%', label: 'Uptime garantat' },
  { value: '24/7', label: 'Suport tehnic' },
  { value: '< 1ms', label: 'Latență rețea' },
  { value: '10 Gbps', label: 'Conexiune' },
]

const whyUs = [
  { icon: Zap, title: 'Performanță maximă', desc: 'Procesoare de ultimă generație și stocare SSD NVMe pentru viteze incredibile.' },
  { icon: Shield, title: 'Securitate enterprise', desc: 'Firewall hardware, protecție DDoS și monitorizare continuă pentru siguranță.' },
  { icon: Clock, title: 'Uptime 99.99%', desc: 'Datacenter Tier III cu redundanță completă și generatoare de backup.' },
  { icon: Headphones, title: 'Suport expert 24/7', desc: 'Echipă de administratori de sistem disponibilă non-stop.' },
  { icon: Server, title: 'Root access complet', desc: 'Control total asupra serverului, instalează orice software dorești.' },
  { icon: HardDrive, title: 'Backup inclus', desc: 'Backup-uri automate pentru protecția datelor tale importante.' },
]

export default function ServerePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'oklch(0.55 0.22 280)' }} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Server size={14} />
                Servere în România
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Servere VPS și Dedicate
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Putere și control pentru proiecte mari
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                De la servere VPS cloud scalabile la servere dedicate de înaltă performanță — 
                resurse garantate, root access complet și suport tehnic expert 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/servere/vps"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Vezi VPS Cloud
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/servere/dedicat"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Vezi Servere Dedicate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-accent-brand">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servers */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Tipuri de servere
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Alege serverul potrivit pentru tine
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                VPS pentru flexibilitate și scalabilitate, sau server dedicat pentru putere maximă și control total.
              </p>
            </div>

            <div className="space-y-8">
              {servers.map((server, i) => {
                const Icon = server.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={server.id}
                    className={`rounded-3xl p-8 lg:p-10 ${server.color} border border-border/50`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Text */}
                      <div className={!isEven ? 'lg:col-start-2' : ''}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                          <Icon size={22} className="text-primary" />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2 text-balance">
                          {server.title}
                        </h3>
                        <p className="text-accent-brand font-medium text-sm mb-4">{server.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">{server.desc}</p>
                        <p className="text-lg font-bold text-primary mb-6">{server.price}</p>
                        <Link
                          href={server.href}
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                        >
                          Vezi pachetele <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* Features list */}
                      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <div className="bg-white rounded-2xl p-6 border border-border">
                          <h4 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
                            Ce include
                          </h4>
                          <ul className="space-y-3">
                            {server.features.map((f) => (
                              <li key={f} className="flex items-start gap-2.5">
                                <Check size={15} className="text-accent-brand mt-0.5 shrink-0" />
                                <span className="text-sm text-foreground/80">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                De ce servere FXF
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Infrastructură de încredere
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Servere de ultimă generație în datacenter Tier III din Germania cu conectivitate premium.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-border card-hover">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Nu știi ce server să alegi?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contactează-ne și te ajutăm să alegi soluția potrivită pentru proiectul tău.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Solicită consultanță gratuită <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
