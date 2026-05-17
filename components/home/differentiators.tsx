'use client'

import { Zap, Shield, HardDrive, Clock, Headphones, Server } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const items = [
  { icon: Zap, title: 'Servere NVMe ultrarapide', desc: 'Stocare SSD NVMe care crește viteza de încărcare a site-ului de până la 5 ori față de HDD tradițional.' },
  { icon: Shield, title: 'Securitate avansată', desc: 'Firewall puternic, Imunify360, protecție DDoS și actualizări de securitate automate pentru datele tale.' },
  { icon: HardDrive, title: 'Backup zilnic automat', desc: 'JetBackup face backup-uri zilnice ale site-ului tău. Restaurare cu un click în caz de nevoie.' },
  { icon: Clock, title: 'Uptime 99.9% garantat', desc: 'Serverele noastre din Germania garantează disponibilitate maximă și timp de răspuns optim.' },
  { icon: Headphones, title: 'Suport 24/7', desc: 'Echipa noastră de suport tehnic e disponibilă non-stop prin telefon, email sau ticket.' },
  { icon: Server, title: 'cPanel & LiteSpeed', desc: 'Panou de control intuitiv cPanel și server web LiteSpeed pentru performanță maximă.' },
]

export function Differentiators() {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left */}
          <Reveal direction="left" className="lg:col-span-2">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">De ce FXF Web Hosting</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
              Servere adaptate necesității tale
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Folosim tehnologie care crește de până la 5 ori viteza de încărcare a site-ului. 
              Serverele noastre sunt rapide și puternice, având o arhitectură 64 Core, 96GB RAM 
              cu 6 unități SSD 1TB montate în Raid 10.
            </p>
            
            {/* Server specs */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-primary mb-2">Specificații server:</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div>64 Core CPU</div>
                <div>96GB RAM DDR5</div>
                <div>6x 1TB SSD NVMe</div>
                <div>Raid 10</div>
                <div>CloudLinux OS</div>
                <div>Datacenter Germania</div>
              </div>
            </div>
          </Reveal>

          {/* Right - Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <Reveal key={item.title} direction="right" delay={i * 80}>
              <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/20 hover:shadow-sm transition-all h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
