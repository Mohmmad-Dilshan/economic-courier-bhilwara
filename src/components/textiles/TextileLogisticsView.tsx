'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  Scissors,
  Package,
  FileText,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Building2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  AlertCircle,
  Truck,
  Camera,
} from 'lucide-react';
import { InquiryModal } from '@/components/home/InquiryModal';

export function TextileLogisticsView() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string>('textiles');

  // Video reel state for packing demo
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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
          el.muted = true;
          const p = el.play();
          if (p !== undefined) {
            p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
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
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
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

  const handleOpenInquiry = (serviceKey: string = 'textiles') => {
    setInquiryService(serviceKey);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. HERO SECTION (Bhilwara Textile Trade Focus)
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-[#F0F5FA] border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Location Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs font-medium text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold" aria-current="page">
                Textile Logistics
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · TEXTILE CLUSTER HUB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span>SPECIALIZED CLUSTER COURIER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
                Fabric sample logistics.{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                  Grounded in Bhilwara.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal pt-1 max-w-2xl">
                Bhilwara is recognized nationally as a major center for synthetic fabric and suiting
                production. For local weaving mills, process houses, and trading agents, fabric swatches
                are active commercial sales tools. Our textile logistics category supports reliable,
                protective courier transit for sample swatches and trade correspondence.
              </p>

              {/* Operational Capability Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-[#DC2626]" />
                  Swatch &amp; Sample Books
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#DC2626]" />
                  Suiting &amp; Shirting Samples
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
                  Mill Trade Paperwork
                </span>
              </div>

              {/* CTA & Disclaimer */}
              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry('textiles')}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Inquire for Textile Shipping</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <p className="text-[11px] text-slate-500 italic max-w-xs">
                  * Forwarding options and freight estimates are determined upon parcel review at our
                  Bhilwara desk.
                </p>
              </div>
            </div>

            {/* Right Authentic Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl aspect-[4/3] group">
                <Image
                  src="/assets/services/card-textiles.webp"
                  alt="Packaged textile fabric swatch bundles ready for Economic Courier dispatch in Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 text-white border border-white/20 text-[10px] font-mono font-bold tracking-wide uppercase">
                    BHILWARA TRADE ASSET
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-xs font-semibold text-red-400 block">
                    Authentic Service Archive
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    Sealed textile swatch packet prepared for domestic express dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TEXTILE SHIPMENT TYPES (Only Verified Categories)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              Supported Consignment Categories
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Textile consignments handled from Bhilwara.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Based on the core services of Economic Courier, these are the primary textile and
              garment trade categories accepted at our facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Type 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                  <Scissors className="w-5 h-5 text-[#DC2626]" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Fabric Swatches &amp; Shade Books
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Cut sample pieces, shade cards, and seasonal catalog swatches dispatched to apparel
                  designers, merchandisers, and buying houses across India.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-medium text-slate-500">
                <span>Sample review &amp; merchandising</span>
              </div>
            </div>

            {/* Type 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                  <Layers className="w-5 h-5 text-[#DC2626]" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Suiting &amp; Shirting Sample Cuts
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Folded cut-lengths and sample roll packets shipped to wholesalers, tailors, and
                  apparel production units for pre-production quality inspection.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 text-[11px] font-medium text-slate-500">
                <span>Mill prototype inspection</span>
              </div>
            </div>

            {/* Type 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                  <Package className="w-5 h-5 text-[#DC2626]" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Garment &amp; Apparel Parcels
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Finished garment prototypes, stitched trial samples, and retail fashion shipments
                  destined for commercial trade hubs.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 text-[11px] font-medium text-slate-500">
                <span>Finished garment courier</span>
              </div>
            </div>

            {/* Type 4 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                  <FileText className="w-5 h-5 text-[#DC2626]" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Trade Correspondence &amp; Invoices
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Commercial bills, textile invoices, purchase orders, and transport bilties sent
                  between mills, brokers, and outstation buyers.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 text-[11px] font-medium text-slate-500">
                <span>Commercial paperwork dispatch</span>
              </div>
            </div>
          </div>

          {/* Neutral Status Safeguard */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-slate-800">Operational Confirmation:</span> Specific
              transit schedules, bulk volume arrangements, and industrial pickup availability are
              coordinated directly with the business. Rates are calculated based on physical weight,
              packet dimensions, and destination corridor.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PACKAGING & HANDLING (Authentic Media Grounded)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F0F5FA] border-b border-[#E0EDF8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Authentic Reel Video Player */}
            <div className="lg:col-span-5">
              <div
                ref={containerRef}
                className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-300 shadow-xl aspect-[9/13] sm:aspect-[9/12] max-w-sm mx-auto group"
              >
                <video
                  ref={videoRef}
                  src="/assets/social/reel-3-packing.mp4"
                  poster="/assets/social/reel-packing.jpg"
                  playsInline
                  loop
                  muted={isMuted}
                  preload="metadata"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => togglePlay()}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Center Big Play Button Overlay */}
                {!isPlaying && (
                  <div
                    onClick={() => togglePlay()}
                    className="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5 text-white" />
                    </div>
                  </div>
                )}

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/85 text-[10px] font-bold text-white border border-white/20 uppercase tracking-wide">
                    PACKING LAB ROUTINE
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-950/85 text-[10px] font-mono text-white/90 border border-white/20">
                    Authentic Reel
                  </span>
                </div>

                {/* Bottom Controls Pill */}
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

                  <span className="text-[10px] text-slate-300 font-mono bg-slate-950/80 px-2 py-1 rounded-full border border-white/10">
                    Bhilwara Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Packaging Methods (Visibly Grounded) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-800 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <Package className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>HANDLING &amp; PACKAGING METHODS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
                Protective preparation for delicate textiles.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Textile fabrics and swatches require deliberate packing to arrive clean, uncreased, and
                intact. Based on handling methods visibly recorded inside our Bhilwara hub, here are the
                protective practices applied during consignment preparation:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      Heavy-Gauge Poly Wrapping
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Fabric swatches and sample bundles are enveloped in tough plastic mailer sleeves
                      to shield fabric textures against dust, moisture, and road transit grime.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      Reinforced Outer Strapping
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Heavier consignments and bundled sample books are secured with cross-strapping to
                      maintain package shape and prevent burst edges during hub sorting.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      Secure Adhesive Closure
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Firm adhesive sealing along all edges to protect trade swatches and client labels
                      from unrecorded handling during transit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BUSINESS WORKFLOW (Inquiry to Dispatch)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              Logistics Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              From Bhilwara desk to destination dispatch.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              A general explanation of how textile sample inquiries and bookings proceed through our
              facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                01
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Inquiry &amp; Details
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Share shipment details: origin, target city (e.g. Surat, Mumbai, Delhi), sample book
                dimensions, and estimated packet weight.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                02
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Counter Weighing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Consignments are placed onto commercial digital scales at our Bhilwara counter for
                transparent weight verification.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                03
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Protective Packaging
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Sample books are secured in moisture-resistant poly wrapping and strapped where
                necessary to preserve fabric condition.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                04
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Linehaul Departure
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Sorted packets are staged for transfer to scheduled domestic highway linehauls or
                connecting air express forwarders.
              </p>
            </div>
          </div>

          {/* Workflow Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto italic">
              Note: Exact transit durations, linehaul cutoffs, and delivery milestones depend on the
              forwarding carrier and regional routing. Real-time online tracking connects upon live API
              integration.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. B2B INQUIRY CTA BAND
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#09132B] via-[#0F1E3D] to-[#070E20] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-red-400" />
              <span>MILLS &amp; TRADE PARTNERS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to ship your textile samples from Bhilwara?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Whether you are sending sample swatch books to Surat, prototype cuts to Mumbai, or trade
              paperwork to Delhi, our team can help coordinate your consignment.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenInquiry('textiles')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <span>Prepare Textile Shipping Inquiry</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all active:scale-95"
              >
                <span>Visit Bhilwara Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. RELATED PAGES (Only Real Existing Routes)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Explore More of Economic Courier
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
              Related Service &amp; Information Pages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Truck className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  All Courier Services
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Domestic express, international cargo, and document delivery options.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/about"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  About Our Hub
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dual identity distinction: Economic Courier and eCS World Wide Express.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Read About Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/gallery"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Camera className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Operations Archive
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Watch authentic packaging, sorting, and dispatch reels filmed in Bhilwara.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Watch Reels</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Contact Bhilwara Desk
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Facility location context, online inquiry desk, and channel verification.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REUSABLE INQUIRY MODAL (Preselected for Textiles)
          ========================================================================= */}
      <InquiryModal
        key={inquiryModalOpen ? inquiryService || 'open' : 'closed'}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryService}
      />
    </div>
  );
}

export default TextileLogisticsView;
