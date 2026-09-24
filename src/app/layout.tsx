import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { Playfair_Display, Inter, Montserrat, Sora, Bodoni_Moda } from "next/font/google";
import Script from "next/script";
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
metadataBase: new URL(SITE_URL),
title: {
default: "Luxury Villas & Heritage Stays in Jaipur | Stayra",
template: "%s | Stayra",
},
description:
"Book private pool villas and heritage-style havelis in Jaipur. Private chef, concierge and direct booking on WhatsApp — no hidden fees.",
openGraph: {
siteName: "Stayra",
type: "website",
locale: "en_IN",
images: [
{
url: "/images/about-luxury-interior.png",
width: 1200,
height: 630,
alt: "Stayra — luxury villas and heritage stays in Jaipur",
},
],
},
twitter: {
card: "summary_large_image",
images: ["/images/about-luxury-interior.png"],
},
icons: {
icon: "/logo.png",
apple: "/logo.png",
},
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Providers } from "@/components/providers";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/structured-data";

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
{/* Google Tag Manager
    strategy="beforeInteractive" makes Next.js inject this into <head>
    and load it before any other script, matching Google's "as high in
    <head> as possible" install instruction. */}
<Script id="gtm-head" strategy="beforeInteractive">
{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K377DJGW');`}
</Script>
{/* End Google Tag Manager */}

{/* Google Tag Manager (noscript) */}
<noscript>
<iframe
src="https://www.googletagmanager.com/ns.html?id=GTM-K377DJGW"
height="0"
width="0"
style={{ display: "none", visibility: "hidden" }}
></iframe>
</noscript>
{/* End Google Tag Manager (noscript) */}
<OrganizationSchema />
<WebSiteSchema />
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
