'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  CarFront,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react';
import { Reveal } from '../components/UI';
import EnergyDashboard from '../components/EnergyDashboard';
import SolarHero from '../components/SolarHero';
import ProductStickyShowcase from '../components/ProductStickyShowcase';
import ConnectedJourneyScrollShowcase from '../components/ConnectedJourneyScrollShowcase';

export default function Home() {
  return (
    <main className="min-w-0 overflow-clip bg-white font-sans">
      <SolarHero />

      {/* Live Dashboard Preview */}
      <section className="bg-[#F8F9FA] py-12 border-y border-black/5">
        <div className="container-wide px-4 pb-4 text-center">
          <Reveal className="mx-auto max-w-2xl space-y-2">
            <span className="eyebrow justify-center">LIVE DASHBOARD PREVIEW</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink">Inside the Sunloop AI Portal</h2>
            <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto">
              A snapshot of what customers see inside the Sunloop AI Portal — live generation, storage status, and EV charging activity across their sites, in real time.
            </p>
          </Reveal>
        </div>
        <Reveal><EnergyDashboard /></Reveal>
      </section>

      {/* Core Solutions Showcase */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-wide px-4 py-14 text-center md:py-20 2xl:py-28">
          <Reveal className="mx-auto max-w-3xl space-y-4">
            <span className="eyebrow justify-center">CORE SOLUTIONS</span>
            <h2 className="text-3xl text-brand-ink md:text-4xl 2xl:text-5xl font-bold">Integrated Clean Energy Ecosystem</h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-slate md:text-base 2xl:text-lg">
              One connected energy ecosystem that scales with you — start with a single system today, and expand whenever you're ready.
            </p>
          </Reveal>
        </div>
        <ProductStickyShowcase />
      </section>

      {/* Why Sunloop & Connected Journey */}
      <ConnectedJourneyScrollShowcase />

      {/* Segment Pathways (3 Clear, Distinct Paths) */}
      <section className="bg-[#FAFAF5] py-20 md:py-28 border-b border-black/5">
        <div className="container-wide px-4 max-w-6xl mx-auto space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow justify-center">SEGMENT PATHWAYS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Solutions Tailored for Every Segment</h2>
            <p className="text-sm text-brand-slate">Choose your path to explore custom-engineered clean energy configurations.</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Path 1: For Homeowners */}
            <Reveal className="rounded-xl border border-black/10 bg-white p-8 shadow-xs hover:shadow-card transition flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block rounded-xl bg-orange-50 border border-orange-100 p-3 text-brand-primary font-bold text-xs">
                  01 / RESIDENTIAL
                </span>
                <h3 className="text-2xl font-bold text-brand-ink">For Homeowners</h3>
                <p className="text-xs leading-relaxed text-brand-slate">
                  Cut your electricity bill and gain backup security.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  href="/solutions/home-owners"
                  className="inline-flex items-center gap-2 rounded-md bg-[#E86526] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#c95315] transition"
                >
                  Explore Home Solutions <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Path 2: For Businesses */}
            <Reveal className="rounded-xl border border-black/10 bg-white p-8 shadow-xs hover:shadow-card transition flex flex-col justify-between" delay={0.1}>
              <div className="space-y-4">
                <span className="inline-block rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-emerald-600 font-bold text-xs">
                  02 / COMMERCIAL
                </span>
                <h3 className="text-2xl font-bold text-brand-ink">For Businesses</h3>
                <p className="text-xs leading-relaxed text-brand-slate">
                  Reduce operating costs and unlock a new revenue stream from EV charging.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  href="/solutions/business-owners"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition"
                >
                  Explore Business Solutions <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Path 3: For Utilities & Developers */}
            <Reveal className="rounded-xl border border-black/10 bg-white p-8 shadow-xs hover:shadow-card transition flex flex-col justify-between" delay={0.2}>
              <div className="space-y-4">
                <span className="inline-block rounded-xl bg-blue-50 border border-blue-100 p-3 text-blue-600 font-bold text-xs">
                  03 / UTILITY & B2B
                </span>
                <h3 className="text-2xl font-bold text-brand-ink">For Utilities &amp; Developers</h3>
                <p className="text-xs leading-relaxed text-brand-slate">
                  Deploy microgrid-scale Solar + ESS + EV infrastructure with full remote fleet management.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  href="/solutions/smart-microgrid"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition"
                >
                  Explore Utility Solutions <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-white px-4 py-16 md:py-24 2xl:py-32">
        <div className="container-wide">
          <Reveal className="relative overflow-hidden rounded-xl bg-brand-ink p-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.2)] sm:p-12 md:p-16 2xl:p-24">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest text-white">
                <Sparkles className="h-4 w-4 text-brand-primary" /> Launching Partners
              </span>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl 2xl:text-6xl font-bold">
                Become a Launching Partner
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/75 md:text-base 2xl:text-xl">
                We're onboarding launching partners across India to bring integrated clean energy to their region.
              </p>
              <Link href="/contact" className="soft-btn soft-btn--secondary mx-auto !border-white/20 !bg-white !text-brand-ink font-bold">
                Become a Launching Partner <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
