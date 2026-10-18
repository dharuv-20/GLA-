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
import AppLayoutWrapper from "@/components/layout/AppLayoutWrapper";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

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
    default: "The Global Language Academy (TGLA) | German, French, Japanese, IELTS & PTE Coaching",
    template: "%s | The Global Language Academy",
  },
  description: "Join The Global Language Academy (TGLA) for certified German (A1-C2), French (A1-B2 & DALF C1/C2), Japanese (JLPT), Spoken English, IELTS (7.5+ Band), and PTE Strategy coaching in Delhi NCR & online. Small interactive batches with guaranteed exam success.",
  keywords: [
    "The Global Language Academy",
    "TGLA",
    "TGLA Learning",
    "German Language Classes",
    "French Language Courses",
    "Japanese Language Courses",
    "Spoken English Classes",
    "IELTS Coaching Delhi",
    "PTE Strategy Preparation",
    "German A1 A2 B1 B2 C1 C2",
    "Goethe Zertifikat Preparation",
    "DELF DALF French Preparation",
    "JLPT N5 N4 N3 N2 N1 Japanese",
    "Study Abroad Language Institute"
  ],
  authors: [{ name: "The Global Language Academy (TGLA)", url: "https://tglalearning.com" }],
  creator: "The Global Language Academy (TGLA)",
  publisher: "The Global Language Academy (TGLA)",
  metadataBase: new URL("https://tglalearning.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Global Language Academy (TGLA) | German, French, Japanese, IELTS & PTE Coaching",
    description: "Premier foreign language & test prep academy in Delhi NCR. Certified German (A1-C2), French (A1-B2/DALF), Japanese (JLPT), Spoken English, IELTS & PTE coaching.",
    url: "https://tglalearning.com",
    siteName: "The Global Language Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Global Language Academy (TGLA)",
    description: "Certified German, French, Japanese, Spoken English, IELTS, and PTE coaching in Delhi NCR & online. Small batches with native-level trainers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <GoogleAnalytics />
        {/* Site-wide Structured Data Schema (Organization, LocalBusiness, WebSite) */}
        <OrganizationSchema />
        <SplashScreen />
        <ScrollRevealProvider>
          <AppLayoutWrapper>
            <AnnouncementBar />
            <Header />
          </AppLayoutWrapper>
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <AppLayoutWrapper>
            <Footer />
            <FloatingWhatsApp />
            <StickyMobileCTA />
            <FirstVisitModal />
          </AppLayoutWrapper>
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
