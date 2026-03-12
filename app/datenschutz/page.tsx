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
Diese Website wird über den Hosting-Dienst Vercel betrieben.

Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.

Beim Aufruf dieser Website werden technisch notwendige Server-Logfiles
verarbeitet (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage,
Browserinformationen). Diese Daten werden verarbeitet, um die Stabilität
und Sicherheit der Website zu gewährleisten.

Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
(berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website).
Daten können auf Servern innerhalb der EU und der USA verarbeitet werden.
Weitere Informationen zur Datenverarbeitung durch Vercel:
https://vercel.com/legal/privacy-policy
</p>

        <h2 className="text-xl font-light mt-10 mb-4">Terminbuchung</h2>
        <p className="text-zinc-300 leading-relaxed">
Für die Terminvereinbarung wird der Dienst Meetergo verwendet. Anbieter ist
Meetergo GmbH, Hansaring 61, 50670 Köln, Deutschland.

Wenn Sie einen Termin buchen, werden die von Ihnen eingegebenen Daten
(insbesondere Name, E-Mail-Adresse und Terminangaben) zur Organisation und
Durchführung des Termins verarbeitet.

Beim Aufruf der Terminbuchungsfunktion werden technisch notwendige Daten
an Meetergo übertragen. Weitere Informationen zur Datenverarbeitung finden
Sie in der Datenschutzerklärung des Anbieters:
https://meetergo.com/datenschutz
</p>

        <h2 className="text-xl font-light mt-10 mb-4">Kontaktaufnahme</h2>
        <p className="text-zinc-300 leading-relaxed">
          Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage sowie
          für mögliche Anschlussfragen gespeichert. Die Verarbeitung erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf den Abschluss oder die Durchführung eines
          Vertrags gerichtet ist, im Übrigen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
<h2 className="text-xl font-light mt-10 mb-4">SSL-Verschlüsselung</h2>
<p className="text-zinc-300 leading-relaxed">
Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
"http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer
Browserzeile.
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