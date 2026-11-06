'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Scissors,
  Layers,
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
  Truck,
  ShieldCheck,
  Clock,
  MessageCircle,
} from 'lucide-react';

export function TextileLogisticsView() {
  // Video reel state for packing demo
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Viewport-aware silent autoplay (Voice plays ONLY when user clicks play/video)
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

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          // Always silent autoplay on scroll - never auto-play voice on page load
          el.muted = true;
          setIsMuted(true);
          const p = el.play();
          if (p !== undefined) {
            p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          }
        } else if (!entry.isIntersecting && !el.paused) {
          el.pause();
          setIsPlaying(false);
        }
      },
      { threshold: [0, 0.35] }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      // User explicitly clicked to play -> unmute and play with voice!
      el.muted = false;
      setIsMuted(false);
      el.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          el.muted = true;
          setIsMuted(true);
          el.play().then(() => setIsPlaying(true)).catch(() => {});
        });
    } else {
      // If it is currently playing silently (muted) and user clicks video/play -> activate voice!
      if (el.muted) {
        el.muted = false;
        setIsMuted(false);
      } else {
        // If already playing with voice -> pause
        el.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
    // If unmuting while paused, resume play with voice
    if (!el.muted && el.paused) {
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-16">
      {/* =========================================================================
          1. HERO SECTION (Crisp, High-Impact & Easy to Understand)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Breadcrumb & Hub Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#DC2626] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold" aria-current="page">
                Textile Logistics
              </span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · OPP. NEW CLOTH MARKET</span>
            </div>
          </div>

          {/* Full-Width Visual Hero Banner Card (Custom Textile Logistics Artwork) */}
          <Link
            href="/contact?service=textiles#inquiry-form"
            className="block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white aspect-[2/1] cursor-pointer group"
          >
            <Image
              src="/assets/services/textile-logistics-hero.webp"
              alt="Textile Logistics from Bhilwara to Global Markets - Economic Courier & eCS World Wide Express"
              fill
              priority
              unoptimized
              quality={100}
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
            />
          </Link>

          {/* Screen Reader & SEO Heading */}
          <h1 className="sr-only">
            Textile &amp; Fabric Sample Logistics | Economic Courier &amp; eCS World Wide Express Bhilwara
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. WHAT CAN YOU SHIP? (4 Clear, Practical Categories)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              SUPPORTED TEXTILE SHIPMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Aap Kya-Kya Bhej Sakte Hain?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bhilwara textile cluster ke vyapariyon ke liye yeh 4 mukhya categories daily accept hoti hain:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Scissors className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    SAMPLE BOOK
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                    Fabric Swatches &amp; Shade Cards
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Kapde ke sample cuts, naye season ke shade cards, aur catalog books jo outstation buyers aur designers ko bheje jate hain.
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Buyer Inspection Samples</span>
                <span className="text-[#DC2626]">Priority Air/Road</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    CUT-LENGTH
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                    Suiting &amp; Shirting Trial Cuts
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Folded fabric cuts (1m–5m pieces) testing aur bulk approval ke liye garment manufacturers aur tailors ko fast delivery.
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Production Prototype</span>
                <span className="text-[#DC2626]">Next-Day Linehaul</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Package className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    APPAREL EXPORT
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                    Garment &amp; Retail Fashion Parcels
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Stitched trial garments, uniforms, denim samples aur retail fashion boxes national markets aur international buying houses ke liye.
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Ready-Made Garments</span>
                <span className="text-[#DC2626]">Global eCS Air Cargo</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    TRADE PAPERWORK
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                    Commercial Invoices &amp; Bilti
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Textile GST invoices, transport bilties, purchase orders, aur L/C bank documents tamper-proof sealed pouches me swift transit.
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>High-Priority Dossiers</span>
                <span className="text-[#DC2626]">Document Express</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. KEY TEXTILE CORRIDORS (Where It Goes from Bhilwara)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              TRADE CONNECTIVITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Bhilwara Se Sabse Tez Delivery Corridors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bhilwara mills aur traders ke parcel in mukhya textile markets tak regular linehaul corridors se pahuchte hain:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Corridor 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] font-extrabold text-[10px] uppercase">
                  GUJARAT EXPRESS
                </span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Surat &amp; Ahmedabad
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                Man-made fabric trade hubs, embroidery units, and yarn trading offices.
              </p>
              <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Next-Day Morning Delivery</span>
              </div>
            </div>

            {/* Corridor 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-[10px] uppercase">
                  MAHARASHTRA LINEHAUL
                </span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Mumbai &amp; Bhiwandi
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                Mangaldas Market, Kalbadevi cloth merchants, and major commercial godowns.
              </p>
              <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Direct Commercial Linehauls</span>
              </div>
            </div>

            {/* Corridor 3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 font-extrabold text-[10px] uppercase">
                  NORTH TEXTILE CLUSTER
                </span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Delhi NCR &amp; Ludhiana
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                Gandhi Nagar, Chandni Chowk wholesalers, and garment knitting clusters.
              </p>
              <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Priority Air &amp; Surface Transit</span>
              </div>
            </div>

            {/* Corridor 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-extrabold text-[10px] uppercase">
                  GLOBAL AIR EXPRESS
                </span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Dubai, US &amp; Global Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                International buyers and garment exports under eCS World Wide Express.
              </p>
              <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>220+ Countries Air Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PACKAGING SAFETY & REAL VIDEO DEMO (Grounded Protection)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Compact Phone-Style Video Reel Card (Balanced Height) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div
                ref={containerRef}
                className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-950 p-1.5 sm:p-2 border-2 border-slate-800 shadow-2xl w-[230px] xs:w-[250px] sm:w-[270px] aspect-[9/16] group"
              >
                {/* Inner Screen Container */}
                <div className="relative w-full h-full rounded-[22px] sm:rounded-[24px] overflow-hidden bg-slate-950">
                  <video
                    ref={videoRef}
                    src="/assets/social/textile-reliable-courier.mp4"
                    poster="/assets/social/textile-reliable-courier.jpg"
                    playsInline
                    loop
                    muted={isMuted}
                    preload="metadata"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => togglePlay()}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Paused Play Button Overlay */}
                  {!isPlaying && (
                    <div
                      onClick={() => togglePlay()}
                      className="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Clean Bottom Controls Pill (Icons Only, Zero Text Tags) */}
                  <div className="absolute bottom-3 left-3 z-10 pointer-events-auto">
                    <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-lg">
                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center cursor-pointer shadow-xs hover:bg-slate-100 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-3 h-3 fill-current text-[#DC2626]" />
                        ) : (
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                        className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                          isMuted
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-[#DC2626] text-white'
                        }`}
                      >
                        {isMuted ? (
                          <VolumeX className="w-3 h-3" />
                        ) : (
                          <Volume2 className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Protection Guarantee (Balanced Content) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>TEXTILE PROTECTION PROMISE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Kapda Kharaab Nahi Hoga — 3-Layer Safe Packaging
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Textile fabric swatches aur sample books ko uncreased aur bina daag-dhabbe pahunchane ke liye hamare Bhilwara hub par vishesh dhyan diya jata hai:
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3 hover:border-slate-300 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      1. Waterproof Heavy-Duty Poly Shield
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Baarish aur transit ke dauraan dhool ya nami se bachane ke liye thick plastic protective wrap.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3 hover:border-slate-300 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      2. Reinforced Cross-Strapping
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Bhaari sample books aur catalog bundles ke kone burst na ho, iske liye high-tension strapping tape.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3 hover:border-slate-300 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                      3. Tamper-Evident Adhesive Sealing
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Sealed packet ke sath koi chhedchhad na ho, secure security adhesive seal lagayi jaati hai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Balanced Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <Truck className="w-4 h-4 text-[#DC2626]" />
                  <span>Daily Doorstep Pickup</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Moisture Safe</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>New Cloth Market Desk</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HOW BOOKING WORKS (3 Simple Steps for Merchants)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl text-center mx-auto space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Booking Karna Kitna Aasan Hai?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bhilwara New Cloth Market vyapariyon ke liye hassle-free courier booking:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black flex items-center justify-center text-sm border border-red-100">
                01
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                WhatsApp ya Counter Drop
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                New Cloth Market ke samne hamare counter par parcel le aaiye ya direct WhatsApp / Call karke factory/office pickup schedule kijiye.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black flex items-center justify-center text-sm border border-red-100">
                02
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Digital Weighing &amp; Docket
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Counter par digital scale par transparent weight hoga aur turant consignment number ke sath printed docket receipt milegi.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black flex items-center justify-center text-sm border border-red-100">
                03
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Same-Day Evening Linehaul
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Sorted packets evening schedule linehaul trucks ya connecting air flights me dispatch hote hain for next-morning delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. B2B CORPORATE CALL TO ACTION CARD
          ========================================================================= */}
      <section className="pt-8 sm:pt-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/30 border border-red-500/40 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>BHILWARA MILLS &amp; CLOTH MERCHANTS DESK</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Textile Sample Dispatch Ke Liye Sampark Karein
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Opposite New Cloth Market, Bhilwara. Regular corporate accounts, bulk sample pickup, aur reliable next-day rates ke liye call ya WhatsApp karein.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/contact?service=textiles#inquiry-form"
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Prepare Sample Inquiry</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20want%20to%20inquire%20about%20Textile%20Logistics%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextileLogisticsView;
