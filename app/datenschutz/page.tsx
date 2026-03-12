export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-10">Datenschutzerklärung</h1>

        <p className="text-zinc-400 mb-10">
          Diese Website verarbeitet personenbezogene Daten nur im technisch notwendigen Umfang.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Verantwortlicher</h2>
        <p className="text-zinc-300 leading-relaxed">
          Wolfgang Tietz
          <br />
          Ina-Seidel-Bogen 75
          <br />
          81929 München
          <br />
          Deutschland
        </p>
        <p className="text-zinc-300 leading-relaxed mt-4">
          E-Mail: wolfgang@wolfgangtietz.com
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Hosting</h2>
        <p className="text-zinc-300 leading-relaxed">
          Diese Website wird über Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet.
          Beim Aufruf der Website werden technisch notwendige Server-Logfiles verarbeitet, insbesondere
          IP-Adresse, Datum und Uhrzeit der Anfrage, Browserinformationen und aufgerufene Seiten.
          Die Verarbeitung erfolgt zum Zweck der sicheren und stabilen Bereitstellung der Website auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Terminbuchung</h2>
        <p className="text-zinc-300 leading-relaxed">
          Für die Terminvereinbarung wird der Dienst Meetergo eingesetzt. Wenn Sie einen Termin buchen,
          werden die von Ihnen eingegebenen Daten, insbesondere Name, E-Mail-Adresse und Termindaten,
          zur Organisation und Durchführung des Termins verarbeitet.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Kontaktaufnahme</h2>
        <p className="text-zinc-300 leading-relaxed">
          Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage sowie
          für mögliche Anschlussfragen gespeichert. Die Verarbeitung erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf den Abschluss oder die Durchführung eines
          Vertrags gerichtet ist, im Übrigen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Ihre Rechte</h2>
        <p className="text-zinc-300 leading-relaxed">
          Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten sowie auf
          Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit im Rahmen
          der gesetzlichen Vorgaben.
        </p>
        <p className="text-zinc-300 leading-relaxed mt-4">
          Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde über die
          Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        </p>
      </section>
    </main>
  );
}