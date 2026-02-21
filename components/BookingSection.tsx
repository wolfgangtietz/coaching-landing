"use client";
import { useState } from "react";

export default function BookingSection() {
  const [showMeetergo, setShowMeetergo] = useState(false);

  return (
    <section id="booking" className="py-32 px-6 text-center border-t border-zinc-900">
      {!showMeetergo ? (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-8">Bereit für eine neue Perspektive?</h2>
          <button
            onClick={() => setShowMeetergo(true)}
            className="bg-zinc-100 text-black px-12 py-5 rounded-none text-lg font-medium hover:bg-white transition-all transform hover:scale-[1.02]"
          >
            Termin laden
          </button>
          <p className="mt-6 text-zinc-500 font-light">30 Minuten. Vertraulich. Ohne Verpflichtung.</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto min-h-[600px] animate-fade-in">
          <iframe
            src="https://meetergo.com/de/ihr-link-platzhalter/30min"
            style={{ width: "100%", height: "700px", border: "none" }}
            title="Meetergo Booking"
          />
        </div>
      )}
    </section>
  );
}