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
import { AIPortalLiveDashboard } from './AIPortalLiveDashboard';

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
    image: '/images/india-solar-power-plant.jpg',
    fallbackImage: '/images/solar-panels.png',
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
    image: '/images/india-energy-storage.jpg',
    fallbackImage: '/images/energy-storage.png',
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
    image: '/images/india-ev-charging.jpg',
    fallbackImage: '/images/ac-charging.png',
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
      <motion.div
        style={{ opacity: imageOpacity }}
        className="absolute inset-x-0 top-[3%] mx-auto flex h-[44vh] w-[min(86vw,760px)] items-center justify-center lg:inset-x-auto lg:left-[5vw] lg:top-[8%] lg:h-[66vh] lg:w-[46vw]"
        aria-hidden="true"
      >
        <div className="relative h-full w-full max-h-[520px] max-w-[640px] overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-slate-100 group">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              (e.target as HTMLImageElement).src = item.fallbackImage;
            }}
          />
        </div>
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
    <section className="relative overflow-hidden border-t border-black/10 bg-slate-950 px-4 py-8 text-white sm:px-6 sm:py-10 md:py-12">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

          {/* LEFT COLUMN: Clean & Simple to Showcase the Clean Graph */}
          <div className="flex h-full flex-col justify-center space-y-4 text-left lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E86526] text-white text-xs font-semibold shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
              Sunloop Energy AI
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-2xl leading-tight text-white sm:text-3xl lg:text-4xl font-bold tracking-tight"
            >
              Sunloop <span className="text-[#E86526]">AI Portal</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal"
            >
              Real-time telemetry, automated peak shaving and predictive maintenance alerts synchronized across every connected Solar, ESS and EV asset.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-2.5 pt-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#E86526] text-white shrink-0 shadow-sm shadow-orange-500/30">
                  <Activity className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Live Monitoring &amp; Instant Telemetry</h3>
                  <p className="text-xs text-slate-400">Sub-second generation and consumption stream.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#E86526] text-white shrink-0 shadow-sm shadow-orange-500/30">
                  <BarChart3 className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Automated Peak Shaving &amp; Storage AI</h3>
                  <p className="text-xs text-slate-400">Lowers grid tariff charges during peak hours.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#E86526] text-white shrink-0 shadow-sm shadow-orange-500/30">
                  <ShieldCheck className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">24/7 Predictive Fault Diagnostics</h3>
                  <p className="text-xs text-slate-400">Continuous remote health tracking and zero downtime.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="pt-1"
            >
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-[#c95315] hover:shadow-orange-500/35 transition-all duration-300 min-h-[42px] group"
              >
                See the AI Portal
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: AI PORTAL LIVE DASHBOARD (Clean Graph Showcase) */}
          <div className="h-full min-w-0 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.99 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <AIPortalLiveDashboard />
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
