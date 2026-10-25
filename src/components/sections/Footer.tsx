import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import {
  BUSINESS_INFO,
  CARRIER_TRADEMARK_DISCLAIMER,
  DEMO_TRACKING_DISCLAIMER,
  CONTACT_ACTION_NOTICE,
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#0A0F1D] text-slate-300 border-t border-slate-800">
      {/* Top Advisory Banner in Footer */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Official Client Proposal Prototype for <strong>Economic Courier / eCS Bhilwara</strong>
            </span>
          </div>
          <div className="text-slate-400">
            <span>Status: </span>
            <span className="text-amber-300 font-semibold">
              Live Prototype — Business credentials pending client validation
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="dark" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering Bhilwara&apos;s textile manufacturers, fabric exporters, and commercial traders
              with priority domestic express parcel delivery and reliable eCS worldwide air cargo dispatch.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">
                Bhilwara Textile Logistics Focus [Specialization]
              </span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Express Logistics
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Domestic Air Express
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  eCS Worldwide Air Cargo (220+ Countries)
                </a>
              </li>
              <li>
                <a href="#textile-focus" className="hover:text-red-400 transition-colors">
                  Textile Fabric Swatch Priority Express
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">
                  Critical Documents & Legal Tenders
                </a>
              </li>
              <li>
                <a href="#rate-estimator" className="hover:text-red-400 transition-colors">
                  Rate & Transit Time Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Bhilwara Dispatch Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Bhilwara Dispatch Hub
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-medium">Bhilwara Primary Hub</p>
                  <p className="text-slate-400">{BUSINESS_INFO.addressPlaceholder}</p>
                  <span className="inline-block mt-0.5 text-[10px] text-amber-400 font-mono">
                    [PENDING CLIENT CONFIRMATION]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Operating Hours</p>
                  <p className="text-slate-400">Mon–Sat: 9:30 AM – 8:30 PM</p>
                  <p className="text-slate-500">Sunday: Closed / Urgent By Appointment</p>
                  <span className="inline-block mt-0.5 text-[10px] text-amber-400 font-mono">
                    [PENDING CLIENT CONFIRMATION]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Dispatch Counter Call Desk</p>
                  <a
                    href="#pending-contact-notice"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.phonePlaceholder}
                  </a>
                  <span className="block mt-0.5 text-[10px] text-amber-400 font-mono">
                    [PENDING CLIENT CONFIRMATION]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Client Verification Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Client Review Desk
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2 text-xs">
              <p className="text-slate-300 font-medium">For Review by Business Owner:</p>
              <ul className="space-y-1.5 text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Verify exact shop address & pin</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Confirm WhatsApp business number</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Carrier API vs. link routing preference</span>
                </li>
              </ul>
              <div className="pt-1">
                <a
                  href="#contact-hub"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-300"
                >
                  <span>Review checklist details</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Trademark Disclaimers */}
        <div className="border-t border-slate-800/90 pt-8 pb-4 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Communication & Action Notice:</strong>{' '}
            {CONTACT_ACTION_NOTICE}
          </p>
          <p>
            <strong className="text-slate-400">Consignment Tracking Notice:</strong>{' '}
            {DEMO_TRACKING_DISCLAIMER}
          </p>
          <p>
            <strong className="text-slate-400">Trademark Notice:</strong>{' '}
            {CARRIER_TRADEMARK_DISCLAIMER}
          </p>
          <p>
            <strong className="text-slate-400">Service Terms:</strong> Freight quotations and transit
            schedules are subject to dimensional volumetric weight, security inspection, and destination
            customs regulations.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Economic Courier / eCS World Wide Express, Bhilwara. All rights reserved.
          </p>
          <p className="text-slate-600">
            Built for Bhilwara Textile & Commercial Trade Hub
          </p>
        </div>
      </div>
    </footer>
  );
}
