import React from 'react';
import { Quote, Award, ShieldCheck, CheckCircle2, Sparkles, MessageCircle, Star } from 'lucide-react';

interface DirectorCardProps {
  variant?: 'spotlight' | 'sidebar';
}

export default function DirectorCard({ variant = 'spotlight' }: DirectorCardProps) {
  const whatsappMessage = encodeURIComponent(
    "Hi TGLA, I would like to schedule a consultation with the Founder & Director regarding language programs."
  );

  if (variant === 'sidebar') {
    return (
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-section-alt via-card to-section-alt border-2 border-purple/35 shadow-xl flex flex-col gap-6 overflow-hidden hover:border-purple/55 transition-all duration-300">
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple via-amber-500 to-indigo-600" />
        
        {/* Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
        <span className="absolute top-6 right-6 text-purple/20 pointer-events-none">
          <Quote className="w-16 h-16" />
        </span>

        {/* Header: Photo + Name + Designation */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10 text-center sm:text-left">
          {/* Large Director Image */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-3xl overflow-hidden border-2 border-purple/40 shadow-xl ring-4 ring-purple/15 bg-purple/10">
              <img
                src="/images/leadership/pinki-rana.jpg"
                alt="Ms. Pinki Rana - Founder & Director, The Global Language Academy"
                loading="lazy"
                width={300}
                height={300}
                className="w-full h-full object-cover object-[center_12%] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple text-white shadow-md border border-white/20">
              <Award className="w-3 h-3 text-amber-300" />
              Founder &amp; Director
            </span>
          </div>

          <div className="flex flex-col gap-1.5 mt-2 sm:mt-0">
            <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-purple">
              <Sparkles className="w-3 h-3" />
              Director&apos;s Message
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">
              Ms. Pinki Rana
            </h3>
            <p className="text-xs sm:text-sm font-bold text-purple">
              Founder &amp; Director
            </p>
            <span className="text-xs font-semibold text-navy-muted">
              The Global Language Academy (TGLA)
            </span>
            <div className="inline-flex items-center justify-center sm:justify-start gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 mt-1">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>20+ Years Education Leadership</span>
            </div>
          </div>
        </div>

        {/* Director's Quote */}
        <div className="border-t border-card-border/80 pt-5 flex flex-col gap-3 relative z-10">
          <p className="text-sm sm:text-base font-medium italic text-navy leading-relaxed font-sans">
            &ldquo;Education is the definitive pathway to unlocking youth potential worldwide. At TGLA, our purpose is not just to teach grammar rules, but to give each student the self-assurance, practical fluency, and accredited credentials needed to succeed globally.&rdquo;
          </p>

          <div className="flex flex-col gap-2 pt-3 border-t border-card-border/60">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>ISO 9001:2015 Quality Management Oversight</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-navy-muted">
              <CheckCircle2 className="w-4 h-4 text-purple shrink-0" />
              <span>Empowering 1,000+ Global Achievers Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Spotlight Variant (Featured on Homepage and About Page Faculty Section)
  return (
    <div className="relative p-6 sm:p-9 lg:p-10 rounded-3xl bg-gradient-to-br from-card via-section-alt to-card border-2 border-purple/35 hover:border-purple/55 shadow-xl transition-all duration-300 overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple via-amber-500 to-indigo-600" />
      
      {/* Ambient Decorative Lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <span className="absolute top-8 right-8 text-purple/15 pointer-events-none hidden sm:block">
        <Quote className="w-24 h-24" />
      </span>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-7 sm:gap-9 lg:gap-11 relative z-10">
        
        {/* Left Column: Large Director Portrait & Badges */}
        <div className="flex flex-col items-center gap-3.5 shrink-0 text-center w-full md:w-auto">
          <div className="relative">
            {/* Generous High-Impact Photo Frame */}
            <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-3xl overflow-hidden bg-purple/10 border-2 border-purple/40 shadow-2xl ring-4 ring-purple/20 shrink-0 group">
              <img
                src="/images/leadership/pinki-rana.jpg"
                alt="Ms. Pinki Rana - Founder & Director, The Global Language Academy"
                loading="lazy"
                width={320}
                height={320}
                className="w-full h-full object-cover object-[center_12%] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Prominent Floating Role Badge */}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-purple text-white shadow-lg border border-white/20">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Founder &amp; Director
            </span>
          </div>

          {/* Micro-Trust Tags below photo */}
          <div className="mt-3 flex flex-col items-center gap-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>20+ Years Leadership</span>
            </span>
            <span className="text-[11px] font-semibold text-navy-muted">
              Executive Mentor &amp; Visionary
            </span>
          </div>
        </div>

        {/* Right Column: Narrative, Message & Credentials */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left w-full">
          
          {/* Header Badges + Name */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest bg-purple/10 text-purple border border-purple/25">
                <Sparkles className="w-3 h-3 text-purple" />
                Institutional Leadership &amp; Vision
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                ISO 9001:2015 Oversight
              </span>
            </div>

            <div className="mt-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy tracking-tight">
                Ms. Pinki Rana
              </h3>
              <p className="text-sm sm:text-base font-bold text-purple mt-0.5">
                Founder &amp; Director, The Global Language Academy
              </p>
            </div>
          </div>

          {/* Director's Welcome & Philosophy */}
          <div className="relative bg-section-alt/80 rounded-2xl p-4 sm:p-5 border border-card-border/80 text-navy">
            <p className="text-sm sm:text-base italic font-sans font-medium text-navy/95 leading-relaxed">
              &ldquo;Education is the definitive pathway to unlocking youth potential worldwide. At TGLA, our purpose is not just to teach grammar rules, but to give each student the self-assurance, practical fluency, and accredited credentials needed to succeed globally.&rdquo;
            </p>
          </div>

          {/* 4 Pillars of Leadership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-card border border-card-border text-xs font-semibold text-navy">
              <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
              <span>Over 20+ Years in Education &amp; Consulting</span>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-card border border-card-border text-xs font-semibold text-navy">
              <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
              <span>Strict Batch Cap (5 to 7 Students / Batch)</span>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-card border border-card-border text-xs font-semibold text-navy">
              <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
              <span>Curriculum Aligned with CEFR &amp; Goethe Benchmarks</span>
            </div>
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-card border border-card-border text-xs font-semibold text-navy">
              <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
              <span>Global University &amp; Career Placement Guidance</span>
            </div>
          </div>

          {/* Connect / Inquire CTA */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href={`https://wa.me/919217999511?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-purple hover:bg-purple-dark text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Director&apos;s Office</span>
            </a>
            <span className="text-xs text-navy-muted font-medium">
              Direct guidance for serious learners &amp; parents
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
