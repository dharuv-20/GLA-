"use client";

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import LeadForm from '@/features/lead-capture/components/LeadForm';

// Module-level variable persists across client-side router navigation
// but resets when the user closes the browser or tab.
let hasBeenShownInLifecycle = false;

export default function FirstVisitModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Strictly ONLY allow modal on the root home page ("/")
    if (pathname !== '/') {
      setIsOpen(false);
      return;
    }

    if (!hasBeenShownInLifecycle) {
      const hasPlayed = sessionStorage.getItem("splash-played");
      const hasSubmitted = sessionStorage.getItem("gla_form_submitted");
      const hasDismissed = sessionStorage.getItem("first_visit_modal_dismissed");
      
      // If already submitted or dismissed in this session, do not show
      if (hasSubmitted || hasDismissed) return;

      if (hasPlayed) {
        setIsOpen(true);
      } else {
        // Wait for 1.0s splash loading screen + 100ms layout buffer
        const timer = setTimeout(() => {
          // Re-verify pathname before opening
          if (window.location.pathname === '/') {
            setIsOpen(true);
          }
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
      if (typeof window !== 'undefined') {
        sessionStorage.setItem("first_visit_modal_dismissed", "true");
      }
    };

    window.addEventListener('gla_form_submitted', handleFormSubmitted);
    return () => window.removeEventListener('gla_form_submitted', handleFormSubmitted);
  }, []);

  // Force close if navigated away from home page
  useEffect(() => {
    if (pathname !== '/') {
      setIsOpen(false);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem("first_visit_modal_dismissed", "true");
    }
  };

  // Close modal when clicking outside on the backdrop
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  // Strictly return null if not on the home page, not open, or not mounted on client
  if (!isOpen || pathname !== '/' || !mounted) return null;

  const modalContent = (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative bg-card border border-card-border max-w-md w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-scale-up my-auto"
      >
        {/* Close Toggle Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-section-alt text-navy hover:text-purple transition-colors focus:outline-none z-10 cursor-pointer shadow-sm"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Nesting Lead Capture Form with instant close callback */}
        <div className="pt-2">
          <LeadForm onSuccess={handleClose} />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
