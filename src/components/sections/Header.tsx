'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Button } from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';
import { buildDirectWhatsAppLink } from '@/lib/whatsapp';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key for WCAG 2.1 keyboard compliance
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
    { label: 'Services', href: '#services' },
    { label: 'Textile Logistics', href: '#textile-focus' },
    { label: 'Track Consignment', href: '#tracking-desk' },
    { label: 'Rate Estimator', href: '#rate-estimator' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Contact & Hub', href: '#contact-hub' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[var(--color-border-default)] shadow-xs">
      {/* Top Advisory Strip */}
      <div className="bg-[var(--color-primary-900)] text-white text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-accent-500)]" />
              <span>Bhilwara Hub: Pur Road / Textile Market Corridor</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                [Pending Client Confirmation]
              </span>
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[var(--color-accent-500)]" />
              <span>Hours: 9:30 AM – 8:30 PM</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                [Pending Confirmation]
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[var(--color-accent-500)]">
              <Sparkles className="w-3 h-3" />
              <span>Doorstep Pickup [Coverage Radius Pending Confirmation]</span>
            </span>
            <a
              href="#pending-contact-notice"
              className="text-white hover:text-[var(--color-accent-500)] transition-colors flex items-center gap-1"
              title="Direct calling disabled until client confirms official phone number"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phonePlaceholder}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center focus-visible:outline-none">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent-600)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Factual Dispatch Hub Identifier (No fabricated "Open Now" claim) */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Bhilwara Hub</span>
              <span className="text-[10px] text-amber-700 font-mono">[Status Pending]</span>
            </div>

            <a
              href={buildDirectWhatsAppLink('Urgent Doorstep Pickup in Bhilwara')}
              title="Live WhatsApp booking activates upon official business number confirmation"
            >
              <Button
                variant="whatsapp"
                size="sm"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Book Pickup [Demo Link]
              </Button>
            </a>

            <a href="#tracking-desk">
              <Button variant="outline" size="sm">
                Track AWB
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button with proper ARIA attributes */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildDirectWhatsAppLink('Bhilwara Pickup Booking')}
              title="Live WhatsApp booking activates upon official business number confirmation"
            >
              <Button
                variant="whatsapp"
                size="sm"
                leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
                className="px-2.5 py-1.5 text-xs"
              >
                Pickup
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with sensible ARIA role & IDs */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="region"
          aria-label="Mobile navigation drawer"
          className="lg:hidden border-t border-[var(--color-border-subtle)] bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              Bhilwara Express Hub
            </span>
            <span className="text-[10px] text-amber-700 font-mono">Hours [Pending Confirmation]</span>
          </div>

          <nav className="flex flex-col space-y-2" aria-label="Mobile menu links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 hover:text-[var(--color-accent-600)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={buildDirectWhatsAppLink('Bhilwara Textile Sample Dispatch')}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="whatsapp"
                size="md"
                className="w-full"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Book Doorstep Pickup (WhatsApp) [Demo Link]
              </Button>
            </a>
            <a href="#tracking-desk" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <Button variant="outline" size="md" className="w-full">
                Track Consignment
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
