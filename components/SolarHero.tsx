'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Calendar, Users, Leaf, LineChart, Headphones, Sun } from 'lucide-react';
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

          {/* FLOATING LIVE YIELD WIDGET */}
          <div className="absolute right-0 translate-x-[40%] top-[10%] hidden lg:block">
            <Reveal delay={0.2}>
              <div className="bg-[#1D2B36]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl w-64 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-amber-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">LIVE YIELD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">SYSTEM ONLINE</span>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold tracking-tighter">124.5</span>
                  <span className="text-sm font-semibold text-white/70">kW</span>
                </div>

                {/* Simple SVG Sparkline Chart */}
                <div className="h-10 w-full mb-3 opacity-80">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,25 75,20 C85,15 90,5 100,2"
                      fill="none"
                      stroke="#E86526"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest border-t border-white/10 pt-3">
                  ↑ 12% HIGHER THAN YESTERDAY
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* BOTTOM INFO BAR */}
      <div className="relative z-20 w-full bg-[#182431] border-t border-white/10 px-4 py-5 md:py-0 md:px-0 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:divide-x divide-white/10">
            
            {/* Item 1 */}
            <div className="flex items-center gap-3 py-3 md:py-6 px-2 w-full">
              <Calendar className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">Est. 2016</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Coimbatore, TN, India</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 py-3 md:py-6 md:px-6 w-full">
              <Users className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">10+ Years of Trust</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">In Clean Energy</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 py-3 md:py-6 md:px-6 w-full">
              <Leaf className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">100% Clean</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Renewable Energy</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3 py-3 md:py-6 md:px-6 w-full">
              <LineChart className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-white text-xs sm:text-[13px] font-bold">AI Powered</strong>
                <span className="block text-[11px] text-white/70 mt-0.5">Smart Energy Management</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-3 py-3 md:py-6 md:px-6 w-full md:pr-2">
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
