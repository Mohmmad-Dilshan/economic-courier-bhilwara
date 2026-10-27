'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Package,
  ArrowRight,
  Truck,
  Globe,
  FileText,
  Layers,
  Phone,
  MessageCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { DEMO_SHIPMENTS } from '@/lib/trackingData';
import { ConsignmentDemoResult } from '@/types/tracking';
import { BUSINESS_INFO } from '@/lib/constants';
import { TrackingModal } from '@/components/home/TrackingModal';
import { InquiryModal } from '@/components/home/InquiryModal';
import { RealMomentsSection } from '@/components/home/RealMomentsSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';

export default function HomePage() {
  const [trackingInput, setTrackingInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeShipment, setActiveShipment] = useState<ConsignmentDemoResult | null>(null);
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

  // Handle tracking submission with validation and simulated feedback
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

    // 2. Realistic subtle simulated lookup (200ms) for tactile user feedback
    setTimeout(() => {
      setSearchedId(query);
      const found = DEMO_SHIPMENTS[query] || null;
      setActiveShipment(found);
      setIsSearching(false);
      setModalOpen(true);
    }, 200);
  };

  const handleSelectSample = (sampleId: string) => {
    setTrackingInput(sampleId);
    setSearchedId(sampleId);
    setInputError(null);
    const found = DEMO_SHIPMENTS[sampleId] || null;
    setActiveShipment(found);
    setModalOpen(true);
  };

  const services = [
    {
      id: 'domestic',
      title: 'Domestic Courier',
      caption: 'domestic · all-india',
      subtext: 'Surface & air express across India',
      image: '/assets/services/card-domestic.jpg',
      icon: Truck,
      rotation: 'lg:-rotate-2',
    },
    {
      id: 'international',
      title: 'International Courier',
      caption: 'international · 220+ countries',
      subtext: 'Global air cargo & priority transit',
      image: '/assets/services/card-international.jpg',
      icon: Globe,
      rotation: 'lg:rotate-1',
    },
    {
      id: 'documents',
      title: 'Documents & Parcels',
      caption: 'documents · priority desk',
      subtext: 'Secure paperwork & dossiers',
      image: '/assets/services/card-documents.jpg',
      icon: FileText,
      rotation: 'lg:-rotate-1',
    },
    {
      id: 'textiles',
      title: 'Commercial & Textile Cargo',
      caption: 'commercial · textile freight',
      subtext: 'Bhilwara mills to national hubs',
      image: '/assets/services/card-textiles.jpg',
      icon: Layers,
      rotation: 'lg:rotate-2',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden antialiased">
      {/* =========================================================================
          1. HERO SECTION (Desktop Proportioned, 1200px Container, Sky-wash Radial)
          ========================================================================= */}
      <section id="tracking" className="relative pt-6 pb-6 lg:pt-10 lg:pb-8 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#EBF5FB_0%,#F8FBFE_50%,#FFFFFF_100%)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-50 via-white to-red-50/50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-xs reveal-init delay-75">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] shadow-[0_0_8px_rgba(220,38,38,0.7)] animate-pulse" />
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>BHILWARA · INDIA</span>
              </div>

              {/* Large Modern Gradient Headline with Flight Trail and Airplane */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black tracking-[-0.035em] leading-[1.06] reveal-init delay-150">
                <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  From Bhilwara to
                </span>{' '}
                <br />
                <span className="bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#B91C1C] bg-clip-text text-transparent inline-flex items-center relative drop-shadow-[0_2px_12px_rgba(220,38,38,0.18)]">
                  the world.
                  <svg
                    className="w-14 h-11 -mt-7 ml-2.5 inline-block overflow-visible shrink-0"
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
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md font-normal reveal-init delay-225">
                Priority domestic express &amp; worldwide air cargo connectivity, tailored for Bhilwara trade, documents, and parcels.
              </p>

              {/* Search / Tracking Box */}
              <div className="pt-1 max-w-[440px] reveal-init delay-300">
                <form
                  onSubmit={handleTrackSubmit}
                  noValidate
                  className={`relative flex items-center bg-white rounded-full p-1.5 pl-4 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border transition-all ${
                    inputError
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200/80 focus-within:ring-2 focus-within:ring-red-500/20'
                  }`}
                >
                  <Package className="w-4 h-4 text-slate-400 shrink-0 mr-2.5" />
                  <input
                    type="text"
                    id="tracking-number-input"
                    value={trackingInput}
                    onChange={(e) => {
                      setTrackingInput(e.target.value);
                      if (inputError) setInputError(null);
                    }}
                    disabled={isSearching}
                    placeholder="Enter your tracking number"
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none disabled:opacity-60"
                    aria-label="Tracking consignment number"
                    aria-invalid={inputError ? 'true' : 'false'}
                    aria-describedby={inputError ? 'tracking-error-msg' : undefined}
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    aria-busy={isSearching}
                    className="shrink-0 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13px] font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Searching...</span>
                      </>
                    ) : (
                      <>
                        <span>Track shipment</span>
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

              {/* WhatsApp / Inquiry Action Button */}
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

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end reveal-init reveal-scale delay-200">
              <div className="relative w-full max-w-[560px]">
                <Image
                  src="/assets/hero/hero-courier.jpg"
                  alt="eCS Courier Delivery staff in Bhilwara with van and happy customer"
                  width={580}
                  height={390}
                  priority
                  className="w-full h-auto object-contain rounded-r-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICE HIGHLIGHTS BAR (Single Pale Blue Bar Evenly Spaced)
          ========================================================================= */}
      <section id="business" className="py-2 lg:py-3">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-[#F0F7FD] rounded-2xl py-3 px-6 sm:px-8 border border-[#E0EDF8] flex flex-wrap md:flex-nowrap items-center justify-between gap-4 sm:gap-6 shadow-2xs reveal-init">
            <div className="flex items-center gap-2.5 text-[13px] font-bold text-slate-800 flex-1 justify-center md:justify-start reveal-init delay-75">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <Truck className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span>Domestic shipping</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3]" />
            <div className="flex items-center gap-2.5 text-[13px] font-bold text-slate-800 flex-1 justify-center md:justify-start reveal-init delay-150">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <Globe className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span>International courier</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3]" />
            <div className="flex items-center gap-2.5 text-[13px] font-bold text-slate-800 flex-1 justify-center md:justify-start reveal-init delay-225">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span>Documents &amp; parcels</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3]" />
            <div className="flex items-center gap-2.5 text-[13px] font-bold text-slate-800 flex-1 justify-center md:justify-start reveal-init delay-300">
              <div className="w-6 h-6 rounded-md bg-white text-[#DC2626] shadow-2xs flex items-center justify-center shrink-0 border border-red-100/60">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              <span>Bhilwara-based service</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR SERVICES SECTION (SwipeTrip-Inspired Floating Polaroid Photo Cards)
          ========================================================================= */}
      <section id="services" className="py-10 lg:py-16 bg-[#FAF7F2]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 reveal-init">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>OUR SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-[-0.035em] leading-[1.12]">
                <span className="bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-transparent">Courier,</span>{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">made simpler.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-md font-normal leading-relaxed">
                Reliable, secure and efficient courier solutions for your personal and business needs.
              </p>
            </div>
            <Link
              href="/services"
              className="text-[13px] font-semibold text-slate-700 hover:text-[#DC2626] inline-flex items-center gap-1.5 transition-colors self-start sm:self-end group"
            >
              <span>View all services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
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
          4. REAL MOMENTS SECTION (Interactive Video Reels with in-place controls)
          ========================================================================= */}
      <RealMomentsSection />

      {/* =========================================================================
          5. HOW SHIPPING WORKS SECTION (4-Step Process Flow)
          ========================================================================= */}
      <HowItWorksSection onOpenInquiry={handleOpenInquiry} />

      {/* =========================================================================
          6. ABOUT US SECTION (Clean Reference UI: eCS Collage + Clean Copy)
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>ABOUT US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.035em] leading-[1.08]">
                <span className="bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-transparent">A local team,</span> <br />
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">ready to help.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg pt-1 font-normal mx-auto lg:mx-0">
                Economic Courier is a trusted name in Bhilwara, providing domestic and international courier services with a strong focus on reliability, safety and customer satisfaction.
              </p>
              <div className="pt-3 w-full flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry()}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[14px] font-bold px-6 py-3 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(220,38,38,0.25)] transition-all active:scale-95 cursor-pointer"
                >
                  <span>Contact Economic Courier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONTACT / LOCATION STRIP (Refined Desktop Dimensions)
          ========================================================================= */}
      <section id="contact" className="py-4 sm:py-6 mb-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 reveal-init delay-100">
          <div className="bg-[#F0F7FD] rounded-2xl border border-[#E0EDF8] flex flex-col md:flex-row items-center justify-between shadow-2xs overflow-hidden">
            {/* Left: Call Us / Inquire Online */}
            <button
              type="button"
              onClick={() => handleOpenInquiry()}
              className="flex items-center gap-3.5 py-4 pl-8 text-left bg-transparent border-0 cursor-pointer group hover:bg-sky-50/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-inset"
              aria-label="Open Customer & Rate Inquiry Desk (+91 89551 44444, line pending owner confirmation)"
              title="Click to open Customer & Rate Inquiry Desk (Phone line pending confirmation)"
            >
              <div className="w-9 h-9 rounded-full bg-red-100/70 flex items-center justify-center text-[#DC2626] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5 flex-wrap">
                  <span>Call Us &bull; Inquire Online</span>
                  <span className="text-[9px] font-mono font-medium px-1.5 py-0.2 rounded bg-amber-100/80 text-amber-800 border border-amber-200">
                    Pending Confirmation
                  </span>
                </p>
                <p className="text-base font-bold text-slate-800 tracking-tight group-hover:text-[#DC2626] transition-colors">+91 89551 44444</p>
              </div>
            </button>

            {/* Divider */}
            <div className="hidden md:block h-9 w-px bg-[#D4E4F3]" />

            {/* Middle: Our Location */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Bhilwara Hub location on Google Maps"
              className="flex items-center gap-3.5 py-4 px-6 flex-1 max-w-lg hover:bg-sky-50/60 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-inset"
            >
              <div className="w-9 h-9 rounded-full bg-red-100/70 flex items-center justify-center text-[#DC2626] shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4 text-[#DC2626]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Our Location &bull; Open in Maps</p>
                <p className="text-[13px] font-medium text-slate-700 leading-snug group-hover:text-[#DC2626] transition-colors">
                  C-74, Bhilwara Textile Market, Pur Road, Bhilwara, Rajasthan 311001
                </p>
              </div>
            </a>

            {/* Right: Map Graphic */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open location on Google Maps"
              className="relative w-56 h-20 shrink-0 hidden sm:block overflow-hidden group cursor-pointer"
            >
              <Image
                src="/assets/office/map-graphic.jpg"
                alt="Economic Courier location map marker"
                fill
                sizes="224px"
                className="object-cover object-right group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Demonstration Tracking Modal */}
      <TrackingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        result={activeShipment}
        searchedQuery={searchedId}
        onSelectSample={handleSelectSample}
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
