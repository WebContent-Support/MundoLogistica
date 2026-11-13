import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
  Syne,
  Newsreader,
  JetBrains_Mono,
} from "next/font/google";
import ScrollObserver from "@/components/ScrollObserver";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-family-sans",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-family-heading",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-family-display",
});

const fontEditorial = Newsreader({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-family-editorial",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-family-mono",
});

export function generateMetadata(): Metadata {
  const raw = (process.env.SITE_INDEXABLE ?? process.env.NEXT_PUBLIC_SITE_INDEXABLE ?? "false")
    .trim()
    .toLowerCase();
  const isIndexable = raw === "true" || raw === "1" || raw === "yes";

  return {
    title: "MundoLogística | Plataforma Educacional & B2B",
    description:
      "Cursos executivos, capacitação corporativa e vitrine de especialistas em logística e supply chain.",
    robots: {
      index: isIndexable,
      follow: isIndexable,
      googleBot: {
        index: isIndexable,
        follow: isIndexable,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png" },
        { url: "/favicon.ico" },
      ],
      apple: "/favicon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased ${fontSans.variable} ${fontHeading.variable} ${fontDisplay.variable} ${fontEditorial.variable} ${fontMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
