'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Navigation,
  Truck,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function HubLocationSection() {
  const verifiedAddress =
    'Opposite New Cloth Market, Railway Staff Quarter Area, Bhilwara, Rajasthan 311001';
  const verifiedLandmark =
    'Opposite New Cloth Market · Pur Road / Railway Station Sector';
  const googleMapsUrl = BUSINESS_INFO.googleMapsUrl;
  const phoneNumber = '+91 89551 44444';

  const mapEmbedUrl =
    'https://maps.google.com/maps?q=Economic+Courier+Opposite+New+Cloth+Market+Bhilwara+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      const timer = setTimeout(() => setIsMapVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-50/60 scroll-mt-24 sm:scroll-mt-28 border-t border-slate-100">
      <div className="max-w-[1240px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 3D Hub Building Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8 sm:mb-10">
          {/* Left Title & Information */}
          <div className="lg:col-span-7 text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/90 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-red-700" />
              <span>CENTRAL BHILWARA HUB &amp; COUNTER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[38px] font-black tracking-[-0.03em] text-slate-900 leading-[1.18]">
              Visit Our Central Dispatch Hub <br className="hidden sm:inline" />
              <span className="text-[#DC2626]">
                Opposite New Cloth Market, Bhilwara
              </span>
            </h2>
            <div className="w-12 h-1 bg-[#DC2626] rounded-full mt-2 mb-2" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              Walk in for instant parcel weighing, tamper-evident packing, and daily scheduled dispatches across Rajasthan, pan-India corridors, and 220+ international destinations.
            </p>
          </div>

          {/* Right: 3D Model Building (Isometric Hub Render) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              <Image
                src="/assets/hub-3d-model.webp"
                alt="eCS World Wide Express Bhilwara Central Dispatch Hub 3D Model"
                width={480}
                height={320}
                style={{ aspectRatio: '480/320' }}
                className="w-full h-auto object-contain drop-shadow-[0_12px_28px_rgba(15,23,42,0.12)] hover:scale-[1.03] transition-transform duration-300 pointer-events-auto"
              />
            </div>
          </div>
        </div>

        {/* 2-Column Bento Grid: Left (Hub Info & Counter Services) + Right (Interactive Google Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* =========================================================
              LEFT CARD: Verified Hub Details, Hours, Phone & Actions
              ========================================================= */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              {/* Hub Title & Status */}
              <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Economic Courier · Central Hub
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Official eCS World Wide Express Dispatch Office
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Open Now</span>
                </div>
              </div>

              {/* 1. Address & Landmark */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Physical Address
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {verifiedAddress}
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Landmark: {verifiedLandmark}
                  </p>
                </div>
              </div>

              {/* 2. Operating Timings */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Operating Timings
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Monday – Saturday: 9:30 AM – 8:30 PM
                  </p>
                  <p className="text-xs text-slate-500">
                    Sunday: 10:00 AM – 4:00 PM (Emergency Dispatch Desk)
                  </p>
                </div>
              </div>

              {/* 3. Direct Helpline & Counter Desk */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Hub Helpline &amp; Dispatch Desk
                  </span>
                  <p className="text-sm font-black text-slate-900">
                    {phoneNumber}
                  </p>
                  <p className="text-xs text-slate-500">
                    Immediate dead weight and volumetric measurement on intake
                  </p>
                </div>
              </div>

              {/* Counter Features Checklist */}
              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Same-day linehaul booking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Poly-mailer strapping support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Textile sample airway bill</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Immediate parcel receipt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Get Directions + Prepare Inquiry */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 text-center cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold px-4 py-3 rounded-xl transition-all active:scale-95 cursor-pointer text-center"
              >
                <span>Prepare Inquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </Link>
            </div>
          </div>

          {/* =========================================================
              RIGHT CARD: Live Interactive Google Map with Overlay
              ========================================================= */}
          <div
            ref={mapContainerRef}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col relative min-h-[360px] sm:min-h-[420px] lg:min-h-[500px]"
          >
            {/* Interactive Google Map iframe (Deferred until scrolled near viewport) */}
            <div className="relative w-full h-full flex-1 min-h-[360px] bg-slate-100">
              {isMapVisible ? (
                <iframe
                  title="Economic Courier Bhilwara Hub Google Maps Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full block"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsMapVisible(true)}
                  className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer group bg-transparent border-0"
                  aria-label="Click to load interactive Google Map"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#DC2626] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">
                    Bhilwara Central Hub Location Map
                  </p>
                  <p className="text-xs text-slate-700 font-semibold mt-1 max-w-xs">
                    Click to load interactive Google Map
                  </p>
                </button>
              )}

              {/* Floating Top-Left Hub Badge Overlay */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 max-w-[calc(100%-1.5rem)] sm:max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/80 shadow-md pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    eCS
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    Economic Courier Bhilwara
                  </h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Opposite New Cloth Market, Bhilwara
                </p>
                <div className="flex items-center gap-1 mt-1 text-[10.5px] sm:text-[11px] font-bold">
                  <span className="text-amber-800 font-extrabold">★ 4.9</span>
                  <span className="text-slate-600 font-medium">(396+ Google Reviews)</span>
                </div>
              </div>

              {/* Proximity Corridor Chips Overlay at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex flex-wrap items-center gap-1.5 sm:gap-2 pointer-events-none">
                <div className="pointer-events-auto bg-slate-900/90 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-md flex items-center gap-1 sm:gap-1.5">
                  <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400" />
                  <span>Station: ~350m (2 min)</span>
                </div>
                <div className="pointer-events-auto bg-slate-900/90 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-md flex items-center gap-1 sm:gap-1.5">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  <span>Cloth Market: Opposite</span>
                </div>
                <div className="pointer-events-auto bg-slate-900/90 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-md flex items-center gap-1 sm:gap-1.5 hidden sm:flex">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                  <span>Pur Road: 5 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubLocationSection;

