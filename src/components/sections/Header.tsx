'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';
  const isHomePage = pathname === '/';

  // WCAG 2.1 Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Left: Official eCS Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <BrandLogo size="md" />
          </Link>

          {/* Center: Compact Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = isServicesPage
                ? link.label === 'Services'
                : activeNav === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveNav(link.label)}
                  className={`relative py-1 text-[14px] transition-colors flex flex-col items-center ${
                    isActive
                      ? 'text-[#0F172A] font-bold'
                      : 'text-slate-600 font-semibold hover:text-[#0F172A]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-4 h-[2px] bg-[#DC2626] rounded-full mt-1.5" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Elements: Red Phone Pill + Clean Instagram Icon */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Call Us Red Pill Button */}
            <Link
              href={contactHref}
              className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-2xs hover:shadow-xs transition-all active:scale-95"
              title="Call Us: +91 89551 44444 [Pending Final Confirmation]"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>+91 89551 44444</span>
            </Link>

            {/* Instagram Icon - Clean Naked Glyph */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Economic Courier on Instagram"
              className="text-[#0F172A] hover:text-[#DC2626] transition-colors ml-1"
            >
              <InstagramIcon size={20} />
            </a>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href={contactHref}
              className="inline-flex items-center gap-1 bg-[#DC2626] text-white text-[11px] font-bold px-3 py-1.5 rounded-full"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>Call</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="region"
          aria-label="Mobile navigation drawer"
          className="lg:hidden border-t border-slate-100 bg-white px-5 pt-3 pb-6 space-y-4 shadow-xl"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile menu links">
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
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#DC2626] bg-red-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <Link
              href={contactHref}
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#DC2626] text-white text-xs font-bold py-2.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>+91 89551 44444</span>
            </Link>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2.5 rounded-full border border-slate-200 text-slate-700 hover:text-red-600"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
