import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card border border-card-border p-6 sm:p-8 rounded-2xl shadow-sm hover-lift flex flex-col gap-4.5 transition-all duration-300 h-full">
      {/* Stars and Target Outcome Tag */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex gap-0.5 text-amber-500">
          {Array.from({ length: testimonial.ratingStars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple/10 text-purple px-2.5 py-1 rounded-md border border-purple/20 shadow-sm shrink-0 whitespace-nowrap">
          {testimonial.outcomeTag}
        </span>
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
          <span className="text-[10px] sm:text-xs text-navy-muted font-bold">Verified Alumnus</span>
        </div>
      </div>
    </div>
  );
}
