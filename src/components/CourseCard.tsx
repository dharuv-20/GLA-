import Link from 'next/link';
import { Clock, Users } from 'lucide-react';
import { Course } from '@/types';

const courseImages: Record<string, string> = {
  'german-language': '/images/classroom.jpg',
  'ielts-preparation': '/images/computer-lab.jpg',
  'pte-academic': '/images/lobby.jpg',
  'personality-development': '/images/classroom.jpg',
};

export default function CourseCard({ course }: { course: Course }) {
  const imageUrl = courseImages[course.slug] || '/images/classroom.jpg';

  return (
    <div className="group flex flex-col bg-card border border-card-border/60 hover:border-purple-300/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(147,51,234,0.06)] hover:-translate-y-1.5 transition-all duration-300 h-full">
      {/* Course Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-900/5">
        {/* Category Glass Badge */}
        <span className="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-widest bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-purple border border-purple-200/30 px-3.5 py-1.5 rounded-full shadow-sm">
          {course.slug === 'personality-development' ? 'Soft Skills' : 'Language Prep'}
        </span>
        
        {/* Image with hover zoom and saturation tweak */}
        <img
          src={imageUrl}
          alt={course.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter group-hover:brightness-105"
        />
        {/* Gradient shadow overlay for better card depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00122E]/40 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-grow flex flex-col gap-5">
        {/* Title & Desc */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-xl font-extrabold font-display text-navy tracking-tight group-hover:text-purple transition-colors duration-200 line-clamp-1">
            {course.title}
          </h3>
          <p className="text-xs text-navy-muted leading-relaxed line-clamp-2 font-medium">
            {course.shortDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-card-border/60 pt-5 mt-auto">
          {/* Duration Card Metric */}
          <div className="flex gap-2.5 items-center bg-section-alt/45 p-3 rounded-xl border border-card-border/30">
            <div className="p-2 rounded-lg bg-purple/10 text-purple shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-extrabold tracking-wider text-navy-muted">Duration</span>
              <span className="text-xs font-extrabold text-navy mt-0.5 leading-none">{course.durationLabel}</span>
            </div>
          </div>
          
          {/* Batch Size Card Metric */}
          <div className="flex gap-2.5 items-center bg-section-alt/45 p-3 rounded-xl border border-card-border/30">
            <div className="p-2 rounded-lg bg-purple/10 text-purple shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-extrabold tracking-wider text-navy-muted">Batch Size</span>
              <span className="text-xs font-extrabold text-navy mt-0.5 leading-none">{course.maxClassSize} Max</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card CTA Footer */}
      <div className="p-5 bg-section-alt/30 border-t border-card-border/50 grid grid-cols-2 gap-3 mt-auto">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex justify-center items-center py-2.5 px-3 border border-navy/20 hover:border-purple/35 text-navy text-xs font-bold rounded-xl hover:bg-card hover:text-purple transition-all duration-200"
        >
          View Syllabus
        </Link>
        <Link
          href={`/contact?course=${course.slug}`}
          className="inline-flex justify-center items-center py-2.5 px-3 bg-gradient-to-r from-purple to-purple-hover text-white text-xs font-bold rounded-xl hover:opacity-95 hover:scale-[1.01] active:scale-95 transition-all duration-200 shadow-sm"
        >
          Book Trial
        </Link>
      </div>
    </div>
  );
}
