"use client";

import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect, Suspense } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { germanLeadFormSchema, GermanLeadFormInput } from '../types';
import { submitGermanLead } from '../actions/submitGermanLead';

function GermanLeadFormInner() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<GermanLeadFormInput>({
    resolver: zodResolver(germanLeadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      education: "",
      germanLevel: "",
      learningMode: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    }
  });

  // Capture UTM parameters from URL
  useEffect(() => {
    if (searchParams) {
      setValue('utmSource', searchParams.get('utm_source') || 'direct');
      setValue('utmMedium', searchParams.get('utm_medium') || 'web');
      setValue('utmCampaign', searchParams.get('utm_campaign') || 'organic');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: GermanLeadFormInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    // Invoke Server Action
    const result = await submitGermanLead(data);

    setIsSubmitting(false);
    setSubmitResult(result);

    if (result.success) {
      reset({
        name: "",
        phone: "",
        email: "",
        education: "",
        germanLevel: "",
        learningMode: "",
        utmSource: searchParams?.get('utm_source') || 'direct',
        utmMedium: searchParams?.get('utm_medium') || 'web',
        utmCampaign: searchParams?.get('utm_campaign') || 'organic',
      });
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-card border border-card-border p-8 rounded-2xl shadow-xl text-center flex flex-col items-center justify-center gap-6 animate-fade-in text-navy min-h-[420px]">
        <div className="p-4 bg-purple-hero/10 rounded-full border border-purple-hero/20 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-purple-hero" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple">Vielen Dank!</span>
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
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/10 text-purple px-2.5 py-0.5 rounded-full border border-purple/20">
            Free Consultation
          </span>
        </div>
        <h3 className="text-xl font-extrabold font-display text-navy tracking-tight">Book Your German Demo Class</h3>
        <p className="text-xs text-navy-muted leading-relaxed mt-0.5">
          Reserve your 45-minute live trial & level assessment session with certified faculty.
        </p>
      </div>

      {submitResult && !submitResult.success && (
        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 rounded-lg flex items-start gap-2.5 text-xs">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{submitResult.message}</span>
        </div>
      )}

      {/* Row 1: Full Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="german-lead-name" className="text-[11px] font-bold uppercase tracking-wider text-navy">
          Full Name <span className="text-purple">*</span>
        </label>
        <input
          id="german-lead-name"
          type="text"
          placeholder="e.g. Rohit Sen"
          {...register('name')}
          disabled={isSubmitting}
          className={`w-full px-3.5 py-2.5 bg-card text-navy border rounded-lg text-sm transition-colors focus:outline-none ${
            errors.name ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
          }`}
        />
        {errors.name && (
          <span className="text-[11px] text-red-500 font-semibold">{errors.name.message}</span>
        )}
      </div>

      {/* Row 2: Contact Number & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Contact Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="german-lead-phone" className="text-[11px] font-bold uppercase tracking-wider text-navy">
            Contact Number <span className="text-purple">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-navy-muted font-bold border-r border-card-border pr-2">
              +91
            </span>
            <input
              id="german-lead-phone"
              type="tel"
              placeholder="9217999511"
              {...register('phone')}
              disabled={isSubmitting}
              className={`w-full pl-13 pr-3 py-2.5 bg-card text-navy border rounded-lg text-sm transition-colors focus:outline-none ${
                errors.phone ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
              }`}
            />
          </div>
          {errors.phone && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="german-lead-email" className="text-[11px] font-bold uppercase tracking-wider text-navy">
            Email Address <span className="text-purple">*</span>
          </label>
          <input
            id="german-lead-email"
            type="email"
            placeholder="rohit@example.com"
            {...register('email')}
            disabled={isSubmitting}
            className={`w-full px-3.5 py-2.5 bg-card text-navy border rounded-lg text-sm transition-colors focus:outline-none ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
            }`}
          />
          {errors.email && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Row 3: Current Education Qualification */}
      <div className="flex flex-col gap-1">
        <label htmlFor="german-lead-education" className="text-[11px] font-bold uppercase tracking-wider text-navy">
          Current Education Qualification <span className="text-purple">*</span>
        </label>
        <select
          id="german-lead-education"
          {...register('education')}
          disabled={isSubmitting}
          className={`w-full px-3.5 py-2.5 bg-card text-navy border rounded-lg text-sm transition-colors focus:outline-none appearance-none cursor-pointer ${
            errors.education ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
          }`}
        >
          <option value="" className="bg-card text-navy">Select your qualification...</option>
          <option value="School Student" className="bg-card text-navy">School Student</option>
          <option value="College Student" className="bg-card text-navy">College Student</option>
          <option value="Graduate" className="bg-card text-navy">Graduate</option>
          <option value="Working Professional" className="bg-card text-navy">Working Professional</option>
        </select>
        {errors.education && (
          <span className="text-[11px] text-red-500 font-semibold">{errors.education.message}</span>
        )}
      </div>

      {/* Row 4: German Level & Mode of Learning */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* German Level */}
        <div className="flex flex-col gap-1">
          <label htmlFor="german-lead-level" className="text-[11px] font-bold uppercase tracking-wider text-navy">
            Current German Level <span className="text-purple">*</span>
          </label>
          <select
            id="german-lead-level"
            {...register('germanLevel')}
            disabled={isSubmitting}
            className={`w-full px-3.5 py-2.5 bg-card text-navy border rounded-lg text-sm transition-colors focus:outline-none appearance-none cursor-pointer ${
              errors.germanLevel ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
            }`}
          >
            <option value="" className="bg-card text-navy">Select your level...</option>
            <option value="Beginner / No knowledge" className="bg-card text-navy">Beginner / No knowledge</option>
            <option value="A1" className="bg-card text-navy">A1 Level</option>
            <option value="A2" className="bg-card text-navy">A2 Level</option>
            <option value="B1" className="bg-card text-navy">B1 Level</option>
            <option value="B2" className="bg-card text-navy">B2 Level</option>
            <option value="C1/C2" className="bg-card text-navy">C1 / C2 Level</option>
          </select>
          {errors.germanLevel && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.germanLevel.message}</span>
          )}
        </div>

        {/* Preferred Mode of Learning */}
        <div className="flex flex-col gap-1">
          <label htmlFor="german-lead-mode" className="text-[11px] font-bold uppercase tracking-wider text-navy">
            Preferred Learning Mode <span className="text-purple">*</span>
          </label>
          <select
            id="german-lead-mode"
            {...register('learningMode')}
            disabled={isSubmitting}
            className={`w-full px-3.5 py-2.5 bg-card text-navy border rounded-lg text-sm transition-colors focus:outline-none appearance-none cursor-pointer ${
              errors.learningMode ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-purple'
            }`}
          >
            <option value="" className="bg-card text-navy">Select learning mode...</option>
            <option value="Offline – Dwarka" className="bg-card text-navy">Offline – Dwarka</option>
            <option value="Online" className="bg-card text-navy">Online</option>
            <option value="Either Online or Offline" className="bg-card text-navy">Either Online or Offline</option>
          </select>
          {errors.learningMode && (
            <span className="text-[11px] text-red-500 font-semibold">{errors.learningMode.message}</span>
          )}
        </div>
      </div>

      {/* Hidden UTM inputs */}
      <input type="hidden" {...register('utmSource')} />
      <input type="hidden" {...register('utmMedium')} />
      <input type="hidden" {...register('utmCampaign')} />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple to-purple-hover text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Reserving German Demo...</span>
          </>
        ) : (
          <span>Book Free German Demo Class &rarr;</span>
        )}
      </button>

      <p className="text-[10px] text-navy-muted text-center leading-relaxed">
        🔒 We respect your privacy. No spam. Receive confirmation details directly via WhatsApp.
      </p>
    </form>
  );
}

export default function GermanLeadForm() {
  return (
    <Suspense fallback={
      <div className="bg-card border border-card-border p-6 md:p-8 rounded-2xl shadow-xl flex flex-col gap-5 text-navy animate-pulse min-h-[460px] justify-center items-center">
        <Loader2 className="w-8 h-8 text-purple animate-spin" />
        <span className="text-xs text-navy-muted mt-2">Loading German demo form...</span>
      </div>
    }>
      <GermanLeadFormInner />
    </Suspense>
  );
}
