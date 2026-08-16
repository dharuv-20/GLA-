"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, BookOpen, Award, CheckCircle, Clock, BookOpenCheck, MapPin, Calendar, HelpCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Course, FacultyMember, Testimonial, FAQItem, StudentResult } from '@/types';
import FacultyCard from '@/components/FacultyCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface GermanCourseViewProps {
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
        title: "Introduction to German Sounds & Greetings",
        vokabel: ["Greetings", "Alphabets", "Numbers"],
        grammatik: ["Leprosy (retained from source content)", "Verbs", "Personal pronouns"]
      },
      {
        weekNum: "Week 2",
        title: "Everyday Hobbies & Appointments",
        vokabel: ["Introduction", "Talk about hobbies", "Make an appointment"],
        grammatik: ["W-question", "Articles", "Irregular verbs"]
      },
      {
        weekNum: "Week 3",
        title: "Talk About Work & Professional Life",
        vokabel: ["Talk about work"],
        grammatik: ["Imperative mit Sie"]
      },
      {
        weekNum: "Additional Topics",
        title: "Places, Routes & Negation",
        vokabel: ["Question about places / Describe the route", "Listening Practice"],
        grammatik: ["Negation Artikel"]
      },
      {
        weekNum: "Week 4",
        title: "Shopping, Food & Modal Verbs",
        vokabel: ["Conversation while shopping", "Talking about food", "Making an appointment", "Listening comprehension"],
        grammatik: ["Irregular verbs with modal verbs", "Verbs with accusative cases", "Time expressions", "Possessive articles", "Modal verbs"]
      },
      {
        weekNum: "Week 5",
        title: "Writing Emails & Separable Verbs",
        vokabel: ["Write an email", "Listening practice"],
        grammatik: ["Separable verbs", "Preterite tense", "Personal pronouns in the accusative case", "Prepositions in the accusative case"]
      },
      {
        weekNum: "Week 6",
        title: "Making Small Talk & Dative Prepositions",
        vokabel: ["Making small talk", "Listening exercises"],
        grammatik: ["Joining sentences", "Personal pronouns of the dative case", "Prepositions of the dative case", "Imperative with du, ihr, Sie", "Other modal verbs"]
      },
      {
        weekNum: "Week 7",
        title: "Doctor Appointments & Perfect Tense",
        vokabel: ["Doctor's appointment", "Describing an apartment"],
        grammatik: ["Wechsel prepositions", "Perfect tense"]
      },
      {
        weekNum: "Week 8",
        title: "Buying Clothes & Demonstrative Articles",
        vokabel: ["Conversation about buying clothes"],
        grammatik: ["Interactive article", "Demonstrative article", "Pronoun 'man'"]
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
        title: "Genitive Clauses & School Days",
        vokabel: ["Introduction", "School days Speaking"],
        grammatik: ["Genitive", "Subordinate clause – because/there", "Modal verbs in the past tense", "Dative case"]
      },
      {
        weekNum: "Week 2",
        title: "Films, Feelings & Superlatives",
        vokabel: ["Speaking in film", "Speaking about feelings"],
        grammatik: ["Comparative and superlative", "Als and Wie", "Subordinate clauses – dass and wenn", "Reflexive verbs"]
      },
      {
        weekNum: "Week 3",
        title: "City Descriptions & Subjunctive II",
        vokabel: ["Describe the city", "Listening tasks"],
        grammatik: ["Definite adjective endings", "Indefinite adjective endings", "Subjunctive II (Konjunktiv II)", "Becoming / will be (V1 V2 V3)"]
      },
      {
        weekNum: "Week 4",
        title: "Opinions & Presentation Skills",
        vokabel: ["Express your opinion", "Give a presentation", "Listening comprehension"],
        grammatik: ["Indirekt Frage", "Ortangaben", "was für ein/e"]
      },
      {
        weekNum: "Week 5",
        title: "Read/Write Emails & Conjunction Connectors",
        vokabel: ["Reading comprehension", "Make an appointment", "Respond", "Write an email"],
        grammatik: ["Sätze verbinden: Trotzdem & Deshalb", "Verben mit dativ & Akkusativ", "Nebensatz – Als & Wenn"]
      },
      {
        weekNum: "Week 6",
        title: "Giving Advice & fixed prepositions",
        vokabel: ["Giving advice", "Planning something together", "Listening practice"],
        grammatik: ["Konjunktiv 2", "Verben mit fixed Präpositionen", "W – frage mit Präposition"]
      },
      {
        weekNum: "Week 7",
        title: "Relative Clauses & Descriptions",
        vokabel: ["Picture | Speak | Describe", "Listening exercises"],
        grammatik: ["Indefinite pronouns", "Relative clauses & pronouns"]
      },
      {
        weekNum: "Week 8",
        title: "CEFR A2 Exam Mock Preparation",
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
        title: "Likes, Dislikes & Travel planning",
        vokabel: ["Likes & Dislikes", "Conversation: Travel Planning"],
        grammatik: ["Infinitive with 'zu'", "Subordinate clause – because/since and although"]
      },
      {
        weekNum: "Week 2",
        title: "Advertising Debates & Connectors",
        vokabel: ["Opinion on advertising", "Registering complaints", "Writing tasks", "Listening practice"],
        grammatik: ["Let", "Therefore / For ... that reason / Therefore / For this reason connectors", "so that & so", "Genitive prepositions"]
      },
      {
        weekNum: "Week 3",
        title: "Past Tense forms & Subjunctive II",
        vokabel: ["Compare objects/data", "Describe a cultural event", "Ask for detailed information", "Listening practice"],
        grammatik: ["Past tense: Forms", "Time expressions: Dative & Genitive", "Irreal sentences with subjunctive II", "Pronominal verbs"]
      },
      {
        weekNum: "Week 4",
        title: "Environmental Campaigns & connectors",
        vokabel: ["Express your own opinion", "Agree & disagree in debates", "Present an environmental campaign", "Listening practice"],
        grammatik: ["Comparative and superlative of nouns", "Subordinate clause: so that and in order to..."]
      },
      {
        weekNum: "Week 5",
        title: "Assumptions, Wishes & Futur I",
        vokabel: ["Express assumptions", "Describe changes", "Express wishes"],
        grammatik: ["Future 1 (Futur I)", "n-Declension – Masculine nouns", "Relative clauses"]
      },
      {
        weekNum: "Week 6",
        title: "Conflict Debating & Past Perfect",
        vokabel: ["Highlight key information", "Conduct conflict discussions"],
        grammatik: ["Past perfect (Plusquamperfekt)", "Subordinate clause: Temporal clause"]
      },
      {
        weekNum: "Week 7",
        title: "Helping Conjunctions & Position of Nicht",
        vokabel: ["Offer, accept, and decline help", "Listening exercises", "Ask targeted questions", "Express your opinion on abstract topics"],
        grammatik: ["Not/no or only + need + to + infinitive (brauchen... zu)", "Reflexive pronouns in the accusative and dative tenses", "Two-part connectors", "Position of 'nicht' in a sentence", "Adjective without an article"]
      },
      {
        weekNum: "Week 8",
        title: "Structuring Presentations & Passive Voice",
        vokabel: ["Giving a Presentation: Structuring Introduction, Main Body, and Conclusion"],
        grammatik: ["Passive (Vorgangspassiv)", "Formation of the passive voice", "Passive with modal verbs"]
      },
      {
        weekNum: "Week 9",
        title: "Relative Pronouns was & wo",
        vokabel: ["Facilitate a debate/discussion", "Write formal letters and emails", "Listening exercises"],
        grammatik: ["Articles as pronouns", "Some/an/which", "Relative clauses with was & wo"]
      },
      {
        weekNum: "Week 10",
        title: "Bank Meetings & je...desto",
        vokabel: ["Conduct a formal bank meeting", "State a logical argument", "Have a professional discussion", "Listening practice"],
        grammatik: ["Sentences with je..., desto/umso", "Practical or adjective declensions"]
      },
      {
        weekNum: "Week 11",
        title: "CEFR B1 Exam Prep Part I",
        vokabel: ["Model test drills & Goethe/telc B1 Exam training"],
        grammatik: ["Review of dative/accusative verb prepositions"]
      },
      {
        weekNum: "Week 12",
        title: "CEFR B1 Exam Prep Part II",
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
        title: "Complex Listening & n-Nouns",
        vokabel: ["Complete complex listening tasks", "Describe structured graphics", "Ask open W-questions"],
        grammatik: ["Verbs and Complements", "Separable & Inseparable Verbs", "Declension of n-Nouns"]
      },
      {
        weekNum: "Week 2",
        title: "Hypotheses & Causal Connectors",
        vokabel: ["Learning and debating with posters", "Formulating hypotheses"],
        grammatik: ["Plural formation of nouns", "Adjective declension", "Comparative and superlative forms", "Connectors: causal, consecutive, consecutive clauses"]
      },
      {
        weekNum: "Week 3",
        title: "Taking Lecture Notes & Future Tense",
        vokabel: ["Write a statement/commentary", "Take structured notes while listening"],
        grammatik: ["Infinitives with and without 'zu'", "Modal verbs: tense & meaning", "Making assumptions and demands — future tense", "Verbs with prepositional phrases, adverbials/interrogative words"]
      },
      {
        weekNum: "Week 4",
        title: "Proofreading & Subjunctive Clauses",
        vokabel: ["Proofreading academic texts", "Working with paraphrases"],
        grammatik: ["Reflexive verbs", "Relative clauses", "Final clauses", "Subjunctive II (Konjunktiv II)"]
      },
      {
        weekNum: "Week 5",
        title: "Phone Call Prep & Temporal Prepositions",
        vokabel: ["Preparing for a formal phone call", "Preparing for a structured presentation"],
        grammatik: ["Connectors: Temporal clauses", "Temporal prepositions", "Passive voice", "Local prepositions"]
      },
      {
        weekNum: "Week 6",
        title: "CEFR B1+ Exam Prep Part I",
        vokabel: ["B1+ Model tests & exam training drills"],
        grammatik: ["Grammatical synthesis & corrections"]
      },
      {
        weekNum: "Week 7",
        title: "CEFR B1+ Exam Prep Part II",
        vokabel: ["B1+ Model tests & exam training drills"],
        grammatik: ["Listening and speaking evaluations"]
      },
      {
        weekNum: "Week 8",
        title: "CEFR B1+ Exam Prep Part III",
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
        title: "Word Order & Negation Syntax",
        vokabel: ["Note down details from lectures", "Compile logical arguments from a text"],
        grammatik: ["Word order in the sentence", "Negation rules", "Compare sentences mit als, wie und je... desto/umso", "The word 'es' usage"]
      },
      {
        weekNum: "Week 2",
        title: "CV Writing & Nomen-Verb-Verbindungen",
        vokabel: ["Writing a professional CV (Lebenslauf)", "Assigning matching headings to paragraphs"],
        grammatik: ["Pre-past connectors (Nachdem, etc.)", "Connector um zu, ohne zu, (an)statt zu + infinitive", "Alternatives of structures", "Relative sentence mit 'wer'", "Nomen - verb - Verbindungen"]
      },
      {
        weekNum: "Week 3",
        title: "Passive Substitutes & als ob clauses",
        vokabel: ["Reading for orientation", "Teleforming & phone etiquette"],
        grammatik: ["Passive substitutes (Passiversatz)", "Indefinite pronouns", "Passive with 'sein' (Stativpassiv)", "Comparative clauses with 'als'", "'als ob' (as if)", "'als wen' (as whom)", "Subjunctive II"]
      },
      {
        weekNum: "Week 4",
        title: "Reviewing Texts & Indirect Speech",
        vokabel: ["Understanding literature/reviews", "Gathering details from multiple texts", "Writing an email with decision-making tips"],
        grammatik: ["Textual context: Modal clauses with 'through', 'dass', 'seit'", "Nouns, verbs, and adjectives with fixed prepositions", "Indirect speech with the subjunctive mood (Konjunktiv I)"]
      },
      {
        weekNum: "Week 5",
        title: "Complaint Letters & Nominalization",
        vokabel: ["Take structured notes from oral inputs", "Use notes to write summaries", "Write a formal letter of complaint (Reklamation)"],
        grammatik: ["Nominalization of verbs", "Modal particles (ja, denn, halt)", "Participles as adjectives", "Connective 'während'", "Prepositions with genitive case"]
      },
      {
        weekNum: "Week 6",
        title: "CEFR B2 Exam Mock Drills I",
        vokabel: ["Goethe / telc B2 Exam training mock drills"],
        grammatik: ["Consolidation of grammar structures"]
      },
      {
        weekNum: "Week 7",
        title: "CEFR B2 Exam Mock Drills II",
        vokabel: ["Goethe / telc B2 Exam training mock drills"],
        grammatik: ["Full-length mock exam corrections"]
      },
      {
        weekNum: "Week 8",
        title: "CEFR B2 Exam Mock Drills III",
        vokabel: ["Goethe / telc B2 Exam training mock drills"],
        grammatik: ["Final evaluation & course completion"]
      }
    ]
  },
  {
    code: "C1",
    name: "Advanced German C1",
    duration: "3 Months",
    books: ["Kontext C1"],
    slogan: "Refine Vocabulary, Master Structures, Speak Interactively.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Chapter 1: Miteinander leben (Social Networks & Community)",
        vokabel: ["Social networks", "Social groups", "Community", "Alternative living projects", "Conflict mediation"],
        grammatik: ["Position of information and complements in the middle field (TEKAMOLO)", "Mediation skills", "Self-presentation"]
      },
      {
        weekNum: "Week 2",
        title: "Chapter 2: Geschmackssache (Taste & Aesthetics)",
        vokabel: ["Taste & Aesthetics", "Art & Humour", "Bauhaus design history", "Cultural preferences"],
        grammatik: ["Adjective declension after indefinite article words", "Reported speech & Ways of reproducing statements"]
      },
      {
        weekNum: "Week 3",
        title: "Chapter 3: Wie wir leben (Housing & Lifestyle)",
        vokabel: ["Housing & Lifestyle choices", "Work/Personal choices", "Presenting & discussing viewpoints"],
        grammatik: ["Subjective meaning of 'sollen'", "Subjective meaning of 'wollen'", "Advanced ways of expressing assumptions/claims"]
      },
      {
        weekNum: "Week 4",
        title: "Chapter 4: Ich möchte diesen Job (Job Applications)",
        vokabel: ["Objects and features", "Professional identity", "Job applications", "Workplace communication"],
        grammatik: ["Advanced adjective declension", "Reported speech review", "Lexical precision & Professional register"]
      },
      {
        weekNum: "Week 5",
        title: "Chapter 5: Alles, was Recht ist (Rights & Social Participation)",
        vokabel: ["Fundamental rights", "Law & responsibilities", "Workplace rules", "Social participation"],
        grammatik: ["Alternatives to modal verbs", "Modal verbs of modality", "Consequential and conditional relationships"]
      },
      {
        weekNum: "Week 6",
        title: "Chapter 6: Mit Leib und Seele (Health & Motive)",
        vokabel: ["Health & motivation", "Persistence", "Medicine", "Professional & ethical perspectives"],
        grammatik: ["Infinitive with 'zu'", "Simultaneity & Anteriority", "Advanced purpose and concession structures"]
      },
      {
        weekNum: "Week 7",
        title: "Chapter 7: Alles perfekt? (Perfection & unintended effects)",
        vokabel: ["Perfection & mistakes", "Dust/environment", "Unintended effects", "Meetings and negotiations"],
        grammatik: ["Conditional relationships in nominal form", "Extended participial attributes", "Nominal style (Nominalstil)"]
      },
      {
        weekNum: "Week 8",
        title: "Chapter 8: Was Sprache macht (Language & Media Influence)",
        vokabel: ["Language and media", "Headlines & dialects", "Multilingualism", "Language influence and manipulation"],
        grammatik: ["Separable, Inseparable and Prefix verbs", "Register, Connotation & Precise word choice"]
      },
      {
        weekNum: "Week 9",
        title: "Chapter 9: Besser konsumieren (Consumption & Sustainability)",
        vokabel: ["Consumption concepts", "Sustainability & business ideas", "Minimum wage", "Basic income debate"],
        grammatik: ["Causal & Consequential relationships", "Temporal structures", "Expressing cause/effect precisely"]
      },
      {
        weekNum: "Week 10",
        title: "Chapter 10: Herausforderungen (AI & Stress)",
        vokabel: ["Stress & self-employment", "Artificial intelligence (AI)", "Digital development", "Misinformation"],
        grammatik: ["Temporal relationships", "Expressing conditions precisely", "Advanced discussion & mediation"]
      },
      {
        weekNum: "Week 11",
        title: "Chapter 11: Wissen schaffen (Science & Academic Life)",
        vokabel: ["Science & research", "Academic life", "Research methods", "Communicating scientific information"],
        grammatik: ["Special sentence position with infinitive / Participle II", "Nominalisation", "Academic language & presentation skills"]
      },
      {
        weekNum: "Week 12",
        title: "Chapter 12: Wie wir ticken (Personality & C1 revision)",
        vokabel: ["Waiting & emotions", "Dreams & personality", "Colour & perception", "C1 exam revision mock practice"],
        grammatik: ["Futur I & Futur II", "Extraposition", "Reading, Listening, Writing, Speaking and Mediation exam practice"]
      }
    ]
  },
  {
    code: "C2",
    name: "Advanced German Mastery C2",
    duration: "5 Months",
    books: ["Kontext C1 (with C2 extensions)"],
    slogan: "Move beyond correctness toward precision, flexibility, and stylistic control.",
    weeks: [
      {
        weekNum: "Week 1",
        title: "Chapter 1: Miteinander leben (Social Networks & Trust)",
        vokabel: ["Social networks", "Trust & Housing", "Complex mediation tasks"],
        grammatik: ["TEKAMOLO & Complex middle-field word order", "C2 extension: Information focus & emphasis structures"]
      },
      {
        weekNum: "Week 2",
        title: "Chapters 1–2: Conflict mediation & Taste",
        vokabel: ["Conflict mediation scenarios", "Taste & aesthetics", "Cultural perspectives"],
        grammatik: ["Advanced reported speech", "C2 extension: Konjunktiv I/II in nuanced reporting"]
      },
      {
        weekNum: "Week 3",
        title: "Chapter 2: Art, Humour & Interpretation",
        vokabel: ["Art & Humour", "Cultural identity", "Interpretation of literature"],
        grammatik: ["Adjective declension review", "Lexical precision & Collocations", "Stylistic variation drills"]
      },
      {
        weekNum: "Week 4",
        title: "Chapter 3: Lifestyle & Communication Stance",
        vokabel: ["Lifestyle, Work & Identity", "Communication models"],
        grammatik: ["Subjective modal meanings", "Stance, Evidentiality & Hedging (Abschattung)"]
      },
      {
        weekNum: "Week 5",
        title: "Chapter 4: Professional identity & Career Applications",
        vokabel: ["Professional identity & careers", "Job applications", "Workplace correspondence"],
        grammatik: ["Complex adjective & participle structures", "Formal academic and professional registers"]
      },
      {
        weekNum: "Week 6",
        title: "Chapter 5: Rights, Law & Social Debate",
        vokabel: ["Rights & Law", "Responsibilities", "Social debates"],
        grammatik: ["Modal alternatives", "Conditional & Consequential relationships", "Advanced connector choices"]
      },
      {
        weekNum: "Week 7",
        title: "Chapter 6: Health & Ethical Questions",
        vokabel: ["Health & Motivation", "Medicine", "Ethical questions"],
        grammatik: ["Infinitive constructions", "Anteriority", "Complex purpose and concession structures"]
      },
      {
        weekNum: "Week 8",
        title: "Chapter 7: Perfection & Compact style",
        vokabel: ["Perfection & error handling", "Unintended effects", "Formal meetings"],
        grammatik: ["Nominalisation", "Participial attributes", "Compact academic/professional style"]
      },
      {
        weekNum: "Week 9",
        title: "Chapter 8: Language, Media & Semantic Nuances",
        vokabel: ["Language & Media", "Dialects & Multilingualism", "Influence in press"],
        grammatik: ["Prefix verbs", "Semantic nuance & register", "Irony, Connotation & Rhetorical effects"]
      },
      {
        weekNum: "Week 10",
        title: "Chapter 9: Consumption, Sustainability & Argumentation",
        vokabel: ["Consumption & Sustainability", "Business ideas", "Economic debates"],
        grammatik: ["Cause/effect structures", "Temporal structures", "C2 extension: Concise argumentation & Paraphrase"]
      },
      {
        weekNum: "Week 11",
        title: "Chapter 10: AI & digital change",
        vokabel: ["Stress & Independence", "Artificial Intelligence (AI)", "Digital changes"],
        grammatik: ["Temporal & Relational structures", "C2 extension: Argument mapping & Counterargument structures"]
      },
      {
        weekNum: "Week 12",
        title: "Chapters 10–11: Media literacy & Paraphrase",
        vokabel: ["Misinformation & Media literacy", "Science & Research"],
        grammatik: ["Mediation strategies", "Academic vocabulary", "Paraphrasing & Source integration"]
      },
      {
        weekNum: "Week 13",
        title: "Chapter 11: Academic Research & nominal style",
        vokabel: ["Scientific research", "University life", "Research communication"],
        grammatik: ["Infinitive & Partizip II in marked positions", "Nominal style vs. Verbal style"]
      },
      {
        weekNum: "Week 14",
        title: "Chapter 12: Personality, emotions & behaviour",
        vokabel: ["Personality & Emotions", "Dreams & perception", "Human behavior"],
        grammatik: ["Futur I & Futur II", "Extraposition", "C2 extension: Subtle temporal references"]
      },
      {
        weekNum: "Week 15",
        title: "Integrated C2: Complex reading (Journalism & literature)",
        vokabel: ["Complex reading: Journalism, Essays, Academic papers, Literary texts, Language extracts"],
        grammatik: ["Sentence embedding, Inversion, Ellipsis, Cohesion, Information structures"]
      },
      {
        weekNum: "Week 16",
        title: "Integrated C2: Spontaneous discussion & debates",
        vokabel: ["C2 speaking drills: debates, presentations, interviews, spontaneous discussions"],
        grammatik: ["Nuanced agreement/disagreement, Reformulation, Idiomatic speaking, Register-appropriate language"]
      },
      {
        weekNum: "Week 17",
        title: "Integrated C2: Argumentative writing & commentary",
        vokabel: ["C2 writing: Argumentative essay, Commentary, Report, Formal correspondence, Summary"],
        grammatik: ["Advanced connectors, Nominalisation, Paraphrase, Stylistic variation & Cohesion"]
      },
      {
        weekNum: "Week 18",
        title: "Integrated C2: Mediation & extended listening",
        vokabel: ["Mediation & Listening: Long lectures, Expert discussions, Podcasts, Multi-source tasks"],
        grammatik: ["Inference, Speaker attitude, Implicit meaning, Concise mediation & Synthesis"]
      },
      {
        weekNum: "Week 19",
        title: "Integrated C2: Exam simulation under timed conditions",
        vokabel: ["Full C2 Exam simulation: Reading, Listening, Writing, Speaking practice under timed conditions"],
        grammatik: ["Targeted error correction, Grammar consolidation, Vocabulary drills"]
      },
      {
        weekNum: "Week 20",
        title: "Integrated C2: Final mock revision & performance review",
        vokabel: ["Final Mock Exam, Individual feedback, Performance review"],
        grammatik: ["Personal error profile review, Precision, Fluency, Register, Accuracy checks"]
      }
    ]
  }
];

export default function GermanCourseView({ course, relatedCourses }: GermanCourseViewProps) {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({ "0-Week 1": true });
  const [curriculumTab, setCurriculumTab] = useState<'C1' | 'C2'>('C1');
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const activeLevel = germanSyllabus[activeLevelIdx];

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
    <div className="flex flex-col overflow-x-hidden text-navy bg-card transition-colors duration-300">
      
      {/* 1. Hero Landing Block */}
      <section className="bg-[#00122E] dark:bg-[#010814] text-white py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300">
        {/* Background image overlay with linear gradient masking (Desktop only) */}
        <div className="absolute inset-0 opacity-45 dark:opacity-25 pointer-events-none hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00122E] via-[#00122E]/65 to-[#00122E]/10 dark:from-[#010814] dark:via-[#010814]/65 dark:to-[#010814]/10 z-10"></div>
          <img src="/images/berlin-skyline.jpg" alt="Berlin Skyline" className="w-full h-full object-cover object-center" />
        </div>
        {/* Radial glow for Mobile view (clean and high quality) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.15),transparent_70%)] sm:hidden pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/20 text-purple-hero px-3.5 py-1.5 rounded-full border border-purple-hero/35">
                  Goethe / telc / ÖSD / DSH / TestDaF Preparation
                </span>
                <img src="/images/german-flag-ribbon.png" alt="German Ribbon" className="h-6 object-contain select-none pointer-events-none hidden sm:block animate-pulse-slow" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                {course.title}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                A comprehensive, fully structured program designed to build German language proficiency progressively from A1 to C2. Integrating vocabulary, grammar (Grammatik), speaking, listening, reading, writing, and targeted mock preparation for international exams.
              </p>

              {/* Core Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-navy-muted/50 py-4 max-w-2xl mx-auto lg:mx-0">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Total Duration</span>
                  <span className="text-sm font-semibold text-white">19 Months (A1 - C2)</span>
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
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold font-sans">
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
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold font-sans">
                      Upper-intermediate training manuals mapping professional debate forms, CV drafting templates, and complex text orientation skills.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#010814]/5 dark:bg-[#010814]/40 rounded-2xl border border-card-border flex flex-col gap-3 hover-lift transition-all duration-300 col-span-1 sm:col-span-2">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-purple/15 text-purple border border-purple/20 rounded text-[9px] font-extrabold uppercase tracking-widest">C1 • C2 Advanced</span>
                    <BookOpen className="w-4 h-4 text-purple" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-extrabold text-navy">Kontext C1</h4>
                    <p className="text-[10px] text-navy-muted leading-relaxed font-semibold font-sans">
                      Advanced German coursebook covering academic presentation styles, research methods, scientific arguments, and C2-level extension mediation work.
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
                The Global Language Academy prepares students comprehensively for internationally recognized German examinations (A1 to C2):
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 p-3 bg-section-alt rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-16 h-10 bg-white rounded-lg border border-card-border p-1 flex items-center justify-center shrink-0">
                    <img src="/images/goethe-logo.png" alt="Goethe-Institut" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">Goethe-Institut Examinations</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Certifying levels from A1 bis C2</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-section-alt rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-16 h-10 bg-white rounded-lg border border-card-border p-1 flex items-center justify-center shrink-0">
                    <img src="/images/telc-logo.jpg" alt="telc" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">telc Language Tests</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Certifying levels from A1 bis C2</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-section-alt rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-16 h-10 bg-white rounded-lg border border-card-border p-1 flex items-center justify-center shrink-0">
                    <img src="/images/osd-logo.jpg" alt="ÖSD" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">ÖSD Exam Certificates</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Certifying levels from A1 bis C2</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-section-alt rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-16 h-10 bg-white rounded-lg border border-card-border p-1 flex items-center justify-center shrink-0">
                    <img src="/images/dsh-logo.jpg" alt="DSH" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">DSH Hochschulzugang</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">German University Entrance Examination</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-section-alt rounded-xl border border-card-border hover-lift transition-all duration-200">
                  <div className="w-16 h-10 bg-white rounded-lg border border-card-border p-1 flex items-center justify-center shrink-0">
                    <img src="/images/testdaf-logo.jpg" alt="TestDaF" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-navy">TestDaF Academic</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Foreigner Language Academic Certification</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-card-border pt-4 flex flex-col gap-2">
                <blockquote className="text-xs font-bold font-display italic text-navy text-center">
                  "PREPARE EFFECTIVELY FOR GERMAN EXAMINATIONS!"
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
            <div className="flex flex-col gap-3 max-w-xl mx-auto w-full">
              {/* Compact Pill Selector Row */}
              <div className="flex items-center justify-between bg-section-alt p-1.5 rounded-full border border-card-border shadow-sm">
                {germanSyllabus.map((lvl, index) => (
                  <button
                    key={lvl.code}
                    onClick={() => setActiveLevelIdx(index)}
                    className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                      activeLevelIdx === index
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-navy-muted hover:text-navy hover:bg-navy-light/40'
                    }`}
                  >
                    {lvl.code === "B1 Plus" ? "B1+" : lvl.code}
                  </button>
                ))}
              </div>
              
              {/* Compact Sub-details Indicator */}
              <div className="text-center">
                <span className="text-[10px] sm:text-xs font-bold text-navy-muted bg-section-alt px-3.5 py-1.5 rounded-full border border-card-border inline-flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse"></span>
                  Selected: <strong className="text-navy">{activeLevel.name}</strong> • Duration: <strong className="text-navy">{activeLevel.duration}</strong>
                </span>
              </div>
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
                      className={`border transition-all duration-300 rounded-xl overflow-hidden mb-4 ${
                        isExpanded
                          ? 'border-purple-300/30 dark:border-purple/35 shadow-md border-l-4 border-l-purple scale-[1.005]'
                          : 'border-card-border shadow-sm border-l-4 border-l-transparent bg-card hover:scale-[1.002]'
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleWeek(activeLevelIdx, week.weekNum)}
                        type="button"
                        className={`w-full p-5 flex justify-between items-center text-left transition-colors cursor-pointer border-b border-card-border ${
                          isExpanded
                            ? 'bg-purple/5 dark:bg-purple/10'
                            : 'bg-card hover:bg-section-alt/60'
                        }`}
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <span className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest shadow-sm shrink-0 whitespace-nowrap ${
                            isExpanded ? 'bg-purple text-white' : 'bg-purple/10 text-purple border border-purple/20'
                          }`}>
                            {week.weekNum}
                          </span>
                          <span className="text-xs font-bold text-navy pt-0.5 sm:pt-0">
                            {week.title}
                          </span>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-purple" /> : <ChevronDown className="w-4 h-4 text-purple" />}
                      </button>

                      {/* Accordion Body */}
                      {isExpanded && (
                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-card-border bg-section-alt/30 transition-all duration-350">
                          {/* Vocabulary / Vokabel */}
                          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-light/20 to-card dark:from-purple/5 dark:to-card border border-purple-200/20 shadow-sm flex flex-col gap-3.5 hover-lift transition-all duration-200">
                            <div className="flex items-center gap-2 pb-2.5 border-b border-card-border">
                              <span className="p-1.5 rounded-lg bg-purple/10 text-purple">
                                <BookOpen className="w-3.5 h-3.5" />
                              </span>
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">
                                Vokabel (Vocabulary / Communication Focus)
                              </span>
                            </div>
                            <ul className="flex flex-col gap-2.5 text-xs text-navy font-semibold">
                              {week.vokabel.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-purple font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Grammar / Grammatik */}
                          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/20 to-card dark:from-blue-950/10 dark:to-card border border-blue-200/20 shadow-sm flex flex-col gap-3.5 hover-lift transition-all duration-200">
                            <div className="flex items-center gap-2 pb-2.5 border-b border-card-border">
                              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                                <CheckCircle className="w-3.5 h-3.5" />
                              </span>
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500">
                                Grammatik (Grammar / Syntax Focus)
                              </span>
                            </div>
                            <ul className="flex flex-col gap-2.5 text-xs text-navy font-semibold">
                              {week.grammatik.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-blue-500 font-bold">•</span>
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
                By the end of the course program (A1 - C2), learners are expected to master these essential goals:
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
                <span className="text-xs font-semibold text-navy leading-normal">Structure logical arguments, draft well-organized texts, and follow demanding academic lectures (C1 Level)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-section-alt rounded-lg border border-card-border col-span-1 sm:col-span-2">
                <Check className="w-4.5 h-4.5 text-purple shrink-0" />
                <span className="text-xs font-semibold text-navy leading-normal">Communicate with absolute precision and fluency, adapting register to advanced professional and scientific settings (C2 Mastery)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5b. Advanced Program Objectives & Rhythms */}
      <section className="bg-card py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Advanced Framework</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">C1 & C2 Curriculum Objectives & Study Rhythm</h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Designed to take learners beyond basic correctness towards precision, stylistic control, and professional mastery.
            </p>
          </div>

          {/* Grid layout for curriculum breakdown and recommended practice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Objectives Grid */}
            <div className="lg:col-span-7 bg-section-alt border border-card-border p-6 sm:p-8 rounded-2xl flex flex-col gap-6 shadow-sm">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple">CEFR Assessment Specifications</span>
                <h3 className="text-base font-extrabold text-navy font-display uppercase tracking-wide">Language Area Objectives</h3>
              </div>

              {/* C1 vs C2 switch pills */}
              <div className="flex bg-card p-1.5 rounded-xl border border-card-border max-w-xs">
                <button
                  type="button"
                  onClick={() => setCurriculumTab('C1')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    curriculumTab === 'C1' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted hover:text-navy'
                  }`}
                >
                  C1 Advanced
                </button>
                <button
                  type="button"
                  onClick={() => setCurriculumTab('C2')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    curriculumTab === 'C2' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted hover:text-navy'
                  }`}
                >
                  C2 Mastery
                </button>
              </div>

              {/* Dynamic rendering based on active tab */}
              <div className="flex flex-col gap-4 animate-fade-in">
                {curriculumTab === 'C1' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Sprechen (Speaking)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Present structured arguments, participate in complex discussions, mediate viewpoints, and use nuanced Redemittel.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Hören (Listening)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Understand radio features, lectures, interviews, and extended discussions; identify subtle attitudes and implications.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Lesen (Reading)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Work with journalistic, academic, literary and informational texts; infer hidden meanings and argumentation structure.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Schreiben (Writing)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Write structured comments, summaries, reviews, and cohesive argumentative texts with clear paragraph architecture.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5 sm:col-span-2">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Sprachmittlung & Grammatik (Mediation & Grammar)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Summarize and transfer complex data, reach workable consensus; consolidate nominal/verbal styles, reported speech, and complex clause relationships.</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Kommunikation (Speaking)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Express complex ideas precisely, flexibly and fluently; adapt register and delivery to formal, academic, or conversational contexts.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Verständnis (Listening & Reading)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Understand long, demanding texts/speeches, including implicit meanings, irony, speaker attitudes, and specialized academic terms.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Schreiben (Writing)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Produce sophisticated, highly argued texts with stylistic control, precise vocabulary, and effective cohesive transitions.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Sprachmittlung (Mediation)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Synthesize information from multiple sources and communicate details selectively for specific target audiences and purposes.</p>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-card-border flex flex-col gap-1.5 sm:col-span-2">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple">Stil & Grammatik (Style & Grammar)</span>
                      <p className="text-[10px] text-navy-muted leading-relaxed font-semibold">Move beyond correctness to precision. Focus on complex clause architectures, nominalization, collocations, idioms, register nuances, and paraphrasing.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-card-border pt-4 text-xs font-semibold text-navy-muted">
                <strong>Evaluation:</strong> Assessed via weekly and biweekly checks, portfolio files, recorded speaking tasks, and C1/C2 mock examinations.
              </div>
            </div>

            {/* Right Column: Rhythms & Practice */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Learning Rhythm Card */}
              <div className="bg-card border border-card-border p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
                <div className="flex items-center gap-2 text-purple">
                  <Calendar className="w-4.5 h-4.5" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy">Recommended Study Rhythm</h4>
                </div>
                <ul className="flex flex-col gap-3 text-xs text-navy font-semibold font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span>3–4 lessons per week depending on learner availability</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span>Every chapter follows: Vocabulary → Input → Grammar → Output → Mediation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span>Individualized feedback logs focusing on recurring grammar & register errors</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span>Exam prep integrated starting Week 1 (intensifying in final weeks)</span>
                  </li>
                </ul>
              </div>

              {/* Recommended Additional Practice */}
              <div className="bg-card border border-card-border p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
                <div className="flex items-center gap-2 text-purple">
                  <Clock className="w-4.5 h-4.5" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy">Recommended Self-Study Practice</h4>
                </div>
                <ul className="flex flex-col gap-3 text-xs text-navy font-semibold font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span><strong>Daily Practice:</strong> 20–30 minutes of advanced input (news, podcasts, essays)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span><strong>Weekly Writing:</strong> Composing one 250–350 word structured C1/C2 text for review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span><strong>Weekly Speaking:</strong> Record a 5–10 minute presentation or argument for self-review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-purple mt-0.5">•</span>
                    <span><strong>Active Drills:</strong> Paraphrasing, synonym work, and sentence transformations</span>
                  </li>
                </ul>
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
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Alumni Reviews</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">Scorecard Results & Reviews</h2>
          </div>

          <div className="relative max-w-3xl mx-auto flex items-center gap-2 sm:gap-6">
            {/* Prev button */}
            <button
              onClick={prevReview}
              type="button"
              className="p-2 sm:p-3.5 rounded-full bg-card border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
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
                    <div className="hover-lift rounded-xl bg-card border border-card-border p-6 sm:p-8 shadow-sm">
                      <TestimonialCard testimonial={test} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextReview}
              type="button"
              className="p-2 sm:p-3.5 rounded-full bg-card border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
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
