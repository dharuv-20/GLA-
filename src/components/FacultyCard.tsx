import { Award } from 'lucide-react';
import { FacultyMember } from '@/types';

export default function FacultyCard({ faculty }: { faculty: FacultyMember }) {
  return (
    <div className="bg-card border border-card-border p-6 rounded-xl shadow-sm hover-lift flex flex-col gap-4">
      {/* Icon Profile Header */}
      <div className="flex gap-4 items-start">
        <div className="w-14 h-14 rounded-full bg-navy text-white dark:text-purple font-display font-bold text-xl flex items-center justify-center border-2 border-purple shrink-0">
          {faculty.name.split(' ').map(n => n.charAt(0)).join('')}
        </div>
        <div>
          <h4 className="text-base font-bold font-display text-navy">{faculty.name}</h4>
          <span className="text-xs font-semibold text-purple">{faculty.role}</span>
        </div>
      </div>

      {/* Intro Bio */}
      <p className="text-xs text-navy-muted leading-relaxed">
        {faculty.bio}
      </p>

      {/* Credentials Checklist */}
      <div className="border-t border-card-border pt-4 mt-auto">
        <span className="text-[10px] font-bold uppercase tracking-wider text-navy mb-2 block">Credentials</span>
        <ul className="flex flex-col gap-1.5">
          {faculty.credentials.map((cred, idx) => (
            <li key={idx} className="flex items-center gap-1.5 text-xs text-navy font-medium">
              <Award className="w-4 h-4 text-purple shrink-0" />
              <span>{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
