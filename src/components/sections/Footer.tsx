import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';

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
    <footer className="relative bg-gradient-to-b from-[#09132B] via-[#070F24] to-[#050B1A] text-slate-300 border-t border-white/[0.07]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-8 sm:py-10 reveal-init delay-75">
        {/* Main Row: Brand Identity Left + Navigation Center + Social Channel Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Brand Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left shrink-0">
            <Link href="/" className="inline-block" aria-label="Economic Courier Home">
              <Image
                src="/assets/logo/ecs-logo-dark.png"
                alt="eCS World Wide Express - Economic Courier Bhilwara"
                width={130}
                height={35}
                unoptimized
                priority
                className="h-8 sm:h-9 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="hidden sm:block h-6 w-px bg-white/[0.12]" />
            <p className="text-[12px] font-medium text-slate-400 tracking-wide">
              Economic Courier &bull; Bhilwara Hub
            </p>
          </div>

          {/* Navigation Links with Human Hover Polish */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-7 gap-y-2.5 text-[13px] font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Reach: Refined Instagram Badge */}
          <div className="shrink-0">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-[13px] font-semibold text-slate-200 hover:text-white transition-all shadow-xs group"
              aria-label="Follow Economic Courier Bhilwara on Instagram"
            >
              <InstagramIcon size={16} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Crisp Hairline Divider */}
        <div className="border-t border-white/[0.08] my-6" />

        {/* Bottom Row: Human Grounded Copyright & Bhilwara Location Presence */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-400 pt-1">
          <p className="text-center sm:text-left text-slate-400">
            &copy; 2026 Economic Courier &bull; eCS World Wide Express. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-400 text-center sm:text-right text-[11px] sm:text-xs">
            <span>Pur Road, Bhilwara 311001</span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="text-slate-300 font-medium">Domestic &amp; International Express</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
