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
  ChevronRight,
  Building,
  PlaneTakeoff,
  Lightbulb,
  ExternalLink,
  Zap,
  CheckSquare,
  Scale,
  CalendarCheck
} from 'lucide-react';
import { Course, Testimonial, FAQItem, StudentResult } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface PteCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

export default function PteCourseView({ course, relatedCourses }: PteCourseViewProps) {
  const [activeTaskTab, setActiveTaskTab] = useState<'all' | 'speaking' | 'reading' | 'listening'>('all');
  const [activeViewMode, setActiveViewMode] = useState<'cards' | 'table'>('cards');

  // Sticky sub-nav anchor sections
  const subNavLinks = [
    { label: "1. Overview", href: "#overview" },
    { label: "2. Structure & 20 Tasks", href: "#structure" },
    { label: "3. 10-90 Scoring", href: "#scoring" },
    { label: "4. AI Scoring & UKVI", href: "#ai-scoring" },
    { label: "5. PTE vs IELTS", href: "#comparison" },
    { label: "6. GLA Prep Programme", href: "#programme" },
    { label: "7. Why GLA (8 Pillars)", href: "#why-gla" },
    { label: "8. Reviews & FAQs", href: "#reviews" },
  ];

  // Section 1: PTE at a Glance (6 Core Cards)
  const pteGlanceFeatures = [
    {
      icon: Building,
      title: "3,000+ Global Universities",
      description: "Accepted worldwide by prestigious institutions including Harvard, INSEAD, Yale, Oxford, and top Australian, UK, and European universities.",
      tag: "Academic Recognition"
    },
    {
      icon: PlaneTakeoff,
      title: "Australia, UK & NZ Migration",
      description: "Approved for Australian (SkillSelect 189/190), UK (PTE Academic UKVI), and New Zealand student and skilled work visa pathways.",
      tag: "Visa & Immigration"
    },
    {
      icon: Clock,
      title: "48-Hour Result Turnaround",
      description: "Official score reports typically delivered within 48 hours of test completion—often in under 24 hours.",
      tag: "Fastest Results"
    },
    {
      icon: Bot,
      title: "100% Computer-Based & AI-Scored",
      description: "Responses evaluated by Pearson's patented AI algorithms, significantly reducing human examiner subjectivity.",
      tag: "Objective Scoring"
    },
    {
      icon: FileCheck2,
      title: "2-Year Score Validity",
      description: "Scores remain valid for 2 years and can be sent online to an unlimited number of institutions worldwide at no extra fee.",
      tag: "Free Score Reports"
    },
    {
      icon: Laptop,
      title: "2-Hour Single Sitting",
      description: "Completed in a single continuous session (~2 hours) available year-round at 400+ Pearson VUE test centers globally.",
      tag: "Single Session"
    }
  ];

  // Section 2.2: Part 1 — Speaking and Writing Tasks (7 Tasks)
  const speakingWritingTasks = [
    {
      id: "spk-1",
      task: "Read Aloud",
      skills: "Speaking + Reading",
      time: "30–40 seconds",
      whatToDo: "Read a short academic text aloud after a tone. Focus on pronunciation, oral fluency, and natural sentence rhythm.",
      weight: "High Score Contribution",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "spk-2",
      task: "Repeat Sentence",
      skills: "Speaking + Listening",
      time: "15 seconds",
      whatToDo: "Hear a spoken sentence (3–9 seconds) and repeat it immediately with exact word sequence and natural stress.",
      weight: "High Listening + Speaking Marks",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "spk-3",
      task: "Describe Image",
      skills: "Speaking",
      time: "40 seconds",
      whatToDo: "Describe a graph, chart, map, or process image using structured fluency and overview templates without pausing.",
      weight: "Template-Driven Task",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "spk-4",
      task: "Re-tell Lecture",
      skills: "Speaking + Listening",
      time: "40 seconds",
      whatToDo: "Listen to an academic lecture (60–90 seconds) and retell its core theme, key concepts, and supporting arguments.",
      weight: "Integrated Skill Task",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "spk-5",
      task: "Answer Short Question",
      skills: "Speaking + Listening",
      time: "10 seconds",
      whatToDo: "Listen to a simple question and give a one-word or short-phrase answer assessing vocabulary accuracy.",
      weight: "Quick Vocabulary Accuracy",
      color: "border-purple/30 bg-purple/5 text-purple"
    },
    {
      id: "spk-6",
      task: "Summarise Written Text",
      skills: "Writing + Reading",
      time: "10 minutes",
      whatToDo: "Read a passage (up to 300 words) and write a single, grammatically flawless sentence summary (5–75 words).",
      weight: "Single Sentence Formula",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    },
    {
      id: "spk-7",
      task: "Write Essay",
      skills: "Writing",
      time: "20 minutes",
      whatToDo: "Write a 250–300-word argumentative or discursive essay using a structured academic template and linking language.",
      weight: "Academic Discourse Framework",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    }
  ];

  // Section 2.2: Part 2 — Reading Tasks (5 Tasks)
  const readingTasks = [
    {
      id: "rd-1",
      task: "Reading & Writing: Fill in the Blanks",
      skills: "Reading + Writing",
      format: "Drag and drop words into blank gaps within a 300-word text.",
      feature: "Identified in source material as a high-value task offering significant marks in Reading and Writing.",
      weight: "Top-Scoring Reading Task",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    },
    {
      id: "rd-2",
      task: "Multiple Choice (Multiple Answers)",
      skills: "Reading",
      format: "Read passage and select all applicable correct options from the list.",
      feature: "More than one correct answer is possible; negative scoring applies for incorrect options.",
      weight: "Partial Credit Scoring",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    },
    {
      id: "rd-3",
      task: "Re-order Paragraphs",
      skills: "Reading",
      format: "Drag jumbled text boxes into their correct logical and chronological order.",
      feature: "Tests logical sequencing, discourse connectors, and pronoun-noun references.",
      weight: "Logical Sequencing",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    },
    {
      id: "rd-4",
      task: "Fill in the Blanks (Reading)",
      skills: "Reading",
      format: "Select missing words from drop-down menus within a passage.",
      feature: "Evaluates academic vocabulary, contextual grammar, and common collocations.",
      weight: "Collocations & Context",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    },
    {
      id: "rd-5",
      task: "Multiple Choice (Single Answer)",
      skills: "Reading",
      format: "Read a passage and select one correct answer option.",
      feature: "Assesses main idea comprehension, author tone, or specific factual details.",
      weight: "Direct Comprehension",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    }
  ];

  // Section 2.2: Part 3 — Listening Tasks (8 Tasks)
  const listeningTasks = [
    {
      id: "lis-1",
      task: "Summarise Spoken Text",
      skills: "Listening + Writing",
      format: "Listen to a 60–90s lecture and write a summary of 50–70 words in 10 minutes.",
      feature: "Evaluates listening comprehension, key concept extraction, grammar, and spelling.",
      weight: "High Weightage Task",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-2",
      task: "Multiple Choice (Multiple Answers)",
      skills: "Listening",
      format: "Listen to audio recording and select all correct answer options.",
      feature: "Evaluates comprehensive understanding; negative scoring applies for incorrect selections.",
      weight: "Multi-Option Listening",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-3",
      task: "Fill in the Blanks",
      skills: "Listening + Writing",
      format: "Type missing words into text transcript while listening in real time.",
      feature: "Tests auditory recognition and strict spelling accuracy for each correct word.",
      weight: "Spelling Precision",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-4",
      task: "Highlight Correct Summary",
      skills: "Listening + Reading",
      format: "Listen to audio clip and select the one paragraph summary that best matches.",
      feature: "Tests ability to differentiate main thesis from minor supporting points.",
      weight: "Summary Matching",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-5",
      task: "Multiple Choice (Single Answer)",
      skills: "Listening",
      format: "Listen to audio and select one correct answer option.",
      feature: "Evaluates speaker intention, attitude, or specific data extraction.",
      weight: "Direct Audio Retrieval",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-6",
      task: "Select Missing Word",
      skills: "Listening",
      format: "Predict the final word or phrase replaced by a beep at the end of recording.",
      feature: "Tests contextual prediction and listening anticipation.",
      weight: "Contextual Anticipation",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-7",
      task: "Highlight Incorrect Words",
      skills: "Listening + Reading",
      format: "Click on words in transcript that differ from what the speaker says.",
      feature: "Tests real-time auditory discrepancy detection; negative scoring applies.",
      weight: "Discrepancy Detection",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      id: "lis-8",
      task: "Write from Dictation",
      skills: "Listening + Writing",
      format: "Hear a spoken sentence (3–5 seconds) and type it word-for-word.",
      feature: "Identified in source material as a high-scoring Listening task with substantial point impact.",
      weight: "Highest Score Impact in PTE",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    }
  ];

  // Section 3: CEFR & Score Scale Mapping (10–90 Scale)
  const scoringScale = [
    { score: "85 – 90", cefr: "C2", desc: "Mastery / Proficient User — Expert level", tag: "Expert (IELTS 8.5–9.0)", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { score: "76 – 84", cefr: "C1", desc: "Effective Operational Proficiency", tag: "Target 79+ (IELTS 8.0 / Max 20 PR Pts)", color: "text-purple bg-purple/10 border-purple/20" },
    { score: "59 – 75", cefr: "B2", desc: "Vantage / Independent User — Upper-Intermediate", tag: "Target 65+ (IELTS 7.0 / Direct Uni Admits)", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    { score: "43 – 58", cefr: "B1", desc: "Threshold / Independent User — Intermediate", tag: "Target 50+ (IELTS 6.0 / Aus Student Visa)", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { score: "30 – 42", cefr: "A2", desc: "Waystage / Basic User", tag: "Elementary Functional Fluency", color: "text-slate-400 bg-slate-500/10 border-slate-500/20" },
    { score: "10 – 29", cefr: "A1", desc: "Breakthrough / Below Basic", tag: "Fundamental Beginner Level", color: "text-slate-400 bg-slate-500/10 border-slate-500/20" },
  ];

  // Section 3.2: Typical Score Requirements
  const typicalRequirements = [
    { purpose: "UK Student Visa (UKVI)", score: "Overall 59 (Min 59 each)", notes: "Requires PTE Academic UKVI version taken at UKVI-approved centers." },
    { purpose: "Australia Student Visa", score: "Overall 50 (Min 50 each)", notes: "Some specialized Bachelor / Master courses require 58–65+." },
    { purpose: "Australia Skilled Migration", score: "Overall 65 (Proficient) / 79+ (Superior)", notes: "Varies by visa subclass (189/190/491); 79+ awards maximum 20 PR points." },
    { purpose: "New Zealand Visa", score: "Overall 50 – 65", notes: "Depends on specific student or skilled migrant category." },
    { purpose: "Top Universities (e.g., UK / Australia)", score: "65 – 79", notes: "Each institution and department sets its own specific cutoff." },
    { purpose: "Elite Universities (e.g., US / EU)", score: "79+", notes: "Check individual faculty guidelines for communicative band minimums." }
  ];

  // Section 4.1: How AI Scoring Works Table
  const aiAnalysisSkills = [
    {
      skill: "Speaking",
      analyzes: "Oral fluency, pronunciation, rhythm, stress, and content accuracy.",
      icon: Headphones
    },
    {
      skill: "Writing",
      analyzes: "Grammar, spelling, vocabulary range, coherence, and task fulfilment.",
      icon: FileText
    },
    {
      skill: "Reading",
      analyzes: "Comprehension accuracy and vocabulary in context.",
      icon: BookOpen
    },
    {
      skill: "Listening",
      analyzes: "Comprehension and spelling accuracy, particularly in dictation tasks.",
      icon: Laptop
    }
  ];

  // Section 5: PTE vs IELTS Quick Comparison Table
  const comparisonData = [
    {
      feature: "Test Format",
      pte: "100% computer-based at Pearson VUE test centres",
      ielts: "Paper-based or computer-delivered options"
    },
    {
      feature: "Scoring Methodology",
      pte: "AI-scored, without a human speaking examiner",
      ielts: "Human examiner involved in Speaking and Writing assessment"
    },
    {
      feature: "Result Turnaround",
      pte: "Within 48 hours, according to source material (often in 24 hrs)",
      ielts: "Source lists 13 days (paper) or 3–5 days online (computer)"
    },
    {
      feature: "Test Duration",
      pte: "Approximately 2 hours in a single unbroken sitting",
      ielts: "Approximately 2 hours 45 minutes, with Speaking separate"
    },
    {
      feature: "Speaking Format",
      pte: "Responses recorded on a computer via headset microphone",
      ielts: "Face-to-face with an examiner, as described in source"
    },
    {
      feature: "Score Scale",
      pte: "10 – 90, Global Scale of English (GSE)",
      ielts: "0 – 9 band scores"
    },
    {
      feature: "Score Validity",
      pte: "2 years from test date",
      ielts: "2 years from test date"
    },
    {
      feature: "Rescheduling Policy",
      pte: "Up to 14 days before the test, according to source",
      ielts: "Up to 5 weeks before the test, according to source"
    },
    {
      feature: "Score Sending",
      pte: "Online score sending directly to institutions (unlimited & free)",
      ielts: "Source states that a fee applies per score recipient after free quota"
    }
  ];

  // Section 6.1: Comprehensive Study Material (A to H)
  const studyMaterials = [
    { code: "A", title: "Module-by-Module Guides", desc: "Guides for all 20 PTE task types covering task-specific strategies, recommended approaches, common pitfalls, and practical score improvement techniques.", icon: BookOpen },
    { code: "B", title: "Speaking Templates", desc: "Proven response structure templates for Describe Image and Re-tell Lecture focusing on continuous oral fluency, rhythm, and information organization.", icon: Headphones },
    { code: "C", title: "Essay Writing Frameworks", desc: "Standardized templates for Write Essay covering 250–300-word argumentative and discursive structures, linking language, and idea organization.", icon: FileText },
    { code: "D", title: "Summarise Written Text Formula", desc: "A precision one-sentence summary formula designed to identify core thesis ideas and express them concisely within 5–75 words.", icon: Lightbulb },
    { code: "E", title: "High-Frequency Vocabulary Lists", desc: "Curated academic word lists and collocation banks designed specifically to support Fill in the Blanks tasks across Reading and Listening.", icon: Sparkles },
    { code: "F", title: "Write from Dictation Practice Bank", desc: "Comprehensive audio sentence bank for daily dictation practice—targeting the highest-scoring task in the Listening section.", icon: Flame },
    { code: "G", title: "Pronunciation & Oral Fluency Drills", desc: "Specialized exercises targeting pronunciation, oral fluency, rhythm, pitch modulation, and performance against Pearson's AI acoustic scoring criteria.", icon: Bot },
    { code: "H", title: "Re-order Paragraphs Strategy", desc: "Training in logical connectors, sequencing clues, discourse markers, paragraph structure, and strict time management.", icon: Layers }
  ];

  // Section 6.1.1: Official Pearson Resources Included (5 Items)
  const officialPearsonResources = [
    "Official PTE preparation materials from Pearson Education.",
    "Scored practice tests from Pearson's Official Practice Platform.",
    "Real test-format sample questions published by Pearson.",
    "AI-scored Speaking and Writing practice simulations.",
    "Official Pearson score guides and task descriptors."
  ];

  // Section 6.3: AI-Powered Online Portals Table
  const aiPortalsTable = [
    {
      portal: "Pearson Official Practice Platform",
      support: "AI-scored full mock tests using Pearson's own scoring engine, with the PTE Academic interface and scoring system."
    },
    {
      portal: "E2Language",
      support: "AI-powered lessons and adaptive practice for PTE task types, with difficulty adjusted according to student performance."
    },
    {
      portal: "PTE Magic",
      support: "AI-scored Speaking and Writing tasks with instant feedback to help students understand their performance."
    },
    {
      portal: "PTEGURU / PTE Study",
      support: "Question banks and score-prediction tools for practising different examination tasks."
    },
    {
      portal: "Pearson Official Video Walkthroughs",
      support: "Official video guides explaining the task types and computer-based examination format."
    },
    {
      portal: "Write from Dictation AI Banks",
      support: "AI-assisted sentence banks for targeted daily practice in Write from Dictation."
    }
  ];

  // Section 7: 8 Main Features / Why Choose GLA PTE Programme
  const whyGlaEightPillars = [
    {
      number: "7.1",
      title: "AI-Aligned Teaching",
      desc: "The programme focuses on the scoring criteria used in PTE rather than relying solely on general English instruction. Students practise task-specific techniques intended to improve performance.",
      tag: "Scoring Criteria Focus",
      icon: Cpu
    },
    {
      number: "7.2",
      title: "Official Pearson Materials",
      desc: "The academy states that students practise with Pearson preparation content and official scored practice tests to provide a more authentic examination practice experience.",
      tag: "Official Pearson Base",
      icon: BookOpen
    },
    {
      number: "7.3",
      title: "Fast Results Coaching",
      desc: "The programme is designed to help students prepare efficiently, particularly when they have approaching admission or visa deadlines, highlighting PTE's 48-hour turnaround.",
      tag: "48-Hour Exam Target",
      icon: Clock
    },
    {
      number: "7.4",
      title: "AI-Scored Mock Practice",
      desc: "Online mock tests provide AI-based scoring and feedback to help students assess their preparation and identify specific areas for improvement before test day.",
      tag: "Diagnostic Feedback",
      icon: Bot
    },
    {
      number: "7.5",
      title: "Task-by-Task Strategy",
      desc: "The programme provides separate preparation strategies for individual PTE task types. Each of the 20 task types has its own patterns and scoring considerations.",
      tag: "All 20 Tasks Covered",
      icon: Layers
    },
    {
      number: "7.6",
      title: "Personalised Score Plan",
      desc: "Each student receives a study plan based on a diagnostic mock test to identify weak areas, determine improvement priorities, allocate practice time, and target high-value tasks.",
      tag: "Tailored Study Roadmap",
      icon: Target
    },
    {
      number: "7.7",
      title: "AI Portal Integration",
      desc: "The academy uses online practice platforms, including Pearson's practice platform, E2Language, and PTE Magic, to familiarise students with the digital examination environment.",
      tag: "Multi-Platform Practice",
      icon: Laptop
    },
    {
      number: "7.8",
      title: "Small Batches, Maximum Attention",
      desc: "The programme maintains small class sizes to provide dedicated Speaking practice, individual Writing feedback, personalised coaching support, and more individual attention.",
      tag: "Small Class Format",
      icon: Users
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION — PTE ESSENTIALS                          */}
      {/* ========================================================= */}
      <section className="relative bg-[#00122E] dark:bg-[#020c1b] text-white overflow-hidden py-14 lg:py-24 border-b border-card-border transition-colors duration-300">
        
        {/* Ambient Radial Background Glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Slogan & Core Tenets */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              
              {/* Trust & Official Accreditation Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple/25 border border-purple-300/35 rounded-full text-xs font-semibold text-purple-200 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-purple-200 shrink-0" />
                  <span>ISO 9001:2015 Certified Academy • Pearson AI-Aligned</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 border border-emerald-400/30 rounded-full text-xs font-bold text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fast 48-Hour Result Turnaround</span>
                </span>
              </div>

              {/* Main Headline */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-purple-300">
                  PTE Essentials — Course Material
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white">
                  Prepare, Practice & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white">
                    Achieve Your Best in PTE.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Everything you need to prepare, practice, and achieve your best in the PTE Test with official Pearson resources, task-by-task blueprints, and AI-scored mock simulations.
              </p>

              {/* 4 Core Hero Tenets */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {[
                  { title: "Comprehensive Content", sub: "Official Materials" },
                  { title: "Exam-Focused", sub: "20 Task Blueprints" },
                  { title: "Practice Smartly", sub: "AI Portal Mock Tests" },
                  { title: "Achieve Excellence", sub: "Target 79+ & PR Points" },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-xs font-bold text-purple-200 leading-tight">{item.title}</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">{item.sub}</span>
                  </div>
                ))}
              </div>

              {/* Quote / Subhead Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple/20 via-purple/10 to-transparent border border-purple-400/25 text-xs sm:text-sm font-semibold text-purple-200 text-center lg:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>&ldquo;Your Results. Closer to Your Goals. English Proficiency. Global Opportunities.&rdquo;</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  Target 79+ / 65+
                </span>
              </div>

            </div>

            {/* Right Column: Lead Capture Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 dark:bg-card/90 backdrop-blur-md border border-white/20 dark:border-card-border p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="flex flex-col gap-1 mb-5 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Fast-Track Preparation</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">Book Free Diagnostic Test</h3>
                  <p className="text-xs text-slate-300">Get your baseline score report and a personalized PTE preparation plan.</p>
                </div>

                <LeadForm defaultCourse="PTE Academic Strategy Preparation" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STICKY SUB-NAVIGATION BAR                                 */}
      {/* ========================================================= */}
      <nav className="sticky top-16 sm:top-20 z-30 bg-card/95 backdrop-blur-md border-b border-card-border py-3 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth text-xs font-bold text-navy-muted">
            <span className="text-purple font-extrabold shrink-0 hidden md:inline">Jump to:</span>
            {subNavLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3.5 py-1.5 rounded-xl whitespace-nowrap hover:bg-purple/10 hover:text-purple border border-transparent hover:border-purple/20 transition-all shrink-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* SECTION 1: WHAT IS PTE? & PTE AT A GLANCE                 */}
      {/* ========================================================= */}
      <section id="overview" className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              1. What Is PTE?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Computer-Based English Language Proficiency
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              <strong>PTE (Pearson Test of English)</strong> is a computer-based English language proficiency test developed and administered by <strong>Pearson PLC</strong>, one of the world&apos;s largest education companies. It is designed to assess the real-life English language skills of non-native speakers who wish to study or work in an English-speaking environment.
            </p>
            <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
              Unlike traditional paper-based tests, PTE uses <strong>Artificial Intelligence (AI)</strong> technology to evaluate responses. According to official source standards, this reduces human subjectivity in the scoring process. Results are typically available within <strong>48 hours</strong> of the test, making PTE one of the fastest-turnaround English proficiency tests worldwide.
            </p>
          </div>

          {/* PTE at a Glance Header */}
          <div className="flex items-center justify-between border-b border-card-border pb-4 mb-8">
            <h3 className="text-lg font-bold font-display text-navy flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple" />
              <span>PTE at a Glance</span>
            </h3>
            <span className="text-xs text-navy-muted font-semibold">Pearson VUE Network</span>
          </div>

          {/* 6 Core Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pteGlanceFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="group bg-section-alt/70 hover:bg-card border border-card-border hover:border-purple/50 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover-lift transition-all duration-300 flex flex-col justify-between gap-4"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-all shrink-0">
                        <IconComp className="w-6 h-6 text-purple group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold text-purple bg-purple/10 px-2.5 py-0.5 rounded-full">
                        {feat.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-display text-navy group-hover:text-purple transition-colors mt-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: STRUCTURE OF PTE & THE 20 TASK TYPES           */}
      {/* ========================================================= */}
      <section id="structure" className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              2. Structure of PTE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Single-Session Test Architecture & 20 Task Types
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              PTE is a single-session, computer-delivered test lasting approximately two hours. It assesses all four language skills in an <strong>integrated format</strong>, meaning a single task may assess more than one skill simultaneously. The test begins with an unscored 1-minute personal introduction, followed by three scored parts in a fixed order.
            </p>
          </div>

          {/* 2.1 The Three Parts of PTE Table */}
          <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
            <h3 className="text-lg font-bold font-display text-navy mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple" />
              <span>2.1 The Three Parts of PTE</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4 sm:p-5">Part</th>
                    <th className="p-4 sm:p-5">Time Allowed</th>
                    <th className="p-4 sm:p-5">Skills Assessed</th>
                    <th className="p-4 sm:p-5">Question Types</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-navy-muted">
                  <tr className="hover:bg-purple/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-navy flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-purple"></span>
                      Part 1: Speaking & Writing
                    </td>
                    <td className="p-4 sm:p-5 font-extrabold text-purple">54–67 minutes</td>
                    <td className="p-4 sm:p-5">Speaking and Writing through integrated tasks</td>
                    <td className="p-4 sm:p-5 font-semibold text-navy">7 Tasks (Read Aloud, Essay, etc.)</td>
                  </tr>
                  <tr className="hover:bg-purple/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-navy flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      Part 2: Reading
                    </td>
                    <td className="p-4 sm:p-5 font-extrabold text-purple">29–30 minutes</td>
                    <td className="p-4 sm:p-5">Reading through multiple question types</td>
                    <td className="p-4 sm:p-5 font-semibold text-navy">5 Tasks (Fill in Blanks, Re-order, etc.)</td>
                  </tr>
                  <tr className="hover:bg-purple/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-navy flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      Part 3: Listening
                    </td>
                    <td className="p-4 sm:p-5 font-extrabold text-purple">30–43 minutes</td>
                    <td className="p-4 sm:p-5">Listening, integrated with Reading and Writing</td>
                    <td className="p-4 sm:p-5 font-semibold text-navy">8 Tasks (Dictation, Summarise Spoken, etc.)</td>
                  </tr>
                  <tr className="bg-section-alt/50">
                    <td className="p-4 sm:p-5 font-medium text-navy-muted italic flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                      Personal Introduction
                    </td>
                    <td className="p-4 sm:p-5 text-navy-muted font-medium">Approx. 1 minute</td>
                    <td className="p-4 sm:p-5 text-navy-muted" colSpan={2}>
                      Unscored; recorded for university and visa institution verification only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2.2 Task Types by Section Interactive Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-navy mr-1">2.2 Filter Section:</span>
              {[
                { id: 'all', label: 'All 20 Tasks' },
                { id: 'speaking', label: 'Part 1: Speaking & Writing (7)' },
                { id: 'reading', label: 'Part 2: Reading (5)' },
                { id: 'listening', label: 'Part 3: Listening (8)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTaskTab(tab.id as typeof activeTaskTab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTaskTab === tab.id
                      ? 'bg-purple text-white shadow-sm'
                      : 'bg-card border border-card-border text-navy-muted hover:text-navy hover:border-purple/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-card border border-card-border p-1 rounded-xl text-xs font-bold text-navy-muted">
              <button
                onClick={() => setActiveViewMode('cards')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeViewMode === 'cards' ? 'bg-purple text-white' : 'hover:text-navy'
                }`}
              >
                Card View
              </button>
              <button
                onClick={() => setActiveViewMode('table')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeViewMode === 'table' ? 'bg-purple text-white' : 'hover:text-navy'
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          {/* Cards View Mode */}
          {activeViewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Speaking & Writing Tasks */}
              {(activeTaskTab === 'all' || activeTaskTab === 'speaking') &&
                speakingWritingTasks.map((t) => (
                  <div
                    key={t.id}
                    className="bg-card border border-card-border hover:border-purple/50 p-6 rounded-2xl sm:rounded-3xl shadow-sm hover-lift flex flex-col justify-between gap-4 transition-all"
                  >
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${t.color}`}>
                          {t.skills}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                          ⏱️ {t.time}
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-display text-navy">{t.task}</h4>
                      <p className="text-xs text-navy-muted leading-relaxed">{t.whatToDo}</p>
                    </div>
                    <div className="pt-3 border-t border-card-border/60">
                      <span className="text-[11px] font-semibold text-purple flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.weight}
                      </span>
                    </div>
                  </div>
                ))}

              {/* Reading Tasks */}
              {(activeTaskTab === 'all' || activeTaskTab === 'reading') &&
                readingTasks.map((t) => (
                  <div
                    key={t.id}
                    className="bg-card border border-card-border hover:border-indigo-400/50 p-6 rounded-2xl sm:rounded-3xl shadow-sm hover-lift flex flex-col justify-between gap-4 transition-all"
                  >
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${t.color}`}>
                          {t.skills}
                        </span>
                        <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                          Reading Part 2
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-display text-navy">{t.task}</h4>
                      <p className="text-xs text-navy-muted leading-relaxed"><strong>Format:</strong> {t.format}</p>
                      <p className="text-[11px] text-navy-muted/90 italic font-medium">{t.feature}</p>
                    </div>
                    <div className="pt-3 border-t border-card-border/60">
                      <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.weight}
                      </span>
                    </div>
                  </div>
                ))}

              {/* Listening Tasks */}
              {(activeTaskTab === 'all' || activeTaskTab === 'listening') &&
                listeningTasks.map((t) => (
                  <div
                    key={t.id}
                    className="bg-card border border-card-border hover:border-emerald-500/50 p-6 rounded-2xl sm:rounded-3xl shadow-sm hover-lift flex flex-col justify-between gap-4 transition-all"
                  >
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${t.color}`}>
                          {t.skills}
                        </span>
                        <span className="text-[10px] font-bold text-purple bg-purple/10 px-2 py-0.5 rounded-md">
                          Listening Part 3
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-display text-navy">{t.task}</h4>
                      <p className="text-xs text-navy-muted leading-relaxed"><strong>Format:</strong> {t.format}</p>
                      <p className="text-[11px] text-navy-muted/90 italic font-medium">{t.feature}</p>
                    </div>
                    <div className="pt-3 border-t border-card-border/60">
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.weight}
                      </span>
                    </div>
                  </div>
                ))}

            </div>
          ) : (
            /* Table View Mode */
            <div className="overflow-x-auto bg-card border border-card-border rounded-3xl shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase text-[11px]">
                  <tr>
                    <th className="p-4">Task Name</th>
                    <th className="p-4">Skills Assessed</th>
                    <th className="p-4">Time / Format</th>
                    <th className="p-4">What To Do / Key Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-navy-muted">
                  {(activeTaskTab === 'all' || activeTaskTab === 'speaking') &&
                    speakingWritingTasks.map((t) => (
                      <tr key={t.id} className="hover:bg-purple/5 transition-colors">
                        <td className="p-4 font-bold text-navy">{t.task}</td>
                        <td className="p-4 text-purple font-semibold">{t.skills}</td>
                        <td className="p-4">{t.time}</td>
                        <td className="p-4">{t.whatToDo}</td>
                      </tr>
                    ))}
                  {(activeTaskTab === 'all' || activeTaskTab === 'reading') &&
                    readingTasks.map((t) => (
                      <tr key={t.id} className="hover:bg-purple/5 transition-colors">
                        <td className="p-4 font-bold text-navy">{t.task}</td>
                        <td className="p-4 text-indigo-400 font-semibold">{t.skills}</td>
                        <td className="p-4">{t.format}</td>
                        <td className="p-4">{t.feature}</td>
                      </tr>
                    ))}
                  {(activeTaskTab === 'all' || activeTaskTab === 'listening') &&
                    listeningTasks.map((t) => (
                      <tr key={t.id} className="hover:bg-purple/5 transition-colors">
                        <td className="p-4 font-bold text-navy">{t.task}</td>
                        <td className="p-4 text-emerald-400 font-semibold">{t.skills}</td>
                        <td className="p-4">{t.format}</td>
                        <td className="p-4">{t.feature}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: PTE SCORING SYSTEM (10-90 SCALE & GSE/CEFR)    */}
      {/* ========================================================= */}
      <section id="scoring" className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              3. PTE Scoring System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Score Scale (10–90) & Global Proficiency Alignment
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              PTE uses a score range of <strong>10–90</strong>. The source material associates these scores with English proficiency levels aligned with the <strong>Global Scale of English (GSE)</strong> and the <strong>Common European Framework of Reference for Languages (CEFR)</strong>. The score reflects a candidate&apos;s ability to use English effectively in real-life study, work, and everyday situations.
            </p>
          </div>

          {/* 3.1 Candidate Score Report: 3 Types of Scores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-3xl bg-section-alt/80 border border-card-border flex flex-col gap-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple">1. Overall Score</span>
              <h4 className="text-base font-bold font-display text-navy">Global English Measure</h4>
              <p className="text-xs text-navy-muted leading-relaxed">
                An overall measure of English proficiency calculated based on performance across all scored tasks on the 10–90 scale.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-section-alt/80 border border-card-border flex flex-col gap-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple">2. Communicative Skills</span>
              <h4 className="text-base font-bold font-display text-navy">Speaking, Writing, Reading, Listening</h4>
              <p className="text-xs text-navy-muted leading-relaxed">
                Separate individual scores for Speaking, Writing, Reading, and Listening, each reported on the 10–90 scale for visa and university cutoffs.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-section-alt/80 border border-card-border flex flex-col gap-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple">3. Enabling Skills</span>
              <h4 className="text-base font-bold font-display text-navy">Linguistic Component Metrics</h4>
              <p className="text-xs text-navy-muted leading-relaxed">
                Diagnostic scores evaluating Grammar, Oral Fluency, Pronunciation, Spelling, Vocabulary, and Written Discourse.
              </p>
            </div>
          </div>

          {/* 3.1 Overall Score Scale Table & 3.2 Typical Score Requirements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 3.1 Overall Score Scale Table */}
            <div className="lg:col-span-6 bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="text-lg font-bold font-display text-navy mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple" />
                <span>3.1 Overall Score Scale (CEFR Mapping)</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">PTE Score</th>
                      <th className="p-3">CEFR</th>
                      <th className="p-3">Proficiency Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border text-navy-muted">
                    {scoringScale.map((row, i) => (
                      <tr key={i} className="hover:bg-purple/5 transition-colors">
                        <td className="p-3 font-extrabold text-purple font-mono">{row.score}</td>
                        <td className="p-3 font-bold text-navy">{row.cefr}</td>
                        <td className="p-3">
                          <span className="block font-medium text-navy">{row.desc}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md mt-1 inline-block border ${row.color}`}>
                            {row.tag}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: 3.2 Typical Score Requirements Table */}
            <div className="lg:col-span-6 bg-card border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold font-display text-navy mb-4 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-purple" />
                  <span>3.2 Typical Score Requirements</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase text-[11px]">
                      <tr>
                        <th className="p-3">Purpose</th>
                        <th className="p-3">Typical Score Required</th>
                        <th className="p-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-card-border text-navy-muted">
                      {typicalRequirements.map((row, i) => (
                        <tr key={i} className="hover:bg-purple/5 transition-colors">
                          <td className="p-3 font-bold text-navy">{row.purpose}</td>
                          <td className="p-3 font-extrabold text-purple whitespace-nowrap">{row.score}</td>
                          <td className="p-3 text-[11px] text-navy-muted">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-section-alt border border-card-border/80 mt-6 text-[11px] text-navy-muted leading-relaxed">
                <strong>Important:</strong> Actual visa and university requirements depend on the specific application route, institution, programme, and rules in force at the time of application.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: THE PTE FORMAT — COMPUTER-BASED & AI SCORING   */}
      {/* ========================================================= */}
      <section id="ai-scoring" className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              4. The PTE Format
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Computer-Based Testing & How AI Scoring Works
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              A key feature of PTE is that it is entirely computer-delivered and AI-scored. Every task involving Speaking, Writing, Reading, and Listening is completed on a computer at a Pearson VUE test centre.
            </p>
          </div>

          {/* 4.1 How AI Scoring Works Table */}
          <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
            <h3 className="text-lg font-bold font-display text-navy mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple" />
              <span>4.1 How AI Scoring Works — Skill Analysis</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase text-[11px]">
                  <tr>
                    <th className="p-4 w-1/4">Skill</th>
                    <th className="p-4 w-3/4">What the AI Analyses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-navy-muted">
                  {aiAnalysisSkills.map((item, i) => (
                    <tr key={i} className="hover:bg-purple/5 transition-colors">
                      <td className="p-4 font-bold text-navy flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple"></span>
                        {item.skill}
                      </td>
                      <td className="p-4">{item.analyzes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* AI Source Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-card-border/80">
              {[
                "AI evaluates responses according to scoring criteria.",
                "The scoring system is intended to reduce examiner subjectivity.",
                "Scores reflect the candidate's submitted responses.",
                "Speaking & Writing evaluated using multiple language features."
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-navy">
                  <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4.2 PTE UKVI Dedicated Container */}
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-purple/15 via-indigo-500/10 to-transparent border border-purple/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple">4.2 Specialized Test Version</span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-navy">PTE Academic UKVI</h3>
              <p className="text-xs sm:text-sm text-navy-muted max-w-2xl leading-relaxed">
                PTE is also available in a version referred to as <strong>PTE UKVI</strong>. According to official source guidelines, this version is intended for UK visa and immigration applications and is administered at UKVI-approved test centres. Candidates should confirm which test version is accepted for their particular visa or immigration application before booking.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-purple text-white text-xs font-bold rounded-xl hover:bg-purple-hover transition-colors shadow-md shrink-0"
            >
              Consult UKVI Specialist
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: PTE VS IELTS — QUICK COMPARISON TABLE          */}
      {/* ========================================================= */}
      <section id="comparison" className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              5. PTE vs IELTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              PTE vs IELTS — Quick Comparison
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              The following comparison reproduces the information presented in the original course material. Compare testing formats, evaluation styles, result turnarounds, and scheduling parameters.
            </p>
          </div>

          <div className="overflow-x-auto bg-card border border-card-border rounded-3xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5 w-1/4">Feature</th>
                  <th className="p-4 sm:p-5 w-3/8 text-purple bg-purple/[0.04]">PTE</th>
                  <th className="p-4 sm:p-5 w-3/8">IELTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border text-navy-muted">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-purple/5 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-navy">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-semibold text-purple bg-purple/[0.02]">{row.pte}</td>
                    <td className="p-4 sm:p-5 text-navy-muted">{row.ielts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 text-center text-[11px] text-navy-muted italic">
            Note: Test formats, result times, rescheduling rules, and fees may vary. The figures above are from the supplied documentation.
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: OUR PTE PREPARATION PROGRAMME AT GLA           */}
      {/* ========================================================= */}
      <section id="programme" className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              6. Our PTE Preparation Programme
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Structured, Intensive & Target-Score Focused
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Our PTE preparation programme is structured, intensive, and focused on helping students achieve their target scores. Because PTE tasks have specific formats and scoring criteria, the programme focuses on task-specific preparation, practice, and feedback.
            </p>
          </div>

          {/* 6.1 Comprehensive Study Material (A to H) */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-display text-navy mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple" />
              <span>6.1 Comprehensive Study Material (A to H)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studyMaterials.map((mat, i) => {
                const IconComp = mat.icon;
                return (
                  <div
                    key={i}
                    className="bg-card border border-card-border hover:border-purple/50 p-6 rounded-2xl sm:rounded-3xl shadow-sm hover-lift flex flex-col justify-between gap-4 transition-all"
                  >
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-purple font-mono bg-purple/10 px-2 py-0.5 rounded-md">
                          Module {mat.code}
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-display text-navy">{mat.title}</h4>
                      <p className="text-xs text-navy-muted leading-relaxed">{mat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6.1.1 Official Pearson Resources Included in the Programme */}
          <div className="bg-card border border-card-border p-7 sm:p-9 rounded-3xl shadow-sm mb-14">
            <div className="flex flex-col gap-1.5 mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple">Authentic Pedagogy</span>
              <h3 className="text-xl font-extrabold font-display text-navy">
                6.1.1 Official Pearson Resources Included in the Programme
              </h3>
              <p className="text-xs sm:text-sm text-navy-muted">
                The academy&apos;s programme states that it uses official Pearson preparation resources as the foundation of its teaching. The stated objective is to help students practise using material that reflects the format and difficulty of the actual examination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {officialPearsonResources.map((res, i) => (
                <div key={i} className="p-4 rounded-2xl bg-section-alt/80 border border-card-border flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-navy leading-snug">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6.2 Mock Tests — Full Exam Simulation (Offline & Online) */}
          <div className="mb-14">
            <h3 className="text-xl font-bold font-display text-navy mb-6 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-purple" />
              <span>6.2 Mock Tests — Full Exam Simulation</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* A. Offline Mock Tests */}
              <div className="bg-card border border-card-border p-7 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-purple">Part A</span>
                    <span className="text-[10px] font-bold text-navy-muted bg-section-alt px-2.5 py-1 rounded-full">On-Campus Lab</span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-navy">Offline Mock Tests</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Timed, full-length mock tests under examination conditions with official Pearson sample test papers, instructor feedback on Speaking & Writing, section-wise weakness analysis, and dedicated practice sessions for high-value tasks:
                  </p>
                  <ul className="flex flex-col gap-2 pt-1 text-xs font-semibold text-navy">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple shrink-0" />
                      <span><strong>WFD</strong> — Write from Dictation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple shrink-0" />
                      <span><strong>RL</strong> — Re-tell Lecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple shrink-0" />
                      <span><strong>DI</strong> — Describe Image</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* B. Online Mock Tests */}
              <div className="bg-card border border-card-border p-7 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-purple">Part B</span>
                    <span className="text-[10px] font-bold text-navy-muted bg-section-alt px-2.5 py-1 rounded-full">Cloud AI Portals</span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-navy">Online Mock Tests</h4>
                  <p className="text-xs text-navy-muted leading-relaxed">
                    Pearson&apos;s Official Practice Platform for AI-scored mock tests with instant feedback, task-specific mini-mock tests, and progress tracking across multiple attempts to familiarize students with the computer-based testing environment.
                  </p>
                  <ul className="flex flex-col gap-2 pt-1 text-xs font-semibold text-navy">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple shrink-0" />
                      <span>AI-scored Speaking & Writing practice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple shrink-0" />
                      <span>Practice via PTE Magic, E2Language, PTE Study & PTEGURU</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple shrink-0" />
                      <span>Performance analytics and score prediction</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* 6.3 AI-Powered Online Portals — Exam-Aligned Practice Table */}
          <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold font-display text-navy mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple" />
              <span>6.3 AI-Powered Online Portals — Exam-Aligned Practice</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-section-alt border-b border-card-border text-navy font-bold uppercase text-[11px]">
                  <tr>
                    <th className="p-4 w-1/3">Portal / Resource</th>
                    <th className="p-4 w-2/3">How It Supports Exam Preparation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-navy-muted">
                  {aiPortalsTable.map((portal, i) => (
                    <tr key={i} className="hover:bg-purple/5 transition-colors">
                      <td className="p-4 font-bold text-navy flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple"></span>
                        {portal.portal}
                      </td>
                      <td className="p-4">{portal.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: WHY CHOOSE OUR PTE PROGRAMME? (8 PILLARS)      */}
      {/* ========================================================= */}
      <section id="why-gla" className="bg-white dark:bg-[#071324] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              7. Why Choose Our PTE Programme?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Eight Pillars of Excellence at The Global Language Academy
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              The Global Language Academy highlights eight main features of its PTE preparation programme designed to give students a measurable advantage in computer-delivered examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyGlaEightPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group bg-card border border-card-border hover:border-purple/50 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover-lift flex flex-col justify-between gap-5 transition-all"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple transition-all">
                        <IconComp className="w-6 h-6 text-purple group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-bold text-navy-muted font-mono bg-section-alt px-2 py-0.5 rounded-md">
                        {pillar.number}
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-display text-navy group-hover:text-purple transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-card-border/60">
                    <span className="text-[11px] font-bold text-purple bg-purple/5 px-2.5 py-1 rounded-md border border-purple/15 inline-block">
                      {pillar.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8 & 9: REVIEWS, FAQS & ADVERTISEMENT BACK COVER   */}
      {/* ========================================================= */}
      <section id="reviews" className="bg-[#F6F8FC] dark:bg-[#0B1A2E] text-navy py-16 sm:py-24 border-b border-card-border/80 transition-colors duration-300 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Alumni Reviews */}
          <div className="max-w-3xl mx-auto text-center mb-14 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Verified Student Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              PTE Scorecard Results & Reviews
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Real results from GLA students who achieved their target scores (84/90 and 82/90) for Australian PR and global university admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {course.testimonials.map((test) => (
              <div key={test.id} className="h-full">
                <TestimonialCard testimonial={test} />
              </div>
            ))}
          </div>

          {/* PTE FAQs */}
          <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              PTE FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-navy-muted">
              Everything you need to know about exam registration, scoring algorithms, and batch timings.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <FAQAccordion faqs={course.faqs} />
          </div>

          {/* Section 8 & 9: Back Cover — PTE Course Advertisement */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#00122E] via-[#160824] to-[#4B245E] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/15 overflow-hidden text-center flex flex-col items-center gap-6">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple/30 border border-purple-300/30 rounded-full text-xs font-semibold text-purple-200">
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>THE GLOBAL LANGUAGE ACADEMY</span>
              </span>
              <span className="text-xs text-purple-200 font-medium">Empowering Communication. Building Global Opportunities.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight max-w-3xl">
              MASTER ENGLISH • PTE COURSE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-indigo-200 to-white">
                Shape Your Future!
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Target your dream score with expert guidance and AI-aligned practice. Every step you take today brings you closer to your dreams.
            </p>

            {/* 6 Advertised Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-3xl text-left my-2">
              {[
                { title: "AI-Aligned Training", desc: "Learn what the AI scoring criteria assess." },
                { title: "Official Materials", desc: "Practise with Pearson preparation resources." },
                { title: "Proven Strategies", desc: "Learn techniques for individual task types." },
                { title: "AI-Scored Practice", desc: "Complete exam-style practice with AI scoring." },
                { title: "Personalised Coaching", desc: "Individual feedback & tailored study plan." },
                { title: "Faster Results", desc: "Prepare with the aim of progressing quickly." },
              ].map((hl, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-xs font-bold text-purple-200">{hl.title}</span>
                  <span className="text-[11px] text-slate-300 leading-tight">{hl.desc}</span>
                </div>
              ))}
            </div>

            {/* Motto Banner */}
            <div className="text-sm sm:text-base font-extrabold tracking-widest text-amber-300 font-display">
              WE GUIDE. YOU GROW. YOU SUCCEED.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple to-purple-hover hover:from-purple-hover hover:to-purple text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 transition-all cursor-pointer border border-white/20"
              >
                <span>Book Diagnostic Mock Test</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919217999511?text=Hi!%20I'd%20like%20to%20know%20more%20about%20PTE%20preparation%20at%20The%20Global%20Language%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md hover:scale-102 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat on WhatsApp</span>
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

      {/* ========================================================= */}
      {/* OTHER ACADEMY COURSES                                     */}
      {/* ========================================================= */}
      <section className="bg-section-alt text-navy py-16 sm:py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">Other Programs at GLA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="bg-card p-6 rounded-2xl border border-card-border shadow-sm flex flex-col gap-4 justify-between hover-lift transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-navy mb-1">{rel.title}</h3>
                  <p className="text-xs text-navy-muted leading-relaxed">{rel.shortDescription}</p>
                </div>
                <div className="flex justify-between items-center border-t border-card-border pt-4 mt-2">
                  <span className="text-xs font-bold text-purple">⏱️ {rel.durationLabel}</span>
                  <Link
                    href={`/courses/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-purple transition-colors"
                  >
                    <span>View Syllabus</span>
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
