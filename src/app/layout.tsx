import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat, Sora, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stayra.co"),
  title: {
    default: "Luxury Villas & Heritage Stays in Jaipur | Stayra",
    template: "%s | Stayra",
  },
  description:
    "Book private pool villas and restored heritage havelis in Jaipur. Private chef, concierge and direct booking on WhatsApp — no hidden fees.",
  openGraph: {
    siteName: "Stayra",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};


import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Providers } from "@/components/providers";
import { OrganizationSchema } from "@/components/seo/structured-data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${bodoni.variable} antialiased flex flex-col min-h-screen bg-stayra-ivory text-stayra-charcoal font-sans`}
      >
        <OrganizationSchema />
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
        </Providers>
      </body>
    </html>
  );
}
