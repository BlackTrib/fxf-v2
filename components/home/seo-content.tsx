import Link from 'next/link'
import { MapPin, Server, Briefcase } from 'lucide-react'

const services = [
  { title: 'Găzduire Web România', href: '/gazduire/web', desc: 'Pachete hosting SSD NVMe cu cPanel și SSL gratuit' },
  { title: 'Găzduire WordPress', href: '/gazduire/wordpress', desc: 'Hosting optimizat pentru WordPress cu LiteSpeed Cache' },
  { title: 'Găzduire PrestaShop', href: '/gazduire/prestashop', desc: 'Găzduire performantă pentru magazine PrestaShop' },
  { title: 'Găzduire E-Commerce', href: '/gazduire/magento', desc: 'Pachete speciale pentru magazine online' },
  { title: 'Servere Dedicate', href: '/servere/dedicat', desc: 'Hardware dedicat 100% pentru proiecte enterprise' },
  { title: 'VPS Cloud', href: '/servere/vps', desc: 'Servere virtuale private cu resurse dedicate' },
]

const features = [
  'cPanel', 'LiteSpeed', 'CloudLinux', 'Imunify360', 'JetBackup', 'SSL Gratuit'
]

export function SEOContent() {
  return (
    <section className="py-14 bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-5">
        {/* Main SEO content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* About */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Găzduire Web Profesională în România - FXF Web Hosting
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
              <p>
                <strong>FXF Web Hosting</strong> oferă servicii de găzduire web profesionale pe servere 
                SSD NVMe ultrarapide localizate în Germania. Cu peste 4 ani de experiență și 500+ site-uri 
                găzduite, suntem alegerea potrivită pentru afacerea ta online, indiferent de dimensiune.
              </p>
              <p>
                Serverele noastre sunt echipate cu procesoare 64 Core, 96GB RAM DDR4 și stocare SSD NVMe 
                montată în Raid 10 pentru performanță maximă și redundanță a datelor. Folosim CloudLinux 
                pentru izolarea conturilor, LiteSpeed pentru viteză și Imunify360 pentru securitate avansată.
              </p>
              <p>
                Toate pachetele de găzduire includ: certificat SSL Let&apos;s Encrypt gratuit, panou de control 
                cPanel, backup zilnic automat JetBackup, trafic nelimitat, baze de date și conturi email 
                nelimitate. Oferim suport tehnic 24/7 și migrare gratuită de la alt furnizor.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-lg text-primary mb-4 flex items-center gap-2">
              <Briefcase size={18} />
              Servicii Hosting
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="group block">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span>
                    <span className="block text-xs text-muted-foreground">{s.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features bar */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Server size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground mb-1">Tehnologii enterprise incluse</h3>
                <p className="text-xs text-muted-foreground">
                  Stack profesional pentru performanță și securitate maximă.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span key={f} className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">Datacenter Germania - Acces rapid din România</h3>
              <p className="text-xs text-muted-foreground">
                Serverele noastre sunt colocate în cel mai modern datacenter din Germania, 
                garantând un timp de răspuns optim pentru vizitatorii din România și Europa. 
                Uptime 99.9% garantat și latență minimă pentru o experiență excelentă a utilizatorilor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
