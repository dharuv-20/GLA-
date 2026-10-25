"use client";

import { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface DeferredGoogleMapProps {
  className?: string;
  title?: string;
}

export default function DeferredGoogleMap({
  className = "w-full h-full",
  title = "The Global Language Academy - Sector 12 Training Center Location Map"
}: DeferredGoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only load iframe when user scrolls near the container
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[250px] bg-slate-900 overflow-hidden ${className}`}
    >
      {isLoaded ? (
        <iframe
          src="https://maps.google.com/maps?q=The+Global+Language+Academy,+Plot+No+20,+Rd+Number+203,+Parmanand+Colony,+Sector+12+Dwarka,+New+Delhi+110078&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="w-full h-full"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#00122E] via-[#051A3C] to-[#0b1a2e] text-white">
          <div className="p-3 bg-purple/20 border border-purple-400/30 rounded-2xl mb-3 animate-pulse">
            <MapPin className="w-6 h-6 text-purple-light" />
          </div>
          <p className="text-xs font-bold text-slate-200 mb-1">
            Training Center: Sector 12 Dwarka (Near City Centre), Delhi
          </p>
          <span className="text-[11px] text-slate-400 mb-4">
            Loading Google Map location...
          </span>
          <button
            onClick={() => setIsLoaded(true)}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple hover:bg-purple-hover text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Load Interactive Map</span>
          </button>
        </div>
      )}
    </div>
  );
}
