"use client";

import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

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
      className={`fixed bottom-0 inset-x-0 z-40 bg-white border-t border-navy-light shadow-xl p-3 md:hidden flex gap-3 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20booking%20a%20free%20demo%20class%20at%20The%20Global%20Language%20Academy."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-md font-semibold text-sm hover:opacity-90 active:scale-98 transition-all"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/whatsapp-icon.png"
          alt="WhatsApp Logo"
          className="w-5 h-5 object-contain"
        />
        <span>Chat on WhatsApp</span>
      </a>
      
      <a
        href="tel:+919876543210"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-navy text-white py-3 px-4 rounded-md font-semibold text-sm hover:bg-navy-muted active:scale-98 transition-all"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
