'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Building2,
  Globe,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  UserCheck,
  Clock,
} from 'lucide-react';
import { InquiryModal } from '@/components/home/InquiryModal';

export function AboutView() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string>('');

  const handleOpenInquiry = (service: string = '') => {
    setInquiryService(service);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden antialiased">
      {/* =========================================================================
          1. ABOUT HERO SECTION
          ========================================================================= */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#EBF5FB_0%,#F8FBFE_50%,#FFFFFF_100%)] border-b border-slate-100">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb & Location Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                href="/"
                className="text-xs font-semibold text-slate-500 hover:text-[#DC2626] transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-300 text-xs">/</span>
              <span className="text-xs font-semibold text-[#DC2626]">About Us</span>

              <span className="hidden sm:inline-block text-slate-300 text-xs">•</span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <MapPin className="w-3 h-3 text-[#DC2626]" />
                <span>BHILWARA · RAJASTHAN</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08] pt-1">
              Local foundation.{' '}
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                Worldwide logistics reach.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal pt-1">
              Economic Courier provides dedicated domestic express courier and worldwide air parcel transit under the eCS World Wide Express identity, operating directly from our commercial hub in Bhilwara.
            </p>

            {/* Quick Operational Capability Pills */}
            <div className="pt-2 flex items-center gap-2 sm:gap-3 flex-wrap text-xs font-semibold text-slate-700">
              <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Physical Bhilwara Hub</span>
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Textile Sample Specialization</span>
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>All-India &amp; Global Air</span>
              </span>
              <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Direct Counter Intake</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DUAL BRAND IDENTITY EXPLANATION
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BRAND &amp; OPERATIONAL IDENTITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              One trusted hub. Two complementary identities.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Understanding the clear distinction between our local Bhilwara operations and our international air courier network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Identity 1: Economic Courier */}
            <div className="bg-[#FAF7F2]/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/60 shadow-[0_6px_25px_rgba(15,23,42,0.04)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/70 text-[#DC2626] text-[11px] font-bold tracking-wide">
                    <Truck className="w-3.5 h-3.5" />
                    <span>LOCAL &amp; DOMESTIC IDENTITY</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">BHILWARA BASE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Economic Courier
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Economic Courier represents our primary trade name and walk-in counter presence in Bhilwara. Grounded in Rajasthan’s major textile hub, this identity focuses on:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Direct counter booking and parcel drop-off at our Bhilwara hub.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Specialized handling for fabric swatches, sample shade cards, and mill correspondence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Priority surface and domestic air linehauls across all Indian commercial centers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Personalized service coordination without anonymous remote call centers.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-200/60">
                <p className="text-[11px] text-slate-500 font-medium">
                  Primary Focus: Bhilwara Textile Community &bull; Domestic Express &bull; Urgent Documents
                </p>
              </div>
            </div>

            {/* Identity 2: eCS World Wide Express */}
            <div className="bg-[#F0F7FD]/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4E4F3] shadow-[0_6px_25px_rgba(15,23,42,0.04)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-[11px] font-bold tracking-wide">
                    <Globe className="w-3.5 h-3.5" />
                    <span>INTERNATIONAL NETWORK IDENTITY</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">WORLDWIDE EXPRESS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  eCS World Wide Express
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  eCS World Wide Express represents our international courier and priority overseas air cargo arm, providing cross-border parcel forwarding with structured export paperwork assistance:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Worldwide express parcel delivery connecting Bhilwara to overseas destinations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>International export documentation guidance including commercial invoices and packing lists.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Overseas student university dossiers, visa paperwork, and corporate agreements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Coordinated dispatches through recognized international air freight channels.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-[#D4E4F3]">
                <p className="text-[11px] text-slate-500 font-medium">
                  Primary Focus: Overseas Air Freight &bull; Export Sample Mailers &bull; Cross-Border Documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. LEADERSHIP & GOVERNANCE PROFILE (Mr. Chandra Shekhar Panecha)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-t border-b border-slate-100">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Leadership Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)] relative overflow-hidden space-y-5">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#DC2626] text-[11px] font-bold tracking-wide border border-red-100">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>LEADERSHIP &amp; GOVERNANCE</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">eCS BHILWARA</span>
                </div>

                {/* Director Name & Exact Brochure Designation */}
                <div className="space-y-1 pt-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Mr. Chandra Shekhar Panecha
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#DC2626] tracking-wide uppercase">
                    Independent Director
                  </p>
                </div>

                {/* Description grounded in verified client brochure context */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Identified in business documentation as Independent Director, providing strategic governance and leadership oversight for Economic Courier and eCS World Wide Express operations in Bhilwara.
                </p>

                {/* Key Leadership Pillars */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                    <span>Commitment to direct counter intake transparency</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                    <span>Prioritizing Bhilwara’s commercial textile trading deadlines</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                    <span>Dependable parcel care without exaggerated service claims</span>
                  </div>
                </div>

                {/* Factual Note regarding standalone photo provisioning */}
                <div className="pt-2 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <p className="text-[10.5px] text-slate-500 leading-normal italic">
                    Note: Standalone portrait photograph is awaiting direct client file provisioning. Profile presented strictly with verified brochure designation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Context */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
                <span>OUR OPERATIONAL PHILOSOPHY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
                Built on local accountability, not anonymous call centers.
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                At Economic Courier, logistics is personal. When textile traders send sample cuttings or a family dispatches urgent paperwork from Bhilwara, they interact directly with real people at our physical counter.
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Our approach emphasizes accurate intake: weighing parcels on calibrated digital scales, verifying destination pin codes, and applying heavy-gauge tamper-evident packaging before consignments leave our hub for domestic linehauls or international flight connections.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry()}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(220,38,38,0.25)] transition-all active:scale-95 cursor-pointer"
                >
                  <span>Connect with our Bhilwara Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BHILWARA TEXTILE MARKET RELEVANCE
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>TEXTILE CITY SPECIALIZATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
                Logistics engineered for Bhilwara’s fabric &amp; garment trade.
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Bhilwara is renowned across India as a premier textile manufacturing center, home to hundreds of synthetic weaving, spinning, and fabric processing establishments. In this fast-moving commercial market, samples drive business.
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Before a garment manufacturer in Surat or a fashion house in Mumbai places a bulk weaving order, they require physical fabric swatches, weave cuttings, and shade cards. Economic Courier’s dedicated textile shipping category is built precisely around these requirements:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Layers className="w-4 h-4 text-[#DC2626]" />
                    <span>Fabric Swatch Mailers</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Secure envelope and satchel packaging protecting fabric weave, finish, and labels during transit.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-[#DC2626]" />
                    <span>Trade Deadline Routing</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Express forwarding to key apparel manufacturing corridors: Mumbai, Surat, Delhi NCR, and Ahmedabad.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Authentic Textile Imagery */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)] bg-slate-100">
                <Image
                  src="/assets/services/card-textiles.webp"
                  alt="Textile fabric rolls and sample swatches prepared for courier dispatch in Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. REAL OPERATIONS & AUTHENTIC MEDIA SHOWCASE
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F0F5FA] border-t border-b border-[#E2ECF5]">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
              <span>AUTHENTIC OPERATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Real facilities. Real people behind every parcel.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Direct glimpses from our Bhilwara hub: booking desk, packing station, and daily delivery fleet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {/* Photo 1: Office Customer Counter */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col group">
              <div className="relative w-full h-48 sm:h-52 bg-slate-900">
                <Image
                  src="/assets/social/reel-1-inside-ecs.jpg"
                  alt="Economic Courier customer intake booking desk in Bhilwara"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#DC2626] uppercase">HUB INTAKE</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Booking Counter</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Direct counter intake with calibrated digital weighing scale and consignment registration.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Bhilwara Hub &bull; Rajasthan
                </div>
              </div>
            </div>

            {/* Photo 2: Dedicated Local Team */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col group">
              <div className="relative w-full h-48 sm:h-52 bg-slate-900">
                <Image
                  src="/assets/social/reel-2-team.jpg"
                  alt="Economic Courier dedicated staff sorting and verifying consignments"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#DC2626] uppercase">LOCAL TEAM</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Sorting &amp; Verification</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Dedicated staff organizing packages for same-day linehaul connections and document dispatch.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Operations Personnel
                </div>
              </div>
            </div>

            {/* Photo 3: Delivery Van Dispatch */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col group">
              <div className="relative w-full h-48 sm:h-52 bg-slate-900">
                <Image
                  src="/assets/social/reel-4-dispatch.jpg"
                  alt="Commercial branded delivery van departing for courier linehaul dispatch"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#DC2626] uppercase">OUTGOING TRANSIT</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1">Delivery Van Dispatch</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Consignments loaded into our delivery vehicle for highway linehauls and airport transfers.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Daily Scheduled Dispatches
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FOUR OPERATIONAL STANDARDS (Customer Experience)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>QUALITY COMMITMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Our standards of service.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Every parcel entrusted to Economic Courier in Bhilwara is handled with structured operational rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Digital Weighing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consignments weighed on calibrated scales with clear dead weight and volumetric measurement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Protective Sealing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tamper-evident poly mailers and reinforced strapping protecting contents against dust and transit wear.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Coordinated Transit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scheduled handovers to domestic surface routes and priority air connections based on required speed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct phone and counter access to our local Bhilwara staff for booking queries and rate estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BOTTOM ACTION CTA BAND
          ========================================================================= */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-red-400 text-[11px] font-extrabold tracking-widest uppercase border border-white/15">
            <span>READY TO SEND FROM BHILWARA?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-[-0.03em] max-w-2xl mx-auto leading-tight">
            Have a parcel, document, or fabric swatch to dispatch?
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Reach out to our Bhilwara operations desk for straightforward rate quotations and corridor transit guidance.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => handleOpenInquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <span>Prepare Consignment Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Modal Integration */}
      <InquiryModal
        key={inquiryModalOpen ? (inquiryService || 'open') : 'closed'}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryService}
      />
    </div>
  );
}

export default AboutView;
