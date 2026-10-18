"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '@/types';
import TestimonialCard from '@/components/TestimonialCard';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const progressPercent = Math.round(((activeReviewIdx + 1) / testimonials.length) * 100);

  return (
    <div className="relative w-full">
      {/* Slider Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 flex flex-col gap-2">
        <div className="inline-flex items-center justify-center gap-1.5 self-center bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1 rounded-full border border-amber-500/20 text-xs font-bold">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span>5.0 Star Rating &bull; 50+ Verified Reviews</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy tracking-tight">
          Scorecard Results & Alumni Reviews
        </h2>
        <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
          Real results and Google reviews from students preparing for Goethe, DELF, JLPT, IELTS, and PTE exams with TGLA.
        </p>
      </div>

      {/* Reviews Carousel */}
      <div className="relative max-w-3xl mx-auto flex items-center gap-2 sm:gap-6">
        {/* Prev button */}
        <button
          onClick={prevReview}
          type="button"
          className="p-2.5 sm:p-3.5 rounded-full bg-card border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0 active:scale-95"
          aria-label="Previous Review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Reviews display container */}
        <div className="flex-1 overflow-hidden py-2">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${activeReviewIdx * 100}%)` 
            }}
          >
            {testimonials.map((test) => (
              <div key={test.id} className="w-full shrink-0 px-1 sm:px-3">
                <TestimonialCard testimonial={test} />
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={nextReview}
          type="button"
          className="p-2.5 sm:p-3.5 rounded-full bg-card border border-card-border text-navy hover:text-purple hover:border-purple/35 transition-all duration-200 cursor-pointer shadow-sm shrink-0 active:scale-95"
          aria-label="Next Review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress & Counter Bar (Replaces 50+ dots) */}
      <div className="max-w-xs sm:max-w-sm mx-auto mt-6 flex flex-col items-center gap-2.5">
        <div className="w-full bg-card-border/60 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-purple h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex items-center justify-between w-full text-[11px] font-bold text-navy-muted px-1">
          <span>Review {activeReviewIdx + 1} of {testimonials.length}</span>
          <span className="text-purple font-extrabold">{progressPercent}%</span>
        </div>
      </div>
    </div>
  );
}

