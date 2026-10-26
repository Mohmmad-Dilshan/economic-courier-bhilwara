'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Package,
  ArrowRight,
  Truck,
  Globe,
  FileText,
  Phone,
  ChevronRight,
  MessageCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { DEMO_SHIPMENTS } from '@/lib/trackingData';
import { ConsignmentDemoResult } from '@/types/tracking';
import { BUSINESS_INFO } from '@/lib/constants';
import { TrackingModal } from '@/components/home/TrackingModal';
import { InquiryModal } from '@/components/home/InquiryModal';

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

  // Reels carousel scroll ref
  const reelsScrollRef = useRef<HTMLDivElement>(null);
  const scrollReels = () => {
    reelsScrollRef.current?.scrollBy({ left: 240, behavior: 'smooth' });
  };

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
      description: 'Fast & reliable delivery across India.',
      image: '/assets/services/service-domestic.jpg',
      icon: Truck,
    },
    {
      id: 'international',
      title: 'International Courier',
      description: 'Global delivery in 200+ countries.',
      image: '/assets/services/service-international.jpg',
      icon: Globe,
    },
    {
      id: 'documents',
      title: 'Documents & Parcels',
      description: 'Secure handling of your important documents and parcels.',
      image: '/assets/services/service-documents.jpg',
      icon: FileText,
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5F5] border border-red-100/80 text-[#DC2626] text-[11px] font-bold tracking-wider uppercase shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626] fill-red-100" />
                <span>BHILWARA · INDIA</span>
              </div>

              {/* Large Two-Color Headline with Flight Trail and Airplane */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
                From Bhilwara to <br />
                <span className="text-[#DC2626] inline-flex items-center relative">
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
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                Domestic &amp; international courier services <br className="hidden sm:inline" />
                for documents and parcels.
              </p>

              {/* Search / Tracking Box */}
              <div className="pt-1 max-w-[440px]">
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
              <div className="pt-0.5">
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
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
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
          <div className="bg-[#F0F7FD] rounded-2xl py-3.5 px-8 border border-[#E0EDF8] flex flex-wrap md:flex-nowrap items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#0F172A] flex-1 justify-center md:justify-start">
              <Truck className="w-4 h-4 text-[#0F172A] shrink-0" />
              <span>Domestic shipping</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3]" />
            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#0F172A] flex-1 justify-center md:justify-start">
              <Globe className="w-4 h-4 text-[#0F172A] shrink-0" />
              <span>International courier</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3]" />
            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#0F172A] flex-1 justify-center md:justify-start">
              <FileText className="w-4 h-4 text-[#0F172A] shrink-0" />
              <span>Documents &amp; parcels</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-[#D4E4F3]" />
            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-[#0F172A] flex-1 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-[#0F172A] shrink-0" />
              <span>Bhilwara-based service</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR SERVICES SECTION (3 Wide Desktop Cards)
          ========================================================================= */}
      <section id="services" className="py-8 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <p className="text-[11px] font-bold text-[#DC2626] tracking-wider uppercase">
                OUR SERVICES
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight mt-1">
                Courier, made simpler.
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-md">
                Reliable, secure and efficient courier solutions for your personal and business needs.
              </p>
            </div>
            <Link
              href="/services"
              className="text-[13px] font-semibold text-slate-700 hover:text-[#DC2626] inline-flex items-center gap-1 transition-colors self-start sm:self-end"
            >
              <span>View all services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
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
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Clean Photo (Contains circular badge naturally) */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-1">
                    <span className="w-7 h-7 rounded-full bg-[#0F172A] text-white flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-[#DC2626]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. REAL MOMENTS SECTION (Spacious Pale-Blue Card with Video Reels)
          ========================================================================= */}
      <section id="gallery" className="py-6 lg:py-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-[#F0F5FA] rounded-3xl p-7 lg:p-9 border border-[#E2ECF5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Text Column */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-[11px] font-bold text-[#DC2626] tracking-wider uppercase">
                  REAL MOMENTS
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Real people. <br />
                  Real parcels.
                </h2>
                <p className="text-[13px] text-slate-600 leading-relaxed max-w-xs pt-1">
                  A closer look at our operations, team and the people behind every delivery.
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500 text-red-600 bg-white hover:bg-red-50 text-[13px] font-semibold shadow-2xs transition-all cursor-pointer"
                  >
                    <InstagramIcon size={15} className="text-[#DC2626]" />
                    <span>Watch our Instagram reels</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" />
                  </a>
                </div>
              </div>

              {/* Right Reels Row (1 Wide + 3 Narrow Cards) */}
              <div
                ref={reelsScrollRef}
                className="lg:col-span-8 flex items-center gap-3.5 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
              >
                {/* Reel 1 (Featured Wide Reel) */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch 'Inside eCS' on Instagram"
                  className="relative w-64 lg:w-[280px] h-44 shrink-0 rounded-xl overflow-hidden shadow-2xs group cursor-pointer hover:shadow-md transition-all"
                >
                  <Image
                    src="/assets/social/reel-1-inside-ecs.jpg"
                    alt="Inside eCS"
                    fill
                    sizes="(max-width: 1024px) 260px, 280px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>

                {/* Reel 2 (#TeamECS) */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch '#TeamECS' on Instagram"
                  className="relative w-28 lg:w-[120px] h-44 shrink-0 rounded-xl overflow-hidden shadow-2xs group cursor-pointer hover:shadow-md transition-all"
                >
                  <Image
                    src="/assets/social/reel-2-team.jpg"
                    alt="#TeamECS"
                    fill
                    sizes="(max-width: 1024px) 112px, 120px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>

                {/* Reel 3 (Packing Process) */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch 'Packing Process' on Instagram"
                  className="relative w-28 lg:w-[120px] h-44 shrink-0 rounded-xl overflow-hidden shadow-2xs group cursor-pointer hover:shadow-md transition-all"
                >
                  <Image
                    src="/assets/social/reel-3-packing.jpg"
                    alt="Packing Process"
                    fill
                    sizes="(max-width: 1024px) 112px, 120px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>

                {/* Reel 4 (Dispatch) */}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Watch 'Dispatch' on Instagram"
                  className="relative w-28 lg:w-[120px] h-44 shrink-0 rounded-xl overflow-hidden shadow-2xs group cursor-pointer hover:shadow-md transition-all"
                >
                  <Image
                    src="/assets/social/reel-4-dispatch.jpg"
                    alt="Dispatch"
                    fill
                    sizes="(max-width: 1024px) 112px, 120px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>

                {/* Next Arrow Button */}
                <button
                  type="button"
                  onClick={scrollReels}
                  aria-label="Scroll next real moments"
                  className="w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 shrink-0 hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ABOUT US SECTION (Desktop Collage Left + Copy Right)
          ========================================================================= */}
      <section id="about" className="py-8 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo Collage */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[540px]">
                <Image
                  src="/assets/office/about-collage.jpg"
                  alt="Economic Courier Bhilwara office team, eCS wall logo, and logistics dispatch"
                  width={580}
                  height={350}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-[11px] font-bold text-[#DC2626] tracking-wider uppercase">
                ABOUT US
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                A local team, <br />
                ready to help.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg pt-1">
                Economic Courier is a trusted name in Bhilwara, providing domestic and international courier services with a strong focus on reliability, safety and customer satisfaction.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry()}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[14px] font-bold px-6 py-3 rounded-full shadow-xs transition-all active:scale-95 cursor-pointer"
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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-[#F0F7FD] rounded-2xl border border-[#E0EDF8] flex flex-col md:flex-row items-center justify-between shadow-2xs overflow-hidden">
            {/* Left: Call Us */}
            <div
              onClick={() => handleOpenInquiry()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenInquiry();
                }
              }}
              className="flex items-center gap-3.5 py-4 pl-8 cursor-pointer group hover:bg-sky-50/60 transition-colors"
              title="Click to open Customer & Rate Inquiry Desk"
            >
              <div className="w-9 h-9 rounded-full bg-red-100/70 flex items-center justify-center text-[#DC2626] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Call Us &bull; Inquire Online</p>
                <p className="text-base font-bold text-[#0F172A] tracking-tight">+91 89551 44444</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-9 w-px bg-[#D4E4F3]" />

            {/* Middle: Our Location */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Bhilwara Hub location on Google Maps"
              className="flex items-center gap-3.5 py-4 px-6 flex-1 max-w-lg hover:bg-sky-50/60 transition-colors group"
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
