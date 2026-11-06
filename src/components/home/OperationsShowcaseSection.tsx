'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight, ExternalLink } from 'lucide-react';

interface ShowcasePhoto {
  id: string;
  title: string;
  imageSrc: string;
}

// Track 1 Photos (8 Authentic Ground Operations Photos)
const TRACK_1_PHOTOS: ShowcasePhoto[] = [
  {
    id: 'track1-1',
    title: 'Commercial Textile Fabric Swatches & Parcel Packaging',
    imageSrc: '/assets/services/card-textiles.webp',
  },
  {
    id: 'track1-2',
    title: 'Central Hub Dispatch Counter & Booking Desk',
    imageSrc: '/assets/office/about-collage.webp',
  },
  {
    id: 'track1-3',
    title: 'Express Delivery Van Fleet & Staff Parcel Handoff',
    imageSrc: '/assets/hero/hero-courier.webp',
  },
  {
    id: 'track1-4',
    title: 'Worldwide Air Express Cargo & Aircraft Staging',
    imageSrc: '/assets/services/card-international.webp',
  },
  {
    id: 'track1-5',
    title: 'Consignment Documentation, Dossiers & Mailers Desk',
    imageSrc: '/assets/services/card-documents.webp',
  },
  {
    id: 'track1-6',
    title: 'All-India Domestic Surface Express Sorting Terminal',
    imageSrc: '/assets/services/card-domestic.webp',
  },
  {
    id: 'track1-7',
    title: 'Commercial Multi-Axle Linehaul Trucks & Staging Bay',
    imageSrc: '/assets/business-fleet-3d.webp',
  },
  {
    id: 'track1-8',
    title: 'Central Logistics Hub Architecture & Multi-Bay Loading',
    imageSrc: '/assets/hub-3d-model.webp',
  },
];

// Track 2 Photos (8 Additional Authentic Ground Operations Photos)
const TRACK_2_PHOTOS: ShowcasePhoto[] = [
  {
    id: 'track2-1',
    title: 'Railway Station Sector Walk-in Intake Counter',
    imageSrc: '/assets/social/reel-3-railway-station.jpg',
  },
  {
    id: 'track2-2',
    title: 'Bhilwara Central Facility & Evening Package Sorting',
    imageSrc: '/assets/social/reel-4-bhilwara-hub.jpg',
  },
  {
    id: 'track2-3',
    title: 'West India Air & Road Regional Transit Routing Map',
    imageSrc: '/assets/network/delivery-network-3d.webp',
  },
  {
    id: 'track2-4',
    title: 'Real-Time Consignment Barcode Flow & Docket Tracking',
    imageSrc: '/assets/tracking-3d-model.webp',
  },
  {
    id: 'track2-5',
    title: 'Daily Linehaul Highway Corridor & Dedicated Routes',
    imageSrc: '/assets/routes/daily-dispatch-banner-hd.webp',
  },
  {
    id: 'track2-6',
    title: 'Main Walk-In Hub Floor & Customer Reception',
    imageSrc: '/assets/social/reel-1-bhilwara-visit.jpg',
  },
  {
    id: 'track2-7',
    title: 'Multi-City Shipping Routing & National Trade Corridors',
    imageSrc: '/assets/how-it-works/how-shipping-works-desktop.webp',
  },
  {
    id: 'track2-8',
    title: 'eCS International Priority Air Parcel Packaging Desk',
    imageSrc: '/assets/social/reel-2-international.jpg',
  },
];

export function OperationsShowcaseSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-[11px] font-extrabold tracking-wider uppercase shadow-2xs mb-3">
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
          <span>GROUND OPERATIONS SHOWCASE · BHILWARA IN ACTION</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          Real Operations. In Continuous Motion.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-2xl mx-auto mt-2 leading-relaxed">
          Daily parcel intake, specialized textile strapping, express van handoffs, and daily interstate linehaul dispatches opposite New Cloth Market.
        </p>
      </div>

      {/* =========================================================================
          DUAL-TRACK INFINITE AUTO-SLIDING MARQUEE (Clicking navigates to /gallery)
          ========================================================================= */}
      <div className="relative w-full space-y-3.5 sm:space-y-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 xs:w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 xs:w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20" />

        {/* Track 1: Slides Left to Right Continuously */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-slow flex items-center gap-3.5 sm:gap-4.5 group">
            {[...TRACK_1_PHOTOS, ...TRACK_1_PHOTOS].map((photo, idx) => (
              <Link
                key={`t1-${photo.id}-${idx}`}
                href="/gallery"
                aria-label={`View ${photo.title} in operations gallery`}
                className="group/card relative shrink-0 w-56 xs:w-64 sm:w-72 lg:w-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] block"
              >
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover group-hover/card:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Clean Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg transform scale-90 group-hover/card:scale-100 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Track 2: Slides Right to Left Continuously */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-reverse flex items-center gap-3.5 sm:gap-4.5 group">
            {[...TRACK_2_PHOTOS, ...TRACK_2_PHOTOS].map((photo, idx) => (
              <Link
                key={`t2-${photo.id}-${idx}`}
                href="/gallery"
                aria-label={`View ${photo.title} in operations gallery`}
                className="group/card relative shrink-0 w-56 xs:w-64 sm:w-72 lg:w-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] block"
              >
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover group-hover/card:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Clean Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg transform scale-90 group-hover/card:scale-100 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Pill Button */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          <span>Explore Full Operations Gallery (18 Photos &amp; Video Reels)</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </Link>
        <span className="text-xs text-slate-400 font-medium hidden sm:inline">
          Click any photo to open in gallery &bull; Hover to pause
        </span>
      </div>
    </section>
  );
}

export default OperationsShowcaseSection;
