'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Bot,
  X,
  Sliders,
  Award,
  Zap,
  Check
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { solarProducts, solarPVIntro, SolarProductVariant } from '../../../data/solarProducts';

const energySolutionSections = [
  {
    id: 'solar-pv-solution',
    eyebrow: '01 / GENERATE',
    title: 'Solar PV Solution',
    description: 'Harness the power of the sun with efficient, reliable solar PV systems tailored to every energy need.',
    accent: 'bg-amber-500',
    solutions: [
      {
        title: 'Residential Solar PV System Solution',
        description: 'Transform your home into a powerhouse with SunEvo’s residential PV system, harnessing the power of the sun to provide sustainable and green electricity for your life.',
      },
      {
        title: 'Commercial & Industrial Solar PV System Solution',
        description: 'The high-performance commercial PV system from SunEvo can lower energy costs and carbon emissions of your office building or commercial building.',
      },
      {
        title: 'Utility-Scale PV Power Plant Solutions',
        description: 'Designed to adapt to diverse environments such as deserts, plateaus, and coastal regions, our solutions enhance power generation efficiency while reducing O&M costs. With lower LCOE and advanced grid-forming capabilities, we empower the stable operation of the next-generation power system.',
      },
    ],
  },
  {
    id: 'solar-storage-solution',
    eyebrow: '02 / STORE',
    title: 'Solar & Storage Solution',
    description: 'A Solar & Storage Solution combines photovoltaic (PV) systems with energy storage, usually batteries, to create a more resilient, efficient, and sustainable energy system. Store excess solar power for later use to improve energy independence, reduce electricity bills, and ensure backup during outages.',
    accent: 'bg-brand-primary',
    solutions: [
      {
        title: 'Residential Solar + Storage System Solution',
        description: 'SunEvo Smart Home PV and Energy Storage System provides an all-in-one solution that covers power generation, energy storage, charging, and power consumption. With efficiency and safety at its core, it delivers clean energy to more households, empowering a better, smarter, and more sustainable future.',
      },
      {
        title: 'C&I Solar + Energy Storage Solution',
        description: 'Maximize energy utilization efficiency with an intelligent solar-plus-storage hybrid system. Seamlessly integrate solar power, batteries, and the grid to achieve uninterrupted power supply, reduced energy costs, and sustainable energy management.',
      },
      {
        title: 'Utility-Scale Solar + Energy Storage Solution',
        description: 'By integrating solar and storage, the system enhances renewable energy utilization and ensures stable and reliable grid support.',
      },
    ],
  },
  {
    id: 'solar-storage-ev-charging-solution',
    eyebrow: '03 / CHARGE',
    title: 'Solar & Storage & EV Charging Solution',
    description: 'A Solar + Storage + EV Charging Solution is a smart, future-proof energy ecosystem combining clean power generation, battery storage, and EV charging infrastructure in one optimized system. It is ideal for homes, commercial buildings, industrial parks, fleet depots, and public charging hubs.',
    accent: 'bg-emerald-500',
    solutions: [
      {
        title: 'Residential Solar + Storage + EV Charging Solution',
        description: 'SunEvo’s all-in-one home energy solution integrates PV inverters, energy storage systems, and EV chargers, enabling your home to be fully powered by clean energy—day or night, rain or shine.',
      },
      {
        title: 'Commercial Solar + Storage + EV Charging Solution',
        description: 'Reduce traditional energy consumption and lower charging costs by providing customers with a one-stop zero-carbon charging station that integrates solar generation, energy storage, and EV charging, enabling higher returns.',
      },
    ],
  },
];

export default function SolarPowerPage() {
  const [activeModal, setActiveModal] = useState<SolarProductVariant | null>(null);
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProducts = solarProducts.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter.toLowerCase();
  });

  return (
    <main className="min-h-screen bg-[#FAFAF5] pt-16 pb-16 font-sans">
      {/* HERO BANNER */}
      <section className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] overflow-hidden bg-brand-ink text-white flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/solar-panels.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-[11px] font-semibold text-brand-apricot uppercase tracking-wider">
              <Sun className="h-3.5 w-3.5" /> SOLAR PV SOLUTIONS
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              {solarPVIntro.title}
            </h1>

            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
              {solarPVIntro.desc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 text-xs">
                <span className="text-white/60 text-[10px] block">SOLAR KITS</span>
                <strong className="text-white font-semibold">Residential &amp; Commercial</strong>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 text-xs">
                <span className="text-white/60 text-[10px] block">SYSTEM TYPE</span>
                <strong className="text-brand-apricot font-semibold">Hybrid, On-Grid &amp; Off-Grid</strong>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Solar Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <span className="eyebrow inline-block">SOLAR PV KITS PORTFOLIO</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Solar PV Product Portfolio
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Pre-engineered residential and commercial solar PV system kits designed for on-grid, off-grid, and hybrid energy independence.
            </p>

            {/* FILTER BUTTONS */}
            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              {(['All', 'Residential', 'Commercial'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-xs font-bold rounded-xl transition duration-200 ${
                    filter === cat
                      ? 'bg-[#E86526] text-white shadow-sm'
                      : 'bg-white border border-black/10 text-brand-slate hover:border-black/30'
                  }`}
                >
                  {cat === 'All' ? 'All Products' : `${cat} Solar`}
                </button>
              ))}
            </div>
          </Reveal>

          {filteredProducts.map((prod, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={prod.id}
                className="grid gap-10 md:grid-cols-2 items-center py-8 border-b border-black/[0.06] last:border-0"
              >
                {/* LEFT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`space-y-4 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold text-brand-primary uppercase">
                        {prod.categoryLabel}
                      </span>
                      <span className="text-[11px] font-semibold text-brand-slate uppercase tracking-wider">
                        {prod.series}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-brand-ink tracking-tight pt-1">
                      {prod.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-primary">
                      {prod.capacity}
                    </p>
                  </div>

                  <p className="text-xs text-brand-slate leading-relaxed font-normal">
                    {prod.desc}
                  </p>

                  {/* SPECS GRID */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {prod.specs.map((spec) => (
                      <div key={spec.label} className="rounded-xl border border-black/[0.06] bg-white p-2.5 shadow-2xs">
                        <span className="block text-[9px] font-semibold text-brand-slate uppercase">{spec.label}</span>
                        <strong className="block text-xs font-semibold text-brand-ink mt-0.5">{spec.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* WARRANTIES LIST */}
                  <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Award className="h-4 w-4 text-amber-600 shrink-0" />
                      <span>Product Warranties</span>
                    </div>
                    {prod.warranties.map((w) => (
                      <div key={w} className="flex items-center gap-2 text-xs text-amber-950 font-medium">
                        <Check className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModal(prod)}
                      className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-2.5 text-xs font-semibold text-brand-ink shadow-2xs hover:border-brand-primary hover:text-brand-primary transition"
                    >
                      <Sliders className="h-3.5 w-3.5" /> Full Specifications
                    </button>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:underline"
                    >
                      Get Quote <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`relative ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                >
                  <div className="group relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="h-full w-full object-contain object-center drop-shadow-md group-hover:scale-103 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).setAttribute('src', prod.fallbackImage);
                      }}
                    />
                    <div className="absolute top-3.5 right-3.5 rounded-full bg-brand-ink px-3 py-0.5 text-[9px] font-semibold text-white shadow-xs">
                      30-YEAR PV WARRANTY
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SPECIFICATIONS MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-xl space-y-5 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-semibold text-brand-primary uppercase">{activeModal.categoryLabel}</span>
                  <h3 className="text-lg font-bold text-brand-ink">{activeModal.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="grid h-7 w-7 place-items-center rounded-full bg-black/5 text-brand-ink hover:bg-black/10 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <p className="text-brand-slate font-normal">{activeModal.desc}</p>
                
                {/* Warranties */}
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 space-y-1">
                  <h4 className="text-[11px] font-bold text-amber-900 uppercase">System Warranties</h4>
                  {activeModal.warranties.map((w) => (
                    <div key={w} className="flex items-center gap-2 text-amber-900 font-medium">
                      <Check className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#FAFAF5] border border-black/[0.06] p-3.5 space-y-2">
                  <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider mb-2">Technical Parameters</h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeModal.specs.map((s) => (
                      <div key={s.label} className="border-b border-black/5 pb-1.5">
                        <span className="text-[9px] text-brand-slate font-medium block">{s.label}</span>
                        <strong className="text-brand-ink font-semibold">{s.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider">Features &amp; Highlights</h4>
                  {activeModal.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-brand-ink">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex justify-end gap-3">
                <Button href="/contact" onClick={() => setActiveModal(null)}>
                  Request System Quotation <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
