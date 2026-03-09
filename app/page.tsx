import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import BookingSection from "@/components/BookingSection";

const caseStudies = [
 {
  title: "Führung unter widersprüchlichen Erwartungen",
  content:
    "Ein Bereichsleiter in einem internationalen Industriekonzern stand zwischen Vorstandserwartungen, Transformation des Geschäftsmodells und zunehmender politischer Spannung zwischen Funktionen. Im Coaching ging es nicht um Methoden, sondern um Rollenklarheit: Wo endet operative Verantwortung, wo beginnt Systemdynamik? Durch diese Klärung konnte der Klient Entscheidungen konsequenter vertreten und seine Organisation stabil durch eine Phase hoher Unsicherheit führen.",
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
        <section className="flex flex-col px-6 max-w-5xl mx-auto py-20">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight text-zinc-100">
  Führung, wenn sich das System verändert.
</h1>

<p className="text-xl md:text-2xl text-zinc-400 font-light mb-6 max-w-2xl">
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

        </section>

        {/* Results Section */}
        <section className="py-20 px-6 bg-zinc-950/50">
          <div className="max-w-5xl mx-auto">
   <div className="grid md:grid-cols-3 gap-16">
  <div>
    <span className="block text-zinc-500 mb-4 text-sm tracking-widest uppercase">
      01
    </span>
    <h3 className="text-2xl font-light mb-2 text-zinc-100">erantwortung</h3>
    <p className="text-zinc-500 font-light">
      Sie tragen weiter Ergebnisverantwortung, obwohl sich Strukturen,
      Entscheidungswege und Zuständigkeiten verschieben.
    </p>
  </div>
  <div>
    <span className="block text-zinc-600 mb-4 text-sm tracking-widest uppercase">
      02
    </span>
    <h3 className="text-2xl font-light mb-2 text-zinc-100">Rollenklarheit</h3>
    <p className="text-zinc-500 font-light">
      Führung wird anspruchsvoller, wenn klassische Hierarchie an Wirkung
      verliert und Erwartungen gleichzeitig steigen.
    </p>
  </div>
  <div>
    <span className="block text-zinc-600 mb-4 text-sm tracking-widest uppercase">
      03
    </span>
    <h3 className="text-2xl font-light mb-2 text-zinc-100">Wirksamkeit</h3>
    <p className="text-zinc-500 font-light">
      Entscheidend ist nicht mehr nur Erfahrung, sondern die Fähigkeit,
      unter struktureller Unsicherheit handlungsfähig zu bleiben.
    </p>
  </div>
  </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <div>
            <div className="mb-16">
              <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-8">
                Autorität
              </h2>
              <p className="text-xl font-light text-zinc-300">
                ICF PCC · EMCC Senior Practitioner
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-light leading-relaxed text-zinc-200">
  Ich begleite Führungskräfte, die in komplexen Organisationen unter
  veränderten strukturellen Bedingungen wirksam bleiben müssen. Meine
  Arbeit verbindet Führungserfahrung im Konzern, Transformationserfahrung
  aus agilen und hybriden Systemen sowie professionelles Executive
  Coaching. Im Mittelpunkt stehen Rollenklarheit, politische
  Navigationsfähigkeit und wirksame Führung, wenn klassische Hierarchie an
  Eindeutigkeit verliert.
</p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-light mb-16 text-center text-zinc-100">
  Typische Führungssituationen
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