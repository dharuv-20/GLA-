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
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Laptop,
  GraduationCap,
  Sparkles,
  PlaneTakeoff,
  Globe2,
  FileCheck2,
  Layers,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Briefcase
} from 'lucide-react';
import { Course } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface JapaneseCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

interface SyllabusWeek {
  weekNum: string;
  title: string;
  kanjiVocab: string[];
  grammarPatterns: string[];
}

interface SyllabusLevel {
  code: string;
  name: string;
  duration: string;
  books: string[];
  slogan: string;
  weeks: SyllabusWeek[];
}

const japaneseSyllabus: SyllabusLevel[] = [
  {
    code: "N5",
    name: "JLPT N5 (Basic Beginner / 初級)",
    duration: "2 Months",
    books: ["Minna no Nihongo I (みんなの日本語)"],
    slogan: "Master Hiragana, Katakana, 100+ Kanji & Everyday Conversation.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Hiragana, Katakana & Basic Pronunciation",
        kanjiVocab: ["46 Hiragana characters (あ-ん)", "46 Katakana characters (ア-ン)", "Numbers (1-100) & Daily Greetings (aisatsu)"],
        grammarPatterns: ["Pronunciation rules: Dakuon, Handakuon, Youon", "Sentence structure: SOV (Subject Object Verb)", "Particle は (wa) and です (desu)"]
      },
      {
        weekNum: "Week 2",
        title: "Self Introductions & Demonstrative Pronouns",
        kanjiVocab: ["Kanji: 一, 二, 三, 四, 五, 六, 七, 八, 九, 十, 百, 千", "Nationalities & Professions", "Objects in a room"],
        grammarPatterns: ["Particle の (no) for possession", "Demonstratives: これ, それ, あれ, どれ (kore, sore, are, dore)", "Place demonstratives: ここ, そこ, あそこ (koko, soko, asoko)"]
      },
      {
        weekNum: "Week 3",
        title: "Daily Schedule, Time Expressions & Particles",
        kanjiVocab: ["Kanji: 日, 月, 火, 水, 木, 金, 土, 年", "Days of the week & Months", "Time (Hours & Minutes: ji, fun)"],
        grammarPatterns: ["Verbs present polite form: ～ます / ～ません", "Particle に (ni) for specific time points", "Particle から...まで (kara...made: from...to)"]
      },
      {
        weekNum: "Week 4",
        title: "Movement, Locations & Transportation",
        kanjiVocab: ["Kanji: 人, 子, 女, 男, 先, 生, 学, 校", "Transport: Densha, Shinkansen, Basui, Hikouki", "Places in a city: Gakkou, Byouin, Eki"],
        grammarPatterns: ["Verbs: 行きます (ikimasu), 来ます (kimasu), 帰ります (kaerimasu)", "Particle へ (e) for destination", "Particle で (de) for means of transport"]
      },
      {
        weekNum: "Week 5",
        title: "Food, Daily Routines & Transitive Verbs",
        kanjiVocab: ["Kanji: 食, 飲, 見, 聞, 読, 書, 話, 買", "Food, Drinks & Restaurant Vocabulary", "Tools & Instruments"],
        grammarPatterns: ["Particle を (o) for direct objects", "Particle で (de) for action locations", "Invitations: ～ませんか / ～ましょう (masen ka / mashou)"]
      },
      {
        weekNum: "Week 6",
        title: "Giving & Receiving & Adjectives (い / な)",
        kanjiVocab: ["Kanji: 大, 小, 高, 安, 新, 古, 多, 少", "i-Adjectives: takai, yasui, oishii, omoshiroi", "na-Adjectives: kirei, shizuka, nigiyaka"],
        grammarPatterns: ["Adjective past/negative conjugations: ～くない, ～でした", "Giving & receiving: あげます / もらいます (agemasu / moraimasu)"]
      },
      {
        weekNum: "Week 7",
        title: "Te-Form Verbs & Polite Requests",
        kanjiVocab: ["Kanji: 入, 出, 立, 休, 言, 行, 来, 帰", "Verbs Group 1 (Godan), Group 2 (Ichidan), Group 3 (Irregular)"],
        grammarPatterns: ["Te-form conjugation rules (～て)", "Polite requests: ～てください (te kudasai)", "Ongoing action: ～ています (te imasu)"]
      },
      {
        weekNum: "Week 8",
        title: "Permission, Prohibition & Full JLPT N5 Mock",
        kanjiVocab: ["All 100+ JLPT N5 Kanji Synthesis", "800 Essential Vocabulary Word Bank"],
        grammarPatterns: ["Permission: ～てもいいです (te mo ii desu)", "Prohibition: ～てはいけません (te wa ikemasen)", "Full-Length Timed JLPT N5 Mock Examination"]
      }
    ]
  },
  {
    code: "N4",
    name: "JLPT N4 (Elementary / 初中級)",
    duration: "2 Months",
    books: ["Minna no Nihongo II (みんなの日本語)"],
    slogan: "Master 300+ Kanji, Verb Forms & Daily Conversations.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Ta-Form, Past Experiences & Listing Actions",
        kanjiVocab: ["Kanji: 電, 車, 駅, 始, 終, 友, 待, 止", "Past experience vocabulary"],
        grammarPatterns: ["Ta-form (～た) past plain verb form", "Experience: ～たことがあります (ta koto ga arimasu)", "Listing actions: ～たり、～たりします"]
      },
      {
        weekNum: "Week 2",
        title: "Nai-Form, Plain Forms & Informal Speech",
        kanjiVocab: ["Kanji: 手, 足, 目, 耳, 口, 心, 体, 病", "Informal conversational expressions"],
        grammarPatterns: ["Nai-form (～ない) negative plain form", "Must do: ～なければなりません (nakereba narimasen)", "Casual plain speech (Futsukei)"]
      },
      {
        weekNum: "Week 3",
        title: "Potential Form (Ability) & Volitional Form",
        kanjiVocab: ["Kanji: 力, 作, 泳, 走, 読, 勉, 強, 考", "Skills and hobby vocabulary"],
        grammarPatterns: ["Potential form: ～ことができます / ～れます (rareru/reru)", "Volitional form: ～よう (you) for intention", "Planning: ～つもりです (tsumori desu)"]
      },
      {
        weekNum: "Week 4",
        title: "Conditional Forms (たら, なら, ば) & Advice",
        kanjiVocab: ["Kanji: 雨, 雪, 風, 天, 気, 空, 海, 山", "Weather and emergency vocabulary"],
        grammarPatterns: ["Conditionals: ～たら (tara), ～なら (nara), ～ば (ba)", "Giving advice: ～たほうがいいです (ta hou ga ii desu)"]
      }
    ]
  },
  {
    code: "N3",
    name: "JLPT N3 (Intermediate Bridge / 中級)",
    duration: "3 Months",
    books: ["Shin Kanzen Master N3 / Sou Matome N3"],
    slogan: "Bridge to Natural Fluency & Tokyo Corporate Careers.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Keigo (Sonkeigo & Kenjougo) Business Japanese",
        kanjiVocab: ["Kanji: 申, 存, 参, 伺, 拝, 願, 御, 貴", "Business email & corporate greetings"],
        grammarPatterns: ["Sonkeigo (Honorific): お～になります, 敬語 verbs", "Kenjougo (Humble): お～します, 謙譲語 verbs", "Workplace telephone etiquette"]
      },
      {
        weekNum: "Week 2",
        title: "Passive & Causative-Passive Verb Structures",
        kanjiVocab: ["Kanji: 受, 払, 頼, 伝, 訳, 説, 案, 案", "IT & technical placement terms"],
        grammarPatterns: ["Passive form: ～られる (rareru: suffering/respect)", "Causative form: ～させる (saseru: make/let do)", "Causative-Passive: ～させられる (forced to do)"]
      }
    ]
  }
];

export default function JapaneseCourseView({ course, relatedCourses }: JapaneseCourseViewProps) {
  const [selectedLevelCode, setSelectedLevelCode] = useState<string>("N5");
  const activeLevel = japaneseSyllabus.find((lvl) => lvl.code === selectedLevelCode) || japaneseSyllabus[0];

  const focusAreas = [
    {
      badge: "文字 (Scripts)",
      title: "Hiragana, Katakana & 650+ Kanji",
      desc: "Step-by-step stroke orders, radicals, on'yomi/kun'yomi readings, and visual mnemonic flashcards for rapid memorization."
    },
    {
      badge: "文法 (Grammar)",
      title: "Core Particles & Verb Conjugations",
      desc: "Master particles (wa, ga, o, ni, de, to), Te-form, Ta-form, conditionals, potential forms, and natural sentence connectors."
    },
    {
      badge: "聴解 (Listening)",
      title: "Native Audio Immersion & JLPT Choukai",
      desc: "Train with authentic Japanese speed dialogues, announcements, workplace conversations, and JLPT audio test tracks."
    },
    {
      badge: "敬語 (Keigo)",
      title: "Business & Polite Workplace Japanese",
      desc: "Learn Sonkeigo (honorific) and Kenjougo (humble) language required for IT interviews, MNC placements, and client emails."
    },
    {
      badge: "就職 (Careers)",
      title: "Japan Tech & Engineering Placements",
      desc: "Dedicated interview preparation for Tokyo software companies, engineering placements, and Specified Skilled Worker (SSW) visas."
    },
    {
      badge: "模擬試験 (Mocks)",
      title: "100% Official JLPT Mock Test Series",
      desc: "Timed full-length exam simulations mirroring official Japan Foundation test papers with diagnostic score audits."
    }
  ];

  const whyGlaJapanesePillars = [
    {
      number: "01",
      title: "JLPT Certified Bilingual Trainers",
      desc: "Instructors with certified JLPT N1/N2 credentials and direct professional experience working in Japanese MNCs."
    },
    {
      number: "02",
      title: "Mnemonic Kanji Memorization Technique",
      desc: "Visual storytelling mnemonics and daily spaced repetition make learning 100 to 650+ Kanji effortless and enjoyable."
    },
    {
      number: "03",
      title: "Small Focused Batches (Max 5–7)",
      desc: "Small groups guarantee personal attention, daily conversational practice, and precise pronunciation feedback."
    },
    {
      number: "04",
      title: "Japan Job & MEXT Scholarship Advisory",
      desc: "Guidance on resume formatting (Rirekisho), mock visa interviews, and engineering career opportunities in Japan."
    },
    {
      number: "05",
      title: "Authentic Minna no Nihongo Curriculum",
      desc: "Full access to official audio materials, translation workbooks, and Shin Kanzen Master exam drills at no extra fee."
    },
    {
      number: "06",
      title: "Flexible Online & Onsite Batches",
      desc: "Choose between live interactive online batches or immersive in-person lab sessions at our modern academy."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16]">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-white py-14 sm:py-20 lg:py-24 border-b border-card-border overflow-hidden bg-[#00122E] dark:bg-[#010814]">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest bg-purple/35 text-purple-200 px-3.5 py-1.5 rounded-full border border-purple-300/30 shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-purple-hero" />
                  JLPT N5 • N4 • N3 • N2 • N1 Preparation
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest bg-red-500/20 text-red-300 px-3.5 py-1.5 rounded-full border border-red-400/30">
                  Japan Tech Careers & MEXT
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-400 block mb-1.5">
                  The Global Language Academy
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display leading-[1.12] text-white tracking-tight">
                  Japanese Language <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-300 to-red-400">
                    Mastery Program (N5 - N1)
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Master Hiragana, Katakana, Kanji, and natural spoken Japanese. Designed to guarantee success in official <strong>JLPT examinations</strong> and unlock lucrative IT, engineering, and scholarship pathways in Japan.
              </p>

              {/* 4 Core Tenets Grid */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-lg">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2 justify-center lg:justify-start">
                  <Star className="w-3.5 h-3.5 text-purple-hero fill-purple-hero" />
                  Our 4 Core Learning Tenets
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <span className="block text-xs font-bold text-white">Comprehensive Content</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <span className="block text-xs font-bold text-white">Exam-Focused Approach</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <span className="block text-xs font-bold text-white">Practise Smartly</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <span className="block text-xs font-bold text-white">Achieve Excellence</span>
                  </div>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-2 border-t border-white/10">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Clock className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Duration</span>
                    <span className="text-xs font-extrabold text-white">4 - 14 Months</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Users className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Batch Size</span>
                    <span className="text-xs font-extrabold text-white">5–7 Students Max</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Laptop className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Formats</span>
                    <span className="text-xs font-extrabold text-white">Online & Onsite</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3">
                  <Award className="w-4 h-4 text-purple-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Certificates</span>
                    <span className="text-xs font-extrabold text-white">JLPT N5 to N1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-purple/40 via-red-500/20 to-purple/20 border border-white/15 shadow-2xl backdrop-blur-xl">
                <div className="bg-[#00122E]/95 p-5 sm:p-6 rounded-[22px] border border-white/10">
                  <div className="mb-4 text-center">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-purple/35 text-purple-200 px-3 py-1 rounded-full border border-purple-300/20 mb-2">
                      Free Japanese Trial Class
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-display">Book 1-on-1 Consultation</h2>
                    <p className="text-xs text-slate-300 mt-1">Discover our Kanji mnemonic system and Japan career roadmap.</p>
                  </div>
                  <LeadForm defaultCourse="japanese-language" />
                  <div className="mt-3 text-center">
                    <span className="text-[10px] text-slate-400">🔒 100% Confidential • Instant Academic Assessment</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-slate-50 dark:bg-[#071322] border-b border-slate-200 dark:border-slate-800 py-6 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-sm sm:text-base font-bold font-display italic text-navy">
            &ldquo;七転び八起き (Fall seven times, stand up eight) — Learn Japanese, Build Tomorrow.&rdquo;
          </blockquote>
          <p className="text-xs text-purple font-bold uppercase tracking-widest mt-1.5">Your Pathway to IT Careers & Education in Japan.</p>
        </div>
      </section>

      {/* 2. FOCUS AREAS */}
      <section className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Core Competencies</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Structured Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              We cover all 3 scripts, core grammar patterns, Keigo business conversation, and native audio training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800/40 block w-fit mb-4">
                    {area.badge}
                  </span>
                  <h3 className="text-lg font-bold font-display text-navy mb-2">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LEVEL-WISE SYLLABUS */}
      <section className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Curriculum Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Level-by-Level Japanese Syllabus
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Step-by-step progress roadmap aligned with the official Japan Foundation JLPT framework.
            </p>
          </div>

          {/* Level Switcher Buttons */}
          <div className="flex justify-center mb-10">
            <div className="bg-white dark:bg-[#0b1a2e] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm inline-flex gap-1.5">
              {japaneseSyllabus.map((lvl) => (
                <button
                  key={lvl.code}
                  onClick={() => setSelectedLevelCode(lvl.code)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedLevelCode === lvl.code
                      ? 'bg-purple text-white shadow-md'
                      : 'text-navy-muted hover:text-navy'
                  }`}
                >
                  JLPT {lvl.code}
                </button>
              ))}
            </div>
          </div>

          {/* Active Level Card */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">JLPT Level {activeLevel.code}</span>
                <h3 className="text-2xl font-black font-display text-navy">{activeLevel.name}</h3>
                <p className="text-xs text-navy-muted italic mt-1">&ldquo;{activeLevel.slogan}&rdquo;</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold bg-slate-100 dark:bg-[#071322] text-navy px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  ⏱️ {activeLevel.duration}
                </span>
                <span className="text-xs font-bold bg-purple-50 dark:bg-purple-950/50 text-purple px-3 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800/40">
                  📚 {activeLevel.books.join(", ")}
                </span>
              </div>
            </div>

            {/* Weeks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {activeLevel.weeks.map((week, wIdx) => (
                <div key={wIdx} className="p-5 rounded-2xl bg-slate-50 dark:bg-[#071322] border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple-50 dark:bg-purple-950/50 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800/40">
                      {week.weekNum}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-display text-navy mb-3">{week.title}</h4>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-muted block">Kanji & Vocab:</span>
                      <p className="text-navy font-medium">{week.kanjiVocab.join(" • ")}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-muted block">Grammar Patterns:</span>
                      <p className="text-navy font-medium">{week.grammarPatterns.join(" • ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE GLA JAPANESE */}
      <section className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">6 Pillars of Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Why Learn Japanese with GLA?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              From absolute beginners mastering Hiragana to engineers preparing for JLPT N2 and Tokyo placements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGlaJapanesePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b1a2e] border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-display block mb-3">{pillar.number}</span>
                  <h3 className="text-lg font-bold text-navy mb-2 font-display">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. REVIEWS & FAQS */}
      <section className="bg-slate-50 dark:bg-[#071322] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {course.testimonials && course.testimonials.length > 0 && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-purple">Student Results</span>
                <h2 className="text-3xl font-black font-display text-navy tracking-tight">
                  Verified JLPT Results & Reviews
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {course.testimonials.map((test) => (
                  <div key={test.id} className="hover-lift rounded-3xl">
                    <TestimonialCard testimonial={test} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Questions Answered</span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-navy tracking-tight mt-1">
                Frequently Asked Questions About Japanese Classes
              </h2>
            </div>
            <FAQAccordion faqs={course.faqs || []} />
          </div>

          {/* Back Cover CTA */}
          <div className="bg-gradient-to-tr from-[#00122E] via-[#092b5a] to-[#00122E] text-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-purple/40 text-purple-200 px-3.5 py-1 rounded-full border border-purple-300/30 w-fit">
                  Shape Your Future
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white leading-tight">
                  Ready to Start Your Japanese Journey? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-200 to-red-400">
                    WE GUIDE. YOU GROW. YOU SUCCEED.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Join our upcoming batch and get access to Minna no Nihongo textbooks, Kanji mnemonic guides, and JLPT mock exams.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/917988358249?text=Hi%20GLA,%20I%20am%20interested%20in%20the%20Japanese%20Language%20Course."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+917988358249"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 79883 58249</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. RELATED COURSES */}
      <section className="bg-white dark:bg-[#020a16] py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More Programs</span>
            <h2 className="text-3xl font-black font-display text-navy tracking-tight">
              Other Language Courses at GLA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="hover-lift bg-slate-50 dark:bg-[#0b1a2e] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-navy mb-1">{rel.title}</h3>
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
