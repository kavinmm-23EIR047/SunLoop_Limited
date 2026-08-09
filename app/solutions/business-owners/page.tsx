'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sun,
  BatteryCharging,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Bot,
  Building2,
  Factory,
  Sliders,
  Server,
  Activity,
  Layers,
  Sparkles,
  Wifi,
  Smartphone,
  Gauge
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { getCommercialESSProducts } from '../../../data/essProducts';
import { getCommercialEVProducts } from '../../../data/evProducts';
import { getBusinessSolarProducts } from '../../../data/solarProducts';

export default function BusinessOwnersSolutionPage() {
  const [activeNode, setActiveNode] = useState<string>('inverter');
  const comProducts = getCommercialESSProducts();
  const comEVProducts = getCommercialEVProducts();
  const bizSolarProducts = getBusinessSolarProducts();



  return (
    <main className="min-h-screen bg-white pt-16 pb-16 font-sans">
      {/* HERO BANNER */}
      <section className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] overflow-hidden bg-white text-neutral-900 flex items-center border-b border-neutral-100">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/commercial-energy.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-3.5 py-1 text-[11px] font-semibold text-[#E86526] uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5 text-[#E86526]" /> COMMERCIAL &amp; INDUSTRIAL PV + ESS
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight">
              Go Green Energy for a Sustainable Business
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-lg">
              Empower your factory, commercial building, or retail hub with high-yield Solar PV, RackArk, BlockArk &amp; CubeArk LiFePO4 battery systems, and high-power DC EV charging.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="rounded-xl border border-neutral-200 bg-white/90 px-3.5 py-1.5 text-xs shadow-xs">
                <span className="text-neutral-500 text-[10px] block font-medium">PAYBACK PERIOD</span>
                <strong className="text-amber-600 font-bold">3 to 4 Years ROI</strong>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white/90 px-3.5 py-1.5 text-xs shadow-xs">
                <span className="text-neutral-500 text-[10px] block font-medium">TARIFF SAVINGS</span>
                <strong className="text-emerald-600 font-bold">Automated Peak Shaving</strong>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Commercial Audit <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-neutral-200 px-6 py-3 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition shadow-xs"
              >
                <Bot className="h-3.5 w-3.5 text-[#E86526]" /> Peak Shaving AI Portal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEDICATED COMMERCIAL & UTILITY SOLAR PV SOLUTIONS SECTION */}
      <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
              <Sun className="h-3.5 w-3.5" /> COMMERCIAL &amp; UTILITY SOLAR PV
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Commercial &amp; Utility PV Solutions
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              High-efficiency commercial rooftop PV plants and utility-scale solar parks with reduced LCOE and advanced grid-forming capabilities.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {bizSolarProducts?.map((prod) => (
              <Reveal key={prod.id} className="h-full">
                <div className="h-full rounded-2xl border border-black/10 bg-[#FAFAF5] p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-900 uppercase">
                        {prod.category} · {prod.series}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {prod.power}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-ink">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-brand-slate leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {prod.specs?.map((s) => (
                        <div key={s.label} className="rounded-lg bg-white border border-black/5 p-2 text-xs">
                          <span className="text-[9px] text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-2">
                      {prod.tech?.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <Link
                      href="/products/solar-power"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#E86526] hover:underline"
                    >
                      Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-lg bg-[#E86526] px-4 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition"
                    >
                      Request Audit
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED LITHIUM BATTERIES SECTION FOR COMMERCIAL & UTILITY */}
      <section className="py-14 md:py-20 bg-[#FAFAF5] border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E86526]/10 px-3 py-1 text-[10px] font-bold text-[#E86526] uppercase tracking-wider">
              <BatteryCharging className="h-3.5 w-3.5" /> COMMERCIAL &amp; UTILITY ESS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Lithium Batteries
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Heavy-duty commercial rack-mount, cabinet, and containerized LiFePO4 energy storage packs for peak shaving, demand management, and grid stabilization.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {comProducts?.map((prod) => (
              <Reveal key={prod.id} className="h-full">
                <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 uppercase">
                        {prod.series}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        LiFePO4 ESS
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-ink">
                      {prod.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E86526]">
                      {prod.power ? `Power: ${prod.power} · ` : ''}Capacity: {prod.capacity}
                    </p>
                    <p className="text-xs text-brand-slate leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {prod.specs?.map((s) => (
                        <div key={s.label} className="rounded-lg bg-[#FAFAF5] border border-black/5 p-2 text-xs">
                          <span className="text-[9px] text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-2">
                      {prod.features?.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <Link
                      href="/products/energy-storage"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#E86526] hover:underline"
                    >
                      View Product Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-lg bg-[#E86526] px-4 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED COMMERCIAL EV CHARGERS SECTION */}
      <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" /> COMMERCIAL EV CHARGING
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Commercial EV Chargers
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              High-power dual-output, multi-gun, and split-matrix AC &amp; DC fast charging hubs for commercial parking, highways, logistics, and fleet operations.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {comEVProducts?.map((prod) => (
              <Reveal key={prod.id} className="h-full">
                <div className="h-full rounded-2xl border border-black/10 bg-[#FAFAF5] p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800 uppercase">
                        {prod.category} · {prod.type}
                      </span>
                      <span className="text-[10px] font-bold text-brand-primary bg-orange-50 px-2 py-0.5 rounded">
                        {prod.output}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-ink">
                      {prod.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E86526]">
                      Power: {prod.power} · Voltage: {prod.voltage}
                    </p>
                    <p className="text-xs text-brand-slate leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {prod.specs?.map((s) => (
                        <div key={s.label} className="rounded-lg bg-white border border-black/5 p-2 text-xs">
                          <span className="text-[9px] text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-2">
                      {prod.tech?.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <Link
                      href="/products/ev-charging"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#E86526] hover:underline"
                    >
                      Explore EV Chargers <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-lg bg-[#E86526] px-4 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition"
                    >
                      Get Commercial Quote
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATED SYSTEM ARCHITECTURE DIAGRAM SECTION */}
      <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="eyebrow inline-block">COMMERCIAL SCHEMATIC ARCHITECTURE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Commercial PV &amp; ESS Solution
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Interactive system diagram connecting solar panels, combiner boxes, hybrid inverters, battery banks, grid transformers, and EV chargers.
            </p>
          </Reveal>

          {/* DIAGRAM FLOW CANVAS */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-[#FAFAF5] p-6 md:p-10 shadow-sm overflow-hidden">
            {/* Animated Flow Grid Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center relative z-10">
              
              {/* NODE 1: PV STRING & COMBINER BOX */}
              <button
                onClick={() => setActiveNode('pv')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'pv'
                    ? 'border-brand-primary bg-white shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-white/60 hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-500 mx-auto mb-2">
                  <Sun className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">PV String &amp; Combiner</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">Commercial Roof Array</p>
                <span className="inline-block mt-2 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-semibold text-amber-600">
                  +150 kW Commercial Solar
                </span>
              </button>

              {/* NODE 2: HYBRID INVERTER CABINET */}
              <button
                onClick={() => setActiveNode('inverter')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'inverter'
                    ? 'border-brand-primary bg-white shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-white/60 hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-brand-primary mx-auto mb-2">
                  <Cpu className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Hybrid Inverter</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">Smart Magic PV Box</p>
                <span className="inline-block mt-2 rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-semibold text-brand-primary">
                  Multi-MPPT High Voltage
                </span>
              </button>

              {/* NODE 3: BATTERY BANK (ESS) */}
              <button
                onClick={() => setActiveNode('battery')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'battery'
                    ? 'border-brand-primary bg-white shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-white/60 hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 mx-auto mb-2">
                  <BatteryCharging className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Battery Bank (ESS)</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">Rack / Cabinet / Container</p>
                <span className="inline-block mt-2 rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-semibold text-blue-600">
                  RackArk / BlockArk / CubeArk
                </span>
              </button>

              {/* NODE 4: EV CHARGER & FACTORY LOAD */}
              <button
                onClick={() => setActiveNode('ev')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'ev'
                    ? 'border-brand-primary bg-white shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-white/60 hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mx-auto mb-2">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">EV Charger &amp; Grid</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">DC Fast Chargers &amp; Load</p>
                <span className="inline-block mt-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                  120 kW Fast Charger
                </span>
              </button>

            </div>

            {/* LIVE ACTIVE NODE DESCRIPTION PANEL */}
            <div className="mt-8 rounded-2xl border border-black/5 bg-white p-5 shadow-xs">
              {activeNode === 'pv' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-600 uppercase">01 / COMMERCIAL PV STRINGS &amp; COMBINER</span>
                  <h3 className="text-base font-bold text-brand-ink">Industrial Rooftop TOPCon Arrays</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Heavy-duty commercial rooftop solar PV strings connected to leak-proof combiner boxes with IP67 surge protection and string-level fault monitoring.
                  </p>
                </div>
              )}
              {activeNode === 'inverter' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand-primary uppercase">02 / SMART HYBRID INVERTER CABINET</span>
                  <h3 className="text-base font-bold text-brand-ink">Smart Magic PV Box Industrial Controller</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Heavy-duty multi-MPPT hybrid inverter cabinet managing high-voltage solar evacuation, automated time-of-day peak tariff shaving, and generator synchronization.
                  </p>
                </div>
              )}
              {activeNode === 'battery' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-blue-600 uppercase">03 / COMMERCIAL LIFEPO4 BATTERY BANK</span>
                  <h3 className="text-base font-bold text-brand-ink">RackArk-HV, BlockArk &amp; CubeArk Commercial ESS Series</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Scalable commercial energy storage ranging from RackArk-HV (384-1000V, up to 1000kWh), BlockArk Cabinets (30-500kW, up to 1000kWh), to CubeArk Containers (100-5000kW, up to 10MWh).
                  </p>
                </div>
              )}
              {activeNode === 'ev' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase">04 / HIGH-POWER DC EV CHARGERS &amp; GRID</span>
                  <h3 className="text-base font-bold text-brand-ink">Dual-Gun DC Fast Chargers &amp; Smart Logger</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Powers commercial fleet electric vehicles and customer cars via 120 kW dual-gun CCS2 DC fast chargers integrated with OCPP telemetry billing and cloud server monitoring.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPONENT EXPLANATIONS WITH RENDERS */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4 space-y-16">

          {/* COMPONENT 1: SMART SOLAR MODULES */}
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <Reveal direction="right" className="space-y-4">
              <span className="eyebrow inline-block">SMART SOLAR MODULES</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink">
                A Wonderful Option for Your Life
              </h2>
              <p className="text-xs sm:text-sm text-brand-slate font-normal leading-relaxed">
                Smart Module Controllers monitor your PV modules in real time to give you the visibility and confidence you deserve.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>≥ 22.5% Monocrystalline Module Efficiency</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Non-Penetrating Leak-Proof Commercial Fasteners</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Accelerated Depreciation Tax Benefits &amp; 3-4 Year ROI</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={0.15} className="relative">
              <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm flex items-center justify-center">
                <img
                  src="/images/hero-product.png"
                  alt="Smart Solar Module Render"
                  className="h-full w-full object-contain object-center drop-shadow-md"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/residential-energy.png');
                  }}
                />
              </div>
            </Reveal>
          </div>

          {/* COMPONENT 2: SMART HYBRID INVERTER */}
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <Reveal direction="scale" delay={0.15} className="order-2 md:order-1 relative">
              <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm flex items-center justify-center">
                <img
                  src="/images/hero-ess.png"
                  alt="Smart Hybrid Inverter Render"
                  className="h-full w-full object-contain object-center drop-shadow-md"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/commercial-energy.png');
                  }}
                />
              </div>
            </Reveal>

            <Reveal direction="left" className="order-1 md:order-2 space-y-4">
              <span className="eyebrow inline-block">SMART HYBRID INVERTER</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink">
                Your Magic PV Box
              </h2>
              <p className="text-xs sm:text-sm text-brand-slate font-normal leading-relaxed">
                Smart PV Controllers protect the safety of your business and property, managing industrial power generation, high-density battery charging, and grid export automatically.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Integrated Arc Fault Circuit Interrupter (AFCI)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Wi-Fi, 4G &amp; Modbus RS485 Industrial Telemetry</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Automated Peak Shaving Tariff Arbitrage Engine</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* BOTTOM FULL-WIDTH CTA BANNER */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#E86526] via-[#F95738] to-[#D45214] text-white text-center shadow-xl">
        <div className="container relative z-10 max-w-3xl mx-auto px-4 space-y-5">
          <Reveal className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Start a green zero-carbon business today
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-lg mx-auto">
              Call us today, our engineers will provide meticulous service &amp; commercial ROI audits as soon as possible.
            </p>

            <div className="pt-4 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAFAF5] px-8 py-3.5 text-xs font-bold text-[#E86526] shadow-xl hover:bg-neutral-100 transition duration-300 transform hover:-translate-y-0.5"
              >
                Contact Us Now <ArrowUpRight className="h-4 w-4 text-[#E86526]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
