import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ircaconsultores.com";

export const metadata: Metadata = {
  title: {
    default: "IRCA Consultores® · Ingeniería Ambiental y Cumplimiento Normativo",
    template: "%s | IRCA Consultores®",
  },
  description:
    "Consultoría ambiental integral desde 1999. Ingeniería ambiental, cumplimiento normativo, atención legal y trámites gubernamentales en México.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "IRCA Consultores® · Ingeniería Ambiental y Cumplimiento Normativo",
    description: "Consultoría ambiental integral desde 1999.",
    url: siteUrl,
    siteName: "IRCA Consultores®",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IRCA Consultores®" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCA Consultores®",
    description: "Consultoría ambiental integral desde 1999.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
