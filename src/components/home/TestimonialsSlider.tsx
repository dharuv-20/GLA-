"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const avatarGradients = [
    'from-purple-700 to-indigo-900 text-purple-100 border-purple-400/40',
    'from-emerald-700 to-teal-900 text-emerald-100 border-emerald-400/40',
    'from-blue-700 to-indigo-950 text-blue-100 border-blue-400/40',
    'from-amber-600 to-orange-900 text-amber-100 border-amber-400/40',
    'from-rose-700 to-purple-950 text-rose-100 border-rose-400/40',
    'from-violet-700 to-indigo-900 text-violet-100 border-violet-400/40',
  ];

  return (
    <div className="relative w-full">
      {/* Slider Header */}
      <div className="flex justify-between items-end mb-8 sm:mb-10">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
            Verified Student Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy tracking-tight mt-1">
            Real Stories. Real Global Results.
          </h2>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2.5 sm:p-3 rounded-xl border border-card-border transition-all duration-200 ${
              currentIndex === 0
                ? 'opacity-35 cursor-not-allowed bg-section-alt text-navy-muted'
                : 'bg-card hover:bg-purple hover:text-white hover:border-purple text-navy shadow-sm active:scale-95 cursor-pointer'
            }`}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`p-2.5 sm:p-3 rounded-xl border border-card-border transition-all duration-200 ${
              currentIndex >= maxIndex
                ? 'opacity-35 cursor-not-allowed bg-section-alt text-navy-muted'
                : 'bg-card hover:bg-purple hover:text-white hover:border-purple text-navy shadow-sm active:scale-95 cursor-pointer'
            }`}
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div className="overflow-hidden w-full pb-4">
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage + (cardsPerPage === 1 ? 0 : 1.5))}%)`,
          }}
        >
          {testimonials.map((test, idx) => {
            const hasAvatar = test.authorAvatar?.src && test.authorAvatar.src.trim() !== "";
            const gradClass = avatarGradients[idx % avatarGradients.length];
            return (
              <div
                key={test.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col"
              >
                <div className="group bg-card border border-card-border hover:border-purple/40 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(75,36,94,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full gap-6">
                  
                  {/* Top Row: Stars + Outcome Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: test.ratingStars || 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-navy-muted">5.0</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple/10 text-purple border border-purple/20 px-3 py-1 rounded-full shadow-sm">
                      {test.outcomeTag}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative flex-grow">
                    <Quote className="w-8 h-8 text-purple/15 absolute -top-3 -left-1 pointer-events-none" />
                    <p className="text-xs sm:text-sm italic text-navy-muted leading-relaxed relative z-10 pl-2">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  {/* Student Profile Footer */}
                  <div className="flex items-center gap-3.5 border-t border-card-border/70 pt-4 mt-auto">
                    {hasAvatar ? (
                      <img
                        src={test.authorAvatar.src}
                        alt={test.authorName}
                        loading="lazy"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple/30 group-hover:border-purple transition-colors shrink-0"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradClass} flex items-center justify-center font-display font-extrabold text-sm uppercase shadow-sm border shrink-0`}>
                        {test.authorName.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h4 className="text-sm font-extrabold font-display text-navy tracking-tight leading-tight">
                        {test.authorName}
                      </h4>
                      <span className="text-[11px] font-semibold text-purple flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple shrink-0" />
                        Verified GLA Alumnus
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? 'w-8 bg-purple' : 'w-2 bg-card-border hover:bg-purple/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
