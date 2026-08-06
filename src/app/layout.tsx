import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import FirstVisitModal from "@/components/layout/FirstVisitModal";
import PageTransition from "@/components/layout/PageTransition";
import ScrollRevealProvider from "@/components/layout/ScrollRevealProvider";
import SplashScreen from "@/components/layout/SplashScreen";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
 });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Global Language Academy (GLA) | Premium Language Institute",
    template: "%s | The Global Language Academy (GLA)",
  },
  description: "GLA offers professional IELTS, PTE, German language coaching (A1-B2), and Personality Development programs with certified trainers and guaranteed exam success.",
  metadataBase: new URL("https://www.gla-academy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Global Language Academy (GLA)",
    description: "Premium coaching for IELTS, PTE, German levels A1-B2, and corporate personality workshops.",
    url: "/",
    siteName: "The Global Language Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Global Language Academy (GLA)",
    description: "Premium language preparation courses and professional development.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dmSans.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash inline script to disable splash screen instantly on repeat visits before body paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (sessionStorage.getItem("splash-played") === "true") {
                    document.documentElement.classList.add("splash-disabled");
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <SplashScreen />
        <ScrollRevealProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <StickyMobileCTA />
          <FirstVisitModal />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
