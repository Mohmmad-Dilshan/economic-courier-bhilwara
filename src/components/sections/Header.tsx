'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Truck, Briefcase, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';
  const isAboutPage = pathname === '/about';
  const isGalleryPage = pathname === '/gallery';
  const isContactPage = pathname === '/contact';
  const isTextilePage = pathname === '/textile-logistics';
  const isBusinessSolutionsPage = pathname === '/business-solutions';
  const isTrackShipmentPage = pathname === '/track-shipment';
  const isHomePage = pathname === '/';

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const prevMobileMenuOpen = useRef(mobileMenuOpen);

  // Subtle scroll state for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Focus restoration to menu toggle button when drawer closes
  useEffect(() => {
    if (prevMobileMenuOpen.current && !mobileMenuOpen) {
      menuButtonRef.current?.focus();
    }
    prevMobileMenuOpen.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  // Keyboard accessibility: Escape to close drawer or dropdown, Tab trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false);
          return;
        }
        if (mobileMenuOpen) {
          e.preventDefault();
          setMobileMenuOpen(false);
          return;
        }
      }

      if (mobileMenuOpen && e.key === 'Tab' && drawerRef.current) {
        const focusables = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null || el.getClientRects().length > 0);

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, servicesDropdownOpen]);

  // Mobile drawer links (Comprehensive vertical hierarchy)
  const mobileNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Services', href: '/services' },
    { label: 'Textile Logistics', href: '/textile-logistics' },
    { label: 'Business Solutions', href: '/business-solutions' },
    { label: 'Track Shipment', href: '/track-shipment' },
    { label: 'Operations Gallery', href: '/gallery' },
    { label: 'About Economic Courier', href: '/about' },
    { label: 'Contact Bhilwara Desk', href: '/contact' },
  ];

  const contactHref = isContactPage ? '#inquiry-form' : '/contact';
  const isServicesDropdownActive = isServicesPage || isBusinessSolutionsPage;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white/98 backdrop-blur-md border-b ${
          isScrolled
            ? 'border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
            : 'border-slate-100'
        }`}
      >
        {/* Top Dual-Tone Brand Accent Stripe (eCS Express Red & Royal Navy) */}
        <div
          className="h-[3px] w-full bg-gradient-to-r from-[#DC2626] via-[#1E3A8A] to-[#DC2626]"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-16 sm:h-[68px] lg:h-[72px]">
            {/* Left: Official eCS Logo + Economic Courier Bhilwara Hub Lockup */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 rounded-lg group"
            >
              <BrandLogo size="md" />
              <div className="flex flex-col border-l border-slate-200/90 pl-2 sm:pl-3">
                <span className="text-[10.5px] xs:text-[11.5px] sm:text-[12px] font-bold text-slate-800 tracking-tight leading-none group-hover:text-[#DC2626] transition-colors">
                  Economic Courier
                </span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                  Bhilwara Hub
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation (Zero wrapping, spacious, professional hierarchy) */}
            <nav
              className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-5"
              aria-label="Main Navigation"
            >
              {/* 1. Home */}
              <Link
                href="/"
                prefetch={false}
                onClick={() => setActiveNav('Home')}
                className={`relative py-1.5 px-2.5 xl:px-3 text-[13px] xl:text-[14px] font-semibold rounded-lg whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isHomePage && activeNav === 'Home'
                    ? 'text-[#DC2626] font-bold bg-red-50/70'
                    : 'text-slate-600 hover:text-[#DC2626] hover:bg-red-50/40'
                }`}
              >
                <span>Home</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                    isHomePage && activeNav === 'Home' ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>

              {/* 2. Services (Interactive Dropdown with Courier & Cargo + Business Solutions) */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  prefetch={false}
                  onClick={() => {
                    setActiveNav('Services');
                    setServicesDropdownOpen(false);
                  }}
                  className={`relative py-1.5 px-2.5 xl:px-3 text-[13px] xl:text-[14px] font-semibold rounded-lg whitespace-nowrap transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                    isServicesDropdownActive
                      ? 'text-[#DC2626] font-bold bg-red-50/70'
                      : 'text-slate-600 hover:text-[#DC2626] hover:bg-red-50/40'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400 group-hover:text-[#DC2626]'
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                      isServicesDropdownActive ? 'w-5 opacity-100' : 'w-0 opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </Link>

                {/* Dropdown Card */}
                <div
                  className={`absolute top-full left-0 pt-2 w-[320px] z-50 transition-all duration-200 ${
                    servicesDropdownOpen
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                      Express &amp; Cargo Capabilities
                    </div>

                    <Link
                      href="/services"
                      prefetch={false}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                        isServicesPage ? 'bg-red-50/80 text-[#DC2626]' : 'hover:bg-slate-50 text-slate-700 hover:text-[#DC2626]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 border border-red-100 mt-0.5">
                        <Truck className="w-4 h-4 text-[#DC2626]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold block leading-tight">All Courier Services</span>
                        <span className="text-[11px] text-slate-500 leading-tight block font-normal">
                          Domestic express, worldwide air cargo &amp; documents.
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/business-solutions"
                      prefetch={false}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                        isBusinessSolutionsPage ? 'bg-red-50/80 text-[#DC2626]' : 'hover:bg-slate-50 text-slate-700 hover:text-[#DC2626]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 border border-red-100 mt-0.5">
                        <Briefcase className="w-4 h-4 text-[#DC2626]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold block leading-tight">Business Solutions</span>
                        <span className="text-[11px] text-slate-500 leading-tight block font-normal">
                          B2B trade accounts, scheduled linehauls &amp; commercial parcels.
                        </span>
                      </div>
                    </Link>

                    <div className="pt-2 mt-1 border-t border-slate-100 px-3 pb-1 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Bhilwara Dispatch Desk</span>
                      <Link
                        href="/contact"
                        prefetch={false}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[#DC2626] font-bold hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Textile Logistics (Star Signature Service for Bhilwara) */}
              <Link
                href="/textile-logistics"
                prefetch={false}
                onClick={() => setActiveNav('Textile Logistics')}
                className={`relative py-1.5 px-2.5 xl:px-3 text-[13px] xl:text-[14px] font-semibold rounded-lg whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isTextilePage
                    ? 'text-[#DC2626] font-bold bg-red-50/70'
                    : 'text-slate-600 hover:text-[#DC2626] hover:bg-red-50/40'
                }`}
              >
                <span>Textile Logistics</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                    isTextilePage ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>

              {/* 4. Track Shipment */}
              <Link
                href="/track-shipment"
                prefetch={false}
                onClick={() => setActiveNav('Track Shipment')}
                className={`relative py-1.5 px-2.5 xl:px-3 text-[13px] xl:text-[14px] font-semibold rounded-lg whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isTrackShipmentPage
                    ? 'text-[#DC2626] font-bold bg-red-50/70'
                    : 'text-slate-600 hover:text-[#DC2626] hover:bg-red-50/40'
                }`}
              >
                <span>Track Shipment</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                    isTrackShipmentPage ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>

              {/* 5. Gallery */}
              <Link
                href="/gallery"
                prefetch={false}
                onClick={() => setActiveNav('Gallery')}
                className={`relative py-1.5 px-2.5 xl:px-3 text-[13px] xl:text-[14px] font-semibold rounded-lg whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isGalleryPage
                    ? 'text-[#DC2626] font-bold bg-red-50/70'
                    : 'text-slate-600 hover:text-[#DC2626] hover:bg-red-50/40'
                }`}
              >
                <span>Gallery</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                    isGalleryPage ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>

              {/* 6. About */}
              <Link
                href="/about"
                prefetch={false}
                onClick={() => setActiveNav('About')}
                className={`relative py-1.5 px-2.5 xl:px-3 text-[13px] xl:text-[14px] font-semibold rounded-lg whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isAboutPage
                    ? 'text-[#DC2626] font-bold bg-red-50/70'
                    : 'text-slate-600 hover:text-[#DC2626] hover:bg-red-50/40'
                }`}
              >
                <span>About</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                    isAboutPage ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>
            </nav>

            {/* Right Action Elements: Contact Hub CTA + Instagram Icon (Visible on lg: 1024px+) */}
            <div className="hidden lg:flex items-center gap-2.5 lg:gap-3.5 shrink-0">
              {/* Contact Us Red Pill Button - Crisp White Text */}
              <Link
                href={contactHref}
                style={{ color: '#FFFFFF' }}
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[12.5px] lg:text-[13px] font-bold px-4 lg:px-5 py-2 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(220,38,38,0.25)] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 whitespace-nowrap"
                title="Contact Economic Courier Bhilwara"
                aria-label="Contact Us — Economic Courier Bhilwara"
              >
                <span className="text-white font-bold tracking-tight" style={{ color: '#FFFFFF' }}>
                  Contact Us
                </span>
              </Link>

              {/* Instagram Icon */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Economic Courier on Instagram"
                className="p-2 text-slate-500 hover:text-[#DC2626] hover:bg-red-50/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-full"
              >
                <InstagramIcon size={20} />
              </a>
            </div>

            {/* Mobile & Tablet Navigation Toggle (< 1024px: 360px up to 1023px) */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href={contactHref}
                style={{ color: '#FFFFFF' }}
                className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 whitespace-nowrap"
                title="Contact Economic Courier Bhilwara"
                aria-label="Contact — Economic Courier Bhilwara"
              >
                <span className="text-white font-bold" style={{ color: '#FFFFFF' }}>Contact</span>
              </Link>

              <button
                ref={menuButtonRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#DC2626] hover:bg-red-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Overlay / Backdrop & Container (< 1024px) */}
      {/* Mobile & Tablet Fullscreen Immersive Navigation Menu (< 1024px) */}
      {mobileMenuOpen && (
        <div
          ref={drawerRef}
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-7 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar: Brand Lockup + Circular Close Button */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <BrandLogo size="sm" />
              <div className="flex flex-col border-l border-slate-200 pl-2.5 text-left">
                <span className="text-[11px] font-black text-slate-900 tracking-tight leading-none">
                  Economic Courier
                </span>
                <span className="text-[8.5px] font-bold text-[#DC2626] tracking-wider uppercase mt-0.5">
                  Bhilwara Central Hub
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#DC2626] flex items-center justify-center transition-colors cursor-pointer border border-slate-200/80 active:scale-95"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Section: Centered, Bold, High-Energy Modern Typography */}
          <nav
            className="flex flex-col items-center justify-center text-center my-auto py-5 sm:py-7 space-y-2.5 sm:space-y-3.5"
            aria-label="Mobile Navigation Links"
          >
            {mobileNavLinks.map((link, idx) => {
              const isActive =
                (link.href === '/' && isHomePage) ||
                (link.href === '/services' && isServicesPage) ||
                (link.href === '/textile-logistics' && isTextilePage) ||
                (link.href === '/business-solutions' && isBusinessSolutionsPage) ||
                (link.href === '/track-shipment' && isTrackShipmentPage) ||
                (link.href === '/gallery' && isGalleryPage) ||
                (link.href === '/about' && isAboutPage) ||
                (link.href === '/contact' && isContactPage);

              const isTracking = link.href === '/track-shipment';

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={false}
                  onClick={() => {
                    setActiveNav(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className="group relative inline-flex flex-col items-center justify-center py-1 transition-transform duration-150 active:scale-95"
                >
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#DC2626] transition-colors">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[20px] xs:text-[23px] sm:text-[26px] font-black tracking-tight leading-tight transition-all duration-150 ${
                        isActive
                          ? 'text-[#DC2626] scale-105'
                          : 'text-slate-900 group-hover:text-[#DC2626]'
                      }`}
                    >
                      {link.label}
                    </span>
                    {isTracking && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-[#DC2626] text-[9px] font-mono font-black border border-red-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                        <span>TRACK</span>
                      </span>
                    )}
                  </div>

                  {/* Active Accent Bar */}
                  {isActive && (
                    <span
                      className="w-7 h-1 rounded-full bg-[#DC2626] mt-1 animate-in zoom-in duration-150"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section: Quick Action Cards (WhatsApp + Phone + Location) */}
          <div className="pt-3.5 border-t border-slate-100 space-y-2.5 shrink-0">
            {/* Dual Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Hub</span>
              </a>

              <a
                href="tel:+918955144444"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs active:scale-95 transition-all text-center"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#DC2626]" />
                <span>Call Counter</span>
              </a>
            </div>

            {/* Location & Instagram Strip */}
            <div className="flex items-center justify-between pt-1 px-1 text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 truncate max-w-[240px]">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                <span className="truncate">Opp. New Cloth Market, Bhilwara</span>
              </div>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Economic Courier on Instagram"
                className="p-1.5 rounded-full hover:bg-red-50 text-slate-500 hover:text-[#DC2626] transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
