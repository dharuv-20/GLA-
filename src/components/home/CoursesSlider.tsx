"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Clock, Users, ArrowRight, BookOpen, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Course } from '@/types';

interface CoursesSliderProps {
  courses: Course[];
}

export default function CoursesSlider({ courses }: CoursesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Maximum scroll index depending on screen width
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

  const maxIndex = Math.max(0, courses.length - cardsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const getCourseCategory = (slug: string) => {
    switch (slug) {
      case 'german-language':
        return 'German (Goethe / TELC)';
      case 'french-language':
        return 'French (DELF / TEF)';
      case 'japanese-language':
        return 'Japanese (JLPT N5-N1)';
      case 'spoken-english':
        return 'English Fluency & Accent';
      case 'ielts-preparation':
        return 'IELTS (IDP / British Council)';
      case 'pte-academic':
        return 'PTE Academic (Pearson)';
      default:
        return 'Certified Course';
    }
  };

  const getCourseImage = (slug: string) => {
    switch (slug) {
      case 'german-language':
        return '/images/berlin-skyline.jpg';
      case 'french-language':
        return '/images/classroom.jpg';
      case 'japanese-language':
        return '/images/computer-lab.jpg';
      case 'spoken-english':
        return '/images/lobby.jpg';
      case 'ielts-preparation':
        return '/images/classroom.jpg';
      case 'pte-academic':
        return '/images/computer-lab.jpg';
      default:
        return '/images/classroom.jpg';
    }
  };

  return (
    <div className="relative w-full">
      {/* Slider Controls Header */}
      <div className="flex justify-between items-end mb-8 sm:mb-10">
        <div className="flex items-center gap-3.5">
          <Image
            src="/images/assets/prep-guarantee-seal.webp"
            alt="Official Examination Preparation Standards Seal"
            width={48}
            height={48}
            loading="lazy"
            className="w-12 h-12 object-contain shrink-0 hidden sm:block drop-shadow-sm"
          />
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple">
              Our Certified Programs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy tracking-tight mt-0.5">
              Explore All Courses & Programs
            </h2>
          </div>
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
            aria-label="Previous Course"
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
            aria-label="Next Course"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Track Container */}
      <div className="overflow-hidden w-full pb-4">
        <div
          ref={scrollContainerRef}
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage + (cardsPerPage === 1 ? 0 : 1.5))}%)`,
          }}
        >
          {courses.map((course) => {
            const imageUrl = getCourseImage(course.slug);
            const categoryLabel = getCourseCategory(course.slug);
            return (
              <div
                key={course.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col"
              >
                <div className="group flex flex-col bg-card border border-card-border hover:border-purple/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(75,36,94,0.12)] hover:-translate-y-1.5 transition-all duration-300 h-full">
                  {/* Course Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900/10">
                    <span className="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-widest bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-purple border border-purple-200/40 px-3 py-1 rounded-full shadow-sm">
                      {categoryLabel}
                    </span>

                    <img
                      src={imageUrl}
                      alt={`${course.title} - The Global Language Academy`}
                      loading="lazy"
                      width={600}
                      height={350}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00122E]/70 via-[#00122E]/20 to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-purple-light" />
                        <span>{course.durationLabel}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                        <Users className="w-3.5 h-3.5 text-purple-light" />
                        <span>Max 5-7 Batch</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-xl font-extrabold font-display text-navy tracking-tight group-hover:text-purple transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-muted leading-relaxed line-clamp-3">
                        {course.shortDescription}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-section-alt/80 rounded-xl p-3.5 border border-card-border/60">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-muted block mb-2">
                        Key Learning Outcomes
                      </span>
                      <ul className="flex flex-col gap-1.5 text-xs font-medium text-navy">
                        {course.benefits.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 line-clamp-1">
                            <CheckCircle className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5" />
                            <span className="truncate">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-card-border/60 mt-auto">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex justify-center items-center py-2.5 px-3 border border-navy/20 hover:border-purple text-navy text-xs font-bold rounded-xl hover:bg-card hover:text-purple transition-all text-center"
                      >
                        View Syllabus
                      </Link>
                      <Link
                        href={`/contact?course=${course.slug}`}
                        className="inline-flex justify-center items-center py-2.5 px-3 bg-gradient-to-r from-purple to-purple-hover text-white text-xs font-bold rounded-xl hover:opacity-95 shadow-sm active:scale-95 transition-all text-center"
                      >
                        Book Trial
                      </Link>
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
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-8 bg-purple' : 'w-2 bg-card-border hover:bg-purple/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
