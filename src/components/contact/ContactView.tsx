'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  FileText,
  Send,
  Loader2,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  ShieldAlert,
  ExternalLink,
  Package,
  Globe,
  Scissors,
  Building2,
  PhoneCall,
  Clock,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  CustomerInquiryFormData,
  InquiryFieldErrors,
  InquirySubmissionResult,
  InquirySubmissionStatus,
} from '@/types/inquiry';
import { validateInquiryForm, submitCustomerInquiry } from '@/lib/inquiry';

function formatServiceType(type?: string): string {
  switch (type) {
    case 'domestic':
      return 'Domestic Express Courier (All India)';
    case 'international':
      return 'International Air Cargo (eCS Worldwide Express)';
    case 'documents':
      return 'Documents & Confidential Parcels';
    case 'textiles':
      return 'Bhilwara Textile / Fabric Swatch Samples';
    case 'other':
      return 'General Logistics & Rate Inquiry';
    default:
      return type || 'General Inquiry';
  }
}

function formatWeightBracket(weight?: string): string {
  switch (weight) {
    case 'under-0.5kg':
      return 'Under 0.5 kg (Letters, Docs & Packets)';
    case '0.5-2kg':
      return '0.5–2 kg (Standard Parcel & Swatches)';
    case '2-5kg':
      return '2–5 kg (Medium Box / Fabric Bundles)';
    case '5kg-plus':
      return '5+ kg (Heavy Parcels)';
    case 'commercial-freight':
      return 'Commercial Freight (B2B Cargo & Bulk Textiles)';
    default:
      return weight || 'Not specified';
  }
}

export function ContactView() {
  const [formData, setFormData] = useState<CustomerInquiryFormData>({
    customerName: '',
    contact: '',
    serviceType: '',
    originCity: 'Bhilwara, Rajasthan',
    destination: '',
    approxWeight: '',
    message: '',
  });

  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<InquirySubmissionStatus>('idle');
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    field: keyof CustomerInquiryFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const validationErrors = validateInquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`contact-inquiry-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const result = await submitCustomerInquiry(formData);
      setSubmissionResult(result);
      setStatus(result.status);
    } catch {
      setStatus('error');
      setErrors({
        general: 'An unexpected error occurred while processing your inquiry.',
      });
    }
  };

  const handleResetToEdit = () => {
    setStatus('idle');
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 50);
  };

  const handleCopyInquiry = async () => {
    if (!submissionResult?.payload) return;
    const p = submissionResult.payload;
    const text = [
      `=== ECONOMIC COURIER INQUIRY ===`,
      `Customer: ${p.customerName}`,
      `Contact: ${p.contact}`,
      `Service: ${formatServiceType(p.serviceType)}`,
      `Origin: ${p.originCity || 'Bhilwara, Rajasthan'}`,
      `Destination: ${p.destination || 'Not specified'}`,
      `Approx Weight: ${formatWeightBracket(p.approxWeight)}`,
      `Details: ${p.message}`,
      `Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 3000);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 3000);
    }
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. CONTACT HERO & BREADCRUMBS
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 bg-gradient-to-b from-white via-slate-50 to-[#F0F5FA] border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Location Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs font-medium text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold" aria-current="page">
                Contact
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-[11px] font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · RAJASTHAN</span>
            </div>
          </div>

          {/* Headline & Editorial Context */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span>DIRECT INQUIRY &amp; HUB DESK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#0F172A] leading-[1.08]">
              Direct communication.{' '}
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                Ground-level support.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal pt-1">
              Connect with Economic Courier and eCS World Wide Express in Bhilwara. Whether
              arranging an urgent textile swatch delivery to primary garment hubs, dispatching
              trade documents, or planning worldwide air cargo.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. AUTHENTIC CONTACT INFORMATION & CHANNEL STATUS
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
              Contact Channels &amp; Verification Status
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
              In accordance with our strict transparency policy, all contact channels clearly state
              their operational and client-confirmation status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Physical Booking Counter */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100">
                  <Building2 className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Physical Presence
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                    Bhilwara Booking Counter
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Economic Courier & eCS Bhilwara Hub, Rajasthan 311001. Walk-in
                  consignments accepted with commercial digital scale readout.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Bhilwara Facility
                </span>
              </div>
            </div>

            {/* Card 2: Direct Phone Desk */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <PhoneCall className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Telephone Calling Desk
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                    Direct Voice Desk
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct calling line is currently pending business owner authorization. Live
                  click-to-call activates immediately upon client validation.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  Pending Client Confirmation
                </span>
              </div>
            </div>

            {/* Card 3: WhatsApp Business Channel */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <FileText className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Messaging &amp; Quotes
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                    WhatsApp Business Channel
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated rate calculations and dispatch coordination over WhatsApp will connect
                  following business phone confirmation.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  Pending Client Activation
                </span>
              </div>
            </div>

            {/* Card 4: Operating Hours */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Schedule &amp; Cutoffs
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                    Operating Hours — Pending Client Confirmation
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Please confirm current booking-counter hours and dispatch cutoffs with the business.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  Pending Client Confirmation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. LOCATION & DIRECTIONS (Bhilwara Context & Visual Map)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F0F7FD] border-b border-[#E0EDF8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Map Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-lg aspect-[16/10] group">
                <Image
                  src="/assets/office/map-graphic.jpg"
                  alt="Economic Courier Bhilwara hub location on Google Maps"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/90 text-white border border-white/20 text-[10px] font-mono font-bold tracking-wide uppercase">
                    BHILWARA HUB LOCATION
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-medium text-slate-200">
                    Bhilwara urban and textile mill logistics access
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-800 text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>LOCATION CONTEXT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.035em] text-[#0F172A] leading-tight">
                Economic Courier & eCS Office Location, Bhilwara
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our office counter facility is located in Bhilwara, Rajasthan,
                positioning us near the city’s major textile weaving mills, fabric trading houses, and
                commercial markets.
              </p>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 text-xs sm:text-sm shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-slate-800 font-semibold">
                      Reference Map Marker Disclosure:
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      The Google Maps reference marker below was supplied as a preliminary location pin
                      and awaits verified business listing validation by the owner.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE INQUIRY FORM (Embedded on Page with Full Validation)
          ========================================================================= */}
      <section id="inquiry-form" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>ONLINE INQUIRY DESK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Prepare Rate &amp; Consignment Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Provide your shipment details below. In this prototype preview, your submission is
              validated accessibly and formatted for review without sending false confirmation claims.
            </p>
          </div>

          {/* Form Container */}
          <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm p-6 sm:p-10">
            {/* SUBMISSION RESULT STATE: Prototype-Safe Notice */}
            {status === 'unconfigured' && submissionResult ? (
              <div className="space-y-6" role="status" aria-live="polite">
                {/* Status Notice Banner */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="text-base font-extrabold text-amber-950">
                        Inquiry Prepared Successfully (Prototype Review Mode)
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                        {submissionResult.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Formatted Inquiry Summary */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400">
                      Summary of Consignment Inquiry
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {submissionResult.submittedAt}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Customer Name:</span>
                      <span className="text-slate-900 font-bold text-sm">
                        {submissionResult.payload?.customerName}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Contact Detail:</span>
                      <span className="text-slate-900 font-bold text-sm">
                        {submissionResult.payload?.contact}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Service Category:</span>
                      <span className="text-slate-800 font-medium">
                        {formatServiceType(submissionResult.payload?.serviceType)}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Weight Bracket:</span>
                      <span className="text-slate-800 font-medium">
                        {formatWeightBracket(submissionResult.payload?.approxWeight)}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Origin:</span>
                      <span className="text-slate-800 font-medium">
                        {submissionResult.payload?.originCity || 'Bhilwara, Rajasthan'}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Destination:</span>
                      <span className="text-slate-800 font-medium">
                        {submissionResult.payload?.destination || 'Not specified'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-slate-400 font-semibold block mb-1 text-xs">
                      Shipment / Trade Details:
                    </span>
                    <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-150 leading-relaxed">
                      {submissionResult.payload?.message}
                    </p>
                  </div>
                </div>

                {/* Actions: Copy or Edit */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleResetToEdit}
                    className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    &larr; Edit or Prepare Another Inquiry
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    {copyStatus === 'copied' ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-white" />
                        <span>Copy Inquiry Summary</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* ACTIVE FORM STATE */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* General Error Banner */}
                {errors.general && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-start gap-2"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errors.general}</span>
                  </div>
                )}

                {/* Row 1: Name and Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-inquiry-customerName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Your Name / Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="contact-inquiry-customerName"
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => handleChange('customerName', e.target.value)}
                      placeholder="e.g. Ramesh Kumar / Shree Fabrics"
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                        errors.customerName
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {errors.customerName && (
                      <p className="text-red-600 text-xs mt-1 font-medium" role="alert">
                        {errors.customerName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-inquiry-contact"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Phone or Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-inquiry-contact"
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => handleChange('contact', e.target.value)}
                      placeholder="e.g. 98290XXXXX or name@domain.com"
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                        errors.contact
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {errors.contact && (
                      <p className="text-red-600 text-xs mt-1 font-medium" role="alert">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Service Category & Weight Bracket */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-inquiry-serviceType"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Service Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-inquiry-serviceType"
                      required
                      value={formData.serviceType}
                      onChange={(e) => handleChange('serviceType', e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                        errors.serviceType
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <option value="">Select a logistics service...</option>
                      <option value="domestic">Domestic Express Courier (All India)</option>
                      <option value="international">International Air Cargo (eCS Worldwide)</option>
                      <option value="documents">Documents &amp; Confidential Parcels</option>
                      <option value="textiles">Bhilwara Textile / Fabric Swatch Samples</option>
                      <option value="other">General Logistics &amp; Rate Inquiry</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-600 text-xs mt-1 font-medium" role="alert">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-inquiry-approxWeight"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Approximate Weight Bracket
                    </label>
                    <select
                      id="contact-inquiry-approxWeight"
                      value={formData.approxWeight || ''}
                      onChange={(e) => handleChange('approxWeight', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    >
                      <option value="">Select weight bracket (optional)...</option>
                      <option value="under-0.5kg">Under 0.5 kg (Letters, Docs &amp; Packets)</option>
                      <option value="0.5-2kg">0.5–2 kg (Standard Parcel &amp; Swatches)</option>
                      <option value="2-5kg">2–5 kg (Medium Box / Fabric Bundles)</option>
                      <option value="5kg-plus">5+ kg (Heavy Parcels)</option>
                      <option value="commercial-freight">Commercial Freight (Bulk Textiles)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Origin and Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-inquiry-originCity"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Origin City
                    </label>
                    <input
                      id="contact-inquiry-originCity"
                      type="text"
                      value={formData.originCity}
                      onChange={(e) => handleChange('originCity', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-inquiry-destination"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Destination City / Country
                    </label>
                    <input
                      id="contact-inquiry-destination"
                      type="text"
                      value={formData.destination || ''}
                      onChange={(e) => handleChange('destination', e.target.value)}
                      placeholder="e.g. Mumbai, Surat, Dubai, London"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    />
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label
                    htmlFor="contact-inquiry-message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Shipment / Trade Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-inquiry-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Describe your parcel dimensions, fabric sample books, pickup preference, or delivery timeline..."
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 resize-y ${
                      errors.message
                        ? 'border-red-500 ring-1 ring-red-500'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-xs mt-1 font-medium" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action & Safeguard Note */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 font-normal">
                    <span className="font-semibold text-slate-700">Prototype Safeguard:</span> Validates
                    inputs and generates formatted summary without false dispatch claims.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Validating Details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Consignment Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HELPFUL SERVICE & ARCHIVE LINKS (Only Real Existing Routes)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
              Explore Our Logistics Capabilities
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
              Helpful Express &amp; Trade Links
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Browse detailed service offerings, local textile handling, and authentic facility moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Link 1: Services Page */}
            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Express Courier Services
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Domestic priority delivery, international cargo, and document forwarding.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Link 2: Textile Specialization Section */}
            <Link
              href="/services#textiles"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Textile Swatch Logistics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Engineered packaging and rapid delivery for Bhilwara fabric swatches.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Textile Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Link 3: Operations Gallery */}
            <Link
              href="/gallery"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Operations Archive &amp; Reels
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Authentic video reels and photography from our Bhilwara hub.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>View Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Link 4: About Us */}
            <Link
              href="/about"
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  About Our Hub &amp; Network
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Dual identity distinction: Economic Courier and eCS World Wide Express.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] pt-1">
                <span>Read About Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CLOSING CTA (Restrained & Branded)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#09132B] via-[#0F1E3D] to-[#070E20] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Have a high-volume or recurring trade requirement?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Our Bhilwara team works directly with local textile mills, yarn traders, and retail
              businesses to structure dependable scheduled dispatches.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleScrollToForm}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <span>Fill Inquiry Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all active:scale-95"
              >
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactView;
