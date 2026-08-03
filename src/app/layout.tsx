import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ThemeProvider } from "@/i18n/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SkipLink } from "@/components/SkipLink";

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
      data-theme="light"
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-sand-50 text-ink-900 transition-colors duration-300 dark:bg-ink-950 dark:text-sand-50">
        <ThemeProvider>
          <LanguageProvider>
            <SkipLink />
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
