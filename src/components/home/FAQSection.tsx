'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
} from 'lucide-react';
import {
  FAQ_ITEMS,
  FAQItem,
} from '@/lib/faqData';
import { BUSINESS_INFO } from '@/lib/constants';

interface FAQSectionProps {
  onOpenInquiry?: (service?: string) => void;
}

/**
 * FAQSection — Clean Interactive Accordion with Direct Support Desk
 *
 * FACTUAL SAFEGUARDS:
 * 1. Pulls verified items from `@/lib/faqData`.
 * 2. Grounded in Bhilwara Hub facts (Opposite New Cloth Market, +91 89551 44444).
 * 3. Verified tracking info (AWB receipts + partner network feeds).
 * 4. Full WCAG 2.1 AA accessibility (ARIA states, keyboard focusable).
 */
export function FAQSection({ onOpenInquiry }: FAQSectionProps) {
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
    <section
      id="faq"
      className="py-14 sm:py-18 lg:py-22 bg-slate-50/70 border-t border-slate-100 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1240px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/90 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>HELP &amp; KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-[-0.03em] text-slate-900 leading-[1.18]">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="text-[#DC2626]">Questions &amp; Answers</span>
          </h2>

          <div className="w-12 h-1 bg-[#DC2626] rounded-full mx-auto mt-2.5 mb-2.5" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Everything you need to know about parcel intake at our Bhilwara hub, textile sample strapping, corridor timings, and tracking.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const headingId = `faq-heading-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border border-red-200/90 shadow-sm ring-1 ring-red-100'
                    : 'bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-start justify-between gap-3.5 transition-colors hover:bg-slate-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-inset cursor-pointer"
                  >
                    <div className="space-y-1 pr-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-400">
                          0{index + 1}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <span
                        className={`block text-sm sm:text-[15.5px] leading-snug tracking-tight transition-colors ${
                          isOpen
                            ? 'font-black text-slate-900'
                            : 'font-bold text-slate-800'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-[#DC2626] text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
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
                    className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100/90 bg-white"
                  >
                    {item.highlight && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-[#DC2626] text-[11px] font-bold mb-2.5 border border-red-100">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                    <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM SUPPORT BANNER: "Still have a question?"
            ========================================================================= */}
        <div className="max-w-3xl mx-auto mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bhilwara Dispatch Counter</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Still have a specific query or urgent pickup?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Speak directly with our team opposite New Cloth Market or message us for on-spot rate quotations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+918955144444"
              className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 89551 44444</span>
            </a>

            <a
              href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20have%20a%20query%20regarding%20parcel%20dispatch."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {onOpenInquiry && (
              <button
                type="button"
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <span>Inquiry</span>
                <ArrowRight className="w-3 h-3 text-slate-300" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
