import { Course, FacultyMember, Testimonial, FAQItem, StudentResult, ServiceItem } from '../types';

export const facultyList: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. Elena Rostova",
    role: "Senior German Language Head",
    avatar: { src: "/images/faculty/elena.jpg", alt: "Dr. Elena Rostova", width: 300, height: 300 },
    credentials: ["Goethe-Institut C2 Certified", "12+ Years Teaching Experience", "PhD in German Philology"],
    bio: "Elena specializes in accelerating German language acquisition for study abroad candidates, utilizing a spoken-first immersion methodology."
  },
  {
    id: "fac-2",
    name: "Jonathan Myers",
    role: "Principal IELTS & PTE Trainer",
    avatar: { src: "/images/faculty/jonathan.jpg", alt: "Jonathan Myers", width: 300, height: 300 },
    credentials: ["British Council Certified IELTS Expert", "IDP Examiner Alumnus", "MA in TESOL"],
    bio: "Jonathan has trained over 5,000 students, helping them achieve an average band score of 7.5+ through strategy-focused preparation."
  },
  {
    id: "fac-3",
    name: "Simran Kaur",
    role: "Personality & Corporate Skills Lead",
    avatar: { src: "/images/faculty/simran.jpg", alt: "Simran Kaur", width: 300, height: 300 },
    credentials: ["Certified Corporate Coach", "Former HR Director at Tech MNC", "MBA in HR & Communications"],
    bio: "Simran designs workplace communication roadmaps, preparing candidates for competitive corporate recruitment processes."
  }
];

export const testimonialsList: Testimonial[] = [
  {
    id: "test-1",
    authorName: "Rohit Sen",
    authorAvatar: { src: "/images/students/rohit.jpg", alt: "Rohit Sen", width: 80, height: 80 },
    ratingStars: 5,
    quote: "GLA made German language study simple. I passed my Goethe B2 exam on my first attempt and am now heading to Munich for my Master's!",
    outcomeTag: "Passed Goethe B2"
  },
  {
    id: "test-2",
    authorName: "Dr. Ananya Mehta",
    authorAvatar: { src: "/images/students/ananya.jpg", alt: "Dr. Ananya Mehta", width: 80, height: 80 },
    ratingStars: 5,
    quote: "With a busy clinic schedule, finding weekend training was hard. Jonathan's IELTS strategies helped me score an overall 8.0 band.",
    outcomeTag: "Scored 8.0 Band (IELTS)"
  },
  {
    id: "test-3",
    authorName: "Vikram Malhotra",
    authorAvatar: { src: "/images/students/vikram.jpg", alt: "Vikram Malhotra", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The mock interviews and resume optimization sessions in the Personality Development class helped me land my dream software developer role.",
    outcomeTag: "Hired at Top MNC"
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
    metaTitle: "German Language Classes (A1 - C2) | Certified Academy",
    metaDescription: "Learn German from certified Goethe instructors. Dynamic level course modules (A1, A2, B1, B2, C1, C2) tailored for student visas and career migration.",
    shortDescription: "Your gateway to tuition-free university education and job opportunities in Germany.",
    longDescription: "Master German grammar, listening, and speaking through our specialized immersion methodology. Designed to take candidates from absolute beginners (A1) to native fluency (C2), this program focuses on building functional communication skills alongside rigorous exam preparation.",
    durationLabel: "6 Months Intensive",
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
        levelCode: "B2 (Vantage/Upper-Int)",
        durationWeeks: 6,
        weeklyHours: 12,
        description: "Communicate fluently with native speakers. Understand complex topics, technical debates, and write detailed essays.",
        modules: ["Subjunctive II (Konjunktiv II)", "Advanced Adjective Declensions", "Debating Complex Social Topics", "Goethe B2 Exam Preparation Drill"]
      },
      {
        levelCode: "C1 (Advanced/Proficient)",
        durationWeeks: 8,
        weeklyHours: 12,
        description: "Understand a wide range of demanding, longer texts and recognize implicit meaning. Express yourself fluently and spontaneously.",
        modules: ["Advanced Idiomatic Expressions", "Complex Sentence Structures (Nomen-Verb-Verbindungen)", "Academic Reading & Writing", "Expressing Nuanced Opinions"]
      },
      {
        levelCode: "C2 (Mastery/Fluency)",
        durationWeeks: 8,
        weeklyHours: 14,
        description: "Understand practically everything heard or read with ease. Summarize information from different spoken and written sources.",
        modules: ["Nuances of German Literature & Media", "Advanced Rhetoric & Presentation", "Professional Business Communication", "Goethe C2 GDS Exam Mastery Drill"]
      }
    ],
    faculty: [facultyList[0]],
    testimonials: [testimonialsList[0]],
    faqs: [faqsList[0], faqsList[2]],
    studentResults: [studentResultsList[0]],
    benefits: [
      "Goethe-Institut C2 certified trainers leading every batch",
      "Interactive, speaking-first curriculum ensuring functional fluency",
      "Complete mock exam series grading reading, writing, listening, speaking",
      "Dedicated visa interview preparation and mock sessions included"
    ],
    whoShouldJoin: [
      "Students preparing to study at public universities in Germany",
      "Healthcare professionals (nurses, doctors) migrating to German clinics",
      "Software engineers seeking EU Blue Card career opportunities",
      "Language enthusiasts aiming for certified fluency"
    ],
    learningOutcomes: [
      "Fluently hold complex everyday and professional debates in German",
      "Pass the official Goethe-Institut A1 to C2 exams with high scores",
      "Write coherent structured essays, business letters, and reports",
      "Confidently navigate visa interview questions at the German Embassy"
    ],
    classFormats: ["On-Campus (Morning/Evening batches)", "Live Synchronous Online", "One-on-One Custom Mentorship"]
  },
  {
    id: "crs-ielts",
    slug: "ielts-preparation",
    title: "IELTS Exam Masterclass (Academic & General)",
    metaTitle: "IELTS Coaching Classes | Achieve 7.5+ Band Score",
    metaDescription: "Score 7.5+ overall bands with British Council and IDP certified trainers. TIMED assessment simulations, strategy workshops, and weekend bootcamps.",
    shortDescription: "Unlock migration visa points and global university admissions.",
    longDescription: "Prepare for your IELTS Academic or General Training exam with confidence. Our strategic masterclass focuses on diagnostic assessments, timed speaking simulations, and step-by-step essay blueprints, teaching you the exact methodology examiners use to assign band scores.",
    durationLabel: "8 Weeks Program",
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
    faculty: [facultyList[1]],
    testimonials: [testimonialsList[1]],
    faqs: [faqsList[1], faqsList[3]],
    studentResults: [studentResultsList[1]],
    benefits: [
      "British Council and IDP certified exam experts",
      "12 full-length, examiner-graded mock exams with diagnostic scorecards",
      "Daily individual essay evaluation and correction sessions",
      "Timed mock interview bootcamps replicating test conditions"
    ],
    whoShouldJoin: [
      "Students preparing to enter English-speaking universities abroad",
      "Professionals migrating to Canada (PR via Express Entry) or Australia",
      "Nurses and pharmacists seeking work credentials in the UK or US",
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
    title: "PTE Academic Strategy Preparation",
    metaTitle: "PTE Academic Prep Classes | AI-Score Evaluation",
    metaDescription: "Master the Pearson Test of English (PTE) with AI-simulated scoring engines. Interactive practice modules, strategy templates, and live correction.",
    shortDescription: "AI-optimized training tailored for high scores in computer-delivered exams.",
    longDescription: "Achieve your target score in the computer-delivered Pearson Test of English (PTE) Academic exam. Our program combines expert trainer strategies with simulated software assessments, training you on specific microphone techniques and oral scoring patterns.",
    durationLabel: "6 Weeks Core Course",
    nextBatchStartDate: "2026-08-25",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Introduction & Strategy Templates",
        durationWeeks: 2,
        weeklyHours: 8,
        description: "Understand the AI grading parameters and learn template structures for speaking/writing tasks.",
        modules: ["AI Scoring Parameters", "Read Aloud & Repeat Sentence Drill", "Describe Image & Re-tell Lecture Templates", "Write Essay Standardized Structure"]
      },
      {
        levelCode: "Interactive Lab Bootcamps",
        durationWeeks: 3,
        weeklyHours: 10,
        description: "Practice exam question types in our simulated testing lab, refining microphone delivery.",
        modules: ["Summarize Written Text & Dictation", "Fill in the Blanks & Re-order Paragraphs", "Microphone Placement & Voice Pitch Tuning", "High-frequency Repeat Question Bank"]
      },
      {
        levelCode: "Full AI Mock Drills",
        durationWeeks: 1,
        weeklyHours: 12,
        description: "Complete full mock exams evaluated by software that simulates the official PTE algorithm.",
        modules: ["3 AI-graded Mock Examinations", "Diagnostic Performance Analysis Reports", "Trainer Consultation to fix weak sections", "Final Test Strategies"]
      }
    ],
    faculty: [facultyList[1]],
    testimonials: [testimonialsList[1]],
    faqs: [faqsList[1], faqsList[2]],
    studentResults: [studentResultsList[2]],
    benefits: [
      "AI scoring engine mimicking the official Pearson algorithm",
      "Proven speaking strategy templates to secure max grammar and fluency points",
      "Daily practice in our computer testing lab environment",
      "Curriculum targeting high-frequency exam questions"
    ],
    whoShouldJoin: [
      "Working professionals migrating to Australia (Subclass 189/190/491)",
      "Students targeting universities accepting PTE Academic worldwide",
      "Candidates seeking a faster computer-graded alternative to IELTS",
      "Applicants needing immediate exam results (results ready in 48 hours)"
    ],
    learningOutcomes: [
      "Secure a target score of 79+ (equivalent to IELTS Band 8) in all bands",
      "Understand computer grading triggers for fluency, pronunciation, and spelling",
      "Read aloud and repeat complex sentences with correct intonation and speed",
      "Successfully write summarized texts and dictate sentences under tight limits"
    ],
    classFormats: ["Computer Lab In-Person Batches", "Live Interactive Remote Classes", "Weekend Strategy Crash Course"]
  },
  {
    id: "crs-pd",
    slug: "personality-development",
    title: "Personality Development & Professional Communication",
    metaTitle: "Personality Development Classes | Public Speaking",
    metaDescription: "Master corporate presentation skills, workplace etiquette, and mock interviews. Designed for job seekers and college graduates.",
    shortDescription: "Build workplace confidence, public speaking authority, and leadership skills.",
    longDescription: "Prepare for competitive job markets with our transformational communication program. From accent correction and public speaking to mock group discussions and resume optimization, this course is designed to build your professional confidence.",
    durationLabel: "4 Weeks Boot Camp",
    nextBatchStartDate: "2026-09-05",
    maxClassSize: "5-7",
    levels: [
      {
        levelCode: "Spoken Polish & Confidence",
        durationWeeks: 2,
        weeklyHours: 6,
        description: "Overcome speaking hesitation, correct common grammar errors, and polish your basic vocabulary.",
        modules: ["Removing Stage Fear & Hesitation", "Accent Correction & Tone Training", "Body Language & Non-Verbal Signals", "Everyday Professional Introductions"]
      },
      {
        levelCode: "Corporate Interview Readiness",
        durationWeeks: 2,
        weeklyHours: 8,
        description: "Learn structure strategies for corporate recruitment processes, mock interviews, and resume updates.",
        modules: ["HR Interview Question Frameworks", "Group Discussions Practice", "Resume Formatting & Cover Letters", "LinkedIn Networking Strategies"]
      }
    ],
    faculty: [facultyList[2]],
    testimonials: [testimonialsList[2]],
    faqs: [faqsList[0], faqsList[3]],
    studentResults: [studentResultsList[2]],
    benefits: [
      "Led by former HR Directors and certified corporate coaches",
      "Practical workshops featuring video-recorded presentation diagnostics",
      "Individual mock interviews with detailed feedback summaries",
      "Custom CV re-drafting and LinkedIn profile optimization"
    ],
    whoShouldJoin: [
      "Fresh college graduates preparing for campus placement interviews",
      "Working professionals looking to transition to leadership roles",
      "Individuals seeking to overcome stage fear and improve public speaking",
      "Job seekers experiencing obstacles in passing HR interview stages"
    ],
    learningOutcomes: [
      "Present and speak in public without stage fear or hesitation",
      "Draft a structured, applicant-tracking-system (ATS) optimized resume",
      "Answer difficult HR and situational questions confidently in interviews",
      "Project professional body language, handshake etiquette, and business manners"
    ],
    classFormats: ["Interactive On-Campus Workshops", "Live Weekend Remote Workshops"]
  }
];
