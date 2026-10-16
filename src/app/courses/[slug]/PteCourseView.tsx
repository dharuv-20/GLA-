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
  Bot,
  Layers,
  Headphones,
  Check,
  FileCheck2,
  Cpu,
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
  Star
} from 'lucide-react';
import { Course, Testimonial, FAQItem, StudentResult } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import { PteLeadForm } from '@/features/lead-capture/components/CourseEnrollmentForm';
import FormattedTitle from '@/components/FormattedTitle';

interface PteCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

export default function PteCourseView({ course, relatedCourses }: PteCourseViewProps) {
  const [activeTaskTab, setActiveTaskTab] = useState<'all' | 'speaking' | 'reading' | 'listening'>('all');
  const [activeViewMode, setActiveViewMode] = useState<'cards' | 'table'>('cards');
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? course.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === course.testimonials.length - 1 ? 0 : prev + 1));
  };

  // Section 1: PTE at a Glance (6 Core Cards)
  const pteGlanceFeatures = [
    {
      icon: Building,
      title: "3,000+ Global Universities",
      description: "Accepted worldwide by prestigious institutions including Harvard, INSEAD, Yale, Oxford, and top Australian, UK, and European universities.",
      tag: "Academic Recognition",
      accent: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40"
    },
    {
      icon: PlaneTakeoff,
      title: "Australia, UK & NZ Migration",
      description: "Approved for Australian (SkillSelect 189/190), UK (PTE Academic UKVI), and New Zealand student and skilled work visa pathways.",
      tag: "Visa & Immigration",
      accent: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40"
    },
    {
      icon: Clock,
      title: "48-Hour Result Turnaround",
      description: "Official score reports typically delivered within 48 hours of test completion—often in under 24 hours.",
      tag: "Fastest Results",
      accent: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40"
    },
    {
      icon: Bot,
      title: "100% Computer-Based & AI-Scored",
      description: "Responses evaluated by Pearson's patented AI algorithms, significantly reducing human examiner subjectivity.",
      tag: "Objective AI Scoring",
      accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40"
    },
    {
      icon: FileCheck2,
      title: "2-Year Official Score Validity",
      description: "Scores remain valid for 2 years and can be sent online to an unlimited number of institutions worldwide at no extra fee.",
      tag: "Free Score Reports",
      accent: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800/40"
    },
    {
      icon: Laptop,
      title: "2-Hour Single Sitting",
      description: "Completed in a single continuous session (~2 hours) available year-round at 400+ Pearson VUE test centers globally.",
      tag: "Single Sitting",
      accent: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/40"
    }
  ];

  // Section 2.2: Part 1 — Speaking and Writing Tasks (7 Tasks)
  const speakingWritingTasks = [
    {
      id: "spk-1",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Read Aloud",
      skills: "Speaking + Reading",
      time: "30–40 seconds",
      whatToDo: "Read a short academic text aloud after a tone. Focus on pronunciation, oral fluency, and natural sentence rhythm.",
      weight: "High Score Contribution",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "spk-2",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Repeat Sentence",
      skills: "Speaking + Listening",
      time: "15 seconds",
      whatToDo: "Listen to a 3–9 second recording and repeat the sentence word-for-word with identical pacing and intonation.",
      weight: "Crucial for Listening Score",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-500"
    },
    {
      id: "spk-3",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Describe Image",
      skills: "Speaking",
      time: "40 seconds",
      whatToDo: "Describe a graph, bar chart, map, diagram, or process illustration. Use structured template connectors for fluency.",
      weight: "Speaking Fluency Anchor",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600"
    },
    {
      id: "spk-4",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Re-tell Lecture",
      skills: "Speaking + Listening",
      time: "40 seconds",
      whatToDo: "Listen to an academic lecture or interview (up to 90s) and retell its core arguments and supporting details in your own words.",
      weight: "Dual Skill Assessed",
      color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-600"
    },
    {
      id: "spk-5",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Answer Short Question",
      skills: "Speaking + Listening",
      time: "10 seconds",
      whatToDo: "Listen to a simple general knowledge or contextual question and respond with a concise one-word or short-phrase answer.",
      weight: "Vocabulary Precision",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-600"
    },
    {
      id: "wrt-1",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Summarise Written Text",
      skills: "Writing + Reading",
      time: "10 minutes per item",
      whatToDo: "Read a 300-word passage and write a single, grammatically flawless sentence of 5–75 words capturing the main theme.",
      weight: "Complex Sentence Syntax",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "wrt-2",
      section: "Part 1: Speaking & Writing",
      category: "speaking",
      task: "Write Essay",
      skills: "Writing",
      time: "20 minutes",
      whatToDo: "Write a 250–300-word argumentative, problem-solution, or discursive essay following structured templates.",
      weight: "Writing Discourse Rubric",
      color: "border-rose-500/30 bg-rose-500/5 text-rose-600"
    }
  ];

  // Section 2.2: Part 2 — Reading Tasks (5 Tasks)
  const readingTasks = [
    {
      id: "rdg-1",
      section: "Part 2: Reading",
      category: "reading",
      task: "Reading & Writing: Fill in the Blanks",
      skills: "Reading + Writing",
      time: "Self-paced (~2 mins/item)",
      whatToDo: "Drag and drop words from a contextual bank into appropriate blanks. High score contribution to both Reading and Writing.",
      weight: "🔥 Highest Marks in Reading",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600"
    },
    {
      id: "rdg-2",
      section: "Part 2: Reading",
      category: "reading",
      task: "Multiple Choice (Multiple Answers)",
      skills: "Reading",
      time: "Self-paced",
      whatToDo: "Read an academic text and select more than one correct response. Negative marking applies for incorrect options.",
      weight: "Negative Marking Beware",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-600"
    },
    {
      id: "rdg-3",
      section: "Part 2: Reading",
      category: "reading",
      task: "Re-order Paragraphs",
      skills: "Reading",
      time: "Self-paced",
      whatToDo: "Drag and re-arrange jumbled text boxes into their original, logical sequential order using discourse marker clues.",
      weight: "Coherence & Logic Pairs",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-500"
    },
    {
      id: "rdg-4",
      section: "Part 2: Reading",
      category: "reading",
      task: "Fill in the Blanks (Reading)",
      skills: "Reading",
      time: "Self-paced",
      whatToDo: "Select the correct vocabulary word from a dropdown menu for each blank in a short passage.",
      weight: "Collocations & Context",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "rdg-5",
      section: "Part 2: Reading",
      category: "reading",
      task: "Multiple Choice (Single Answer)",
      skills: "Reading",
      time: "Self-paced",
      whatToDo: "Read a short passage and choose the single correct option answering a specific comprehension question.",
      weight: "Focused Main Idea",
      color: "border-slate-500/30 bg-slate-500/5 text-slate-600 dark:text-slate-300"
    }
  ];

  // Section 2.2: Part 3 — Listening Tasks (8 Tasks)
  const listeningTasks = [
    {
      id: "lst-1",
      section: "Part 3: Listening",
      category: "listening",
      task: "Summarise Spoken Text",
      skills: "Listening + Writing",
      time: "10 minutes per item",
      whatToDo: "Listen to a 60–90 second lecture and write a 50–70 word summary capturing key ideas and main supporting points.",
      weight: "Dual Marks (Listening & Writing)",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "lst-2",
      section: "Part 3: Listening",
      category: "listening",
      task: "Multiple Choice (Multiple Answers)",
      skills: "Listening",
      time: "Self-paced",
      whatToDo: "Listen to an audio recording and select all correct options. Negative marking applies for wrong selections.",
      weight: "Negative Marking Beware",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-600"
    },
    {
      id: "lst-3",
      section: "Part 3: Listening",
      category: "listening",
      task: "Fill in the Blanks",
      skills: "Listening + Writing",
      time: "Audio Duration + Typing",
      whatToDo: "Follow an on-screen transcript while audio plays and type the missing words in real-time. Tests spelling precision.",
      weight: "Spelling Precision",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-500"
    },
    {
      id: "lst-4",
      section: "Part 3: Listening",
      category: "listening",
      task: "Highlight Correct Summary",
      skills: "Listening + Reading",
      time: "Self-paced",
      whatToDo: "Listen to an audio clip and choose the written paragraph that best synthesizes the spoken points.",
      weight: "Summary Synthesis",
      color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-600"
    },
    {
      id: "lst-5",
      section: "Part 3: Listening",
      category: "listening",
      task: "Multiple Choice (Single Answer)",
      skills: "Listening",
      time: "Self-paced",
      whatToDo: "Listen to an audio snippet and select the one correct option based on speaker intent or factual detail.",
      weight: "Intent & Tone",
      color: "border-slate-500/30 bg-slate-500/5 text-slate-600 dark:text-slate-300"
    },
    {
      id: "lst-6",
      section: "Part 3: Listening",
      category: "listening",
      task: "Select Missing Word",
      skills: "Listening",
      time: "Audio Duration",
      whatToDo: "Listen to a recording where the final word or phrase is replaced by a beep. Predict the correct word from the options.",
      weight: "Contextual Prediction",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-600"
    },
    {
      id: "lst-7",
      section: "Part 3: Listening",
      category: "listening",
      task: "Highlight Incorrect Words",
      skills: "Listening + Reading",
      time: "Real-time as audio plays",
      whatToDo: "Click on words in the transcript that differ from what the speaker actually says. Negative marking applies.",
      weight: "Real-time Attention",
      color: "border-rose-500/30 bg-rose-500/5 text-rose-600"
    },
    {
      id: "lst-8",
      section: "Part 3: Listening",
      category: "listening",
      task: "Write from Dictation",
      skills: "Listening + Writing",
      time: "Self-paced (~1–2 min)",
      whatToDo: "Hear a short sentence (3–5 seconds) and type it word-for-word with exact spelling and punctuation.",
      weight: "🔥 Highest Score Impact in PTE",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600"
    }
  ];

  // Combined tasks
  const allTasks = [...speakingWritingTasks, ...readingTasks, ...listeningTasks];
  const displayedTasks = activeTaskTab === 'all'
    ? allTasks
    : allTasks.filter(t => t.category === activeTaskTab);

  // Section 3.1: CEFR Mapping & Score Scale
  const scoreScales = [
    {
      scoreRange: "85–90",
      cefr: "C2",
      proficiency: "Mastery / Proficient User — Expert Level",
      notes: "Equivalent to IELTS 8.5–9.0. Top target for maximum immigration points (Aus 20 points)."
    },
    {
      scoreRange: "76–84",
      cefr: "C1",
      proficiency: "Effective Operational Proficiency",
      notes: "Equivalent to IELTS 7.5–8.0. Qualifies for top-tier Ivy League and European graduate programs."
    },
    {
      scoreRange: "59–75",
      cefr: "B2",
      proficiency: "Vantage / Independent User — Upper-Intermediate",
      notes: "Equivalent to IELTS 6.5–7.0. Standard benchmark for UKVI student visas and Australian admissions."
    },
    {
      scoreRange: "43–58",
      cefr: "B1",
      proficiency: "Threshold / Independent User — Intermediate",
      notes: "Equivalent to IELTS 5.0–6.0. Standard baseline for pathway/foundation programs."
    },
    {
      scoreRange: "30–42",
      cefr: "A2",
      proficiency: "Waystage / Basic User",
      notes: "Basic communication in familiar contexts."
    },
    {
      scoreRange: "10–29",
      cefr: "A1",
      proficiency: "Breakthrough / Below Basic",
      notes: "Initial entry-level knowledge of English."
    }
  ];

  // Section 3.2: Typical Score Requirements
  const visaScoreRequirements = [
    {
      purpose: "UK Student Visa (UKVI)",
      score: "Overall 59 (Min 59 in each skill)",
      notes: "Requires PTE Academic UKVI version taken at a SELT-approved centre."
    },
    {
      purpose: "Australia Student Visa",
      score: "Overall 50 (Min 50 in each skill)",
      notes: "Certain university master's and clinical courses require 58–65."
    },
    {
      purpose: "Australia Skilled Migration (189/190)",
      score: "Overall 65+ (Proficient) / 79+ (Superior)",
      notes: "Scores of 79+ yield 20 immigration points (maximum available points)."
    },
    {
      purpose: "New Zealand Visa",
      score: "Overall 50–65",
      notes: "Specific cutoff depends on student or skilled migrant visa category."
    },
    {
      purpose: "Top Global Universities (UK/Australia)",
      score: "65–79 Overall",
      notes: "Each institution and faculty sets its own minimum module cut-offs."
    },
    {
      purpose: "Elite Universities (US / EU)",
      score: "79+ Overall",
      notes: "Check individual faculty requirements (e.g., Harvard, Yale, INSEAD)."
    }
  ];

  // Section 4.1: AI Scoring Analysis Matrix
  const aiScoringCriteria = [
    {
      skill: "Speaking",
      icon: Mic,
      aiAnalyses: "Oral fluency, pronunciation, acoustic rhythm, stress patterns, speech rate, and content keyword match.",
      howToScoreHigh: "Maintain continuous flow without hesitation or 'um/ah' pauses. Clear articulation rather than speed."
    },
    {
      skill: "Writing",
      icon: PenTool,
      aiAnalyses: "Grammar accuracy, spelling, lexical range, text coherence, and strict adherence to word count limits (5–75 for SWT; 250–300 for Essay).",
      howToScoreHigh: "Use proven essay and SWT structure formulas. Zero spelling mistakes in academic vocabulary."
    },
    {
      skill: "Reading",
      icon: BookOpen,
      aiAnalyses: "Comprehension accuracy, contextual collocation recognition, and vocabulary in context across fill in the blanks.",
      howToScoreHigh: "Prioritize Reading & Writing Fill in the Blanks and Re-order paragraphs for maximum points."
    },
    {
      skill: "Listening",
      icon: Headphones,
      aiAnalyses: "Spoken comprehension, transcript discrepancy identification, and 100% accurate spelling in Write from Dictation.",
      howToScoreHigh: "Write from Dictation and Repeat Sentence contribute heavily to total Listening marks."
    }
  ];

  // Section 5: PTE vs IELTS Comparison & Official Concordance
  const pteIeltsConcordance = [
    { pteScore: "84 – 90", ieltsBand: "9.0", cefr: "C2", targetProfile: "Expert User • Elite Doctorate / Faculty & High Academic Research" },
    { pteScore: "79 – 83", ieltsBand: "8.0", cefr: "C1+", targetProfile: "Superior English • 20 Australia PR Points / Oxford, Cambridge, Ivy League" },
    { pteScore: "65 – 78", ieltsBand: "7.0 – 7.5", cefr: "C1", targetProfile: "Proficient English • 10 Australia PR Points / Top UK & Australian Master's" },
    { pteScore: "58 – 64", ieltsBand: "6.5", cefr: "B2+", targetProfile: "Competitive Undergraduate & Most Master's Programs (UK, Canada, Australia)" },
    { pteScore: "50 – 57", ieltsBand: "6.0", cefr: "B2", targetProfile: "Competent English • Australia Subclass 500 Student Visa Benchmark" },
    { pteScore: "42 – 49", ieltsBand: "5.5", cefr: "B1+", targetProfile: "Foundation / Diploma / Vocational Pathways & Trade Certificates" },
    { pteScore: "36 – 41", ieltsBand: "5.0", cefr: "B1", targetProfile: "Baselines for Specific Skilled Work & Regional Visas" },
    { pteScore: "29 – 35", ieltsBand: "4.5", cefr: "A2+", targetProfile: "Elementary English / Preparatory ELICOS English Packages" }
  ];

  const pteVsIeltsData = [
    { feature: "Test Format", pte: "100% Computer-based (Keyboard & Headset)", ielts: "Paper-based or Computer-delivered" },
    { feature: "Scoring Engine", pte: "Patented AI scoring without human examiners", ielts: "Human examiners evaluate Speaking & Writing" },
    { feature: "Result Turnaround", pte: "Within 48 hours (often in under 24 hrs)", ielts: "3–5 days online (CDI) or 13 days (Paper)" },
    { feature: "Test Duration", pte: "Approximately 2 hours in a single sitting", ielts: "Approx 2h 45m (Speaking scheduled separately)" },
    { feature: "Speaking Format", pte: "Recorded into microphone; AI acoustic analysis", ielts: "Face-to-face 1-on-1 interview with examiner" },
    { feature: "Score Scale", pte: "10–90 Scale (Global Scale of English)", ielts: "1–9 Band Scale (0.5 band increments)" },
    { feature: "Score Validity", pte: "2 Years from test date", ielts: "2 Years from test date" },
    { feature: "Rescheduling Flexibility", pte: "Book up to 24 hrs in advance at 400+ centres", ielts: "Fixed test dates subject to regional capacity" },
    { feature: "Score Sending", pte: "Free unlimited online score sends to institutions", ielts: "Free up to 5 institutions; fee for extra" }
  ];

  // Section 6.1: Study Modules A to H
  const glaPteCurriculum = [
    { code: "Module A", title: "Diagnostic Assessment & Baseline AI Audit", icon: Target, desc: "Identify baseline score, acoustic pitch calibration, and section weakness mapping." },
    { code: "Module B", title: "Speaking Fluency & Acoustic Pitch Calibration", icon: Mic, desc: "Read Aloud, Repeat Sentence, Describe Image & Re-tell Lecture template mastery." },
    { code: "Module C", title: "Writing Section Formulas & Essay Frameworks", icon: PenTool, desc: "One-sentence SWT mastery (5–75 words) and 250–300 words essay templates." },
    { code: "Module D", title: "Reading Blanks & Collocation Strategy", icon: BookOpen, desc: "Drag & drop fill in the blanks mastery and paragraph re-ordering logic." },
    { code: "Module E", title: "Listening Mastery & Dictation Accuracy", icon: Headphones, desc: "Write from Dictation high-frequency bank drills and SST summary formulas." },
    { code: "Module F", title: "AI Portal Drills & Algorithm Optimisation", icon: Bot, desc: "Live practice on AI platforms replicating Pearson's scoring criteria." },
    { code: "Module G", title: "Time Management & Negative Marking Control", icon: Clock, desc: "Strategies to pace Reading and prevent penalty marks in multiple-choice tasks." },
    { code: "Module H", title: "Full-Length Scored Mock Simulations", icon: Award, desc: "Full 2-hour exam simulations in our computer testing lab with detailed diagnostic reports." }
  ];

  // Section 6.3: Online Portals & Platforms
  const pteOnlinePortals = [
    { name: "Pearson Official Platform", owner: "Pearson PLC", desc: "Official Pearson Scored Practice Tests replicating exact algorithm calibration.", badge: "Official Pearson" },
    { name: "E2Language PTE", owner: "E2 Network", desc: "World-renowned method lessons, task templates, and expert video breakdowns.", badge: "Method Templates" },
    { name: "PTE Magic Portal", owner: "AI Practice Suite", desc: "AI-evaluated speaking drills and real-time pronunciation scoring engine.", badge: "Real-time AI Feedback" },
    { name: "PTE Study / PTEGURU", owner: "Question Banks", desc: "Extensive practice banks for high-frequency repeated exam questions.", badge: "Repeated Exam Banks" },
    { name: "Video Strategy Guides", owner: "TGLA Video Portal", desc: "Step-by-step masterclass walkthroughs for every single task type.", badge: "Video Walkthroughs" },
    { name: "Write from Dictation Banks", owner: "TGLA Prediction Vault", desc: "Updated weekly with high-probability sentences appearing in recent exams.", badge: "Weekly Prediction" }
  ];

  // Section 7: Why Choose TGLA (8 Core Pillars)
  const whyGla8Pillars = [
    { number: "01", title: "AI-Aligned Teaching", desc: "We train you on how the Pearson AI scoring engine evaluates speech, stress, and text, ensuring maximum algorithmic marks.", icon: Bot },
    { number: "02", title: "Official Pearson Materials", desc: "Access official Pearson question banks and authentic scored practice exams.", icon: BookOpen },
    { number: "03", title: "Fast-Results Coaching", desc: "Accelerated preparation pathways designed to achieve your target 65+ or 79+ score in 2 to 4 weeks.", icon: Zap },
    { number: "04", title: "AI-Scored Mock Tests", desc: "Practice under realistic exam conditions with instant AI diagnostic feedback and scorecards.", icon: Laptop },
    { number: "05", title: "Task-by-Task Strategy", desc: "Master proven formulas for Describe Image, Re-tell Lecture, Summarise Written Text, and Essay.", icon: Target },
    { number: "06", title: "Personalised Score Plan", desc: "Targeted study schedules focused on your individual score requirements (e.g. 50, 65, or 79+).", icon: TrendingUp },
    { number: "07", title: "AI Portal Integration", desc: "Seamless access to leading PTE AI practice platforms and weekly prediction banks.", icon: Cpu },
    { number: "08", title: "Small Batches (5 to 7 Students)", desc: "Small class sizes ensure personal acoustic feedback, mic positioning checks, and 1-on-1 attention.", icon: Users }
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
                  <Bot className="w-3.5 h-3.5 text-purple-hero" />
                  PTE Essentials — Course Material
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-400/30">
                  AI-Scored & 48-Hour Results
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
                Everything you need to prepare, practise, and achieve your best in the PTE Test. 
                Accepted by 3,000+ universities and approved for Australian, UK, and New Zealand student and skilled migration applications.
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
                    <span className="block text-xs font-bold text-white">Practice Smartly</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 hover:border-purple/30 transition-colors">
                    <span className="block text-xs font-bold text-white">Achieve Excellence</span>
                  </div>
                </div>
              </div>

              {/* Sub-Motto Pill */}
              <div className="p-3 sm:p-3.5 bg-gradient-to-r from-purple/30 via-slate-800/60 to-emerald-900/30 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 text-center lg:text-left">
                🎯 <strong className="text-white">Your Results. Closer to Your Goals. English Proficiency. Global Opportunities.</strong> Master all 20 tasks with official AI mock simulations.
              </div>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-2 border-t border-white/10">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Clock className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Test Duration</span>
                    <span className="text-xs font-extrabold text-white">~2 Hours (Single Sitting)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Results In</span>
                    <span className="text-xs font-extrabold text-white">Within 48 Hours</span>
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
                  <Award className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Target Score</span>
                    <span className="text-xs font-extrabold text-white">65+ to 79+ / 90</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)]">
                <PteLeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 1: WHAT IS PTE & PTE AT A GLANCE */}
      <section id="overview" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">1. Introduction & Overview</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              What Is PTE?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              <strong>PTE (Pearson Test of English)</strong> is a computer-based English language proficiency test developed and administered by <strong>Pearson PLC</strong>, one of the world&apos;s largest education companies.
              It evaluates the real-life English language skills of non-native speakers using Artificial Intelligence (AI) to eliminate human examiner subjectivity, delivering official results within <strong>48 hours</strong>.
            </p>
          </div>

          {/* 6 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
            {pteGlanceFeatures.map((item, idx) => {
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

          {/* Section 1.1: PTE at a Glance Banner */}
          <div className="bg-[#00122E] dark:bg-[#041226] text-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">PTE at a Glance</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                  Fastest Result Turnaround with AI-Powered Objective Evaluation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  PTE is accepted by over 3,000 universities and colleges worldwide including Harvard, Yale, INSEAD, and prestigious Russell Group universities. It is fully approved for Australian SkillSelect visas (yielding up to 20 immigration points), UK Home Office visas (PTE Academic UKVI), and New Zealand migration pathways.
                </p>
              </div>
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-emerald-400 font-display">3,000+</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Universities</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-emerald-400 font-display">48 Hrs</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Results</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-emerald-400 font-display">400+</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">VUE Centres</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-black text-emerald-400 font-display">2 Years</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Validity</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: STRUCTURE OF PTE & 20 TASK TYPES */}
      <section id="structure" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">2. Structure of the PTE Test</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Test Format & All 20 Task Types
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              PTE is a single-session, computer-delivered test lasting approximately <strong>2 hours</strong>. 
              The test begins with an unscored 1-minute personal introduction, followed by three integrated scored parts assessing all four language skills simultaneously.
            </p>
          </div>

          {/* Section 2.1 Table: The Three Parts of PTE */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm mb-12">
            <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
              <h3 className="text-base font-bold font-display">2.1 The Three Parts of PTE</h3>
              <span className="text-xs font-semibold text-purple-200 bg-purple/35 px-3 py-1 rounded-full border border-purple/30">
                Total Duration: ~2 Hours
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Test Part</th>
                    <th className="py-3.5 px-4 sm:px-6">Time Allowed</th>
                    <th className="py-3.5 px-4 sm:px-6">Skills Assessed</th>
                    <th className="py-3.5 px-4 sm:px-6">Core Format Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-purple">Part 1: Speaking & Writing</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">54–67 minutes</td>
                    <td className="py-3.5 px-4 sm:px-6">Speaking and Writing</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">7 integrated tasks including Read Aloud, Repeat Sentence, Essay</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-purple">Part 2: Reading</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">29–30 minutes</td>
                    <td className="py-3.5 px-4 sm:px-6">Reading (integrated Writing)</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">5 tasks including high-scoring Fill in the Blanks & Re-order paragraphs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-purple">Part 3: Listening</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">30–43 minutes</td>
                    <td className="py-3.5 px-4 sm:px-6">Listening, Reading & Writing</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">8 tasks including high-weightage Write from Dictation & SST</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors bg-purple-50/40 dark:bg-purple-950/20">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-navy-muted">Personal Introduction</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-navy-muted">~1 minute</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">Unscored</td>
                    <td className="py-3.5 px-4 sm:px-6 text-navy-muted">Recorded voice profile sent to selected universities/institutions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2.2 Task Types Interactive Filter & View Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center bg-white dark:bg-[#0b1a2e] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setActiveTaskTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTaskTab === 'all'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                All 20 Tasks
              </button>
              <button
                onClick={() => setActiveTaskTab('speaking')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTaskTab === 'speaking'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Speaking & Writing (7)
              </button>
              <button
                onClick={() => setActiveTaskTab('reading')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTaskTab === 'reading'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Reading (5)
              </button>
              <button
                onClick={() => setActiveTaskTab('listening')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTaskTab === 'listening'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-navy-muted hover:text-navy'
                }`}
              >
                Listening (8)
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex bg-white dark:bg-[#0b1a2e] p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setActiveViewMode('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeViewMode === 'cards' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted'
                }`}
              >
                Card View
              </button>
              <button
                onClick={() => setActiveViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeViewMode === 'table' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted'
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          {/* Task Showcase: Cards or Table */}
          {activeViewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
              {displayedTasks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/40">
                        {item.section.split(':')[0]}
                      </span>
                      <span className="text-[10px] font-bold text-navy-muted bg-slate-100 dark:bg-[#071322] px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800">
                        ⏱️ {item.time}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5 font-display group-hover:text-purple transition-colors">
                      {item.task}
                    </h3>
                    
                    <div className="text-xs font-bold text-purple mb-3">
                      Skills: <span className="text-navy">{item.skills}</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-[#071322] p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-muted block mb-1">What to Do:</span>
                      <p className="text-xs text-navy leading-relaxed">{item.whatToDo}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      {item.weight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm mb-12">
              <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
                <h3 className="text-base font-bold font-display">2.2 Task Types Specification Table</h3>
                <span className="text-xs font-semibold text-purple-200">Showing {displayedTasks.length} Tasks</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
                  <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Task Name</th>
                      <th className="py-3.5 px-4 sm:px-6">Section</th>
                      <th className="py-3.5 px-4 sm:px-6">Skills Assessed</th>
                      <th className="py-3.5 px-4 sm:px-6">Time per Item</th>
                      <th className="py-3.5 px-4 sm:px-6">What to Do</th>
                      <th className="py-3.5 px-4 sm:px-6">Scoring Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                    {displayedTasks.map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-purple">{t.task}</td>
                        <td className="py-3.5 px-4 sm:px-6 text-navy-muted">{t.section.split(':')[0]}</td>
                        <td className="py-3.5 px-4 sm:px-6 font-semibold">{t.skills}</td>
                        <td className="py-3.5 px-4 sm:px-6 text-navy-muted">{t.time}</td>
                        <td className="py-3.5 px-4 sm:px-6 text-xs text-navy leading-relaxed max-w-xs">{t.whatToDo}</td>
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-600 dark:text-emerald-400 text-xs">{t.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. SECTION 3: PTE SCORING SYSTEM (10–90 SCALE & CEFR) */}
      <section id="scoring" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">3. Scoring System</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              PTE 10–90 Score Scale & CEFR Mapping
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              PTE uses a granular score scale of <strong>10–90</strong>, fully aligned with the Global Scale of English (GSE) and the Common European Framework of Reference for Languages (CEFR).
            </p>
          </div>

          {/* 3-Tier Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Metric 1</span>
              <h3 className="text-lg font-bold font-display text-navy mb-2">Overall Score (10–90)</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Comprehensive measure of global English proficiency reflecting your combined performance across all communicative tasks.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Metric 2</span>
              <h3 className="text-lg font-bold font-display text-navy mb-2">Communicative Skills (4 Skills)</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Individual standalone sub-scores for <strong>Speaking, Writing, Reading, and Listening</strong>, each reported on the 10–90 scale.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">Metric 3</span>
              <h3 className="text-lg font-bold font-display text-navy mb-2">Enabling Skills Profiling</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Detailed diagnostic sub-parameters: Grammar, Oral Fluency, Pronunciation, Spelling, Vocabulary, and Written Discourse.
              </p>
            </div>
          </div>

          {/* Table 3.1: CEFR Score Scale */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm mb-12">
            <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
              <h3 className="text-base font-bold font-display">3.1 Overall Score Scale & CEFR Levels</h3>
              <span className="text-xs font-semibold text-purple-200">Scale: 10–90</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">PTE Score Range</th>
                    <th className="py-3.5 px-4 sm:px-6">CEFR Level</th>
                    <th className="py-3.5 px-4 sm:px-6">Proficiency Description</th>
                    <th className="py-3.5 px-4 sm:px-6">TGLA Strategic Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                  {scoreScales.map((scale, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-black text-purple text-base">{scale.scoreRange}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold">{scale.cefr}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold">{scale.proficiency}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-navy-muted">{scale.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 3.2: Typical Score Requirements for Visas & Universities */}
          <div className="bg-slate-50 dark:bg-[#071322] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                <PlaneTakeoff className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Section 3.2</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-navy">Typical Visa & University Score Requirements</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {visaScoreRequirements.map((req, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">
                      {req.purpose}
                    </span>
                    <h4 className="text-lg font-black font-display text-navy mb-2">{req.score}</h4>
                    <p className="text-xs text-navy-muted leading-relaxed">{req.notes}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    ✓ Full Coaching Available at TGLA
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-navy-muted mt-6 italic">
              *Note: Actual visa and university requirements depend on the specific application subclass, university faculty, and regulations in force at the time of booking.
            </p>
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: COMPUTER-BASED TESTING & AI SCORING */}
      <section id="ai-scoring" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">4. Automated AI Evaluation</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Computer-Based Testing & How AI Scoring Works
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Every task involving Speaking, Writing, Reading, and Listening is completed on a computer at a Pearson VUE test centre. 
              Pearson&apos;s automated AI scoring engine evaluates your responses according to objective linguistic parameters, removing examiner bias.
            </p>
          </div>

          {/* 4.1 AI Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {aiScoringCriteria.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">4.1 AI Parameter</span>
                        <h3 className="text-xl font-bold font-display text-navy">{item.skill} Scoring Engine</h3>
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-muted block mb-1">What the AI Analyses:</span>
                        <p className="text-xs sm:text-sm font-medium text-navy leading-relaxed">{item.aiAnalyses}</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-[#071322] p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">TGLA Score Booster Strategy:</span>
                        <p className="text-xs text-navy-muted leading-relaxed">{item.howToScoreHigh}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4.2 PTE UKVI Callout */}
          <div className="bg-[#00122E] dark:bg-[#041226] text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">4.2 PTE Academic UKVI</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Approved Secure English Language Test (SELT) for UK Visas
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  PTE Academic UKVI is an approved Secure English Language Test (SELT) required for UK Student Visas, Skilled Worker Visas, and Health & Care Worker Visas. The test content, scoring, and format are identical to standard PTE Academic, but administered at UKVI-approved test centres with Home Office SELT verification.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-2 justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Approved for UK Student Visas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SELT Number Issued Instantly</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Results in under 48 Hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: PTE VS IELTS SIDE-BY-SIDE COMPARISON & SCORE CONCORDANCE */}
      <section id="comparison" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">5. Test Comparison & Concordance</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              PTE Academic vs IELTS: Which Exam Is Right for You?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Understand the official score concordance, testing formats, AI vs human scoring models, and immigration point allocations to choose the optimal English credential.
            </p>
          </div>

          {/* Answer-First Decision Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-purple text-white font-bold flex items-center justify-center text-sm shadow-md shadow-purple/20">
                  PTE
                </span>
                <h3 className="text-lg font-bold font-display text-navy">Choose PTE Academic If You:</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-navy-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Prefer AI evaluation:</strong> Feel nervous talking to a face-to-face human examiner or want 100% objective algorithm scoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Need fast results:</strong> Urgent university or visa deadline needing official scorecards within 24 to 48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Target Australia / New Zealand PR:</strong> High-frequency template techniques make targeting 79+ (20 PR points) predictable with rigorous coaching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Single 2-hour sitting:</strong> Complete all 4 communicative skills in one continuous morning or afternoon session.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-xl bg-navy text-white font-bold flex items-center justify-center text-sm shadow-md">
                  IELTS
                </span>
                <h3 className="text-lg font-bold font-display text-navy">Choose IELTS If You:</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-navy-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Prefer conversational human interview:</strong> Excel at natural human interaction and conversational body language.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Handwriting preference:</strong> Choose the paper-based test if typing speed on a QWERTY keyboard is an obstacle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Canada Express Entry (General Training):</strong> General Training IELTS remains the premier benchmark for Canada Express Entry / CLB.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Specific university mandates:</strong> A few specialised Ivy League institutions specifically request IELTS or TOEFL.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Official Concordance Scale Table */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 bg-gradient-to-r from-purple/90 to-[#00122E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold font-display">Official PTE Academic vs. IELTS Band Concordance</h3>
                <p className="text-xs text-purple-100">Standardised Pearson & CEFR Score Conversion Chart</p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-white w-fit">Updated Standards</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
                <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6 text-purple">PTE Score (10–90)</th>
                    <th className="py-3.5 px-4 sm:px-6">IELTS Band (1–9)</th>
                    <th className="py-3.5 px-4 sm:px-6">CEFR Level</th>
                    <th className="py-3.5 px-4 sm:px-6">Target Profile & Visa Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                  {pteIeltsConcordance.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-purple">{row.pteScore}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy">{row.ieltsBand}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-navy-muted">{row.cefr}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-navy-muted text-xs">{row.targetProfile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Operational Side-by-Side Comparison Matrix */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 bg-[#00122E] dark:bg-[#041226] text-white flex items-center justify-between">
              <h3 className="text-base font-bold font-display">Operational Comparison Matrix</h3>
              <span className="text-xs font-semibold text-purple-200">9 Core Dimensions</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm min-w-[650px]">
                <thead className="bg-slate-100 dark:bg-[#071322] text-navy font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Feature</th>
                    <th className="py-3.5 px-4 sm:px-6 text-purple">PTE Academic</th>
                    <th className="py-3.5 px-4 sm:px-6 text-navy">IELTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-navy">
                  {pteVsIeltsData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold">{row.feature}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-purple">{row.pte}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-navy-muted">{row.ielts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: TGLA PREPARATION PROGRAM */}
      <section id="program" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">TGLA Preparation Program</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Our 8-Module PTE Masterclass Curriculum
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Designed around official Pearson frameworks, combining physical testing lab simulations with cloud AI practice platforms.
            </p>
          </div>

          {/* 6.1 Study Modules A to H */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {glaPteCurriculum.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40 group-hover:bg-purple group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2 py-0.5 rounded-full">
                        {mod.code}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold font-display text-navy mb-2">{mod.title}</h4>
                    <p className="text-xs text-navy-muted leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 6.3 AI-Powered Online Portals & Prediction Banks */}
          <div className="bg-white dark:bg-[#0b1a2e] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Section 6.3</span>
                <h3 className="text-2xl font-bold font-display text-navy">AI-Powered Practice Portals Included</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pteOnlinePortals.map((portal, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800/40">
                        {portal.owner}
                      </span>
                      <span className="text-[9px] font-bold text-navy-muted">Portal {idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-bold font-display text-navy mb-2">{portal.name}</h4>
                    <p className="text-xs text-navy-muted leading-relaxed">{portal.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{portal.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. SECTION 7: WHY CHOOSE TGLA PTE (8 PILLARS) */}
      <section id="why-gla" className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Why Choose TGLA?</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              8 Pillars of PTE Success
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              How our AI-aligned coaching and real-time acoustic feedback guarantee scores of 65+ to 79+ on your first attempt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyGla8Pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple border border-purple-200 dark:border-purple-800/40 group-hover:bg-purple group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-black text-slate-300 dark:text-slate-700 font-display">{pillar.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2 font-display">{pillar.title}</h3>
                    <p className="text-xs text-navy-muted leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. SECTION 8: REVIEWS, FAQS & BACK COVER BANNER */}
      <section id="reviews" className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Verified Scorecards */}
          {course.testimonials && course.testimonials.length > 0 && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-purple">Verified Scorecards</span>
                <h2 className="text-3xl font-black font-display text-navy tracking-tight">
                  Real PTE Scorecard Results & Reviews
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
                Frequently Asked Questions About PTE
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
                  MASTER ENGLISH • PTE COURSE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-200 to-emerald-400">
                    WE GUIDE. YOU GROW. YOU SUCCEED.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Join our upcoming batch and get full access to our computer testing lab, official Pearson materials, and AI-scored mock tests. Contact our academic counselors today for a <strong>Free PTE Diagnostic Test</strong>.
                </p>

                {/* Highlights Bullets */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs font-bold text-slate-200">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ AI-Aligned Coaching
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Pearson Test Banks
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ 48-Hour Results Prep
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Target 79+ Guaranteed
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/919217999511?text=Hi%20TGLA,%20I%20am%20interested%20in%20the%20PTE%20Strategy%20Course.%20Please%20schedule%20my%20free%20diagnostic%20test."
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

      {/* 10. RELATED COURSES */}
      <section className="bg-white dark:bg-[#020a16] py-16 sm:py-24 transition-colors duration-300">
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
                className="hover-lift bg-slate-50 dark:bg-[#0b1a2e] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
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
