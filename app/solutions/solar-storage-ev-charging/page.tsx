'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Zap,
  Sun,
  BatteryCharging,
  Car,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Sliders,
  Award,
  Bot,
  Activity
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { SolutionHero } from '../../../components/SolutionHero';
import { evProducts, EVProductVariant } from '../../../data/evProducts';

const integratedSolutions = [
  {
    number: '01',
    title: 'Residential Solar + Storage + EV Charging Solution',
    badge: 'Residential All-In-One',
    capacity: '3kW - 15kW PV · 5kWh - 20kWh ESS · 7.4kW - 22kW EV',
    description: 'Solar power, battery backup and EV charging coordinated for clean, reliable home energy.',
    image: '/images/Residential Solar + Storage + EV Charging Solution.png',
    fallbackImage: '/images/residential-energy.png',
    imageAlt: 'Residential solar, storage and EV charging solution',
    specs: [
      { label: 'Solar PV Array', value: '3kW – 15kW Rooftop PV' },
      { label: 'Battery Storage', value: '5 kWh to 20 kWh LiFePO4' },
      { label: 'EV Charger', value: '7.4kW – 22kW AC Wallbox' },
      { label: 'Load Control', value: 'Dynamic Home Load Balancing' },
    ],
    features: [
      '100% solar self-consumption charging for electric vehicles',
      'Grade A LiFePO4 storage battery with sub-10ms automatic blackout backup',
      'Smart app management via Sunloop AI Energy Portal',
      'Weatherproof IP65 outdoor & garage wallbox enclosure',
    ],
    warranties: [
      '30 Years PV Performance Warranty',
      '10 Years ESS Battery & Hybrid Inverter Warranty',
      '3 Years EV Wallbox Charger Warranty',
    ],
  },
  {
    number: '02',
    title: 'Commercial Solar + Storage + EV Charging Solution',
    badge: 'Commercial Microgrid Hub',
    capacity: '30kW - 500kW PV · 50kWh - 1000kWh ESS · 30kW - 240kW DC',
    description: 'Combine solar generation, battery storage and EV charging to lower site energy costs.',
    image: '/images/Commercial Solar + Storage + EV Charging Solution.png',
    fallbackImage: '/images/commercial-energy.png',
    imageAlt: 'Commercial solar, storage and EV charging solution',
    specs: [
      { label: 'Solar Generation', value: '30kW – 500kW Canopy / Roof' },
      { label: 'Energy Storage', value: '30kWh – 1000kWh Cabinet' },
      { label: 'DC Fast Charging', value: '30kW – 240kW Super DC' },
      { label: 'Protocol', value: 'OCPP 1.6J / 2.0 Open Gateway' },
    ],
    features: [
      'Zero-carbon commercial charging hubs for fleets & retail customers',
      'Time-of-Use (TOD) peak demand charge shaving & grid power buffering',
      'Multi-gun fast DC charging dispensers with integrated billing options',
      'Sunloop AI Portal remote telemetry, fleet dispatch & revenue tracking',
    ],
    warranties: [
      '30 Years Solar Canopy Warranty',
      '10 Years Commercial Storage Cabinet Warranty',
      '3 Years Commercial Fast Charger Warranty',
    ],
  },
];

export default function SolarStorageEVChargingPage() {
  const [activeNode, setActiveNode] = useState<string>('ev');
  const [hardwareFilter, setHardwareFilter] = useState<'all' | 'Residential' | 'Commercial'>('all');
  const [expandedDetails, setExpandedDetails] = useState<string[]>([]);

  const filteredEVProducts = evProducts.filter((product) => {
    if (hardwareFilter === 'all') return true;
    return product.category === hardwareFilter;
  });

  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans">
      <SolutionHero
        image="/images/india-solar-storage-ev-hero.jpg"
        fallbackImage="/images/ecosystem-hero.png"
        imageAlt="Solar carport, battery storage and EV charging plaza"
        eyebrow="03 / Charge"
        title="Solar + Storage + EV Charging Solutions"
        description="One intelligent ecosystem that generates clean power, protects operations with battery backup and keeps homes and fleets moving."
        icon={Zap}
        metric="AC home charging to 240 kW commercial DC fast charging"
      />
      <section className="py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow inline-block">UNIFIED ENERGY ECOSYSTEM</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Solar + Storage + Charging Solutions
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Complete zero-carbon generation, storage and mobility charging ecosystems for homes, corporate campuses, fleet hubs and public charging plazas.
            </p>
          </Reveal>

          {integratedSolutions.map((solution, index) => (
            <div
              key={solution.number}
              className="grid items-center gap-6 border-b border-black/[0.07] pb-14 last:border-0 last:pb-0 md:grid-cols-[1.02fr_0.98fr] md:gap-8 lg:gap-10"
            >
              {/* CONTENT COLUMN */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`flex flex-col justify-center space-y-2 rounded-3xl border border-orange-100/80 bg-white/90 p-3 shadow-sm sm:p-4 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-orange-100 px-2.5 py-0.5 text-xs font-bold text-brand-primary uppercase">
                      {solution.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {solution.capacity}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-tight tracking-tight text-brand-ink sm:text-2xl">
                    {solution.title}
                  </h2>
                </div>

                <p className="line-clamp-2 text-xs leading-relaxed text-brand-slate sm:text-sm">
                  {solution.description}
                </p>

                {/* SPECS GRID */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {solution.specs.slice(0, expandedDetails.includes(solution.number) ? undefined : 2).map((s) => (
                    <div key={s.label} className="rounded-xl border border-black/[0.06] bg-white px-3 py-2 shadow-2xs">
                      <span className="block text-xs font-semibold text-brand-slate uppercase">{s.label}</span>
                      <strong className="block text-xs font-semibold text-brand-ink mt-0.5">{s.value}</strong>
                    </div>
                  ))}
                </div>

                {/* WARRANTIES */}
                {expandedDetails.includes(solution.number) && <div className="rounded-xl bg-amber-50 border border-amber-200/70 p-3 space-y-1">
                  <span className="text-xs font-bold text-amber-900 uppercase block">Ecosystem Warranties</span>
                  {solution.warranties.map((w) => (
                    <div key={w} className="flex items-center gap-2 text-xs text-amber-950 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>}

                {/* FEATURES LIST */}
                <div className="space-y-2 pt-1">
                  {solution.features.slice(0, expandedDetails.includes(solution.number) ? undefined : 1).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-brand-ink font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {solution.specs.length > 2 || solution.features.length > 2 || solution.warranties.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setExpandedDetails((current) => current.includes(solution.number)
                        ? current.filter((number) => number !== solution.number)
                        : [...current, solution.number])}
                      className="pt-1 text-left text-xs font-semibold text-brand-primary hover:text-[#c95315]"
                    >
                      {expandedDetails.includes(solution.number) ? 'See less' : 'See more details'}
                    </button>
                  ) : null}
                </div>

                <div className="pt-3 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
                  >
                    Request System Quote <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/products/ev-charging"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline"
                  >
                    Explore EV Chargers <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>

              {/* IMAGE COLUMN */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className={`w-full ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-orange-100/80 shadow-md">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    onError={(e) => {
                      (e.target as HTMLElement).setAttribute('src', solution.fallbackImage);
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-xl border border-orange-100 bg-[#FFF7F2] px-3 py-1.5 text-xs font-bold text-brand-primary shadow-sm uppercase">
                    SOLUTION {solution.number}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED EV CHARGING HARDWARE CATALOG */}
      <section className="py-14 md:py-20 bg-white border-y border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" /> EV CHARGING HARDWARE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Smart AC &amp; DC EV Chargers
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              High-efficiency EV charging hardware built with OCPP 1.6J/2.0 telemetry and smart solar load balancing.
            </p>

            {/* FILTER BUTTONS */}
            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              {[
                { id: 'all', label: 'All EV Chargers' },
                { id: 'Residential', label: 'Residential AC & DC' },
                { id: 'Commercial', label: 'Commercial Fast Chargers' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setHardwareFilter(cat.id as any)}
                  className={`px-5 py-2 text-xs font-bold rounded-xl transition duration-200 ${
                    hardwareFilter === cat.id
                      ? 'bg-[#E86526] text-white shadow-sm'
                      : 'bg-[#FAFAF5] border border-black/10 text-brand-slate hover:border-black/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="space-y-10">
            {filteredEVProducts.map((product, idx) => (
              <Reveal key={product.id} className="h-full">
                <div className="grid gap-8 md:grid-cols-2 items-center rounded-2xl border border-black/10 bg-[#FAFAF5] p-6 sm:p-8 shadow-2xs hover:shadow-md transition">
                  {/* TEXT DETAILS */}
                  <div className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 uppercase">
                        {product.series}
                      </span>
                      <span className="text-xs font-bold text-brand-primary bg-orange-50 px-2 py-0.5 rounded">
                        {product.output}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-ink">
                        {product.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E86526]">
                        Power: {product.power} · Voltage: {product.voltage}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal pt-1">
                        {product.desc}
                      </p>
                    </div>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {product.specs?.map((s) => (
                        <div key={s.label} className="rounded-lg bg-white border border-black/5 p-2.5 text-xs shadow-2xs">
                          <span className="text-xs text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold mt-0.5 block">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-1">
                      {product.tech?.map((f) => (
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
                        View Full Specs <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="rounded-lg bg-[#E86526] px-5 py-2 text-xs font-semibold text-white hover:bg-[#c95315] transition shadow-2xs"
                      >
                        Get Charger Quote
                      </Link>
                    </div>
                  </div>

                  {/* PRODUCT IMAGE */}
                  <div className={`relative ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="group relative h-[280px] sm:h-[340px] w-full p-6 flex items-center justify-center bg-white rounded-xl border border-black/5">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain drop-shadow-[0_4px_25px_rgba(120,120,120,0.15)] group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute('src', product.fallbackImage || '/images/ac-charging.png');
                        }}
                      />
                      <div className="absolute top-4 right-4 rounded-full bg-brand-ink px-3 py-1 text-xs font-bold text-white shadow-md uppercase">
                        {product.category} {product.type} CHARGER
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE DIAGRAM SECTION */}
      <section className="py-14 md:py-20 bg-[#FAFAF5]">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2">
            <span className="eyebrow inline-block">SYSTEM ARCHITECTURE</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Solar + Storage + Charging Flow
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Click on any component below to inspect live energy flow &amp; smart load dispatch.
            </p>
          </Reveal>

          {/* DIAGRAM FLOW CANVAS */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-white p-6 md:p-10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center relative z-10">
              {/* NODE 1: PV STRINGS */}
              <button
                onClick={() => setActiveNode('pv')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'pv'
                    ? 'border-brand-primary bg-amber-50/40 shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-[#FAFAF5] hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-500 mx-auto mb-2">
                  <Sun className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Solar PV Canopy</h4>
                <p className="text-xs text-brand-slate mt-0.5">TOPCon / Glass-Glass</p>
                <span className="inline-block mt-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-600">
                  Clean Generation
                </span>
              </button>

              {/* NODE 2: ESS STORAGE */}
              <button
                onClick={() => setActiveNode('battery')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'battery'
                    ? 'border-brand-primary bg-blue-50/40 shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-[#FAFAF5] hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 mx-auto mb-2">
                  <BatteryCharging className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">LiFePO4 Storage</h4>
                <p className="text-xs text-brand-slate mt-0.5">Buffer &amp; Backup ESS</p>
                <span className="inline-block mt-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600">
                  Peak Shaving Active
                </span>
              </button>

              {/* NODE 3: EV CHARGER */}
              <button
                onClick={() => setActiveNode('ev')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'ev'
                    ? 'border-brand-primary bg-emerald-50/40 shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-[#FAFAF5] hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mx-auto mb-2">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Smart EV Charger</h4>
                <p className="text-xs text-brand-slate mt-0.5">AC Wallbox &amp; DC Fast</p>
                <span className="inline-block mt-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                  Subsecond Balancing
                </span>
              </button>

              {/* NODE 4: AI CLOUD TELEMETRY */}
              <button
                onClick={() => setActiveNode('cloud')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'cloud'
                    ? 'border-brand-primary bg-orange-50/40 shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-[#FAFAF5] hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-brand-primary mx-auto mb-2">
                  <Bot className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Sunloop AI Portal</h4>
                <p className="text-xs text-brand-slate mt-0.5">OCPP 1.6J Cloud Portal</p>
                <span className="inline-block mt-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-brand-primary">
                  Live Dispatch &amp; Billing
                </span>
              </button>
            </div>

            {/* LIVE ACTIVE NODE DESCRIPTION PANEL */}
            <div className="mt-8 rounded-2xl border border-black/5 bg-[#FAFAF5] p-5 shadow-xs">
              {activeNode === 'pv' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-600 uppercase">01 / SOLAR PV CANOPY &amp; ROOFTOP</span>
                  <h3 className="text-base font-bold text-brand-ink">Clean Solar Generation Array</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Harnesses solar radiation from rooftop or parking canopy arrays to generate zero-cost green electricity during daylight hours.
                  </p>
                </div>
              )}
              {activeNode === 'battery' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-blue-600 uppercase">02 / LIFEPO4 ENERGY STORAGE</span>
                  <h3 className="text-base font-bold text-brand-ink">LiFePO4 Storage Buffer Cabinet</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Buffers high-power EV charging demand to prevent utility grid overload penalties, storing solar power for night charging and blackout protection.
                  </p>
                </div>
              )}
              {activeNode === 'ev' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase">03 / SMART EV DISPENSER</span>
                  <h3 className="text-base font-bold text-brand-ink">AC Wallbox &amp; Super DC Fast Chargers</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Delivers clean solar power directly into electric vehicle batteries with dynamic load balancing, multi-gun power sharing and fast charging speeds up to 240kW.
                  </p>
                </div>
              )}
              {activeNode === 'cloud' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-primary uppercase">04 / SUNLOOP AI PORTAL TELEMETRY</span>
                  <h3 className="text-base font-bold text-brand-ink">AI Cloud Optimization &amp; Revenue Gateway</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Provides 24/7 telemetric monitoring, app user authentication, dynamic solar prioritization, automated tariff arbitrage and commercial charging billing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM FULL-WIDTH CTA BANNER */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#E86526] via-[#F95738] to-[#D45214] text-white text-center shadow-xl">
        <div className="container relative z-10 max-w-3xl mx-auto px-4 space-y-5">
          <Reveal className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Build your Solar + Storage + EV Ecosystem today
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-lg mx-auto">
              Our microgrid engineers will design a customized, zero-carbon charging solution for your home, fleet, or business.
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
