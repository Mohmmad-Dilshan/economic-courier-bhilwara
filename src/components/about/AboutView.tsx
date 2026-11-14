'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Building2,
  Globe,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Clock,
  ExternalLink,
  MessageCircle,
  Award,
  Phone,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { YouTubeIcon } from '@/components/common/YouTubeIcon';
import { getMediaUrl } from '@/lib/cloudinary';

export function AboutView() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden antialiased">
      {/* =========================================================================
          1. ABOUT HERO SECTION (MODERN EDITORIAL SPLIT LAYOUT)
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-8 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle architectural ambient dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          {/* Top Breadcrumb & Hub Location Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#DC2626] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-bold" aria-current="page">
                About Us
              </span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BHILWARA · OPP. NEW CLOTH MARKET</span>
            </div>
          </div>

          {/* 55/45 Editorial Split Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Content Column (55%) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-black tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span>35+ YEARS LOGISTICS EXPERTISE · BHILWARA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black tracking-[-0.035em] text-[#1E3A8A] leading-[1.1]">
                Local Roots.{' '}
                <span className="text-[#DC2626] block sm:inline mt-1 sm:mt-0">
                  Nationwide &amp; Worldwide Reach.
                </span>
              </h1>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                Economic Courier aur eCS World Wide Express Bhilwara ke prime commercial corridor se direct operate karte hain. Textile mills ke fabric swatches, high-priority trade documents, aur international air cargo ke liye hamara physical hub dependable solutions provide karta hai.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact#inquiry-form"
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Connect with Bhilwara Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-5 py-3 rounded-full border border-slate-200 transition-all cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-slate-600" />
                  <span>Meet Our Leadership</span>
                </a>
              </div>

              {/* Quick Operational Capability Pills */}
              <div className="pt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Physical Booking Counter</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Bhilwara Textile Specialization</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>220+ Countries Air Network</span>
                </span>
              </div>
            </div>

            {/* Right Visual Column (45% Styled Framing) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={getMediaUrl('/assets/office/economic-courier-bhilwara-storefront.webp', { type: 'image' })}
                    alt="Economic Courier central hub storefront and booking office Opposite New Cloth Market on Pur Road, Bhilwara"
                    title="Economic Courier Bhilwara — Central Booking Hub & Storefront, Pur Road"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>

                {/* Bottom stats banner inside visual card */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-100 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50">
                    <span className="block text-xs font-mono font-bold text-[#DC2626] uppercase">ESTABLISHED</span>
                    <span className="block text-sm font-extrabold text-slate-900">35+ Years Legacy</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50">
                    <span className="block text-xs font-mono font-bold text-[#DC2626] uppercase">NETWORK</span>
                    <span className="block text-sm font-extrabold text-slate-900">All India &amp; Global</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. LEADERSHIP SHOWCASE — MR. CHANDRA SHEKHAR PANECHA (NEXT LEVEL)
          ========================================================================= */}
      <section id="leadership" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 scroll-mt-12">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-extrabold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>LEADERSHIP &amp; STRATEGIC GOVERNANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
              Architect of Bhilwara’s <span className="text-[#DC2626]">Dependable Logistics Network.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Direct leadership grounded in 35+ years of frontline supply chain experience and unwavering accountability to Bhilwara’s business community.
            </p>
          </div>

          {/* Master Founder Profile Showcase Card */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-3xl border border-slate-200/90 border-b-4 border-b-[#DC2626] shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Authentic Executive Portrait (5 Columns) */}
              <div className="lg:col-span-5 relative bg-slate-100 flex flex-col justify-between min-h-[420px] sm:min-h-[500px]">
                <div className="relative w-full h-full flex-1 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
                  <Image
                    src={getMediaUrl('/assets/team/chandra-shekhar-panecha.webp', { type: 'image' })}
                    alt="Mr. Chandra Shekhar Panecha, Founder & Independent Director of Economic Courier & eCS World Wide Express, Bhilwara"
                    title="Mr. Chandra Shekhar Panecha — Founder & Independent Director, Economic Courier Bhilwara"
                    fill
                    unoptimized
                    priority
                    className="object-cover object-[center_top]"
                  />
                </div>
              </div>

              {/* Right Column: Executive Dossier & Verified Credentials (7 Columns) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Tag & Role Lockup */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#DC2626] text-xs font-black tracking-wider uppercase border border-red-200">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>INDEPENDENT DIRECTOR</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      35+ YRS EXPERIENCE
                    </span>
                  </div>

                  {/* Name & Official Titles */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
                      Mr. Chandra Shekhar Panecha
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                      Independent Director : <span className="text-[#DC2626]">Economic Courier Service</span> · <span className="text-slate-900">ECS Worldwide Express</span> · <span className="text-slate-600">CS Integrated Solution</span>
                    </p>
                  </div>

                  {/* Core Official Bio / Quotation from Documentation */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      <Award className="w-4 h-4 text-[#DC2626]" />
                      <span>Professional Credential</span>
                    </div>
                    <blockquote className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic border-l-2 border-[#DC2626] pl-3">
                      &ldquo;A Prolific Supply Chain Specialist with over 35 years of work experience known for creating and managing highly responsive yet cost-effective and efficient solutions.&rdquo;
                    </blockquote>
                    <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                      Leading Economic Courier’s operational ethos in Bhilwara with zero reliance on anonymous call centers and absolute transparency in consignment handling.
                    </p>
                  </div>

                  {/* 3 Core Operational Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="text-[11px] font-bold text-[#DC2626] uppercase">GOVERNANCE</div>
                      <div className="text-xs font-extrabold text-slate-900 mt-0.5">Direct Accountability</div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                        Personal supervision at Bhilwara booking hub.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="text-[11px] font-bold text-[#DC2626] uppercase">TEXTILE SPEED</div>
                      <div className="text-xs font-extrabold text-slate-900 mt-0.5">Sample Commitment</div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                        Prioritizing rapid transit for Bhilwara cloth trade.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="text-[11px] font-bold text-[#DC2626] uppercase">SOLUTIONS</div>
                      <div className="text-xs font-extrabold text-slate-900 mt-0.5">Cost-Effective</div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                        High-efficiency routing without inflated rates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Founder Contact Channels & Socials */}
                <div className="pt-4 border-t border-slate-200/80 space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-500 tracking-wider block">
                    DIRECT DIRECTOR DESK &amp; OFFICIAL CHANNELS
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Direct Telephone */}
                    <a
                      href="tel:8955155555"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-300 hover:border-red-400 hover:shadow-md text-slate-900 font-extrabold text-xs sm:text-sm transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span>+91 89551 55555</span>
                    </a>

                    {/* Instagram Profile */}
                    <a
                      href="https://www.instagram.com/chandrashekharpanecha?obrf=YzZzc2dmeDE2cmdy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-300 hover:border-pink-400 hover:shadow-md text-slate-800 font-bold text-xs sm:text-sm transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <InstagramIcon size={16} />
                      </div>
                      <span>@chandrashekharpanecha</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    {/* YouTube Channel */}
                    <a
                      href="https://youtube.com/@chandrashekharpanecha?si=hHzx2zL8k9_rt6um"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-300 hover:border-red-500 hover:shadow-md text-slate-800 font-bold text-xs sm:text-sm transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <YouTubeIcon size={16} />
                      </div>
                      <span>YouTube Channel</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DUAL BRAND OPERATIONAL STRUCTURE
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>BRAND &amp; OPERATIONAL IDENTITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
              One Trusted Hub. <span className="text-[#DC2626]">Two Complementary Networks.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Understanding the distinct synergy between our domestic express courier and our international worldwide logistics network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Identity 1: Economic Courier */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#DC2626] text-[11px] font-bold tracking-wide border border-red-200">
                    <Truck className="w-3.5 h-3.5" />
                    <span>LOCAL &amp; DOMESTIC IDENTITY</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">BHILWARA BASE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight">
                  Economic Courier
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Economic Courier represents our primary trade name and walk-in counter presence opposite New Cloth Market in Bhilwara. Grounded in Rajasthan’s major textile hub, this arm focuses on:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Direct counter booking and walk-in parcel intake at our Pur Road facility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Specialized handling for fabric swatches, sample shade cards, and weaving mill correspondence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Priority surface linehauls to Surat, Mumbai, Ahmedabad, and Delhi NCR apparel corridors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span>Personalized coordination with on-site staff rather than automated bots.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Focus: Textile Community &bull; Domestic Express</span>
                <Link href="/services" className="text-[#DC2626] font-bold inline-flex items-center gap-1 hover:underline">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Identity 2: eCS World Wide Express */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold tracking-wide border border-blue-200">
                    <Globe className="w-3.5 h-3.5" />
                    <span>INTERNATIONAL NETWORK IDENTITY</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">WORLDWIDE EXPRESS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] tracking-tight">
                  eCS World Wide Express
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  eCS World Wide Express represents our international air parcel and commercial export forwarding division, serving businesses and individuals with cross-border shipping:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Worldwide air express courier connecting Bhilwara to 220+ countries and territories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Export paperwork guidance: Commercial Invoices, Packing Lists, and airway bills.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Overseas student university application dossiers, visa documents, and commercial contracts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Reliable international handoffs through recognized air transport gateways.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Focus: Global Air Freight &bull; Cross-Border Exports</span>
                <Link href="/services" className="text-blue-700 font-bold inline-flex items-center gap-1 hover:underline">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT IS ECONOMIC COURIER? (OUR COMPANY, SERVICES & HOW IT WORKS)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span>HAMARI COMPANY &amp; SEWAYEIN · WHO WE ARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
              Bhilwara Ka Dependable <span className="text-[#DC2626]">Courier &amp; Logistics Hub.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Economic Courier aur eCS World Wide Express koi third-party broker nahi hai — balki Bhilwara me Pur Road (Opp. New Cloth Market) par sthit ek active physical logistics hub hai, jahan se domestic express aur international air cargo direct handle hota hai.
            </p>
          </div>

          {/* 4 Core Pillars: Yeh Company Kya Karti Hai */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Pillar 1: Domestic Express Courier */}
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <Truck className="w-6 h-6 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#DC2626] uppercase tracking-wider block">
                    ALL-INDIA EXPRESS
                  </span>
                  <h3 className="text-lg font-black text-[#1E3A8A] mt-1">
                    Domestic Surface &amp; Air Courier
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Bharat bhar ke 19,000+ pin codes tak urgent parcel, documents, aur fabric samples ki express delivery. Surat, Mumbai, Ahmedabad, aur Delhi ke liye daily overnight linehaul connections.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500">
                Next-Day &amp; Priority Transit
              </div>
            </div>

            {/* Pillar 2: Worldwide Air Cargo (eCS) */}
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <Globe className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider block">
                    INTERNATIONAL CARGO
                  </span>
                  <h3 className="text-lg font-black text-[#1E3A8A] mt-1">
                    Worldwide Express (220+ Countries)
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Overseas export samples, university dossiers, visa paperwork, aur international commercial parcels. Complete export invoice aur airway bill documentation assistance Bhilwara se direct.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500">
                Customs &amp; Export Paperwork Support
              </div>
            </div>

            {/* Pillar 3: Doorstep Pickup & B2B Solutions */}
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <Building2 className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                    DOORSTEP COLLECTION
                  </span>
                  <h3 className="text-lg font-black text-[#1E3A8A] mt-1">
                    Daily Factory &amp; Office Pickup
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Bhilwara ke textile mills, manufacturing units, traders, aur corporate offices ke liye daily scheduled doorstep collection. Counter par line lagane ki zaroorat nahi.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500">
                Monthly Consolidated GST Billing
              </div>
            </div>

            {/* Pillar 4: Physical Hub & Transparent Intake */}
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <MapPin className="w-6 h-6 text-[#DC2626]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider block">
                    PHYSICAL WALK-IN HUB
                  </span>
                  <h3 className="text-lg font-black text-[#1E3A8A] mt-1">
                    Certified Digital Intake Desk
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Pur Road hub par aakar certified digital scales par parcel ka exact weight dekhein. Instant printed barcode docket receipt aur tamper-evident packaging ke sath booking karein.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500">
                Opp. New Cloth Market &bull; Open Mon–Sat
              </div>
            </div>
          </div>

          {/* How We Operate / Parcel Booking & Dispatch Lifecycle (4 Step Guide) */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#DC2626] uppercase tracking-wider block">
                  TRANSPARENT PROCESS FLOW
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1E3A8A] mt-0.5">
                  Humare Yahan Parcel Kaise Book &amp; Dispatch Hota Hai?
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Daily Cut-off: 8:30 PM Linehaul</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] font-black text-xs flex items-center justify-center border border-red-200">
                  01
                </div>
                <h4 className="text-sm font-extrabold text-[#1E3A8A]">Book / Schedule</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pur Road counter par walk-in drop karein ya WhatsApp (+91 89551 44444) se factory pickup book karein.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] font-black text-xs flex items-center justify-center border border-red-200">
                  02
                </div>
                <h4 className="text-sm font-extrabold text-[#1E3A8A]">Weigh &amp; Seal</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certified digital scale par accurate weight check, printed docket generation, aur tamper-evident pack.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] font-black text-xs flex items-center justify-center border border-red-200">
                  03
                </div>
                <h4 className="text-sm font-extrabold text-[#1E3A8A]">Same-Day Dispatch</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shaam ko scheduled delivery vehicles me load hokar express highway linehauls aur airport cargo departure.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] font-black text-xs flex items-center justify-center border border-red-200">
                  04
                </div>
                <h4 className="text-sm font-extrabold text-[#1E3A8A]">Dedicated Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivery tak full assistance. Directly Bhilwara counter desk se phone/WhatsApp par real-time updates.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">
                  Zero automated bots — Real on-site Bhilwara team support.
                </span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-900">
                <a href="tel:8955144444" className="text-[#DC2626] hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Booking Desk: +91 89551 44444</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FOUR OPERATIONAL RIGOR STANDARDS
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>QUALITY COMMITMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-[-0.03em] leading-tight">
              Our Operational <span className="text-[#DC2626]">Standards of Service.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Every parcel entrusted to Economic Courier in Bhilwara is processed with transparent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black shadow-2xs">
                01
              </div>
              <h3 className="text-base font-bold text-[#1E3A8A]">Digital Weighing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consignments weighed on certified digital scales with dead weight and volumetric measurement shown openly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black shadow-2xs">
                02
              </div>
              <h3 className="text-base font-bold text-[#1E3A8A]">Protective Sealing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tamper-evident poly flyers, corrugated boxes, and strapping tape protect your contents against dust and transit wear.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black shadow-2xs">
                03
              </div>
              <h3 className="text-base font-bold text-[#1E3A8A]">Coordinated Transit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scheduled dispatches to domestic highway corridors and priority international air cargo connections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#DC2626] flex items-center justify-center font-black shadow-2xs">
                04
              </div>
              <h3 className="text-base font-bold text-[#1E3A8A]">Direct Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct phone and counter access to our local Bhilwara staff for rate quotations, booking queries, and tracking updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BOTTOM ACTION CTA (BALANCED EDITORIAL STYLE — NOT OVERLY DARK)
          ========================================================================= */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-red-400 text-[11px] font-extrabold tracking-widest uppercase border border-white/15">
            <span>READY TO DISPATCH FROM BHILWARA?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-[-0.03em] max-w-2xl mx-auto leading-tight">
            Connect directly with our Bhilwara hub operations desk.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Fabric swatches, urgent commercial tenders, ya international express parcel — hamara booking counter hamesha ready hai.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact#inquiry-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <span>Prepare Consignment Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/918955144444"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking Desk</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <span>View Hub Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutView;
