'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Layers,
  Radio,
  Smartphone,
  Sparkles,
  Sun,
  TrendingDown,
  Zap,
} from 'lucide-react';
import { Reveal } from '../components/UI';
import SolarHero from '../components/SolarHero';
import ProductStickyShowcase from '../components/ProductStickyShowcase';
import ConnectedJourneyScrollShowcase from '../components/ConnectedJourneyScrollShowcase';
import { PartnerCtaVectorArt } from '../components/PartnerCtaIllustration';
import {
  HomeownerIcon,
  BusinessIcon,
  UtilityIcon,
  HomeownersIllustration,
  BusinessesIllustration,
  UtilityIllustration,
} from '../components/SegmentIllustrations';

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

      {/* Segment Pathways (PC & Tablet: 2 Cards Top, 1 Wide Card Bottom) */}
      <section className="bg-[#FAFAF5] py-10 md:py-14 lg:py-16 border-b border-black/5">
        <div className="container-wide px-4 max-w-6xl mx-auto space-y-6 md:space-y-8">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow justify-center">Segment Pathways</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Solutions Tailored for Every Segment</h2>
            <p className="text-sm text-brand-slate leading-relaxed">Choose your path to explore custom-engineered clean energy configurations.</p>
          </Reveal>

          {/* Symmetrical Grid: 2 equal cards on top (md & lg), 1 full-width card on bottom across PC & tablets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Path 1: For Homeowners (Row 1, Left Column) */}
            <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-2xl lg:rounded-[1.75rem] border border-orange-200/80 bg-gradient-to-br from-white via-white to-orange-50/70 p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="pointer-events-none absolute -bottom-6 -right-2 select-none text-[8rem] font-extrabold leading-none text-orange-500/[0.04] lg:text-[11rem]" aria-hidden="true">01</span>
              
              <div className="relative space-y-4">
                {/* Header Row: Eyebrow + Illustrator Icon Squircle */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/90 px-3.5 py-1.5 text-xs font-semibold text-brand-primary shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                    01 / Residential
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1 shadow-md shadow-orange-500/10 ring-1 ring-orange-200/80 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <HomeownerIcon className="h-9 w-9" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                    For Homeowners
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-slate sm:text-base">
                    Cut your electricity bill and gain backup security with solar power and energy storage.
                  </p>
                </div>

                {/* Capability Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Sun className="h-3.5 w-3.5 text-brand-primary" /> Rooftop Solar PV
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <BatteryCharging className="h-3.5 w-3.5 text-brand-primary" /> Home Lithium ESS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Zap className="h-3.5 w-3.5 text-brand-primary" /> EV Charger Ready
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Smartphone className="h-3.5 w-3.5 text-brand-primary" /> Smart AI App
                  </span>
                </div>

                {/* Bespoke Illustrator SVG Vector Scene Canvas */}
                <div className="my-4 w-full overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50/40 to-white/90 p-2 shadow-inner transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="relative aspect-[16/10] w-full max-h-[230px] sm:max-h-[260px]">
                    <HomeownersIllustration className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative pt-3">
                <Link
                  href="/solutions/home-owners"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#E86526] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:bg-[#c95315] hover:shadow-lg hover:shadow-orange-500/30 group-hover:translate-x-0.5"
                >
                  Explore Home Solutions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {/* Path 2: For Businesses (Row 1, Right Column) */}
            <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-2xl lg:rounded-[1.75rem] border border-emerald-200/80 bg-gradient-to-br from-white via-white to-emerald-50/70 p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" delay={0.1}>
              <span className="pointer-events-none absolute -bottom-6 -right-1 select-none text-[8rem] font-extrabold leading-none text-emerald-600/[0.04] lg:text-[11rem]" aria-hidden="true">02</span>
              
              <div className="relative space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    02 / Commercial
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1 shadow-md shadow-emerald-500/10 ring-1 ring-emerald-200/80 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <BusinessIcon className="h-9 w-9" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                    For Businesses
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-slate sm:text-base">
                    Reduce operating costs and unlock a new revenue stream from EV charging.
                  </p>
                </div>

                {/* Capability Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Building2 className="h-3.5 w-3.5 text-emerald-600" /> C&amp;I Solar
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Zap className="h-3.5 w-3.5 text-emerald-600" /> Fleet EV Hubs
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <TrendingDown className="h-3.5 w-3.5 text-emerald-600" /> Peak Shaving
                  </span>
                </div>

                {/* Bespoke Illustrator SVG Vector Scene Canvas */}
                <div className="my-4 w-full overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/40 to-white/90 p-2 shadow-inner transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="relative aspect-[16/10] w-full max-h-[230px] sm:max-h-[260px]">
                    <BusinessesIllustration className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative pt-3">
                <Link
                  href="/solutions/business-owners"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 group-hover:translate-x-0.5"
                >
                  Explore Business Solutions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {/* Path 3: For Utilities & Developers (Row 2, Spans Full Width Across PC & Tablet) */}
            <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-2xl lg:rounded-[1.75rem] border border-blue-200/80 bg-gradient-to-br from-white via-white to-blue-50/70 p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 md:col-span-2 hover:-translate-y-1 hover:shadow-xl" delay={0.2}>
              <span className="pointer-events-none absolute -bottom-6 -right-1 select-none text-[8rem] font-extrabold leading-none text-blue-600/[0.04] lg:text-[12rem]" aria-hidden="true">03</span>
              
              <div className="relative space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                    03 / Utility &amp; B2B
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1 shadow-md shadow-blue-500/10 ring-1 ring-blue-200/80 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                    <UtilityIcon className="h-9 w-9" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                    For Utilities &amp; Developers
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-slate sm:text-base max-w-3xl">
                    Deploy microgrid-scale Solar + ESS + EV infrastructure with full remote fleet management.
                  </p>
                </div>

                {/* Capability Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Zap className="h-3.5 w-3.5 text-blue-600" /> Multi-MW Solar
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Layers className="h-3.5 w-3.5 text-blue-600" /> Container BESS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-brand-slate shadow-xs">
                    <Radio className="h-3.5 w-3.5 text-blue-600" /> SCADA Microgrid
                  </span>
                </div>

                {/* Bespoke Illustrator SVG Vector Scene Canvas (Wide Panoramic Landscape) */}
                <div className="my-4 w-full overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-white/90 p-2 sm:p-3 shadow-inner transition-transform duration-500 group-hover:scale-[1.005]">
                  <div className="relative aspect-[16/7] sm:aspect-[21/9] w-full max-h-[280px] sm:max-h-[320px]">
                    <UtilityIllustration className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative pt-3">
                <Link
                  href="/solutions/smart-microgrid"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 group-hover:translate-x-0.5"
                >
                  Explore Utility Solutions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Partner CTA: 100% Horizontal & Clean (No Vertical Stacking!) */}
      <section className="bg-white px-4 py-8 md:py-10 lg:py-12 border-b border-black/5">
        <div className="container-wide max-w-6xl mx-auto">
          <Reveal className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0A0F1D] border border-white/10 shadow-2xl p-6 sm:p-8 md:p-9 text-white">
            
            {/* Ambient Lighting Gradients */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#E86526]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#06B6D4]/15 blur-3xl" />

            {/* Horizontal Split Across Screens: Content Left, Clean Art Right */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Clean Title, Tagline & Action */}
              <div className="md:col-span-7 space-y-4 text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-[#E86526] backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-[#E86526]" /> Launching Partners
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Become a Launching Partner
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                  We're onboarding launching partners across India to bring integrated clean energy infrastructure to their region.
                </p>

                {/* Horizontal Key Benefits Row (Clean horizontal line, never vertical!) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs sm:text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E86526]" /> Regional Exclusivity
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Solar + ESS + EV Stack
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" /> Direct OEM Support
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#E86526] hover:bg-[#d8581c] text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-orange-600/25 transition-all duration-300 hover:shadow-xl group"
                  >
                    Become a Launching Partner
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean Vector Art (Horizontal Companion, NOT vertically below!) */}
              <div className="md:col-span-5 w-full">
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] p-2.5 sm:p-3 shadow-inner">
                  <PartnerCtaVectorArt className="w-full h-auto" />
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
