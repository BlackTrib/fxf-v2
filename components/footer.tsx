'use client'

import Link from 'next/link'
import { Mail, Phone, ArrowRight, MapPin, Star, CheckCircle2, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const gazduire = [
  { href: '/gazduire/web', label: 'Găzduire Web' },
  { href: '/gazduire/wordpress', label: 'Găzduire WordPress' },
  { href: '/gazduire/prestashop', label: 'Găzduire PrestaShop' },
  { href: '/gazduire/opencart', label: 'Găzduire OpenCart' },
  { href: '/gazduire/magento', label: 'Găzduire Magento' },
  { href: '/gazduire/performance', label: 'Găzduire Performance' },
]

const servere = [
  { href: '/servere/vps', label: 'VPS Cloud' },
  { href: '/servere/dedicat', label: 'Servere Dedicate' },
  { href: '/servere/storage', label: 'Cloud Storage' },
]

const company = [
  { href: '/despre', label: 'Despre noi' },
  { href: '/gazduire', label: 'Găzduire' },
  { href: '/servere', label: 'Servere' },
  { href: '/contact', label: 'Contact' },
  { href: '/termeni', label: 'Termeni și condiții' },
  { href: '/confidentialitate', label: 'Politică confidențialitate' },
]

const badges = [
  'SSL gratuit',
  'Suport 24/7',
  'Uptime 99.9%',
  'Migrare gratuită',
]

const parteneri = [
  { href: 'https://fxf.ro', label: 'Creare Website' },
  { href: 'https://epresta.ro', label: 'Dezvoltare PrestaShop' },
]

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 lg:border-none">
      {/* Mobile header - clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden w-full flex items-center justify-between py-3.5 text-left"
        aria-expanded={open}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">{title}</span>
        <ChevronDown
          size={14}
          className={`text-white/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Desktop header - always visible */}
      <h3 className="hidden lg:block text-[10px] font-bold uppercase tracking-wider text-white/30 mb-4">{title}</h3>

      {/* Content - hidden on mobile unless open */}
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 pb-4' : 'max-h-0 lg:max-h-96'}`}>
        {children}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* Top CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Reducere bun venit</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              10% reducere cu codul{' '}
              <span className="text-cyber">FXF10</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/gazduire/web"
              className="inline-flex items-center gap-2 bg-cyber text-primary px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Vezi pachetele <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-white/40 hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Badges strip */}
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-0">
          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:gap-x-6 gap-x-4 gap-y-2">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-cyber shrink-0" />
                <span className="text-white/50 text-xs">{b}</span>
              </div>
            ))}
          </div>
          <div className="sm:ml-auto flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={11} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white/40 text-xs ml-1">4.9/5 — 54 recenzii</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-5 py-8 lg:py-12 border-t border-b border-white/10 lg:border-none">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-10 mb-6 lg:mb-10">

          {/* Brand column - always visible */}
          <div className="lg:col-span-1 pb-6 mb-2 border-b border-white/10 lg:border-none lg:mb-0 lg:pb-0">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm font-bold bg-white/10 text-white border border-white/20">
                {'</>'}
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base tracking-wide text-white">FXF <span className="ml-0.5">WEB</span></span>
                <span className="text-[8px] font-medium tracking-[0.48em] uppercase text-white/50">HOSTING</span>
              </div>
            </div>

            <p className="text-white/50 text-xs leading-relaxed mb-5">
              Găzduire web profesională pe servere SSD NVMe în Germania.
              cPanel, SSL gratuit, backup zilnic și suport tehnic 24/7.
            </p>

            <div className="space-y-2.5 text-xs text-white/50">
              <a href="tel:+40785277566" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Phone size={11} />
                </div>
                +40 785 277 566
              </a>
              <a href="mailto:suport@fxfweb.ro" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Mail size={11} />
                </div>
                suport@fxfweb.ro
              </a>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                  <MapPin size={11} />
                </div>
                FXF Creative Agency SRL
              </div>
            </div>
          </div>

          {/* Gazduire */}
          <div>
            <AccordionSection title="Găzduire">
              <ul className="space-y-2.5">
                {gazduire.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>
          </div>

          {/* Servere + Parteneri */}
          <div>
            <AccordionSection title="Servere">
              <ul className="space-y-2.5">
                {servere.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            {/* Parteneri - desktop always visible, mobile separate accordion */}
            <div className="hidden lg:block mt-6">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-4">Parteneri</h3>
              <ul className="space-y-2.5">
                {parteneri.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:hidden">
              <AccordionSection title="Parteneri">
                <ul className="space-y-2.5">
                  {parteneri.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionSection>
            </div>
          </div>

          {/* Companie */}
          <div>
            <AccordionSection title="Companie">
              <ul className="space-y-2.5">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/55 text-xs hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyber transition-colors shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>
          </div>

          {/* Suport */}
          <div>
            <AccordionSection title="Suport">
              <div className="space-y-2 mb-4">
                {[
                  { day: 'Telefon / Email', hours: '24/7' },
                  { day: 'Ticket', hours: 'Răspuns < 4h' },
                  { day: 'Migrare', hours: 'Gratuită' },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between gap-4">
                    <span className="text-white/40 text-xs">{row.day}</span>
                    <span className="text-white/70 text-xs font-medium">{row.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-2">Tehnologii</p>
                <div className="flex flex-wrap gap-1">
                  {['cPanel', 'LiteSpeed', 'CloudLinux', 'Imunify360', 'JetBackup', 'SSL'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AccordionSection>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[10px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} FXF Web Hosting SRL. Toate drepturile rezervate. {' '}
            <a
              href="https://reclamatiisal.anpc.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber hover:text-white transition-colors underline"
            >
              ANPC
            </a>
            {' '} • {' '}
            <a
              href="https://consumer-redress.ec.europa.eu/site-relocation_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber hover:text-white transition-colors underline"
            >
              SOL
            </a>
          </p>
          <div className="flex items-center gap-1 text-white/25 text-[10px]">
            <span>Servere în</span>
            <span className="text-cyber mx-0.5">Germania</span>
            <span>• Datacenter Tier III</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
