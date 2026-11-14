'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { BUSINESS_INFO } from '@/lib/constants';
import { getMediaUrl } from '@/lib/cloudinary';

export interface RealMomentVideo {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  videoUrl: string;
  posterUrl: string;
  instagramUrl: string;
}

export const REAL_MOMENTS_DATA: RealMomentVideo[] = [
  {
    id: 'reel-1',
    title: 'Economic Courier Bhilwara Visit',
    tag: 'BHILWARA HUB VISIT',
    subtitle: 'Customer walkthrough opposite New Cloth Market',
    videoUrl: getMediaUrl('/assets/social/reel-1-bhilwara-visit.mp4', { type: 'video' }),
    posterUrl: getMediaUrl('/assets/social/reel-1-bhilwara-visit.jpg', { type: 'image' }),
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
  {
    id: 'reel-2',
    title: 'International Parcel Ka Sahi Tareeka',
    tag: 'INTERNATIONAL DESK',
    subtitle: 'Customs documentation & worldwide express guide',
    videoUrl: getMediaUrl('/assets/social/reel-2-international.mp4', { type: 'video' }),
    posterUrl: getMediaUrl('/assets/social/reel-2-international.jpg', { type: 'image' }),
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
  {
    id: 'reel-3',
    title: 'Counter Booking & Handover',
    tag: 'RAILWAY STATION AREA',
    subtitle: 'Live consignment weighing, booking & receipt',
    videoUrl: getMediaUrl('/assets/social/reel-3-railway-station.mp4', { type: 'video' }),
    posterUrl: getMediaUrl('/assets/social/reel-3-railway-station.jpg', { type: 'image' }),
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
  {
    id: 'reel-4',
    title: 'Secure Packaging & Direct Rates',
    tag: 'COMMERCIAL DISPATCH',
    subtitle: 'Commercial box dispatch & trade cargo safety',
    videoUrl: getMediaUrl('/assets/social/reel-4-bhilwara-hub.mp4', { type: 'video' }),
    posterUrl: getMediaUrl('/assets/social/reel-4-bhilwara-hub.jpg', { type: 'image' }),
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
];

interface VideoReelCardProps {
  moment: RealMomentVideo;
  index: number;
  activeVideoId: string | null;
  onActivateVideo: (id: string) => void;
}

// Staggered floating offsets ("ek upar, ek neeche halka sa")
const STAGGER_CLASSES = [
  'mt-0 lg:mt-0',           // Card 0: Baseline
  'mt-5 sm:mt-7 lg:mt-10',  // Card 1: Shifted down
  'mt-0 sm:mt-1 lg:mt-2',   // Card 2: Baseline (subtle organic rhythm)
  'mt-5 sm:mt-7 lg:mt-12',  // Card 3: Shifted down
];

function VideoReelCard({
  moment,
  index,
  activeVideoId,
  onActivateVideo,
}: VideoReelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isManuallyMuted, setIsManuallyMuted] = useState(false);

  const isActive = activeVideoId === moment.id;
  // Auto Voice ON: If active, unmuted by default (unless user manually muted)
  // If not active, always muted
  const isMuted = !isActive || isManuallyMuted;

  // React to activeVideoId changes:
  // When active: unmute & play with voice
  // When inactive: pause & mute
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.muted = isManuallyMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser blocks unmuted play
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    } else if (activeVideoId !== null) {
      video.pause();
      video.muted = true;
    }
  }, [isActive, activeVideoId, isManuallyMuted]);

  // Viewport-aware observer: Only pause playing video when scrolled completely out of view.
  // Video does NOT auto-buffer on scroll to preserve mobile bandwidth and sub-second load times.
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        // If card is scrolled out of view and video is playing, pause it to save battery & data
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Clicking the whole phone card:
  // - If not active: activate it immediately with AUTO VOICE ON!
  // - If already active: toggle play / pause (standard reel behavior)
  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button')) return;

    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      setIsManuallyMuted(false);
      onActivateVideo(moment.id);
    } else {
      if (isPlaying) {
        video.pause();
      } else {
        video.muted = isManuallyMuted;
        video.play().catch(() => {});
      }
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const video = videoRef.current;
      if (!video) return;

      if (!isActive) {
        setIsManuallyMuted(false);
        onActivateVideo(moment.id);
      } else {
        if (isPlaying) {
          video.pause();
        } else {
          video.muted = isManuallyMuted;
          video.play().catch(() => {});
        }
      }
    }
  };

  // Explicit Play / Pause Button in bottom pill
  const handlePlayPauseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      setIsManuallyMuted(false);
      onActivateVideo(moment.id);
    } else {
      if (isPlaying) {
        video.pause();
      } else {
        video.muted = isManuallyMuted;
        video.play().catch(() => {});
      }
    }
  };

  // Explicit Voice Mute / Unmute Button
  const handleVoiceToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      // Activating from voice button turns voice ON!
      setIsManuallyMuted(false);
      onActivateVideo(moment.id);
    } else {
      const nextMuted = !isManuallyMuted;
      setIsManuallyMuted(nextMuted);
      video.muted = nextMuted;
    }
  };

  const staggerClass = STAGGER_CLASSES[index % STAGGER_CLASSES.length];
  // Mobile requirement: Exactly 2 videos on mobile (index 0 and 1), 3 & 4 hidden on mobile, visible on sm+
  const mobileVisibilityClass = index >= 2 ? 'hidden sm:block' : 'block';

  const activeStyles =
    isActive && isPlaying
      ? 'border-[#DC2626] ring-3 sm:ring-4 ring-[#DC2626]/40 shadow-[0_22px_60px_rgba(220,38,38,0.28)] scale-[1.02] -translate-y-1'
      : 'border-slate-900 shadow-[0_14px_38px_rgba(15,23,42,0.16)] hover:shadow-[0_24px_55px_rgba(220,38,38,0.24)] hover:border-[#DC2626]/70 hover:-translate-y-1 hover:scale-[1.02]';

  return (
    <div
      ref={containerRef}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${moment.title} video reel`}
      className={`relative w-full h-[320px] xs:h-[350px] sm:h-[410px] lg:h-[440px] rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden bg-slate-950 border-[3px] sm:border-[3.5px] transition-all duration-300 ease-out group cursor-pointer select-none focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 ${mobileVisibilityClass} ${staggerClass} ${activeStyles} `}
    >
      {/* Phone Top Speaker Bezel */}
      <div className="absolute top-2 inset-x-0 z-20 pointer-events-none flex justify-center">
        <div className="w-8 sm:w-10 h-1 bg-slate-700/90 rounded-full" />
      </div>

      {/* HTML5 Video Element (Crisp, zero blur, lazy video streaming) */}
      <video
        ref={videoRef}
        src={moment.videoUrl}
        poster={moment.posterUrl}
        playsInline
        loop
        muted={isMuted}
        preload="none"
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Top Floating Badges: Category Tag + Active Voice Indicator / Index */}
      <div className="absolute top-3.5 left-2.5 right-2.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/90 text-[9px] sm:text-[11px] font-bold text-white tracking-wide border border-white/20 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="truncate max-w-[85px] sm:max-w-none">{moment.tag}</span>
        </span>

        {isActive && !isMuted ? (
          <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#DC2626] text-[9px] sm:text-[10px] font-black text-white tracking-wider uppercase shadow-lg border border-red-300/40 animate-pulse">
            <span className="flex items-center gap-0.5 h-2.5">
              <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" />
              <span className="w-0.5 h-3 bg-white rounded-full animate-bounce" />
              <span className="w-0.5 h-1.5 bg-white rounded-full animate-pulse" />
            </span>
            <span>VOICE ON</span>
          </span>
        ) : (
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950/85 flex items-center justify-center text-white/90 border border-white/20 text-[9px] sm:text-[10px] font-bold shadow-md">
            0{index + 1}
          </span>
        )}
      </div>

      {/* Center Paused Indicator (Sharp, zero blur) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none bg-slate-950/40 transition-all">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl transform scale-100 group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5 text-slate-950" />
          </div>
        </div>
      )}

      {/* Bottom Gradient Vignette for Typography (Sharp contrast, zero blur) */}
      <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />

      {/* Bottom Content Area: Title + Interactive Controls */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5 z-20 flex flex-col justify-end space-y-2 sm:space-y-3 pointer-events-auto">
        {/* Title & Subtitle */}
        <div className="space-y-0.5">
          <h3 className="text-white font-extrabold text-xs sm:text-base tracking-tight leading-snug drop-shadow-sm truncate">
            {moment.title}
          </h3>
          <p className="hidden sm:block text-slate-300 text-[11px] sm:text-xs leading-tight line-clamp-1 font-medium">
            {moment.subtitle}
          </p>
        </div>

        {/* SwipeTrip-Style Floating Control Pill (Play/Pause + Auto Voice Toggle) */}
        <div className="flex items-center justify-between pt-0.5 sm:pt-1">
          {/* Left Action Controls (Play/Pause & Voice Mute/Unmute buttons) */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-slate-950/90 border border-white/25 shadow-xl">
            {/* Play / Pause Toggle Button */}
            <button
              type="button"
              onClick={handlePlayPauseClick}
              aria-label={isPlaying ? 'Pause video' : 'Play video with voice'}
              title={isPlaying ? 'Pause video' : 'Play video with voice'}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-md"
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-slate-950" />
              ) : (
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5 text-slate-950" />
              )}
            </button>

            {/* Voice Mute / Unmute Button (Bright Red when Voice is ON) */}
            <button
              type="button"
              onClick={handleVoiceToggleClick}
              aria-label={isMuted ? 'Turn voice ON' : 'Turn voice OFF'}
              title={isMuted ? 'Click to turn Voice ON' : 'Voice is ON — Click to mute'}
              className={`h-7 sm:h-8 px-2 sm:px-2.5 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all active:scale-90 cursor-pointer shadow-md text-[10px] sm:text-[11px] font-bold ${
                !isMuted
                  ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C] border border-red-300/40 shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                  : 'bg-slate-800 text-white hover:bg-slate-700 border border-white/20'
              }`}
            >
              {!isMuted ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="hidden xs:inline">Voice ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span className="hidden xs:inline text-slate-300">Voice</span>
                </>
              )}
            </button>
          </div>

          {/* Right Instagram External Link Icon */}
          <a
            href={moment.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Watch ${moment.title} on Instagram`}
            title="Watch full clip on Instagram"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950/90 border border-white/25 text-white hover:bg-[#DC2626] flex items-center justify-center transition-all active:scale-90 shadow-xl"
          >
            <InstagramIcon size={13} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function RealMomentsSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handleActivateVideo = (id: string) => {
    setActiveVideoId(id);
  };

  return (
    <section id="gallery" className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] min-[1800px]:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Main Pale-Blue Frame */}
        <div className="bg-[#F0F5FA] rounded-3xl p-5 sm:p-8 lg:p-10 pb-10 sm:pb-14 lg:pb-20 border border-[#E2ECF5] shadow-xs">
          {/* Top Section Header: Left Typography + Right Instagram Action */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-12 reveal-init">
            <div className="space-y-2 sm:space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>LIVE FROM BHILWARA HUB</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.035em] leading-[1.08]">
                <span className="text-[#1E3A8A]">
                  Real people.
                </span>{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                  Real parcels.
                </span>
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                Live counter bookings, daily parcel dispatches &amp; international guidance directly from our Bhilwara hub.
              </p>
            </div>

            {/* Right Instagram CTA Button */}
            <div className="self-start sm:self-end shrink-0">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-red-500 text-red-600 bg-white hover:bg-red-50 text-xs sm:text-[13px] font-semibold shadow-2xs transition-all cursor-pointer active:scale-95"
              >
                <InstagramIcon size={14} className="text-[#DC2626]" />
                <span>Watch all reels on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </div>
          </div>

          {/* 
            Video Moments Cards:
            - Mobile (< sm): EXACTLY 2 VIDEOS in a fixed 2-column grid (grid-cols-2).
              Fits the screen 100% with NO SCROLLING!
              Staggered: Card 0 higher, Card 1 lower (SwipeTrip mobile style).
            - Tablet (sm to lg): 4 videos in 2x2 grid.
            - Desktop (lg+): ALL 4 VIDEOS in 4 columns (grid-cols-4), NO SCROLLING!
              Staggered "ek upar, ek neeche halka sa".
              - Zero blur, crisp sharp phone bezel, high-contrast controls!
              - Auto Voice ON when any card/play is tapped!
          */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 items-start">
            {REAL_MOMENTS_DATA.map((moment, index) => (
              <VideoReelCard
                key={moment.id}
                moment={moment}
                index={index}
                activeVideoId={activeVideoId}
                onActivateVideo={handleActivateVideo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealMomentsSection;
