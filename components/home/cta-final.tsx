import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const benefits = [
  'SSL gratuit inclus',
  'Migrare gratuită',
  'Suport 24/7',
]

export function CTAFinal() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-5">
        <div className="bg-primary rounded-2xl px-6 py-10 lg:px-12 text-center relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          
          <div className="relative z-10">
            {/* Promo badge */}
            <div className="inline-flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <span>Reducere 10%</span>
              <span className="bg-white/20 px-2 py-0.5 rounded">cod: FXF10</span>
            </div>

            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3 text-balance">
              Începe acum cu găzduire web profesională
            </h2>
            <p className="text-white/60 text-sm mb-4 max-w-lg mx-auto leading-relaxed">
              Plasează acum o comandă nouă și beneficiezi de o reducere de 10% la toate serviciile 
              de găzduire. Folosește codul promoțional &ldquo;FXF10&rdquo; în comandă.
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-white/70 text-xs">
                  <CheckCircle2 size={12} className="text-cyber" />
                  {b}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/servicii/gazduire-web"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyber transition-colors"
              >
                Vezi pachetele <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+40785277566"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <Phone size={14} />
                +40 785 277 566
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
