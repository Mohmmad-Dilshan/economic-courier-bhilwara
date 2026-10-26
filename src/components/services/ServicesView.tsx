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
  DEMO_TRACKING_DISCLAIMER,
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5F5] border border-red-100 text-[#DC2626] text-[11px] font-bold tracking-wider uppercase shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626] fill-red-100" />
              <span>BHILWARA LOGISTICS CORRIDOR &bull; eCS EXPRESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Courier &amp; Cargo Services{' '}
              <span className="text-[#DC2626]">Built for Dependability.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Connecting Bhilwara&apos;s weaving mills, trade offices, and retail senders with
              priority domestic transit across India and worldwide express air courier reaching 220+
              countries.
            </p>

            {/* Client Transparency Notice */}
            <div className="pt-2">
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
                      ? 'bg-[#0F172A] text-white shadow-xs'
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
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden"
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

                      <h2 className="hidden lg:block text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
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
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              How Your Consignments Move
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Transparent four-step logistics standard for individual senders and Bhilwara commercial
              trading accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
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
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
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
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
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
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
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
          5. MANDATORY COMPLIANCE & PROTOCOL ADVISORY
          ========================================================================= */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="bg-[#FFFDF7] rounded-3xl p-6 sm:p-8 border border-amber-200/90 space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Compliance &amp; Prototype Operational Standards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-amber-950/90 leading-relaxed">
              <div>
                <span className="font-bold block mb-1">Pricing &amp; Freight Rates</span>
                <p>
                  Formal courier quotations are calculated individually based on package dimensions,
                  dead weight vs. volumetric weight, and applicable fuel/carrier surcharges. Generic
                  rate cards are not published to prevent inaccurate estimations.
                </p>
              </div>

              <div>
                <span className="font-bold block mb-1">Carrier Network Disclaimers</span>
                <p>{CARRIER_TRADEMARK_DISCLAIMER}</p>
              </div>
            </div>

            <p className="text-[11px] text-amber-800/80 pt-2 border-t border-amber-200/60 italic">
              Prototype Note: {DEMO_TRACKING_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONVERSION / CALL-TO-ACTION SECTION
          ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#07132D] text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold tracking-wider uppercase">
            Bhilwara Dispatch Counter
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Ready to Send Your Parcel or Fabric Samples?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Submit your courier requirements through our interactive inquiry desk or visit our
            location near Bhilwara Textile Market on Pur Road.
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

            <Link
              href="/#tracking"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white text-sm font-semibold transition-all"
            >
              <span>Sample Tracking Lookup</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4 text-[#DC2626]" />
              <span>Contact Bhilwara Desk</span>
            </Link>
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
