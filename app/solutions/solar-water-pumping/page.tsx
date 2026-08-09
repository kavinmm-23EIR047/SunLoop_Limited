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

export default function SolarWaterPumpingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pt-16 pb-16 font-sans">
      {/* BREADCRUMB NAVIGATION */}
      <div className="bg-white border-b border-black/[0.06] py-3.5">
        <div className="container max-w-5xl mx-auto px-4 flex items-center gap-2 text-xs font-semibold text-brand-slate">
          <Link href="/" className="hover:text-brand-primary transition">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-black/30" />
          <Link href="/solutions" className="hover:text-brand-primary transition">Solutions</Link>
          <ChevronRight className="h-3.5 w-3.5 text-black/30" />
          <span className="text-brand-ink font-bold">Solar Water Pumping Solution</span>
        </div>
      </div>

      {/* HERO BANNER */}
      <section className="relative w-full h-[460px] sm:h-[560px] md:h-[620px] overflow-hidden bg-brand-ink text-white flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-35 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/solar-plant.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3.5 py-1 text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
              <Droplets className="h-3.5 w-3.5" /> OFF-GRID WATER SOLUTIONS
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Solar Water Pumping Solution
            </h1>

            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
              Sunloop Solar Water Pumping Systems harness clean solar radiation to drive electric water pumps for agriculture, livestock watering, drinking water supply, and remote crop irrigation—eliminating expensive grid line extensions and noisy diesel generators.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 text-xs">
                <span className="text-white/60 text-[10px] block">SYSTEM TYPE</span>
                <strong className="text-cyan-300 font-semibold">AC &amp; DC Solar Pumping</strong>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 text-xs">
                <span className="text-white/60 text-[10px] block">APPLICATIONS</span>
                <strong className="text-white font-semibold">Agriculture, Livestock &amp; Drinking</strong>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Pumping Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS CATALOG SECTION */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4 space-y-16">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow inline-block">SUSTAINABLE WATER DISPATCH</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
              Solar Water Pumping Systems
            </h2>
            <p className="text-xs md:text-sm text-brand-slate font-normal">
              Reliable, eco-friendly solar water lifting solutions engineered for high durability in off-grid agricultural and rural environments.
            </p>
          </Reveal>

          {/* PRODUCT 1: SOLAR AC WATER PUMPING SOLUTION */}
          <div className="grid gap-10 md:grid-cols-2 items-center py-6 border-b border-black/[0.06]">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-cyan-100 px-2.5 py-0.5 text-[10px] font-bold text-cyan-800 uppercase">
                    AC Solar Pumping Series
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    0.75kW – 110kW Heavy Duty
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-ink tracking-tight pt-1">
                  Solar AC Water Pumping Solution
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                Engineered for high-volume water lifting, deep-well pumping, and large-scale agricultural irrigation. Sunloop Solar AC Pumping Systems utilize smart Variable Frequency Drives (VFD) to power three-phase AC pumps directly from solar PV modules, guaranteeing a consistent and reliable off-grid water supply for commercial farms and municipal water projects.
              </p>

              {/* SPECS GRID */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Drive Control</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Solar VFD MPPT Inverter</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Pump Type</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">3-Phase Submersible &amp; Surface</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Hybrid Backup</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Solar + Grid / Generator Auto</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Primary Use</span>
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
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="group relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img
                  src="/images/Solar AC Water Pumping Solution.png"
                  alt="Solar AC Water Pumping Solution"
                  className="h-full w-full object-cover rounded-xl filter brightness-95 group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/residential-energy.png');
                  }}
                />
                <div className="absolute top-4 right-4 rounded-full bg-brand-ink px-3 py-1 text-[10px] font-bold text-white shadow-md">
                  AC THREE PHASE DRIVE
                </div>
              </div>
            </motion.div>
          </div>

          {/* PRODUCT 2: SOLAR DC WATER PUMPING SOLUTION */}
          <div className="grid gap-10 md:grid-cols-2 items-center py-6">
            {/* PRODUCT 2 IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="relative order-2 md:order-1"
            >
              <div className="group relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img
                  src="/images/Solar DC Water Pumping Solution.png"
                  alt="Solar DC Water Pumping Solution"
                  className="h-full w-full object-cover rounded-xl filter brightness-95 group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', '/images/commercial-energy.png');
                  }}
                />
                <div className="absolute top-4 right-4 rounded-full bg-cyan-600 px-3 py-1 text-[10px] font-bold text-white shadow-md">
                  BLDC HIGH TORQUE
                </div>
              </div>
            </motion.div>

            {/* PRODUCT 2 CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-5 order-1 md:order-2"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800 uppercase">
                    DC Solar Pumping Series
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    24V – 110V Compact DC
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-ink tracking-tight pt-1">
                  Solar DC Water Pumping Solution
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                Specially designed for small to medium-scale water lifting requirements. Powered by brushless permanent magnet DC motors (BLDC), Sunloop Solar DC Pumping Systems offer high torque and low energy losses. Ideal for livestock watering, farm crop irrigation, household domestic water supply, garden watering, and small water filtration plants.
              </p>

              {/* SPECS GRID */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Motor Type</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Brushless Permanent Magnet DC</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Voltage Range</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">24V / 48V / 72V / 110V DC</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Controller</span>
                  <strong className="block text-xs font-semibold text-brand-ink mt-0.5">Integrated Smart MPPT Driver</strong>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-3 shadow-2xs">
                  <span className="block text-[9px] font-semibold text-brand-slate uppercase">Primary Use</span>
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
