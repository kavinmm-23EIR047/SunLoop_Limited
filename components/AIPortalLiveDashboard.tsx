'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  BatteryCharging,
  Zap,
  TrendingUp,
  Activity,
  Sliders,
  Sparkles,
  Server,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

interface AIPortalLiveDashboardProps {
  className?: string;
  showBrowserBar?: boolean;
}

export function AIPortalLiveDashboard({
  className = '',
  showBrowserBar = true,
}: AIPortalLiveDashboardProps) {
  const [activeRange, setActiveRange] = useState<'24H' | '7D' | '30D' | 'Live'>('24H');
  const [liveSolar, setLiveSolar] = useState(124.5);
  const [liveEss, setLiveEss] = useState(98);
  const [liveEv, setLiveEv] = useState(7.4);
  const [isLivePulsing, setIsLivePulsing] = useState(true);

  // Subtle real-time telemetry jitter for realistic live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSolar((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Number((124.5 + delta).toFixed(1));
      });
      setLiveEv((prev) => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Number((7.4 + delta).toFixed(1));
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // Graph data curves depending on time range
  const graphConfigs = {
    '24H': {
      peakTime: '13:30',
      peakVal: '124.5 kW',
      solarPath: 'M 0 110 C 60 110, 100 85, 140 50 C 180 20, 240 8, 290 12 C 340 18, 380 65, 420 85 C 460 98, 480 105, 500 108',
      solarArea: 'M 0 110 C 60 110, 100 85, 140 50 C 180 20, 240 8, 290 12 C 340 18, 380 65, 420 85 C 460 98, 480 105, 500 108 L 500 145 L 0 145 Z',
      gridPath: 'M 0 85 C 80 82, 140 92, 200 95 C 260 98, 320 88, 380 75 C 430 65, 470 68, 500 70',
      peakCoords: { cx: 285, cy: 12 },
      labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
    },
    '7D': {
      peakTime: 'Thu Peak',
      peakVal: '138.2 kW',
      solarPath: 'M 0 95 C 50 40, 90 90, 140 30 C 190 85, 230 25, 280 60 C 330 15, 370 70, 420 20 C 460 65, 480 90, 500 85',
      solarArea: 'M 0 95 C 50 40, 90 90, 140 30 C 190 85, 230 25, 280 60 C 330 15, 370 70, 420 20 C 460 65, 480 90, 500 85 L 500 145 L 0 145 Z',
      gridPath: 'M 0 90 C 80 95, 150 90, 240 92 C 330 88, 420 90, 500 88',
      peakCoords: { cx: 330, cy: 15 },
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    '30D': {
      peakTime: 'Month Avg',
      peakVal: '121.8 kW',
      solarPath: 'M 0 80 C 70 75, 120 40, 180 50 C 240 60, 290 35, 360 45 C 420 55, 460 40, 500 65',
      solarArea: 'M 0 80 C 70 75, 120 40, 180 50 C 240 60, 290 35, 360 45 C 420 55, 460 40, 500 65 L 500 145 L 0 145 Z',
      gridPath: 'M 0 92 C 100 90, 200 92, 300 90 C 400 92, 460 90, 500 91',
      peakCoords: { cx: 290, cy: 35 },
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    },
    'Live': {
      peakTime: 'Instant Now',
      peakVal: `${liveSolar} kW`,
      solarPath: 'M 0 115 C 60 110, 120 85, 180 45 C 240 18, 300 8, 360 15 C 410 22, 460 55, 500 75',
      solarArea: 'M 0 115 C 60 110, 120 85, 180 45 C 240 18, 300 8, 360 15 C 410 22, 460 55, 500 75 L 500 145 L 0 145 Z',
      gridPath: 'M 0 82 C 100 85, 200 88, 300 85 C 400 80, 460 78, 500 76',
      peakCoords: { cx: 300, cy: 8 },
      labels: ['-60m', '-45m', '-30m', '-15m', 'Now'],
    },
  };

  const currentGraph = graphConfigs[activeRange];

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F1D] p-3 sm:p-5 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Background Tech Mesh Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#E86526]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#06B6D4]/10 blur-3xl" />

      {/* ========================================================
          1. HEADER BAR: Browser Dots + Live Sync Status
          ======================================================== */}
      {showBrowserBar && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-1 pb-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E86526]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="ml-2 hidden min-w-0 truncate text-xs font-mono text-slate-400 lg:inline">
              portal.sunloopenergy.com/live
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-400 sm:px-2.5 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Telemetry
            </span>
          </div>
        </div>
      )}

      {/* ========================================================
          2. HORIZONTAL CLEAN KPI METRIC DECK (High Contrast)
          ======================================================== */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {/* KPI 1: Solar Generation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#101726] p-2.5 sm:p-3.5 hover:border-orange-500/40 transition-all group"
        >
          <div className="mb-1 flex min-w-0 items-center justify-between gap-1 sm:mb-1.5">
            <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-slate-300 sm:text-xs">
              Solar
            </span>
            <div className="h-5 w-5 shrink-0 rounded-lg bg-[#E86526] flex items-center justify-center text-white shadow-sm shadow-orange-500/30 sm:h-7 sm:w-7">
              <Sun className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={liveSolar}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-white"
            >
              {liveSolar}
            </motion.span>
            <span className="text-[11px] sm:text-xs font-bold text-[#E86526]">kW</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-400 truncate">
            <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
            <span className="truncate">+12% vs yest.</span>
          </div>
        </motion.div>

        {/* KPI 2: ESS Battery Buffer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#101726] p-2.5 sm:p-3.5 hover:border-emerald-500/40 transition-all group"
        >
          <div className="mb-1 flex min-w-0 items-center justify-between gap-1 sm:mb-1.5">
            <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-slate-300 sm:text-xs">
              Battery
            </span>
            <div className="h-5 w-5 shrink-0 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/30 sm:h-7 sm:w-7">
              <BatteryCharging className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={liveEss}
              className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-white"
            >
              {liveEss}
            </motion.span>
            <span className="text-[11px] sm:text-xs font-bold text-emerald-400">%</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-400 truncate">
            <Zap className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
            <span className="truncate">5.2 kW Input</span>
          </div>
        </motion.div>

        {/* KPI 3: EV Charger Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#101726] p-2.5 sm:p-3.5 hover:border-blue-500/40 transition-all group"
        >
          <div className="mb-1 flex min-w-0 items-center justify-between gap-1 sm:mb-1.5">
            <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-slate-300 sm:text-xs">
              EV Charger
            </span>
            <div className="h-5 w-5 shrink-0 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30 sm:h-7 sm:w-7">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={liveEv}
              className="text-lg sm:text-2xl font-bold font-mono tracking-tight text-white"
            >
              {liveEv}
            </motion.span>
            <span className="text-[11px] sm:text-xs font-bold text-blue-400">kW</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-slate-300 truncate">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
            <span className="truncate">Active (1 Port)</span>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          3. DYNAMIC TELEMETRY GRAPH & ANIMATIONS
          ======================================================== */}
        <div className="relative flex-1 overflow-hidden rounded-xl border border-slate-800 bg-[#0B101E] p-3 sm:p-4">
        {/* Chart Header & Interactive Filter Tabs */}
        <div className="mb-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h4 className="text-xs font-bold tracking-tight text-white sm:text-sm">
                Live Generation &amp; Consumption
              </h4>
              <span className="inline-flex items-center gap-1 rounded border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-[9px] text-orange-400 sm:text-[10px]">
                Multi-Stream
              </span>
            </div>
            <p className="mt-0.5 text-[10px] leading-snug text-slate-400 sm:text-xs">
              Real-time telemetry stream synchronized across microgrid assets
            </p>
          </div>

          {/* Interactive Range Switcher Pills */}
          <div className="grid w-full shrink-0 grid-cols-4 items-center gap-1 rounded-lg border border-slate-700/80 bg-slate-900/90 p-1 sm:w-auto sm:flex">
            {(['24H', '7D', '30D', 'Live'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveRange(tab)}
                className={`min-w-0 rounded-md px-1.5 py-1 text-[10px] font-semibold transition-all cursor-pointer sm:px-2.5 sm:text-xs ${
                  activeRange === tab
                    ? 'bg-[#E86526] text-white font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Legend Indicator */}
        <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-slate-400 sm:text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E86526]" />
            <span>Solar Generation (kW)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
            <span>Grid Peak-Shaving (kW)</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-[#E86526] px-2 py-1 text-[10px] font-bold text-white sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Peak {currentGraph.peakVal}
          </span>
        </div>

        {/* Animated SVG Graph Canvas */}
        <div className="relative w-full h-32 sm:h-36 pt-2 select-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* Solar Area Warm Gradient */}
              <linearGradient id="live-solar-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E86526" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#E86526" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#E86526" stopOpacity="0" />
              </linearGradient>

              {/* Cyan Load Shaving Gradient */}
              <linearGradient id="live-grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>

              <filter id="live-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Grid Horizontal Guidelines */}
            <g opacity="0.15" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="3 4">
              <line x1="0" y1="35" x2="500" y2="35" />
              <line x1="0" y1="75" x2="500" y2="75" />
              <line x1="0" y1="115" x2="500" y2="115" />
            </g>

            {/* Grid Line (Cyan/Emerald Consumption & Peak-Shaving Stream) */}
            <motion.path
              key={`grid-${activeRange}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              d={currentGraph.gridPath}
              fill="none"
              stroke="#06B6D4"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />

            {/* Solar Generation Area Gradient Fill */}
            <motion.path
              key={`area-${activeRange}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              d={currentGraph.solarArea}
              fill="url(#live-solar-grad)"
            />

            {/* Solar Generation Glowing Main Curve */}
            <motion.path
              key={`stroke-${activeRange}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              d={currentGraph.solarPath}
              fill="none"
              stroke="#E86526"
              strokeWidth="2.5"
              filter="url(#live-glow)"
            />

            {/* Animated Peak Solar Beacon Radar Point */}
            <g transform={`translate(${currentGraph.peakCoords.cx}, ${currentGraph.peakCoords.cy})`}>
              <circle cx="0" cy="0" r="10" fill="#E86526" opacity="0.25" className="animate-ping" />
              <circle cx="0" cy="0" r="5" fill="#E86526" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2" fill="#FEF08A" />
            </g>
          </svg>

        </div>

        {/* X-Axis Timeline Markers */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] font-mono text-slate-500">
          {currentGraph.labels.map((lbl, idx) => (
            <span key={idx}>{lbl}</span>
          ))}
        </div>

        {/* Bottom Telemetry Synchronization Footer */}
        <div className="mt-2.5 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-t border-white/10 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Sliders className="h-3 w-3 text-orange-400 shrink-0" aria-hidden="true" />
            <span>Automated Peak Shaving: <strong className="text-white font-medium">-38% Peak Stress</strong></span>
          </div>

          <div className="flex items-center gap-1.5 text-[#E86526] font-mono font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Portal Sync (12ms)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

