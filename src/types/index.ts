export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavigationLink {
  label: string;
  href: string;
  isExternal: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  avatar: ImageAsset;
  credentials: string[];
  bio: string;
}

export interface StudentResult {
  id: string;
  studentName: string;
  courseName: string;
  scoreLabel: string;
  resultImage: ImageAsset;
  verifiedDate: string;
}

export interface CourseLevel {
  levelCode: string;
  durationWeeks: number;
  weeklyHours: number;
  description: string;
  modules: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  longDescription: string;
  durationLabel: string;
  nextBatchStartDate: string;
  maxClassSize: string;
  levels: CourseLevel[];
  faculty: FacultyMember[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  studentResults: StudentResult[];
  benefits: string[];
  whoShouldJoin: string[];
  learningOutcomes: string[];
  classFormats: string[];
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorAvatar: ImageAsset;
  ratingStars: number;
  quote: string;
  outcomeTag: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  icon: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: 'IELTS' | 'PTE' | 'German' | 'Career';
  author: string;
  readTime: string;
  excerpt: string;
  body: string;
}
