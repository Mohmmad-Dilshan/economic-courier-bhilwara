'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plane,
  Layers,
  Ship,
  Home,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Plus,
  Package,
  Truck,
  FileText,
  MessageSquare,
  Pill,
  Utensils,
} from 'lucide-react';
import {
  EDITORIAL_CATEGORIES,
  PROCESS_TIMELINE_STEPS,
} from '@/lib/servicesCatalogueData';
import { ServiceQuoteModal } from './ServiceQuoteModal';

// Helper icon resolver for floating badges
function getFloatingBadgeIcon(icon: 'plane' | 'textile' | 'ship' | 'medicine' | 'food' | 'home') {
  switch (icon) {
    case 'plane':
      return Plane;
    case 'textile':
      return Layers;
    case 'ship':
      return Ship;
    case 'medicine':
      return Pill;
    case 'food':
      return Utensils;
    case 'home':
      return Home;
  }
}

// Helper icon resolver for process steps
function getProcessIcon(icon: 'chat' | 'file' | 'box' | 'truck') {
  switch (icon) {
    case 'chat':
      return MessageSquare;
    case 'file':
      return FileText;
    case 'box':
      return Package;
    case 'truck':
      return Truck;
  }
}

// 4 Strategic Capability Cards for "Why Choose Economic Courier?" Section
const WHY_CHOOSE_CAPABILITIES = [
  {
    id: 'domestic-international',
    title: 'Domestic & International Courier',
    description: 'Ship across India and worldwide with confidence.',
    icon: Plane,
    badgeBg: 'bg-red-50 text-[#DC2626] border border-red-100/70',
    href: '#category-01',
  },
  {
    id: 'air-sea-cargo',
    title: 'Air & Sea Cargo Services',
    description: 'Reliable cargo solutions for large shipments.',
    icon: Ship,
    badgeBg: 'bg-blue-50 text-[#1E3A8A] border border-blue-100/70',
    href: '#category-03',
  },
  {
    id: 'commercial-business',
    title: 'Commercial & Business Support',
    description: 'Dedicated solutions for businesses and enterprises.',
    icon: Handshake,
    badgeBg: 'bg-indigo-50 text-indigo-700 border border-indigo-100/70',
    href: '#category-02',
  },
  {
    id: 'personal-household',
    title: 'Personal & Household Solutions',
    description: 'Your personal shipments, our priority.',
    icon: Home,
    badgeBg: 'bg-rose-50 text-rose-600 border border-rose-100/70',
    href: '#category-06',
  },
];

export function ServicesView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('air-express');

  const handleOpenQuote = (categoryKey?: string) => {
    if (categoryKey) {
      setSelectedCategory(categoryKey);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden antialiased selection:bg-red-500 selection:text-white">
      {/* Interactive Service Quote Modal */}
      <ServiceQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCategoryOrService={selectedCategory}
      />

      {/* =========================================================================
          1. HERO SECTION — CRYSTAL CLEAR LOGISTICS BACKGROUND
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-14 sm:pb-20 lg:pb-24 border-b border-slate-200 overflow-hidden bg-white">
        {/* Full-bleed Crisp Background Logistics Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/services/hero-logistics-bg.webp"
            alt="Commercial air cargo plane soaring over modern logistics warehouse and delivery truck"
            fill
            priority
            quality={98}
            sizes="100vw"
            className="object-cover object-right md:object-center select-none"
          />
          {/* Subtle clean gradient on the left half ONLY to ensure 100% contrast for text, leaves right side crisp and vibrant */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-1" />
        </div>

        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#DC2626] transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-300">&gt;</span>
            <span className="text-[#1E3A8A] font-bold" aria-current="page">
              Services
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center min-h-[420px] lg:min-h-[460px]">
            {/* Left Column (7 cols): Headline, Description, CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Solid Red Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DC2626] text-white text-[11px] font-black tracking-wider uppercase shadow-xs">
                <Plane className="w-3.5 h-3.5" />
                <span>COURIER &amp; LOGISTICS SERVICES</span>
              </div>

              {/* Main Headline (Logo Blue #1E3A8A + Accent Red #DC2626) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black tracking-[-0.035em] text-[#1E3A8A] leading-[1.08]">
                Every Shipment.<br />
                <span className="text-[#DC2626]">A Service Designed</span><br />
                Around Its Journey.
              </h1>

              {/* Exact Description from Reference */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                Domestic and international courier, air cargo, sea cargo, and complete logistics solutions for your business and personal needs.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#services-list"
                  className="inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer group"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>Explore Our Services</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenQuote()}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#1E3A8A] text-xs sm:text-sm font-bold px-5 py-3.5 rounded-full border border-slate-300 shadow-2xs hover:border-slate-400 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <Plus className="w-4 h-4 text-slate-500" />
                  <span>Request a Quote</span>
                </button>
              </div>
            </div>

            {/* Right Column (5 cols): Floating Live Network Status Badges over the scene */}
            <div className="lg:col-span-5 relative flex flex-col justify-end items-end h-full pt-8 lg:pt-36">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_10px_25px_rgba(15,23,42,0.12)] text-[#1E3A8A]">
                  <span className="w-8 h-8 rounded-xl bg-red-600/10 text-[#DC2626] flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Worldwide Air Express</div>
                    <div className="text-xs font-black text-[#1E3A8A]">220+ Countries Network</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_10px_25px_rgba(15,23,42,0.12)] text-[#1E3A8A]">
                  <span className="w-8 h-8 rounded-xl bg-red-600/10 text-[#DC2626] flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Origin Linehaul Hub</div>
                    <div className="text-xs font-black text-[#1E3A8A]">Bhilwara Dispatch Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICE CATEGORY SECTIONS — 4 ALTERNATING EDITORIAL BLOCKS
          ========================================================================= */}
      <section id="services-list" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-10 lg:space-y-12">
          {EDITORIAL_CATEGORIES.map((cat) => {
            const isImageLeft = cat.layout === 'image-left';
            const FloatingIcon = getFloatingBadgeIcon(cat.floatingBadgeIcon);
            const isSplitColumns = cat.services.length > 4;

            return (
              <div
                key={cat.id}
                id={`cat-${cat.id}`}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  {/* Image Column (5 or 6 cols depending on alternating order) */}
                  <div
                    className={`lg:col-span-5 relative p-4 sm:p-5 lg:p-6 ${
                      isImageLeft ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-2xs">
                      <Image
                        src={cat.imageSrc}
                        alt={cat.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                      {/* Floating pill badge on image corner */}
                      <div
                        className={`absolute top-3.5 ${
                          isImageLeft ? 'left-3.5' : 'right-3.5'
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-slate-900 text-xs font-bold shadow-md">
                          <FloatingIcon className="w-3.5 h-3.5 text-[#DC2626]" />
                          <span>{cat.floatingBadge}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-5 relative ${
                      isImageLeft ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    {/* Category Number in Red */}
                    <div className="text-sm font-mono font-black text-[#DC2626] tracking-wider">
                      {cat.number}
                    </div>

                    {/* Section Title with Red Highlight Word */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
                      {cat.titlePrimary}{' '}
                      <span className="text-[#DC2626]">{cat.titleHighlight}</span>
                    </h2>

                    {/* Short Professional Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                      {cat.description}
                    </p>

                    {/* Complete Checklist with Subtle Red Checkmark Icons */}
                    <div
                      className={`pt-1 grid gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-slate-800 font-medium ${
                        isSplitColumns ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'
                      }`}
                    >
                      {cat.services.map((svc) => (
                        <div key={svc.name} className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 border border-red-200/80">
                            <CheckCircle2 className="w-3 h-3" />
                          </span>
                          <span className="leading-snug">{svc.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Advisory Notice (If Applicable) */}
                    {cat.advisory && (
                      <p className="text-[11px] text-slate-500 italic pt-1 leading-relaxed border-t border-slate-100">
                        *{cat.advisory}
                      </p>
                    )}

                    {/* Learn More Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleOpenQuote(cat.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#1E3A8A] hover:text-[#DC2626] border border-slate-300 hover:border-slate-400 text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. HOW OUR SERVICE WORKS — 4-STEP HORIZONTAL/VERTICAL TIMELINE
          ========================================================================= */}
      <section className="py-14 sm:py-18 lg:py-22 bg-white border-y border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold text-[#DC2626] tracking-widest uppercase">
              — HOW OUR SERVICE WORKS —
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Simple Steps.{' '}
              <span className="text-[#DC2626]">Seamless Delivery.</span>
            </h2>
          </div>

          {/* 4-Step Timeline with Connecting Line */}
          <div className="relative">
            {/* Desktop Connecting Line behind steps */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {PROCESS_TIMELINE_STEPS.map((step) => {
                const StepIcon = getProcessIcon(step.iconName);
                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center text-center space-y-3 group"
                  >
                    {/* Circle Icon Marker with Number Badge */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#DC2626] text-[#1E3A8A] group-hover:text-[#DC2626] flex items-center justify-center shadow-sm transition-all duration-300">
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#1E3A8A] text-white text-[10px] font-mono font-bold">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-[#1E3A8A] pt-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-xs">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE ECONOMIC COURIER? — REDESIGNED ELEGANT LIGHT SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/30 to-white border-y border-slate-200/80 overflow-hidden relative">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Column (6 cols on Desktop) */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              {/* Heading & Intro */}
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-7 h-1 rounded-full bg-[#DC2626]" />
                  <span className="w-2.5 h-1 rounded-full bg-[#DC2626]" />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-[#0F172A] tracking-[-0.03em] leading-[1.12]">
                  Why Choose<br />
                  <span className="text-[#DC2626]">Economic Courier?</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                  Comprehensive courier and logistics solutions under one trusted name.
                </p>
              </div>

              {/* Mobile / Tablet ONLY Illustration (Directly below heading on small screens) */}
              <div className="block lg:hidden my-1">
                <div className="relative w-full aspect-[16/9.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] bg-white">
                  <Image
                    src="/assets/services/why-choose-3d.webp"
                    alt="3D logistics illustration with global airplane, world globe, delivery truck and parcel cartons"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center select-none"
                  />
                </div>
              </div>

              {/* 4 Capability Cards (2x2 grid on sm and desktop, 1-col on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                {WHY_CHOOSE_CAPABILITIES.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <a
                      key={cap.id}
                      href={cap.href}
                      className="group flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div
                        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${cap.badgeBg}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0 pr-1">
                        <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#1E3A8A] leading-snug transition-colors">
                          {cap.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-1">
                          {cap.description}
                        </p>
                      </div>

                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#DC2626] group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-all ml-auto">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column (Desktop ONLY: 6 cols) */}
            <div className="hidden lg:block lg:col-span-6 relative">
              <div className="relative w-full aspect-[16/9.5] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] bg-white">
                <Image
                  src="/assets/services/why-choose-3d.webp"
                  alt="3D logistics illustration with global airplane, world globe, delivery truck and parcel cartons"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FINAL CTA SECTION — FULL-WIDTH RED BANNER
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#DC2626] text-white">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Icon + Heading + Description */}
            <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center shrink-0 text-white shadow-inner mx-auto md:mx-0">
                <Package className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Have a Shipment in Mind?
                </h2>
                <p className="text-xs sm:text-sm text-red-100 font-normal max-w-xl">
                  Tell us what you need to send, and our team can help you explore the right solution.
                </p>
              </div>
            </div>

            {/* Right: Solid White Pill Button */}
            <button
              type="button"
              onClick={() => handleOpenQuote()}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#1E3A8A] hover:text-[#DC2626] text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Discuss Your Shipment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
