'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Package,
  MapPin,
  Scale,
  AlertCircle,
} from 'lucide-react';
import { CATALOGUE_SERVICES, CATALOGUE_CATEGORIES } from '@/lib/servicesCatalogueData';

interface ServiceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export function ServiceQuoteModal({
  isOpen,
  onClose,
  selectedServiceId,
}: ServiceQuoteModalProps) {
  const [userSelectedId, setUserSelectedId] = useState<string | null>(null);
  const [destination, setDestination] = useState('');
  const [approxWeight, setApproxWeight] = useState('');
  const [notes, setNotes] = useState('');

  const currentServiceId = userSelectedId || selectedServiceId || 'domestic-air-courier';

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService =
    CATALOGUE_SERVICES.find((s) => s.id === currentServiceId) || CATALOGUE_SERVICES[0];

  // Construct structured pre-filled WhatsApp message
  const buildWhatsAppMessage = () => {
    const lines = [
      `Hello Economic Courier & eCS World Wide Express Bhilwara,`,
      ``,
      `I would like to inquire about a shipment:`,
      `• Service: ${currentService.name} (${currentService.categoryLabel})`,
      `• Origin: Bhilwara, Rajasthan Hub`,
      destination ? `• Destination: ${destination.trim()}` : `• Destination: [Please specify city/country]`,
      approxWeight ? `• Approx Weight/Size: ${approxWeight.trim()}` : `• Approx Weight: [Please advise rate slabs]`,
      notes ? `• Details/Notes: ${notes.trim()}` : '',
      ``,
      `Please provide guidance on packing, estimated transit days, and rate quotation. Thank you!`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const whatsappUrl = `https://wa.me/918955144444?text=${buildWhatsAppMessage()}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      {/* Click outside backdrop */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 transition-all duration-300">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-5 sm:p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-200 text-[11px] font-black uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>DIRECT BHILWARA DESK INQUIRY</span>
          </div>

          <h2
            id="quote-modal-title"
            className="text-xl sm:text-2xl font-black text-white tracking-tight"
          >
            Request Rate &amp; Dispatch Guidance
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Select any of our 22 confirmed catalogue services for direct Bhilwara hub assistance.
          </p>
        </div>

        {/* Modal Form Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Service Selector (All 22 Services Grouped) */}
          <div className="space-y-1.5">
            <label
              htmlFor="modal-service-select"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
            >
              Selected Service (22 Catalogue Options)
            </label>
            <select
              id="modal-service-select"
              value={currentServiceId}
              onChange={(e) => setUserSelectedId(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] focus:border-transparent cursor-pointer"
            >
              {CATALOGUE_CATEGORIES.map((cat) => (
                <optgroup key={cat.key} label={`── ${cat.number}. ${cat.title} ──`}>
                  {CATALOGUE_SERVICES.filter((s) => s.categoryKey === cat.key).map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Service Snapshot Card */}
          <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Package className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                {currentService.name}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 mt-0.5 font-normal">
                {currentService.tagline}
              </p>
              {currentService.regulatoryNotice && (
                <div className="mt-1.5 flex items-start gap-1 text-[10px] text-amber-800 font-medium bg-amber-50 p-1.5 rounded-lg border border-amber-200">
                  <AlertCircle className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                  <span>{currentService.regulatoryNotice}</span>
                </div>
              )}
            </div>
          </div>

          {/* Origin & Destination Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                Origin
              </label>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                <span>Bhilwara Hub (Opp. New Cloth Market)</span>
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="modal-destination"
                className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider"
              >
                Destination (City / Country)
              </label>
              <input
                id="modal-destination"
                type="text"
                placeholder="e.g. Surat, Mumbai, Dubai, USA..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>
          </div>

          {/* Approx Weight & Dimensions */}
          <div className="space-y-1">
            <label
              htmlFor="modal-weight"
              className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider"
            >
              Approx. Weight or Consignment Size
            </label>
            <div className="relative">
              <input
                id="modal-weight"
                type="text"
                placeholder="e.g. Document envelope, 5 kg sample box, 50 kg machinery spare..."
                value={approxWeight}
                onChange={(e) => setApproxWeight(e.target.value)}
                className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
              <Scale className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-1">
            <label
              htmlFor="modal-notes"
              className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider"
            >
              Special Instructions / Questions (Optional)
            </label>
            <textarea
              id="modal-notes"
              rows={2}
              placeholder="e.g. Need urgent morning delivery, requires wooden packing, fragile item..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] focus:border-transparent resize-none"
            />
          </div>

          {/* Transparent Action Notice */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed font-normal">
            <p className="flex items-start gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Direct Dispatch Desk Connection:</strong> Clicking the WhatsApp button below opens WhatsApp with your pre-filled inquiry. <strong>Please remember to press Send</strong> to deliver it to our Bhilwara operations team.
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp (+91 89551 44444)</span>
            </a>

            <Link
              href={`/contact?service=${currentService.inquiryKey}#inquiry-form`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Full Web Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
