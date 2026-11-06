'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';

/**
 * CTABand — Shipment Inquiry Preparation Call to Action
 *
 * FACTUAL & FUNCTIONAL SAFEGUARDS:
 * 1. Headline: "Prepare your shipment inquiry"
 * 2. Subtext: "Use our interactive inquiry tool to enter and review your consignment details, parcel weight, and destination requirements."
 * 3. Primary action links to the dedicated Contact Desk inquiry form.
 * 4. Secondary action links directly to the /services page.
 * 5. Zero false claims of instant bookings, live rates, or dispatch guarantees.
 */
export function CTABand() {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-[#09132B] via-[#0F172A] to-[#1E293B] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-[11px] font-bold tracking-widest uppercase backdrop-blur-xs">
            <span>DISPATCH PLANNING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-white leading-tight">
            Prepare your shipment inquiry.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Use our interactive inquiry tool to enter and review your consignment details, parcel weight, and destination requirements.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact#inquiry-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-red-950/40 hover:shadow-red-900/50 transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              <span>Prepare Inquiry Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Layers className="w-4 h-4 text-slate-300" />
              <span>Explore Services</span>
            </Link>
          </div>

          <p className="text-[11px] text-slate-400">
            * Consignment rates are determined upon physical parcel review, dead weight, volumetric calculation, and destination.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTABand;
