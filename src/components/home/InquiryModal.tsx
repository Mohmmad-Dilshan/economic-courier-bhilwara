'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  Loader2,
  AlertCircle,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  FileText,
  Copy,
  Check,
} from 'lucide-react';
import {
  CustomerInquiryFormData,
  InquiryFieldErrors,
  InquirySubmissionResult,
  InquirySubmissionStatus,
} from '@/types/inquiry';
import { validateInquiryForm, submitCustomerInquiry } from '@/lib/inquiry';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

function formatServiceType(type?: string): string {
  switch (type) {
    case 'domestic':
      return 'Domestic Express Courier (All India)';
    case 'international':
      return 'International Courier (eCS Express Worldwide)';
    case 'documents':
      return 'Documents & Confidential Parcels';
    case 'textiles':
      return 'Bhilwara Textile / Fabric Swatch Samples';
    case 'other':
      return 'General Logistics & Rate Inquiry';
    default:
      return type || 'General Inquiry';
  }
}

function formatWeightBracket(weight?: string): string {
  switch (weight) {
    case 'under-0.5kg':
      return 'Under 0.5 kg (Letters, Docs & Packets)';
    case '0.5-2kg':
      return '0.5–2 kg (Standard Parcel & Swatches)';
    case '2-5kg':
      return '2–5 kg (Medium Box / Fabric Bundles)';
    case '5kg-plus':
      return '5+ kg (Heavy Parcels)';
    case 'commercial-freight':
      return 'Commercial Freight (B2B Cargo & Bulk Textiles)';
    default:
      return weight || 'Not specified';
  }
}

export function InquiryModal({ isOpen, onClose, initialService }: InquiryModalProps) {
  const [formData, setFormData] = useState<CustomerInquiryFormData>({
    customerName: '',
    contact: '',
    serviceType: (initialService as CustomerInquiryFormData['serviceType']) || '',
    originCity: 'Bhilwara, Rajasthan',
    destination: '',
    approxWeight: '',
    message: '',
  });
  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<InquirySubmissionStatus>('idle');
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const modalRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // Focus management: capture opener, auto-focus first input on open, trap focus, restore focus on close
  useEffect(() => {
    if (!isOpen) return;

    // 1. Record the previously focused element to restore when closing
    if (document.activeElement instanceof HTMLElement) {
      openerRef.current = document.activeElement;
    }

    // 2. Auto-focus the first appropriate field (slight delay to ensure DOM is ready)
    const autoFocusTimer = setTimeout(() => {
      if (!modalRef.current) return;
      const initialField = modalRef.current.querySelector<HTMLElement>(
        '#inquiry-customerName, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])'
      );
      initialField?.focus();
    }, 50);

    // 3. Focus trap and Escape listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null || el.getClientRects().length > 0);

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(autoFocusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      if (openerRef.current && typeof openerRef.current.focus === 'function') {
        openerRef.current.focus();
        openerRef.current = null;
      }
    };
  }, [isOpen, onClose]);

  // Adjust serviceType if initialService prop changes
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: (initialService as CustomerInquiryFormData['serviceType']) || prev.serviceType,
      }));
    }
  }

  // Reset form when closed or reopen
  const handleClose = () => {
    onClose();
  };

  const handleChange = (
    field: keyof CustomerInquiryFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear specific field error as user types
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions while in flight
    if (status === 'submitting') return;

    // Validate fields
    const validationErrors = validateInquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field for accessibility
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`inquiry-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const result = await submitCustomerInquiry(formData);
      setSubmissionResult(result);
      setStatus(result.status);
    } catch {
      setStatus('error');
      setErrors({
        general: 'An unexpected error occurred while processing your inquiry.',
      });
    }
  };

  const handleResetToEdit = () => {
    setStatus('idle');
    setTimeout(() => {
      const el = document.getElementById('inquiry-customerName');
      el?.focus();
    }, 50);
  };

  const handleCopyInquiryDetails = async () => {
    if (!submissionResult?.payload) return;
    const p = submissionResult.payload;

    const summaryLines = [
      '========================================',
      'ECONOMIC COURIER & CARGO — INQUIRY SLIP',
      'Bhilwara Hub: Pur Road, Bhilwara (Raj.)',
      '========================================',
      `Customer Name    : ${p.customerName || 'N/A'}`,
      `Contact          : ${p.contact || 'N/A'}`,
      `Service Category : ${formatServiceType(p.serviceType)}`,
      `Origin City      : ${p.originCity?.trim() || 'Bhilwara, Rajasthan'}`,
      p.destination?.trim() ? `Destination      : ${p.destination.trim()}` : null,
      p.approxWeight ? `Weight Bracket   : ${formatWeightBracket(p.approxWeight)}` : null,
      `Inquiry Details  : ${p.message || 'N/A'}`,
      `Recorded At      : ${submissionResult.submittedAt || new Date().toISOString()}`,
      '----------------------------------------',
      'Notice: Client prototype capture. No live automated dispatch.',
      '========================================',
    ]
      .filter(Boolean)
      .join('\n');

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(summaryLines);
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 3000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 4000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh] cursor-default"
      >
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-50 text-[#DC2626] rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="inquiry-modal-title" className="text-base font-bold text-slate-900">
                Customer &amp; Rate Inquiry Desk
              </h3>
              <p className="text-xs text-slate-500">
                Economic Courier &bull; Bhilwara
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-label="Close inquiry window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Unconfigured Prototype Safe State */}
          {status === 'unconfigured' && submissionResult && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-2 text-amber-950">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Submission Endpoint Not Configured [Prototype Safeguard]</span>
                </div>
                <p className="text-xs text-amber-800/90 leading-relaxed">
                  In strict compliance with business truthfulness standards, this client prototype does not display a false &ldquo;Message Sent Successfully&rdquo; confirmation because no email server, CRM API, or verified WhatsApp Business channel is currently active.
                </p>
              </div>

              {/* Payload Review Card */}
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Captured Inquiry Data (Ready for Routing)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block">Customer Name</span>
                    <span className="font-bold text-slate-800">{submissionResult.payload?.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Contact Info</span>
                    <span className="font-bold text-slate-800">{submissionResult.payload?.contact}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Service Requested</span>
                    <span className="font-bold text-slate-800">
                      {formatServiceType(submissionResult.payload?.serviceType)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Route (Origin &rarr; Dest)</span>
                    <span className="font-medium text-slate-800">
                      {submissionResult.payload?.originCity?.trim() || 'Bhilwara, Rajasthan'}
                      {submissionResult.payload?.destination?.trim()
                        ? ` → ${submissionResult.payload.destination.trim()}`
                        : ' → (Not specified)'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Shipment Weight</span>
                    <span className="font-medium text-slate-800">
                      {formatWeightBracket(submissionResult.payload?.approxWeight)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Recorded At</span>
                    <span className="font-medium text-slate-700">{submissionResult.submittedAt}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 text-xs block">Inquiry Message</span>
                  <p className="text-xs text-slate-800 font-medium mt-0.5 whitespace-pre-wrap bg-white p-2.5 rounded-lg border border-slate-200/70">
                    {submissionResult.payload?.message}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                * Live transmission activates once the client validates the official WhatsApp number (+91 89551 44444) or enterprise mailbox.
              </p>

              {/* Action Buttons: Copy Inquiry Details, Edit, Close */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopyInquiryDetails}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                    copyStatus === 'copied'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : copyStatus === 'error'
                      ? 'bg-rose-50 text-rose-700 border-rose-300'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                  }`}
                  aria-live="polite"
                >
                  {copyStatus === 'copied' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : copyStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Copy Unavailable &bull; Copy Manually</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>Copy Inquiry Details</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={handleResetToEdit}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    Edit Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-2 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Genuine Success State (Only when a real destination is configured) */}
          {status === 'success' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">Inquiry Dispatched</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Your courier requirements have been received. Our Bhilwara desk will reach out shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                Done
              </button>
            </div>
          )}

          {/* Active Form State (Idle or Submitting) */}
          {(status === 'idle' || status === 'submitting' || status === 'error') && (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* General Form Error if any */}
              {errors.general && (
                <div
                  role="alert"
                  className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.general}</span>
                </div>
              )}

              {/* Customer Name */}
              <div className="space-y-1">
                <label
                  htmlFor="inquiry-customerName"
                  className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
                >
                  Full Name <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="text"
                  id="inquiry-customerName"
                  value={formData.customerName}
                  onChange={(e) => handleChange('customerName', e.target.value)}
                  disabled={status === 'submitting'}
                  maxLength={60}
                  placeholder="e.g. Ramesh Chandra / Sharda Textiles"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none ${
                    errors.customerName
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                  }`}
                  aria-invalid={!!errors.customerName}
                  aria-describedby={errors.customerName ? 'inquiry-customerName-error' : undefined}
                />
                {errors.customerName && (
                  <p
                    id="inquiry-customerName-error"
                    role="alert"
                    aria-live="polite"
                    className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.customerName}</span>
                  </p>
                )}
              </div>

              {/* Phone or Email Contact */}
              <div className="space-y-1">
                <label
                  htmlFor="inquiry-contact"
                  className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
                >
                  Contact Phone or Email <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="text"
                  id="inquiry-contact"
                  value={formData.contact}
                  onChange={(e) => handleChange('contact', e.target.value)}
                  disabled={status === 'submitting'}
                  maxLength={80}
                  placeholder="e.g. 98290 12345 or ramesh@company.com"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none ${
                    errors.contact
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                  }`}
                  aria-invalid={!!errors.contact}
                  aria-describedby={errors.contact ? 'inquiry-contact-error' : undefined}
                />
                {errors.contact && (
                  <p
                    id="inquiry-contact-error"
                    role="alert"
                    aria-live="polite"
                    className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.contact}</span>
                  </p>
                )}
              </div>

              {/* Service Type Selection */}
              <div className="space-y-1">
                <label
                  htmlFor="inquiry-serviceType"
                  className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
                >
                  Courier Service Type <span className="text-[#DC2626]">*</span>
                </label>
                <select
                  id="inquiry-serviceType"
                  value={formData.serviceType}
                  onChange={(e) => handleChange('serviceType', e.target.value)}
                  disabled={status === 'submitting'}
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none ${
                    errors.serviceType
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                  }`}
                  aria-invalid={!!errors.serviceType}
                  aria-describedby={errors.serviceType ? 'inquiry-serviceType-error' : undefined}
                >
                  <option value="">Select a service category...</option>
                  <option value="domestic">Domestic Express Courier (All India)</option>
                  <option value="international">International Courier (eCS Express Worldwide)</option>
                  <option value="documents">Documents &amp; Confidential Parcels</option>
                  <option value="textiles">Bhilwara Textile / Fabric Swatch Samples</option>
                  <option value="other">General Logistics &amp; Rate Inquiry</option>
                </select>
                {errors.serviceType && (
                  <p
                    id="inquiry-serviceType-error"
                    role="alert"
                    aria-live="polite"
                    className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.serviceType}</span>
                  </p>
                )}
              </div>

              {/* Structured Courier Fields (Origin & Destination) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Origin City */}
                <div className="space-y-1">
                  <label
                    htmlFor="inquiry-originCity"
                    className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>Origin City</span>
                    <span className="text-[10px] text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-originCity"
                    value={formData.originCity ?? ''}
                    onChange={(e) => handleChange('originCity', e.target.value)}
                    disabled={status === 'submitting'}
                    maxLength={60}
                    placeholder="e.g. Bhilwara, Rajasthan"
                    className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none ${
                      errors.originCity
                        ? 'border-red-400 ring-2 ring-red-400/20'
                        : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                    }`}
                    aria-invalid={!!errors.originCity}
                    aria-describedby={errors.originCity ? 'inquiry-originCity-error' : undefined}
                  />
                  {errors.originCity && (
                    <p
                      id="inquiry-originCity-error"
                      role="alert"
                      aria-live="polite"
                      className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.originCity}</span>
                    </p>
                  )}
                </div>

                {/* Destination City or Country */}
                <div className="space-y-1">
                  <label
                    htmlFor="inquiry-destination"
                    className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>Destination</span>
                    <span className="text-[10px] text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-destination"
                    value={formData.destination ?? ''}
                    onChange={(e) => handleChange('destination', e.target.value)}
                    disabled={status === 'submitting'}
                    maxLength={80}
                    placeholder="e.g. Mumbai, Surat, Dubai"
                    className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none ${
                      errors.destination
                        ? 'border-red-400 ring-2 ring-red-400/20'
                        : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                    }`}
                    aria-invalid={!!errors.destination}
                    aria-describedby={errors.destination ? 'inquiry-destination-error' : undefined}
                  />
                  {errors.destination && (
                    <p
                      id="inquiry-destination-error"
                      role="alert"
                      aria-live="polite"
                      className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.destination}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Approximate Shipment Weight */}
              <div className="space-y-1">
                <label
                  htmlFor="inquiry-approxWeight"
                  className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between"
                >
                  <span>Approx. Shipment Weight</span>
                  <span className="text-[10px] text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <select
                  id="inquiry-approxWeight"
                  value={formData.approxWeight ?? ''}
                  onChange={(e) => handleChange('approxWeight', e.target.value)}
                  disabled={status === 'submitting'}
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none ${
                    errors.approxWeight
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                  }`}
                  aria-invalid={!!errors.approxWeight}
                  aria-describedby={errors.approxWeight ? 'inquiry-approxWeight-error' : undefined}
                >
                  <option value="">Select weight bracket (optional)...</option>
                  <option value="under-0.5kg">Under 0.5 kg (Documents, Letters, Small Packets)</option>
                  <option value="0.5-2kg">0.5–2 kg (Standard Parcel &amp; Fabric Swatches)</option>
                  <option value="2-5kg">2–5 kg (Medium Box / Multi-sample Parcels)</option>
                  <option value="5kg-plus">5+ kg (Heavy Parcels)</option>
                  <option value="commercial-freight">Commercial Freight (B2B Cargo &amp; Bulk Textiles)</option>
                </select>
                {errors.approxWeight && (
                  <p
                    id="inquiry-approxWeight-error"
                    role="alert"
                    aria-live="polite"
                    className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.approxWeight}</span>
                  </p>
                )}
              </div>

              {/* Message / Requirement */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="inquiry-message"
                    className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
                  >
                    Inquiry Details <span className="text-[#DC2626]">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {formData.message.length}/600
                  </span>
                </div>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  disabled={status === 'submitting'}
                  maxLength={600}
                  placeholder="Mention specific courier requirements, pickup address in Bhilwara, or timeline..."
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white rounded-xl border transition-all outline-none resize-none ${
                    errors.message
                      ? 'border-red-400 ring-2 ring-red-400/20'
                      : 'border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-red-500/10'
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'inquiry-message-error' : undefined}
                />
                {errors.message && (
                  <p
                    id="inquiry-message-error"
                    role="alert"
                    aria-live="polite"
                    className="text-xs text-[#DC2626] font-medium flex items-center gap-1 pt-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Disclaimer notice inside modal */}
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-start gap-2 text-[11px] text-slate-500 leading-snug">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Prototype Notice: Inquiry submission routes through client-validated channels. No spam or unverified message dispatch.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={status === 'submitting'}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Recording Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
