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
import { about } from '../data/content';
import { Reveal } from '../components/UI';
import Stats from '../components/Stats';
import SolarHero from '../components/SolarHero';
import ProductStickyShowcase from '../components/ProductStickyShowcase';
import ConnectedJourneyScrollShowcase from '../components/ConnectedJourneyScrollShowcase';

export default function Home() {
  return (
    <main className="min-w-0 overflow-clip bg-white font-sans">
      <SolarHero />

      <section className="relative z-30 -mt-8 mb-14 px-4 sm:-mt-12 md:mb-20">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-3xl border border-black/[0.08] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-8 md:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.7fr]">
                <div className="space-y-3">
                  <p className="eyebrow flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" /> Integrated Clean Energy
                  </p>
                  <h2 className="text-2xl leading-tight text-brand-ink md:text-3xl">
                    Building a sustainable future with <span className="text-brand-primary">unified energy</span> ecosystems.
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-black/10">
                  {[
                    { icon: Sun, title: 'Solar Power', desc: '3 kW to MW+' },
                    { icon: Zap, title: 'ESS Storage', desc: '5 to 500 kWh' },
                    { icon: CarFront, title: 'EV Chargers', desc: '7.4 to 240 kW' },
                    { icon: ShieldCheck, title: 'AI Portal', desc: 'Included 24/7' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="group text-center sm:px-4">
                      <div className="mx-auto mb-2.5 grid h-10 w-10 place-items-center rounded-2xl border border-orange-100 bg-orange-50 text-brand-primary transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <strong className="block text-sm text-brand-ink">{title}</strong>
                      <span className="text-xs text-brand-slate">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white py-16 md:py-24">
        <div className="container grid items-center gap-12 md:grid-cols-[.85fr_1.15fr]">
          <Reveal className="space-y-5">
            <span className="eyebrow">The Sunloop Way</span>
            <h2 className="text-3xl leading-tight text-brand-ink md:text-4xl">Energy that thinks ahead.</h2>
            <p className="max-w-xl text-sm leading-relaxed text-brand-slate md:text-base">{about}</p>
            <Link href="/company" className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary transition hover:text-brand-secondary">
              More about Sunloop Energy <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal><Stats /></Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-wide px-4 py-14 text-center md:py-20">
          <Reveal className="mx-auto max-w-3xl space-y-4">
            <span className="eyebrow justify-center">OUR CORE SOLUTIONS</span>
            <h2 className="text-3xl text-brand-ink md:text-4xl">Integrated Clean Energy Ecosystem</h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-slate md:text-base">
              Generate. Store. Drive. Experience each clean technology solution designed to work together seamlessly.
            </p>
          </Reveal>
        </div>
        <ProductStickyShowcase />
      </section>

      <ConnectedJourneyScrollShowcase />

      <section className="bg-white px-4 py-16 md:py-24">
        <div className="container-wide">
          <Reveal className="relative overflow-hidden rounded-3xl bg-brand-ink p-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.2)] sm:p-12 md:p-16">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                <Sparkles className="h-4 w-4 text-brand-primary" /> Sustainable Energy Ecosystem
              </span>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                “We don’t just install energy systems, we create intelligent energy ecosystems.”
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                Connect your Solar, ESS Battery Storage, and EV Charging infrastructure under Sunloop's proprietary AI Portal.
              </p>
              <Link href="/contact" className="soft-btn soft-btn--secondary mx-auto !border-white/20 !bg-white !text-brand-ink">
                Start Your Energy Journey <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
