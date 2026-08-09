'use client';

import React, { useEffect, useRef, useState } from 'react';
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
    image: '/images/hero-evcharger.png',
    fallbackImage: '/images/ac-charging.png',
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
    image: '/images/hero-ess.png',
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
    image: '/images/hero-product.png',
    fallbackImage: '/images/residential-energy.png',
    spec1: { title: '3 kW to MW+', desc: 'Rooftop & Ground' },
    spec2: { title: 'High Yield', desc: 'AI Asset Telemetry' },
    ctaText: 'Explore Solar Power',
    ctaLink: '/products/solar-power',
  },
];

function ScrollRevealCard({ item, index }: { item: ProductItem; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Desktop Animation: Image moves from Dead-Center (0) to Left (-280px) as content fades in on the right
  const rawImageX = useTransform(
    scrollYProgress,
    [0.08, 0.45],
    [0, isDesktop ? -280 : 0]
  );
  const imageX = useSpring(rawImageX, { stiffness: 90, damping: 22 });

  // Mobile Animation: Image translates slightly upward to make room for text below
  const rawImageY = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    [0, isDesktop ? 0 : -60]
  );
  const imageY = useSpring(rawImageY, { stiffness: 90, damping: 22 });

  const rawCardScale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const cardScale = useSpring(rawCardScale, { stiffness: 90, damping: 22 });

  // Content panel reveals as you scroll down
  const rawContentOpacity = useTransform(
    scrollYProgress,
    isDesktop ? [0.18, 0.45] : [0.08, 0.3],
    [0, 1]
  );
  const contentOpacity = useSpring(rawContentOpacity, { stiffness: 90, damping: 22 });

  const rawContentX = useTransform(
    scrollYProgress,
    [0.18, 0.45],
    [isDesktop ? 60 : 0, 0]
  );
  const contentX = useSpring(rawContentX, { stiffness: 90, damping: 22 });

  const rawContentY = useTransform(
    scrollYProgress,
    [0.08, 0.3],
    [isDesktop ? 0 : 40, 0]
  );
  const contentY = useSpring(rawContentY, { stiffness: 90, damping: 22 });

  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.4], [0.08, 0.02]);

  return (
    <div ref={containerRef} className="relative h-[150vh] lg:h-[220vh] bg-[#FDFDFC]">
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden border-b border-neutral-200/60">

        {/* Subtle Watermark */}
        <motion.div
          style={{ opacity: watermarkOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        >
          <span className="font-sans text-[20vw] lg:text-[15vw] font-black tracking-tighter text-neutral-900">
            0{index + 1}
          </span>
        </motion.div>

        {/* Viewport Stage Container */}
        <div className="container max-w-7xl relative z-10 mx-auto px-5 sm:px-8 py-6 h-full flex items-center justify-center">
          <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center">

            {/* FLOATING TRANSPARENT PRODUCT IMAGE (Centered by default on Mobile, Tablet, Desktop, & TV) */}
            <motion.div
              style={{
                x: imageX,
                y: imageY,
                scale: cardScale,
              }}
              className="z-20 w-full max-w-[280px] sm:max-w-md lg:max-w-md shrink-0 flex items-center justify-center relative pointer-events-none lg:pointer-events-auto"
            >
              {/* Radial Backlight Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 via-amber-400/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

              <div className="relative h-[250px] sm:h-[350px] lg:h-[480px] w-full flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain object-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.14)] transition-transform duration-700 ease-out hover:scale-105 pointer-events-auto"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', item.fallbackImage);
                  }}
                />
              </div>
            </motion.div>

            {/* REVEALED CONTENT PANEL (Positioned to reveal smoothly on the right on Desktop/TV or below on Mobile/Tablet) */}
            <motion.div
              style={{
                opacity: contentOpacity,
                x: isDesktop ? contentX : 0,
                y: isDesktop ? 0 : contentY,
              }}
              className="z-10 w-full lg:w-1/2 max-w-lg space-y-4 lg:space-y-5 text-left lg:pl-12 mt-4 lg:mt-0 lg:absolute lg:right-0"
            >
              {/* Header Badges */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#E86526] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E86526]" />
                  {item.eyebrow}
                </span>
                <span className="text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                  {item.tagline}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.2]">
                {item.title}
              </h3>

              <p className="text-xs sm:text-base font-normal text-neutral-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Spec Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-3 sm:p-3.5 backdrop-blur-md shadow-sm transition hover:border-orange-500/30">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-xl bg-orange-500/10 text-[#E86526]">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-neutral-900">{item.spec1.title}</strong>
                      <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium">{item.spec1.desc}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-3 sm:p-3.5 backdrop-blur-md shadow-sm transition hover:border-orange-500/30">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-xl bg-orange-500/10 text-[#E86526]">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-neutral-900">{item.spec2.title}</strong>
                      <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium">{item.spec2.desc}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={item.ctaLink}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E86526] px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] hover:shadow-orange-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {item.ctaText}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Floating Scroll Cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 rounded-full bg-white/90 border border-neutral-200 px-4 py-1.5 backdrop-blur-md shadow-sm text-[10px] font-bold text-neutral-600 tracking-widest uppercase z-30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E86526] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E86526]" />
          </span>
          SCROLL TO REVEAL
        </div>
      </div>
    </div>
  );
}

{/* AI PORTAL DASHBOARD SECTION */ }
function AIPortalDashboardSection() {
  return (
    <section className="relative bg-[#FFFFFF] text-neutral-900 py-24 px-5 sm:px-8 overflow-hidden border-t border-neutral-200">
      {/* Ambient Radial Background Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* LEFT COLUMN: Overview & Features */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#E86526] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-[#E86526]" />
              Sunloop Energy Intelligence
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-neutral-900">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86526] to-amber-500">AI Portal</span> Dashboard
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Unified real-time telemetry, automated peak shaving, and predictive AI maintenance for your entire EV, Storage, and Solar infrastructure.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-[#E86526] shrink-0">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Autonomous Load Balancing</h4>
                  <p className="text-xs text-neutral-600 leading-normal">
                    AI dynamic distribution prevents grid overloads while maximizing charging velocity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-[#E86526] shrink-0">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Predictive Yield Analytics</h4>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Machine learning forecast generation yields based on real-time weather and usage patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-[#E86526] shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">24/7 Asset Telemetry & Diagnostics</h4>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Instant alerts and automatic remote self-healing protocols for minimum downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-full bg-[#E86526] px-7 py-3.5 text-xs font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-[#c95315] transition"
              >
                Launch AI Portal Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Modern Mockup Dashboard Graphic */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-neutral-800 bg-[#0F172A] p-3 sm:p-4 shadow-2xl">

              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-400">portal.sunloopenergy.ai/dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  System Live
                </div>
              </div>

              {/* Internal Dashboard Grid Mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-xl bg-neutral-900/80 border border-white/5 p-3.5">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Total Power Generated</div>
                  <div className="text-xl font-bold text-white flex items-baseline gap-1">
                    1.42 <span className="text-xs text-orange-400 font-normal">MW/h</span>
                  </div>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                    <TrendingUp className="h-3 w-3" /> +14.2% vs yesterday
                  </div>
                </div>

                <div className="rounded-xl bg-neutral-900/80 border border-white/5 p-3.5">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Active EV Stations</div>
                  <div className="text-xl font-bold text-white flex items-baseline gap-1">
                    48 <span className="text-xs text-neutral-500 font-normal">/ 50</span>
                  </div>
                  <div className="mt-2 text-[10px] text-orange-400 flex items-center gap-1 font-medium">
                    <Zap className="h-3 w-3" /> 96% Efficiency Rate
                  </div>
                </div>

                <div className="rounded-xl bg-neutral-900/80 border border-white/5 p-3.5">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Grid Load Status</div>
                  <div className="text-xl font-bold text-white flex items-baseline gap-1">
                    Optimal <span className="text-xs text-emerald-400 font-normal">(AI)</span>
                  </div>
                  <div className="mt-2 text-[10px] text-neutral-400 flex items-center gap-1 font-medium">
                    <Server className="h-3 w-3" /> Auto Shaving Active
                  </div>
                </div>
              </div>

              {/* Telemetry Visual Graph Simulation */}
              <div className="rounded-xl bg-neutral-900/90 border border-white/5 p-4 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h5 className="text-xs font-bold text-white">Live Energy Flow & Revenue Analytics</h5>
                    <p className="text-[10px] text-neutral-400">Real-time telemetry stream</p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300 font-mono">24H</span>
                    <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-mono">LIVE</span>
                  </div>
                </div>

                {/* Animated Chart SVG Representation */}
                <div className="h-32 w-full relative flex items-end pt-4">
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
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                {/* Interactive Status Indicator Overlay */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 border-t border-white/5 pt-3">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="h-3.5 w-3.5 text-orange-400" /> Peak Demand: Low
                  </span>
                  <span className="text-emerald-400 font-mono font-semibold">+ $4,290 Saved Today</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ProductStickyShowcase() {
  return (
    <div className="w-full bg-[#FDFDFC]">
      {productsList.map((item, index) => (
        <ScrollRevealCard key={item.id} item={item} index={index} />
      ))}
      <AIPortalDashboardSection />
    </div>
  );
}