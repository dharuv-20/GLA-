"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '@/types';

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-3.5 w-full max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border-purple/40 bg-card shadow-[0_8px_30px_rgba(75,36,94,0.06)] ring-1 ring-purple/20'
                : 'border-card-border bg-card hover:border-purple/30 hover:bg-section-alt/30 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-5 sm:p-6 text-left font-display font-bold text-navy text-sm sm:text-base hover:text-purple focus:outline-none transition-colors cursor-pointer"
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="pr-4">{faq.question}</span>
              <span
                className={`shrink-0 p-1.5 rounded-full transition-all duration-300 ${
                  isOpen
                    ? 'bg-purple text-white rotate-180'
                    : 'bg-section-alt text-navy hover:text-purple'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            
            <div
              id={`faq-answer-${faq.id}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 border-t border-card-border/70' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-5 sm:p-6 text-xs sm:text-sm text-navy-muted leading-relaxed bg-section-alt/50">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
