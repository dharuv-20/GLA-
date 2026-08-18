"use client";

import { useEffect, useState, useRef } from 'react';

const galleryImages = [
  '/images/classroom.jpg',
  '/images/computer-lab.jpg',
  '/images/lobby.jpg',
  '/images/classroom.jpg',
  '/images/computer-lab.jpg',
  '/images/lobby.jpg',
  '/images/classroom.jpg',
  '/images/computer-lab.jpg',
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
        // If we are at the end, scroll back smoothly to start
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-card text-navy py-12 sm:py-16 border-b border-card-border transition-colors duration-300 relative overflow-hidden">
      
      {/* Centered Gallery Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-center text-navy uppercase tracking-widest relative">
          Gallery
          <span className="block w-12 h-1 bg-purple mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

      {/* Slide frame with fade-in / fade-out edge overlays */}
      <div className="relative w-full">
        {/* Left fade-in/out edge overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-card via-card/70 to-transparent z-20 pointer-events-none"></div>
        
        {/* Right fade-in/out edge overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-card via-card/70 to-transparent z-20 pointer-events-none"></div>

        {/* Scrollable track */}
        <div
          ref={containerRef}
          id="gallery-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-5 overflow-x-auto pb-4 px-12 sm:px-24 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="w-72 h-44 sm:w-96 sm:h-60 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-card-border/50 hover:border-purple/35 group hover-lift snap-start relative transition-all duration-300"
            >
              <img
                src={imgSrc}
                alt={`Campus Gallery ${idx + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
