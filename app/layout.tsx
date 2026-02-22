import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wolfgangtietz.com"),
  title: "Wolfgang Tietz – Executive & Life Coaching",
  description:
    "Executive & Life Coaching für Führungs- und Lebensübergänge: Klarheit, Neuausrichtung, wirksames Handeln. 30 Min. vertrauliches Kennenlernen.",
alternates: {
  canonical: "/",
},
  openGraph: {
    type: "website",
    url: "https://wolfgangtietz.com",
    title: "Wolfgang Tietz – Executive & Life Coaching",
    description:
      "Executive & Life Coaching für Führungs- und Lebensübergänge: Klarheit, Neuausrichtung, wirksames Handeln. 30 Min. vertrauliches Kennenlernen.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Wolfgang Tietz – Executive & Life Coaching",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wolfgang Tietz – Executive & Life Coaching",
    description:
      "Executive & Life Coaching für Führungs- und Lebensübergänge: Klarheit, Neuausrichtung, wirksames Handeln. 30 Min. vertrauliches Kennenlernen.",
    images: ["/og/default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
