'use client';

import { useState, type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  Truck,
  Building2,
  Plane,
  Compass,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { ACTIVE_NETWORK_PARTNERS } from '../../lib/partnersData';
import type { NetworkPartner, PartnerRole } from '../../types/partner';

// ─── Local Types ──────────────────────────────────────────────────────────────

type FilterCategory = 'all' | 'surface' | 'air-inbound' | 'regional';

interface FilterOption {
  id: FilterCategory;
  label: string;
  Icon: FC<{ className?: string }>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCategoryMeta(category: PartnerRole) {
  const map: Record<PartnerRole, { pill: string; dot: string }> = {
    'inbound-channel': {
      pill: 'bg-blue-50/90 text-blue-700 border-blue-200/80',
      dot: 'bg-blue-600',
    },
    'commercial-linehaul': {
      pill: 'bg-slate-100 text-slate-800 border-slate-300/80',
      dot: 'bg-slate-700',
    },
    'regional-network': {
      pill: 'bg-emerald-50/90 text-emerald-700 border-emerald-200/80',
      dot: 'bg-emerald-600',
    },
    'domestic-express': {
      pill: 'bg-sky-50/90 text-sky-700 border-sky-200/80',
      dot: 'bg-sky-600',
    },
    'international-air': {
      pill: 'bg-purple-50/90 text-purple-700 border-purple-200/80',
      dot: 'bg-purple-600',
    },
    'trade-corridor': {
      pill: 'bg-amber-50/90 text-amber-800 border-amber-300/80',
      dot: 'bg-amber-600',
    },
  };
  return map[category] ?? { pill: 'bg-slate-100 text-slate-700 border-slate-200', dot: 'bg-slate-500' };
}


function matchesFilter(partner: NetworkPartner, filter: FilterCategory): boolean {
  if (filter === 'all') return true;
  if (filter === 'surface') {
    return partner.category === 'commercial-linehaul' || partner.category === 'domestic-express';
  }
  if (filter === 'air-inbound') {
    return partner.category === 'inbound-channel' || partner.category === 'international-air';
  }
  if (filter === 'regional') {
    return partner.category === 'regional-network' || partner.category === 'trade-corridor';
  }
  return true;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function NetworkPartnersSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterOptions: FilterOption[] = [
    {
      id: 'all',
      label: 'All Carriers',
      Icon: Layers,
    },
    {
      id: 'surface',
      label: 'Surface & Linehaul',
      Icon: Truck,
    },
    {
      id: 'air-inbound',
      label: 'Air & Inbound Channels',
      Icon: Plane,
    },
    {
      id: 'regional',
      label: 'Regional & Trade',
      Icon: Compass,
    },
  ];

  const filteredPartners = ACTIVE_NETWORK_PARTNERS.filter((p) => matchesFilter(p, activeFilter));

  // Duplicate for seamless infinite marquee loop
  const marqueePartners = [...ACTIVE_NETWORK_PARTNERS, ...ACTIVE_NETWORK_PARTNERS];

  return (
    <section
      id="courier-partners"
      className="relative py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200/80 overflow-hidden"
      aria-label="Courier Partner and Delivery Network"
    >
      {/* Modern technical dot-grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient luminous glow accents */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-red-500/8 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

        {/* ── 1. SECTION HEADER (Title & 3D Logistics Visual Object) ─────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pb-4 border-b border-slate-200/70">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-700" />
              <span>DISPATCH &amp; LINEHAUL CONNECTIONS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#0F172A] leading-[1.14]">
              Our Courier Partner &amp;{' '}
              <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#B91C1C] bg-clip-text text-transparent">
                Delivery Network
              </span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Consignments booked at our Bhilwara hub are routed through established regional
              linehauls, national express operators, and global air cargo networks based on cargo
              classification, transit urgency, and trade destination.
            </p>
          </div>

          {/* Right: Standalone Floating 3D eCS Aircraft Object (Icon Style) */}
          <div className="relative shrink-0 hidden sm:flex items-center justify-center lg:justify-end z-10 pointer-events-none select-none">
            <div className="relative w-64 sm:w-72 lg:w-[320px] xl:w-[360px] aspect-[1024/682] transition-transform duration-700 ease-out hover:scale-105 filter drop-shadow-[0_12px_28px_rgba(220,38,38,0.14)]">
              <Image
                src="/assets/network/ecs-airplane-3d.png"
                alt="eCS World Wide Express 3D Air Cargo Airplane Object"
                fill
                sizes="(max-width: 1024px) 280px, 360px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── 2. CONTINUOUS PARTNER BRAND MARQUEE ───────────────────────────── */}
        <div className="relative py-1.5 sm:py-2 overflow-hidden rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_16px_rgba(15,23,42,0.03)]">
          {/* Gradient Edge Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee py-1.5 sm:py-2 gap-3 sm:gap-4 items-center">
            {marqueePartners.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-50/80 border border-slate-200/70 shrink-0 hover:bg-white hover:border-red-300 hover:shadow-xs transition-all"
              >
                <div className="relative h-6 sm:h-7 w-14 sm:w-16 flex items-center justify-center">
                  <Image
                    src={item.logoAsset}
                    alt={item.name}
                    width={70}
                    height={28}
                    className="max-h-5 sm:max-h-6 w-auto object-contain"
                  />
                </div>
                <div className="text-left border-l border-slate-200 pl-2.5 sm:pl-3">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 block whitespace-nowrap">
                    {item.shortName}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono block whitespace-nowrap">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. INTERACTIVE SEGMENTED CATEGORY TABS ────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center p-1 sm:p-1.5 bg-slate-200/70 backdrop-blur-md rounded-xl sm:rounded-2xl border border-slate-200/90 gap-1 sm:gap-1.5 flex-wrap">
            {filterOptions.map((tab) => {
              const isActive = activeFilter === tab.id;
              const { Icon } = tab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-[0_2px_10px_rgba(15,23,42,0.08)] scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                      isActive ? 'text-[#DC2626]' : 'text-slate-400'
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official carrier linehauls &amp; tracking portals</span>
          </div>
        </div>

        {/* ── 4. CARDS GRID — 2-col mobile, 3-col desktop ───────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {filteredPartners.map((partner) => {
            const isDirect =
              partner.trackingMode === 'direct-portal' && Boolean(partner.trackingUrl);
            const trackingHref = partner.trackingUrl ?? '#';
            const meta = getCategoryMeta(partner.category);
            const isWideBanner = activeFilter === 'all' && partner.id === 'ups';

            if (isWideBanner) {
              return (
                <div
                  key={partner.id}
                  className="group relative col-span-2 lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-red-400/80 p-4 sm:p-7 lg:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top Radiant Glow on Hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 flex-1">
                    {/* Logo Plate */}
                    <div className="relative h-14 w-28 sm:h-18 sm:w-36 lg:h-20 lg:w-44 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50/90 border border-slate-200/80 p-2.5 sm:p-3.5 flex items-center justify-center group-hover:border-slate-300 group-hover:shadow-[0_6px_16px_rgba(15,23,42,0.06)] transition-all duration-300 shrink-0">
                      <Image
                        src={partner.logoAsset}
                        alt={`${partner.name} logo`}
                        width={140}
                        height={56}
                        className="max-h-9 sm:max-h-12 lg:max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-2 sm:space-y-3 flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold tracking-tight uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg border ${meta.pill}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                          <span>{partner.categoryLabel}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-semibold text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          <span>Live Portal ↗</span>
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base sm:text-xl font-black tracking-tight text-[#0F172A] group-hover:text-[#DC2626] transition-colors duration-200">
                          {partner.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                          {partner.roleDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="shrink-0 sm:w-56 lg:w-64 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <a
                      href={trackingHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-between w-full py-2.5 sm:py-3.5 lg:py-4 px-3 sm:px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-900 group-hover:bg-[#DC2626] shadow-[0_2px_8px_rgba(15,23,42,0.1)] group-hover:shadow-[0_8px_20px_rgba(220,38,38,0.25)] transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    >
                      <span className="sm:hidden">Track on Portal</span>
                      <span className="hidden sm:inline">Track on {partner.shortName} Portal</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={partner.id}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-red-400/80 p-3 sm:p-5 lg:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Radiant Glow on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div className="space-y-3 sm:space-y-4">
                  {/* Logo Plate */}
                  <div className="relative h-12 sm:h-16 w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-50/90 border border-slate-200/80 p-2 sm:p-3 flex items-center justify-center group-hover:border-slate-300 group-hover:shadow-xs transition-all duration-300">
                    <Image
                      src={partner.logoAsset}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={48}
                      className="max-h-7 sm:max-h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Category Badge & Status */}
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1 text-[8.5px] sm:text-[10px] font-mono font-bold tracking-tight uppercase px-1.5 sm:px-2 py-0.5 rounded-md border ${meta.pill} truncate max-w-full`}
                    >
                      <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${meta.dot} shrink-0`} />
                      <span className="truncate">{partner.categoryLabel}</span>
                    </span>

                    {isDirect ? (
                      <span className="inline-flex items-center gap-1 text-[8.5px] sm:text-[10px] font-semibold text-emerald-700 shrink-0">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-600" />
                        <span className="hidden sm:inline">Live Portal ↗</span>
                        <span className="sm:hidden">Live</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[8.5px] sm:text-[10px] font-semibold text-amber-800 shrink-0">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-600" />
                        <span>Counter</span>
                      </span>
                    )}
                  </div>

                  {/* Partner Name & Role */}
                  <div className="space-y-1 pt-0.5">
                    <h3 className="text-xs sm:text-base lg:text-lg font-black tracking-tight text-[#0F172A] group-hover:text-[#DC2626] transition-colors duration-200 leading-snug line-clamp-1 sm:line-clamp-none">
                      {partner.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {partner.roleDescription}
                    </p>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-slate-100">
                  {isDirect ? (
                    <a
                      href={trackingHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-between w-full py-2 sm:py-3 px-2 sm:px-3.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs lg:text-sm font-bold text-white bg-slate-900 group-hover:bg-[#DC2626] shadow-xs group-hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    >
                      <span className="sm:hidden">Track ↗</span>
                      <span className="hidden sm:inline">Track on {partner.shortName} Portal</span>
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 shrink-0" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between w-full py-2 sm:py-3 px-2 sm:px-3.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs lg:text-sm font-bold text-amber-950 bg-amber-100/80 hover:bg-amber-200/90 border border-amber-300/80 transition-all active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
                      title="Verify consignment at Pur Road counter"
                    >
                      <span className="flex items-center gap-1 sm:gap-1.5 truncate">
                        <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-800 shrink-0" />
                        <span className="sm:hidden truncate">Counter Desk</span>
                        <span className="hidden sm:inline truncate">Verify at Counter</span>
                      </span>
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-800 shrink-0" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NetworkPartnersSection;