"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  return (
    <div className="relative w-full">
      {/* Slider Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 flex flex-col gap-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
          Verified Student Outcomes
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy tracking-tight">
          Scorecard Results & Alumni Reviews
        </h2>
        <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
          Real results achieved by students preparing for university admissions, PR visas, and global careers with TGLA.
        </p>
      </div>

      {/* Reviews Carousel matching German Language Page */}
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
        <div className="flex-1 overflow-hidden py-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${activeReviewIdx * 100}%)` 
            }}
          >
            {testimonials.map((test) => (
              <div key={test.id} className="w-full shrink-0 px-2 sm:px-4">
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

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveReviewIdx(idx)}
            type="button"
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeReviewIdx === idx ? 'bg-purple w-8' : 'bg-card-border w-2 hover:bg-purple/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
