'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Sliders,
  ArrowRight,
  TrendingUp,
  Server
} from 'lucide-react';

interface ProductItem {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  fallbackImage: string;
  spec1: { title: string; desc: string };
  spec2: { title: string; desc: string };
  ctaText: string;
  ctaLink: string;
}

const productsList: ProductItem[] = [
  {
    id: 'ev',
    eyebrow: '01 / DRIVE',
    title: 'EV Charging Solutions',
    tagline: 'Fast · Smart · Reliable',
    desc: 'High-power AC and DC fast charging stations designed for highway hubs, commercial complexes, petrol stations, and fleet depots to enable rapid charging and business monetization.',
    image: '/images/ac-charging.png',
    fallbackImage: '/images/dc-charging.png',
    spec1: { title: '7.4 – 240 kW', desc: 'AC + DC Output' },
    spec2: { title: 'AI Connected', desc: 'Smart Load Balance' },
    ctaText: 'Explore EV Charging',
    ctaLink: '/products/ev-charging',
  },
  {
    id: 'ess',
    eyebrow: '02 / STORE',
    title: 'Energy Storage Systems',
    tagline: 'Store · Manage · Scale',
    desc: 'Advanced Lithium-ion and LiFePO4 battery storage systems ensuring uninterrupted power backup, peak demand shaving, and maximum energy independence.',
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
    spec1: { title: '5 – 500 kWh', desc: 'Stackable Capacity' },
    spec2: { title: 'Peak Shaving', desc: 'Automated Optimization' },
    ctaText: 'Explore Energy Storage',
    ctaLink: '/products/energy-storage',
  },
  {
    id: 'solar',
    eyebrow: '03 / GENERATE',
    title: 'Solar Power Plants',
    tagline: 'Generate · Optimize · Save',
    desc: 'End-to-end Solar PV arrays for residential rooftops, industrial factories, and utility ground-mounted plants tailored to maximize clean energy yield.',
    image: '/images/solar-panels.png',
    fallbackImage: '/images/residential-energy.png',
    spec1: { title: '3 kW to MW+', desc: 'Rooftop & Ground' },
    spec2: { title: 'High Yield', desc: 'AI Asset Telemetry' },
    ctaText: 'Explore Solar Power',
    ctaLink: '/products/solar-power',
  },
];

function ScrollRevealCard({ item, index }: { item: ProductItem; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth Spring animations
  const rawImageX = useTransform(scrollYProgress, [0.15, 0.45], [0, -40]);
  const imageX = useSpring(rawImageX, { stiffness: 100, damping: 24 });

  const rawContentOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0.3, 1]);
  const contentOpacity = useSpring(rawContentOpacity, { stiffness: 100, damping: 24 });

  const rawContentY = useTransform(scrollYProgress, [0.15, 0.4], [24, 0]);
  const contentY = useSpring(rawContentY, { stiffness: 100, damping: 24 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] w-full bg-white border-b border-black/5 flex items-center justify-center py-16 lg:py-24"
    >
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none z-0">
        <span className="font-sans text-[22vw] lg:text-[18vw] font-black tracking-tighter text-black/[0.04] leading-none">
          0{index + 1}
        </span>
      </div>

      {/* Content Canvas */}
      <div className="container max-w-6xl relative z-10 mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT PRODUCT IMAGE */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              style={{ x: imageX }}
              className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg flex items-center justify-center"
            >
              {/* Backlight Glow */}
              <div className="absolute inset-0 bg-[#E86526]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] w-full flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain object-center drop-shadow-[0_15px_30px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', item.fallbackImage);
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT REVEALED CONTENT PANEL */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="lg:col-span-6 space-y-4 text-left"
          >
            {/* Header Badges */}
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold tracking-wider text-[#E86526] uppercase border border-orange-100">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E86526]" />
                {item.eyebrow}
              </span>
              <span className="text-[11px] font-bold tracking-wide text-slate-400 uppercase">
                {item.tagline}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-ink leading-tight">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
              {item.desc}
            </p>

            {/* Spec Cards */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl border border-black/10 bg-white p-3.5 shadow-xs backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-orange-50 text-[#E86526] border border-orange-100 shrink-0">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-xs sm:text-sm font-bold text-brand-ink">{item.spec1.title}</strong>
                    <span className="text-[10px] text-slate-500 font-medium">{item.spec1.desc}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-black/10 bg-white p-3.5 shadow-xs backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <div className="rounded-lg border border-black/10 bg-brand-ink p-2 text-white shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-xs sm:text-sm font-bold text-brand-ink">{item.spec2.title}</strong>
                    <span className="text-[10px] text-slate-500 font-medium">{item.spec2.desc}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href={item.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {item.ctaText}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

{/* AI PORTAL DASHBOARD SECTION */ }
function AIPortalDashboardSection() {
  return (
    <section className="relative overflow-hidden border-t border-black/10 bg-slate-950 px-4 sm:px-8 py-16 sm:py-24 text-white">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#E86526] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#E86526]" />
              Sunloop Energy Intelligence
            </div>

            <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl font-extrabold">
              Next-Gen <span className="text-[#E86526]">AI Portal</span> Dashboard
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Unified real-time telemetry, automated peak shaving, and predictive AI maintenance for your entire EV, Storage, and Solar infrastructure.
            </p>

            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E86526] shrink-0">
                  <Activity className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Autonomous Load Balancing</h4>
                  <p className="text-[11px] leading-normal text-slate-400">
                    AI dynamic distribution prevents grid overloads while maximizing charging velocity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E86526] shrink-0">
                  <BarChart3 className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Predictive Yield Analytics</h4>
                  <p className="text-[11px] leading-normal text-slate-400">
                    Machine learning forecast generation yields based on real-time weather and usage patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E86526] shrink-0">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">24/7 Asset Telemetry & Diagnostics</h4>
                  <p className="text-[11px] leading-normal text-slate-400">
                    Instant alerts and automatic remote self-healing protocols for minimum downtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-full bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-[#c95315] transition"
              >
                Launch AI Portal Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10 bg-brand-ink p-3 shadow-2xl sm:p-4"
            >
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 px-1">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E86526]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="ml-2 text-[11px] font-mono text-white/50">portal.sunloopenergy.ai/dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#E86526]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#E86526]" />
                  System Live
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-white/50">Total Power Generated</div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    1.42 <span className="text-xs text-orange-400 font-normal">MW/h</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-[9px] font-medium text-[#E86526]">
                    <TrendingUp className="h-3 w-3" /> +14.2% vs yesterday
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-white/50">Active EV Stations</div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    48 <span className="text-xs font-normal text-white/40">/ 50</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-[9px] font-medium text-[#E86526]">
                    <Zap className="h-3 w-3" /> 96% Efficiency Rate
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-white/50">Grid Load Status</div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    Optimal <span className="text-xs font-normal text-[#E86526]">(AI)</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-[9px] font-medium text-white/50">
                    <Server className="h-3 w-3" /> Auto Shaving Active
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="text-xs font-bold text-white">Live Energy Flow & Revenue Analytics</h5>
                    <p className="text-[9px] text-white/50">Real-time telemetry stream</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[9px] text-white/70">24H</span>
                    <span className="rounded bg-[#E86526]/20 px-1.5 py-0.5 font-mono text-[9px] text-[#E86526]">LIVE</span>
                  </div>
                </div>

                <div className="h-28 w-full relative flex items-end pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E86526" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#E86526" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 80 Q 50 30, 100 60 T 200 40 T 300 10 T 400 30 L 400 100 L 0 100 Z"
                      fill="url(#gradientLine)"
                    />
                    <path
                      d="M 0 80 Q 50 30, 100 60 T 200 40 T 300 10 T 400 30"
                      fill="none"
                      stroke="#E86526"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px] text-white/50">
                  <span className="flex items-center gap-1">
                    <Sliders className="h-3 w-3 text-orange-400" /> Peak Demand: Low
                  </span>
                  <span className="font-mono font-semibold text-[#E86526]">+ $4,290 Saved Today</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ProductStickyShowcase() {
  return (
    <div className="w-full bg-white">
      {productsList.map((item, index) => (
        <ScrollRevealCard key={item.id} item={item} index={index} />
      ))}
      <AIPortalDashboardSection />
    </div>
  );
}
