import React from 'react';
import Image from 'next/image';
import { MessageCircle, CheckCircle2, UserCheck, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { counselorProfile } from '@/data/courses-db';

interface CounselorCardProps {
  counselor?: typeof counselorProfile;
}

export default function CounselorCard({ counselor = counselorProfile }: CounselorCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi TGLA, I would like to consult with Ms. Priya Arora (Admissions Councillor) regarding course selection and admission guidance.`
  );

  return (
    <div className="group bg-card border border-card-border/90 hover:border-purple/40 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-emerald-500 to-indigo-500" />
      
      {/* Ambient Decorative Lighting */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 lg:gap-9 relative z-10">
        
        {/* Left Column: Portrait & Trust */}
        <div className="flex flex-col items-center gap-3 shrink-0 text-center w-full md:w-auto">
          <div className="relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-purple/10 border-2 border-purple/30 shadow-md ring-4 ring-purple/10 shrink-0 group-hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={counselor.avatar.src}
                alt={`${counselor.name} - ${counselor.role}`}
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Active Status Badge */}
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-white shadow-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions Councillor
            </span>
          </div>

          {/* Micro-Trust Highlights */}
          <div className="mt-2.5 flex flex-col items-center gap-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <UserCheck className="w-3 h-3 text-emerald-500" />
              <span>1-on-1 Student Guidance</span>
            </div>
            <span className="text-[11px] font-semibold text-navy-muted">
              Dwarka Campus &amp; Online
            </span>
          </div>
        </div>

        {/* Right Column: Information, Bio & Responsibilities */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left w-full">
          
          {/* Header Badges + Title */}
          <div className="flex flex-col gap-1.5 items-center md:items-start">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-purple/10 text-purple border border-purple/20">
                <Sparkles className="w-3 h-3 text-purple" />
                {counselor.role}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Dedicated Student Support
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight mt-1">
              {counselor.name}
            </h3>
            <span className="text-xs font-semibold text-purple font-sans">
              The Global Language Academy (TGLA)
            </span>
          </div>

          {/* Counselor Bio */}
          <p className="text-sm sm:text-base text-navy-muted leading-relaxed font-sans">
            {counselor.bio}
          </p>

          {/* Key Advisory Capabilities Grid */}
          <div className="pt-2">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-navy mb-2.5 flex items-center justify-center md:justify-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple" />
              Key Student Advisory Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
              {counselor.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-section-alt/70 border border-card-border/60 text-xs font-semibold text-navy"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span className="leading-snug">{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={`https://wa.me/919217999511?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Chat with Admissions Councillor</span>
            </a>
            <span className="text-xs text-navy-muted font-medium">
              Free consultation &amp; level assessment
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
