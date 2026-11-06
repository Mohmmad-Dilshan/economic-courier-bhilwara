'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Camera,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

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

// Combined list for the full-screen phone-style lightbox slider
const ALL_SHOWCASE_PHOTOS = [...TRACK_1_PHOTOS, ...TRACK_2_PHOTOS];

export function OperationsShowcaseSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Touch Swipe coordinates for phone gallery sliding
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + ALL_SHOWCASE_PHOTOS.length) % ALL_SHOWCASE_PHOTOS.length : 0
    );
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % ALL_SHOWCASE_PHOTOS.length : 0
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % ALL_SHOWCASE_PHOTOS.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + ALL_SHOWCASE_PHOTOS.length) % ALL_SHOWCASE_PHOTOS.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNextPhoto();
    } else if (distance < -minSwipeDistance) {
      handlePrevPhoto();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
          DUAL-TRACK INFINITE AUTO-SLIDING MARQUEE
          ========================================================================= */}
      <div className="relative w-full space-y-3.5 sm:space-y-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 xs:w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 xs:w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20" />

        {/* Track 1: Slides Left to Right Continuously */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-slow flex items-center gap-3.5 sm:gap-4.5 group">
            {[...TRACK_1_PHOTOS, ...TRACK_1_PHOTOS].map((photo, idx) => {
              const originalIndex = idx % TRACK_1_PHOTOS.length;
              return (
                <div
                  key={`t1-${idx}`}
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="group/card relative shrink-0 w-56 xs:w-64 sm:w-72 lg:w-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3]"
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
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Track 2: Slides Right to Left Continuously */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-reverse flex items-center gap-3.5 sm:gap-4.5 group">
            {[...TRACK_2_PHOTOS, ...TRACK_2_PHOTOS].map((photo, idx) => {
              const originalIndex = TRACK_1_PHOTOS.length + (idx % TRACK_2_PHOTOS.length);
              return (
                <div
                  key={`t2-${idx}`}
                  onClick={() => setLightboxIndex(originalIndex)}
                  className="group/card relative shrink-0 w-56 xs:w-64 sm:w-72 lg:w-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3]"
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
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
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
          Tap any photo to expand &bull; Hover to pause
        </span>
      </div>

      {/* =========================================================================
          PHONE-STYLE FULL-SCREEN PHOTO VIEWER (SWIPE / SLIDE • PURE PHOTOS)
          ========================================================================= */}
      {lightboxIndex !== null && ALL_SHOWCASE_PHOTOS[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-black/96 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar: Counter & Close Only (No text tags, no buttons) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between z-20 w-full max-w-6xl mx-auto px-2"
          >
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 font-mono text-xs font-bold tracking-widest border border-white/10">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(ALL_SHOWCASE_PHOTOS.length).padStart(2, '0')}
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Carousel Area */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-auto px-2 sm:px-14 overflow-hidden"
          >
            {/* Desktop Previous Button */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="hidden sm:flex absolute left-2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white items-center justify-center transition-all cursor-pointer border border-white/15 backdrop-blur-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center">
              <Image
                src={ALL_SHOWCASE_PHOTOS[lightboxIndex].imageSrc}
                alt={ALL_SHOWCASE_PHOTOS[lightboxIndex].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Desktop Next Button */}
            <button
              type="button"
              onClick={handleNextPhoto}
              className="hidden sm:flex absolute right-2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white items-center justify-center transition-all cursor-pointer border border-white/15 backdrop-blur-md"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Touch Navigation Indicators */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-2 z-20 w-full max-w-md mx-auto pb-1 text-center"
          >
            {/* Mobile Swipe Buttons (For Easy 1-Tap Thumb Navigation) */}
            <div className="flex sm:hidden items-center justify-center gap-6">
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="px-4 py-2 rounded-full bg-white/10 active:bg-white/25 text-white text-xs font-bold flex items-center gap-1 border border-white/15"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <span className="text-[11px] text-white/50 font-medium">Swipe to browse</span>

              <button
                type="button"
                onClick={handleNextPhoto}
                className="px-4 py-2 rounded-full bg-white/10 active:bg-white/25 text-white text-xs font-bold flex items-center gap-1 border border-white/15"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="hidden sm:block text-[11px] text-white/40 font-medium tracking-wide">
              Use arrow keys or click arrows to slide &bull; Tap outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

