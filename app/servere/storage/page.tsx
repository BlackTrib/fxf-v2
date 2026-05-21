import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HardDrive, ArrowRight, Check, Database, Shield, Zap, Lock, Globe, Cpu, RefreshCw, BarChart3, Users } from 'lucide-react'
import { PageHeroVisual } from '@/components/page-hero-visual'

export const metadata: Metadata = {
  title: 'Cloud Storage și Backup | Stocare Sigură de la 10 € | FXF',
  description: 'Servicii de cloud storage și backup cu redundanță completă. Stocare sigură pentru datele tale, acces de oriunde, backup automat zilnic și criptare end-to-end.',
  keywords: ['cloud storage', 'backup online', 'stocare cloud', 'backup automat', 'cloud backup', 'stocare sigură'],
  openGraph: {
    title: 'Cloud Storage și Backup | Stocare Sigură de la 10 € | FXF',
    description: 'Cloud storage cu redundanță, backup automat și criptare. Datele tale în siguranță 24/7.',
    url: 'https://fxfweb.ro/servere/storage',
  },
  alternates: { canonical: 'https://fxfweb.ro/servere/storage' },
}

const features = [
  { icon: Database, title: 'Stocare redundantă', desc: 'Date replicate pe 3 locații diferite pentru protecție maximă.' },
  { icon: RefreshCw, title: 'Backup automat zilnic', desc: 'Backup-uri planificate zilnic, fără intervențiune manuală.' },
  { icon: Lock, title: 'Criptare end-to-end', desc: 'Datele tale criptate în tranzit și în repaus cu AES-256.' },
  { icon: Globe, title: 'Acces de oriunde', desc: 'Portal web, API și protocoale standard (S3, WebDAV) disponibile.' },
]

const packages = [
  { 
    name: 'Starter', 
    storage: '1 TB', 
    price: '150', 
    period: '6 luni',
    users: '2 utilizatori',
    desc: 'Perfect pentru backupuri și stocare personală.' ,
    features: [
      'Trafic nelimitat',
      'rețea 1 Gbps',
      'FTP, FTPS, SFTP',
      'SCP, Samba/CIFS',
      'HTTPS, WebDAV',
      'Usable as network drive',
      'BorgBackup, rsync via SSH',
      'Restic, Rclone'
    ]
  },
  { 
    name: 'Professional', 
    storage: '5 TB', 
    price: '250', 
    period: '6 luni',
    users: '3 utilizatori',
    popular: true,
    desc: 'Ideal pentru echipe mici și proiecte collaborative.' ,
    features: [
      'Trafic nelimitat',
      'rețea 1 Gbps',
      'FTP, FTPS, SFTP',
      'SCP, Samba/CIFS',
      'HTTPS, WebDAV',
      'Usable as network drive',
      'BorgBackup, rsync via SSH',
      'Restic, Rclone'
    ]
  },
  { 
    name: 'Business', 
    storage: '10 TB', 
    price: '400', 
    period: '6 luni',
    users: '5 utilizatori',
    desc: 'Pentru departamente și companii cu nevoie de stocare mare.' ,
    features: [
      'Trafic nelimitat',
      'rețea 10 Gbps',
      'FTP, FTPS, SFTP',
      'SCP, Samba/CIFS',
      'HTTPS, WebDAV',
      'Usable as network drive',
      'BorgBackup, rsync via SSH',
      'Restic, Rclone'
    ]
  },
  { 
    name: 'Enterprise', 
    storage: '20 TB', 
    price: '800', 
    period: '6 luni',
    users: '10 utilizatori',
    desc: 'Soluție personalizată cu SLA enterprise și suport dedicat.' ,
    features: [
      'Trafic nelimitat',
      'rețea 10 Gbps',
      'FTP, FTPS, SFTP',
      'SCP, Samba/CIFS',
      'HTTPS, WebDAV',
      'Usable as network drive',
      'BorgBackup, rsync via SSH',
      'Restic, Rclone'
    ]
  },
]

const benefits = [
  { icon: Zap, title: 'Viteză de transfer', desc: 'Conexiune directă la CDN global pentru transferuri ultra-rapide.' },
  { icon: Shield, title: 'Conformitate GDPR', desc: 'Toate datele stocate în UE, cu politici de conformitate complete.' },
  { icon: Users, title: 'Partajare securizată', desc: 'Partajează fișiere cu link-uri cu expirare și permisiuni personalizate.' },
  { icon: BarChart3, title: 'Rapoarte detaliate', desc: 'Dashboard cu statistici de utilizare și audit trail complet.' },
  { icon: Lock, title: 'Autentificare 2FA', desc: 'Autentificare pe doi factori pentru securitate sporită.' },
  { icon: Database, title: 'Version control', desc: 'Menține versiuni vechi ale fișierelor pentru recuperare ușoară.' },
]

export default function StoragePage() {
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
                  <HardDrive size={14} />
                  Cloud Storage
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                  Cloud Storage
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/70">Datele tale protejate 24/7</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8">
                  Stocare cloud cu redundanță completă, backup automat zilnic și criptare end-to-end. 
                  Accesul datelor tale de oriunde, oricând, în siguranță.
                </p>
              </div>
              <PageHeroVisual page="storage" />
            </div>
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pachete Cloud Storage</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                Alege spațiu de stocare potrivit
              </h2>
              <p className="text-muted-foreground text-lg">Toate pachetele includ backup automat, criptare și suport 24/7.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl p-5 border-2 ${pkg.popular ? 'border-primary bg-primary/5 relative' : 'border-border bg-card'}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>}
                  <div className="text-center mb-5">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{pkg.desc}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">€/{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-5">
                    <li className="flex items-start gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-1.5 shrink-0" /><span className="text-muted-foreground"><span className="font-bold text-foreground">{pkg.storage}</span> stocare</span></li>
                    <li className="flex items-start gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-1.5 shrink-0" /><span className="text-muted-foreground"><span className="font-bold text-foreground">{pkg.users}</span></span></li>
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-1.5 shrink-0" /><span className="text-muted-foreground">{f}</span></li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                    Comandă acum
                  </Link>
                  <p className="text-xs text-muted-foreground text-center mt-2">+ taxă instalare și configurare <span className="font-semibold text-foreground">50 €</span></p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Configurație custom? <Link href="/contact" className="font-bold text-primary hover:underline">Contactează-ne</Link> pentru oferte personalizate!
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Storage config info */}
        <section className="py-14 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Fiecare pachet Cloud Storage, configurat pentru siguranță</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Stocare fiabilă cu acces rapid din orice loc, protocoale standard și tool-uri profesionale de backup.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Trafic nelimitat',
                  desc: 'Fără restricții de bandwidth. Descarcă și încarcă cât ai nevoie, oricând, fără costuri suplimentare.',
                },
                {
                  title: 'Acces multi-protocol',
                  desc: 'Conectează prin FTP, SFTP, Samba, WebDAV sau ca network drive. Compatibil cu orice tool de backup și sincronizare.',
                },
                {
                  title: 'Backup și sincronizare',
                  desc: 'Suport pentru BorgBackup, Restic, Rclone și rsync. Automatizează protecția datelor tale cu scripturile tale.',
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

        {/* Benefits Section */}
        <section className="py-12 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">De ce Cloud Storage la FXF?</h2>
              <p className="text-muted-foreground">Securitate și fiabilitate pentru datele tale importante.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

        <section className="py-12 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Datele tale în siguranță în cloud</h2>
            <p className="text-white/60 text-lg mb-8">Contactează-ne pentru informații despre planuri enterprise personalizate.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all">
              Solicită consultanță <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
