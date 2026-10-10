import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Award,
  CheckCircle,
  CheckCircle2,
  Check,
  GraduationCap,
  Briefcase,
  Building2,
  Globe2,
  Layers,
  Headphones,
  Laptop,
  Compass,
  HelpCircle,
  Sparkles,
  Clock,
  Users,
  Target,
  ExternalLink,
  Navigation,
  CalendarCheck
} from 'lucide-react';
import { coursesList, testimonialsList } from '@/data/courses-db';
import { homeFaqsList } from '@/data/home-faqs';
import LeadForm from '@/features/lead-capture/components/LeadForm';
import CountUp from '@/components/CountUp';
import CoursesSlider from '@/components/home/CoursesSlider';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import FAQAccordion from '@/components/FAQAccordion';
import GallerySection from '@/components/layout/GallerySection';
import HeroBackgroundVideo from '@/components/home/HeroBackgroundVideo';

export default function HomePage() {
  // Section 2: Quick Trust / Statistics with 3D Graphic Assets
  const trustStats = [
    {
      end: 7000,
      suffix: "+",
      label: "Students Trained",
      subtext: "Across 15+ Global Batches",
      decimals: 0,
      image: "/images/assets/stat-graduation-cap.webp",
      alt: "Graduation Cap 3D Icon - 7,000+ Students Trained"
    },
    {
      end: 6,
      suffix: "+",
      label: "Years of Excellence",
      subtext: "Established Pedagogy",
      decimals: 0,
      image: "/images/assets/stat-excellence-shield.webp",
      alt: "Golden Shield 3D Icon - 6+ Years of Excellence"
    },
    {
      end: 3000,
      suffix: "+",
      label: "Internationally Certified",
      subtext: "Goethe, TELC, DELF, IELTS",
      decimals: 0,
      image: "/images/assets/stat-certified-scroll.webp",
      alt: "Certified Diploma Scroll 3D Icon - 3,000+ Certified"
    },
    {
      end: 90,
      suffix: "%+",
      label: "Exam & Career Success Rate",
      subtext: "First Attempt Clearance",
      decimals: 0,
      image: "/images/assets/stat-success-rocket.webp",
      alt: "Success Rocket 3D Icon - 90%+ Success Rate"
    }
  ];

  // Section 5: Why Learn With TGLA (6 Cards)
  const whyLearnCards = [
    {
      icon: Award,
      title: "Expert Trainers",
      description: "Experienced trainers focused on practical and effective learning.",
      tag: "Certified Faculty"
    },
    {
      icon: Layers,
      title: "Structured Learning",
      description: "Level-wise courses designed for progressive development.",
      tag: "CEFR Framework"
    },
    {
      icon: Headphones,
      title: "Practical Communication",
      description: "Focus on speaking, listening, reading and writing.",
      tag: "Active Immersion"
    },
    {
      icon: Laptop,
      title: "Flexible Learning",
      description: "Online and offline learning options with flexible batches.",
      tag: "Hybrid Batches"
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Preparation for recognised language and English proficiency examinations.",
      tag: "100% Mock Drills"
    },
    {
      icon: Compass,
      title: "Career-Focused Guidance",
      description: "Guidance for study, work and global career opportunities.",
      tag: "Visa & Job Advisory"
    }
  ];

  // Section 6: Global Opportunities (4 Cards)
  const globalOpportunityCards = [
    {
      icon: GraduationCap,
      title: "Study Abroad",
      pathway: "International Degrees",
      description: "Build the language skills and score metrics required for international education.",
      link: "/courses"
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      pathway: "Global Workplaces",
      description: "Develop communication skills for global career opportunities and corporate growth.",
      link: "/services"
    },
    {
      icon: Building2,
      title: "Ausbildung",
      pathway: "Vocational Germany",
      description: "Explore vocational training opportunities with monthly stipends in Germany.",
      link: "/courses/german-language"
    },
    {
      icon: Globe2,
      title: "Global Exposure",
      pathway: "Cross-Cultural Fluency",
      description: "Prepare yourself to communicate confidently across diverse cultures, multinational teams, and international environments.",
      link: "/courses/spoken-english"
    }
  ];

  // Dynamic Homepage FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqsList.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16] transition-colors duration-300">
      
      {/* Homepage FAQ Rich Schema */}
      <script
        id="home-faq-schema"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO BANNER & FORM                             */}
      {/* ========================================================= */}
      <section className="relative bg-[#00122E] dark:bg-[#020c1b] text-white overflow-hidden py-12 lg:py-24 border-b border-card-border transition-colors duration-300">
        
        {/* Dynamic Background Video with non-blocking load & high-contrast overlay */}
        <HeroBackgroundVideo />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Value Prop & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-in-up [animation-delay:100ms] fill-mode-forwards">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple/25 border border-purple-300/35 rounded-full text-xs font-semibold text-purple-200 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-purple-200 shrink-0" />
                  <span>ISO 9001:2015 Certified Global Language Academy</span>
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm shadow-sm">
                  <Image
                    src="/images/assets/hero-rating-pill.webp"
                    alt="5 Star Rating Trust Badge - The Global Language Academy"
                    width={100}
                    height={43}
                    priority
                    className="h-4 w-auto object-contain"
                  />
                  <span className="text-[11px] font-bold text-amber-300">4.9/5 Rating</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] animate-fade-in-up [animation-delay:200ms] fill-mode-forwards">
                Master World Languages. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white drop-shadow-sm">
                  Unlock Global Careers & Visas.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] animate-fade-in-up [animation-delay:300ms] fill-mode-forwards">
                Overcome test anxiety and score higher on your first attempt. Join premium online or offline batches led by Goethe-Institut, British Council & IDP certified mentors.
              </p>

              {/* Core Features Checklist */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-3 mt-1 mx-auto w-fit lg:mx-0 text-xs sm:text-sm animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Max 5-7 students <span className="hidden sm:inline">per batch</span></span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Goethe & IDP <span className="hidden sm:inline">certified</span> trainers</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Weekly Exam <span className="hidden sm:inline">Simulations</span></span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="p-0.5 rounded-full bg-purple/35 text-purple-200 border border-purple-300/25 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Study & Visa <span className="hidden sm:inline">Advisory</span></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-3 animate-fade-in-up [animation-delay:500ms] fill-mode-forwards">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple to-purple-hover hover:from-purple-hover hover:to-purple text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#hero-lead-form"
                  className="inline-flex lg:hidden items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer border border-transparent"
                >
                  <span className="text-slate-950 font-bold">Book Free Demo Class</span>
                </a>
                <a
                  href="https://wa.me/919217999511?text=Hi!%20I'm%20interested%20in%20a%20free%20demo%20at%20The%20Global%20Language%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md hover:opacity-95 hover:scale-102 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Social Proof Enrolled Learners */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-1 animate-fade-in-up [animation-delay:550ms] fill-mode-forwards">
                <Image
                  src="/images/assets/hero-student-avatars.webp"
                  alt="Recent enrolled learners community - The Global Language Academy"
                  width={130}
                  height={43}
                  priority
                  className="h-8 w-auto object-contain drop-shadow-sm"
                />
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1 text-amber-400 text-xs leading-none">
                    <span className="text-amber-400">★★★★★</span>
                    <span className="text-white font-bold text-xs ml-1">4.9/5</span>
                  </div>
                  <span className="text-[11px] text-slate-300 mt-0.5">Joined by 7,000+ Enrolled Learners</span>
                </div>
              </div>

              {/* Official Partners Banner */}
              <div className="pt-5 border-t border-slate-700/60 mt-2 animate-fade-in-up [animation-delay:600ms] fill-mode-forwards">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block mb-3">
                  Official Preparation Standards
                </span>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-7 text-xs font-bold text-slate-400">
                  <span className="hover:text-white transition-colors duration-200">BRITISH COUNCIL</span>
                  <span className="hover:text-white transition-colors duration-200">IDP EDUCATION</span>
                  <span className="hover:text-white transition-colors duration-200">GOETHE-INSTITUT</span>
                  <span className="hover:text-white transition-colors duration-200">PEARSON PTE</span>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form */}
            <div id="hero-lead-form" className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none animate-fade-in-up [animation-delay:350ms] fill-mode-forwards scroll-mt-24">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)] animate-glow-pulse">
                <LeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: QUICK TRUST / STATISTICS                       */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-12 sm:py-16 transition-colors duration-300 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {trustStats.map((stat, idx) => (
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
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
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
      {/* SECTION 3: COURSE / PROGRAM DETAILS (SLIDER FORMAT)       */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-20 lg:py-24 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoursesSlider courses={coursesList} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: GUARANTEE EXAM & SUCCESS                       */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-20 lg:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center p-1 shrink-0 shadow-sm">
                  <Image
                    src="/images/assets/exam-assurance-badge.webp"
                    alt="100% Exam Pass Assurance Seal - The Global Language Academy"
                    width={44}
                    height={44}
                    loading="lazy"
                    className="w-9 h-9 object-contain drop-shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                    Proven Exam Pedagogy
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    Official Exam Clearance Standards
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
                How We Guarantee Exam & Career Success
              </h2>
              <p className="text-sm text-navy-muted leading-relaxed">
                Traditional classrooms rely on generic lectures. GLA pioneers an interactive, score-driven methodology tracking your weekly diagnostic milestones.
              </p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 hover:translate-x-1.5 transition-transform duration-200">
                  <span className="p-1.5 rounded-xl bg-purple/10 text-purple shrink-0 mt-0.5 border border-purple/20">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Small Batches (Max 5-7 Students)</h4>
                    <p className="text-xs text-navy-muted">Guarantees individualized written essay reviews and daily speaking time.</p>
                  </div>
                </li>
                <li className="flex gap-3 hover:translate-x-1.5 transition-transform duration-200">
                  <span className="p-1.5 rounded-xl bg-purple/10 text-purple shrink-0 mt-0.5 border border-purple/20">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Weekly Diagnostic Mock Exams</h4>
                    <p className="text-xs text-navy-muted">Replicates real IDP, British Council, and Goethe-Institut testing settings under strict time limits.</p>
                  </div>
                </li>
                <li className="flex gap-3 hover:translate-x-1.5 transition-transform duration-200">
                  <span className="p-1.5 rounded-xl bg-purple/10 text-purple shrink-0 mt-0.5 border border-purple/20">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Level-Wise Milestone Progression</h4>
                    <p className="text-xs text-navy-muted">Clear transition milestones from A1 to C2, giving you 100% confidence before booking official exam dates.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Visual Roadmap Column */}
            <div className="lg:col-span-7 bg-[#F6F8FC] dark:bg-[#0B1A2E] border border-card-border p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-lg sm:text-xl font-extrabold font-display text-navy mb-8">
                Your 3-Phase Student Progress Roadmap
              </h3>
              
              <div className="flex flex-col gap-8 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-card-border">
                
                {/* Step 1 */}
                <div className="flex gap-5 relative z-10 group">
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold text-sm shrink-0 border border-purple shadow-sm group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy group-hover:text-purple transition-colors">
                      Diagnostic Baseline Assessment
                    </h4>
                    <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                      We evaluate your grammar, vocabulary baseline, and current speaking accent metrics before assigning your custom study roadmap.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5 relative z-10 group">
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold text-sm shrink-0 border border-purple shadow-sm group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy group-hover:text-purple transition-colors">
                      Interactive Skill Immersion & Daily Corrections
                    </h4>
                    <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                      Participate in active dialogues, structured essay drafting templates, and real-time pronunciation refinement.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5 relative z-10 group">
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold text-sm shrink-0 border border-purple shadow-sm group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-sm font-bold text-navy group-hover:text-purple transition-colors">
                        Real-Exam Simulator Test Series
                      </h4>
                      <Image
                        src="/images/assets/roadmap-scorecard-medal.webp"
                        alt="Target Scorecard Achievement Medal"
                        width={30}
                        height={31}
                        loading="lazy"
                        className="w-7 h-7 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 drop-shadow-sm shrink-0"
                      />
                    </div>
                    <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                      Complete 8+ full-length, examiner-graded mock exams under timed conditions to guarantee your target score before official booking.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: WHY LEARN WITH TGLA? (6 CARDS)                 */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-20 lg:py-24 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Why Choose GLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Why Learn With TGLA?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              We combine accredited exam instructors, small batch sizes, and practical communication to deliver unmatched learning outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyLearnCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="group bg-card border border-card-border hover:border-purple/50 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_20px_45px_rgba(75,36,94,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-5 relative overflow-hidden"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple group-hover:border-purple transition-all duration-300 shadow-sm shrink-0">
                        <IconComponent className="w-6 h-6 text-purple group-hover:text-white transition-colors duration-300 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-bold text-navy-muted/60 group-hover:text-purple transition-colors font-mono">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-extrabold font-display text-navy tracking-tight group-hover:text-purple transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-card-border/60 flex items-center">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-purple bg-purple/5 px-2.5 py-1 rounded-md border border-purple/15">
                      <CheckCircle2 className="w-3 h-3 text-purple" />
                      {card.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: GLOBAL OPPORTUNITIES SECTION                   */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300">
        
        {/* Background Gradient Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Beyond Just Language
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy tracking-tight">
              Learn a Language. Unlock a World of Opportunities.
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Language skills can be the first step toward studying abroad, building an international career, pursuing vocational training or communicating confidently in a global environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {globalOpportunityCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="group bg-card border border-card-border hover:border-purple/50 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_20px_45px_rgba(75,36,94,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full gap-5"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-purple group-hover:border-purple transition-all duration-300 shadow-sm shrink-0">
                      <IconComponent className="w-7 h-7 text-purple group-hover:text-white transition-colors duration-300 stroke-[2.2]" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold text-purple uppercase tracking-wider">
                        {card.pathway}
                      </span>
                      <h3 className="text-xl font-extrabold font-display text-navy tracking-tight group-hover:text-purple transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-muted leading-relaxed mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple group-hover:text-purple-hover mt-auto pt-4 border-t border-card-border transition-colors"
                  >
                    <span>Explore Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Global Section CTA */}
          <div className="text-center mt-12 sm:mt-14">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-purple to-purple-hover hover:from-purple-hover hover:to-purple text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl hover:scale-102 transition-all cursor-pointer border border-white/20"
            >
              <span>Explore Global Opportunities</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* ========================================================= */}
      {/* SECTION 7: STUDENT SUCCESS / TESTIMONIALS (SLIDER)        */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-20 lg:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSlider testimonials={testimonialsList} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: FAQ SECTION                                    */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-20 lg:py-24 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Find answers to the most common questions about our courses, certifications, batch timings, and Germany advisory.
            </p>
          </div>

          {/* Interactive Accordion */}
          <FAQAccordion faqs={homeFaqsList} />

          {/* Direct Academic Advisory Card */}
          <div className="mt-12 bg-card border border-card-border p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_14px_35px_rgba(75,36,94,0.08)] transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 sm:gap-7">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-purple/10 border-2 border-purple/30 shrink-0 shadow-sm">
              <Image
                src="/images/assets/counselor-portrait.webp"
                alt="The Global Language Academy Academic Advisor"
                width={80}
                height={80}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left flex flex-col gap-1">
              <span className="text-xs font-bold text-purple uppercase tracking-wider">
                Direct Academic Support
              </span>
              <h3 className="text-base sm:text-lg font-extrabold font-display text-navy">
                Have specific questions about course levels or exam slots?
              </h3>
              <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                Our certified language counselors in Dwarka are ready to assist you with batch schedules, fees, and visa advisory.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/919217999511?text=Hi!%20I'm%20looking%20for%20guidance%20on%20language%20courses%20at%20The%20Global%20Language%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-sm hover:scale-102 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat with Advisor</span>
              </a>
              <a
                href="tel:+919217999511"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple/10 hover:bg-purple/20 text-purple border border-purple/20 font-bold text-xs rounded-xl transition-all w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FINAL CTA & CAMPUS LOCATION (DISTINCT CONTAINER) */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Distinct Floating CTA Container that visually separates from the footer */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#00122E] via-[#160824] to-[#4B245E] text-white p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,18,46,0.35)] border border-white/15 overflow-hidden">
            
            {/* Ambient Background Glows inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Final Call to Action */}
              <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple/30 border border-purple-300/30 rounded-full text-xs font-semibold text-purple-200 w-fit mx-auto lg:mx-0">
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span>Start Your Global Journey Today</span>
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                  Your Global Journey Starts With the Right Skills.
                </h2>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Choose your course, speak with our counsellors and take the first step toward your global goals.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-xl shadow-md hover:scale-102 transition-all cursor-pointer border border-transparent"
                  >
                    <Phone className="w-4 h-4 text-purple-700" />
                    <span className="text-slate-950 font-bold">Talk to a Counsellor</span>
                  </Link>
                </div>

                {/* Contact numbers */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                  <span>Direct Helpline:</span>
                  <a href="tel:+919217999511" className="font-bold text-white hover:text-purple-300 transition-colors">
                    +91 92179 99511
                  </a>
                  <span>|</span>
                  <a href="tel:+919217669511" className="font-bold text-white hover:text-purple-300 transition-colors">
                    +91 92176 69511
                  </a>
                </div>
              </div>

              {/* Right Column: Google Maps Embed & Location Card */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                
                {/* Physical Location Detail Card */}
                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 text-white shadow-sm flex items-start gap-3.5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple/30 border border-purple-300/30 shrink-0 flex items-center justify-center p-1 overflow-hidden">
                    <Image
                      src="/images/assets/metro-location-pin.webp"
                      alt="Dwarka Sector 12 Metro Station Landmark Pin - The Global Language Academy"
                      width={56}
                      height={58}
                      loading="lazy"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm sm:text-base font-extrabold font-display text-white">
                        Campus Location & Advisory Hub
                      </h4>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-bold">
                        Opp. Metro Sector 12
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      3rd Floor, Plot no 94, PKT-10, Dwarka Sector 12, Opposite Metro Station (Near Radisson Blu Hotel), New Delhi 110078
                    </p>
                  </div>
                </div>

                {/* Map frame */}
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-slate-900">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35068.13912469187!2d77.030589!3d28.594833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3c8edb5021%3A0xa58f068e97394567!2sThe%20Global%20Language%20Academy!5e1!3m2!1sen!2sin!4v1786024730032!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Global Language Academy Location Map"
                    className="w-full h-full"
                  ></iframe>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

