import { type Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung | ERGO Advisor Berlin" };

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-3xl prose prose-slate prose-headings:text-navy prose-h1:text-4xl prose-h1:font-black prose-p:text-slate-600 prose-a:text-teal hover:prose-a:text-navy">
      <h1>Datenschutzerklärung</h1>
      
      <h3>1. Datenschutz auf einen Blick</h3>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
      
      <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
      <p><strong>Verantwortlicher gemäß Art. 4 Abs. 7 DSGVO:</strong><br/>
      Mourad Labadi<br/>Musterstraße 123<br/>10115 Berlin</p>

      <h3>3. Datenerfassung auf dieser Website</h3>
      <h4>Kontaktformular & Terminbuchung (Cal.com)</h4>
      <p>Wenn Sie uns per Kontaktformular oder Cal.com-Integration Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt.</p>
      
      <h4>Cookies & Analysedienste</h4>
      <p>Unsere Internetseiten verwenden teilweise sogenannte Cookies. Diese richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen (Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. Art. 6 Abs. 1 lit. a DSGVO bei erteilter Einwilligung über unseren Consent-Banner).</p>

      <h3>4. Ihre Rechte als betroffene Person</h3>
      <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Dauer und Zweck der Verarbeitung, Herkunft und Empfänger Ihrer gespeicherten personenbezogenen Daten. Weiterhin steht Ihnen ein Recht auf Berichtigung, Einschränkung oder Löschung dieser Daten zu (Art. 15-18 DSGVO). Möchten Sie Ihre Rechte geltend machen, kontaktieren Sie uns formlos über die im Impressum hinterlegten Angaben.</p>
    </div>
  );
}
