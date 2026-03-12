export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-10">Datenschutzerklärung</h1>

        <p className="text-zinc-400 mb-6">
          Diese Website verarbeitet personenbezogene Daten nur im technisch notwendigen Umfang.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Hosting</h2>
        <p className="text-zinc-300 leading-relaxed">
          Diese Website wird über Vercel gehostet. Beim Aufruf der Website werden technisch notwendige
          Server-Logfiles verarbeitet (z.B. IP-Adresse, Zeitpunkt der Anfrage, Browserinformationen),
          um die Stabilität und Sicherheit der Website zu gewährleisten.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Terminbuchung</h2>
        <p className="text-zinc-300 leading-relaxed">
          Für die Terminvereinbarung wird der Dienst Meetergo genutzt. Wenn Sie einen Termin buchen,
          werden die von Ihnen eingegebenen Daten zur Organisation des Termins verarbeitet.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Kontakt</h2>
        <p className="text-zinc-300 leading-relaxed">
          Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage
          und für mögliche Anschlussfragen gespeichert.
        </p>

        <h2 className="text-xl font-light mt-10 mb-4">Ihre Rechte</h2>
        <p className="text-zinc-300 leading-relaxed">
          Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten sowie auf
          Berichtigung oder Löschung dieser Daten im Rahmen der geltenden gesetzlichen Bestimmungen.
        </p>
      </section>
    </main>
  );
}