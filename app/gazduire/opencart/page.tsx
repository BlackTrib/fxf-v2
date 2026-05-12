import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShoppingBag, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Database, Cpu, Lock, RefreshCw, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Găzduire OpenCart România | Hosting E-Commerce de la 83 lei | FXF',
  description: 'Găzduire OpenCart optimizată pe servere SSD NVMe. Auto-instalare OpenCart, configurație specială pentru magazine online, SSL gratuit. Suport tehnic 24/7!',
  keywords: ['găzduire opencart', 'hosting opencart', 'opencart românia', 'hosting magazin online', 'găzduire e-commerce opencart'],
  openGraph: {
    title: 'Găzduire OpenCart România | Hosting E-Commerce de la 83 lei | FXF',
    description: 'Găzduire OpenCart optimizată cu auto-instalare și configurație specială pentru magazine online.',
    url: 'https://fxfweb.ro/gazduire/opencart',
  },
  alternates: { canonical: 'https://fxfweb.ro/gazduire/opencart' },
}

const packages = [
  {
    name: 'OC Start',
    price: '83',
    period: '6 luni',
    desc: 'Perfect pentru magazine noi OpenCart cu până la 500 produse.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '5 GB' },
      { label: 'Magazine OpenCart', value: '1' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '1.5 Core' },
      { label: 'Memorie RAM', value: '1.5 GB' },
      { label: 'Auto-instalare OC', value: 'Inclus' },
    ],
  },
  {
    name: 'OC Business',
    price: '207',
    period: '6 luni',
    desc: 'Ideal pentru magazine în creștere cu până la 2000 produse.',
    popular: true,
    features: [
      { label: 'Spațiu SSD NVMe', value: '15 GB' },
      { label: 'Magazine OpenCart', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '2 Core' },
      { label: 'Memorie RAM', value: '2.5 GB' },
      { label: 'Auto-instalare OC', value: 'Inclus' },
    ],
  },
  {
    name: 'OC Pro',
    price: '455',
    period: '6 luni',
    desc: 'Pentru magazine mari cu mii de produse și trafic intens.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '35 GB' },
      { label: 'Magazine OpenCart', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '3 Core' },
      { label: 'Memorie RAM', value: '3.5 GB' },
      { label: 'Auto-instalare OC', value: 'Inclus' },
    ],
  },
  {
    name: 'OC Enterprise',
    price: '621',
    period: '6 luni',
    desc: 'Putere maximă pentru magazine OpenCart enterprise.',
    features: [
      { label: 'Spațiu SSD NVMe', value: '60 GB' },
      { label: 'Magazine OpenCart', value: 'Nelimitat' },
      { label: 'Baze de date MySQL', value: 'Nelimitat' },
      { label: 'Conturi email', value: 'Nelimitat' },
      { label: 'Trafic lunar', value: 'Nelimitat' },
      { label: 'Resurse CPU', value: '4 Core' },
      { label: 'Memorie RAM', value: '4.5 GB' },
      { label: 'Auto-instalare OC', value: 'Inclus' },
    ],
  },
]

const benefits = [
  { icon: Zap, title: 'Auto-Instalare OpenCart', desc: 'Instalare OpenCart cu un click direct din cPanel, configurată și gata de utilizare.' },
  { icon: Database, title: 'MySQL Optimizat', desc: 'Baze de date MySQL configurate pentru interogări e-commerce rapide și eficiente.' },
  { icon: HardDrive, title: 'LiteSpeed Cache', desc: 'Cache avansat pentru pagini produse, categorii și navigare rapidă.' },
  { icon: CreditCard, title: 'SSL Gratuit', desc: 'Certificat Let\'s Encrypt pentru plăți securizate și încredere clienți.' },
  { icon: Clock, title: 'Backup Zilnic', desc: 'Backup automat cu JetBackup pentru protecția produselor și comenzilor.' },
  { icon: Lock, title: 'Imunify360', desc: 'Protecție avansată împotriva atacurilor și malware specific e-commerce.' },
  { icon: RefreshCw, title: 'Extensii Compatibile', desc: 'Compatibilitate deplină cu toate extensiile și modulele OpenCart.' },
  { icon: Cpu, title: 'PHP Optimizat', desc: 'PHP 8.x configurat special pentru cerințele OpenCart.' },
  { icon: Shield, title: 'Firewall E-Commerce', desc: 'Protecție specifică pentru plăți online și date clienți.' },
  { icon: HardDrive, title: 'SSD NVMe', desc: 'Stocare ultrarapidă pentru încărcare instant a catalogului de produse.' },
  { icon: RefreshCw, title: 'Uptime 99.9%', desc: 'Monitorizare 24/7 cu garanție SLA pentru disponibilitate maximă.' },
  { icon: Headphones, title: 'Suport OC 24/7', desc: 'Echipă cu experiență OpenCart disponibilă non-stop.' },
]

export default function GazduireOpencartPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <ShoppingBag size={14} />
                Găzduire OpenCart
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Găzduire OpenCart
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Optimizată pentru magazine online ușor de administrat</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                Găzduire OpenCart profesională cu auto-instalare, configurație optimizată pentru e-commerce și 
                suport tehnic specializat 24/7. Ideal pentru magazine cu interfață intuitivă și administrare simplă.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete OpenCart</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Găzduire optimizată pentru OpenCart
              </h2>
              <p className="text-muted-foreground text-lg">Auto-instalare, configurație e-commerce și SSL gratuit pentru plăți securizate.</p>
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce găzduire OpenCart la FXF?</h2>
              <p className="text-muted-foreground">Funcționalități speciale pentru OpenCart configurate pentru performanță și ușurință în administrare.</p>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Găzduire OpenCart Profesională în România</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OpenCart este o platformă open-source populară pentru magazine online, renumită pentru interfața sa intuitivă de administrare și ușurința în configurare. Pachetele noastre de găzduire OpenCart sunt special optimizate pentru a asigura performanță excelentă acestei platforme.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fiecare pachet include auto-instalare OpenCart prin cPanel, permițând lansarea magazinului tău online în câteva minute. Configurațiile MySQL sunt optimizate pentru interogări rapide, iar LiteSpeed Cache asigură încărcare instant a paginilor de produse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cu suport complet pentru toate extensiile și modulele OpenCart din marketplace, poți personaliza magazinul exact după nevoile tale. Certificatul SSL gratuit și protecția Imunify360 asigură securitatea tranzacțiilor și a datelor clienților.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Migrare OpenCart gratuită!</h2>
            <p className="text-white/60 text-lg mb-8">Ne ocupăm noi de tot - migrăm magazinul tău OpenCart de la orice furnizor de hosting.</p>
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
