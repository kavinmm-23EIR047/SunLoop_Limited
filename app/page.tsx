'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Reveal } from '../components/UI';
import SolarHero from '../components/SolarHero';
import ProductStickyShowcase from '../components/ProductStickyShowcase';
import ConnectedJourneyScrollShowcase from '../components/ConnectedJourneyScrollShowcase';
import { PartnerCtaIllustration } from '../components/PartnerCtaIllustration';

export default function Home() {
  return (
    <main className="min-w-0 overflow-clip bg-white font-sans">
      <SolarHero />

      {/* Core Solutions Showcase */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-wide px-4 py-8 text-center md:py-10 2xl:py-12">
          <Reveal className="mx-auto max-w-3xl space-y-4">
            <span className="eyebrow justify-center">Core Solutions</span>
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

      {/* Segment Pathways */}
      <section className="bg-[#FAFAF5] py-20 md:py-28 border-b border-black/5">
        <div className="container-wide px-4 max-w-6xl mx-auto space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow justify-center">Segment Pathways</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">Solutions Tailored for Every Segment</h2>
            <p className="text-sm text-brand-slate leading-relaxed">Choose your path to explore custom-engineered clean energy configurations.</p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:min-h-[540px] lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
            {/* Path 1: For Homeowners */}
            <Reveal className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-orange-200/70 bg-gradient-to-br from-white via-white to-orange-50/80 p-6 shadow-sm transition-all duration-300 md:min-h-[280px] lg:col-span-7 lg:row-span-2 lg:min-h-0 lg:rounded-[1.75rem] lg:p-9 lg:hover:-translate-y-1 lg:hover:shadow-xl">
              <span className="pointer-events-none absolute -bottom-5 -right-2 select-none text-[9rem] font-extrabold leading-none text-orange-500/[0.06] lg:text-[13rem]" aria-hidden="true">01</span>
              <div className="relative space-y-4">
                <span className="inline-block rounded-xl border border-orange-100 bg-orange-50 px-3 py-2 text-xs font-semibold text-brand-primary">
                  01 / Residential
                </span>
                <h3 className="max-w-lg text-2xl font-bold text-brand-ink sm:text-3xl lg:text-4xl">For Homeowners</h3>
                <p className="max-w-lg text-sm leading-relaxed text-brand-slate sm:text-base">
                  Cut your electricity bill and gain backup security with solar power and energy storage.
                </p>
              </div>
              <div className="relative pt-7">
                <Link
                  href="/solutions/home-owners"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#E86526] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c95315]"
                >
                  Explore Home Solutions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {/* Path 2: For Businesses */}
            <Reveal className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50/70 p-6 shadow-sm transition-all duration-300 md:min-h-[280px] lg:col-span-5 lg:min-h-0 lg:rounded-[1.75rem] lg:p-7 lg:hover:-translate-y-1 lg:hover:shadow-xl" delay={0.1}>
              <span className="pointer-events-none absolute -bottom-6 -right-1 select-none text-[8rem] font-extrabold leading-none text-emerald-600/[0.06]" aria-hidden="true">02</span>
              <div className="relative space-y-3">
                <span className="inline-block rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-600">
                  02 / Commercial
                </span>
                <h3 className="text-xl font-bold text-brand-ink sm:text-2xl">For Businesses</h3>
                <p className="text-sm leading-relaxed text-brand-slate">
                  Reduce operating costs and unlock a new revenue stream from EV charging.
                </p>
              </div>
              <div className="relative pt-5">
                <Link
                  href="/solutions/business-owners"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Explore Business Solutions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {/* Path 3: For Utilities & Developers */}
            <Reveal className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-white via-white to-blue-50/70 p-6 shadow-sm transition-all duration-300 md:col-span-2 md:min-h-[220px] lg:col-span-5 lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:min-h-0 lg:rounded-[1.75rem] lg:p-7 lg:hover:-translate-y-1 lg:hover:shadow-xl" delay={0.2}>
              <span className="pointer-events-none absolute -bottom-6 -right-1 select-none text-[8rem] font-extrabold leading-none text-blue-600/[0.06]" aria-hidden="true">03</span>
              <div className="relative space-y-3">
                <span className="inline-block rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
                  03 / Utility & B2B
                </span>
                <h3 className="text-xl font-bold text-brand-ink sm:text-2xl">For Utilities &amp; Developers</h3>
                <p className="text-sm leading-relaxed text-brand-slate">
                  Deploy microgrid-scale Solar + ESS + EV infrastructure with full remote fleet management.
                </p>
              </div>
              <div className="relative pt-5">
                <Link
                  href="/solutions/smart-microgrid"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Explore Utility Solutions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-white px-4 py-16 md:py-24 2xl:py-32">
        <div className="container-wide">
          <Reveal className="relative overflow-hidden rounded-xl bg-brand-ink p-8 text-white shadow-xl sm:p-12 md:p-16 2xl:p-24">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" aria-hidden="true" />
            <PartnerCtaIllustration />
            <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-white">
                <Sparkles className="h-4 w-4 text-brand-primary" aria-hidden="true" /> Launching Partners
              </span>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl 2xl:text-6xl font-bold">
                Become a Launching Partner
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/75 md:text-base 2xl:text-xl">
                We're onboarding launching partners across India to bring integrated clean energy to their region.
              </p>
              <Link href="/contact" className="soft-btn soft-btn--secondary mx-auto !border-white/20 !bg-white !text-brand-ink font-semibold">
                Become a Launching Partner <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
