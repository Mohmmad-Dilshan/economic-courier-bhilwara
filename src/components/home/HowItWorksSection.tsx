'use client';

import React from 'react';
import {
  PackagePlus,
  ShieldCheck,
  Plane,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface HowItWorksStep {
  step: string;
  tag: string;
  title: string;
  description: string;
  feature: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SHIPPING_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    tag: 'INTAKE & INQUIRY',
    title: 'Share Parcel Details',
    description:
      'Tell us your destination and parcel type — whether urgent textile swatches, legal paperwork, commercial cargo, or personal boxes.',
    feature: 'Doorstep pickup or hub drop',
    icon: PackagePlus,
  },
  {
    step: '02',
    tag: 'SECURE PACKAGING',
    title: 'Intake & Strapping',
    description:
      'We weigh, verify dimensions, and securely seal consignments using heavy-gauge poly-mailers and tamper-evident waterproof strapping.',
    feature: 'Industrial tamper protection',
    icon: ShieldCheck,
  },
  {
    step: '03',
    tag: 'PRIORITY TRANSIT',
    title: 'Express Highway & Air',
    description:
      'Consignments route immediately via daily linehauls connecting 19,000+ Indian PIN codes and 220+ international flight corridors.',
    feature: 'Daily metro & air connections',
    icon: Plane,
  },
  {
    step: '04',
    tag: 'SAFE HANDOVER',
    title: 'Doorstep Delivery & POD',
    description:
      'Monitor every transit checkpoint through our digital tracking desk until confirmed delivery with digital proof of delivery (POD).',
    feature: 'Live tracking & verified POD',
    icon: CheckCircle2,
  },
];

interface HowItWorksSectionProps {
  onOpenInquiry?: (service?: string) => void;
}

export function HowItWorksSection({ onOpenInquiry }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="py-10 sm:py-14 lg:py-20 scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14 reveal-init">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
            <span>HOW SHIPPING WORKS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.035em] leading-[1.12]">
            <span className="bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-transparent">
              From Bhilwara to doorstep
            </span>{' '}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
              in 4 simple steps.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
            Whether you&apos;re dispatching textile swatches from Pur Road or sending worldwide parcels, our streamlined flow makes logistics effortless.
          </p>
        </div>

        {/* 4 Steps — single column stack on mobile, 4-across on large desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-3.5 lg:gap-6">
          {SHIPPING_STEPS.map((item, index) => {
            const Icon = item.icon;
            const delayClasses = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];
            const delayClass = delayClasses[index % delayClasses.length];
            const isLast = index === SHIPPING_STEPS.length - 1;

            return (
              <div key={item.step} className={`reveal-init ${delayClass} relative`}>
                {/* Connector line on mobile between cards */}
                {!isLast && (
                  <div className="absolute left-[27px] top-full h-3.5 w-px bg-gradient-to-b from-red-200 to-transparent lg:hidden z-10" />
                )}

                <div
                  className="relative bg-white rounded-2xl lg:rounded-3xl border border-slate-100/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(220,38,38,0.10)] hover:border-red-200/90 transition-all duration-300 ease-out group overflow-hidden
                  flex flex-row lg:flex-col items-start gap-0 lg:justify-between
                  p-0 lg:p-7"
                >
                  {/* Top red accent line (desktop hover) */}
                  <div className="absolute top-0 inset-x-0 h-0.5 lg:h-1 bg-linear-to-r from-transparent via-[#DC2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                  {/* MOBILE: Left step pill column */}
                  <div className="lg:hidden flex flex-col items-center shrink-0 pt-4 pb-4 pl-4 pr-0 gap-2">
                    <span className="text-[11px] font-black font-mono tracking-wider w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-[#DC2626] transition-colors shadow-xs">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-4 h-4 text-[#DC2626] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* MOBILE: Right content */}
                  <div className="lg:hidden flex-1 py-4 pr-4 pl-3 flex flex-col justify-center">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626]">
                      {item.tag}
                    </p>
                    <h3 className="text-[15px] font-bold text-slate-900 tracking-tight leading-snug mt-0.5 group-hover:text-[#DC2626] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal mt-1">
                      {item.description}
                    </p>
                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                      <span>{item.feature}</span>
                    </div>
                  </div>

                  {/* DESKTOP: Full card layout */}
                  <div className="hidden lg:flex flex-col justify-between h-full w-full">
                    <div>
                      <div className="flex items-center justify-between pb-4">
                        <span className="text-[11px] font-black font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-white shadow-xs group-hover:bg-[#DC2626] transition-colors">
                          {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                          <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </div>
                      </div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626] mt-1">
                        {item.tag}
                      </p>
                      <h3 className="text-base lg:text-[17px] font-bold text-slate-900 tracking-tight leading-snug mt-1 group-hover:text-[#DC2626] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-normal mt-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <span className="truncate">{item.feature}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Callout Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-slate-800 reveal-init delay-200">
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
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <span>Book Consignment Pickup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
