import { type Metadata } from "next";

export const metadata: Metadata = { title: "Impressum | ERGO Advisor Berlin" };

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-3xl prose prose-slate prose-headings:text-navy prose-h1:text-5xl prose-h1:font-black prose-p:text-slate-600">
      <h1>Impressum</h1>
      
      <h3>Angaben gemäß § 5 TMG</h3>
      <p>
        <strong>Mourad Labadi</strong><br/>
        Unabhängiger ERGO Versicherungsberater<br/>
        Musterstraße 123<br/>
        10115 Berlin<br/>
        Deutschland
      </p>

      <h3>Kontakt</h3>
      <p>
        Telefon: +49 (0) 123 456 789<br/>
        E-Mail: mourad.labadi@ergo.de
      </p>

      <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
      <p>
        Berufsbezeichnung: Versicherungsvermittler mit Erlaubnis nach § 34d Abs. 1 GewO<br/>
        Zuständige Kammer und Aufsichtsbehörde: IHK Berlin, Fasanenstraße 85, 10623 Berlin<br/>
        Vermittlerregister-Nr.: D-XXXXXXXX (wird nachgereicht)
      </p>

      <h3>EU-Streitschlichtung</h3>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br/>
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-navy font-bold">https://ec.europa.eu/consumers/odr/</a>.<br/>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  );
}
