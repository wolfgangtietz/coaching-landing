import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import BookingSection from "@/components/BookingSection";

const caseStudies = [
  {
    title: "Transformation der Führungskultur",
    content:
      "In einem mittelständischen Technologieunternehmen begleitete ich den CEO während eines radikalen Marktumschwungs. Durch die gezielte Arbeit an der eigenen Identität jenseits von Quartalszahlen gelang es, eine Kultur der psychologischen Sicherheit zu etablieren. Dies führte zu einer signifikanten Reduktion der Fluktuation im Management und einer beschleunigten Innovationsrate, da Führungskräfte lernten, Verantwortung neu zu definieren und Raum für operative Exzellenz zu schaffen.",
  },
  {
    title: "Post-Merger Integration",
    content:
      "Nach der Fusion zweier Finanzdienstleister unterstützte ich die Integrationsphase auf Vorstandsebene. Der Fokus lag auf der Auflösung von Rollenkonflikten und der Neuausrichtung des gemeinsamen Wertekompasses. Innerhalb von sechs Monaten konnte die Reibung zwischen den Abteilungen halbiert werden. Die Führungsebene fand zu einer geschlossenen Kommunikation zurück, die auf Authentizität statt auf politischem Kalkül basierte.",
  },
  {
    title: "Nachfolge im Familienunternehmen",
    content:
      "Die Übergabe der Geschäftsführung an die nächste Generation erforderte mehr als nur rechtliche Verträge. Wir arbeiteten an der emotionalen Neuausrichtung des Seniors und der Rollenklärung des Juniors. Durch diesen tiefgreifenden Prozess wurde die Identität des Unternehmens gewahrt, während gleichzeitig Platz für moderne Führungsstrukturen geschaffen wurde. Die operative Stabilität blieb während des gesamten Übergangs von zwei Jahren vollumfänglich erhalten.",
  },
  {
    title: "Executive Burnout Prävention",
    content:
      "Ein High-Performance-Manager in der Automobilbranche stand kurz vor dem Point-of-no-Return. Durch eine bewusste Dekonstruktion der Leistungsidentität und eine Neuausrichtung der persönlichen Prioritäten wurde nicht nur die Gesundheit gesichert, sondern auch die Führungseffektivität gesteigert. Der Klient entwickelte eine Form der 'ruhigen Autorität', die seine Abteilung souveräner durch Krisenzeiten steuerte als der zuvor praktizierte Hyper-Aktivismus.",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wolfgang Tietz – Executive & Life Coaching",
  url: "https://wolfgangtietz.com",
  inLanguage: "de-DE",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wolfgang Tietz",
  url: "https://wolfgangtietz.com",
  jobTitle: "Executive Coach",
};

export default function Home() {
  return (
    <>
            <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center px-6 max-w-5xl mx-auto py-24">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
  Führung, wenn sich das System verändert.
</h1>

<p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl">
  Executive Coaching für Führungskräfte, deren Verantwortung bleibt,
  während sich Struktur, Machtarchitektur und Erwartungen verschieben.
</p>

<div className="flex flex-col items-start gap-4">
  <a
    href="#booking"
    className="bg-zinc-100 text-black px-10 py-4 rounded-none text-lg font-medium hover:bg-white transition-all"
  >
    Erstgespräch vereinbaren
  </a>

  <p className="text-zinc-600 text-sm font-light">
    30 Minuten. Vertraulich. Klarer Blick auf Situation und Rolle.
  </p>
</div>
          </Reveal>
        </section>

        {/* Results Section */}
        <section className="py-32 px-6 bg-zinc-950/50">
          <div className="max-w-5xl mx-auto space-y-24">
            <Reveal delay={200}>
   <div className="grid md:grid-cols-3 gap-16">
  <div>
    <span className="block text-zinc-600 mb-4 text-sm tracking-widest uppercase">
      01
    </span>
    <h3 className="text-2xl font-light mb-2">Verantwortung</h3>
    <p className="text-zinc-500 font-light">
      Sie tragen weiter Ergebnisverantwortung, obwohl sich Strukturen,
      Entscheidungswege und Zuständigkeiten verschieben.
    </p>
  </div>
  <div>
    <span className="block text-zinc-600 mb-4 text-sm tracking-widest uppercase">
      02
    </span>
    <h3 className="text-2xl font-light mb-2">Rollenklarheit</h3>
    <p className="text-zinc-500 font-light">
      Führung wird anspruchsvoller, wenn klassische Hierarchie an Wirkung
      verliert und Erwartungen gleichzeitig steigen.
    </p>
  </div>
  <div>
    <span className="block text-zinc-600 mb-4 text-sm tracking-widest uppercase">
      03
    </span>
    <h3 className="text-2xl font-light mb-2">Wirksamkeit</h3>
    <p className="text-zinc-500 font-light">
      Entscheidend ist nicht mehr nur Erfahrung, sondern die Fähigkeit,
      unter struktureller Unsicherheit handlungsfähig zu bleiben.
    </p>
  </div>
</div>
           
            </Reveal>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-32 px-6 max-w-3xl mx-auto">
          <Reveal delay={300}>
            <div className="mb-16">
              <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-8">
                Autorität
              </h2>
              <p className="text-xl font-light text-zinc-300">
                ICF PCC · EMCC Senior Practitioner
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-light leading-relaxed">
                Seit über fünfzehn Jahren begleite ich Führungskräfte in Phasen
                der Transformation. Mein Ansatz verbindet systemische Tiefe mit
                radikaler Sachlichkeit. Ich arbeite ausschließlich mit Klienten,
                die bereit sind, ihre Rolle als Mittel, nicht als Ziel zu
                begreifen.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Case Studies */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-light mb-16 text-center">
              Case Studies
            </h2>
            <Accordion items={caseStudies} />
          </div>
        </section>

        {/* Booking */}
        <BookingSection />
      </main>
    </>
  );
}