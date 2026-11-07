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
} from 'lucide-react';
import { ALL_CONFIRMED_SERVICES, EDITORIAL_CATEGORIES } from '@/lib/servicesCatalogueData';

interface ServiceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategoryOrService?: string;
}

export function ServiceQuoteModal({
  isOpen,
  onClose,
  selectedCategoryOrService,
}: ServiceQuoteModalProps) {
  const [overrideServiceId, setOverrideServiceId] = useState<string | null>(null);
  const [prevProp, setPrevProp] = useState(selectedCategoryOrService);
  const [destination, setDestination] = useState('');
  const [approxWeight, setApproxWeight] = useState('');
  const [notes, setNotes] = useState('');

  // Reset override if selectedCategoryOrService prop changes
  if (prevProp !== selectedCategoryOrService) {
    setPrevProp(selectedCategoryOrService);
    setOverrideServiceId(null);
  }

  const defaultMatchedId = selectedCategoryOrService
    ? ALL_CONFIRMED_SERVICES.find(
        (s) =>
          s.id === selectedCategoryOrService ||
          s.categoryName.toLowerCase().includes(selectedCategoryOrService.toLowerCase())
      )?.id
    : undefined;

  const selectedServiceId = overrideServiceId || defaultMatchedId || 'domestic-air-courier';
  const setSelectedServiceId = (id: string) => setOverrideServiceId(id);

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
    ALL_CONFIRMED_SERVICES.find((s) => s.id === selectedServiceId) || ALL_CONFIRMED_SERVICES[0];

  // Construct structured pre-filled WhatsApp message
  const buildWhatsAppMessage = () => {
    const lines = [
      `Hello Economic Courier & eCS World Wide Express Bhilwara,`,
      ``,
      `I would like to inquire about a shipment:`,
      `• Service: ${currentService.serviceName} (${currentService.categoryName})`,
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
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A] p-5 sm:p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-400/40 text-red-200 text-[11px] font-black uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>DIRECT BHILWARA DESK INQUIRY</span>
          </div>

          <h2
            id="quote-modal-title"
            className="text-xl sm:text-2xl font-black text-white tracking-tight"
          >
            Request Rate &amp; Dispatch Guidance
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Official Bhilwara Hub desk assistance for all 22 confirmed catalogue services.
          </p>
        </div>

        {/* Modal Form Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Service Selector (All 22 Services Grouped by Category) */}
          <div className="space-y-1.5">
            <label
              htmlFor="modal-service-select"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
            >
              Select Service (22 Confirmed Options)
            </label>
            <select
              id="modal-service-select"
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#1E3A8A] bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#DC2626] focus:border-transparent cursor-pointer"
            >
              {EDITORIAL_CATEGORIES.map((cat) => (
                <optgroup key={cat.id} label={`── ${cat.number}. ${cat.titlePrimary} ${cat.titleHighlight} ──`}>
                  {ALL_CONFIRMED_SERVICES.filter((s) => s.categoryName.startsWith(cat.number)).map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.serviceName}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Service Snapshot Card */}
          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Package className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono font-bold text-red-600 uppercase">
                {currentService.categoryName}
              </span>
              <h4 className="text-xs sm:text-sm font-black text-[#1E3A8A] leading-snug">
                {currentService.serviceName}
              </h4>
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
              Approx. Weight or Parcel Type
            </label>
            <div className="relative">
              <input
                id="modal-weight"
                type="text"
                placeholder="e.g. Document envelope, 2 kg sample, 30 kg luggage..."
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
              Special Instructions (Optional)
            </label>
            <textarea
              id="modal-notes"
              rows={2}
              placeholder="e.g. Fragile item, need packaging assistance, urgent flight delivery..."
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
                <strong>Direct WhatsApp Channel:</strong> Clicking below opens WhatsApp with this pre-filled inquiry. <strong>Please press Send</strong> to deliver it to our Bhilwara hub team.
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
              href={`/contact?service=${currentService.id}#inquiry-form`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap"
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
