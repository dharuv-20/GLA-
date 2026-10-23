"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface GalleryItem {
  src: string;
  title: string;
  tag: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/gallery/academy-reception-desk.webp',
    title: 'The Global Language Academy Main Reception & Welcome Desk',
    tag: 'Campus Foyer',
    description: 'Our state-of-the-art academy reception and student consultation foyer in Dwarka, Delhi NCR.'
  },
  {
    src: '/images/gallery/german-classroom-session.webp',
    title: 'Interactive Small-Batch German Classroom',
    tag: 'Live Batch',
    description: 'Active speaking immersion and CEFR grammar coaching led by certified faculty.'
  },
  {
    src: '/images/gallery/director-counseling-consultation.webp',
    title: "Director's Academic & Career Counseling",
    tag: 'Leadership',
    description: 'Personalized pathway counseling with Founder & Director Ms. Pinki Rana.'
  },
  {
    src: '/images/gallery/faculty-mentorship-desk.webp',
    title: '1-on-1 Faculty Mentorship & Speaking Lab',
    tag: 'Mentorship',
    description: 'Intensive pronunciation drills and CEFR exam strategy with senior faculty.'
  },
  {
    src: '/images/gallery/study-abroad-roundtable.webp',
    title: 'Study Abroad & Visa Roundtable Session',
    tag: 'Global Pathways',
    description: 'Strategic counseling for European universities, Ausbildung, and visa readiness.'
  },
  {
    src: '/images/gallery/modern-campus-facility.webp',
    title: 'Air-Conditioned Cabins & Study Pods',
    tag: 'Campus Infrastructure',
    description: 'Dedicated sound-treated learning cabins designed for high-focus language mastery.'
  },
  {
    src: '/images/gallery/digital-exam-simulation.webp',
    title: 'Digital Listening & Exam Simulation Lab',
    tag: 'Exam Simulation',
    description: 'Real-time mock tests with simulated Goethe, IELTS & PTE exam environments.'
  },
  {
    src: '/images/gallery/academy-campus-environment.webp',
    title: 'Campus Environment & Reception Foyer',
    tag: 'Academy Life',
    description: 'A vibrant, welcoming learning atmosphere in the heart of Delhi NCR.'
  }
];

export default function GallerySection() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 15) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 380, behavior: 'smooth' });
  };

  return (
    <section className="bg-card text-navy py-14 sm:py-20 border-b border-card-border transition-colors duration-300 relative overflow-hidden">
      
      {/* Centered Gallery Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple flex items-center gap-1.5 mb-2">
            <Camera className="w-4 h-4 text-purple" />
            Real Campus Life &amp; Classrooms
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy tracking-tight">
            Academy Experience &amp; Facilities
          </h2>
          <p className="text-xs sm:text-sm text-navy-muted mt-1 max-w-xl">
            Take a look inside our real classroom sessions, personalized faculty mentorship desks, and modern learning infrastructure in Delhi NCR.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Previous gallery image"
            className="w-10 h-10 rounded-full border border-card-border bg-section-alt/80 hover:bg-purple hover:text-white text-navy flex items-center justify-center transition-all duration-200 shadow-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next gallery image"
            className="w-10 h-10 rounded-full border border-card-border bg-section-alt/80 hover:bg-purple hover:text-white text-navy flex items-center justify-center transition-all duration-200 shadow-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide frame with fade-in / fade-out edge overlays */}
      <div className="relative w-full">
        {/* Left fade-in/out edge overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-card via-card/70 to-transparent z-20 pointer-events-none"></div>
        
        {/* Right fade-in/out edge overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-card via-card/70 to-transparent z-20 pointer-events-none"></div>

        {/* Scrollable track */}
        <div
          ref={containerRef}
          id="gallery-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 px-6 sm:px-16 lg:px-24 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="w-80 h-56 sm:w-[26rem] sm:h-64 shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-card-border/80 hover:border-purple/45 group hover-lift snap-start relative transition-all duration-300 bg-slate-900/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={520}
                height={340}
                sizes="(max-width: 640px) 320px, 420px"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Subtle Gradient Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00122E]/90 via-[#00122E]/25 to-transparent pointer-events-none"></div>
              
              {/* Category Pill */}
              <span className="absolute top-3.5 left-3.5 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-white/95 dark:bg-[#00122E]/95 backdrop-blur-md text-purple border border-purple/20 px-3 py-1 rounded-full shadow-sm">
                {item.tag}
              </span>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 flex flex-col gap-1 text-white">
                <h4 className="text-sm sm:text-base font-extrabold font-display leading-snug drop-shadow-sm text-white">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-1 drop-shadow-sm font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
