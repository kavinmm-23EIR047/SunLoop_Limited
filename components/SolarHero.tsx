'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Calendar, Users, Leaf, LineChart, Headphones, Sun, BatteryCharging, Zap } from 'lucide-react';
import { Reveal } from './UI';

export default function SolarHero() {
  return (
    <section className="relative w-full h-auto min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
      {/* BACKGROUND SCENE */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/images/solar-hero-bg.png"
          alt="Solar Energy Landscape Environment"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft white gradient fading from the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:w-[65%]" />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="container relative z-10 mx-auto px-4 flex-1 flex flex-col justify-center pt-28 pb-32">
        <div className="max-w-2xl relative">
          <Reveal>
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold text-slate-800 shadow-sm mb-6">
              <span className="text-amber-400">⚡</span> Next-Gen Solar PV + ESS + EV Ecosystem
            </div>

            {/* Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.1] mb-4">
              Powering Tomorrow, <br />
              <span className="text-[#E86526]">Sustainably.</span>
            </h1>

            <h2 className="text-lg sm:text-xl font-bold text-[#222222] mb-3">
              We're not just here today, we're here for the <span className="text-[#E86526]">next 10 years</span>.
            </h2>

            <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-lg mb-8 font-medium">
              Clean. Intelligent. Integrated. Generate, store, save and manage your renewable energy through Sunloop Energy's unified AI platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E86526] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#c95315] transition"
              >
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-8 py-3.5 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition"
              >
                <div className="flex items-center justify-center h-5 w-5 rounded-full border border-slate-400">
                  <Play className="h-2.5 w-2.5 ml-0.5 text-slate-600" />
                </div>
                Watch Our Story
              </button>
            </div>
          </Reveal>

        </div>

        {/* MULTIPLE FLOATING SPREAD WIDGETS */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          
          {/* WIDGET 1: LIVE YIELD (Top Right) */}
          <div className="absolute right-[5%] top-[15%] pointer-events-auto">
            <Reveal delay={0.2} direction="right">
              <div className="bg-[#1D2B36]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl w-64 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-amber-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">LIVE YIELD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">ONLINE</span>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold tracking-tighter">124.5</span>
                  <span className="text-sm font-semibold text-white/70">kW</span>
                </div>

                <div className="h-8 w-full mb-2 opacity-80">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,25 75,20 C85,15 90,5 100,2" fill="none" stroke="#E86526" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest border-t border-white/10 pt-2">
                  ↑ 12% HIGHER THAN YESTERDAY
                </div>
              </div>
            </Reveal>
          </div>

          {/* WIDGET 2: ESS STORAGE (Middle Center-Right) */}
          <div className="absolute right-[32%] top-[42%] pointer-events-auto">
            <Reveal delay={0.4} direction="up">
              <div className="bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl p-4 shadow-xl w-56 text-slate-800 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <BatteryCharging className="h-4 w-4 text-emerald-500" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">ESS BUFFER</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">CHARGING</span>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tighter text-slate-900">98</span>
                  <span className="text-xs font-bold text-slate-500">%</span>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3 mb-1">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <div className="text-[9px] font-bold text-slate-400 uppercase">
                  5.2 kW Input Power
                </div>
              </div>
            </Reveal>
          </div>

          {/* WIDGET 3: EV CHARGER (Bottom Right) */}
          <div className="absolute right-[8%] top-[68%] pointer-events-auto">
            <Reveal delay={0.6} direction="left">
              <div className="bg-[#E86526]/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl w-48 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-1.5 mb-2">
                  <Zap className="h-4 w-4 text-white" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/90">EV CHARGER 01</span>
                </div>
                
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-medium text-white/70 uppercase">Active Session</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold tracking-tighter">7.4</span>
                    <span className="text-xs font-semibold text-white/80">kW AC</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/20">
                  <div className="h-1.5 w-1.5 animate-ping rounded-full bg-white"></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest">VEHICLE DETECTED</span>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>

      {/* BOTTOM INFO BAR */}
      <div className="relative z-20 w-full bg-[#182431] border-t border-white/10 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-6 px-4 md:px-0 md:py-0 md:flex md:flex-row md:items-center md:justify-between md:divide-x divide-white/10">
            
            {/* Item 1 */}
            <div className="flex items-center gap-3 md:px-4 md:py-6 md:w-full">
              <Calendar className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">Est. 2016</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Coimbatore, TN, India</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 md:px-6 md:py-6 md:w-full">
              <Users className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">10+ Years of Trust</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">In Clean Energy</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 md:px-6 md:py-6 md:w-full">
              <Leaf className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">100% Clean</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Renewable Energy</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3 md:px-6 md:py-6 md:w-full">
              <LineChart className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">AI Powered</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Smart Energy Management</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-3 md:px-6 md:py-6 md:w-full md:pr-2 col-span-2 md:col-span-1 justify-center md:justify-start">
              <Headphones className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">24/7 Support</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Always With You</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
