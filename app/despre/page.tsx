import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Target, Zap, Heart, Shield, Users, Server, Award, Clock, MapPin, Briefcase, CheckCircle2, HelpCircle } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Despre FXF Web Hosting | Găzduire Web Profesională România | Din 2021',
  description:
    'FXF Web Hosting - furnizor român de găzduire web din 2021. Servere SSD NVMe în Germania, uptime 99.9% garantat, suport tehnic 24/7. Peste 200 de clienți activi. Hosting pentru WordPress, PrestaShop, Magento.',
  keywords: [
    'fxf web hosting',
    'gazduire web romania',
    'despre fxf',
    'hosting romania',
    'furnizor hosting romania',
    'gazduire web profesionala',
    'hosting ssd nvme',
    'web hosting bucuresti',
    'gazduire site romania',
  ],
  openGraph: {
    title: 'Despre FXF Web Hosting | Găzduire Web Profesională România',
    description: 'FXF Web Hosting - furnizor român de găzduire web din 2021. Servere SSD NVMe, uptime 99.9%, suport 24/7. Peste 200 clienți activi.',
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
  { year: '2022', title: 'Extindere infrastructură', desc: 'Am upgradat la servere NVMe de ultimă generație pentru performanță maximă.' },
  { year: '2023', title: '100+ clienți activi', desc: 'Am depășit 100 de clienți și am introdus pachetele specializate pentru e-commerce.' },
  { year: '2024', title: 'Pachete Performance', desc: 'Am lansat gama Performance cu resurse dedicate pentru proiecte enterprise.' },
  { year: '2025', title: '200+ clienți', desc: 'Găzduim peste 200 de site-uri și continuăm să investim în tehnologie și suport.' },
]

export default function DespreNoi() {
  return (
    <>
      <Navbar />
      <main>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FXF Web Hosting',
              url: 'https://fxfweb.ro',
              description: 'Furnizor român de servicii de găzduire web din 2021. Servere SSD NVMe în Germania, uptime 99.9%, suport 24/7.',
              foundingDate: '2021',
              address: { '@type': 'PostalAddress', addressCountry: 'RO' },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['Romanian', 'English'],
                hoursAvailable: 'Mo-Su 00:00-23:59',
              },
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
                  FXF Web Hosting oferă servicii de <strong className="text-white">găzduire web SSD NVMe</strong> de înaltă calitate din 2021.
                  Servere în Germania, suport 24/7 și pachete optimizate pentru WordPress, PrestaShop, OpenCart și Magento.
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

        {/* Stats + Specs — combined row */}
        <section className="py-10 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-5 text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-0.5">{stat.number}</p>
                  <p className="font-semibold text-foreground text-sm">{stat.label}</p>
                  <p className="text-muted-foreground text-xs">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Specificații Server</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {serverSpecs.map((spec) => (
                  <div key={spec.label} className="text-center">
                    <p className="text-xs text-muted-foreground">{spec.label}</p>
                    <p className="font-bold text-foreground text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission + Values */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-7">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target size={20} className="text-primary" />
                </div>
                <h2 className="font-display font-bold text-lg text-primary mb-2">Misiunea Noastră</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Să oferim servicii de găzduire web de calitate enterprise la prețuri accesibile pentru afacerile din România. Credem că fiecare afacere merită o prezență online rapidă și sigură, fără costuri exagerate.
                </p>
              </div>
              <div className="bg-accent-brand/5 border border-accent-brand/10 rounded-xl p-7">
                <div className="w-10 h-10 rounded-xl bg-accent-brand/10 flex items-center justify-center mb-4">
                  <Zap size={20} className="text-accent-brand" />
                </div>
                <h2 className="font-display font-bold text-lg text-accent-brand mb-2">Viziunea Noastră</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Să devenim furnizorul de hosting preferat în România, cunoscut pentru performanță, suport excepțional și prețuri corecte. Investim constant în tehnologie și echipă.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-foreground mb-1">{v.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline + Technologies — side by side */}
        <section className="py-12 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Timeline */}
              <div>
                <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">Povestea noastră</p>
                <h2 className="font-display text-2xl font-bold text-primary mb-6">Evoluția FXF Web Hosting</h2>
                <div className="relative pl-5 border-l border-primary/20 space-y-5">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative">
                      <div className="absolute -left-[21px] w-2.5 h-2.5 bg-primary rounded-full mt-1" />
                      <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mb-1">{item.year}</span>
                      <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Technologies */}
              <div>
                <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">Tehnologii</p>
                <h2 className="font-display text-2xl font-bold text-primary mb-6">Stack tehnologic profesional</h2>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-foreground text-sm">{tech.name}</p>
                        <p className="text-muted-foreground text-xs">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-primary/5 border border-primary/15 rounded-xl">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Toate pachetele includ <strong className="text-foreground">cPanel</strong>, <strong className="text-foreground">SSL gratuit</strong>, <strong className="text-foreground">backup 24/24h</strong>, <strong className="text-foreground">Imunify360</strong> și <strong className="text-foreground">LiteSpeed</strong> — fără costuri suplimentare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">Întrebări frecvente</p>
              <h2 className="font-display text-2xl font-bold text-primary">Tot ce trebuie să știi despre FXF Web Hosting</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-start justify-between p-4 cursor-pointer list-none gap-3">
                    <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                    <HelpCircle size={16} className="text-muted-foreground shrink-0 mt-0.5 group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground text-xs leading-relaxed border-t border-border pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.q,
                  acceptedAnswer: { '@type': 'Answer', text: faq.a },
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
