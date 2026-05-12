'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Server, HardDrive, ShoppingCart, ShoppingBag, Rocket, Layers, Cloud, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'

const gazduireServices = [
  { href: '/gazduire/web', label: 'Găzduire Web', icon: Server },
  { href: '/gazduire/wordpress', label: 'Găzduire WordPress', icon: HardDrive },
  { href: '/gazduire/prestashop', label: 'Găzduire PrestaShop', icon: ShoppingCart },
  { href: '/gazduire/opencart', label: 'Găzduire OpenCart', icon: ShoppingBag },
  { href: '/gazduire/magento', label: 'Găzduire Magento', icon: Layers },
  { href: '/gazduire/performance', label: 'Găzduire Performance', icon: Rocket },
]

const servereServices = [
  { href: '/servere/vps', label: 'VPS Cloud', icon: Cloud },
  { href: '/servere/dedicat', label: 'Servere Dedicate', icon: Cpu },
]

const links = [
  { href: '/', label: 'Acasă' },
  { href: '/despre', label: 'Despre' },
  { href: '/gazduire', label: 'Găzduire', dropdown: 'gazduire' },
  { href: '/servere', label: 'Servere', dropdown: 'servere' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileGazduire, setMobileGazduire] = useState(false)
  const [mobileServere, setMobileServere] = useState(false)
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    const checkIsHome = () => {
      setIsHome(window.location.pathname === '/' || window.location.pathname === '')
    }
    checkIsHome()
    window.addEventListener('popstate', checkIsHome)
    return () => window.removeEventListener('popstate', checkIsHome)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled

  const getDropdownServices = (type: string) => {
    if (type === 'gazduire') return gazduireServices
    if (type === 'servere') return servereServices
    return []
  }

  return (
    <header className={cn(
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled ? 'py-2' : 'py-3'
    )}>
      <div className={cn(
        'absolute inset-0 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-white border-b border-border/50 shadow-sm'
      )} />

      <div className="max-w-6xl mx-auto px-5 relative">
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm font-bold transition-all',
              transparent
                ? 'bg-white/15 text-white border border-white/20 group-hover:bg-white/25'
                : 'bg-primary text-white group-hover:bg-primary/90'
            )}>
              {'</>'}
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                'font-display font-bold text-base tracking-wide transition-colors',
                transparent ? 'text-white' : 'text-primary'
              )}>
                FXF <span className="ml-0.5">WEB</span>
              </span>
              <span className={cn(
                'text-[8px] font-medium tracking-[0.48em] uppercase transition-colors',
                transparent ? 'text-white/60' : 'text-muted-foreground'
              )}>
                SOLUTION
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <div className={cn(
              'flex items-center gap-0.5 rounded-xl px-2 py-1.5 transition-all duration-300',
              transparent
                ? 'bg-white shadow-sm'
                : 'bg-secondary/60'
            )}>
              {links.map((link) => (
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.dropdown || null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={cn(
                      'px-3 py-1.5 rounded-lg text-[13px] font-medium flex items-center gap-1 transition-colors',
                      transparent
                        ? 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                        : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                    )}>
                      {link.label}
                      <ChevronDown size={12} className={cn('transition-transform', activeDropdown === link.dropdown && 'rotate-180')} />
                    </button>

                    {/* Dropdown */}
                    <div className={cn(
                      'absolute top-full left-0 pt-2 transition-all duration-200',
                      activeDropdown === link.dropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    )}>
                      <div className="bg-white rounded-lg shadow-xl border border-border/50 p-1.5 min-w-[180px]">
                        {getDropdownServices(link.dropdown).map((s) => {
                          const Icon = s.icon
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                            >
                              <Icon size={14} className="text-muted-foreground" />
                              {s.label}
                            </Link>
                          )
                        })}
                        <div className="border-t border-border/50 mt-1 pt-1">
                          <Link
                            href={link.href}
                            className="flex items-center px-3 py-2 rounded-md text-[13px] text-primary font-medium hover:bg-primary/5 transition-colors"
                          >
                            {link.dropdown === 'gazduire' ? 'Toate pachetele' : 'Toate serverele'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors text-foreground/70 hover:text-foreground hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/autentificare"
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all',
                transparent
                  ? 'bg-white text-foreground hover:bg-white/90 shadow-sm'
                  : 'bg-primary text-white hover:bg-primary/90'
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Autentificare
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              transparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-secondary'
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'lg:hidden fixed inset-x-0 transition-all duration-300',
        open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
      )} style={{ top: scrolled ? '56px' : '64px' }}>
        <div className="bg-white border-b border-border/50 shadow-lg p-2">
          {links.map((link) =>
            link.dropdown === 'gazduire' ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileGazduire(!mobileGazduire)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:bg-secondary transition-colors"
                >
                  {link.label}
                  <ChevronDown size={14} className={cn('transition-transform', mobileGazduire && 'rotate-180')} />
                </button>
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  mobileGazduire ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}>
                  <div className="ml-3 mt-1 border-l-2 border-border pl-3 space-y-0.5">
                    {gazduireServices.map((s) => {
                      const Icon = s.icon
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:bg-secondary hover:text-primary transition-colors"
                        >
                          <Icon size={14} className="text-muted-foreground" />
                          {s.label}
                        </Link>
                      )
                    })}
                    <Link
                      href="/gazduire"
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-primary font-medium hover:bg-primary/5 transition-colors"
                    >
                      Toate pachetele
                    </Link>
                  </div>
                </div>
              </div>
            ) : link.dropdown === 'servere' ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServere(!mobileServere)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:bg-secondary transition-colors"
                >
                  {link.label}
                  <ChevronDown size={14} className={cn('transition-transform', mobileServere && 'rotate-180')} />
                </button>
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  mobileServere ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}>
                  <div className="ml-3 mt-1 border-l-2 border-border pl-3 space-y-0.5">
                    {servereServices.map((s) => {
                      const Icon = s.icon
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:bg-secondary hover:text-primary transition-colors"
                        >
                          <Icon size={14} className="text-muted-foreground" />
                          {s.label}
                        </Link>
                      )
                    })}
                    <Link
                      href="/servere"
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-primary font-medium hover:bg-primary/5 transition-colors"
                    >
                      Toate serverele
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="border-t border-border/50 mt-2 pt-2">
            <Link
              href="/autentificare"
              className="block px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white text-center"
            >
              Autentificare
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
