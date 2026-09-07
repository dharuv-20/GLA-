"use client";

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import LeadForm from '@/features/lead-capture/components/LeadForm';

// Module-level variable persists across client-side router navigation
// but resets when the user refreshes, closes, or revisits the page.
let hasBeenShownInLifecycle = false;

export default function FirstVisitModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Never show modal on /thank-you page
    if (pathname === '/thank-you') {
      setIsOpen(false);
      return;
    }

    if (!hasBeenShownInLifecycle) {
      const hasPlayed = sessionStorage.getItem("splash-played");
      const hasSubmitted = sessionStorage.getItem("gla_form_submitted");
      if (hasSubmitted) return;

      if (hasPlayed) {
        setIsOpen(true);
      } else {
        // Wait for 1.0s splash loading screen + 100ms layout buffer
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1100);
        return () => clearTimeout(timer);
      }
      hasBeenShownInLifecycle = true;
    }
  }, [pathname]);

  // Listen for global form submission event to close modal immediately
  useEffect(() => {
    const handleFormSubmitted = () => {
      setIsOpen(false);
    };

    window.addEventListener('gla_form_submitted', handleFormSubmitted);
    return () => window.removeEventListener('gla_form_submitted', handleFormSubmitted);
  }, []);

  // Force close if navigated to /thank-you
  useEffect(() => {
    if (pathname === '/thank-you') {
      setIsOpen(false);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close modal when clicking outside on the backdrop
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  if (!isOpen || pathname === '/thank-you') return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative bg-card border border-card-border max-w-md w-full rounded-xl shadow-2xl overflow-hidden animate-scale-up"
      >
        {/* Close Toggle Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-section-alt text-navy hover:text-purple transition-colors focus:outline-none z-10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Nesting Lead Capture Form with instant close callback */}
        <div className="pt-4">
          <LeadForm onSuccess={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
}
