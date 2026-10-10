import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Target,
  Users,
  Award,
  Eye,
  Compass,
  Quote,
  CheckCircle2,
  Check,
  GraduationCap,
  Briefcase,
  Building2,
  Globe2,
  Layers,
  Headphones,
  Laptop,
  Clock,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  FileCheck2,
  CalendarCheck,
  TrendingUp,
  MapPin,
  BookOpen
} from 'lucide-react';
import { facultyList } from '@/data/courses-db';
import FacultyCard from '@/components/FacultyCard';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: "About Us | The Global Language Academy (GLA) - ISO 9001:2015 Certified",
  description: "Learn about The Global Language Academy (GLA). Empowering communication and building global opportunities with ISO 9001:2015 certified training in German, IELTS, French, Spanish & Japanese.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | The Global Language Academy (GLA)",
    description: "Empowering communication and building global opportunities with certified instructors, small batches, and ISO 9001:2015 quality standards.",
    url: "https://tglalearning.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  // Verified Achievement Numbers
  const verifiedStats = [
    {
      end: 7000,
      suffix: "+",
      label: "Students Trained",
      subtext: "Across 15+ Global Batches",
      decimals: 0,
      image: "/images/assets/stat-graduation-cap.webp",
      alt: "7,000+ Students Trained 3D Cap"
    },
    {
      end: 6,
      suffix: "+",
      label: "Years of Excellence",
      subtext: "Established Pedagogy",
      decimals: 0,
      image: "/images/assets/stat-excellence-shield.webp",
      alt: "6+ Years of Excellence 3D Shield"
    },
    {
      end: 3000,
      suffix: "+",
      label: "International Certifications",
      subtext: "Goethe, TELC, DELF, IELTS, PTE",
      decimals: 0,
      image: "/images/assets/stat-certified-scroll.webp",
      alt: "3,000+ Certified 3D Scroll"
    },
    {
      end: 90,
      suffix: "%+",
      label: "Placement & Exam Success",
      subtext: "First Attempt Clearance",
      decimals: 0,
      image: "/images/assets/stat-success-rocket.webp",
      alt: "90%+ Placement Success 3D Rocket"
    }
  ];

  // Why GLA? (8 Cards)
  const whyGlaCards = [
    {
      icon: Award,
      title: "Expert Trainers",
      description: "Certified native-fluent instructors and examiner alumni with personalized attention and proven score benchmarks.",
      tag: "Certified Faculty"
    },
    {
      icon: Layers,
      title: "Structured Curriculum",
      description: "Level-wise CEFR-aligned syllabus (A1 to C2) designed for systematic linguistic mastery and steady progression.",
      tag: "CEFR Standard"
    },
    {
      icon: Headphones,
      title: "Practical Learning",
      description: "Focus on interactive speaking, real-world conversational drills, listening immersion, and accent coaching.",
      tag: "Active Immersion"
    },
    {
      icon: Laptop,
      title: "Online & Offline Classes",
      description: "Flexible learning modes: attend interactive virtual live classes or learn at our modern Dwarka campus.",
      tag: "Hybrid Flexibility"
    },
    {
      icon: Clock,
      title: "Flexible Batches",
      description: "Weekday, weekend, and evening timings tailored for university students and working professionals.",
      tag: "Custom Timings"
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Targeted mock simulations, essay grading, and strategy blueprints for Goethe, TELC, DELF, JLPT, IELTS & PTE.",
      tag: "100% Mock Drills"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Resume optimization, MNC interview preparation, corporate vocabulary, and workplace communication mastery.",
      tag: "Placement Support"
    },
    {
      icon: Globe2,
      title: "International Opportunities",
      description: "Dedicated guidance for German Ausbildung programs, European university admissions, and embassy visa readiness.",
      tag: "Global Pathways"
    }
  ];

  // 4-Step Approach: Learn → Practice → Grow → Go Global
  const approachSteps = [
    {
      step: "01",
      name: "Learn",
      title: "Structured Conceptual Foundation",
      description: "Master grammar, core vocabulary, and language structures through CEFR-mapped syllabus led by accredited faculty.",
      icon: Layers
    },
    {
      step: "02",
      name: "Practice",
      title: "Active Immersion & Daily Dialogue",
      description: "Engage in situational speaking exercises, group conversations, listening drills, and real-time pronunciation corrections.",
      icon: Headphones
    },
    {
      step: "03",
      name: "Grow",
      title: "Diagnostic Testing & Score Feedback",
      description: "Assess your readiness with weekly timed mock assessments replicating official IDP, British Council, and Goethe testing setups.",
      icon: TrendingUp
    },
    {
      step: "04",
      name: "Go Global",
      title: "Exam Clearance & Global Takeoff",
      description: "Secure your certified credential, complete university SOPs, ace embassy interviews, and step confidently onto the global stage.",
      icon: Globe2
    }
  ];

  // 4 Core Focus Areas of GLA
  const coreFocusAreas = [
    {
      icon: BookOpen,
      title: "Focus on Language Education",
      desc: "Specialized training in German, IELTS, PTE, French, Spanish, Japanese, and Spoken English designed to eliminate fluency barriers."
    },
    {
      icon: Headphones,
      title: "Practical Communication",
      desc: "We prioritize real-world speaking confidence, pronunciation refinement, and listening comprehension over rote memorization."
    },
    {
      icon: Briefcase,
      title: "Academic & Professional Growth",
      desc: "Empowering learners to qualify for global university admissions, crack corporate interviews, and advance international careers."
    },
    {
      icon: Globe2,
      title: "International Opportunities",
      desc: "Opening global pathways for study abroad in Europe, the UK, Canada, Australia, and vocational Ausbildung in Germany."
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
              <span>ISO 9001:2015 Certified Academy</span>
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm shadow-sm">
              <Image
                src="/images/assets/hero-rating-pill.webp"
                alt="5 Star Rating Trust Badge"
                width={100}
                height={43}
                priority
                className="h-4 w-auto object-contain"
              />
              <span className="text-[11px] font-bold text-amber-300">4.9/5 Alumni Rating</span>
            </div>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white max-w-4xl animate-fade-in-up [animation-delay:200ms] fill-mode-forwards">
            Empowering Communication. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white">
              Building Global Opportunities.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:300ms] fill-mode-forwards">
            The Global Language Academy (GLA) is New Delhi&apos;s premier institute for outcome-focused language education, international examination success, and global career pathways.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 animate-fade-in-up [animation-delay:400ms] fill-mode-forwards">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple to-purple-hover hover:from-purple-hover hover:to-purple text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-xl shadow-md hover:scale-102 transition-all cursor-pointer border border-transparent"
            >
              <Phone className="w-4 h-4 text-purple" />
              <span className="text-slate-950 font-bold">Book Free Demo Session</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT GLA: WHO WE ARE, ESTABLISHMENT & LEADERSHIP      */}
      {/* ========================================================= */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Academy Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                About The Academy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight leading-tight">
                Who We Are & Why GLA Was Established
              </h2>
              <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
                <strong className="text-navy">The Global Language Academy (GLA)</strong> was established over 6 years ago to address a fundamental flaw in standard language tutoring: the prevalence of generic, lecture-heavy coaching without practical fluency or score-driven outcomes.
              </p>
              <p className="text-sm text-navy-muted leading-relaxed">
                Backed by over two decades of leadership in education and international consulting, GLA was created as a bridge between linguistic capability and real-world opportunity. We provide structured, interactive language training designed to help learners clear certified exams on their first attempt and build lifelong communication confidence.
              </p>

              {/* 4 Core Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {coreFocusAreas.map((area, idx) => {
                  const IconComp = area.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-section-alt/70 border border-card-border hover:border-purple/30 transition-all flex flex-col gap-2"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple/10 text-purple flex items-center justify-center border border-purple/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-navy">{area.title}</h4>
                      <p className="text-xs text-navy-muted leading-relaxed">{area.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Leadership Quote Card */}
            <div className="lg:col-span-5">
              <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-section-alt via-card to-section-alt border border-purple/25 shadow-lg flex flex-col gap-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple/10 rounded-full blur-2xl pointer-events-none"></div>
                <span className="absolute top-6 right-6 text-purple opacity-20">
                  <Quote className="w-14 h-14" />
                </span>
                
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                  Director&apos;s Message
                </span>
                
                <p className="text-base sm:text-lg font-medium italic text-navy leading-relaxed relative z-10">
                  &ldquo;Education is the definitive pathway to unlocking youth potential worldwide. At GLA, our purpose is not just to teach grammar rules, but to give each student the self-assurance, practical fluency, and accredited credentials needed to succeed globally.&rdquo;
                </p>

                <div className="border-t border-card-border/80 pt-4 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-purple text-white flex items-center justify-center font-bold font-display text-lg shadow-sm">
                    AR
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-navy">Ms. Anuradhika Rana</h4>
                    <p className="text-xs font-medium text-purple">Founder & Director, The Global Language Academy</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR VISION & OUR MISSION                               */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-20 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Our Vision & Mission
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Every curriculum, mentoring session, and diagnostic exam at GLA is directed toward these foundational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="group bg-card p-8 sm:p-10 rounded-3xl border border-card-border hover:border-purple/50 shadow-sm hover:shadow-[0_20px_45px_rgba(75,36,94,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple transition-all duration-300 shadow-sm shrink-0">
                  <Eye className="w-7 h-7 text-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-purple uppercase tracking-wider">
                    Future Aspiration
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-navy tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-sm sm:text-base text-navy-muted leading-relaxed mt-1">
                    To provide quality language education that builds confidence, communication skills and global opportunities for every learner.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-card-border/60 flex items-center gap-2 text-xs font-bold text-purple">
                <CheckCircle2 className="w-4 h-4" />
                <span>Building Worldwide Self-Reliance & Fluency</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group bg-card p-8 sm:p-10 rounded-3xl border border-card-border hover:border-purple/50 shadow-sm hover:shadow-[0_20px_45px_rgba(75,36,94,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple transition-all duration-300 shadow-sm shrink-0">
                  <Compass className="w-7 h-7 text-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-purple uppercase tracking-wider">
                    Daily Commitment
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-navy tracking-tight">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-navy-muted leading-relaxed mt-1">
                    To deliver structured, practical and learner-focused training that helps students and professionals achieve their academic, professional and international goals.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-card-border/60 flex items-center gap-2 text-xs font-bold text-purple">
                <CheckCircle2 className="w-4 h-4" />
                <span>Empowering Careers & International Visas</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHY GLA? (8 CARDS)                                     */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              The GLA Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Why Choose The Global Language Academy?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Eight key pillars that distinguish our academy from ordinary language institutes and drive our 90%+ exam clearance rate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {whyGlaCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="group bg-card border border-card-border hover:border-purple/50 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_20px_45px_rgba(75,36,94,0.10)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-5"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple transition-all duration-300 shadow-sm shrink-0">
                        <IconComp className="w-6 h-6 text-purple group-hover:text-white transition-colors duration-300 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-bold text-navy-muted/50 group-hover:text-purple transition-colors font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-extrabold font-display text-navy tracking-tight group-hover:text-purple transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-card-border/60">
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
      {/* 5. OUR APPROACH: LEARN → PRACTICE → GROW → GO GLOBAL      */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              4-Step Learning Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Our Structured Learning Approach
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              How we transform ambitious language learners into globally certified, fluent communicators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {approachSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="group bg-card border border-card-border hover:border-purple/50 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_20px_45px_rgba(75,36,94,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden gap-5"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0 group-hover:scale-105 transition-transform">
                        {step.step}
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-purple bg-purple/10 px-2.5 py-1 rounded-full border border-purple/20">
                        {step.name}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold font-display text-navy tracking-tight group-hover:text-purple transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-card-border/60 flex items-center justify-between text-xs text-navy-muted">
                    <span className="font-semibold">Phase {idx + 1} of 4</span>
                    <IconComp className="w-4 h-4 text-purple" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OUR ACHIEVEMENTS (VERIFIED METRICS)                    */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-20 transition-colors duration-300 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Verified Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Our Proven Track Record
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Real results backed by rigorous pedagogical standards and dedicated mentorship.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {verifiedStats.map((stat, idx) => (
              <div
                key={idx}
                className="group text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-section-alt/60 hover:bg-card border border-card-border hover:border-purple/40 shadow-sm hover:shadow-[0_14px_35px_rgba(75,36,94,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-center items-center"
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
      {/* 7. ACCREDITATION & CERTIFICATION (ISO 9001:2015)          */}
      {/* ========================================================= */}
      <section className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Accreditation Details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center p-1 shrink-0 shadow-sm">
                  <Image
                    src="/images/assets/exam-assurance-badge.webp"
                    alt="ISO 9001:2015 Quality Assurance Badge"
                    width={44}
                    height={44}
                    loading="lazy"
                    className="w-9 h-9 object-contain drop-shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
                    Official Accreditation
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    Quality Management System Standards
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
                ISO 9001:2015 Certified Language Institution
              </h2>
              
              <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
                The Global Language Academy is proud to be an <strong className="text-navy">ISO 9001:2015 Certified</strong> organization. This international certification verifies our strict adherence to world-class Quality Management Systems across language course curriculum design, faculty qualification standards, examination preparation protocols, and overseas career counseling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-card-border">
                  <FileCheck2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Certified Pedagogy</h4>
                    <p className="text-[11px] text-navy-muted">Strict compliance with CEFR and international testing standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-card-border">
                  <FileCheck2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Verified Examiner Faculty</h4>
                    <p className="text-[11px] text-navy-muted">Credentialed educators from Goethe-Institut, British Council & IDP.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-card-border">
                  <FileCheck2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Standardized Mock Drills</h4>
                    <p className="text-[11px] text-navy-muted">Timed diagnostic testing replicating exact examiner criteria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-card-border">
                  <FileCheck2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Global Visa & Career Advisory</h4>
                    <p className="text-[11px] text-navy-muted">Transparent guidance for Germany Ausbildung, Europe & Canada.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Certificate Card */}
            <div className="lg:col-span-5">
              <div className="relative p-7 sm:p-9 rounded-3xl bg-card border-2 border-purple/30 shadow-xl flex flex-col items-center text-center gap-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-purple/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <Image
                  src="/images/assets/prep-guarantee-seal.webp"
                  alt="ISO 9001:2015 Certified Official Seal"
                  width={110}
                  height={110}
                  loading="lazy"
                  className="w-24 h-24 object-contain drop-shadow-md"
                />

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full w-fit mx-auto">
                    Certificate of Quality Compliance
                  </span>
                  <h3 className="text-xl font-extrabold font-display text-navy mt-1">
                    ISO 9001:2015 Standard
                  </h3>
                  <p className="text-xs text-navy-muted max-w-xs mx-auto leading-relaxed">
                    Quality Management System in Provision of Foreign Language Training & Study Abroad Counseling Services.
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-card-border/80 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-navy-muted">
                  <span>BRITISH COUNCIL</span>
                  <span>•</span>
                  <span>IDP</span>
                  <span>•</span>
                  <span>GOETHE-INSTITUT</span>
                  <span>•</span>
                  <span>PEARSON</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. MEET OUR EXPERT TRAINERS (FACULTY PROFILES)            */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Academy Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Meet Our Certified Instructors & Mentors
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              We do not outsource lectures to inexperienced tutors. Learn directly from credentialed, examiner-trained mentors.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {facultyList.map((fac) => (
              <div key={fac.id} className="h-full">
                <FacultyCard faculty={fac} layout="horizontal" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FINAL CTA CALLOUT CONTAINER                            */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#071324] py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-[#00122E] via-[#160824] to-[#4B245E] text-white p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,18,46,0.35)] border border-white/15 overflow-hidden text-center flex flex-col items-center gap-6">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple/30 border border-purple-300/30 rounded-full text-xs font-semibold text-purple-200">
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Take the First Step Today</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight max-w-2xl">
              Your Global Journey Starts With the Right Skills.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Attend a free 45-minute demo class with our lead trainers and get personalized score roadmap guidance for your target language exam.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
              >
                <span>Book Free Demo Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919217999511?text=Hi!%20I'd%20like%20to%20know%20more%20about%20courses%20at%20The%20Global%20Language%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md hover:scale-102 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat with Advisor</span>
              </a>
            </div>

            {/* Helpline contact */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300 relative z-10">
              <span>Direct Campus Helpline:</span>
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
