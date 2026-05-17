'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Target, Zap, Clock, MapPin, Briefcase, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'
import { cn } from '@/lib/utils'

const stats = [
  { number: '200+', label: 'Clienți Activi', desc: 'Site-uri găzduite pe serverele noastre' },
  { number: '99.9%', label: 'Uptime', desc: 'Disponibilitate garantată' },
  { number: '5+', label: 'Ani Experiență', desc: 'În industria hosting' },
  { number: '24/7', label: 'Suport', desc: 'Disponibil non-stop' },
]

const technologies = [
  { name: 'cPanel', desc: 'Panou de control profesional' },
  { name: 'CloudLinux', desc: 'Izolare resurse per cont' },
  { name: 'LiteSpeed', desc: 'Web server ultrarapid' },
  { name: 'Imunify360', desc: 'Protecție malware și atacuri' },
  { name: 'JetBackup', desc: 'Backup-uri automate 24/24h' },
  { name: "Let's Encrypt", desc: 'Certificate SSL gratuite' },
]

const faqs = [
  {
    q: 'Ce tipuri de găzduire web oferă FXF Web Hosting?',
    a: 'FXF Web Hosting oferă găzduire web shared pe servere SSD NVMe, găzduire optimizată pentru WordPress, PrestaShop, OpenCart și Magento, precum și pachete Performance cu resurse dedicate pentru site-uri cu trafic intens.',
  },
  {
    q: 'Unde sunt localizate serverele FXF Web Hosting?',
    a: 'Serverele noastre sunt localizate într-un datacenter de nivel Tier III în Germania, asigurând latență redusă pentru vizitatorii din România și Europa, precum și o infrastructură de înaltă disponibilitate.',
  },
  {
    q: 'Ce garanție de uptime oferă FXF Web Hosting?',
    a: 'Garantăm un uptime de 99.9% pentru toate pachetele de găzduire. În cazul în care nu respectăm această promisiune, clienții primesc credit proporțional pentru timpul de indisponibilitate.',
  },
  {
    q: 'Cum funcționează suportul tehnic la FXF Web Hosting?',
    a: 'Echipa noastră de suport tehnic este disponibilă 24/7 prin sistem de ticketing. Timpul mediu de răspuns este sub 4 ore, iar pentru probleme critice oferim asistență prioritară.',
  },
  {
    q: 'Ce înseamnă backup 24 din 24 ore?',
    a: 'Realizăm backup-uri automate la fiecare 24 de ore pentru toate conturile de hosting. Backup-urile sunt păstrate timp de 30 de zile și pot fi restaurate gratuit din panoul cPanel sau prin JetBackup.',
  },
  {
    q: 'Pot migra gratuit site-ul meu la FXF Web Hosting?',
    a: 'Da, oferim migrare gratuită pentru toate pachetele de găzduire. Echipa noastră se ocupă de transferul complet al site-ului, bazei de date și email-urilor, fără întreruperi.',
  },
]

const timeline = [
  { year: '2021', title: 'Lansarea FXF Web Hosting', desc: 'Am pornit cu o viziune simplă: hosting de calitate la prețuri corecte pentru antreprenorii români.' },
  { year: '2022', title: 'Extindere infrastructură', desc: 'Am upgradat la servere cu procesoare de ultimă generație și stocare exclusiv NVMe pentru performanță maximă.' },
  { year: '2023', title: '100+ clienți activi', desc: 'Am depășit pragul de 100 de clienți mulțumiți și am introdus pachetele specializate pentru e-commerce.' },
  { year: '2024', title: 'Pachete Performance', desc: 'Am lansat gama de găzduire Performance cu resurse dedicate pentru proiecte enterprise și site-uri cu trafic intens.' },
  { year: '2025', title: '200+ clienți și continuăm', desc: 'Astăzi găzduim peste 200 de site-uri și continuăm să investim în tehnologie și în echipa de suport.' },
]

export default function DespreNoi() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <Navbar />
      <main>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FXF Web Hosting',
              url: 'https://fxfweb.ro',
              logo: 'https://fxfweb.ro/logo.png',
              description: 'Furnizor român de servicii de găzduire web din 2021. Servere SSD NVMe în Germania, uptime 99.9%, suport 24/7.',
              foundingDate: '2021',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'RO',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['Romanian', 'English'],
                hoursAvailable: 'Mo-Su 00:00-23:59',
              },
              sameAs: [],
            }),
          }}
        />
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

        {/* Our Story / Timeline */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Povestea noastră
              </p>
              <h2 className="font-display text-3xl font-bold text-primary mb-3">
                Evoluția FXF Web Hosting
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                De la o idee simplă la un furnizor de încredere pentru sute de afaceri din România.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {timeline.map((item) => (
                <div key={item.year} className="bg-card border border-border rounded-xl p-5 relative overflow-hidden hover:border-primary/30 transition-colors group">
                  <span className="absolute -top-2 -right-2 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors select-none">{item.year}</span>
                  <div className="relative">
                    <span className="inline-block text-xs font-bold text-white bg-primary px-2.5 py-1 rounded-full mb-3">{item.year}</span>
                    <h3 className="font-bold text-foreground text-sm mb-1.5">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-14 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Tehnologii
              </p>
              <h2 className="font-display text-3xl font-bold text-primary mb-3">
                Stack tehnologic profesional
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Folosim doar tehnologii de nivel enterprise pentru a asigura performanță, securitate și stabilitate maximă.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/20 transition-colors">
                  <p className="font-bold text-foreground text-sm mb-1">{tech.name}</p>
                  <p className="text-muted-foreground text-xs">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-14 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <h2 className="font-display text-2xl font-bold text-primary mb-4">FXF Web Hosting - Furnizor de găzduire web în România</h2>
              <p>
                <strong>FXF Web Hosting</strong> este un furnizor român de servicii de găzduire web, activ pe piață din 2021. 
                Ne-am propus să oferim o alternativă de calitate la furnizorii internaționali, cu suport local și prețuri 
                adaptate pieței din România.
              </p>
              <p>
                Infrastructura noastră se bazează pe servere de ultimă generație cu stocare <strong>SSD NVMe</strong>, 
                procesoare multi-core și memorie RAM DDR5 abundentă. Toate serverele sunt localizate într-un 
                <strong> datacenter de nivel Tier III în Germania</strong>, asigurând latență redusă pentru vizitatorii 
                din România și restul Europei.
              </p>
              <h3 className="font-display text-xl font-bold text-primary mt-6 mb-3">Servicii de găzduire web pentru orice tip de proiect</h3>
              <p>
                Oferim pachete de <strong>găzduire web shared</strong> pentru site-uri de prezentare și bloguri, 
                <strong> hosting optimizat pentru WordPress</strong> cu LiteSpeed Cache pre-instalat, găzduire specializată 
                pentru platforme e-commerce precum <strong>PrestaShop, OpenCart și Magento</strong>, precum și 
                pachete <strong>Performance</strong> cu resurse CPU și RAM dedicate pentru proiecte cu trafic intens.
              </p>
              <p>
                Toate pachetele includ <strong>cPanel</strong> pentru administrare ușoară, <strong>certificat SSL gratuit</strong> 
                de la Let&apos;s Encrypt, <strong>backup-uri automate la fiecare 24 de ore</strong> prin JetBackup, protecție 
                activă <strong>Imunify360</strong> împotriva malware și atacurilor, și <strong>suport tehnic 24/7</strong>.
              </p>
              <h3 className="font-display text-xl font-bold text-primary mt-6 mb-3">De ce să alegi FXF Web Hosting?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Performanță garantată</strong> — servere SSD NVMe cu uptime 99.9% și timp de încărcare sub 1 secundă</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Securitate avansată</strong> — Imunify360, firewall WAF, protecție DDoS și scanare malware inclusă</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Suport tehnic real</strong> — echipă disponibilă 24/7 cu timp de răspuns sub 4 ore</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Prețuri corecte</strong> — pachete de la 99 lei pentru 6 luni, fără costuri ascunse</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span><strong>Migrare gratuită</strong> — transferăm site-ul tău de la alt furnizor fără costuri suplimentare</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="py-14 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left - Header */}
              <div className="lg:col-span-1">
                <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">Întrebări frecvente</p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
                  Tot ce trebuie să știi despre FXF
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Răspunsuri la cele mai frecvente întrebări despre serviciile noastre de găzduire web, infrastructură și suport tehnic.
                </p>
                <div className="bg-secondary/50 border border-border rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <HelpCircle size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">Nu găsești răspunsul?</p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Echipa noastră de suport este disponibilă 24/7 pentru orice întrebare.
                      </p>
                      <Link href="/contact" className="text-xs font-semibold text-primary hover:text-accent-brand transition-colors">
                        Contactează suportul →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Accordion */}
              <div className="lg:col-span-2">
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
                      <button
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-secondary/30 transition-colors"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-medium text-sm text-foreground">{faq.q}</span>
                        <ChevronDown size={16} className={cn('text-muted-foreground shrink-0 transition-transform', openFaq === i && 'rotate-180')} />
                      </button>
                      <div className={cn('overflow-hidden transition-all duration-200', openFaq === i ? 'max-h-48' : 'max-h-0')}>
                        <p className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Schema Markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
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
