import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import TouchFeedback from "@/components/TouchFeedback";
import Preloader from "@/components/Preloader";
import { PHYSICIAN_LD, SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr Wasif Raza | Colorectal & Laparoscopic Surgeon in Lucknow",
    template: "%s",
  },
  description:
    "Dr. Wasif Raza — colon & rectal cancer surgeon, laparoscopic & robotic (da Vinci Xi) surgery and general surgery specialist in Lucknow. UK-trained, FRCS · FACS, Apollo Medics. Call +91 92780 72150",
  openGraph: {
    type: "website",
    siteName: "Dr. Wasif Raza — Colorectal & Laparoscopic Surgeon, Lucknow",
    locale: "en_IN",
    images: [{ url: "/photos/portrait-seated.webp", width: 648, height: 1280, alt: "Dr Wasif Raza colon and rectal cancer surgeon Lucknow Apollo Medics" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A3540",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${source.variable} ${devanagari.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(!sessionStorage.getItem('wr-preloaded')){document.documentElement.classList.add('wr-splash');sessionStorage.setItem('wr-preloaded','1');}}catch(e){}})();",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_LD) }} />
      </head>
      <body className="min-h-screen">
        <MotionProvider>
          <Preloader />
          <SmoothScroll />
          <ScrollProgress />
          <div className="wr-site flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <StickyBar />
          <WhatsAppButton />
          <TouchFeedback />
        </MotionProvider>
      </body>
    </html>
  );
}
