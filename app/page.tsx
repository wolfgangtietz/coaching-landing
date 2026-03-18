import Accordion from "@/components/Accordion";
import BookingSection from "@/components/BookingSection";
import Link from "next/link";

const caseStudies = [
  {
    title: "Wenn jede Entscheidung eine Erwartung verletzt",
    content: `Situation
Ein Bereichsleiter eines internationalen Industriekonzerns stand zwischen Erwartungen des Vorstands, Anforderungen aus den Regionen und Interessen zentraler Funktionen.

Die Situation war sachlich analysiert und verschiedene Optionen lagen auf dem Tisch. Trotzdem wurde die Entscheidung immer wieder verschoben.

Dynamik
Im Gespräch wurde sichtbar, dass neben den organisatorischen Erwartungen auch persönliche Verantwortungsmaßstäbe des Klienten eine Rolle spielten.

Bestimmte Optionen waren rational möglich, fühlten sich jedoch schwer vertretbar an.

Ergebnis
Die Situation wurde klarer, wodurch eine Entscheidung möglich wurde, die zuvor immer wieder vermieden worden war.`,
  },
  {
    title: "Eine Entscheidung, die immer wieder verschoben wird",
    content: `Situation
Nach einer größeren organisatorischen Veränderung stand ein Führungsteam vor einer strategischen Richtungsentscheidung.

Sachlich waren mehrere Optionen möglich. Gleichzeitig vertraten unterschiedliche Teile der Organisation Erwartungen, die nicht vollständig miteinander vereinbar waren.

Dynamik
Im Gespräch wurde sichtbar, welche Erwartungen tatsächlich entscheidungsrelevant waren und welche eher Ausdruck organisatorischer Dynamik waren.

Ergebnis
Die Entscheidungssituation wurde klarer, sodass die nächsten Schritte im Führungskreis vorbereitet und vertreten werden konnten.`,
  },
  {
    title: "Wenn zu viele Entscheidungen beim Geschäftsführer landen",
    content: `Situation
Ein Geschäftsführer eines mittelständischen Unternehmens stand zwischen steigenden Markterwartungen, internen Führungsanforderungen und der eigenen Verantwortung für zentrale Entscheidungen.

Viele Themen liefen weiterhin über seinen Schreibtisch, obwohl klar war, dass diese Struktur langfristig nicht tragfähig war.

Dynamik
Im Gespräch wurde sichtbar, welche Entscheidungen tatsächlich delegierbar waren und wo persönliche Verantwortungsmaßstäbe eine Rolle spielten.

Ergebnis
Die Situation wurde klarer, wodurch konkrete Entscheidungen über Prioritäten, Delegation und eigene Rolle möglich wurden.`,
  },
  {
    title: "Transformation beschleunigen – ohne das Geschäft zu destabilisieren",
    content: `Situation
Ein Programmleiter verantwortete eine größere Transformation, während das operative Geschäft gleichzeitig stabil weiterlaufen musste.

Die Erwartungen aus unterschiedlichen Teilen der Organisation waren nachvollziehbar, aber nicht vollständig vereinbar.

Dynamik
Im Gespräch wurde sichtbar, welche Konsequenzen einzelne Optionen tatsächlich hatten und welche Erwartungen dabei eine Rolle spielten.

Ergebnis
Die Situation wurde klarer, sodass Prioritäten gesetzt und Entscheidungen getroffen werden konnten, die zuvor immer wieder aufgeschoben worden waren.`,
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
              <section className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto py-40 md:py-52">
                        <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-16 leading-[1.15] text-zinc-100 max-w-4xl">
  Die schwierigsten Entscheidungen entstehen,
wenn Erwartungen sich widersprechen.
</h1>

<p className="text-zinc-500 text-sm font-light max-w-xl mx-auto mb-10">
  Executive Coaching für Verantwortungsträger in komplexen Organisationen.
</p>
<div className="flex flex-col items-center gap-6">
  <Link
  href="/session"
  className="bg-zinc-100 text-black px-12 py-3 rounded-sm text-base font-medium hover:bg-white hover:-translate-y-[1px] transition-all"
>
  Erstgespräch vereinbaren
</Link>
   </div>

        </section>
        <div className="max-w-4xl mx-auto border-t border-zinc-700 mt-32"></div>

        {/* Results Section */}
        <section className="pt-32 pb-40 px-6 bg-zinc-950/50">
          <div className="max-w-5xl mx-auto">

<h2 className="text-4xl font-light text-center mb-12 text-zinc-100">
In komplexen Organisationen widersprechen sich Erwartungen häufig
</h2>

<p className="text-center text-zinc-400 font-light mb-20 max-w-2xl mx-auto">
Viele schwierige Entscheidungen entstehen nicht aus mangelnder Information,
sondern aus widersprüchlichen Erwartungen zwischen unterschiedlichen Teilen der Organisation.
</p>

<div className="grid md:grid-cols-3 gap-24">
  <div className="space-y-4">
    <span className="block text-zinc-500 mb-8 text-lg tracking-widest font-light">
      01
    </span>
    <h3 className="text-2xl font-light mb-4 text-zinc-100">Widersprüchliche Erwartungen</h3>
    <p className="text-zinc-400 font-light leading-relaxed">
      Sie tragen weiter Ergebnisverantwortung, obwohl sich Strukturen,
      Entscheidungswege und Zuständigkeiten verschieben.
    </p>
  </div>
  <div className="space-y-4">
  <span className="block text-zinc-500 mb-8 text-lg tracking-widest font-light">
    02
  </span>
  <h3 className="text-2xl font-light mb-4 text-zinc-100">Unklare Rolle</h3>
  <p className="text-zinc-400 font-light leading-relaxed">
    Entscheidungen werden schwieriger, wenn Erwartungen an die eigene Rolle
    nicht deckungsgleich sind.
  </p>
</div>
  <div className="space-y-4">
    <span className="block text-zinc-500 mb-8 text-lg tracking-widest font-light">
      03
    </span>
    <h3 className="text-2xl font-light mb-4 text-zinc-100">Organisation im Wandel</h3>
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
  Typische Situationen meiner Klienten
</h2>

<ul className="space-y-8 text-zinc-300 text-lg font-light leading-relaxed">

  <li>
    Sie tragen Verantwortung für eine Entscheidung, bei der unterschiedliche Teile der Organisation gegensätzliche Erwartungen haben.
  </li>

  <li>
    Eine Situation ist sachlich analysiert, trotzdem wird die Entscheidung immer wieder verschoben.
  </li>

  <li>
    Eine Option erscheint rational sinnvoll, fühlt sich jedoch schwer vertretbar an.
  </li>

  <li>
    Gespräche innerhalb der Organisation bringen neue Argumente – aber keine größere Klarheit.
  </li>

  <li>
    Die Entscheidung betrifft nicht nur organisatorische Erwartungen, sondern auch persönliche Verantwortungsmaßstäbe.
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
  Ich arbeite mit Verantwortungsträgern in komplexen Organisationen.
  Viele meiner Klienten tragen Verantwortung in internationalen Unternehmen
  – etwa als globale Funktionsleiter, Bereichsleiter oder
  Programmverantwortliche in großen Transformationsvorhaben.

  Sie stehen regelmäßig vor Situationen, in denen Erwartungen aus
  unterschiedlichen Teilen der Organisation aufeinandertreffen.
</p>
<p className="text-xl font-light leading-relaxed text-zinc-300 max-w-2xl">
  Viele meiner Klienten kennen ihre Organisation sehr genau. Ihre Situation
  ist oft bereits umfassend analysiert und verschiedene Optionen sind
  durchdacht.

  Im Coaching geht es deshalb nicht darum, Lösungen vorzugeben.
  Sondern darum, Situationen so klar zu betrachten, dass neue
  Handlungsmöglichkeiten sichtbar werden und Entscheidungen möglich werden,
  die zuvor vermieden wurden.
</p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="perspektiven" className="py-28 px-6 border-t border-zinc-900">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-light mb-16 text-zinc-100">
  Entscheidungen in komplexen Organisationen
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
  Situationen aus meiner Coachingpraxis
</h2>
            <Accordion items={caseStudies} />
          </div>
        </section>

        {/* Booking */}
        <section className="py-24 px-6 text-center border-t border-zinc-900">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl font-light mb-8 text-zinc-100">
  Ein erstes Gespräch über Ihre aktuelle Situation
</h2>

<>
  <p className="text-zinc-400 font-light mb-8">
    Viele meiner Klienten kommen mit einer Entscheidungssituation,
    die sie bereits lange analysiert haben – und trotzdem nicht
    abschließend klären konnten.
  </p>

  <p className="text-zinc-400 font-light mb-12">
    Im Gespräch betrachten wir gemeinsam,
    worum es in Ihrer Situation tatsächlich geht.
  </p>
</>
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
      Termin für Klienten
    </Link>

  </div>
</footer>
      </main>
    </>
  );
}