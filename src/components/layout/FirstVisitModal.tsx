"use client";

import { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import LeadForm from '@/features/lead-capture/components/LeadForm';

// Module-level variable persists across client-side router navigation
// but resets when the user refreshes, closes, or revisits the page.
let hasBeenShownInLifecycle = false;

export default function FirstVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasBeenShownInLifecycle) {
      setIsOpen(true);
      hasBeenShownInLifecycle = true;
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close modal when clicking outside on the backdrop
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  if (!isOpen) return null;

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

        {/* Nesting Lead Capture Form */}
        <div className="pt-4">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
