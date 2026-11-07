'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  FileText,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Package,
  Scissors,
  PhoneCall,
  Clock,
  MessageCircle,
  RotateCcw,
  CheckCircle2,
  Truck,
} from 'lucide-react';
import { RelatedServicesGrid } from '@/components/common/RelatedServicesGrid';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  CustomerInquiryFormData,
  InquiryFieldErrors,
  InquirySubmissionResult,
  InquirySubmissionStatus,
  ServiceTypeOption,
} from '@/types/inquiry';
import {
  validateInquiryForm,
  formatServiceType,
  formatWeightBracket,
} from '@/lib/inquiry';

export function ContactView() {
  const [formData, setFormData] = useState<CustomerInquiryFormData>({
    customerName: '',
    contact: '',
    serviceType: 'textiles',
    originCity: 'Bhilwara, Rajasthan',
    destination: '',
    approxWeight: '0.5-2kg',
    message: '',
    consentGiven: false,
  });

  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<InquirySubmissionStatus>('idle');
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync service category if passed in URL query param (e.g., /contact?service=business#inquiry-form)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service')?.toLowerCase();
      if (serviceParam) {
        if (['textiles', 'domestic', 'international', 'documents'].includes(serviceParam)) {
          setFormData((prev) => ({ ...prev, serviceType: serviceParam as ServiceTypeOption }));
        } else if (serviceParam === 'business' || serviceParam === 'other') {
          setFormData((prev) => ({ ...prev, serviceType: 'other' }));
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    field: keyof CustomerInquiryFormData,
    value: string | boolean
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

  const generateWhatsAppUrl = (data: CustomerInquiryFormData) => {
    const lines = [
      `*NEW COURIER INQUIRY - ECONOMIC COURIER BHILWARA*`,
      `---------------------------------------`,
      `*Sender:* ${data.customerName.trim()}`,
      `*Contact:* ${data.contact.trim()}`,
      `*Service:* ${formatServiceType(data.serviceType)}`,
      `*Origin:* ${data.originCity?.trim() || 'Bhilwara, Rajasthan'}`,
      `*Destination:* ${data.destination?.trim() || 'Not specified'}`,
      `*Approx Weight:* ${formatWeightBracket(data.approxWeight)}`,
      `*Details:* ${data.message.trim()}`,
      `---------------------------------------`,
      `*User Consent:* Confirmed for WhatsApp & Phone rate quotation`,
    ];
    return `https://wa.me/918955144444?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
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
    setStatus('success');
    setSubmissionResult({
      status: 'success',
      message: 'Inquiry successfully formatted! Ready to dispatch directly to Bhilwara Hub via WhatsApp.',
      submittedAt: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      payload: formData,
      destinationType: 'whatsapp',
    });
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
      `=== ECONOMIC COURIER & ECS BHILWARA INQUIRY ===`,
      `Sender Name: ${p.customerName}`,
      `Contact Phone: ${p.contact}`,
      `Service: ${formatServiceType(p.serviceType)}`,
      `Origin: ${p.originCity || 'Bhilwara, Rajasthan'}`,
      `Destination: ${p.destination || 'Not specified'}`,
      `Approx Weight: ${formatWeightBracket(p.approxWeight)}`,
      `Details: ${p.message}`,
      `User Consent: Confirmed for WhatsApp & Phone updates`,
      `Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* =========================================================================
          1. CONTACT HERO & BREADCRUMBS (55/45 BALANCED EDITORIAL SPLIT)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle background ambient grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6 lg:space-y-8">
          {/* Top Breadcrumb & Hub Location Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#DC2626] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold" aria-current="page">
                Contact Us
              </span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · OPP. NEW CLOTH MARKET</span>
            </div>
          </div>

          {/* 55/45 Balanced Split Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Column — 55% Content with Refined Typography Hierarchy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span>DIRECT INQUIRY &amp; HUB BOOKING DESK</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-[-0.03em] text-[#1E3A8A] leading-[1.12]">
                Humse <span className="text-[#DC2626]">Sampark Karein.</span>{' '}
                <span className="text-[#DC2626] block sm:inline mt-1 sm:mt-0">
                  Direct Bhilwara Hub Coordination.
                </span>
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                Economic Courier aur eCS World Wide Express Bhilwara Hub se direct connect kijiye.
                Walk-in parcel booking, daily doorstep pickup scheduling, textile swatch packing,
                aur urgent rate inquiries ke liye hamara booking counter hamesha ready hai.
              </p>

              {/* Supporting Dispatch Signals (Clean Editorial Pills) */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  Walk-in Booking Desk
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  Textile Swatches &amp; Parcels
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  Same-Day Pickup Coordination
                </span>
              </div>
            </div>

            {/* Right Column — 45% Distinctive Logistics Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-50/80 via-white to-red-50/30 border border-slate-200/90 p-5 sm:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] overflow-hidden">
                {/* SVG Logistics Curved Shipping Route & Coordinates Background */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 460 360"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="contactRouteGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#DC2626" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>

                  {/* Secondary dashed trajectory */}
                  <path
                    d="M 60 280 C 120 230, 220 270, 390 110"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                  />

                  {/* Main Primary Shipping Route Line */}
                  <path
                    d="M 50 250 C 120 130, 240 170, 410 70"
                    stroke="url(#contactRouteGrad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />

                  {/* Destination Gateway Marker */}
                  <circle cx="410" cy="70" r="4.5" fill="#0F172A" />
                  <circle cx="410" cy="70" r="10" stroke="#0F172A" strokeOpacity="0.15" strokeWidth="2" />
                </svg>

                {/* Top Corner: Prominent Elegant Bhilwara Hub Location Pin */}
                <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute -inset-1 rounded-full bg-red-500/20 animate-ping" />
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-[#DC2626] border border-red-200 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block">
                        ORIGIN HUB
                      </span>
                      <span className="text-xs font-black text-slate-900 block leading-tight">
                        Bhilwara · 311001
                      </span>
                    </div>
                  </div>

                  {/* Supporting Tamper-Evident Badge */}
                  <div className="hidden xs:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F172A] text-white text-[10px] font-bold tracking-wide shadow-xs">
                    <Package className="w-3 h-3 text-red-400" />
                    <span>eCS Verified Parcel</span>
                  </div>
                </div>

                {/* Central Object — Premium Parcel / Package Display */}
                <div className="relative z-10 flex items-center justify-center py-3 sm:py-5">
                  <div className="relative w-full max-w-[320px] sm:max-w-[360px] transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src="/assets/services/ecs-boxes-3d.webp"
                      alt="Economic Courier & eCS World Wide Express sealed parcel dispatch boxes with tracking barcode and tamper-evident tape"
                      width={440}
                      height={290}
                      priority
                      className="w-full h-auto object-contain drop-shadow-[0_16px_28px_rgba(15,23,42,0.12)]"
                    />
                  </div>
                </div>

                {/* Bottom Route & Dispatch Metadata Bar */}
                <div className="relative z-10 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                    <span className="truncate">Surat · Mumbai · Delhi · Global</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>Daily Linehauls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. 4 QUICK-ACTION DIRECT CHANNELS (REAL VERIFIED DATA)
          ========================================================================= */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Action 1: Direct Voice Call */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    DIRECT CALLING LINE
                  </span>
                  <h2 className="text-base font-extrabold text-[#1E3A8A]">
                    +91 89551 44444
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Instant booking inquiry, urgent pickup coordination, aur consignment status ke liye call karein.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href="tel:8955144444"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                >
                  <span>Call Desk Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Action 2: WhatsApp Desk */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 tracking-wider block mb-0.5">
                    WHATSAPP BOOKING DESK
                  </span>
                  <h2 className="text-base font-extrabold text-[#1E3A8A]">
                    +91 89551 44444
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Fast rate quotations, swatch photo sharing, aur doorstep parcel collection chat.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20want%20to%20inquire%20about%20a%20courier%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Action 3: Walk-In Hub Counter */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 tracking-wider block mb-0.5">
                    BHILWARA HUB LOCATION
                  </span>
                  <h2 className="text-base font-extrabold text-[#1E3A8A]">
                    Opp. New Cloth Market
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Railway Staff Quarter Area, Pur Road, Bhilwara 311001. Certified digital scale on site.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Action 4: Operating Hours */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5 text-slate-800" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider block mb-0.5">
                    OPERATIONAL TIMINGS
                  </span>
                  <h2 className="text-base font-extrabold text-[#1E3A8A]">
                    9:30 AM – 8:30 PM
                  </h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Monday to Saturday active booking desk. Sunday: Evening express linehaul dispatches.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Counter Active
                </span>
                <span className="text-[11px] text-slate-400">Mon–Sat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE SECTION: LOCATION & FACILITIES (LEFT) + INQUIRY FORM (RIGHT)
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ─────────────────────────────────────────────────────────────────
                LEFT COLUMN: Real Location Details & Counter Facilities
                ───────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 space-y-6">
              {/* Visual Location Card */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm space-y-4 p-5 sm:p-6">
                <div className="relative w-full rounded-xl overflow-hidden aspect-[16/10] bg-slate-900 group">
                  <Image
                    src="/assets/office/about-collage.webp"
                    alt="Economic Courier Bhilwara Hub Walk-In Booking Counter and Facility"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 inset-x-3 text-white flex items-center justify-between text-xs">
                    <span className="font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                      <span>Opp. New Cloth Market</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-300">Pur Road, Bhilwara</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-bold uppercase tracking-wider">
                      OFFICIAL PHYSICAL HUB
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#1E3A8A]">
                    Economic Courier &amp; eCS World Wide Express
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road, Bhilwara, Rajasthan 311001.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-xs"
                  >
                    <span>Get Driving Directions on Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                  </a>
                </div>
              </div>

              {/* 3 Dedicated Ground Support Counters */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] px-1">
                  GROUND LOGISTICS FACILITIES
                </h4>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <Scissors className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#1E3A8A]">
                      Textile Swatch &amp; Sample Desk
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Kapde ke sample cuts, shade cards, aur catalog books ke liye moisture-proof poly-wrap aur express buyer dispatch.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <Package className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#1E3A8A]">
                      Commercial Heavy Cartons &amp; Freight Desk
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Industrial spare parts, loom machine accessories, aur heavy cartons ke liye strapped packaging aur digital weight readout.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#1E3A8A]">
                      Legal, CA &amp; Confidential Document Desk
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Tenders, legal agreements, bank guarantees, aur GST dossiers ke liye tamper-evident security packaging.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-xs">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#1E3A8A]">
                      Follow On Instagram
                    </h4>
                    <p className="text-[11px] text-slate-600 font-normal">
                      @economiccourierbhilwara · Packaging &amp; sorting reels
                    </p>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
                >
                  Visit
                </a>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                RIGHT COLUMN: Upgraded Rate & Consignment Inquiry Form with User Consent
                ───────────────────────────────────────────────────────────────── */}
            <div id="inquiry-form" className="lg:col-span-7 scroll-mt-20">
              <div className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-wider uppercase mb-2">
                    <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>ONLINE INQUIRY &amp; RATE DESK</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight">
                    Rate &amp; Consignment <span className="text-[#DC2626]">Inquiry</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                    Apne parcel ki jankari share karein. Hamara Bhilwara desk transparent rates aur scheduled pickup timing confirm karega.
                  </p>
                </div>

                {/* FORM STATE: Submitted Successfully -> Instant Dispatch Options */}
                {status === 'success' && submissionResult ? (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="text-base font-extrabold text-emerald-900">
                            Inquiry Format Ho Gayi Hai!
                          </h4>
                          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                            Aapki consignment details ready hain. Niche diye gaye WhatsApp button par tap karke ise turant hamare Bhilwara Hub ko dispatch kijiye:
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-2xs">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <span className="text-xs font-mono font-bold uppercase text-slate-400">
                          Inquiry Summary
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {submissionResult.submittedAt}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Sender Name:</span>
                          <span className="text-slate-900 font-bold text-sm">
                            {submissionResult.payload?.customerName}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Contact Number:</span>
                          <span className="text-slate-900 font-bold text-sm">
                            {submissionResult.payload?.contact}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Service:</span>
                          <span className="text-slate-800 font-medium">
                            {formatServiceType(submissionResult.payload?.serviceType)}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Route:</span>
                          <span className="text-slate-800 font-medium">
                            {submissionResult.payload?.originCity} &rarr; {submissionResult.payload?.destination || 'Destination'}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">Approx Weight:</span>
                          <span className="text-slate-800 font-medium">
                            {formatWeightBracket(submissionResult.payload?.approxWeight)}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold block mb-0.5">User Consent:</span>
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>Confirmed</span>
                          </span>
                        </div>

                        <div className="sm:col-span-2 pt-2 border-t border-slate-100">
                          <span className="text-slate-400 font-semibold block mb-0.5">Requirements / Message:</span>
                          <p className="text-slate-700 text-xs leading-relaxed italic">
                            &quot;{submissionResult.payload?.message}&quot;
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-1">
                      <a
                        href={generateWhatsAppUrl(submissionResult.payload!)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95"
                      >
                        <MessageCircle className="w-5 h-5 text-white" />
                        <span>Send Details on WhatsApp to Bhilwara Desk</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </a>

                      <div className="flex flex-col sm:flex-row gap-2.5">
                        <a
                          href="tel:8955144444"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold py-3 px-4 rounded-xl shadow-2xs transition-all"
                        >
                          <PhoneCall className="w-4 h-4 text-[#DC2626]" />
                          <span>Call Desk (+91 89551 44444)</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyInquiry}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold py-3 px-4 rounded-xl shadow-2xs transition-all cursor-pointer"
                        >
                          {copyStatus === 'copied' ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-600">Copied to Clipboard!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-slate-500" />
                              <span>Copy Inquiry Summary</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-center pt-2">
                        <button
                          type="button"
                          onClick={handleResetToEdit}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Edit Details or Submit Another Inquiry</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* THE ACTIVE INQUIRY FORM */
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Customer Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-inquiry-customerName"
                        className="text-xs font-bold text-slate-700 block"
                      >
                        Aapka Naam / Business Name <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        ref={nameInputRef}
                        id="contact-inquiry-customerName"
                        type="text"
                        required
                        value={formData.customerName}
                        onChange={(e) => handleChange('customerName', e.target.value)}
                        placeholder="e.g. Rajesh Sharma / Shree Shyam Fabrics"
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border transition-all outline-hidden focus:ring-2 ${
                          errors.customerName
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-200 focus:border-[#DC2626] focus:ring-red-100'
                        }`}
                      />
                      {errors.customerName && (
                        <p className="text-[11px] text-[#DC2626] font-medium">{errors.customerName}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-inquiry-contact"
                        className="text-xs font-bold text-slate-700 block"
                      >
                        Mobile Number / WhatsApp <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        id="contact-inquiry-contact"
                        type="tel"
                        required
                        value={formData.contact}
                        onChange={(e) => handleChange('contact', e.target.value)}
                        placeholder="e.g. 98290XXXXX or 8955144444"
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border transition-all outline-hidden focus:ring-2 ${
                          errors.contact
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-200 focus:border-[#DC2626] focus:ring-red-100'
                        }`}
                      />
                      {errors.contact && (
                        <p className="text-[11px] text-[#DC2626] font-medium">{errors.contact}</p>
                      )}
                    </div>

                    {/* Service Category */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-inquiry-serviceType"
                        className="text-xs font-bold text-slate-700 block"
                      >
                        Service Category <span className="text-[#DC2626]">*</span>
                      </label>
                      <select
                        id="contact-inquiry-serviceType"
                        value={formData.serviceType}
                        onChange={(e) => handleChange('serviceType', e.target.value)}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-100 transition-all outline-hidden"
                      >
                        <option value="textiles">Bhilwara Textile &amp; Fabric Swatch Samples</option>
                        <option value="domestic">Domestic Express Courier (All India)</option>
                        <option value="international">International Air Cargo (eCS Worldwide)</option>
                        <option value="documents">Confidential Documents, Tenders &amp; CA Files</option>
                        <option value="other">B2B Commercial Freight &amp; Machinery Parts</option>
                      </select>
                    </div>

                    {/* Origin & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-inquiry-originCity"
                          className="text-xs font-bold text-slate-700 block"
                        >
                          Origin City
                        </label>
                        <input
                          id="contact-inquiry-originCity"
                          type="text"
                          value={formData.originCity}
                          onChange={(e) => handleChange('originCity', e.target.value)}
                          placeholder="Bhilwara, Rajasthan"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-100 transition-all outline-hidden"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-inquiry-destination"
                          className="text-xs font-bold text-slate-700 block"
                        >
                          Destination City
                        </label>
                        <input
                          id="contact-inquiry-destination"
                          type="text"
                          value={formData.destination}
                          onChange={(e) => handleChange('destination', e.target.value)}
                          placeholder="e.g. Surat, Mumbai, Delhi, Ahmedabad"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-100 transition-all outline-hidden"
                        />
                      </div>
                    </div>

                    {/* Approx Weight */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-inquiry-approxWeight"
                        className="text-xs font-bold text-slate-700 block"
                      >
                        Estimated Weight Bracket
                      </label>
                      <select
                        id="contact-inquiry-approxWeight"
                        value={formData.approxWeight}
                        onChange={(e) => handleChange('approxWeight', e.target.value)}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-100 transition-all outline-hidden"
                      >
                        <option value="under-0.5kg">Under 0.5 kg (Letters, Docs &amp; Compact Swatches)</option>
                        <option value="0.5-2kg">0.5–2 kg (Standard Fabric Sample Folders)</option>
                        <option value="2-5kg">2–5 kg (Medium Box / Fabric Cut Bundles)</option>
                        <option value="5kg-plus">5+ kg (Commercial Cartons &amp; Heavy Parcels)</option>
                        <option value="commercial-freight">Commercial Freight (Bulk Mill Cargo)</option>
                      </select>
                    </div>

                    {/* Message / Details */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-inquiry-message"
                        className="text-xs font-bold text-slate-700 block"
                      >
                        Shipment Requirements / Message <span className="text-[#DC2626]">*</span>
                      </label>
                      <textarea
                        id="contact-inquiry-message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="e.g. Suiting kapde ke 4 sample folders hain, kal morning tak Surat delivery karwani hai. Doorstep pickup Pur Road se chahiye."
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border transition-all outline-hidden focus:ring-2 resize-none ${
                          errors.message
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-200 focus:border-[#DC2626] focus:ring-red-100'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-[#DC2626] font-medium">{errors.message}</p>
                      )}
                    </div>

                    {/* ─────────────────────────────────────────────────────────────
                        USER CONSENT CHECKBOX (MANDATORY REQUIREMENT)
                        ───────────────────────────────────────────────────────────── */}
                    <div className="pt-2">
                      <div
                        className={`p-3.5 rounded-xl border transition-all ${
                          errors.consentGiven
                            ? 'bg-red-50/70 border-red-300'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <label
                          htmlFor="contact-inquiry-consentGiven"
                          className="flex items-start gap-3 cursor-pointer select-none"
                        >
                          <input
                            id="contact-inquiry-consentGiven"
                            type="checkbox"
                            checked={formData.consentGiven}
                            onChange={(e) => handleChange('consentGiven', e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded text-[#DC2626] border-slate-300 focus:ring-[#DC2626] accent-[#DC2626] cursor-pointer"
                          />
                          <span className="text-xs text-slate-700 leading-relaxed font-normal">
                            Main Economic Courier Bhilwara ko WhatsApp/Phone par courier rate quotes,
                            doorstep pickup coordination, aur consignment updates bhejne ke liye sahmat hoon.{' '}
                            <span className="font-semibold text-slate-900">
                              (I agree to receive rate quotation &amp; shipment updates via WhatsApp/Phone)
                            </span>
                          </span>
                        </label>
                      </div>
                      {errors.consentGiven && (
                        <p className="text-[11px] text-[#DC2626] font-semibold mt-1 px-1">
                          {errors.consentGiven}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Submit Inquiry &amp; Dispatch to WhatsApp</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                      <p className="text-[11px] text-slate-500 text-center mt-2">
                        * Submission par aapki inquiry pre-formatted WhatsApp chat ke roop me instant open hogi.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WALK-IN VISITOR FAQ / COMMON QUESTIONS
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              WALK-IN &amp; BOOKING GUIDELINES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight">
              Aksar Pooche Jane Wale <span className="text-[#DC2626]">Sawal (FAQ)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bhilwara counter par parcel lane ya doorstep pickup se pehle zaroori baatein:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* Q1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-[#DC2626] text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                <span>PACKAGING MATERIALS ON COUNTER</span>
              </div>
              <h4 className="text-base font-extrabold text-[#1E3A8A]">
                Counter par aane par kya packing material wahi mil jayega?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Haan! Hamare booking counter par textile shade cards aur fabric cuts ke liye waterproof poly-bags,
                bubble wrap, reinforced adhesive tape, aur corrugated boxes desk par available hain.
              </p>
            </div>

            {/* Q2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-[#DC2626] text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                <span>DOORSTEP PICKUP COVERAGE</span>
              </div>
              <h4 className="text-base font-extrabold text-[#1E3A8A]">
                Doorstep pickup Bhilwara me kahan-kahan available hai?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Pur Road, New Cloth Market sector, RIICO Industrial Areas (Phase 1, 2 &amp; Extension),
                aur central Bhilwara commercial markets me daily morning aur evening scheduled collection hoti hai.
              </p>
            </div>

            {/* Q3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-[#DC2626] text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                <span>RATE CALCULATION METHOD</span>
              </div>
              <h4 className="text-base font-extrabold text-[#1E3A8A]">
                Rate calculation kaise hoti hai?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Consignment ke actual weight ya volumetric size, destination pincode, aur service type
                (Air Express ya Surface Linehaul) ke hisab se computerized digital scale par transparent rates bante hain.
              </p>
            </div>

            {/* Q4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-[#DC2626] text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                <span>DELIVERY TIMELINES</span>
              </div>
              <h4 className="text-base font-extrabold text-[#1E3A8A]">
                Textile sample packets kitne time me outstation buyer tak pahunchte hain?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Surat aur Ahmedabad ke liye next-day morning delivery; Delhi NCR, Jaipur aur Mumbai
                priority express slots me daily scheduled road/air dispatch se connect hote hain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. RELATED LOGISTICS LINKS
          ========================================================================= */}
      <RelatedServicesGrid currentPage="contact" title="Related Services & Tools" />
    </div>
  );
}

export default ContactView;
