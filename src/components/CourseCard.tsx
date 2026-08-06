import Link from 'next/link';
import { Clock, Users, Calendar } from 'lucide-react';
import { Course } from '@/types';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex flex-col bg-card border border-card-border rounded-xl overflow-hidden shadow-sm hover-lift transition-all">
      <div className="p-6 flex-grow flex flex-col gap-4">
        {/* Course Category Badge */}
        <div className="flex">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-section-alt text-purple px-2.5 py-1 rounded-full border border-card-border">
            {course.slug === 'personality-development' ? 'Soft Skills' : 'Language Prep'}
          </span>
        </div>

        {/* Title & Desc */}
        <div>
          <h3 className="text-xl font-bold font-display text-navy mb-2 tracking-tight">
            {course.title}
          </h3>
          <p className="text-sm text-navy-muted leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-card-border pt-4 mt-auto">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <Clock className="w-3 h-3 text-purple" /> Duration
            </span>
            <span className="text-xs font-semibold text-navy truncate">{course.durationLabel}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <Users className="w-3 h-3 text-purple" /> Class Limit
            </span>
            <span className="text-xs font-semibold text-navy">{course.maxClassSize} Seats</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <Calendar className="w-3 h-3 text-purple" /> Intake
            </span>
            <span className="text-xs font-semibold text-navy truncate">
              Weekly Batches
            </span>
          </div>
        </div>
      </div>

      {/* Card CTA Footer */}
      <div className="p-4 bg-section-alt border-t border-card-border grid grid-cols-2 gap-2">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex justify-center items-center py-2 px-3 border border-navy text-navy text-xs font-bold rounded-md hover:bg-navy-light transition-colors"
        >
          View Syllabus
        </Link>
        <Link
          href={`/contact?course=${course.slug}`}
          className="inline-flex justify-center items-center py-2 px-3 bg-purple text-white text-xs font-bold rounded-md hover:bg-purple-hover transition-colors"
        >
          Book Trial
        </Link>
      </div>
    </div>
  );
}
