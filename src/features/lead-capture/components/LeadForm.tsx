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
  BookOpen, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { leadFormSchema, LeadFormInput } from '../types';
import { submitLead } from '../actions/submitLead';
import { trackLeadSubmission } from '@/lib/analytics';

function LeadFormInner({ defaultCourse = "", onSuccess }: { defaultCourse?: string; onSuccess?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<LeadFormInput>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      course: defaultCourse,
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    }
  });

  useEffect(() => {
    if (defaultCourse) {
      setValue('course', defaultCourse);
    }
  }, [defaultCourse, setValue]);

  // Capture UTM parameters from URL parameters
  useEffect(() => {
    if (searchParams) {
      setValue('utmSource', searchParams.get('utm_source') || 'direct');
      setValue('utmMedium', searchParams.get('utm_medium') || 'web');
      setValue('utmCampaign', searchParams.get('utm_campaign') || 'organic');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: LeadFormInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Invoke Next.js Server Action
      const result = await submitLead(data);
      setIsSubmitting(false);

      if (result.success) {
        trackLeadSubmission('general_lead_form', data.course);
        if (onSuccess) {
          onSuccess();
        }
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('gla_form_submitted', Date.now().toString());
          window.dispatchEvent(new Event('gla_form_submitted'));
        }
        const returnPath = pathname || '/';
        router.push(`/thank-you?submitted=true&from=${encodeURIComponent(returnPath)}&course=${encodeURIComponent(data.course || 'general')}`);
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
      <div className="bg-card border border-card-border p-8 rounded-2xl shadow-xl text-center flex flex-col items-center justify-center gap-6 animate-fade-in text-foreground min-h-[380px]">
        <div className="p-4 bg-purple/10 rounded-full border border-purple/20 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-purple" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple">Consultation Requested</span>
          <h3 className="text-2xl font-bold font-display text-navy tracking-tight">Booking Confirmed!</h3>
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
            Free 1-on-1 Consultation
          </span>
        </div>
        <h3 className="text-xl font-extrabold font-display text-navy tracking-tight">Book Your Free Consultation</h3>
        <p className="text-xs text-navy-muted leading-relaxed mt-0.5">
          Fill in your details to reserve a complimentary counseling session with our language specialists.
        </p>
      </div>

      {submitResult && !submitResult.success && (
        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 rounded-xl flex items-start gap-2.5 text-xs">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{submitResult.message}</span>
        </div>
      )}

      {/* Name Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lead-name" className="text-xs font-semibold text-navy flex items-center gap-1">
          <span>Full Name</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
            <User className="w-4 h-4" />
          </div>
          <input
            id="lead-name"
            type="text"
            placeholder="e.g. Rohit Sen"
            {...register('name')}
            disabled={isSubmitting}
            className={`w-full pl-10 pr-3.5 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none placeholder:text-navy-muted/50 ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </div>
        {errors.name && (
          <span id="name-error" className="text-[11px] text-red-500 font-semibold">{errors.name.message}</span>
        )}
      </div>

      {/* Phone Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lead-phone" className="text-xs font-semibold text-navy flex items-center gap-1">
          <span>Contact Number</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-navy-muted font-bold text-xs border-r border-card-border pr-2.5 pointer-events-none">
            <Phone className="w-3.5 h-3.5 text-navy-muted/70" />
            <span>+91</span>
          </div>
          <input
            id="lead-phone"
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
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
        </div>
        {errors.phone && (
          <span id="phone-error" className="text-[11px] text-red-500 font-semibold">{errors.phone.message}</span>
        )}
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lead-email" className="text-xs font-semibold text-navy flex items-center gap-1">
          <span>Email Address</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
            <Mail className="w-4 h-4" />
          </div>
          <input
            id="lead-email"
            type="email"
            placeholder="e.g. rohit.sen@example.com"
            {...register('email')}
            disabled={isSubmitting}
            className={`w-full pl-10 pr-3.5 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none placeholder:text-navy-muted/50 ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </div>
        {errors.email && (
          <span id="email-error" className="text-[11px] text-red-500 font-semibold">{errors.email.message}</span>
        )}
      </div>

      {/* Course Selector */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lead-course" className="text-xs font-semibold text-navy flex items-center gap-1">
          <span>Course Applied</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted/70 pointer-events-none">
            <BookOpen className="w-4 h-4" />
          </div>
          <select
            id="lead-course"
            {...register('course')}
            disabled={isSubmitting}
            className={`w-full pl-10 pr-10 py-2.5 bg-card text-navy border rounded-xl text-sm transition-all focus:outline-none appearance-none cursor-pointer ${
              errors.course
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-card-border hover:border-purple/40 focus:border-purple focus:ring-2 focus:ring-purple/20'
            }`}
            aria-invalid={errors.course ? 'true' : 'false'}
            aria-describedby={errors.course ? 'course-error' : undefined}
          >
            <option value="" className="bg-card text-navy">Select Course Applied...</option>
            <option value="german-language" className="bg-card text-navy">German Language (A1 - C2)</option>
            <option value="french-language" className="bg-card text-navy">French Language (A1 - C2)</option>
            <option value="japanese-language" className="bg-card text-navy">Japanese Language (JLPT Preparation)</option>
            <option value="spoken-english" className="bg-card text-navy">Spoken English Course (3 Levels)</option>
            <option value="spoken-english-personality" className="bg-card text-navy">Spoken English + Personality Development</option>
            <option value="personality-development" className="bg-card text-navy">Personality Development (Working Professionals)</option>
            <option value="ielts-preparation" className="bg-card text-navy">IELTS Exam Masterclass</option>
            <option value="pte-academic" className="bg-card text-navy">PTE Strategy</option>
            <option value="visa-admission-guidance" className="bg-card text-navy">Germany Study & Visa Counselling</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-muted pointer-events-none">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {errors.course && (
          <span id="course-error" className="text-[11px] text-red-500 font-semibold">{errors.course.message}</span>
        )}
      </div>

      {/* Hidden UTM inputs */}
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
            <span>Scheduling Consultation...</span>
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
          <Sparkles className="w-3.5 h-3.5 text-purple shrink-0" /> Free Guidance
        </span>
      </div>
    </form>
  );
}

export default function LeadForm({ defaultCourse = "", onSuccess }: { defaultCourse?: string; onSuccess?: () => void }) {
  return (
    <Suspense fallback={
      <div className="bg-card border border-card-border p-6 md:p-8 rounded-2xl shadow-xl flex flex-col gap-5 text-navy animate-pulse min-h-[400px] justify-center items-center">
        <Loader2 className="w-8 h-8 text-purple animate-spin" />
        <span className="text-xs text-navy-muted mt-2">Loading secure form...</span>
      </div>
    }>
      <LeadFormInner defaultCourse={defaultCourse} onSuccess={onSuccess} />
    </Suspense>
  );
}
