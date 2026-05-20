'use client'

import Link from 'next/link'
import { Server, HardDrive, ArrowRight, CheckCircle2, Zap, Cloud, Cpu, Globe, Clock, Headphones } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const hostingPackages = [
  { 
    icon: Server, 
    title: 'Găzduire Business', 
    desc: 'Perfect pentru site-uri WordPress, aplicații web și proiecte cu trafic moderat.',
    price: '38',
    period: '6 luni',
    currency: '€',
    features: ['10GB NVMe SSD', 'Domenii nelimitate', 'cPanel + JetBackup', 'LiteSpeed + Imunify', '2CPU / 2GB RAM'],
    href: '/gazduire/web', 
  },
  { 
    icon: HardDrive, 
    title: 'Performance Start', 
    desc: 'Resurse dedicate CPU și RAM pentru site-uri cu cerințe ridicate de performanță.',
    price: '171',
    period: '6 luni',
    currency: '€',
    features: ['100GB NVMe SSD', 'Domenii nelimitate', 'cPanel + JetBackup', 'LiteSpeed Enterprise', '4CPU / 4GB RAM'],
    href: '/gazduire/performance',
    popular: true,
  },
  { 
    icon: Cloud, 
    title: 'VPS Pro Start', 
    desc: 'Server virtual privat cu resurse dedicate, root access complet și IP dedicat.',
    price: '210',
    period: '6 luni',
    currency: '€',
    features: ['160GB NVMe SSD', '4 vCPU AMD EPYC', '8GB DDR5 RAM', 'IP dedicat IPv4+IPv6', 'Root access + DDoS'],
    href: '/servere/vps',
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

        {/* Featured Card */}
        <Reveal direction="up" className="mb-8">
          <div className="relative max-w-md mx-auto bg-white dark:bg-slate-900 border-2 border-primary rounded-2xl p-6 shadow-lg">
            <div className="absolute -top-3 left-6 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              CEL MAI POPULAR
            </div>
            <div className="absolute -bottom-3 -left-2 bg-emerald-400 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <span>💰</span> Cod: FXF10 - Reducere bun venit
            </div>
            
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Găzduire Business</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">38</span>
                <span className="text-muted-foreground text-sm">€ /6 luni</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm">
                <HardDrive size={18} className="text-slate-400" />
                <span className="text-foreground">Spațiu: 10GB NVMe SSD</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Globe size={18} className="text-slate-400" />
                <span className="text-foreground">Domenii găzduite: Nelimitat</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Zap size={18} className="text-slate-400" />
                <span className="text-foreground">LiteSpeed + cPanel</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-slate-400" />
                <span className="text-foreground">SSL Let's Encrypt gratuit</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock size={18} className="text-slate-400" />
                <span className="text-foreground">Backup 24 din 24 ore</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Headphones size={18} className="text-slate-400" />
                <span className="text-foreground">Suport tehnic 24/7</span>
              </li>
            </ul>

            <Link href="/gazduire/web" className="block w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity">
              Comandă acum
            </Link>
          </div>
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
                  <span className="text-2xl font-bold text-primary">{pkg.price} {pkg.currency}</span>
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
