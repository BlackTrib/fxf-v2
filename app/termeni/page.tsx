import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Termeni și Condiții | FXF Web Hosting România',
  description: 'Termenii și condițiile de utilizare a serviciilor de găzduire web FXF Web Hosting. Informații despre plăți, servicii, backup-uri și drepturi utilizator.',
}

export default function TermeniPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-5 py-24">
          <h1 className="font-display text-4xl font-bold text-primary mb-2">Termeni și Condiții</h1>
          <p className="text-muted-foreground text-sm mb-12">Ultima actualizare: aprilie 2026</p>

          <div className="prose prose-lg max-w-none space-y-10 text-foreground">

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Informații generale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prezentul document reglementează termenii și condițiile de utilizare a serviciilor de găzduire web oferite de <strong>FXF Web Hosting SRL</strong>,
                cu sediul în Str. Topolnita nr. 5, București, România, denumită în continuare &quot;FXF&quot; sau &quot;Furnizorul&quot;.
                Prin accesarea site-ului sau achiziționarea oricărui pachet de hosting, Clientul acceptă în totalitate prezentele termeni și condiții.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Servicii oferite</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                FXF Web Hosting oferă servicii profesionale de:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Găzduire web SSD NVMe pe servere în Germania</li>
                <li>Găzduire optimizată pentru WordPress, PrestaShop, OpenCart și Magento</li>
                <li>Pachete Performance cu resurse CPU și RAM dedicate</li>
                <li>Înregistrare și transfer de domenii</li>
                <li>Certificate SSL gratuite (Let&apos;s Encrypt)</li>
                <li>Backup-uri automate și migrare gratuită de site-uri</li>
                <li>Suport tehnic 24/7 prin email și ticket</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Comenzi și contracte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orice serviciu de hosting se contractează prin selectarea unui pachet de pe site și finalizarea plății. Contractul devine efectiv
                imediat după confirmarea plății. FXF emite o factură și date de acces în termen de 1 oră. FXF își rezervă dreptul de a refuza
                orice comandă care încalcă legea sau condiții de utilizare acceptabile.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Plăți și facturare</h2>
              <p className="text-muted-foreground leading-relaxed">
                Plata se efectuează integral înainte de activarea serviciului, prin metodele disponibile pe site (card, transfer bancar, etc.).
                Factura se emite imediat după confirmare. Pachetele sunt facturaTE pe perioade de 6 luni, 12 luni sau 24 luni, conform
                alegerii Clientului. Niciunul din servicii nu se reaactivează automat la expirare; se va trimite notificare cu 7 zile înainte.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Activare și anulare</h2>
              <p className="text-muted-foreground leading-relaxed">
                Activarea se efectuează în maxim 1 oră după plată. Clientul are acces instant la cPanel și email-uri. Anularea serviciului se
                poate face oricând din panoul de control al Clientului. Serviciile plătite nu sunt rambursabile după activare. În caz de probleme
                critice legate de hosting, Clientul poate solicita rambursare parțială în termen de 14 zile.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Drepturile și responsabilitățile Clientului</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clientul se angajează să: (a) respecte legile în vigoare și orice reglementări privind conținutul, (b) nu încalce drepturi de
                proprietate intelectuală ale terților, (c) nu utilizeze serviciul pentru spam, malware sau atacuri, (d) să nu överload-eze
                serverele. FXF se rezervă dreptul de a suspenda cont-ul imediat în caz de încălcare.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Backup-uri și recuperare date</h2>
              <p className="text-muted-foreground leading-relaxed">
                FXF realizează backup-uri automate zilnice pentru toate conturile. Backup-urile se păstrează timp de 7 zile și pot fi restaurate
                gratuit din cPanel. Backup-urile mai vechi de 7 zile nu se păstrează. Clientul este responsabil pentru propriile copii de siguranță
                ale datelor critice. FXF nu este responsabilă pentru pierderea datelor cauzată de acțiuni Clientului.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Garanție de disponibilitate (Uptime)</h2>
              <p className="text-muted-foreground leading-relaxed">
                FXF garantează un uptime de 99.9% pentru toate serviciile de hosting. Întreținerea programată este exclusă din această garanție.
                În caz de nerespectare, Clientul primește credit proporțional pentru luna în care s-a întâmplat. Reclamația trebuie depusă în
                termen de 30 de zile.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Limitarea răspunderii</h2>
              <p className="text-muted-foreground leading-relaxed">
                FXF nu este responsabilă pentru: pierderi indirecte, pierdere de profit, daune consecutive. Răspunderea totală a FXF nu va
                depăși suma plătită de Client în ultimele 3 luni. FXF nu garantează că serviciile sunt libere de erori sau neîntrerupte.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">10. Suspensie și reziliție</h2>
              <p className="text-muted-foreground leading-relaxed">
                FXF poate suspenda serviciul dacă: (a) Clientul încalcă prezentele condiții, (b) conținutul este ilegal sau dăunător, (c) se
                folosesc resurse în mod excesiv. Rezilierea se poate face cu preaviz de 15 zile scris. Datele sunt șterse după 30 de zile de la
                reziliație.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">11. Legislație și jurisdicție</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prezentul contract este guvernat de legislația română. Orice litigiu va fi soluționat pe cale amiabilă sau de instanțele
                competente din București.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">12. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări legate de acești termeni, ne puteți contacta la:<br />
                <strong>Email:</strong> support@fxfweb.ro<br />
                <strong>Telefon:</strong> +40 785 277 566<br />
                <strong>Adresă:</strong> Str. Topolnita nr. 5, bucurești, România
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
