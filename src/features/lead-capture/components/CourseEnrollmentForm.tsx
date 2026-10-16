"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect, Suspense } from 'react';
import { 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Phone, 
  Mail, 
  GraduationCap, 
  Award, 
  MapPin, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { courseEnrollmentLeadSchema, CourseEnrollmentLeadInput } from '../types';
import { submitCourseEnrollmentLead } from '../actions/submitCourseEnrollmentLead';
import { trackLeadSubmission } from '@/lib/analytics';

export type CourseSlug = CourseEnrollmentLeadInput['courseSlug'];

interface CourseConfig {
  badge: string;
  title: string;
  description: string;
  successBadge: string;
  levelLabel: string;
  levelPlaceholder: string;
  levelOptions: string[];
  trustBenefit: string;
  returnPath: string;
}

const COURSE_CONFIGS: Record<CourseSlug, CourseConfig> = {
  'french-language': {
    badge: "Free French Consultation",
    title: "Book Your French Consultation",
    description: "Reserve your 1-on-1 language assessment & consultation session with DELF / CEFR certified faculty.",
    successBadge: "Merci beaucoup!",
    levelLabel: "Current French Level",
    levelPlaceholder: "Select your French level...",
    levelOptions: [
      "Beginner / No prior knowledge",
      "A1 Level (Beginner)",
      "A2 Level (Elementary)",
      "B1 Level (Intermediate)",
      "B2 Level (Upper-Intermediate)",
      "C1 / C2 Level (Advanced Fluency)",
      "TEF / TCF Canada Exam Prep"
    ],
    trustBenefit: "Free DELF Demo",
    returnPath: "/courses/french-language"
  },
  'japanese-language': {
    badge: "Free Japanese Assessment",
    title: "Book Your Japanese Consultation",
    description: "Reserve your 1-on-1 language assessment & consultation session with certified JLPT faculty.",
    successBadge: "Arigatō gozaimasu!",
    levelLabel: "Target / Current JLPT Level",
    levelPlaceholder: "Select your Japanese level...",
    levelOptions: [
      "Beginner / No prior knowledge",
      "JLPT N5 (Beginner)",
      "JLPT N4 (Elementary)",
      "JLPT N3 (Intermediate)",
      "JLPT N2 (Pre-Advanced)",
      "JLPT N1 (Advanced Fluency)"
    ],
    trustBenefit: "Free JLPT Demo",
    returnPath: "/courses/japanese-language"
  },
  'spoken-english': {
    badge: "Free English Assessment",
    title: "Book Your English Consultation",
    description: "Reserve your 1-on-1 fluency assessment & counseling session with senior communication coaches.",
    successBadge: "Welcome aboard!",
    levelLabel: "Current Fluency Level",
    levelPlaceholder: "Select your current English level...",
    levelOptions: [
      "Beginner (Basic English / Hesitation)",
      "Intermediate (Grammar & Sentence Construction)",
      "Advanced (Fluency, Accent & Public Speaking)",
      "Working Professional (Business Communication)",
      "Spoken English + Personality Development"
    ],
    trustBenefit: "Free Fluency Check",
    returnPath: "/courses/spoken-english"
  },
  'pte-academic': {
    badge: "Free PTE AI Assessment",
    title: "Book Your PTE Consultation",
    description: "Reserve your 1-on-1 PTE diagnostic score evaluation with Pearson certified master trainers.",
    successBadge: "All set!",
    levelLabel: "Target Score / PTE Level",
    levelPlaceholder: "Select your target score...",
    levelOptions: [
      "First Time Test Taker (Strategy Needed)",
      "Targeting 58+ (Competent English / Student Visa)",
      "Targeting 65+ (Proficient English / University & PR)",
      "Targeting 79+ (Superior English / Maximum PR Points)",
      "PTE Academic (Study Abroad)",
      "PTE Core (Canada PR)"
    ],
    trustBenefit: "Free Mock Evaluation",
    returnPath: "/courses/pte-academic"
  },
  'ielts-preparation': {
    badge: "Free IELTS Band Assessment",
    title: "Book Your IELTS Consultation",
    description: "Reserve your 1-on-1 band assessment and personalized score roadmap with certified faculty.",
    successBadge: "All set!",
    levelLabel: "Target Band / Module",
    levelPlaceholder: "Select your target band / module...",
    levelOptions: [
      "First Time Test Taker (Band Assessment Needed)",
      "Targeting Band 6.5 - 7.0 (Undergrad / Postgrad)",
      "Targeting Band 7.5 - 8.0+ (Top Universities / Medical)",
      "Targeting Band 8.0+ (CLB 9 / 10 for Canada PR)",
      "IELTS Academic (Higher Education)",
      "IELTS General Training (Work & PR)"
    ],
    trustBenefit: "Free Band Evaluation",
    returnPath: "/courses/ielts-preparation"
  }
};

function CourseEnrollmentFormInner({ courseSlug }: { courseSlug: CourseSlug }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const config = COURSE_CONFIGS[courseSlug];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CourseEnrollmentLeadInput>({
    resolver: zodResolver(courseEnrollmentLeadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      education: "",
      level: "",
      learningMode: "",
      courseSlug: courseSlug,
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    }
  });

  // Keep courseSlug in sync
  useEffect(() => {
    setValue('courseSlug', courseSlug);
  }, [courseSlug, setValue]);

  // Capture UTM parameters from URL
  useEffect(() => {
    if (searchParams) {
      setValue('utmSource', searchParams.get('utm_source') || 'direct');
      setValue('utmMedium', searchParams.get('utm_medium') || 'web');
      setValue('utmCampaign', searchParams.get('utm_campaign') || 'organic');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: CourseEnrollmentLeadInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitCourseEnrollmentLead(data);
      setIsSubmitting(false);

      if (result.success) {
        trackLeadSubmission(`${courseSlug}_lead_form`, data.level);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('gla_form_submitted', Date.now().toString());
          window.dispatchEvent(new Event('gla_form_submitted'));
        }
        const returnPath = pathname || config.returnPath;
        router.push(`/thank-you?submitted=true&from=${encodeURIComponent(returnPath)}&course=${encodeURIComponent(courseSlug)}`);
      } else {
        setSubmitResult(result);
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitResult({ success: false, message: 'An unexpected error occurred. Please try again.' });
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-card border border-card-border p-8 rounded-2xl shadow-xl text-center flex flex-col items-center justify-center gap-6 animate-fade-in text-navy min-h-[420px]">
        <div className="p-4 bg-purple/10 rounded-full border border-purple/20 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-purple" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple">{config.successBadge}</span>
          <h3 className="text-2xl font-bold font-display text-navy tracking-tight">Booking Confirmed</h3>
          <p className="text-sm text-navy-muted leading-relaxed max-w-sm">
            {submitResult.message}
          </p>
        </div>
        <button
          onClick={() => setSubmitResult(null)}
          className="mt-2 w-full px-6 py-3 bg-purple text-white text-xs font-bold tracking-wide uppercase rounded-xl shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-card-border p-6 sm:p-7 rounded-2xl shadow-xl flex flex-col gap-4 text-navy">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-purple/10 text-purple px-2.5 py-0.5 rounded-full border border-purple/20">
            <Sparkles className="w-3 h-3 text-purple" />
            {config.badge}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold font-display text-navy tracking-tight">{config.title}</h3>
        <p className="text-xs text-navy-muted leading-relaxed mt-0.5">
          {config.description}
        </p>
      </div>

      {submitResult && !submitResult.success && (
        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 rounded-xl flex items-start gap-2.5 text-xs">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{submitResult.message}</span>
        </div>
      )}

      {/* Row 1: Full Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor={`enroll-name-${courseSlug}`} className="text-xs font-semibold text-navy flex items-center gap-1">
          <span>Full Name</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
            <User className="w-4 h-4" />
          </div>
          <input
            id={`enroll-name-${courseSlug}`}
            type="text"
            placeholder="e.g. Rohit Sen"
            {...register('name')}
            disabled={isSubmitting}
            className={`w-full pl-10 pr-3.5 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none placeholder:text-navy-muted/50 ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
            }`}
          />
        </div>
        {errors.name && (
          <span className="text-[11px] text-red-500 font-semibold">{errors.name.message}</span>
        )}
      </div>

      {/* Row 2: Contact Number & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Contact Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor={`enroll-phone-${courseSlug}`} className="text-xs font-semibold text-navy flex items-center gap-1">
            <span>Contact Number</span>
            <span className="text-red-500 font-bold">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-navy-muted font-bold text-xs border-r border-card-border pr-2.5 pointer-events-none">
              <Phone className="w-3.5 h-3.5 text-navy-muted/70" />
              <span>+91</span>
            </div>
            <input
              id={`enroll-phone-${courseSlug}`}
              type="tel"
              maxLength={10}
              placeholder="9217999511"
              {...register('phone')}
              disabled={isSubmitting}
              className={`w-full pl-18 pr-3.5 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none placeholder:text-navy-muted/50 ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
              }`}
            />
          </div>
          {errors.phone && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor={`enroll-email-${courseSlug}`} className="text-xs font-semibold text-navy flex items-center gap-1">
            <span>Email Address</span>
            <span className="text-red-500 font-bold">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id={`enroll-email-${courseSlug}`}
              type="email"
              placeholder="e.g. rohit@example.com"
              {...register('email')}
              disabled={isSubmitting}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none placeholder:text-navy-muted/50 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
              }`}
            />
          </div>
          {errors.email && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Row 3: Current Education Qualification */}
      <div className="flex flex-col gap-1">
        <label htmlFor={`enroll-edu-${courseSlug}`} className="text-xs font-semibold text-navy flex items-center gap-1">
          <span>Current Education Qualification</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
            <GraduationCap className="w-4 h-4" />
          </div>
          <select
            id={`enroll-edu-${courseSlug}`}
            {...register('education')}
            disabled={isSubmitting}
            className={`w-full pl-10 pr-10 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none appearance-none cursor-pointer ${
              errors.education
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
            }`}
          >
            <option value="" className="bg-card text-navy">Select your qualification...</option>
            <option value="School Student" className="bg-card text-navy">School Student</option>
            <option value="College Student" className="bg-card text-navy">College Student</option>
            <option value="Graduate" className="bg-card text-navy">Graduate</option>
            <option value="Working Professional" className="bg-card text-navy">Working Professional</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-muted pointer-events-none">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {errors.education && (
          <span className="text-[11px] text-red-500 font-semibold">{errors.education.message}</span>
        )}
      </div>

      {/* Row 4: Level & Mode of Learning */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Course Specific Level */}
        <div className="flex flex-col gap-1">
          <label htmlFor={`enroll-level-${courseSlug}`} className="text-xs font-semibold text-navy flex items-center gap-1">
            <span>{config.levelLabel}</span>
            <span className="text-red-500 font-bold">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
              <Award className="w-4 h-4" />
            </div>
            <select
              id={`enroll-level-${courseSlug}`}
              {...register('level')}
              disabled={isSubmitting}
              className={`w-full pl-10 pr-10 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none appearance-none cursor-pointer ${
                errors.level
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
              }`}
            >
              <option value="" className="bg-card text-navy">{config.levelPlaceholder}</option>
              {config.levelOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-card text-navy">
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-muted pointer-events-none">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errors.level && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.level.message}</span>
          )}
        </div>

        {/* Preferred Mode of Learning */}
        <div className="flex flex-col gap-1">
          <label htmlFor={`enroll-mode-${courseSlug}`} className="text-xs font-semibold text-navy flex items-center gap-1">
            <span>Preferred Mode</span>
            <span className="text-red-500 font-bold">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
              <MapPin className="w-4 h-4" />
            </div>
            <select
              id={`enroll-mode-${courseSlug}`}
              {...register('learningMode')}
              disabled={isSubmitting}
              className={`w-full pl-10 pr-10 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none appearance-none cursor-pointer ${
                errors.learningMode
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
              }`}
            >
              <option value="" className="bg-card text-navy">Select learning mode...</option>
              <option value="Offline – Dwarka" className="bg-card text-navy">Offline – Dwarka Campus</option>
              <option value="Online" className="bg-card text-navy">Online (Live Interactive)</option>
              <option value="Either Online or Offline" className="bg-card text-navy">Either Online or Offline</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-muted pointer-events-none">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errors.learningMode && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.learningMode.message}</span>
          )}
        </div>
      </div>

      {/* Hidden inputs */}
      <input type="hidden" {...register('courseSlug')} />
      <input type="hidden" {...register('utmSource')} />
      <input type="hidden" {...register('utmMedium')} />
      <input type="hidden" {...register('utmCampaign')} />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative group overflow-hidden bg-gradient-to-r from-purple via-purple to-purple-hover text-white py-3 px-5 rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-purple/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Reserving Consultation...</span>
          </>
        ) : (
          <>
            <span>Book Your Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {/* Trust Badges Footer */}
      <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-navy-muted font-medium flex-wrap">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-purple shrink-0" /> 100% Privacy
        </span>
        <span className="text-card-border">•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-purple shrink-0" /> Quick Callback
        </span>
        <span className="text-card-border">•</span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-purple shrink-0" /> {config.trustBenefit}
        </span>
      </div>
    </form>
  );
}

export default function CourseEnrollmentForm({ courseSlug }: { courseSlug: CourseSlug }) {
  return (
    <Suspense fallback={
      <div className="bg-card border border-card-border p-6 md:p-8 rounded-2xl shadow-xl flex flex-col gap-5 text-navy animate-pulse min-h-[460px] justify-center items-center">
        <Loader2 className="w-8 h-8 text-purple animate-spin" />
        <span className="text-xs text-navy-muted mt-2">Loading consultation form...</span>
      </div>
    }>
      <CourseEnrollmentFormInner courseSlug={courseSlug} />
    </Suspense>
  );
}

// Named exports for convenient direct usage in views:
export function FrenchLeadForm() {
  return <CourseEnrollmentForm courseSlug="french-language" />;
}

export function JapaneseLeadForm() {
  return <CourseEnrollmentForm courseSlug="japanese-language" />;
}

export function SpokenEnglishLeadForm() {
  return <CourseEnrollmentForm courseSlug="spoken-english" />;
}

export function PteLeadForm() {
  return <CourseEnrollmentForm courseSlug="pte-academic" />;
}

export function IeltsLeadForm() {
  return <CourseEnrollmentForm courseSlug="ielts-preparation" />;
}
