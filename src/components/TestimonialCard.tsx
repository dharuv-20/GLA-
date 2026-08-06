import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card border border-card-border p-6 rounded-xl shadow-sm hover-lift flex flex-col gap-4">
      {/* Stars and Target Outcome Tag */}
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 text-amber-500">
          {Array.from({ length: testimonial.ratingStars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-light text-purple px-2 py-0.5 rounded-md border border-card-border">
          {testimonial.outcomeTag}
        </span>
      </div>

      {/* Quote */}
      <p className="text-sm italic text-navy-muted leading-relaxed flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Profile */}
      <div className="flex items-center gap-3 border-t border-card-border pt-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-section-alt flex items-center justify-center font-display font-bold text-navy uppercase text-sm shrink-0 border border-card-border">
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-navy">{testimonial.authorName}</h4>
          <span className="text-xs text-navy-muted">Verified Alumnus</span>
        </div>
      </div>
    </div>
  );
}
