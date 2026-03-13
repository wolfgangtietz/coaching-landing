import Accordion from "@/components/Accordion";
import BookingSection from "@/components/BookingSection";
import Link from "next/link";

const caseStudies = [
  {
    title: "Bereichsleiter zwischen Vorstand, Transformation und interner Politik",
    content: `Situation: Ein Bereichsleiter eines internationalen Industriekonzerns geriet zwischen Vorstandserwartungen, Transformation des Geschäftsmodells und zunehmender politischer Spannung zwischen Funktionen.

Problem: Die Erwartungen aus verschiedenen Richtungen waren widersprüchlich, während gleichzeitig operative Verantwortung bestehen blieb.

Ergebnis: Durch präzise Klärung von Rolle, Macht und Handlungsspielraum konnte der Klient Entscheidungen konsequenter vertreten und seine Organisation stabil durch eine Phase hoher Unsicherheit führen.`,
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
    title: "Führung unter extremer Belastung",
    content:
      "Ein High-Performance-Manager in der Automobilbranche stand kurz vor dem Point-of-no-Return. Durch eine bewusste Dekonstruktion der Leistungsidentität und eine Neuausrichtung der persönlichen Prioritäten wurde nicht nur die Gesundheit gesichert, sondern auch die Führungseffektivität gesteigert. Der Klient entwickelte eine Form der 'ruhigen Autorität', die seine Abteilung souveräner durch Krisenzeiten steuerte als der zuvor praktizierte Hyper-Aktivismus.",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wolfgang Tietz – Executive Coaching",
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
  Führung, wenn Verantwortung bleibt, aber die Regeln sich verschieben.
</h1>

<p className="text-zinc-500 text-sm font-light max-w-xl mx-auto mb-10">
  Sie tragen Verantwortung in Organisationen, deren formale Struktur klar ist – deren tatsächliche Entscheidungslogik jedoch nicht.
</p>

<p className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-12">
  Rollenwechsel · Transformation · organisationale Machtstrukturen
</p>

<div className="flex flex-col items-center gap-6">
  <a
    href="#booking"
    className="bg-zinc-100 text-black px-12 py-3 rounded-sm text-base font-medium hover:bg-white hover:-translate-y-[1px] transition-all"
  >
    Erstgespräch vereinbaren
  </a>
  <a
    href="#perspektiven"
    className="text-zinc-400 text-sm font-light underline underline-offset-4 hover:text-zinc-200 transition-colors"
  >
    Wie ich Führung in komplexen Organisationen sehe
  </a>
  <p className="text-zinc-400 text-sm font-light">
  30 Minuten. Vertraulich. Kein Verkaufsgespräch.
</p>
</div>
<p className="text-xs text-zinc-400 mt-8">
  Executive Coach · 20+ Jahre Erfahrung in internationalen Konzernen und Transformationen
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
    Sie bewegen sich zwischen widersprüchlichen Erwartungen von Vorstand, Peers und Organisation.
  </li>
  
  <li>
    Sie übernehmen eine neue Führungsrolle – und stellen fest, dass die alten Muster nicht mehr funktionieren.
  </li>

  <li>
    Transformation verändert Strukturen, aber Verantwortung und Erwartungen bleiben bei Ihnen.
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
                Kontext
              </h2>
              <p className="text-xl font-light text-zinc-400">
                Executive Coach · 20+ Jahre Erfahrung in internationalen Organisationen
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
        <section id="perspektiven" className="py-28 px-6 border-t border-zinc-900">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-light mb-16 text-zinc-100">
  Drei Beobachtungen zu Führung in komplexen Organisationen
</h2>

    <div className="space-y-10 text-zinc-300 text-lg font-light leading-relaxed">
  <p>
    Führung scheitert in komplexen Organisationen selten an Kompetenz,
    sondern an ungeklärter Rolle, verdeckter Macht und widersprüchlichen
    Erwartungen. Wer nur auf persönliche Stärke setzt, unterschätzt die
    strukturelle Realität, in der Entscheidungen tatsächlich entstehen.
  </p>

  <p>
    Rollenwechsel auf Senior-Level sind meist keine fachliche, sondern eine
    politische und identitäre Verschiebung. Entscheidend ist nicht nur, was
    Sie können, sondern wofür Sie plötzlich stehen, woran Sie gemessen werden
    und welche Erwartungssysteme auf Sie zugreifen.
  </p>

  <p>
    Transformation verändert nicht nur Prozesse, sondern Macht, Einfluss und
    Verantwortungszonen. Genau deshalb reichen klassische Führungsrezepte in
    solchen Phasen oft nicht mehr aus. Führung wird zur Arbeit an
    Orientierung, Positionierung und wirksamer Entscheidung unter
    Unsicherheit.
  </p>
</div>
  </div>
</section>
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light mb-16 text-center text-zinc-100">
  Führungssituationen, mit denen Klienten zu mir kommen
</h2>
            <Accordion items={caseStudies} />
          </div>
        </section>

        {/* Booking */}
        <section className="py-24 px-6 text-center border-t border-zinc-900">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl font-light mb-8 text-zinc-100">
      Wenn Sie Ihre Situation vertraulich besprechen möchten
    </h2>

    <p className="text-zinc-400 font-light mb-12">
      In einem ersten Gespräch klären wir Ihre aktuelle Führungssituation
      und prüfen gemeinsam, ob ein Coaching sinnvoll ist.
    </p>
  </div>
</section>
        <BookingSection />
        <footer className="border-t border-zinc-900 mt-24 py-10 text-center">
  <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">

    <Link href="/impressum" className="hover:text-zinc-300 transition-colors">
      Impressum
    </Link>

    <Link href="/datenschutz" className="hover:text-zinc-300 transition-colors">
      Datenschutz
    </Link>

    <Link href="/session" className="hover:text-zinc-300 transition-colors">
      Für bestehende Klienten
    </Link>

  </div>
</footer>
      </main>
    </>
  );
}