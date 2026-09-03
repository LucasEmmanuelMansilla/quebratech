import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { brand } from "@/content/marketing";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anta = localFont({
  src: "../assets/fonts/anta-regular.ttf",
  variable: "--font-anta",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.displayName} | Software Factory`,
    template: `%s | ${brand.displayName}`,
  },
  description:
    "Quebratech es una software factory que convierte fricciones del negocio en productos digitales claros, útiles y listos para escalar.",
  keywords: [
    "software factory",
    "desarrollo de software",
    "productos digitales",
    "aplicaciones a medida",
    "Quebratech",
  ],
  authors: [{ name: brand.displayName }],
  openGraph: {
    title: `${brand.displayName} | Software Factory`,
    description:
      "Diseñamos y construimos software que resuelve problemas reales de operación, crecimiento y experiencia digital.",
    type: "website",
    locale: "es_AR",
    siteName: brand.displayName,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${anta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-secondary">
        {children}
      </body>
    </html>
  );
}
