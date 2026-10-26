'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck,
  Globe,
  FileText,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NoticeBanner } from '@/components/ui/NoticeBanner';
import { InquiryModal } from '@/components/home/InquiryModal';
import { SERVICES_DATA } from '@/lib/servicesData';
import { ServiceCategory, ServiceItem } from '@/types/service';
import { ServiceTypeOption } from '@/types/inquiry';
import {
  BUSINESS_INFO,
  CARRIER_TRADEMARK_DISCLAIMER,
} from '@/lib/constants';

// Helper icon resolver for service item
function getServiceIcon(iconName: string) {
  switch (iconName) {
    case 'Truck':
      return Truck;
    case 'Globe':
      return Globe;
    case 'FileText':
      return FileText;
    case 'Layers':
      return Layers;
    default:
      return Truck;
  }
}

export function ServicesView() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceTypeOption>('domestic');

  const filterTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'domestic', label: 'Domestic Courier' },
    { id: 'international', label: 'International Courier' },
    { id: 'documents', label: 'Documents & Parcels' },
    { id: 'textile', label: 'Textile Shipping' },
  ];

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenInquiry = (serviceKey: ServiceTypeOption) => {
    setSelectedService(serviceKey);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden antialiased">
      {/* =========================================================================
          1. HERO & BREADCRUMB HEADER
          ========================================================================= */}
      <section className="relative pt-6 pb-10 lg:pt-10 lg:pb-14 bg-[radial-gradient(ellipse_at_top_left,#EBF5FB_0%,#F8FBFE_50%,#FFFFFF_100%)] border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#DC2626] transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0F172A] font-bold" aria-current="page">
              Services
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            {/* Location & Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-50 via-white to-red-50/50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-xs reveal-init delay-75">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] shadow-[0_0_8px_rgba(220,38,38,0.7)] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA LOGISTICS CORRIDOR &bull; eCS EXPRESS</span>
            </div>

            {/* Main Modern Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black tracking-[-0.035em] leading-[1.08] reveal-init delay-150">
              <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Courier &amp; Cargo Services{' '}
              </span>
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                Built for Dependability.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal reveal-init delay-225">
              Connecting Bhilwara&apos;s weaving mills, trade offices, and retail senders with
              priority domestic transit across India and worldwide express air courier reaching 220+
              countries.
            </p>

            {/* Client Transparency Notice */}
            <div className="pt-2 reveal-init delay-300">
              <NoticeBanner variant="info" title="Operational Standard Notice">
                Consignment quotations are provided upon parcel specification (weight, dimensions,
                destination). Live carrier API tracking connects upon franchise system activation.
              </NoticeBanner>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="py-6 border-b border-slate-100 sticky top-16 lg:top-[72px] z-20 bg-white/95 backdrop-blur-md shadow-2xs">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#DC2626] text-white shadow-xs shadow-red-500/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPREHENSIVE SERVICES CATALOG
          ========================================================================= */}
      <section className="py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-12">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const IconComponent = getServiceIcon(service.iconName);
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden reveal-init delay-75"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column: Visual Card Media */}
                  <div className={`relative h-64 sm:h-80 lg:h-full min-h-[320px] lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent lg:hidden" />

                    {/* Floating Badge in image corner */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] text-[11px] font-extrabold uppercase tracking-wider shadow-sm border border-slate-200/60">
                        <IconComponent className="w-3.5 h-3.5 text-[#DC2626]" />
                        <span>{service.categoryLabel}</span>
                      </span>
                    </div>

                    {/* Mobile Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-xs text-slate-200 mt-0.5">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Right Column: In-depth Service Specifications */}
                  <div className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Header Block */}
                    <div className="space-y-2">
                      <div className="hidden lg:flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center font-bold">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                          {service.categoryLabel}
                        </span>
                      </div>

                      <h2 className="hidden lg:block text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Verified Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Verified Features */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Key Service Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For Pill Tags */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Recommended For
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.idealFor.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corridor & Coverage Strip */}
                    <div className="p-3.5 bg-[#F0F5FA] rounded-2xl border border-[#E2ECF5] text-xs text-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                        <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                        <span>Coverage: {service.coverage}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                        {service.complianceNote ||
                          'Freight rates and transit schedules are calculated per consignment.'}
                      </p>
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {/* Primary Inquiry Trigger */}
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleOpenInquiry(service.inquiryServiceKey)}
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        {service.ctaLabel}
                      </Button>

                      {/* Secondary Rate Inquiry Option */}
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => handleOpenInquiry(service.inquiryServiceKey)}
                      >
                        Request Quote
                      </Button>

                      {/* Demo Tracking Route */}
                      <Link
                        href="/#tracking"
                        className="text-xs font-semibold text-slate-600 hover:text-[#DC2626] inline-flex items-center gap-1 transition-colors px-3 py-2"
                      >
                        <span>Tracking Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. PROCESS EXPLAINER: HOW OUR DESK OPERATES
          ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 reveal-init">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50/80 border border-red-200/60 text-xs font-semibold text-[#DC2626] tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
              Operational Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">How Your Consignments</span>{' '}
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">Move</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
              Transparent four-step logistics standard for individual senders and Bhilwara commercial
              trading accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 reveal-init delay-75">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-sm font-bold text-[#0F172A]">Requirement &amp; Quote</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Submit your parcel details via the inquiry desk or contact our Pur Road office with
                destination and estimated weight.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 reveal-init delay-150">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-extrabold flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="text-sm font-bold text-[#0F172A]">Weighing &amp; Packaging</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Consignments are inspected, verified for dimensional weight, and securely packed in
                tamper-evident waterproof mailers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 reveal-init delay-225">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-extrabold flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-sm font-bold text-[#0F172A]">Dispatch &amp; AWB Number</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                A consignment reference number is issued. Packets join daily scheduled flights or
                priority surface carrier connections.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 reveal-init delay-300">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-extrabold flex items-center justify-center text-sm">
                04
              </div>
              <h3 className="text-sm font-bold text-[#0F172A]">Doorstep Delivery</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct handover to recipient with milestone transit updates and proof of dispatch
                verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SERVICE TRANSPARENCY & OPERATIONAL STANDARDS
          ========================================================================= */}
      <section className="py-8 sm:py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4 reveal-init delay-75">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span>Service Transparency &amp; Dispatch Standards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
              <div>
                <span className="font-bold text-slate-900 block mb-1">Tailored Freight Pricing</span>
                <p>
                  Courier quotations are calculated accurately per shipment based on parcel dimensions,
                  dead weight versus volumetric weight, and destination delivery zone.
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1">Priority Forwarding Networks</span>
                <p>{CARRIER_TRADEMARK_DISCLAIMER}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FLOATING CONVERSION / CALL-TO-ACTION CARD
          ========================================================================= */}
      <section className="py-4 sm:py-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1736] via-[#071026] to-[#040814] p-8 sm:p-12 lg:p-14 text-center border border-white/[0.08] shadow-lg overflow-hidden space-y-5 reveal-init reveal-scale">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-xs font-semibold text-red-300 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Bhilwara Dispatch Counter
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight text-white">
              <span className="text-white">Ready to Send Your Parcel or </span>
              <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                Fabric Samples?
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Submit your parcel details through our quick rate inquiry desk or reach our Pur Road hub counter in Bhilwara directly.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleOpenInquiry('domestic')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Open Rate Inquiry Desk
              </Button>

              <button
                type="button"
                onClick={() => handleOpenInquiry('domestic')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call Bhilwara Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BHILWARA HUB CONTACT & LOCATION STRIP
          ========================================================================= */}
      <section className="py-4 sm:py-6 mb-4">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-[#F0F7FD] rounded-2xl border border-[#E0EDF8] flex flex-col md:flex-row items-center justify-between shadow-2xs overflow-hidden reveal-init delay-100">
            {/* Left: Call Us / Inquire Online */}
            <button
              type="button"
              onClick={() => handleOpenInquiry('domestic')}
              className="flex items-center gap-3.5 py-4 pl-8 text-left bg-transparent border-0 cursor-pointer group hover:bg-sky-50/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-inset"
              aria-label="Open Customer & Rate Inquiry Desk (+91 89551 44444)"
            >
              <div className="w-9 h-9 rounded-full bg-red-100/70 flex items-center justify-center text-[#DC2626] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">Call Us &bull; Inquire Online</p>
                <p className="text-base font-bold text-slate-800 tracking-tight group-hover:text-[#DC2626] transition-colors">
                  +91 89551 44444
                </p>
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

      {/* =========================================================================
          7. REUSED INQUIRY MODAL ISLAND
          ========================================================================= */}
      <InquiryModal
        key={inquiryModalOpen ? (selectedService || 'open') : 'closed'}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default ServicesView;
