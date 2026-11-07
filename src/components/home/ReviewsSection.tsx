'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Clock,
  Headphones,
  Building2,
  Factory,
  Warehouse,
  Globe,
  ExternalLink,
  Users,
  CheckCircle2,
} from 'lucide-react';
import {
  GOOGLE_REVIEWS_SUMMARY,
  GOOGLE_REVIEWS_LIST,
  GoogleReview,
} from '@/lib/reviewsData';

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // 1 card on mobile, exactly 2 spacious cards on tablet and desktop
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 1 : 2;
      setVisibleCount(count);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, GOOGLE_REVIEWS_LIST.length - count)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = GOOGLE_REVIEWS_LIST.length;
  const maxIndex = Math.max(0, totalCards - visibleCount);

  // Auto-scroll carousel every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch handlers for smooth mobile swipe
  const minSwipeDistance = 45;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const renderCategoryIcon = (iconType: GoogleReview['categoryIcon']) => {
    switch (iconType) {
      case 'building':
        return <Building2 className="w-3.5 h-3.5 text-slate-500" />;
      case 'factory':
        return <Factory className="w-3.5 h-3.5 text-slate-500" />;
      case 'warehouse':
        return <Warehouse className="w-3.5 h-3.5 text-slate-500" />;
      case 'globe':
        return <Globe className="w-3.5 h-3.5 text-slate-500" />;
      case 'truck':
      default:
        return <Truck className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  return (
    <section
      id="reviews"
      className="py-10 sm:py-14 lg:py-16 bg-white scroll-mt-24 sm:scroll-mt-28 overflow-hidden"
    >
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Master Contained Card (Exact soft-blue canvas with clean contrast) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#F0F6FD] via-[#F5F9FE] to-[#EBF3FB] border border-[#DCE7F5] p-6 sm:p-8 lg:p-9 shadow-sm overflow-hidden">
          {/* Subtle background curved lines */}
          <div className="absolute inset-0 pointer-events-none opacity-35">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 450"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-50 120 C 250 80, 500 200, 800 110 C 1000 60, 1150 160, 1250 120"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                opacity="0.5"
              />
              <path
                d="M-20 220 C 300 180, 600 280, 950 190 C 1100 150, 1200 220, 1250 200"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Main Content Grid: Left Header & Rating + Right 2 Cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* =========================================================
                LEFT COLUMN: Clean Header, Unboxed Rating, Google Link
                (3D boxes removed completely as requested)
                ========================================================= */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-left">
              {/* Top Badge: Clean red pill */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-red-200/90 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                  <Star className="w-3 h-3 fill-current text-[#DC2626]" />
                  <span>CUSTOMER REVIEWS</span>
                </div>
              </div>

              {/* Headline: Clean, well-proportioned 2-line title */}
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-black text-[#1E3A8A] tracking-[-0.03em] leading-[1.18]">
                  Trusted by Businesses <br className="hidden sm:inline" />
                  <span className="text-[#DC2626]">Across the Corridor</span>
                </h2>
                {/* Red decorative accent line */}
                <div className="w-12 h-1 bg-[#DC2626] rounded-full mt-2.5" />
              </div>

              {/* Subtitle */}
              <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed font-normal max-w-sm">
                From textile traders to industrial suppliers, businesses across Bhilwara and nearby hubs rely on eCS for fast, safe deliveries.
              </p>

              {/* UNBOXED Rating Metrics (clean text directly on background) */}
              <div className="pt-1">
                <div className="flex items-center gap-4">
                  {/* Rating + 5 Stars underneath */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        {GOOGLE_REVIEWS_SUMMARY.rating}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        /{GOOGLE_REVIEWS_SUMMARY.maxRating}
                      </span>
                    </div>
                    <div className="flex items-center text-amber-400 gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Vertical divider */}
                  <div className="h-9 w-px bg-slate-300" />

                  {/* Verified Reviews Count */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-slate-700" />
                      <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                        {GOOGLE_REVIEWS_SUMMARY.totalReviews}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                      Verified Reviews
                    </div>
                  </div>
                </div>

                {/* Direct Link to Google Business Profile */}
                <a
                  href={GOOGLE_REVIEWS_SUMMARY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#DC2626] hover:text-[#B91C1C] hover:underline transition-colors group cursor-pointer"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* =========================================================
                RIGHT COLUMN: Exactly 2 Wide Cards on Desktop, 1 on Mobile
                ========================================================= */}
            <div
              className="lg:col-span-8 relative flex flex-col justify-center mt-4 lg:mt-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Frame with Side Arrows on Desktop */}
              <div className="relative">
                {/* Arrow Left (Desktop) */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous reviews"
                  className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-[#DC2626] hover:border-red-200 hover:scale-105 active:scale-95 transition-all items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Arrow Right (Desktop) */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next reviews"
                  className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-[#DC2626] hover:border-red-200 hover:scale-105 active:scale-95 transition-all items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Cards Viewport (Zero-drift pixel-perfect translation track + Touch Swipe) */}
                <div
                  ref={containerRef}
                  className="overflow-hidden py-1 w-full"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                    }}
                  >
                    {GOOGLE_REVIEWS_LIST.map((review) => (
                      <div
                        key={review.id}
                        className={`shrink-0 transition-all duration-300 ${
                          visibleCount === 1 ? 'w-full px-1' : 'w-1/2 px-2.5'
                        }`}
                      >
                        {/* Review Card: Crisp White Tile on Soft Blue Canvas (NO PHOTO DP!) */}
                        <div className="h-full bg-white rounded-2xl p-5 sm:p-5.5 border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                          <div>
                            {/* Card Header: Google Initial Badge (NO PHOTO DP) + Meta + Stars + Quote Mark */}
                            <div className="flex items-start justify-between gap-2.5 mb-3">
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                {/* Google Style Initial Circle */}
                                <div
                                  className={`w-9 h-9 rounded-full ${review.avatarColor} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs select-none`}
                                >
                                  {review.initials}
                                </div>

                                {/* Author Meta (Full text, no truncation!) */}
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <h3 className="text-[14.5px] font-bold text-[#1E3A8A] tracking-tight leading-snug">
                                      {review.name}
                                    </h3>
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                  </div>
                                  <p className="text-[11.5px] font-medium text-slate-500 leading-tight mt-0.5 truncate">
                                    {review.role}, {review.location}
                                  </p>
                                  {/* 5 Stars directly under role */}
                                  <div className="flex items-center text-amber-400 gap-0.5 mt-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className="w-3 h-3 fill-amber-400 text-amber-400"
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Quote mark in top-right */}
                              <span className="text-2xl text-slate-300 font-serif leading-none select-none shrink-0">
                                ❝
                              </span>
                            </div>

                            {/* Review Quote */}
                            <p className="text-[13px] text-slate-700 leading-relaxed font-normal min-h-[48px]">
                              &ldquo;{review.text}&rdquo;
                            </p>
                          </div>

                          {/* Bottom Tag & Timestamp */}
                          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-600 text-[11px] font-medium">
                              {renderCategoryIcon(review.categoryIcon)}
                              <span>{review.category}</span>
                            </div>
                            <span className="text-[10.5px] text-slate-500 font-medium">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pagination Indicators & Mobile Nav Controls */}
              <div className="flex items-center justify-center gap-2.5 mt-4">
                {/* Mobile Prev Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="md:hidden w-8 h-8 rounded-full bg-white border border-slate-200 shadow-2xs text-slate-700 hover:text-[#DC2626] active:scale-90 flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots with accessible 28px touch target */}
                <div className="flex items-center gap-0.5 px-1">
                  {[...Array(maxIndex + 1)].map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to review slide ${idx + 1}`}
                      className="h-7 w-7 flex items-center justify-center cursor-pointer p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-full"
                    >
                      <span
                        className={`transition-all duration-300 rounded-full ${
                          currentIndex === idx
                            ? 'w-6 h-1.5 bg-[#DC2626]'
                            : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Mobile Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next review"
                  className="md:hidden w-8 h-8 rounded-full bg-white border border-slate-200 shadow-2xs text-slate-700 hover:text-[#DC2626] active:scale-90 flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              BOTTOM TRUST STRIP: Responsive 4 Features
              (2x2 on small mobile, 4-in-a-row on desktop)
              ========================================================= */}
          <div className="relative z-10 mt-6 lg:mt-8 pt-5 border-t border-[#D5E3F2]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-0 md:divide-x md:divide-[#D5E3F2]">
              <div className="flex items-center justify-start sm:justify-center gap-2 px-2 sm:px-3 py-1">
                <Truck className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-900 tracking-tight">
                  Reliable Service
                </span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2 px-2 sm:px-3 py-1">
                <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-900 tracking-tight">
                  Safe &amp; Secure
                </span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2 px-2 sm:px-3 py-1">
                <Clock className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-900 tracking-tight">
                  On-Time Delivery
                </span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2 px-2 sm:px-3 py-1">
                <Headphones className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-900 tracking-tight">
                  Dedicated Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
