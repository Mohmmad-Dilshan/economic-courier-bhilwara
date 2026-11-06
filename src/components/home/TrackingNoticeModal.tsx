'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  Package,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Info,
  Building2,
} from 'lucide-react';
import { ACTIVE_NETWORK_PARTNERS } from '@/lib/partnersData';

interface TrackingNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchedQuery: string;
}

/**
 * TrackingNoticeModal — Partner Selection & Official Tracking Dialog
 *
 * TRUTHFULNESS & CLIENT-GROUNDED RULES:
 * 1. Shows entered AWB reference clearly with a one-click copy button.
 * 2. Provides direct routing for verified partner portals: Blue Dart, Akash Ganga,
 *    Air Star Xpress, Shree Mahavir, AFEX Express, GMS Worldwide, and UPS.
 * 3. Copies AWB to clipboard before redirecting to official carrier portal in a new tab.
 * 4. Transparently explains official carrier tracking routing.
 * 5. Explains that consignments are verified directly on the respective carrier portal.
 */
export function TrackingNoticeModal({
  isOpen,
  onClose,
  searchedQuery,
}: TrackingNoticeModalProps) {
  const [copied, setCopied] = useState(false);
  const [partnerCopiedNotice, setPartnerCopiedNotice] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setCopied(false);
    setPartnerCopiedNotice(null);
    onClose();
  }, [onClose]);

  // Keyboard accessibility: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!searchedQuery) return;
    try {
      await navigator.clipboard.writeText(searchedQuery);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Graceful fallback if clipboard API is restricted
    }
  };

  const handlePartnerTrack = async (partnerName: string, trackingUrl: string) => {
    if (searchedQuery) {
      try {
        await navigator.clipboard.writeText(searchedQuery);
        setCopied(true);
      } catch {
        // Fallback silently if clipboard restricted
      }
    }

    setPartnerCopiedNotice(
      `Reference "${searchedQuery}" copied! Opening ${partnerName} tracking portal in a new tab...`
    );

    window.open(trackingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracking-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-50 text-[#DC2626] rounded-2xl">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 id="tracking-dialog-title" className="text-base font-bold text-slate-900">
                Track with Courier Partner
              </h3>
              <p className="text-xs text-slate-500">
                Select the carrier printed on your booking receipt
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-label="Close tracking window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Entered Consignment Reference Box */}
          <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                Entered Consignment Reference
              </span>
              <span className="text-[11px] text-slate-400">Ready to copy</span>
            </div>

            <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
              <span className="text-base sm:text-lg font-black font-mono text-slate-900 tracking-wide break-all">
                {searchedQuery || '—'}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                aria-label="Copy consignment number to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Feedback notice if partner button clicked */}
          {partnerCopiedNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 animate-in fade-in duration-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                {partnerCopiedNotice}
              </p>
            </div>
          )}

          {/* Partner Selection Instruction */}
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Select Carrier Portal
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consignments booked through our Bhilwara operations center are dispatched via our network
              operators. Click your carrier below to copy your reference and open their tracking page:
            </p>
          </div>

          {/* Partner Options List */}
          <div className="space-y-2.5">
            {ACTIVE_NETWORK_PARTNERS.map((partner) => {
              const isDirect = partner.trackingMode === 'direct-portal' && partner.trackingUrl;
              return (
                <div
                  key={partner.id}
                  className="p-3.5 rounded-2xl border border-slate-200 hover:border-red-300 bg-white hover:bg-red-50/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                      <Image
                        src={partner.logoAsset}
                        alt=""
                        width={36}
                        height={36}
                        className="max-h-8 w-auto object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors truncate">
                          {partner.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 block truncate">
                        {partner.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {isDirect ? (
                    <button
                      type="button"
                      onClick={() => handlePartnerTrack(partner.shortName, partner.trackingUrl!)}
                      className="inline-flex items-center justify-center gap-1.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xs transition-all active:scale-95 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                      aria-label={`Track on ${partner.name} official portal`}
                    >
                      <span>Track on {partner.shortName}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
                      title="AFEX online portal offline — verify at counter"
                    >
                      <Building2 className="w-3.5 h-3.5 text-amber-800" />
                      <span>Counter Inquiry</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Truthfulness Notice */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-2.5 text-xs text-slate-600">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-[11px] leading-relaxed">
              <span className="font-semibold text-slate-700 block">
                Verification Transparency
              </span>
              <p>
                Consignments are verified directly on the respective carrier portal. To protect accuracy,
                live statuses are not simulated on this website. When the partner portal opens, paste your
                copied reference into their tracking box.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Receipt docket specifies booking carrier header
          </span>
          <button
            type="button"
            onClick={handleClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackingNoticeModal;
