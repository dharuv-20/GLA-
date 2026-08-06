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
    <div className="flex flex-col gap-3 w-full max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.id}
            className="border border-card-border rounded-lg bg-card overflow-hidden shadow-sm transition-colors duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-5 text-left font-display font-semibold text-navy text-sm sm:text-base hover:text-purple focus:outline-none focus:bg-navy-light/10 transition-colors"
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span>{faq.question}</span>
              <span className="shrink-0 ml-4 p-1 rounded-full bg-section-alt text-navy hover:text-purple transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            
            <div
              id={`faq-answer-${faq.id}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 border-t border-card-border' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-5 text-sm text-navy-muted leading-relaxed bg-section-alt">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
