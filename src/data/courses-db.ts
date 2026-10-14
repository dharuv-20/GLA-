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
  },
  {
    id: "faq-jp-1",
    question: "What textbooks and learning resources are provided in the Japanese programme?",
    answer: "The course follows the Minna no Nihongo and Genki series for N5–N3, and Tobira for N2. Students also receive workbooks, audio and video listening resources, character writing sheets, and supplementary JLPT exam practice material."
  },
  {
    id: "faq-jp-2",
    question: "How is the 25-lesson syllabus structured across scripts and Kanji?",
    answer: "Hiragana lines and practice are completed in Lessons 1–5. Katakana practice is completed in Lessons 6–10. Dedicated Kanji instruction begins in Lesson 12 and continues through Lesson 21, followed by revision drills in Lessons 22–25 and a comprehensive final test including a daily-life conversation check."
  },
  {
    id: "faq-spk-1",
    question: "How is the 3-level Spoken English course structured?",
    answer: "The course spans 3 months across three progressive levels: Level 1 Beginner (A1→A2, core grammar & basic usage), Level 2 Intermediate (B1→B2, speaking activities & writing skills), and Level 3 Advanced (C1→C2, reading, listening, advanced speaking/writing, and a Capstone Interview Preparation module). Batches run 3–4 sessions per week with assessments at the end of each level."
  },
  {
    id: "faq-spk-2",
    question: "How does the Personality Development Add-On work with Spoken English?",
    answer: "Personality Development is offered as an optional 2-month professional add-on designed for working professionals. You can enroll in Spoken English on its own, bundle it with Personality Development for complete personal and executive transformation, or take Personality Development as a standalone program."
  },
  {
    id: "faq-spk-3",
    question: "What is covered in the Capstone Interview Preparation module?",
    answer: "The Capstone module in Month 3 covers HR essentials ('Tell me about yourself', strengths/weaknesses), behavioral questions using the STAR method, body language, mock interviews with recorded feedback, salary negotiation, GD simulations, and video interview etiquette."
  },
  {
    id: "faq-spk-4",
    question: "What is the batch size and daily speaking practice model?",
    answer: "All batches are capped at 5–7 students to guarantee daily 1-on-1 speaking time and personalized feedback. Learners actively participate in extempore speaking, roleplays, debates, and accent neutralization drills."
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
    title: "French Language Courses — Learn, Grow, Go Global",
    metaTitle: "French Language Classes (A1-C2) | DELF DALF Prep | GLA",
    metaDescription: "Learn French with confidence at The Global Language Academy. Structured Inspire syllabus from A1 to B2 plus DALF C1 & C2 exam preparation in Delhi NCR.",
    shortDescription: "Learn French with confidence through structured learning, practical communication, and examination-focused preparation at The Global Language Academy.",
    longDescription: "Our French language courses are designed to help learners develop strong speaking, listening, reading, writing, pronunciation, grammar, and vocabulary skills for real-world communication and global opportunities. Follow the Inspire French series from A1 to B2, with specialized preparation for DALF C1 and C2.",
    durationLabel: "2 - 12 Months",
    nextBatchStartDate: "2026-09-10",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "A1 (Beginner)",
        durationWeeks: 8,
        weeklyHours: 8,
        description: "Essential French vocabulary, basic grammar, everyday expressions, and simple communication (Inspire 1).",
        modules: ["Greetings & Alphabet", "Avoir & Être Conjugations", "Present Tense & Articles", "DELF A1 Training"]
      },
      {
        levelCode: "A2 (Elementary)",
        durationWeeks: 8,
        weeklyHours: 8,
        description: "Communicate in familiar situations, describe experiences, discuss plans, and handle practical interactions (Inspire 2).",
        modules: ["Passé Composé vs Imparfait", "Travel & Hotel Reservations", "Object Pronouns Y/En", "DELF A2 Mock Practice"]
      },
      {
        levelCode: "B1/B2 (Intermediate/Upper)",
        durationWeeks: 12,
        weeklyHours: 10,
        description: "Express opinions, debate current issues, handle formal communication, and prepare for DELF B1/B2 (Inspire 3 & 4).",
        modules: ["Subjunctive & Conditionnel", "Argumentative Essays & Debates", "DELF B1/B2 Tasks", "TEF / TCF Canada Prep"]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[2], testimonialsList[8]],
    faqs: [
      {
        id: "faq-fr-1",
        question: "Which textbooks are used in the GLA French course?",
        answer: "Our French language curriculum is structured around the renowned Inspire French series: Inspire 1 for A1, Inspire 2 for A2, Inspire 3 for B1, and Inspire 4 for B2, supplemented with official cahier activities and DALF dossiers."
      },
      {
        id: "faq-fr-2",
        question: "Do you prepare students for official DELF and DALF exams?",
        answer: "Yes, our programmes provide targeted preparation for DELF A1, A2, B1, B2 and DALF C1, C2, including authentic examination mock tests aligned with CIEP / France Éducation international (FEI) specifications."
      },
      {
        id: "faq-fr-3",
        question: "Can learning French help boost my Canada PR CRS score?",
        answer: "Yes! Achieving NCLC 7 (CLB 7) or higher in French via the TEF Canada or TCF Canada exam can award up to 50 additional Comprehensive Ranking System (CRS) points for Canada Express Entry."
      }
    ],
    studentResults: [studentResultsList[0]],
    benefits: [
      "Structured Learning: Progressive syllabus designed to build French systematically",
      "Practical Communication: Develop confident communication in everyday & professional situations",
      "Exam Preparation: Language skills and examination tasks for DELF A1-B2 & DALF C1-C2",
      "Global Opportunities: Build French proficiency for education, careers, and international mobility"
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
    title: "Japanese Language Courses — Learn, Grow, Go Global",
    metaTitle: "Japanese Language Classes (JLPT N5-N1) in Delhi | GLA",
    metaDescription: "Master Japanese with confidence. Structured 25-lesson curriculum and JLPT N5 to N1 exam preparation with certified trainers at GLA in Delhi NCR.",
    shortDescription: "Learn Japanese with confidence through structured learning, practical communication, cultural understanding, and real-world skills at The Global Language Academy.",
    longDescription: "The Japanese Language Course at The Global Language Academy is a structured 25-lesson programme developing speaking, listening, reading, and writing, including hiragana, katakana, and kanji, along with practical grammar, useful vocabulary, and JLPT preparation from N5 to N1.",
    durationLabel: "25 Lessons + Final Test",
    nextBatchStartDate: "2026-09-08",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Stage 1 (L1–L5)",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Hiragana lines, counting, time, greetings, and basic daily pattern practice.",
        modules: ["Hiragana Lines & Word Practice", "Counting, Numbers, Time & Days", "Completion of L1–L5", "Review Quizzes & Listening"]
      },
      {
        levelCode: "Stage 2 (L6–L10)",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Katakana completion, situational dialogues, reading and listening practice.",
        modules: ["Katakana Lines & Completion", "Adjectives & Preferences", "Existence & Spatial Prepositions", "Reading & Review Quizzes"]
      },
      {
        levelCode: "Stage 3 (L11–L15)",
        durationWeeks: 5,
        weeklyHours: 8,
        description: "Kanji Lessons 2–5, Te-form conjugations, requests, and permissions.",
        modules: ["Kanji Lessons 2 to 5", "Quantities & Family Hierarchy", "Te-Form Conjugation Rules", "Listening & Reading Drills"]
      },
      {
        levelCode: "Stage 4 (L16–L21)",
        durationWeeks: 6,
        weeklyHours: 8,
        description: "Kanji Lessons 6–11, Nai-form obligations, plain forms, and opinions.",
        modules: ["Kanji Lessons 6 to 11", "Dictionary Form & Hobbies", "Casual Plain Speech", "Quotations & Opinions"]
      },
      {
        levelCode: "Stage 5 (L22–L25)",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Comprehensive revision, drill exercises, and pre-assessment synthesis.",
        modules: ["Noun Modification & Relative Clauses", "Giving & Receiving Benefactive Verbs", "Conditionals & Logic", "Final Assessment & Conversational Check"]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[3], testimonialsList[10], testimonialsList[1]],
    faqs: [
      faqsList[4], // faq-jp-1
      faqsList[5], // faq-jp-2
      faqsList[0], // faq-1
      faqsList[2]  // faq-3
    ],
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
    title: "Spoken English Course — Communicate Confidently in Every Situation",
    metaTitle: "Spoken English & Fluency Coaching in Delhi NCR | GLA",
    metaDescription: "Boost English speaking fluency, grammar, pronunciation, and corporate presentation skills at GLA. Interactive group discussions and 1-on-1 personalized labs.",
    shortDescription: "Improve your fluency, build confidence and master real-life communication with our Spoken English Course. Your Voice. A Brighter Tomorrow.",
    longDescription: "The Spoken English Course at The Global Language Academy is a structured 3-month programme (A1 to C2) covering grammar, speaking, writing, reading, listening, and an advanced Capstone Interview Preparation module, with an optional 2-month executive Personality Development add-on for working professionals.",
    durationLabel: "3 Months (Core) + 2 Months (Add-On)",
    nextBatchStartDate: "2026-09-01",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Level 1 — Beginner (A1 → A2)",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Month 1: Core Grammar Foundations, Question Formation, Sentence Structure, and Everyday Vocabulary.",
        modules: [
          "Parts of Speech & Articles (a, an, the)",
          "Tenses (Present, Past, Future) & Subject-Verb Agreement",
          "Question Formation & Negation Rules",
          "Basic Vocabulary, Family, Food, Time & Daily Expressions"
        ]
      },
      {
        levelCode: "Level 2 — Intermediate (B1 → B2)",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Month 2: Active Speaking Skills, Role Plays, Group Discussions, Debates & Cohesive Writing Skills.",
        modules: [
          "Picture Description, Storytelling & Extempore Speaking",
          "Role Plays (Restaurant, Hotel, Doctor, Job Enquiry)",
          "Group Discussions, Debates & Connected Speech Intonation",
          "Paragraph Structuring, Informal Letters & Opinion Essays"
        ]
      },
      {
        levelCode: "Level 3 — Advanced (C1 → C2)",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Month 3: Critical Reading, Authentic Audio Listening, Advanced Business Writing & Capstone Interview Prep.",
        modules: [
          "Speed Reading (Skimming/Scanning) & Authentic Podcast Listening",
          "Formal Reports, Proposals, Business Emails & Advanced Grammar",
          "Formal Presentations, Panel Discussions & Persuasive Speaking",
          "Capstone: Comprehensive HR, Behavioral (STAR) & Video Interview Prep"
        ]
      },
      {
        levelCode: "Optional Add-On — Personality Development",
        durationWeeks: 8,
        weeklyHours: 8,
        description: "2 Months: Executive Presence, Public Speaking, Stress Management & Interpersonal Leadership for Working Professionals.",
        modules: [
          "Month 1 Foundation: Professional Communication, Workplace Etiquette & Grooming",
          "Month 1 Foundation: Confidence Building & Overcoming Stage Anxiety",
          "Month 2 Advanced: Public Speaking, Presentations & Authority Pitching",
          "Month 2 Advanced: Stress Management, Team Dynamics & Capstone PDP"
        ]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[6], testimonialsList[12]],
    faqs: [
      faqsList[6], // faq-spk-1
      faqsList[7], // faq-spk-2
      faqsList[8], // faq-spk-3
      faqsList[9], // faq-spk-4
      faqsList[0], // faq-1
      faqsList[3]  // faq-4
    ],
    studentResults: [studentResultsList[1]],
    benefits: [
      "Better Communication — Speak with clarity, precision, and confidence in every situation",
      "Career Growth — Crack job interviews, lead corporate meetings, and negotiate promotions",
      "Global Opportunities — Build international fluency for study abroad and global careers",
      "Optional Personality Development Add-On — 2 months executive leadership for working professionals",
      "Micro-Batches (5–7 Learners) — Daily guaranteed 1-on-1 speaking practice with certified mentors"
    ],
    whoShouldJoin: [
      "Job seekers preparing for corporate interviews, STAR rounds, and group discussions",
      "Working professionals seeking to lead meetings, negotiate, and deliver presentations",
      "College students preparing for campus placements and competitive examinations",
      "Anyone who understands English but hesitates or translates in their head before speaking"
    ],
    learningOutcomes: [
      "Communicate fluently and naturally in social, academic, and professional situations",
      "Master English grammar, sentence structure, pronunciation, and active vocabulary",
      "Deliver persuasive presentations, extempore speeches, and participate in active debates",
      "Ace HR and technical job interviews using the STAR method with executive presence"
    ],
    classFormats: ["On-Campus Practice Batches", "Live Interactive Online Batches"]
  },
  {
    id: "crs-ielts",
    slug: "ielts-preparation",
    title: "IELTS Preparation Masterclass (Academic & General)",
    metaTitle: "IELTS Coaching in Delhi NCR (Band 7.5+) | GLA Masterclass",
    metaDescription: "Master IELTS Academic & General Training with Cambridge Books 1-18, unlimited mock tests, 1-on-1 speaking evaluation, and examiner essay corrections.",
    shortDescription: "Everything you need to prepare, practise, and achieve your target band score in IELTS Academic & General Training.",
    longDescription: "IELTS (International English Language Testing System) is jointly owned and managed by the British Council, IDP: IELTS Australia, and Cambridge Assessment English. Accepted by 11,000+ organisations worldwide across 140+ countries. Our comprehensive coaching program provides Cambridge-affiliated materials (Books 1–18), task-specific strategy guides, unlimited offline & CDI computer mock tests, and personalised band score roadmaps targeting Band 7.5+ and 8.0+.",
    durationLabel: "2 - 3 Months",
    nextBatchStartDate: "2026-09-01",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Phase 1: Diagnostic & Core Skill Foundation",
        durationWeeks: 3,
        weeklyHours: 8,
        description: "Assess baseline band score and master the fundamental question types across Listening, Reading, Writing, and Speaking.",
        modules: [
          "Diagnostic Mock Test & Baseline Band Analysis",
          "Cambridge IELTS Test Format & Timing Rules",
          "Listening: Monologue & Conversation Note-taking",
          "Reading: Skimming, Scanning & Keywords Traps"
        ]
      },
      {
        levelCode: "Phase 2: Writing & Speaking Strategy Mastery",
        durationWeeks: 4,
        weeklyHours: 8,
        description: "Master Task 1 visual data interpretation/letters, Task 2 discursive essay structures, and Part 2 Cue Card speech flow.",
        modules: [
          "Academic Task 1 Graphs, Charts & Maps Formulas",
          "General Task 1 Formal, Semi-formal & Informal Letters",
          "Task 2 4-Paragraph Band 8+ Essay Blueprint",
          "Speaking Cue Card Bank & 1-Minute Note-taking Strategy"
        ]
      },
      {
        levelCode: "Phase 3: Full-Length Exam Simulation & Score Maximisation",
        durationWeeks: 3,
        weeklyHours: 10,
        description: "Unlimited offline and online CDI timed mock tests with 1-on-1 examiner feedback and band score optimization.",
        modules: [
          "Cambridge Books 1–18 Timed Exam Papers",
          "Computer-Delivered IELTS (CDI) Online Portal Drills",
          "1-on-1 Face-to-Face Speaking Mock Interviews",
          "Individual Writing Correction & Examiner Rubric Analysis"
        ]
      }
    ],
    faculty: [],
    testimonials: [testimonialsList[1], testimonialsList[9]],
    faqs: [
      {
        id: "faq-ielts-1",
        question: "What is the difference between IELTS Academic and IELTS General Training?",
        answer: "IELTS Academic is intended for university degree admissions (undergraduate/postgraduate) and professional council registration (medical, nursing, legal). IELTS General Training is intended for immigration/permanent residency (e.g. Canada Express Entry, Australia skilled migration) and secondary education or vocational work."
      },
      {
        id: "faq-ielts-2",
        question: "How long is the IELTS test and how is it scored?",
        answer: "The total test duration is approximately 2 hours and 45 minutes (Listening: 30m, Reading: 60m, Writing: 60m, Speaking: 11–14m). IELTS is scored on a 9-band scale. Your Overall Band Score is the arithmetic average of the four module scores rounded to the nearest 0.5 band."
      },
      {
        id: "faq-ielts-3",
        question: "Are Cambridge IELTS past papers provided in the course?",
        answer: "Yes. Our curriculum is built around Cambridge Assessment English past papers, including the Cambridge IELTS Books 1–18 series, complete with authentic past examination questions, band conversion tables, and examiner sample answers."
      },
      {
        id: "faq-ielts-4",
        question: "How many mock tests are included in the programme?",
        answer: "GLA provides unlimited full-length offline mock tests in our testing lab and online computer-delivered IELTS (CDI) portal simulations at no additional cost throughout your course enrolment."
      },
      {
        id: "faq-ielts-5",
        question: "How quickly are IELTS results delivered?",
        answer: "For Computer-Delivered IELTS (CDI), results are typically available online in 3–5 days. For paper-based testing, official Test Report Forms (TRF) are issued within 13 days of the test date."
      }
    ],
    studentResults: [studentResultsList[1]],
    benefits: [
      "Official Cambridge Assessment English past papers (Books 1–18)",
      "Unlimited offline and CDI computer-delivered mock exam simulations",
      "Daily 1-on-1 Speaking mock interviews and immediate pronunciation feedback",
      "Personalised Band Score Roadmap targeting Band 7.5+ and Band 8.0+"
    ],
    whoShouldJoin: [
      "Students targeting undergraduate or master's degrees at universities abroad",
      "Immigration applicants targeting Canada PR Express Entry (CLB 9/10 / 8777 score)",
      "Healthcare, nursing, legal, and engineering professionals seeking global registration",
      "Candidates looking to improve overall band score from 6.0/6.5 to 7.5+"
    ],
    learningOutcomes: [
      "Confidently score a minimum overall Band 7.5+ to 8.5 in the official test",
      "Draft high-scoring Task 1 and Task 2 essays adhering to examiner band descriptors",
      "Read complex academic passages and answer all 40 questions within 60 minutes",
      "Speak fluently and coherently with native examiners on any Cue Card topic"
    ],
    classFormats: ["On-Campus Testing Lab", "Live Synchronous Online Batches", "Flexible Weekend Intensive"]
  },
  {
    id: "crs-pte",
    slug: "pte-academic",
    title: "PTE Academic & UKVI Preparation Masterclass",
    metaTitle: "PTE Academic Coaching in Delhi NCR (Target 79+) | GLA",
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
