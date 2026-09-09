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
  ExternalLink
} from 'lucide-react';
import { Reveal } from '../../components/UI';

export default function AIPortalPage() {
  const [timeRange, setTimeRange] = useState<'24H' | '7D' | '30D'>('24H');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <main className="readable-ui min-h-screen bg-[#0B0F17] text-slate-100 pt-24 pb-20 font-sans">
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
                    SunLoop AI Energy Portal is Currently in Preview &amp; Maintenance
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    The full cloud portal and automated remote switching features are under active engineering development. Below is the simplified live telemetry dashboard preview.
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

        {/* MAIN DASHBOARD CONTAINER (MOCKUP LIKE USER SCREENSHOT) */}
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-[#121824] shadow-2xl overflow-hidden">
            
            {/* Top Browser Bar Header */}
            <div className="px-5 sm:px-6 py-4 border-b border-white/10 bg-[#0E131D] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 pl-2">
                  portal.sunloopenergy.com/dashboard
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleRefresh}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition px-2 py-1 rounded-md bg-white/5 border border-white/10"
                >
                  <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin text-[#E86526]' : ''}`} />
                  Sync
                </button>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> System Live
                </span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-5 sm:p-8 space-y-6">
              
              {/* TOP 3 KPI CARDS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Card 1: Total Solar Generation */}
                <div className="rounded-2xl border border-white/10 bg-[#161F2E] p-5 space-y-3 hover:border-white/20 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">Total Solar Generation</span>
                    <div className="h-7 w-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#E86526]">
                      <Sun className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-white tracking-tight">124.5</span>
                      <span className="text-sm font-semibold text-[#E86526]">kW</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium mt-1">
                      <TrendingUp className="h-3 w-3" /> +12% higher than yesterday
                    </span>
                  </div>
                </div>

                {/* Card 2: ESS Battery Buffer */}
                <div className="rounded-2xl border border-white/10 bg-[#161F2E] p-5 space-y-3 hover:border-white/20 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">ESS Battery Buffer</span>
                    <div className="h-7 w-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <BatteryCharging className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-white tracking-tight">98</span>
                      <span className="text-sm font-semibold text-emerald-400">%</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium mt-1">
                      <Zap className="h-3 w-3 text-emerald-400" /> 5.2 kW Input Power (Optimal)
                    </span>
                  </div>
                </div>

                {/* Card 3: EV Charger Status */}
                <div className="rounded-2xl border border-white/10 bg-[#161F2E] p-5 space-y-3 hover:border-white/20 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">EV Charger Status</span>
                    <div className="h-7 w-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Zap className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-white tracking-tight">7.4</span>
                      <span className="text-sm font-semibold text-blue-400">kW AC</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium mt-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" /> Active Session (1 Port)
                    </span>
                  </div>
                </div>

              </div>

              {/* LARGE TELEMETRY WAVE CHART CARD */}
              <div className="rounded-2xl border border-white/10 bg-[#161F2E] p-5 sm:p-6 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-white">Live Generation &amp; Consumption</h2>
                    <p className="text-xs text-slate-400">Real-time telemetry stream from connected microgrid assets</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0E131D] p-1 rounded-xl border border-white/10 flex items-center text-xs">
                      {(['24H', '7D', '30D'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTimeRange(tab)}
                          className={`px-3 py-1 rounded-lg font-medium transition ${
                            timeRange === tab
                              ? 'bg-white/15 text-white font-semibold'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-orange-500/15 text-[#E86526] border border-orange-500/30 text-xs font-semibold">
                      Live
                    </span>
                  </div>
                </div>

                {/* SVG Telemetry Curve */}
                <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-[#0D121B] border border-white/5 p-4 flex flex-col justify-between">
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-rows-4 pointer-events-none opacity-10">
                    <div className="border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-b border-white" />
                  </div>

                  <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id="portalOrangeWave" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E86526" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#E86526" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#E86526" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Area under wave */}
                    <path
                      d="M0,240 C150,190 220,260 350,220 C480,180 540,110 650,120 C760,130 850,170 1000,165 L1000,300 L0,300 Z"
                      fill="url(#portalOrangeWave)"
                    />

                    {/* Glowing Stroke Line */}
                    <path
                      d="M0,240 C150,190 220,260 350,220 C480,180 540,110 650,120 C760,130 850,170 1000,165"
                      fill="none"
                      stroke="#E86526"
                      strokeWidth="3.5"
                    />
                  </svg>

                  {/* Chart Labels / Values */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/5">
                    <span>00:00 (Midnight)</span>
                    <span>06:00 (Sunrise)</span>
                    <span className="text-[#E86526] font-semibold">12:00 (Peak Sun · 124.5 kW)</span>
                    <span>18:00 (Sunset)</span>
                    <span>23:59 (Current)</span>
                  </div>
                </div>

                {/* Chart Bottom Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Activity className="h-4 w-4" /> Peak Shaving Active · Evening Discharge Scheduled
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> AI Portal Synchronized (50.02 Hz)
                  </span>
                </div>

              </div>

            </div>
          </div>
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
                <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#E86526]">
                  <Sun className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Solar Yield Forecasting</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Predictive generation modeling based on satellite weather data and live irradiance tracking.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <BatteryCharging className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Automated Peak Shaving</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dynamic battery discharge dispatching during high-tariff grid hours to maximize cost savings.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Smart EV Fleet Balancing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Intelligent load sharing across EV chargers prioritized by available solar and battery power.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121824] p-5 space-y-2.5">
                <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
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
