"use client";

import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect, Suspense } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { leadFormSchema, LeadFormInput } from '../types';
import { submitLead } from '../actions/submitLead';

function LeadFormInner({ defaultCourse = "" }: { defaultCourse?: string }) {
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
      course: defaultCourse,
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    }
  });

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

    // Invoke Next.js Server Action
    const result = await submitLead(data);

    setIsSubmitting(false);
    setSubmitResult(result);
    
    if (result.success) {
      reset({
        name: "",
        phone: "",
        course: defaultCourse,
        utmSource: searchParams?.get('utm_source') || 'direct',
        utmMedium: searchParams?.get('utm_medium') || 'web',
        utmCampaign: searchParams?.get('utm_campaign') || 'organic',
      });
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-card border border-card-border p-8 rounded-xl shadow-lg text-center flex flex-col items-center justify-center gap-6 animate-fade-in text-foreground min-h-[350px]">
        <div className="p-4 bg-purple-hero/10 rounded-full border border-purple-hero/20 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-purple-hero" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold font-display text-navy dark:text-white tracking-tight">Booking Confirmed!</h3>
          <p className="text-sm text-navy-muted dark:text-slate-300 leading-relaxed max-w-sm">
            {submitResult.message}
          </p>
        </div>
        <button
          onClick={() => setSubmitResult(null)}
          className="mt-2 w-full px-6 py-3 bg-purple text-white dark:text-slate-900 text-xs font-bold tracking-wide uppercase rounded-xl shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-card-border p-6 md:p-8 rounded-xl shadow-md flex flex-col gap-5 text-navy">
      <div>
        <h3 className="text-lg font-bold font-display text-navy mb-1">Book Your Free Demo Class</h3>
        <p className="text-xs text-navy-muted">Fill in your details to reserve a complimentary 45-minute live trial session.</p>
      </div>

      {submitResult && !submitResult.success && (
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 rounded-md flex items-start gap-2.5 text-xs">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{submitResult.message}</span>
        </div>
      )}

      {/* Name Input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-name" className="text-xs font-bold uppercase tracking-wider text-navy">Full Name</label>
        <input
          id="lead-name"
          type="text"
          placeholder="e.g. Rohit Sen"
          {...register('name')}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 bg-card text-navy border rounded-md text-sm transition-colors focus:outline-none ${
            errors.name ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
          }`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="text-xs text-red-500 font-semibold">{errors.name.message}</span>
        )}
      </div>

      {/* Phone Input */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-phone" className="text-xs font-bold uppercase tracking-wider text-navy">Contact Number</label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-navy-muted font-semibold border-r border-card-border pr-2">+91</span>
          <input
            id="lead-phone"
            type="tel"
            placeholder="9217999511"
            {...register('phone')}
            disabled={isSubmitting}
            className={`w-full pl-15 pr-4 py-3 bg-card text-navy border rounded-md text-sm transition-colors focus:outline-none ${
              errors.phone ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
            }`}
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
        </div>
        {errors.phone && (
          <span id="phone-error" className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>
        )}
      </div>

      {/* Course Selector */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-course" className="text-xs font-bold uppercase tracking-wider text-navy">Target Course</label>
        <select
          id="lead-course"
          {...register('course')}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 bg-card text-navy border rounded-md text-sm transition-colors focus:outline-none appearance-none ${
            errors.course ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
          }`}
          aria-invalid={errors.course ? 'true' : 'false'}
          aria-describedby={errors.course ? 'course-error' : undefined}
        >
          <option value="" className="bg-card text-navy">Select a Program...</option>
          <option value="german-language" className="bg-card text-navy">German Language (A1 - B2)</option>
          <option value="ielts-preparation" className="bg-card text-navy">IELTS Masterclass</option>
          <option value="pte-academic" className="bg-card text-navy">PTE Academic strategy</option>
          <option value="personality-development" className="bg-card text-navy">Personality Development</option>
          <option value="visa-admission-guidance" className="bg-card text-navy">Visa & Admission counseling</option>
        </select>
        {errors.course && (
          <span id="course-error" className="text-xs text-red-500 font-semibold">{errors.course.message}</span>
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
        className="w-full flex items-center justify-center gap-2 bg-purple text-white py-3 px-4 rounded-md font-semibold text-sm hover:bg-purple-hover hover:scale-101 active:scale-99 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Scheduling Demo...</span>
          </>
        ) : (
          <span>Book Free Demo Session &rarr;</span>
        )}
      </button>

      <p className="text-[10px] text-navy-muted text-center leading-relaxed">
        By continuing, you agree to receive automated schedule alerts on WhatsApp & Call. We respect your privacy.
      </p>
    </form>
  );
}

export default function LeadForm({ defaultCourse = "" }: { defaultCourse?: string }) {
  return (
    <Suspense fallback={
      <div className="bg-card border border-card-border p-6 md:p-8 rounded-xl shadow-md flex flex-col gap-5 text-navy animate-pulse min-h-[400px] justify-center items-center">
        <Loader2 className="w-8 h-8 text-purple animate-spin" />
        <span className="text-xs text-navy-muted mt-2">Loading secure form...</span>
      </div>
    }>
      <LeadFormInner defaultCourse={defaultCourse} />
    </Suspense>
  );
}
