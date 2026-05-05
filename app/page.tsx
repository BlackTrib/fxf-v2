import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { ServicesOverview } from '@/components/home/services-overview'
import { Differentiators } from '@/components/home/differentiators'
import { Testimonials } from '@/components/home/testimonials'
import { FAQ } from '@/components/home/faq'
import { CTAFinal } from '@/components/home/cta-final'
import { SEOContent } from '@/components/home/seo-content'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce include un pachet de găzduire web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toate pachetele includ: spațiu SSD NVMe, domenii și baze de date nelimitate, email nelimitat, certificat SSL Let\'s Encrypt gratuit, cPanel, LiteSpeed, backup zilnic JetBackup, protecție Imunify360 și suport tehnic 24/7.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum pot transfera site-ul de la alt furnizor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Migrarea este gratuită! Echipa noastră se ocupă de transferul complet al site-ului, bazei de date și email-urilor de la vechiul furnizor. Procesul durează de obicei 24-48 de ore fără downtime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce înseamnă uptime 99.9% garantat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Garantăm că serverele noastre sunt online și funcționale cel puțin 99.9% din timp. În cazul rar în care nu respectăm această garanție, primești credit pentru perioada afectată.',
      },
    },
    {
      '@type': 'Question',
      name: 'Oferiți suport pentru WordPress/PrestaShop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da! Oferim găzduire optimizată pentru WordPress și PrestaShop cu LiteSpeed Cache pre-instalat. Echipa noastră poate ajuta cu instalarea, configurarea și optimizarea acestor platforme.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce se întâmplă cu backup-urile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JetBackup face automat backup-uri zilnice ale tuturor fișierelor și bazelor de date. Păstrăm backup-uri pentru ultimele 7 zile. Poți restaura oricând din cPanel cu un click.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div className="below-fold">
          <ServicesOverview />
        </div>
        <div className="below-fold">
          <Differentiators />
        </div>
        <div className="below-fold">
          <Testimonials />
        </div>
        <div className="below-fold">
          <FAQ />
        </div>
        <div className="below-fold">
          <SEOContent />
        </div>
        <div className="below-fold">
          <CTAFinal />
        </div>
      </main>
      <Footer />
    </>
  )
}
