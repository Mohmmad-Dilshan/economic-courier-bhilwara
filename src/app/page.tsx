'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  MapPin,
  Package,
  ArrowRight,
  Truck,
  Globe,
  FileText,
  Layers,
  MessageCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

// Below-the-fold sections and modals dynamically imported for instant sub-second initial LCP
const TrackingNoticeModal = dynamic(
  () => import('@/components/home/TrackingNoticeModal').then((mod) => mod.TrackingNoticeModal),
  { ssr: false }
);
const InquiryModal = dynamic(
  () => import('@/components/home/InquiryModal').then((mod) => mod.InquiryModal),
  { ssr: false }
);
const NetworkPartnersSection = dynamic(
  () => import('@/components/home/NetworkPartnersSection').then((mod) => mod.NetworkPartnersSection)
);
const DailyRouteSection = dynamic(
  () => import('@/components/home/DailyRouteSection').then((mod) => mod.DailyRouteSection)
);
const RealMomentsSection = dynamic(
  () => import('@/components/home/RealMomentsSection').then((mod) => mod.RealMomentsSection)
);
const HowItWorksSection = dynamic(
  () => import('@/components/home/HowItWorksSection').then((mod) => mod.HowItWorksSection)
);
const ReviewsSection = dynamic(
  () => import('@/components/home/ReviewsSection').then((mod) => mod.ReviewsSection)
);
const FAQSection = dynamic(
  () => import('@/components/home/FAQSection').then((mod) => mod.FAQSection)
);
const CTABand = dynamic(
  () => import('@/components/home/CTABand').then((mod) => mod.CTABand)
);
const HubLocationSection = dynamic(
  () => import('@/components/home/HubLocationSection').then((mod) => mod.HubLocationSection)
);

export default function HomePage() {
  const [trackingInput, setTrackingInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchedId, setSearchedId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [inputError, setInputError] = useState<string | null>(null);

  // Inquiry Desk state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState<string>('');

  const handleOpenInquiry = (service: string = '') => {
    setInquiryInitialService(service);
    setInquiryModalOpen(true);
  };

  // Truthful tracking input submission: Validates and opens the transparent notice modal
  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingInput.trim().toUpperCase();

    // 1. Input validation: Empty query check
    if (!query) {
      setInputError('Please enter a tracking or consignment number.');
      return;
    }

    setInputError(null);
    setIsSearching(true);

    // 2. Tactile feedback transition before opening status notice modal
    setTimeout(() => {
      setSearchedId(query);
      setIsSearching(false);
      setModalOpen(true);
    }, 150);
  };

  const services = [
    {
      id: 'domestic',
      title: 'Domestic Courier',
      caption: 'domestic · all-india',
      subtext: 'Surface & air express across India',
      image: '/assets/services/card-domestic.webp',
      icon: Truck,
      rotation: 'lg:-rotate-2',
    },
    {
      id: 'international',
      title: 'International Courier',
      caption: 'international · eCS express',
      subtext: 'Global air cargo & priority transit',
      image: '/assets/services/card-international.webp',
      icon: Globe,
      rotation: 'lg:rotate-1',
    },
    {
      id: 'documents',
      title: 'Documents & Parcels',
      caption: 'documents · priority desk',
      subtext: 'Secure paperwork & dossiers',
      image: '/assets/services/card-documents.webp',
      icon: FileText,
      rotation: 'lg:-rotate-1',
    },
    {
      id: 'textiles',
      title: 'Commercial & Textile Cargo',
      caption: 'commercial · textile freight',
      subtext: 'Bhilwara mills to national hubs',
      image: '/assets/services/card-textiles.webp',
      icon: Layers,
      rotation: 'lg:rotate-2',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden antialiased">
      {/* =========================================================================
          1. HERO SECTION (Desktop Proportioned, 1200px Container, Sky-wash Radial)
          ========================================================================= */}
      <section
        id="tracking"
        className="relative pt-6 pb-8 lg:pt-10 lg:pb-12 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#EBF5FB_0%,#F8FBFE_50%,#FFFFFF_100%)]"
      >
        <div className="max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-50 via-white to-red-50/50 border border-red-200/80 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-xs reveal-init delay-75">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] shadow-[0_0_8px_rgba(220,38,38,0.7)] animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-red-700" />
                <span>BHILWARA · INDIA</span>
              </div>

              {/* Large Modern Gradient Headline with Flight Trail and Airplane */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black tracking-[-0.035em] leading-[1.08] sm:leading-[1.06] reveal-init delay-150">
                <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  From Bhilwara to
                </span>{' '}
                <br />
                <span className="bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#B91C1C] bg-clip-text text-transparent inline-flex items-center relative drop-shadow-[0_2px_12px_rgba(220,38,38,0.18)]">
                  the world.
                  <svg
                    className="w-10 h-8 xs:w-12 xs:h-9 sm:w-14 sm:h-11 -mt-5 sm:-mt-7 ml-2 sm:ml-2.5 inline-block overflow-visible shrink-0"
                    viewBox="0 0 50 40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 30 Q 20 8 42 12"
                      stroke="#F87171"
                      strokeWidth="1.5"
                      strokeDasharray="2 3"
                    />
                    <path
                      d="M 40 5 L 48 10 L 42 17 L 43 12 L 36 10 Z"
                      fill="#DC2626"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-md font-normal reveal-init delay-225">
                Priority domestic express &amp; worldwide air cargo connectivity, tailored for Bhilwara trade, documents, and parcels.
              </p>

              {/* Search / Tracking Box */}
              <div className="pt-1 max-w-[460px] reveal-init delay-300">
                <form
                  onSubmit={handleTrackSubmit}
                  noValidate
                  className={`relative flex items-center bg-white rounded-full p-1 sm:p-1.5 pl-3 sm:pl-4 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border transition-all ${
                    inputError
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200/80 focus-within:ring-2 focus-within:ring-red-500/20'
                  }`}
                >
                  <Package className="w-4 h-4 text-slate-400 shrink-0 mr-2 sm:mr-2.5" />
                  <input
                    type="text"
                    id="tracking-number-input"
                    value={trackingInput}
                    onChange={(e) => {
                      setTrackingInput(e.target.value);
                      if (inputError) setInputError(null);
                    }}
                    disabled={isSearching}
                    placeholder="Enter consignment / tracking no."
                    className="w-full min-w-0 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none disabled:opacity-60"
                    aria-label="Tracking consignment number"
                    aria-invalid={inputError ? 'true' : 'false'}
                    aria-describedby={inputError ? 'tracking-error-msg' : undefined}
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    aria-busy={isSearching}
                    className="shrink-0 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[12px] sm:text-[13px] font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full inline-flex items-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span className="hidden xs:inline">Searching...</span>
                        <span className="xs:hidden">...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden xs:inline">Track shipment</span>
                        <span className="xs:hidden">Track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
                {inputError && (
                  <p
                    id="tracking-error-msg"
                    role="alert"
                    aria-live="polite"
                    className="text-xs text-[#DC2626] font-medium flex items-center gap-1.5 pt-2 pl-3"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{inputError}</span>
                  </p>
                )}
              </div>

              {/* Inquiry Action Button */}
              <div className="pt-0.5 reveal-init delay-375">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry()}
                  className="inline-flex items-center gap-2 bg-[#008751] hover:bg-[#007043] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-xs transition-all active:scale-95 cursor-pointer"
                  title="Submit courier inquiry online"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#008751]" />
                  <span>Talk to our team</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card (Optimized WebP with preserved layout) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end reveal-init reveal-scale delay-200">
              <div className="relative w-full max-w-[560px]">
                <Image
                  src="/assets/hero/hero-courier.webp"
                  alt="eCS Courier Delivery staff in Bhilwara with van and happy customer"
                  width={580}
                  height={390}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                  className="w-full h-auto object-contain rounded-3xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100/80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICE HIGHLIGHTS BAR (Single Pale Blue Bar Evenly Spaced, Directly Under Hero)
          ========================================================================= */}
      <section className="py-2 sm:py-3">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F0F7FD] rounded-2xl py-3 px-4 sm:px-8 border border-[#E0EDF8] grid grid-cols-2 md:flex md:items-center md:justify-between gap-3 sm:gap-4 md:gap-6 shadow-2xs reveal-init">
            <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] font-bold text-slate-800 flex-1 justify-start reveal-init delay-75">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <Truck className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span className="truncate">Domestic shipping</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3] shrink-0" />
            <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] font-bold text-slate-800 flex-1 justify-start reveal-init delay-150">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <Globe className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span className="truncate">International courier</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3] shrink-0" />
            <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] font-bold text-slate-800 flex-1 justify-start reveal-init delay-225">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span className="truncate">Documents &amp; parcels</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3] shrink-0" />
            <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] font-bold text-slate-800 flex-1 justify-start reveal-init delay-300">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span className="truncate">Bhilwara-based</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COURIER PARTNER TRACKING (Verified official partners: Blue Dart & Akash Ganga)
          ========================================================================= */}
      <NetworkPartnersSection />

      {/* =========================================================================
          4. DAILY REGIONAL ROUTE & SAME-DAY DELIVERY CORRIDOR (Client Dispatch Circuit)
          ========================================================================= */}
      <DailyRouteSection onOpenInquiry={handleOpenInquiry} />

      {/* =========================================================================
          5. OUR SERVICES SECTION (SwipeTrip-Inspired Floating Polaroid Photo Cards)
          ========================================================================= */}
      <section id="services" className="py-10 lg:py-16 bg-[#FAF7F2]/60 scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 reveal-init relative">
            <div className="max-w-xl space-y-2.5 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>OUR SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.035em] leading-[1.12]">
                <span className="bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-transparent">Courier,</span>{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">made simpler.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                Reliable, secure and efficient courier solutions for your personal and business needs.
              </p>
              <div className="pt-1">
                <Link
                  href="/services"
                  prefetch={false}
                  className="text-[13px] font-bold text-slate-700 hover:text-[#DC2626] inline-flex items-center gap-1.5 transition-colors group"
                >
                  <span>View all services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DC2626] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Courier Delivery Duo (3D eCS Parcel Boxes + Scooter Rider) */}
            <div className="relative shrink-0 hidden sm:flex items-center justify-center lg:justify-end gap-3 lg:gap-4 z-10 pointer-events-none select-none">
              {/* 3D eCS Branded Carton Boxes (Where User Circled) */}
              <div className="relative w-36 sm:w-44 md:w-48 lg:w-[210px] xl:w-[230px] aspect-[951/570] transition-transform duration-700 ease-out hover:scale-105 filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.10)]">
                <Image
                  src="/assets/services/ecs-boxes-3d.png"
                  alt="eCS World Wide Express 3D Courier Parcel Boxes"
                  fill
                  sizes="(max-width: 1024px) 210px, 230px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Inward-Facing eCS Scooter Delivery Rider */}
              <div className="relative w-40 sm:w-48 md:w-52 lg:w-[220px] xl:w-[240px] aspect-[645/550] transition-transform duration-700 ease-out hover:scale-105 filter drop-shadow-[0_12px_24px_rgba(220,38,38,0.12)]">
                <Image
                  src="/assets/services/ecs-scooter-rider-facing-inward.png"
                  alt="eCS World Wide Express Scooter Delivery Rider Object"
                  fill
                  sizes="(max-width: 1024px) 220px, 240px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* SwipeTrip-Style Polaroid Cards: 2x2 on Mobile, 4 Across on Desktop with Floating Tilts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6 pt-2 pb-3">
            {services.map((service, sIdx) => {
              const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];
              const delayClass = delays[sIdx % delays.length];

              return (
                <div
                  key={service.id}
                  onClick={() => handleOpenInquiry(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenInquiry(service.id);
                    }
                  }}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 lg:p-4 pb-3 sm:pb-4.5 lg:pb-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_44px_rgba(15,23,42,0.12)] border border-slate-100/90 flex flex-col group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1.5 hover:z-10 ${service.rotation} hover:rotate-0 reveal-init reveal-scale ${delayClass}`}
                >
                  {/* Photo Frame with Clean Rounded Corners */}
                  <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Polaroid Caption Label (SwipeTrip Style: centered with dot separator) */}
                  <div className="text-center pt-2.5 sm:pt-3.5 flex flex-col items-center justify-center">
                    <p className="text-[11px] sm:text-[13px] lg:text-[14px] font-bold text-slate-800 group-hover:text-[#DC2626] transition-colors leading-tight tracking-tight">
                      {service.caption}
                    </p>
                    <p className="hidden sm:block text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">
                      {service.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. REAL MOMENTS SECTION (Interactive Video Reels with in-place controls)
          ========================================================================= */}
      <RealMomentsSection />

      {/* =========================================================================
          8. HOW SHIPPING WORKS SECTION (4-Step Process Flow)
          ========================================================================= */}
      <HowItWorksSection onOpenInquiry={handleOpenInquiry} />

      {/* =========================================================================
          8.5. CUSTOMER REVIEWS & GOOGLE RATINGS SECTION (Corridor Businesses)
          ========================================================================= */}
      <ReviewsSection />

      {/* =========================================================================
          9. ABOUT US SECTION (Clean Reference UI: eCS Collage + Clean Copy)
          ========================================================================= */}
      <section id="about" className="py-8 sm:py-12 lg:py-16 scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Photo Collage (eCS Wall Logo, Team & Van) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start reveal-init">
              <div className="relative w-full max-w-[540px]">
                <Image
                  src="/assets/office/about-collage.jpg"
                  alt="Economic Courier Bhilwara office team, eCS wall logo, and logistics dispatch"
                  width={580}
                  height={350}
                  priority
                  className="w-full h-auto object-contain block mx-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Right Content: Centered on mobile, left-aligned on desktop */}
            <div className="lg:col-span-6 space-y-4 reveal-init delay-100 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>ABOUT US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.035em] leading-[1.08]">
                <span className="bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-transparent">A local team,</span> <br />
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">ready to help.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg pt-1 font-normal mx-auto lg:mx-0">
                Economic Courier is a courier service in Bhilwara, providing domestic and international courier services for trade correspondence, parcels, and document consignments.
              </p>
              <div className="pt-3 w-full flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry()}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[14px] font-bold px-6 py-3 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(220,38,38,0.25)] transition-all active:scale-95 cursor-pointer"
                >
                  <span>Prepare Consignment Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (Interactive Accordion & Support Desk)
          ========================================================================= */}
      <FAQSection onOpenInquiry={handleOpenInquiry} />

      {/* =========================================================================
          11. BHILWARA CENTRAL HUB & INTERACTIVE MAP (Real Verified Data)
          ========================================================================= */}
      <HubLocationSection onOpenInquiry={handleOpenInquiry} />

      {/* =========================================================================
          12. CALL TO ACTION BAND (Shipment Inquiry Preparation - Above Footer)
          ========================================================================= */}
      <CTABand onOpenInquiry={handleOpenInquiry} />

      {/* Verified Courier Partner Tracking Dialog */}
      <TrackingNoticeModal
        key={modalOpen ? (searchedId || 'open') : 'closed'}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        searchedQuery={searchedId}
      />

      {/* Customer & Rate Inquiry Modal */}
      <InquiryModal
        key={inquiryModalOpen ? (inquiryInitialService || 'open') : 'closed'}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryInitialService}
      />
    </div>
  );
}
