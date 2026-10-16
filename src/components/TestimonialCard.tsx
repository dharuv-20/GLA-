import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card border border-card-border p-6 sm:p-8 rounded-2xl shadow-sm hover-lift flex flex-col gap-4.5 transition-all duration-300 h-full">
      {/* 5 Stars Rating */}
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: testimonial.ratingStars || 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
        ))}
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
          <span className="text-[10px] sm:text-xs text-navy-muted font-bold">Verified Student</span>
        </div>
      </div>
    </div>
  );
}
