"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Laptop,
  GraduationCap,
  Sparkles,
  Globe2,
  FileCheck2,
  Layers,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  CheckCircle2,
  Lightbulb,
  Mic,
  Volume2,
  Briefcase,
  TrendingUp,
  Zap,
  Target,
  FileText,
  Headphones,
  CheckSquare,
  Smile,
  Compass,
  Building
} from 'lucide-react';
import { Course } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface SpokenEnglishCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

// -------------------------------------------------------------
// SYLLABUS DATA STRUCTURES FOR 3-LEVEL SPOKEN ENGLISH
// -------------------------------------------------------------

interface LevelTopicGroup {
  category: string;
  badge: string;
  items: string[];
}

interface SpokenEnglishLevel {
  id: string;
  levelNumber: number;
  title: string;
  cefr: string;
  monthDuration: string;
  slogan: string;
  overview: string;
  topicGroups: LevelTopicGroup[];
  capstone?: {
    title: string;
    description: string;
    items: string[];
  };
}

const spokenEnglishLevels: SpokenEnglishLevel[] = [
  {
    id: "level-1-beginner",
    levelNumber: 1,
    title: "Level 1 — Beginner",
    cefr: "A1 → A2 CEFR Level",
    monthDuration: "Month 1 (4 Weeks)",
    slogan: "Build Strong Grammar Foundations, Stop Mental Translation & Master Daily Vocabulary",
    overview: "Establish fundamental English fluency. Master parts of speech, essential sentence structures, correct tenses, and confident day-to-day communication without hesitation.",
    topicGroups: [
      {
        category: "Core Grammar Topics",
        badge: "Grammar & Accuracy",
        items: [
          "Parts of speech — nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions",
          "Articles — a, an, the (definite and indefinite usage rules)",
          "Tenses — present simple, past simple, future (will / going to)",
          "Subject-verb agreement (singular/plural matching in daily speech)",
          "Singular and plural nouns (regular and irregular forms)",
          "Question formation — Yes/No and Wh- questions (who, what, where, when, why, how)",
          "Negation — correct usage of not, don't, doesn't, didn't",
          "Sentence structure — Subject + Verb + Object without inversions",
          "Modals — can, could, may, might, must, should (ability, permission, advice)",
          "Conjunctions — and, but, or, so, because, although (building compound sentences)",
          "Prepositions of time, place and direction (in, on, at, into, across, through)",
          "Basic punctuation — full stop, comma, apostrophe, question mark"
        ]
      },
      {
        category: "Basic Vocabulary & Usage",
        badge: "Conversational Application",
        items: [
          "Everyday topics — family, food, home, numbers, time, colours & routine vocabulary",
          "Common expressions, social greetings, polite courtesies & active icebreakers",
          "Simple reading and writing exercises (crafting correct sentences and short paragraphs)"
        ]
      }
    ]
  },
  {
    id: "level-2-intermediate",
    levelNumber: 2,
    title: "Level 2 — Intermediate",
    cefr: "B1 → B2 CEFR Level",
    monthDuration: "Month 2 (4 Weeks)",
    slogan: "Express Complex Thoughts, Participate in Debates & Command Spoken Flow",
    overview: "Transition from basic sentence framing to dynamic interactive speaking. Master storytelling, extempore speeches, situational role plays, active group discussions, and structured written expression.",
    topicGroups: [
      {
        category: "Speaking Skills & Activities",
        badge: "Active Speaking Drills",
        items: [
          "Picture description — describe an image, diagram, or complex scene in rich detail",
          "Storytelling — narrate personal anecdotes or fictional stories with narrative pacing",
          "Role plays — practical situational dialogues (at a restaurant, hotel, doctor, job enquiry)",
          "Group discussions — share, articulate, defend, and respectfully challenge opinions",
          "Extempore speaking — 2-minute spontaneous talk on impromptu random topics",
          "News presentation — summarise and present current affairs or trending events",
          "Debate practice — argue for and against motions with persuasive reasoning",
          "Turn-taking, interrupting politely, acknowledging points & active listening",
          "Intonation, sentence rhythm, stress patterns and connected speech in conversation"
        ]
      },
      {
        category: "Writing Skills",
        badge: "Cohesive Writing",
        items: [
          "Paragraph structure — topic sentence, supporting ideas, transitions & conclusion",
          "Descriptive and narrative writing for personal and practical contexts",
          "Informal letters and email correspondence with appropriate tone",
          "Opinion essays — expressing, structuring, and justifying a distinct point of view",
          "Grammar in writing — tense consistency, punctuation control, and cohesive devices",
          "Vocabulary expansion — synonyms, antonyms, collocations, and word families"
        ]
      }
    ]
  },
  {
    id: "level-3-advanced",
    levelNumber: 3,
    title: "Level 3 — Advanced",
    cefr: "C1 → C2 CEFR Level",
    monthDuration: "Month 3 (4 Weeks)",
    slogan: "Executive Fluency, Critical Comprehension & Comprehensive Capstone Interview Mastery",
    overview: "Polished native-like fluency across reading, listening, advanced business writing, public presentations, and an exhaustive HR & Behavioral Job Interview Preparation Bootcamp.",
    topicGroups: [
      {
        category: "Advanced Reading & Listening",
        badge: "Receptive Mastery",
        items: [
          "Reading: Skimming and scanning techniques for rapid comprehension and speed reading",
          "Reading: Comprehension of complex editorials, industry research summaries and formal reports",
          "Reading: Critical reading — identifying author bias, tone, unstated assumptions and argument structure",
          "Reading: Inferring nuanced meaning, idioms, and figurative language from context",
          "Listening: Active listening to authentic audio — podcasts, TED talks, executive briefings and global news broadcasts",
          "Listening: Real-time note-taking techniques while listening to lectures and discussions",
          "Listening: Decoding diverse regional accents, fast colloquial speech, and connected reductions",
          "Listening: Strategic listening for macro gist versus micro detail"
        ]
      },
      {
        category: "Advanced Writing & Speaking",
        badge: "Productive Executive Fluency",
        items: [
          "Writing: Formal reports, business proposals, executive summaries and client emails",
          "Writing: Academic, persuasive, and argumentative essay frameworks",
          "Writing: Précis writing — summarising lengthy passages concisely without losing core ideas",
          "Writing: Impactful cover letters, executive bios, and professional LinkedIn/CV profiles",
          "Writing: Advanced grammar — conditional clauses (Types 1-3 & mixed), passive voice, reported speech, and relative clauses",
          "Speaking: Formal keynote presentations with structured slide transitions and confident Q&A handling",
          "Speaking: Panel discussions, symposium participation, and moderated debate leadership",
          "Speaking: Persuasive, motivational, and inspirational speaking techniques",
          "Speaking: Impromptu executive speeches with zero preparation time"
        ]
      }
    ],
    capstone: {
      title: "Capstone Module — Comprehensive Interview Preparation",
      description: "A transformative, intensive bootcamp designed to help you clear MNC interviews, leadership evaluations, and placement rounds with total poise.",
      items: [
        "HR interview essentials — 'Tell me about yourself', strengths & weaknesses, short/long-term career goals",
        "Behavioural questions using the STAR method (Situation, Task, Action, Result)",
        "Technical and situational interview practice with domain-specific mock drills",
        "Body language, eye contact, upright posture, hand gestures, and commanding professional presence",
        "Mock interviews with recorded video playback and personalized diagnostic feedback",
        "Salary negotiation strategies, counter-offers, and asking impactful questions to the interviewer",
        "Group discussions (GD) and panel interview simulations with moderation techniques",
        "Telephonic and video interview etiquette (lighting, framing, audio clarity, and camera eye contact)",
        "Building a confident, memorable 60-second introduction (Elevator Pitch)",
        "Handling high-stress questions — 'Why should we hire you?' / 'Where do you see yourself in 5 years?'",
        "Post-interview follow-up — professional thank-you emails and follow-up communication"
      ]
    }
  }
];

// -------------------------------------------------------------
// PERSONALITY DEVELOPMENT (OPTIONAL ADD-ON) SYLLABUS DATA
// -------------------------------------------------------------

interface PersonalityModule {
  num: string;
  title: string;
  topics: string[];
}

interface PersonalityMonth {
  month: string;
  theme: string;
  focus: string;
  modules: PersonalityModule[];
}

const personalityDevelopmentSyllabus: PersonalityMonth[] = [
  {
    month: "Month 1 — Foundation",
    theme: "Building the Professional Self",
    focus: "Self-awareness, personal presence, workplace decorum, and overcoming social anxiety",
    modules: [
      {
        num: "1",
        title: "Professional Communication",
        topics: [
          "Verbal communication — clarity, tone, intentional word choice, and vocal impact",
          "Non-verbal communication — body language, posture, eye contact, and open gestures",
          "Active listening, non-verbal cues, and empathetic responding",
          "Assertiveness vs. aggression vs. passiveness — finding the diplomatic balance",
          "Small talk, corporate networking conversations, and memorable professional introductions"
        ]
      },
      {
        num: "2",
        title: "Workplace Etiquette & Grooming",
        topics: [
          "Professional dress code standards, business formal vs. smart casual, and grooming",
          "Office etiquette — meeting protocols, desk etiquette, punctuality, and mutual respect",
          "Digital etiquette — professional conduct on Slack, email threads, chat, and video calls",
          "Cross-cultural sensitivity, global workplace manners, and inclusive communication"
        ]
      },
      {
        num: "3",
        title: "Confidence Building",
        topics: [
          "Overcoming stage fright, imposter syndrome, and social/meeting anxiety",
          "Positive self-talk, mental reframing, and daily affirmation techniques",
          "Power posing and commanding confident body language in high-stakes settings",
          "Handling criticism, performance reviews, and managerial feedback constructively"
        ]
      }
    ]
  },
  {
    month: "Month 2 — Advanced Application",
    theme: "Leading & Influencing",
    focus: "Public speaking mastery, executive presence, stress management, and interpersonal influence",
    modules: [
      {
        num: "4",
        title: "Public Speaking & Presentations",
        topics: [
          "Structuring a compelling presentation — opening hook, core narrative body, memorable close",
          "Storytelling techniques for professional, corporate, and client contexts",
          "Speaking with authority — pace, pause, vocal projection, pitch, and timbre",
          "Handling tough Q&A sessions, pushback, and thinking on your feet under pressure",
          "Virtual presentation skills — webcam eye contact, slide design basics, and engagement"
        ]
      },
      {
        num: "5",
        title: "Stress Management & Work-Life Balance",
        topics: [
          "Identifying personal stress triggers and burnout patterns in professional settings",
          "Time management and prioritisation frameworks (Eisenhower Matrix, Pomodoro, Time-boxing)",
          "Mindfulness, diaphragmatic breathing, and calming techniques for workplace pressure",
          "Building mental resilience and bouncing back from professional setbacks",
          "Maintaining physical energy, mental focus, and holistic well-being during intense work cycles"
        ]
      },
      {
        num: "6",
        title: "Interpersonal Skills & Team Dynamics",
        topics: [
          "Building trust, rapport, and psychological safety with colleagues and managers",
          "Collaboration, adaptability, and high performance in multidisciplinary teams",
          "Reading the room — situational awareness, non-verbal micro-expressions, and social cues",
          "Networking professionally — building, nurturing, and activating long-term career relationships",
          "Personal branding on LinkedIn, thought leadership, and visible industry positioning"
        ]
      }
    ]
  }
];

export default function SpokenEnglishCourseView({ course, relatedCourses }: SpokenEnglishCourseViewProps) {
  // 3-Level Syllabus active tab
  const [activeLevelTab, setActiveLevelTab] = useState<number>(0);
  
  // Add-on bundle package selector: 'core' | 'bundle' | 'personality'
  const [selectedBundle, setSelectedBundle] = useState<'bundle' | 'core' | 'personality'>('bundle');
  
  // Personality Development syllabus active month tab
  const [activePdMonth, setActivePdMonth] = useState<number>(0);
  
  // Reviews slider index
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? course.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === course.testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentLevel = spokenEnglishLevels[activeLevelTab];

  // Helper for bundle WhatsApp message
  const getBundleWhatsAppMessage = () => {
    if (selectedBundle === 'bundle') {
      return "Hi TGLA, I am interested in the Spoken English + Personality Development (Add-On Bundle). Please share batch timings and fees structure.";
    }
    if (selectedBundle === 'personality') {
      return "Hi TGLA, I am interested in the Personality Development Course (Standalone for Working Professionals). Please share batch timings and fees structure.";
    }
    return "Hi TGLA, I am interested in the 3-Month Spoken English Course. Please share batch timings and fees structure.";
  };

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020c1b] transition-colors duration-300">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="bg-[#00122E] dark:bg-[#010814] text-white min-h-screen sm:min-h-0 py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300 flex items-center justify-center">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#00122E] via-[#00122E]/80 to-[#00122E]/20 dark:from-[#010814] dark:via-[#010814]/80 dark:to-[#010814]/20 z-10"></div>
          <img
            src="/images/bg-hero.webp"
            alt="Spoken English Background"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/25 text-purple-hero px-3.5 py-1.5 rounded-full border border-purple-hero/40 shadow-sm">
                  The Global Language Academy
                </span>
                <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  New Batches Weekly
                </span>
                <span className="px-3 py-1.5 bg-white/10 text-slate-200 border border-white/15 rounded-full text-[10px] font-extrabold uppercase tracking-widest hidden sm:inline-block">
                  CEFR A1 → C2 • 3 Levels + Optional Add-On
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                  {course.title}
                </h1>
                <p className="text-base sm:text-xl font-bold font-display text-purple-hero">
                  Empowering Communication. Building Global Opportunities.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Improve your fluency, build confidence and master real-life communication with our Spoken English Course. Eliminate hesitation, stop mental translation, and speak naturally from day one.
              </p>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto lg:mx-0 flex items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple animate-pulse shrink-0"></span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    Your Voice. A Brighter Tomorrow.
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Better Communication</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Career Growth</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Global Opportunities</span>
                </div>
              </div>

              {/* 4 Course Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto lg:mx-0 pt-1">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                  <Mic className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Practical Speaking Skills</span>
                  <span className="text-[9px] text-slate-400">Natural rhythm & MTI removal</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                  <Users className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Interactive Learning</span>
                  <span className="text-[9px] text-slate-400">5-7 student micro-batches</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                  <Globe2 className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Real-Life Situations</span>
                  <span className="text-[9px] text-slate-400">Meetings, role plays, interviews</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Personalised Guidance</span>
                  <span className="text-[9px] text-slate-400">1-on-1 audio diagnostics</span>
                </div>
              </div>

              {/* Course Meta Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-b border-white/10 py-5 max-w-2xl mx-auto lg:mx-0 text-left">
                <div>
                  <span className="block text-[9px] uppercase font-extrabold tracking-wider text-slate-400">Core Duration</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white mt-0.5 block">3 Months (1 mo/level)</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-extrabold tracking-wider text-slate-400">CEFR Levels</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white mt-0.5 block">Beginner → Advanced</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-extrabold tracking-wider text-slate-400">Schedule</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white mt-0.5 block">3–4 Sessions / Week</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-extrabold tracking-wider text-purple-hero">Optional Add-On</span>
                  <span className="text-xs sm:text-sm font-extrabold text-purple-300 mt-0.5 block">+ Personality Dev (2 Mo)</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)]">
                <LeadForm defaultCourse="spoken-english" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THREE CORE BENEFITS BANNER                             */}
      {/* ========================================================= */}
      <section className="bg-slate-50 dark:bg-[#020c1b] border-b border-card-border py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center shrink-0 border border-purple/20">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Core Benefit 01</span>
                <h3 className="text-base font-bold text-navy">Better Communication</h3>
                <p className="text-xs text-navy-muted leading-relaxed">
                  Speak clearly, formulate thoughts without hesitation, express yourself with precision, and eliminate mental translation from your mother tongue.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-500">Core Benefit 02</span>
                <h3 className="text-base font-bold text-navy">Career Growth</h3>
                <p className="text-xs text-navy-muted leading-relaxed">
                  Crack campus placements, ace high-stakes MNC job interviews, lead corporate meetings, negotiate promotions, and pitch with authority.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500">Core Benefit 03</span>
                <h3 className="text-base font-bold text-navy">Global Opportunities</h3>
                <p className="text-xs text-navy-muted leading-relaxed">
                  Build international confidence for study abroad, global work assignments, visa interviews, and seamless cross-cultural collaboration.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. INTERACTIVE BUNDLE & ADD-ON SELECTOR (THE PIZZA MODEL) */}
      {/* ========================================================= */}
      <section id="bundles" className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Flexible Learning Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Choose Your Transformation Pathway
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              We integrate <strong>Spoken English</strong> with an optional <strong>Personality Development</strong> add-on. Choose the exact learning model that aligns with your current career stage.
            </p>
          </div>

          {/* 3 Cards: Core, Add-on Combo, and Standalone */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Spoken English Core */}
            <div
              onClick={() => setSelectedBundle('core')}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                selectedBundle === 'core'
                  ? 'bg-purple/5 border-purple shadow-xl ring-2 ring-purple/20'
                  : 'bg-slate-50 dark:bg-[#010814]/70 border-card-border hover:border-purple/40 hover-lift'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-navy font-sans">
                    Core Course
                  </span>
                  <span className="text-xs font-bold text-slate-500">3 Months</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-navy">Spoken English Only</h3>
                  <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                    Ideal for students, job seekers, and learners who want to eliminate hesitation and build fluent conversational & written English.
                  </p>
                </div>

                <div className="border-t border-card-border pt-4 flex flex-col gap-2.5 text-xs text-navy font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Level 1: Beginner (Grammar Foundations & Usage)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Level 2: Intermediate (Debates, Role Plays & Storytelling)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Level 3: Advanced (Receptive Mastery & Executive Writing)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Capstone: Comprehensive Job Interview Preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>3–4 Sessions / Week • Micro-batches (5–7 students)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-card-border">
                <button
                  type="button"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    selectedBundle === 'core'
                      ? 'bg-purple text-white shadow-md'
                      : 'bg-card border border-card-border text-navy hover:bg-purple hover:text-white'
                  }`}
                >
                  <span>Select Spoken English Only</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Spoken English + Personality Development (Add-On Bundle) */}
            <div
              onClick={() => setSelectedBundle('bundle')}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                selectedBundle === 'bundle'
                  ? 'bg-gradient-to-b from-purple/10 to-transparent border-purple shadow-2xl ring-2 ring-purple scale-102 lg:-translate-y-2'
                  : 'bg-slate-50 dark:bg-[#010814]/70 border-card-border hover:border-purple/40 hover-lift'
              }`}
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Recommended Power Bundle</span>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-purple/20 text-purple font-sans">
                    Complete Transformation
                  </span>
                  <span className="text-xs font-bold text-purple">3 + 2 Months</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-navy">
                    Spoken English + Personality Development
                  </h3>
                  <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                    Our flagship executive program combining complete Spoken English fluency with executive presence, leadership, public speaking, and corporate grooming.
                  </p>
                </div>

                <div className="border-t border-card-border pt-4 flex flex-col gap-2.5 text-xs text-navy font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>All 3 Levels</strong> of Spoken English (A1 to C2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Capstone Module:</strong> Intensive Interview Mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Month 1 PD:</strong> Etiquette, Grooming & Self-Confidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Month 2 PD:</strong> Public Speaking & Team Leadership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>1-on-1 Feedback</strong> + 90-Day Personal Action Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Dual Certifications</strong> (Fluency & Executive Presence)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-card-border">
                <button
                  type="button"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    selectedBundle === 'bundle'
                      ? 'bg-purple text-white shadow-lg shadow-purple/30'
                      : 'bg-card border border-card-border text-navy hover:bg-purple hover:text-white'
                  }`}
                >
                  <span>Select Recommended Combo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Personality Development Standalone */}
            <div
              onClick={() => setSelectedBundle('personality')}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
                selectedBundle === 'personality'
                  ? 'bg-purple/5 border-purple shadow-xl ring-2 ring-purple/20'
                  : 'bg-slate-50 dark:bg-[#010814]/70 border-card-border hover:border-purple/40 hover-lift'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-navy font-sans">
                    For Working Professionals
                  </span>
                  <span className="text-xs font-bold text-slate-500">2 Months</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-navy">Personality Development Only</h3>
                  <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                    Designed for working professionals who already possess English fluency and want targeted executive presence, leadership, and public speaking training.
                  </p>
                </div>

                <div className="border-t border-card-border pt-4 flex flex-col gap-2.5 text-xs text-navy font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Month 1 Foundation: Professional Communication & Clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Workplace Etiquette, Grooming & Digital Decorum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Month 2: Public Speaking, Authority & Q&A Mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Stress Management, Time Prioritisation & Team Dynamics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Executive Profile Assessment + 90-Day PDP Roadmap</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-card-border">
                <button
                  type="button"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    selectedBundle === 'personality'
                      ? 'bg-purple text-white shadow-md'
                      : 'bg-card border border-card-border text-navy hover:bg-purple hover:text-white'
                  }`}
                >
                  <span>Select Personality Development Only</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Action Prompt Based on Selection */}
          <div className="mt-10 p-5 rounded-2xl bg-slate-50 dark:bg-[#010814] border border-card-border max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="w-3 h-3 rounded-full bg-purple animate-ping shrink-0 hidden sm:inline-block"></span>
              <p className="text-xs sm:text-sm text-navy font-medium">
                Selected: <strong className="text-purple">
                  {selectedBundle === 'bundle'
                    ? 'Spoken English + Personality Development (Recommended Add-On Combo)'
                    : selectedBundle === 'personality'
                    ? 'Personality Development Standalone (2 Months)'
                    : 'Spoken English Core Course (3 Months)'}
                </strong>
              </p>
            </div>
            <a
              href={`https://wa.me/919217999511?text=${encodeURIComponent(getBundleWhatsAppMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md hover:scale-102 transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Batch & Fee Structure</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. COMPLETE 3-LEVEL SPOKEN ENGLISH SYLLABUS SECTION       */}
      {/* ========================================================= */}
      <section id="syllabus" className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Core Course Curriculum</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Complete 3-Level Syllabus
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Spoken English Course — Build confidence. Communicate clearly. Create global opportunities.
            </p>
          </div>

          {/* Core Specs Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-5xl mx-auto mb-10 text-center">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm">
              <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Total Duration</span>
              <span className="text-xs sm:text-sm font-bold text-navy mt-0.5 block">3 Months (1 mo/level)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm">
              <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Levels</span>
              <span className="text-xs sm:text-sm font-bold text-navy mt-0.5 block">Beginner · Inter · Adv</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm">
              <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">CEFR Range</span>
              <span className="text-xs sm:text-sm font-bold text-purple mt-0.5 block">A1 to C2</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm">
              <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Sessions</span>
              <span className="text-xs sm:text-sm font-bold text-navy mt-0.5 block">3–4 Per Week</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm col-span-2 sm:col-span-1">
              <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Capstone</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">Interview Prep</span>
            </div>
          </div>

          {/* Level Switcher Tabs */}
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between bg-white dark:bg-[#00122E] p-1.5 rounded-2xl border border-card-border shadow-sm">
              {spokenEnglishLevels.map((lvl, idx) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevelTab(idx)}
                  className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
                    activeLevelTab === idx
                      ? 'bg-purple text-white shadow-md'
                      : 'text-navy-muted hover:text-navy hover:bg-slate-100 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <span>{lvl.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeLevelTab === idx ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    {lvl.cefr.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Level Container */}
            <div className="bg-white dark:bg-[#00122E] border border-card-border rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col gap-8 animate-fade-in transition-all">
              
              {/* Header block for current level */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-card-border">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple/10 text-purple text-xs font-extrabold uppercase tracking-wider rounded-lg border border-purple/20">
                      {currentLevel.cefr}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      ⏱️ {currentLevel.monthDuration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-navy">{currentLevel.title}</h3>
                  <p className="text-xs sm:text-sm text-navy-muted leading-relaxed max-w-2xl">{currentLevel.overview}</p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-[#010814] rounded-2xl border border-card-border text-center shrink-0">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 block">Assessment</span>
                  <span className="text-xs font-bold text-navy mt-0.5 block">End of Month 0{currentLevel.levelNumber}</span>
                </div>
              </div>

              {/* Slogan Banner */}
              <div className="p-4 rounded-2xl bg-purple/5 border border-purple/15 text-center">
                <span className="text-xs sm:text-sm font-bold text-purple tracking-wide">
                  🎯 {currentLevel.slogan}
                </span>
              </div>

              {/* Topic Groups Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentLevel.topicGroups.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-center pb-2 border-b border-card-border">
                      <h4 className="text-sm font-bold font-display text-navy flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple" />
                        <span>{group.category}</span>
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple px-2 py-0.5 rounded bg-purple/10">
                        {group.badge}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs text-navy font-semibold leading-relaxed">
                          <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Capstone Box if present (Level 3) */}
              {currentLevel.capstone && (
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#00122E] to-[#1e0a3c] text-white border border-white/10 shadow-xl flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-hero">
                          Advanced Program Feature
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {currentLevel.capstone.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                        {currentLevel.capstone.description}
                      </p>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/15 text-[10px] font-bold uppercase tracking-wider w-fit">
                      11 Comprehensive Competencies
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {currentLevel.capstone.items.map((capItem, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-start gap-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{capItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Level Footer Note */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-card-border text-center sm:text-left">
                <span className="text-xs text-navy-muted font-medium">
                  Learn · Grow · Go Global • <strong>Your Voice. A Brighter Tomorrow.</strong>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveLevelTab((prev) => (prev > 0 ? prev - 1 : 2))}
                    type="button"
                    className="p-2 rounded-lg border border-card-border hover:bg-slate-100 dark:hover:bg-slate-800 text-navy cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-navy">
                    Level {activeLevelTab + 1} of 3
                  </span>
                  <button
                    onClick={() => setActiveLevelTab((prev) => (prev < 2 ? prev + 1 : 0))}
                    type="button"
                    className="p-2 rounded-lg border border-card-border hover:bg-slate-100 dark:hover:bg-slate-800 text-navy cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. PERSONALITY DEVELOPMENT — OPTIONAL ADD-ON SYLLABUS     */}
      {/* ========================================================= */}
      <section id="personality-development" className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-purple bg-purple/10 px-3 py-1 rounded-full border border-purple/20">
                Optional Executive Add-On
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                For Working Professionals
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
              Personality Development — Professional Course Syllabus
            </h2>
            <p className="text-base sm:text-lg font-bold text-navy">
              Build Confidence. Communicate Effectively. Create Bigger Opportunities.
            </p>
            <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
              Refine yourself for a bigger tomorrow. Your personal growth creates a brighter tomorrow. Available as an integrated add-on to Spoken English or as a standalone executive coaching program.
            </p>
          </div>

          {/* 4 Course Benefits Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border text-center flex flex-col items-center justify-center hover-lift">
              <Sparkles className="w-5 h-5 text-purple mb-1.5" />
              <span className="text-xs font-bold text-navy">Boost Confidence</span>
              <span className="text-[10px] text-navy-muted">Overcome anxiety & stage fear</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border text-center flex flex-col items-center justify-center hover-lift">
              <MessageCircle className="w-5 h-5 text-blue-500 mb-1.5" />
              <span className="text-xs font-bold text-navy">Improve Communication</span>
              <span className="text-[10px] text-navy-muted">Clarity, tone & assertive impact</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border text-center flex flex-col items-center justify-center hover-lift">
              <Briefcase className="w-5 h-5 text-emerald-500 mb-1.5" />
              <span className="text-xs font-bold text-navy">Professional Presence</span>
              <span className="text-[10px] text-navy-muted">Executive grooming & etiquette</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border text-center flex flex-col items-center justify-center hover-lift">
              <TrendingUp className="w-5 h-5 text-amber-500 mb-1.5" />
              <span className="text-xs font-bold text-navy">Career Growth</span>
              <span className="text-[10px] text-navy-muted">Promotions, leadership & impact</span>
            </div>
          </div>

          {/* Course Overview Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#010814]/80 border border-card-border max-w-5xl mx-auto mb-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-card-border pb-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Overview & Delivery Architecture</span>
                <h3 className="text-xl font-bold font-display text-navy">Refine Yourself for a Bigger Tomorrow</h3>
                <p className="text-xs text-navy-muted">Designed specifically for working professionals across all corporate industries.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 bg-white dark:bg-[#00122E] border border-card-border rounded-xl text-xs font-bold text-navy">
                  ⏳ 2 Months Duration
                </span>
                <span className="px-3 py-1.5 bg-white dark:bg-[#00122E] border border-card-border rounded-xl text-xs font-bold text-navy">
                  📅 3–4 Sessions / Week
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Core Focus Areas</span>
                <p className="text-xs font-semibold text-navy leading-relaxed">
                  Self-awareness, Interpersonal Communication, Leadership Presence, and Executive Influence.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Delivery Methodology</span>
                <p className="text-xs font-semibold text-navy leading-relaxed">
                  Interactive workshops, live role plays, group activities, and personalised 1-on-1 feedback sessions.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Assessment & Roadmap</span>
                <p className="text-xs font-semibold text-navy leading-relaxed">
                  Personality profiling review + final presentation + peer evaluation + 90-day Personal Development Plan (PDP).
                </p>
              </div>
            </div>
          </div>

          {/* Month 1 vs Month 2 Tabs */}
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between bg-slate-50 dark:bg-[#010814] p-1.5 rounded-2xl border border-card-border shadow-sm">
              {personalityDevelopmentSyllabus.map((monthData, mIdx) => (
                <button
                  key={mIdx}
                  onClick={() => setActivePdMonth(mIdx)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer text-center ${
                    activePdMonth === mIdx
                      ? 'bg-purple text-white shadow-md'
                      : 'text-navy-muted hover:text-navy hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {monthData.month}: {monthData.theme}
                </button>
              ))}
            </div>

            {/* Active Month Modules Content */}
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#010814]/70 border border-card-border flex flex-col gap-8 shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">
                  {personalityDevelopmentSyllabus[activePdMonth].month}
                </span>
                <h3 className="text-2xl font-bold font-display text-navy">
                  {personalityDevelopmentSyllabus[activePdMonth].theme}
                </h3>
                <p className="text-xs sm:text-sm text-navy-muted">
                  Focus: {personalityDevelopmentSyllabus[activePdMonth].focus}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {personalityDevelopmentSyllabus[activePdMonth].modules.map((mod) => (
                  <div
                    key={mod.num}
                    className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-card-border">
                      <span className="w-8 h-8 rounded-lg bg-purple/10 text-purple font-bold text-xs flex items-center justify-center shrink-0 border border-purple/20">
                        {mod.num}
                      </span>
                      <h4 className="text-sm font-bold font-display text-navy leading-snug">
                        {mod.title}
                      </h4>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {mod.topics.map((top, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-navy font-semibold leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Month 2 Capstone Notice */}
              {activePdMonth === 1 && (
                <div className="p-6 rounded-2xl bg-purple/10 border border-purple/20 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple" />
                    <h4 className="text-sm font-bold font-display text-navy">
                      Capstone: Final Assessment & Personal Action Plan
                    </h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-navy font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple shrink-0" />
                      <span>Personality profile review — compare Day 1 vs. Day 60 self-assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple shrink-0" />
                      <span>Mock professional scenario — presentation + GD + peer evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple shrink-0" />
                      <span>One-on-one executive feedback session with the senior trainer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple shrink-0" />
                      <span>Personal Development Plan (PDP) — 90-day action roadmap post-course</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Footer motto */}
              <div className="text-center pt-2">
                <p className="text-xs font-bold text-purple uppercase tracking-widest">
                  Skills Today. Greater Opportunities Tomorrow.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. THE 6 PILLARS OF TGLA SPOKEN ENGLISH EXCELLENCE       */}
      {/* ========================================================= */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Teaching Methodology</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              The 6 Pillars of TGLA Spoken English Excellence
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Our unique speaking-first methodology transforms hesitant speakers into articulate, confident communicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">01</span>
              <h3 className="text-sm font-bold text-navy">Micro Batches (5 to 7 Students)</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Guaranteed individual speaking time every single session. You will never sit silently in a crowded classroom of 30+ students.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">02</span>
              <h3 className="text-sm font-bold text-navy">Audio & Voice Diagnostics</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Listen to your recorded speeches, track MTI elimination, and witness your pronunciation and rhythm evolve week by week.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">03</span>
              <h3 className="text-sm font-bold text-navy">Stage Fear & Extempore Bootcamps</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Step outside your comfort zone through structured debates, rapid-fire Q&A, and live impromptu public speaking exercises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">04</span>
              <h3 className="text-sm font-bold text-navy">Corporate Simulation Lab</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Replicate MNC job interviews, STAR-method HR evaluations, client negotiation roleplays, and formal presentation pitch decks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">05</span>
              <h3 className="text-sm font-bold text-navy">Accent Neutralization (MTI Removal)</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Specialized phonetic tuning to soften heavy regional accents and replace them with clear, globally understood neutral intonation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">06</span>
              <h3 className="text-sm font-bold text-navy">Hybrid Flexibility & Lifetime Portal</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Attend offline in our Dwarka center or live online across 7 AM to 11 PM. Access all class recordings and workbooks 24/7.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. WHO SHOULD ENROLL                                      */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Ideal Profile</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
                Who Should Enroll in this Course?
              </h2>
              <p className="text-sm text-navy-muted leading-relaxed">
                Whether you are preparing for campus placements, corporate leadership, or simply want to speak English without self-doubt:
              </p>

              <div className="p-4 rounded-2xl bg-purple/5 border border-purple/15">
                <span className="text-xs font-bold text-purple block mb-1">Flexible Sales & Learning Model:</span>
                <p className="text-xs text-navy-muted leading-relaxed">
                  Enroll in Spoken English on its own, bundle it with Personality Development for executive transformation, or take Personality Development standalone.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-slate-50 dark:bg-[#010814]/60 border border-card-border p-8 rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 transition-colors duration-300">
              {course.whoShouldJoin.map((profile, idx) => (
                <div key={idx} className="hover-lift flex items-center gap-3 p-3.5 bg-white dark:bg-[#00122E] rounded-xl border border-card-border">
                  <Check className="w-4 h-4 text-purple shrink-0" />
                  <span className="text-xs font-semibold text-navy leading-normal">{profile}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. STUDENT TRANSFORMATIONS & TESTIMONIALS                 */}
      {/* ========================================================= */}
      {course.testimonials && course.testimonials.length > 0 && (
        <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Student Reviews</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
                Fluency Transformations & Executive Breakthroughs
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto flex items-center gap-2 sm:gap-6">
              {/* Prev button */}
              <button
                onClick={prevReview}
                type="button"
                className="p-2 sm:p-3.5 rounded-full bg-white dark:bg-[#00122E] border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
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
                className="p-2 sm:p-3.5 rounded-full bg-white dark:bg-[#00122E] border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeReviewIdx === idx ? 'bg-purple w-6' : 'bg-navy-muted/30 hover:bg-navy-muted/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 9. FAQ ACCORDION                                          */}
      {/* ========================================================= */}
      <section className="bg-white dark:bg-[#00122E] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">FAQ</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-navy-muted">
              Everything you need to know about course levels, batch timings, and the Personality Development add-on.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={course.faqs} />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. CONTACT AND ENROLMENT INFORMATION                     */}
      {/* ========================================================= */}
      <section id="contact-enrolment" className="bg-gradient-to-br from-[#00122E] via-[#051A3C] to-[#2E1065] text-white py-14 sm:py-20 relative overflow-hidden border-t border-b border-card-border">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-light">
                  Admissions Open • Flexible Batches (Online & Offline)
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                  Ready to Transform Your Communication & Confidence?
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed max-w-2xl">
                  Join our <strong>Spoken English & Personality Development Course</strong>. Contact us for batch timings, curriculum roadmaps, and fee structures.
                </p>

                {/* 4 Benefits Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-semibold text-slate-200">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Better Communication</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Greater Confidence</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Professional Presence</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Career Opportunities</span>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="pt-2 flex items-start gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-light shrink-0 mt-0.5" />
                  <span>
                    <strong>Academy Campus:</strong> 3rd Floor, Plot No. 94, PKT-10, Dwarka Sector 13, Opposite Metro Station, Near Radisson Blu Hotel, Delhi – 110078, India.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={`https://wa.me/919217999511?text=${encodeURIComponent(getBundleWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp (9217999511)</span>
                </a>
                <a
                  href="tel:+919217999511"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 9217999511 / 92176 69511</span>
                </a>
                <div className="text-center">
                  <span className="text-[10px] text-slate-400">Learn · Grow · Go Global • Your Voice. A Brighter Tomorrow.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. RELATED COURSES                                       */}
      {/* ========================================================= */}
      <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Other Programs at TGLA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="hover-lift bg-white dark:bg-[#00122E] p-6 rounded-2xl border border-card-border shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
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
