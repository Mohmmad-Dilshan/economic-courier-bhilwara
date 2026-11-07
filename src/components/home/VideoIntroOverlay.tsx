'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Play, Pause, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'ecs_intro_played_v1';

export function VideoIntroOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [progress, setProgress] = useState(0);
  const [canDismissByBackdrop, setCanDismissByBackdrop] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Restore scroll locks completely
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.body.style.touchAction = '';
  }, []);

  // Close handler with smooth fade
  const handleClose = useCallback(
    (immediate = false) => {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        // Ignore storage errors
      }

      if (videoRef.current) {
        videoRef.current.pause();
      }

      unlockScroll();

      if (immediate) {
        setIsVisible(false);
        setIsFading(false);
      } else {
        setIsFading(true);
        const timer = setTimeout(() => {
          setIsVisible(false);
          setIsFading(false);
        }, 300);
        return () => clearTimeout(timer);
      }
    },
    [unlockScroll]
  );

  // Initial check on mount
  useEffect(() => {
    try {
      const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY);
      if (alreadyPlayed === 'true') {
        return;
      }

      // Check prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        sessionStorage.setItem(STORAGE_KEY, 'true');
        return;
      }

      // Activate intro popup
      setIsVisible(true);
    } catch {
      // Graceful fallback
    }
  }, []);

  // Strict scroll lock while video popup is open
  useEffect(() => {
    if (!isVisible) return;

    // Strict lock on body & html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Prevent wheel & touchmove scrolling on window
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    // Enable backdrop dismissal only after 600ms grace period to avoid instant accidental dismissal
    const graceTimer = setTimeout(() => {
      setCanDismissByBackdrop(true);
    }, 600);

    return () => {
      clearTimeout(graceTimer);
      unlockScroll();
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isVisible, unlockScroll]);

  // Video playback & Voice initialization
  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    // Direct unmuted playback attempt
    video.volume = 1.0;
    video.muted = false;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser policy holds back unmuted autoplay on cold reload, start video smoothly
          video.muted = true;
          video.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              setIsPlaying(false);
            });
        });
    }

    // Unmute voice immediately on ANY real user activation (click, touch, key)
    const unmuteOnUserAction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
      }
    };

    window.addEventListener('click', unmuteOnUserAction);
    window.addEventListener('pointerdown', unmuteOnUserAction);
    window.addEventListener('touchstart', unmuteOnUserAction);
    window.addEventListener('keydown', unmuteOnUserAction);

    return () => {
      window.removeEventListener('click', unmuteOnUserAction);
      window.removeEventListener('pointerdown', unmuteOnUserAction);
      window.removeEventListener('touchstart', unmuteOnUserAction);
      window.removeEventListener('keydown', unmuteOnUserAction);
    };
  }, [isVisible]);

  // Play / Pause toggle handler (Click on video or play/pause button)
  const togglePlayPause = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Resume and explicitly guarantee voice is playing
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Play error:', err);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Keyboard controls: Space to play/pause, Escape to close
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose(false);
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleClose]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);
      if (videoRef.current.duration) {
        const dur = videoRef.current.duration;
        setDuration(dur);
        setProgress((cur / dur) * 100);
      }
      setIsPlaying(!videoRef.current.paused);
    }
  };

  // Only close on ended if video genuinely reached the completion mark
  const handleEnded = () => {
    if (videoRef.current && videoRef.current.currentTime > 25) {
      handleClose(false);
    }
  };

  const handleBackdropClick = () => {
    if (canDismissByBackdrop) {
      handleClose(false);
    }
  };

  const handleProgressSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPct = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newPct * video.duration;
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Economic Courier Brand Video Introduction"
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[99999] p-3 sm:p-5 md:p-8 flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out select-none overscroll-none touch-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Light Premium Modal Card */}
      <div
        onClick={(e) => {
          e.stopPropagation(); // Stop click inside card from closing backdrop
          // Ensure voice is unmuted on click anywhere in card
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1.0;
          }
        }}
        className={`relative w-full max-w-[880px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(15,23,42,0.08)] flex flex-col transition-all duration-300 ease-out ${
          isFading ? 'scale-95 translate-y-2' : 'scale-100 translate-y-0'
        }`}
      >
        {/* Header Bar — Brand Badge & Skip Button only */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-white border-b border-slate-100 flex items-center justify-between z-10 shrink-0">
          {/* Brand Badge */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DC2626]" />
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[13px] sm:text-[14px] font-black text-[#1E3A8A] tracking-tight">
                Economic Courier
              </span>
              <span className="text-slate-300 text-xs hidden sm:inline">|</span>
              <span className="text-slate-500 text-xs font-semibold hidden sm:inline">
                eCS World Wide Express
              </span>
            </div>
          </div>

          {/* Clean Skip Button */}
          <button
            type="button"
            onClick={() => handleClose(false)}
            aria-label="Skip video and view website"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B] text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Video Player Frame — Click on video toggles Play/Pause */}
        <div
          onClick={togglePlayPause}
          className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center cursor-pointer group"
        >
          <video
            ref={videoRef}
            src="/assets/intro/economic-courier-intro.mp4"
            poster="/assets/intro/intro-poster.webp"
            autoPlay
            playsInline
            preload="auto"
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain sm:object-cover"
          />

          {/* Big Center Play Button Overlay when Paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-opacity z-20">
              <button
                type="button"
                onClick={togglePlayPause}
                aria-label="Resume video"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
              </button>
            </div>
          )}

          {/* Interactive Progress Bar at bottom of video frame */}
          <div
            onClick={handleProgressSeek}
            className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-white/25 hover:h-2.5 transition-all z-20 overflow-hidden cursor-pointer"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Video playback progress (click to seek)"
          >
            <div
              className="h-full bg-gradient-to-r from-[#DC2626] to-[#EF4444] transition-[width] duration-75 ease-linear shadow-[0_0_8px_rgba(220,38,38,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Player Controls Bar — Play/Pause & Elapsed Time */}
        <div className="px-4 py-2.5 sm:px-6 sm:py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          {/* Left: Play/Pause Button & Time Display */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-800 border border-slate-200/90 shadow-2xs transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-slate-800 text-slate-800" />
              ) : (
                <Play className="w-4 h-4 fill-[#DC2626] text-[#DC2626] ml-0.5" />
              )}
            </button>

            {/* Elapsed Time */}
            <span className="font-mono text-[11px] sm:text-xs text-slate-500 font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Right Action: Continue to Website */}
          <button
            type="button"
            onClick={() => handleClose(false)}
            className="inline-flex items-center gap-1 font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors cursor-pointer"
          >
            <span>Continue to Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
