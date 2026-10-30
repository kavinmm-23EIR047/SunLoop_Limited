'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sun,
  Droplets,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Activity,
  Zap,
  Sliders,
  Award
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { SolutionHero } from '../../../components/SolutionHero';

export default function SolarWaterPumpingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans">
      <SolutionHero
        image="/images/Solar AC Water Pumping Solution.png"
        imageAlt="Solar water pumping solution"
        eyebrow="Off-grid water solutions"
        title="Solar Water Pumping Solution"
        description="Reliable solar-powered pumping for agriculture, livestock, drinking water and remote irrigation—without costly grid extensions or diesel operations."
        icon={Droplets}
        metric="AC & DC pumps from 0.75 kW to 110 kW"
      />

      {/* SOLUTIONS CATALOG SECTION */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow inline-block">SUSTAINABLE WATER DISPATCH</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">
              Solar Water Pumping Systems
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Reliable, eco-friendly solar water lifting solutions engineered for high durability in off-grid agricultural and rural environments.
            </p>
          </Reveal>

          {/* PRODUCT 1: SOLAR AC WATER PUMPING SOLUTION */}
          <div className="grid gap-10 md:grid-cols-2 items-center py-6 border-b border-black/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 shadow-2xs whitespace-nowrap shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                    AC Solar Pumping Series
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-2xs whitespace-nowrap shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    0.75kW – 110kW Heavy Duty
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-ink tracking-tight pt-1">
                  Solar AC Water Pumping Solution
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                Sunloop Solar AC Pumping Systems are engineered for high-volume water lifting, deep-well pumping and large-scale agricultural irrigation. Smart variable frequency drives (VFDs) power three-phase AC pumps directly from solar PV modules, ensuring a consistent and reliable off-grid water supply for commercial farms and municipal water projects.
              </p>

              {/* SPECS GRID */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Drive Control</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Solar VFD MPPT Inverter</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Pump Type</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">3-Phase Submersible &amp; Surface</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Hybrid Backup</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Solar + Grid / Generator Auto</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Primary Use</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Farms, Canals &amp; Community Supply</strong>
                </div>
              </div>

              {/* FEATURES LIST */}
              <div className="space-y-2 pt-1">
                {[
                  'High-Efficiency MPPT Algorithm with Dynamic Frequency Adjustment',
                  'Dry-Run, Over-Current, Phase-Loss & Tank Full Smart Protections',
                  'Dual Power Input Switch for 24/7 Continuous Operation Backup',
                  'Heavy-Duty Stainless Steel Pump Casing with IP68 Submersible Rating'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-brand-ink font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#E86526] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
                >
                  Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline"
                >
                  Get AC Pump Quote →
                </Link>
              </div>
            </motion.div>

            {/* PRODUCT 1 IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="group relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img
                  src="/images/solar-ac-water-pumping-solution.png"
                  alt="Solar AC Water Pumping Solution"
                  className="h-full w-full object-cover rounded-xl filter brightness-95 group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/residential-energy.png');
                  }}
                />
                <div className="absolute top-4 right-4 rounded-full bg-brand-ink px-3 py-1 text-xs font-bold text-white shadow-md">
                  AC THREE PHASE DRIVE
                </div>
              </div>
            </motion.div>
          </div>

          {/* PRODUCT 2: SOLAR DC WATER PUMPING SOLUTION */}
          <div className="grid gap-10 md:grid-cols-2 items-center py-6">
            {/* PRODUCT 2 IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="relative order-2 md:order-1"
            >
              <div className="group relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img
                  src="/images/solar-dc-water-pumping-solution.png"
                  alt="Solar DC Water Pumping Solution"
                  className="h-full w-full object-cover rounded-xl filter brightness-95 group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/commercial-energy.png');
                  }}
                />
                <div className="absolute top-4 right-4 rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  BLDC HIGH TORQUE
                </div>
              </div>
            </motion.div>

            {/* PRODUCT 2 CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-5 order-1 md:order-2"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 shadow-2xs whitespace-nowrap shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                    DC Solar Pumping Series
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-2xs whitespace-nowrap shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    24V – 110V Compact DC
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-ink tracking-tight pt-1">
                  Solar DC Water Pumping Solution
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                Designed for small to medium-scale water-lifting needs, Sunloop Solar DC Pumping Systems use brushless permanent-magnet DC motors (BLDC) to deliver high torque with low energy losses. They are ideal for livestock watering, crop irrigation, household water supply, garden watering and small water filtration plants.
              </p>

              {/* SPECS GRID */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Motor Type</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Brushless Permanent Magnet DC</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Voltage Range</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">24V / 48V / 72V / 110V DC</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Controller</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Integrated Smart MPPT Driver</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-xs font-semibold text-brand-slate uppercase">Primary Use</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Livestock, Gardens &amp; Small Farms</strong>
                </div>
              </div>

              {/* FEATURES LIST */}
              <div className="space-y-2 pt-1">
                {[
                  'Direct PV Solar Panel Plug-and-Play Wiring with Zero Inverter Loss',
                  'High Lift Head & Constant Flow Rate with Compact Footprint',
                  'Automatic Water Level Sensors for Dry-Run & Storage Tank Overflow',
                  'Ideal for Remote Off-Grid Ranchers, Smallholders & Household Water'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-brand-ink font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#E86526] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
                >
                  Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline"
                >
                  Get DC Pump Quote →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
