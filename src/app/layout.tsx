import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://affey-wajir.example"),
  title: {
    default: "Mohamed Abdi Affey — for Governor of Wajir County",
    template: "%s · Mohamed Abdi Affey",
  },
  description:
    "Statesman, diplomat and son of Wajir. A record of service across Kenya and the Horn of Africa — now for home.",
  openGraph: {
    title: "Mohamed Abdi Affey — for Governor of Wajir County",
    description:
      "A record of service across Kenya and the Horn of Africa — now for home.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sand-50 text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:left-4 focus:top-4 focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sand-50"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
