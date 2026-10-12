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
  TrendingUp
} from 'lucide-react';
import { Course } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface SpokenEnglishCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

interface SyllabusWeek {
  weekNum: string;
  title: string;
  topicsVocab: string[];
  grammarStructures: string[];
}

interface SyllabusLevel {
  code: string;
  name: string;
  duration: string;
  books: string[];
  slogan: string;
  weeks: SyllabusWeek[];
}

const spokenEnglishSyllabus: SyllabusLevel[] = [
  {
    code: "Foundation",
    name: "Foundation Fluency & Confidence Building",
    duration: "4 Weeks (Phase 1)",
    books: ["Cambridge English in Use (Foundation) + GLA Interactive Workbook"],
    slogan: "Eliminate Hesitation. Stop Mental Translation. Speak Naturally from Day One.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Breaking Hesitation & Conversational Icebreakers",
        topicsVocab: [
          "Everyday greetings, polite introductions & self-presentation",
          "Small talk icebreakers: weather, commute, family & hobbies",
          "Emotional expressions, opinions, and everyday reactions",
          "Eliminating filler words ('uh', 'um', 'like', 'actually')"
        ],
        grammarStructures: [
          "Subject-Verb agreement & essential auxiliary verbs (is/am/are, do/does)",
          "Present Simple vs. Present Continuous in daily speech",
          "WH-Question framing without grammatical inversion errors",
          "Short conversational replies & active listening affirmations"
        ]
      },
      {
        weekNum: "Week 2",
        title: "Describing Experiences, Daily Routines & Past Events",
        topicsVocab: [
          "Detailed daily schedules, work life, and hobbies",
          "Food, dining, culinary preferences & recipe explanations",
          "Travel experiences, vacations, and city descriptions",
          "Time markers, transitional adverbs & storytelling vocabulary"
        ],
        grammarStructures: [
          "Past Simple vs. Present Perfect: overcoming the common tense confusion",
          "Time conjunctions (when, while, after, before, as soon as)",
          "Regular vs. Irregular past participle verbs in spoken rhythm",
          "Prepositions of time, place, and movement (in, at, on, into, across)"
        ]
      },
      {
        weekNum: "Week 3",
        title: "Expressing Opinions, Polite Disagreement & Active Listening",
        topicsVocab: [
          "Giving strong, neutral, and tentative opinions respectfully",
          "Polite disagreements & diplomatic phrasing techniques",
          "Movie, book, news, and lifestyle conversational reviews",
          "Asking for clarification, paraphrasing, and confirmation checks"
        ],
        grammarStructures: [
          "Modals of possibility & advice (should, could, might, ought to)",
          "Comparative & superlative adjectives for lively descriptions",
          "Cause & effect connectors (because, since, therefore, so that)",
          "Phrasal verbs for daily conversations (look up, get along, turn down)"
        ]
      },
      {
        weekNum: "Week 4",
        title: "Real-World Situational Roleplays & Practical Dialogues",
        topicsVocab: [
          "Restaurant orders, dietary preferences & handling billing disputes",
          "Airport check-in, customs declarations, flight changes & hotel bookings",
          "Shopping, bargaining, requesting refunds & product inquiries",
          "Medical appointments: explaining symptoms & understanding prescriptions"
        ],
        grammarStructures: [
          "Future expressions: 'going to' vs. 'will' vs. present continuous",
          "Conditional Type 1 for everyday predictions (If you go, I will...)",
          "Polite requests & permissions (Could you possibly..., Would you mind...)",
          "Direct vs. Indirect question structures in polite conversation"
        ]
      }
    ]
  },
  {
    code: "Advanced",
    name: "Advanced Fluency, Accent Neutralization & Corporate Presence",
    duration: "4 Weeks (Phase 2)",
    books: ["Cambridge Business Benchmark + GLA Voice & Accent Audio Masterclass"],
    slogan: "Master Pronunciation. Command Public Speaking. Lead Corporate Conversations.",
    weeks: [
      {
        weekNum: "Week 5",
        title: "Voice, Accent Neutralization & Phonetic Intonation Drills",
        topicsVocab: [
          "Mother Tongue Influence (MTI) diagnosis & personalized correction roadmap",
          "Troublesome consonant pairs: /v/ vs /w/, /p/ vs /b/, /s/ vs /sh/, /th/ sounds",
          "Vowel length, short vs. long vowels, and the neutral 'Schwa' sound (/ə/)",
          "Syllable stress, word accentuation, and natural cadence in spoken sentences"
        ],
        grammarStructures: [
          "Connected speech: assimilation, elision, and intrusive sounds",
          "Contractions & rhythm timing in conversational English",
          "Rising vs. Falling intonation for questions, lists, and authoritative statements",
          "Pausing techniques and breath control for calm, confident delivery"
        ]
      },
      {
        weekNum: "Week 6",
        title: "Public Speaking, Extempore & Persuasive Storytelling",
        topicsVocab: [
          "1-minute and 2-minute extempore speeches on impromptu topics",
          "The 3-part speech architecture: Hook, Core Message, Impactful Call-to-Action",
          "Storytelling frameworks (Hero's Journey, Problem-Action-Result)",
          "Body language, eye contact, hand gestures, and stage presence mastery"
        ],
        grammarStructures: [
          "Advanced discourse markers (furthermore, nonetheless, conversely)",
          "Rhetorical questions & parallel structures for persuasive impact",
          "Narrative tenses (Past Continuous, Past Perfect) for vivid anecdotes",
          "Emphasis structures: cleft sentences ('What really matters is...')"
        ]
      },
      {
        weekNum: "Week 7",
        title: "Workplace Communication, Meeting Leadership & Email Etiquette",
        topicsVocab: [
          "Leading team standups, agenda setting, and time management in meetings",
          "Pitching ideas, managing interruptions, and steering group discussions",
          "Corporate email etiquette: professional openers, clear asks, graceful sign-offs",
          "Constructive feedback delivery and diplomatic conflict resolution"
        ],
        grammarStructures: [
          "Formal vs. Informal register and tone calibration",
          "Passive voice & nominalization for objective corporate reporting",
          "Hedging and softening techniques in business correspondence",
          "Hypothetical conditional phrasing for strategic negotiations (If we were to...)"
        ]
      },
      {
        weekNum: "Week 8",
        title: "Mock Job Interviews, Group Discussions & Final Presentation",
        topicsVocab: [
          "Mastering the STAR method (Situation, Task, Action, Result) for behavioral HR questions",
          "High-impact self-introductions ('Tell me about yourself' formula)",
          "Group Discussion (GD) leadership: entering smoothly, summarizing, mediating",
          "Salary negotiations, answering weakness questions, and asking smart questions"
        ],
        grammarStructures: [
          "Advanced conditionality (Had I known..., Were it not for...)",
          "Power verbs and active impact statements for resume and interview defense",
          "Comprehensive error analysis and pronunciation recap",
          "Live graduation speech and individual fluency certificate assessment"
        ]
      }
    ]
  }
];

export default function SpokenEnglishCourseView({ course, relatedCourses }: SpokenEnglishCourseViewProps) {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({ "0-Week 1": true, "1-Week 5": true });
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const activeLevel = spokenEnglishSyllabus[activeLevelIdx];

  const toggleWeek = (levelIdx: number, weekNum: string) => {
    const key = `${levelIdx}-${weekNum}`;
    setExpandedWeeks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? course.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === course.testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020c1b] transition-colors duration-300">
      
      {/* 1. Hero Landing Block */}
      <section className="bg-[#00122E] dark:bg-[#010814] text-white min-h-screen sm:min-h-0 py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300 flex items-center justify-center">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-45 dark:opacity-25 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#00122E] via-[#00122E]/70 to-[#00122E]/10 dark:from-[#010814] dark:via-[#010814]/70 dark:to-[#010814]/10 z-10"></div>
          <img src="/images/bg-hero.webp" alt="Spoken English Background" width={1280} height={720} loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/20 text-purple-hero px-3.5 py-1.5 rounded-full border border-purple-hero/35">
                  Accent Neutralization • Public Speaking • Corporate Fluency
                </span>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-extrabold uppercase tracking-widest hidden sm:inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  New Batches Weekly
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                {course.title}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Overcome hesitation, stop translating in your head, and speak fluent English with natural pronunciation. An intensive, interactive speaking-first curriculum covering accent neutralization, vocabulary expansion, public speaking, and executive interview preparation.
              </p>

              {/* 4 Core Tenets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto lg:mx-0 pt-2">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center">
                  <Mic className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Daily 1-on-1 Speaking</span>
                  <span className="text-[9px] text-slate-400">5-7 student batches</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center">
                  <Volume2 className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">MTI Removal</span>
                  <span className="text-[9px] text-slate-400">Accent neutralization</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center">
                  <Briefcase className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Corporate Etiquette</span>
                  <span className="text-[9px] text-slate-400">Interviews & GDs</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-300 mb-1" />
                  <span className="text-[11px] font-bold text-white">Stage Fear Buster</span>
                  <span className="text-[9px] text-slate-400">Extempore & Debates</span>
                </div>
              </div>

              {/* Core Details Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-b border-white/5 py-6 max-w-2xl mx-auto lg:mx-0">
                {/* Total Duration */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Total Duration</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block leading-tight">2 to 3 Months</span>
                  </div>
                </div>
                
                {/* Batch Size */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Batch Size</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block leading-tight">5-7 Students Max</span>
                  </div>
                </div>
                
                {/* Online Batches */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Online Batches</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block leading-tight">7 Days, 7 AM - 11 PM</span>
                  </div>
                </div>
                
                {/* Offline Batches */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Offline Batches</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block leading-tight">Mon - Fri, 10 AM - 6 PM</span>
                  </div>
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

      {/* Quote Banner */}
      <section className="bg-slate-50 dark:bg-[#020c1b] border-b border-card-border py-8 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-base sm:text-lg font-bold font-display italic text-navy">
            “Your voice is your most powerful tool. Speak with clarity, connect with confidence, and lead without fear.”
          </blockquote>
          <p className="text-xs text-purple font-bold uppercase tracking-widest mt-2">Practice Smartly • Speak Fluently • Succeed Globally</p>
        </div>
      </section>

      {/* 2. Stated Focus Areas Grid */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Core Competencies</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Structured Focus Areas</h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              We focus on practical conversation and real-world application, eliminating hesitation through daily speaking drills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fluency & Spontaneity */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Spontaneity</span>
              <h3 className="text-sm font-bold text-navy">Fluency & Mental Translation Elimination</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Train your brain to think and express ideas directly in English without hesitation, stammering, or pauses.
              </p>
            </div>
            
            {/* Accent Neutralization */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Pronunciation</span>
              <h3 className="text-sm font-bold text-navy">Accent Neutralization & MTI Removal</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Neutralize regional Mother Tongue Influence (MTI) through phonetic mouth positioning, syllable stress, and intonation drills.
              </p>
            </div>

            {/* Practical Grammar */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Grammar</span>
              <h3 className="text-sm font-bold text-navy">Practical Spoken Grammar in Context</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Master correct tense usage, prepositions, and sentence construction through active speaking rather than rote memorization.
              </p>
            </div>

            {/* Vocabulary & Idioms */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Vocabulary</span>
              <h3 className="text-sm font-bold text-navy">Active Vocabulary & Collocations</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Expand your daily word bank with corporate expressions, dynamic verbs, phrasal collocations, and idiomatic phrases.
              </p>
            </div>

            {/* Public Speaking & Debates */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Confidence</span>
              <h3 className="text-sm font-bold text-navy">Public Speaking & Stage Fear Busting</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Deliver extempore speeches, present slideshows, participate in debates, and express opinions in front of diverse groups.
              </p>
            </div>

            {/* Corporate & Interview Skills */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Executive</span>
              <h3 className="text-sm font-bold text-navy">Corporate Meetings & Interview Prep</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Master the STAR interview technique, group discussion moderation, professional email etiquette, and client communication.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Materials & Outcomes Split Section */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Official Materials Provided */}
            <div className="lg:col-span-6 bg-white dark:bg-[#00122E] border border-card-border p-8 rounded-2xl flex flex-col gap-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-2 text-purple font-bold">
                <BookOpen className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">Required Course Materials</h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                All learning materials, workbooks, and audio resources are fully provided by The Global Language Academy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 dark:bg-[#010814]/40 rounded-2xl border border-card-border flex flex-col gap-3 hover-lift transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-emerald-500/15 text-emerald-500 border border-emerald-500/20 rounded text-[9px] font-extrabold uppercase tracking-widest">Phase 1 Foundation</span>
                    <BookOpen className="w-4 h-4 text-purple" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-extrabold text-navy">Cambridge English in Use</h4>
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold font-sans">
                      Practical grammar reference, daily conversational drills, and situational roleplay prompt cards.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-[#010814]/40 rounded-2xl border border-card-border flex flex-col gap-3 hover-lift transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-blue-500/15 text-blue-500 border border-blue-500/20 rounded text-[9px] font-extrabold uppercase tracking-widest">Phase 2 Advanced</span>
                    <BookOpen className="w-4 h-4 text-purple" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-extrabold text-navy">Cambridge Business Benchmark</h4>
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold font-sans">
                      Executive communication, email etiquette manuals, and corporate meeting management blueprints.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 dark:bg-[#010814]/40 rounded-2xl border border-card-border flex flex-col gap-3 hover-lift transition-all duration-300 col-span-1 sm:col-span-2">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-purple/15 text-purple border border-purple/20 rounded text-[9px] font-extrabold uppercase tracking-widest">Acoustic Drills</span>
                    <BookOpen className="w-4 h-4 text-purple" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-extrabold text-navy">GLA Voice & Accent Master Toolkit</h4>
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold font-sans">
                      Dedicated audio tracks, phonetic mouth charts, tongue twisters, intonation meters, and 100+ recorded mock interview analyses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-card-border pt-4 flex flex-col gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy">Included in the package:</span>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-navy font-semibold">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Daily 1-on-1 speaking feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>50+ situational roleplays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Voice recording diagnostics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Corporate GD & interview bootcamps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Key Milestones */}
            <div className="lg:col-span-6 bg-white dark:bg-[#00122E] border border-card-border p-8 rounded-2xl flex flex-col gap-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-2 text-purple font-bold">
                <Award className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">Target Milestones & Outcomes</h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                By the end of this course, you will achieve measurable mastery across these core milestones:
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-[#010814]/40 rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-12 h-10 bg-purple/10 text-purple rounded-lg border border-purple/20 flex items-center justify-center shrink-0 font-bold text-sm">
                    01
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">Zero Hesitation & No Mental Translation</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Formulate spontaneous thoughts directly in English</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-[#010814]/40 rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-12 h-10 bg-purple/10 text-purple rounded-lg border border-purple/20 flex items-center justify-center shrink-0 font-bold text-sm">
                    02
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">Neutralized Accent & Clear Diction</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Correct syllable stress and eliminate regional MTI</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-[#010814]/40 rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-12 h-10 bg-purple/10 text-purple rounded-lg border border-purple/20 flex items-center justify-center shrink-0 font-bold text-sm">
                    03
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">Fearless Public Speaking & Presentation</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Deliver engaging extempore and structured slide pitches</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-[#010814]/40 rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-12 h-10 bg-purple/10 text-purple rounded-lg border border-purple/20 flex items-center justify-center shrink-0 font-bold text-sm">
                    04
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">Corporate Interview & GD Domination</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Answer STAR questions fluently and lead discussions</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-card-border pt-4 flex flex-col gap-2">
                <blockquote className="text-xs font-bold font-display italic text-navy text-center">
                  "YOUR FLUENCY TRANSFORMATION STARTS WITH ACTIVE DAILY SPEAKING!"
                </blockquote>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Complete Spoken English Course Structure (Weekly timeline navigator) */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Syllabus</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Week-by-Week Curriculum Roadmap</h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Explore our structured 8-week timeline. Click on the phase tabs below to inspect weekly modules.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* Level selector tabs */}
            <div className="flex flex-col gap-3 max-w-xl mx-auto w-full">
              {/* Compact Pill Selector Row */}
              <div className="flex items-center justify-between bg-slate-50 dark:bg-[#010814] p-1.5 rounded-full border border-card-border shadow-sm">
                {spokenEnglishSyllabus.map((lvl, index) => (
                  <button
                    key={lvl.code}
                    onClick={() => setActiveLevelIdx(index)}
                    className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                      activeLevelIdx === index
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-navy-muted hover:text-navy hover:bg-navy-light/40'
                    }`}
                  >
                    Phase {index + 1}: {lvl.code}
                  </button>
                ))}
              </div>
              
              {/* Compact Sub-details Indicator */}
              <div className="text-center">
                <span className="text-[10px] sm:text-xs font-bold text-navy-muted bg-slate-50 dark:bg-[#010814] px-3.5 py-1.5 rounded-full border border-card-border inline-flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse"></span>
                  Selected: <strong className="text-navy">{activeLevel.name}</strong> • Duration: <strong className="text-navy">{activeLevel.duration}</strong>
                </span>
              </div>
            </div>

            {/* Active level details and weekly timelines */}
            <div className="flex flex-col gap-6 animate-fade-in">
              {/* Level metadata banner */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#010814] border border-card-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors duration-300">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Program Phase</span>
                  <h3 className="text-lg font-bold text-navy">{activeLevel.name}</h3>
                </div>
                <div className="flex flex-col gap-1 text-left sm:text-right">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Duration</span>
                  <span className="text-sm font-semibold text-navy">⏳ {activeLevel.duration}</span>
                </div>
              </div>

              {/* Slogan Banner */}
              <div className="p-4 rounded-xl bg-purple/10 border border-purple/20 text-center">
                <span className="text-xs font-bold text-purple uppercase tracking-wider">
                  🎯 {activeLevel.slogan}
                </span>
              </div>

              {/* Weeks Accordion */}
              <div className="flex flex-col gap-4">
                {activeLevel.weeks.map((week) => {
                  const isExpanded = !!expandedWeeks[`${activeLevelIdx}-${week.weekNum}`];
                  return (
                    <div
                      key={week.weekNum}
                      className="border border-card-border rounded-2xl overflow-hidden bg-white dark:bg-[#00122E] shadow-sm transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleWeek(activeLevelIdx, week.weekNum)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#010814]/60 hover:bg-slate-100 dark:hover:bg-[#010814] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-purple text-white rounded-lg text-xs font-extrabold uppercase tracking-wider shrink-0">
                            {week.weekNum}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-navy">
                            {week.title}
                          </h4>
                        </div>
                        <div className="p-1 rounded-full bg-card border border-card-border text-navy-muted">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-[#00122E] border-t border-card-border">
                          {/* Topics / Vocabulary */}
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple flex items-center gap-1.5">
                              <MessageCircle className="w-3.5 h-3.5" />
                              Conversational Topics & Vocabulary
                            </span>
                            <ul className="flex flex-col gap-2">
                              {week.topicsVocab.map((topic, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-navy font-semibold">
                                  <Check className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Grammar / Structures */}
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Grammar, Structures & Phonetics
                            </span>
                            <ul className="flex flex-col gap-2">
                              {week.grammarStructures.map((gram, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-navy font-semibold">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{gram}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. The 6 Pillars of GLA Spoken English Excellence */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Why Choose GLA</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">The 6 Pillars of GLA Spoken English Excellence</h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Our unique methodology transforms hesitant speakers into articulate, confident communicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#00122E] border border-card-border hover-lift flex flex-col gap-3 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center font-bold text-base">01</span>
              <h3 className="text-sm font-bold text-navy">Micro Batches (Max 5–7 Students)</h3>
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

      {/* 6. Who Should Join */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Ideal Profile</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
                Who Should Enroll in this Course?
              </h2>
              <p className="text-sm text-navy-muted leading-relaxed">
                Whether you are preparing for campus interviews, corporate leadership, or simply want to speak English without self-doubt:
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-slate-50 dark:bg-[#010814]/60 border border-card-border p-8 rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 transition-colors duration-300">
              {course.whoShouldJoin.map((profile, idx) => (
                <div key={idx} className="hover-lift flex items-center gap-3 p-3 bg-white dark:bg-[#00122E] rounded-xl border border-card-border">
                  <Check className="w-4 h-4 text-purple shrink-0" />
                  <span className="text-xs font-semibold text-navy leading-normal">{profile}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Success Stories Testimonials */}
      {course.testimonials && course.testimonials.length > 0 && (
        <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Student Reviews</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Scorecard Results & Fluency Transformations</h2>
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

      {/* 8. FAQ Accordion */}
      <section className="bg-white dark:bg-[#00122E] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">FAQ</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={course.faqs} />
          </div>
        </div>
      </section>

      {/* ADMISSIONS & ENROLMENT CTA */}
      <section className="bg-gradient-to-br from-[#00122E] via-[#051A3C] to-[#2E1065] text-white py-14 sm:py-20 relative overflow-hidden border-t border-b border-card-border">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-light">
                  Admissions Open • Limited Seats Per Batch
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                  Start Your Fluency Transformation with GLA
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed max-w-2xl">
                  Enrol in our structured Spoken English & Public Speaking courses. Learn in micro batches (max 5–7 learners) with personalized feedback, audio diagnostics, and corporate interview prep.
                </p>

                {/* 4 Pillars Mini-Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-semibold text-slate-200">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Micro Batches (5-7)
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Voice Diagnostics
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ MTI Neutralization
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Corporate Roleplays
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
                  href="https://wa.me/919217999511?text=Hi%20GLA,%20I%20am%20interested%20in%20the%20Spoken%20English%20Course.%20Please%20share%20batch%20timings%20and%20fee%20structure."
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
                  <span className="text-[10px] text-slate-400">Learn. Grow. Go Global.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. Related/Alternative courses */}
      <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Other Programs at GLA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="hover-lift bg-white dark:bg-[#00122E] p-6 rounded-xl border border-card-border shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
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
