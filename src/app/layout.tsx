import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { brand, getCopy } from "@/content/marketing";
import "./globals.css";

const homeCopy = getCopy("comercios");

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
    default: homeCopy.seo.title,
    template: `%s | ${brand.displayName}`,
  },
  description: homeCopy.seo.description,
  keywords: homeCopy.seo.keywords,
  authors: [{ name: brand.displayName }],
  openGraph: {
    title: homeCopy.seo.title,
    description: homeCopy.seo.description,
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
