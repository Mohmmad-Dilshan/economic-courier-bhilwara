'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenInquiry?: (service?: string) => void;
}

export function HowItWorksSection({}: HowItWorksSectionProps = {}) {
  return (
    <section
      id="how-it-works"
      className="py-6 sm:py-10 lg:py-14 scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden"
      aria-label="How Shipping Works"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Screen-reader & SEO accessible outline */}
      <div className="sr-only">
        <h2>How Shipping Works: From Bhilwara to doorstep in 4 simple steps</h2>
        <p>
          Whether you&apos;re dispatching textile swatches from Bhilwara or sending worldwide parcels, our streamlined flow makes logistics effortless.
        </p>
        <ol>
          <li>Step 01 - Intake &amp; Inquiry: Share Parcel Details (Doorstep pickup or hub drop)</li>
          <li>Step 02 - Secure Packaging: Intake &amp; Strapping (We weigh and securely seal consignments)</li>
          <li>Step 03 - Priority Transit: Express Surface &amp; Air Transit (Domestic networks &amp; air lanes)</li>
          <li>Step 04 - Safe Handover: Doorstep Delivery (Destination hub to recipient doorstep)</li>
        </ol>
      </div>

      <div className="max-w-[1240px] mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* =========================================================================
            1. DESKTOP, LARGE SIZE & TABLET VIEW (>= 640px)
            Ultra-High-Resolution (2172x724) Panoramic Infographic — 100% Crisp
            ========================================================================= */}
        <div className="hidden sm:block relative w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] bg-white transition-all duration-300 hover:shadow-[0_16px_45px_rgba(220,38,38,0.09)] hover:border-red-200/80" style={{ aspectRatio: '2172/724' }}>
          <Image
            src="/assets/how-it-works/how-shipping-works-desktop.webp"
            alt="How shipping works - From Bhilwara to doorstep in 4 simple steps: Pickup, Handover, Delivered"
            width={2172}
            height={724}
            loading="lazy"
            style={{ aspectRatio: '2172/724' }}
            className="w-full h-auto object-contain block select-none"
            sizes="(max-width: 1240px) 100vw, 1240px"
          />
        </div>

        {/* =========================================================================
            2. MOBILE VIEW (< 640px)
            High-DPI Retina (1364x2048) Portrait Infographic — 100% Crisp
            ========================================================================= */}
        <div className="block sm:hidden relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.06)] bg-white transition-all duration-300" style={{ aspectRatio: '1364/2048' }}>
          <Image
            src="/assets/how-it-works/how-shipping-works-mobile.webp"
            alt="How shipping works - From Bhilwara to doorstep in 4 simple steps"
            width={1364}
            height={2048}
            loading="lazy"
            style={{ aspectRatio: '1364/2048' }}
            className="w-full h-auto object-contain block select-none"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>

        {/* =========================================================================
            3. BOTTOM INTERACTIVE CALLOUT BANNER
            ========================================================================= */}
        <div className="mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-slate-800 ">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#DC2626] shrink-0 hidden sm:flex">
              <Sparkles className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white tracking-tight">
                Ready to ship from Bhilwara today?
              </p>
              <p className="text-[11px] sm:text-xs text-slate-300 font-normal">
                Textile samples, urgent documents, or bulk parcel pickup — our local team is ready.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-center">
            <Link
              href="/contact#inquiry-form"
              className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <span>Book Consignment Pickup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
