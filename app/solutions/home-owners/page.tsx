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
  Home,
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
import { getResidentialESSProducts } from '../../../data/essProducts';
import { getResidentialEVProducts } from '../../../data/evProducts';
import { getResidentialSolarProducts } from '../../../data/solarProducts';

export default function HomeOwnersSolutionPage() {
  const [activeNode, setActiveNode] = useState<string>('inverter');
  const resProducts = getResidentialESSProducts();
  const resEVProducts = getResidentialEVProducts();
  const resSolarProducts = getResidentialSolarProducts();



  return (
    <main className="min-h-screen bg-white pt-16 pb-16 font-sans">
      {/* HERO BANNER */}
      <section className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] overflow-hidden bg-white text-neutral-900 flex items-center border-b border-neutral-100">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/residential-energy.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-3.5 py-1 text-[11px] font-semibold text-[#E86526] uppercase tracking-wider">
              <Home className="h-3.5 w-3.5 text-[#E86526]" /> RESIDENTIAL PV + ESS + EV SOLUTION
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight">
              Clean Green Energy for Your Dream Home
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-lg">
              Integrated residential Rooftop Solar, WallArk &amp; StackArk LiFePO4 Battery Storage, and Smart EV Charging controlled in real time by Sunloop AI Portal.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="rounded-xl border border-neutral-200 bg-white/90 px-3.5 py-1.5 text-xs shadow-xs">
                <span className="text-neutral-500 text-[10px] block font-medium">SYSTEM RANGE</span>
                <strong className="text-neutral-900 font-bold">3 kW to 15 kW Rooftop</strong>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white/90 px-3.5 py-1.5 text-xs shadow-xs">
                <span className="text-neutral-500 text-[10px] block font-medium">POWER BACKUP</span>
                <strong className="text-emerald-600 font-bold">24/7 Zero Interruption</strong>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Calculate Home Savings <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-neutral-200 px-6 py-3 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition shadow-xs"
              >
                <Bot className="h-3.5 w-3.5 text-[#E86526]" /> Home AI App Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      {/* DEDICATED LITHIUM BATTERIES SECTION FOR RESIDENTIAL */}
      <section className="py-14 md:py-20 bg-[#FAFAF5] border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold text-[#E86526] uppercase tracking-wider">
              <BatteryCharging className="h-3.5 w-3.5" /> RESIDENTIAL ENERGY STORAGE
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Lithium Batteries
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              High-performance residential LiFePO4 battery packs engineered for home power security and 24/7 solar self-consumption.
            </p>
          </Reveal>

          <div className="space-y-12">
            {resProducts?.map((prod, idx) => (
              <Reveal key={prod.id} className="h-full">
                <div className="grid gap-8 md:grid-cols-2 items-center rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                  <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }} className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold text-[#E86526] uppercase">
                        {prod.series}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        Grade A LiFePO4
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">
                        {prod.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E86526]">
                        Voltage: {prod.voltage} · Capacity: {prod.capacity}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal pt-1">
                        {prod.desc}
                      </p>
                    </div>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {prod.specs?.map((s) => (
                        <div key={s.label} className="rounded-lg bg-[#FAFAF5] border border-black/5 p-2.5 text-xs">
                          <span className="text-[9px] text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold mt-0.5 block">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-1">
                      {prod.features?.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
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
                        className="rounded-lg bg-[#E86526] px-5 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition"
                      >
                        Get Battery Quote
                      </Link>
                    </div>
                  </motion.div>

                  {/* PRODUCT IMAGE CARD */}
                  <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }} className={`relative ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="group relative h-[280px] sm:h-[340px] w-full p-6 flex items-center justify-center">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="h-full w-full object-contain drop-shadow-[0_4px_30px_rgba(120,120,120,0.15)] group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute('src', prod.fallbackImage || '/images/residential-energy.png');
                        }}
                      />
                      <div className="absolute top-4 right-4 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-bold text-white shadow-md uppercase">
                        RESIDENTIAL ESS
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED RESIDENTIAL EV CHARGERS SECTION */}
      <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" /> RESIDENTIAL EV CHARGING
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Home EV Chargers
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Smart single-output AC &amp; DC fast charging solutions for home garages, private villas, and residential communities.
            </p>
          </Reveal>

          <div className="space-y-12">
            {resEVProducts?.map((prod, idx) => (
              <Reveal key={prod.id} className="h-full">
                <div className="grid gap-8 md:grid-cols-2 items-center rounded-2xl border border-black/10 bg-[#FAFAF5] p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                  <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }} className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 uppercase">
                        {prod.category} · {prod.type} Charger
                      </span>
                      <span className="text-[10px] font-bold text-brand-primary bg-orange-50 px-2 py-0.5 rounded">
                        {prod.output}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">
                        {prod.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E86526]">
                        Power: {prod.power} · Voltage: {prod.voltage}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal pt-1">
                        {prod.desc}
                      </p>
                    </div>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {prod.specs?.map((s) => (
                        <div key={s.label} className="rounded-lg bg-white border border-black/5 p-2.5 text-xs shadow-2xs">
                          <span className="text-[9px] text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold mt-0.5 block">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-1">
                      {prod.tech?.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
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
                        className="rounded-lg bg-[#E86526] px-5 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition"
                      >
                        Get EV Quote
                      </Link>
                    </div>
                  </motion.div>

                  {/* PRODUCT IMAGE CARD */}
                  <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }} className={`relative ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="group relative h-[280px] sm:h-[340px] w-full p-6 flex items-center justify-center">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="h-full w-full object-contain drop-shadow-[0_4px_30px_rgba(120,120,120,0.15)] group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute('src', prod.fallbackImage || '/images/ev-charger.png');
                        }}
                      />
                      <div className="absolute top-4 right-4 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold text-white shadow-md uppercase">
                        SMART EV CHARGER
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED RESIDENTIAL SOLAR POWER SECTION */}
      <section className="py-14 md:py-20 bg-white border-b border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
              <Sun className="h-3.5 w-3.5" /> RESIDENTIAL SOLAR PV
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Solar Power
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              High-performance residential solar PV system kits designed for on-grid, off-grid, and hybrid home energy independence.
            </p>
          </Reveal>

          <div className="space-y-12">
            {resSolarProducts?.map((prod, idx) => (
              <Reveal key={prod.id} className="h-full">
                <div className="grid gap-8 md:grid-cols-2 items-center rounded-2xl border border-black/10 bg-[#FAFAF5] p-6 sm:p-8 shadow-xs hover:shadow-md transition">
                  <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }} className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 uppercase">
                        {prod.series}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">
                        {prod.capacity || (prod as any).power}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">
                        {prod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                        {prod.desc}
                      </p>
                    </div>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {prod.specs?.map((s) => (
                        <div key={s.label} className="rounded-xl bg-white border border-black/5 p-2.5 text-xs shadow-2xs">
                          <span className="text-[9px] text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold mt-0.5 block">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* WARRANTIES */}
                    {prod.warranties && (
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 space-y-1">
                        <span className="text-[10px] font-bold text-amber-900 uppercase block">Product Warranties</span>
                        {prod.warranties.map((w) => (
                          <div key={w} className="flex items-center gap-2 text-xs text-amber-950 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                            <span>{w}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-1">
                      {(prod.features || (prod as any).tech)?.map((f: string) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                          <CheckCircle2 className="h-4 w-4 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
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
                        className="rounded-xl bg-[#E86526] px-5 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition shadow-xs"
                      >
                        Request Residential Quote
                      </Link>
                    </div>
                  </motion.div>

                  {/* PRODUCT IMAGE CARD */}
                  <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }} className={`relative ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="group relative h-[300px] sm:h-[360px] w-full p-6 flex items-center justify-center">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="h-full w-full object-contain drop-shadow-[0_4px_30px_rgba(120,120,120,0.15)] group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute('src', prod.fallbackImage || '/images/residential-energy.png');
                        }}
                      />
                      <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-[10px] font-bold text-white shadow-md uppercase">
                        RESIDENTIAL SOLAR KIT
                      </div>
                    </div>
                  </motion.div>
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
            <span className="eyebrow inline-block">SYSTEM ARCHITECTURE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Residential PV &amp; ESS Solution
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Click on any component below to explore its live energy flow &amp; smart telemetry.
            </p>
          </Reveal>

          {/* DIAGRAM FLOW CANVAS */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-[#FAFAF5] p-6 md:p-10 shadow-sm overflow-hidden">
            {/* Animated Flow Grid Lines */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center relative z-10">
              
              {/* NODE 1: PV STRINGS */}
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
                <h4 className="text-xs font-bold text-brand-ink">PV String</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">High-Yield Solar Panels</p>
                <span className="inline-block mt-2 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-semibold text-amber-600">
                  +5.4 kW Clean Solar
                </span>
              </button>

              {/* NODE 2: HYBRID INVERTER */}
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
                  98.2% Conversion
                </span>
              </button>

              {/* NODE 3: BATTERY BANK */}
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
                <h4 className="text-xs font-bold text-brand-ink">LiFePO4 Battery</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">Wall / Stackable Pack</p>
                <span className="inline-block mt-2 rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-semibold text-blue-600">
                  WallArk / StackArk
                </span>
              </button>

              {/* NODE 4: EV CHARGER & HOME LOAD */}
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
                <h4 className="text-xs font-bold text-brand-ink">EV Charger &amp; Home</h4>
                <p className="text-[10px] text-brand-slate mt-0.5">AC Wallbox &amp; Appliances</p>
                <span className="inline-block mt-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                  7.4 kW Fast Charge
                </span>
              </button>

            </div>

            {/* LIVE ACTIVE NODE DESCRIPTION PANEL */}
            <div className="mt-8 rounded-2xl border border-black/5 bg-white p-5 shadow-xs">
              {activeNode === 'pv' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-600 uppercase">01 / SOLAR PV STRINGS</span>
                  <h3 className="text-base font-bold text-brand-ink">Smart N-Type Bifacial TOPCon Panels</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Monocrystalline TOPCon solar panels capture direct sunlight from above and reflected glare from below, generating up to 25% extra energy even on overcast cloudy days.
                  </p>
                </div>
              )}
              {activeNode === 'inverter' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-brand-primary uppercase">02 / SMART HYBRID INVERTER</span>
                  <h3 className="text-base font-bold text-brand-ink">Magic PV Box Hybrid Controller</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Automatically routes solar power directly to your home appliances, charges your LiFePO4 battery pack, and exports excess electricity to the utility grid with bi-directional net metering.
                  </p>
                </div>
              )}
              {activeNode === 'battery' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-blue-600 uppercase">03 / LIFEPO4 BATTERY STORAGE</span>
                  <h3 className="text-base font-bold text-brand-ink">WallArk &amp; StackArk Series Battery Packs</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Choose between WallArk Low Voltage Packs (48V/51.2V, 2.5-20kWh) or StackArk High Voltage Packs (144-384V, 7.5-20kWh) to power your home through grid outages with &lt;10ms UPS switchover.
                  </p>
                </div>
              )}
              {activeNode === 'ev' && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase">04 / SMART EV CHARGING &amp; LOAD</span>
                  <h3 className="text-base font-bold text-brand-ink">AC Smart Wallbox Fast Charger</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Charges your electric vehicle using 100% free solar energy stored in your battery pack, featuring dynamic load balancing so your home circuit never trips.
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
                  <span>Anti-PID &amp; Anti-Reflective Toughened Glass</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>25-Year Linear Power Output Warranty</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={0.15} className="relative">
              <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm flex items-center justify-center">
                <img
                  src="/images/residential-energy.png"
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
                  src="/images/energy-storage.png"
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
                Smart PV Controllers protect the safety of your business and property, managing solar generation, battery charging, and grid export automatically.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Integrated Arc Fault Circuit Interrupter (AFCI)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Wi-Fi &amp; 4G Cloud Telemetry Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-ink font-normal">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>Instant &lt; 10ms Uninterruptible Power Supply (UPS)</span>
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
              Start a new green life today
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-lg mx-auto">
              Call us today, our engineers will provide meticulous service &amp; customized solar calculations.
            </p>

            <div className="pt-4 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-bold text-[#E86526] shadow-xl hover:bg-neutral-100 transition duration-300 transform hover:-translate-y-0.5"
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
