'use client';

import React from 'react';
import {
  Sun,
  Leaf,
  TreePine,
  ShieldCheck,
  ChevronDown,
  Star,
  Zap,
  Globe2,
  Infinity as InfinityIcon,
  CheckCircle2,
  TrendingUp,
  Activity
} from 'lucide-react';
import { Reveal } from './UI';

export default function EnergyDashboard() {
  return (
    <section className="w-full bg-[#FAFAF5] py-14 px-4 font-sans border-y border-black/5">
      <div className="container mx-auto max-w-7xl space-y-8">
        <Reveal>
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-black/5 pb-4">
            <div>
              <span className="eyebrow">LIVE SYSTEM TELEMETRY</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">Your Energy Dashboard</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-xl text-xs font-semibold text-brand-ink shadow-xs hover:bg-slate-50 transition">
                <CalendarIcon className="h-4 w-4 text-[#E86526]" /> Today <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-xl text-xs font-semibold text-brand-ink shadow-xs hover:bg-slate-50 transition">
                All Connected Systems <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* MAIN DASHBOARD GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT 4 KPI CARDS (Cols 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Current Generation */}
              <div className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs flex flex-col justify-between hover:shadow-card transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-orange-50 text-[#E86526] border border-orange-100">
                        <Sun className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-brand-ink">Current Generation</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      <TrendingUp className="h-3 w-3" /> Live
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 my-2">
                    <span className="text-3xl font-extrabold text-brand-ink tracking-tight">124.5</span>
                    <span className="text-sm font-bold text-[#E86526]">kW</span>
                  </div>
                  <p className="text-[11px] text-brand-slate font-medium">Live Power Output from Solar PV</p>
                </div>

                <div className="mt-4 h-14 w-full">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,40 L0,30 C10,35 15,15 25,20 C35,25 40,5 50,15 C60,25 65,30 75,10 C85,-10 95,20 100,5 L100,40 Z"
                      fill="url(#orangeGrad)"
                      opacity="0.8"
                    />
                    <path
                      d="M0,30 C10,35 15,15 25,20 C35,25 40,5 50,15 C60,25 65,30 75,10 C85,-10 95,20 100,5"
                      fill="none"
                      stroke="#E86526"
                      strokeWidth="2.5"
                    />
                    <defs>
                      <linearGradient id="orangeGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ffedd5" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Card 2: Energy Saved */}
              <div className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs flex flex-col justify-between hover:shadow-card transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <Leaf className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-brand-ink">Energy Saved</span>
                    </div>
                    <span className="text-[10px] font-bold text-brand-slate uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                      Today
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 my-2">
                    <span className="text-3xl font-extrabold text-brand-ink tracking-tight">258.7</span>
                    <span className="text-sm font-bold text-emerald-600">kWh</span>
                  </div>
                  <p className="text-[11px] text-brand-slate font-medium">Accumulated daily clean generation</p>
                </div>

                <div className="mt-4 h-14 w-full flex items-end justify-between gap-1.5 opacity-90">
                  <div className="w-full bg-emerald-200 rounded-t-md h-[35%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-md h-[55%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-md h-[45%]"></div>
                  <div className="w-full bg-emerald-300 rounded-t-md h-[70%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-md h-[40%]"></div>
                  <div className="w-full bg-emerald-500 rounded-t-md h-[90%]"></div>
                  <div className="w-full bg-emerald-300 rounded-t-md h-[65%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-md h-[50%]"></div>
                </div>
              </div>

              {/* Card 3: CO2 Avoided */}
              <div className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs flex flex-col justify-between hover:shadow-card transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
                        <TreePine className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-brand-ink">CO₂ Offset</span>
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      ESG Verified
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 my-2">
                    <span className="text-3xl font-extrabold text-brand-ink tracking-tight">186.4</span>
                    <span className="text-sm font-bold text-teal-600">kg</span>
                  </div>
                  <p className="text-[11px] text-brand-slate font-medium">Carbon footprint offset today</p>
                </div>

                <div className="mt-4 h-14 w-full">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,40 L0,35 C15,30 25,35 35,25 C45,15 55,20 65,10 C75,0 85,15 100,5 L100,40 Z"
                      fill="url(#greenGrad)"
                      opacity="0.8"
                    />
                    <path
                      d="M0,35 C15,30 25,35 35,25 C45,15 55,20 65,10 C75,0 85,15 100,5"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2.5"
                    />
                    <defs>
                      <linearGradient id="greenGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ccfbf1" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Card 4: System Status */}
              <div className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs flex flex-col justify-between hover:shadow-card transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-brand-ink">Health Status</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Healthy
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="text-2xl font-extrabold text-brand-ink tracking-tight">100% Operational</span>
                  </div>
                  <p className="text-[11px] text-brand-slate font-medium">All 18 assets online &amp; synchronized</p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs text-brand-slate font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" /> 0 Faults Detected
                  </span>
                  <span className="text-[10px] text-slate-400">AI Portal 24/7</span>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE SYSTEM OVERVIEW DONUT CARD (Cols 4) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-black/10 shadow-xs flex flex-col justify-between hover:shadow-card transition">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                  <span className="text-sm font-bold text-brand-ink">System Asset Distribution</span>
                  <span className="text-xs font-bold text-[#E86526] hover:underline cursor-pointer">
                    View Fleet →
                  </span>
                </div>

                <div className="flex items-center gap-6 my-4">
                  {/* CSS Donut Chart */}
                  <div
                    className="relative w-28 h-28 shrink-0 rounded-full shadow-inner flex items-center justify-center" 
                    style={{ background: 'conic-gradient(#3b82f6 0% 55%, #10b981 55% 88%, #f59e0b 88% 94%, #ef4444 94% 100%)' }}
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-xs">
                      <span className="text-2xl font-extrabold text-brand-ink leading-none">18</span>
                      <span className="text-[9px] font-bold uppercase text-brand-slate tracking-wider mt-0.5">Assets</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2 text-xs font-medium">
                    <div className="flex items-center justify-between pb-1 border-b border-black/5">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" /> On-Grid Solar
                      </span>
                      <strong className="text-brand-ink font-bold">10</strong>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-black/5">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" /> Hybrid (Solar + ESS)
                      </span>
                      <strong className="text-brand-ink font-bold">6</strong>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-black/5">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" /> Off-Grid Storage
                      </span>
                      <strong className="text-brand-ink font-bold">1</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500 shrink-0" /> Scheduled Maintenance
                      </span>
                      <strong className="text-brand-ink font-bold">1</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-brand-slate font-medium">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <Activity className="h-3.5 w-3.5" /> 99.8% System Uptime
                </span>
                <span>Coimbatore Grid Node</span>
              </div>
            </div>

          </div>

          {/* BOTTOM FEATURE STRIP (SPACIOUS RESPONSIVE CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl border border-black/10 shadow-xs">
            <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAFAF5] transition">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E86526]">
                <Star className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <strong className="block text-xs font-bold text-brand-ink leading-snug">
                  Built Today. Ready for Tomorrow.
                </strong>
                <p className="text-[11px] text-brand-slate leading-normal">
                  Scalable. Reliable. Future-Ready clean energy systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAFAF5] transition">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E86526]">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <strong className="block text-xs font-bold text-brand-ink leading-snug">
                  10 Years of Commitment.
                </strong>
                <p className="text-[11px] text-brand-slate leading-normal">
                  Powering progress with over a decade of trust.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAFAF5] transition">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E86526]">
                <Globe2 className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <strong className="block text-xs font-bold text-brand-ink leading-snug">
                  Smarter Energy, Stronger Tomorrow.
                </strong>
                <p className="text-[11px] text-brand-slate leading-normal">
                  AI-driven insights for peak performance &amp; savings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAFAF5] transition">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E86526]">
                <InfinityIcon className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <strong className="block text-xs font-bold text-brand-ink leading-snug">
                  Together for a Sustainable Future.
                </strong>
                <p className="text-[11px] text-brand-slate leading-normal">
                  Creating positive impact for generations to come.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
