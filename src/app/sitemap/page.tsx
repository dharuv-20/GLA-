import Link from 'next/link';
import { Home, Compass, GraduationCap, Info, MessageSquare, Shield, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "Website Sitemap",
  description: "Navigate all pages, language prep courses, student support services, and legal terms on The Global Language Academy (GLA) site directory.",
};

export default function SitemapPage() {
  const sections = [
    {
      icon: <Home className="w-5 h-5 text-purple" />,
      title: "Core Pages",
      links: [
        { name: "Homepage", path: "/" },
        { name: "About the Academy", path: "/about" },
        { name: "Contact & Branch Directions", path: "/contact" }
      ]
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-purple" />,
      title: "Language Exam Programs",
      links: [
        { name: "All Language Courses", path: "/courses" },
        { name: "German Language Course (A1 - B2)", path: "/courses/german-language" },
        { name: "IELTS Exam Preparation Masterclass", path: "/courses/ielts-preparation" },
        { name: "PTE Academic Prep & Simulation", path: "/courses/pte-academic" },
        { name: "Personality Development & Spoken English", path: "/courses/personality-development" }
      ]
    },
    {
      icon: <Compass className="w-5 h-5 text-purple" />,
      title: "Academy Services",
      links: [
        { name: "Student Support Services", path: "/services" }
      ]
    },
    {
      icon: <Shield className="w-5 h-5 text-purple" />,
      title: "Privacy & Legal Pages",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms" }
      ]
    }
  ];

  return (
    <div className="flex flex-col text-navy">
      {/* Header Page Title Hero */}
      <section className="bg-[#00122E] dark:bg-[#020c1b] text-white py-16 sm:py-20 border-b border-card-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold font-display tracking-tight">
            Academy Sitemap
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Find and access any page across our preparation portals instantly.
          </p>
        </div>
      </section>

      {/* Grid Directory List */}
      <section className="bg-card py-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-section-alt border border-card-border p-6 rounded-xl flex flex-col gap-4 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 border-b border-card-border pb-3">
                  <div className="p-2 bg-card border border-purple-light rounded-lg shadow-sm shrink-0">
                    {sec.icon}
                  </div>
                  <h2 className="text-base font-bold font-display text-navy">{sec.title}</h2>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.path}
                        className="text-xs font-semibold text-navy hover:text-purple hover:underline transition-all block"
                      >
                        {link.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-card-border mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white text-sm font-bold rounded-md hover:bg-purple-hover transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
