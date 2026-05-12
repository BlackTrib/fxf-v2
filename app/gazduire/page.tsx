import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Server, HardDrive, ShoppingCart, ShoppingBag, Rocket, ArrowRight, Check, Zap, Shield, Clock, Headphones, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicii Găzduire Web România | FXF Web Hosting',
  description: 'Găzduire web SSD NVMe, VPS și hosting optimizat pentru WordPress, PrestaShop, OpenCart și Magento. Prețuri de la 55 lei/6 luni. SSL gratuit, cPanel, suport 24/7.',
  keywords: [
    'găzduire web',
    'hosting românia',
    'găzduire wordpress',
    'găzduire prestashop',
    'găzduire opencart',
    'găzduire magento',
    'vps românia',
    'hosting ssd',
    'cpanel hosting',
    'ssl gratuit',
    'web hosting',
  ],
  openGraph: {
    title: 'Servicii Găzduire Web România | FXF Web Hosting',
    description: 'Găzduire web profesională pe servere SSD NVMe. WordPress, PrestaShop, OpenCart, Magento. SSL gratuit, cPanel, suport 24/7.',
    url: 'https://fxfweb.ro/gazduire',
  },
  alternates: {
    canonical: 'https://fxfweb.ro/gazduire',
  },
}

const services = [
  {
    id: 'gazduire-web',
    href: '/gazduire/web',
    icon: Server,
    title: 'Găzduire Web',
    subtitle: 'Pachete hosting SSD NVMe pentru orice tip de site',
    desc: 'Găzduire web profesională pe servere ultrarapide SSD NVMe. Pachete de la 55 lei/6 luni cu SSL gratuit, cPanel, backup zilnic și suport tehnic 24/7. Ideal pentru site-uri de prezentare, bloguri și aplicații web.',
    features: [
      'Stocare SSD NVMe rapidă',
      'cPanel & LiteSpeed incluse',
      'SSL Let\'s Encrypt gratuit',
      'Backup zilnic JetBackup',
      'Domenii & email nelimitate',
      'Suport tehnic 24/7',
    ],
    price: 'de la 55 lei/6 luni',
    color: 'bg-blue-50',
  },
  {
    id: 'gazduire-wordpress',
    href: '/gazduire/wordpress',
    icon: HardDrive,
    title: 'Găzduire WordPress',
    subtitle: 'Hosting optimizat special pentru WordPress',
    desc: 'Găzduire optimizată pentru WordPress cu LiteSpeed Cache pre-instalat pentru viteză maximă. Include instalare cu un click, actualizări automate și protecție avansată împotriva atacurilor. Configurație specială pentru performanță WordPress.',
    features: [
      'LiteSpeed Cache pre-instalat',
      'Instalare WordPress 1-click',
      'Actualizări automate opționale',
      'Protecție Imunify360',
      'Staging environment',
      'Optimizare automată',
    ],
    price: 'de la 83 lei/6 luni',
    color: 'bg-cyan-50',
  },
  {
    id: 'gazduire-prestashop',
    href: '/gazduire/prestashop',
    icon: ShoppingCart,
    title: 'Găzduire PrestaShop',
    subtitle: 'Hosting performant pentru magazine PrestaShop',
    desc: 'Găzduire optimizată pentru PrestaShop cu resurse dedicate și configurații speciale pentru e-commerce. Performanță ridicată pentru magazine cu mii de produse și trafic intens. Configurație specifică pentru platforma PrestaShop.',
    features: [
      'Configurație optimizată PrestaShop',
      'Resurse dedicate e-commerce',
      'Cache avansat pentru produse',
      'Suport tehnic specializat',
      'Backup zilnic pentru siguranță',
      'SSL gratuit pentru plăți',
    ],
    price: 'de la 83 lei/6 luni',
    color: 'bg-emerald-50',
  },
  {
    id: 'gazduire-opencart',
    href: '/gazduire/opencart',
    icon: ShoppingBag,
    title: 'Găzduire OpenCart',
    subtitle: 'Hosting optimizat pentru magazine OpenCart',
    desc: 'Găzduire optimizată pentru OpenCart cu auto-instalare, MySQL optimizat și resurse dedicate pentru magazine cu mii de produse. SSL gratuit pentru plăți securizate. Configurație specifică pentru platforma OpenCart.',
    features: [
      'Auto-instalare OpenCart',
      'MySQL optimizat e-commerce',
      'LiteSpeed Cache inclus',
      'SSL gratuit pentru plăți',
      'Backup zilnic automat',
      'Suport specializat OpenCart',
    ],
    price: 'de la 83 lei/6 luni',
    color: 'bg-amber-50',
  },
  {
    id: 'gazduire-magento',
    href: '/gazduire/magento',
    icon: Layers,
    title: 'Găzduire Magento',
    subtitle: 'Hosting de înaltă performanță pentru Magento',
    desc: 'Găzduire premium optimizată pentru Magento 2, cu resurse dedicate și configurații enterprise. Ideal pentru magazine online mari cu mii de produse, trafic intens și cerințe avansate de performanță.',
    features: [
      'Configurație optimizată Magento 2',
      'Resurse CPU & RAM dedicate',
      'Elasticsearch pre-instalat',
      'Redis & Varnish cache',
      'SSL gratuit pentru plăți',
      'Suport specializat Magento',
    ],
    price: 'de la 207 lei/6 luni',
    color: 'bg-orange-50',
  },
  {
    id: 'gazduire-performance',
    href: '/gazduire/performance',
    icon: Rocket,
    title: 'Găzduire Performance',
    subtitle: 'Resurse dedicate pentru site-uri cu trafic intens',
    desc: 'Găzduire Performance cu resurse CPU și RAM garantate. Ideal pentru site-uri cu trafic intens, aplicații web complexe și proiecte enterprise care necesită putere maximă și performanță de top.',
    features: [
      'CPU & RAM garantate',
      'LiteSpeed Enterprise',
      'Backup de 2x pe zi',
      'Uptime 99.99% SLA',
      'CDN inclus',
      'Suport prioritar 30 min',
    ],
    price: 'de la 455 lei/6 luni',
    color: 'bg-rose-50',
  },
]

const stats = [
  { value: '99.9%', label: 'Uptime garantat' },
  { value: '500+', label: 'Clienți activi' },
  { value: '24/7', label: 'Suport tehnic' },
  { value: '5x', label: 'Mai rapid cu NVMe' },
]

const whyUs = [
  { icon: Zap, title: 'Servere NVMe ultrarapide', desc: 'Stocare SSD NVMe care crește viteza de încărcare de până la 5 ori față de HDD tradițional.' },
  { icon: Shield, title: 'Securitate avansată', desc: 'Imunify360, firewall puternic și protecție DDoS pentru siguranța datelor tale.' },
  { icon: Clock, title: 'Uptime 99.9% garantat', desc: 'Datacenter Germania cu redundanță completă pentru disponibilitate maximă.' },
  { icon: Headphones, title: 'Suport 24/7', desc: 'Echipa noastră de suport tehnic este disponibilă non-stop prin telefon, email sau ticket.' },
  { icon: Server, title: 'cPanel & LiteSpeed', desc: 'Panou de control intuitiv și server web LiteSpeed pentru performanță maximă.' },
  { icon: HardDrive, title: 'Backup zilnic automat', desc: 'JetBackup face backup-uri zilnice cu restaurare cu un click în caz de nevoie.' },
]

export default function GazduirePage() {
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
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'oklch(0.55 0.22 250)' }} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Layers size={14} />
                Servicii complete de găzduire web
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Servicii Găzduire Web
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Hosting rapid, sigur și accesibil
                </span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                De la găzduire shared până la servere dedicate — servere SSD NVMe în Germania, 
                cPanel, SSL gratuit și suport tehnic 24/7. Alege pachetul potrivit pentru afacerea ta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/gazduire/web"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Vezi pachetele de hosting
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Contactează-ne
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

        {/* Services */}
        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Pachetele noastre
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Soluții de hosting pentru orice nevoie
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                De la site-uri mici până la magazine online cu trafic intens, avem pachetul 
                potrivit pentru tine.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, i) => {
                const Icon = service.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={service.id}
                    className={`rounded-3xl p-8 lg:p-10 ${service.color} border border-border/50`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Text */}
                      <div className={!isEven ? 'lg:col-start-2' : ''}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                          <Icon size={22} className="text-primary" />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2 text-balance">
                          {service.title}
                        </h3>
                        <p className="text-accent-brand font-medium text-sm mb-4">{service.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                        <p className="text-lg font-bold text-primary mb-6">{service.price}</p>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
                        >
                          Află mai multe <ArrowRight size={14} />
                        </Link>
                      </div>

                      {/* Features list */}
                      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                        <div className="bg-white rounded-2xl p-6 border border-border">
                          <h4 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
                            Ce include
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((f) => (
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
                De ce FXF Web Hosting
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4 text-balance">
                Tehnologie enterprise la prețuri accesibile
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Serverele noastre sunt echipate cu cele mai noi tehnologii pentru performanță și securitate maximă.
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
            <div className="inline-flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <span>Reducere 10%</span>
              <span className="bg-white/20 px-2 py-0.5 rounded">cod: FXF10</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Începe acum cu găzduire profesională
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Plasează o comandă nouă și beneficiezi de 10% reducere cu codul promoțional FXF10.
            </p>
            <Link
              href="/gazduire/web"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Comandă acum <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
