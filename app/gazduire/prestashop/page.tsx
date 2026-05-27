import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShoppingCart, ArrowRight, HardDrive, Shield, Clock, Headphones, Zap, Database, Cpu, Lock, RefreshCw, CreditCard } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Găzduire PrestaShop România | FXF de la 17€/lună',
  description: 'Găzduire PrestaShop pe SSD NVMe de la 17€/lună. Configurație specială e-commerce, SSL gratuit, resurse dedicate și suport tehnic specializat 24/7!',
  keywords: ['găzduire prestashop', 'hosting prestashop', 'prestashop românia', 'hosting magazin online', 'găzduire e-commerce'],
  openGraph: {
    title: 'Găzduire PrestaShop România | FXF de la 17€/lună',
    description: 'Găzduire PrestaShop optimizată cu configurație specială pentru magazine online.',
    url: 'https://fxfweb.ro/gazduire/prestashop',
  },
  alternates: { canonical: 'https://fxfweb.ro/gazduire/prestashop' },
}

const packages = [
  {
    name: 'PS Start',
    price: '105',
    period: '6 luni',
    desc: 'Perfect pentru magazine noi PrestaShop cu până la 500 produse.',
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
    name: 'PS Business',
    price: '115',
    period: '6 luni',
    desc: 'Ideal pentru magazine în creștere cu până la 2000 produse.',
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
    name: 'PS Pro',
    price: '124',
    period: '6 luni',
    desc: 'Pentru magazine mari cu mii de produse și trafic intens.',
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
    name: 'PS Enterprise',
    price: '143',
    period: '6 luni',
    desc: 'Putere maximă pentru magazine PrestaShop enterprise.',
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
  { icon: Zap, title: 'Auto-Instalare PrestaShop', desc: 'Instalare PrestaShop cu un click direct din cPanel, configurată pentru performanță.' },
  { icon: Database, title: 'MySQL Optimizat', desc: 'Baze de date MySQL configurate special pentru interogări e-commerce rapide.' },
  { icon: HardDrive, title: 'LiteSpeed Cache', desc: 'Cache avansat pentru pagini produse, categorii și checkout rapid.' },
  { icon: CreditCard, title: 'SSL Gratuit', desc: 'Certificat Let\'s Encrypt pentru plăți securizate și încredere clienți.' },
  { icon: Clock, title: 'Backup Zilnic', desc: 'Backup automat cu JetBackup pentru protecția produselor și comenzilor.' },
  { icon: Lock, title: 'Imunify360', desc: 'Protecție avansată împotriva atacurilor și malware specific e-commerce.' },
  { icon: RefreshCw, title: 'Cron Jobs', desc: 'Cron jobs nelimitate pentru actualizare stocuri, prețuri și sincronizări.' },
  { icon: Cpu, title: 'PHP Optimizat', desc: 'PHP 8.x configurat special pentru cerințele PrestaShop.' },
  { icon: Shield, title: 'Firewall E-Commerce', desc: 'Protecție specifică pentru plăți online și date clienți.' },
  { icon: HardDrive, title: 'SSD NVMe', desc: 'Stocare ultrarapidă pentru încărcare instant a catalogului de produse.' },
  { icon: RefreshCw, title: 'Uptime 99.9%', desc: 'Monitorizare 24/7 pentru disponibilitate maximă.' },
  { icon: Headphones, title: 'Suport PS 24/7', desc: 'Echipă cu experiență PrestaShop disponibilă non-stop.' },
]

export default function GazduirePrestashopPage() {
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
                  <ShoppingCart size={14} />
                  Găzduire PrestaShop
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Găzduire PrestaShop
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Optimizată pentru magazine online performante</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Găzduire PrestaShop profesională cu configurație specială pentru e-commerce, resurse dedicate și 
                  suport tehnic specializat 24/7. Ideal pentru magazine cu mii de produse și trafic intens.
                </p>
              </div>
              <PageHeroVisual page="gazduire-prestashop" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete PrestaShop</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Găzduire optimizată pentru PrestaShop
              </h2>
              <p className="text-muted-foreground text-lg">Configurație specială pentru e-commerce, resurse dedicate și SSL gratuit pentru plăți securizate.</p>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare pachet, configurat special pentru PrestaShop</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">PrestaShop este o platformă pretențioasă din punct de vedere tehnic. Planurile noastre sunt ajustate direct la nivel de server pentru a răspunde acestor cerințe fără compromisuri.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'PHP configurat pentru PrestaShop',
                  desc: 'Extensiile PHP necesare PrestaShop (GD, cURL, PDO, ZIP, OpenSSL) sunt activate implicit, iar limitele de memorie și timp de execuție sunt setate pentru a susține cataloage mari de produse.',
                },
                {
                  title: 'MySQL InnoDB și indexare rapidă',
                  desc: 'Serverele noastre folosesc MySQL cu engine InnoDB și query cache activat, esențiale pentru performanța bazelor de date PrestaShop cu mii de produse, comenzi și clienți.',
                },
                {
                  title: 'Cache și compresie pentru viteza magazinului',
                  desc: 'LiteSpeed cu mod_rewrite activ și regulile .htaccess PrestaShop pre-verificate asigură că SEF URL-urile și cache-ul Smarty funcționează corect de la prima instalare.',
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce găzduire PrestaShop la FXF?</h2>
              <p className="text-muted-foreground">Funcționalități speciale pentru PrestaShop configurate pentru performanță maximă în e-commerce.</p>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Găzduire PrestaShop Profesională în România</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PrestaShop este una dintre cele mai populare platforme open-source pentru magazine online, oferind flexibilitate maximă și un ecosistem bogat de module și teme. Pachetele noastre de găzduire PrestaShop sunt special configurate pentru a asigura performanță optimă acestei platforme exigente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fiecare pachet include configurații MySQL optimizate pentru interogări complexe specifice e-commerce, precum căutarea produselor, filtrarea categoriilor și procesarea coșurilor de cumpărături. LiteSpeed Cache asigură cache eficient pentru paginile de produse și categorii, reducând dramatic timpul de încărcare.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Certificatul SSL gratuit Let&apos;s Encrypt asigură securitatea tranzacțiilor și încrederea clienților, în timp ce backup-urile zilnice automate protejează catalogul de produse, comenzile și datele clienților împotriva oricărei pierderi de date.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Migrare PrestaShop gratuită!</h2>
            <p className="text-white/60 text-lg mb-8">Ne ocupăm noi de tot - migrăm magazinul tău PrestaShop de la orice furnizor de hosting.</p>
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
