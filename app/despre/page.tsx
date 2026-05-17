import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Target, Zap, Heart, Shield, Users, Server, Award, Clock, MapPin, Briefcase } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Despre FXF Web Hosting | Găzduire Web România',
  description:
    'FXF Web Hosting - furnizor de găzduire web în România din 2020. Servere SSD NVMe în Germania, uptime 99.9%, suport 24/7. Peste 500 de clienți activi.',
  keywords: [
    'fxf web hosting',
    'gazduire web romania',
    'despre fxf',
    'hosting romania',
    'furnizor hosting',
  ],
  openGraph: {
    title: 'Despre FXF Web Hosting | Găzduire Web România',
    description: 'FXF Web Hosting - furnizor de găzduire web în România din 2020. Servere SSD NVMe, uptime 99.9%, suport 24/7.',
    url: 'https://fxfweb.ro/despre',
  },
  alternates: {
    canonical: 'https://fxfweb.ro/despre',
  },
}

const values = [
  {
    icon: Target,
    title: 'Performanță Garantată',
    desc: 'Servere SSD NVMe ultrarapide cu uptime 99.9% garantat. Dacă nu respectăm promisiunea, primești credit.',
  },
  {
    icon: Shield,
    title: 'Securitate Avansată',
    desc: 'Imunify360, firewall WAF, protecție DDoS și backup-uri zilnice automate pentru siguranța datelor tale.',
  },
  {
    icon: Heart,
    title: 'Suport Real 24/7',
    desc: 'Echipă tehnică disponibilă non-stop prin telefon, email sau ticket. Răspuns în maxim 4 ore garantat.',
  },
]

const stats = [
  { number: '200+', label: 'Clienți Activi', desc: 'Site-uri găzduite pe serverele noastre' },
  { number: '99.9%', label: 'Uptime', desc: 'Disponibilitate garantată' },
  { number: '5+', label: 'Ani Experiență', desc: 'În industria hosting' },
  { number: '24/7', label: 'Suport', desc: 'Disponibil non-stop' },
]

const serverSpecs = [
  { label: 'Procesor', value: '64 Core CPU' },
  { label: 'Memorie', value: '96GB RAM DDR5' },
  { label: 'Stocare', value: '6x 1TB SSD NVMe' },
  { label: 'Redundanță', value: 'Raid 10' },
  { label: 'Sistem operare', value: 'CloudLinux' },
  { label: 'Locație', value: 'Datacenter Germania' },
]

export default function DespreNoi() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-14 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/50 font-semibold text-sm uppercase tracking-widest mb-3">
                  Despre FXF Web Hosting
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 text-balance">
                  Găzduire web profesională din România
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  FXF Web Hosting oferă servicii de găzduire web de înaltă calitate din 2021. 
                  Cu servere SSD NVMe în Germania și o echipă de suport dedicată 24/7, suntem 
                  alegerea de încredere pentru peste 200 de clienți activi din România.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: MapPin, text: 'Servere în Germania' },
                    { icon: Clock, text: '5+ ani experiență' },
                    { icon: Briefcase, text: '200+ clienți activi' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-white/60 text-sm">
                      <item.icon size={14} />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <PageHeroVisual page="despre" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/0 border border-primary/10 rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-3">Misiunea Noastră</h3>
                <p className="text-foreground text-sm leading-relaxed mb-3">
                  Să oferim servicii de găzduire web de calitate enterprise la prețuri accesibile 
                  pentru afacerile din România.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Credem că fiecare afacere merită o prezență online rapidă și sigură, fără a fi 
                  nevoie să plătească sume exorbitante pentru hosting de calitate.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent-brand/5 to-accent-brand/0 border border-accent-brand/10 rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-accent-brand/10 flex items-center justify-center mb-5">
                  <Zap size={24} className="text-accent-brand" />
                </div>
                <h3 className="font-display font-bold text-xl text-accent-brand mb-3">Viziunea Noastră</h3>
                <p className="text-foreground text-sm leading-relaxed mb-3">
                  Să devenim furnizorul de găzduire web preferat în România, cunoscut pentru 
                  performanță, suport excepțional și prețuri corecte.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Investim constant în tehnologie și în echipa noastră pentru a oferi cea mai 
                  bună experiență clienților noștri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/20 card-hover"
                >
                  <p className="font-display text-4xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="font-semibold text-foreground text-sm mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-xs">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                De ce să ne alegi
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary leading-tight text-balance">
                Valori care ne ghidează
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Server Specs */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Infrastructură
              </p>
              <h2 className="font-display text-3xl font-bold text-primary">
                Specificații Server
              </h2>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {serverSpecs.map((spec) => (
                  <div key={spec.label} className="text-center">
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
                    <p className="font-bold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: Server, title: 'Servere NVMe ultrarapide', desc: 'Stocare SSD NVMe de ultimă generație pentru viteze de încărcare sub 1 secundă.' },
                { icon: Shield, title: 'Securitate avansată', desc: 'Imunify360, firewall WAF, scanare malware și protecție DDoS incluse gratuit.' },
                { icon: Award, title: 'cPanel inclus', desc: 'Panou de control profesional pentru gestionarea ușoară a hosting-ului tău.' },
                { icon: Users, title: 'Suport dedicat', desc: 'Echipă tehnică disponibilă 24/7 cu timp de răspuns sub 4 ore garantat.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
              Gata să începi cu noi?
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Beneficiezi de 10% reducere la prima comandă cu codul FXF10.
            </p>
            <Link
              href="/servicii/gazduire-web"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Vezi pachetele de hosting <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
