'use client';

import React from 'react';
import Link from 'next/link';
import {
  Scissors,
  Truck,
  Camera,
  Search,
  MapPin,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

interface RelatedServiceCard {
  id: 'textiles' | 'business' | 'gallery' | 'tracking' | 'contact';
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
}

const ALL_RELATED_SERVICES: RelatedServiceCard[] = [
  {
    id: 'textiles',
    href: '/textile-logistics',
    icon: Scissors,
    title: 'Textile Swatch Logistics',
    description: 'Kapde ke sample cuts, shade cards, aur catalog books packing & express dispatch.',
    actionText: 'View Textile Service',
  },
  {
    id: 'business',
    href: '/business-solutions',
    icon: Truck,
    title: 'Commercial Business Solutions',
    description: 'Corporate accounts, scheduled factory pickup, aur monthly consolidated GST billing.',
    actionText: 'View B2B Accounts',
  },
  {
    id: 'gallery',
    href: '/gallery',
    icon: Camera,
    title: 'Operations Video Reels & Photos',
    description: 'Bhilwara hub ke real video reels aur ground photos ka complete archive dekhein.',
    actionText: 'Watch Gallery',
  },
  {
    id: 'tracking',
    href: '/track-shipment',
    icon: Search,
    title: 'Live Tracking Portal',
    description: 'Air waybill docket number enter karke parcel ka status check kijiye.',
    actionText: 'Track Parcel',
  },
  {
    id: 'contact',
    href: '/contact',
    icon: MapPin,
    title: 'Contact & Hub Location',
    description: 'Opposite New Cloth Market, Pur Road. Google Maps directions aur phone details.',
    actionText: 'Get Directions',
  },
];

interface RelatedServicesGridProps {
  currentPage: 'business' | 'contact' | 'textiles' | 'gallery';
  title?: string;
  tagline?: string;
}

export function RelatedServicesGrid({
  currentPage,
  title = 'Related Services & Operations',
  tagline = 'EXPLORE MORE',
}: RelatedServicesGridProps) {
  const cards = ALL_RELATED_SERVICES.filter((card) => card.id !== currentPage).slice(0, 4);

  return (
    <section className="py-8 sm:py-12 bg-white border-t border-slate-100">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
              {tagline}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#1E3A8A]">
              {title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1E3A8A] group-hover:text-[#DC2626] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626]">
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RelatedServicesGrid;

