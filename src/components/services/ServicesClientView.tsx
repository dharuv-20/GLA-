"use client";

import { useState } from 'react';
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
  Users,
  Euro,
  Stethoscope,
  Utensils,
  Laptop,
  Wrench,
  Truck,
  FileSpreadsheet,
  CalendarCheck,
  AlertCircle,
  TrendingUp,
  Scale,
  ChevronDown,
  ChevronUp,
  X,
  Minimize2
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import CountUp from '@/components/CountUp';

export default function ServicesClientView() {
  // State for which major card is expanded: 'none' | 'ausbildung' | 'visa'
  const [expandedCard, setExpandedCard] = useState<'none' | 'ausbildung' | 'visa'>('none');

  // Occupation Category Filter in Ausbildung Trade Explorer
  const [selectedOccupationCat, setSelectedOccupationCat] = useState<string>('all');

  // Document checklist category filter
  const [selectedDocCategory, setSelectedDocCategory] = useState<string>('all');

  // Smooth expand handler
  const handleExpandCard = (card: 'ausbildung' | 'visa') => {
    if (expandedCard === card) {
      handleShrinkCard();
      return;
    }
    setExpandedCard(card);
    setTimeout(() => {
      document.getElementById('expanded-service-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  // Smooth shrink handler (back to overview state)
  const handleShrinkCard = () => {
    setExpandedCard('none');
    setTimeout(() => {
      document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  // Academy Trust Metrics
  const academyMetrics = [
    {
      end: 7000,
      suffix: "+",
      label: "Students Trained",
      subtext: "Across 1500+ Global Batches",
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

  // -------------------------------------------------------------
  // AUSBILDUNG 5 OCCUPATION CATEGORIES & TRADES DATA
  // -------------------------------------------------------------
  const ausbildungCategories = [
    {
      id: "healthcare",
      categoryName: "Healthcare & Care",
      germanCategory: "Pflege & Gesundheit",
      icon: Stethoscope,
      badgeText: "High German Demand",
      accent: "text-rose-500 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/40",
      description: "High demand across German state hospitals, care homes, and specialized medical clinics with strong job stability.",
      trades: [
        {
          title: "Nursing & Nursing Assistance",
          germanTitle: "Pflegefachkraft / Pflegeassistenz",
          note: "Generalist unified nursing training recognized across all German federal states and EU countries.",
          duration: "3 Years",
          minLanguage: "B2 German Recommended"
        },
        {
          title: "Elderly Care & Geriatric Care",
          germanTitle: "Altenpflegefachkraft",
          note: "Specialized care supporting senior citizens in dedicated residential, clinical, and rehabilitation centers.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Mental Health Nursing",
          germanTitle: "Psychiatrische Krankenpflege",
          note: "Psychiatric clinical care, therapeutic patient support, and mental health rehabilitation.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Gynaecology & Pediatric Nursing",
          germanTitle: "Frauenheilkunde & Kinderkrankenpflege",
          note: "Maternity wards, neonatal units, child healthcare, and specialized family health facilities.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Operating-Room Assistance (OTA)",
          germanTitle: "OTA - Operationstechnische Assistenz",
          note: "Surgical instrument preparation, surgeon assistance during procedures, and sterile operating theatre management.",
          duration: "3 Years",
          minLanguage: "B2 German"
        }
      ]
    },
    {
      id: "hospitality",
      categoryName: "Hotel, Hospitality & Food Services",
      germanCategory: "Gastronomie & Hotellerie",
      icon: Utensils,
      badgeText: "High Retention",
      accent: "text-amber-500 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/40",
      description: "World-class apprenticeships with leading German hotel chains, boutique resorts, and gourmet culinary centers.",
      trades: [
        {
          title: "Hotel Management / Specialist",
          germanTitle: "Hotelfachmann / Hotelfachfrau",
          note: "Front office operations, room division management, guest relations, reservations & event coordination.",
          duration: "3 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Restaurant Specialist",
          germanTitle: "Restaurantfachmann / Restaurantfachfrau",
          note: "Fine dining service management, banqueting logistics, sommelier service & customer experience.",
          duration: "3 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Baker & Pastry Specialist",
          germanTitle: "Bäcker / Konditor",
          note: "Artisan German bread baking, confectionery, pastry production & commercial baking hygiene.",
          duration: "3 Years",
          minLanguage: "B1 German"
        },
        {
          title: "Cook / Professional Chef",
          germanTitle: "Koch / Köchin",
          note: "Culinary arts, menu design, food costing, kitchen hygiene (HACCP) & commercial kitchen operations.",
          duration: "3 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Food Technology Specialist",
          germanTitle: "Fachkraft für Lebensmitteltechnik",
          note: "Industrial food processing, quality assurance laboratories, food safety compliance & packaging automation.",
          duration: "3 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Commercial Kitchen Roles",
          germanTitle: "Fachkraft im Gastgewerbe",
          note: "Fast-paced hospitality kitchens, corporate dining operations, buffets & event catering.",
          duration: "2–3 Years",
          minLanguage: "B1 German"
        }
      ]
    },
    {
      id: "technical",
      categoryName: "IT, Engineering & Technical Trades",
      germanCategory: "IT & Technik",
      icon: Laptop,
      badgeText: "Top Remuneration",
      accent: "text-purple bg-purple/10 border-purple/20",
      description: "Precision German engineering, modern software development, robotics, and industrial IoT automation.",
      trades: [
        {
          title: "IT Specialist (Systems / Development)",
          germanTitle: "Fachinformatiker/in (Systemintegration / Anwendungsentwicklung)",
          note: "Cloud infrastructure, network security, software engineering, databases, and enterprise IT support.",
          duration: "3 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Mechatronics Specialist",
          germanTitle: "Mechatroniker/in",
          note: "Integration of mechanical components, electrical engineering, industrial robotics & automated systems.",
          duration: "3.5 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Industrial Mechanic",
          germanTitle: "Industriemechaniker/in",
          note: "Machine manufacturing, predictive plant maintenance, automated assembly lines & precision CNC tooling.",
          duration: "3.5 Years",
          minLanguage: "B1 German"
        },
        {
          title: "Automobile Technology Specialist",
          germanTitle: "Kraftfahrzeugmechatroniker/in",
          note: "EV electric drive systems, automotive diagnostics, hybrid vehicles & automotive electronics.",
          duration: "3.5 Years",
          minLanguage: "B1 German"
        },
        {
          title: "Automated Systems Specialist",
          germanTitle: "Elektroniker/in für Automatisierungstechnik",
          note: "PLC programming, sensor networks, industrial IoT & automated smart manufacturing lines.",
          duration: "3.5 Years",
          minLanguage: "B1 / B2 German"
        }
      ]
    },
    {
      id: "business",
      categoryName: "Business & Administration",
      germanCategory: "Wirtschaft & Verwaltung",
      icon: Briefcase,
      badgeText: "Corporate Pathways",
      accent: "text-blue-500 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/40",
      description: "Vocational apprenticeships across multinational corporations, trading firms, banks, and public organizations.",
      trades: [
        {
          title: "Office Management Specialist",
          germanTitle: "Kaufmann/-frau für Büromanagement",
          note: "Corporate communications, digital records, accounting workflows, HR administration & meeting scheduling.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Business Administration Clerk",
          germanTitle: "Verwaltungsfachangestellte/r",
          note: "Operational business workflows, project administration, public authority procedures & compliance.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Retail Management Specialist",
          germanTitle: "Kaufmann/-frau im Einzelhandel",
          note: "Store operations, inventory auditing, consumer merchandising & client relations.",
          duration: "3 Years",
          minLanguage: "B1 / B2 German"
        },
        {
          title: "Banking & Finance Clerk",
          germanTitle: "Bankkaufmann / Bankkauffrau",
          note: "Retail banking, loan portfolios, customer financial consulting & monetary transaction auditing.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Industrial Sales Representative",
          germanTitle: "Industriekaufmann / Industriekauffrau",
          note: "Supply chain procurement, industrial sales, billing, cost accounting & B2B marketing.",
          duration: "3 Years",
          minLanguage: "B2 German"
        },
        {
          title: "Event Management Specialist",
          germanTitle: "Veranstaltungskaufmann/-frau",
          note: "Conferences, international trade fairs, budget allocation & live event production.",
          duration: "3 Years",
          minLanguage: "B2 German"
        }
      ]
    },
    {
      id: "logistics",
      categoryName: "Logistics & Supply Chain",
      germanCategory: "Logistik & Transport",
      icon: Truck,
      badgeText: "Europe's #1 Hub",
      accent: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/40",
      description: "Germany is Europe's central logistics hub with highly automated distribution networks and global freight corridors.",
      trades: [
        {
          title: "Warehouse Logistics Specialist",
          germanTitle: "Fachkraft für Lagerlogistik",
          note: "Strategic inventory flow, routing optimization, goods inspection, storage systems & freight dispatch.",
          duration: "3 Years",
          minLanguage: "B1 German"
        },
        {
          title: "Logistics Specialist",
          germanTitle: "Fachlagerist/in",
          note: "Loading operations, packaging compliance, warehouse management software (WMS) & stock tracking.",
          duration: "2 Years",
          minLanguage: "B1 German"
        }
      ]
    }
  ];

  // -------------------------------------------------------------
  // 10-STAGE AUSBILDUNG WORKFLOW ROADMAP
  // -------------------------------------------------------------
  const ausbildungRoadmap = [
    { step: "01", title: "Profile Assessment", desc: "Review educational credentials, Class 12 transcripts, past work experience, personal interests, and long-term German career aspirations." },
    { step: "02", title: "Occupation Selection", desc: "Identify suitable German vocational trades (Pflege, IT, Gastro, Mechatronik) and verify occupation-specific entry requirements." },
    { step: "03", title: "German-Language Preparation", desc: "Develop language proficiency systematically from A1 up to B1/B2 level with certified Goethe, telc, or ÖSD exam training." },
    { step: "04", title: "Application Portfolio", desc: "Draft a standardized German-format CV (Tabellarischer Lebenslauf) and tailored Motivation Letter (Anschreiben)." },
    { step: "05", title: "Employer Applications", desc: "Search for suitable vacancies with verified German employers and vocational training schools, submitting compliant application files." },
    { step: "06", title: "Employer Interviews", desc: "Participate in virtual employer interviews with dedicated German mock interview coaching and communicative confidence drills." },
    { step: "07", title: "Training Contract (Ausbildungsvertrag)", desc: "Upon selection, receive the official Ausbildungsvertrag outlining training duration, start date, and monthly remuneration." },
    { step: "08", title: "Visa Documentation Assembly", desc: "Organize the embassy-compliant file including training contract, language certificates, passport, insurance, and accommodation proof." },
    { step: "09", title: "Visa Application & Biometrics", desc: "Complete embassy or VFS appointment procedures, submit biometric data, and participate in consulate interviews if requested." },
    { step: "10", title: "Travel & Training Commencement", desc: "Receive your German vocational visa, arrange flights, complete city registration (Anmeldung), and begin your dual training." }
  ];

  // -------------------------------------------------------------
  // DOCUMENT CHECKLIST BY CATEGORY
  // -------------------------------------------------------------
  const documentChecklist = [
    { category: "personal", label: "Personal Documents", items: [
      "Valid passport with at least 12 months validity from intended travel date",
      "Recent biometric passport-size photographs matching German visa specifications",
      "Updated German-format CV (Tabellarischer Lebenslauf) signed and dated"
    ]},
    { category: "academic", label: "Academic Documents", items: [
      "Class 10 marksheet and certificate (original + certified translation)",
      "Class 12 marksheet and certificate (minimum 10+2 educational completion)",
      "Diploma or Bachelor's degree certificates and marksheets (where applicable)",
      "Academic transcripts and official school-leaving certificate"
    ]},
    { category: "language", label: "Language Certificates", items: [
      "Goethe-Zertifikat B1 or B2 (officially recognized across all German states)",
      "telc Deutsch B1 or B2 certificate (fully equivalent and accepted by embassies)",
      "ÖSD certificate (where applicable for specific vocational institutes)"
    ]},
    { category: "employer", label: "Employer & Training Documents", items: [
      "Official Ausbildungsvertrag (dual training contract signed by employer & vocational school)",
      "Employer offer letter or verification of training placement",
      "IHK (Chamber of Commerce) or HWK (Chamber of Crafts) registration stamp, where required"
    ]},
    { category: "financial", label: "Financial & Supplementary Documents", items: [
      "Monthly remuneration contract proof (€800–€1,500/mo indicated in training agreement)",
      "Bank statements or financial sponsor documents (if remuneration is below embassy threshold)",
      "Letter of Motivation (Anschreiben / Motivationsschreiben) explaining vocational intent",
      "Proof of initial accommodation (rental agreement or employer accommodation letter)",
      "Statutory or private incoming health insurance valid from departure date",
      "Official German translations, apostilles, and ZAB recognition documents (where mandated)"
    ]}
  ];

  // -------------------------------------------------------------
  // SERVICE 2: VISA ASSISTANCE & DOCUMENTATION ADVISORY DATA
  // -------------------------------------------------------------
  const visaSupportAreas = [
    {
      title: "German Ausbildung & Vocational Visas",
      badge: "Section 16a AufenthG",
      desc: "Guidance on employer training contract verification, ZAB credential recognition procedures, embassy checklist compliance, and consular mock interviews."
    },
    {
      title: "German Student Visas",
      badge: "Section 16b AufenthG",
      desc: "Step-by-step guidance on public university admission letters, APS certificate verification, Blocked Account setup, and statutory health insurance documentation."
    },
    {
      title: "German Opportunity Card (Chancenkarte)",
      badge: "Points-Based Job Seeker",
      desc: "Assistance in calculating points-based eligibility, language certification readiness, qualifications recognition, and application filing for skilled job seekers."
    },
    {
      title: "International Study Visas (UK, Canada, Europe, Aus)",
      badge: "Global Study Permits",
      desc: "Documentation guidance, Statement of Purpose (SOP) drafting review, and preparation for student visa appointments across leading global education destinations."
    }
  ];

  // 5-Step General Advisory Process
  const pathwaySteps = [
    { step: "01", title: "Profile Evaluation", desc: "Comprehensive assessment of your academic credentials, language goals, and target destinations." },
    { step: "02", title: "Language Training", desc: "Rigorous curriculum from beginner to advanced (CEFR aligned) with test-focused preparation." },
    { step: "03", title: "Documentation Prep", desc: "Guidance on drafting compelling SOPs, certified translations, CV formatting, and checklist assembly." },
    { step: "04", title: "Application & Interview", desc: "Step-by-step submission guidance paired with realistic mock interview coaching." },
    { step: "05", title: "Pre-Departure Briefing", desc: "Essential orientation covering accommodation, travel insurance, city registration, and local customs." }
  ];

  // Services Page FAQs
  const serviceFaqs = [
    {
      id: "srv-faq-1",
      question: "What is the difference between Ausbildung and a regular German university degree?",
      answer: "Ausbildung is a dual vocational apprenticeship model where you combine theoretical study at a state vocational school (Berufsschule) with hands-on, practical paid work at a German host company. Unlike university students who pay living expenses out of pocket, Ausbildung candidates receive a contractual monthly stipend (€800–€1,500/month) from their employer throughout the 3-year program."
    },
    {
      id: "srv-faq-2",
      question: "Which German language level is strictly required for an Ausbildung?",
      answer: "A certified B1 or B2 German certificate from Goethe-Institut, telc, or ÖSD is required. While some technical and logistics roles consider strong B1 candidates, healthcare, nursing, and customer-facing hospitality roles typically demand B2 proficiency to understand technical vocational school lectures and ensure workplace safety."
    },
    {
      id: "srv-faq-3",
      question: "Is a Blocked Account (Sperrkonto) always required for an Ausbildung visa?",
      answer: "Not necessarily. If your monthly remuneration in the training contract meets or exceeds the German embassy's minimum subsistence threshold (currently approximately €903 net per month), you generally do not need a blocked account. However, if the stipend is below this benchmark or during initial preparatory language months, a supplementary partial blocked account may be required."
    },
    {
      id: "srv-faq-4",
      question: "How does TGLA assist with study abroad and embassy visa applications?",
      answer: "Our visa guidance team provides meticulous checklist verification, assists with Statement of Purpose (SOP) and Motivation Letter drafting, guides you through Blocked Account and health insurance setup, and conducts realistic mock interview drills simulating embassy question patterns so you feel completely confident."
    },
    {
      id: "srv-faq-5",
      question: "What are the career opportunities and PR pathways after completing an Ausbildung in Germany?",
      answer: "Germany faces significant skilled labor shortages across healthcare, engineering, IT, and hospitality. Over 65–70% of trainees are directly absorbed into permanent employment by their host company. After completing Ausbildung and working for 2 years in your skilled profession, you become eligible to apply for German Permanent Residence (Niederlassungserlaubnis)."
    },
    {
      id: "srv-faq-6",
      question: "Can I attend counseling sessions in person at your academy?",
      answer: "Yes, our central advisory campus is located on the 3rd Floor, Plot No 94, PKT-10, Dwarka Sector 13, New Delhi (Opposite Metro Station, Near Radisson Blu Hotel). You are welcome to visit for an in-person profile discussion or connect with our advisors via phone or video consultation."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                          */}
      {/* ========================================================= */}
      <section className="relative bg-[#00122E] dark:bg-[#010814] text-white overflow-hidden py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        
        {/* Ambient Radial Glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple/25 border border-purple-300/35 rounded-full text-xs font-semibold text-purple-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-purple-200 shrink-0" />
              <span>ISO 9001:2015 Certified Global Academy</span>
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm shadow-sm">
              <Globe2 className="w-3.5 h-3.5 text-purple-200" />
              <span className="text-[11px] font-bold text-slate-200">International Pathways & Careers</span>
            </div>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white max-w-4xl">
            Beyond Language Learning. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white">
              We Help You Prepare for Global Opportunities.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Language proficiency is the foundation of international mobility. At The Global Language Academy, we bridge accredited language training with dedicated support for <strong className="text-white">Ausbildung in Germany</strong> and comprehensive <strong className="text-white">Visa Assistance & Documentation Advisory</strong>.
          </p>

          {/* Quick Dual Jump Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleExpandCard('ausbildung')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple/30 hover:bg-purple/50 border border-purple-300/40 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <span>🇩🇪 Explore Ausbildung in Germany</span>
              <ChevronDown className="w-3.5 h-3.5 text-purple-hero" />
            </button>
            <button
              type="button"
              onClick={() => handleExpandCard('visa')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <span>🛂 Explore Visa Advisory Services</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-3">
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
      {/* 3. DUAL CORE SERVICE CARDS (EXPANDABLE ARCHITECTURE)     */}
      {/* ========================================================= */}
      <section id="services-overview" className="bg-white dark:bg-[#071324] py-14 border-b border-card-border transition-colors duration-300 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Our Two Core International Advisory Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Choose Your Pathway
            </h2>
            <p className="text-xs sm:text-sm text-navy-muted">
              Click either card below to expand and explore all comprehensive details. You can easily shrink back anytime.
            </p>
          </div>

          <div id="services-cards" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card A: Ausbildung in Germany Summary Card */}
            <div
              className={`p-8 rounded-3xl bg-gradient-to-br from-purple/10 via-slate-50 to-white dark:from-[#0B1A2E] dark:via-[#071324] dark:to-[#040C1A] border-2 shadow-md hover-lift flex flex-col justify-between gap-6 transition-all duration-300 ${
                expandedCard === 'ausbildung'
                  ? 'border-purple ring-4 ring-purple/20 shadow-xl'
                  : 'border-purple/30'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/15 text-purple border border-purple/25 px-3 py-1 rounded-full">
                    Germany Vocational Dual System
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    €800 – €1,500/mo Stipend
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold font-display text-navy">
                    Ausbildung in Germany
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-muted mt-2 leading-relaxed">
                    Dual vocational apprenticeship combining on-the-job training at German companies with theoretical education at vocational schools. Earn monthly remuneration while earning a recognized German qualification.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-semibold text-navy">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#020b18] border border-card-border text-center">
                    <span className="text-purple font-bold block text-sm">€0 Tuition</span>
                    <span className="text-[10px] text-navy-muted">100% Free Schooling</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#020b18] border border-card-border text-center">
                    <span className="text-purple font-bold block text-sm">B1 / B2 Level</span>
                    <span className="text-[10px] text-navy-muted">German Language</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#020b18] border border-card-border text-center col-span-2 sm:col-span-1">
                    <span className="text-purple font-bold block text-sm">PR Pathway</span>
                    <span className="text-[10px] text-navy-muted">Job Absorption</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-card-border">
                <button
                  type="button"
                  onClick={() => handleExpandCard('ausbildung')}
                  className={`w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    expandedCard === 'ausbildung'
                      ? 'bg-purple-hover text-white'
                      : 'bg-purple hover:bg-purple-hover text-white'
                  }`}
                >
                  {expandedCard === 'ausbildung' ? (
                    <>
                      <span>Shrink Card</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Explore Ausbildung Details</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
                <Link
                  href="/courses/german-language"
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-card border border-card-border hover:border-purple/40 text-navy font-bold text-xs uppercase tracking-wider transition-all text-center"
                >
                  German Batches
                </Link>
              </div>
            </div>

            {/* Card B: Visa Assistance & Documentation Advisory Summary Card */}
            <div
              className={`p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-slate-50 to-white dark:from-[#0B1A2E] dark:via-[#071324] dark:to-[#040C1A] border-2 shadow-md hover-lift flex flex-col justify-between gap-6 transition-all duration-300 ${
                expandedCard === 'visa'
                  ? 'border-blue-600 ring-4 ring-blue-500/20 shadow-xl'
                  : 'border-blue-500/30'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/25 px-3 py-1 rounded-full">
                    Global Procedural Advisory
                  </span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    Germany • UK • Canada • Aus
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold font-display text-navy">
                    Visa Assistance & Documentation Advisory
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-muted mt-2 leading-relaxed">
                    End-to-end procedural support for German Student Visas (APS/Blocked Account), Ausbildung Visas (Section 16a), Opportunity Card (Chancenkarte), and international study permits.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-semibold text-navy">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#020b18] border border-card-border text-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold block text-sm">SOP & Letters</span>
                    <span className="text-[10px] text-navy-muted">German Standard</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#020b18] border border-card-border text-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold block text-sm">Mock Interviews</span>
                    <span className="text-[10px] text-navy-muted">Consulate Simulation</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#020b18] border border-card-border text-center col-span-2 sm:col-span-1">
                    <span className="text-blue-600 dark:text-blue-400 font-bold block text-sm">Checklists</span>
                    <span className="text-[10px] text-navy-muted">100% Verification</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-card-border">
                <button
                  type="button"
                  onClick={() => handleExpandCard('visa')}
                  className={`w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    expandedCard === 'visa'
                      ? 'bg-blue-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {expandedCard === 'visa' ? (
                    <>
                      <span>Shrink Card</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Explore Visa Details</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-card border border-card-border hover:border-blue-500/40 text-navy font-bold text-xs uppercase tracking-wider transition-all text-center"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* EXPANDED CONTAINER: DYNAMICALLY REVEALED CONTENT          */}
          {/* ========================================================= */}
          <div id="expanded-service-container" className={`pt-6 flex flex-col gap-8 scroll-mt-24 ${expandedCard !== 'none' ? 'block animate-fade-in' : 'hidden'}`}>
            
            {/* Sticky Control & Quick Shrink Bar */}
            <div className="sticky top-20 z-20 bg-white/95 dark:bg-[#071324]/95 backdrop-blur-md p-4 rounded-2xl border border-card-border shadow-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${expandedCard === 'ausbildung' ? 'bg-purple animate-ping' : 'bg-blue-600 animate-ping'}`}></span>
                <span className="font-bold text-sm text-navy">
                  {expandedCard === 'ausbildung' ? 'Viewing Ausbildung in Germany Complete Guide' : 'Viewing Visa Assistance & Documentation Advisory'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShrinkCard}
                  className="py-2 px-4 rounded-xl bg-purple hover:bg-purple-hover text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Shrink Card</span>
                </button>

                {expandedCard === 'ausbildung' ? (
                  <button
                    type="button"
                    onClick={() => handleExpandCard('visa')}
                    className="py-2 px-3.5 rounded-xl bg-section-alt hover:bg-section-alt/80 text-navy text-xs font-bold border border-card-border transition-all cursor-pointer"
                  >
                    Switch to Visa Advisory →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleExpandCard('ausbildung')}
                    className="py-2 px-3.5 rounded-xl bg-section-alt hover:bg-section-alt/80 text-navy text-xs font-bold border border-card-border transition-all cursor-pointer"
                  >
                    Switch to Ausbildung Guide →
                  </button>
                )}
              </div>
            </div>

            {/* ===================================================== */}
            {/* AUSBILDUNG EXPANDED CONTENT                           */}
            {/* ===================================================== */}
            <div className={expandedCard === 'ausbildung' ? 'flex flex-col gap-12 sm:gap-16' : 'hidden'}>
                  
                  {/* Module 1: What is Ausbildung & Eligibility */}
                  <div className="flex flex-col gap-8">
                    
                    {/* What is Ausbildung Card */}
                    <div className="bg-card border border-card-border p-6 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Program Overview</span>
                        <h3 className="text-2xl font-bold font-display text-navy">What Is Ausbildung in Germany?</h3>
                        <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                          Ausbildung is a German vocational training or apprenticeship program that combines practical, on-the-job training with theoretical education at a vocational school (Berufsschule). It provides candidates with occupation-specific skills and practical experience directly relevant to the German job market.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-purple">During Ausbildung, candidates generally:</h4>
                          <ul className="flex flex-col gap-2.5 text-xs text-navy font-semibold">
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                              <span>Learn practical skills at an employing German company.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                              <span>Attend theoretical classes at a state vocational school (Berufsschule).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                              <span>Receive monthly training remuneration, depending on the training contract.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                              <span>Gain verified German workplace experience with high absorption rates.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                              <span>Work towards a recognised German state vocational qualification.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-purple/10 border border-purple/20 flex flex-col justify-between gap-4">
                          <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple">Dual System Rationale</span>
                            <h4 className="text-base font-bold text-navy">Why Choose Ausbildung Over Traditional Degrees?</h4>
                            <p className="text-xs text-navy-muted leading-relaxed">
                              Ausbildung offers a practical, career-focused alternative to purely academic education for individuals who prefer hands-on professional skills, financial independence during training, and direct pathways to employment in Germany.
                            </p>
                          </div>
                          <div className="p-3 bg-white dark:bg-[#020b18] rounded-xl border border-card-border text-xs flex items-center justify-between">
                            <span className="font-bold text-navy">Tuition Fees:</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold uppercase">€0 (Fully Funded)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Eligibility Requirements */}
                    <div className="bg-card border border-card-border p-6 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Candidate Criteria</span>
                        <h3 className="text-2xl font-bold font-display text-navy">Eligibility Requirements for Ausbildung</h3>
                        <p className="text-xs sm:text-sm text-navy-muted">
                          Eligibility criteria vary according to the specific occupation, employer, and individual circumstances.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <GraduationCap className="w-5 h-5 text-purple" />
                          <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Educational Qualifications</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            Completion of Class 12 is a commonly stated criterion. Certain roles consider school-leaving certificates, diplomas, or degrees.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <Clock className="w-5 h-5 text-purple" />
                          <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Age Requirements</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            Typical age ranges are 18–25 and 18–28 years. Nursing-care opportunities may consider different age criteria.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <BookOpen className="w-5 h-5 text-purple" />
                          <h4 className="text-xs font-bold text-navy uppercase tracking-wider">German Proficiency</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            B1 German is standard target; B1–B2 preferred or required for healthcare. Exams include Goethe, telc, and ÖSD.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <UserCheck className="w-5 h-5 text-purple" />
                          <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Other Considerations</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            Genuine interest in chosen trade, willingness to interview in German, document readiness, and visa criteria compliance.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Meeting preliminary eligibility criteria does not guarantee employer selection or visa approval. Applications are evaluated individually by employers and German immigration authorities.</span>
                      </div>
                    </div>

                    {/* Benefits & Remuneration */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      
                      {/* Benefits */}
                      <div className="lg:col-span-7 bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Core Value</span>
                        <h3 className="text-xl font-bold font-display text-navy">Benefits of Ausbildung in Germany</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-navy font-semibold">
                          <div className="p-3 bg-section-alt/60 rounded-xl border border-card-border flex flex-col gap-1">
                            <span className="font-bold text-purple flex items-center gap-1.5"><Euro className="w-3.5 h-3.5" /> Earn While You Learn</span>
                            <span className="text-[11px] text-navy-muted font-normal">Monthly training remuneration throughout the contract.</span>
                          </div>
                          <div className="p-3 bg-section-alt/60 rounded-xl border border-card-border flex flex-col gap-1">
                            <span className="font-bold text-purple flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Practical Experience</span>
                            <span className="text-[11px] text-navy-muted font-normal">Combine real employer workplace learning with theory.</span>
                          </div>
                          <div className="p-3 bg-section-alt/60 rounded-xl border border-card-border flex flex-col gap-1">
                            <span className="font-bold text-purple flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Recognised Qualification</span>
                            <span className="text-[11px] text-navy-muted font-normal">German state certificate recognized across Germany & EU.</span>
                          </div>
                          <div className="p-3 bg-section-alt/60 rounded-xl border border-card-border flex flex-col gap-1">
                            <span className="font-bold text-purple flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> Career Opportunities</span>
                            <span className="text-[11px] text-navy-muted font-normal">High employer absorption and direct job opportunities.</span>
                          </div>
                          <div className="p-3 bg-section-alt/60 rounded-xl border border-card-border flex flex-col gap-1">
                            <span className="font-bold text-purple flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5" /> Professional Development</span>
                            <span className="text-[11px] text-navy-muted font-normal">Exposure to German workplace standards and ethics.</span>
                          </div>
                          <div className="p-3 bg-section-alt/60 rounded-xl border border-card-border flex flex-col gap-1">
                            <span className="font-bold text-purple flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5" /> Long-Term PR Pathway</span>
                            <span className="text-[11px] text-navy-muted font-normal">Support for future permanent residence options in Germany.</span>
                          </div>
                        </div>
                      </div>

                      {/* Remuneration */}
                      <div className="lg:col-span-5 bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Financial Stipend</span>
                          <h3 className="text-xl font-bold font-display text-navy">Training Contract & Remuneration</h3>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            After selection, the employer issues an official Ausbildung contract (Ausbildungsvertrag) outlining occupation, duration, start date, and monthly remuneration.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col gap-2">
                          <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Typical Monthly Remuneration:</span>
                          <div className="text-2xl sm:text-3xl font-extrabold text-navy font-display">
                            €800 – €1,500 <span className="text-xs font-bold text-navy-muted">/ month</span>
                          </div>
                          <p className="text-[11px] text-navy-muted leading-relaxed">
                            Remuneration typically increases in each subsequent training year (Year 1 &lt; Year 2 &lt; Year 3) as you acquire more workplace competencies.
                          </p>
                        </div>

                        <div className="text-[11px] text-navy-muted border-t border-card-border pt-3">
                          * These are indicative figures. Actual remuneration depends on trade, employer, federal state, and contract terms. Confirm gross vs. net before signing.
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Module 2: 5 Vocational Sectors & Trades Explorer */}
                  <div className="flex flex-col gap-8">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Vocational Trade Explorer</span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy">5 Vocational Sectors & 24 Featured Trades</h3>
                        <p className="text-xs sm:text-sm text-navy-muted mt-1">
                          Select your preferred industry below to view available occupations, German titles, language requirements, and training details.
                        </p>
                      </div>

                      <div className="text-xs font-bold text-purple bg-purple/10 px-3.5 py-1.5 rounded-full border border-purple/20 w-fit">
                        {selectedOccupationCat === 'all' ? 'Showing All 24 Trades' : `Filtering by: ${ausbildungCategories.find(c => c.id === selectedOccupationCat)?.categoryName.split(',')[0]}`}
                      </div>
                    </div>

                    {/* 5-Sector Selector Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setSelectedOccupationCat('all')}
                        className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                          selectedOccupationCat === 'all'
                            ? 'bg-purple text-white shadow-md border-purple'
                            : 'bg-card border-card-border hover:border-purple/40 text-navy'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Globe2 className="w-4 h-4" />
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${selectedOccupationCat === 'all' ? 'bg-white/20 text-white' : 'bg-section-alt text-purple'}`}>24</span>
                        </div>
                        <span className="text-xs font-bold">All Fields</span>
                      </button>

                      {ausbildungCategories.map((cat) => {
                        const IconComp = cat.icon;
                        const isSelected = selectedOccupationCat === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedOccupationCat(cat.id)}
                            className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-purple text-white shadow-md border-purple'
                                : 'bg-card border-card-border hover:border-purple/40 text-navy'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <IconComp className="w-4 h-4" />
                              <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-section-alt text-purple'}`}>
                                {cat.trades.length}
                              </span>
                            </div>
                            <span className="text-xs font-bold leading-tight">{cat.categoryName.split(',')[0].split('&')[0]}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Trades Display Grid */}
                    <div className="flex flex-col gap-8">
                      {ausbildungCategories
                        .filter(c => selectedOccupationCat === 'all' || selectedOccupationCat === c.id)
                        .map((cat) => {
                          const IconComp = cat.icon;
                          return (
                            <div
                              key={cat.id}
                              className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border shadow-sm flex flex-col gap-6"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-card-border pb-4">
                                <div className="flex items-center gap-3">
                                  <div className={`p-2.5 rounded-xl border ${cat.accent}`}>
                                    <IconComp className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-bold font-display text-navy">{cat.categoryName}</h4>
                                    <span className="text-xs text-purple font-medium italic">{cat.germanCategory}</span>
                                  </div>
                                </div>
                                <span className="text-xs text-navy-muted max-w-sm">{cat.description}</span>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cat.trades.map((trade, tIdx) => (
                                  <div
                                    key={tIdx}
                                    className="p-5 rounded-2xl bg-section-alt/60 border border-card-border flex flex-col justify-between gap-3 hover-lift shadow-xs"
                                  >
                                    <div className="flex flex-col gap-1.5">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple/10 text-purple border border-purple/20">
                                          {trade.duration}
                                        </span>
                                        <span className="text-[10px] font-bold text-navy-muted">
                                          {trade.minLanguage}
                                        </span>
                                      </div>
                                      <h5 className="text-sm font-bold text-navy mt-1">{trade.title}</h5>
                                      <span className="text-xs text-purple italic font-medium">{trade.germanTitle}</span>
                                    </div>
                                    
                                    <p className="text-[11px] text-navy-muted leading-relaxed border-t border-card-border/60 pt-2.5">
                                      {trade.note}
                                    </p>

                                    <a
                                      href={`https://wa.me/919217999511?text=Hi%20TGLA,%20I%20am%20interested%20in%20Ausbildung%20in%20Germany%20for%20${encodeURIComponent(trade.title)}%20(${encodeURIComponent(trade.germanTitle)}).`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[11px] font-bold text-purple hover:text-purple-hover flex items-center gap-1.5 mt-1 pt-2 border-t border-card-border/40"
                                    >
                                      <span>Inquire About This Trade</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    <div className="p-4 rounded-2xl bg-section-alt border border-card-border text-center text-xs text-navy-muted">
                      Availability, educational requirements, and German-language targets differ across occupations. Healthcare roles generally require B2 German, while technical and logistics roles may consider strong B1 candidates.
                    </div>

                  </div>

                  {/* Module 3: 10-Stage Process Roadmap */}
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple">Step-by-Step Flow</span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy">How Ausbildung Works — 10-Stage Process</h3>
                      <p className="text-xs sm:text-sm text-navy-muted">
                        The Ausbildung journey involves these sequential milestones from initial profile assessment to landing in Germany.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ausbildungRoadmap.map((stage, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-5 rounded-2xl bg-card border border-card-border flex items-start gap-4 hover-lift shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-xl bg-purple text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                            {stage.step}
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Stage {stage.step}</span>
                            <h4 className="text-sm font-bold font-display text-navy">{stage.title}</h4>
                            <p className="text-xs text-navy-muted leading-relaxed">{stage.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>The exact sequence and requirements can vary by occupation and employer. An employer offer or training contract does not guarantee visa approval, which is decided by the German Embassy.</span>
                    </div>
                  </div>

                  {/* Module 4: Language & Interview Preparation */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* German Language Preparation */}
                    <div className="bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Language Competency</span>
                        <h3 className="text-xl font-bold font-display text-navy">German Language Preparation</h3>
                        <p className="text-xs text-navy-muted leading-relaxed">
                          Language proficiency is essential for daily communication, employer interviews, vocational school instruction, and workplace safety.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <span className="font-bold text-purple text-sm">Target Language Levels:</span>
                          <div className="grid grid-cols-2 gap-2 text-navy font-semibold">
                            <div className="p-2.5 bg-card rounded-xl border border-card-border">
                              <span className="block text-purple font-bold">B1 Level</span>
                              <span className="text-[10px] text-navy-muted">Baseline minimum target for technical & logistics tracks.</span>
                            </div>
                            <div className="p-2.5 bg-card rounded-xl border border-card-border">
                              <span className="block text-purple font-bold">B2 Level</span>
                              <span className="text-[10px] text-navy-muted">Required or preferred for healthcare & hospitality.</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <span className="font-bold text-navy">Progressive Milestone Preparation:</span>
                          <p className="text-navy-muted leading-relaxed">
                            TGLA structures language training through progressive levels (A1 → A2 → B1 → B2) to build communicative confidence alongside grammar foundations.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-1">
                          <span className="font-bold text-navy">Recognised Certification Bodies:</span>
                          <span className="text-navy-muted">Goethe-Institut, telc, and ÖSD certificates are officially recognized by German consulates.</span>
                        </div>
                      </div>

                      <Link
                        href="/courses/german-language"
                        className="mt-auto py-3 px-5 rounded-xl bg-purple text-white text-xs font-bold text-center hover:bg-purple-hover transition-colors"
                      >
                        Explore TGLA German Batches
                      </Link>
                    </div>

                    {/* Employer Search & Interview Prep */}
                    <div className="bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-5">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Application & Coaching</span>
                        <h3 className="text-xl font-bold font-display text-navy">Application Dossier & Interview Prep</h3>
                        <p className="text-xs text-navy-muted leading-relaxed">
                          Support in finding opportunities and preparing a compliant application file for German employers.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <span className="font-bold text-purple text-sm">German Application Portfolio:</span>
                          <ul className="flex flex-col gap-1.5 text-navy-muted">
                            <li className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-purple shrink-0" />
                              <span>Standardized German-format CV (Tabellarischer Lebenslauf)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-purple shrink-0" />
                              <span>Tailored Statement of Motivation (Anschreiben)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-purple shrink-0" />
                              <span>Organizing certified academic transcripts and translated records</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-2">
                          <span className="font-bold text-navy">Interview Coaching & Preparation:</span>
                          <p className="text-navy-muted leading-relaxed">
                            Most employers conduct virtual video interviews. Candidates receive mock interview coaching covering common German interview questions, vocational motivation, and professional etiquette.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple/10 border border-purple/20 text-xs text-purple font-semibold mt-auto">
                        Employer selection depends on the candidate&apos;s qualifications, language skills, interview performance, and available vacancies.
                      </div>
                    </div>

                  </div>

                  {/* Module 5: Document Checklist & Costs */}
                  <div className="flex flex-col gap-8">
                    
                    {/* Documents Required Checklist */}
                    <div className="bg-card border border-card-border p-6 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple">Compliance File</span>
                          <h3 className="text-2xl font-bold font-display text-navy">Documents Required for Ausbildung Application</h3>
                          <p className="text-xs sm:text-sm text-navy-muted">
                            Complete checklist of personal, academic, language, employer, and financial records needed for the process.
                          </p>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto">
                          <button
                            type="button"
                            onClick={() => setSelectedDocCategory('all')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedDocCategory === 'all'
                                ? 'bg-purple text-white shadow-sm'
                                : 'bg-section-alt text-navy-muted hover:text-navy'
                            }`}
                          >
                            All Documents
                          </button>
                          {documentChecklist.map((c) => (
                            <button
                              key={c.category}
                              type="button"
                              onClick={() => setSelectedDocCategory(c.category)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                                selectedDocCategory === c.category
                                  ? 'bg-purple text-white shadow-sm'
                                  : 'bg-section-alt text-navy-muted hover:text-navy'
                              }`}
                            >
                              {c.label.split(' ')[0]}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {documentChecklist
                          .filter(c => selectedDocCategory === 'all' || selectedDocCategory === c.category)
                          .map((catGroup, gIdx) => (
                            <div
                              key={gIdx}
                              className="p-5 rounded-2xl bg-section-alt/60 border border-card-border flex flex-col gap-3"
                            >
                              <span className="text-xs font-extrabold uppercase tracking-wider text-purple">
                                {catGroup.label}
                              </span>
                              <ul className="flex flex-col gap-2 text-xs text-navy font-medium">
                                {catGroup.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Cost Guide & Financial Transparency */}
                    <div className="bg-card border border-card-border p-6 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">Transparency</span>
                        <h3 className="text-2xl font-bold font-display text-navy">Costs Involved & Financial Considerations</h3>
                        <p className="text-xs sm:text-sm text-navy-muted">
                          Clear, upfront overview of pre-departure and administrative expenses.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl bg-section-alt/60 border border-card-border flex flex-col gap-1 text-xs">
                          <span className="font-bold text-navy">German Language Training</span>
                          <span className="text-navy-muted">Course fees for Level A1 to B2 tuition and certified exams.</span>
                        </div>
                        <div className="p-4 rounded-xl bg-section-alt/60 border border-card-border flex flex-col gap-1 text-xs">
                          <span className="font-bold text-navy">Visa Application Fees</span>
                          <span className="text-navy-muted">Official German national visa processing fee (approx. €75).</span>
                        </div>
                        <div className="p-4 rounded-xl bg-section-alt/60 border border-card-border flex flex-col gap-1 text-xs">
                          <span className="font-bold text-navy">Travel & Relocation</span>
                          <span className="text-navy-muted">Initial travel health insurance and rental security deposits.</span>
                        </div>
                        <div className="p-4 rounded-xl bg-section-alt/60 border border-card-border flex flex-col gap-1 text-xs">
                          <span className="font-bold text-navy">Translations & Apostille</span>
                          <span className="text-navy-muted">Certified German translation and attestation of academic records.</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-section-alt border border-card-border flex flex-col gap-1.5 text-xs">
                        <span className="font-bold text-purple">Financial Proof & Blocked-Account Clarification:</span>
                        <p className="text-navy-muted leading-relaxed">
                          Financial requirements depend on the applicable visa rules, remuneration in the contract, and personal circumstances. Candidates should not assume that financial proof or a blocked account is never required. If monthly stipend is below embassy benchmarks, supplementary financial proof or a partial blocked account may be requested.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Module 6: TGLA 4-Phase Support & PR Pathway */}
                  <div className="flex flex-col gap-8">
                    
                    {/* Candidate Support Services (4 Phases) */}
                    <div className="bg-card border border-card-border p-6 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple">TGLA Roadmap</span>
                        <h3 className="text-2xl font-bold font-display text-navy">TGLA 4-Phase Candidate Support Services</h3>
                        <p className="text-xs sm:text-sm text-navy-muted">
                          Comprehensive end-to-end support throughout your entire vocational journey.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Phase 01</span>
                            <Compass className="w-4 h-4 text-purple" />
                          </div>
                          <h4 className="text-sm font-bold text-navy">Initial Profile Assessment & Counseling</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            Evaluating educational background, language level, occupational goals, and setting a realistic preparation roadmap.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Phase 02</span>
                            <BookOpen className="w-4 h-4 text-purple" />
                          </div>
                          <h4 className="text-sm font-bold text-navy">Language Training & Application Preparation</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            German language coaching (A1–B2), Lebenslauf formatting, tailored motivation letters, and mock interview coaching.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Phase 03</span>
                            <FileCheck2 className="w-4 h-4 text-purple" />
                          </div>
                          <h4 className="text-sm font-bold text-navy">Application Guidance & Employer Matching</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            Searching suitable vacancies, reviewing documents, tracking applications, and scheduling employer video interviews.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-section-alt/70 border border-card-border flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Phase 04</span>
                            <Plane className="w-4 h-4 text-purple" />
                          </div>
                          <h4 className="text-sm font-bold text-navy">Visa Filing, Pre-Departure & Post-Arrival</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            National D visa checklist organization, embassy appointment booking, pre-departure briefing, and initial German settlement advice.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-section-alt rounded-xl border border-card-border text-center text-xs text-navy-muted">
                        Transparent communication is maintained throughout the process. TGLA acts as an educational and advisory partner.
                      </div>
                    </div>

                    {/* Timelines & Opportunities After Completion */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      
                      {/* Timelines */}
                      <div className="lg:col-span-6 bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between gap-5">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple">Program Timelines</span>
                          <h3 className="text-xl font-bold font-display text-navy">Processing Timelines</h3>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            The overall process duration depends on current language proficiency, learning pace, application cycles, and embassy visa processing speeds.
                          </p>
                        </div>

                        <div className="flex flex-col gap-3 text-xs">
                          <div className="p-3.5 bg-section-alt/70 rounded-xl border border-card-border flex items-center justify-between">
                            <span className="font-semibold text-navy">Language Training (A1 → B2):</span>
                            <span className="font-bold text-purple">6 to 12 Months</span>
                          </div>
                          <div className="p-3.5 bg-section-alt/70 rounded-xl border border-card-border flex items-center justify-between">
                            <span className="font-semibold text-navy">Employer Search & Contract Signing:</span>
                            <span className="font-bold text-purple">2 to 4 Months</span>
                          </div>
                          <div className="p-3.5 bg-section-alt/70 rounded-xl border border-card-border flex items-center justify-between">
                            <span className="font-semibold text-navy">German Visa Processing (Embassy):</span>
                            <span className="font-bold text-purple">4 to 12 Weeks</span>
                          </div>
                        </div>

                        <div className="p-3 bg-purple/10 rounded-xl border border-purple/20 text-[11px] text-purple">
                          Candidates are advised to plan applications well ahead of typical German intake seasons (August/September and February/March).
                        </div>
                      </div>

                      {/* Opportunities After Completion */}
                      <div className="lg:col-span-6 bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between gap-5">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Post-Training Outlook</span>
                          <h3 className="text-xl font-bold font-display text-navy">Career After Ausbildung & PR</h3>
                          <p className="text-xs text-navy-muted leading-relaxed">
                            Completing an Ausbildung opens direct career pathways in the German labor market where skilled professionals are actively sought.
                          </p>
                        </div>

                        <ul className="flex flex-col gap-2 text-xs text-navy font-semibold">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                            <span>High employer retention (many trainees absorbed directly into full-time roles)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                            <span>Average starting skilled salaries ranging from €2,500 to €3,500+ gross/month</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                            <span>Eligibility for German Permanent Residence (Niederlassungserlaubnis) after 2 years of skilled work</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                            <span>Options for advanced certifications (Meister, Techniker) or higher academic degrees</span>
                          </li>
                        </ul>

                        <div className="p-3 bg-purple/10 border border-purple/20 rounded-xl text-xs font-bold text-purple text-center">
                          Build Long-Term Professional Stability in Germany
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Bottom Shrink & Navigation Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-section-alt border border-card-border mt-4">
                    <div className="flex flex-col gap-1 text-center sm:text-left">
                      <h4 className="text-base font-bold text-navy">Done Exploring Ausbildung in Germany?</h4>
                      <p className="text-xs text-navy-muted">You can shrink this card back to the 2-service overview or explore Visa Assistance.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleShrinkCard}
                        className="py-3 px-5 rounded-xl bg-purple text-white hover:bg-purple-hover text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                      >
                        <Minimize2 className="w-4 h-4" />
                        <span>Shrink Card &amp; Return to Overview</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleExpandCard('visa')}
                        className="py-3 px-5 rounded-xl bg-card border border-card-border hover:border-blue-500/40 text-navy text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Explore Visa Details →</span>
                      </button>
                    </div>
                  </div>

                </div>

              {/* ===================================================== */}
              {/* VISA EXPANDED CONTENT                                 */}
              {/* ===================================================== */}
              <div className={expandedCard === 'visa' ? 'flex flex-col gap-12 sm:gap-16' : 'hidden'}>
                  
                  {/* Header Block */}
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-card-border/80">
                    <div className="flex flex-col gap-2 max-w-3xl">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
                          Procedural Excellence
                        </span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                          High Visa Clearance Rate
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
                        Visa Assistance & Documentation Advisory
                      </h3>
                      <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
                        End-to-end guidance for German student visas, Ausbildung visas, Opportunity Card (Chancenkarte), and global study permits across the UK, Canada, Australia, and Europe.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md hover:scale-102 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Book Visa Consultation</span>
                      </Link>
                    </div>
                  </div>

                  {/* Visa Categories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visaSupportAreas.map((visa, vIdx) => (
                      <div
                        key={vIdx}
                        className="p-6 rounded-3xl bg-card border border-card-border shadow-sm hover-lift flex flex-col justify-between gap-4"
                      >
                        <div className="flex flex-col gap-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                              {visa.badge}
                            </span>
                            <BadgeCheck className="w-4 h-4 text-blue-500" />
                          </div>
                          <h4 className="text-base font-bold font-display text-navy">{visa.title}</h4>
                          <p className="text-xs text-navy-muted leading-relaxed">{visa.desc}</p>
                        </div>

                        <div className="pt-3 border-t border-card-border/60 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-navy-muted font-medium">Standard Compliance File</span>
                          <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1">
                            <span>Inquire</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    ))}

                    {/* Value Pillar Card */}
                    <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 flex flex-col justify-between gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">Core Advisory Quality</span>
                        <h4 className="text-base font-bold font-display text-navy">Why TGLA Visa Guidance?</h4>
                        <ul className="flex flex-col gap-2 text-xs text-navy font-semibold mt-1">
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Meticulous embassy checklist compliance</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Statement of Purpose (SOP) drafting guidance</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Consulate-grade mock interview simulation</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-3 bg-white dark:bg-[#020b18] rounded-xl border border-blue-200 dark:border-blue-900/40 text-center text-xs font-bold text-blue-600 dark:text-blue-400">
                        Transparent &amp; Realistic Advice
                      </div>
                    </div>
                  </div>

                  {/* Bottom Shrink & Navigation Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-section-alt border border-card-border mt-4">
                    <div className="flex flex-col gap-1 text-center sm:text-left">
                      <h4 className="text-base font-bold text-navy">Done Exploring Visa Advisory?</h4>
                      <p className="text-xs text-navy-muted">You can shrink this card back to the 2-service overview or explore Ausbildung.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleShrinkCard}
                        className="py-3 px-5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                      >
                        <Minimize2 className="w-4 h-4" />
                        <span>Shrink Card &amp; Return to Overview</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleExpandCard('ausbildung')}
                        className="py-3 px-5 rounded-xl bg-card border border-card-border hover:border-purple/40 text-navy text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Explore Ausbildung Details →</span>
                      </button>
                    </div>
                  </div>

                </div>
            </div>
          </div>

        </section>

      {/* ========================================================= */}
      {/* 4. 5-STEP GENERAL ADVISORY PROCESS                        */}
      {/* ========================================================= */}
      <section id="process-suite" className="bg-[#F8FAFC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Step-by-Step Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Our 5-Step Advisory &amp; Preparation Process
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              A structured roadmap ensuring clarity, procedural confidence, and documentation readiness at every step.
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
      {/* 5. FAQS ON SERVICES                                       */}
      {/* ========================================================= */}
      <section id="faq-suite" className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
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
      {/* 6. FINAL CTA CONTAINER                                    */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-[#00122E] via-[#160824] to-[#4B245E] text-white p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,18,46,0.35)] border border-white/15 overflow-hidden text-center flex flex-col items-center gap-6">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple/30 border border-purple-300/30 rounded-full text-xs font-semibold text-purple-200">
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Start Your Global Journey With TGLA</span>
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
