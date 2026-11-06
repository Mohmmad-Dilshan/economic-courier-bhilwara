'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { AnimatedRouteMap } from './AnimatedRouteMap';

interface DailyRouteSectionProps {
  onOpenInquiry?: (service?: string) => void;
}

export function DailyRouteSection({}: DailyRouteSectionProps = {}) {
  return (
    <section
      id="daily-route"
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
      aria-label="Daily Regional Route & Same-Day Delivery Corridor"
    >
      {/* Background technical route-grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_15%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"
        aria-hidden="true"
      />

      {/* Luminous glow accent */}
      <div
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-b from-red-500/6 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

        {/* ── 1. SECTION HEADER (Title & Standalone 3D eCS Truck Object) ───────── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-slate-200/70 relative">
          <div className="max-w-2xl space-y-3 sm:space-y-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-700" />
              <span>DAILY REGIONAL ROUTE &amp; SAME-DAY DISPATCH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#0F172A] leading-[1.14]">
              Our Daily Regional Route &amp;{' '}
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] bg-clip-text text-transparent">
                Same-Day Delivery
              </span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Every day, consignments booked at our Bhilwara hub before <strong>10:00 AM</strong> are
              dispatched on our dedicated morning linehaul circuit covering key regional industrial, textile, and commercial corridors.
            </p>
          </div>

          {/* Standalone Floating 3D eCS Linehaul Truck Object — Desktop & Tablet Only */}
          <div className="relative shrink-0 hidden sm:flex items-center justify-center lg:justify-end z-10 pointer-events-none select-none">
            <div
              className="relative w-64 sm:w-72 lg:w-[320px] xl:w-[360px] transition-transform duration-700 ease-out hover:scale-105 filter drop-shadow-[0_12px_28px_rgba(220,38,38,0.14)]"
              style={{ aspectRatio: '1024/682' }}
            >
              <Image
                src="/assets/routes/ecs-truck-3d.webp"
                alt="eCS World Wide Express 3D Linehaul Cargo Truck Object"
                width={1024}
                height={682}
                sizes="(max-width: 1024px) 280px, 360px"
                style={{ aspectRatio: '1024/682' }}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ── 2. HERO OPERATIONAL CIRCUIT BANNER (Visual Graphic Banner & Mobile Responsive Strip) ── */}
        <div className="space-y-4">
          {/* Main Visual Graphic Banner — Clickable to Book/Inquire */}
          <Link
            href="/contact#inquiry-form"
            aria-label="Click to book consignment before 10 AM dispatch cutoff"
            className="block relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)] bg-white transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            <div className="relative w-full" style={{ aspectRatio: '1024/341' }}>
              <Image
                src="/assets/routes/daily-dispatch-banner-hd.webp"
                alt="10:00 AM ECS Office Cutoff — Daily Regional Route & Same-Day Delivery from Bhilwara Hub"
                fill
                sizes="(max-width: 768px) 100vw, 1240px"
                style={{ aspectRatio: '1024/341' }}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </Link>

          {/* High-Contrast Operational Action Bar (Desktop + Mobile Friendly) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0 border border-red-100 font-black font-mono text-xs shadow-2xs">
                10 AM
              </div>
              <div className="space-y-0.5 text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <strong className="text-slate-900 font-bold">Daily Cutoff: 10:00 AM Sharp</strong>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    Same-Day Delivery
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] sm:text-xs">
                  Regional route covering Vijaynagar, Gulabpura, Agucha, Gangrar, Chittorgarh &amp; Nimbahera.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
              <Link
                href="/contact#inquiry-form"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 sm:px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span className="hidden xs:inline">Book Before 10 AM</span>
                <span className="xs:hidden">Book 10 AM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://share.google/XGfOCGnHDKHlCOUaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors whitespace-nowrap shrink-0"
                title="View Bhilwara Hub on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Maps Pin</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 3. VISUAL ROUTE MAP & CORRIDOR STATIONS (The Route Case) ──────── */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-600 block">
                CORRIDOR DESTINATIONS
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight">
                Daily Linehaul Stops From Bhilwara Hub
              </h3>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct delivery to offices, industrial units &amp; factories</span>
            </div>
          </div>

          {/* Animated Route Network Experience (Continuous Winding SVG Road & Scooter Delivery Rider) */}
          <AnimatedRouteMap />
        </div>
      </div>
    </section>
  );
}

export default DailyRouteSection;
