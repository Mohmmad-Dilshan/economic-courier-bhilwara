'use client';

import React from 'react';
import { X, Package, CheckCircle2, Clock, MapPin, AlertCircle, Sparkles } from 'lucide-react';
import { ConsignmentDemoResult } from '@/types/tracking';
import { DEMO_TRACKING_DISCLAIMER } from '@/lib/constants';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: ConsignmentDemoResult | null;
  searchedQuery: string;
  onSelectSample: (id: string) => void;
}

export function TrackingModal({
  isOpen,
  onClose,
  result,
  searchedQuery,
  onSelectSample,
}: TrackingModalProps) {
  // WCAG 2.1 Escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] cursor-default">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-50 text-[#DC2626] rounded-xl">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 id="tracking-modal-title" className="text-base font-bold text-slate-900">
                Consignment Tracking Desk
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Query: <span className="font-semibold text-slate-800">{searchedQuery || 'None'}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close tracking window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Demonstration Disclaimer Banner (Mandatory per AGENTS.md) */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-950">Demonstration Tracking UI</span>
              {DEMO_TRACKING_DISCLAIMER}
            </div>
          </div>

          {result ? (
            <div className="space-y-6">
              {/* Shipment Overview Header Card */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Consignment ID [DEMO RECORD]
                    </span>
                    <span className="text-lg font-extrabold text-slate-900 font-mono">
                      {result.consignmentId}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {result.status} [DEMO]
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-slate-500 block">Origin</span>
                    <span className="font-bold text-slate-800">{result.senderCity}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Destination</span>
                    <span className="font-bold text-slate-800">{result.destinationCity}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Service Type</span>
                    <span className="font-medium text-slate-700">{result.serviceType}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Estimated Delivery</span>
                    <span className="font-semibold text-emerald-700">{result.estimatedDelivery}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Weight &amp; Pieces</span>
                    <span className="font-medium text-slate-700">{result.weightKg} &bull; {result.pieceCount} piece(s)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Last Activity</span>
                    <span className="font-medium text-slate-700">{result.lastUpdated}</span>
                  </div>
                </div>
              </div>

              {/* Milestone Timeline */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Consignment Milestone History [SIMULATION ONLY]
                </h4>
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {result.milestones.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-3">
                      <span
                        className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                          step.completed
                            ? 'border-emerald-500 text-emerald-500'
                            : 'border-slate-300 text-slate-300'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-50 text-emerald-600" />
                        ) : (
                          <Clock className="w-3 h-3 text-slate-400" />
                        )}
                      </span>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{step.status}</span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            &bull; {step.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600">{step.description}</p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{step.location}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h4 className="text-base font-bold text-slate-900">
                  Consignment Not Found
                </h4>
                <p className="text-xs text-slate-600 font-medium font-mono">
                  &ldquo;{searchedQuery}&rdquo; does not match any demo consignment.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  Live real-time carrier tracking connects upon official API activation. To test the demonstration tracking experience, click any of our verified sample consignments:
                </p>
              </div>

              {/* Sample Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectSample('DEMO-ECS-1001')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-xs font-mono font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  DEMO-ECS-1001 (Textile Mumbai)
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSample('DEMO-ECS-2002')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-xs font-mono font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  DEMO-ECS-2002 (Dubai Express)
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSample('DEMO-ECS-3003')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-xs font-mono font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  DEMO-ECS-3003 (Delhi Document)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono text-[11px]">DEMO SIMULATION DESK</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
