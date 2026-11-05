'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  PackageCheck,
  ArrowRight,
  Camera,
  Film,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Scale,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  FEATURED_VIDEO,
  OPERATIONAL_REELS,
  AUTHENTIC_PHOTOS,
  GalleryVideo,
  GalleryPhoto,
} from '@/lib/galleryData';
import { InquiryModal } from '@/components/home/InquiryModal';

export function GalleryView() {
  // Modal state for Rate & Consignment Inquiry
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string | null>(null);

  // Lightbox state for authentic photography preview
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Active playing video ID across the entire page (only one video plays at a time)
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  // Active category filter for photography
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleOpenInquiry = (serviceName?: string) => {
    setInquiryService(serviceName || null);
    setInquiryModalOpen(true);
  };

  // Keyboard navigation for Lightbox (Esc, Left, Right)
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % AUTHENTIC_PHOTOS.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev - 1 + AUTHENTIC_PHOTOS.length) % AUTHENTIC_PHOTOS.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  // Filtered photos
  const filteredPhotos =
    activeCategory === 'all'
      ? AUTHENTIC_PHOTOS
      : AUTHENTIC_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. GALLERY HERO & EDITORIAL INTRODUCTION
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 bg-gradient-to-b from-white via-slate-50 to-[#F0F5FA] border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Location Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs font-medium text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold" aria-current="page">
                Gallery
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · HUB FACILITY</span>
            </div>
          </div>

          {/* Headline & Value Proposition */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span>AUTHENTIC OPERATIONS ARCHIVE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#0F172A] leading-[1.08]">
              Real operations.{' '}
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                Real parcels.
              </span>{' '}
              <br className="hidden sm:inline" />
              In constant motion.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal pt-1">
              An unvarnished view of daily logistics inside Economic Courier and eCS World Wide Express.
              From walk-in intake at our Bhilwara hub and specialized textile sample sealing, to barcode manifest
              sorting and evening highway fleet departures.
            </p>
          </div>

          {/* Quick-Jump Navigation Tabs */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-wider text-[11px] mr-1">
              Jump To:
            </span>
            <a
              href="#featured-video"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors shadow-2xs inline-flex items-center gap-1.5"
            >
              <Film className="w-3.5 h-3.5 text-[#DC2626]" />
              Featured Video
            </a>
            <a
              href="#reels"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors shadow-2xs inline-flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-[#DC2626]" />
              4 Operational Reels
            </a>
            <a
              href="#counter-intake"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors shadow-2xs inline-flex items-center gap-1.5"
            >
              <Scale className="w-3.5 h-3.5 text-[#DC2626]" />
              Counter & Intake
            </a>
            <a
              href="#textile-packing"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors shadow-2xs inline-flex items-center gap-1.5"
            >
              <PackageCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              Textile Packing Lab
            </a>
            <a
              href="#photos"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors shadow-2xs inline-flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
              Photography Archive
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED OPERATIONAL VIDEO (Cinematic Player Showcase)
          ========================================================================= */}
      <section id="featured-video" className="py-10 sm:py-16 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#09132B] via-[#0F1E3D] to-[#070E20] rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-800 text-white shadow-2xl overflow-hidden relative">
            {/* Ambient Red Glow */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Video Theater Player */}
              <div className="lg:col-span-7">
                <FeaturedPlayer
                  video={FEATURED_VIDEO}
                  currentPlayingId={currentPlayingId}
                  setCurrentPlayingId={setCurrentPlayingId}
                />
              </div>

              {/* Right Column: Operational Context & Verification Points */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-[11px] font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span>{FEATURED_VIDEO.tag}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  {FEATURED_VIDEO.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  {FEATURED_VIDEO.detailedNote}
                </p>

                {/* Key Aspect Badges */}
                <div className="pt-2 space-y-2.5">
                  {FEATURED_VIDEO.keyAspects.map((aspect, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{aspect}</span>
                    </div>
                  ))}
                </div>

                {/* Operational Details Grid */}
                <div className="pt-4 grid grid-cols-2 gap-3 border-t border-white/10 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">
                      Intake Verification
                    </span>
                    <span className="text-white font-semibold">Digital Scale Calibration</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">
                      Departure Windows
                    </span>
                    <span className="text-white font-semibold">Daily Evening Cutoffs</span>
                  </div>
                </div>

                {/* External Instagram Link & Prototype Safe Action */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={FEATURED_VIDEO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <InstagramIcon size={14} className="text-white" />
                    <span>Watch Full Clip on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleOpenInquiry('Hub Intake & Counter')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Consignment Inquiry</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FOUR AUTHENTIC OPERATIONAL REELS (Varied Editorial Presentation)
          ========================================================================= */}
      <section id="reels" className="py-10 sm:py-16 bg-white border-y border-slate-200 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>VIDEO ARCHIVE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
                Four stages of Bhilwara dispatch.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Each reel documents a critical station in our logistics flow. Tap to watch the actual
                handling routines filmed inside our Bhilwara facility.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-red-500 text-red-600 bg-white hover:bg-red-50 text-xs sm:text-[13px] font-semibold shadow-2xs transition-all active:scale-95"
              >
                <InstagramIcon size={14} className="text-[#DC2626]" />
                <span>Follow @economiccourierbhilwara</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </div>
          </div>

          {/* 4 Editorial Reel Cards with Single-Active Playback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {OPERATIONAL_REELS.map((reel, index) => (
              <EditorialReelCard
                key={reel.id}
                reel={reel}
                index={index}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OFFICE & CUSTOMER COUNTER DEEP DIVE (Physical Transparency)
          ========================================================================= */}
      <section id="counter-intake" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Photo Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group aspect-[4/3]">
                <Image
                  src="/assets/social/reel-inside-ecs.jpg"
                  alt="Economic Courier customer booking counter with digital weighing scale in Bhilwara"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 text-white border border-white/20 text-[11px] font-bold tracking-wide uppercase">
                    BHILWARA WALK-IN DESK
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-red-400 block mb-1">
                    Authentic Hub Asset
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    Commercial booking desk with calibrated digital weight readout visible to every sender.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-extrabold tracking-widest uppercase">
                <Scale className="w-3.5 h-3.5 text-blue-600" />
                <span>CUSTOMER COUNTER TRANSPARENCY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
                No hidden weight.{' '}
                <span className="text-[#DC2626]">Direct scale readout.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Logistics disputes frequently stem from opaque weight calculations. At our Bhilwara
                counter in Bhilwara, every parcel is placed onto commercial digital scales directly in
                front of the customer.
              </p>

              <div className="pt-2 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Live Digital Weight Display
                    </strong>
                    <span>
                      Customers see exact grams and kilograms on the customer-facing readout before
                      freight charges are applied.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">
                      Documentation & Export Pouch Check
                    </strong>
                    <span>
                      Counter personnel review invoices, customs declarations, and GST details for
                      international air forwardings before sealing.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TEAM & PARCEL HANDLING (Local Accountability)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>#TEAMECS GROUND CREW</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
                Handled by local specialists, not anonymous conveyor belts.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Bhilwara is a relationship-driven commercial city. Our ground logistics crew knows local
                mill owners, brokers, and trade agents by name. Every consignment is inspected manually,
                verified against the manifest, and organized into protected transit sacks.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[#DC2626] font-bold block mb-1 text-[11px] uppercase tracking-wider">
                    Zero Throwing Policy
                  </span>
                  <p className="text-slate-600 font-medium">
                    Textile swatch books and fragile trade envelopes are hand-stacked, never tossed
                    across sorting bays.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[#DC2626] font-bold block mb-1 text-[11px] uppercase tracking-wider">
                    Lane Segregation
                  </span>
                  <p className="text-slate-600 font-medium">
                    Jaipur road linehauls, Delhi night express, and Mumbai air cargo are sorted into
                    dedicated color-coded staging bins.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl group aspect-[4/3]">
                <Image
                  src="/assets/social/reel-team.jpg"
                  alt="#TeamECS sorting and logistics crew inspecting parcel manifests in Bhilwara"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 text-white border border-white/20 text-[11px] font-bold tracking-wide uppercase">
                    OPERATIONS CREW DECK
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-red-400 block mb-1">
                    Authentic Team Asset
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    Manifest verification and destination binning before the evening linehaul vehicle cutoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TEXTILE PACKING LAB & DISPATCH (Bhilwara Trade Relevance)
          ========================================================================= */}
      <section id="textile-packing" className="py-12 sm:py-16 lg:py-20 bg-[#F0F5FA] scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase mb-3">
              <PackageCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>TEXTILE TRADE SPECIALIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
              Protective packing engineered for fabric swatches.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal pt-2">
              In Bhilwara, suiting and shirting fabric swatches are active sales instruments. If a sample
              envelope arrives soiled by rain or torn in transit, multi-lakh textile orders can be
              delayed. Here is how our packing lab protects every swatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                01
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">
                Moisture-Proof Poly Wrapping
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Swatches and trade folders are wrapped in heavy-gauge water-resistant polyethylene to
                shield fabric against moisture, humidity, and road grime.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                02
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">
                High-Tension Cross-Strapping
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bulk swatch bundles exceeding 2 kg are reinforced with high-tensile poly-straps to prevent
                burst edges during regional transit and airline conveyor transfers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                03
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">
                Tamper-Evident Security Seal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every package is sealed with continuous tamper-evident adhesive tape. Any unrecorded
                opening attempt during transit leaves visible visual distortion.
              </p>
            </div>
          </div>

          {/* Photo & Video Proof Strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/9] border border-slate-200 shadow-md">
              <Image
                src="/assets/services/card-textiles.webp"
                alt="Packaged textile swatch bundles ready for Bhilwara courier dispatch"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                Protected Textile Swatch Consignment
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/9] border border-slate-200 shadow-md">
              <Image
                src="/assets/social/reel-packing.jpg"
                alt="Sealing and strapping operation in Bhilwara packing lab"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                Packing Lab Sealing Routine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. AUTHENTIC PHOTOGRAPHY ARCHIVE & ACCESSIBLE LIGHTBOX
          ========================================================================= */}
      <section id="photos" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase">
                <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>PHOTOGRAPHY ARCHIVE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
                Authentic business moments in stills.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Click any photograph to view in high resolution with operational details and field notes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'hub', label: 'Hub & Counter' },
                { id: 'team', label: 'Crew' },
                { id: 'packing', label: 'Packing' },
                { id: 'dispatch', label: 'Fleet' },
                { id: 'textiles', label: 'Textiles' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#DC2626] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(AUTHENTIC_PHOTOS.findIndex((p) => p.id === photo.id))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePhotoIndex(AUTHENTIC_PHOTOS.findIndex((p) => p.id === photo.id));
                  }
                }}
                aria-label={`View photo: ${photo.title}`}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/90 text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                    {photo.tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <h3 className="font-extrabold text-xs sm:text-sm line-clamp-1 group-hover:text-red-400 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 font-normal">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. INSTAGRAM CTA & CLIENT CONSULTATION BAND
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#09132B] via-[#0F1E3D] to-[#070E20] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
              <InstagramIcon size={14} className="text-red-400" />
              <span>OFFICIAL INSTAGRAM CHANNEL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-white leading-tight">
              Follow our daily dispatches in real time.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
              We regularly post parcel packing demos, transit updates, and Bhilwara hub operations on
              our verified Instagram page. Connect with us directly online or request a rate quote.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <InstagramIcon size={16} className="text-white" />
                <span>Open Instagram Profile</span>
                <ExternalLink className="w-4 h-4 text-white/80" />
              </a>

              <button
                type="button"
                onClick={() => handleOpenInquiry('Gallery Instagram Action')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <span>Prepare Consignment Inquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>

            {/* Honest Media Disclaimer */}
            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-[11px] text-slate-400 max-w-lg mx-auto">
                All media featured in this gallery consists of authentic operational photographs and
                videos recorded at Economic Courier / eCS World Wide Express, Bhilwara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACCESSIBLE LIGHTBOX MODAL (Full Resolution Photo Inspection)
          ========================================================================= */}
      {activePhotoIndex !== null && (
        <PhotoLightbox
          photos={AUTHENTIC_PHOTOS}
          activeIndex={activePhotoIndex}
          onClose={() => setActivePhotoIndex(null)}
          onNavigate={(newIndex) => setActivePhotoIndex(newIndex)}
        />
      )}

      {/* =========================================================================
          REUSABLE INQUIRY MODAL
          ========================================================================= */}
      <InquiryModal
        key={inquiryModalOpen ? inquiryService || 'open' : 'closed'}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryService || undefined}
      />
    </div>
  );
}

/* ==========================================================================
   FEATURED VIDEO PLAYER COMPONENT
   ========================================================================== */
interface FeaturedPlayerProps {
  video: GalleryVideo;
  currentPlayingId: string | null;
  setCurrentPlayingId: (id: string | null) => void;
}

function FeaturedPlayer({
  video,
  currentPlayingId,
  setCurrentPlayingId,
}: FeaturedPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const [durationFormatted, setDurationFormatted] = useState(video.duration);

  const isCurrentActive = currentPlayingId === video.id;

  // Sync state if another video became active
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!isCurrentActive && !el.paused) {
      el.pause();
    }
  }, [isCurrentActive]);

  // Viewport-aware autoplay & pause with prefers-reduced-motion check
  useEffect(() => {
    const container = containerRef.current;
    const el = videoRef.current;
    if (!container || !el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          // Only start muted
          el.muted = true;
          const p = el.play();
          if (p !== undefined) {
            p.then(() => {
              setIsPlaying(true);
              setCurrentPlayingId(video.id);
            }).catch(() => {
              setIsPlaying(false);
            });
          }
        } else if (!entry.isIntersecting && !el.paused) {
          el.pause();
          setIsPlaying(false);
        }
      },
      { threshold: [0, 0.4] }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [video.id, setCurrentPlayingId]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      setCurrentPlayingId(video.id);
      el.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    const current = el.currentTime;
    const dur = el.duration;
    setProgress((current / dur) * 100);

    const formatTime = (secs: number) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTimeFormatted(formatTime(current));
    setDurationFormatted(formatTime(dur));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    el.currentTime = pos * el.duration;
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group aspect-[16/9] sm:aspect-[16/10]"
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        poster={video.posterUrl}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => {
          setIsPlaying(true);
          setCurrentPlayingId(video.id);
        }}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover cursor-pointer"
        onClick={() => togglePlay()}
      />

      {/* Center Big Play Button (When Paused) */}
      {!isPlaying && (
        <div
          onClick={() => togglePlay()}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-all"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
          </div>
        </div>
      )}

      {/* Top Header Badge */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
        <span className="px-3 py-1 rounded-full bg-slate-950/85 text-white border border-white/20 text-[10px] sm:text-xs font-bold tracking-wide">
          {video.tag}
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 text-white/90 text-[10px] font-mono font-medium border border-white/15">
          {currentTimeFormatted} / {durationFormatted}
        </span>
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-auto z-20 space-y-2">
        {/* Progress Bar / Scrubber */}
        <div
          onClick={handleSeek}
          className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all relative overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Video timeline progress"
        >
          <div
            className="h-full bg-[#DC2626] rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            {/* Sound Mute/Unmute */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-white/15 text-white hover:bg-white/25'
                  : 'bg-[#DC2626] text-white hover:bg-[#B91C1C]'
              }`}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <span className="text-[11px] font-mono text-slate-300 ml-1 hidden sm:inline">
              {currentTimeFormatted}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Expand video fullscreen"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   EDITORIAL REEL CARD COMPONENT (4 Operational Reels)
   ========================================================================== */
interface EditorialReelCardProps {
  reel: GalleryVideo;
  index: number;
  currentPlayingId: string | null;
  setCurrentPlayingId: (id: string | null) => void;
  onOpenInquiry: (serviceName?: string) => void;
}

function EditorialReelCard({
  reel,
  index,
  currentPlayingId,
  setCurrentPlayingId,
  onOpenInquiry,
}: EditorialReelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const isCurrentActive = currentPlayingId === reel.id;

  // Synchronize playback if another video began playing
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!isCurrentActive && !el.paused) {
      el.pause();
    }
  }, [isCurrentActive]);

  // Viewport intersection observer (paused when scrolled away)
  useEffect(() => {
    const container = containerRef.current;
    const el = videoRef.current;
    if (!container || !el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (!entry.isIntersecting && !el.paused) {
          el.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      setCurrentPlayingId(reel.id);
      el.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  return (
    <div
      ref={containerRef}
      className="rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
    >
      {/* Left: Video Player Box */}
      <div className="relative w-full sm:w-[220px] lg:w-[240px] shrink-0 bg-slate-950 aspect-[9/14] sm:aspect-auto">
        <video
          ref={videoRef}
          src={reel.videoUrl}
          poster={reel.posterUrl}
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => togglePlay()}
          onPlay={() => {
            setIsPlaying(true);
            setCurrentPlayingId(reel.id);
          }}
          onPause={() => setIsPlaying(false)}
        />

        {/* Center Play Button Overlay */}
        {!isPlaying && (
          <div
            onClick={() => togglePlay()}
            className="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current ml-0.5 text-[#DC2626]" />
            </div>
          </div>
        )}

        {/* Top Tag & Index */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2 py-0.5 rounded-full bg-slate-950/85 text-[10px] font-bold text-white border border-white/20">
            0{index + 1}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-950/85 text-[10px] font-mono text-white/90 border border-white/20">
            {reel.duration}
          </span>
        </div>

        {/* Bottom Action Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-950/90 border border-white/20 shadow-md">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center cursor-pointer shadow-xs"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
              className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer ${
                isMuted
                  ? 'bg-slate-800 text-white'
                  : 'bg-[#DC2626] text-white'
              }`}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <a
            href={reel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Watch ${reel.title} on Instagram`}
            className="w-8 h-8 rounded-full bg-slate-950/90 border border-white/20 text-white hover:bg-[#DC2626] flex items-center justify-center transition-colors shadow-md"
          >
            <InstagramIcon size={14} className="text-white" />
          </a>
        </div>
      </div>

      {/* Right: Operational Write-Up */}
      <div className="p-5 sm:p-6 flex flex-col justify-between space-y-4 flex-1">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[10px] font-extrabold uppercase tracking-wider">
            <span>{reel.tag}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight leading-snug">
            {reel.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {reel.detailedNote}
          </p>

          {/* Key Aspects Checklist */}
          <div className="pt-2 space-y-1.5">
            {reel.keyAspects.map((aspect, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{aspect}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Action Row */}
        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => onOpenInquiry(reel.title)}
            className="text-[#DC2626] font-bold hover:text-red-700 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Inquire About Handling</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <span className="text-[11px] text-slate-400 font-mono">Bhilwara Hub</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   PHOTO LIGHTBOX MODAL COMPONENT (Accessible Fullscreen Preview)
   ========================================================================== */
interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function PhotoLightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: PhotoLightboxProps) {
  const currentPhoto = photos[activeIndex];
  const total = photos.length;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((activeIndex + 1) % total);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((activeIndex - 1 + total) % total);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo preview: ${currentPhoto.title}`}
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 text-white">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-medium">
            {activeIndex + 1} / {total}
          </span>
          <span className="text-xs text-slate-300 hidden sm:inline font-medium">
            Use arrow keys to navigate · Esc to close
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo preview"
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="View previous photo"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="View next photo"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl"
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-950">
          <Image
            src={currentPhoto.imageSrc}
            alt={currentPhoto.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption & Field Note */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white space-y-2 border-t border-white/10">
          <div className="flex items-center justify-between gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-[10px] font-bold uppercase tracking-wider">
              {currentPhoto.tag}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Bhilwara Operations Archive
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-white">
            {currentPhoto.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {currentPhoto.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GalleryView;
