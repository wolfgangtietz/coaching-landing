"use client";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div className="opacity-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}