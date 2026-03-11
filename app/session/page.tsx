export default function SessionPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-24">
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-8">
          Wolfgang Tietz
        </p>

        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
          Coaching-Termin buchen
        </h1>
<a
  href="/"
  className="text-zinc-500 text-sm underline underline-offset-4 hover:text-zinc-300 transition-colors"
>
  Zurück zur Hauptseite
</a>
        <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto mb-16">
          Diese Seite ist für bestehende Klienten. Hier können Sie direkt einen
Termin für unsere nächste Coaching-Session buchen.
        </p>
      </section>

      <section className="max-w-4xl mx-auto border-t border-zinc-900 pt-12">
        <iframe
          src="https://cal.meetergo.com/wolfgangtietz/60-min-coaching-mit-wolfgang"
          style={{ width: "100%", height: "760px", border: "none" }}
          title="Coaching Session Booking"
        />
      </section>
    </main>
  );
}