'use client';

import React from 'react';
import { Sun, Leaf, TreePine, ShieldCheck, ChevronDown, Star, Zap, Globe2, Infinity as InfinityIcon } from 'lucide-react';
import { Reveal } from './UI';

export default function EnergyDashboard() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#111111]">Your Energy Dashboard</h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                <CalendarIcon className="h-4 w-4 text-slate-500" /> Today <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black/10 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                All Systems <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-8">
            {/* Left 4 KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              
              {/* Card 1: Current Generation */}
              <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="h-5 w-5 text-amber-500" />
                  <span className="text-xs font-bold text-slate-700">Current Generation</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-[#111111]">124.5</span>
                  <span className="text-sm font-semibold text-slate-500">kW</span>
                </div>
                <div className="text-xs text-slate-400 mb-4">Live Power Output</div>
                <div className="mt-auto h-16 w-full">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,40 L0,30 C10,35 15,15 25,20 C35,25 40,5 50,15 C60,25 65,30 75,10 C85,-10 95,20 100,5 L100,40 Z"
                      fill="url(#orangeGrad)"
                      opacity="0.8"
                    />
                    <path
                      d="M0,30 C10,35 15,15 25,20 C35,25 40,5 50,15 C60,25 65,30 75,10 C85,-10 95,20 100,5"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
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
              <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-5 w-5 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">Energy Saved</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-[#111111]">258.7</span>
                  <span className="text-sm font-semibold text-slate-500">kWh</span>
                </div>
                <div className="text-xs text-slate-400 mb-4">Today</div>
                <div className="mt-auto h-16 w-full flex items-end justify-between gap-1 opacity-80">
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[30%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[50%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[40%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[65%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[35%]"></div>
                  <div className="w-full bg-emerald-400 rounded-t-sm h-[80%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[60%]"></div>
                  <div className="w-full bg-emerald-200 rounded-t-sm h-[45%]"></div>
                </div>
              </div>

              {/* Card 3: CO2 Avoided */}
              <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <TreePine className="h-5 w-5 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-700">CO₂ Avoided</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-extrabold text-[#111111]">186.4</span>
                  <span className="text-sm font-semibold text-slate-500">kg</span>
                </div>
                <div className="text-xs text-slate-400 mb-4">Today</div>
                <div className="mt-auto h-16 w-full">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,40 L0,35 C15,30 25,35 35,25 C45,15 55,20 65,10 C75,0 85,15 100,5 L100,40 Z"
                      fill="url(#greenGrad)"
                      opacity="0.8"
                    />
                    <path
                      d="M0,35 C15,30 25,35 35,25 C45,15 55,20 65,10 C75,0 85,15 100,5"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="greenGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#d1fae5" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Card 4: System Status */}
              <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                  <span className="text-xs font-bold text-slate-700">System Status</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-extrabold text-[#111111]">All Systems</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="text-sm font-bold text-emerald-600">Healthy</span>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-3">
                  <ShieldCheck className="h-4 w-4" /> No active alerts
                </div>
              </div>
            </div>

            {/* Right Side Donut Chart Card */}
            <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-slate-800">System Overview</span>
                <span className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer flex items-center gap-1">
                  View All &rarr;
                </span>
              </div>
              
              <div className="flex items-center justify-between gap-4 flex-1">
                {/* CSS Donut Chart */}
                <div className="relative w-28 h-28 shrink-0 rounded-full" 
                     style={{ background: 'conic-gradient(#3b82f6 0% 55%, #10b981 55% 88%, #f59e0b 88% 94%, #ef4444 94% 100%)' }}>
                  <div className="absolute inset-4 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 mb-0.5">Total Systems</div>
                  <div className="text-2xl font-extrabold text-[#111111] mb-3">18</div>
                  
                  <div className="space-y-1.5 w-full">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500"></span> On Grid</div>
                      <span className="text-slate-900 font-bold">10</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Hybrid (PV + ESS)</div>
                      <span className="text-slate-900 font-bold">6</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500"></span> Off Grid</div>
                      <span className="text-slate-900 font-bold">1</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500"></span> Maintenance</div>
                      <span className="text-slate-900 font-bold">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
            <div className="flex items-start gap-4 pr-4 border-r border-transparent lg:border-slate-100">
              <div className="h-10 w-10 shrink-0 rounded-full border border-orange-200 flex items-center justify-center text-orange-500">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-slate-800 mb-0.5">Built Today.<br/>Ready for Tomorrow.</strong>
                <span className="text-[11px] text-slate-500 leading-tight">Scalable. Reliable. Future-Ready.</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pr-4 border-r border-transparent lg:border-slate-100">
              <div className="h-10 w-10 shrink-0 rounded-full border border-orange-200 flex items-center justify-center text-orange-500">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-slate-800 mb-0.5">10 Years of Commitment.<br/>A Lifetime of Trust.</strong>
                <span className="text-[11px] text-slate-500 leading-tight">Powering businesses for a sustainable future.</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pr-4 border-r border-transparent lg:border-slate-100">
              <div className="h-10 w-10 shrink-0 rounded-full border border-orange-200 flex items-center justify-center text-orange-500">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-slate-800 mb-0.5">Smarter Energy.<br/>Stronger Tomorrow.</strong>
                <span className="text-[11px] text-slate-500 leading-tight">AI-driven insights for maximum performance and savings.</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 shrink-0 rounded-full border border-orange-200 flex items-center justify-center text-orange-500">
                <InfinityIcon className="h-5 w-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-slate-800 mb-0.5">Together, for a<br/>Sustainable Future.</strong>
                <span className="text-[11px] text-slate-500 leading-tight">Creating impact for generations to come.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Simple Calendar SVG icon for the dropdowns
function CalendarIcon(props: any) {
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
