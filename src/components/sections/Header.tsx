'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';
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

  // Keyboard accessibility: Escape to close drawer, Tab trapping
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
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
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tracking', href: isHomePage ? '#tracking' : '/#tracking' },
    { label: 'Business', href: isHomePage ? '#business' : '/#business' },
    { label: 'Gallery', href: isHomePage ? '#gallery' : '/#gallery' },
    { label: 'About', href: isHomePage ? '#about' : '/#about' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const contactHref = isHomePage ? '#contact' : '/#contact';

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

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px] lg:h-[72px]">
            {/* Left: Official eCS Logo + Economic Courier Bhilwara Hub Lockup */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 rounded-lg group"
              aria-label="eCS World Wide Express - Economic Courier Bhilwara Home"
            >
              <BrandLogo size="md" />
              <div className="hidden sm:flex flex-col border-l border-slate-200/90 pl-3">
                <span className="text-[12px] font-bold text-slate-800 tracking-tight leading-none group-hover:text-[#DC2626] transition-colors">
                  Economic Courier
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">
                  Bhilwara Hub
                </span>
              </div>
            </Link>

            {/* Center: Desktop & Tablet Navigation (768px+ avoids premature hamburger) */}
            <nav
              className="hidden md:flex items-center gap-1.5 lg:gap-3 xl:gap-5"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = isServicesPage
                  ? link.label === 'Services'
                  : activeNav === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveNav(link.label)}
                    className={`relative py-1.5 px-2.5 lg:px-3 text-[13px] lg:text-[14px] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                      isActive
                        ? 'text-[#DC2626] font-bold bg-red-50/70'
                        : 'text-slate-600 font-medium hover:text-[#DC2626] hover:bg-red-50/40'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#DC2626] transition-all duration-200 ${
                        isActive ? 'w-5 opacity-100' : 'w-0 opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Elements: Call CTA + Instagram Icon (768px+) */}
            <div className="hidden md:flex items-center gap-2.5 lg:gap-3.5">
              {/* Call Us Red Pill Button - Crisp White Text and Icon */}
              <Link
                href={contactHref}
                style={{ color: '#FFFFFF' }}
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[12px] lg:text-[13px] font-bold px-3.5 lg:px-5 py-2 rounded-full shadow-xs hover:shadow-[0_4px_14px_rgba(220,38,38,0.25)] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                title="Call Us: +91 89551 44444 (Line pending owner confirmation)"
                aria-label="Call Us at +91 89551 44444 (Line pending owner confirmation)"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3 text-white fill-white" style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                </div>
                <span className="hidden xl:inline text-white font-bold tracking-tight" style={{ color: '#FFFFFF' }}>
                  +91 89551 44444
                </span>
                <span className="xl:hidden text-white font-bold" style={{ color: '#FFFFFF' }}>
                  Call Us
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

            {/* Mobile Navigation Toggle Button (< 768px) */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href={contactHref}
                style={{ color: '#FFFFFF' }}
                className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                title="Call Us: +91 89551 44444 (Line pending owner confirmation)"
                aria-label="Call Us"
              >
                <Phone className="w-3 h-3 text-white fill-white" style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                <span className="text-white font-bold" style={{ color: '#FFFFFF' }}>Call</span>
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

      {/* Mobile Drawer Overlay / Backdrop & Container (< 768px) */}
      {mobileMenuOpen && (
        <>
          {/* Semi-transparent Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 top-[67px] sm:top-[71px] z-40 bg-slate-950/45 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          />

          {/* Slide-down Drawer Container */}
          <div
            ref={drawerRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed top-[67px] sm:top-[71px] left-0 right-0 z-50 md:hidden bg-white border-b-2 border-b-[#DC2626] shadow-2xl rounded-b-3xl px-5 pt-3 pb-6 space-y-4 max-h-[calc(100dvh-5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile menu links">
              {navLinks.map((link) => {
                const isActive = isServicesPage
                  ? link.label === 'Services'
                  : activeNav === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveNav(link.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                      isActive
                        ? 'text-[#DC2626] bg-red-50/80 font-bold border-l-4 border-[#DC2626] pl-3'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#DC2626]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Contact & Verified Channel Action Bar */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
                <span>Direct Inquiry Line</span>
                <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-amber-100/80 text-amber-800 border border-amber-200">
                  Pending Confirmation
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Link
                  href={contactHref}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: '#FFFFFF' }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold py-2.5 rounded-full shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  <Phone className="w-3.5 h-3.5 text-white fill-white" style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                  <span className="text-white font-bold" style={{ color: '#FFFFFF' }}>+91 89551 44444</span>
                </Link>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Economic Courier on Instagram"
                  className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-[#DC2626] hover:border-red-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
