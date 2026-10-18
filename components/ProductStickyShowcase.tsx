'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Zap,
  Activity,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Sliders,
  ArrowRight,
  TrendingUp,
  Server,
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
    id: 'solar',
    eyebrow: '01 / Generate',
    title: 'Solar Power Plants',
    tagline: 'Rooftop · Ground-Mounted · Utility-Scale',
    desc: 'End-to-end solar PV design, installation and maintenance for residential rooftops, industrial sites and utility-scale projects.',
    image: '/images/solar-panels.png',
    fallbackImage: '/images/residential-energy.png',
    spec1: { title: '3 kW to 1 MW+', desc: 'Rooftop & Ground-Mounted' },
    spec2: { title: 'High Yield', desc: 'AI Asset Telemetry' },
    ctaText: 'Explore Solar Power',
    ctaLink: '/products/solar-power',
  },
  {
    id: 'ess',
    eyebrow: '02 / Store',
    title: 'Energy Storage Systems (ESS)',
    tagline: 'Wall-Mounted · Trolley-Type · Containerized',
    desc: 'Lithium-ion and LiFePO4 battery storage from 5 kWh to 500+ kWh for backup power, peak-demand shaving and energy independence.',
    image: '/images/energy-storage.png',
    fallbackImage: '/images/commercial-energy.png',
    spec1: { title: '5 kWh to 500+ kWh', desc: 'Stackable Capacity' },
    spec2: { title: 'Peak Shaving', desc: 'Automated AI Optimization' },
    ctaText: 'Explore Energy Storage',
    ctaLink: '/products/energy-storage',
  },
  {
    id: 'ev',
    eyebrow: '03 / Drive',
    title: 'EV Charging Infrastructure',
    tagline: 'AC Chargers · DC Fast Chargers',
    desc: 'AC chargers for homes and communities plus DC fast chargers for commercial hubs and fleets with remote monitoring and payment integration.',
    image: '/images/ac-charging.png',
    fallbackImage: '/images/dc-charging.png',
    spec1: { title: '7.4 kW to 240 kW', desc: 'AC + DC Fast Charging' },
    spec2: { title: 'AI Connected', desc: 'Remote Monitoring & Billing' },
    ctaText: 'Explore EV Charging',
    ctaLink: '/products/ev-charging',
  },
];

function PinnedProductStage({ item, index, progress }: { item: ProductItem; index: number; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const start = index / productsList.length;
  const end = (index + 1) / productsList.length;
  const opacityRange = index === 0 ? [0, end - 0.025, end] : [start - 0.01, start, start + 0.006, end - 0.025, end];
  const opacityValues = index === 0 ? [1, 1, 0] : [0, 0, 1, 1, 0];
  const imageOpacity = useTransform(progress, opacityRange, opacityValues);
  return (
    <>
      <motion.div style={{ opacity: imageOpacity }} className="absolute inset-x-0 top-[3%] mx-auto flex h-[44vh] w-[min(86vw,760px)] items-center justify-center lg:inset-x-auto lg:left-[5vw] lg:top-[8%] lg:h-[66vh] lg:w-[46vw]" aria-hidden="true">
        <img src={item.image} alt="" className="h-full w-full object-contain drop-shadow-[0_18px_35px_rgba(15,23,42,0.14)]" loading={index === 0 ? 'eager' : 'lazy'} onError={(e) => { (e.target as HTMLImageElement).src = item.fallbackImage; }} />
      </motion.div>
      <motion.div style={{ opacity: imageOpacity }} className="absolute inset-x-5 bottom-[4vh] space-y-3 text-left sm:inset-x-10 lg:inset-x-auto lg:right-[7vw] lg:top-[18%] lg:w-[38vw] lg:space-y-4">
        <div className="flex flex-wrap items-center gap-2"><span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#E86526]"><span className="h-1.5 w-1.5 rounded-full bg-[#E86526]" />{item.eyebrow}</span><span className="text-xs font-medium tracking-wide text-slate-400">{item.tagline}</span></div>
        <h3 className="text-2xl font-bold leading-tight tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">{item.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.desc}</p>
        <div className="grid grid-cols-2 gap-2 pt-1 sm:gap-3">{[item.spec1, item.spec2].map((spec) => <div key={spec.title} className="rounded-lg border border-black/10 bg-white p-3 shadow-sm"><strong className="block text-xs font-semibold text-brand-ink sm:text-sm">{spec.title}</strong><span className="text-[10px] font-medium text-slate-500 sm:text-xs">{spec.desc}</span></div>)}</div>
        <Link href={item.ctaLink} className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#E86526] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#c95315]">{item.ctaText}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </motion.div>
    </>
  );
}

function PinnedProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-white">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="absolute left-[7%] top-[20%] h-24 w-24 rounded-full bg-orange-100/40 blur-3xl" /><div className="absolute bottom-[15%] right-[12%] h-32 w-32 rounded-full bg-emerald-100/30 blur-3xl" /></div>
        {productsList.map((item, index) => <PinnedProductStage key={item.id} item={item} index={index} progress={scrollYProgress} />)}
      </div>
    </section>
  );
}

{/* AI PORTAL DASHBOARD SECTION */}
function AIPortalDashboardSection() {
  return (
    <section className="readable-ui relative overflow-hidden border-t border-black/10 bg-slate-950 px-4 pb-28 pt-12 text-white sm:px-8 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.82fr_1.18fr] lg:grid-cols-12 lg:items-center lg:gap-10">

          {/* LEFT COLUMN */}
          <div className="space-y-5 text-left md:col-span-1 lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#E86526] text-xs font-medium tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-[#E86526]" aria-hidden="true" />
              Sunloop Energy Intelligence
            </div>

            <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl font-bold">
              Sunloop <span className="text-[#E86526]">AI Portal</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              Every Sunloop system — Solar, ESS, or EV — connects to the same AI Energy Management Portal, giving you live telemetry, predictive maintenance alerts, and daily performance reports from one dashboard.
            </p>

            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E86526] shrink-0">
                  <Activity className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Live Monitoring & Telemetry</h3>
                  <p className="text-xs leading-normal text-slate-400 mt-0.5">
                    Real-time status across all connected Solar, ESS, and EV charging assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E86526] shrink-0">
                  <BarChart3 className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI-Powered Optimization</h3>
                  <p className="text-xs leading-normal text-slate-400 mt-0.5">
                    Automated peak shaving, daily performance reports and energy consumption tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E86526] shrink-0">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Predictive Maintenance Alerts</h3>
                  <p className="text-xs leading-normal text-slate-400 mt-0.5">
                    Instant fault detection and alerts to keep your clean energy systems running 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-lg bg-[#E86526] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#c95315] transition min-h-[44px]"
              >
                See the AI Portal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="min-w-0 md:col-span-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10 bg-brand-ink p-3 shadow-2xl sm:p-4"
            >
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 px-1">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E86526]" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                  <span className="ml-2 hidden text-xs font-mono text-white/50 lg:inline">portal.sunloopenergy.com/dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#E86526]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#E86526]" aria-hidden="true" />
                  System Live
                </div>
              </div>

              <div className="mb-3 grid grid-cols-1 gap-2.5 lg:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 text-xs font-medium tracking-wide text-white/50">Total Solar Generation</div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    124.5 <span className="text-xs text-orange-400 font-normal">kW</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#E86526]">
                    <TrendingUp className="h-3 w-3" aria-hidden="true" /> +12% higher than yesterday
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 text-xs font-medium tracking-wide text-white/50">ESS Battery Buffer</div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    98 <span className="text-xs font-normal text-white/40">%</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-xs font-medium text-emerald-400">
                    <Zap className="h-3 w-3" aria-hidden="true" /> 5.2 kW Input Power
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="mb-1 text-xs font-medium tracking-wide text-white/50">EV Charger Status</div>
                  <div className="text-lg font-bold text-white flex items-baseline gap-1">
                    7.4 <span className="text-xs font-normal text-white/40">kW AC</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-xs font-medium text-white/50">
                    <Server className="h-3 w-3" aria-hidden="true" /> Active Session
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Live Generation & Consumption</h3>
                    <p className="text-xs text-white/50 mt-0.5">Real-time telemetry stream</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-white/70">24H</span>
                    <span className="rounded bg-[#E86526]/20 px-1.5 py-0.5 font-mono text-xs text-[#E86526]">Live</span>
                  </div>
                </div>

                <div className="h-28 w-full relative flex items-end pt-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
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

                <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2.5 text-xs text-white/50">
                  <span className="flex items-center gap-1">
                    <Sliders className="h-3 w-3 text-orange-400" aria-hidden="true" /> Peak Shaving Active
                  </span>
                  <span className="font-mono font-medium text-[#E86526]">AI Portal Synchronized</span>
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
      <PinnedProductShowcase />
      <AIPortalDashboardSection />
    </div>
  );
}
