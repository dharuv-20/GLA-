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
    default: "The Global Language Academy (GLA) | IELTS, PTE & German Coaching",
    template: "%s | The Global Language Academy (GLA)",
  },
  description: "Join GLA for certified German language classes (A1-C2), IELTS (7.5+ band prep), and PTE Academic coaching in Delhi NCR & online. Small batches with guaranteed exam success.",
  keywords: [
    "German Language Classes",
    "IELTS Coaching",
    "PTE Academic Preparation",
    "German A1 A2 B1 B2 C1 C2",
    "Goethe Exam Preparation",
    "Study in Germany",
    "Personality Development Course",
    "The Global Language Academy",
    "GLA Learning"
  ],
  authors: [{ name: "The Global Language Academy", url: "https://tglalearning.com" }],
  creator: "The Global Language Academy",
  publisher: "The Global Language Academy",
  metadataBase: new URL("https://tglalearning.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Global Language Academy (GLA) | IELTS, PTE & German Coaching",
    description: "Premium coaching for IELTS (7.5+ Band), PTE Academic, German levels A1-C2, and Personality Development. Certified Goethe & IDP trainers.",
    url: "https://tglalearning.com",
    siteName: "The Global Language Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Global Language Academy (GLA)",
    description: "Premium exam preparation for IELTS, PTE, and German Language (A1-C2). Small 5-7 student batches with certified trainers.",
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
        {/* Netlify Identity widget for admin authentication */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </head>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
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
