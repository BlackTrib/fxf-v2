'use client'

import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const testimonials = [
  { 
    quote: 'Perfect pentru a îmi ține căsuța poștală activă și să stochez anumite date. Pe lângă toate, am și un site de prezentare. Suficient pentru ce am nevoie, recomand!', 
    name: 'Laur Văcărescu', 
    role: 'Antreprenor', 
    result: 'Găzduire Starter',
    project: 'Site prezentare + Email'
  },
  { 
    quote: 'Prețuri mici față de concurență. Apreciez faptul că v-ați ocupat și de migrarea datelor fără să pierd nimic în doar câteva ore. Nota 10, recomand serviciile voastre!', 
    name: 'George Petrescu', 
    role: 'Manager IT', 
    result: 'Găzduire Business',
    project: 'Migrare de la alt furnizor'
  },
  { 
    quote: 'Mulțumesc pentru ajutorul oferit! Nici nu știam că magazinul meu poate să meargă așa rapid. Recomand celor ce vor calitate și suport prompt!', 
    name: 'Cristian Iordache', 
    role: 'Proprietar magazin online', 
    result: 'Găzduire E-Commerce',
    project: 'Magazin PrestaShop'
  },
]

const badges = [
  '500+ clienți activi',
  '99.9% uptime',
  '4+ ani experiență',
]

export function Testimonials() {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Testimoniale clienți</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2 lg:whitespace-nowrap">
              Ce spun clienții noștri
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Recenzii verificate de la clienți care folosesc serviciile noastre de găzduire 
              pentru site-uri de prezentare, magazine online și aplicații web.
            </p>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="text-xs font-medium text-muted-foreground bg-card border border-border px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 100}>
            <figure className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-sm transition-all h-full">
              {/* Quote icon */}
              <div className="flex items-center justify-between mb-3">
                <Quote size={20} className="text-primary/20" />
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground text-sm leading-relaxed mb-3">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              
              {/* Project type */}
              <p className="text-[10px] text-muted-foreground mb-2">
                <span className="font-semibold">Proiect:</span> {t.project}
              </p>
              
              {/* Result */}
              <div className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded w-fit mb-3">
                {t.result}
              </div>
              
              {/* Author */}
              <figcaption className="border-t border-border pt-3">
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
