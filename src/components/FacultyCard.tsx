import { CheckCircle2, GraduationCap } from 'lucide-react';
import { FacultyMember } from '@/types';

interface FacultyCardProps {
  faculty: FacultyMember;
  layout?: 'horizontal' | 'vertical';
}

export default function FacultyCard({ faculty, layout = 'horizontal' }: FacultyCardProps) {
  const hasPhoto = Boolean(faculty.avatar?.src && faculty.avatar.src.trim() !== "");

  if (layout === 'vertical') {
    return (
      <div className="group bg-card border border-card-border/80 hover:border-purple/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-[0_20px_50px_rgba(75,36,94,0.12)] dark:hover:shadow-[0_20px_50px_rgba(147,51,234,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full justify-between gap-6">
        
        {/* Top Profile Header */}
        <div className="flex flex-col items-center text-center gap-4">
          
          {/* Avatar / Photo Container */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-section-alt border-2 border-purple/25 shadow-md group-hover:border-purple group-hover:scale-102 transition-all duration-300 shrink-0">
            {hasPhoto ? (
              <img
                src={faculty.avatar.src}
                alt={faculty.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#00122E] via-purple/30 to-[#00122E] text-white">
                <span className="text-3xl font-extrabold font-display tracking-wider text-white">
                  {faculty.name.split(' ').map(n => n.charAt(0)).join('')}
                </span>
              </div>
            )}
          </div>

          {/* Name & Role */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple/10 text-purple border border-purple/20 px-3 py-0.5 rounded-full">
              {faculty.role}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-display text-navy tracking-tight mt-0.5">
              {faculty.name}
            </h3>
          </div>

          {/* Bio */}
          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed font-medium">
            {faculty.bio}
          </p>
        </div>

        {/* Credentials Checklist */}
        <div className="border-t border-card-border/60 pt-4 mt-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-muted mb-3 flex items-center justify-center sm:justify-start gap-1.5">
            <GraduationCap className="w-4 h-4 text-purple" />
            Qualifications & Highlights
          </span>
          <ul className="flex flex-col gap-2">
            {faculty.credentials.map((cred, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs font-semibold text-navy bg-section-alt/60 p-2.5 rounded-xl border border-card-border/40 hover:border-purple/30 transition-colors text-left"
              >
                <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                <span className="leading-tight">{cred}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }

  // Horizontal Layout (for German course & other course landing pages)
  return (
    <div className="group bg-card border border-card-border/80 hover:border-purple/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(75,36,94,0.12)] dark:hover:shadow-[0_20px_50px_rgba(147,51,234,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-stretch">
      
      {/* Left Column: Photo Area */}
      <div className="w-full md:w-5/12 relative bg-section-alt/60 p-6 sm:p-8 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-card-border/60">
        <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-full md:h-full md:min-h-[320px] rounded-2xl overflow-hidden bg-white/5 border-2 border-purple/25 shadow-md group-hover:scale-[1.02] transition-transform duration-500">
          {hasPhoto ? (
            <img
              src={faculty.avatar.src}
              alt={faculty.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full min-h-[260px] flex items-center justify-center bg-gradient-to-br from-[#00122E] via-purple/30 to-[#00122E] text-white">
              <span className="text-4xl font-extrabold font-display text-white">
                {faculty.name.split(' ').map(n => n.charAt(0)).join('')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Information */}
      <div className="w-full md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-widest bg-purple/10 text-purple border border-purple/20 px-3 py-1 rounded-full w-fit">
            {faculty.role}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">
            {faculty.name}
          </h3>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-navy-muted leading-relaxed font-medium">
          {faculty.bio}
        </p>

        {/* Qualifications & Credentials List */}
        <div className="border-t border-card-border/60 pt-5 mt-auto">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-navy-muted mb-3.5 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-purple" />
            Qualifications & Highlights
          </span>
          <ul className="flex flex-col gap-2.5">
            {faculty.credentials.map((cred, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-navy bg-section-alt/60 hover:bg-purple/5 p-3 rounded-xl border border-card-border/40 hover:border-purple/30 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-purple shrink-0 mt-0.5" />
                <span className="leading-snug">{cred}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}
