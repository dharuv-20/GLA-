"use client";

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-4 inset-x-0 z-40 mx-4 bg-white/90 dark:bg-card/95 border border-card-border shadow-[0_8px_30px_rgba(0,18,46,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-3 md:hidden flex gap-3 rounded-2xl backdrop-blur-md transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20booking%20a%20free%20demo%20class%20at%20The%20Global%20Language%20Academy."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-bold text-xs tracking-wide uppercase shadow-[0_4px_12px_rgba(37,211,102,0.25)] hover:scale-102 active:scale-98 transition-all"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/whatsapp-icon.png"
          alt="WhatsApp Logo"
          className="w-5 h-5 object-contain"
        />
        <span>WhatsApp</span>
      </a>
      
      {/* Call Now Action Button */}
      <a
        href="tel:+919876543210"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-purple text-white py-3 px-4 rounded-xl font-bold text-xs tracking-wide uppercase shadow-[0_4px_12px_rgba(75,36,94,0.2)] hover:scale-102 active:scale-98 transition-all"
      >
        <Phone className="w-4 h-4 shrink-0" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
