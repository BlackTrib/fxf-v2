'use client'

import Link from 'next/link'
import { Server, ShoppingCart, HardDrive, ArrowRight, CheckCircle2, Zap, Cloud, Cpu, Globe } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const hostingPackages = [
  { 
    icon: Server, 
    title: 'Găzduire Start', 
    desc: 'Ideal pentru site-uri de prezentare mici, bloguri și serviciul email. Perfect pentru a începe.',
    price: '55',
    period: '6 luni',
    features: ['1GB NVMe SSD', 'Domenii nelimitate', 'Email nelimitat', 'cPanel + JetBackup', '1 CPU / 1GB RAM'],
    href: '/gazduire/web', 
  },
  { 
    icon: HardDrive, 
    title: 'Găzduire Business', 
    desc: 'Perfect pentru proiecte medii, site-uri WordPress și aplicații web cu trafic moderat.',
    price: '207',
    period: '6 luni',
    features: ['10GB NVMe SSD', 'Domenii nelimitate', 'Email nelimitat', 'LiteSpeed + Imunify', '2 CPU / 2GB RAM'],
    href: '/gazduire/web',
    popular: true 
  },
  { 
    icon: ShoppingCart, 
    title: 'Găzduire E-Commerce', 
    desc: 'Creat special pentru magazine online PrestaShop, WooCommerce sau alte platforme e-commerce.',
    price: '455',
    period: '6 luni',
    features: ['30GB NVMe SSD', 'Domenii nelimitate', 'Email nelimitat', 'LiteSpeed + Imunify', '3 CPU / 3GB RAM'],
    href: '/gazduire/prestashop' 
  },
]

const additionalServices = [
  { 
    icon: Zap, 
    title: 'Găzduire WordPress', 
    desc: 'Hosting optimizat special pentru WordPress cu LiteSpeed Cache.',
    href: '/gazduire/wordpress' 
  },
  { 
    icon: Cloud, 
    title: 'VPS Cloud', 
    desc: 'Servere virtuale private cu resurse dedicate și root access complet.',
    href: '/servere/vps' 
  },
  { 
    icon: Cpu, 
    title: 'Servere Dedicate', 
    desc: 'Hardware dedicat 100% pentru proiecte enterprise cu trafic intens.',
    href: '/servere/dedicat' 
  },
]

const features = ['cPanel', 'LiteSpeed', 'SSL Gratuit', 'JetBackup', 'Imunify360', 'CloudLinux']

export function ServicesOverview() {
  return (
    <section className="py-14 bg-secondary/30" id="servicii">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Pachete Găzduire Web</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2 lg:whitespace-nowrap">
              Găzduire web la prețuri mici
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alege pachetul potrivit pentru afacerea ta. Toate pachetele includ SSL gratuit, 
              cPanel, backup zilnic și suport tehnic 24/7.
            </p>
          </div>
          <Link href="/gazduire" className="text-sm font-medium text-primary hover:text-accent-brand flex items-center gap-1 transition-colors shrink-0">
            Toate pachetele <ArrowRight size={14} />
          </Link>
        </Reveal>

        {/* Hosting Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {hostingPackages.map((pkg, i) => (
            <Reveal
              key={pkg.title}
              direction="up"
              delay={i * 80}
              as="div"
              className={`group relative bg-card border rounded-xl p-5 hover:border-primary/30 card-hover ${
                pkg.popular ? 'border-primary border-2' : 'border-border'
              }`}
            >
              <Link href={pkg.href} className="flex flex-col h-full">
                {pkg.popular && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                    POPULAR
                  </span>
                )}
                <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <pkg.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{pkg.desc}</p>
                
                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl font-bold text-primary">{pkg.price} lei</span>
                  <span className="text-muted-foreground text-sm">/{pkg.period}</span>
                </div>
                
                {/* Features list */}
                <ul className="space-y-1.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary group-hover:text-accent-brand flex items-center gap-1">
                    Comandă acum <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Additional Services */}
        <Reveal direction="up" delay={200}>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {additionalServices.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Features Bar */}
        <Reveal direction="up" delay={300}>
          <div className="bg-secondary/50 border border-border rounded-xl p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">Inclus în toate pachetele</p>
                <p className="text-xs text-muted-foreground">Tehnologii enterprise pentru performanță maximă</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {features.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-md border border-border hover:border-primary/30 hover:text-primary transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
