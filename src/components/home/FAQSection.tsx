'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/faqData';

/**
 * FAQSection — Interactive Accordion with Strict Factual Safeguards
 *
 * FACTUAL SAFEGUARDS:
 * 1. Pulls directly from verified items in `@/lib/faqData`.
 * 2. Honest tracking status: official online carrier tracking links are awaiting verification.
 * 3. Conditional wording for consignment reference/receipts.
 * 4. Transparent pricing and Bhilwara location notes.
 * 5. Full WCAG 2.1 AA accessibility (ARIA states, keyboard focusable).
 */
export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Valid FAQPage JSON-LD Schema strictly matching the visible questions and answers
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50/60 border-t border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            Clear answers about our services.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Information regarding our service categories, textile sample handling, tracking status, and consignment requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const headingId = `faq-heading-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-colors duration-150"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-inset cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-red-50 text-[#DC2626]' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

