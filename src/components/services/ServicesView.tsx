'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plane,
  Globe,
  Zap,
  FileText,
  Package,
  Building2,
  Truck,
  Layers,
  Cpu,
  ShoppingBag,
  PlaneTakeoff,
  Ship,
  Utensils,
  Stethoscope,
  Briefcase,
  CalendarCheck,
  ShieldCheck,
  Armchair,
  Shirt,
  Laptop,
  Palette,
  HeartHandshake,
  ArrowRight,
  ChevronRight,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { CATALOGUE_SERVICES } from '@/lib/servicesCatalogueData';
import { ServiceQuoteModal } from './ServiceQuoteModal';

// Helper icon resolver for all 22 services
function getServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Plane':
      return Plane;
    case 'Globe':
      return Globe;
    case 'Zap':
      return Zap;
    case 'FileText':
      return FileText;
    case 'Package':
      return Package;
    case 'Building2':
      return Building2;
    case 'Truck':
      return Truck;
    case 'Layers':
      return Layers;
    case 'Cpu':
      return Cpu;
    case 'ShoppingBag':
      return ShoppingBag;
    case 'PlaneTakeoff':
      return PlaneTakeoff;
    case 'Ship':
      return Ship;
    case 'Utensils':
      return Utensils;
    case 'Stethoscope':
      return Stethoscope;
    case 'Briefcase':
      return Briefcase;
    case 'CalendarCheck':
      return CalendarCheck;
    case 'ShieldCheck':
      return ShieldCheck;
    case 'Armchair':
      return Armchair;
    case 'Shirt':
      return Shirt;
    case 'Laptop':
      return Laptop;
    case 'Palette':
      return Palette;
    case 'HeartHandshake':
      return HeartHandshake;
    default:
      return Package;
  }
}

export function ServicesView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('domestic-air-courier');

  const handleOpenQuote = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setModalOpen(true);
  };

  // Group services by category
  const airServices = CATALOGUE_SERVICES.filter((s) => s.categoryKey === 'air-express');
  const commercialServices = CATALOGUE_SERVICES.filter(
    (s) => s.categoryKey === 'commercial-business'
  );
  const personalServices = CATALOGUE_SERVICES.filter(
    (s) => s.categoryKey === 'personal-household'
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden antialiased selection:bg-red-500 selection:text-white">
      {/* Interactive Service Quote Modal */}
      <ServiceQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedServiceId={selectedServiceId}
      />

      {/* =========================================================================
          1. HERO SECTION — COMPLETE REDESIGN (SPLIT-LAYOUT)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#DC2626] transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#1E3A8A] font-bold" aria-current="page">
              Services Portfolio
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Content Column (7 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/90 text-[#DC2626] text-xs font-black tracking-widest uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span>COURIER &amp; LOGISTICS SERVICES · 22 CONFIRMED OPTIONS</span>
              </div>

              {/* Main Heading in Bold Deep Navy with Red Accent */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black tracking-[-0.035em] text-[#1E3A8A] leading-[1.1]">
                Every Shipment.{' '}
                <span className="text-[#DC2626] block sm:inline mt-1 sm:mt-0">
                  A Service Designed Around Its Journey.
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                Economic Courier aur eCS World Wide Express Bhilwara se operate hone wali har tarah ki shipment ko cover karte hain: priority domestic air courier, 220+ countries worldwide express delivery, high-tonnage air aur sea cargo, industrial B2B aur textile mill swatches, tatha students aur families ke liye personal baggage aur household goods.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#service-categories"
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenQuote('domestic-air-courier')}
                  className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full border border-slate-700 transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-red-400" />
                  <span>Request a Rate Quote</span>
                </button>
              </div>

              {/* 4 Category Quick Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold text-slate-700">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="block text-[10px] text-[#DC2626] font-mono">01. AIR</span>
                  <span className="text-slate-900">Express &amp; Air</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="block text-[10px] text-[#DC2626] font-mono">02. TRADE</span>
                  <span className="text-slate-900">Commercial B2B</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="block text-[10px] text-[#DC2626] font-mono">03. CARGO</span>
                  <span className="text-slate-900">Air &amp; Sea Cargo</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="block text-[10px] text-[#DC2626] font-mono">04. PERSONAL</span>
                  <span className="text-slate-900">Baggage &amp; Home</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 Columns) — Premium Logistics Vignette */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/assets/services/card-international.webp"
                    alt="Worldwide air express cargo loading and commercial aviation transit connecting Bhilwara"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover"
                  />
                  {/* Subtle brand gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* On-image status pills */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                      <Plane className="w-3.5 h-3.5 text-red-400" />
                      <span>220+ Countries Network</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>Bhilwara Dispatch Hub</span>
                    </span>
                  </div>
                </div>

                {/* Sub-bar below visual */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-slate-900">Physical Booking &amp; Packing Floor</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-bold uppercase">
                    PUR ROAD HUB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STICKY CATEGORY JUMP NAVIGATION BAR
          ========================================================================= */}
      <nav
        id="service-categories"
        aria-label="Service Categories"
        className="sticky top-[67px] sm:top-[71px] lg:top-[75px] z-30 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs"
      >
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider hidden md:inline">
              Jump To:
            </span>
            <a
              href="#category-air-express"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-xs font-bold text-slate-700 transition-colors whitespace-nowrap border border-slate-200"
            >
              <span className="font-mono text-[#DC2626]">01</span>
              <span>Air &amp; Express</span>
            </a>
            <a
              href="#category-commercial"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-xs font-bold text-slate-700 transition-colors whitespace-nowrap border border-slate-200"
            >
              <span className="font-mono text-[#DC2626]">02</span>
              <span>Commercial &amp; B2B</span>
            </a>
            <a
              href="#category-cargo-special"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-xs font-bold text-slate-700 transition-colors whitespace-nowrap border border-slate-200"
            >
              <span className="font-mono text-[#DC2626]">03</span>
              <span>Cargo &amp; Special</span>
            </a>
            <a
              href="#category-personal-household"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-100 hover:bg-red-50 hover:text-[#DC2626] text-xs font-bold text-slate-700 transition-colors whitespace-nowrap border border-slate-200"
            >
              <span className="font-mono text-[#DC2626]">04</span>
              <span>Personal &amp; Home</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => handleOpenQuote()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </button>
        </div>
      </nav>

      {/* =========================================================================
          3. CATEGORY 01 — AIR & EXPRESS COURIER (EDITORIAL SPLIT SECTION)
          ========================================================================= */}
      <section
        id="category-air-express"
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (5 cols): Large Cinematic Airport Image + Narrative */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-widest uppercase">
                <span>CATEGORY 01</span>
                <span>•</span>
                <span>AIR &amp; EXPRESS COURIER</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
                Swift Flight Connections.{' '}
                <span className="text-[#DC2626] block sm:inline mt-1 sm:mt-0">
                  Document &amp; Express Handling.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Scheduled commercial air connections and express linehauls for time-critical documents, high-priority parcels, and international express cargo. All consignments receive secure barcoding, rapid airport transfer, and direct milestone tracking.
              </p>

              {/* Large Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-900">
                <Image
                  src="/assets/services/card-international.webp"
                  alt="Boeing air cargo aircraft loading and tarmac transit for express international courier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                    INTERNATIONAL NETWORK DISPATCH
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold mt-0.5">
                    Forwarded through leading international express networks (Aramex, TNT, UPS, DPD linehaul handoffs)
                  </div>
                </div>
              </div>

              {/* Verified Capability Notice */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Scheduled Express Cutoffs</span>
                </div>
                <p className="font-normal text-[11px] leading-relaxed">
                  Daily evening vehicle dispatch from Bhilwara ensures next-day linehaul connections to regional air gateways and major metro sorting facilities.
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Detailed List of 5 Air & Express Services */}
            <div className="lg:col-span-7 space-y-4">
              <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  5 Confirmed Air Services
                </span>
                <span className="text-xs font-bold text-[#DC2626]">
                  Click Any Service to Inquire
                </span>
              </div>

              {airServices.map((svc, idx) => {
                const IconComponent = getServiceIcon(svc.iconName);
                return (
                  <div
                    key={svc.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0F172A] group-hover:bg-[#DC2626] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              0{idx + 1}
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#1E3A8A] group-hover:text-[#DC2626] transition-colors">
                              {svc.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            {svc.tagline}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenQuote(svc.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] px-3 py-1.5 rounded-full bg-red-50 hover:bg-red-100 transition-colors shrink-0 cursor-pointer"
                        aria-label={`Inquire about ${svc.name}`}
                      >
                        <span>Inquire</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                      {svc.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-3 pt-3 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
                      {svc.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Badges / brochure confirmation */}
                    {svc.brochureBadges && (
                      <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2">
                        {svc.brochureBadges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-block px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-600"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CATEGORY 02 — COMMERCIAL & BUSINESS SHIPMENTS (REVERSED EDITORIAL)
          ========================================================================= */}
      <section
        id="category-commercial"
        className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (7 cols): 5 Commercial & Business Services */}
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  5 Commercial &amp; Trade Services
                </span>
                <span className="text-xs font-bold text-[#DC2626]">
                  Dedicated Business Accounts Available
                </span>
              </div>

              {commercialServices.map((svc, idx) => {
                const IconComponent = getServiceIcon(svc.iconName);
                return (
                  <div
                    key={svc.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] group-hover:bg-[#DC2626] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              0{idx + 1}
                            </span>
                            <h3 className="text-base sm:text-lg font-black text-[#1E3A8A] group-hover:text-[#DC2626] transition-colors">
                              {svc.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            {svc.tagline}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenQuote(svc.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] px-3 py-1.5 rounded-full bg-red-50 hover:bg-red-100 transition-colors shrink-0 cursor-pointer"
                        aria-label={`Inquire about ${svc.name}`}
                      >
                        <span>Inquire</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                      {svc.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
                      {svc.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Handling notes & Badges */}
                    <div className="mt-3 pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-500">
                      {svc.handlingNotes && (
                        <span className="italic">{svc.handlingNotes}</span>
                      )}
                      {svc.brochureBadges && (
                        <div className="flex flex-wrap gap-1">
                          {svc.brochureBadges.map((badge) => (
                            <span
                              key={badge}
                              className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-700"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (5 cols): Textile & Commercial Visual + Context */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-widest uppercase">
                <span>CATEGORY 02</span>
                <span>•</span>
                <span>COMMERCIAL &amp; BUSINESS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
                Built for Bhilwara’s Mills.{' '}
                <span className="text-[#DC2626] block sm:inline mt-1 sm:mt-0">
                  Textile Swatches &amp; B2B Freight.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Bhilwara is Asia’s prominent synthetic textile and suiting hub. Our commercial desk coordinates daily factory collections, fabric swatch books to Surat and Ahmedabad, ready-to-wear garment export cartons, and consolidated monthly GST billing.
              </p>

              {/* Textile Swatches Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-900">
                <Image
                  src="/assets/services/textile-logistics-hero.webp"
                  alt="Textile fabric sample books, swatches, and commercial carton packaging in Bhilwara warehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                    TEXTILE SPECIALIZATION CORRIDOR
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold mt-0.5">
                    Fast-track delivery for fabric swatch catalogs, shade cards &amp; garment cartons
                  </div>
                </div>
              </div>

              {/* Corporate Billing Callout */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Corporate Billing Account</span>
                  <span className="text-[11px] text-emerald-600 font-bold">GST COMPLIANT</span>
                </div>
                <p className="font-normal text-[11px] leading-relaxed">
                  Regular commercial senders enjoy scheduled daily factory pickup, monthly consolidated invoicing, and designated trade account executive support.
                </p>
                <div className="pt-1">
                  <Link
                    href="/business-solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C]"
                  >
                    <span>Learn more about Business Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CATEGORY 03 — CARGO & SPECIAL SHIPMENTS (WIDER PANORAMIC LAYOUT)
          ========================================================================= */}
      <section
        id="category-cargo-special"
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-widest uppercase">
              <span>CATEGORY 03</span>
              <span>•</span>
              <span>CARGO &amp; SPECIAL SHIPMENTS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
              Heavy Air &amp; Sea Cargo.{' '}
              <span className="text-[#DC2626]">
                Compliant Food &amp; Medicine Transport.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From high-tonnage ocean and air freight to carefully regulated shipments of personal medicines and packaged food items, our cargo desk handles oversized weights and specific statutory requirements.
            </p>
          </div>

          {/* Part A: Heavyweight Freight (Air Cargo & Sea Cargo) — 2 Prominent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Air Cargo Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/30 border border-red-500/40 text-red-300 flex items-center justify-center shrink-0">
                  <PlaneTakeoff className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenQuote('air-cargo')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <span>Inquire Air Cargo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-6 space-y-2">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-red-600/40 text-[10px] font-mono font-bold text-red-200 uppercase">
                  HEAVYWEIGHT FREIGHT · 100KG+
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Air Cargo Forwarding
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  High-capacity commercial air freight for oversized consignments and heavy industrial assemblies. Dispatched via commercial airlines with scheduled belly space and freighter allocations.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Commercial AWB Issuance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Palletized &amp; ULD Loading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Airport-to-Airport / Door</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Customs Terminal Clearance</span>
                </div>
              </div>
            </div>

            {/* Sea Cargo Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white border border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-200 flex items-center justify-center shrink-0">
                  <Ship className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenQuote('sea-cargo')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <span>Inquire Sea Cargo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-6 space-y-2">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/30 text-[10px] font-mono font-bold text-blue-200 uppercase">
                  OCEAN FREIGHT · BULK CONSOLIDATION
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Sea Cargo Service (Ocean Freight)
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Economical ocean container shipping for large commercial export batches and high-volume personal relocations. Connects via major Indian seaports (Mundra, Kandla, Nhava Sheva).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>FCL &amp; LCL Container Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Substantial Freight Savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Worldwide Seaport Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bill of Lading (BL) Handling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Special Regulated Shipments (Food & Medicine Delivery) — 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Item Delivery Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 shadow-2xs space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-[#DC2626] flex items-center justify-center shrink-0">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#1E3A8A]">
                      Food Item Delivery
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Homemade sweets, traditional spices &amp; branded eatables
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenQuote('food-item-delivery')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] px-3 py-1.5 rounded-full bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Carefully packed transportation for non-perishable Indian food items, homemade sweets, roasted snacks, and packaged regional spices sent to overseas family members, students, and buyers.
              </p>

              {/* Packaging & Regulatory Notice Alert Box */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-800">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Packaging &amp; Regulatory Compliance Requirements</span>
                </div>
                <p className="text-[11px] leading-relaxed text-amber-800/90 font-normal">
                  All food consignments are subject to destination country food import regulations (US FDA, UK DEFRA, EU EFSA). Items must be non-perishable, completely dry, and sealed inside airtight vacuum packaging. Itemized packing list declaration is mandatory.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Airtight sealing advice</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Express air transit</span>
                </div>
              </div>
            </div>

            {/* Medicine Delivery Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 shadow-2xs space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#1E3A8A]">
                      Medicine Delivery
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Prescription pharmaceuticals, Ayurvedic &amp; Homeopathic
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenQuote('medicine-delivery')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] px-3 py-1.5 rounded-full bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Strictly documented courier dispatch for critical personal prescription medicines, chronic healthcare remedies, and verified Ayurvedic or Homeopathic preparations sent to patients across India or abroad.
              </p>

              {/* Medicine Statutory Compliance Box */}
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-red-800">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Mandatory Medical Documentation Checklist</span>
                </div>
                <p className="text-[11px] leading-relaxed text-red-800/90 font-normal">
                  Strictly requires: 1) Valid Doctor Prescription with patient name and diagnosis, 2) Original Chemist Tax Invoice, 3) Sender and receiver KYC ID proofs. Narcotics and psychotropic substances are strictly prohibited under law.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Leak-proof packaging</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Customs paperwork guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CATEGORY 04 — PERSONAL & HOUSEHOLD SHIPMENTS (MAGAZINE COMPOSITION)
          ========================================================================= */}
      <section
        id="category-personal-household"
        className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (4 cols): Magazine Sidebar with Image & Assistance */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-widest uppercase">
                <span>CATEGORY 04</span>
                <span>•</span>
                <span>PERSONAL &amp; HOUSEHOLD</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
                Move Luggage, Furniture &amp; Belongings.{' '}
                <span className="text-[#DC2626]">With Utmost Care.</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Reliable transportation for students travelling overseas, families relocating, and individuals sending excess suitcases, household goods, electronics, or regional handicrafts across India and worldwide.
              </p>

              {/* Express Courier & Parcel Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-900">
                <Image
                  src="/assets/hero/hero-courier.webp"
                  alt="Express delivery van, luggage suitcases, and handled parcel cartons"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                    HUB PACKING SERVICES
                  </div>
                  <div className="text-xs font-bold mt-0.5">
                    Heavy-duty cartons, stretch wrap &amp; strapping at Pur Road booking floor
                  </div>
                </div>
              </div>

              {/* Excess Baggage Highlight */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5 shadow-2xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Student &amp; Travel Baggage</span>
                  <span className="text-[#DC2626] font-bold">SAVE AIRLINE FEES</span>
                </div>
                <p className="font-normal text-[11px] leading-relaxed">
                  Avoid paying high excess baggage charges at airport check-in counters. Book your additional luggage ahead for direct delivery to your destination home or university hostel.
                </p>
              </div>
            </div>

            {/* Right Column (8 cols): 2x4 Grid of 8 Personal Services */}
            <div className="lg:col-span-8 space-y-4">
              <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  8 Personal &amp; Relocation Capabilities
                </span>
                <span className="text-xs font-bold text-[#DC2626]">
                  Full Packing Assistance Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalServices.map((svc, idx) => {
                  const IconComponent = getServiceIcon(svc.iconName);
                  return (
                    <div
                      key={svc.id}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 text-[#0F172A] group-hover:bg-[#DC2626] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-slate-400">
                            0{idx + 1}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-sm sm:text-base font-black text-[#1E3A8A] group-hover:text-[#DC2626] transition-colors leading-snug">
                            {svc.name}
                          </h3>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                            {svc.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {svc.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        {svc.brochureBadges && svc.brochureBadges[0] ? (
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {svc.brochureBadges[0]}
                          </span>
                        ) : (
                          <span />
                        )}

                        <button
                          type="button"
                          onClick={() => handleOpenQuote(svc.id)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors cursor-pointer"
                        >
                          <span>Inquire</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. HOW THE SERVICE PROCESS WORKS (4-STEP TIMELINE)
          ========================================================================= */}
      <section className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-black uppercase tracking-wider">
              <span>HOW OUR SERVICE WORKS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
              Straightforward Booking.{' '}
              <span className="text-[#DC2626]">Transparent Dispatch.</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
              Consignment booking at Economic Courier follows a disciplined four-step operational workflow with complete documentation accountability.
            </p>
          </div>

          {/* 4-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white text-xs font-black flex items-center justify-center">
                  01
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  STEP ONE
                </span>
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Share Your Shipment Details
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Visit our booking desk opposite New Cloth Market or message us with your parcel weight, dimensions, contents, and destination address.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white text-xs font-black flex items-center justify-center">
                  02
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  STEP TWO
                </span>
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Discuss Service &amp; Destination
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our Bhilwara team advises on the appropriate carrier mode: domestic air express, international linehaul, ocean freight, or surface corridor based on urgency.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white text-xs font-black flex items-center justify-center">
                  03
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  STEP THREE
                </span>
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Confirm Packing &amp; Booking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We verify packaging suitability, weigh the consignment, prepare necessary paperwork (tax invoice, KYC, or customs declarations), and assign your consignment number.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#DC2626] text-white text-xs font-black flex items-center justify-center">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold text-[#DC2626] uppercase">
                  FINAL STEP
                </span>
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Dispatch via Applicable Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Your parcel joins our daily scheduled evening departure to the designated airport, sea freight terminal, or highway linehaul for delivery to destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. WHY ECONOMIC COURIER (VERIFIED BREADTH HIGHLIGHTS)
          ========================================================================= */}
      <section className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-black uppercase tracking-wider">
                <span>OUR SERVICE PROMISE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
                Why Bhilwara Relies on{' '}
                <span className="text-[#DC2626]">Economic Courier.</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Operating directly opposite New Cloth Market on Pur Road, we combine local accessibility with global connectivity. Whether it is an urgent textile sample or heavy ocean cargo, our team provides personal accountability without automated call centers.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#DC2626] transition-colors"
                >
                  <span>Learn about our 35+ year Bhilwara heritage</span>
                  <ArrowRight className="w-4 h-4 text-[#DC2626]" />
                </Link>
              </div>
            </div>

            {/* Right Pillars (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Plane className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-[#1E3A8A]">
                  Domestic &amp; Global Breadth
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Direct express routes across Indian commercial hubs and worldwide air courier reaching 220+ countries and territories.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-[#1E3A8A]">
                  Textile &amp; Trade Priority
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Dedicated fast corridors for synthetic suiting swatches to Surat, Ahmedabad, and Delhi garment buying houses.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Ship className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-[#1E3A8A]">
                  Air &amp; Ocean Cargo Options
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Cost-effective container freight and heavyweight air cargo for bulk manufacturing orders and export consignments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-[#1E3A8A]">
                  Physical Booking Floor
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Walk-in counter on Pur Road with on-site weighing, heavy-duty carton packing, strapping, and face-to-face assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. SERVICE INQUIRY / WHATSAPP CTA BAND (FULL WIDTH)
          ========================================================================= */}
      <section className="py-14 sm:py-18 lg:py-20 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-200 text-[11px] font-black uppercase tracking-wider">
              <span>GET IN TOUCH WITH OUR TEAM</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Have a Shipment in Mind?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
              Tell us what you need to send, and our team can help you explore the appropriate shipment option across domestic air, international express, ocean cargo, or personal baggage.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Shipment</span>
              </button>

              <Link
                href="/contact#inquiry-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
              >
                <span>Visit Bhilwara Booking Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              <span>Booking Counter: Opp. New Cloth Market, Pur Road, Bhilwara (9:00 AM – 9:00 PM)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
