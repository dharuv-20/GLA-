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
import LeadForm from '@/features/lead-capture/components/LeadForm';

interface FrenchCourseViewProps {
  course: Course;
  relatedCourses: Course[];
}

interface SyllabusWeek {
  weekNum: string;
  title: string;
  communication: string[];
  grammar: string[];
}

interface SyllabusLevel {
  code: string;
  name: string;
  duration: string;
  books: string[];
  slogan: string;
  badge: string;
  practicalSkills?: string[];
  weeks: SyllabusWeek[];
}

const frenchSyllabus: SyllabusLevel[] = [
  {
    code: "A1",
    name: "A1 — Beginner French (Découverte)",
    duration: "2 Months / 8 Weeks",
    books: ["Inspire 1"],
    badge: "CEFR A1",
    slogan: "Essential French vocabulary, basic grammar, everyday expressions, and simple communication.",
    practicalSkills: [
      "Introduce themselves and ask basic personal questions.",
      "Talk about family, hobbies, home, and daily routine.",
      "Order food at cafés, shop for groceries, make appointments, and ask for directions.",
      "Understand simple native audio and write short, clear messages."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "Greetings, Alphabet & Foundations",
        communication: ["Greetings & Salutations", "L'Alphabet & Pronunciation", "Numbers (0–100)", "Countries & Nationalities", "Classroom Language"],
        grammar: ["Subject Pronouns (Je, Tu, Il/Elle...)", "Auxiliary Verb Être", "Sentence Structure (SVO)", "Definite & Indefinite Articles", "Phonetic Pronunciation Basics"]
      },
      {
        weekNum: "Week 2",
        title: "Personal Identity & Professions",
        communication: ["Self-Introductions", "Personal Information Exchange", "Professions & Careers", "Languages Spoken", "Hobbies & Leisure"],
        grammar: ["Auxiliary Verb Avoir", "Regular -er Verbs Conjugation", "Gender of Nouns & Adjectives", "Basic Negation (ne... pas)", "Question Formation"]
      },
      {
        weekNum: "Week 3",
        title: "Family, Friends & Descriptions",
        communication: ["Family Members", "Friends & Social Circles", "Describing People (Physical & Character)", "Expressing Likes & Dislikes"],
        grammar: ["Possessive Adjectives (mon, ma, mes...)", "Adjective Agreement Rules", "Presentative Structures: c’est / ce sont", "Plural Forms of Nouns"]
      },
      {
        weekNum: "Week 4",
        title: "Daily Routine & Telling Time",
        communication: ["Daily Routine & Habits", "Telling Time (L'heure)", "Dates, Months & Calendar", "Scheduling Appointments"],
        grammar: ["Pronominal / Reflexive Verbs (se lever, se coucher)", "Present Tense Regularity", "Adverbs of Frequency", "Interrogatives (quel / quelle)"]
      },
      {
        weekNum: "Week 5",
        title: "Food, Dining & Shopping",
        communication: ["Food & Culinary Vocabulary", "Beverages & Drinks", "Café & Restaurant Ordering", "Supermarket Shopping & Prices"],
        grammar: ["Partitive Articles (du, de la, des)", "Quantities (beaucoup de, un peu de)", "Irregular Verbs: prendre, boire, manger", "Negation with Partitives (de / d')"]
      },
      {
        weekNum: "Week 6",
        title: "City, Directions & Transport",
        communication: ["City Exploration & Monuments", "Places in Town (banque, gare, musée)", "Asking & Giving Directions", "Public Transport Systems"],
        grammar: ["Existential 'Il y a'", "Prepositions of Place (devant, derrière, en face de)", "Imperative for Directions", "Irregular Verb Aller", "Contractions: à / au / aux / en"]
      },
      {
        weekNum: "Week 7",
        title: "Home, Neighbourhood & Leisure",
        communication: ["Home & Apartments", "Describing Neighbourhoods", "Furniture & Rooms", "Everyday Leisure Activities"],
        grammar: ["Modal Verbs: pouvoir, devoir, vouloir", "Demonstrative Adjectives (ce, cet, cette, ces)", "Prepositions of Origin (venir de)", "Introduction to Past Actions"]
      },
      {
        weekNum: "Week 8",
        title: "Clothes, Weather & DELF A1 Training",
        communication: ["Clothes & Fashion Vocabulary", "Weather Forecast (La météo)", "Casual Small Talk", "Everyday Conversational Fluency"],
        grammar: ["Passé Composé Basics with Avoir", "Irregular Past Participles", "A1 Comprehensive Consolidation", "DELF A1 Timed Mock Exam Training"]
      }
    ]
  },
  {
    code: "A2",
    name: "A2 — Elementary French (Survie)",
    duration: "2 Months / 8 Weeks",
    books: ["Inspire 2"],
    badge: "CEFR A2",
    slogan: "Communicate in familiar situations, describe experiences, discuss plans, and handle practical interactions.",
    practicalSkills: [
      "Tell structured stories and anecdotes about past experiences.",
      "Describe people, cities, and places, and make complete travel arrangements.",
      "Give advice, express personal preferences, and explain practical problems.",
      "Write practical formal and informal emails and messages.",
      "Understand everyday native audio broadcasts and video content."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "Personal Life, Studies & Work",
        communication: ["Personal Background", "Academic Studies & University", "Professional Work Life", "Daily Activity Accounts"],
        grammar: ["Passé Composé with Avoir vs Être", "Past Participle Agreement with Être", "Dr. Mrs. Vandertramp Verbs", "Time Markers (hier, la semaine dernière)"]
      },
      {
        weekNum: "Week 2",
        title: "Travel, Holidays & Accommodations",
        communication: ["Vacation & Travel Planning", "Holiday Memories", "Transportation Modes", "Hotel & Airbnb Reservations"],
        grammar: ["L'Imparfait (Formation & Stems)", "Passé Composé vs Imparfait Distinction", "Time Expressions (pendant, depuis, il y a)", "Habitual vs Punctual Past Actions"]
      },
      {
        weekNum: "Week 3",
        title: "Health, Body & Medical Advice",
        communication: ["Health, Wellness & Symptoms", "Human Body Parts", "Doctor & Pharmacy Consultations", "Giving Advice & Remedies"],
        grammar: ["Imperative with Pronouns", "Obligation Expressions (il faut + inf, devoir)", "Direct Object Pronouns (COD: le, la, les)", "Indirect Object Pronouns (COI: lui, leur)"]
      },
      {
        weekNum: "Week 4",
        title: "People, Personality & Emotions",
        communication: ["Describing Personalities", "Interpersonal Relationships", "Feelings & Emotions", "Social Etiquette"],
        grammar: ["Comparative Forms (plus... que, moins... que)", "Superlative Forms (le plus, le moins)", "Adjective Placement (BAGS rule)", "Intensifiers (tellement, très, trop)"]
      },
      {
        weekNum: "Week 5",
        title: "City Life, Housing & Neighbourhood",
        communication: ["City Living & Urban Services", "Housing Search & Real Estate", "Neighbourhood Amenities", "Post Office & Bank Services"],
        grammar: ["Adverbial Pronoun Y (Location/Destination)", "Adverbial Pronoun En (Quantity/Origin)", "Spatial Prepositions", "Relative Pronouns: qui, que, où"]
      },
      {
        weekNum: "Week 6",
        title: "Future Plans, Invitations & Opinions",
        communication: ["Future Plans & Projects", "Formal & Informal Invitations", "Organising Group Activities", "Expressing Viewpoints & Suggestions"],
        grammar: ["Futur Simple (Stems & Endings)", "Futur Proche vs Futur Simple", "Hypothetical Si-Clauses (Si + présent, futur)", "Logical Connectors", "Agreement & Disagreement Phrasing"]
      },
      {
        weekNum: "Week 7",
        title: "Media, Cinema, Books & Music",
        communication: ["Media & Journalism", "Cinema, Films & Theatre", "Books, Literature & Press", "Music & Artistic Preferences"],
        grammar: ["Double Pronoun Sequences (COD + COI)", "Reported Information & Indirect Speech Basics", "Demonstrative Pronouns (celui, celle)", "Expressing Nuanced Tastes"]
      },
      {
        weekNum: "Week 8",
        title: "Consolidation & DELF A2 Practice",
        communication: ["Comprehensive A2 Review", "Integrated Spoken Communication", "Listening Audio Drills", "DELF A2 Exam Masterclass"],
        grammar: ["A2 Grammar Synthesis & Error Audit", "DELF A2 Listening Strategy", "DELF A2 Reading Comprehension Tactics", "DELF A2 Guided Speaking & Written Tasks"]
      }
    ]
  },
  {
    code: "B1",
    name: "B1 — Intermediate French (Seuil)",
    duration: "3 Months / 12 Weeks",
    books: ["Inspire 3"],
    badge: "CEFR B1",
    slogan: "Develop greater independence: express opinions, discuss current issues, and produce structured responses.",
    practicalSkills: [
      "Express and justify opinions and actively participate in group discussions.",
      "Tell stories, deliver structured presentations, and discuss social issues.",
      "Write formal and informal emails, inquiries, and letters of complaint.",
      "Understand the main arguments in authentic French broadcasts and articles.",
      "Prepare thoroughly for official DELF B1 examination tasks."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "Opinions, Preferences & Lifestyle",
        communication: ["Expressing Personal Opinions", "Lifestyle Choices & Habits", "Defending Lifestyle Values"],
        grammar: ["Comprehensive A2 Review", "Complex Sentence Formation", "Coordination vs Subordination"]
      },
      {
        weekNum: "Week 2",
        title: "Travel Planning, Tourism & Memories",
        communication: ["Detailed Travel Planning", "Memorable Tourism Experiences", "Overcoming Travel Mishaps"],
        grammar: ["Le Plus-que-parfait Formation", "Concordance of Past Tenses (PC + Imp + PQP)", "Temporal Narrative Markers"]
      },
      {
        weekNum: "Week 3",
        title: "Work, CV & Professional Interviews",
        communication: ["Workplace Culture & Careers", "French CV & Cover Letter (Lettre de motivation)", "Job Interview Simulations"],
        grammar: ["Future Nuances (Futur Antérieur)", "Conditionnel Présent for Politeness", "Expressing Professional Goals & Intentions"]
      },
      {
        weekNum: "Week 4",
        title: "Media, Advertising & Public Opinion",
        communication: ["Media Influence & Fake News", "Advertising & Consumer Behavior", "Analyzing Editorial Stances"],
        grammar: ["Cause Connectors (puisque, étant donné que)", "Consequence Connectors (par conséquent, donc)", "Purpose Connectors (afin de, pour que + subj)"]
      },
      {
        weekNum: "Week 5",
        title: "Environment, Society & Current Affairs",
        communication: ["Ecological Challenges & Climate", "Societal Trends & Modern Family", "Current Affairs Discussion"],
        grammar: ["Introduction to Subjonctif Présent", "Verbs of Necessity (il faut que...)", "Verbs of Emotion & Doubt (douter, craindre)"]
      },
      {
        weekNum: "Week 6",
        title: "Advice & Hypothetical Scenarios",
        communication: ["Giving Constructive Advice", "Hypothetical Scenarios & Dilemmas", "Imagining Alternative Realities"],
        grammar: ["Conditionnel Présent Usage", "Si Clauses Type 2 (Si + imparfait, conditionnel)", "Polite Requests & Softening Devices"]
      },
      {
        weekNum: "Week 7",
        title: "Culture, Cinema, Books & Music",
        communication: ["French Culture, Heritage & Arts", "Cinema & French New Wave", "Literary Reviews & Book Critiques"],
        grammar: ["Relative Pronouns (dont, lequel, auquel, duquel)", "Complex Relative Clauses", "Avoiding Repetition in Discourse"]
      },
      {
        weekNum: "Week 8",
        title: "News, Information & Viewpoints",
        communication: ["Broadcast News & Press Articles", "Fact vs Opinion Analysis", "Presenting Diverse Perspectives"],
        grammar: ["Reported Speech in the Present (Discours Indirect)", "Tense Shift Rules in Indirect Speech", "Indirect Questions (demander si / ce qui)"]
      },
      {
        weekNum: "Week 9",
        title: "Complaints & Formal Communication",
        communication: ["Customer Service & Disputes", "Formal Complaints & Reclamation Letters", "Professional Email Writing"],
        grammar: ["Formal French Register & Formulas", "Diplomatic Requests (Auriez-vous l'amabilité de...)", "Pronoun Displacements & Formal Linkers"]
      },
      {
        weekNum: "Week 10",
        title: "Debates, Arguments & Concession",
        communication: ["Structured Debates on Social Issues", "Agreeing, Disagreeing & Conceding", "Building Persuasive Arguments"],
        grammar: ["Argumentative Structures", "Concession Connectors (bien que + subj, malgré)", "Opposition Connectors (alors que, tandis que)"]
      },
      {
        weekNum: "Week 11",
        title: "Presentations, Infographics & Data",
        communication: ["Delivering Structured Presentations", "Interpreting Infographics & Charts", "Synthesizing Written Data"],
        grammar: ["Discourse Structuring Connectors", "Organizing Logical Speech Flow", "Transition Strategies"]
      },
      {
        weekNum: "Week 12",
        title: "Revision & DELF B1 Timed Drills",
        communication: ["Comprehensive B1 Revision", "DELF B1 Timed Mock Examination", "Individual Diagnostic Assessment"],
        grammar: ["DELF B1 Integrated Practice (Compréhension & Production)", "Rubric Evaluation & Score Roadmap"]
      }
    ]
  },
  {
    code: "B1 Plus",
    name: "B1 Plus — Upper-Intermediate Bridge Programme",
    duration: "2 Months / 8 Weeks",
    books: ["Inspire 3 + B2 Bridge Dossier"],
    badge: "CEFR B1+",
    slogan: "Strengthen fluency, accuracy, and communication strategies while transitioning towards B2-level French.",
    practicalSkills: [
      "Develop greater fluency and structural accuracy in extended speech.",
      "Summarise, synthesize, and paraphrase authentic French texts.",
      "Handle professional phone interactions and structured presentations.",
      "Build the critical foundation needed to transition confidently to B2."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "Extended Conversations & Summaries",
        communication: ["Extended Conversations & Debates", "Speed Note-Taking from Audio", "Executive Summary Writing"],
        grammar: ["Complex Sentence Structures", "Advanced Logical Connectors", "Verb Prepositional Complements (à / de)"]
      },
      {
        weekNum: "Week 2",
        title: "Graphs, Statistics & Data Synthesis",
        communication: ["Statistical Charts & Infographics", "Interpreting Economic Data", "Describing Trends & Growth"],
        grammar: ["Comparative & Superlative Nuances", "Expressions of Quantity & Proportion (la majorité, un tiers)", "Data Synthesis Connectors"]
      },
      {
        weekNum: "Week 3",
        title: "Hypotheses & Probability Analysis",
        communication: ["Formulating Hypotheses", "Speculating on Future Outcomes", "Risk & Uncertainty Analysis"],
        grammar: ["Conditional Complex Combinations", "Subjunctive vs Indicative Contrasts", "Hypothetical Stance Construction"]
      },
      {
        weekNum: "Week 4",
        title: "Structured Opinions & Counter-Arguments",
        communication: ["Structured Opinions & Persuasion", "Thesis-Antithesis Frameworks", "Counter-Argumentation"],
        grammar: ["Complex Relative Clauses with Prepositions", "Subordinating Conjunctions of Concession", "Cause & Effect Formulations"]
      },
      {
        weekNum: "Week 5",
        title: "Telephone & Workplace Etiquette",
        communication: ["Telephone & Virtual Meeting Etiquette", "Professional Workplace Inquiries", "Handling Difficult Client Scenarios"],
        grammar: ["Formal Business Register", "Indirect Question Structures", "Reported Speech in Past Frameworks"]
      },
      {
        weekNum: "Week 6",
        title: "Presentations & Public Speaking",
        communication: ["Public Speaking & Pitch Decks", "Slide Presentation Delivery", "Engaging Audience Attention"],
        grammar: ["Discourse Markers & Sequencing", "Emphasis Devices (Mise en relief: C'est... qui/que)", "Vocal Pitch & Intonation Cadence"]
      },
      {
        weekNum: "Week 7",
        title: "Proofreading & Text Paraphrasing",
        communication: ["Text Proofreading & Self-Correction", "Paraphrasing Authentic French Texts", "Condensing Long Articles"],
        grammar: ["Syntactical Consolidation", "Lexical Precision & Synonym Banks", "Register Nuances (Courant vs Soutenu)"]
      },
      {
        weekNum: "Week 8",
        title: "B2 Bridge & Examination Training",
        communication: ["B2 Bridge Capstone Project", "DELF B1/B2 Transition Testing", "Targeted Proficiency Diagnostic"],
        grammar: ["Integrated DELF B1/B2 Tasks", "Error Analysis & Personalized Transition Roadmap"]
      }
    ]
  },
  {
    code: "B2",
    name: "B2 — Upper-Intermediate French (Avancé)",
    duration: "2 Months / 8 Weeks",
    books: ["Inspire 4"],
    badge: "CEFR B2",
    slogan: "Advanced comprehension, structured argumentation, professional writing, and confident debates.",
    practicalSkills: [
      "Participate confidently in extended academic debates and discussions.",
      "Understand complex authentic French texts, literary excerpts, and media.",
      "Deliver structured oral presentations and rigorously defend a point of view.",
      "Write formal argumentative essays with balanced thesis and conclusion.",
      "Prepare comprehensively for official DELF B2 examination tasks."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "Complex Texts & Argument Deconstruction",
        communication: ["Analyzing Complex Press Articles", "Identifying Implicit Arguments", "Critical Text Deconstruction"],
        grammar: ["Advanced Word Order & Syntactical Inversions", "Emphatic Sentence Structure", "Complex Logical Linkers (d'autant plus que)"]
      },
      {
        weekNum: "Week 2",
        title: "Professional Communication & Nominalisation",
        communication: ["Executive CV (Curriculum Vitae)", "High-Stakes Job Interviews", "Professional Synthesis Notes"],
        grammar: ["Nominalisation in Formal French", "Infinitive Clauses Replacing Subordinate Clauses", "Administrative Register Mastery"]
      },
      {
        weekNum: "Week 3",
        title: "Reviews, Criticism & Passive Structures",
        communication: ["Cultural & Literary Reviews", "Constructive Criticism & Appraisals", "Evaluating Artistic Works"],
        grammar: ["Advanced Relative Pronouns (auquel, parmi lesquels)", "Passive Voice (Voix Passive)", "Passive Substitutes (se faire, se voir)"]
      },
      {
        weekNum: "Week 4",
        title: "Social Issues, Debates & Perspectives",
        communication: ["Contemporary Social Controversies", "Public Debates on Bioethics & AI", "Analyzing Multiple Perspectives"],
        grammar: ["Subjunctive in Nuanced Dependent Clauses", "Past Subjunctive (Subjonctif Passé)", "Concession & Paradox Markers (quoique, quand bien même)"]
      },
      {
        weekNum: "Week 5",
        title: "Media, Journalism & Current Affairs",
        communication: ["Journalistic Investigations", "Investigative Press Analysis", "Reporting on International Affairs"],
        grammar: ["Reported Speech in Complex Past Tenses", "Concordance des Temps", "Nuanced Indirect Interrogation"]
      },
      {
        weekNum: "Week 6",
        title: "Complaints, Formal Letters & Persuasion",
        communication: ["Formal Grievances & Legal Claims", "Persuasive Open Letters", "Diplomatic Disagreement"],
        grammar: ["Advanced Connectors of Argumentation", "Modal Verbs with Nuanced Meaning", "Register Calibration for Public Discourse"]
      },
      {
        weekNum: "Week 7",
        title: "Presentations, Debates & Defending Position",
        communication: ["Debate Defense Before Adversaries", "Negotiation & Reaching Consensus", "Reframing Hostile Questions"],
        grammar: ["Discourse Modulation & Hedging Devices", "Reformulation Markers (en d'autres termes)", "Subtle Politeness Strategies"]
      },
      {
        weekNum: "Week 8",
        title: "Complete DELF B2 Exam Training",
        communication: ["Full-Length DELF B2 Simulation", "Oral Presentation & Jury Defense", "Final Feedback & Strategy"],
        grammar: ["DELF B2 Comprehensive Examination (Compréhension & Production)", "Score Diagnostics & Benchmark Review"]
      }
    ]
  },
  {
    code: "C1",
    name: "DALF C1 — Advanced French (Autonome)",
    duration: "12 Weeks / 3 Months",
    books: ["DALF C1 Preparation Material & Dossiers"],
    badge: "CEFR C1",
    slogan: "Advanced comprehension, written synthesis, argumentation, oral presentation, debate, and precise French.",
    practicalSkills: [
      "Master multi-document written synthesis and concise reformulation.",
      "Produce sophisticated argumentative texts with clear thesis architecture.",
      "Deliver structured oral monologues on complex socio-political issues.",
      "Engage in spontaneous debate and defend positions with nuance and precision."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "C1 Exam Orientation & Diagnostic",
        communication: ["DALF C1 Examination Architecture", "Task Types & Scoring Rubrics", "Register & Stylistic Expectations"],
        grammar: ["Advanced Discourse Organisation", "Syntactical Precision", "Diagnostic Assessment"]
      },
      {
        weekNum: "Week 2",
        title: "Advanced Listening: Lectures & Radio",
        communication: ["Interviews, Academic Lectures & Reports", "Rapid Native Audio Decoding", "Identifying Argument & Irony"],
        grammar: ["Advanced Note-Taking Techniques", "Extracting Implicit Meaning", "Attitude & Stance Recognition"]
      },
      {
        weekNum: "Week 3",
        title: "Reading: Press, Essays & Informational Texts",
        communication: ["High-Level Journalistic Press", "Academic Essays & Literature", "Main Ideas vs Supporting Details"],
        grammar: ["Inference & Subtext Analysis", "Author Stance Decoding", "Advanced Logical Connectors"]
      },
      {
        weekNum: "Week 4",
        title: "Written Synthesis (Synthèse de Documents)",
        communication: ["Multi-Document Dossier Analysis", "Comparative Evidence Selection", "Concise Reformulation (220 Words)"],
        grammar: ["Neutral Synthesis Style", "Avoiding Plagiarism / Rephrasing", "Cohesive Synthesis Connectors"]
      },
      {
        weekNum: "Week 5",
        title: "Argumentative Writing (Essai Argumenté)",
        communication: ["Developing a Balanced Thesis", "Concession & Counter-Argumentation", "Impactful Concluding Arguments"],
        grammar: ["Formal Argumentative Architecture", "Nuanced Modal Expressions", "Persuasive Rhetorical Devices"]
      },
      {
        weekNum: "Week 6",
        title: "Oral Monologue: Complex Issue",
        communication: ["Structured 10-Minute Monologue", "Problematisation of Societal Issues", "Concrete Illustrations & Examples"],
        grammar: ["Oral Discourse Markers", "Pacing & Delivery Cadence", "Logical Transition Bridges"]
      },
      {
        weekNum: "Week 7",
        title: "Oral Interaction & Jury Debate",
        communication: ["Defending Position Under Cross-Examination", "Spontaneous Nuanced Rebuttals", "Diplomatic Disagreement"],
        grammar: ["Intervention Softeners & Hedging", "Polite Debate Formulas", "Quick Cognitive Reformulation"]
      },
      {
        weekNum: "Week 8",
        title: "Grammar for Absolute Precision",
        communication: ["Stylistic Elegance in Writing", "Avoiding Syntactical Ambiguity", "Nuanced Modal Registers"],
        grammar: ["Subjunctive & Conditional Past Nuances", "Complex Relative Structures", "Temporal Concordance in Mastery"]
      },
      {
        weekNum: "Week 9",
        title: "Lexical Precision & Register Shifts",
        communication: ["Collocations & Francophone Idioms", "Formal vs Neutral Registers", "Domain-Specific Terminology"],
        grammar: ["Style Nominal (Nominalisation)", "Elevated Vocabulary Banks", "Semantic Nuance Calibration"]
      },
      {
        weekNum: "Week 10",
        title: "Integrated Mediation & Audience Adaptation",
        communication: ["Summarising Complex Information", "Reformulating for Diverse Audiences", "Facilitating Cross-Cultural Consensus"],
        grammar: ["Mediation Discourse Tools", "Paraphrasing Strategies", "Synthesizing Conflicting Data"]
      },
      {
        weekNum: "Week 11",
        title: "Full DALF C1 Timed Practice",
        communication: ["Timed Comprehension & Synthesis Simulation", "Full Argumentative Essay Under Pressure", "Oral Presentation & Debate"],
        grammar: ["Time Management Calibration", "Exam Rubric Optimization", "Error Profile Audit"]
      },
      {
        weekNum: "Week 12",
        title: "Final C1 Consolidation & Mock Exam",
        communication: ["Final Comprehensive DALF C1 Mock Exam", "Individual Examiner Diagnostic", "Target Scorecard Optimization"],
        grammar: ["Personal Error Rectification", "Fluency & Pronunciation Polish", "Final Certification Strategy"]
      }
    ]
  },
  {
    code: "C2",
    name: "DALF C2 — Mastery-Level French (Maîtrise)",
    duration: "12 Weeks / 3 Months",
    books: ["DALF C2 Master Dossier & Academic Press"],
    badge: "CEFR C2",
    slogan: "Language mastery, precision, nuance, critical analysis, sophisticated writing, and spontaneous interaction.",
    practicalSkills: [
      "Understand long, natural speech with rapid delivery and take accurate compte rendu notes.",
      "Develop coherent 700+ word synthesis texts based on multi-document dossiers.",
      "Master rhetorical organisation for editorials, reports, and academic speeches.",
      "Defend complex theses before a jury with spontaneous challenge resolution."
    ],
    weeks: [
      {
        weekNum: "Week 1",
        title: "C2 Exam Orientation & Mastery Diagnostic",
        communication: ["DALF C2 Expectations & Philosophy", "Precision & Nuance Criteria", "Register & Stylistic Standards"],
        grammar: ["Diagnostic Baseline Evaluation", "Advanced Discourse Architecture", "Strategy Optimization"]
      },
      {
        weekNum: "Week 2",
        title: "Advanced Audio & Oral Compte Rendu",
        communication: ["Long Natural Native Speech Decoding", "Rapid Delivery Note-Taking", "Structured Compte Rendu Delivery"],
        grammar: ["Oral Synthesis Hierarchy", "Extracting Nuance & Irony", "Spoken Delivery Polish"]
      },
      {
        weekNum: "Week 3",
        title: "Document Dossier: 700+ Word Synthesis",
        communication: ["Multi-Source Evidence Extraction", "Developing a Coherent 700+ Word Text", "Thematic Problem Identification"],
        grammar: ["High-Level Synthesis Architecture", "Stylistic Control & Unity", "Cohesion Markers"]
      },
      {
        weekNum: "Week 4",
        title: "Academic, Professional & Public Writing",
        communication: ["Articles, Editorials & Whitepapers", "Executive Reports & Keynote Speeches", "Audience Rhetorical Engagement"],
        grammar: ["Rhetorical Figures & Tropes", "Sophisticated Syntactical Architecture", "Tone Modulation"]
      },
      {
        weekNum: "Week 5",
        title: "Nuance, Modality & Connotation",
        communication: ["Idiomatic & Colloquial Register Nuances", "Hedging, Understatement & Irony", "Deciphering Implied Meaning"],
        grammar: ["Advanced Modality Operators", "Connotative Vocabulary Selection", "Stylistic Polishing"]
      },
      {
        weekNum: "Week 6",
        title: "Oral Development from a Problematic Issue",
        communication: ["Problematisation of Abstract Concepts", "Structured Personal Philosophical Stance", "Concrete Counterpoints"],
        grammar: ["Spontaneous Thought Organisation", "Sophisticated Connectors", "Cadenced Rhetorical Delivery"]
      },
      {
        weekNum: "Week 7",
        title: "Spontaneous Debate with the Jury",
        communication: ["High-Stakes Jury Interaction", "Spontaneous Reformulation of Objections", "Defending Complex Theses with Persuasion"],
        grammar: ["Instant Rebuttal Framing", "Diplomatic De-escalation", "Nuanced Concession Phrasing"]
      },
      {
        weekNum: "Week 8",
        title: "Final DALF C2 Mock Cycle & Review",
        communication: ["3h 30m Written Examination Simulation", "1h Prep + 30m Oral Jury Defense", "Comprehensive Examiner Feedback"],
        grammar: ["Complete Performance Scorecard", "Individual Weakness Rectification", "Mastery Certification Seal"]
      }
    ]
  }
];

export default function FrenchCourseView({ course, relatedCourses }: FrenchCourseViewProps) {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({ "0-Week 1": true, "0-Week 2": true });
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [assessmentTab, setAssessmentTab] = useState<'C1' | 'C2'>('C1');

  const activeLevel = frenchSyllabus[activeLevelIdx];

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

  const weeklyLearningCycle = [
    { step: "01", name: "Vocabulary", desc: "Thematic Lexical Acquisition" },
    { step: "02", name: "Listening", desc: "Guided Native Comprehension" },
    { step: "03", name: "Grammar Discovery", desc: "Inductive Rule Exploration" },
    { step: "04", name: "Speaking", desc: "Active Oral Immersion" },
    { step: "05", name: "Reading", desc: "Authentic Text Scanning" },
    { step: "06", name: "Writing", desc: "Structured Composition" },
    { step: "07", name: "Pronunciation", desc: "Phonetic Stress & Cadence" },
    { step: "08", name: "Cultural Activity", desc: "Francophone World Immersion" },
    { step: "09", name: "Review & Test", desc: "Consolidation Diagnostics" }
  ];

  const weeklyTeachingFormat = [
    { day: "Day 1", title: "Vocabulary & Listening", desc: "Introduce new thematic vocabulary and develop listening comprehension through guided authentic audio exercises." },
    { day: "Day 2", title: "Grammar & Exercises", desc: "Explore structural grammar concepts inductively and consolidate usage through guided applied drills." },
    { day: "Day 3", title: "Speaking & Pronunciation", desc: "Develop spontaneous oral communication, active conversational fluency, and phonetic mouth positioning." },
    { day: "Day 4", title: "Reading & Writing", desc: "Practise analytical reading comprehension, extract core arguments, and compose structured written responses." },
    { day: "Day 5", title: "Conversation & Assessment", desc: "Consolidate learning through live debates, weekly revision checklists, and objective diagnostic tests." }
  ];

  const delfPrepCards = [
    {
      level: "DELF A1",
      tag: "Breakthrough (Découverte)",
      focus: ["Introductions, greetings, and everyday personal conversations.", "Short practical messages, postcards, and simple emails.", "Basic listening comprehension of everyday native phrases.", "Basic reading comprehension for signs, menus, and notices."]
    },
    {
      level: "DELF A2",
      tag: "Elementary (Survie)",
      focus: ["Everyday communication in shops, transit, and social services.", "Short personal narratives, holiday accounts, and past experiences.", "Practical writing of invitations, reservations, and thank-you notes.", "Guided speaking activities and real-life situational roleplays."]
    },
    {
      level: "DELF B1",
      tag: "Independent (Seuil)",
      focus: ["Expressing and justifying personal opinions in debates.", "Structured writing of formal letters, complaints, and articles.", "Understanding longer texts and authentic media broadcasts.", "Discussion and presentation skills on contemporary social issues."]
    },
    {
      level: "DELF B2",
      tag: "Vantage (Avancé)",
      focus: ["Argumentative essay writing with balanced thesis and conclusion.", "Complex comprehension of socio-cultural debates and articles.", "Formal debate, defense of point of view, and negotiation.", "Structured oral presentations with logical transitions and nuance."]
    }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden text-navy bg-white dark:bg-[#020c1b] transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="bg-[#00122E] dark:bg-[#010814] text-white min-h-screen sm:min-h-0 py-16 sm:py-20 lg:py-24 border-b border-card-border relative overflow-hidden transition-colors duration-300 flex items-center justify-center">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-40 dark:opacity-25 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#00122E] via-[#00122E]/80 to-[#00122E]/20 dark:from-[#010814] dark:via-[#010814]/80 dark:to-[#010814]/20 z-10"></div>
          <img src="/images/bg.svg" alt="French Program Background" className="w-full h-full object-cover object-center" />
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
                  DELF A1–B2 • DALF C1–C2 • TEF / TCF Canada Prep
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                  Inspire French Series
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                French Language Courses — Learn, Grow, Go Global
              </h1>

              <div className="p-3.5 bg-gradient-to-r from-purple/30 via-slate-800/60 to-blue-900/30 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold text-slate-200">
                🎯 <strong className="text-white">Empowering Communication. Building Global Opportunities.</strong>
              </div>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Learn French with confidence through structured learning, practical communication, and examination-focused preparation at The Global Language Academy. Our French language courses are designed to help learners develop strong speaking, listening, reading, writing, pronunciation, grammar, and vocabulary skills for real-world communication and global opportunities.
              </p>

              {/* 4 Why Choose Us Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0 pt-1">
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Structured Learning</strong>
                    <span className="text-[11px] text-slate-300">Progressive syllabus from A1 to B2, plus DALF C1 & C2.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Practical Communication</strong>
                    <span className="text-[11px] text-slate-300">Communicate confidently in everyday & corporate French.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Exam Preparation</strong>
                    <span className="text-[11px] text-slate-300">Official DELF A1-B2 & DALF C1-C2 examination tasks.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3 text-left">
                  <div className="p-1.5 rounded-lg bg-purple/20 text-purple-300 shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs text-white block font-display">Global Opportunities</strong>
                    <span className="text-[11px] text-slate-300">Education abroad & Canada PR points (TEF/TCF CLB 7+).</span>
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
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Duration</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block">2 to 12 Months</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5 sm:p-3.5 backdrop-blur-sm">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-purple/35 text-purple-300 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Batch Size</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white mt-0.5 block">5-7 Students Max</span>
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
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-tr from-purple/30 via-white/5 to-purple/10 border border-white/10 shadow-[0_0_50px_rgba(75,36,94,0.3)]">
                <LeadForm defaultCourse="french-language" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-slate-50 dark:bg-[#020c1b] border-b border-card-border py-8 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-base sm:text-lg font-bold font-display italic text-navy">
            “La langue française est une porte ouverte sur le monde et un passeport vers l&apos;avenir.”
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
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Programme Description</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              French Language Course Curriculum & Goals
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The French Language Course at The Global Language Academy is a structured and engaging programme designed for beginner to advanced learners.
              The syllabus follows the progression of the <strong>Inspire French series</strong> while retaining the practical, week-by-week structure of modern European language standards. French content is organised around practical French grammar and communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Course Goals */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-[#010814]/60 border border-card-border p-6 sm:p-8 rounded-3xl flex flex-col gap-6 shadow-sm">
              <div className="flex items-center gap-2 text-purple font-bold">
                <Target className="w-5 h-5 text-purple" />
                <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide">
                  Course Goals & Expected Competencies
                </h3>
              </div>
              <p className="text-xs text-navy-muted leading-relaxed">
                By completing the relevant stages of the programme, learners work towards the following core objectives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Communicate confidently in everyday French conversations.",
                  "Understand common French expressions, idioms, and dialogues.",
                  "Develop accurate pronunciation, mouth positioning, and sentence formation.",
                  "Read and write progressively more complex French texts and essays.",
                  "Participate actively in real-life conversations, presentations, and debates.",
                  "Build cultural awareness and prepare progressively for DELF A1–B2 examinations."
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
                All learning materials are organised around the official Inspire series accepted internationally:
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  { title: "Inspire 1", level: "A1 Beginner", desc: "Core coursebook, phonetics & basic grammar" },
                  { title: "Inspire 2", level: "A2 Elementary", desc: "Daily situations, past narratives & dialogues" },
                  { title: "Inspire 3", level: "B1 Intermediate", desc: "Complex discourse, subjunctive & current affairs" },
                  { title: "Inspire 4", level: "B2 Upper-Intermediate", desc: "Argumentation, synthesis & formal debate" }
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
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy">Supplementary Media Included:</span>
                <ul className="grid grid-cols-2 gap-2 text-xs text-navy font-semibold">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> Workbook & cahier</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> Audio & video kits</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> DELF exam papers</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple" /> DALF C1/C2 dossiers</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEVEL-BY-LEVEL WEEKLY CURRICULUM */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Comprehensive Syllabus</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              French Language Course Levels & Week-by-Week Curriculum
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Explore the week-by-week curriculum from A1 to B2, plus DALF C1 and C2 advanced programmes. Click on the level selector tabs below to inspect the weekly topics.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            
            {/* Level Selector Pills */}
            <div className="flex flex-col gap-3 max-w-3xl mx-auto w-full">
              <div className="flex flex-wrap items-center justify-between bg-white dark:bg-[#010814] p-1.5 rounded-2xl border border-card-border shadow-sm gap-1">
                {frenchSyllabus.map((lvl, index) => (
                  <button
                    key={lvl.code}
                    onClick={() => setActiveLevelIdx(index)}
                    type="button"
                    className={`flex-1 min-w-[75px] py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
                      activeLevelIdx === index
                        ? 'bg-purple text-white shadow-sm'
                        : 'text-navy-muted hover:text-navy hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {lvl.code === "B1 Plus" ? "B1+" : lvl.code}
                  </button>
                ))}
              </div>
              
              <div className="text-center">
                <span className="text-[10px] sm:text-xs font-bold text-navy-muted bg-white dark:bg-[#010814] px-4 py-1.5 rounded-full border border-card-border inline-flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse"></span>
                  Selected: <strong className="text-navy">{activeLevel.name}</strong> • Duration: <strong className="text-navy">{activeLevel.duration}</strong>
                </span>
              </div>
            </div>

            {/* Active Level Content Container */}
            <div className="flex flex-col gap-6 animate-fade-in">
              
              {/* Level Details Banner */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#010814] border border-card-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple/15 text-purple text-[10px] font-extrabold uppercase tracking-wider">
                      {activeLevel.badge}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Core Coursebook: <strong>{activeLevel.books.join(", ")}</strong></span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy">{activeLevel.name}</h3>
                </div>
                <div className="flex flex-col gap-1 text-left sm:text-right bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-card-border shrink-0">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Recommended Timeline</span>
                  <span className="text-xs font-bold text-navy">⏳ {activeLevel.duration}</span>
                </div>
              </div>

              {/* Level Slogan */}
              <div className="p-4 rounded-2xl bg-purple/10 border border-purple/20 text-center shadow-xs">
                <span className="text-xs font-bold text-purple uppercase tracking-wider">
                  🎯 {activeLevel.slogan}
                </span>
              </div>

              {/* Week-by-Week Interactive Accordion */}
              <div className="flex flex-col gap-3.5">
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
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#010814]/60 hover:bg-slate-100 dark:hover:bg-[#010814] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-purple text-white rounded-lg text-xs font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                            {week.weekNum}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-navy font-display">
                            {week.title}
                          </h4>
                        </div>
                        <div className="p-1 rounded-full bg-white dark:bg-[#00122E] border border-card-border text-navy-muted">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-[#00122E] border-t border-card-border">
                          {/* Vocabulary and Communication */}
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple flex items-center gap-1.5">
                              <MessageCircle className="w-3.5 h-3.5" />
                              Vocabulary and Communication
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {week.communication.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple/10 text-purple text-xs font-semibold border border-purple/15 shadow-2xs"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple"></span>
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Grammar and Language */}
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Grammar & Language Focus
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {week.grammar.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20 shadow-2xs"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Practical Skills Footer */}
              {activeLevel.practicalSkills && activeLevel.practicalSkills.length > 0 && (
                <div className="p-6 rounded-3xl bg-white dark:bg-[#010814] border border-card-border flex flex-col gap-3.5 shadow-sm mt-2">
                  <div className="flex items-center gap-2 text-purple font-bold">
                    <Sparkles className="w-4 h-4 text-purple" />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy font-display">
                      Practical Skills Acquired by End of {activeLevel.code}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLevel.practicalSkills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-card-border text-xs font-medium text-navy">
                        <Check className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* TEACHING METHOD & ASSESSMENT */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Pedagogy & Methodology</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Teaching Method and Assessment Framework
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Our teaching methodology follows a structured learning cycle that integrates vocabulary acquisition, auditory decoding, grammar discovery, oral expression, pronunciation tuning, and continuous assessment.
            </p>
          </div>

          {/* 9-Step Learning Cycle Visual Roadmap */}
          <div className="bg-slate-50 dark:bg-[#010814]/60 p-6 sm:p-8 rounded-3xl border border-card-border shadow-sm">
            <div className="text-center mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple">The GLA Weekly Learning Cycle</span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-navy mt-1">
                9-Phase Integrated Skill Progression
              </h3>
              <p className="text-xs text-navy-muted mt-1 max-w-2xl mx-auto">
                Vocabulary → Listening → Grammar Discovery → Speaking → Reading → Writing → Pronunciation → Cultural Activity → Review/Test
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2.5 text-center">
              {weeklyLearningCycle.map((item, idx) => (
                <div key={idx} className="p-3 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col items-center justify-between gap-1.5 shadow-xs hover-lift transition-all">
                  <span className="text-[10px] font-black text-purple bg-purple/10 w-7 h-7 rounded-full flex items-center justify-center border border-purple/20">
                    {item.step}
                  </span>
                  <strong className="text-xs font-bold text-navy font-display">{item.name}</strong>
                  <span className="text-[9px] text-navy-muted leading-tight">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Day Teaching Format Cards */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-navy font-display uppercase tracking-wide text-center">
              Recommended Weekly Teaching Format (Day 1 — Day 5)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {weeklyTeachingFormat.map((fmt, idx) => (
                <div key={idx} className="p-5 bg-slate-50 dark:bg-[#010814]/60 rounded-2xl border border-card-border flex flex-col gap-2.5 hover-lift transition-all shadow-xs">
                  <span className="px-2.5 py-1 bg-purple text-white rounded-lg text-[10px] font-extrabold uppercase tracking-wider w-fit shadow-2xs">
                    {fmt.day}
                  </span>
                  <h4 className="text-xs font-extrabold text-navy mt-1 font-display">{fmt.title}</h4>
                  <p className="text-[11px] text-navy-muted leading-relaxed font-sans">{fmt.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DELF EXAMINATION PREPARATION */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Diplôme Exam Prep</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              DELF Examination Preparation (A1 — B2)
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              The programme embeds targeted preparation for DELF A1, A2, B1, and B2 examination tasks as integral phases of the corresponding course levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {delfPrepCards.map((card, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-[#00122E] rounded-3xl border border-card-border shadow-sm flex flex-col justify-between gap-5 hover-lift">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-black font-display text-navy">{card.level}</span>
                    <Award className="w-5 h-5 text-purple" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple bg-purple/10 px-2.5 py-0.5 rounded-full border border-purple/20 block w-fit mb-4">
                    {card.tag}
                  </span>
                  
                  <ul className="flex flex-col gap-2.5">
                    {card.focus.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-navy font-semibold">
                        <Check className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-card-border text-[10px] font-bold text-navy-muted uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple" />
                  <span>Aligned with official CIEP / FEI rubrics</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DALF C1 & C2 ASSESSMENT STRUCTURE & CYCLE */}
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">DALF Framework</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              DALF C1 & C2 Assessment Structure & Teaching Cycle
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed">
              Designed for high-level academic, professional, and diplomatic fluency, our DALF preparation programmes focus on rigorous synthesis, debate, and advanced stylistic control.
            </p>
          </div>

          {/* Assessment Structure Comparison */}
          <div className="bg-slate-50 dark:bg-[#010814]/60 p-6 sm:p-8 rounded-3xl border border-card-border shadow-sm">
            
            {/* Pill Switch */}
            <div className="flex bg-white dark:bg-[#00122E] p-1.5 rounded-xl border border-card-border max-w-xs mx-auto mb-8 shadow-xs">
              <button
                type="button"
                onClick={() => setAssessmentTab('C1')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  assessmentTab === 'C1' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted hover:text-navy'
                }`}
              >
                DALF C1 Structure
              </button>
              <button
                type="button"
                onClick={() => setAssessmentTab('C2')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  assessmentTab === 'C2' ? 'bg-purple text-white shadow-sm' : 'text-navy-muted hover:text-navy'
                }`}
              >
                DALF C2 Structure
              </button>
            </div>

            {assessmentTab === 'C1' ? (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col gap-2 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Épreuve 1</span>
                    <h4 className="text-sm font-bold text-navy font-display">Listening Comprehension</h4>
                    <p className="text-xs text-navy-muted">Duration: <strong>40 minutes</strong> • Marks: <strong>25/100</strong></p>
                    <span className="text-[10px] text-slate-500 font-semibold leading-relaxed">Interviews, academic lectures, radio reports & attitude decoding.</span>
                  </div>
                  <div className="p-5 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col gap-2 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Épreuve 2</span>
                    <h4 className="text-sm font-bold text-navy font-display">Reading Comprehension</h4>
                    <p className="text-xs text-navy-muted">Duration: <strong>50 minutes</strong> • Marks: <strong>25/100</strong></p>
                    <span className="text-[10px] text-slate-500 font-semibold leading-relaxed">Press articles, literary essays & informational dossiers.</span>
                  </div>
                  <div className="p-5 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col gap-2 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Épreuve 3</span>
                    <h4 className="text-sm font-bold text-navy font-display">Written Production</h4>
                    <p className="text-xs text-navy-muted">Duration: <strong>2h 30m</strong> • Marks: <strong>25/100</strong></p>
                    <span className="text-[10px] text-slate-500 font-semibold leading-relaxed">Multi-document synthesis & structured argumentative essay.</span>
                  </div>
                  <div className="p-5 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col gap-2 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Épreuve 4</span>
                    <h4 className="text-sm font-bold text-navy font-display">Oral Production</h4>
                    <p className="text-xs text-navy-muted">Duration: <strong>30 mins</strong> (1h prep) • Marks: <strong>25/100</strong></p>
                    <span className="text-[10px] text-slate-500 font-semibold leading-relaxed">Structured monologue on complex issue followed by jury debate.</span>
                  </div>
                </div>

                <div className="p-4 bg-purple/10 border border-purple/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-navy text-center sm:text-left">
                  <span>📊 Total Score: <strong>100 Marks</strong> • Minimum Pass Mark: <strong>50/100</strong></span>
                  <span className="text-rose-600 dark:text-rose-400">⚠️ Score below 5/25 in any individual component is eliminatory</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col gap-2.5 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Épreuve 1 (Compréhension & Production Écrites)</span>
                    <h4 className="text-base font-bold text-navy font-display">Written Paper (Synthesis & Production)</h4>
                    <p className="text-xs text-navy-muted">Duration: <strong>3 hours 30 minutes</strong> • Marks: <strong>50/100</strong></p>
                    <p className="text-xs text-navy font-semibold leading-relaxed mt-1">
                      Based on a multi-document dossier and requiring a structured text (article, editorial, report) of at least 700 words demonstrating complete rhetorical and stylistic mastery.
                    </p>
                  </div>
                  <div className="p-6 bg-white dark:bg-[#00122E] rounded-2xl border border-card-border flex flex-col gap-2.5 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple">Épreuve 2 (Compréhension & Production Orales)</span>
                    <h4 className="text-base font-bold text-navy font-display">Oral Paper (Compte Rendu & Jury Debate)</h4>
                    <p className="text-xs text-navy-muted">Duration: <strong>30 minutes</strong> (1 hour preparation) • Marks: <strong>50/100</strong></p>
                    <p className="text-xs text-navy font-semibold leading-relaxed mt-1">
                      Includes an accurate compte rendu from long natural native speech, structured personal development from a problematic issue, and a spontaneous debate with the jury.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-purple/10 border border-purple/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-navy text-center sm:text-left">
                  <span>📊 Total Score: <strong>100 Marks</strong> • Minimum Pass Mark: <strong>50/100</strong></span>
                  <span className="text-rose-600 dark:text-rose-400">⚠️ Score below 10/50 in either examination component is eliminatory</span>
                </div>
              </div>
            )}

            {/* Important Examination Note Callout */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-navy-muted leading-relaxed">
                <strong className="text-navy">Important examination note:</strong> These assessment details are reproduced from the course brochure. Before publishing or registering, candidates should verify the timings, scoring, and qualifying requirements against current official France Éducation international (FEI) specifications.
              </p>
            </div>

          </div>

          {/* Master Pedagogy: Teaching Cycle for DALF C1 & C2 */}
          <div className="bg-slate-50 dark:bg-[#010814]/60 p-6 sm:p-8 rounded-3xl border border-card-border shadow-sm">
            <div className="text-center mb-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple">Master Pedagogy</span>
              <h3 className="text-base sm:text-lg font-bold font-display text-navy mt-1">
                Recommended Weekly Teaching Cycle for DALF C1 and C2
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-2">
              {[
                "Authentic Input",
                "Comprehension Strategy",
                "Vocabulary / Lexical Precision",
                "Grammar in Context",
                "Speaking / Interaction",
                "Writing / Synthesis",
                "Mediation / Reformulation",
                "Exam Task",
                "Feedback & Correction"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-white dark:bg-[#00122E] rounded-xl border border-card-border text-xs font-bold text-navy shadow-xs">
                    {step}
                  </span>
                  {idx < 8 && <span className="text-purple font-bold">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Reference Structure & Course Planning */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#010814]/60 border border-card-border flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-2 text-purple font-bold">
              <Calendar className="w-5 h-5 text-purple" />
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy font-display">
                Reference Structure and Course Planning
              </h4>
            </div>
            <p className="text-xs text-navy-muted leading-relaxed">
              The French syllabus preserves the reference syllabus&apos;s overall progression and durations: <strong>A1 (8 weeks)</strong>, <strong>A2 (8 weeks)</strong>, <strong>B1 (12 weeks)</strong>, <strong>B1 Plus (8 weeks)</strong>, <strong>B2 (8 weeks)</strong>. The DALF C1 and C2 programmes are presented separately as advanced examination-preparation courses, each with a recommended duration of <strong>12 weeks</strong>.
            </p>
            <span className="text-[11px] text-slate-500 font-semibold italic">
              *The stated durations are planning recommendations. Actual learning progress may depend on learners&apos; starting proficiency, attendance, practice, and individual learning needs.
            </span>
          </div>

        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS CAROUSEL */}
      {course.testimonials && course.testimonials.length > 0 && (
        <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">Verified Student Outcomes</span>
              <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
                DELF & TEF Canada Scorecards & Reviews
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
      <section className="bg-white dark:bg-[#00122E] py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-tr from-[#00122E] via-[#092b5a] to-[#00122E] text-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest bg-purple/40 text-purple-200 px-3.5 py-1 rounded-full border border-purple-300/30 w-fit">
                  Enrolment & Admissions
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white leading-tight">
                  Ready to Begin Your French Journey? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hero via-purple-200 to-blue-400">
                    YOUR SUCCESS. OUR COMMITMENT.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Enrol at The Global Language Academy and take the first step towards expanding your communication skills and global opportunities with French. Our programmes combine structured learning, focused examination preparation, practical communication, and expert guidance.
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
                    <strong>Academy Campus:</strong> 3rd Floor, Plot No. 94, PKT-10, Dwarka Sector 13, Opposite Metro Station, Near Radisson Blu Hotel, Delhi – 110078, India.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/919217999511?text=Hi%20GLA,%20I%20am%20interested%20in%20the%20French%20Language%20Course.%20Please%20share%20batch%20timings%20and%20fee%20structure."
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

      {/* WEBSITE CONTENT AND PROGRAMME DISCLAIMER */}
      <section className="bg-slate-50 dark:bg-[#020c1b] py-8 border-b border-card-border transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] text-navy-muted leading-relaxed font-sans">
            <strong>Website Content and Programme Disclaimer:</strong> The French course syllabus and durations presented here are based on the course material supplied by The Global Language Academy. The DELF A1–B2 and DALF C1–C2 sections describe preparation programmes and recommended course plans. They should not be interpreted as a guarantee of examination results or as a claim that the academy issues official DELF or DALF diplomas. The course brochure states that the syllabus is deliberately DALF-led for the advanced C1 and C2 preparation programmes and is not an official FEI curriculum. Official DALF C1 and C2 diplomas are independent certifications aligned with the Common European Framework of Reference for Languages (CEFR). Course availability, batch timings, fees, and other enrolment details should be confirmed directly with The Global Language Academy.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-white dark:bg-[#00122E] text-navy py-16 sm:py-24 border-b border-card-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Questions Answered</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Frequently Asked Questions About French
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={course.faqs || []} />
          </div>
        </div>
      </section>

      {/* RELATED COURSES */}
      <section className="bg-slate-50 dark:bg-[#020c1b] text-navy py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">Explore More Programs</span>
            <h2 className="text-3xl font-extrabold font-display text-navy tracking-tight">
              Other Language Courses at GLA
            </h2>
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
