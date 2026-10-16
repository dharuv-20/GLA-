"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Laptop,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle,
  BarChart3,
  Layers,
  Headphones,
  Check,
  FileCheck2,
  GraduationCap,
  Globe2,
  TrendingUp,
  Target,
  FileText,
  Flame,
  ChevronLeft,
  ChevronRight,
  Building,
  PlaneTakeoff,
  Lightbulb,
  ExternalLink,
  Zap,
  CheckSquare,
  Scale,
  CalendarCheck,
  PenTool,
  Mic,
  BookMarked,
  Briefcase,
  Star
} from 'lucide-react';
import { Course, Testimonial, FAQItem, StudentResult } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';
import FormattedTitle from '@/components/FormattedTitle';

interface IeltsCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

export default function IeltsCourseView({ course, relatedCourses }: IeltsCourseViewProps) {
  const [activeFormatTab, setActiveFormatTab] = useState<'academic' | 'general'>('academic');
  const [activeModuleTab, setActiveModuleTab] = useState<'all' | 'listening' | 'reading' | 'writing' | 'speaking'>('all');
  const [selectedBand, setSelectedBand] = useState<number>(8);
  const [activeModuleView, setActiveModuleView] = useState<'cards' | 'table'>('cards');
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? course.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === course.testimonials.length - 1 ? 0 : prev + 1));
  };

  // Section 1: IELTS at a Glance (6 Core Cards)
  const ieltsGlanceFeatures = [
    {
      icon: Building,
      title: "11,000+ Global Organisations",
      description: "Accepted by leading universities in the UK, Australia, Canada, USA, and New Zealand, as well as employers, immigration bodies, and professional councils worldwide.",
      tag: "Global Acceptance",
      accent: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40"
    },
    {
      icon: PlaneTakeoff,
      title: "Migration & Visa Approved",
      description: "Mandated and trusted for Canada Express Entry PR (CLB 9/10), Australia Skilled Migration (189/190/491), UKVI student/work visas, and professional licensing.",
      tag: "Visa & PR Ready",
      accent: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40"
    },
    {
      icon: Globe2,
      title: "140+ Countries & 1,600+ Centres",
      description: "Over 3.5 million candidates take IELTS annually. Administered worldwide by the British Council, IDP Australia, and Cambridge Assessment English.",
      tag: "3.5M+ Candidates",
      accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40"
    },
    {
      icon: Clock,
      title: "Fast Results (3–5 Days Online)",
      description: "Computer-Delivered IELTS (CDI) test results are available online in 3–5 days; traditional paper-based results are delivered in 13 days.",
      tag: "Fast Turnaround",
      accent: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40"
    },
    {
      icon: FileCheck2,
      title: "2-Year Official Score Validity",
      description: "Scores remain valid for two years from your test date and can be securely verified online by academic and immigration institutions worldwide.",
      tag: "2-Year Validity",
      accent: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800/40"
    },
    {
      icon: Laptop,
      title: "Computer & Paper Options",
      description: "Choose between Computer-Delivered IELTS (CDI) or traditional Paper-Based testing based on your personal writing and typing preference.",
      tag: "Flexible Delivery",
      accent: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/40"
    }
  ];

  // Section 2.1: The Four Modules Structure
  const moduleBreakdown = [
    {
      id: "mod-listening",
      type: "listening",
      name: "Listening Module",
      duration: "30 Mins (+10m transfer for paper)",
      questions: "4 Sections • 40 Questions",
      icon: Headphones,
      badge: "Integrated Native Accents",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-500",
      skills: "Listening for specific factual info, conversational context, speaker attitude, and academic monologue comprehension.",
      format: "Audio recordings include British, Australian, and North American accents. Heard once only. 10 questions per section.",
      tips: "Focus on spelling accuracy, singular/plural noun forms, and keyword prediction before audio starts."
    },
    {
      id: "mod-reading",
      type: "reading",
      name: "Reading Module",
      duration: "60 Mins (No extra transfer time)",
      questions: "3 Sections • 40 Questions",
      icon: BookOpen,
      badge: "High-Speed Skimming",
      color: "border-purple/30 bg-purple/5 text-purple",
      skills: "Skimming, scanning for keywords, logical argument flow, identifying writer's opinion, and detail extraction.",
      format: "Academic: 3 complex academic journal/research texts (~2,150–2,750 words total). General: notices, workplace documents, and 1 longer text.",
      tips: "Target 18 mins per passage to leave 6 mins for final check. Master True/False/Not Given elimination rules."
    },
    {
      id: "mod-writing",
      type: "writing",
      name: "Writing Module",
      duration: "60 Mins (Task 1: 20m, Task 2: 40m)",
      questions: "2 Structured Writing Tasks",
      icon: PenTool,
      badge: "Examiner Rubric Focused",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-600",
      skills: "Visual data interpretation, formal correspondence, cohesive discursive arguments, and academic lexical range.",
      format: "Task 1 (min 150 words): Graph/Chart description (Academic) or Letter (General). Task 2 (min 250 words): Formal argumentative essay.",
      tips: "Task 2 carries 2x the marks of Task 1. Always write structured 4-paragraph essays with strong topic sentences."
    },
    {
      id: "mod-speaking",
      type: "speaking",
      name: "Speaking Module",
      duration: "11–14 Mins (1-on-1 Interview)",
      questions: "3 Interactive Parts",
      icon: Mic,
      badge: "Face-to-Face Evaluation",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600",
      skills: "Fluency & coherence, lexical resource, grammatical accuracy, and standard pronunciation intonation.",
      format: "Part 1: Intro & familiar topics (4–5m). Part 2: Individual 2-min long turn on a Cue Card (3–4m). Part 3: Deep two-way discussion (4–5m).",
      tips: "Avoid memorized scripts. Extend your answers with examples and use natural transitional connectors."
    }
  ];

  // Section 3: Band Scale Data
  const bandDescriptions = [
    {
      band: 9,
      level: "Expert User",
      cefr: "C2 Mastery",
      scorePercentage: 100,
      description: "Has fully operational command of the language: appropriate, accurate and fluent with complete understanding.",
      badge: "Elite Target / Max PR Points",
      color: "from-emerald-500 to-teal-600"
    },
    {
      band: 8,
      level: "Very Good User",
      cefr: "C1 / C2 Advanced",
      scorePercentage: 88,
      description: "Has fully operational command with only occasional unsystematic inaccuracies. Handles complex detailed argumentation well.",
      badge: "TGLA Target (Band 8.0+)",
      color: "from-blue-600 to-cyan-600"
    },
    {
      band: 7,
      level: "Good User",
      cefr: "C1 Operational",
      scorePercentage: 77,
      description: "Has operational command, though with occasional inaccuracies and misunderstandings in some situations. Generally handles complex language well.",
      badge: "Top University Direct Entry",
      color: "from-purple to-indigo-600"
    },
    {
      band: 6,
      level: "Competent User",
      cefr: "B2 Vantage",
      scorePercentage: 66,
      description: "Generally has effective command of the language despite some inaccuracies and misunderstandings. Can use and understand fairly complex language in familiar contexts.",
      badge: "Standard Visa Threshold",
      color: "from-amber-500 to-orange-600"
    },
    {
      band: 5,
      level: "Modest User",
      cefr: "B1 Intermediate",
      scorePercentage: 55,
      description: "Has partial command of the language, coping with overall meaning in most situations, though is likely to make many mistakes.",
      badge: "Foundation Level",
      color: "from-orange-500 to-rose-600"
    },
    {
      band: 4,
      level: "Limited / Basic User",
      cefr: "A2 Elementary",
      scorePercentage: 44,
      description: "Basic competence is limited to familiar situations. Has frequent problems in understanding and expression.",
      badge: "Beginner Stage",
      color: "from-rose-500 to-red-600"
    }
  ];

  // Section 5.1: Structured Study Material Modules A to G
  const studyModules = [
    {
      code: "Module A",
      title: "Skill-Specific Diagnostic Modules",
      icon: Layers,
      items: [
        "Diagnostic evaluation across Listening, Reading, Writing, and Speaking",
        "Detailed baseline band scoring and weakness identification report",
        "Individual pacing strategies to complete all tasks comfortably within test time"
      ]
    },
    {
      code: "Module B",
      title: "Grammar & Band-Descriptor Vocabulary",
      icon: BookMarked,
      items: [
        "Lexical resource training tailored strictly to official Band 7+ and 8+ rubrics",
        "Mastery of complex sentences: conditionals, relative clauses, and passive voice",
        "Elimination of repetitive common words with high-precision academic collocations"
      ]
    },
    {
      code: "Module C",
      title: "Writing Task 1 & Task 2 Blueprints",
      icon: PenTool,
      items: [
        "Task 1: Proven paraphrasing formulas, overview statements, and data groupings",
        "Task 2: 4-paragraph argumentative and discursive essay blueprints (250+ words)",
        "Examiner grading rubrics: Task Response, Coherence & Cohesion, Lexical, GRA"
      ]
    },
    {
      code: "Module D",
      title: "Speaking Cue Card Master Bank",
      icon: Mic,
      items: [
        "Comprehensive question bank covering the latest recurring Part 2 Cue Cards",
        "1-minute preparation note-making strategy using bullet point anchors",
        "Part 3 abstract topic expansion techniques to avoid short one-line responses"
      ]
    },
    {
      code: "Module E",
      title: "Topic-Wise High-Frequency Vocabulary",
      icon: Globe2,
      items: [
        "Curated vocabulary lists on Education, Environment, Technology, and Society",
        "Natural collocations and idiomatic phrasing expected by native examiners",
        "Spelling accuracy drills for commonly misspelled listening answer words"
      ]
    },
    {
      code: "Module F",
      title: "Question-Type Strategy Guides",
      icon: Target,
      items: [
        "Step-by-step logic for True / False / Not Given & Yes / No / Not Given",
        "Elimination techniques for Matching Headings and Paragraph Information",
        "Summary completion, Sentence completion, Multiple Choice, and Diagram labels"
      ]
    },
    {
      code: "Module G",
      title: "Timed Practice Exercises & Score Audits",
      icon: Clock,
      items: [
        "Sectional timed drills with detailed answer keys and audio scripts",
        "Instant score conversion charts matching official Cambridge band rubrics",
        "Weekly 1-on-1 feedback sessions to track incremental band score jumps"
      ]
    }
  ];

  // Section 5.4: Online Resources & Portals Provided
  const onlinePortals = [
    {
      portal: "IELTS.org — Official Portal",
      owner: "Official Test Owners",
      description: "Official sample test questions, authoritative band score descriptors, test format updates, and test-day regulatory guidelines.",
      highlight: "Official Marking Criteria"
    },
    {
      portal: "British Council IELTS",
      owner: "British Council",
      description: "Authentic free practice tests, high-quality Listening audio, interactive video lessons, and test preparation advice.",
      highlight: "Official Tests & Audio"
    },
    {
      portal: "IDP IELTS Practice Portal",
      owner: "IDP: IELTS Australia",
      description: "Official Computer-Delivered IELTS (CDI) simulation tests, question banks, and masterclasses provided directly by IDP Australia.",
      highlight: "CDI Exam Simulator"
    },
    {
      portal: "IELTS Liz",
      owner: "Expert Community",
      description: "Highly acclaimed lessons, tips, sample model answers, and step-by-step strategies for all four modules (L, R, W, S).",
      highlight: "Band 8/9 Sample Answers"
    },
    {
      portal: "IELTS Advantage",
      owner: "Writing & Speaking Specialists",
      description: "Deep-dive Task 1 & Task 2 essay structures, Band 9 vocabulary breakdowns, sample speaking responses, and examiner checklists.",
      highlight: "Essay Frameworks"
    },
    {
      portal: "Road to IELTS (British Council)",
      owner: "British Council Platform",
      description: "Comprehensive interactive online practice platform featuring over 200 hours of structured preparation activities and timed tests.",
      highlight: "200+ Practice Hours"
    }
  ];

  // Section 6: Why Choose TGLA IELTS (6 Pillars)
  const whyGlaPillars = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Cambridge-Affiliated Teaching",
      desc: "Our curriculum is strictly aligned with Cambridge Assessment English standards. Students train with authentic past examination papers from Cambridge IELTS Books 1–18."
    },
    {
      icon: GraduationCap,
      number: "02",
      title: "Expert Certified Faculty",
      desc: "Taught by certified IELTS trainers with proven track records of mentoring students to achieve Band 7.5, 8.0, and 8.5 on their first official exam attempt."
    },
    {
      icon: Laptop,
      number: "03",
      title: "Unlimited Mock Tests",
      desc: "Take unlimited full-length offline and computer-delivered (CDI) mock tests under real exam conditions at no extra fee, with comprehensive individual feedback."
    },
    {
      icon: Target,
      number: "04",
      title: "Personalised Band Score Roadmap",
      desc: "Receive an individual diagnostic study plan tailored to your target score requirements (e.g. 8777 for Canada Express Entry or 7.0 for university admission)."
    },
    {
      icon: BookOpen,
      number: "05",
      title: "Free Premium Study Materials",
      desc: "Full access to Cambridge Books 1–18, official British Council and IDP resources, custom vocabulary banks, and writing templates provided at zero extra cost."
    },
    {
      icon: Users,
      number: "06",
      title: "Small Batch Sizes (5 to 7 Students)",
      desc: "We strictly cap class sizes to ensure daily individual speaking practice, personal writing corrections, and immediate doubt clearance for every student."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16]">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-white py-14 sm:py-20 lg:py-24 border-b border-card-border overflow-hidden bg-[#00122E] dark:bg-[#010814]">
        {/* Glow ambient background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text & Tenets */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest bg-purple/35 text-purple-200 px-3.5 py-1.5 rounded-full border border-purple-300/30 shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-purple-hero" />
                  Official Program Guide
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full border border-blue-400/30">
                  Academic & General Training
                </span>
              </div>

              {/* Headings */}
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-400 block mb-1.5">
                  The Global Language Academy
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                  <FormattedTitle title={course.title} bracketClassName="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mt-1 sm:mt-2" />
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Everything you need to prepare, practise, and achieve your target band score in the IELTS Test. 
                Jointly managed by <strong>British Council</strong>, <strong>IDP Australia</strong>, and <strong>Cambridge Assessment English</strong>.
              </p>

              {/* 4 Core Tenets Grid */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-lg">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2 justify-center lg:justify-start">
                  <Star className="w-3.5 h-3.5 text-purple-hero fill-purple-hero" />
                  Our 4 Core Learning Tenets
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 hover:border-purple/30 transition-colors">
                    <span className="block text-xs font-bold text-white">Comprehensive Content</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 hover:border-purple/30 transition-colors">
                    <span className="block text-xs font-bold text-white">Exam-Focused Approach</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 hover:border-purple/30 transition-colors">
                    <span className="block text-xs font-bold text-white">Practise Smartly</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 hover:border-purple/30 transition-colors">
                    <span className="block text-xs font-bold text-white">Achieve Excellence</span>
                  </div>
                </div>
              </div>

              {/* Sub-Motto Pill */}
              <div className="p-3 sm:p-3.5 bg-gradient-to-r from-purple/30 via-slate-800/60 to-blue-900/30 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 text-center lg:text-left">
                🎯 <strong className="text-white">Empowering Communication. Building Global Opportunities.</strong> Expert coaching • Cambridge-affiliated materials • Unlimited mock tests.
              </div>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-2 border-t border-white/10">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Clock className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Duration</span>
                    <span className="text-xs font-extrabold text-white">2 - 3 Months</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Users className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Batch Size</span>
                    <span className="text-xs font-extrabold text-white">5 to 7 Students</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Laptop className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Mock Tests</span>
                    <span className="text-xs font-extrabold text-white">Unlimited Full Exams</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Award className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Target Band</span>
                    <span className="text-xs font-extrabold text-white">Band 7.5+ to 8.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-purple/40 via-blue-500/20 to-purple/20 border border-white/15 shadow-2xl backdrop-blur-xl">
                <div className="bg-[#00122E]/95 p-5 sm:p-6 rounded-[22px] border border-white/10">
                  <div className="mb-4 text-center">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-purple/35 text-purple-200 px-3 py-1 rounded-full border border-purple-300/20 mb-2">
                      Free Diagnostic Evaluation
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-display">Assess Your Baseline Band</h2>
                    <p className="text-xs text-slate-300 mt-1">Get 1-on-1 speaking evaluation and customized score roadmap.</p>
                  </div>
                  <LeadForm defaultCourse="ielts-preparation" />
                  <div className="mt-3 text-center">
                    <span className="text-[10px] text-slate-400">🔒 100% Confidential • Instant Academic Assessment</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 1: WHAT IS IELTS & IELTS AT A GLANCE */}
      <section id="overview" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">1. Introduction & Overview</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              What Is IELTS?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              <strong>IELTS (International English Language Testing System)</strong> is the world&apos;s leading English language proficiency test for higher education and global migration.
              It is jointly managed by the <strong>British Council</strong>, <strong>IDP: IELTS Australia</strong>, and <strong>Cambridge Assessment English</strong>.
            </p>
          </div>

          {/* 6 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
            {ieltsGlanceFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl border ${item.accent} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/40">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy mb-2 font-display">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 1.1: Why IELTS Key Stats Callout */}
          <div className="bg-[#00122E] dark:bg-[#041226] text-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">1.1 Why Choose IELTS?</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                  The Global Benchmark for University Admissions, Skilled Migration & PR
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  More than 3.5 million test-takers sit for IELTS each year. 
                  Whether you are targeting Canadian Express Entry (CLB 9/10 / 8777 benchmark), Australian General Skilled Migration (189/190), UK professional council licensing (GMC, NMC), or Ivy League / Russell Group university admissions, IELTS is the gold standard.
                </p>
              </div>
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-purple-hero font-display">11,000+</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Institutions</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-purple-hero font-display">140+</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Countries</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-purple-hero font-display">3–5 Days</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Online Results</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-purple-hero font-display">2 Years</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Validity</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: STRUCTURE OF IELTS & 4 MODULES */}
      <section id="modules" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">2. Test Structure & 4 Modules</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Structure of the IELTS Test
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              IELTS assesses four core language skills: <strong>Listening, Reading, Writing, and Speaking</strong>. 
              Total test duration is approximately <strong>2 hours and 45 minutes</strong>. 
              Listening and Speaking are identical across both Academic and General Training formats, while Reading and Writing differ.
            </p>
          </div>

          {/* Module Filter & View Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center bg-white dark:bg-[#0b1a2e] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setActiveModuleTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeModuleTab === 'all'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                All 4 Modules
              </button>
              <button
                onClick={() => setActiveModuleTab('listening')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeModuleTab === 'listening'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Listening
              </button>
              <button
                onClick={() => setActiveModuleTab('reading')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeModuleTab === 'reading'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Reading
              </button>
              <button
                onClick={() => setActiveModuleTab('writing')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeModuleTab === 'writing'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Writing
              </button>
              <button
                onClick={() => setActiveModuleTab('speaking')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeModuleTab === 'speaking'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Speaking
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex bg-white dark:bg-[#0b1a2e] p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setActiveModuleView('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeModuleView === 'cards' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted'
                }`}
              >
                Card View
              </button>
              <button
                onClick={() => setActiveModuleView('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeModuleView === 'table' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted'
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          {/* Module Showcase: Card View or Table View */}
          {activeModuleView === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {moduleBreakdown
                .filter(m => activeModuleTab === 'all' || m.type === activeModuleTab)
                .map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                    >
                      <div>
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40 group-hover:bg-purple group-hover:text-white transition-colors">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block">
                                {mod.badge}
                              </span>
                              <h3 className="text-xl font-bold font-display text-navy">{mod.name}</h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-extrabold text-navy block">{mod.duration.split(' ')[0]} {mod.duration.split(' ')[1]}</span>
                            <span className="text-[10px] text-navy-muted">{mod.questions}</span>
                          </div>
                        </div>

                        {/* Card Details */}
                        <div className="space-y-3.5 border-t border-slate-100 dark:border-slate-800 pt-4">
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-muted block mb-1">Skills Assessed:</span>
                            <p className="text-xs sm:text-sm font-medium text-navy leading-relaxed">{mod.skills}</p>
                          </div>
                          <div className="bg-slate-50 dark:bg-[#071322] p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Format & Question Types:</span>
                            <p className="text-xs text-navy-muted leading-relaxed">{mod.format}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/30 text-xs text-navy font-semibold flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                            <span><strong>TGLA Strategy Tip:</strong> {mod.tips}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-navy font-semibold">
                        <span className="flex items-center gap-1.5 text-purple">
                          <CheckCircle2 className="w-4 h-4" />
                          Full Mock Assessments Included
                        </span>
                        <span className="text-[11px] text-navy-muted font-bold">Cambridge 1–18 Material</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm mb-12">
              <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
                <h3 className="text-base font-bold font-display">2.1 The Four Modules at a Glance</h3>
                <span className="text-xs font-semibold text-purple-200 bg-purple/35 px-3 py-1 rounded-full border border-purple/30">
                  Total Time: ~2 Hrs 45 Mins
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                  <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Module</th>
                      <th className="py-3.5 px-4 sm:px-6">Duration</th>
                      <th className="py-3.5 px-4 sm:px-6">Questions</th>
                      <th className="py-3.5 px-4 sm:px-6">Key Exam Feature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-purple">Listening</td>
                      <td className="py-4 px-4 sm:px-6 font-semibold">30 minutes (+10m transfer time in paper format)</td>
                      <td className="py-4 px-4 sm:px-6">4 sections, 40 questions</td>
                      <td className="py-4 px-4 sm:px-6 text-navy-muted">Audio recordings include monologues & conversations; heard once only</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-purple">Reading</td>
                      <td className="py-4 px-4 sm:px-6 font-semibold">60 minutes</td>
                      <td className="py-4 px-4 sm:px-6">3 sections, 40 questions</td>
                      <td className="py-4 px-4 sm:px-6 text-navy-muted">Academic: 3 complex research texts. General: notices, workplace documents</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-purple">Writing</td>
                      <td className="py-4 px-4 sm:px-6 font-semibold">60 minutes</td>
                      <td className="py-4 px-4 sm:px-6">2 tasks (Task 1: 20m, Task 2: 40m)</td>
                      <td className="py-4 px-4 sm:px-6 text-navy-muted">Task 1: 150+ words (Graph / Letter). Task 2: 250+ words (Discursive Essay)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-purple">Speaking</td>
                      <td className="py-4 px-4 sm:px-6 font-semibold">11–14 minutes</td>
                      <td className="py-4 px-4 sm:px-6">3 interactive parts</td>
                      <td className="py-4 px-4 sm:px-6 text-navy-muted">1-on-1 interview: Part 1 Intro, Part 2 Cue Card, Part 3 Two-way Discussion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. SECTION 3: 9-BAND SCORING SCALE */}
      <section id="scoring" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">3. Official Scoring Criteria</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              The 9-Band IELTS Score Scale
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              IELTS uses a 9-band scale to measure English proficiency. Each band corresponds to a specific level of language competence. 
              The <strong>Overall Band Score</strong> is calculated from the arithmetic average of the four individual module scores and rounded to the nearest 0.5 band.
            </p>
          </div>

          {/* Interactive Band Scale Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left Column: Band Selector */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-muted mb-1 block">
                Select Band Score to Inspect Details:
              </span>
              {bandDescriptions.map((item) => (
                <button
                  key={item.band}
                  onClick={() => setSelectedBand(item.band)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    selectedBand === item.band
                      ? 'bg-[#00122E] text-white border-purple shadow-lg scale-[1.02]'
                      : 'bg-slate-50 dark:bg-[#0b1a2e] text-navy border-slate-200 dark:border-slate-800 hover:border-purple/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                      selectedBand === item.band ? 'bg-purple text-white' : 'bg-white dark:bg-[#071322] border border-slate-200 dark:border-slate-800 text-navy'
                    }`}>
                      {item.band}.0
                    </span>
                    <div>
                      <h4 className="font-bold text-sm font-display">{item.level}</h4>
                      <span className="text-[11px] opacity-75">CEFR: {item.cefr}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    selectedBand === item.band ? 'bg-purple/40 text-purple-200' : 'bg-white dark:bg-[#071322] text-navy-muted border border-slate-200 dark:border-slate-800'
                  }`}>
                    {item.badge.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Column: Selected Band In-Depth Card */}
            <div className="lg:col-span-7">
              {(() => {
                const current = bandDescriptions.find(b => b.band === selectedBand) || bandDescriptions[1];
                return (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6 sticky top-28">
                    
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${current.color} text-white flex items-center justify-center font-black text-3xl font-display shadow-lg`}>
                          {current.band}.0
                        </div>
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple">Official Competence Level</span>
                          <h3 className="text-2xl font-bold font-display text-navy">{current.level}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold uppercase tracking-wider text-navy-muted block">CEFR Level</span>
                        <span className="text-base sm:text-lg font-black text-purple">{current.cefr}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-navy mb-2 block">Official Examiner Definition:</span>
                      <p className="text-sm sm:text-base text-navy-muted leading-relaxed bg-white dark:bg-[#071322] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 font-medium">
                        &ldquo;{current.description}&rdquo;
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-2xl bg-white dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Target Pathways</span>
                        <p className="text-xs text-navy font-bold">{current.badge}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Score Calculation</span>
                        <p className="text-xs text-navy font-bold">Average of L, R, W, S rounded to nearest 0.5</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-purple shrink-0" />
                        <span className="text-xs font-bold text-navy">Aiming for Band {current.band}.0+ on your first attempt?</span>
                      </div>
                      <a
                        href="#trial"
                        className="text-xs font-extrabold bg-purple text-white px-4 py-2 rounded-xl hover:bg-purple-light transition-colors whitespace-nowrap shadow-sm w-full sm:w-auto text-center"
                      >
                        Get Free Score Plan
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* Table 3.1: Full Band Score Scale Reference */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
              <h3 className="text-base font-bold font-display">3.1 Complete IELTS Band Scale (Bands 9 to 4)</h3>
              <span className="text-xs font-semibold text-purple-200">Scale Range: 0 to 9</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Band Score</th>
                    <th className="py-3.5 px-4 sm:px-6">Competence Level</th>
                    <th className="py-3.5 px-4 sm:px-6">CEFR Equivalent</th>
                    <th className="py-3.5 px-4 sm:px-6">Proficiency Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                  {bandDescriptions.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-black text-purple text-base">Band {item.band}.0</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold">{item.level}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-navy-muted">{item.cefr}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-navy-muted">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: ACADEMIC VS GENERAL TRAINING */}
      <section id="formats" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">4. Test Format Selection</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              IELTS Academic vs IELTS General Training
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Choosing the correct IELTS format is essential because universities and immigration authorities specify which version they require. 
              Listening and Speaking are identical, while Reading and Writing are tailored to your objective.
            </p>
          </div>

          {/* Interactive Format Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-white dark:bg-[#0b1a2e] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm inline-flex flex-col sm:flex-row gap-1">
              <button
                onClick={() => setActiveFormatTab('academic')}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFormatTab === 'academic'
                    ? 'bg-purple text-white shadow-md'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>4.1 IELTS Academic (Study & Registration)</span>
              </button>
              <button
                onClick={() => setActiveFormatTab('general')}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFormatTab === 'general'
                    ? 'bg-purple text-white shadow-md'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>4.2 IELTS General Training (Work & Migration)</span>
              </button>
            </div>
          </div>

          {/* Format Detail Showcase */}
          {activeFormatTab === 'academic' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              
              {/* Academic Overview & Who Is It For */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Format Option 1</span>
                    <h3 className="text-2xl font-bold font-display text-navy">IELTS Academic</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-navy block">Who Is It Intended For?</span>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                      <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                      <span>Students applying for undergraduate or postgraduate degree programs abroad.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                      <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                      <span>Medical, nursing, legal, and engineering professionals seeking professional council registration.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                      <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                      <span>Skilled migration applicants to Australia, Canada, the UK, and New Zealand where Academic is specified.</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Typical Required Score</span>
                  <span className="text-base sm:text-lg font-black text-navy font-display">Band 6.5 – 7.5+ Overall (Min 6.0 in all bands)</span>
                </div>
              </div>

              {/* Academic Reading & Writing Breakdown */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                <h4 className="text-base sm:text-lg font-bold font-display text-navy border-b border-slate-100 dark:border-slate-800 pb-3">
                  Academic Module Specifics
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy">
                    <BookOpen className="w-4 h-4 text-purple" />
                    <span>Academic Reading Module (60 Mins • 3 Texts)</span>
                  </div>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Contains three long, detailed texts sourced from academic journals, textbooks, and research articles covering science, arts, and sociology.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] font-semibold bg-slate-100 dark:bg-[#071322] px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">True / False / Not Given</span>
                    <span className="text-[10px] font-semibold bg-slate-100 dark:bg-[#071322] px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">Matching Headings</span>
                    <span className="text-[10px] font-semibold bg-slate-100 dark:bg-[#071322] px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">Summary Completion</span>
                    <span className="text-[10px] font-semibold bg-slate-100 dark:bg-[#071322] px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">Multiple Choice</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy">
                    <PenTool className="w-4 h-4 text-purple" />
                    <span>Academic Writing Module (60 Mins • 2 Tasks)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-slate-50 dark:bg-[#071322] rounded-2xl border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-purple block">Task 1 (20m • 150+ Words)</span>
                      <p className="text-xs text-navy-muted mt-1">Describe, summarize, or explain visual data from a chart, graph, table, or diagram.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 dark:bg-[#071322] rounded-2xl border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-purple block">Task 2 (40m • 250+ Words)</span>
                      <p className="text-xs text-navy-muted mt-1">Write an academic argumentative/discursive essay presenting solutions or points of view.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              
              {/* General Training Overview & Who Is It For */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Format Option 2</span>
                    <h3 className="text-2xl font-bold font-display text-navy">IELTS General Training</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-navy block">Who Is It Intended For?</span>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                      <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                      <span>Candidates migrating to English-speaking countries (Canada PR Express Entry CLB 9/10, Australia 189/190).</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                      <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                      <span>People seeking secondary education, vocational training programs, or workplace employment abroad.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                      <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                      <span>Candidates applying for non-academic professional work permits.</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Typical Required Score</span>
                  <span className="text-base sm:text-lg font-black text-navy font-display">Band 5.0 – 6.5+ (Or 8777 for Max PR Points)</span>
                </div>
              </div>

              {/* General Training Reading & Writing Breakdown */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                <h4 className="text-base sm:text-lg font-bold font-display text-navy border-b border-slate-100 dark:border-slate-800 pb-3">
                  General Training Module Specifics
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy">
                    <BookOpen className="w-4 h-4 text-purple" />
                    <span>General Reading Module (60 Mins • 3 Sections)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 bg-slate-50 dark:bg-[#071322] rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-navy-muted">
                      <strong>Section 1 (Everyday Life):</strong> 2–3 short texts related to daily survival: advertisements, timetables, notices.
                    </div>
                    <div className="p-2.5 bg-slate-50 dark:bg-[#071322] rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-navy-muted">
                      <strong>Section 2 (Workplace):</strong> 2 texts focused on employment: job descriptions, staff handbooks, contracts.
                    </div>
                    <div className="p-2.5 bg-slate-50 dark:bg-[#071322] rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-navy-muted">
                      <strong>Section 3 (General Interest):</strong> 1 longer, more complex article on a topic of broad public interest.
                    </div>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy">
                    <PenTool className="w-4 h-4 text-purple" />
                    <span>General Writing Module (60 Mins • 2 Tasks)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-slate-50 dark:bg-[#071322] rounded-2xl border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-purple block">Task 1 (20m • 150+ Words)</span>
                      <p className="text-xs text-navy-muted mt-1">Write a formal, semi-formal, or informal letter explaining a situation or requesting information.</p>
                    </div>
                    <div className="p-3.5 bg-slate-50 dark:bg-[#071322] rounded-2xl border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-purple block">Task 2 (40m • 250+ Words)</span>
                      <p className="text-xs text-navy-muted mt-1">Write an essay presenting an argument or personal opinion (similar format to Academic Task 2).</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Table 4.3: Side-by-Side Comparison */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
              <h3 className="text-base font-bold font-display">4.3 Side-by-Side Comparison: Academic vs General Training</h3>
              <span className="text-xs font-semibold text-purple-200">Both Pathways Supported at TGLA</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[650px]">
                <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Test Dimension</th>
                    <th className="py-3.5 px-4 sm:px-6 text-purple">IELTS Academic</th>
                    <th className="py-3.5 px-4 sm:px-6 text-blue-600 dark:text-blue-400">IELTS General Training</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Primary Purpose</td>
                    <td className="py-3.5 px-4 sm:px-6">University undergraduate & postgraduate admissions; professional registration</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">Work permits, permanent residency (Canada Express Entry / Australia), secondary school</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Reading Material</td>
                    <td className="py-3.5 px-4 sm:px-6">3 complex academic and research articles from journals and textbooks</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">Everyday notices, workplace policies/manuals, and 1 general interest article</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Writing Task 1</td>
                    <td className="py-3.5 px-4 sm:px-6">Visual graph, bar chart, map, or process diagram description (150+ words)</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">Formal, semi-formal, or personal letter writing (150+ words)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Writing Task 2</td>
                    <td className="py-3.5 px-4 sm:px-6">Formal academic argumentative/discursive essay (250+ words)</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">Personal opinion or argumentative essay (250+ words)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Listening Module</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400">Identical across both formats (4 sections, 40 questions)</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400">Identical across both formats (4 sections, 40 questions)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Speaking Module</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400">Identical across both formats (1-on-1 interview, 11–14 mins)</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-600 dark:text-emerald-400">Identical across both formats (1-on-1 interview, 11–14 mins)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold">Typical Band Range</td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-purple">6.5 – 7.5+ Required</td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-blue-600 dark:text-blue-400">5.0 – 6.5+ (CLB 9/10 Target)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: OUR IELTS PREPARATION PROGRAM AT TGLA */}
      <section id="program" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">5. Curriculum & Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Our IELTS Preparation Program
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              The Global Language Academy offers a comprehensive, structured IELTS coaching framework built around the official Cambridge and British Council testing benchmarks to guarantee measurable band score progression.
            </p>
          </div>

          {/* 5.1 Structured Study Material (Modules A through G) */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Section 5.1</span>
                <h3 className="text-2xl font-bold font-display text-navy">Structured Study Material (Modules A to G)</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyModules.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/40">
                          {mod.code}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-navy mb-3 font-display">{mod.title}</h4>
                      <ul className="space-y-2">
                        {mod.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs text-navy-muted leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5.2 Cambridge IELTS & 5.3 Mock Tests Two-Column Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
            
            {/* Cambridge IELTS 1-18 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#00122E] dark:bg-[#041226] text-white border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookMarked className="w-5 h-5 text-purple-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-200">5.2 Primary Resource</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3">
                  Cambridge IELTS 1–18 Series
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  We use authentic past examination papers from Cambridge Assessment English. Students practise with real test questions rather than unofficial imitation material.
                </p>

                <div className="space-y-2.5 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Official band score conversion tables and score matrices</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Real examiner commentary and high-band model sample answers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Comprehensive past papers for both Academic & General Training</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-bold text-purple-200">
                📚 Complete Books 1–18 Digital & Hardcopy Library Included
              </div>
            </div>

            {/* 5.3 Mock Tests Full Simulation */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Laptop className="w-5 h-5 text-purple" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple">5.3 Full Simulation</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-navy mb-3">
                  Offline & Online Mock Tests
                </h3>
                <p className="text-xs sm:text-sm text-navy-muted leading-relaxed mb-6">
                  Consistent mock testing is the single most effective way to eliminate exam anxiety, master time management, and pinpoint weaknesses before test day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-navy block mb-1">A. Offline Mock Lab</span>
                    <p className="text-xs text-navy-muted">Real classroom exam conditions, Cambridge past test booklets, and face-to-face 1-on-1 speaking interviews.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-navy block mb-1">B. CDI Cloud Simulator</span>
                    <p className="text-xs text-navy-muted">Computer-Delivered IELTS interface with instant scoring for Listening/Reading and unlimited test retakes.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-purple flex items-center justify-between">
                <span>⚡ Unlimited Mock Tests Included at No Extra Fee</span>
                <a href="#trial" className="hover:underline">Book Mock →</a>
              </div>
            </div>

          </div>

          {/* 5.4 Free Online Resources Provided at Zero Cost */}
          <div id="resources" className="bg-slate-50 dark:bg-[#071322] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Section 5.4</span>
                <h3 className="text-2xl font-bold font-display text-navy">Curated Free Online Preparation Portals</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-navy-muted mb-8 leading-relaxed max-w-3xl">
              In addition to physical class hours and Cambridge textbooks, TGLA provides students with guided access to official online portals to accelerate practice at home at zero extra cost.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {onlinePortals.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/40">
                        {item.owner}
                      </span>
                      <span className="text-[9px] font-bold text-navy-muted">Portal {idx + 1}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-navy mb-2 font-display">{item.portal}</h4>
                    <p className="text-xs text-navy-muted leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-purple flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: WHY CHOOSE OUR IELTS PROGRAM (6 PILLARS) */}
      <section id="why-gla" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Why Choose TGLA?</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              6 Pillars of IELTS Success
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Why hundreds of students achieve their target Band 7.5+ and 8.0+ on their very first attempt with The Global Language Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGlaPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40 group-hover:bg-purple group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-display">{pillar.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3 font-display">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. SECTION 7 & 8: REVIEWS, FAQS, & ENROLLMENT BANNER */}
      <section id="reviews" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Verified Testimonials */}
          {course.testimonials && course.testimonials.length > 0 && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-purple">Verified Student Results</span>
                <h2 className="text-3xl font-black font-display text-navy tracking-tight">
                  Real Band Scorecards & Reviews
                </h2>
              </div>

              <div className="relative max-w-3xl mx-auto flex items-center gap-2 sm:gap-6">
                {/* Prev button */}
                <button
                  onClick={prevReview}
                  type="button"
                  className="p-2 sm:p-3.5 rounded-full bg-card border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0 active:scale-95"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Reviews display container */}
                <div className="flex-1 overflow-hidden py-4">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${activeReviewIdx * 100}%)` 
                    }}
                  >
                    {course.testimonials.map((test) => (
                      <div key={test.id} className="w-full shrink-0 px-2 sm:px-4">
                        <TestimonialCard testimonial={test} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next button */}
                <button
                  onClick={nextReview}
                  type="button"
                  className="p-2 sm:p-3.5 rounded-full bg-card border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0 active:scale-95"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {course.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIdx(idx)}
                    type="button"
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeReviewIdx === idx ? 'bg-purple w-8' : 'bg-navy-muted/30 w-2 hover:bg-navy-muted/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Questions Answered</span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-navy tracking-tight mt-1">
                Frequently Asked Questions About IELTS
              </h2>
            </div>
            <FAQAccordion faqs={course.faqs || []} />
          </div>

          {/* Back Cover Advertisement / Final Enrollment Callout */}
          <div id="trial" className="bg-gradient-to-tr from-[#00122E] via-[#092b5a] to-[#00122E] text-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-purple rounded-full blur-3xl opacity-30 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-purple/40 text-purple-200 px-3.5 py-1 rounded-full border border-purple-300/30 w-fit">
                  Shape Your Future
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white leading-tight">
                  Ready to Begin Your IELTS Journey? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-200 to-blue-400">
                    WE GUIDE. YOU GROW. YOU SUCCEED.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Enrol today and take the first step towards your target band score. Contact our academic advisors for batch timings, fee structures, and a <strong>Free 1-on-1 Diagnostic Test</strong>.
                </p>

                {/* 4 Highlights Bullets */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs font-bold text-slate-200">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Focused Prep
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Expert Faculty
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Proven Strategies
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Excellent Results
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/919217999511?text=Hi%20TGLA,%20I%20am%20interested%20in%20the%20IELTS%20Preparation%20Course.%20Please%20schedule%20my%20free%20diagnostic%20test."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+919217999511"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 92179 99511</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. RELATED COURSES */}
      <section className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More Programs</span>
            <h2 className="text-3xl font-black font-display text-navy tracking-tight">
              Other Language Courses at TGLA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="hover-lift bg-white dark:bg-[#0b1a2e] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-navy mb-1">
                    <FormattedTitle title={rel.title} bracketClassName="text-sm font-semibold text-purple mt-0.5" />
                  </h3>
                  <p className="text-xs text-navy-muted leading-relaxed">{rel.shortDescription}</p>
                </div>
                <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                  <span className="text-xs font-bold text-purple">⏱️ {rel.durationLabel}</span>
                  <Link
                    href={`/courses/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-purple transition-colors"
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
