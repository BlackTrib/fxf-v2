import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate GDPR | FXF Web Hosting',
  description: 'Politica de confidențialitate și protecția datelor personale la FXF Web Hosting. Conformitate GDPR completă. Transparență totală privind colectarea și prelucrarea datelor.',
  alternates: {
    canonical: 'https://fxfweb.ro/confidentialitate',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConfidentialitaterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-5 py-24">
          <h1 className="font-display text-4xl font-bold text-primary mb-2">Politica de Confidențialitate</h1>
          <p className="text-muted-foreground text-sm mb-12">Ultima actualizare: aprilie 2026 | Conformă cu GDPR (Regulamentul UE 2016/679)</p>

          <div className="prose prose-lg max-w-none space-y-10 text-foreground">

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">1. Operator de date</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>FXF Web Hosting SRL</strong>, cu sediul în Str. Topolnita nr. 5, București, România,
                este operatorul datelor cu caracter personal colectate prin intermediul site-ului fxfweb.ro.
                Ne puteți contacta la <strong>support@fxfweb.ro</strong> sau <strong>+40 785 277 566</strong> pentru orice
                solicitare legată de datele dumneavoastră personale.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">2. Date colectate</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Colectăm doar datele necesare pentru furnizarea serviciilor de hosting:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Date de identificare:</strong> nume, prenume, denumire companie, CIF/CNP</li>
                <li><strong>Date de contact:</strong> adresă de email, număr de telefon</li>
                <li><strong>Date de facturare:</strong> adresă, detalii de plată (fără date card bancar pline)</li>
                <li><strong>Date de navigare:</strong> adresă IP, tip browser, pagini vizitate (prin cookies)</li>
                <li><strong>Date de hosting:</strong> domenii, conținut site, logs server (doar pentru administrație)</li>
                <li><strong>Comunicări:</strong> mesajele trimise prin formularul de contact sau email-ul de suport</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">3. Scopul prelucrării datelor</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Datele sunt prelucrate exclusiv în scopuri legitime:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Furnizarea serviciilor de hosting și administrare domenii contractate</li>
                <li>Emiterea facturilor și respectarea obligațiilor fiscale și legale</li>
                <li>Suport tehnic și rezolvare probleme legate de hosting</li>
                <li>Backup-uri și protecția datelor (securitate server)</li>
                <li>Comunicare privind servicii, întreruperi planificate și actualizări</li>
                <li>Trimiterea de informații despre noi pachete (doar cu consimțământ explicit)</li>
                <li>Analitică și îmbunătățirea serviciilor (Google Analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">4. Temeiul juridic</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prelucrarea datelor se bazează pe: <strong>(a)</strong> executarea unui contract la care persoana vizată este parte (serviciile de hosting),
                <strong> (b)</strong> consimțământul explicit acordat (newslettere), <strong>(c)</strong> obligații legale (legislație fiscală și de protecție a datelor) sau 
                <strong> (d)</strong> interesul legitim al operatorului (securitate), conform art. 6 din GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">5. Durata stocării datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Datele sunt stocate doar atât timp cât este necesar: datele clienților activi — pe durata relației contractuale și 5 ani conform legislației fiscale;
                datele din formularul de contact — maxim 2 ani; datele de navigare (cookies) — maxim 12 luni; backup-urile server — 7 zile pentru recuperare în caz de nevoie.
                După expirare, datele sunt șterse sigur.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">6. Drepturile dumneavoastră</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Dreptul de acces</strong> — să solicitați o copie a datelor prelucrate</li>
                <li><strong>Dreptul la rectificare</strong> — corectarea datelor inexacte (nume, adresă, etc.)</li>
                <li><strong>Dreptul la ștergere</strong> — ștergerea datelor după expirare serviciu (&quot;dreptul de a fi uitat&quot;)</li>
                <li><strong>Dreptul la restricționare</strong> — limitarea prelucrării în anumite condiții</li>
                <li><strong>Dreptul la portabilitate</strong> — primirea datelor într-un format structurat</li>
                <li><strong>Dreptul la opoziție</strong> — opoziția față de procesarea pentru marketing</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Pentru exercitarea acestor drepturi, ne contactați la <strong>support@fxfweb.ro</strong>. Răspundem în termen de 30 de zile conform GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">7. Cookies și analitică</h2>
              <p className="text-muted-foreground leading-relaxed">
                Site-ul nostru utilizează cookies esențiale pentru funcționare (sesiuni cPanel, coș de cumpărături) și cookies analitice 
                (Google Analytics) pentru înțelegerea comportamentului vizitatorilor. La prima vizită, veți fi solicitat să vă exprimați acordul.
                Puteți gestiona preferințele cookies din setările browser-ului sau din banner-ul de consimțământ. Cookies-urile de tracking
                se dezactivează dacă refuzați.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">8. Securitatea datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementăm măsuri tehnice și organizatorice pentru protejarea datelor: conexiuni SSL/HTTPS, acces restricționat la baze de date,
                firewall, backup-uri periodice de 7 zile, criptare și politici interne de securitate. Serverele sunt localizate în datacenter-ul 
                Tier III din Germania cu standarde înalte de securitate fizică. În eventualitatea unei breșe de securitate, vom notifica autoritățile 
                competente și persoanele afectate conform GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">9. Transferuri internaționale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Datele dumneavoastră nu sunt transferate în afara Spațiului Economic European. Serverele sunt în Germania (UE).
                În cazul utilizării unor servicii terțe (Google Analytics), acestea operează în conformitate cu GDPR și Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">10. Subcontractanți</h2>
              <p className="text-muted-foreground leading-relaxed">
                FXF folosește sub-procesatori (subcontractanți) pentru: servicii de email, procesare plăți și analitică. Toți subcontractanții 
                sunt legați prin acte juridice care garantează conformitate GDPR. Lista completă este disponibilă la cerere.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">11. Reclamații și resolver</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dacă considerați că datele dumneavoastră sunt prelucrate ilegal, aveți dreptul să depuneți o plângere la
                <strong> Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>,
                cu sediul în B-dul G-ral. Gheorghe Magheru nr. 28-30, București, sau online pe <strong>www.dataprotection.ro</strong>.
                Puteți de asemenea contacta FXF direct la <strong>support@fxfweb.ro</strong> pentru a discuta problema înainte de a depune plângere.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
