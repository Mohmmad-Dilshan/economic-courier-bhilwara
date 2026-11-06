'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Building2,
  ArrowRight,
} from 'lucide-react';

export interface RouteStopData {
  id: string;
  name: string;
  hindiName?: string;
  tag: string;
  type: 'origin' | 'trade' | 'textile' | 'industrial' | 'gateway';
  description: string;
  x: number; // Desktop SVG coordinate (0 - 1200)
  y: number; // Desktop SVG coordinate (0 - 600)
  mobX: number; // Mobile SVG coordinate (0 - 380)
  mobY: number; // Mobile SVG coordinate (0 - 960)
  labelPosition?: 'top' | 'bottom';
  mobLabelSide: 'left' | 'right' | 'center';
}

export const ROUTE_STOPS: RouteStopData[] = [
  {
    id: 'bhilwara-hub',
    name: 'Bhilwara Main Hub',
    hindiName: 'भीलवाड़ा मुख्य हब',
    tag: 'Origin Hub',
    type: 'origin',
    description: 'Central sorting hub & origin counter opposite New Cloth Market. All consignments booked before 10:00 AM are batched for today’s morning dispatch.',
    x: 80,
    y: 150,
    mobX: 110,
    mobY: 80,
    labelPosition: 'top',
    mobLabelSide: 'right',
  },
  {
    id: 'vijaynagar',
    name: 'Vijaynagar',
    hindiName: 'विजयनगर',
    tag: 'Trade & Commercial',
    type: 'trade',
    description: 'Direct trade consignments, commercial retail parcels, and express document courier.',
    x: 320,
    y: 115,
    mobX: 270,
    mobY: 215,
    labelPosition: 'top',
    mobLabelSide: 'left',
  },
  {
    id: 'gulabpura',
    name: 'Gulabpura',
    hindiName: 'गुलाबपुरा',
    tag: 'Textile & Spinning Hub',
    type: 'textile',
    description: 'Yarn sample mailers, spinning mill trade correspondence, and swatch deliveries.',
    x: 580,
    y: 170,
    mobX: 110,
    mobY: 355,
    labelPosition: 'top',
    mobLabelSide: 'right',
  },
  {
    id: 'agucha',
    name: 'Agucha (Rampura)',
    hindiName: 'आगूचा (Rampura)',
    tag: 'Industrial & Mining',
    type: 'industrial',
    description: 'Mining spare parts, industrial supplies, urgent technical documentation, and tenders.',
    x: 880,
    y: 165,
    mobX: 270,
    mobY: 495,
    labelPosition: 'top',
    mobLabelSide: 'left',
  },
  {
    id: 'gangrar',
    name: 'Gangrar',
    hindiName: 'गंगरार',
    tag: 'Manufacturing Belt',
    type: 'industrial',
    description: 'Heavy industrial linehaul connectivity and factory parcel dispatch corridor.',
    x: 190,
    y: 410,
    mobX: 110,
    mobY: 635,
    labelPosition: 'top',
    mobLabelSide: 'right',
  },
  {
    id: 'chittorgarh',
    name: 'Chittorgarh',
    hindiName: 'चित्तौड़गढ़',
    tag: 'District Gateway',
    type: 'gateway',
    description: 'District headquarters express delivery, commercial goods, documents, and cargo forwarding.',
    x: 530,
    y: 510,
    mobX: 270,
    mobY: 775,
    labelPosition: 'bottom',
    mobLabelSide: 'left',
  },
  {
    id: 'nimbahera',
    name: 'Nimbahera',
    hindiName: 'निम्बाहेड़ा',
    tag: 'Industrial & Cement Corridor',
    type: 'industrial',
    description: 'Factory-to-hub express courier, commercial billing mailers, and priority trade cargo.',
    x: 960,
    y: 510,
    mobX: 190,
    mobY: 895,
    labelPosition: 'top',
    mobLabelSide: 'center',
  },
];

// Desktop panoramic smooth SVG road (viewBox: 0 0 1200 600)
const DESKTOP_ROAD_PATH = [
  'M 80 150',
  'C 160 200, 230 160, 320 115',
  'C 410 70, 490 210, 580 170',
  'C 670 130, 780 210, 880 165',
  'C 980 120, 1125 175, 1125 265',
  'C 1125 355, 1020 375, 920 385',
  'C 700 405, 400 375, 190 410',
  'C 100 425, 70 485, 130 510',
  'C 240 535, 390 485, 530 510',
  'C 670 535, 820 485, 960 510',
  'C 1010 520, 1050 515, 1070 515',
].join(' ');

// Mobile vertical serpentine road (viewBox: 0 0 380 960)
const MOBILE_ROAD_PATH = [
  'M 110 80',
  'C 110 145, 270 150, 270 215',
  'C 270 280, 110 290, 110 355',
  'C 110 420, 270 430, 270 495',
  'C 270 560, 110 570, 110 635',
  'C 110 700, 270 710, 270 775',
  'C 270 835, 190 850, 190 895',
].join(' ');

// Red directional chevrons for desktop
const CHEVRONS = [
  { lengthFraction: 0.11 },
  { lengthFraction: 0.23 },
  { lengthFraction: 0.37 },
  { lengthFraction: 0.49 },
  { lengthFraction: 0.62 },
  { lengthFraction: 0.73 },
  { lengthFraction: 0.87 },
];

// Mobile chevrons
const MOB_CHEVRONS = [
  { lengthFraction: 0.12 },
  { lengthFraction: 0.28 },
  { lengthFraction: 0.45 },
  { lengthFraction: 0.61 },
  { lengthFraction: 0.78 },
  { lengthFraction: 0.92 },
];

export function AnimatedRouteMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  // Desktop rider position
  const [riderPos, setRiderPos] = useState({ x: 80, y: 150, angle: 0, isFacingLeft: false });
  // Mobile rider position
  const [mobRiderPos, setMobRiderPos] = useState({ x: 110, y: 80, angle: 0 });

  const [activeStopIndex, setActiveStopIndex] = useState(0);
  const [selectedStop, setSelectedStop] = useState<RouteStopData>(ROUTE_STOPS[0]);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);

  // Desktop lengths
  const [totalLength, setTotalLength] = useState(0);
  const [completedLength, setCompletedLength] = useState(0);
  const [chevronPoints, setChevronPoints] = useState<
    Array<{ x: number; y: number; rot: number; dist: number }>
  >([]);

  // Mobile lengths
  const [mobTotalLength, setMobTotalLength] = useState(0);
  const [mobCompletedLength, setMobCompletedLength] = useState(0);
  const [mobChevronPoints, setMobChevronPoints] = useState<
    Array<{ x: number; y: number; rot: number; dist: number }>
  >([]);

  // Animation progress refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const stopDistancesRef = useRef<number[]>([]);
  const mobStopDistancesRef = useRef<number[]>([]);

  // Viewport-aware initialization: Defer SVG path math until section approaches viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (typeof IntersectionObserver === 'undefined') {
      const timer = setTimeout(() => setIsNearViewport(true), 0);
      return () => clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Initialize Desktop path geometry
  useEffect(() => {
    if (!isNearViewport) return;
    const dPath = desktopPathRef.current;
    if (dPath) {
      try {
        const len = dPath.getTotalLength();
        setTotalLength(len);

        const step = 16;
        const distances: number[] = [];

        ROUTE_STOPS.forEach((stop) => {
          let bestDist = 0;
          let bestDistSq = Infinity;
          for (let d = 0; d <= len; d += step) {
            const pt = dPath.getPointAtLength(d);
            const dsq = (pt.x - stop.x) ** 2 + (pt.y - stop.y) ** 2;
            if (dsq < bestDistSq) {
              bestDistSq = dsq;
              bestDist = d;
            }
          }
          distances.push(bestDist);
        });

        for (let i = 1; i < distances.length; i++) {
          if (distances[i] <= distances[i - 1]) {
            distances[i] = distances[i - 1] + 12;
          }
        }
        stopDistancesRef.current = distances;

        const chPoints: Array<{ x: number; y: number; rot: number; dist: number }> = [];
        CHEVRONS.forEach((ch) => {
          const dist = ch.lengthFraction * len;
          const pt = dPath.getPointAtLength(dist);
          const nextPt = dPath.getPointAtLength(Math.min(len, dist + 2));
          const rot = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);
          chPoints.push({ x: pt.x, y: pt.y, rot, dist });
        });
        setChevronPoints(chPoints);

        const initialPt = dPath.getPointAtLength(0);
        setRiderPos({ x: initialPt.x, y: initialPt.y, angle: 0, isFacingLeft: false });
      } catch {
        // Fallback
      }
    }

    // Initialize Mobile path geometry
    const mPath = mobilePathRef.current;
    if (mPath) {
      try {
        const mLen = mPath.getTotalLength();
        setMobTotalLength(mLen);

        const step = 16;
        const mDistances: number[] = [];

        ROUTE_STOPS.forEach((stop) => {
          let bestDist = 0;
          let bestDistSq = Infinity;
          for (let d = 0; d <= mLen; d += step) {
            const pt = mPath.getPointAtLength(d);
            const dsq = (pt.x - stop.mobX) ** 2 + (pt.y - stop.mobY) ** 2;
            if (dsq < bestDistSq) {
              bestDistSq = dsq;
              bestDist = d;
            }
          }
          mDistances.push(bestDist);
        });

        for (let i = 1; i < mDistances.length; i++) {
          if (mDistances[i] <= mDistances[i - 1]) {
            mDistances[i] = mDistances[i - 1] + 10;
          }
        }
        mobStopDistancesRef.current = mDistances;

        const mChPoints: Array<{ x: number; y: number; rot: number; dist: number }> = [];
        MOB_CHEVRONS.forEach((ch) => {
          const dist = ch.lengthFraction * mLen;
          const pt = mPath.getPointAtLength(dist);
          const nextPt = mPath.getPointAtLength(Math.min(mLen, dist + 2));
          const rot = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);
          mChPoints.push({ x: pt.x, y: pt.y, rot, dist });
        });
        setMobChevronPoints(mChPoints);

        const initialMobPt = mPath.getPointAtLength(0);
        setMobRiderPos({ x: initialMobPt.x, y: initialMobPt.y, angle: 0 });
      } catch {
        // Fallback
      }
    }
  }, [isNearViewport]);

  // Smooth scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const enterOffset = viewportHeight * 0.75;
      const exitOffset = viewportHeight * 0.2;
      const totalScrollable = rect.height + enterOffset - exitOffset;
      const scrolled = enterOffset - rect.top;

      let rawProgress = scrolled / totalScrollable;
      rawProgress = Math.max(0, Math.min(1, rawProgress));

      targetProgressRef.current = rawProgress;

      if (prefersReducedMotion) {
        currentProgressRef.current = rawProgress;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation loop: Only runs when movement is needed, zero CPU when stationary!
  useEffect(() => {
    let animId: number | null = null;

    const renderRiders = (progress: number) => {
      // Update Desktop Rider
      const dPath = desktopPathRef.current;
      if (dPath && totalLength > 0) {
        const currentDist = progress * totalLength;
        setCompletedLength(currentDist);

        const pt = dPath.getPointAtLength(Math.min(totalLength, Math.max(0, currentDist)));
        const delta = 2;
        const pNext = dPath.getPointAtLength(Math.min(totalLength, currentDist + delta));
        const pPrev = dPath.getPointAtLength(Math.max(0, currentDist - delta));

        const dx = pNext.x - pPrev.x;
        const dy = pNext.y - pPrev.y;

        const isFacingLeft = dx < -0.15;
        const slope = Math.atan2(dy, Math.max(0.1, Math.abs(dx))) * (180 / Math.PI);
        const clampedAngle = Math.max(-14, Math.min(14, slope * 0.45));

        setRiderPos({
          x: pt.x,
          y: pt.y,
          angle: clampedAngle,
          isFacingLeft,
        });

        // Nearest stop update
        const stopDistances = stopDistancesRef.current;
        if (stopDistances.length === ROUTE_STOPS.length) {
          let bestIdx = 0;
          let minDiff = Infinity;
          for (let i = 0; i < stopDistances.length; i++) {
            const d = Math.abs(currentDist - stopDistances[i]);
            if (d < minDiff) {
              minDiff = d;
              bestIdx = i;
            }
          }
          setActiveStopIndex(bestIdx);
        }
      }

      // Update Mobile Rider
      const mPath = mobilePathRef.current;
      if (mPath && mobTotalLength > 0) {
        const mDist = progress * mobTotalLength;
        setMobCompletedLength(mDist);

        const mPt = mPath.getPointAtLength(Math.min(mobTotalLength, Math.max(0, mDist)));
        const delta = 2;
        const mNext = mPath.getPointAtLength(Math.min(mobTotalLength, mDist + delta));
        const mPrev = mPath.getPointAtLength(Math.max(0, mDist - delta));

        const dx = mNext.x - mPrev.x;
        const dy = mNext.y - mPrev.y;
        const slope = Math.atan2(dx, Math.max(0.1, dy)) * (180 / Math.PI);
        const clampedAngle = Math.max(-15, Math.min(15, -slope * 0.4));

        setMobRiderPos({
          x: mPt.x,
          y: mPt.y,
          angle: clampedAngle,
        });
      }

      setHasCompleted(progress > 0.96);
    };

    const updateRiders = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) < 0.001) {
        currentProgressRef.current = targetProgressRef.current;
        renderRiders(currentProgressRef.current);
        animId = null;
        return; // Complete - stop animation frame loop to free main thread
      }

      currentProgressRef.current += diff * 0.15;
      renderRiders(currentProgressRef.current);
      animId = requestAnimationFrame(updateRiders);
    };

    renderRiders(currentProgressRef.current);

    const checkAnimation = () => {
      if (animId === null && Math.abs(targetProgressRef.current - currentProgressRef.current) > 0.001) {
        animId = requestAnimationFrame(updateRiders);
      }
    };

    const interval = setInterval(checkAnimation, 100);

    return () => {
      clearInterval(interval);
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, [totalLength, mobTotalLength]);

  // Handle stop selection / click-to-fly
  const handleSelectStop = useCallback(
    (stop: RouteStopData, idx: number) => {
      setSelectedStop(stop);
      setActiveStopIndex(idx);
      if (stopDistancesRef.current.length > idx && totalLength > 0) {
        const targetDist = stopDistancesRef.current[idx];
        targetProgressRef.current = targetDist / totalLength;
      }
    },
    [totalLength]
  );

  return (
    <div ref={containerRef} className="space-y-6 select-none" aria-label="Interactive Route Network">

      {/* ── 1. DESKTOP & TABLET PANORAMIC ROUTE (hidden on mobile) ── */}
      <div className="hidden md:block relative w-full bg-gradient-to-b from-white via-slate-50/70 to-white rounded-3xl border border-slate-200/90 shadow-[0_12px_45px_rgba(15,23,42,0.05)] p-5 lg:p-7 pt-7 lg:pt-9 overflow-visible">

        {/* Live Journey Status Bar */}
        <div className="flex items-center justify-between gap-4 pb-3 mb-1 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span className="font-bold text-slate-900 tracking-tight text-sm">
              Live Linehaul Transit
            </span>
            <span className="text-slate-400">&bull;</span>
            <span className="font-mono text-slate-500">
              Cutoff 10:00 AM &bull; Same-Day Arrival
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-slate-500">
              Active Stop:{' '}
              <strong className="text-red-600 font-bold">
                {ROUTE_STOPS[activeStopIndex].name}
              </strong>{' '}
              ({activeStopIndex === 0 ? 'Origin Hub' : `Stop ${activeStopIndex} of 6`})
            </span>
            {hasCompleted && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 animate-bounce">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Linehaul Circuit Complete!</span>
              </span>
            )}
          </div>
        </div>

        {/* SVG Route Visualization Container */}
        <div className="relative w-full aspect-[1200/600] overflow-visible">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full absolute inset-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <filter id="road-shadow" x="-5%" y="-5%" width="115%" height="115%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.08" />
              </filter>
              <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.22" />
              </filter>
              <radialGradient id="rider-shadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Road Base Shadow */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="44"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#road-shadow)"
            />

            {/* Light Grey Asphalt Surface */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="38"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Road Inner Highlight */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#F1F5F9"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Active Transit Glow Trail (Follows scooter) */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#DC2626"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={`${completedLength} ${totalLength || 3000}`}
              strokeOpacity="0.65"
            />

            {/* White Dashed Center Lane Divider */}
            <path
              ref={desktopPathRef}
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />

            {/* Red Directional Chevrons */}
            {chevronPoints.map((ch, idx) => {
              const isPassed = completedLength >= ch.dist;
              return (
                <g
                  key={idx}
                  transform={`translate(${ch.x}, ${ch.y}) rotate(${ch.rot})`}
                  className="transition-opacity duration-300"
                  opacity={isPassed ? 1 : 0.6}
                >
                  <path
                    d="M -5 -5 L 2 0 L -5 5 M 0 -5 L 7 0 L 0 5"
                    fill="none"
                    stroke={isPassed ? '#DC2626' : '#94A3B8'}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              );
            })}

            {/* Destination Location Pins */}
            {ROUTE_STOPS.map((stop, idx) => {
              const isActive = activeStopIndex === idx;
              const isSelected = selectedStop.id === stop.id;
              const isOrigin = stop.type === 'origin';
              const isDestination = idx === ROUTE_STOPS.length - 1;

              return (
                <g
                  key={stop.id}
                  transform={`translate(${stop.x}, ${stop.y})`}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                  onClick={() => handleSelectStop(stop, idx)}
                >
                  {/* Outer Pulsing Ring for Active Stop */}
                  {(isActive || isSelected) && (
                    <circle
                      cx="0"
                      cy="0"
                      r="18"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-spin"
                      style={{ animationDuration: '6s' }}
                    />
                  )}

                  {/* Pin Drop Shadow */}
                  <ellipse cx="0" cy="15" rx="8" ry="3.5" fill="rgba(15,23,42,0.2)" filter="blur(1px)" />

                  {/* Teardrop Location Marker Pin */}
                  <g transform="translate(0, -6)" filter="url(#pin-shadow)">
                    {isOrigin ? (
                      <g>
                        <circle cx="0" cy="0" r="13" fill="#DC2626" />
                        <circle cx="0" cy="0" r="8.5" fill="#FFFFFF" />
                        <circle cx="0" cy="0" r="4.5" fill="#DC2626" />
                      </g>
                    ) : isDestination ? (
                      <g>
                        <path
                          d="M 0 0 C -10 -10 -10 -24 0 -30 C 10 -24 10 -10 0 0 Z"
                          fill="#DC2626"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <circle cx="0" cy="-16" r="5" fill="#FFFFFF" />
                        <circle cx="0" cy="-16" r="2.5" fill="#DC2626" />
                      </g>
                    ) : (
                      <g>
                        <path
                          d="M 0 0 C -9 -9 -9 -20 0 -25 C 9 -20 9 -9 0 0 Z"
                          fill={isActive ? '#DC2626' : '#0F172A'}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <circle cx="0" cy="-13" r="4" fill="#FFFFFF" />
                        <circle cx="0" cy="-13" r="2" fill={isActive ? '#0F172A' : '#DC2626'} />
                      </g>
                    )}
                  </g>
                </g>
              );
            })}

            {/* Delivery Rider on Scooter */}
            <g
              transform={`translate(${riderPos.x}, ${riderPos.y}) rotate(${riderPos.angle})`}
              className="pointer-events-none transition-transform duration-75"
            >
              <ellipse cx="0" cy="8" rx="30" ry="9" fill="url(#rider-shadow)" />

              <g
                transform={`translate(-42, -70) ${riderPos.isFacingLeft ? 'scale(-1, 1) translate(-84, 0)' : ''}`}
              >
                <image
                  href="/assets/routes/ecs-scooter-rider.png"
                  width="84"
                  height="72"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>

              {/* Scooter Header Badge — Stays upright */}
              <g transform="translate(0, -80)">
                <rect
                  x="-42"
                  y="-9"
                  width="84"
                  height="18"
                  rx="9"
                  fill="#0F172A"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.18))"
                />
                <circle cx="-32" cy="0" r="2.5" fill="#DC2626" className="animate-ping" />
                <text
                  x="-25"
                  y="3"
                  fill="#FFFFFF"
                  fontSize="7.5"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  eCS EXPRESS
                </text>
              </g>
            </g>
          </svg>

          {/* HTML Compact Floating Destination Pills (Small, sleek, never cut off) */}
          {ROUTE_STOPS.map((stop, idx) => {
            const isSelected = selectedStop.id === stop.id;
            const isActive = activeStopIndex === idx;
            const isOrigin = stop.type === 'origin';
            const leftPercent = (stop.x / 1200) * 100;
            const topPercent = (stop.y / 600) * 100;
            const isTop = stop.labelPosition !== 'bottom';

            return (
              <div
                key={stop.id}
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: `translate(-50%, ${isTop ? '-135%' : '32%'})`,
                }}
                className={`absolute z-20 cursor-pointer transition-all duration-200 ${
                  isSelected || isActive ? 'scale-105 z-30' : 'hover:scale-105 opacity-95 hover:opacity-100'
                }`}
                onClick={() => handleSelectStop(stop, idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectStop(stop, idx);
                  }
                }}
              >
                {isOrigin ? (
                  // Compact Origin Pill
                  <div className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white px-2.5 py-1.5 rounded-xl shadow-[0_6px_18px_rgba(220,38,38,0.25)] border border-white flex items-center gap-2 max-w-[170px] min-w-[140px]">
                    <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <Building2 className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="font-extrabold text-[11px] text-white tracking-tight block">
                        Bhilwara Hub
                      </span>
                      <span className="text-[8.5px] text-white/90 font-medium block truncate">
                        Opp. New Cloth Market
                      </span>
                    </div>
                  </div>
                ) : (
                  // Ultra-Compact Destination Bubble (Matching Reference Image 2)
                  <div
                    className={`bg-white rounded-xl shadow-[0_4px_14px_rgba(15,23,42,0.08)] border transition-all px-2.5 py-1 text-left max-w-[135px] min-w-[100px] ${
                      isSelected
                        ? 'border-[#DC2626] ring-2 ring-red-500/20 shadow-[0_6px_18px_rgba(220,38,38,0.16)]'
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-bold text-[11px] text-slate-900 tracking-tight leading-tight block truncate">
                      {stop.name}
                    </span>
                    <span className="text-[9px] text-slate-600 font-semibold block truncate leading-none mt-0.5">
                      {stop.tag}
                    </span>

                    {/* Small Pointer Triangle */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white border-r border-b ${
                        isSelected ? 'border-[#DC2626]' : 'border-slate-200/90'
                      } ${isTop ? '-bottom-1 rotate-45' : '-top-1 -rotate-135'}`}
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Expanded Stop Inspector Details Drawer */}
        <div className="mt-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5 border border-red-100 font-mono font-bold text-xs shadow-2xs">
                {selectedStop.type === 'origin' ? (
                  <Building2 className="w-4 h-4 text-[#DC2626]" />
                ) : (
                  <span>{ROUTE_STOPS.findIndex((s) => s.id === selectedStop.id)}</span>
                )}
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                    {selectedStop.name}
                  </h4>
                  {selectedStop.hindiName && (
                    <span className="text-xs text-slate-500 font-semibold">
                      {selectedStop.hindiName}
                    </span>
                  )}
                  <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {selectedStop.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-2xl">
                  {selectedStop.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-1 lg:pt-0">
              <div className="hidden sm:flex flex-col text-right text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Same-Day Transit
                </span>
                <span className="font-mono text-slate-500">10:00 AM Dispatch</span>
              </div>

              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Book to {selectedStop.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. MOBILE ANIMATED ROUTE NETWORK (< 768px) ── */}
      {/* Real winding SVG road with scooter rider + compact side pills */}
      <div className="md:hidden relative w-full bg-gradient-to-b from-white via-slate-50/70 to-white rounded-2xl border border-slate-200/90 shadow-sm p-3 pt-5 overflow-visible">

        {/* Mobile Status Header */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-2 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="font-bold text-xs text-slate-900 tracking-tight">
              Mobile Route Transit
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
            Cutoff 10 AM
          </span>
        </div>

        {/* Mobile Serpentine Route Canvas */}
        <div className="relative w-full aspect-[380/960] overflow-visible">
          <svg
            viewBox="0 0 380 960"
            className="w-full h-full absolute inset-0 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <filter id="mob-road-shadow" x="-10%" y="-5%" width="120%" height="110%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Mobile Road Base Shadow */}
            <path
              d={MOBILE_ROAD_PATH}
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="36"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#mob-road-shadow)"
            />

            {/* Mobile Road Asphalt Surface */}
            <path
              d={MOBILE_ROAD_PATH}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Mobile Road Center Highlight */}
            <path
              d={MOBILE_ROAD_PATH}
              fill="none"
              stroke="#F1F5F9"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Active Red Transit Glow */}
            <path
              d={MOBILE_ROAD_PATH}
              fill="none"
              stroke="#DC2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={`${mobCompletedLength} ${mobTotalLength || 2000}`}
              strokeOpacity="0.7"
            />

            {/* Mobile Dashed Center Line */}
            <path
              ref={mobilePathRef}
              d={MOBILE_ROAD_PATH}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />

            {/* Mobile Chevrons */}
            {mobChevronPoints.map((ch, idx) => {
              const isPassed = mobCompletedLength >= ch.dist;
              return (
                <g
                  key={idx}
                  transform={`translate(${ch.x}, ${ch.y}) rotate(${ch.rot})`}
                  opacity={isPassed ? 1 : 0.6}
                >
                  <path
                    d="M -4 -4 L 1 0 L -4 4 M 0 -4 L 5 0 L 0 4"
                    fill="none"
                    stroke={isPassed ? '#DC2626' : '#94A3B8'}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              );
            })}

            {/* Destination Pins on Mobile Path */}
            {ROUTE_STOPS.map((stop, idx) => {
              const isActive = activeStopIndex === idx;
              const isSelected = selectedStop.id === stop.id;
              const isOrigin = stop.type === 'origin';
              const isDestination = idx === ROUTE_STOPS.length - 1;

              return (
                <g
                  key={stop.id}
                  transform={`translate(${stop.mobX}, ${stop.mobY})`}
                  className="cursor-pointer"
                  onClick={() => handleSelectStop(stop, idx)}
                >
                  {(isActive || isSelected) && (
                    <circle
                      cx="0"
                      cy="0"
                      r="16"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="1.8"
                      strokeDasharray="3 3"
                      className="animate-spin"
                      style={{ animationDuration: '6s' }}
                    />
                  )}

                  {/* Pin Drop Shadow */}
                  <ellipse cx="0" cy="12" rx="6" ry="2.5" fill="rgba(15,23,42,0.2)" />

                  <g transform="translate(0, -4)">
                    {isOrigin ? (
                      <g>
                        <circle cx="0" cy="0" r="11" fill="#DC2626" />
                        <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
                        <circle cx="0" cy="0" r="3.5" fill="#DC2626" />
                      </g>
                    ) : isDestination ? (
                      <g>
                        <path
                          d="M 0 0 C -8 -8 -8 -18 0 -24 C 8 -18 8 -8 0 0 Z"
                          fill="#DC2626"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        <circle cx="0" cy="-13" r="4" fill="#FFFFFF" />
                        <circle cx="0" cy="-13" r="2" fill="#DC2626" />
                      </g>
                    ) : (
                      <g>
                        <path
                          d="M 0 0 C -7 -7 -7 -16 0 -20 C 7 -16 7 -7 0 0 Z"
                          fill={isActive ? '#DC2626' : '#0F172A'}
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        <circle cx="0" cy="-11" r="3" fill="#FFFFFF" />
                        <circle cx="0" cy="-11" r="1.5" fill={isActive ? '#0F172A' : '#DC2626'} />
                      </g>
                    )}
                  </g>
                </g>
              );
            })}

            {/* Mobile Animated Scooter Rider */}
            <g
              transform={`translate(${mobRiderPos.x}, ${mobRiderPos.y}) rotate(${mobRiderPos.angle})`}
              className="pointer-events-none transition-transform duration-75"
            >
              <ellipse cx="0" cy="6" rx="22" ry="7" fill="rgba(15,23,42,0.25)" />
              <g transform="translate(-32, -54)">
                <image
                  href="/assets/routes/ecs-scooter-rider.png"
                  width="64"
                  height="55"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>
            </g>
          </svg>

          {/* Mobile Sleek Side Floating Cards */}
          {ROUTE_STOPS.map((stop, idx) => {
            const isSelected = selectedStop.id === stop.id;
            const isOrigin = stop.type === 'origin';
            const leftPercent = (stop.mobX / 380) * 100;
            const topPercent = (stop.mobY / 960) * 100;

            // Pin on left -> card on right; Pin on right -> card on left; Center -> below
            let transformClass = 'translate(-50%, -130%)';
            if (stop.mobLabelSide === 'right') {
              transformClass = 'translate(18px, -50%)';
            } else if (stop.mobLabelSide === 'left') {
              transformClass = 'translate(calc(-100% - 18px), -50%)';
            } else {
              transformClass = 'translate(-50%, 18px)';
            }

            return (
              <div
                key={stop.id}
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: transformClass,
                }}
                className={`absolute z-20 cursor-pointer transition-all ${
                  isSelected ? 'scale-105 z-30' : 'opacity-95'
                }`}
                onClick={() => handleSelectStop(stop, idx)}
              >
                {isOrigin ? (
                  <div className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white px-2 py-1 rounded-lg shadow-sm border border-white text-left max-w-[130px]">
                    <span className="font-black text-[10px] text-white block leading-tight">
                      Bhilwara Hub
                    </span>
                    <span className="text-[8px] text-white/90 block truncate leading-none mt-0.5">
                      Origin Counter
                    </span>
                  </div>
                ) : (
                  <div
                    className={`bg-white rounded-lg shadow-sm border px-2 py-1 text-left max-w-[115px] min-w-[85px] ${
                      isSelected
                        ? 'border-[#DC2626] ring-1 ring-red-500/30'
                        : 'border-slate-200'
                    }`}
                  >
                    <span className="font-bold text-[10px] text-slate-900 block truncate leading-tight">
                      {stop.name}
                    </span>
                    <span className="text-[9px] text-slate-600 font-semibold block truncate leading-none mt-0.5">
                      {stop.tag}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Detail Popover for selected stop */}
        <div className="mt-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 text-left">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h4 className="font-black text-xs text-slate-900 tracking-tight">
                {selectedStop.name}
              </h4>
              {selectedStop.hindiName && (
                <span className="text-[10px] text-slate-500 font-medium block">
                  {selectedStop.hindiName}
                </span>
              )}
            </div>
            <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
              {selectedStop.tag}
            </span>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
            {selectedStop.description}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
            <span className="font-medium text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Same-Day Transit
            </span>
            <Link
              href="/contact#inquiry-form"
              className="text-[11px] font-bold text-red-600 inline-flex items-center gap-1 hover:underline"
            >
              <span>Book to {selectedStop.name}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
