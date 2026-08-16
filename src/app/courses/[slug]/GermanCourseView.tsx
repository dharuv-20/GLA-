"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, BookOpen, Award, CheckCircle, Clock, BookOpenCheck, MapPin, Calendar, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Course, FacultyMember, Testimonial, FAQItem, StudentResult } from '@/types';
import FacultyCard from '@/components/FacultyCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface GermanCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

// 1. Structure the massive, detailed weekly curriculum database directly inside the component
interface SyllabusWeek {
  weekNum: string;
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

const germanSyllabus: SyllabusLevel[] = [
  {
    code: "A1",
    name: "German Foundation Level",
    duration: "2 Months",
    books: ["Netzwerk neu A1"],
    slogan: "Small Steps Today, Big Opportunities Tomorrow. Learn German, Build Tomorrow, Succeed Globally.",
    weeks: [
      {
        weekNum: "Week 1",
        vokabel: ["Greetings", "Alphabets", "Numbers"],
        grammatik: ["Leprosy (retained from source content)", "Verbs", "Personal pronouns"]
      },
      {
        weekNum: "Week 2",
        vokabel: ["Introduction", "Talk about hobbies", "Make an appointment"],
        grammatik: ["W-question", "Articles", "Irregular verbs"]
      },
      {
        weekNum: "Week 3",
        vokabel: ["Talk about work"],
        grammatik: ["Imperative mit Sie"]
      },
      {
        weekNum: "Additional Topics",
        vokabel: ["Question about places / Describe the route", "Listening Practice"],
        grammatik: ["Negation Artikel"]
      },
      {
        weekNum: "Week 4",
        vokabel: ["Conversation while shopping", "Talking about food", "Making an appointment", "Listening comprehension"],
        grammatik: ["Irregular verbs with modal verbs", "Verbs with accusative cases", "Time expressions", "Possessive articles", "Modal verbs"]
      },
      {
        weekNum: "Week 5",
        vokabel: ["Write an email", "Listening practice"],
        grammatik: ["Separable verbs", "Preterite tense", "Personal pronouns in the accusative case", "Prepositions in the accusative case"]
      },
      {
        weekNum: "Week 6",
        vokabel: ["Making small talk", "Listening exercises"],
        grammatik: ["Joining sentences", "Personal pronouns of the dative case", "Prepositions of the dative case", "Imperative with du, ihr, Sie", "Other modal verbs"]
      },
      {
        weekNum: "Week 7",
        vokabel: ["Doctor's appointment", "Describing an apartment"],
        grammatik: ["Wechsel prepositions", "Perfect tense"]
      },
      {
        weekNum: "Week 8",
        vokabel: ["Conversation about buying clothes"],
        grammatik: ["Interactive article", "Demonstrative article", "Pronoun \"man\""]
      }
    ]
  },
  {
    code: "A2",
    name: "Elementary / Developing Level",
    duration: "2 Months",
    books: ["Netzwerk neu A2"],
    slogan: "CONTINUOUS LEARNING. LIMITLESS OPPORTUNITIES.",
    weeks: [
      {
        weekNum: "Week 1",
        vokabel: ["Introduction", "School days Speaking"],
        grammatik: ["Genitive", "Subordinate clause – because/there", "Modal verbs in the past tense", "Dative case"]
      },
      {
        weekNum: "Week 2",
        vokabel: ["Speaking in film", "Speaking about feelings"],
        grammatik: ["Comparative and superlative", "Als and Wie", "Subordinate clauses – dass and wenn", "Reflexive verbs"]
      },
      {
        weekNum: "Week 3",
        vokabel: ["Describe the city", "Listening tasks"],
        grammatik: ["Definite adjective endings", "Indefinite adjective endings", "Subjunctive II (Konjunktiv II)", "Becoming / will be (V1 V2 V3)"]
      },
      {
        weekNum: "Week 4",
        vokabel: ["Express your opinion", "Give a presentation", "Listening comprehension"],
        grammatik: ["Indirekt Frage", "Ortangaben", "was für ein/e"]
      },
      {
        weekNum: "Week 5",
        vokabel: ["Reading comprehension", "Make an appointment", "Respond", "Write an email"],
        grammatik: ["Sätze verbinden: Trotzdem & Deshalb", "Verben mit dativ & Akkusativ", "Nebensatz – Als & Wenn"]
      },
      {
        weekNum: "Week 6",
        vokabel: ["Giving advice", "Planning something together", "Listening practice"],
        grammatik: ["Konjunktiv 2", "Verben mit fixed Präpositionen", "W – frage mit Präposition"]
      },
      {
        weekNum: "Week 7",
        vokabel: ["Picture | Speak | Describe", "Listening exercises"],
        grammatik: ["Indefinite pronouns", "Relative clauses & pronouns"]
      },
      {
        weekNum: "Week 8",
        vokabel: ["Goethe/telc/ÖSD A2 Exam training mock drills"],
        grammatik: ["Consolidation of level concepts"]
      }
    ]
  },
  {
    code: "B1",
    name: "Intermediate Level",
    duration: "3 Months",
    books: ["Netzwerk neu B1"],
    slogan: "Better Language. Bigger Opportunities.",
    weeks: [
      {
        weekNum: "Week 1",
        vokabel: ["Likes & Dislikes", "Conversation: Travel Planning"],
        grammatik: ["Infinitive with \"zu\"", "Subordinate clause – because/since and although"]
      },
      {
        weekNum: "Week 2",
        vokabel: ["Opinion on advertising", "Registering complaints", "Writing tasks", "Listening practice"],
        grammatik: ["Let", "Therefore / For ... that reason / Therefore / For this reason connectors", "so that & so", "Genitive prepositions"]
      },
      {
        weekNum: "Week 3",
        vokabel: ["Compare objects/data", "Describe a cultural event", "Ask for detailed information", "Listening practice"],
        grammatik: ["Past tense: Forms", "Time expressions: Dative & Genitive", "Irreal sentences with subjunctive II", "Pronominal verbs"]
      },
      {
        weekNum: "Week 4",
        vokabel: ["Express your own opinion", "Agree & disagree in debates", "Present an environmental campaign", "Listening practice"],
        grammatik: ["Comparative and superlative of nouns", "Subordinate clause: so that and in order to..."]
      },
      {
        weekNum: "Week 5",
        vokabel: ["Express assumptions", "Describe changes", "Express wishes"],
        grammatik: ["Future 1 (Futur I)", "n-Declension – Masculine nouns", "Relative clauses"]
      },
      {
        weekNum: "Week 6",
        vokabel: ["Highlight key information", "Conduct conflict discussions"],
        grammatik: ["Past perfect (Plusquamperfekt)", "Subordinate clause: Temporal clause"]
      },
      {
        weekNum: "Week 7",
        vokabel: ["Offer, accept, and decline help", "Listening exercises", "Ask targeted questions", "Express your opinion on abstract topics"],
        grammatik: ["Not/no or only + need + to + infinitive (brauchen... zu)", "Reflexive pronouns in the accusative and dative tenses", "Two-part connectors", "Position of \"nicht\" in a sentence", "Adjective without an article"]
      },
      {
        weekNum: "Week 8",
        vokabel: ["Giving a Presentation: Structuring Introduction, Main Body, and Conclusion"],
        grammatik: ["Passive (Vorgangspassiv)", "Formation of the passive voice", "Passive with modal verbs"]
      },
      {
        weekNum: "Week 9",
        vokabel: ["Facilitate a debate/discussion", "Write formal letters and emails", "Listening exercises"],
        grammatik: ["Articles as pronouns", "Some/an/which", "Relative clauses with was & wo"]
      },
      {
        weekNum: "Week 10",
        vokabel: ["Conduct a formal bank meeting", "State a logical argument", "Have a professional discussion", "Listening practice"],
        grammatik: ["Sentences with je..., desto/umso", "Practical or adjective declensions"]
      },
      {
        weekNum: "Week 11",
        vokabel: ["Model test drills & Goethe/telc B1 Exam training"],
        grammatik: ["Review of dative/accusative verb prepositions"]
      },
      {
        weekNum: "Week 12",
        vokabel: ["Model test drills & Goethe/telc B1 Exam training"],
        grammatik: ["Syllabus consolidation & final evaluation"]
      }
    ]
  },
  {
    code: "B1 Plus",
    name: "Advanced Intermediate Development",
    duration: "2 Months",
    books: ["Aspekte neu B1 plus"],
    slogan: "Refine Vocabulary, Master Structures, Speak Interactively.",
    weeks: [
      {
        weekNum: "Week 1",
        vokabel: ["Complete complex listening tasks", "Describe structured graphics", "Ask open W-questions"],
        grammatik: ["Verbs and Complements", "Separable & Inseparable Verbs", "Declension of n-Nouns"]
      },
      {
        weekNum: "Week 2",
        vokabel: ["Learning and debating with posters", "Formulating hypotheses"],
        grammatik: ["Plural formation of nouns", "Adjective declension", "Comparative and superlative forms", "Connectors: causal, consecutive, consecutive clauses"]
      },
      {
        weekNum: "Week 3",
        vokabel: ["Write a statement/commentary", "Take structured notes while listening"],
        grammatik: ["Infinitives with and without \"zu\"", "Modal verbs: tense & meaning", "Making assumptions and demands — future tense", "Verbs with prepositional phrases, adverbials/interrogative words"]
      },
      {
        weekNum: "Week 4",
        vokabel: ["Proofreading academic texts", "Working with paraphrases"],
        grammatik: ["Reflexive verbs", "Relative clauses", "Final clauses", "Subjunctive II (Konjunktiv II)"]
      },
      {
        weekNum: "Week 5",
        vokabel: ["Preparing for a formal phone call", "Preparing for a structured presentation"],
        grammatik: ["Connectors: Temporal clauses", "Temporal prepositions", "Passive voice", "Local prepositions"]
      },
      {
        weekNum: "Week 6",
        vokabel: ["B1+ Model tests & exam training drills"],
        grammatik: ["Grammatical synthesis & corrections"]
      },
      {
        weekNum: "Week 7",
        vokabel: ["B1+ Model tests & exam training drills"],
        grammatik: ["Listening and speaking evaluations"]
      },
      {
        weekNum: "Week 8",
        vokabel: ["B1+ Model tests & exam training drills"],
        grammatik: ["Final evaluation & transition to B2"]
      }
    ]
  },
  {
    code: "B2",
    name: "Upper-Intermediate Level",
    duration: "2 Months",
    books: ["Aspekte neu B2"],
    slogan: "Learn. Practice. Succeed. Your German Journey Continues.",
    weeks: [
      {
        weekNum: "Week 1",
        vokabel: ["Note down details from lectures", "Compile logical arguments from a text"],
        grammatik: ["Word order in the sentence", "Negation rules", "Compare sentences mit als, wie und je... desto/umso", "The word \"es\" usage"]
      },
      {
        weekNum: "Week 2",
        vokabel: ["Writing a professional CV (Lebenslauf)", "Assigning matching headings to paragraphs"],
        grammatik: ["Pre-past connectors (Nachdem, etc.)", "Connector um zu, ohne zu, (an)statt zu + infinitive", "Alternatives of structures", "Relative sentence mit \"wer\"", "Nomen - verb - Verbindungen"]
      },
      {
        weekNum: "Week 3",
        vokabel: ["Reading for orientation", "Teleforming & phone etiquette"],
        grammatik: ["Passive substitutes (Passiversatz)", "Indefinite pronouns", "Passive with \"sein\" (Stativpassiv)", "Comparative clauses with \"als\"", "\"als ob\" (as if)", "\"als wen\" (as whom)", "Subjunctive II"]
      },
      {
        weekNum: "Week 4",
        vokabel: ["Understanding literature/reviews", "Gathering details from multiple texts", "Writing an email with decision-making tips"],
        grammatik: ["Textual context: Modal clauses with \"durch\", \"dass\", \"seit\"", "Nouns, verbs, and adjectives with fixed prepositions", "Indirect speech with the subjunctive mood (Konjunktiv I)"]
      },
      {
        weekNum: "Week 5",
        vokabel: ["Take structured notes from oral inputs", "Use notes to write summaries", "Write a formal letter of complaint (Reklamation)"],
        grammatik: ["Nominalization of verbs", "Modal particles (ja, denn, halt)", "Participles as adjectives", "Connective \"während\"", "Prepositions with genitive case"]
      },
      {
        weekNum: "Week 6",
        vokabel: ["Goethe / telc B2 Exam training mock drills"],
        grammatik: ["Consolidation of grammar structures"]
      },
      {
        weekNum: "Week 7",
        vokabel: ["Goethe / telc B2 Exam training mock drills"],
        grammatik: ["Full-length mock exam corrections"]
      },
      {
        weekNum: "Week 8",
        vokabel: ["Goethe / telc B2 Exam training mock drills"],
        grammatik: ["Final evaluation & course completion"]
      }
    ]
  }
];

export default function GermanCourseView({ course, relatedCourses }: GermanCourseViewProps) {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({ "0-Week 1": true });

  const activeLevel = germanSyllabus[activeLevelIdx];

  const toggleWeek = (levelIdx: number, weekNum: string) => {
    const key = `${levelIdx}-${weekNum}`;
    setExpandedWeeks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-card transition-colors duration-300">
      
      {/* 1. Hero Landing Block */}
      <section className="bg-[#00122E] dark:bg-[#010814] text-white py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/20 text-purple-hero px-3.5 py-1.5 rounded-full border border-purple-hero/35">
                  Goethe / telc / ÖSD Exam Center
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                {course.title}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A comprehensive, step-by-step learning program designed to build German-language skills progressively from foundational A1 through upper-intermediate B2. Designed for study abroad, career growth, travel, and international opportunities.
              </p>

              {/* Core Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-navy-muted/50 py-4 max-w-2xl mx-auto lg:mx-0">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Total Duration</span>
                  <span className="text-sm font-semibold text-white">11 Months (A1 - B2)</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Class Size Limit</span>
                  <span className="text-sm font-semibold text-white">5-7 Students Max</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Online Batches</span>
                  <span className="text-xs font-semibold text-white">7 Days, 7 AM - 11 PM</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Offline Batches</span>
                  <span className="text-xs font-semibold text-white">Mon - Fri, 10 AM - 6 PM</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)]">
                <LeadForm defaultCourse={course.slug} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-section-alt border-b border-card-border py-8 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-base sm:text-lg font-bold font-display italic text-navy">
            “Every new language you learn is a new door to a new world.”
          </blockquote>
          <p className="text-xs text-purple font-bold uppercase tracking-widest mt-2">Learn today. Lead tomorrow.</p>
        </div>
      </section>

      {/* 2. Stated Focus Areas Grid */}
      <section className="bg-card py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Core Skills</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Structured Focus Areas</h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              We focus on building confidence through a balanced program that integrates all components of functional fluency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speaking */}
            <div className="p-6 rounded-2xl bg-section-alt border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Sprechen</span>
              <h3 className="text-sm font-bold text-navy">Speaking & Communication</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Develop the ability to communicate naturally in everyday conversations, discussions, professional meetings, and real-life situations.
              </p>
            </div>
            
            {/* Listening */}
            <div className="p-6 rounded-2xl bg-section-alt border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Hören</span>
              <h3 className="text-sm font-bold text-navy">Listening & Comprehension</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Build understanding of spoken German through structured listening tasks and increasingly complex audio-visual training scenarios.
              </p>
            </div>

            {/* Reading */}
            <div className="p-6 rounded-2xl bg-section-alt border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Lesen</span>
              <h3 className="text-sm font-bold text-navy">Reading & Analysis</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Understand diverse German texts, extract critical information, identify key grammatical cues, and analyze multiple texts at once.
              </p>
            </div>

            {/* Writing */}
            <div className="p-6 rounded-2xl bg-section-alt border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Schreiben</span>
              <h3 className="text-sm font-bold text-navy">Written Communication</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Progress from drafting simple greetings and emails to composing summaries, CVs (Lebenslauf), letters of complaint, and academic arguments.
              </p>
            </div>

            {/* Grammar */}
            <div className="p-6 rounded-2xl bg-section-alt border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Grammatik</span>
              <h3 className="text-sm font-bold text-navy">Practical Grammar</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Master grammar progressively, spanning basic sentence structures, dative/accusative cases, Wechsel prepositions, relative clauses, and Konjunktiv II.
              </p>
            </div>

            {/* Vocabulary */}
            <div className="p-6 rounded-2xl bg-section-alt border border-card-border hover-lift flex flex-col gap-3">
              <span className="text-purple bg-purple-light p-2.5 rounded-xl border border-card-border w-fit font-bold text-xs">Vokabeln</span>
              <h3 className="text-sm font-bold text-navy">Everyday Vocabulary</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Build a rich lexical database needed for travel, professional duties, appointments, food, shopping, and natural conversation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Materials & Certifications Split Section */}
      <section className="bg-section-alt py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Official Materials Provided */}
            <div className="lg:col-span-6 bg-card border border-card-border p-8 rounded-2xl flex flex-col gap-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-2 text-purple font-bold">
                <BookOpenCheck className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">Required Course Materials</h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                All learning materials are fully provided by The Global Language Academy. We work with the newest official books accepted by European language framework standards:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#010814]/5 dark:bg-[#010814]/40 rounded-2xl border border-card-border flex flex-col gap-3 hover-lift transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-emerald-500/15 text-emerald-500 border border-emerald-500/20 rounded text-[9px] font-extrabold uppercase tracking-widest">A1 • A2 • B1</span>
                    <BookOpen className="w-4 h-4 text-purple" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-extrabold text-navy">Netzwerk neu</h4>
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">
                      Official course books for everyday greetings, baseline vocabulary lists, and core sentence structures.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#010814]/5 dark:bg-[#010814]/40 rounded-2xl border border-card-border flex flex-col gap-3 hover-lift transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-blue-500/15 text-blue-500 border border-blue-500/20 rounded text-[9px] font-extrabold uppercase tracking-widest">B1+ • B2</span>
                    <BookOpen className="w-4 h-4 text-purple" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-extrabold text-navy">Aspekte neu</h4>
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">
                      Upper-intermediate training manuals mapping professional debate forms, CV drafting templates, and complex text orientation skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-card-border pt-4 flex flex-col gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy">Included in the package:</span>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-navy font-semibold">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Practice books & solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Model tests & exam papers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Audio & video resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple shrink-0" />
                    <span>Online exercises & tips</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Recognized Certifications */}
            <div className="lg:col-span-6 bg-card border border-card-border p-8 rounded-2xl flex flex-col gap-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-2 text-purple font-bold">
                <Award className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">Exam Preparation & Goals</h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                The Global Language Academy prepares students comprehensively for internationally recognized German examinations (A1 to B2):
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                  <span className="px-2 py-1 bg-purple/10 text-purple border border-purple/20 text-[9px] font-extrabold uppercase rounded shrink-0">Goethe</span>
                  <div>
                    <span className="block text-xs font-bold text-navy">Goethe-Institut Examinations</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Certifying levels from A1 bis B2</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                  <span className="px-2 py-1 bg-purple/10 text-purple border border-purple/20 text-[9px] font-extrabold uppercase rounded shrink-0">telc</span>
                  <div>
                    <span className="block text-xs font-bold text-navy">telc Language Tests</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Certifying levels from A1 bis B2</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                  <span className="px-2 py-1 bg-purple/10 text-purple border border-purple/20 text-[9px] font-extrabold uppercase rounded shrink-0">ÖSD</span>
                  <div>
                    <span className="block text-xs font-bold text-navy">ÖSD Exam Certificates</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Certifying levels from A1 bis B2</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-card-border pt-4 flex flex-col gap-2">
                <blockquote className="text-xs font-bold font-display italic text-navy text-center">
                  "PREPARE EFFECTIVELY FOR THE GERMAN EXAM!"
                </blockquote>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Complete German Course Structure (Weekly timeline navigator) */}
      <section className="bg-card py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Syllabus</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Level-by-Level Weekly Curriculum</h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Explore our structured 11-month timeline. Click on the tabs to select your CEFR target level.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* Level selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-[#010814]/5 dark:bg-[#010814]/40 p-3 rounded-2xl border border-card-border">
              {germanSyllabus.map((lvl, index) => (
                <button
                  key={lvl.code}
                  onClick={() => setActiveLevelIdx(index)}
                  className={`p-4 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-200 cursor-pointer border ${
                    activeLevelIdx === index
                      ? 'bg-purple border-purple text-white shadow-md scale-[1.02]'
                      : 'bg-card border-card-border text-navy hover:bg-navy-light'
                  }`}
                >
                  <span className="text-sm font-extrabold tracking-wider">{lvl.code}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${activeLevelIdx === index ? 'text-purple-100' : 'text-navy-muted'}`}>
                    {lvl.name.split(' ')[0]}
                  </span>
                  <span className={`text-[9px] font-semibold ${activeLevelIdx === index ? 'text-purple-200' : 'text-slate-500'}`}>
                    ⏱️ {lvl.duration}
                  </span>
                </button>
              ))}
            </div>

            {/* Active level details and weekly timelines */}
            <div className="flex flex-col gap-6 animate-fade-in">
              {/* Level metadata banner */}
              <div className="p-6 rounded-2xl bg-section-alt border border-card-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors duration-300">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">Target Level Program</span>
                  <h3 className="text-lg font-bold text-navy">{activeLevel.name} ({activeLevel.code})</h3>
                </div>
                <div className="flex flex-col gap-1 text-left sm:text-right">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Duration</span>
                  <span className="text-sm font-semibold text-navy">⏳ {activeLevel.duration}</span>
                </div>
              </div>

              {/* Slogan Banner */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple/10 to-purple/5 border border-purple/20 shadow-sm flex items-center gap-4">
                <span className="p-3 bg-purple/20 border border-purple/30 rounded-xl text-purple shrink-0">
                  <Award className="w-5 h-5" />
                </span>
                <p className="text-xs sm:text-sm font-semibold italic text-navy leading-relaxed">
                  "{activeLevel.slogan}"
                </p>
              </div>

              {/* Weeks list timeline accordion */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy mb-2 block">Weekly Schedule Breakdown</span>
                {activeLevel.weeks.map((week) => {
                  const key = `${activeLevelIdx}-${week.weekNum}`;
                  const isExpanded = expandedWeeks[key] || false;

                  return (
                    <div
                      key={week.weekNum}
                      className="border border-card-border rounded-xl overflow-hidden shadow-sm bg-card transition-colors duration-300"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleWeek(activeLevelIdx, week.weekNum)}
                        type="button"
                        className="w-full p-4 flex justify-between items-center text-left bg-section-alt hover:bg-card-hover transition-colors cursor-pointer border-b border-card-border"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-purple/10 text-purple border border-purple/20 rounded-md text-[10px] font-extrabold uppercase tracking-wide">
                            {week.weekNum}
                          </span>
                          <span className="text-xs font-bold text-navy">
                            {activeLevel.code === "A1" && week.weekNum === "Week 1" ? "Introduction to German Sounds" :
                             activeLevel.code === "A1" && week.weekNum === "Week 2" ? "Everyday Hobbies & Introductions" :
                             activeLevel.code === "A1" && week.weekNum === "Week 3" ? "Workplace Dialogues" :
                             activeLevel.code === "A1" && week.weekNum === "Additional Topics" ? "Navigating Directions" :
                             activeLevel.code === "A1" && week.weekNum === "Week 4" ? "Shopping & Accusative Grammar" :
                             activeLevel.code === "A1" && week.weekNum === "Week 5" ? "Separable Verbs & Email Drafting" :
                             activeLevel.code === "A1" && week.weekNum === "Week 6" ? "Dative Cases & Small Talk" :
                             activeLevel.code === "A1" && week.weekNum === "Week 7" ? "Wechsel Prepositions & Dwelling" :
                             activeLevel.code === "A1" && week.weekNum === "Week 8" ? "Shopping Conversations" :
                             activeLevel.code === "A2" && week.weekNum === "Week 1" ? "Genitive Clauses & Past Modals" :
                             activeLevel.code === "A2" && week.weekNum === "Week 2" ? "Film, Feelings & Reflexives" :
                             activeLevel.code === "A2" && week.weekNum === "Week 3" ? "Adjective Endings & Subjunctive II" :
                             activeLevel.code === "A2" && week.weekNum === "Week 4" ? "Indirect Questions & Presentations" :
                             activeLevel.code === "A2" && week.weekNum === "Week 5" ? "Connector Conjunctions & Schedules" :
                             activeLevel.code === "A2" && week.weekNum === "Week 6" ? "Konjunktiv 2 & Fixed Prepositions" :
                             activeLevel.code === "A2" && week.weekNum === "Week 7" ? "Relative Clauses & Descriptions" :
                             activeLevel.code === "A2" && week.weekNum === "Week 8" ? "CEFR A2 Exam Mock Preparation" :
                             activeLevel.code === "B1" && week.weekNum === "Week 1" ? "Travel Plans & zu Infinitives" :
                             activeLevel.code === "B1" && week.weekNum === "Week 2" ? "Advertising Debates & Genitives" :
                             activeLevel.code === "B1" && week.weekNum === "Week 3" ? "Past Tense forms & Subjunctive II" :
                             activeLevel.code === "B1" && week.weekNum === "Week 4" ? "Environmental Campaigns & connectors" :
                             activeLevel.code === "B1" && week.weekNum === "Week 5" ? "Assumptions & Futur I Grammar" :
                             activeLevel.code === "B1" && week.weekNum === "Week 6" ? "Conflict Debating & Past Perfect" :
                             activeLevel.code === "B1" && week.weekNum === "Week 7" ? "Helping Conjunctions & Position of Nicht" :
                             activeLevel.code === "B1" && week.weekNum === "Week 8" ? "Structuring Presentations & Passive Voice" :
                             activeLevel.code === "B1" && week.weekNum === "Week 9" ? "Relative Pronouns was & wo" :
                             activeLevel.code === "B1" && week.weekNum === "Week 10" ? "Bank Meetings & je...desto connectors" :
                             activeLevel.code === "B1" && (week.weekNum === "Week 11" || week.weekNum === "Week 12") ? "CEFR B1 Exam Mock Preparation" :
                             activeLevel.code === "B1 Plus" && week.weekNum === "Week 1" ? "Complex Listening & n-Nouns" :
                             activeLevel.code === "B1 Plus" && week.weekNum === "Week 2" ? "Hypotheses & Causal Connectors" :
                             activeLevel.code === "B1 Plus" && week.weekNum === "Week 3" ? "Taking Lecture Notes & Future Tense" :
                             activeLevel.code === "B1 Plus" && week.weekNum === "Week 4" ? "Proofreading & Subjunctive Clauses" :
                             activeLevel.code === "B1 Plus" && week.weekNum === "Week 5" ? "Phone Call Prep & Temporal Prepositions" :
                             activeLevel.code === "B1 Plus" && (week.weekNum === "Week 6" || week.weekNum === "Week 7" || week.weekNum === "Week 8") ? "B1+ Model Tests & Evaluations" :
                             activeLevel.code === "B2" && week.weekNum === "Week 1" ? "Word Order & Negation Syntax" :
                             activeLevel.code === "B2" && week.weekNum === "Week 2" ? "CV Writing & Nomen-Verb-Verbindungen" :
                             activeLevel.code === "B2" && week.weekNum === "Week 3" ? "Passive Substitutes & als ob clauses" :
                             activeLevel.code === "B2" && week.weekNum === "Week 4" ? "Reviewing Texts & Indirect Speech" :
                             activeLevel.code === "B2" && week.weekNum === "Week 5" ? "Complaint Letters & Nominalization" :
                             "CEFR B2 Exam Mock Drills & Rehearsals"}
                          </span>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-purple" /> : <ChevronDown className="w-4 h-4 text-purple" />}
                      </button>

                      {/* Accordion Body */}
                      {isExpanded && (
                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-card-border bg-section-alt/50">
                          {/* Vocabulary / Vokabel */}
                          <div className="p-4 rounded-xl bg-card border border-card-border flex flex-col gap-2.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple flex items-center gap-1">
                              <BookOpen className="w-3.5 h-3.5" />
                              Vokabel (Vocabulary / Communication)
                            </span>
                            <ul className="flex flex-col gap-2 text-xs text-navy font-semibold">
                              {week.vokabel.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-purple font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Grammar / Grammatik */}
                          <div className="p-4 rounded-xl bg-card border border-card-border flex flex-col gap-2.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5" />
                              Grammatik (Grammar / Syntax Focus)
                            </span>
                            <ul className="flex flex-col gap-2 text-xs text-navy font-semibold">
                              {week.grammatik.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-purple font-bold">•</span>
                                  <span>{item}</span>
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

      {/* 5. Expectation and Goals Card Grid */}
      <section className="bg-section-alt py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Course Goals</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
                Course Expectations & Milestones
              </h2>
              <p className="text-sm text-navy-muted leading-relaxed">
                By the end of the course program (A1 - B2), learners are expected to master these essential goals:
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-card border border-card-border p-8 rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 transition-colors duration-300">
              <div className="flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                <Check className="w-4.5 h-4.5 text-purple shrink-0" />
                <span className="text-xs font-semibold text-navy leading-normal">Communicate confidently in basic everyday German</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                <Check className="w-4.5 h-4.5 text-purple shrink-0" />
                <span className="text-xs font-semibold text-navy leading-normal">Understand common expressions & idioms</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                <Check className="w-4.5 h-4.5 text-purple shrink-0" />
                <span className="text-xs font-semibold text-navy leading-normal">Form correct sentences in speaking & writing</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border">
                <Check className="w-4.5 h-4.5 text-purple shrink-0" />
                <span className="text-xs font-semibold text-navy leading-normal">Develop strong pronunciation & phonetic stress</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border col-span-1 sm:col-span-2">
                <Check className="w-4.5 h-4.5 text-purple shrink-0" />
                <span className="text-xs font-semibold text-navy leading-normal">Develop advanced grammar structures and practical language abilities for academic and professional migration</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Course Faculty Profile */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Faculty</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Who Will Train You?</h2>
          </div>

          <div className="max-w-xl mx-auto">
            {course.faculty.map((trainer) => (
              <div key={trainer.id} className="hover-lift rounded-xl bg-card border border-card-border shadow-sm overflow-hidden">
                <FacultyCard faculty={trainer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Success Stories Testimonials */}
      <section className="bg-section-alt text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Alumni Reviews</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Scorecard Results & Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {course.testimonials.map((test) => (
              <div key={test.id} className="hover-lift rounded-xl">
                <TestimonialCard testimonial={test} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section className="bg-card text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
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

      {/* 9. Related/Alternative courses */}
      <section className="bg-section-alt text-navy py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Other Programs at GLA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="hover-lift bg-card p-6 rounded-xl border border-card-border shadow-sm flex flex-col gap-4 justify-between transition-all duration-300"
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
