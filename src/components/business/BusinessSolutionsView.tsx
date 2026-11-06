'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Briefcase,
  Layers,
  FileText,
  Truck,
  Globe,
  ArrowRight,
  MapPin,
  Package,
  Scissors,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Receipt,
  Headphones,
  Camera,
  Search,
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
          1. HERO SECTION (Clear, High-Impact & Direct for Bhilwara Businesses)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-10 sm:pb-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Breadcrumbs & Hub Location Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#DC2626] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold" aria-current="page">
                Business Solutions
              </span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · OPP. NEW CLOTH MARKET</span>
            </div>
          </div>

          {/* Hero Content (Clean, Luminous, Pure Text & Action • Zero Dark Cards) */}
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-wider uppercase">
              <Briefcase className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>B2B &amp; CORPORATE COURIER ACCOUNTS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Bhilwara Ke Businesses &amp; Factories Ke Liye{' '}
              <span className="text-[#DC2626]">Dedicated Courier Solutions.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              Rozana counter aane aur cash payment ki jhanjhat khatam. Textile weaving mills,
              garment units, machinery traders, aur corporate offices ke liye daily scheduled
              doorstep pickup, priority commercial trade corridors, aur monthly consolidated GST billing.
            </p>

            {/* Quick Feature Badges (Balanced 4 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily Factory/Office Pickup</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <Receipt className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Monthly Consolidated GST Bill</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <Truck className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Priority Linehauls (Surat/Delhi)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                <Globe className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Worldwide Air Express Cargo</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenInquiry('business')}
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Open Business Account / Inquire</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20want%20to%20inquire%20about%20a%20Business%20Courier%20Account."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Commercial Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CORE BUSINESS ADVANTAGES (Aapke Business Ko Kya Suvidha Milegi?)
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              BUSINESS ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Aapke Business Ko Kya-Kya Suvidha Milegi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bhilwara ke regular vyapar aur factory owners ke liye structured services:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Daily Scheduled Doorstep Pickup
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Aapko roz-roz courier office aane ki zaroorat nahi. Subah ya evening mein hamara
                delivery rider direct aapki factory, shop ya office se parcels collect karega.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                Pur Road, RIICO, Cloth Market Coverage
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                <Receipt className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Monthly Billing &amp; GST Invoicing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Roz ke chhote cash transactions band. Mahine ke aakhir mein ek single consolidated
                statement aur proper GST input tax credit invoice aapke accounting team ko milta hai.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                100% Tax Compliant B2B Billing
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                <Truck className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Priority Commercial Trade Corridors
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Surat, Mumbai, Delhi NCR, Ahmedabad, Bangalore jaise mukhya industrial aur textile
                hubs ke liye dedicated direct linehauls aur fast-track delivery slots.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                Next-Day Morning Connectivity
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Tamper-Evident &amp; Swatch Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Kapde ke swatches, sample books aur confidential documents ke liye high-grade
                waterproof poly-wrap, security seal, aur reinforced strapping packaging support.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                Weather &amp; Transit Protected
              </div>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                <Headphones className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Dedicated Account Desk (No Bots)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Kisi call-center robot ke chakkaron mein nahi padna. Bhilwara Hub ka direct dedicated
                account manager, instant WhatsApp docket status, aur fast problem resolution.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                Direct Local Support Contact
              </div>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 space-y-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Proof of Delivery (POD) Receipts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Important consignments aur buyer samples ka signed proof of delivery (POD) receipt
                aapke audit aur commercial verification ke liye record mein maintain kiya jata hai.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                Verifiable Commercial Dispatch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHO WE SUPPORT ACROSS BHILWARA (Industry-Specific Solutions)
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              TARGET COMMERCIAL SECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Aapka Business Kis Category Mein Aata Hai?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bhilwara ke industrial aur commercial trade ke liye tailor-made logistics handling:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Sector 1: Textile Mills */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    WEAVING &amp; SYNTHETICS
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Textile &amp; Weaving Mills
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Suiting, shirting, aur synthetic fabric producers jo outstation buyers ko naye
                  shade cards, swatch books, aur fabric trial cuts urgent approval ke liye bhejte hain.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Shade Cards &amp; Swatches</span>
                <span className="text-[#DC2626]">Priority Air/Road</span>
              </div>
            </div>

            {/* Sector 2: Garment Units */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Scissors className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    APPAREL EXPORT
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Garment &amp; Apparel Exporters
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Garment manufacturing units aur merchandisers jinhe prototype samples, trial
                  garments, embroidery patterns aur buyer catalog books time-bound delivery karni hoti hai.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Buyer Prototypes</span>
                <span className="text-[#DC2626]">Fast-Track Express</span>
              </div>
            </div>

            {/* Sector 3: Wholesale & Machinery Spares */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Package className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    COMMERCIAL TRADE
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    Wholesalers &amp; Machinery Spares
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Industrial spare parts, loom machinery accessories, chemical samples, aur B2B
                  cartons jo interstate factories aur distributors tak dispatch hote hain.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Heavy Boxes &amp; Spares</span>
                <span className="text-[#DC2626]">Surface Linehaul</span>
              </div>
            </div>

            {/* Sector 4: Corporate & Professional Offices */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center border border-red-100 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#DC2626] tracking-wider block mb-0.5">
                    LEGAL &amp; CORPORATE
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                    CA, Legal &amp; Corporate Offices
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Auditors, advocates, aur industrial offices jinhe sensitive tender papers,
                  audit files, legal agreements, bank documents, aur GST files confidential deliver karni hoti hain.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
                <span>Confidential Dossiers</span>
                <span className="text-[#DC2626]">Tamper-Proof Seal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MAJOR TRADE CORRIDORS (Kahan-Kahan Daily Jaata Hai?)
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-[#F0F5FA] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              DAILY TRADE CORRIDORS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Bhilwara Se Sabse Zyaada Dispatch Hone Wale Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              In trade corridors par hamara daily consignment movement hota hai:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Route 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-mono font-bold uppercase">
                  GUJARAT TEXTILE CORRIDOR
                </span>
                <span className="text-xs font-bold text-emerald-600">Next-Day Delivery</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Surat &amp; Ahmedabad
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Bhilwara ke fabric sample cards aur yarn-related consignments ke liye daily
                overnight road linehauls aur express delivery.
              </p>
            </div>

            {/* Route 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-mono font-bold uppercase">
                  CAPITAL COMMERCE
                </span>
                <span className="text-xs font-bold text-emerald-600">Priority Linehaul</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Delhi NCR, Gurgaon &amp; Noida
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Garment export buyer houses, head offices, aur corporate commercial offices tak
                urgent morning delivery connections.
              </p>
            </div>

            {/* Route 3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-mono font-bold uppercase">
                  FINANCIAL &amp; PORT HUB
                </span>
                <span className="text-xs font-bold text-emerald-600">Express Air / Surface</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Mumbai, Pune &amp; Maharashtra
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Textile market, export documentation desks, aur international port forwarding
                centers ke saath daily reliable transit.
              </p>
            </div>

            {/* Route 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-mono font-bold uppercase">
                  INTRA-STATE RAJASTHAN
                </span>
                <span className="text-xs font-bold text-emerald-600">Same-Day / Next-Day</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Jaipur, Jodhpur, Kota &amp; Udaipur
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                State tenders, government documents, spare parts, aur regional retail sample
                distribution ke liye fast intra-state linehaul network.
              </p>
            </div>

            {/* Route 5 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-mono font-bold uppercase">
                  SOUTH INDIA TRADE
                </span>
                <span className="text-xs font-bold text-emerald-600">Pan-India Express</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Bangalore, Chennai &amp; Hyderabad
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Apparel manufacturing brands, retail showroom samples, aur bulk commercial carton
                dispatch to southern markets.
              </p>
            </div>

            {/* Route 6 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] text-[10px] font-mono font-bold uppercase">
                  WORLDWIDE EXPORT
                </span>
                <span className="text-xs font-bold text-emerald-600">Air Cargo Express</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">
                UAE, USA, Europe &amp; Global Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                eCS World Wide Express network ke zariye overseas buyers ko sample fabrics,
                export documentation, aur priority commercial air parcels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. EASY 3-STEP ONBOARDING (Aapka Business Account Kaise Start Hoga?)
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              SIMPLE ONBOARDING
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Aapka Business Account Kaise Start Hoga?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Bina kisi lambe paperwork ke sirf 3 aasan steps mein commercial pickup shuru:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative group hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                01
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Requirement Share Kijiye
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                WhatsApp par ya hamare form ke through batayein ki aapke kis tarah ke parcels hain
                (swatches, documents, cartons) aur lagbhag monthly kitna volume rehta hai.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative group hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                02
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Custom Rates &amp; Pickup Time Fix
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Bhilwara Hub se aapke routes aur volume ke hisab se discounted commercial rates tay
                honge aur factory doorstep pickup ka rozana time schedule lock ho jayega.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 relative group hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-extrabold flex items-center justify-center text-sm border border-red-100">
                03
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                Daily Dispatch &amp; Month-End Bill
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Pehle din se docket generation aur pickup shuru. Daily tracking receipt milte rahenge,
                aur month-end par single consolidated GST invoice aayega.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DIRECT ACTION BENTO CARD (Contact / Call / WhatsApp)
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/30 border border-red-500/40 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-red-400" />
                <span>COMMERCIAL TIE-UP DESK</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Bhilwara Me Apne Business Ke Liye Regular Courier Tie-up Karein
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Opposite New Cloth Market, Pur Road. Hamare desk par aaiye ya direct call/WhatsApp
                karke apna daily pickup schedule karein aur monthly account rates confirm karein.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-semibold">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#DC2626]" />
                  <span>Opp. New Cloth Market, Bhilwara</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Mon–Sat: 9:30 AM – 8:30 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => handleOpenInquiry('business')}
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Prepare Business Inquiry</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20want%20to%20discuss%20a%20commercial%20business%20account."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:8955144444"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. RELATED HELPFUL PAGES
          ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
                EXPLORE MORE
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Related Logistics &amp; Operations Services
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/textile-logistics"
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Textile Swatch Logistics
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Kapde ke sample cuts, shade cards, aur catalog books packing &amp; express dispatch.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626]">
                <span>View Textile Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/gallery"
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Camera className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Operations Video Reels &amp; Photos
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Bhilwara hub ke real video reels aur ground photos ka complete archive dekhein.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626]">
                <span>Watch Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/track-shipment"
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <Search className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Live Tracking Portal
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Air waybill docket number enter karke parcel ka status check kijiye.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626]">
                <span>Track Parcel</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#DC2626]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                  Contact &amp; Hub Location
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Opposite New Cloth Market, Pur Road. Google Maps directions aur phone details.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626]">
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Reusable Inquiry Modal */}
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
