import React from 'react';
import { Building2, Grid, Layers, Calculator } from 'lucide-react';

/**
 * TrustSignalsSection — Factual Operational Pillars
 *
 * FACTUAL VERIFICATION SAFEGUARDS:
 * 1. Zero invented statistics, awards, delivery metrics, or certifications.
 * 2. Zero unsupported comparisons (no claims comparing to remote call centers or other carriers).
 * 3. Strictly limited to verified operational facts: Bhilwara base, 4 defined service categories,
 *    textile specialization, and specification-based quoting.
 */
export function TrustSignalsSection() {
  const pillars = [
    {
      icon: Building2,
      title: 'Bhilwara Establishment',
      description:
        'Operating in Bhilwara, Rajasthan, providing an accessible local courier presence for individuals and commercial traders.',
    },
    {
      icon: Grid,
      title: 'Four Defined Services',
      description:
        'Structured offerings across Domestic Courier, International eCS shipping, Document transit, and Textile sample handling.',
    },
    {
      icon: Layers,
      title: 'Dedicated Textile Category',
      description:
        'Designated handling category tailored to the unique courier needs of fabric swatches, sample cuts, and trade documentation.',
    },
    {
      icon: Calculator,
      title: 'Specification-Based Rates',
      description:
        'Clear rate guidance based directly on verifiable consignment parameters including weight, parcel dimensions, and destination.',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
            <span>OPERATIONAL FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            Reliable courier services grounded in clear standards.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our operations are structured around transparent service categories, verified local presence, and specification-based consignment handling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 flex flex-col justify-start space-y-3 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[#DC2626] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustSignalsSection;

