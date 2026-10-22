import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SkipLink } from "@/components/SkipLink";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// IBM Plex Sans in place of a default Inter/Roboto/Arial stack — a
// deliberate, slightly technical body face (built for a telecom, not a
// SaaS template) that pairs with Fraunces without reading as generated.
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${fraunces.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-sand-50 text-ink-900">
        <LanguageProvider>
          <SkipLink />
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
