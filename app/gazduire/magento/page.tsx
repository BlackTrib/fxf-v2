import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Layers, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Database, Cpu, Lock, RefreshCw, CreditCard } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Găzduire Magento România | Hosting Enterprise de la 105 € | FXF',
  description: 'Găzduire Magento 2 optimizată pe servere SSD NVMe. Elasticsearch, Redis, Varnish cache, resurse dedicate enterprise. Suport tehnic specializat 24/7!',
  keywords: ['găzduire magento', 'hosting magento', 'magento 2 românia', 'hosting enterprise', 'găzduire e-commerce magento'],
  openGraph: {
    title: 'Găzduire Magento România | Hosting Enterprise de la 105 € | FXF',
    description: 'Găzduire Magento 2 optimizată cu Elasticsearch, Redis și Varnish cache pentru performanță enterprise.',
    url: 'https://fxfweb.ro/gazduire/magento',
  },
  alternates: { canonical: 'https://fxfweb.ro/gazduire/magento' },
}

const packages = [
  {
    name: 'Magento Start',
    price: '105',
    period: '6 luni',
    desc: 'Pentru magazine Magento noi cu până la 1000 produse.',
    features: [
      { label: 'spațiu alocat', value: '30GB' },
      { label: 'mediu stocare', value: 'NVMe' },
      { label: 'domenii găzduite', value: 'nelimitat' },
      { label: 'baze de date', value: 'nelimitat' },
      { label: 'adrese de mail', value: 'nelimitat' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'licență', value: "Let's Encrypt SSL" },
      { label: 'share ip', value: 'ipv4 sau ipv6' },
      { label: 'tools', value: 'cPanel + JetBackup' },
      { label: 'plugins', value: 'LiteSpeed + Imunify' },
      { label: 'backup', value: '24 din 24 ore' },
      { label: 'info server', value: '3CPU / 3GB ram' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
  {
    name: 'Magento Business',
    price: '115',
    period: '6 luni',
    desc: 'Ideal pentru magazine în creștere cu mii de produse.',
    popular: true,
    features: [
      { label: 'spațiu alocat', value: '40GB' },
      { label: 'mediu stocare', value: 'NVMe' },
      { label: 'domenii găzduite', value: 'nelimitat' },
      { label: 'baze de date', value: 'nelimitat' },
      { label: 'adrese de mail', value: 'nelimitat' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'licență', value: "Let's Encrypt SSL" },
      { label: 'share ip', value: 'ipv4 sau ipv6' },
      { label: 'tools', value: 'cPanel + JetBackup' },
      { label: 'plugins', value: 'LiteSpeed + Imunify' },
      { label: 'backup', value: '24 din 24 ore' },
      { label: 'info server', value: '3CPU / 3GB ram' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
  {
    name: 'Magento Pro',
    price: '124',
    period: '6 luni',
    desc: 'Pentru magazine enterprise cu trafic intens.',
    features: [
      { label: 'spațiu alocat', value: '50GB' },
      { label: 'mediu stocare', value: 'NVMe' },
      { label: 'domenii găzduite', value: 'nelimitat' },
      { label: 'baze de date', value: 'nelimitat' },
      { label: 'adrese de mail', value: 'nelimitat' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'licență', value: "Let's Encrypt SSL" },
      { label: 'share ip', value: 'ipv4 sau ipv6' },
      { label: 'tools', value: 'cPanel + JetBackup' },
      { label: 'plugins', value: 'LiteSpeed + Imunify' },
      { label: 'backup', value: '24 din 24 ore' },
      { label: 'info server', value: '3CPU / 3GB ram' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
  {
    name: 'Magento Enterprise',
    price: '143',
    period: '6 luni',
    desc: 'Putere maximă pentru magazine Magento de mari dimensiuni.',
    features: [
      { label: 'spațiu alocat', value: '65GB' },
      { label: 'mediu stocare', value: 'NVMe' },
      { label: 'domenii găzduite', value: 'nelimitat' },
      { label: 'baze de date', value: 'nelimitat' },
      { label: 'adrese de mail', value: 'nelimitat' },
      { label: 'trafic lunar', value: 'nelimitat' },
      { label: 'licență', value: "Let's Encrypt SSL" },
      { label: 'share ip', value: 'ipv4 sau ipv6' },
      { label: 'tools', value: 'cPanel + JetBackup' },
      { label: 'plugins', value: 'LiteSpeed + Imunify' },
      { label: 'backup', value: '24 din 24 ore' },
      { label: 'info server', value: '4CPU / 4GB ram' },
      { label: 'asistență ticket', value: '24/7' },
    ],
  },
]

const benefits = [
  { icon: Database, title: 'Elasticsearch Inclus', desc: 'Motor de căutare Elasticsearch pentru căutări rapide și relevante în catalog.' },
  { icon: Zap, title: 'Redis Cache', desc: 'Redis pentru cache sesiuni și obiecte, reducând dramatic timpul de răspuns.' },
  { icon: HardDrive, title: 'Varnish Cache', desc: 'Varnish pentru full-page cache și încărcare instant a paginilor.' },
  { icon: CreditCard, title: 'SSL Gratuit', desc: 'Certificat Let\'s Encrypt pentru plăți securizate PCI DSS.' },
  { icon: Clock, title: 'Backup Zilnic', desc: 'Backup automat cu JetBackup pentru protecția completă a magazinului.' },
  { icon: Lock, title: 'Imunify360', desc: 'Protecție avansată împotriva atacurilor și conformitate securitate.' },
  { icon: RefreshCw, title: 'Cron Jobs Dedicate', desc: 'Cron jobs pentru indexare, reindex și procese Magento automate.' },
  { icon: Cpu, title: 'PHP 8.x Optimizat', desc: 'PHP configurat cu extensii necesare Magento 2 (sodium, intl, etc.).' },
  { icon: Shield, title: 'Firewall Enterprise', desc: 'Protecție specifică pentru magazinele Magento și date clienți.' },
  { icon: HardDrive, title: 'SSD NVMe Enterprise', desc: 'Stocare ultrarapidă pentru bazele de date mari specifice Magento.' },
  { icon: RefreshCw, title: 'Uptime 99.99%', desc: 'Disponibilitate maximă pentru magazinele Magento enterprise.' },
  { icon: Headphones, title: 'Suport Magento 24/7', desc: 'Echipă specializată Magento cu experiență enterprise.' },
]

export default function GazduireMagentoPage() {
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
                  <Layers size={14} />
                  Găzduire Magento
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Găzduire Magento 2
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Performanță enterprise pentru magazine mari</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Găzduire Magento 2 profesională cu stack complet optimizat: Elasticsearch, Redis, Varnish cache și 
                  resurse dedicate. Ideal pentru magazine online enterprise cu mii de produse și trafic intens.
                </p>
              </div>
              <PageHeroVisual page="gazduire-magento" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete Magento</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Găzduire optimizată pentru Magento 2
              </h2>
              <p className="text-muted-foreground text-lg">Stack complet Magento cu Elasticsearch, Redis și Varnish pentru performanță enterprise.</p>
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
                      <span className="text-muted-foreground">€/{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-1.5 shrink-0" />
                        <span className="text-muted-foreground">
                          {f.label} <span className="font-bold text-foreground">{f.value}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                    Comandă acum
                  </Link>
                  <p className="text-xs text-muted-foreground text-center mt-2">Configurare și migrare <span className="font-semibold text-foreground">gratuit</span></p>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">Cod promoțional <span className="font-bold text-primary">FXF10</span> pentru 10% reducere!</p>
            </div>
          </div>
        </section>

        {/* Platform config info */}
        <section className="py-14 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare pachet, configurat special pentru Magento</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Magento este printre cele mai solicitante platforme de e-commerce. Fiecare plan FXF pentru Magento vine presetat cu toate componentele tehnice pe care Magento le necesită pentru stabilitate și viteză.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'PHP 8.x cu OPcache și extensii Magento',
                  desc: 'PHP OPcache activat cu parametri recomandați de Magento, alături de extensiile obligatorii — BCMath, Intl, SOAP, XSL și PDO — instalate și configurate înainte de a primi accesul la cont.',
                },
                {
                  title: 'MySQL cu setări pentru volume mari de date',
                  desc: 'Parametrii innodb_buffer_pool_size și query_cache_size sunt ajustați pentru a face față cataloagelor Magento cu zeci de mii de produse, atribute și configurații de preț.',
                },
                {
                  title: 'Cron jobs și generare fișiere statice',
                  desc: 'Cron job-urile necesare Magento pentru indexare, trimitere email și actualizare prețuri sunt pre-configurate, iar structura de directoare pub/ și var/ are permisiunile corecte din prima zi.',
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce găzduire Magento la FXF?</h2>
              <p className="text-muted-foreground">Stack complet Magento 2 cu tehnologii enterprise pentru magazine de mari dimensiuni.</p>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Găzduire Magento 2 Enterprise în România</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Magento 2 este cea mai puternică platformă open-source pentru e-commerce enterprise, oferind funcționalități avansate pentru magazine online cu mii de produse, trafic intens și cerințe complexe. Pachetele noastre de găzduire Magento sunt special concepute pentru a satisface cerințele tehnice exigente ale acestei platforme.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Stack-ul nostru complet Magento include Elasticsearch pentru căutări rapide și relevante în catalog, Redis pentru cache sesiuni și obiecte care reduce dramatic timpul de răspuns, și Varnish pentru full-page cache care asigură încărcare instant a paginilor.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toate pachetele includ configurații PHP optimizate cu extensiile necesare Magento 2, cron jobs dedicate pentru procesele de indexare și reindex automate, și suport tehnic specializat Magento disponibil 24/7 pentru asistență cu orice problemă tehnică.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Migrare Magento gratuită!</h2>
            <p className="text-white/60 text-lg mb-8">Ne ocupăm noi de tot - migrăm magazinul tău Magento de la orice furnizor de hosting.</p>
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
