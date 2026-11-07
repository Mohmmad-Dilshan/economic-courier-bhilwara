'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plane,
  Package,
  Layers,
  Utensils,
  Ship,
  Stethoscope,
  FileText,
  Briefcase,
  Home,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  MapPin,
  AlertCircle,
  Clock,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { BROCHURE_SERVICES } from '@/lib/servicesCatalogueData';
import { ServiceQuoteModal } from './ServiceQuoteModal';

// Helper icon resolver for the 8 services
function getBrochureIcon(id: string) {
  switch (id) {
    case 'air-courier':
      return Plane;
    case 'commercial-shipment':
      return Layers;
    case 'food-item-delivery':
      return Utensils;
    case 'sea-cargo-service':
      return Ship;
    case 'medicine-delivery':
      return Stethoscope;
    case 'document-delivery':
      return FileText;
    case 'excess-baggage':
      return Briefcase;
    case 'household-items':
      return Home;
    default:
      return Package;
  }
}

export function ServicesView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('air-courier');
  const [activeTab, setActiveTab] = useState<'all' | 'air' | 'commercial' | 'cargo' | 'personal'>('all');

  const handleOpenQuote = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setModalOpen(true);
  };

  const filteredServices = BROCHURE_SERVICES.filter((svc) => {
    if (activeTab === 'all') return true;
    return svc.filterCategory === activeTab;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E3A8A] overflow-x-hidden antialiased selection:bg-red-500 selection:text-white">
      {/* Interactive Service Quote Modal */}
      <ServiceQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedServiceId={selectedServiceId}
      />

      {/* =========================================================================
          1. HERO HEADER — CLEAN, ELEGANT, CRYSTAL CLEAR
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-10 sm:pb-14 bg-gradient-to-b from-white via-blue-50/20 to-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#DC2626] transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#1E3A8A] font-bold" aria-current="page">
              Services
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            {/* Location & Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-widest uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA HUB · DOMESTIC &amp; INTERNATIONAL SERVICES</span>
            </div>

            {/* Main Headline in Bold Royal Navy with Brand Red Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-black tracking-[-0.035em] text-[#1E3A8A] leading-[1.12]">
              Our Complete{' '}
              <span className="text-[#DC2626]">
                Services Portfolio.
              </span>
            </h1>

            {/* Simple, Crisp Subtitle */}
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal max-w-2xl">
              Economic Courier aur eCS World Wide Express Bhilwara ke walk-in counter (Opp. New Cloth Market, Pur Road) se operate karte hain. Domestic air express, international courier, heavy cargo, textile mill swatches, tatha personal baggage ke liye hamari complete service list niche dekhein.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenQuote()}
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request a Rate Quote</span>
              </button>

              <a
                href="tel:+918955144444"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1E3A8A] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full border border-slate-300 transition-all cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#DC2626]" />
                <span>Call Bhilwara Desk (+91 89551 44444)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FILTER TABS (EASY ONE-CLICK CATEGORY TOGGLE)
          ========================================================================= */}
      <section className="sticky top-[67px] sm:top-[71px] lg:top-[75px] z-30 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Services (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('air')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'air'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Air &amp; Documents
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commercial')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Commercial &amp; Textile
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cargo')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'cargo'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Cargo (Sea &amp; Regulated)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('personal')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'personal'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Personal &amp; Baggage
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-500">
            <Filter className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Showing {filteredServices.length} of 8 Services</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAIN SERVICES GRID — 8 AUTHENTIC BROCHURE SERVICES (CLEAR & BEAUTIFUL)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredServices.map((svc) => {
              const IconComponent = getBrochureIcon(svc.id);
              const whatsappLink = `https://wa.me/918955144444?text=${encodeURIComponent(svc.whatsappMessage)}`;

              return (
                <div
                  key={svc.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Top Image Banner with Visual Vignette */}
                  <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] bg-slate-900 overflow-hidden">
                    <Image
                      src={svc.imageSrc}
                      alt={svc.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Category Tag & Service Number Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-red-300">
                        <span>{svc.number}</span>
                        <span>•</span>
                        <span>{svc.categoryTag}</span>
                      </span>

                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-sm">
                        {svc.title}
                      </h2>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 lg:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      {/* Short Tagline */}
                      <p className="text-xs sm:text-sm font-bold text-[#DC2626] leading-snug">
                        {svc.tagline}
                      </p>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {svc.description}
                      </p>

                      {/* Included Sub-Services (From Brochure) */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] mb-2">
                          Included Services &amp; Capabilities:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {svc.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="font-medium leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Special Advisory Notice Box (If Any) */}
                      {svc.advisoryNotice && (
                        <div
                          className={`p-3 rounded-xl border text-xs leading-relaxed font-medium flex items-start gap-2 mt-3 ${
                            svc.advisoryType === 'warning'
                              ? 'bg-amber-50/90 border-amber-200 text-amber-900'
                              : svc.advisoryType === 'success'
                              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900'
                              : 'bg-blue-50/90 border-blue-200 text-[#1E3A8A]'
                          }`}
                        >
                          <AlertCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              svc.advisoryType === 'warning'
                                ? 'text-amber-600'
                                : svc.advisoryType === 'success'
                                ? 'text-emerald-600'
                                : 'text-[#1E3A8A]'
                            }`}
                          />
                          <p className="text-[11px] leading-relaxed font-normal">
                            {svc.advisoryNotice}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleOpenQuote(svc.id)}
                        className="inline-flex items-center justify-center gap-1.5 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        <span>Quick Quote</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HOW TO BOOK AT BHILWARA HUB (3 SIMPLE STEPS)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold text-[#DC2626] uppercase tracking-wider">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight">
              Bhilwara Booking &amp; Dispatch Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Physical booking counter opposite New Cloth Market, Pur Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A] text-white font-black text-lg flex items-center justify-center mx-auto shadow-xs">
                01
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Share Shipment Details
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Counter visit karein ya WhatsApp/Phone pe parcel type, approximate weight, aur destination batayein.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A] text-white font-black text-lg flex items-center justify-center mx-auto shadow-xs">
                02
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Packaging &amp; Weighing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Hub par digital scale se weight check hota hai. 5-ply cartons, bubble wrap aur strapping se parcel seal hota hai.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#DC2626] text-white font-black text-lg flex items-center justify-center mx-auto shadow-xs">
                03
              </div>
              <h3 className="text-base font-black text-[#1E3A8A]">
                Scheduled Network Dispatch
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Docket number generate hota hai aur parcel daily evening linehaul se airport ya highway route par nikal jata hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM DIRECT CALL & WHATSAPP CTA BANNER
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] text-white">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-400/40 text-red-200 text-[11px] font-black uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-red-300" />
            <span>DAILY COUNTER: 9:00 AM – 9:00 PM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Koi Bhi Shipment Ho, Direct Sampark Karein.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed font-normal">
            Fabric swatches, international air cargo, excess baggage, food items, ya medicine delivery — hamari Bhilwara team turant guidance provide karegi.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20have%20an%20inquiry%20regarding%20a%20shipment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquire (+91 89551 44444)</span>
            </a>

            <Link
              href="/contact#inquiry-form"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1E3A8A] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#DC2626]" />
              <span>Visit Pur Road Counter</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
