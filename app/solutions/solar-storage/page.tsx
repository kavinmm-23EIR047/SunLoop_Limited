'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BatteryCharging,
  Sun,
  Zap,
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
import { essProducts, ESSProduct } from '../../../data/essProducts';

const storageSolutions = [
  {
    number: '01',
    title: 'Residential Solar + Storage System Solution',
    badge: 'Residential ESS',
    capacity: '3kW - 15kW PV · 5kWh - 20kWh Battery',
    description: 'A complete home system for solar generation, battery storage and reliable backup power.',
    image: '/images/Residential Solar + Storage System Solution.jpg',
    fallbackImage: '/images/residential-energy.png',
    imageAlt: 'Residential solar and battery storage system',
    specs: [
      { label: 'Battery Type', value: 'LiFePO4 (WallLoop / StackLoop)' },
      { label: 'System Capacity', value: '3kW – 15kW Rooftop PV' },
      { label: 'Storage Range', value: '5 kWh to 20 kWh' },
      { label: 'Backup Switch', value: '< 10ms UPS Switchover' },
    ],
    features: [
      'All-in-one power generation, battery storage & home load management',
      'Grade A LiFePO4 battery cell architecture with active smart BMS',
      'Sub-10ms UPS backup switchover during grid power failures',
      'Sunloop AI Portal remote telemetry and automated self-consumption',
    ],
    warranties: [
      '30 Years Solar PV Performance Warranty',
      '10 Years LiFePO4 Battery & Hybrid Inverter Warranty',
    ],
  },
  {
    number: '02',
    title: 'C&I Solar + Energy Storage Solution',
    badge: 'Commercial ESS',
    capacity: '30kW - 500kW PV · 50kWh - 1000kWh Storage',
    description: 'Combine solar, battery storage and grid power for reliable operations and lower energy costs.',
    image: '/images/india-hero-ess-banner.jpg',
    fallbackImage: '/images/commercial-energy.png',
    imageAlt: 'Commercial solar and energy storage system',
    specs: [
      { label: 'Cabinet Type', value: 'All-in-One Outdoor BlockLoop Cabinet' },
      { label: 'System Range', value: '30kW to 500kW' },
      { label: 'Capacity Range', value: '50 kWh to 1000 kWh' },
      { label: 'Optimization', value: 'Automated TOD Peak Shaving' },
    ],
    features: [
      'Intelligent solar, battery and utility grid power blending',
      'Time-of-Use (TOD) tariff arbitrage & peak demand charge shaving',
      'Smart HVAC thermal liquid cooling & multi-tier fire safety',
      'Scalable parallel cabinet expansion for enterprise microgrids',
    ],
    warranties: [
      '30 Years Solar PV Module Warranty',
      '10 Years Commercial Cabinet & Battery Warranty',
    ],
  },
  {
    number: '03',
    title: 'Utility-Scale Solar + Energy Storage Solution',
    badge: 'Utility ESS Container',
    capacity: '100kW - 5MW · 100kWh - 10MWh Container',
    description: 'Utility-scale solar and battery storage designed to improve grid stability and renewable energy output.',
    image: '/images/Utility-Scale Solar + Energy Storage Solution.jpg',
    fallbackImage: '/images/microgrid-battery-container.png',
    imageAlt: 'Utility-scale solar and energy storage solution',
    specs: [
      { label: 'Container Size', value: '20ft / 40ft ISO Container' },
      { label: 'Power Scale', value: '100 kW to 5000 kW (5MW)' },
      { label: 'Storage Scale', value: '100 kWh to 10,000 kWh (10MWh)' },
      { label: 'Grid Support', value: 'Frequency Regulation & Black-Start' },
    ],
    features: [
      '20ft / 40ft ISO containerized modular battery bank architecture',
      'Substation grid frequency regulation & voltage stabilization',
      'High-density PCS integration with black-start capability',
      'Industrial liquid cooling system for maximum battery lifespan',
    ],
    warranties: [
      '30 Years Solar Plant Warranties',
      '10 Years Containerized ESS System Warranty',
    ],
  },
];

export default function SolarStoragePage() {
  const [activeNode, setActiveNode] = useState<string>('battery');
  const [hardwareFilter, setHardwareFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [expandedDetails, setExpandedDetails] = useState<string[]>([]);
  const [expandedProductDetails, setExpandedProductDetails] = useState<string[]>([]);

  const filteredESSProducts = essProducts.filter((product) => {
    if (hardwareFilter === 'all') return true;
    return product.category === hardwareFilter;
  });

  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans">
      <SolutionHero
        image="/images/india-solar-storage-hero.jpg"
        fallbackImage="/images/hero-ess.png"
        imageAlt="Solar and battery storage installation"
        eyebrow="02 / Store"
        title="Solar &amp; Storage Solution"
        description="A unified solar and battery ecosystem that delivers resilient backup, lower energy costs and more efficient use of every unit generated."
        icon={BatteryCharging}
        metric="Residential, commercial and utility-scale storage configurations"
      />
      <section className="py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow inline-block">INTEGRATED ENERGY SYSTEMS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Solar &amp; Storage Solution Portfolio
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              From residential homes to heavy commercial plants and utility grids, explore our pre-engineered solar-plus-storage solutions.
            </p>
          </Reveal>

          {storageSolutions.map((solution, index) => (
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
                  <span className="text-xs font-bold text-amber-900 uppercase block">System Warranties</span>
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
                    href="/products/energy-storage"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline"
                  >
                    View ESS Hardware <ArrowUpRight className="h-3.5 w-3.5" />
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
                <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-orange-100/80 shadow-md">
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

      {/* DEDICATED LITHIUM BATTERY HARDWARE CATALOG */}
      <section className="py-14 md:py-20 bg-white border-y border-black/[0.06]">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#E86526] uppercase tracking-wider">
              <BatteryCharging className="h-3.5 w-3.5" /> LIFEPO4 HARDWARE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Lithium Battery ESS Products
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              High-performance LiFePO4 storage packs engineered for 24/7 backup security, peak shaving and energy autonomy.
            </p>

            {/* FILTER BUTTONS */}
            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              {[
                { id: 'all', label: 'All ESS Products' },
                { id: 'residential', label: 'Residential ESS' },
                { id: 'commercial', label: 'Commercial & Utility ESS' },
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
            {filteredESSProducts.map((product, idx) => (
              <Reveal key={product.id} className="h-full">
                <div className="grid items-stretch overflow-hidden rounded-3xl border border-orange-200/80 bg-white/85 shadow-sm backdrop-blur-sm transition hover:shadow-md md:grid-cols-2">
                  {/* TEXT DETAILS */}
                  <div className={`flex flex-col justify-center gap-3 p-5 sm:p-7 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-orange-200 bg-[#FFF7F2] px-2.5 py-1 text-xs font-bold text-brand-primary uppercase">
                        {product.series}
                      </span>
                      <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        Grade A LiFePO4
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold leading-tight text-brand-ink sm:text-2xl">
                        {product.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E86526]">
                        {product.voltage ? `Voltage: ${product.voltage} · ` : ''}Capacity: {product.capacity}
                      </p>
                      <p className="line-clamp-2 pt-1 text-xs leading-relaxed text-brand-slate sm:text-sm">
                        {product.desc}
                      </p>
                    </div>

                    {/* SPECS GRID */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {product.specs?.slice(0, expandedProductDetails.includes(product.id) ? undefined : 4).map((s) => (
                        <div key={s.label} className="rounded-xl border border-orange-100 bg-[#FFFCF9] p-2.5 text-xs">
                          <span className="text-xs text-brand-slate block font-medium uppercase">{s.label}</span>
                          <strong className="text-brand-ink font-semibold mt-0.5 block">{s.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-1.5 pt-1">
                      {product.features?.slice(0, expandedProductDetails.includes(product.id) ? undefined : 3).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-brand-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E86526] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                      {(product.features?.length ?? 0) > 3 && (
                        <button
                          type="button"
                          onClick={() => setExpandedProductDetails((current) => current.includes(product.id)
                            ? current.filter((id) => id !== product.id)
                            : [...current, product.id])}
                          className="pt-1 text-left text-xs font-semibold text-brand-primary hover:text-[#c95315]"
                        >
                          {expandedProductDetails.includes(product.id) ? 'See less' : 'See more details'}
                        </button>
                      )}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-orange-100 pt-3">
                      <Link
                        href="/products/energy-storage"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#E86526] hover:underline"
                      >
                        View Full Specs <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="rounded-xl bg-brand-primary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#c95315]"
                      >
                        Get Battery Quote
                      </Link>
                    </div>
                  </div>

                  {/* PRODUCT IMAGE */}
                  <div className={`relative min-h-[20rem] bg-gradient-to-br from-orange-100/80 via-[#FFF7F2]/80 to-white/80 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="group relative flex h-full min-h-[20rem] w-full items-center justify-center p-6 sm:p-8">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-[22rem] w-auto max-w-full object-contain drop-shadow-[0_8px_24px_rgba(26,26,26,0.16)] transition-transform duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          (e.target as HTMLElement).setAttribute('src', product.fallbackImage || '/images/energy-storage.png');
                        }}
                      />
                      <div className="absolute left-5 top-5 rounded-lg border border-orange-200 bg-[#FFF7F2] px-3 py-1.5 text-xs font-bold text-brand-primary shadow-sm uppercase">
                        {product.categoryLabel}
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
              Solar &amp; Storage Energy Flow
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Click on any component below to inspect live power dispatch &amp; telemetric management.
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
                <h4 className="text-xs font-bold text-brand-ink">Solar PV Array</h4>
                <p className="text-xs text-brand-slate mt-0.5">TOPCon / Bifacial PV</p>
                <span className="inline-block mt-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-600">
                  Clean Generation
                </span>
              </button>

              {/* NODE 2: HYBRID INVERTER */}
              <button
                onClick={() => setActiveNode('inverter')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'inverter'
                    ? 'border-brand-primary bg-orange-50/40 shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-[#FAFAF5] hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-brand-primary mx-auto mb-2">
                  <Cpu className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Hybrid Inverter</h4>
                <p className="text-xs text-brand-slate mt-0.5">Multi-MPPT Controller</p>
                <span className="inline-block mt-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-brand-primary">
                  Bi-Directional
                </span>
              </button>

              {/* NODE 3: LIFEPO4 ESS */}
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
                <p className="text-xs text-brand-slate mt-0.5">WallLoop / BlockLoop / CubeLoop</p>
                <span className="inline-block mt-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600">
                  Sub-10ms UPS Backup
                </span>
              </button>

              {/* NODE 4: CONSUMPTION LOAD & GRID */}
              <button
                onClick={() => setActiveNode('load')}
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  activeNode === 'load'
                    ? 'border-brand-primary bg-emerald-50/40 shadow-md ring-2 ring-brand-primary/20'
                    : 'border-black/5 bg-[#FAFAF5] hover:border-black/20'
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mx-auto mb-2">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="text-xs font-bold text-brand-ink">Load &amp; Grid Export</h4>
                <p className="text-xs text-brand-slate mt-0.5">Building &amp; Utility Grid</p>
                <span className="inline-block mt-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                  Peak Shaving Active
                </span>
              </button>
            </div>

            {/* LIVE ACTIVE NODE DESCRIPTION PANEL */}
            <div className="mt-8 rounded-2xl border border-black/5 bg-[#FAFAF5] p-5 shadow-xs">
              {activeNode === 'pv' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-600 uppercase">01 / SOLAR PV ARRAY</span>
                  <h3 className="text-base font-bold text-brand-ink">High-Efficiency Monocrystalline PV Modules</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Converts ambient solar irradiance into clean DC energy. Operates seamlessly on residential rooftops, commercial facility sheds, or ground-mounted structures.
                  </p>
                </div>
              )}
              {activeNode === 'inverter' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-primary uppercase">02 / SMART HYBRID INVERTER</span>
                  <h3 className="text-base font-bold text-brand-ink">Intelligent Bi-Directional Hybrid Inverter</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Dynamically coordinates power flow between PV strings, battery storage and the grid. Handles ultra-fast power transfer during utility blackouts without interruption.
                  </p>
                </div>
              )}
              {activeNode === 'battery' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-blue-600 uppercase">03 / LIFEPO4 ENERGY STORAGE</span>
                  <h3 className="text-base font-bold text-brand-ink">LiFePO4 Lithium Storage Bank (WallLoop / BlockLoop / CubeLoop)</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Stores daytime solar surplus for night consumption, emergency blackout backup and Time-of-Use tariff arbitrage. Features smart BMS thermal balancing and remote cloud diagnostics.
                  </p>
                </div>
              )}
              {activeNode === 'load' && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase">04 / SMART LOAD MANAGEMENT</span>
                  <h3 className="text-base font-bold text-brand-ink">Automated Demand Charge Shaving &amp; Grid Export</h3>
                  <p className="text-xs text-brand-slate font-normal leading-relaxed">
                    Powers essential home appliances or industrial machinery directly from battery storage during high-tariff grid hours, maximizing energy yield and drastically reducing power bills.
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
              Ready to power your future with Solar &amp; Storage?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-medium max-w-lg mx-auto">
              Our energy system engineers will assess your consumption profile and design a tailored solar-plus-storage architecture.
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
