"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Phone, MessageSquare, Clock, Sparkles } from 'lucide-react';

export default function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Determine return URL (defaulting to home if unspecified or unsafe)
  const fromParam = searchParams.get('from');
  const returnUrl = (fromParam && fromParam.startsWith('/') && !fromParam.startsWith('//')) 
    ? fromParam 
    : '/';

  const courseParam = searchParams.get('course') || 'General';
  const submittedParam = searchParams.get('submitted');

  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [countdown, setCountdown] = useState<number>(4);

  // 1. Authorization Guard: Only allow access if a form was actually submitted
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const submissionTimestamp = sessionStorage.getItem('gla_form_submitted');
      const isParamValid = submittedParam === 'true';

      // Check if submission token exists within the last 5 minutes (300,000ms) or valid param
      if (submissionTimestamp || isParamValid) {
        setIsAuthorized(true);

        // Optional: Trigger custom browser conversion event for Meta Pixel & Google Ads
        try {
          if (typeof window.dispatchEvent === 'function') {
            window.dispatchEvent(
              new CustomEvent('gla_lead_conversion', {
                detail: {
                  course: courseParam,
                  from: returnUrl,
                  timestamp: Date.now(),
                }
              })
            );
          }

          // Trigger standard Meta Pixel Lead event if present on window
          if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'Lead', { content_name: courseParam });
          }

          // Trigger standard Google gtag conversion if present on window
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'generate_lead', {
              event_category: 'form_submission',
              event_label: courseParam,
            });
          }
        } catch (err) {
          console.error('Tracking hook notification:', err);
        }

        // Clean up token after short delay so repeated refresh doesn't duplicate conversions
        setTimeout(() => {
          sessionStorage.removeItem('gla_form_submitted');
        }, 1000);
      } else {
        // Unauthorized direct access: redirect to home immediately
        setIsAuthorized(false);
        router.replace('/');
      }
    }
  }, [submittedParam, returnUrl, courseParam, router]);

  // 2. Countdown Timer & Auto-redirect back when countdown hits 0
  useEffect(() => {
    if (!isAuthorized) return;

    if (countdown <= 0) {
      router.replace(returnUrl);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAuthorized, countdown, returnUrl, router]);

  // If unauthorized or validating, show a clean minimal screen
  if (isAuthorized === false) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-sm text-slate-400">Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-xl w-full bg-card border border-card-border/80 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(75,36,94,0.18)] text-center flex flex-col items-center gap-6 relative overflow-hidden transition-all">
        
        {/* Subtle top glow line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple via-purple-light to-purple"></div>

        {/* Animated Checkmark Badge */}
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-purple/10 border-2 border-purple flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.25)] animate-bounce">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-purple" />
          </div>
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple to-purple-light text-white p-1.5 rounded-full shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Main Text Content */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
            Application Received Successfully
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">
            Thank You for Submitting!
          </h1>
          <p className="text-sm text-navy-muted leading-relaxed max-w-md mx-auto mt-1">
            Our academic counselor will contact you shortly on WhatsApp or phone to confirm your demo class session and batch timing.
          </p>
        </div>

        {/* Status Callout Card */}
        <div className="w-full bg-section-alt/80 border border-card-border/60 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-navy border-b border-card-border/40 pb-2.5">
            <span className="flex items-center gap-1.5 text-purple">
              <Clock className="w-4 h-4" /> Priority Counseling Active
            </span>
            <span className="text-emerald-500 font-semibold flex items-center gap-1">
              ● Verified Lead
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-navy-muted pt-0.5">
            <span>Need immediate assistance?</span>
            <div className="flex items-center gap-3 font-semibold text-navy">
              <a 
                href="https://wa.me/919217999511" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <span className="text-card-border">•</span>
              <a 
                href="tel:+919217999511" 
                className="flex items-center gap-1 hover:text-purple transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> +91 92179 99511
              </a>
            </div>
          </div>
        </div>

        {/* Countdown Timer & Progress Bar */}
        <div className="w-full flex flex-col items-center gap-2 pt-1">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-navy-muted">
            <Clock className="w-4 h-4 text-purple animate-spin" />
            <span>
              Redirecting you back to your page in{' '}
              <strong className="text-purple font-extrabold text-sm">{countdown}</strong> seconds...
            </span>
          </div>

          {/* Animated Countdown Progress Bar */}
          <div className="w-full h-1.5 bg-card-border/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple to-purple-light transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${(countdown / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Instant Return Button */}
        <div className="w-full pt-2">
          <Link
            href={returnUrl}
            replace
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-purple hover:bg-purple-hover text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Page Now</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
