import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Truck,
  Globe2,
  Package,
  Star,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Domestic Express Linehaul', href: '/services#domestic' },
    { label: 'Worldwide Air Cargo (eCS)', href: '/services#international' },
    { label: 'Textile Swatch & Sample Mailers', href: '/textile-logistics' },
    { label: 'Important Documents & Dossiers', href: '/services#documents' },
    { label: 'Commercial Mill Cargo', href: '/business-solutions' },
    { label: 'Doorstep Industrial Pickup', href: '/contact' },
  ];

  const quickLinks = [
    { label: 'Track Shipment (AWB Portal)', href: '/track-shipment' },
    { label: 'How Shipping Works', href: '/#how-it-works' },
    { label: 'Bhilwara Central Hub & Map', href: '/#contact' },
    { label: 'Customer Reviews (★ 4.9)', href: '/#reviews' },
    { label: 'Visual Gallery & Reels', href: '/gallery' },
    { label: 'Frequently Asked Questions', href: '/#faq' },
    { label: 'About Economic Courier', href: '/about' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1528] via-[#080E1E] to-[#040710] text-slate-300 border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glow accents */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/[0.03] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            TOP PRE-FOOTER: 4 Corridor Authority Trust Badges
            ========================================================================= */}
        <div className="py-8 sm:py-10 border-b border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Rajasthan Linehaul
              </h4>
              <p className="text-[12px] text-slate-400 leading-snug mt-0.5">
                Daily dispatches to Jaipur, Jodhpur, Udaipur, Kota &amp; 19,000+ pin codes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Worldwide Air Express
              </h4>
              <p className="text-[12px] text-slate-400 leading-snug mt-0.5">
                220+ countries connectivity with commercial export invoice support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Textile Hub Specialists
              </h4>
              <p className="text-[12px] text-slate-400 leading-snug mt-0.5">
                Tamper-evident poly strapping for fabric shade cards &amp; swatch mailers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Central Bhilwara Hub
              </h4>
              <p className="text-[12px] text-slate-400 leading-snug mt-0.5">
                Opposite New Cloth Market, open Mon–Sat 9:30 AM – 8:30 PM.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN 4-COLUMN BENTO/GRID FOOTER BODY
            ========================================================================= */}
        <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* COLUMN 1: Brand & Central Hub Desk (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Lockup */}
            <Link href="/" className="inline-block" aria-label="Economic Courier Bhilwara Home">
              <Image
                src="/assets/logo/ecs-logo-dark.png"
                alt="eCS World Wide Express - Economic Courier Bhilwara"
                width={150}
                height={40}
                unoptimized
                priority
                className="h-9 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-[13px] text-slate-400 leading-relaxed font-normal">
              Economic Courier &bull; eCS World Wide Express is Bhilwara’s authoritative dispatch hub for priority domestic courier, global air cargo, and specialized textile swatch mailers.
            </p>

            {/* Direct Physical Contact Card */}
            <div className="space-y-3 pt-2 text-xs">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">
                  Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road / Station Sector, Bhilwara (RJ) 311001
                </span>
              </a>

              <a
                href="tel:+918955144444"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white font-bold transition-colors group"
              >
                <Phone className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 89551 44444 (Counter Helpline)</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Mon–Sat: 9:30 AM – 8:30 PM &bull; Sun: 10:00 AM – 4:00 PM</span>
              </div>
            </div>

            {/* Live Status Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Intake Counter Open &bull; Opposite New Cloth Market</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Logistics Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Logistics Services
              </h3>
              <div className="w-6 h-0.5 bg-red-600 rounded-full mt-2" />
            </div>

            <ul className="space-y-2.5 text-[13px]">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-red-500 transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="w-6 h-0.5 bg-red-600 rounded-full mt-2" />
            </div>

            <ul className="space-y-2.5 text-[13px]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-red-500 transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Verified Reputation & Social Connect (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Verified Reputation
              </h3>
              <div className="w-6 h-0.5 bg-red-600 rounded-full mt-2" />
            </div>

            {/* Google Rating Mini Card */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all group"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-base font-black text-white">4.9</span>
                  <span className="text-xs text-slate-400">/ 5.0</span>
                </div>
                <span className="text-[10.5px] font-bold text-red-400 group-hover:underline flex items-center gap-0.5">
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                396+ Verified Customer Reviews in Bhilwara
              </p>
            </a>

            {/* Social & Contact Direct Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-bold text-slate-200 hover:text-white transition-all group"
              >
                <InstagramIcon size={15} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
                <span>@economiccourierbhilwara</span>
              </a>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20need%20assistance%20with%20a%20consignment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:text-emerald-200 transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Intake Desk</span>
              </a>
            </div>

            {/* Cut-off note */}
            <p className="text-[11px] text-slate-500 leading-tight pt-1">
              &bull; Morning Dispatch: 10:00 AM &bull; Evening Linehaul: 6:00 PM
            </p>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM SUB-FOOTER: Copyright + "Designed & Developed by SnapTech Digital"
            ========================================================================= */}
        <div className="border-t border-white/[0.08] py-6 sm:py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Copyright & Entity */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-400">
              &copy; {currentYear} Economic Courier &bull; eCS World Wide Express. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              Central Hub: Opposite New Cloth Market, Railway Staff Quarter Area, Bhilwara, Rajasthan 311001
            </p>
          </div>

          {/* Core User Requirement: "Designed and Developed by SnapTech Digital" */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs shadow-2xs">
              <span className="text-slate-400">Designed &amp; Developed by</span>
              <a
                href="https://snaptech.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-white hover:text-[#DC2626] transition-colors inline-flex items-center gap-1 group/snap"
                title="SnapTech Digital — Modern Web, AI & Software Engineering"
              >
                <span className="underline underline-offset-4 decoration-red-500/60 group-hover/snap:decoration-red-400">
                  snaptech.digital
                </span>
                <ExternalLink className="w-3 h-3 text-red-400 group-hover/snap:translate-x-0.5 group-hover/snap:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
