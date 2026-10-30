'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BarChart3,
  BatteryCharging,
  Building2,
  Car,
  Handshake,
  Home as HomeIcon,
  MapPin,
  Radio,
  Smartphone,
  Sun,
  Users,
  Zap,
} from 'lucide-react';
import { Reveal } from '../components/UI';
import SolarHero from '../components/SolarHero';
import ProductStickyShowcase from '../components/ProductStickyShowcase';
import ConnectedJourneyScrollShowcase from '../components/ConnectedJourneyScrollShowcase';

function TransmissionTowerIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v20" />
      <path d="m5 6 7-4 7 4" />
      <path d="m4 12 8-2 8 2" />
      <path d="m3 18 9-2 9 2" />
      <path d="m7 6 5 16 5-16" />
      <path d="m6 12 6 10 6-10" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-w-0 overflow-clip bg-white font-sans">
      <SolarHero />

      {/* Core Solutions Showcase */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-wide px-4 py-4 text-center md:py-6">
          <Reveal className="mx-auto max-w-3xl space-y-4">
            <span className="eyebrow justify-center">Core Solutions</span>
            <h2 className="text-3xl text-brand-ink md:text-4xl 2xl:text-5xl font-bold">Integrated Clean Energy Ecosystem</h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-slate md:text-base 2xl:text-lg">
              One connected energy ecosystem that scales with you — start with a single system today and expand whenever you're ready.
            </p>
          </Reveal>
        </div>
        <ProductStickyShowcase />
      </section>

      {/* Why Sunloop & Connected Journey */}
      <ConnectedJourneyScrollShowcase />

      {/* ========================================================
          SEGMENT PATHWAYS: EXACT DESIGN FROM REFERENCE MOCKUP
          ======================================================== */}
      <section className="bg-[#FAFAF5] py-12 md:py-16 lg:py-20 border-b border-black/5">
        <div className="container-wide px-4 max-w-6xl mx-auto space-y-8 md:space-y-10">
          
          {/* Section Header */}
          <Reveal className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-[1.5px] w-6 bg-[#E86526]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86526]">
                Solutions for a Cleaner Tomorrow
              </span>
              <span className="h-[1.5px] w-6 bg-[#E86526]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Built for <span className="text-[#E86526]">Every Energy Need</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              From homes to <strong className="font-semibold text-slate-800">businesses to utilities</strong> — scalable solar and energy storage solutions for a smarter, cleaner and more resilient future.
            </p>
          </Reveal>

          {/* Cards Grid: 2 equal cards top, 1 full-width card bottom across all devices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: For Homeowners */}
            <Reveal className="group flex flex-col justify-between rounded-3xl lg:rounded-[2rem] border border-orange-200/70 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-[#FFF6F0] px-3.5 py-1 text-xs font-semibold text-[#E86526] shadow-2xs">
                    <HomeIcon className="h-3.5 w-3.5 text-[#E86526]" />
                    01 / Residential
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF6F0] border border-orange-200/80 text-[#E86526] shadow-2xs transition-transform duration-300 group-hover:scale-105">
                    <HomeIcon className="h-5 w-5 text-[#E86526]" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    For <span className="text-[#E86526]">Homeowners</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Cut your electricity bill and gain backup security with solar power and energy storage.
                  </p>
                </div>

                {/* Capability Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <Sun className="h-3.5 w-3.5 text-[#E86526]" /> Rooftop Solar PV
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <BatteryCharging className="h-3.5 w-3.5 text-[#E86526]" /> Home Lithium ESS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <Car className="h-3.5 w-3.5 text-[#E86526]" /> EV Charger Ready
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <Smartphone className="h-3.5 w-3.5 text-[#E86526]" /> Smart AI App
                  </span>
                </div>

                {/* Clean Vector Scene Canvas */}
                <div className="relative w-full my-3 aspect-[16/9] max-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-[#FFFDF9]/60">
                  <img
                    src="/images/segment-homeowners-clean@2x.png"
                    alt="Residential Solar and ESS Home Solution"
                    className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Action Button (Bottom Left) */}
              <div className="pt-2">
                <Link
                  href="/solutions/home-owners"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#E86526] hover:bg-[#d45214] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 group"
                >
                  Explore Home Solutions
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>

            {/* Card 2: For Businesses */}
            <Reveal className="group flex flex-col justify-between rounded-3xl lg:rounded-[2rem] border border-orange-200/70 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" delay={0.1}>
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-[#FFF6F0] px-3.5 py-1 text-xs font-semibold text-[#E86526] shadow-2xs">
                    <Building2 className="h-3.5 w-3.5 text-[#E86526]" />
                    02 / Commercial
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF6F0] border border-orange-200/80 text-[#E86526] shadow-2xs transition-transform duration-300 group-hover:scale-105">
                    <Building2 className="h-5 w-5 text-[#E86526]" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    For <span className="text-[#E86526]">Businesses</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Reduce operating costs and unlock a new revenue stream from EV charging.
                  </p>
                </div>

                {/* Capability Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <Building2 className="h-3.5 w-3.5 text-[#E86526]" /> C&amp;I Solar
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <Car className="h-3.5 w-3.5 text-[#E86526]" /> Fleet EV Hubs
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                    <BarChart3 className="h-3.5 w-3.5 text-[#E86526]" /> Peak Shaving
                  </span>
                </div>

                {/* Clean Vector Scene Canvas */}
                <div className="relative w-full my-3 aspect-[16/9] max-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-[#FFFDF9]/60">
                  <img
                    src="/images/segment-businesses-clean@2x.png"
                    alt="Commercial Solar and EV Fleet Solution"
                    className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Action Button (Bottom Left) */}
              <div className="pt-2">
                <Link
                  href="/solutions/business-owners"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#E86526] hover:bg-[#d45214] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 group"
                >
                  Explore Business Solutions
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>

            {/* Card 3: For Utilities & Developers (Full-Width Symmetrical Bottom Card) */}
            <Reveal className="group flex flex-col justify-between rounded-3xl lg:rounded-[2rem] border border-orange-200/70 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 md:col-span-2 hover:-translate-y-1 hover:shadow-xl" delay={0.2}>
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-[#FFF6F0] px-3.5 py-1 text-xs font-semibold text-[#E86526] shadow-2xs">
                    <TransmissionTowerIcon className="h-3.5 w-3.5 text-[#E86526]" />
                    03 / Utility &amp; B2B
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF6F0] border border-orange-200/80 text-[#E86526] shadow-2xs transition-transform duration-300 group-hover:scale-105">
                    <TransmissionTowerIcon className="h-5 w-5 text-[#E86526]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Title, Subtitle, Pills, Button */}
                  <div className="lg:col-span-6 space-y-4 text-left">
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                        For <span className="text-[#E86526]">Utilities &amp; Developers</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                        Deploy microgrid-scale solar + ESS + EV infrastructure with full remote fleet management.
                      </p>
                    </div>

                    {/* Capability Feature Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                        <Sun className="h-3.5 w-3.5 text-[#E86526]" /> Multi-MW Solar
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                        <BatteryCharging className="h-3.5 w-3.5 text-[#E86526]" /> Container BESS
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs whitespace-nowrap shrink-0">
                        <Radio className="h-3.5 w-3.5 text-[#E86526]" /> SCADA Microgrid
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href="/solutions/smart-microgrid"
                        className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#E86526] hover:bg-[#d45214] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 group"
                      >
                        Explore Utility Solutions
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Wide Panoramic Illustration */}
                  <div className="lg:col-span-6 w-full flex items-center justify-center">
                    <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] max-h-[220px] flex items-center justify-center overflow-hidden rounded-xl bg-[#FFFDF9]/60">
                      <img
                        src="/images/segment-utility-clean@2x.png"
                        alt="Utility-Scale Microgrid and BESS Solution"
                        className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================================================
          PARTNER CTA: EXACT DESIGN STYLE FROM REFERENCE IMAGE
          ======================================================== */}
      <section className="bg-[#FAFAF5] px-4 py-8 md:py-12 lg:py-16 border-b border-black/5">
        <div className="container-wide max-w-6xl mx-auto">
          <Reveal className="relative overflow-hidden rounded-3xl lg:rounded-[2rem] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-8 md:p-10 lg:p-12">
            
            {/* Subtle Ambient Warm Glow behind illustration */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-orange-50/60 blur-2xl" />

            {/* Horizontal Split Across Screens: Content Left, Clean Art Right */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Clean Title, Tagline, 3 Feature Badges & Action */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                {/* Eyebrow: Launching Partners */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-300 bg-orange-50/80 px-3.5 py-1 text-xs font-semibold text-[#E86526] shadow-xs">
                  <Users className="h-3.5 w-3.5 text-[#E86526]" /> Launching Partners
                </span>

                {/* Headline: Become a Launching Partner */}
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Become a <span className="text-[#E86526]">Launching Partner</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                  We&apos;re onboarding launching partners across India to bring integrated clean energy infrastructure to their region.
                </p>

                {/* Horizontal Key Benefits Row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E86526] shadow-xs">
                      <MapPin className="h-3.5 w-3.5 fill-[#E86526]" />
                    </span>
                    <span>Regional Exclusivity</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E86526] shadow-xs">
                      <Zap className="h-3.5 w-3.5 fill-[#E86526]" />
                    </span>
                    <span>Solar + ESS + EV Stack</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E86526] shadow-xs">
                      <Handshake className="h-3.5 w-3.5" />
                    </span>
                    <span>Direct OEM Support</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[46px] sm:min-h-[48px] items-center gap-2 rounded-xl bg-[#E86526] hover:bg-[#d45214] text-white px-7 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 group"
                  >
                    Become a Launching Partner
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean Illustration Companion */}
              <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px]">
                  <img
                    src="/images/partner-handshake-clean@2x.png"
                    alt="SunLoop Launching Partners Handshake"
                    className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm"
                  />
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
