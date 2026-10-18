import { Course, FacultyMember, Testimonial, FAQItem, StudentResult, ServiceItem } from '../types';

export const facultyList: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Ms. Harshita Sablania",
    role: "Lead German Language Trainer",
    avatar: { src: "/images/faculty/harshita.jpg", alt: "Ms. Harshita Sablania - German Language Trainer", width: 300, height: 300 },
    credentials: [
      "Diploma in German Language",
      "5+ Years Dedicated Teaching Experience",
      "CEFR Exam Preparation Specialist"
    ],
    bio: "Ms. Harshita Sablania specializes in interactive spoken German, active grammar immersion, and comprehensive exam preparation from A1 to advanced levels."
  }
];

export const germanTestimonials: Testimonial[] = [
  {
    id: "test-de-priya",
    authorName: "Priya Verma",
    authorAvatar: { src: "", alt: "Priya Verma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "This is the best German language institute I have attended. The trainers are highly experienced, the teaching methods are practical, and the study material is excellent. Compared to other institutes, GLA provides better individual attention, flexible class schedules, and outstanding exam preparation. I highly recommend this institute to anyone serious about learning German.",
    outcomeTag: "2 months ago · 5.0 Star"
  },
  {
    id: "test-de-kiran",
    authorName: "Kiran Jagtap",
    authorAvatar: { src: "", alt: "Kiran Jagtap", width: 80, height: 80 },
    ratingStars: 5,
    quote: "My interaction with GLA during the demo session was a great experience and helped me feel confident about taking the next step toward enrollment. The demo and discussion with the German language trainer were informative and convincing. I would recommend GLA to anyone who wants to learn German from the basics and progress to advanced levels.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "test-de-shuchi",
    authorName: "Shuchi Arora",
    authorAvatar: { src: "", alt: "Shuchi Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I enrolled in both the English and German language programs at GLA. The teaching methodology is excellent, and the faculty paid special attention to improving my speaking skills. As a result, I feel much more confident speaking now. I have successfully cleared my A1 and A2 German exams and will begin preparing for B1 next. I highly recommend GLA to anyone looking to improve their language skills.",
    outcomeTag: "2 weeks ago · 5.0 Star"
  },
  {
    id: "test-de-riddhim",
    authorName: "Riddhim Sharma",
    authorAvatar: { src: "", alt: "Riddhim Sharma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I had a great experience with German and IELTS training at The Global Language Academy. The trainers are knowledgeable, supportive, and excellent at explaining concepts clearly. The individual attention, regular practice, and personalized guidance made learning easier and more effective. The overall training approach is professional, and the team is always available to answer questions and provide guidance. I would definitely recommend TGLA to anyone looking for quality German language training or IELTS preparation.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "test-de-aarav",
    authorName: "Aarav Arora",
    authorAvatar: { src: "", alt: "Aarav Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is an excellent institute. I enrolled in both the German and English language programs, and the faculty and staff were extremely helpful and supportive. The study material was informative and useful, making the learning experience even better. I had a very positive experience and would recommend GLA to anyone interested in learning these languages.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "test-de-1",
    authorName: "Rohit Sen",
    authorAvatar: { src: "", alt: "Rohit Sen", width: 80, height: 80 },
    ratingStars: 5,
    quote: "TGLA made German language study simple and intuitive. I cleared my Goethe B2 exam on my first attempt and secured admission for my Master's at the Technical University of Munich!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-2",
    authorName: "Sneha Mukherjee",
    authorAvatar: { src: "", alt: "Sneha Mukherjee", width: 80, height: 80 },
    ratingStars: 5,
    quote: "From zero German knowledge (A1) to clearing B1 in 5 months. TGLA's trainers prepared me thoroughly for the Frankfurt hospital interview and guided my complete Ausbildung visa documentation.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-3",
    authorName: "Rohan Verma",
    authorAvatar: { src: "", alt: "Rohan Verma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The small batch size (5 to 7 students) meant the trainer corrected my pronunciation every single day. I cleared Goethe A1 and A2 with 94+ marks on first attempts. Highly recommend TGLA for German!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-4",
    authorName: "Siddharth Joshi",
    authorAvatar: { src: "", alt: "Siddharth Joshi", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Cleared Goethe B2 exam and got my German Employment Visa stamped! TGLA's specialized technical vocabulary coaching and Goethe mock simulations were invaluable for my automotive engineering role in Stuttgart.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-5",
    authorName: "Priya Sharma",
    authorAvatar: { src: "", alt: "Priya Sharma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The interactive grammar sessions and daily speaking drills helped me clear Goethe B1 in just 4 months. The faculty gave personal attention to every error in my writing tasks.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-6",
    authorName: "Ankit Verma",
    authorAvatar: { src: "", alt: "Ankit Verma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Needed A2 and B1 for the German Opportunity Card (Chancenkarte). TGLA's weekend batch fits perfectly around full-time job hours. Cleared both levels with great scores!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-7",
    authorName: "Neha Gupta",
    authorAvatar: { src: "", alt: "Neha Gupta", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I scored 96% in Goethe A1! Ms. Harshita Sablania makes German fun and understandable from the very first lesson. The mock tests were identical to the real Goethe exam format.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-8",
    authorName: "Varun Kapoor",
    authorAvatar: { src: "", alt: "Varun Kapoor", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I prepared for TELC C1 Hochschule at TGLA. The academic presentation drills and complex grammar breakdowns gave me the edge I needed for my mechanical engineering degree admission in Aachen.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-de-9",
    authorName: "Simran Kaur",
    authorAvatar: { src: "", alt: "Simran Kaur", width: 80, height: 80 },
    ratingStars: 5,
    quote: "As a registered nurse heading to Hamburg, medical German was crucial. TGLA's patient dialogue simulations and B2 medical vocabulary training were top tier.",
    outcomeTag: "Verified Student"
  }
];

export const frenchTestimonials: Testimonial[] = [
  {
    id: "test-fr-1",
    authorName: "Pooja Deshmukh",
    authorAvatar: { src: "", alt: "Pooja Deshmukh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The French DELF B2 training was structured and intensive. The daily conversational sessions and TEF Canada exam strategies gave me the extra 50 CRS points I needed for my Canada PR nomination.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-2",
    authorName: "Meera Iyer",
    authorAvatar: { src: "", alt: "Meera Iyer", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I started French from scratch. The trainer's patience and active speaking exercises helped me clear DELF A2 within 3 months and now I am comfortably preparing for B1.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-3",
    authorName: "Rahul Varma",
    authorAvatar: { src: "", alt: "Rahul Varma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Inspire series textbook curriculum and audio exercises at TGLA made DELF B1 preparation effortless. Got 88/100 on my first attempt and secured admission in France!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-4",
    authorName: "Ananya Roy",
    authorAvatar: { src: "", alt: "Ananya Roy", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Targeted NCLC 7 in TEF Canada. The specialized speaking workshops and listening drills at TGLA were instrumental in achieving CLB 7 across all sections.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-5",
    authorName: "Karan Singhania",
    authorAvatar: { src: "", alt: "Karan Singhania", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 92% in DELF A1 after just 8 weeks. Small batch size ensured I had ample speaking practice every single day without feeling shy.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-6",
    authorName: "Shreya Nair",
    authorAvatar: { src: "", alt: "Shreya Nair", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Learning French opened up international hospitality opportunities in Geneva. The instructors focus on authentic accent, natural pronunciation, and practical speaking.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-7",
    authorName: "Aditya Saxena",
    authorAvatar: { src: "", alt: "Aditya Saxena", width: 80, height: 80 },
    ratingStars: 5,
    quote: "TCF Canada preparation was thoroughly covered. The essay correction rubrics and speaking simulation sessions gave me total exam-day confidence.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-fr-8",
    authorName: "Ritu Menon",
    authorAvatar: { src: "", alt: "Ritu Menon", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Needed professional French for my job at a European multinational. TGLA's corporate email writing and formal conversation modules were game-changers for my career.",
    outcomeTag: "Verified Student"
  }
];

export const japaneseTestimonials: Testimonial[] = [
  {
    id: "test-jp-1",
    authorName: "Kunal Sharma",
    authorAvatar: { src: "", alt: "Kunal Sharma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Passed JLPT N3 with 92% accuracy! The Kanji memory techniques, vocabulary mnemonics, and listening audio drills at TGLA helped me clear my technical interview with a Tokyo software firm.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-2",
    authorName: "Tanvi Patil",
    authorAvatar: { src: "", alt: "Tanvi Patil", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Learning Japanese script felt overwhelming at first, but TGLA's Hiragana and Katakana charts with interactive drills made it enjoyable. Cleared JLPT N5 with top marks in Delhi.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-3",
    authorName: "Deepak Chawla",
    authorAvatar: { src: "", alt: "Deepak Chawla", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Cleared JLPT N4 in 4 months. The 25-lesson roadmap from Minna no Nihongo paired with weekly vocabulary quizzes made every milestone crystal clear.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-4",
    authorName: "Rashi Jain",
    authorAvatar: { src: "", alt: "Rashi Jain", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Passed JLPT N2 with flying colors! The advanced reading comprehension drills and Keigo business Japanese role plays directly helped me land a bilingual project manager role.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-5",
    authorName: "Mohit Gupta",
    authorAvatar: { src: "", alt: "Mohit Gupta", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Mastered Hiragana and Katakana within the first 3 weeks. The trainers are patient and ensure each stroke order and pronunciation nuance is perfected.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-6",
    authorName: "Shweta Kulkarni",
    authorAvatar: { src: "", alt: "Shweta Kulkarni", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I pursued Japanese for translation and subtitling work. The Kanji radicals breakdown and listening audio dialogues at TGLA gave me genuine practical fluency.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-7",
    authorName: "Vikramaditya Rao",
    authorAvatar: { src: "", alt: "Vikramaditya Rao", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Secured a university student exchange program in Tokyo after completing N4. TGLA's conversational focus helped me adjust smoothly to life in Japan.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-jp-8",
    authorName: "Arushi Bansal",
    authorAvatar: { src: "", alt: "Arushi Bansal", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Cleared JLPT N5 on my first attempt with full marks in listening! The listening lab drills and teacher's accent clarity made the actual JLPT audio feel easy.",
    outcomeTag: "Verified Student"
  }
];

export const spokenEnglishTestimonials: Testimonial[] = [
  {
    id: "test-spk-shuchi",
    authorName: "Shuchi Arora",
    authorAvatar: { src: "", alt: "Shuchi Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I enrolled in both the English and German language programs at GLA. The teaching methodology is excellent, and the faculty paid special attention to improving my speaking skills. As a result, I feel much more confident speaking now in interviews and meetings.",
    outcomeTag: "2 weeks ago · 5.0 Star"
  },
  {
    id: "test-spk-aarav",
    authorName: "Aarav Arora",
    authorAvatar: { src: "", alt: "Aarav Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is an excellent institute. I enrolled in both the German and English language programs, and the faculty and staff were extremely helpful and supportive. The study material was informative and useful, making the learning experience even better.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "test-spk-1",
    authorName: "Vikram Malhotra",
    authorAvatar: { src: "", alt: "Vikram Malhotra", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Spoken English and Corporate Communication sessions completely eliminated my hesitation. The mock debates, presentations, and email etiquette coaching helped me get promoted to Team Lead at an MNC.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-2",
    authorName: "Priya Raghavan",
    authorAvatar: { src: "", alt: "Priya Raghavan", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I used to feel self-conscious speaking English in public and during client calls. The voice modulation exercises and friendly environment at TGLA gave me lifelong conversational confidence.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-3",
    authorName: "Amit Choudhary",
    authorAvatar: { src: "", alt: "Amit Choudhary", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Capstone Interview Module prepared me for tough behavioral rounds. Using the STAR framework taught by our trainer, I cleared my Senior Operations Manager interview with a 40% hike!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-4",
    authorName: "Sunita Mishra",
    authorAvatar: { src: "", alt: "Sunita Mishra", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I always understood English but struggled to speak without translating in my mind first. Within 2 months at TGLA, my hesitation completely vanished. I can now speak confidently in meetings and social gatherings.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-5",
    authorName: "Rajesh Khanna",
    authorAvatar: { src: "", alt: "Rajesh Khanna", width: 80, height: 80 },
    ratingStars: 5,
    quote: "As a finance professional, clear client communication is vital. TGLA's executive presence coaching and impromptu speech practice sharpened my delivery significantly.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-6",
    authorName: "Divya Swaminathan",
    authorAvatar: { src: "", alt: "Divya Swaminathan", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Joined before my final year campus placement drives. The group discussion sessions, resume reviews, and personal mock interviews helped me secure two Day-1 job offers!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-7",
    authorName: "Tarun Bhardwaj",
    authorAvatar: { src: "", alt: "Tarun Bhardwaj", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The 5 to 7 student micro-batch size meant I spoke for at least 20 minutes every single class. My vocabulary expanded dramatically and my stage fear is completely gone.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-spk-8",
    authorName: "Mansi Agarwal",
    authorAvatar: { src: "", alt: "Mansi Agarwal", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The combination of Spoken English and Personality Development transformed my communication. I now lead client onboarding calls and presentations effortlessly.",
    outcomeTag: "Verified Student"
  }
];

export const ieltsTestimonials: Testimonial[] = [
  {
    id: "test-ielts-riddhim",
    authorName: "Riddhim Sharma",
    authorAvatar: { src: "", alt: "Riddhim Sharma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I had a great experience with IELTS preparation at The Global Language Academy. The trainers are knowledgeable, supportive, and excellent at explaining exam strategies. The personalized guidance and regular practice made achieving my target band score much easier.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "test-ielts-1",
    authorName: "Dr. Ananya Mehta",
    authorAvatar: { src: "", alt: "Dr. Ananya Mehta", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Balancing a demanding hospital schedule with IELTS prep was tough. TGLA's flexible timings and targeted writing diagnostic feedback helped me achieve an overall 8.0 Band for my UK GMC registration.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-2",
    authorName: "Amanpreet Singh",
    authorAvatar: { src: "", alt: "Amanpreet Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I was stuck at 6.5 in IELTS Writing for months. TGLA's essay blueprints and 1-on-1 feedback broke my plateau, pushing my score to Band 8.0 in Speaking and 7.5 in Writing (CLB 9 achieved!).",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-3",
    authorName: "Harpreet Gill",
    authorAvatar: { src: "", alt: "Harpreet Gill", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 8.5 in Listening and 8.0 in Speaking! The Cambridge past papers practice and daily speaking cue card drills at TGLA gave me complete command over the exam format.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-4",
    authorName: "Gaurav Taneja",
    authorAvatar: { src: "", alt: "Gaurav Taneja", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Raised my overall score from 6.0 to 7.5 in just 6 weeks. The reading skimming and scanning techniques saved me at least 15 minutes during the actual test.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-5",
    authorName: "Shruti Deshpande",
    authorAvatar: { src: "", alt: "Shruti Deshpande", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Secured Band 8.0 for my Master's at the University of Manchester. The essay structure templates and vocabulary boosters eliminated all my Task 2 anxiety.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-6",
    authorName: "Nikhil Oberoi",
    authorAvatar: { src: "", alt: "Nikhil Oberoi", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I needed 8777 in IELTS General Training for Canada PR Express Entry. TGLA's mock test evaluations matched the official British Council examiner standards perfectly.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-7",
    authorName: "Jasleen Kaur",
    authorAvatar: { src: "", alt: "Jasleen Kaur", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Achieved Band 7.5 in Academic IELTS. The 1-on-1 speaking mock sessions with recorded feedback pinpointed my exact grammatical slips before test day.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-ielts-8",
    authorName: "Abhishek Sen",
    authorAvatar: { src: "", alt: "Abhishek Sen", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Unlimited computer-delivered IELTS (CDI) portal simulations at TGLA made the digital test feel second nature. Scored an overall 8.0 band on my very first try!",
    outcomeTag: "Verified Student"
  }
];

export const pteTestimonials: Testimonial[] = [
  {
    id: "test-pte-1",
    authorName: "Devansh Dixit",
    authorAvatar: { src: "", alt: "Devansh Dixit", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 84/90 in my PTE Academic exam! The AI mock assessments and voice pitch coaching were identical to the real Pearson software. Got my Australian Skilled Migration PR invite within weeks.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-2",
    authorName: "Rahul Nair",
    authorAvatar: { src: "", alt: "Rahul Nair", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 82/90 overall in PTE Academic! The computer testing lab at TGLA and real-time AI scoring gave me immense confidence on test day. Cleared my target in just 25 days of preparation.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-3",
    authorName: "Kartik Sundaram",
    authorAvatar: { src: "", alt: "Kartik Sundaram", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 90/90 in Speaking and 86 in Listening! The Describe Image and Re-tell Lecture templates at TGLA work like magic without pausing or hesitating.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-4",
    authorName: "Shalini Pillai",
    authorAvatar: { src: "", alt: "Shalini Pillai", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Needed 79+ in each section for Australia 20 migration points. TGLA's Write From Dictation and Repeat Sentence daily banks made the difference. Cleared with 81 overall!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-5",
    authorName: "Manpreet Bhatia",
    authorAvatar: { src: "", alt: "Manpreet Bhatia", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Passed PTE UKVI with a 76/90 for my UK healthcare work visa. The AI microphone calibration in the lab ensured my voice clarity was scored accurately.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-6",
    authorName: "Rohit Agnihotri",
    authorAvatar: { src: "", alt: "Rohit Agnihotri", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Jumped from 58 to 81/90 in just 3 weeks! The personalized score diagnostics pinpointed that my oral fluency was dropping during Summarize Spoken Text. Fixed it fast!",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-7",
    authorName: "Jaspreet Singh",
    authorAvatar: { src: "", alt: "Jaspreet Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The full-length Pearson AI mock exams at TGLA gave me results in 2 hours with task-level analysis. I knew exactly where I stood before walking into Pearson VUE.",
    outcomeTag: "Verified Student"
  },
  {
    id: "test-pte-8",
    authorName: "Megha Rastogi",
    authorAvatar: { src: "", alt: "Megha Rastogi", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Scored 86/90 overall and received my unconditional offer letter from Melbourne University. Fast-track 48-hour strategy and daily dictation practice did wonders!",
    outcomeTag: "Verified Student"
  }
];

export const googleReviewsList: Testimonial[] = [
  {
    id: "g-rev-1",
    authorName: "Priya Verma",
    authorAvatar: { src: "", alt: "Priya Verma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "This is the best German language institute I have attended. The trainers are highly experienced, the teaching methods are practical, and the study material is excellent. Compared to other institutes, GLA provides better individual attention, flexible class schedules, and outstanding exam preparation. I highly recommend this institute to anyone serious about learning German.",
    outcomeTag: "2 months ago · 5.0 Star"
  },
  {
    id: "g-rev-2",
    authorName: "Kiran Jagtap",
    authorAvatar: { src: "", alt: "Kiran Jagtap", width: 80, height: 80 },
    ratingStars: 5,
    quote: "My interaction with GLA during the demo session was a great experience and helped me feel confident about taking the next step toward enrollment. The demo and discussion with the German language trainer were informative and convincing. I would recommend GLA to anyone who wants to learn German from the basics and progress to advanced levels.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "g-rev-3",
    authorName: "Shuchi Arora",
    authorAvatar: { src: "", alt: "Shuchi Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I enrolled in both the English and German language programs at GLA. The teaching methodology is excellent, and the faculty paid special attention to improving my speaking skills. As a result, I feel much more confident speaking now. I have successfully cleared my A1 and A2 German exams and will begin preparing for B1 next. I highly recommend GLA to anyone looking to improve their language skills.",
    outcomeTag: "2 weeks ago · 5.0 Star"
  },
  {
    id: "g-rev-4",
    authorName: "Riddhim Sharma",
    authorAvatar: { src: "", alt: "Riddhim Sharma", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I had a great experience with German and IELTS training at The Global Language Academy. The trainers are knowledgeable, supportive, and excellent at explaining concepts clearly. The individual attention, regular practice, and personalized guidance made learning easier and more effective. The overall training approach is professional, and the team is always available to answer questions and provide guidance. I would definitely recommend TGLA to anyone looking for quality German language training or IELTS preparation.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "g-rev-5",
    authorName: "Narindra Sablania",
    authorAvatar: { src: "", alt: "Narindra Sablania", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Choosing GLA was one of my best decisions. The teachers are extremely helpful, and the entire process is smooth and transparent. There are no false promises; the academy delivers what it commits to. Overall, I had a great experience and would recommend GLA to others.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "g-rev-6",
    authorName: "Aashvi Arora",
    authorAvatar: { src: "", alt: "Aashvi Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I had an amazing experience with GLA. Initially, I was skeptical about enrolling in an online coaching program, but the experience turned out to be excellent. The staff and teachers were supportive, approachable, and helpful throughout. The classes were well scheduled, and the overall learning experience was smooth and comfortable. I would definitely recommend GLA's online programs to anyone looking for a reliable language academy.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "g-rev-7",
    authorName: "Aarav Arora",
    authorAvatar: { src: "", alt: "Aarav Arora", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is an excellent institute. I enrolled in both the German and English language programs, and the faculty and staff were extremely helpful and supportive. The study material was informative and useful, making the learning experience even better. I had a very positive experience and would recommend GLA to anyone interested in learning these languages.",
    outcomeTag: "1 month ago · 5.0 Star"
  },
  {
    id: "g-rev-8",
    authorName: "Ved",
    authorAvatar: { src: "", alt: "Ved", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is amazing! The teachers are very professional and kind. They explain everything clearly and help us learn fast. I feel comfortable asking questions, and they always support me. The classes are fun and interesting. I love being here! If you want to learn a new language, this is the best place! Highly recommend!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-9",
    authorName: "Rohit",
    authorAvatar: { src: "", alt: "Rohit", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is a fantastic choice for anyone looking to enhance their language skills! With quick service and reasonably priced classes, it caters to all levels. The instructors are knowledgeable and passionate, creating an engaging learning environment. I highly recommend this academy for anyone wanting to learn a new language or improve their proficiency.",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-10",
    authorName: "Aarti",
    authorAvatar: { src: "", alt: "Aarti", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is excellent! The faculty is very professional and approachable. Booking classes is easy, and the service is quick. They have a methodical approach to teaching, which helps a lot. The academy offers many facilities. Plus, the prices are reasonable. I highly recommend this place for language learning!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-11",
    authorName: "Vanshika Gautam",
    authorAvatar: { src: "", alt: "Vanshika Gautam", width: 80, height: 80 },
    ratingStars: 5,
    quote: "My experience at The Global Language Academy was outstanding! The resourceful library offered a wealth of materials for language learning. Clean washrooms and AC classrooms ensured a comfortable environment. Plus, the quick service from staff made every visit efficient and enjoyable. A perfect place for anyone looking to enhance their language skills!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-12",
    authorName: "Bhawna Tomar",
    authorAvatar: { src: "", alt: "Bhawna Tomar", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I had a great time at The Global Language Academy! The classes are fun and interesting. I learned a lot about different languages and cultures. What I really liked is that the prices are reasonable. You get good quality lessons without spending too much money. I recommend this place to everyone who wants to learn a new language!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-13",
    authorName: "Anushka Singh",
    authorAvatar: { src: "", alt: "Anushka Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "I have had a very positive experience at this language academy. The teachers are knowledgeable and supportive, and the lessons are well-structured. It has greatly improved my language skills and confidence.",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-14",
    authorName: "Jagat Singh",
    authorAvatar: { src: "", alt: "Jagat Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is a fantastic place for anyone looking to enhance their language skills! The instructors are highly knowledgeable and create an engaging learning environment. What stands out the most is the reasonably priced courses, making it accessible for everyone. Whether you're a beginner or looking to refine your skills, this academy is definitely worth considering!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-15",
    authorName: "Bharti Rao",
    authorAvatar: { src: "", alt: "Bharti Rao", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is amazing! Their methodical approach makes learning fun and easy. I love how I can book classes quickly without any hassle. The prices are very reasonable, making it great for everyone. The teachers are friendly and supportive. I feel confident in my language skills now! I highly recommend this academy to anyone wanting to learn a new language!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-16",
    authorName: "Tanisha",
    authorAvatar: { src: "", alt: "Tanisha", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is an exceptional place for anyone looking to enhance their language skills. The AC classrooms create a comfortable learning environment, while the smartboards make lessons engaging and interactive. Their resourceful library is a treasure trove of materials. Most importantly, the expert faculty ensures that students receive top-notch guidance. Highly recommended!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-17",
    authorName: "Saurabh",
    authorAvatar: { src: "", alt: "Saurabh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is truly a gem for anyone looking to enhance their language skills. Their methodical approach to teaching is commendable, making complex concepts easy to grasp. The instructors are not only knowledgeable but also highly supportive, creating a warm learning environment. I've seen significant improvement in my fluency and confidence. Highly recommend!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-18",
    authorName: "Mansi Singh",
    authorAvatar: { src: "", alt: "Mansi Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "It was a great experience to take a demo session. It was very helpful to get knowledge about job opportunities worldwide. The trainer is very experienced and supportive.",
    outcomeTag: "18 June · 5.0 Star"
  },
  {
    id: "g-rev-19",
    authorName: "Mansi Singh Baisla",
    authorAvatar: { src: "", alt: "Mansi Singh Baisla", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Excellent academy with experienced teachers and affordable fees. The teaching method is effective, and the staff is very helpful. Highly recommended!",
    outcomeTag: "11 June · 5.0 Star"
  },
  {
    id: "g-rev-20",
    authorName: "Ajay",
    authorAvatar: { src: "", alt: "Ajay", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy stands out as an exceptional coaching center, offering personalized one-on-one mentoring that truly enhances the learning experience. With highly experienced instructors and regular evaluations, students receive tailored feedback to ensure their progress. The supportive environment fosters confidence and fluency in language skills. I highly recommend The Global Language Academy!",
    outcomeTag: "9 June · 5.0 Star"
  },
  {
    id: "g-rev-21",
    authorName: "Avirl",
    authorAvatar: { src: "", alt: "Avirl", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy is an exceptional coaching center that truly stands out. With a diverse range of quality courses, it caters to learners of all levels. The personal mentoring ensures tailored guidance, making the learning experience even more enriching. Plus, their EMI options make education accessible and reasonably priced. Highly recommend for anyone looking to enhance their language skills in a supportive environment!",
    outcomeTag: "8 June · 5.0 Star"
  },
  {
    id: "g-rev-22",
    authorName: "Sarita",
    authorAvatar: { src: "", alt: "Sarita", width: 80, height: 80 },
    ratingStars: 5,
    quote: "The Global Language Academy offers excellent courses that really help students improve their language skills. The teachers are highly experienced and know how to make learning fun and effective. They also provide EMI options, which is a big plus. Plus, the prices are reasonable for such high-quality education. Overall, I highly recommend this academy for anyone looking to learn a new language!",
    outcomeTag: "8 June · 5.0 Star"
  },
  {
    id: "g-rev-23",
    authorName: "Sarita Soni",
    authorAvatar: { src: "", alt: "Sarita Soni", width: 80, height: 80 },
    ratingStars: 5,
    quote: "An excellent teacher with outstanding teaching skills. They explain concepts clearly, make learning easy. Their patience, dedication and ability to motivate students help everyone understand and succeed. Truly inspiring and highly appreciated. All students must join The Global Language Academy — highly recommend!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-24",
    authorName: "Surender Singh",
    authorAvatar: { src: "", alt: "Surender Singh", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Easy booking with experienced team. Good experience and recommendations for all who want to learn a foreign language or improve communication.",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-25",
    authorName: "Amardeep",
    authorAvatar: { src: "", alt: "Amardeep", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Resourceful library with complete language learning materials, supportive faculty, and comfortable classrooms. Great experience!",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-26",
    authorName: "Nivedita",
    authorAvatar: { src: "", alt: "Nivedita", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Nice academy with very supportive and polite faculty. Great learning experience, well-structured lessons, and personalized attention.",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-27",
    authorName: "Gohan Kumar",
    authorAvatar: { src: "", alt: "Gohan Kumar", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Expert faculty and professional staff with quick service and well-maintained AC classrooms. Very supportive and encouraging environment.",
    outcomeTag: "21 August · 5.0 Star"
  },
  {
    id: "g-rev-28",
    authorName: "Atul",
    authorAvatar: { src: "", alt: "Atul", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Expert faculty with great guidance throughout the language course. Highly recommended for foreign language learning.",
    outcomeTag: "19 June · 5.0 Star"
  },
  {
    id: "g-rev-29",
    authorName: "Kiran Kumar",
    authorAvatar: { src: "", alt: "Kiran Kumar", width: 80, height: 80 },
    ratingStars: 5,
    quote: "Great coaching institute for foreign languages and IELTS exam preparation. Highly recommended for everyone looking for high scores!",
    outcomeTag: "2 July · 5.0 Star"
  }
];

export const testimonialsList: Testimonial[] = [
  ...googleReviewsList,
  ...germanTestimonials,
  ...frenchTestimonials,
  ...japaneseTestimonials,
  ...spokenEnglishTestimonials,
  ...ieltsTestimonials,
  ...pteTestimonials
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

export const germanFaqs: FAQItem[] = [
  {
    id: "faq-de-1",
    question: "What CEFR levels do you teach and what is the total duration?",
    answer: "TGLA covers all CEFR levels from Beginner (A1) to Mastery (C2). Total duration ranges from 2 to 18 months depending on your target level and whether you choose regular or intensive batches."
  },
  {
    id: "faq-de-2",
    question: "Are your certifications accepted for German university admissions and Ausbildung?",
    answer: "While our course completion certificate strongly supports your profile and helps you find career opportunities in the corporate job market, official German university admissions, Ausbildung programs, and German Embassy visa applications legally require an internationally recognized examination credential. Because our training is strictly aligned with the global CEFR framework, we comprehensively prepare you to crack the official Goethe or TELC examination with high scores to qualify for these opportunities."
  },
  {
    id: "faq-de-3",
    question: "What textbooks and learning resources are provided in the German course?",
    answer: "We use standard German courseware including Netzwerk neu for A1–A2, Aspekte neu for B1–C1, and authentic past Goethe/telc examination papers alongside our digital LMS portal."
  },
  {
    id: "faq-de-4",
    question: "What is the batch size for German language batches?",
    answer: "Batches are strictly capped at 5 to 7 students. This micro-batch format ensures daily individual speaking time, prompt error correction, and personalized attention from certified faculty."
  },
  {
    id: "faq-de-5",
    question: "Do you offer interview preparation for German visas and Ausbildung?",
    answer: "Yes. In addition to language coaching, TGLA provides specialized German visa interview simulations, CV (Lebenslauf) structuring, motivation letter drafting, and employer interview coaching."
  },
  {
    id: "faq-de-6",
    question: "Can I attend German classes online or in person?",
    answer: "Both options are available. You can attend in-person classes at our campus in Dwarka, New Delhi, or join live synchronous interactive classes via our online portal."
  }
];

export const frenchFaqs: FAQItem[] = [
  {
    id: "faq-fr-1",
    question: "Which textbooks are used in the TGLA French course?",
    answer: "Our French language curriculum is structured around the renowned Inspire French series: Inspire 1 for A1, Inspire 2 for A2, Inspire 3 for B1, and Inspire 4 for B2, supplemented with official cahier activities and DALF dossiers."
  },
  {
    id: "faq-fr-2",
    question: "Do you prepare students for official DELF and DALF exams?",
    answer: "Yes, our programs provide targeted preparation for DELF A1, A2, B1, B2 and DALF C1, C2, including authentic examination mock tests aligned with CIEP / France Éducation international (FEI) specifications."
  },
  {
    id: "faq-fr-3",
    question: "Can learning French help boost my Canada PR CRS score?",
    answer: "Yes! Achieving NCLC 7 (CLB 7) or higher in French via the TEF Canada or TCF Canada exam can award up to 50 additional Comprehensive Ranking System (CRS) points for Canada Express Entry."
  },
  {
    id: "faq-fr-4",
    question: "What is the batch size for French classes?",
    answer: "All French batches are kept small with 5 to 7 students, guaranteeing daily conversational practice, accent guidance, and individual writing correction."
  },
  {
    id: "faq-fr-5",
    question: "Are both weekday and weekend batches available?",
    answer: "Yes, we run flexible morning, evening, and weekend batches for working professionals, college students, and immigration applicants."
  },
  {
    id: "faq-fr-6",
    question: "How soon can a beginner achieve conversational fluency in French?",
    answer: "A dedicated beginner can achieve functional conversational fluency (A2 level) in 3 to 4 months, and intermediate workplace proficiency (B1/B2) in 6 to 9 months."
  }
];

export const japaneseFaqs: FAQItem[] = [
  {
    id: "faq-jp-1",
    question: "What textbooks and learning resources are provided in the Japanese program?",
    answer: "The course follows the Minna no Nihongo and Genki series for N5–N3, and Tobira for N2. Students also receive workbooks, audio and video listening resources, character writing sheets, and supplementary JLPT exam practice material."
  },
  {
    id: "faq-jp-2",
    question: "How is the 25-lesson syllabus structured across scripts and Kanji?",
    answer: "Hiragana lines and practice are completed in Lessons 1–5. Katakana practice is completed in Lessons 6–10. Dedicated Kanji instruction begins in Lesson 12 and continues through Lesson 21, followed by revision drills in Lessons 22–25 and a comprehensive final test including a daily-life conversation check."
  },
  {
    id: "faq-jp-3",
    question: "Which JLPT levels do you prepare students for?",
    answer: "We prepare learners for all levels of the Japanese Language Proficiency Test: JLPT N5 (Beginner), N4 (Elementary), N3 (Intermediate), N2 (Business Level), and N1 (Advanced/Native)."
  },
  {
    id: "faq-jp-4",
    question: "What is the batch size for Japanese classes?",
    answer: "Classes are limited to 5 to 7 students per batch, allowing our Japanese instructors to personally review Kanji stroke order, verify pronunciation, and conduct dialogue drills."
  },
  {
    id: "faq-jp-5",
    question: "Does TGLA assist with Japanese corporate interview preparation?",
    answer: "Yes. We offer business Japanese (Keigo) workshops, Japanese corporate culture briefings, and mock interview practice for candidates targeting IT and engineering roles in Japan."
  },
  {
    id: "faq-jp-6",
    question: "Do you offer consultation sessions before enrollment?",
    answer: "Yes! Prospective learners can attend a complimentary 1-on-1 language consultation session to experience our interactive teaching pedagogy firsthand."
  }
];

export const spokenEnglishFaqs: FAQItem[] = [
  {
    id: "faq-spk-1",
    question: "How is the 3-level Spoken English course structured?",
    answer: "The course spans 3 months across three progressive levels: Level 1 Beginner (A1→A2, core grammar & basic usage), Level 2 Intermediate (B1→B2, speaking activities & writing skills), and Level 3 Advanced (C1→C2, reading, listening, advanced speaking/writing, and a Capstone Interview Preparation module). Batches run 3–4 sessions per week with assessments at the end of each level."
  },
  {
    id: "faq-spk-2",
    question: "How does the Personality Development Add-On work with Spoken English?",
    answer: "Personality Development is offered as an optional 2-month professional add-on designed for working professionals. You can enroll in Spoken English on its own, combine it with Personality Development for complete personal and executive transformation, or take Personality Development as a standalone program."
  },
  {
    id: "faq-spk-3",
    question: "What is covered in the Capstone Interview Preparation module?",
    answer: "The Capstone module in Month 3 covers HR essentials ('Tell me about yourself', strengths/weaknesses), behavioral questions using the STAR method, body language, mock interviews with recorded feedback, salary negotiation, GD simulations, and video interview etiquette."
  },
  {
    id: "faq-spk-4",
    question: "What is the batch size and daily speaking practice model?",
    answer: "All batches are capped at 5 to 7 students to guarantee daily 1-on-1 speaking time and personalized feedback. Learners actively participate in extempore speaking, roleplays, debates, and accent neutralization drills."
  },
  {
    id: "faq-spk-5",
    question: "Will this course help me eliminate regional accent / MTI?",
    answer: "Yes, our voice and speech modules include specialized phonetics drills, mouth-movement exercises, and Mother Tongue Influence (MTI) removal techniques guided by certified accent trainers."
  },
  {
    id: "faq-spk-6",
    question: "Do you offer weekday and weekend batches?",
    answer: "Yes, we offer morning, evening, and weekend batches to suit college students, job seekers, and working executives."
  }
];

export const ieltsFaqs: FAQItem[] = [
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
    question: "How many mock tests are included in the program?",
    answer: "TGLA provides unlimited full-length offline mock tests in our testing lab and online computer-delivered IELTS (CDI) portal simulations at no additional cost throughout your course enrolment."
  },
  {
    id: "faq-ielts-5",
    question: "How quickly are IELTS results delivered?",
    answer: "For Computer-Delivered IELTS (CDI), results are typically available online in 3–5 days. For paper-based testing, official Test Report Forms (TRF) are issued within 13 days of the test date."
  },
  {
    id: "faq-ielts-6",
    question: "What is the batch size and speaking evaluation model?",
    answer: "Batches have strictly 5 to 7 students. Every learner receives daily 1-on-1 speaking interview evaluations with recorded feedback and examiner band scoring rubrics."
  }
];

export const pteFaqs: FAQItem[] = [
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
  },
  {
    id: "faq-pte-5",
    question: "Do you have a dedicated computer lab for mock practice?",
    answer: "Yes, our Dwarka center features a dedicated computer lab equipped with high-fidelity headsets identical to Pearson VUE testing centers, running real-time AI-scored mock simulations."
  },
  {
    id: "faq-pte-6",
    question: "What is the batch size for PTE Strategy classes?",
    answer: "PTE batches are strictly limited to 5 to 7 learners. This ensures personalized microphone pitch calibration, template mastery, and daily dictation error tracking."
  }
];

export const faqsList: FAQItem[] = [
  ...germanFaqs,
  ...frenchFaqs,
  ...japaneseFaqs,
  ...spokenEnglishFaqs,
  ...ieltsFaqs,
  ...pteFaqs
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
    metaTitle: "German Language Classes (A1 - C2) | Goethe & TELC Exam Prep | TGLA",
    metaDescription: "Learn German from certified instructors at TGLA. Level-wise courses (A1 to C2) tailored for Goethe/TELC certification, Ausbildung, and German university admissions.",
    shortDescription: "Learn German with confidence through structured learning, practical communication, Goethe exam preparation, and career pathways in Germany at The Global Language Academy.",
    longDescription: "Master German grammar, listening, and speaking through our specialized immersion methodology. Designed to take candidates from absolute beginners (A1) to advanced proficiency (C2), this program focuses on building functional communication skills alongside rigorous Goethe and TELC exam preparation.",
    durationLabel: "2 to 18 Months",
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
    testimonials: germanTestimonials,
    faqs: germanFaqs,
    studentResults: [studentResultsList[0]],
    benefits: [
      "Certified trainers leading every small batch (5 to 7 students)",
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
      "Pass the official Goethe or TELC exams with confidence",
      "Write coherent structured essays, business letters, and reports",
      "Confidently navigate visa interview questions at the German Embassy"
    ],
    classFormats: ["On-Campus (Morning/Evening batches)", "Live Synchronous Online", "One-on-One Custom Mentorship"]
  },
  {
    id: "crs-french",
    slug: "french-language",
    title: "French Language Program (A1 - C2)",
    metaTitle: "French Language Classes (A1-C2) | DELF DALF Prep | TGLA",
    metaDescription: "Learn French with confidence at The Global Language Academy. Structured Inspire syllabus from A1 to B2 plus DALF C1 & C2 exam preparation in Delhi NCR.",
    shortDescription: "Learn French with confidence through structured learning, practical communication, and examination-focused preparation at The Global Language Academy.",
    longDescription: "Our French language courses are designed to help learners develop strong speaking, listening, reading, writing, pronunciation, grammar, and vocabulary skills for real-world communication and global opportunities. Follow the Inspire French series from A1 to B2, with specialized preparation for DALF C1 and C2.",
    durationLabel: "2 to 18 Months",
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
    testimonials: frenchTestimonials,
    faqs: frenchFaqs,
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
    title: "Japanese Language Program (N5 - N1)",
    metaTitle: "Japanese Language Classes (JLPT) in Delhi | TGLA",
    metaDescription: "Master Japanese with confidence. Structured 25-lesson curriculum and JLPT N5 to N1 exam preparation with certified trainers at TGLA in Delhi NCR.",
    shortDescription: "Learn Japanese with confidence through structured learning, practical communication, cultural understanding, and real-world skills at The Global Language Academy.",
    longDescription: "The Japanese Language Course at The Global Language Academy is a structured 25-lesson program developing speaking, listening, reading, and writing, including hiragana, katakana, and kanji, along with practical grammar, useful vocabulary, and JLPT preparation from N5 to N1.",
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
    testimonials: japaneseTestimonials,
    faqs: japaneseFaqs,
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
    title: "Spoken English Program (A1 - C2)",
    metaTitle: "Spoken English & Fluency Coaching in Delhi NCR | TGLA",
    metaDescription: "Boost English speaking fluency, grammar, pronunciation, and corporate presentation skills at TGLA. Interactive group discussions and 1-on-1 personalized labs.",
    shortDescription: "Improve your fluency, build confidence and master real-life communication with our Spoken English Course. Your Voice. A Brighter Tomorrow.",
    longDescription: "The Spoken English Course at The Global Language Academy is a structured 3-month program (A1 to C2) covering grammar, speaking, writing, reading, listening, and an advanced Capstone Interview Preparation module, with an optional 2-month executive Personality Development add-on for working professionals.",
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
    testimonials: spokenEnglishTestimonials,
    faqs: spokenEnglishFaqs,
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
    title: "IELTS Preparation Program (Band 7.5+)",
    metaTitle: "IELTS Coaching in Delhi NCR (Band 7.5+) | TGLA Masterclass",
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
    testimonials: ieltsTestimonials,
    faqs: ieltsFaqs,
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
    title: "PTE Strategy Program (Score 79+)",
    metaTitle: "PTE Strategy Coaching in Delhi NCR (Target 79+) | TGLA",
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
    testimonials: pteTestimonials,
    faqs: pteFaqs,
    studentResults: [studentResultsList[2]],
    benefits: [
      "Official Pearson preparation materials and scored practice platform access",
      "Full coverage of all 20 PTE task types with task-specific templates",
      "AI-scored mock tests providing real-time section and enabling skill analytics",
      "Small batches (5 to 7 students) ensuring dedicated 1-on-1 speaking correction"
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
