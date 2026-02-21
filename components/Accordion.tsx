"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CaseStudy {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: CaseStudy[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto border-t border-zinc-800">
      {items.map((item, index) => (
        <div key={index} className="border-b border-zinc-800">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-8 flex justify-between items-center text-left group"
          >
            <span className="text-xl font-light text-zinc-300 group-hover:text-white transition-colors">
              {item.title}
            </span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              } text-zinc-600`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[500px] pb-8" : "max-h-0"
            }`}
          >
            <p className="text-zinc-400 leading-relaxed font-light">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}