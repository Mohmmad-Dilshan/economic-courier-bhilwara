'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Briefcase,
  Layers,
  FileText,
  Truck,
  Globe,
  ArrowRight,
  MapPin,
  AlertCircle,
  Package,
  Scissors,
  Camera,
} from 'lucide-react';
import { InquiryModal } from '@/components/home/InquiryModal';

export function BusinessSolutionsView() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string>('other');

  const handleOpenInquiry = (serviceKey: string = 'other') => {
    setInquiryService(serviceKey);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. HERO SECTION (Business & Enterprise Logistics Focus)
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
                Business Solutions
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · COMMERCIAL TRADE HUB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-extrabold tracking-wider uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                <span>COMMERCIAL &amp; B2B COURIER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
                Structured logistics for{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                  Bhilwara commerce.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal pt-1 max-w-2xl">
                From textile weaving mills and garment manufacturers to wholesale distributors and
                professional offices, businesses in Bhilwara depend on dependable, repeatable parcel
                dispatch. Our business shipping services provide dedicated counter intake, commercial
                document security, and coordinated transit connections across India and worldwide.
              </p>

              {/* Capability Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-red-700" />
                  <span>Business Shipment Inquiries</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-red-700" />
                  <span>Domestic &amp; International Shipping</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-red-700" />
                  <span>Textile &amp; Commercial Parcels</span>
                </span>
              </div>

              {/* Action Trigger & Honest Note */}
              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleOpenInquiry('other')}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Inquire for Business Shipping</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <p className="text-[11px] text-slate-500 italic max-w-xs">
                  * Commercial shipping terms and recurring consignment arrangements are coordinated
                  directly upon parcel and requirement review.
                </p>
              </div>
            </div>

            {/* Right Column: 3D Commercial Logistics Fleet & Terminal Model */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[420px] xs:max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] group">
                {/* Soft ambient glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-amber-500/10 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

                <Image
                  src="/assets/business-fleet-3d.webp"
                  alt="eCS World Wide Express Commercial Fleet, Multi-Axle Linehaul Truck, Express Delivery Van and Logistics Warehouse Terminal in Bhilwara"
                  width={1024}
                  height={512}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(15,23,42,0.12)] hover:scale-[1.02] transition-transform duration-300 pointer-events-auto"
                />

                {/* Micro Live Fleet Status Ribbon */}
                <div className="mt-2.5 flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="font-bold text-slate-900">Commercial Fleet Staging</span>
                  </div>
                  <span className="text-[11px] text-slate-600 font-semibold truncate">
                    Textile Freight &amp; Daily Linehauls
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. WHO WE SERVE (Grounded in Verified Trade Material)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              Commercial Client Profile
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Who we support across Bhilwara.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Based on the verified commercial services of Economic Courier, our operations are
              tailored to the needs of Bhilwara’s industrial and retail enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Audience 1: Textile Mills & Weavers */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Layers className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Textile Manufacturers &amp; Weaving Mills
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Producers of synthetic fabrics, suiting, and shirting requiring urgent courier dispatch
                  for seasonal swatch books, proof swatches, and fabric cut-lengths to metropolitan buyers.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-medium text-slate-600">
                <span>Sample swatches &amp; proof yardage</span>
              </div>
            </div>

            {/* Audience 2: Garment & Apparel Units */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Scissors className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Garment &amp; Apparel Businesses
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Garment manufacturing units and apparel merchandisers shipping trial garments,
                  embroidery samples, and prototype collections for buyer approval before production runs.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-medium text-slate-600">
                <span>Garment prototypes &amp; catalogs</span>
              </div>
            </div>

            {/* Audience 3: Retail & Commercial Senders */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Package className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Retail Merchants &amp; Distributors
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Local trade businesses, machinery suppliers, and commercial distributors sending
                  spare parts, inventory samples, and B2B parcels across Rajasthan and national corridors.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-medium text-slate-600">
                <span>Spare parts &amp; commercial parcels</span>
              </div>
            </div>

            {/* Audience 4: Corporate & Professional Offices */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors shadow-2xs group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Building2 className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                  Corporate &amp; Professional Offices
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Auditors, legal firms, industrial agencies, and corporate offices requiring secure,
                  tamper-evident handling for contracts, tender files, GST documents, and banking papers.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] font-medium text-slate-500">
                <span>Confidential business dossiers</span>
              </div>
            </div>
          </div>

          {/* Truthfulness Notice */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-slate-800">Transparency Note:</span> We do not publish
              unverified corporate partner lists or fabricated customer counts. All commercial terms,
              credit billing, and scheduled dispatch pickups are structured following direct operational
              review at our Bhilwara desk.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. BUSINESS SHIPPING NEEDS (Key Supported Categories)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F0F5FA] border-b border-[#E0EDF8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-700 block">
              Shipment Categories
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Handling your core trade requirements.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              A comprehensive breakdown of commercial courier categories supported by Economic Courier
              and eCS World Wide Express.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <FileText className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    Category 01
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Samples &amp; Critical Business Documents
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Time-sensitive commercial letters, fabric swatch folders, tenders, and trade agreements.
                Protected in reinforced envelopes or tear-resistant poly sleeves for verifiable handoff.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Service: Documents &amp; Important Parcels</span>
                <Link
                  href="/services#documents"
                  className="font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1"
                >
                  <span>
                    Learn more<span className="sr-only"> about commercial document services</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Truck className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    Category 02
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Priority Domestic Commercial Consignments
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Connecting Bhilwara to major commercial production centers and regional distribution
                hubs across India, including Jaipur, Delhi NCR, Mumbai, Surat, and Ahmedabad.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Service: Domestic Express Courier</span>
                <Link
                  href="/services#domestic"
                  className="font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1"
                >
                  <span>
                    Learn more<span className="sr-only"> about domestic express shipping</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Globe className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    Category 03
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    International Air Forwarding Inquiries
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Worldwide air express under the eCS World Wide Express identity. Designed for overseas
                buyers receiving export swatches, trial yardage, and commercial documentation.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Service: International Courier &amp; Cargo</span>
                <Link
                  href="/services#international"
                  className="font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1"
                >
                  <span>
                    Learn more<span className="sr-only"> about international air cargo</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                  <Scissors className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    Category 04
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Textile &amp; Garment Trade Logistics
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Engineered specifically for Bhilwara’s fabric mills: poly-wrapped swatch packs, sample
                rolls, and garment samples prepared for interstate highway linehauls.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Service: Textile Logistics</span>
                <Link
                  href="/textile-logistics"
                  className="font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1"
                >
                  <span>
                    Learn more<span className="sr-only"> about textile swatch logistics</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HOW BUSINESS INQUIRIES WORK (Suggested Inquiry Process)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-700 block">
              Suggested Onboarding Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              How business inquiries work.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              A clear general walkthrough of how commercial senders coordinate consignments with our
              Bhilwara desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 font-extrabold flex items-center justify-center text-sm border border-red-100">
                01
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Share Requirements
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Provide details on your business consignment needs: package types (swatches, documents,
                cartons) and estimated shipping frequency.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 font-extrabold flex items-center justify-center text-sm border border-red-100">
                02
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Specify Destination
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Indicate target cities (domestic trade corridors or overseas destinations), package
                weights, and any special packing preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 font-extrabold flex items-center justify-center text-sm border border-red-100">
                03
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Confirm Availability &amp; Rate
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our Bhilwara operations desk evaluates the consignment against current forwarding
                channels and confirms rate quotations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 font-extrabold flex items-center justify-center text-sm border border-red-100">
                04
              </div>
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                Arrange Booking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Upon agreement, consignments are dropped off at our Bhilwara counter or scheduled for
                collection where operational coverage is confirmed.
              </p>
            </div>
          </div>

          {/* Workflow Guardrail Notice */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto italic">
              Note: This is a suggested inquiry process for client review. It does not constitute a
              guaranteed operating service level agreement (SLA) or automated online booking system.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BUSINESS INQUIRY CTA BAND
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#09132B] via-[#0F1E3D] to-[#070E20] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
              <Briefcase className="w-3.5 h-3.5 text-red-400" />
              <span>COMMERCIAL INQUIRY DESK</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Ready to explore business shipping options?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Submit your business logistics requirement below. Our team reviews parcel details,
              destination corridors, and volume schedules to provide custom guidance.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenInquiry('other')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <span>Prepare Business Inquiry</span>
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
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-700 block mb-1">
              Explore Our Logistics Capabilities
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
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-red-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  All Courier Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Domestic express, international cargo, and document forwarding.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 pt-1">
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/textile-logistics"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-red-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Textile Swatch Logistics
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Dedicated fabric sample packaging and dispatch for Bhilwara mills.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 pt-1">
                <span>Textile Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/gallery"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-red-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Operations Archive
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Watch authentic packaging, sorting, and dispatch reels filmed in Bhilwara.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 pt-1">
                <span>Watch Reels</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-red-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Contact Bhilwara Desk
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Facility location context, online inquiry desk, and channel verification.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 pt-1">
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REUSABLE INQUIRY MODAL (Preselected for General / Business Inquiry)
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

export default BusinessSolutionsView;
