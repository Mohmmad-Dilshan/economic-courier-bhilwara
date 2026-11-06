'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  MapPin,
  Camera,
  Film,
  ArrowRight,
  X,
  Maximize2,
  MessageCircle,
  Building2,
  Truck,
  Image as ImageIcon,
} from 'lucide-react';
import { InstagramIcon } from '@/components/common/InstagramIcon';
import { InquiryModal } from '@/components/home/InquiryModal';
import { BUSINESS_INFO } from '@/lib/constants';

// ─── Video Reels Data ──────────────────────────────────────────────────────────
export interface GalleryVideo {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  videoUrl: string;
  posterUrl: string;
  location: string;
}

const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: 'reel-1',
    title: 'Economic Courier Bhilwara Hub Visit',
    tag: 'HUB WALKTHROUGH',
    subtitle: 'Walk-in booking counter & sorting floor opposite New Cloth Market',
    videoUrl: '/assets/social/reel-1-bhilwara-visit.mp4',
    posterUrl: '/assets/social/reel-1-bhilwara-visit.jpg',
    location: 'Opp. New Cloth Market, Bhilwara',
  },
  {
    id: 'reel-2',
    title: 'International Air Cargo & Customs Desk',
    tag: 'GLOBAL EXPRESS',
    subtitle: 'Worldwide air parcel packing, export documents & express courier',
    videoUrl: '/assets/social/reel-2-international.mp4',
    posterUrl: '/assets/social/reel-2-international.jpg',
    location: 'eCS International Desk, Bhilwara',
  },
  {
    id: 'reel-3',
    title: 'Counter Booking & Consignment Handover',
    tag: 'RAILWAY STATION AREA',
    subtitle: 'Consignment weighing, printed docket receipt & booking intake',
    videoUrl: '/assets/social/reel-3-railway-station.mp4',
    posterUrl: '/assets/social/reel-3-railway-station.jpg',
    location: 'Pur Road / Railway Station Sector',
  },
  {
    id: 'reel-4',
    title: 'Textile Fabric Sample & Box Packaging',
    tag: 'COMMERCIAL DISPATCH',
    subtitle: 'Tamper-evident packaging, strapping & evening linehaul dispatch',
    videoUrl: '/assets/social/reel-4-bhilwara-hub.mp4',
    posterUrl: '/assets/social/reel-4-bhilwara-hub.jpg',
    location: 'Central Bhilwara Dispatch Facility',
  },
];

// ─── Photo Gallery Data (Pure Photos Only) ────────────────────────────────────
export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'hub' | 'textile' | 'fleet';
  categoryLabel: string;
  location: string;
  imageSrc: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Commercial Textile Fabric Swatches & Parcel Packaging',
    category: 'textile',
    categoryLabel: 'Textiles',
    location: 'Textile Market Sector, Bhilwara',
    imageSrc: '/assets/services/card-textiles.webp',
  },
  {
    id: 'photo-2',
    title: 'Central Hub Dispatch Counter & Booking Team',
    category: 'hub',
    categoryLabel: 'Hub Desk',
    location: 'Opp. New Cloth Market, Bhilwara',
    imageSrc: '/assets/office/about-collage.webp',
  },
  {
    id: 'photo-3',
    title: 'Express Delivery Van Fleet & Staff Parcel Handoff',
    category: 'fleet',
    categoryLabel: 'Fleet',
    location: 'Bhilwara Delivery Sector',
    imageSrc: '/assets/hero/hero-courier.webp',
  },
  {
    id: 'photo-4',
    title: 'Worldwide Air Express Cargo & Aircraft Staging',
    category: 'fleet',
    categoryLabel: 'Air Cargo',
    location: 'International Air Transit Gateways',
    imageSrc: '/assets/services/card-international.webp',
  },
  {
    id: 'photo-5',
    title: 'Consignment Documentation, Dossiers & Mailers Desk',
    category: 'hub',
    categoryLabel: 'Documentation',
    location: 'Walk-In Booking Desk, Bhilwara',
    imageSrc: '/assets/services/card-documents.webp',
  },
  {
    id: 'photo-6',
    title: 'All-India Domestic Surface Express Sorting Terminal',
    category: 'fleet',
    categoryLabel: 'Domestic Express',
    location: 'Central Dispatch Hub, Bhilwara',
    imageSrc: '/assets/services/card-domestic.webp',
  },
  {
    id: 'photo-7',
    title: 'Commercial Multi-Axle Linehaul Trucks & Staging Bay',
    category: 'fleet',
    categoryLabel: 'Linehaul Fleet',
    location: 'Bhilwara Highway Corridor',
    imageSrc: '/assets/business-fleet-3d.webp',
  },
  {
    id: 'photo-8',
    title: 'Central Logistics Hub Architecture & Multi-Bay Loading',
    category: 'hub',
    categoryLabel: 'Hub Terminal',
    location: 'Railway Staff Quarter Sector, Bhilwara',
    imageSrc: '/assets/hub-3d-model.webp',
  },
  {
    id: 'photo-9',
    title: 'West India Air & Road Regional Transit Routing Map',
    category: 'fleet',
    categoryLabel: 'Regional Network',
    location: 'Rajasthan & National Corridors',
    imageSrc: '/assets/network/delivery-network-3d.webp',
  },
  {
    id: 'photo-10',
    title: 'Real-Time Consignment Barcode Flow & Docket Tracking',
    category: 'hub',
    categoryLabel: 'Docket Tracking',
    location: 'Digital Verification Desk, Bhilwara',
    imageSrc: '/assets/tracking-3d-model.webp',
  },
  {
    id: 'photo-11',
    title: 'Daily Linehaul Highway Corridor & Dedicated Routes',
    category: 'fleet',
    categoryLabel: 'Highway Dispatch',
    location: 'Delhi-Mumbai Freight Corridor',
    imageSrc: '/assets/routes/daily-dispatch-banner-hd.webp',
  },
  {
    id: 'photo-12',
    title: 'Railway Station Sector Walk-in Intake Counter',
    category: 'hub',
    categoryLabel: 'Station Counter',
    location: 'Pur Road / Railway Station Sector',
    imageSrc: '/assets/social/reel-3-railway-station.jpg',
  },
  {
    id: 'photo-13',
    title: 'Bhilwara Central Facility & Evening Package Sorting',
    category: 'hub',
    categoryLabel: 'Sorting Floor',
    location: 'Central Bhilwara Dispatch Facility',
    imageSrc: '/assets/social/reel-4-bhilwara-hub.jpg',
  },
  {
    id: 'photo-14',
    title: 'Main Walk-In Hub Floor & Customer Reception',
    category: 'hub',
    categoryLabel: 'Hub Reception',
    location: 'Opp. New Cloth Market, Bhilwara',
    imageSrc: '/assets/social/reel-1-bhilwara-visit.jpg',
  },
  {
    id: 'photo-15',
    title: 'Multi-City Shipping Routing & National Trade Corridors',
    category: 'fleet',
    categoryLabel: 'Logistics Corridors',
    location: 'Trade Route Network',
    imageSrc: '/assets/how-it-works/how-shipping-works-desktop.webp',
  },
  {
    id: 'photo-16',
    title: 'eCS International Priority Air Parcel Packaging Desk',
    category: 'fleet',
    categoryLabel: 'Export Packaging',
    location: 'eCS International Desk, Bhilwara',
    imageSrc: '/assets/social/reel-2-international.jpg',
  },
  {
    id: 'photo-17',
    title: 'Internal Consignment Dispatch Bay & Sorting Floor',
    category: 'hub',
    categoryLabel: 'Dispatch Floor',
    location: 'Operations Floor, Bhilwara Hub',
    imageSrc: '/assets/social/reel-inside-ecs.jpg',
  },
  {
    id: 'photo-18',
    title: 'Counter Booking Intake, Weighing & Docket Generation',
    category: 'hub',
    categoryLabel: 'Intake Counter',
    location: 'Front Intake Counter, Bhilwara',
    imageSrc: '/assets/social/reel-1-inside-ecs.jpg',
  },
];

// ─── Single Video Reel Card Component ─────────────────────────────────────────
interface VideoCardProps {
  video: GalleryVideo;
  index: number;
  activeVideoId: string | null;
  onActivate: (id: string) => void;
}

function VideoCard({ video, index, activeVideoId, onActivate }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const isActive = activeVideoId === video.id;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      el.muted = isMuted;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          el.muted = true;
          el.play().catch(() => {});
        });
      }
    } else {
      el.pause();
      el.muted = true;
    }
  }, [isActive, isMuted]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (!isActive) {
      setIsMuted(false);
      onActivate(video.id);
    } else {
      if (isPlaying) {
        el.pause();
      } else {
        el.muted = isMuted;
        el.play().catch(() => {});
      }
    }
  };

  const handleToggleVoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (!isActive) {
      setIsMuted(false);
      onActivate(video.id);
    } else {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      el.muted = nextMuted;
    }
  };

  return (
    <div
      onClick={handleTogglePlay}
      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 transition-all duration-300 cursor-pointer select-none shadow-md hover:shadow-xl hover:-translate-y-1 ${
        isActive && isPlaying
          ? 'border-[#DC2626] ring-2 ring-[#DC2626]/40 shadow-[0_12px_32px_rgba(220,38,38,0.22)]'
          : 'border-slate-800 hover:border-red-400'
      }`}
      style={{ aspectRatio: '9/16' }}
    >
      {/* HTML5 Video */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        poster={video.posterUrl}
        playsInline
        loop
        muted={!isActive || isMuted}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Top Floating Badge Bar */}
      <div className="absolute top-2.5 sm:top-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/85 text-[10px] font-black text-white uppercase tracking-wider border border-white/20 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
          <span>{video.tag}</span>
        </span>

        {isActive && !isMuted ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DC2626] text-[9px] font-black text-white tracking-widest uppercase">
            VOICE ON
          </span>
        ) : (
          <span className="w-6 h-6 rounded-full bg-slate-950/80 text-white/90 flex items-center justify-center text-[10px] font-mono font-bold border border-white/20">
            0{index + 1}
          </span>
        )}
      </div>

      {/* Center Paused Button Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none bg-slate-950/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-current ml-0.5 text-slate-950" />
          </div>
        </div>
      )}

      {/* Bottom Gradient Overlay & Video Info */}
      <div className="absolute inset-x-0 bottom-0 pt-16 pb-3 px-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end text-white z-10">
        <div className="flex items-center gap-1 text-[10px] text-red-400 font-bold mb-1">
          <MapPin className="w-3 h-3 text-red-400 shrink-0" />
          <span className="truncate">{video.location}</span>
        </div>

        <h3 className="text-xs sm:text-sm font-black leading-tight line-clamp-1 mb-1">{video.title}</h3>
        <p className="text-[10px] sm:text-[11px] text-slate-300 font-normal line-clamp-1 leading-snug mb-2 sm:mb-2.5">
          {video.subtitle}
        </p>

        {/* Action Controls Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
          <button
            type="button"
            onClick={handleTogglePlay}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-white hover:text-red-400 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current text-red-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current text-white" />
                <span>Play</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleVoice}
              className="p-1 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
              title={isMuted ? 'Turn Sound On' : 'Mute'}
            >
              {isMuted || !isActive ? (
                <VolumeX className="w-3.5 h-3.5 text-slate-300" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
            </button>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded-full bg-white/15 hover:bg-[#DC2626] text-white transition-colors"
              title="Open on Instagram"
            >
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main GalleryView Component ───────────────────────────────────────────────
export function GalleryView() {
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'photos' | 'hub' | 'fleet'>('all');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxPhoto) {
        setLightboxPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto]);

  // Filter photos
  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeTab === 'all' || activeTab === 'photos') return true;
    if (activeTab === 'hub') return photo.category === 'hub';
    if (activeTab === 'fleet') return photo.category === 'fleet' || photo.category === 'textile';
    return false;
  });

  const showReels = activeTab === 'all' || activeTab === 'reels';
  const showPhotos = activeTab === 'all' || activeTab === 'photos' || activeTab === 'hub' || activeTab === 'fleet';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-16">
      {/* =========================================================================
          1. HERO SECTION WITH FULL PANORAMIC VISUAL BANNER
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-10 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#DC2626] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold" aria-current="page">
              Operations Gallery
            </span>
          </nav>

          {/* Full-Width Panoramic Visual Banner Card */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950 aspect-[16/9] xs:aspect-[16/8] sm:aspect-[21/9]">
            {/* Background High-Res 3D Fleet & Hub Image */}
            <Image
              src="/assets/business-fleet-3d.webp"
              alt="Economic Courier & eCS World Wide Express Bhilwara Operations Hub, Commercial Fleet & Dispatch Facility"
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-center"
            />

            {/* Dark Cinematic Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

            {/* Content Over Banner */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-12 text-white">
              <div className="max-w-3xl space-y-2 sm:space-y-3">
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold tracking-wider uppercase shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span>BHILWARA DISPATCH CENTER · OPP. NEW CLOTH MARKET</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                  Ground Operations &amp;{' '}
                  <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                    Video Reels
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs">
                  Authentic ground footage and photography from our central Bhilwara hub. Live parcel intake,
                  specialized textile sample packaging, and daily multi-city linehaul dispatch.
                </p>

                {/* Micro Stats Ribbon */}
                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] sm:text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-red-400" />
                    <span>4 Real Video Reels</span>
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>18 Ground Photos</span>
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Daily Linehauls</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="sticky top-[67px] sm:top-[71px] lg:top-[75px] z-30 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Media ({GALLERY_VIDEOS.length + GALLERY_PHOTOS.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reels')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'reels'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Video Reels ({GALLERY_VIDEOS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photos ({GALLERY_PHOTOS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('hub')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hub'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Hub &amp; Office</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('fleet')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'fleet'
                  ? 'bg-[#DC2626] text-white shadow-xs scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Fleet &amp; Textiles</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Bhilwara Operations Archive</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. REAL VIDEO REELS SECTION
          ========================================================================= */}
      {showReels && (
        <section className="py-8 sm:py-12">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                  <Film className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>AUTHENTIC VIDEO FOOTAGE</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Featured Operations Reels
                </h2>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Tap any reel to play with live voice &bull; Follow on Instagram
              </p>
            </div>

            {/* Video Reels Grid: 2 cols on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {GALLERY_VIDEOS.map((video, idx) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={idx}
                  activeVideoId={activeVideoId}
                  onActivate={(id) => setActiveVideoId(id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          4. PHOTO GALLERY SECTION (PURE PHOTOS ONLY - NO TEXT CARDS)
          ========================================================================= */}
      {showPhotos && (
        <section className="py-8 sm:py-12">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                  <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>OPERATIONS PHOTOGRAPHY ARCHIVE</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Ground Photos ({filteredPhotos.length})
                </h2>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Tap any photo to view in high resolution
              </p>
            </div>

            {/* Pure Photos Grid: 2 cols on mobile, 3 on tablet, 4 on desktop, 5 on wide screens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3.5 lg:gap-4">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxPhoto(photo)}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] select-none"
                >
                  {/* Photo Image */}
                  <Image
                    src={photo.imageSrc}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />

                  {/* Sleek Floating Category Tag */}
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-md bg-slate-950/75 backdrop-blur-md text-[9px] font-black uppercase text-white tracking-wider border border-white/15 opacity-90 group-hover:opacity-100 transition-opacity">
                      {photo.categoryLabel}
                    </span>
                  </div>

                  {/* Dark Vignette & Hover Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2.5 sm:p-3 text-white pointer-events-none z-10">
                    <div className="flex justify-end">
                      <span className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div>
                      <p className="text-[11px] sm:text-xs font-bold text-white leading-tight line-clamp-1 drop-shadow-sm">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          5. COMPACT BENTO CALL TO ACTION
          ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/30 border border-red-500/40 text-red-400 text-[11px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>WALK-IN DISPATCH COUNTER</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Visit Our Bhilwara Hub or Book Doorstep Pickup
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Located opposite New Cloth Market. Walk in for instant parcel weighing, tamper-evident
                textile packaging, and daily scheduled dispatches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Prepare Consignment Inquiry</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="https://wa.me/918955144444?text=Hello%20Economic%20Courier%20Bhilwara,%20I%20have%20an%20inquiry%20regarding%20parcel%20dispatch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LIGHTBOX PREVIEW MODAL
          ========================================================================= */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.title}
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-slate-800"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-white/10 bg-slate-950/80">
              <div className="flex items-center gap-2 max-w-[80%]">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                  {lightboxPhoto.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden">
              <Image
                src={lightboxPhoto.imageSrc}
                alt={lightboxPhoto.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 bg-slate-950 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium truncate">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                <span className="truncate">{lightboxPhoto.location}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setLightboxPhoto(null);
                  setInquiryModalOpen(true);
                }}
                className="shrink-0 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-2 px-4 rounded-xl shadow-xs transition-colors cursor-pointer text-xs"
              >
                Inquire for Shipment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal
        key={inquiryModalOpen ? 'open' : 'closed'}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService="other"
      />
    </div>
  );
}

export default GalleryView;
