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
  FileText,
  Target,
  AlertCircle,
  Headphones,
  PenTool,
  Bookmark,
  CheckSquare
} from 'lucide-react';
import { Course } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import { JapaneseLeadForm } from '@/features/lead-capture/components/CourseEnrollmentForm';
import FormattedTitle from '@/components/FormattedTitle';

interface JapaneseCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

interface JapaneseLesson {
  lessonNum: string;
  shortCode: string;
  stageName: string;
  title: string;
  tag: string;
  tagColor: string;
  coreActivities: string[];
  additionalPractice: string[];
}

const japaneseLessonsData: JapaneseLesson[] = [
  {
    lessonNum: "Lesson 1 (L1)",
    shortCode: "L1",
    stageName: "Stage 1: Hiragana Foundations",
    title: "Introduction, Numbers, Counters & Greetings",
    tag: "Hiragana Lines",
    tagColor: "bg-purple/10 text-purple border-purple/20",
    coreActivities: [
      "Introduction and greetings.",
      "Counting and numbers.",
      "Time.",
      "Days and months.",
      "Age.",
      "Important counters.",
      "Completion of Lesson 1 (L1).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Hiragana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 2 (L2)",
    shortCode: "L2",
    stageName: "Stage 1: Hiragana Foundations",
    title: "Demonstratives, Object Identification & Sentence Structures",
    tag: "Hiragana Lines",
    tagColor: "bg-purple/10 text-purple border-purple/20",
    coreActivities: [
      "Completion of Lesson 2 (L2).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Hiragana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 3 (L3)",
    shortCode: "L3",
    stageName: "Stage 1: Hiragana Foundations",
    title: "Places, Directions & Pricing Conversations",
    tag: "Hiragana Lines",
    tagColor: "bg-purple/10 text-purple border-purple/20",
    coreActivities: [
      "Completion of Lesson 3 (L3).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Hiragana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 4 (L4)",
    shortCode: "L4",
    stageName: "Stage 1: Hiragana Foundations",
    title: "Time Scheduling, Routine Verbs & Particle Usage",
    tag: "Hiragana Lines",
    tagColor: "bg-purple/10 text-purple border-purple/20",
    coreActivities: [
      "Completion of Lesson 3 (L3).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Hiragana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 5 (L5)",
    shortCode: "L5",
    stageName: "Stage 1: Hiragana Foundations",
    title: "Transit, Destinations & Daily Commute Patterns",
    tag: "Hiragana Completion",
    tagColor: "bg-purple/15 text-purple border-purple/30",
    coreActivities: [
      "Completion of Lesson 4 (L4).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Hiragana completion.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 6 (L6)",
    shortCode: "L6",
    stageName: "Stage 2: Katakana Mastery",
    title: "Actions, Objects & Restaurant Expressions",
    tag: "Katakana Lines",
    tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    coreActivities: [
      "Completion of Lesson 5 (L5).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Katakana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 7 (L7)",
    shortCode: "L7",
    stageName: "Stage 2: Katakana Mastery",
    title: "Giving, Receiving & Tool Utilization Phrases",
    tag: "Katakana Lines",
    tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    coreActivities: [
      "Completion of Lesson 6 (L6).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Katakana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 8 (L8)",
    shortCode: "L8",
    stageName: "Stage 2: Katakana Mastery",
    title: "Descriptive Adjectives & Character Qualities",
    tag: "Katakana Lines",
    tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    coreActivities: [
      "Completion of Lesson 7 (L7).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Katakana lines.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 9 (L9)",
    shortCode: "L9",
    stageName: "Stage 2: Katakana Mastery",
    title: "Likes, Preferences, Abilities & Reasons",
    tag: "Katakana Completion",
    tagColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
    coreActivities: [
      "Completion of Lesson 8 (L8).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Katakana completion.",
      "Word practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 10 (L10)",
    shortCode: "L10",
    stageName: "Stage 2: Katakana Mastery",
    title: "Spatial Positions, Existence & Environment",
    tag: "Reading & Listening",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    coreActivities: [
      "Completion of Lesson 9 (L9).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice."
    ],
    additionalPractice: [
      "Vocabulary and grammar review quiz.",
      "Reading practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 11 (L11)",
    shortCode: "L11",
    stageName: "Stage 3: Kanji Foundations",
    title: "Quantities, Durations & Family Hierarchy",
    tag: "Reading & Listening",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    coreActivities: [
      "Completion of Lesson 10 (L10).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice."
    ],
    additionalPractice: [
      "Vocabulary and grammar review quiz.",
      "Reading practice.",
      "Listening practice."
    ]
  },
  {
    lessonNum: "Lesson 12 (L12)",
    shortCode: "L12",
    stageName: "Stage 3: Kanji Foundations",
    title: "Past Comparisons, Weather & Seasons",
    tag: "Kanji Lesson 2",
    tagColor: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 12 (L12).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 2.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 13 (L13)",
    shortCode: "L13",
    stageName: "Stage 3: Kanji Foundations",
    title: "Wishes, Desires & Dual-Action Travel",
    tag: "Kanji Lesson 3",
    tagColor: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 13 (L13).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 3.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 14 (L14)",
    shortCode: "L14",
    stageName: "Stage 3: Kanji Foundations",
    title: "Te-Form Conjugation & Polite Requests",
    tag: "Kanji Lesson 4",
    tagColor: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 14 (L14).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 4.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 15 (L15)",
    shortCode: "L15",
    stageName: "Stage 3: Kanji Foundations",
    title: "Permissions, Prohibitions & Ongoing States",
    tag: "Kanji Lesson 5",
    tagColor: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 15 (L15).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 5.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 16 (L16)",
    shortCode: "L16",
    stageName: "Stage 4: Intermediate Kanji",
    title: "Sequential Actions, Body Parts & Directions",
    tag: "Kanji Lesson 6",
    tagColor: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 16 (L16).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 6.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 17 (L17)",
    shortCode: "L17",
    stageName: "Stage 4: Intermediate Kanji",
    title: "Nai-Form Negative Commands & Obligations",
    tag: "Kanji Lesson 7",
    tagColor: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 17 (L17).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 7.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 18 (L18)",
    shortCode: "L18",
    stageName: "Stage 4: Intermediate Kanji",
    title: "Dictionary Form, Capabilities & Hobbies",
    tag: "Kanji Lesson 8",
    tagColor: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 18 (L18).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 8.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 19 (L19)",
    shortCode: "L19",
    stageName: "Stage 4: Intermediate Kanji",
    title: "Ta-Form Past Experiences & Action Listing",
    tag: "Kanji Lesson 9",
    tagColor: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 19 (L19).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 9.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 20 (L20)",
    shortCode: "L20",
    stageName: "Stage 4: Intermediate Kanji",
    title: "Casual Plain Speech & Informal Conversations",
    tag: "Kanji Lesson 10",
    tagColor: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 20 (L20).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 10.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 21 (L21)",
    shortCode: "L21",
    stageName: "Stage 4: Intermediate Kanji",
    title: "Opinions, Quotations & Conjectures",
    tag: "Kanji Lesson 11",
    tagColor: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30 font-bold",
    coreActivities: [
      "Completion of Lesson 21 (L21).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Kanji Lesson 11.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 22 (L22)",
    shortCode: "L22",
    stageName: "Stage 5: Revision & Drills",
    title: "Noun Modification & Relative Clause Synthesis",
    tag: "Revision & Drills",
    tagColor: "bg-purple text-white shadow-2xs font-bold",
    coreActivities: [
      "Completion of Lesson 22 (L22).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Revision and drills.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 23 (L23)",
    shortCode: "L23",
    stageName: "Stage 5: Revision & Drills",
    title: "Temporal Clauses, Spatial Road Guidance & Logic",
    tag: "Revision & Drills",
    tagColor: "bg-purple text-white shadow-2xs font-bold",
    coreActivities: [
      "Completion of Lesson 23 (L23).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Revision and drills.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 24 (L24)",
    shortCode: "L24",
    stageName: "Stage 5: Revision & Drills",
    title: "Giving & Receiving Benefactive Verbs (Kuremasu)",
    tag: "Revision & Drills",
    tagColor: "bg-purple text-white shadow-2xs font-bold",
    coreActivities: [
      "Completion of Lesson 24 (L24).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Revision and drills.",
      "Listening practice.",
      "Reading practice."
    ]
  },
  {
    lessonNum: "Lesson 25 (L25)",
    shortCode: "L25",
    stageName: "Stage 5: Revision & Drills",
    title: "Hypothetical Conditionals & Pre-Test Master Drill",
    tag: "Revision & Drills",
    tagColor: "bg-purple text-white shadow-2xs font-bold",
    coreActivities: [
      "Completion of Lesson 25 (L25).",
      "Vocabulary introduction.",
      "Grammar.",
      "Pattern practice.",
      "Vocabulary and grammar review quiz."
    ],
    additionalPractice: [
      "Revision and drills.",
      "Listening practice.",
      "Reading practice."
    ]
  }
];

export default function JapaneseCourseView({ course, relatedCourses }: JapaneseCourseViewProps) {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({
    "L1": true,
    "L2": true
  });
  const [activeReviewIdx, setActiveReviewIdx] = useState<number>(0);

  const stages = [
    { name: "Stage 1: Hiragana Foundations", range: "Lessons 1–5", filter: (l: JapaneseLesson) => ["L1", "L2", "L3", "L4", "L5"].includes(l.shortCode) },
    { name: "Stage 2: Katakana Mastery", range: "Lessons 6–10", filter: (l: JapaneseLesson) => ["L6", "L7", "L8", "L9", "L10"].includes(l.shortCode) },
    { name: "Stage 3: Kanji Foundations", range: "Lessons 11–15", filter: (l: JapaneseLesson) => ["L11", "L12", "L13", "L14", "L15"].includes(l.shortCode) },
    { name: "Stage 4: Intermediate Kanji", range: "Lessons 16–21", filter: (l: JapaneseLesson) => ["L16", "L17", "L18", "L19", "L20", "L21"].includes(l.shortCode) },
    { name: "Stage 5: Revision & Drills", range: "Lessons 22–25", filter: (l: JapaneseLesson) => ["L22", "L23", "L24", "L25"].includes(l.shortCode) },
    { name: "All 25 Lessons", range: "Full Syllabus", filter: () => true }
  ];

  const currentLessons = japaneseLessonsData.filter(stages[activeStageIdx].filter);

  const toggleLesson = (code: string) => {
    setExpandedLessons(prev => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? course.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === course.testimonials.length - 1 ? 0 : prev + 1));
  };

  const learningPillars = [
    {
      title: "Vocabulary Development",
      icon: <Bookmark className="w-5 h-5 text-purple" />,
      desc: "Learners are introduced to vocabulary progressively throughout the lessons and reinforce their understanding through review quizzes and practice activities."
    },
    {
      title: "Grammar & Pattern Practice",
      icon: <Layers className="w-5 h-5 text-purple" />,
      desc: "Each lesson includes grammar learning and pattern practice to help learners understand and apply Japanese language structures naturally."
    },
    {
      title: "Hiragana & Katakana Practice",
      icon: <PenTool className="w-5 h-5 text-purple" />,
      desc: "The early lessons include hiragana and katakana practice, including writing lines, word practice, stroke orders, and completion activities."
    },
    {
      title: "Kanji Learning",
      icon: <Sparkles className="w-5 h-5 text-purple" />,
      desc: "The later lessons include dedicated kanji learning activities, beginning with Kanji Lesson 2 in Lesson 12 and progressing through Kanji Lesson 11 in Lesson 21."
    },
    {
      title: "Listening & Reading Practice",
      icon: <Headphones className="w-5 h-5 text-purple" />,
      desc: "Listening and reading activities are integrated throughout the syllabus to support comprehension and familiarity with authentic Japanese language use."
    },
    {
      title: "Revision and Drills",
      icon: <CheckSquare className="w-5 h-5 text-purple" />,
      desc: "Revision and drill activities are included in Lessons 22–25 to reinforce previously covered material before the comprehensive final assessment."
    },
    {
      title: "Practical Conversation",
      icon: <MessageCircle className="w-5 h-5 text-purple" />,
      desc: "The final test includes a daily-life conversation check to review practical communication skills and ensure spoken confidence."
    }
  ];

  const finalAssessmentComponents = [
    {
      title: "Vocabulary and Grammar Test",
      badge: "Core Knowledge",
      desc: "Assessment of vocabulary knowledge and understanding of the grammar covered during the lessons.",
      focus: ["Thematic vocabulary recall", "Sentence pattern formation", "Grammar rule comprehension", "Structural accuracy audit"]
    },
    {
      title: "Listening and Reading Assessment",
      badge: "Comprehension",
      desc: "Activities designed to assess listening comprehension and reading skills across varied native formats.",
      focus: ["Audio dialogue decoding", "Reading short narrative texts", "Character recognition drills", "Contextual inferences"]
    },
    {
      title: "Speaking and Pattern Practice",
      badge: "Application",
      desc: "Evaluation of spoken communication and the ability to apply learned language patterns spontaneously.",
      focus: ["Spoken sentence delivery", "Pattern substitution drills", "Pronunciation & cadence check", "Interactive response speed"]
    },
    {
      title: "Daily-Life Conversation Check",
      badge: "Practical Fluency",
      desc: "Practical conversational activities designed to review everyday Japanese communication in situational roleplays.",
      focus: ["Everyday personal greetings", "Ordering food & asking prices", "Navigating directions & transit", "Realistic workplace dialogues"]
    }
  ];

  const whyGlaPoints = [
    {
      title: "Structured Learning",
      desc: "Follow a lesson-based program that combines vocabulary, grammar, language patterns, and progressive practice."
    },
    {
      title: "Practical Communication",
      desc: "Develop everyday Japanese communication skills through listening, speaking, reading, and writing activities."
    },
    {
      title: "Cultural Understanding",
      desc: "Build familiarity with Japanese language and culture while developing communication skills."
    },
    {
      title: "Real-World Skills",
      desc: "Practise language patterns, daily-life conversations, and comprehension activities that support practical Japanese language use."
    },
    {
      title: "Focused Preparation",
      desc: "Strengthen language fundamentals through review quizzes, revision drills, and final assessment activities."
    },
    {
      title: "Expert Guidance",
      desc: "Contact the academy to learn about available batches, teaching arrangements, and the course options suited to your learning goals."
    }
  ];

  const jlptLevelsOverview = [
    { level: "JLPT N5", badge: "Beginner", desc: "Understanding basic Japanese expressions, Hiragana, Katakana, and basic daily Kanji.", book: "Minna no Nihongo I / Genki I" },
    { level: "JLPT N4", badge: "Elementary", desc: "Understanding basic conversations spoken slowly and reading passages on familiar daily topics.", book: "Minna no Nihongo II / Genki II" },
    { level: "JLPT N3", badge: "Bridge to Natural Fluency", desc: "Understanding Japanese used in everyday situations to a certain degree, including news headlines.", book: "Minna no Nihongo Chukyu / Sou Matome" },
    { level: "JLPT N2", badge: "Business & Academic", desc: "Understanding Japanese used in everyday situations and a variety of professional and media settings.", book: "Tobira: Gateway to Advanced Japanese" },
    { level: "JLPT N1", badge: "Advanced Mastery", desc: "Understanding complex Japanese in diverse circumstances, logical discourse, and high-level abstract texts.", book: "Shin Kanzen Master N1 & Dossiers" }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020c1b] transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="bg-[#00122E] dark:bg-[#010814] text-white min-h-screen sm:min-h-0 py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300 flex items-center justify-center">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-40 dark:opacity-25 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#00122E] via-[#00122E]/80 to-[#00122E]/20 dark:from-[#010814] dark:via-[#010814]/80 dark:to-[#010814]/20 z-10"></div>
          <img src="/images/bg-hero.webp" alt="Japanese Program Background" width={1280} height={720} loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/25 text-purple-hero px-3.5 py-1.5 rounded-full border border-purple-hero/35">
                  JLPT N5 to N1 Preparation
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                  Minna no Nihongo • Genki • Tobira
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                  Hiragana • Katakana • Kanji
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                <FormattedTitle title={course.title} bracketClassName="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mt-1 sm:mt-2" />
              </h1>

              <div className="p-3.5 bg-gradient-to-r from-purple/30 via-slate-800/60 to-red-950/30 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold text-slate-200">
                🎯 <strong className="text-white">Empowering Communication. Building Global Opportunities.</strong>
              </div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Learn Japanese with confidence and open doors to new opportunities through language and culture. The Global Language Academy offers a structured Japanese language learning program designed to help learners develop practical communication skills, understand Japanese culture, and build a strong foundation in the Japanese language.
              </p>

              {/* 4 Pillars Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0 pt-1">
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Structured Learning</strong>
                    <span className="text-[11px] text-slate-300">25 lesson-based progression combining grammar and patterns.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Practical Communication</strong>
                    <span className="text-[11px] text-slate-300">Everyday Japanese conversations, listening and speaking.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Cultural Understanding</strong>
                    <span className="text-[11px] text-slate-300">Build familiarity with authentic Japanese customs and etiquette.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Real-World Skills</strong>
                    <span className="text-[11px] text-slate-300">Pattern drills and final daily-life conversation evaluation.</span>
                  </div>
                </div>
              </div>

              {/* Core Details Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-b border-white/10 py-5 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Curriculum Format</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block">25 Lessons + Final Test</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Batch Size</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block">5 to 7 Students</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Online Batches</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block">7 Days, 7 AM - 11 PM</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Offline Center</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block">Dwarka Sector 13, Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-red-500/20 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)]">
                <JapaneseLeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-slate-50 dark:bg-[#020c1b] border-b border-card-border py-8 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-base sm:text-lg font-bold font-display italic text-navy">
            “千里の道も一歩から (A journey of a thousand miles begins with a single step.)”
          </blockquote>
          <p className="text-xs text-purple font-bold uppercase tracking-widest mt-2">
            Learn. Grow. Go Global. • Your Success. Our Commitment.
          </p>
        </div>
      </section>

      {/* COURSE DESCRIPTION, GOALS & REQUIRED MATERIALS */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Program Description</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Japanese Language Course Curriculum & Goals
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The Japanese Language Course at The Global Language Academy is a structured and engaging program designed for beginner to advanced learners.
              The program develops essential skills in speaking, listening, reading, and writing, including <strong>hiragana</strong>, <strong>katakana</strong>, and <strong>kanji</strong>, along with practical grammar, useful vocabulary, and everyday communication. The syllabus follows the progression of the <strong>Minna no Nihongo</strong> and <strong>Genki</strong> series while maintaining a practical, week-by-week learning structure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Course Goals */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-[#010814]/60 border border-card-border p-6 sm:p-8 rounded-3xl flex flex-col gap-6 shadow-sm">
              <div className="flex items-center gap-2 text-purple font-bold">
                <Target className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">
                  Course Goals & Core Competencies
                </h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                The program aims to help learners achieve the following key developmental objectives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Communicate confidently in everyday Japanese conversations.",
                  "Understand common Japanese expressions, idioms, and natural dialogues.",
                  "Develop accurate pronunciation, pitch-accent awareness, and sentence formation.",
                  "Read and write hiragana, katakana, and progressively more complex kanji.",
                  "Participate actively in real-life conversations, presentations, and discussions.",
                  "Build cultural awareness and prepare progressively for the Japanese-Language Proficiency Test (JLPT), from N5 to N1."
                ].map((goal, idx) => (
                  <div key={idx} className="p-3.5 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex items-start gap-2.5 shadow-xs">
                    <span className="p-1 rounded-full bg-purple/10 text-purple shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-semibold text-navy leading-relaxed">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Required Learning Materials */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#010814]/60 border border-card-border p-6 sm:p-8 rounded-3xl flex flex-col gap-6 shadow-sm">
              <div className="flex items-center gap-2 text-purple font-bold">
                <BookOpen className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">
                  Required Learning Materials
                </h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                The course uses internationally recognised learning resources providing a strong foundation for Japanese fluency:
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  { title: "Minna no Nihongo / Genki Series", level: "N5–N3", desc: "Core textbooks for vocabulary, sentence patterns & dialogic grammar" },
                  { title: "Tobira: Gateway to Advanced Japanese", level: "N2", desc: "Upper-intermediate authentic readings, culture & discourse synthesis" },
                  { title: "Workbook & Writing Sheets", level: "All Levels", desc: "Dedicated stroke orders, script sheets & applied grammatical exercises" },
                  { title: "Audio & Video Media Suite", level: "Interactive", desc: "Authentic native listening tracks, accent drills & roleplay media" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex items-center justify-between shadow-xs">
                    <div>
                      <h4 className="text-xs font-extrabold text-navy font-display">{item.title}</h4>
                      <span className="text-[10px] text-navy-muted font-medium">{item.desc}</span>
                    </div>
                    <span className="px-2.5 py-1 bg-purple/10 text-purple border border-purple/20 rounded-md text-[9px] font-extrabold uppercase tracking-widest shrink-0">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-card-border pt-4 flex flex-col gap-2.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy">Included in the Program:</span>
                <ul className="grid grid-cols-2 gap-2 text-xs text-navy font-semibold">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> Supplementary practice sets</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> Review quizzes & drills</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> Kanji flashcard materials</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> Final assessment papers</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SYLLABUS: LESSONS 1 TO 25 */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Comprehensive Syllabus</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Japanese Language Syllabus — Beginners & Intermediate
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The Japanese Language Syllabus is organised into <strong>25 lessons followed by a final assessment</strong>. Each lesson includes progressive language learning activities, vocabulary introduction, grammar, pattern practice, review quizzes, and additional reading, listening, or kanji practice.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* Stage Selector Tabs */}
            <div className="flex flex-col gap-3 max-w-4xl mx-auto w-full">
              <div className="flex flex-wrap items-center justify-between bg-white dark:bg-[#010814] p-1.5 rounded-2xl border border-card-border shadow-sm gap-1">
                {stages.map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStageIdx(idx)}
                    type="button"
                    className={`flex-1 min-w-[120px] py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                      activeStageIdx === idx
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-navy-muted hover:text-navy hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{stage.range}</span>
                  </button>
                ))}
              </div>
              
              <div className="text-center">
                <span className="text-[10px] sm:text-xs font-bold text-navy-muted bg-white dark:bg-[#010814] px-4 py-1.5 rounded-full border border-card-border inline-flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse"></span>
                  Viewing: <strong className="text-navy">{stages[activeStageIdx].name}</strong> ({stages[activeStageIdx].range})
                </span>
              </div>
            </div>

            {/* Lesson Cards Accordion List */}
            <div className="flex flex-col gap-3.5">
              {currentLessons.map((lesson) => {
                const isExpanded = !!expandedLessons[lesson.shortCode];
                return (
                  <div
                    key={lesson.shortCode}
                    className="border border-card-border rounded-2xl overflow-hidden bg-white dark:bg-[#00122E] shadow-sm transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleLesson(lesson.shortCode)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#010814]/60 hover:bg-slate-100 dark:hover:bg-[#010814] transition-colors cursor-pointer"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 bg-purple text-white rounded-lg text-xs font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                          {lesson.shortCode}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-navy font-display">
                          {lesson.lessonNum} — {lesson.title}
                        </h4>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${lesson.tagColor}`}>
                          {lesson.tag}
                        </span>
                      </div>
                      <div className="p-1 rounded-full bg-white dark:bg-[#00122E] border border-card-border text-navy-muted shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-[#00122E] border-t border-card-border animate-fade-in">
                        
                        {/* Core Learning Activities */}
                        <div className="flex flex-col gap-3">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            Core Learning Activities
                          </span>
                          <div className="flex flex-col gap-2">
                            {lesson.coreActivities.map((act, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs font-medium text-navy bg-slate-50/80 dark:bg-[#010814]/40 p-2.5 rounded-xl border border-card-border/60"
                              >
                                <Check className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                                <span>{act}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Additional Practice */}
                        <div className="flex flex-col gap-3">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            Additional Practice & Skill Building
                          </span>
                          <div className="flex flex-col gap-2">
                            {lesson.additionalPractice.map((prac, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20"
                              >
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                                <span>{prac}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-2 p-3 bg-purple/5 border border-purple/15 rounded-xl text-[11px] text-navy-muted">
                            <span className="font-bold text-purple">Standard Lesson Milestone:</span> Each lesson integrates structural pattern practice and review quizzes to guarantee retention before proceeding to subsequent modules.
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* FINAL TEST AND ASSESSMENT */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Assessment & Final Evaluation</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Final Test and Assessment Framework
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The program concludes with a comprehensive final test designed to review the learning activities covered throughout the 25 lessons.
              The final assessment includes a <strong>daily-life conversation component</strong> to provide an opportunity for learners to demonstrate practical communication skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finalAssessmentComponents.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 dark:bg-[#010814]/60 rounded-3xl border border-card-border shadow-sm flex flex-col justify-between gap-5 hover-lift transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple/10 px-2.5 py-0.5 rounded-full border border-purple/20">
                      {comp.badge}
                    </span>
                    <Award className="w-5 h-5 text-purple" />
                  </div>
                  <h3 className="text-base font-bold text-navy font-display mb-2">{comp.title}</h3>
                  <p className="text-xs text-navy-muted leading-relaxed mb-4">{comp.desc}</p>
                  
                  <ul className="flex flex-col gap-2">
                    {comp.focus.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-navy font-semibold">
                        <Check className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-card-border text-[10px] font-bold text-navy-muted uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple" />
                  <span>Objective Competency Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Practical Conversation Highlight Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple/10 via-slate-100 dark:via-[#010814] to-red-500/10 border border-purple/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple text-white rounded-2xl shadow-md shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-navy font-display">
                  Daily-Life Conversation Check Included
                </h4>
                <p className="text-xs text-navy-muted mt-0.5">
                  The final test features a real-world daily-life conversational evaluation to test your natural response speed, greetings, shopping, and everyday interaction.
                </p>
              </div>
            </div>
            <span className="px-4 py-2 bg-purple text-white rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 shadow-xs">
              Conversational Readiness Verified
            </span>
          </div>

        </div>
      </section>

      {/* LEARNING APPROACH (7 CORE PILLARS) */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Pedagogical Approach</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Structured Learning Methodology
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The Japanese language program follows a structured learning approach that combines language fundamentals with practical exercises across 7 pedagogical pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm flex flex-col gap-3.5 hover-lift transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-purple/10 text-purple border border-purple/20">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold text-navy font-display">{pillar.title}</h3>
                </div>
                <p className="text-xs text-navy-muted leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* JLPT PREPARATION & ROADMAP */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">JLPT Examination Framework</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Japanese Language Learning & JLPT Preparation
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The course goals include progressive preparation for the <strong>Japanese-Language Proficiency Test (JLPT)</strong>, covering the levels from N5 through N1.
              The brochure specifies the <strong>Minna no Nihongo / Genki series (N5–N3)</strong> and <strong>Tobira (N2)</strong>, providing structured practice through vocabulary, grammar, reading, listening, and conversation activities.
            </p>
          </div>

          {/* JLPT Levels Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {jlptLevelsOverview.map((lvl, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border flex flex-col justify-between gap-3 hover-lift shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-base font-black font-display text-navy">{lvl.level}</span>
                    <Award className="w-4 h-4 text-purple" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple/10 px-2 py-0.5 rounded-full border border-purple/20 block w-fit mb-2">
                    {lvl.badge}
                  </span>
                  <p className="text-[11px] text-navy-muted leading-relaxed font-sans">{lvl.desc}</p>
                </div>
                <div className="pt-2 border-t border-card-border text-[10px] font-bold text-slate-500">
                  📖 {lvl.book}
                </div>
              </div>
            ))}
          </div>

          {/* Important Clarification Callout */}
          <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Important Syllabus & JLPT Level Clarification
              </h4>
              <p className="text-xs text-navy-muted leading-relaxed">
                The brochure does not provide a separate week-by-week JLPT syllabus for N5, N4, N3, N2, and N1. It also does not assign each of the 25 lessons to a specific JLPT level. Therefore, individual lesson-to-level mappings and examination durations should be confirmed directly with The Global Language Academy before being published as specific course guarantees.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY LEARN JAPANESE AT THE GLOBAL LANGUAGE ACADEMY */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Why Learn Japanese at TGLA</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Why Choose The Global Language Academy?
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Discover how our structured lesson approach, native listening immersion, and focused exam preparation pave the way for real-world fluency and international opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGlaPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#00122E] border border-card-border shadow-sm flex flex-col gap-3 hover-lift transition-all"
              >
                <div className="flex items-center gap-2 text-purple font-bold">
                  <CheckCircle2 className="w-5 h-5 text-purple" />
                  <h3 className="text-base font-bold text-navy font-display">{point.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-navy-muted leading-relaxed font-sans">{point.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS CAROUSEL */}
      {course.testimonials && course.testimonials.length > 0 && (
        <section className="bg-white dark:bg-[#00122E] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Verified Student Outcomes</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
                JLPT Results & Student Reviews
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
        </section>
      )}

      {/* ENROLMENT AND CONTACT INFORMATION */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-tr from-[#00122E] via-[#092b5a] to-[#00122E] text-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-purple/40 text-purple-200 px-3.5 py-1 rounded-full border border-purple-300/30 w-fit">
                  Enrolment & Admissions
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white leading-tight">
                  Ready to Begin Your Japanese Journey? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-200 to-red-400">
                    YOUR SUCCESS. OUR COMMITMENT.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Enrol at The Global Language Academy and take the first step towards new opportunities through Japanese language learning. Develop your Japanese language skills through structured lessons, practical exercises, cultural understanding, and progressive language practice.
                </p>

                {/* 4 Commitments */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs font-bold text-slate-200">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Focused Preparation
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Expert Guidance
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Proven Strategies
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    ✓ Excellent Results
                  </div>
                </div>

                {/* Physical Address */}
                <div className="pt-2 flex items-start gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-hero shrink-0 mt-0.5" />
                  <span>
                    <strong>The Global Language Academy Campus:</strong> 3rd Floor, Plot No. 94, PKT-10, Dwarka Sector 13, Opposite Metro Station, Near Radisson Blu Hotel, Delhi – 110078, India.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/919217999511?text=Hi%20TGLA,%20I%20am%20interested%20in%20the%20Japanese%20Language%20Course.%20Please%20share%20batch%20timings%20and%20fee%20structure."
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

      {/* WEBSITE CONTENT AND PROGRAM DISCLAIMER */}
      <section className="bg-white dark:bg-[#00122E] py-8 border-b border-card-border transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] text-navy-muted leading-relaxed font-sans">
            <strong>Website Content and Program Disclaimer:</strong> The Japanese Language Course information presented here is based on the course material supplied by The Global Language Academy. The supplied brochure describes a 25-lesson Japanese language syllabus followed by a final test. It references JLPT preparation from N5 to N1 but does not specify the exact duration of the program, the JLPT level corresponding to each lesson, or a separate examination-preparation schedule for each level. Course availability, fees, batch timings, instructional arrangements, and JLPT preparation details should be confirmed directly with The Global Language Academy before enrolment. The course is a language-learning program. Completion of the course should not be presented as an official JLPT qualification or as a guarantee of passing a JLPT examination.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Questions Answered</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Frequently Asked Questions About Japanese
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={course.faqs || []} />
          </div>
        </div>
      </section>

      {/* RELATED COURSES */}
      <section className="bg-white dark:bg-[#00122E] text-navy py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More Programs</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Other Language Courses at TGLA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="hover-lift bg-slate-50 dark:bg-[#010814] p-6 rounded-xl border border-card-border shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-navy mb-1">
                    <FormattedTitle title={rel.title} bracketClassName="text-sm font-semibold text-purple mt-0.5" />
                  </h3>
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
