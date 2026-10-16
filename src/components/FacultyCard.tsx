import { CheckCircle2, Award, GraduationCap, Clock, Sparkles, MessageCircle, Users, Star } from 'lucide-react';
import { FacultyMember } from '@/types';

interface FacultyCardProps {
  faculty: FacultyMember;
  layout?: 'horizontal' | 'vertical';
}

export default function FacultyCard({ faculty, layout = 'horizontal' }: FacultyCardProps) {
  const hasPhoto = Boolean(faculty.avatar?.src && faculty.avatar.src.trim() !== "");

  // Fallback credentials if empty
  const credentials = faculty.credentials && faculty.credentials.length > 0 ? faculty.credentials : [
    "Certified Language Educator",
    "Comprehensive CEFR Framework Specialist",
    "Interactive Spoken Communication Focus"
  ];

  // Pick an icon based on credential content
  const getCredentialIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('diploma') || lower.includes('degree') || lower.includes('certified')) {
      return GraduationCap;
    }
    if (lower.includes('year') || lower.includes('experience')) {
      return Clock;
    }
    return Award;
  };

  const whatsappMessage = encodeURIComponent(
    `Hi TGLA, I would like to book a consultation session with ${faculty.name} (${faculty.role}).`
  );

  if (layout === 'vertical') {
    return (
      <div className="group bg-card border border-card-border hover:border-purple/40 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-pink-500 to-indigo-500" />
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple/10 rounded-full blur-2xl pointer-events-none" />

        <div>
          {/* Header with Photo & Role */}
          <div className="flex flex-col items-center text-center gap-4 mb-5">
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-purple/10 border-2 border-purple/30 shadow-md ring-4 ring-purple/10 shrink-0">
                {hasPhoto ? (
                  <img
                    src={faculty.avatar.src}
                    alt={`${faculty.name} - ${faculty.role}`}
                    loading="lazy"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#00122E] via-purple/40 to-[#00122E] text-white">
                    <span className="text-3xl font-extrabold font-display tracking-wider text-white">
                      {faculty.name.split(' ').map(n => n.charAt(0)).join('')}
                    </span>
                  </div>
                )}
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Active Faculty
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 mt-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/10 text-purple border border-purple/20 px-3 py-0.5 rounded-full">
                {faculty.role}
              </span>
              <h3 className="text-2xl font-extrabold font-display text-navy tracking-tight">
                {faculty.name}
              </h3>
            </div>
          </div>

          {/* Bio */}
          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed text-center mb-5 font-sans">
            {faculty.bio}
          </p>

          {/* Credentials */}
          <div className="space-y-2 pt-3 border-t border-card-border/60">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-muted block mb-2 text-center">
              Verified Qualifications
            </span>
            {credentials.map((cred, idx) => {
              const IconComponent = getCredentialIcon(cred);
              return (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-section-alt/70 border border-card-border/60 text-xs font-semibold text-navy"
                >
                  <IconComponent className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                  <span className="leading-snug">{cred}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-5 mt-5 border-t border-card-border/60">
          <a
            href={`https://wa.me/919217999511?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple/10 hover:bg-purple text-purple hover:text-white font-bold text-xs border border-purple/20 transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect with {faculty.name}</span>
          </a>
        </div>
      </div>
    );
  }

  // Horizontal Featured Card (Default - High-end UI for German Course & About pages)
  return (
    <div className="group bg-card border border-card-border/90 hover:border-purple/40 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-pink-500 to-indigo-500" />
      
      {/* Subtle Ambient Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 lg:gap-9 relative z-10">
        
        {/* Left Column: Trainer Portrait & Micro-Trust */}
        <div className="flex flex-col items-center gap-3 shrink-0 text-center w-full md:w-auto">
          <div className="relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-purple/10 border-2 border-purple/30 shadow-md ring-4 ring-purple/10 shrink-0 group-hover:scale-[1.02] transition-transform duration-300">
              {hasPhoto ? (
                <img
                  src={faculty.avatar.src}
                  alt={`${faculty.name} - ${faculty.role}`}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#00122E] via-purple/40 to-[#00122E] text-white">
                  <span className="text-3xl font-extrabold font-display tracking-wider text-white">
                    {faculty.name.split(' ').map(n => n.charAt(0)).join('')}
                  </span>
                </div>
              )}
            </div>

            {/* Active Status Badge */}
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500 text-white shadow-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Active Faculty
            </span>
          </div>

          {/* Quick Credential Highlights */}
          <div className="mt-2.5 flex flex-col items-center gap-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>5.0 Verified Rating</span>
            </div>
            <span className="text-[11px] font-semibold text-navy-muted">
              5 to 7 Students / Batch
            </span>
          </div>
        </div>

        {/* Right Column: Information, Bio & Qualifications */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left w-full">
          
          {/* Header: Role Badges + Name */}
          <div className="flex flex-col gap-1.5 items-center md:items-start">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-purple/10 text-purple border border-purple/20">
                <Sparkles className="w-3 h-3 text-purple" />
                {faculty.role}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Verified Mentor
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight mt-1">
              {faculty.name}
            </h3>
          </div>

          {/* Trainer Bio */}
          <p className="text-sm sm:text-base text-navy-muted leading-relaxed font-sans">
            {faculty.bio}
          </p>

          {/* Credentials Grid */}
          <div className="pt-2">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-navy mb-2.5 flex items-center justify-center md:justify-start gap-1.5">
              <Award className="w-4 h-4 text-purple" />
              Verified Credentials &amp; Expertise
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
              {credentials.map((cred, idx) => {
                const IconComponent = getCredentialIcon(cred);
                const isOddLast = idx === credentials.length - 1 && credentials.length % 2 !== 0;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-2xl bg-section-alt/80 border border-card-border/80 hover:border-purple/35 transition-colors shadow-2xs ${
                      isOddLast ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-purple/10 text-purple shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-navy leading-snug">{cred}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Bar: Trust Points + WhatsApp CTA */}
          <div className="border-t border-card-border/80 pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-muted">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-[11px] font-semibold text-navy">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple" />
                Micro-Batches (5 to 7 Students)
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                ✓ 1-on-1 Speaking Immersion
              </span>
            </div>

            <a
              href={`https://wa.me/919217999511?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Consultation with {faculty.name}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
