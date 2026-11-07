'use client';

import React, { useState, useId } from 'react';
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
  Phone,
  MessageCircle,
  X,
  ClipboardPaste,
  RotateCcw,
  Barcode,
  ChevronDown,
} from 'lucide-react';
import {
  VERIFIED_TRACKING_CARRIERS,
  detectCarrier,
  type TrackingCarrier,
} from '@/lib/trackingPartners';

const SAMPLE_AWBS = [
  { label: 'Blue Dart AWB', awb: 'BD908234123', carrierName: 'Blue Dart' },
  { label: 'UPS Air Cargo', awb: '1Z9999999999999999', carrierName: 'UPS' },
  { label: 'Akash Ganga AWB', awb: 'AG88349102', carrierName: 'Akash Ganga' },
  { label: 'Bhilwara Hub Slip', awb: 'ECS-BHL-4912', carrierName: 'Bhilwara Desk' },
];

const TRACKING_FAQS = [
  {
    q: 'Where do I find my consignment or AWB docket number?',
    a: 'Your docket number is printed on the physical pink/white booking receipt issued at our Bhilwara counter (opposite New Cloth Market). Look for the 8-11 digit reference or alphanumeric code directly under the barcode on the top-right corner.',
  },
  {
    q: 'Why does the carrier portal say "Consignment Not Found" immediately after drop-off?',
    a: 'Parcels booked at our Bhilwara counter during afternoon hours undergo physical sorting, weighing, and tamper-evident labeling before being manifested onto evening linehaul trucks (departing between 7:30 PM and 9:00 PM). Carrier databases update once the central linehaul manifest is scanned.',
  },
  {
    q: 'How do I track textile sample swatches sent to Surat, Ahmedabad, or Mumbai?',
    a: 'Textile fabric swatches dispatched via dedicated commercial lines (AFEX Express, Akash Ganga, or Blue Dart) carry the partner linehaul AWB. Enter that reference above to jump directly to their specialized freight portal.',
  },
  {
    q: 'How does international tracking work for air cargo and export documents?',
    a: 'International dispatches routed via UPS carry a standard 18-character AWB starting with "1Z". Entering your number here opens UPS Global Tracking directly with your consignment prefilled.',
  },
  {
    q: 'Can the Bhilwara operations team check my delivery status manually?',
    a: 'Yes. If you have an internal counter receipt docket (ECS-*, local dispatch slips) or need urgent physical proof of delivery (POD), click "Verify on WhatsApp" or call our dispatch desk directly at +91 89551 44444.',
  },
];

export function TrackShipmentView() {
  const [trackingInput, setTrackingInput] = useState('');
  const [searchedAwb, setSearchedAwb] = useState<string | null>(null);
  const [detectedCarrier, setDetectedCarrier] = useState<TrackingCarrier | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'air' | 'road' | 'counter'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const inputId = useId();

  // Handle tracking submission
  const executeTrack = (rawQuery: string) => {
    const query = rawQuery.trim().toUpperCase();

    if (!query) {
      setInputError('Please enter a consignment number or booking AWB.');
      return;
    }

    if (query.length < 3) {
      setInputError('Please enter a valid consignment reference (minimum 3 characters from your receipt).');
      return;
    }

    setInputError(null);
    setSearchedAwb(query);
    const matched = detectCarrier(query);
    setDetectedCarrier(matched);
    setActionNotice(null);

    // Smooth scroll down to result card on small screens
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const el = document.getElementById('tracking-result-box');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeTrack(trackingInput);
  };

  // Handle sample chip click
  const handleSelectSample = (sampleAwb: string) => {
    setTrackingInput(sampleAwb);
    executeTrack(sampleAwb);
  };

  // Handle copy to clipboard
  const handleCopyAwb = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API restricted
    }
  };

  // Handle paste from clipboard into input
  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        const cleaned = text.trim();
        setTrackingInput(cleaned);
        setInputError(null);
      }
    } catch {
      // Ignore if permission denied
    }
  };

  // Clear search state
  const handleClear = () => {
    setTrackingInput('');
    setSearchedAwb(null);
    setDetectedCarrier(null);
    setInputError(null);
    setActionNotice(null);
  };

  // Execute genuine carrier tracking action ("Link Pate Ka")
  const handleCarrierAction = async (carrier: TrackingCarrier) => {
    const awbToUse = searchedAwb || trackingInput.trim().toUpperCase() || carrier.sampleAwb;

    if (carrier.trackingMode === 'deep-link') {
      try {
        await navigator.clipboard.writeText(awbToUse);
        setCopied(true);
      } catch {
        // silent
      }
      const deepUrl = carrier.getTrackingUrl(awbToUse);
      setActionNotice(
        `Consignment "${awbToUse}" prefilled! Opening official ${carrier.shortName} portal in a new tab...`
      );
      window.open(deepUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (carrier.trackingMode === 'counter-whatsapp') {
      const waUrl = carrier.getTrackingUrl(awbToUse);
      setActionNotice(
        `Opening Bhilwara Dispatch Desk WhatsApp with prefilled consignment reference "${awbToUse}"...`
      );
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Portal with automatic clipboard copy
    try {
      await navigator.clipboard.writeText(awbToUse);
      setCopied(true);
    } catch {
      // silent
    }
    const portalUrl = carrier.getTrackingUrl(awbToUse);
    setActionNotice(
      `Reference "${awbToUse}" copied to your clipboard! Opening ${carrier.shortName} tracking portal — paste your reference to view live status.`
    );
    window.open(portalUrl, '_blank', 'noopener,noreferrer');
  };

  // Filter carriers for directory
  const filteredCarriers = VERIFIED_TRACKING_CARRIERS.filter((c) => {
    if (filterCategory === 'air') return c.id === 'ups' || c.id === 'airstar';
    if (filterCategory === 'road')
      return c.id === 'bluedart' || c.id === 'akash-ganga' || c.id === 'afex' || c.id === 'shree-mahavir' || c.id === 'gms';
    if (filterCategory === 'counter') return c.id === 'ecs-counter';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. HERO SECTION & INTEGRATED SEARCH BAR
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-10 sm:pb-14 lg:pb-16 bg-gradient-to-b from-white via-slate-50 to-[#F1F5F9] border-b border-slate-200/90">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Breadcrumbs & Live Operations Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-8 text-xs font-medium text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-900 font-semibold" aria-current="page">
                Track Shipment
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>BHILWARA OPERATIONS HUB · LIVE ROUTING ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Search Form & Sample Chips */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-extrabold tracking-wider uppercase shadow-2xs">
                <Package className="w-3.5 h-3.5 text-red-700" />
                <span>OFFICIAL CONSIGNMENT VERIFICATION</span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[50px] font-black tracking-[-0.035em] text-[#0F172A] leading-[1.12]">
                Track Your Consignment.{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                  Verified Direct Links.
                </span>
              </h1>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Enter your physical docket or booking AWB provided at our Bhilwara dispatch counter. We
                connect you straight to verified carrier tracking portals with prefilled references and
                direct WhatsApp counter status.
              </p>

              {/* Accessible, High-Contrast Search Form */}
              <div className="pt-1 max-w-xl">
                <form
                  onSubmit={handleFormSubmit}
                  noValidate
                  className={`bg-white rounded-2xl sm:rounded-full p-2 sm:p-2 sm:pl-4 shadow-[0_6px_28px_rgba(15,23,42,0.08)] border transition-all ${
                    inputError
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-300 focus-within:border-[#DC2626] focus-within:ring-2 focus-within:ring-red-500/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div className="flex items-center gap-2 flex-1 px-2 py-1.5 sm:py-0">
                      <Barcode className="w-5 h-5 text-slate-500 shrink-0" />
                      <label htmlFor={inputId} className="sr-only">
                        Enter Consignment Docket or Carrier AWB Number
                      </label>
                      <input
                        type="text"
                        id={inputId}
                        value={trackingInput}
                        onChange={(e) => {
                          setTrackingInput(e.target.value);
                          if (inputError) setInputError(null);
                        }}
                        placeholder="e.g. BD908234123, 1Z..., ECS-BHL-..."
                        className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-500 font-mono font-medium focus:outline-none tracking-wide uppercase"
                        autoComplete="off"
                        spellCheck={false}
                      />

                      {/* Clear Button */}
                      {trackingInput && (
                        <button
                          type="button"
                          onClick={() => setTrackingInput('')}
                          className="p-1 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                          aria-label="Clear input"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}

                      {/* Paste from Clipboard Button */}
                      <button
                        type="button"
                        onClick={handlePasteFromClipboard}
                        className="hidden xs:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                        title="Paste from clipboard"
                      >
                        <ClipboardPaste className="w-3.5 h-3.5" />
                        <span>Paste</span>
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-full shadow-md transition-all active:scale-95 cursor-pointer shrink-0 min-h-[44px]"
                    >
                      <Search className="w-4 h-4 text-white" />
                      <span>Track Status</span>
                    </button>
                  </div>
                </form>

                {/* Validation Error Banner */}
                {inputError && (
                  <p
                    role="alert"
                    className="text-xs text-red-700 font-bold mt-2.5 px-3 flex items-center gap-1.5 animate-in fade-in duration-150"
                  >
                    <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
                    <span>{inputError}</span>
                  </p>
                )}

                {/* Quick-Test Sample Chips */}
                <div className="mt-3.5 pt-2">
                  <span className="text-[11px] font-bold text-slate-600 block mb-1.5">
                    Click to test sample dockets:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {SAMPLE_AWBS.map((sample) => (
                      <button
                        key={sample.awb}
                        type="button"
                        onClick={() => handleSelectSample(sample.awb)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-red-50 border border-slate-300 hover:border-red-400 text-[11px] font-mono text-slate-800 hover:text-red-700 transition-all shadow-2xs cursor-pointer active:scale-95"
                      >
                        <span className="font-sans font-semibold text-slate-600">{sample.carrierName}:</span>
                        <span className="font-bold">{sample.awb}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Isometric Shipment Tracking & Routing Model */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[360px] xs:max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] group">
                {/* Soft ambient glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-amber-500/10 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

                <Image
                  src="/assets/tracking-3d-model.webp"
                  alt="eCS World Wide Express 3D Isometric Consignment Tracking, Air Cargo and Road Linehaul Model"
                  width={1024}
                  height={576}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(15,23,42,0.12)] hover:scale-[1.02] transition-transform duration-300 pointer-events-auto"
                />

                {/* Micro Live Routing Status Ribbon */}
                <div className="mt-2.5 flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="font-bold text-slate-900">Direct Carrier Dispatch</span>
                  </div>
                  <span className="text-[11px] text-slate-600 font-semibold truncate">
                    Bhilwara Hub · 220+ Destinations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ACTIVE TRACKING RESULT & VERIFIED ROUTING (Appears upon Search)
          ========================================================================= */}
      {searchedAwb && (
        <section
          id="tracking-result-box"
          className="py-8 sm:py-12 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-3 duration-300"
        >
          <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
            {/* Action Feedback Notice */}
            {actionNotice && (
              <div
                role="status"
                aria-live="polite"
                className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-start gap-3 shadow-2xs animate-in fade-in"
              >
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                  {actionNotice}
                </p>
              </div>
            )}

            {/* Consignment Overview Banner */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:p-7 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consignment Reference Active</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopyAwb(searchedAwb)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Docket</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Monospace Reference Display & Detection Badge */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Entered Consignment Reference
                  </span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xl sm:text-3xl font-black font-mono text-slate-900 tracking-wider break-all">
                      {searchedAwb}
                    </span>
                    {detectedCarrier && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${detectedCarrier.badgeColor}`}>
                        Matched: {detectedCarrier.shortName}
                      </span>
                    )}
                  </div>
                </div>

                {detectedCarrier && (
                  <button
                    type="button"
                    onClick={() => handleCarrierAction(detectedCarrier)}
                    className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer shrink-0 min-h-[44px]"
                  >
                    {detectedCarrier.trackingMode === 'counter-whatsapp' ? (
                      <>
                        <MessageCircle className="w-4 h-4 text-white" />
                        <span>Verify on WhatsApp</span>
                      </>
                    ) : (
                      <>
                        <span>Track on {detectedCarrier.shortName} Portal</span>
                        <ExternalLink className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Instructions Tip */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-2.5 text-xs text-blue-900">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Direct Link Verification:</strong> Clicking any carrier below opens their official
                  tracking interface in a new window with your reference prefilled or copied to your clipboard.
                  Zero simulated delays or fake milestones.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          3. FULL COURIER PARTNER NETWORK DIRECTORY ("Link Pate Ka" Grid)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <Truck className="w-3.5 h-3.5 text-red-700" />
                <span>OFFICIAL CARRIER NETWORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A]">
                Select Your Booking Carrier to Track Directly
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Every carrier below is an authenticated logistics linehaul or channel operator connected
                with our Bhilwara operations center:
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'all'
                    ? 'bg-[#DC2626] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                All Carriers ({VERIFIED_TRACKING_CARRIERS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('road')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'road'
                    ? 'bg-[#DC2626] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Road Linehauls
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('air')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'air'
                    ? 'bg-[#DC2626] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Air &amp; Global
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('counter')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'counter'
                    ? 'bg-[#DC2626] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Bhilwara Desk
              </button>
            </div>
          </div>

          {/* Cards Grid: 1 col on mobile, 2 col on tablet, 3-4 col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredCarriers.map((carrier) => {
              const isMatched = searchedAwb && detectedCarrier?.id === carrier.id;
              return (
                <div
                  key={carrier.id}
                  className={`p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between space-y-4 group ${
                    isMatched
                      ? 'border-red-400 ring-2 ring-red-400/20 shadow-md bg-red-50/10'
                      : 'border-slate-200 hover:border-red-300 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-1.5 min-h-[26px]">
                      <span className="text-[10px] font-mono font-semibold uppercase text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md leading-normal">
                        {carrier.categoryLabel}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${carrier.badgeColor} shrink-0`}>
                        {carrier.badge}
                      </span>
                    </div>

                    <div className="h-12 flex items-center">
                      <Image
                        src={carrier.logoAsset}
                        alt={`${carrier.name} logo`}
                        width={120}
                        height={40}
                        className="max-h-9 w-auto object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#DC2626] transition-colors leading-snug">
                        {carrier.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1.5">
                        {carrier.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] text-slate-600 font-mono block font-semibold">
                        Docket Prefixes: {carrier.prefixHints.join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <button
                      type="button"
                      onClick={() => handleCarrierAction(carrier)}
                      className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-4 rounded-xl shadow-2xs transition-all active:scale-95 cursor-pointer min-h-[40px] ${
                        carrier.trackingMode === 'counter-whatsapp'
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          : 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
                      }`}
                    >
                      {carrier.trackingMode === 'counter-whatsapp' ? (
                        <>
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                          <span>WhatsApp Desk</span>
                        </>
                      ) : (
                        <>
                          <span>Track on {carrier.shortName}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-600 text-center font-medium leading-tight">
                      {carrier.trackingTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3B. BHILWARA BOOKING DOCKET & RECEIPT GUIDE
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-red-700" />
              <span>BOOKING RECEIPT ANATOMY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A]">
              How to Read Your Physical Counter Docket
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              When booking at our Bhilwara dispatch counter, your printed pink/white slip contains all
              the reference numbers needed for instant tracking:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Diagrammatic Slip Graphic */}
            <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-red-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Physical Slip Schematic
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">
                  Counter Docket
                </span>
              </div>

              {/* Diagrammatic Slip Graphic */}
              <div className="rounded-2xl border-2 border-dashed border-red-200 bg-red-50/50 p-4 sm:p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-red-200/70 pb-3">
                  <div>
                    <span className="font-sans font-black text-slate-900 block text-xs sm:text-sm">
                      eCS WORLD WIDE EXPRESS
                    </span>
                    <span className="font-sans text-[10px] text-slate-600 font-medium">
                      Economic Courier · Bhilwara Central Hub
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-600 block font-sans font-semibold">
                      ① DOCKET / AWB NO.
                    </span>
                    <span className="font-bold text-red-700 text-xs sm:text-sm bg-white px-2.5 py-1 rounded-md border border-red-200 inline-block shadow-2xs">
                      {searchedAwb || 'BD908234123'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-700 font-sans">
                  <div>
                    <span className="text-[10px] text-slate-600 block font-semibold">② ORIGIN</span>
                    <span className="font-bold text-slate-900">Bhilwara Hub</span>
                    <span className="text-[10px] text-slate-600 block font-medium">
                      Opp. New Cloth Market
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-600 block font-semibold">
                      ③ CARRIER LINEHAUL
                    </span>
                    <span className="font-bold text-slate-900">
                      {detectedCarrier?.name || 'Assigned Partner Linehaul'}
                    </span>
                    <span className="text-[10px] text-slate-600 block font-medium">
                      Direct Highway / Air Dispatch
                    </span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-red-200/60 flex items-center justify-between text-[10px] font-sans text-slate-600 font-medium">
                  <span>* Retain original slip for proof of delivery</span>
                  <span className="text-emerald-800 font-bold">✓ Verified Origin</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-red-700 font-bold">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Walk-in Counter: Opposite New Cloth Market, Bhilwara</span>
              </div>
            </div>

            {/* Right: 3 Step Guidance Cards */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Locate Your Docket Reference
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  Look at the top-right corner of your booking slip for the printed 8-11 digit numeric or
                  alphanumeric barcode reference.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Identify the Assigned Carrier Linehaul
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  Your slip denotes whether the consignment moves via Blue Dart, Akash Ganga, AFEX, UPS,
                  or our internal Bhilwara highway corridor linehaul.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Direct Deep Link or WhatsApp Status
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  Enter your number above to jump straight to the verified carrier portal with your AWB
                  prefilled, or message our Bhilwara desk on WhatsApp for immediate offline verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BHILWARA DISPATCH COUNTER ASSISTANCE (Offline / Live Support)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-[11px] font-bold tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>BHILWARA DISPATCH COUNTER SUPPORT</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                  Cannot find your docket, or need proof of delivery?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                  Our operations team manages physical manifests directly opposite New Cloth Market. Call
                  or message us with your booking date, recipient city, or slip photo for direct ledger lookup.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building2 className="w-4 h-4 text-red-400" />
                    <span>Opp. New Cloth Market, Bhilwara</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Mon - Sat: 10:00 AM – 8:30 PM</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={`https://wa.me/918955144444?text=${encodeURIComponent(
                    `Hello Economic Courier Bhilwara, please assist with consignment status. Reference: ${searchedAwb || trackingInput || 'Docket Inquiry'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp Inquiry Desk</span>
                </a>

                <a
                  href="tel:+918955144444"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call +91 89551 44444</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CARRIER INTEGRATION COMPLIANCE & TRANSPARENCY
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F1F5F9] border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center border border-red-100">
                <ShieldCheck className="w-5 h-5 text-red-700" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                  AUTHENTIC DATA ARCHITECTURE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  Zero Simulated Data · Direct Carrier Transparency
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              In strict accordance with client guidelines, this website never simulates artificial delivery
              progress bars, fake GPS pins, or mock status updates.
            </p>

            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-1.5" />
                <span>
                  <strong>Genuine Carrier Endpoints:</strong> All tracking requests redirect directly to
                  the official infrastructure of the carrier designated on your physical booking slip.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-1.5" />
                <span>
                  <strong>Zero Data Interception:</strong> Entered reference numbers are passed securely
                  via your local browser session without unauthorized third-party caching.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0 mt-1.5" />
                <span>
                  <strong>Physical Ledger Verification:</strong> Local highway linehauls are verified
                  directly against our Bhilwara dispatch records.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TRACKING FAQ ACCORDION
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/90 text-red-700 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-red-700" />
              <span>HELP &amp; KNOWLEDGE BASE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Frequently Asked <span className="text-[#DC2626]">Tracking Questions</span>
            </h2>

            <div className="w-12 h-1 bg-[#DC2626] rounded-full mx-auto mt-2 mb-2" />

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed">
              Common questions answered for commercial consignments, textile swatches, and retail documents.
            </p>
          </div>

          {/* Centered Bold Accordion List */}
          <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-3 sm:space-y-3.5">
            {TRACKING_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border border-red-200/90 shadow-sm ring-1 ring-red-100'
                      : 'bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 font-extrabold text-xs sm:text-sm lg:text-base text-slate-900 hover:text-[#DC2626] transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 pr-2">
                      <span className="w-7 h-7 rounded-xl bg-red-50 text-[#DC2626] text-[11px] font-black flex items-center justify-center shrink-0 border border-red-100 group-hover:scale-105 transition-transform">
                        0{idx + 1}
                      </span>
                      <span className={`font-extrabold leading-snug ${isOpen ? 'text-[#DC2626]' : 'text-slate-900'}`}>
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-red-50 text-[#DC2626]'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#DC2626]'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal pl-5 sm:pl-14">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. RELATED LOGISTICS CAPABILITIES
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-6 sm:mb-8 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-700 block mb-1">
              EXPLORE LOGISTICS SERVICES
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
              Explore Our Logistics Solutions
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
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Domestic express, international cargo, and commercial document forwarding.
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
                  Textile Logistics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Dedicated fabric swatch packaging and dispatch for Bhilwara mills.
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
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Commercial accounts, regular bulk linehauls, and trade support.
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
                  Dispatch Desk
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Hub location, counter hours, and channel inquiry support.
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
