import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Globe, ArrowRight, Check, Shield, RefreshCw, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Înregistrare Domenii .ro .com .eu | FXF Web Hosting',
  description: 'Înregistrează domenii .ro, .com, .eu și 500+ extensii. Prețuri competitive, DNS gratuit, protecție WHOIS inclusă. Management simplu prin cPanel.',
  keywords: ['domenii', 'inregistrare domenii', 'domeniu ro', 'domeniu com', 'cumparare domeniu'],
  openGraph: {
    title: 'Înregistrare Domenii .ro .com .eu | FXF Web Hosting',
    description: 'Domenii .ro, .com, .eu la prețuri competitive cu DNS gratuit și protecție WHOIS.',
    url: 'https://fxfweb.ro/servicii/domenii',
  },
  alternates: { canonical: 'https://fxfweb.ro/servicii/domenii' },
}

const domains = [
  { ext: '.ro', price: '63', desc: 'Domeniul național al României' },
  { ext: '.com', price: '82', desc: 'Cel mai popular domeniu global' },
  { ext: '.eu', price: '69', desc: 'Domeniu european' },
  { ext: '.net', price: '89', desc: 'Alternativă populară la .com' },
  { ext: '.org', price: '89', desc: 'Pentru organizații și comunități' },
  { ext: '.info', price: '55', desc: 'Pentru site-uri informative' },
]

const features = [
  { icon: Shield, title: 'Protecție WHOIS', desc: 'Datele tale personale sunt protejate de accesul public.' },
  { icon: Settings, title: 'DNS Management', desc: 'Gestionează înregistrările DNS direct din panoul de control.' },
  { icon: RefreshCw, title: 'Transfer facil', desc: 'Transferă domenii de la alt registrar în câteva minute.' },
  { icon: Globe, title: '500+ extensii', desc: 'Alege din sute de extensii disponibile: .shop, .tech, .io și altele.' },
]

export default function DomeniiPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-28 pb-14 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
                <Globe size={14} />
                Domenii web
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Înregistrare Domenii
                <span className="block text-2xl sm:text-3xl mt-2" style={{ color: 'oklch(0.72 0.14 70)' }}>
                  .ro, .com, .eu și 500+ extensii
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Găsește și înregistrează domeniul perfect pentru afacerea ta. Prețuri competitive, 
                DNS management gratuit și protecție WHOIS inclusă.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-primary mb-4">Prețuri domenii populare</h2>
              <p className="text-muted-foreground">Prețuri anuale pentru înregistrare sau reînnoire</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
              {domains.map((d) => (
                <div key={d.ext} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <span className="text-3xl font-bold text-primary">{d.ext}</span>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">{d.desc}</p>
                  <p className="text-2xl font-bold text-foreground">{d.price} lei<span className="text-sm text-muted-foreground">/an</span></p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="bg-secondary/50 rounded-xl p-5">
                    <Icon size={24} className="text-primary mb-3" />
                    <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Vrei să rezervi un domeniu?</h2>
            <p className="text-white/60 mb-6">Contactează-ne cu numele dorit și verificăm disponibilitatea.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold">
              Verifică disponibilitate <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
