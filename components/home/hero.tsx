import Link from 'next/link'
import { ArrowRight, Star, Server, Shield, Zap, CheckCircle2, ChevronDown, HardDrive, Clock, Headphones } from 'lucide-react'

const benefits = [
  'SSL gratuit inclus',
  'cPanel inclus',
  'Suport tehnic 24/7',
  'Uptime 99.9% garantat',
]

// Server/hosting themed floating elements
const floatingElements = [
  { symbol: '< />', x: '8%', y: '15%', size: 'text-2xl', anim: 'animate-float-slow', delay: '0s', color: 'text-cyber/20' },
  { symbol: 'SSD', x: '85%', y: '20%', size: 'text-xl', anim: 'animate-float-medium', delay: '0.5s', color: 'text-white/15' },
  { symbol: 'NVMe', x: '12%', y: '70%', size: 'text-lg', anim: 'animate-float-fast', delay: '1s', color: 'text-accent-brand/15' },
  { symbol: '99.9%', x: '78%', y: '75%', size: 'text-base', anim: 'animate-float-slow', delay: '0.3s', color: 'text-cyber/15' },
  { symbol: 'SSL', x: '92%', y: '45%', size: 'text-xl', anim: 'animate-float-medium', delay: '0.8s', color: 'text-white/12' },
  { symbol: 'CPU', x: '5%', y: '45%', size: 'text-xl', anim: 'animate-float-fast', delay: '0.2s', color: 'text-accent-brand/12' },
  { symbol: 'RAM', x: '88%', y: '85%', size: 'text-sm', anim: 'animate-float-slow', delay: '1.2s', color: 'text-white/10' },
  { symbol: 'PHP', x: '15%', y: '88%', size: 'text-lg', anim: 'animate-float-medium', delay: '0.6s', color: 'text-cyber/12' },
]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-primary overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className={`absolute font-mono font-bold ${el.size} ${el.color} ${el.anim} select-none drop-shadow-sm`}
            style={{
              left: el.x,
              top: el.y,
              animationDelay: el.delay,
            }}
          >
            {el.symbol}
          </div>
        ))}
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)',
            right: '5%',
            bottom: '10%',
          }}
        />
      </div>

      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 pt-24 pb-14 lg:pb-16 lg:pt-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 items-center">
          {/* Content - 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white/60 text-xs font-medium">Hosting de încredere din 2021</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Găzduire Web{' '}
              <span style={{ color: 'oklch(0.72 0.14 70)' }}>SSD NVMe</span>{' '}
              profesională cu{' '}
              <span style={{ color: 'oklch(0.72 0.14 70)' }}>uptime 99.9%</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              FXF Web Hosting oferă servicii de găzduire web profesionale pe servere SSD NVMe 
              ultrarapide. Hosting optimizat pentru WordPress, PrestaShop și magazine online, 
              cu cPanel, SSL gratuit și suport tehnic 24/7. Prețuri de la doar 3.17€/lună (19€/6 luni).
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { icon: Zap, label: 'Servere NVMe rapide' },
                { icon: Shield, label: 'SSL gratuit inclus' },
                { icon: Headphones, label: 'Suport 24/7' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-1.5 text-white/60 text-sm">
                  <f.icon size={14} className="text-cyber" />
                  {f.label}
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/gazduire/web"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-cyber hover:text-primary transition-all glow-hover"
              >
                Vezi pachetele de hosting
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Contactează-ne
              </Link>
            </div>
          </div>

          {/* Pricing Preview - 2 cols */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative animate-float-slow">
              {/* Glow */}
              <div className="absolute -inset-4 bg-accent-brand/10 rounded-2xl blur-2xl" />
              
              <div className="relative bg-white rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-primary/5 px-5 py-4 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        CEL MAI POPULAR
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground mt-1">Găzduire Business</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">6.33 €<span className="text-sm text-muted-foreground">/lună</span></p>
                      <p className="text-xs text-muted-foreground">38€ la 6 luni</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-5 space-y-3">
                  {[
                    { icon: HardDrive, label: 'Spațiu: 10GB NVMe SSD' },
                    { icon: Server, label: 'Domenii găzduite: Nelimitat' },
                    { icon: Zap, label: 'LiteSpeed + cPanel' },
                    { icon: Shield, label: "SSL Let's Encrypt gratuit" },
                    { icon: Clock, label: 'Backup 24 din 24 ore' },
                    { icon: Headphones, label: 'Suport tehnic 24/7' },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <f.icon size={16} className="text-primary" />
                      </div>
                      {f.label}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <Link
                    href="/gazduire/web"
                    className="block w-full bg-primary text-white text-center py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Comandă acum
                  </Link>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-lg shadow-xl px-3 py-2 flex items-center gap-2 animate-float-medium" style={{ animationDelay: '0.5s' }}>
                <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center text-sm font-bold">
                  -10%
                </div>
                <div className="text-[11px]">
                  <p className="font-semibold">Cod: FXF10</p>
                  <p className="text-white/80">Reducere bun venit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-white/30 text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
        <ChevronDown size={14} className="text-white/30 animate-bounce" style={{ animationDelay: '0.15s' }} />
      </div>
    </section>
  )
}
