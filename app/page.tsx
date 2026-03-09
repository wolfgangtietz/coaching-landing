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
              <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
/>
        {/* Hero Section */}
       <section className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto py-32 md:py-40">
            <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-8">
  Executive Coaching für Führung in komplexen Organisationen
</p>
            <h1 className="text-5xl md:text-8xl font-light tracking-wide mb-16 leading-[1.15] text-zinc-100 max-w-3xl">
  Führung, wenn Verantwortung bleibt,<br />
aber das System sich verändert.
</h1>

<p className="text-lg md:text-xl text-zinc-400 font-light mb-6 max-w-2xl">
  Klarheit über Rolle, Macht und Handlungsspielraum in komplexen Organisationen.
</p>

<p className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-12">
  Rollenwechsel · Transformation · politische Dynamik
</p>

<div className="flex flex-col items-center gap-6">
  <a
    href="#booking"
    className="bg-zinc-100 text-black px-12 py-3 rounded-sm text-base font-medium hover:bg-white hover:-translate-y-[1px] transition-all"
  >
    Erstgespräch vereinbaren
  </a>

  <p className="text-zinc-400 text-sm font-light">
  30 Minuten. Vertraulich. Kein Verkaufsgespräch.
</p>
</div>
<p className="text-xs text-zinc-500 mt-8">
  ICF PCC · EMCC Senior Practitioner
</p>
        </section>
        <div className="max-w-4xl mx-auto border-t border-zinc-800 mt-16"></div>

        {/* Results Section */}
        <section className="pt-24 pb-32 px-6 bg-zinc-950/50">
          <div className="max-w-5xl mx-auto">
   <div className="grid md:grid-cols-3 gap-20">
  <div className="space-y-4">
    <span className="block text-zinc-500 mb-8 text-lg tracking-widest font-light">
      01
    </span>
    <h3 className="text-2xl font-light mb-4 text-zinc-100">Verantwortung</h3>
    <p className="text-zinc-400 font-light leading-relaxed">
      Sie tragen weiter Ergebnisverantwortung, obwohl sich Strukturen,
      Entscheidungswege und Zuständigkeiten verschieben.
    </p>
  </div>
  <div className="space-y-4">
    <span className="block text-zinc-500 mb-8 text-lg tracking-widest font-light">
      02
    </span>
    <h3 className="text-2xl font-light mb-4 text-zinc-100">Rollenklarheit</h3>
    <p className="text-zinc-400 font-light leading-relaxed">
      Führung wird anspruchsvoller, wenn klassische Hierarchie an Wirkung
      verliert und Erwartungen gleichzeitig steigen.
    </p>
  </div>
  <div className="space-y-4">
    <span className="block text-zinc-500 mb-8 text-lg tracking-widest font-light">
      03
    </span>
    <h3 className="text-2xl font-light mb-4 text-zinc-100">Wirksamkeit</h3>
    <p className="text-zinc-400 font-light leading-relaxed">
      Entscheidend ist nicht mehr nur Erfahrung, sondern die Fähigkeit,
      unter struktureller Unsicherheit handlungsfähig zu bleiben.
    </p>
  </div>
  </div>
          </div>
        </section>
<section className="py-28 px-6">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-light mb-16 text-zinc-100">
      Typische Führungssituationen
    </h2>

    <ul className="space-y-8 text-zinc-300 text-lg font-light leading-relaxed">

  <li>
    Sie übernehmen eine neue Führungsrolle – und stellen fest, dass die alten Muster nicht mehr funktionieren.
  </li>

  <li>
    Transformation verändert Strukturen, aber Verantwortung und Erwartungen bleiben bei Ihnen.
  </li>

  <li>
    Sie bewegen sich zwischen widersprüchlichen Erwartungen von Vorstand, Peers und Organisation.
  </li>

  <li>
    Sie müssen Entscheidungen treffen, obwohl die Systemlogik der Organisation selbst unscharf geworden ist.
  </li>

</ul>
  </div>
</section>
        {/* Profile Section */}
        <section className="py-24 px-6 max-w-3xl mx-auto">
          <div>
            <div className="mb-12">
              <h2 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-12">
                Autorität
              </h2>
              <p className="text-xl font-light text-zinc-400">
                ICF PCC · EMCC Senior Practitioner
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed text-zinc-300 max-w-2xl">
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
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light mb-16 text-center text-zinc-100">
  Beispiele aus der Praxis
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