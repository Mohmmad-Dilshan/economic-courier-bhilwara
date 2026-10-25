import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  hideConceptTag?: boolean;
}

export function BrandLogo({
  variant = 'light',
  className = '',
  size = 'md',
  hideConceptTag = false,
}: BrandLogoProps) {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`inline-flex flex-col gap-1 select-none ${className}`}>
      <div className="inline-flex items-center gap-3">
        {/* Geometric eCS Emblem */}
        <div className="relative flex items-center justify-center shrink-0">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#DC2626] to-[#991B1B] flex items-center justify-center shadow-md shadow-red-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M4 14.5L12 6.5L20 14.5" />
              <path d="M12 18.5V7" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 px-1 py-0.2 bg-[#0F172A] border border-slate-700 rounded text-[9px] font-mono font-bold text-white tracking-tighter">
            eCS
          </div>
        </div>

        {/* Brand Typography */}
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-tight ${sizeClasses[size]} ${
                isDark ? 'text-white' : 'text-[#0F172A]'
              }`}
            >
              ECONOMIC <span className="text-[#DC2626]">COURIER</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] font-bold tracking-widest text-[#DC2626] uppercase">
              eCS World Wide Express
            </span>
            <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              &bull; Bhilwara Hub
            </span>
          </div>
        </div>
      </div>

      {/* Mandatory Logo Disclaimer Tag */}
      {!hideConceptTag && (
        <span
          className={`inline-block text-[9px] font-mono font-medium px-1.5 py-0.5 rounded border max-w-fit leading-tight ${
            isDark
              ? 'bg-amber-950/60 text-amber-300 border-amber-800/80'
              : 'bg-amber-50 text-amber-800 border-amber-300'
          }`}
        >
          Proposed Concept Logo — Pending Official Asset Approval
        </span>
      )}
    </div>
  );
}
