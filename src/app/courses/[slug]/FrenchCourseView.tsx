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
  Lightbulb
} from 'lucide-react';
import { Course } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface FrenchCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

interface SyllabusWeek {
  weekNum: string;
  title: string;
  vokabel: string[];
  grammatik: string[];
}

interface SyllabusLevel {
  code: string;
  name: string;
  duration: string;
  books: string[];
  slogan: string;
  weeks: SyllabusWeek[];
}

const frenchSyllabus: SyllabusLevel[] = [
  {
    code: "A1",
    name: "French Foundation / Découverte",
    duration: "2 Months",
    books: ["Alter Ego+ A1 / Saison 1"],
    slogan: "Small Steps Today, Global French Opportunities Tomorrow.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Introduction aux Sons Français & Salutations",
        vokabel: ["Salutations & Formules de Politesse", "L'Alphabet & Prononciation", "Les Nombres 0-100"],
        grammatik: ["Les pronoms sujets (je, tu, il/elle...)", "Le verbe Être et Avoir", "Les articles définis et indéfinis"]
      },
      {
        weekNum: "Week 2",
        title: "Nationalités, Professions & Présentation",
        vokabel: ["Les pays et nationalités", "Les métiers et professions", "Les langues parlées"],
        grammatik: ["Le féminin et masculin des noms/adjectifs", "Les verbes du 1er groupe (-er)", "Les prépositions de lieu (en, au, aux, à)"]
      },
      {
        weekNum: "Week 3",
        title: "La Famille, Les Loisirs & Les Préférences",
        vokabel: ["Les membres de la famille", "Les loisirs, sports et sorties", "Exprimer ses goûts (aimer, détester)"],
        grammatik: ["Les adjectifs possessifs (mon, ma, mes)", "La négation simple (ne... pas)", "Le verbe Faire et ses prépositions"]
      },
      {
        weekNum: "Week 4",
        title: "La Vie Quotidienne & L'Heure",
        vokabel: ["Les moments de la journée", "Dire l'heure et planifier un rendez-vous", "Les jours de la semaine"],
        grammatik: ["Les verbes pronominaux (se lever, se coucher)", "L'interrogation (Qui, Que, Où, Quand, Comment)"]
      },
      {
        weekNum: "Week 5",
        title: "Faire les Courses, La Nourriture & Les Commandes",
        vokabel: ["La nourriture, fruits et légumes", "Au restaurant & commander un repas", "Les quantités et prix"],
        grammatik: ["Les articles partitifs (du, de la, des)", "L'expression du besoin (avoir besoin de, vouloir)", "Les pronoms COD simples"]
      },
      {
        weekNum: "Week 6",
        title: "La Ville, L'Orientation & Les Transports",
        vokabel: ["Les lieux de la ville", "Demander et indiquer son chemin", "Les moyens de transport"],
        grammatik: ["L'impératif pour donner des instructions", "Les prépositions de position (devant, derrière, à côté de)", "Le verbe Aller + prépositions"]
      },
      {
        weekNum: "Week 7",
        title: "Raconter des Événements au Passé",
        vokabel: ["Les vacances et voyages", "Raconter son week-end", "Les marqueurs de temps (hier, la semaine dernière)"],
        grammatik: ["Le Passé Composé avec Avoir et Être", "L'accord du participe passé avec être", "Les participes passés irréguliers"]
      },
      {
        weekNum: "Week 8",
        title: "Le Logement, La Météo & Préparation DELF A1",
        vokabel: ["Les pièces de la maison et meubles", "La météo et les saisons", "Bilan DELF A1 blanc"],
        grammatik: ["Les adjectifs démonstratifs (ce, cette, ces)", "Le futur proche (aller + infinitif)", "Simulations orales et écrites DELF A1"]
      }
    ]
  },
  {
    code: "A2",
    name: "French Elementary / Survie",
    duration: "2 Months",
    books: ["Alter Ego+ A2 / Édito A2"],
    slogan: "Express Yourself Fluently in Real Life Situations.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Souvenirs d'Enfance & L'Imparfait",
        vokabel: ["Les souvenirs, l'école, les anecdotes", "Les sentiments et émotions"],
        grammatik: ["L'Imparfait (formation et emploi)", "Différence entre Passé Composé et Imparfait", "Les marqueurs temporels du passé"]
      },
      {
        weekNum: "Week 2",
        title: "Le Travail, Les Études & Le CV Français",
        vokabel: ["Rédiger un CV et lettre de motivation", "Parler de ses compétences professionnelles"],
        grammatik: ["Les pronoms relatifs simples (qui, que, où)", "L'expression de la cause (parce que, grâce à, à cause de)"]
      },
      {
        weekNum: "Week 3",
        title: "La Santé, Le Corps Humain & Chez le Médecin",
        vokabel: ["Les parties du corps, les symptômes", "Chez le médecin et à la pharmacie"],
        grammatik: ["L'obligation (devoir, falloir)", "L'impératif avec pronoms", "Les pronoms COI (lui, leur)"]
      },
      {
        weekNum: "Week 4",
        title: "Faire des Projets & Exprimer le Futur",
        vokabel: ["Les projets d'avenir, voyages écologiques", "L'environnement et la nature"],
        grammatik: ["Le Futur Simple (terminaisons et radicaux irréguliers)", "L'hypothèse au présent (Si + présent, futur)"]
      },
      {
        weekNum: "Week 5",
        title: "Donner son Opinion & Faire des Comparaisons",
        vokabel: ["Débats sur la technologie, les réseaux sociaux", "Donner son avis (je pense que, à mon avis)"],
        grammatik: ["Le comparatif et superlatif (plus que, moins que, aussi que, meilleur/mieux)", "Les pronoms 'en' et 'y' (introduction)"]
      },
      {
        weekNum: "Week 6",
        title: "La Vie Culturelle, Les Arts & Spectacles",
        vokabel: ["Le cinéma, le théâtre, les concerts", "Exprimer son appréciation artistique"],
        grammatik: ["La négation complexe (ne... jamais, ne... rien, ne... plus, ne... personne)"]
      },
      {
        weekNum: "Week 7",
        title: "Politesse, Conseils & Le Conditionnel",
        vokabel: ["Demander poliment, donner des conseils", "Les situations de service client"],
        grammatik: ["Le Conditionnel Présent de politesse (je voudrais, pourriez-vous)", "L'expression du souhait et conseil"]
      },
      {
        weekNum: "Week 8",
        title: "Épreuves Blanches DELF A2 & TEF Canada",
        vokabel: ["Synthèse des 4 compétences DELF A2", "Grilles d'évaluation officielles"],
        grammatik: ["Révision globale, pièges fréquents", "Examens blancs complets chrono"]
      }
    ]
  },
  {
    code: "B1",
    name: "French Intermediate / Seuil (Canada PR CLB 7 Target)",
    duration: "3 Months",
    books: ["Alter Ego+ B1 / Édito B1"],
    slogan: "Master Autonomy & Boost Your Canada Express Entry Score.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Argumentation, Société & Débats d'Actualité",
        vokabel: ["Les faits de société, l'engagement associatif", "Défendre un point de vue et argumenter"],
        grammatik: ["Le Subjonctif Présent (volonté, sentiment, obligation)", "Individuation indicatif vs subjonctif"]
      },
      {
        weekNum: "Week 2",
        title: "Monde du Travail & Entretiens d'Embauche",
        vokabel: ["Le monde professionnel, la négociation salariale", "Les réunions d'affaires et présentations"],
        grammatik: ["La forme passive et impersonnelle", "Le discours indirect au présent et passé"]
      },
      {
        weekNum: "Week 3",
        title: "Relations Humaines & Sentiments Nuancés",
        vokabel: ["Les relations amicales et professionnelles", "Les conflits et résolution"],
        grammatik: ["Les pronoms relatifs composés (lequel, auquel, duquel)", "Les doubles pronoms compléments"]
      },
      {
        weekNum: "Week 4",
        title: "Écologie, Consommation Responsable & TEF Section A/B",
        vokabel: ["Le développement durable, l'économie circulaire", "TEF Canada Section A (Renseignements)"],
        grammatik: ["L'expression de l'opposition et de la concession (bien que + subj, alors que, cependant)"]
      }
    ]
  }
];

export default function FrenchCourseView({ course, relatedCourses }: FrenchCourseViewProps) {
  const [selectedLevelCode, setSelectedLevelCode] = useState<string>("A1");
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? course.testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === course.testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeLevel = frenchSyllabus.find((lvl) => lvl.code === selectedLevelCode) || frenchSyllabus[0];

  const focusAreas = [
    {
      badge: "Parler",
      title: "Spoken Fluency & Oral Expression",
      desc: "Develop effortless pronunciation, accent clarity, and natural spoken French for everyday life, university debates, and professional interviews."
    },
    {
      badge: "Écouter",
      title: "Native Listening Comprehension",
      desc: "Train your ear with authentic radio broadcasts, interviews, and native French dialogues across French, Canadian (Québécois), and African accents."
    },
    {
      badge: "Lire",
      title: "Reading & Text Synthesis",
      desc: "Skim and scan articles from Le Monde, Le Figaro, and French academic journals to extract key arguments efficiently."
    },
    {
      badge: "Écrire",
      title: "Academic & Professional Writing",
      desc: "Master formal letter writing, structured essays, argumentative essays, and professional workplace emails."
    },
    {
      badge: "TEF / CLB 7+",
      title: "Canada PR Express Entry Booster",
      desc: "Dedicated preparation for TEF Canada and TCF Canada to unlock up to 50 additional CRS points for Canadian Permanent Residency."
    },
    {
      badge: "DELF Exam",
      title: "100% Exam-Aligned Mock Drills",
      desc: "Simulated exam conditions with official CIEP / France Éducation International scoring rubrics and personalized correction."
    }
  ];

  const whyGlaFrenchPillars = [
    {
      number: "01",
      title: "Certified Alliance Française Pedagogy",
      desc: "Our curriculum strictly aligns with the official Common European Framework (CEFR) and Alliance Française standards."
    },
    {
      number: "02",
      title: "Canada PR Express Entry Specialization",
      desc: "Proven track record of guiding candidates to achieve NCLC 7 (B2 level) to claim 50 bonus points in Express Entry."
    },
    {
      number: "03",
      title: "Small Focused Batches (Max 5–7)",
      desc: "Every student gets daily 1-on-1 speaking time with continuous error correction and accent training."
    },
    {
      number: "04",
      title: "Unlimited DELF & TEF Mock Tests",
      desc: "Practice with past papers, timed listening tracks, and evaluated writing submissions at no extra fee."
    },
    {
      number: "05",
      title: "Free Premium Study Resources",
      desc: "Complete access to Alter Ego+, Saison, Édito textbooks, audio libraries, and grammar workbooks."
    },
    {
      number: "06",
      title: "Flexible Hybrid Schedules",
      desc: "Choose between classroom batches at our modern center or synchronous live interactive online sessions."
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020a16]">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-white py-14 sm:py-20 lg:py-24 border-b border-card-border overflow-hidden bg-[#00122E] dark:bg-[#010814]">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest bg-purple/35 text-purple-200 px-3.5 py-1.5 rounded-full border border-purple-300/30 shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-purple-hero" />
                  DELF • DALF • TEF • TCF Preparation
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full border border-blue-400/30">
                  Canada PR CRS Booster (CLB 7+)
                </span>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-400 block mb-1.5">
                  The Global Language Academy
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display leading-[1.12] text-white tracking-tight">
                  French Language <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-300 to-blue-400">
                    Mastery Program (A1 - C2)
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Master French with certified native and Alliance Française trained instructors. Progressively advance from beginner (A1) to professional fluency (C2) with specialized preparation for DELF, DALF, and TEF Canada.
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
                    <span className="text-xs font-extrabold text-white">3 - 12 Months</span>
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
                    <span className="text-xs font-extrabold text-white">DELF A1–B2 / TEF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-purple/40 via-blue-500/20 to-purple/20 border border-white/15 shadow-2xl backdrop-blur-xl">
                <div className="bg-[#00122E]/95 p-5 sm:p-6 rounded-[22px] border border-white/10">
                  <div className="mb-4 text-center">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-purple/35 text-purple-200 px-3 py-1 rounded-full border border-purple-300/20 mb-2">
                      Free French Trial Class
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-display">Book 1-on-1 Consultation</h2>
                    <p className="text-xs text-slate-300 mt-1">Assess your baseline level and get a customized DELF/TEF roadmap.</p>
                  </div>
                  <LeadForm defaultCourse="french-language" />
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
            &ldquo;La langue française est une porte ouverte sur le monde, la culture et l&apos;avenir.&rdquo;
          </blockquote>
          <p className="text-xs text-purple font-bold uppercase tracking-widest mt-1.5">Learn French. Unlock Global Horizons.</p>
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
              We integrate all four language pillars with specialized exam mastery for DELF diplomas and Canada Express Entry points.
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
              Level-by-Level French Syllabus
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              Explore our structured week-by-week curriculum tailored to official DELF and TEF benchmarks.
            </p>
          </div>

          {/* Level Switcher Buttons */}
          <div className="flex justify-center mb-10">
            <div className="bg-white dark:bg-[#0b1a2e] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm inline-flex gap-1.5">
              {frenchSyllabus.map((lvl) => (
                <button
                  key={lvl.code}
                  onClick={() => setSelectedLevelCode(lvl.code)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedLevelCode === lvl.code
                      ? 'bg-purple text-white shadow-md'
                      : 'text-navy-muted hover:text-navy'
                  }`}
                >
                  Level {lvl.code}
                </button>
              ))}
            </div>
          </div>

          {/* Active Level Card */}
          <div className="bg-white dark:bg-[#0b1a2e] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple block mb-1">CEFR Level {activeLevel.code}</span>
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
                      <span className="text-[10px] font-bold uppercase text-navy-muted block">Vocabulaire:</span>
                      <p className="text-navy font-medium">{week.vokabel.join(" • ")}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-muted block">Grammaire:</span>
                      <p className="text-navy font-medium">{week.grammatik.join(" • ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE GLA FRENCH */}
      <section className="bg-white dark:bg-[#020a16] py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">6 Pillars of Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-navy tracking-tight">
              Why Learn French with GLA?
            </h2>
            <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
              From absolute beginners to candidates aiming for high DELF B2 and TEF scores, we provide personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGlaFrenchPillars.map((pillar, idx) => (
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
                <span className="text-xs font-bold uppercase tracking-widest text-purple">Student Scorecards</span>
                <h2 className="text-3xl font-black font-display text-navy tracking-tight">
                  Verified Student Results
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

          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Questions Answered</span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-navy tracking-tight mt-1">
                Frequently Asked Questions About French Classes
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
                  Ready to Start Your French Journey? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-200 to-blue-400">
                    WE GUIDE. YOU GROW. YOU SUCCEED.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Join our upcoming batch and get full access to certified French instructors, Alter Ego+ textbooks, and mock DELF/TEF exams.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/917988358249?text=Hi%20GLA,%20I%20am%20interested%20in%20the%20French%20Language%20Course."
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
