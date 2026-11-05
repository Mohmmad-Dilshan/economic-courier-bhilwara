'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Package,
  Search,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  MapPin,
  FileText,
  Truck,
  HelpCircle,
  ShieldCheck,
  Building2,
  ExternalLink,
  Info,
} from 'lucide-react';
import { ACTIVE_NETWORK_PARTNERS } from '@/lib/partnersData';

export function TrackShipmentView() {
  const [trackingInput, setTrackingInput] = useState('');
  const [searchedAwb, setSearchedAwb] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [partnerCopiedNotice, setPartnerCopiedNotice] = useState<string | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingInput.trim().toUpperCase();

    // 1. Validate empty input
    if (!query) {
      setInputError('Please enter a consignment number or booking AWB.');
      return;
    }

    // 2. Validate minimal length for a realistic consignment reference
    if (query.length < 4) {
      setInputError('Please enter a valid consignment reference (minimum 4 characters from your receipt).');
      return;
    }

    setInputError(null);
    setSearchedAwb(query);
    setPartnerCopiedNotice(null);
  };

  const handleCopy = async () => {
    if (!searchedAwb) return;
    try {
      await navigator.clipboard.writeText(searchedAwb);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted in browser
    }
  };

  const handlePartnerTrack = async (partnerName: string, trackingUrl: string) => {
    if (searchedAwb) {
      try {
        await navigator.clipboard.writeText(searchedAwb);
        setCopied(true);
      } catch {
        // Fallback silently if clipboard restricted
      }
      setPartnerCopiedNotice(
        `Reference "${searchedAwb}" copied! Opening ${partnerName} tracking portal in a new tab...`
      );
    }
    window.open(trackingUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetSearch = () => {
    setTrackingInput('');
    setSearchedAwb(null);
    setInputError(null);
    setPartnerCopiedNotice(null);
  };

  const directPortalPartners = ACTIVE_NETWORK_PARTNERS.filter(
    (p) => p.trackingMode === 'direct-portal' && p.trackingUrl
  );
  const counterPartners = ACTIVE_NETWORK_PARTNERS.filter(
    (p) => p.trackingMode === 'counter-verification'
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. HERO SECTION (Editorial Heading & Breadcrumbs)
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
                Track Shipment
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · CONSIGNMENT VERIFICATION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Interactive Tracking Input */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
                <Package className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>SHIPMENT MONITORING &amp; STATUS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
                Your shipment.{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                  One place to start.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Enter your physical consignment docket number or booking AWB provided during parcel
                booking at Economic Courier / eCS World Wide Express, Bhilwara.
              </p>

              {/* Accessible Tracking Input Box */}
              <div className="pt-2 max-w-xl">
                <form
                  onSubmit={handleTrackSubmit}
                  noValidate
                  className={`relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-2 sm:p-1.5 sm:pl-5 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border transition-all ${
                    inputError
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-300 focus-within:border-[#DC2626] focus-within:ring-2 focus-within:ring-red-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5 flex-1 px-2 py-1.5 sm:py-0">
                    <Package className="w-5 h-5 text-slate-400 shrink-0" />
                    <label htmlFor="tracking-page-input" className="sr-only">
                      Enter Consignment or AWB Number
                    </label>
                    <input
                      type="text"
                      id="tracking-page-input"
                      value={trackingInput}
                      onChange={(e) => {
                        setTrackingInput(e.target.value);
                        if (inputError) setInputError(null);
                      }}
                      placeholder="Enter Consignment or AWB Number"
                      className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 font-medium focus:outline-none tracking-wide"
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-full shadow-md transition-all active:scale-95 cursor-pointer mt-2 sm:mt-0 shrink-0"
                  >
                    <Search className="w-4 h-4 text-white" />
                    <span>Track Status</span>
                  </button>
                </form>

                {/* Validation Error Message */}
                {inputError && (
                  <p className="text-xs text-red-600 font-semibold mt-2 px-4 flex items-center gap-1.5 animate-in fade-in duration-150">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{inputError}</span>
                  </p>
                )}

                <p className="text-[11px] text-slate-500 italic mt-2 px-3">
                  * Consignment numbers are printed on your physical booking slip or counter receipt.
                </p>
              </div>
            </div>

            {/* Right Column: Authentic Parcel Transit Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl aspect-[4/3] group">
                <Image
                  src="/assets/services/card-domestic.webp"
                  alt="Economic Courier express parcel handling and linehaul dispatch in Bhilwara"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 text-white border border-white/20 text-[10px] font-mono font-bold tracking-wide uppercase">
                    BHILWARA DISPATCH COUNTER
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-xs font-semibold text-red-400 block">
                    Authentic Parcel Dispatch
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">
                    Consignments sorted and staged for highway linehauls and express air forwarders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRACKING STATUS / CARRIER ROUTING (Active after Search)
          ========================================================================= */}
      {searchedAwb && (
        <section
          id="tracking-result-box"
          className="py-10 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-3 duration-300"
        >
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Status Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#DC2626] border border-red-200 text-xs font-bold tracking-wide uppercase">
                  <Package className="w-4 h-4 text-[#DC2626]" />
                  <span>Consignment Ready to Route</span>
                </div>

                <button
                  type="button"
                  onClick={handleResetSearch}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 hover:underline cursor-pointer"
                >
                  Search Another Consignment
                </button>
              </div>

              {/* Entered Consignment Reference Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400 block">
                  Consignment Reference Entered
                </span>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-lg sm:text-2xl font-black font-mono text-slate-900 tracking-wide break-all">
                    {searchedAwb}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    aria-label="Copy consignment number"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Copy Reference</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Feedback Notice after Clicking a Partner */}
              {partnerCopiedNotice && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 animate-in fade-in duration-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                    {partnerCopiedNotice}
                  </p>
                </div>
              )}

              {/* Partner Actions */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Select Your Booking Carrier to Continue
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consignments booked at our Bhilwara desk are routed through verified partner
                  linehauls. Choose the carrier listed on your physical booking docket:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {ACTIVE_NETWORK_PARTNERS.map((partner) => {
                    const isDirect = partner.trackingMode === 'direct-portal' && partner.trackingUrl;
                    return (
                      <div
                        key={partner.id}
                        className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                            <Image
                              src={partner.logoAsset}
                              alt=""
                              width={36}
                              height={36}
                              className="max-h-8 w-auto object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors truncate">
                              {partner.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-500 block truncate">
                              {partner.categoryLabel}
                            </span>
                          </div>
                        </div>

                        {isDirect ? (
                          <button
                            type="button"
                            onClick={() => handlePartnerTrack(partner.shortName, partner.trackingUrl!)}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-2xs transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                            aria-label={`Track on ${partner.name} official portal`}
                          >
                            <span>Track on {partner.shortName}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-white" />
                          </button>
                        ) : (
                          <Link
                            href="/contact"
                            className="w-full inline-flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer"
                          >
                            <Building2 className="w-3.5 h-3.5 text-amber-800" />
                            <span>Verify at Bhilwara Counter</span>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Truthfulness Notice */}
              <div className="p-3.5 bg-slate-100/80 border border-slate-200 rounded-2xl flex items-start gap-2.5 text-xs text-slate-600">
                <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div className="space-y-1 text-[11px] leading-relaxed">
                  <span className="font-semibold text-slate-700 block">
                    Direct Official Tracking Notice:
                  </span>
                  <p>
                    Consignments are verified directly on the respective carrier portal. Live results
                    are not fetched or simulated on this website. When the official portal opens, paste
                    your copied reference number into the partner tracking field.
                  </p>
                </div>
              </div>

              {/* Direct Offline Help Callout */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-900 block">
                    Need urgent consignment status?
                  </span>
                  <span className="text-xs text-slate-600">
                    Visit or contact our Bhilwara desk with your physical booking receipt.
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0"
                >
                  <span>Contact Dispatch Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          3. FULL COURIER PARTNER NETWORK SHOWCASE (Always Visible)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>COURIER PARTNER DIRECTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A]">
              Know Your Courier Partner? Track Directly.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              If you already have your physical booking docket, choose the carrier below to jump straight
              to their official tracking portal:
            </p>
          </div>

          {/* Partner Action Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {directPortalPartners.map((partner) => (
              <div
                key={partner.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                      {partner.categoryLabel}
                    </span>
                  </div>

                  <div className="h-12 flex items-center">
                    <Image
                      src={partner.logoAsset}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#DC2626] transition-colors line-clamp-1">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {partner.roleDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 italic">
                    Official portal
                  </span>
                  <a
                    href={partner.trackingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xs transition-all active:scale-95 cursor-pointer"
                    aria-label={`Open ${partner.name} official tracking portal in a new tab`}
                  >
                    <span>Track on {partner.shortName}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>
            ))}

            {/* Counter Verification Partners (if any) */}
            {counterPartners.map((partner) => (
              <div
                key={partner.id}
                className="p-5 rounded-2xl bg-white border border-amber-200/90 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      {partner.categoryLabel}
                    </span>
                  </div>

                  <div className="h-12 flex items-center">
                    <Image
                      src={partner.logoAsset}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] line-clamp-1">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {partner.roleDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-amber-900/80 italic">
                    Counter Verification
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xs transition-all"
                  >
                    <Building2 className="w-3.5 h-3.5 text-amber-800" />
                    <span>Inquire Desk</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HOW TRACKING WORKS (Consignment Advice & Help)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              Consignment Receipt Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              How to check your consignment status.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Clear instructions for senders and recipients managing parcels dispatched through Economic
              Courier and eCS World Wide Express.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Guide Step 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <FileText className="w-5 h-5 text-[#DC2626]" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">
                1. Retain Booking Receipt
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                When you drop off or book a consignment at our Bhilwara office counter, our staff issues a
                physical booking slip (AWB receipt) with your unique docket number and recipient destination.
              </p>
            </div>

            {/* Guide Step 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <Truck className="w-5 h-5 text-[#DC2626]" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">
                2. Forwarding &amp; Handover
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Consignments are sorted into domestic linehaul routes or international air freight
                channels. Forwarding manifests are documented at our Bhilwara operations center.
              </p>
            </div>

            {/* Guide Step 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <Building2 className="w-5 h-5 text-[#DC2626]" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">
                3. Direct Counter Inquiries
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                For time-sensitive commercial shipments or urgent proof of delivery (POD), contact our
                operations desk with your physical docket reference for direct verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CARRIER INTEGRATION READINESS (Architectural Transparency)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F0F5FA] border-b border-[#E0EDF8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                <ShieldCheck className="w-5 h-5 text-[#DC2626]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  TECHNICAL COMPLIANCE &amp; ARCHITECTURE
                </span>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Carrier API Readiness &amp; Safe Architecture
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our website architecture includes dedicated modular interfaces for carrier tracking
              connectors. In strict accordance with client verification guidelines:
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-1.5" />
                <span>
                  <strong>Zero Simulated Data:</strong> We do not show placeholder progress bars, fake
                  GPS coordinates, or mock milestones.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-1.5" />
                <span>
                  <strong>No External Data Leakage:</strong> Entered consignment references are not sent
                  to unverified external third-party services.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-1.5" />
                <span>
                  <strong>Modular Activation:</strong> Official carrier portals are integrated directly
                  for verified partners, ensuring customers track consignments straight from the source.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. RELATED PAGES (Verified Existing Routes Only)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
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
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Truck className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  All Courier Services
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Domestic express, international cargo, and document forwarding.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/textile-logistics"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Textile Swatch Logistics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dedicated fabric sample packaging and dispatch for Bhilwara mills.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Textile Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/business-solutions"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Business Solutions
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  B2B trade accounts, commercial parcel linehauls &amp; corporate support.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Business Shipping</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Contact Bhilwara Desk
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Facility location context, online inquiry desk, and channel verification.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Contact Desk</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrackShipmentView;
