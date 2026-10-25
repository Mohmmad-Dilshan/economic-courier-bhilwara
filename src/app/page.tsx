import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Package,
  Search,
  CheckCircle2,
  PhoneCall,
  Layers,
  Component,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { NoticeBanner } from '@/components/ui/NoticeBanner';
import { DEMO_TRACKING_DISCLAIMER } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="bg-[var(--color-bg-secondary)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Foundation Header Hero Card */}
        <Card variant="elevated" className="p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-red-600 via-slate-800 to-red-600" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="accent" size="md" dot>
              Phase 1 Milestone — Foundation & Design System Ready
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary-800)] tracking-tight mb-3">
            Economic Courier <span className="text-[var(--color-accent-600)]">/ eCS</span>
          </h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-6">
            World Wide Express &bull; Bhilwara Express Hub
          </p>

          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-8">
            Next.js App Router core, CSS token architecture, responsive Header/Footer shell, and atomic UI design components have been established in accordance with{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
              AGENTS.md
            </code>{' '}
            and{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
              docs/DESIGN.md
            </code>
            .
          </p>

          {/* Verification Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Next.js App Router (Strict TypeScript)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CSS Design Tokens (Express Red + Navy)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Responsive Header & Footer Shell</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Atomic UI Primitives (Button, Card, Badge, Input)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#component-preview">
              <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Inspect Phase 1 UI Components
              </Button>
            </a>
            <a href="#notice-preview">
              <Button variant="outline" leftIcon={<ShieldCheck className="w-4 h-4" />}>
                Review Safety Notices
              </Button>
            </a>
          </div>
        </Card>

        {/* Atomic Components Showcase Section */}
        <div id="component-preview" className="space-y-6">
          <div className="flex items-center gap-2 text-slate-800">
            <Component className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold tracking-tight">
              Phase 1 Atomic Component Library Preview
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Buttons & Badges */}
            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Button & Badge Tokens</h3>
                  <Badge variant="blue" size="sm">
                    Interactive
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Accessible keyboard focus rings, multiple semantic variants, and icon slots.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2.5">
                  <Button variant="primary" size="sm">
                    Primary Red
                  </Button>
                  <Button variant="secondary" size="sm">
                    Secondary Navy
                  </Button>
                  <Button variant="outline" size="sm">
                    Outline Slate
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="sm"
                    leftIcon={<PhoneCall className="w-3.5 h-3.5" />}
                  >
                    WhatsApp Green
                  </Button>
                  <Button variant="ghost" size="sm">
                    Ghost Link
                  </Button>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <Badge variant="accent" dot>
                    Express Red
                  </Badge>
                  <Badge variant="primary" dot>
                    Corporate Navy
                  </Badge>
                  <Badge variant="success" dot>
                    Delivered
                  </Badge>
                  <Badge variant="warning" dot>
                    In Transit
                  </Badge>
                  <Badge variant="blue" dot>
                    Air Cargo
                  </Badge>
                  <Badge variant="neutral">Neutral Slate</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Form Inputs & Consignment Lookups */}
            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Input Primitives</h3>
                  <Badge variant="primary" size="sm">
                    Accessible Form Fields
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Prefix icon placement, clear action triggers, and validation states.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Sample Consignment AWB (Demo Record)"
                  placeholder="e.g. DEMO-ECS-1001"
                  defaultValue="DEMO-ECS-1001"
                  leftIcon={<Search className="w-4 h-4" />}
                  rightElement={
                    <Button variant="primary" size="sm" className="h-8 py-0 px-3 text-xs">
                      Demo Lookup
                    </Button>
                  }
                  helperText="Search simulated demonstration records from the Bhilwara hub."
                />

                <Input
                  label="Origin Hub"
                  value="Bhilwara Hub, Rajasthan"
                  disabled
                  leftIcon={<Package className="w-4 h-4" />}
                  helperText="Fixed dispatch center for Bhilwara trade."
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety & Compliance Notice Banners Section */}
        <div id="notice-preview" className="space-y-4">
          <div className="flex items-center gap-2 text-slate-800">
            <Layers className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold tracking-tight">
              Safety & Client Disclosure Notice Components
            </h2>
          </div>

          <div className="space-y-3">
            <NoticeBanner variant="demo" title="Demonstration Tracking Notice (Mandatory)">
              {DEMO_TRACKING_DISCLAIMER}
            </NoticeBanner>

            <NoticeBanner
              id="pending-contact-notice"
              variant="pending"
              title="Client Confirmation Pending (Per AGENTS.md Rule 1)"
            >
              Direct telephone dialing, WhatsApp messaging actions, physical shop address near Pur Road, and GSTIN are safely disabled or marked as placeholders in this prototype until confirmed by the business owner.
            </NoticeBanner>

            <NoticeBanner variant="warning" title="Packaging Advisory">
              Textile fabric swatches must be packed in moisture-resistant tamper-evident polybags to
              prevent transit damage during inter-state air cargo transfers.
            </NoticeBanner>
          </div>
        </div>

        {/* Phase 2 Transition Ready Callout */}
        <Card variant="accent" className="p-6 bg-linear-to-br from-white to-red-50/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Phase 1 Foundation Setup & Design System Tokens — Complete
                </h3>
              </div>
              <p className="text-xs text-slate-600">
                Next Step: <strong>Phase 2 High-Impact Master Home Page</strong> (Hero with quick consignment lookup, Bhilwara textile sample focus strip, interactive services matrix, tracking simulator, and WhatsApp rate estimator).
              </p>
            </div>
            <div className="shrink-0">
              <Badge variant="success" size="md">
                Verified & Ready
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
