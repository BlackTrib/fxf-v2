import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Servicii - Găzduire Web, Servere VPS și Dedicate | FXF',
  description: 'Explorează serviciile noastre: Găzduire Web, Servere VPS, Servere Dedicate și soluții e-commerce. Găzduire WordPress, PrestaShop, OpenCart, Magento și Performance.',
};

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Servicii Complete de Găzduire și Servere
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Alege soluția perfectă pentru website-ul sau aplicația ta din portofoliul nostru de servicii profesionale
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gazduire */}
            <div className="bg-background rounded-lg border border-border p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Găzduire</h2>
              <p className="text-muted-foreground mb-8">
                Soluții complete de găzduire optimizate pentru diferite platforme și necesități
              </p>
              <div className="space-y-4 mb-8">
                <Link href="/gazduire/web" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Găzduire Web</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/gazduire/wordpress" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Găzduire WordPress</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/gazduire/prestashop" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Găzduire PrestaShop</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/gazduire/opencart" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Găzduire OpenCart</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/gazduire/magento" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Găzduire Magento</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/gazduire/performance" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Găzduire Performance</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Fiecare soluție este configurată special pentru platforma și necesitățile tale
              </p>
            </div>

            {/* Servere */}
            <div className="bg-background rounded-lg border border-border p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Servere</h2>
              <p className="text-muted-foreground mb-8">
                Servere puternice și fiabile pentru orice tip de aplicație sau website
              </p>
              <div className="space-y-4 mb-8">
                <Link href="/servere/vps" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Servere VPS Cloud</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/servere/dedicat" className="flex items-center justify-between group p-3 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">Servere Dedicate</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Configură-ți serverul perfect cu putere de procesare și stocare adaptate nevoilor tale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">De ce să alegi FXF?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Performanță Superioară</h3>
              <p className="text-muted-foreground">
                Servere optimizate pentru viteză și performanță maximă
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Securitate Garantată</h3>
              <p className="text-muted-foreground">
                Protecție completă și copii de rezervă zilnice
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Support 24/7</h3>
              <p className="text-muted-foreground">
                Echipa noastră este mereu disponibilă pentru a te ajuta
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
