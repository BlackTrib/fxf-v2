'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const faqs = [
  { 
    q: 'Ce include un pachet de găzduire web?', 
    a: 'Toate pachetele includ: spațiu SSD NVMe, domenii și baze de date nelimitate, email nelimitat, certificat SSL Let\'s Encrypt gratuit, cPanel, LiteSpeed, backup zilnic JetBackup, protecție Imunify360 și suport tehnic 24/7.' 
  },
  { 
    q: 'Cum pot transfera site-ul de la alt furnizor?', 
    a: 'Migrarea este gratuită! Echipa noastră se ocupă de transferul complet al site-ului, bazei de date și email-urilor de la vechiul furnizor. Procesul durează de obicei 24-48 de ore fără downtime.' 
  },
  { 
    q: 'Ce este certificatul SSL și este inclus?', 
    a: 'SSL criptează datele dintre vizitator și server. Da, certificatul SSL Let\'s Encrypt este gratuit și se instalează automat pentru toate domeniile găzduite în contul tău.' 
  },
  { 
    q: 'Ce înseamnă uptime 99.9% garantat?', 
    a: 'Garantăm că serverele noastre sunt online și funcționale cel puțin 99.9% din timp. În cazul rar în care nu respectăm această garanție, primești credit pentru perioada afectată.' 
  },
  { 
    q: 'Pot face upgrade la un pachet mai mare?', 
    a: 'Da, poți face upgrade oricând! Plătești doar diferența de preț pentru perioada rămasă. Upgrade-ul se face instant, fără downtime sau pierdere de date.' 
  },
  { 
    q: 'Ce se întâmplă cu backup-urile?', 
    a: 'JetBackup face automat backup-uri zilnice ale tuturor fișierelor și bazelor de date. Păstrăm backup-uri pentru ultimele 7 zile. Poți restaura oricând din cPanel cu un click.' 
  },
  { 
    q: 'Oferiți suport pentru WordPress/PrestaShop?', 
    a: 'Da! Oferim găzduire optimizată pentru WordPress și PrestaShop cu LiteSpeed Cache pre-instalat. Echipa noastră poate ajuta cu instalarea, configurarea și optimizarea acestor platforme.' 
  },
  { 
    q: 'Care sunt metodele de plată acceptate?', 
    a: 'Acceptăm plăți prin card bancar, transfer bancar și PayPal. Facturarea se face la 6 luni sau anual, cu reducere pentru plata anuală.' 
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Header */}
          <Reveal direction="left" className="lg:col-span-1">
            <p className="text-accent-brand text-xs font-semibold uppercase tracking-widest mb-1">Întrebări frecvente</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
              Ai întrebări despre găzduire?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Am compilat răspunsurile la cele mai frecvente întrebări despre serviciile noastre 
              de găzduire web, migrare, backup și suport tehnic.
            </p>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">Nu găsești răspunsul?</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Echipa noastră de suport este disponibilă 24/7 pentru orice întrebare.
                  </p>
                  <Link href="/contact" className="text-xs font-semibold text-primary hover:text-accent-brand transition-colors">
                    Contactează suportul →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right - Accordion */}
          <Reveal direction="right" delay={100} className="lg:col-span-2">
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
                  <button
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-secondary/30 transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-medium text-sm text-foreground">{faq.q}</span>
                    <ChevronDown size={16} className={cn('text-muted-foreground shrink-0 transition-transform', open === i && 'rotate-180')} />
                  </button>
                  <div className={cn('overflow-hidden transition-all duration-200', open === i ? 'max-h-48' : 'max-h-0')}>
                    <p className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
