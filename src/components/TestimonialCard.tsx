import { Star, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '@/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card border border-card-border p-6 sm:p-8 rounded-2xl shadow-sm hover-lift flex flex-col gap-4.5 transition-all duration-300 h-full">
      {/* 5 Stars Rating & Outcome Tag */}
      <div className="flex items-center justify-between flex-wrap gap-2 text-amber-500">
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.ratingStars || 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 ml-1">5.0</span>
        </div>
        {testimonial.outcomeTag && (
          <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            {testimonial.outcomeTag}
          </span>
        )}
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-sm italic text-navy-muted leading-relaxed flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Profile */}
      <div className="flex items-center gap-3 border-t border-card-border pt-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center font-display font-extrabold text-purple uppercase text-sm shrink-0 border border-purple/20">
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-extrabold text-navy leading-none mb-1">{testimonial.authorName}</h4>
          <span className="text-[10px] sm:text-xs text-navy-muted font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            Verified Google Review
          </span>
        </div>
      </div>
    </div>
  );
}

