'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
} from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    }
  };

  const serviceLinks = [
    { label: 'Domestic Express Linehaul', href: '/services#domestic' },
    { label: 'Worldwide Air Cargo (eCS)', href: '/services#international' },
    { label: 'Textile Swatch & Sample Mailers', href: '/textile-logistics' },
    { label: 'Important Documents & Dossiers', href: '/services#documents' },
    { label: 'Commercial Mill Freight', href: '/business-solutions' },
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
    <footer className="relative bg-white text-slate-700 border-t border-slate-200/90 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* =========================================================================
            TOP PRE-FOOTER: 4 Corridor Authority Trust Badges (Clean Light Theme)
            ========================================================================= */}
        <div className="py-8 sm:py-10 border-b border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#B91C1C] flex items-center justify-center shrink-0 shadow-2xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
                Rajasthan Linehaul
              </h3>
              <p className="text-[12px] text-slate-600 leading-snug mt-0.5 font-normal">
                Daily dispatches to Jaipur, Jodhpur, Udaipur, Kota &amp; 19,000+ pin codes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center shrink-0 shadow-2xs">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
                Worldwide Air Express
              </h3>
              <p className="text-[12px] text-slate-600 leading-snug mt-0.5 font-normal">
                220+ countries connectivity with commercial export invoice support.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-2xs">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
                Textile Hub Specialists
              </h3>
              <p className="text-[12px] text-slate-600 leading-snug mt-0.5 font-normal">
                Tamper-evident poly strapping for fabric shade cards &amp; swatch mailers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
                Central Bhilwara Hub
              </h3>
              <p className="text-[12px] text-slate-600 leading-snug mt-0.5 font-normal">
                Opposite New Cloth Market, open Mon–Sat 9:30 AM – 8:30 PM.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN 4-COLUMN BENTO/GRID FOOTER BODY (Clean White Theme)
            ========================================================================= */}
        <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* COLUMN 1: Brand & Central Hub Desk (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Lockup using BrandLogo (No cutting!) */}
            <Link
              href="/"
              scroll={true}
              onClick={handleLogoClick}
              aria-label="Economic Courier Bhilwara - Return to homepage top"
              className="inline-flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg cursor-pointer"
            >
              <BrandLogo size="md" variant="light" />
              <div className="flex flex-col border-l border-slate-200/90 pl-2.5 sm:pl-3">
                <span className="text-[12px] sm:text-[13px] font-black text-slate-900 tracking-tight leading-none group-hover:text-[#DC2626] transition-colors">
                  Economic Courier
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                  Bhilwara Hub
                </span>
              </div>
            </Link>

            <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
              Economic Courier &bull; eCS World Wide Express is Bhilwara’s authoritative dispatch hub for priority domestic courier, global air cargo, and specialized textile swatch mailers.
            </p>

            {/* Direct Physical Contact Info */}
            <div className="space-y-2.5 pt-1 text-xs">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-700 hover:text-[#DC2626] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug">
                  Opposite New Cloth Market, Railway Staff Quarter Area, Pur Road / Station Sector, Bhilwara (RJ) 311001
                </span>
              </a>

              <a
                href="tel:+918955144444"
                className="flex items-center gap-2.5 text-slate-900 hover:text-[#DC2626] font-bold transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#DC2626] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 89551 44444 (Counter Helpline)</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon–Sat: 9:30 AM – 8:30 PM &bull; Sun: 10:00 AM – 4:00 PM</span>
              </div>
            </div>

            {/* Live Status Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Intake Counter Open &bull; Opposite New Cloth Market</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Logistics Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-black text-[#1E3A8A] uppercase tracking-wider">
                Logistics Services
              </h3>
              <div className="w-6 h-0.5 bg-[#DC2626] rounded-full mt-2" />
            </div>

            <ul className="space-y-2.5 text-[13px]">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-slate-600 hover:text-[#DC2626] transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#DC2626] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-xs font-black text-[#1E3A8A] uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="w-6 h-0.5 bg-[#DC2626] rounded-full mt-2" />
            </div>

            <ul className="space-y-2.5 text-[13px]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-slate-600 hover:text-[#DC2626] transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#DC2626] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Verified Reputation & Social Connect (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="text-xs font-black text-[#1E3A8A] uppercase tracking-wider">
                Verified Reputation
              </h3>
              <div className="w-6 h-0.5 bg-[#DC2626] rounded-full mt-2" />
            </div>

            {/* Google Rating Card on Clean White */}
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-all shadow-2xs group"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="text-base font-black text-slate-900">4.9</span>
                  <span className="text-xs text-slate-500 font-bold">/ 5.0</span>
                </div>
                <span className="text-[10.5px] font-bold text-[#DC2626] group-hover:underline flex items-center gap-0.5">
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                396+ Verified Customer Reviews in Bhilwara
              </p>
            </a>

            {/* Social & Contact Direct Buttons (Light Theme) */}
            <div className="space-y-2 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs font-bold text-slate-800 transition-all group shadow-2xs"
              >
                <InstagramIcon size={15} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
                <span>@economiccourierbhilwara</span>
              </a>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20need%20assistance%20with%20a%20consignment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/90 text-xs font-bold text-emerald-800 transition-all group shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
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
        <div className="border-t border-slate-200/90 py-6 sm:py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Copyright & Entity */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-700 font-medium">
              &copy; {currentYear} Economic Courier &bull; eCS World Wide Express. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              Central Hub: Opposite New Cloth Market, Railway Staff Quarter Area, Bhilwara, Rajasthan 311001
            </p>
          </div>

          {/* SnapTech Digital Credit Link */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-600 text-xs shadow-2xs">
              <span className="text-slate-500">Designed &amp; Developed by</span>
              <a
                href="https://snaptech.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-slate-900 hover:text-[#DC2626] transition-colors inline-flex items-center gap-1 group/snap"
                title="SnapTech Digital — Modern Web, AI & Software Engineering"
              >
                <span className="underline underline-offset-4 decoration-red-500/70 group-hover/snap:decoration-[#DC2626]">
                  snaptech.digital
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DC2626] group-hover/snap:translate-x-0.5 group-hover/snap:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
