import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coachingtermin buchen – Wolfgang Tietz",
  description: "Terminbuchung für ein Coachinggespräch mit Executive Coach Wolfgang Tietz.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    type: "website",
    url: "https://wolfgangtietz.com/session",
    title: "Wolfgang Tietz – Executive Coaching",
    description: "Terminbuchung für ein Coachinggespräch mit Executive Coach Wolfgang Tietz.",
    images: [
      {
        url: "https://wolfgangtietz.com/og/session.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolfgang Tietz – Executive Coaching",
    description: "Terminbuchung für ein Coachinggespräch mit Executive Coach Wolfgang Tietz.",
    images: ["https://wolfgangtietz.com/og/session.jpg"],
  },
};

export default function SessionPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-12">
      <section className="max-w-3xl mx-auto text-center">

        <Link
          href="/"
          className="text-zinc-500 text-sm underline underline-offset-4 hover:text-zinc-300 transition-colors"
        >
          Zur Website
        </Link>

        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
          Nächsten Coachingtermin vereinbaren
        </h1>

        <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto mb-16">
          Diese Seite richtet sich an bestehende Klienten. Hier können Sie direkt
          den nächsten Coachingtermin vereinbaren.
        </p>

      </section>

      <section className="max-w-4xl mx-auto pt-12">
        <iframe
          src="https://cal.meetergo.com/wolfgangtietz/coachingtermin"
          style={{ width: "100%", height: "1000px", border: "none" }}
          title="Terminbuchung Coaching"
        />
      </section>

    </main>
  );
}