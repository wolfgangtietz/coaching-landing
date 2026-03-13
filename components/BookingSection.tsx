"use client";
import { useState } from "react";

export default function BookingSection() {
  const [showMeetergo, setShowMeetergo] = useState(false);

  return (
    <section id="booking" className="scroll-mt-32 py-20 px-6 text-center border-t border-zinc-900">
      {!showMeetergo ? (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-white">Bereit für eine neue Perspektive?</h2>
          <button
            onClick={() => setShowMeetergo(true)}
            className="bg-zinc-100 text-black px-12 py-3 rounded-sm text-base font-medium hover:bg-white hover:-translate-y-[1px] transition-all"
          >
            Erstgespräch vereinbaren
          </button>
          <p className="mt-6 text-zinc-400 font-light">30 Minuten. Vertraulich. Klärung Ihrer aktuellen Führungssituation.</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto min-h-[600px] animate-fade-in">
          <iframe
            src="https://cal.meetergo.com/wolfgangtietz/30-min-meeting-wolfgang"
            style={{ width: "100%", height: "900px", border: "none" }}
            title="Meetergo Booking"
          />
        </div>
      )}
    </section>
  );
}