import { Course, FacultyMember, Testimonial, FAQItem, StudentResult, ServiceItem } from '../types';

export const facultyList: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Harshita",
    role: "Lead German Language Trainer",
    avatar: { src: "/images/faculty/harshita.jpg", alt: "Harshita - German Language Trainer", width: 300, height: 300 },
    credentials: [
      "Diploma in German Language",
      "3+ Years Dedicated Teaching Experience",
      "Goethe & CEFR Exam Preparation Specialist"
    ],
    bio: "Harshita specializes in interactive spoken German, active grammar immersion, and comprehensive exam preparation from A1 to advanced levels."
  }
];

export const testimonialsList: Testimonial[] = [
  {
    id: "test-1",
    authorName: "Rohit Sen",
    authorAvatar: { src: "", alt: "Rohit Sen", width: 80, height: 80 },
    ratingStars: 5,
    quote: "GLA made German language study simple and intuitive. I cleared my Goethe B2 exam on my first attempt and secured admission for my Master's at the Technical University of Munich!",
    outcomeTag: "Passed Goethe B2 (Munich Admits)"
  },
  {
    id: "test-2",
    authorName: "Dr. Ananya Mehta",
    authorAvatar: { src: "", alt: "Dr. Ananya Mehta", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Balancing a demanding hospital schedule with IELTS prep was tough. GLA's flexible timings and targeted writing diagnostic feedback helped me achieve an overall 8.0 Band for my UK GMC registration.",
    outcomeTag: "IELTS Band 8.0 (UK Medical)"
  },
  {
    id: "test-3",
    authorName: "Pooja Deshmukh",
    authorAvatar: { src: "", alt: "Pooja Deshmukh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The French DELF B2 training was structured and intensive. The daily conversational sessions and TEF Canada exam strategies gave me the extra 50 CRS points I needed for my Canada PR nomination.",
    outcomeTag: "DELF B2 & Canada PR Points"
  },
  {
    id: "test-4",
    authorName: "Kunal Sharma",
    authorAvatar: { src: "", alt: "Kunal Sharma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Passed JLPT N3 with 92% accuracy! The Kanji memory techniques, vocabulary mnemonics, and listening audio drills at GLA helped me clear my technical interview with a Tokyo software firm.",
    outcomeTag: "JLPT N3 (Tokyo IT Placement)"
  },
  {
    id: "test-5",
    authorName: "Devansh Dixit",
    authorAvatar: { src: "", alt: "Devansh Dixit", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 84/90 in my PTE Academic exam! The AI mock assessments and voice pitch coaching were identical to the real Pearson software. Got my Australian Skilled Migration PR invite within weeks.",
    outcomeTag: "Scored 84/90 PTE (Australia PR)"
  },
  {
    id: "test-6",
    authorName: "Sneha Mukherjee",
    authorAvatar: { src: "", alt: "Sneha Mukherjee", width: 80, height: 80 },
    ratingStars: 5,
    quote: "From zero German knowledge (A1) to clearing B1 in 5 months. GLA's trainers prepared me thoroughly for the Frankfurt hospital interview and guided my complete Ausbildung visa documentation.",
    outcomeTag: "German B1 & Nursing Ausbildung"
  },
  {
    id: "test-7",
    authorName: "Vikram Malhotra",
    authorAvatar: { src: "", alt: "Vikram Malhotra", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Spoken English and Corporate Communication sessions completely eliminated my hesitation. The mock debates, presentations, and email etiquette coaching helped me get promoted to Team Lead at an MNC.",
    outcomeTag: "Promoted to Team Lead (MNC)"
  },
  {
    id: "test-8",
    authorName: "Rohan Verma",
    authorAvatar: { src: "", alt: "Rohan Verma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The small batch size (6 students) meant the trainer corrected my pronunciation every single day. I cleared Goethe A1 and A2 with 94+ marks on first attempts. Highly recommend GLA for German!",
    outcomeTag: "Goethe A2 (94% Score)"
  },
  {
    id: "test-9",
    authorName: "Meera Iyer",
    authorAvatar: { src: "", alt: "Meera Iyer", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I started French from scratch. The trainer's patience and active speaking exercises helped me clear DELF A2 within 3 months and now I am comfortably preparing for B1.",
    outcomeTag: "DELF A2 First Attempt"
  },
  {
    id: "test-10",
    authorName: "Amanpreet Singh",
    authorAvatar: { src: "", alt: "Amanpreet Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I was stuck at 6.5 in IELTS Writing for months. GLA's essay blueprints and 1-on-1 feedback broke my plateau, pushing my score to Band 8.0 in Speaking and 7.5 in Writing (CLB 9 achieved!).",
    outcomeTag: "CLB 9 Achieved (IELTS 7.5+)"
  },
  {
    id: "test-11",
    authorName: "Tanvi Patil",
    authorAvatar: { src: "", alt: "Tanvi Patil", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Learning Japanese script felt overwhelming at first, but GLA's Hiragana and Katakana charts with interactive drills made it enjoyable. Cleared JLPT N5 with top marks in the Delhi center.",
    outcomeTag: "JLPT N5 Cleared (Top Marks)"
  },
  {
    id: "test-12",
    authorName: "Rahul Nair",
    authorAvatar: { src: "", alt: "Rahul Nair", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 82/90 overall in PTE Academic! The computer testing lab at GLA and real-time AI scoring gave me immense confidence on test day. Cleared my target in just 25 days of preparation.",
    outcomeTag: "PTE 82/90 (25-Day Prep)"
  },
  {
    id: "test-13",
    authorName: "Priya Raghavan",
    authorAvatar: { src: "", alt: "Priya Raghavan", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I used to feel self-conscious speaking English in public and during client calls. The voice modulation exercises and friendly environment at GLA gave me lifelong conversational confidence.",
    outcomeTag: "Public Speaking Fluency"
  },
  {
    id: "test-14",
    authorName: "Siddharth Joshi",
    authorAvatar: { src: "", alt: "Siddharth Joshi", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Cleared Goethe B2 exam and got my German Employment Visa stamped! GLA's specialized technical vocabulary coaching and Goethe mock simulations were invaluable for my automotive engineering role in Stuttgart.",
    outcomeTag: "Goethe B2 & Stuttgart Job Visa"
  }
];

export const studentResultsList: StudentResult[] = [
  {
    id: "res-1",
    studentName: "Rohit Sen",
    courseName: "German B2 Intensive",
    scoreLabel: "Goethe B2 - Passed",
    resultImage: { src: "/images/results/german-rohit.jpg", alt: "Goethe B2 certificate", width: 400, height: 500 },
    verifiedDate: "2026-05-14"
  },
  {
    id: "res-2",
    studentName: "Ananya Mehta",
    courseName: "IELTS Strategy Prep",
    scoreLabel: "IELTS Overall 8.0",
    resultImage: { src: "/images/results/ielts-ananya.jpg", alt: "IELTS scorecard", width: 400, height: 500 },
    verifiedDate: "2026-06-20"
  },
  {
    id: "res-3",
    studentName: "Devansh Dixit",
    courseName: "PTE Crash Course",
    scoreLabel: "PTE Score 84/90",
    resultImage: { src: "/images/results/pte-devansh.jpg", alt: "PTE certificate", width: 400, height: 500 },
    verifiedDate: "2026-07-02"
  }
];

export const faqsList: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer free trial demo sessions?",
    answer: "Yes. Every student can register for a complimentary, 45-minute live trial demo session. This session helps you assess the teaching methodology and interact with the designated trainer before committing."
  },
  {
    id: "faq-2",
    question: "Are mock exam fees included in the course structure?",
    answer: "Absolutely. Full-length, timed mock assessments under realistic exam environments are included at no additional cost for all our language courses (IELTS, PTE, and German)."
  },
  {
    id: "faq-3",
    question: "What happens if I miss a scheduled class?",
    answer: "All classes are recorded, and students receive access to a dedicated learning management portal containing class videos, handouts, study guides, and vocabulary templates."
  },
  {
    id: "faq-4",
    question: "Do you offer physical in-person classes?",
    answer: "Yes, we operate a premium physical academy. We run hybrid batches allowing students to attend either offline sessions at our center or join synchronously online."
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "visa-admission-guidance",
    title: "University Admission & Visa Advisory",
    shortDescription: "End-to-end support for applications to universities in Germany, Australia, Canada, and the UK.",
    longDescription: "Navigating international visa requirements and university admissions can be daunting. Our professional advisors align your language milestones with university deadlines, helping compile statements of purpose (SOPs), letter recommendations, and secure visa appointments.",
    benefits: [
      "Expert editing and drafting of Statements of Purpose (SOP)",
      "University shortlisting matching score profile & budget",
      "Mock visa interview sessions simulating embassy environments",
      "Direct guidance for blocked accounts (Germany) and financial proofing"
    ],
    icon: "MapPin"
  },
  {
    id: "srv-2",
    slug: "mock-test-series",
    title: "Real-Exam Simulator Test Series",
    shortDescription: "Timed mock exams grading you on official criteria, complete with diagnostic performance scorecards.",
    longDescription: "Evaluate your readiness with our simulated test center packages. We replicate actual testing constraints—strict section-level limits, keyboard configurations, and speaking audio capture setups—giving you an accurate score estimate.",
    benefits: [
      "AI-driven scoring combined with expert manual reviews",
      "Detailed speaking diagnostic feedback highlighting pronunciation and coherence",
      "Realistic testing center atmosphere at our physical branch",
      "Custom performance improvement plan generated within 24 hours"
    ],
    icon: "ClipboardCheck"
  },
  {
    id: "srv-3",
    slug: "corporate-language-workshops",
    title: "Corporate Language & Etiquette Training",
    shortDescription: "Enhancing communication, presentation standards, and intercultural business soft skills.",
    longDescription: "Unlock global corporate opportunities by preparing your teams for international collaboration. We customize language workshops covering business vocabulary, negotiation styles, structured emails, and cross-cultural workplace manners.",
    benefits: [
      "Custom curricula tailored to IT, healthcare, and consulting domains",
      "Practical workshops focused on presentations and virtual meetings",
      "Objective feedback reports detailing candidate progress",
      "Flexible execution formats (remote, on-site, or hybrid)"
    ],
    icon: "Building"
  }
];

export const coursesList: Course[] = [
  {
    id: "crs-german",
    slug: "german-language",
    title: "German Language Program (A1 - C2)",
    metaTitle: "German Language Classes (A1 - C2) | Goethe & TELC Exam Prep",
    metaDescription: "Learn German from certified instructors. Level-wise courses (A1 to C2) tailored for Goethe/TELC certification, Ausbildung, and German university admissions.",
    shortDescription: "Your gateway to tuition-free education, Ausbildung vocational training, and careers in Germany.",
    longDescription: "Master German grammar, listening, and speaking through our specialized immersion methodology. Designed to take candidates from absolute beginners (A1) to advanced proficiency (C2), this program focuses on building functional communication skills alongside rigorous Goethe-Institut and TELC exam preparation.",
    durationLabel: "3 - 12 Months",
    nextBatchStartDate: "2026-09-01",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "A1 (Beginner)",
        durationWeeks: 6,
        weeklyHours: 8,
        description: "Introduce yourself, understand simple everyday statements, and write basic sentences.",
        modules: ["Pronunciation & Alphabet", "Basic Everyday Greetings", "Present Tense Conjugations", "Sentence Structure (Verb Position)"]
      },
      {
        levelCode: "A2 (Elementary)",
        durationWeeks: 6,
        weeklyHours: 8,
        description: "Participate in simple conversations about family, shopping, work, and direct surroundings.",
        modules: ["Past Tense (Präteritum & Perfekt)", "Accusative & Dative Cases", "Reflexive Verbs", "Giving Directions & Travelling"]
      },
      {
        levelCode: "B1 (Intermediate)",
        durationWeeks: 6,
        weeklyHours: 10,
        description: "Understand key points of clear standard input on familiar matters encountered in work, school, and leisure.",
        modules: ["Subordinate Clauses (weil, dass, wenn)", "Passive Voice (Vorgangspassiv)", "Genitive Case & Prepositions", "Writing Letters & Expressing Opinions"]
      },
      {
        levelCode: "B2 (Upper-Intermediate)",
        durationWeeks: 6,
        weeklyHours: 12,
        description: "Communicate fluently with native speakers. Understand complex technical topics, debates, and write detailed essays.",
        modules: ["Subjunctive II (Konjunktiv II)", "Advanced Adjective Declensions", "Debating Complex Social Topics", "Goethe B2 Exam Preparation Drill"]
      },
      {
        levelCode: "C1 (Advanced Proficiency)",
        durationWeeks: 8,
        weeklyHours: 12,
        description: "Understand a wide range of demanding, longer texts and recognize implicit meaning. Express yourself spontaneously.",
        modules: ["Advanced Idiomatic Expressions", "Complex Sentence Structures (Nomen-Verb-Verbindungen)", "Academic Reading & Writing", "Expressing Nuanced Opinions"]
      }
    ],
    faculty: [facultyList[0]],
    testimonials: [testimonialsList[0], testimonialsList[5], testimonialsList[7], testimonialsList[13]],
    faqs: [faqsList[0], faqsList[2]],
    studentResults: [studentResultsList[0]],
    benefits: [
      "Certified trainers leading every small batch (max 5-7 students)",
      "Interactive, speaking-first curriculum ensuring functional fluency",
      "Complete mock exam series grading reading, writing, listening, speaking",
      "Dedicated visa interview preparation and mock sessions included"
    ],
    whoShouldJoin: [
      "Students preparing to study at universities in Germany",
      "Candidates applying for paid Ausbildung vocational programs",
      "Healthcare professionals (nurses, doctors) migrating to Germany",
      "Working professionals seeking German Opportunity Card (Chancenkarte)"
    ],
    learningOutcomes: [
      "Fluently hold everyday and professional conversations in German",
      "Pass the official Goethe-Institut or TELC exams with confidence",
      "Write coherent structured essays, business letters, and reports",
      "Confidently navigate visa interview questions at the German Embassy"
    ],
    classFormats: ["On-Campus (Morning/Evening batches)", "Live Synchronous Online", "One-on-One Custom Mentorship"]
  },
  {
    id: "crs-french",
    slug: "french-language",
    title: "French Language Program (DELF / DALF A1 - C2)",
    metaTitle: "French Language Classes (A1 - C2) | DELF DALF & TEF Canada Prep",
    metaDescription: "Learn French from certified instructors. Level-wise courses (A1 to C2) with DELF/DALF and TEF Canada exam preparation.",
    shortDescription: "Master French for international careers, higher education in France/Europe, and Canada PR points.",
    longDescription: "Master French grammar, pronunciation, and practical communication. From beginners to advanced speakers, our certified curriculum prepares you for DELF/DALF and TEF Canada examinations with interactive speaking drills and exam mock tests.",
    durationLabel: "3 - 12 Months",
    nextBatchStartDate: "2026-09-10",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "A1 (Beginner)",
        durationWeeks: 6,
        weeklyHours: 8,
        description: "Master basic pronunciation, introductions, everyday vocabulary, and present tense conjugations.",
        modules: ["Phonetics & Accents", "Essential Greetings & Numbers", "Present Tense & Articles", "Everyday Dialogues"]
      },
      {
        levelCode: "A2 (Elementary)",
        durationWeeks: 6,
        weeklyHours: 8,
        description: "Express past events, talk about hobbies, shopping, and understand basic instructions.",
        modules: ["Passé Composé vs Imparfait", "Direct & Indirect Object Pronouns", "Describing Past Experiences", "DELF A2 Mock Practice"]
      },
      {
        levelCode: "B1/B2 (Intermediate/Advanced)",
        durationWeeks: 10,
        weeklyHours: 10,
        description: "Participate in debates, express nuanced opinions, and draft academic essays.",
        modules: ["Subjunctive & Conditional Moods", "Complex Connectors & Argumentation", "DELF B2 Exam Drill", "TEF Canada Preparation"]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[2], testimonialsList[8]],
    faqs: [faqsList[0], faqsList[1]],
    studentResults: [studentResultsList[0]],
    benefits: [
      "Certified language instructors with CEFR-aligned curriculum",
      "Interactive speaking-first pedagogy with small batches (max 5-7)",
      "Dedicated DELF / DALF & TEF Canada mock tests",
      "Comprehensive digital study material and recorded lectures included"
    ],
    whoShouldJoin: [
      "Students planning to study in France, Switzerland, or Belgium",
      "Immigration candidates seeking additional CRS points for Canada PR via TEF/TCF",
      "Professionals working with French MNCs and European enterprises",
      "Language enthusiasts seeking international DELF certification"
    ],
    learningOutcomes: [
      "Communicate fluently and confidently in standard spoken French",
      "Pass official DELF A1, A2, B1, or B2 examinations with high marks",
      "Boost Canada PR Express Entry CRS score with certified French skills",
      "Draft professional emails and academic essays in French"
    ],
    classFormats: ["On-Campus Batches", "Live Synchronous Online", "Weekend Flexible Batches"]
  },
  {
    id: "crs-japanese",
    slug: "japanese-language",
    title: "Japanese Language Program (JLPT N5 - N1)",
    metaTitle: "Japanese Language Classes (JLPT N5 - N1) | Certified Faculty",
    metaDescription: "Master Japanese script (Hiragana, Katakana, Kanji) and pass JLPT N5 to N1 exams. Tailored for tech careers and higher studies in Japan.",
    shortDescription: "Open high-paying IT, engineering, and study opportunities in Japan with JLPT preparation.",
    longDescription: "Learn Japanese through our step-by-step framework covering Hiragana, Katakana, Kanji characters, and natural spoken conversation. Specially structured to guarantee success in official JLPT N5, N4, and N3 examinations.",
    durationLabel: "4 - 14 Months",
    nextBatchStartDate: "2026-09-08",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "N5 (Basic Beginner)",
        durationWeeks: 8,
        weeklyHours: 8,
        description: "Master Hiragana, Katakana, 100+ Kanji characters, and basic conversational patterns.",
        modules: ["Hiragana & Katakana Mastery", "100 Essential Kanji", "Basic Grammar Particles (wa, ga, o, ni)", "JLPT N5 Mock Tests"]
      },
      {
        levelCode: "N4 (Elementary)",
        durationWeeks: 8,
        weeklyHours: 8,
        description: "Learn 300+ Kanji, daily situational dialogues, and complex sentence conjunctions.",
        modules: ["Te-form & Ta-form Verb Conjugations", "300 Kanji & Vocabulary Bank", "Listening Comprehension Drills", "JLPT N4 Mock Tests"]
      },
      {
        levelCode: "N3 (Intermediate)",
        durationWeeks: 12,
        weeklyHours: 10,
        description: "Understand everyday newspaper articles, business conversations, and 650+ Kanji.",
        modules: ["Intermediate Grammar Patterns", "Business Keigo (Polite Japanese)", "650+ Kanji Character Drills", "JLPT N3 Exam Intensive"]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[3], testimonialsList[10]],
    faqs: [faqsList[0], faqsList[1]],
    studentResults: [studentResultsList[0]],
    benefits: [
      "Step-by-step Kanji memorization mnemonics and stroke order drills",
      "Native Japanese listening audio training sessions",
      "Full-length JLPT N5, N4, and N3 timed mock tests",
      "Career guidance for engineering and technical pathways in Japan"
    ],
    whoShouldJoin: [
      "Software engineers and IT professionals targeting jobs in Japan",
      "Students preparing for MEXT scholarships and Japanese universities",
      "TITP / SSW visa applicants preparing for technical placements in Japan",
      "Anime and Japanese culture enthusiasts seeking authentic fluency"
    ],
    learningOutcomes: [
      "Read, write, and converse fluently using Hiragana, Katakana, and Kanji",
      "Clear the official JLPT N5, N4, or N3 exam on your first attempt",
      "Understand workplace communication and polite Japanese (Keigo)",
      "Qualify for international job interviews with Japanese MNCs"
    ],
    classFormats: ["On-Campus Batches", "Live Online Zoom/Meet", "Weekend Intensive Batches"]
  },
  {
    id: "crs-spoken-english",
    slug: "spoken-english",
    title: "Spoken English & Fluency Mastery",
    metaTitle: "Spoken English Classes | Accent Neutralization & Fluency Training",
    metaDescription: "Overcome hesitation, master English grammar, and speak with confidence in everyday, academic, and professional environments.",
    shortDescription: "Speak English fluently, confidently, and naturally in social and professional settings.",
    longDescription: "Our Spoken English & Fluency program is designed to eliminate fear, build vocabulary, and improve pronunciation. Through daily conversational practice, group discussions, and accent neutralization drills, you'll speak English naturally without translating in your head.",
    durationLabel: "2 - 3 Months",
    nextBatchStartDate: "2026-09-01",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Foundation Fluency",
        durationWeeks: 4,
        weeklyHours: 6,
        description: "Build correct grammar foundations, eliminate translation hesitation, and expand active vocabulary.",
        modules: ["Everyday Conversational Phrases", "Tense Usage & Sentence Structuring", "Overcoming Stage Fear", "Daily Speaking Activities"]
      },
      {
        levelCode: "Advanced Communication",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Master accent neutralization, public speaking, debates, and professional presentation delivery.",
        modules: ["Pronunciation & Intonation Tuning", "Extempore & Group Discussions", "Workplace Meetings & Email Etiquette", "Final Speech Presentation"]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[6], testimonialsList[12]],
    faqs: [faqsList[0], faqsList[3]],
    studentResults: [studentResultsList[1]],
    benefits: [
      "Daily 1-on-1 speaking time in small batches (max 5-7 students)",
      "Accent neutralization and voice modulation training",
      "Extensive real-life simulations: meetings, interviews, debates",
      "Comprehensive digital workbook and vocabulary guides"
    ],
    whoShouldJoin: [
      "Job seekers preparing for corporate interviews and group discussions",
      "Working professionals seeking to lead meetings and give confident presentations",
      "Students and homemakers wanting to speak English comfortably in public",
      "Anyone who understands English but struggles to speak fluently"
    ],
    learningOutcomes: [
      "Speak fluent English without hesitation or mental translation",
      "Pronounce words clearly with standard, neutral intonation",
      "Participate actively in workplace meetings, debates, and presentations",
      "Write professional emails and communicate with executive presence"
    ],
    classFormats: ["On-Campus Practice Batches", "Live Interactive Online Batches"]
  },
  {
    id: "crs-ielts",
    slug: "ielts-preparation",
    title: "IELTS Exam Masterclass (Academic & General)",
    metaTitle: "IELTS Coaching Classes | Achieve 7.5+ Band Score | British Council & IDP",
    metaDescription: "Score 7.5+ overall bands with British Council and IDP certified trainers. Timed assessment simulations, essay grading, and speaking interview drills.",
    shortDescription: "Unlock migration visa points and global university admissions with a high band score.",
    longDescription: "Prepare for your IELTS Academic or General Training exam with confidence. Our strategic masterclass focuses on diagnostic assessments, timed speaking simulations, and step-by-step essay blueprints, teaching you the exact methodology examiners use to assign band scores.",
    durationLabel: "2 - 3 Months",
    nextBatchStartDate: "2026-08-20",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Diagnostic & Strategy",
        durationWeeks: 2,
        weeklyHours: 6,
        description: "Assess your baseline band score and learn core scoring metrics across all modules.",
        modules: ["Diagnostic Mock Test", "Examiner Evaluation Criteria", "Time Management Techniques", "Understanding Question Traps"]
      },
      {
        levelCode: "Skill Development",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Master reading speed techniques, essay drafting structures, and speaking confidence.",
        modules: ["Writing Task 1 & 2 Blueprints", "Active Listening & Skimming Speed", "Cohesion, Coherence & Lexical Resources", "Cue Card Structuring & Flow"]
      },
      {
        levelCode: "Mock Exam Intensive",
        durationWeeks: 2,
        weeklyHours: 10,
        description: "Take timed, full-length mock examinations under strict testing conditions with trainer reviews.",
        modules: ["4 Timed Mock Assessments", "Individual Speaking Feedback Sessions", "Writing Grading & Reconstruction Workshops", "Final Test Day Strategy Session"]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[1], testimonialsList[9]],
    faqs: [faqsList[1], faqsList[3]],
    studentResults: [studentResultsList[1]],
    benefits: [
      "British Council and IDP certified exam experts",
      "12 full-length, examiner-graded mock exams with diagnostic scorecards",
      "Daily individual essay evaluation and correction sessions",
      "Timed mock interview bootcamps replicating real test conditions"
    ],
    whoShouldJoin: [
      "Students preparing to enter English-speaking universities abroad",
      "Professionals migrating to Canada (PR via Express Entry) or Australia",
      "Healthcare professionals seeking work credentials in the UK or US",
      "Candidates looking to boost their overall visa application points"
    ],
    learningOutcomes: [
      "Confidently score a minimum overall Band 7.5+ in the official exam",
      "Draft highly coherent, structured Academic and General essays",
      "Efficiently read and scan long academic paragraphs in under 18 minutes",
      "Achieve high speech fluency without hesitation under exam conditions"
    ],
    classFormats: ["Intensive Weekday Batch (Mon - Fri)", "Weekend Only Prep (Sat & Sun)", "Custom One-on-One Assessment Package"]
  },
  {
    id: "crs-pte",
    slug: "pte-academic",
    title: "PTE Academic & UKVI Preparation Masterclass",
    metaTitle: "PTE Academic Coaching (AI-Scored) | Score 79+ | Pearson Test of English",
    metaDescription: "Master all 20 PTE task types with AI-scored mock tests, official Pearson study material, and personalized diagnostic score roadmaps. Results in 48 hours.",
    shortDescription: "Everything you need to prepare, practice, and achieve your target score (65+ to 79+) in PTE Academic & PTE UKVI.",
    longDescription: "PTE (Pearson Test of English) is a 100% computer-based, AI-scored English language proficiency test developed by Pearson PLC and accepted by 3,000+ universities (Harvard, Yale, INSEAD, UK/Australia) and immigration departments for Australia, UK, and New Zealand. Our comprehensive preparation program focuses on task-specific strategies across all 20 question types, official Pearson practice platforms, speaking templates, essay frameworks, and AI-graded mock simulations delivering results within 48 hours.",
    durationLabel: "1 - 3 Months",
    nextBatchStartDate: "2026-09-01",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Part 1: Speaking & Writing Mastery",
        durationWeeks: 3,
        weeklyHours: 8,
        description: "Master all 7 integrated speaking & writing tasks with proven templates and oral fluency tuning.",
        modules: [
          "Read Aloud (Speaking + Reading, 30-40s)",
          "Repeat Sentence (Speaking + Listening, 15s)",
          "Describe Image & Re-tell Lecture Templates (40s)",
          "Answer Short Question (10s)",
          "Summarise Written Text Formula (10 mins, 1 sentence)",
          "Write Essay 250-300 Words Framework (20 mins)"
        ]
      },
      {
        levelCode: "Part 2: Reading Section Strategies",
        durationWeeks: 2,
        weeklyHours: 8,
        description: "Master high-weightage fill in the blanks, paragraph re-ordering, and reading speed management.",
        modules: [
          "Reading & Writing: Fill in the Blanks (Drag & Drop High Weightage)",
          "Multiple Choice (Multiple & Single Answers)",
          "Re-order Paragraphs (Logical Connectors & Sequencing Clues)",
          "Fill in the Blanks (Reading Dropdown Vocabulary Bank)",
          "Academic Context & Collocation Recognition"
        ]
      },
      {
        levelCode: "Part 3: Listening & Dictation Intensive",
        durationWeeks: 3,
        weeklyHours: 10,
        description: "High-scoring listening techniques, audio note-taking, spelling accuracy, and dictation banks.",
        modules: [
          "Summarise Spoken Text (50-70 Words, 10 mins)",
          "Listening Fill in the Blanks (Spelling Accuracy)",
          "Highlight Correct Summary & Select Missing Word",
          "Highlight Incorrect Words (Transcript Error Detection)",
          "Write from Dictation High-Frequency AI Sentence Bank"
        ]
      },
      {
        levelCode: "Part 4: AI Mock Drills & Score Optimization",
        durationWeeks: 2,
        weeklyHours: 12,
        description: "Timed computer-lab simulations on Pearson Official Platform with diagnostic performance scorecards.",
        modules: [
          "Full-Length AI-Scored Mock Examinations (Pearson Scoring Engine)",
          "Microphone Placement & Voice Pitch Acoustics",
          "Personalized Score Diagnostic Analysis (Identifying Weak Tasks)",
          "PTE UKVI Visa Requirements & Rapid 48-Hour Exam Strategy"
        ]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[4], testimonialsList[11]],
    faqs: [
      {
        id: "faq-pte-1",
        question: "What is PTE and how does its AI scoring work?",
        answer: "PTE (Pearson Test of English) is a computer-based test administered by Pearson PLC. It uses Artificial Intelligence to evaluate speaking, writing, reading, and listening responses against strict linguistic parameters—evaluating oral fluency, pronunciation, grammar, vocabulary, and spelling without human examiner bias."
      },
      {
        id: "faq-pte-2",
        question: "How quickly are PTE results delivered?",
        answer: "PTE results are delivered within 48 hours of completing the test at a Pearson VUE center, and often in as little as 24 hours, making it one of the fastest English proficiency tests worldwide."
      },
      {
        id: "faq-pte-3",
        question: "What is the difference between PTE Academic and PTE UKVI?",
        answer: "PTE Academic is accepted by over 3,000 universities and for Australian/New Zealand visas. PTE UKVI is the UK government-approved Secure English Language Test (SELT) required for specific UK work and student visas, taken at UKVI-licensed Pearson VUE centers."
      },
      {
        id: "faq-pte-4",
        question: "What score do I need for Australian immigration or UK universities?",
        answer: "Typically, Australian Skilled Migration requires a minimum of 65 in each communicative skill (Competent/Proficient English), while UK/Australian top universities require an overall score between 65 and 79. Our diagnostic mock test helps identify your baseline and map out the exact path to your target."
      }
    ],
    studentResults: [studentResultsList[2]],
    benefits: [
      "Official Pearson preparation materials and scored practice platform access",
      "Full coverage of all 20 PTE task types with task-specific templates",
      "AI-scored mock tests providing real-time section and enabling skill analytics",
      "Small batches (max 5-7 students) ensuring dedicated 1-on-1 speaking correction"
    ],
    whoShouldJoin: [
      "Applicants for Australian Skilled Migration (Subclass 189, 190, 491) targeting 65+ to 79+ points",
      "Students applying to 3,000+ global universities across the UK, Australia, New Zealand, USA, and Canada",
      "UK visa applicants requiring PTE Academic UKVI certification",
      "Candidates seeking a faster, 100% computer-delivered, objective alternative to IELTS"
    ],
    learningOutcomes: [
      "Master all 20 integrated task types across Speaking, Writing, Reading, and Listening",
      "Confidently score 79+ (equivalent to IELTS Band 8.0) or 65+ (IELTS 7.0) on official exam day",
      "Apply tested speaking templates for Describe Image and Re-tell Lecture without pauses",
      "Type high-scoring dictation sentences and academic summaries within exact time limits"
    ],
    classFormats: ["Computer Lab In-Person Batches (Dwarka)", "Live Interactive Online Zoom Batches", "1-on-1 Fast-Track Score Accelerator"]
  }
];
