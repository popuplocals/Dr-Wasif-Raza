import type { Metadata, Viewport } from "next";
import { Montserrat, Kaushan_Script, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import TouchFeedback from "@/components/TouchFeedback";
import AskPanel from "@/components/AskPanel";
import { PHYSICIAN_LD, SITE_URL } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
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
    images: [{ url: "/photos/profile.webp", width: 800, height: 1040, alt: "Dr Wasif Raza colon and rectal cancer surgeon Lucknow Apollo Medics" }],
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
    <html lang="en" className={`${montserrat.variable} ${kaushan.variable} ${devanagari.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_LD) }} />
      </head>
      <body className="min-h-screen">
        <MotionProvider>
          <SmoothScroll />
          <ScrollProgress />
          <div className="wr-site flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <StickyBar />
          <WhatsAppButton />
          <AskPanel />
          <TouchFeedback />
        </MotionProvider>
      </body>
    </html>
  );
}
