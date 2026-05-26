import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Server, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Globe, Database, Cpu, Lock, RefreshCw } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Găzduire WordPress România | Hosting WordPress de la 105 € | FXF',
  description: 'Găzduire WordPress optimizată pe servere SSD NVMe. Auto-instalare WordPress, updates automate, cache LiteSpeed, SSL gratuit. Suport tehnic specializat 24/7!',
  keywords: ['găzduire wordpress', 'hosting wordpress', 'wordpress românia', 'wordpress hosting', 'găzduire wp', 'woocommerce hosting'],
  openGraph: {
    title: 'Găzduire WordPress România | Hosting WordPress de la 105 € | FXF',
    description: 'Găzduire WordPress optimizată cu auto-instalare, updates automate și cache LiteSpeed.',
    url: 'https://fxfweb.ro/gazduire/wordpress',
  },
  alternates: { canonical: 'https://fxfweb.ro/gazduire/wordpress' },
}

const packages = [
  {
    name: 'WP Start',
    price: '105',
    period: '6 luni',
    desc: 'Perfect pentru bloguri personale și site-uri WordPress mici.',
    href: 'https://clienti.fxfweb.ro/store/gazduire-e-commerce/bronze-30gb',
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
    name: 'WP Business',
    price: '115',
    period: '6 luni',
    desc: 'Ideal pentru site-uri de afaceri și portofolii profesionale.',
    popular: true,
    href: 'https://clienti.fxfweb.ro/store/gazduire-e-commerce/silver-40gb',
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
    name: 'WP E-Commerce',
    price: '124',
    period: '6 luni',
    desc: 'Optimizat pentru WooCommerce și magazine online WordPress.',
    href: 'https://clienti.fxfweb.ro/store/gazduire-e-commerce/gold-50gb',
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
    name: 'WP Performance',
    price: '143',
    period: '6 luni',
    desc: 'Putere maximă pentru site-uri WordPress cu trafic intens.',
    href: 'https://clienti.fxfweb.ro/store/gazduire-e-commerce/platinum-65gb',
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
  { icon: Zap, title: 'Auto-Instalare WordPress', desc: 'Instalare WordPress cu un click direct din cPanel, fără cunoștințe tehnice.' },
  { icon: RefreshCw, title: 'Updates Automate', desc: 'WordPress core, teme și plugin-uri actualizate automat pentru securitate.' },
  { icon: HardDrive, title: 'LiteSpeed Cache', desc: 'Plugin LSCache pentru WordPress pre-instalat și optimizat pentru viteză maximă.' },
  { icon: Shield, title: 'SSL Gratuit', desc: 'Certificat Let\'s Encrypt pentru securitate HTTPS și SEO îmbunătățit.' },
  { icon: Clock, title: 'Backup Zilnic', desc: 'Backup automat cu JetBackup și restaurare instant cu un click.' },
  { icon: Lock, title: 'Imunify360', desc: 'Protecție avansată împotriva malware, brute force și atacuri specifice WordPress.' },
  { icon: Server, title: 'cPanel Inclus', desc: 'Panou de control intuitiv pentru gestionarea facilă a WordPress.' },
  { icon: Database, title: 'PHP 8.x Optimizat', desc: 'Ultimele versiuni PHP configurate special pentru WordPress.' },
  { icon: Globe, title: 'Staging WordPress', desc: 'Creează copii de test pentru modificări sigure înainte de publicare.' },
  { icon: Cpu, title: 'CloudLinux OS', desc: 'Izolare resurse pentru stabilitate și securitate garantată.' },
  { icon: HardDrive, title: 'SSD NVMe', desc: 'Stocare ultrarapidă pentru încărcare instant a paginilor WordPress.' },
  { icon: Headphones, title: 'Suport WP 24/7', desc: 'Echipă specializată WordPress disponibilă non-stop pentru asistență.' },
]

export default function GazduireWordPressPage() {
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
                  <Server size={14} />
                  Găzduire WordPress
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Găzduire WordPress
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Optimizată pentru performanță maximă</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Găzduire WordPress profesională cu auto-instalare, updates automate, cache LiteSpeed și 
                  suport tehnic specializat 24/7. Perfect pentru bloguri, site-uri business și WooCommerce.
                </p>
              </div>
              <PageHeroVisual page="gazduire-wordpress" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete WordPress</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Găzduire optimizată pentru WordPress
              </h2>
              <p className="text-muted-foreground text-lg">Auto-instalare, updates automate, cache LiteSpeed și suport specializat WordPress.</p>
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
                  <Link href={pkg.href} className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                    Comandă acum
                  </Link>
                  <p className="text-xs text-muted-foreground text-center mt-2">Configurare și migrare <span className="font-semibold text-foreground">gratuită</span></p>
                </div>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare pachet, configurat special pentru WordPress</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Serverele noastre nu rulează WordPress generic. Fiecare plan este presetat cu parametrii tehnici de care WordPress are nevoie pentru a funcționa la capacitate maximă.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'PHP și MySQL optimizat pentru WP',
                  desc: 'Valorile php.ini — memory_limit, max_execution_time, upload_max_filesize — sunt configurate conform recomandărilor oficiale WordPress, fără să fie nevoie să intervii manual.',
                },
                {
                  title: 'LiteSpeed Cache pre-activat',
                  desc: 'Pluginul LiteSpeed Cache este pre-instalat și gata de utilizare, oferind cache la nivel de server, optimizare imagini WebP, lazy load și minificare CSS/JS direct din panoul de control.',
                },
                {
                  title: 'Protecție activă împotriva atacurilor WP',
                  desc: 'Imunify360 detectează și blochează în timp real tentativele de brute-force pe wp-login.php, injecțiile de cod malițios și vulnerabilitățile specifice plugin-urilor WordPress.',
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce găzduire WordPress la FXF?</h2>
              <p className="text-muted-foreground">Funcționalități speciale pentru WordPress pre-instalate și optimizate pentru performanță maximă.</p>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Găzduire WordPress Profesională în România</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                WordPress este cel mai popular sistem de gestionare a conținutului (CMS) din lume, alimentând peste 40% din toate site-urile web. Pachetele noastre de găzduire WordPress sunt special concepute pentru a oferi performanță optimă platformei WordPress, cu configurații server adaptate cerințelor specifice ale CMS-ului.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fiecare pachet include LiteSpeed Cache pre-instalat și configurat, oferind cache pentru pagini, optimizare imagini, minificare CSS/JS și multe alte funcționalități care accelerează dramatic timpul de încărcare al site-ului tău WordPress.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pentru magazinele online bazate pe WooCommerce, oferim resurse suplimentare și configurații optimizate pentru procesarea comenzilor, gestionarea stocurilor și asigurarea unei experiențe de cumpărare fluidă pentru clienții tăi.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Migrare WordPress gratuită!</h2>
            <p className="text-white/60 text-lg mb-8">Ne ocupăm noi de tot - migrăm site-ul tău WordPress de la orice furnizor de hosting.</p>
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
