'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'ecs_intro_played_v1';

export function VideoIntroOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
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

  // Video playback & Voice management
  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    // 1. Start playback reliably (browsers always permit muted autoplay)
    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video is rolling. Now attempt to unmute sound immediately.
          try {
            video.muted = false;
            video.volume = 1.0;
          } catch {
            // Ignore if browser restricts initial unmuting
          }
        })
        .catch((err) => {
          console.info('Autoplay notice:', err?.message || err);
          // Crucial: DO NOT call handleClose! Keep the video modal open!
        });
    }

    // 2. Unmute voice instantly on the very first gesture anywhere
    const unmuteVoice = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
      }
    };

    const gestureEvents = ['pointerdown', 'pointermove', 'touchstart', 'keydown', 'click'];
    gestureEvents.forEach((evt) => {
      window.addEventListener(evt, unmuteVoice, { once: true });
    });

    return () => {
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, unmuteVoice);
      });
    };
  }, [isVisible]);

  // Keyboard escape to close
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleClose]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
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
      {/* Light Premium Modal Card (Clean corporate white card matching website) */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          // Unmute on clicking inside card as well
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1.0;
          }
        }}
        className={`relative w-full max-w-[860px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(15,23,42,0.08)] flex flex-col transition-all duration-300 ease-out ${
          isFading ? 'scale-95 translate-y-2' : 'scale-100 translate-y-0'
        }`}
      >
        {/* Clean Header Bar */}
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

        {/* Video Player Frame — 100% Clean (No buttons or text banners over video) */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            src="/assets/intro/economic-courier-intro.mp4"
            poster="/assets/intro/intro-poster.webp"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain sm:object-cover"
          />

          {/* Bottom Progress Bar inside Video Player */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/20 z-20 overflow-hidden"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Video playback progress"
          >
            <div
              className="h-full bg-gradient-to-r from-[#DC2626] to-[#EF4444] transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(220,38,38,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Light Bottom Info Bar */}
        <div className="px-4 py-2.5 sm:px-6 sm:py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="hidden sm:inline font-medium text-slate-600">
            Click outside or press Esc to close
          </span>
          <span className="sm:hidden font-medium text-slate-600">Tap outside to close</span>
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
