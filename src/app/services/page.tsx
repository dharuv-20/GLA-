import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Briefcase,
  Globe2,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle,
  Clock,
  Compass,
  Check,
  Award,
  BookOpen,
  HeartHandshake,
  FileText,
  BadgeCheck,
  Plane,
  Landmark,
  UserCheck,
  Users
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: "Global Services | Ausbildung in Germany & Visa Assistance | GLA",
  description: "Beyond language learning, The Global Language Academy provides dedicated guidance for Ausbildung in Germany, study abroad visa assistance, and documentation support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Global Services | Ausbildung in Germany & Visa Assistance | GLA",
    description: "Prepare for international opportunities with GLA: German language mastery, Ausbildung pathway guidance, and structured visa documentation assistance.",
    url: "https://tglalearning.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  // Verified Academy Trust Metrics
  const academyMetrics = [
    {
      end: 7000,
      suffix: "+",
      label: "Students Trained",
      subtext: "Across Global & Domestic Batches",
      image: "/images/assets/stat-graduation-cap.webp",
      alt: "7000+ Students Trained"
    },
    {
      end: 6,
      suffix: "+",
      label: "Years of Excellence",
      subtext: "Established Language Pedagogy",
      image: "/images/assets/stat-excellence-shield.webp",
      alt: "6+ Years of Excellence"
    },
    {
      end: 3000,
      suffix: "+",
      label: "Internationally Certified",
      subtext: "Goethe, TELC, DELF, IELTS, PTE",
      image: "/images/assets/stat-certified-scroll.webp",
      alt: "3000+ Certified"
    },
    {
      end: 90,
      suffix: "%+",
      label: "Exam Clearance Rate",
      subtext: "First Attempt Success Rate",
      image: "/images/assets/stat-success-rocket.webp",
      alt: "90%+ Exam Success"
    }
  ];

  // Service 1: Key Ausbildung Vocational Fields
  const ausbildungTrades = [
    {
      title: "Healthcare & Nursing",
      germanTitle: "Pflegefachkraft / Krankenpflege",
      highlight: "High Demand Across German Hospitals & Care Facilities",
      desc: "Gain vocational training in patient care, clinical procedures, and healthcare management while working directly within German medical networks."
    },
    {
      title: "Hospitality & Gastronomy",
      germanTitle: "Hotelfach / Restaurantfach / Koch",
      highlight: "Practical Exposure in Renowned Hospitality Chains",
      desc: "Structured apprenticeships covering hotel operations, culinary arts, front office, guest management, and international tourism standards."
    },
    {
      title: "Information Technology",
      germanTitle: "Fachinformatiker für Systemintegration / Entwicklung",
      highlight: "Hands-on Software & Systems Infrastructure",
      desc: "Develop industry-ready skills in systems integration, network engineering, software development, and technical support."
    },
    {
      title: "Mechatronics & Technical Trades",
      germanTitle: "Mechatronik / Industriemechanik",
      highlight: "Precision Engineering & Industrial Automation",
      desc: "Vocational apprenticeship combining electrical engineering, mechanical systems, robotics, and industrial manufacturing."
    },
    {
      title: "Logistics & Commercial Trade",
      germanTitle: "Spedition und Logistikdienstleistung",
      highlight: "Supply Chain & International Commerce",
      desc: "Practical training in global freight coordination, supply chain systems, warehouse management, and commercial documentation."
    }
  ];

  // Service 2: Visa Assistance Areas
  const visaSupportAreas = [
    {
      title: "German Ausbildung & Vocational Visas",
      badge: "Germany Vocational Track",
      desc: "Guidance on employer contract requirements, ZAB credential recognition procedures, checklist verification, and embassy mock interviews."
    },
    {
      title: "German Student Visas",
      badge: "Higher Education",
      desc: "Step-by-step guidance on university admission letters, APS certificate requirements, Blocked Account setup, and statutory health insurance documentation."
    },
    {
      title: "German Opportunity Card (Chancenkarte)",
      badge: "Job Seeker Track",
      desc: "Assistance in understanding the points-based criteria, language certification readiness, and document preparation for job seekers."
    },
    {
      title: "International Study Visas",
      badge: "UK, Canada, Europe, Australia",
      desc: "Documentation guidance, Statement of Purpose (SOP) drafting review, and preparation for student visa appointments across leading global destinations."
    },
    {
      title: "Spouse & Family Reunion Visas",
      badge: "Ehegattennachzug",
      desc: "Mandatory Goethe A1 German language training alongside document checklist organization for family reunion applications."
    }
  ];

  // Structured 5-Step Process
  const pathwaySteps = [
    {
      step: "01",
      title: "Profile & Goal Assessment",
      desc: "Understand your academic background, current language proficiency, and target overseas pathway."
    },
    {
      step: "02",
      title: "Targeted Language Training",
      desc: "Level-wise preparation in German (A1 to B2) or IELTS/PTE led by certified faculty with weekly diagnostic mock exams."
    },
    {
      step: "03",
      title: "Application & Document Preparation",
      desc: "Guidance on drafting German-standard CVs (Lebenslauf), Motivation Letters, and organizing your academic records."
    },
    {
      step: "04",
      title: "Visa Filing & Mock Interviews",
      desc: "Meticulous document checklist review and realistic mock interview drills simulating embassy question patterns."
    },
    {
      step: "05",
      title: "Pre-Departure Readiness",
      desc: "Essential briefings on living abroad, accommodation search strategies, and smooth transition guidance."
    }
  ];

  // Transparent, Genuine FAQs
  const serviceFaqs = [
    {
      id: "srv-faq-1",
      question: "What is the role of The Global Language Academy in the Ausbildung process?",
      answer: "GLA focuses on providing the critical language foundation (German B1 or B2 level) required by German employers and the German Embassy. In addition, we guide candidates on drafting German-standard resumes (Lebenslauf), motivation letters, preparing for employer interviews, and navigating visa document requirements."
    },
    {
      id: "srv-faq-2",
      question: "Which German language level is required for an Ausbildung in Germany?",
      answer: "Most German vocational programs and embassy visa regulations require a verified B1 or B2 German certificate from recognized bodies like the Goethe-Institut or TELC. Healthcare and nursing roles typically necessitate strong B2 communication proficiency."
    },
    {
      id: "srv-faq-3",
      question: "How does GLA assist with study abroad visa applications?",
      answer: "Our visa guidance team helps you understand the exact document checklists, reviews your Statement of Purpose (SOP) / Letter of Motivation, assists with understanding financial documentation (such as Blocked Accounts for Germany), and conducts realistic mock interviews so you are well-prepared for your embassy appointment."
    },
    {
      id: "srv-faq-4",
      question: "Do you provide German language training for spouse reunion visas?",
      answer: "Yes. The German Embassy requires spouses applying for family reunion (Ehegattennachzug) to demonstrate basic German proficiency at the Goethe A1 level. We provide focused, fast-track A1 batches designed to help candidates clear their exam on the first attempt."
    },
    {
      id: "srv-faq-5",
      question: "Can I attend counseling sessions in person at your academy?",
      answer: "Yes, our central advisory center is located on the 3rd Floor, Plot No 94, PKT-10, Dwarka Sector 12, New Delhi (Opposite Metro Station). You are welcome to visit for an in-person profile discussion or connect with our advisors via phone or video consultation."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                          */}
      {/* ========================================================= */}
      <section className="relative bg-[#00122E] dark:bg-[#020c1b] text-white overflow-hidden py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        
        {/* Ambient Radial Glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple/25 border border-purple-300/35 rounded-full text-xs font-semibold text-purple-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-purple-200 shrink-0" />
              <span>ISO 9001:2015 Certified Global Academy</span>
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm shadow-sm">
              <Globe2 className="w-3.5 h-3.5 text-purple-200" />
              <span className="text-[11px] font-bold text-slate-200">International Opportunity Guidance</span>
            </div>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white max-w-4xl animate-fade-in-up [animation-delay:200ms] fill-mode-forwards">
            Beyond Language Learning. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white">
              We Help You Prepare for Global Opportunities.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:300ms] fill-mode-forwards">
            Language proficiency is the foundation of global mobility. At The Global Language Academy, we bridge accredited language training with dedicated support for <strong className="text-white">Ausbildung in Germany</strong> and structured <strong className="text-white">Visa Assistance</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple to-purple-hover hover:from-purple-hover hover:to-purple text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
            >
              <span>Book Free Advisory Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919217999511?text=Hi!%20I'm%20interested%20in%20Ausbildung%20and%20Visa%20Assistance%20at%20The%20Global%20Language%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md hover:scale-102 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. VERIFIED ACADEMY MILESTONES                            */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-12 sm:py-16 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {academyMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="group text-center p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-section-alt/60 hover:bg-card border border-card-border hover:border-purple/40 shadow-sm hover:shadow-[0_14px_35px_rgba(75,36,94,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-center items-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center relative">
                  <Image
                    src={stat.image}
                    alt={stat.alt}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-115 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-purple mb-1 tracking-tight">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={0} />
                </span>
                <span className="text-xs sm:text-sm font-bold text-navy">
                  {stat.label}
                </span>
                <span className="text-[11px] font-medium text-navy-muted mt-1">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MAJOR SERVICE 1: AUSBILDUNG IN GERMANY (BIG CARD)      */}
      {/* ========================================================= */}
      <section id="ausbildung" className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Ausbildung Showcase Container */}
          <div className="bg-card border-2 border-purple/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Area */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-card-border/80 pb-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-purple/15 border-2 border-purple/30 flex items-center justify-center p-2 shrink-0 shadow-sm">
                  <Image
                    src="/images/assets/prep-guarantee-seal.webp"
                    alt="Ausbildung in Germany Guidance"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-extrabold uppercase tracking-widest bg-purple/10 text-purple border border-purple/20 px-3 py-1 rounded-full">
                      Major Service 01
                    </span>
                    <span className="text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
                      Vocational Training in Germany
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy tracking-tight mt-1">
                    Ausbildung Guidance & Language Preparation
                  </h2>
                  <p className="text-xs sm:text-sm text-navy-muted">
                    Structured German language training (A1 to B2), application portfolio preparation, and interview coaching for German vocational programs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple hover:bg-purple-hover text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all text-center"
                >
                  <span>Inquire About Ausbildung</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/courses/german-language"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-section-alt border border-card-border text-navy font-bold text-xs sm:text-sm rounded-xl hover:border-purple/40 transition-all text-center"
                >
                  <span>Explore German Batches</span>
                </Link>
              </div>
            </div>

            {/* Overview & Key Explanation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
              
              <div className="lg:col-span-7 flex flex-col gap-4">
                <h3 className="text-xl font-extrabold font-display text-navy">
                  What is the German Ausbildung System?
                </h3>
                <p className="text-sm text-navy-muted leading-relaxed">
                  <strong>Ausbildung</strong> is Germany&apos;s dual vocational training model where learners combine practical, on-the-job training at a registered German organization with theoretical coursework at a state vocational school (Berufsschule).
                </p>
                <p className="text-sm text-navy-muted leading-relaxed">
                  Because candidates work directly with their host company during the program, participants receive a monthly contractual stipend from the employer to support their living expenses. A certified German language foundation (typically Goethe or TELC B1/B2) is the vital prerequisite for securing an apprenticeship contract and obtaining a vocational visa.
                </p>
                
                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-1 text-center">
                    <span className="text-base font-extrabold text-purple font-display">Dual Training</span>
                    <span className="text-[11px] text-navy-muted font-medium">Theory + Work Experience</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-1 text-center">
                    <span className="text-base font-extrabold text-purple font-display">Monthly Stipend</span>
                    <span className="text-[11px] text-navy-muted font-medium">Earn While Learning</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-1 text-center">
                    <span className="text-base font-extrabold text-purple font-display">Career Pathway</span>
                    <span className="text-[11px] text-navy-muted font-medium">Recognized Qualification</span>
                  </div>
                </div>
              </div>

              {/* Requirements & Eligibility Checklist */}
              <div className="lg:col-span-5 bg-section-alt/80 border border-card-border p-6 rounded-2xl flex flex-col justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                    Eligibility Guidelines
                  </span>
                  <h4 className="text-base font-extrabold font-display text-navy mt-1 mb-3">
                    General Ausbildung Prerequisites
                  </h4>
                  <ul className="flex flex-col gap-2.5 text-xs text-navy font-semibold">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Language Level:</strong> Certified B1 or B2 German (Goethe / TELC).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Academic Background:</strong> Minimum 10+2 / High School completion.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Application Portfolio:</strong> German-format CV & Motivation Letter.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Interview Readiness:</strong> Ability to communicate fluently in German.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-card-border text-[11px] text-navy-muted">
                  <span>* GLA prepares learners systematically from Level A1 to B2 with exam-focused drills.</span>
                </div>
              </div>

            </div>

            {/* Popular Vocational Fields */}
            <div className="border-t border-card-border/80 pt-8">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                  Vocational Sectors
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-navy mt-1">
                  Common Ausbildung Tracks in Germany
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ausbildungTrades.map((trade, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-section-alt/50 border border-card-border hover:border-purple/40 hover:bg-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold bg-purple/10 text-purple border border-purple/20 px-2.5 py-0.5 rounded-full w-fit">
                        Vocational Field
                      </span>
                      
                      <h4 className="text-base font-extrabold font-display text-navy">
                        {trade.title}
                      </h4>
                      <span className="text-[11px] font-medium text-purple italic">
                        {trade.germanTitle}
                      </span>
                      
                      <p className="text-xs text-navy-muted leading-relaxed mt-1">
                        {trade.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-card-border/60 text-[11px] font-semibold text-navy flex items-center gap-1.5">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple shrink-0" />
                      <span>{trade.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What GLA Covers for Ausbildung Candidates */}
            <div className="mt-10 bg-section-alt/80 border border-card-border p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
              <h4 className="text-base sm:text-lg font-extrabold font-display text-navy">
                How The Global Language Academy Supports Your Ausbildung Journey:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs font-semibold text-navy">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>Comprehensive German courses (A1 to B2) mapped to CEFR standards</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>Preparation for recognized Goethe-Institut and TELC examinations</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>Guidance on drafting German-standard CV (Lebenslauf) and Anschreiben</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>German spoken interview preparation and communicative drills</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>Guidance on document verification and ZAB credential recognition</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>Embassy visa checklist guidance and pre-departure briefings</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. MAJOR SERVICE 2: VISA ASSISTANCE (BIG CARD)            */}
      {/* ========================================================= */}
      <section id="visa-assistance" className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Visa Assistance Showcase Container */}
          <div className="bg-card border-2 border-purple/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Area */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-card-border/80 pb-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-purple/15 border-2 border-purple/30 flex items-center justify-center p-2 shrink-0 shadow-sm">
                  <Image
                    src="/images/assets/exam-assurance-badge.webp"
                    alt="Visa Assistance and Documentation Support"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-extrabold uppercase tracking-widest bg-purple/10 text-purple border border-purple/20 px-3 py-1 rounded-full">
                      Major Service 02
                    </span>
                    <span className="text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
                      Structured Documentation Guidance
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy tracking-tight mt-1">
                    Visa Assistance & Documentation Advisory
                  </h2>
                  <p className="text-xs sm:text-sm text-navy-muted">
                    End-to-end guidance for German student visas, Ausbildung visas, Opportunity Card (Chancenkarte), and global study permits.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple hover:bg-purple-hover text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all text-center"
                >
                  <span>Talk to an Advisor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919217999511?text=Hi!%20I%20need%20guidance%20on%20visa%20documentation%20and%20language%20prep."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Visa Categories Grid */}
            <div className="mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                Categories Covered
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-navy mt-1 mb-6">
                Comprehensive Visa Support Pathways
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {visaSupportAreas.map((visa, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-section-alt/50 border border-card-border hover:border-purple/40 hover:bg-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold bg-purple/10 text-purple border border-purple/20 px-2.5 py-0.5 rounded-full w-fit">
                        {visa.badge}
                      </span>
                      <h4 className="text-base font-extrabold font-display text-navy mt-1">
                        {visa.title}
                      </h4>
                      <p className="text-xs text-navy-muted leading-relaxed">
                        {visa.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-card-border/60 flex items-center gap-1 text-[11px] font-bold text-purple">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Checklist Review & Mock Preparation</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars of GLA Visa Support */}
            <div className="border-t border-card-border/80 pt-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                Our Methodology
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-navy mt-1 mb-6">
                How We Assist You Through the Visa Process
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 text-purple flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-navy">SOP & Motivation Letters</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Detailed review of your Statement of Purpose (SOP) to ensure clarity of intent and alignment with academic goals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 text-purple flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-navy">Financial Checklist Guidance</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Guidance on understanding Blocked Account procedures, sponsorship documents, and statutory health insurance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 text-purple flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-navy">Embassy Mock Interviews</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Practical interview drills designed to build confidence and prepare you for common consular interview questions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-lg bg-purple/10 text-purple flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-navy">Document Organization</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Systematic assembly and verification of your application file in accordance with official embassy checklists.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. 5-STEP STRUCTURED PROCESS                              */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Step-by-Step Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Our 5-Step Advisory & Preparation Process
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              A structured roadmap ensuring clarity and confidence at each stage of your preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {pathwaySteps.map((step, idx) => (
              <div
                key={idx}
                className="group bg-card border border-card-border hover:border-purple/50 p-5 rounded-2xl shadow-sm hover:shadow-[0_14px_35px_rgba(75,36,94,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple text-white flex items-center justify-center font-bold text-xs shadow-sm shrink-0">
                    {step.step}
                  </div>
                  <h4 className="text-base font-extrabold font-display text-navy group-hover:text-purple transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-card-border/60 text-[10px] font-bold text-purple uppercase tracking-wider">
                  Stage {idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. FAQS ON SERVICES                                       */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Got Questions About Our Services?
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Find transparent answers about language requirements, Ausbildung preparation, and visa guidance.
            </p>
          </div>

          <FAQAccordion faqs={serviceFaqs} />

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FINAL CTA CONTAINER                                    */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-[#00122E] via-[#160824] to-[#4B245E] text-white p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,18,46,0.35)] border border-white/15 overflow-hidden text-center flex flex-col items-center gap-6">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple/30 border border-purple-300/30 rounded-full text-xs font-semibold text-purple-200">
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Start Your Global Journey With GLA</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight max-w-2xl">
              Ready to Discuss Your International Goals?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Schedule a free advisory session with our experienced counselors at our Dwarka campus or online via video call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
              >
                <span>Book Free Advisory Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919217999511?text=Hi!%20I'd%20like%20to%20schedule%20a%20free%20advisory%20session%20at%20The%20Global%20Language%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md hover:scale-102 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Helpline contact info */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300 relative z-10">
              <span>Direct Academy Helpline:</span>
              <a href="tel:+919217999511" className="font-bold text-white hover:text-purple-300 transition-colors">
                +91 92179 99511
              </a>
              <span>|</span>
              <a href="tel:+919217669511" className="font-bold text-white hover:text-purple-300 transition-colors">
                +91 92176 69511
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
