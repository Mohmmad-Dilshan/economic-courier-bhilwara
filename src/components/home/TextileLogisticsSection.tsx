'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layers, FileText, Calculator, ArrowRight } from 'lucide-react';

/**
 * TextileLogisticsSection — Bhilwara Fabric & Sample Shipping
 *
 * FACTUAL SAFEGUARDS:
 * 1. Neutral service-category wording ("Textile sample shipping is one of the service categories...").
 * 2. No claims of "hundreds of weaving units", specific transit corridors, or seasonal volume.
 * 3. No unverified packaging standards or moisture-resistant guarantees.
 * 4. Grounded strictly in servicesData.ts and project documentation.
 */
export function TextileLogisticsSection() {
  const features = [
    {
      icon: Layers,
      title: 'Sample Swatches',
      description: 'Courier handling for fabric swatches, sample cuts, and catalog mailers.',
    },
    {
      icon: FileText,
      title: 'Trade Correspondence',
      description: 'Dispatch for commercial bills, textile invoices, and trade paperwork.',
    },
    {
      icon: Calculator,
      title: 'Inquiry-Based Quoting',
      description: 'Quotations determined by parcel weight, dimensions, and destination corridor.',
    },
  ];

  return (
    <section id="business" className="py-12 lg:py-20 bg-slate-50/60 border-t border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Factual Copy & Feature Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
              <span>TEXTILE &amp; TRADE LOGISTICS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.035em] leading-[1.12]">
              <span className="text-[#0F172A]">
                Textile sample shipping
              </span>{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                in Bhilwara.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
              Textile sample shipping is one of the service categories offered by Economic Courier. Designed to support Bhilwara’s fabric and garment trade, this service facilitates courier handling for sample swatch packets and commercial trade correspondence.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-400 italic">
              * Transit schedules depend on forwarding channels and destination hubs. Quotations are provided upon parcel review.
            </p>

            {/* Action Trigger */}
            <div className="pt-1">
              <Link
                href="/contact?service=textiles#inquiry-form"
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(220,38,38,0.25)] transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                <span>Prepare Textile Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Image Asset */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] bg-slate-100" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/assets/services/card-textiles.webp"
                alt="Textile fabric rolls and sample swatches prepared for courier dispatch"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                style={{ aspectRatio: '4/3' }}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextileLogisticsSection;

