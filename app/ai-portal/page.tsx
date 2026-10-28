'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sun,
  BatteryCharging,
  Zap,
  Activity,
  AlertTriangle,
  ArrowLeft,
  Phone,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { Reveal } from '../../components/UI';
import { AIPortalLiveDashboard } from '../../components/AIPortalLiveDashboard';

export default function AIPortalPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <main className="readable-ui min-h-screen bg-[#0B0F17] text-slate-100 pt-12 pb-20 font-sans">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#E86526] transition py-1 px-3 rounded-lg bg-white/5 border border-white/10"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Homepage
          </Link>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Telemetry Node Live
            </span>
            <span className="text-slate-500">Coimbatore Main Server</span>
          </div>
        </div>

        {/* UNDER MAINTENANCE / SYSTEM PREVIEW BANNER */}
        <Reveal>
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent p-5 sm:p-6 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Under Maintenance · Preview Mode
                    </span>
                  </div>
                  <h1 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    The Sunloop AI Energy Portal is in preview and undergoing maintenance.
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    The full cloud portal and automated remote switching features are in development. Below is a live interactive telemetry dashboard preview.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917339536677"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E86526] hover:bg-[#d8581c] text-white text-xs font-semibold shadow-lg transition"
              >
                <Phone className="h-3.5 w-3.5" /> Contact Support Team
              </a>
            </div>
          </div>
        </Reveal>

        {/* MAIN DASHBOARD: HORIZONTAL CLEAN & ANIMATED GRAPH */}
        <Reveal>
          <AIPortalLiveDashboard showBrowserBar={true} />
        </Reveal>

        {/* CORE CAPABILITIES GRID (4 Clean Cards) */}
        <Reveal>
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E86526]">
                  FUTURE ENTERPRISE FEATURES
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  What&apos;s Coming in Full AI Energy Management
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-[#E86526] flex items-center justify-center text-white shadow-sm shadow-orange-500/30">
                  <Sun className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Solar Yield Forecasting</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Predictive generation modeling based on satellite weather data and live irradiance tracking.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/30">
                  <BatteryCharging className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Automated Peak Shaving</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dynamic battery discharge dispatching during high-tariff grid hours to maximize cost savings.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Smart EV Fleet Balancing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Intelligent load sharing across EV chargers prioritized by available solar and battery power.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-sm shadow-purple-500/30">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">24/7 Fault Diagnostics</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  AI string-level anomaly detection and instant alert triggers for proactive maintenance.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        {/* BOTTOM ACTION CTA BOX */}
        <div className="rounded-2xl border border-white/10 bg-[#121824] p-6 text-center space-y-3">
          <h3 className="text-base font-bold text-white">Looking for Custom Solar or Storage Deployment?</h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Our engineering team in Coimbatore designs and builds customized commercial and residential solar systems with full telemetry readiness.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E86526] hover:bg-[#d8581c] text-white text-xs font-semibold shadow-lg transition"
            >
              Request Feasibility Quote
            </Link>
            <Link
              href="/products/solar-power"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold transition"
            >
              Explore Solar Hardware
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
