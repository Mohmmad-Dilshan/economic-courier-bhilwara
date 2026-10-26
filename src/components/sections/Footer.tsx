import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/common/BrandLogo';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO, DEMO_TRACKING_DISCLAIMER } from '@/lib/constants';

export function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Tracking', href: '/#tracking' },
    { label: 'Business', href: '/#business' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-[#07132D] text-slate-300">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-7 sm:py-9">
        {/* Top Navigation Row: Logo + Centered Links + Instagram Trigger */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-4">
          {/* Logo on Left */}
          <Link href="/" className="shrink-0">
            <BrandLogo variant="dark" size="md" />
          </Link>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-7 text-xs text-slate-300 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Instagram Channel Link */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <span>Follow us on Instagram</span>
            <InstagramIcon size={16} className="text-white shrink-0" />
          </a>
        </div>

        {/* Thin Divider Line matching reference */}
        <div className="border-t border-slate-800/80 my-3" />

        {/* Bottom Row: Copyright Left + Tagline Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <p>&copy; 2025 Economic Courier. All rights reserved.</p>
          <p className="font-medium text-slate-400 italic">Fast. Reliable. Connected.</p>
        </div>

        {/* Compliance Prototype Footer Indicator */}
        <p className="text-[9px] text-slate-600/70 text-center mt-2">
          Demonstration Prototype UI &bull; {DEMO_TRACKING_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
