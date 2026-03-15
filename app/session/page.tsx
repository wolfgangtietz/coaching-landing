import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Coachingtermin buchen – Wolfgang Tietz",
  description: "Terminbuchung für ein Coachinggespräch mit Executive Coach Wolfgang Tietz.",
  openGraph: {
  type: "website",
  url: "https://wolfgangtietz.com/session",
  title: "Wolfgang Tietz – Executive Coaching",
  description: "Terminbuchung für ein Coachinggespräch mit Executive Coach Wolfgang Tietz.",
  images: [
    {
      url: "https://wolfgangtietz.com/og/session.png",
      width: 1200,
      height: 630,
    },
  ],
},
  twitter: {
    card: "summary_large_image",
    title: "Wolfgang Tietz – Executive Coaching",
    description: "Terminbuchung für ein Coachinggespräch mit Executive Coach Wolfgang Tietz.",
      },
};

export default function SessionPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-24">
      <section className="max-w-3xl mx-auto text-center">
        <a
  href="/"
  className="text-zinc-500 text-sm underline underline-offset-4 hover:text-zinc-300 transition-colors"
>
  Zur Website
</a>
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
          src="https://cal.meetergo.com/wolfgangtietz/60-min-coaching"
          style={{ width: "100%", height: "900px", border: "none" }}
          title="Terminbuchung Coaching"
        />
      </section>
    </main>
  );
}