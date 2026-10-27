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
    title: 'Inside eCS Hub',
    tag: 'HUB OPERATIONS',
    subtitle: 'Parcel intake & sorting in Bhilwara',
    videoUrl: '/assets/social/reel-1-inside-ecs.mp4',
    posterUrl: '/assets/social/reel-1-inside-ecs.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
  {
    id: 'reel-2',
    title: '#TeamECS Ground Crew',
    tag: 'GROUND TEAM',
    subtitle: 'Dedicated fleet drivers & dispatch specialists',
    videoUrl: '/assets/social/reel-2-team.mp4',
    posterUrl: '/assets/social/reel-2-team.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
  {
    id: 'reel-3',
    title: 'Tamper-Evident Packing',
    tag: 'PACKING LAB',
    subtitle: 'Secure poly-mailers & waterproof strapping',
    videoUrl: '/assets/social/reel-3-packing.mp4',
    posterUrl: '/assets/social/reel-3-packing.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
  {
    id: 'reel-4',
    title: 'Daily Fleet Dispatch',
    tag: 'EXPRESS OUTFLOW',
    subtitle: 'Consignments loaded for air & highway transit',
    videoUrl: '/assets/social/reel-4-dispatch.mp4',
    posterUrl: '/assets/social/reel-4-dispatch.jpg',
    instagramUrl: BUSINESS_INFO.instagramUrl,
  },
];

interface VideoReelCardProps {
  moment: RealMomentVideo;
  index: number;
}

// Staggered floating offsets ("ek upar, ek neeche halka sa")
// Using margin-top ensures the stagger remains rock-solid and is never overridden by scroll reveal `translate: 0 0`
const STAGGER_CLASSES = [
  'mt-0 lg:mt-0',           // Card 0: Baseline
  'mt-5 sm:mt-7 lg:mt-10',  // Card 1: Shifted down
  'mt-0 sm:mt-1 lg:mt-2',   // Card 2: Baseline (subtle organic rhythm)
  'mt-5 sm:mt-7 lg:mt-12',  // Card 3: Shifted down
];

function VideoReelCard({ moment, index }: VideoReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play muted on mount per browser policies
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const staggerClass = STAGGER_CLASSES[index % STAGGER_CLASSES.length];
  // Mobile requirement: Exactly 2 videos on mobile (index 0 and 1), 3 & 4 hidden on mobile, visible on sm+
  const mobileVisibilityClass = index >= 2 ? 'hidden sm:block' : 'block';

  const delays = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];
  const delayClass = delays[index % delays.length];

  return (
    <div
      onClick={togglePlay}
      role="region"
      aria-label={`${moment.title} video reel`}
      className={`relative w-full h-[320px] xs:h-[350px] sm:h-[410px] lg:h-[440px] rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden bg-slate-950 border-[3px] sm:border-[3.5px] border-slate-900 shadow-[0_14px_38px_rgba(15,23,42,0.16)] hover:shadow-[0_24px_55px_rgba(220,38,38,0.24)] hover:border-[#DC2626]/70 transition-all duration-300 ease-out group cursor-pointer select-none ${mobileVisibilityClass} ${staggerClass} hover:-translate-y-1 hover:scale-[1.02] reveal-init reveal-scale ${delayClass}`}
    >
      {/* Phone Top Speaker Bezel */}
      <div className="absolute top-2 inset-x-0 z-20 pointer-events-none flex justify-center">
        <div className="w-8 sm:w-10 h-1 bg-slate-700/90 rounded-full" />
      </div>

      {/* HTML5 Video Element (Crisp, zero blur) */}
      <video
        ref={videoRef}
        src={moment.videoUrl}
        poster={moment.posterUrl}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Top Floating Badge Pill: Category / Live Status (Crisp solid dark, zero blur) */}
      <div className="absolute top-3.5 left-2.5 right-2.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/90 text-[9px] sm:text-[11px] font-bold text-white tracking-wide border border-white/20 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="truncate max-w-[85px] sm:max-w-none">{moment.tag}</span>
        </span>

        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950/85 flex items-center justify-center text-white/90 border border-white/20 text-[9px] sm:text-[10px] font-bold shadow-md">
          0{index + 1}
        </span>
      </div>

      {/* Center Paused Indicator (Sharp, zero blur) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none bg-slate-950/40 transition-all">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl transform scale-100 transition-transform">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5 text-slate-950" />
          </div>
        </div>
      )}

      {/* Bottom Gradient Vignette for Typography (Sharp contrast, zero blur) */}
      <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />

      {/* Bottom Content Area: Title + SwipeTrip Style Interactive Controls */}
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

        {/* SwipeTrip-Style Floating Control Pill (Play/Pause + Voice Mute/Unmute, crisp solid background) */}
        <div className="flex items-center justify-between pt-0.5 sm:pt-1">
          {/* Left Action Controls (Play/Pause & Mute/Unmute buttons) */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-slate-950/90 border border-white/25 shadow-xl">
            {/* Play / Pause Toggle Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause video' : 'Play video'}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-md"
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-slate-950" />
              ) : (
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5 text-slate-950" />
              )}
            </button>

            {/* Voice Mute / Unmute Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              title={isMuted ? 'Unmute sound' : 'Mute sound'}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-md ${
                isMuted
                  ? 'bg-slate-800 text-white hover:bg-slate-700 border border-white/20'
                  : 'bg-[#DC2626] text-white hover:bg-[#B91C1C]'
              }`}
            >
              {isMuted ? (
                <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              ) : (
                <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
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
  return (
    <section id="gallery" className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Pale-Blue Frame */}
        <div className="bg-[#F0F5FA] rounded-3xl p-5 sm:p-8 lg:p-10 pb-10 sm:pb-14 lg:pb-20 border border-[#E2ECF5] shadow-xs">
          {/* Top Section Header: Left Typography + Right Instagram Action */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-12 reveal-init">
            <div className="space-y-2 sm:space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-red-200/80 text-[#DC2626] text-[11px] font-extrabold tracking-widest uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                <span>REAL MOMENTS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.035em] leading-[1.08]">
                <span className="bg-gradient-to-b from-slate-900 to-slate-800 bg-clip-text text-transparent">
                  Real people.
                </span>{' '}
                <span className="bg-gradient-to-r from-[#DC2626] via-[#E11D48] to-[#EF4444] bg-clip-text text-transparent">
                  Real parcels.
                </span>
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                A closer look at our operations, team and the people behind every delivery in Bhilwara.
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
                <span>Watch our Instagram reels</span>
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
          */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 items-start">
            {REAL_MOMENTS_DATA.map((moment, index) => (
              <VideoReelCard key={moment.id} moment={moment} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealMomentsSection;
