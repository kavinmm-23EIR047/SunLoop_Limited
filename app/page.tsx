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

      <section className="relative z-30 pt-10 pb-14 px-4 sm:pt-12 md:pb-20 2xl:pb-28">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-3xl border border-black/[0.08] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-8 md:p-10 2xl:p-14">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.7fr]">
                <div className="space-y-3">
                  <p className="eyebrow flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" /> 10 YEARS OF ENERGY EXPERTISE
                  </p>
                  <h2 className="text-2xl leading-tight text-brand-ink md:text-3xl 2xl:text-4xl">
                    We didn't just start today. We've been <span className="text-brand-primary">powering progress</span> for over a decade.
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
                      <div className="mx-auto mb-2.5 grid h-10 w-10 2xl:h-12 2xl:w-12 place-items-center rounded-2xl border border-orange-100 bg-orange-50 text-brand-primary transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5 2xl:h-6 2xl:w-6" />
                      </div>
                      <strong className="block text-sm md:text-base 2xl:text-lg text-brand-ink">{title}</strong>
                      <span className="text-xs md:text-sm 2xl:text-base text-brand-slate">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-[#F8F9FA]">
        <Reveal><EnergyDashboard /></Reveal>
      </div>

      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-wide px-4 py-14 text-center md:py-20 2xl:py-28">
          <Reveal className="mx-auto max-w-3xl space-y-4">
            <span className="eyebrow justify-center">OUR CORE SOLUTIONS</span>
            <h2 className="text-3xl text-brand-ink md:text-4xl 2xl:text-5xl">Integrated Clean Energy Ecosystem</h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-slate md:text-base 2xl:text-lg">
              Generate. Store. Drive. Experience each clean technology solution designed to work together seamlessly.
            </p>
          </Reveal>
        </div>
        <ProductStickyShowcase />
      </section>

      <ConnectedJourneyScrollShowcase />

      <section className="bg-white px-4 py-16 md:py-24 2xl:py-32">
        <div className="container-wide">
          <Reveal className="relative overflow-hidden rounded-3xl bg-brand-ink p-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.2)] sm:p-12 md:p-16 2xl:p-24">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-widest text-white">
                <Sparkles className="h-4 w-4 text-brand-primary" /> Launching Partners
              </span>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl 2xl:text-6xl">
                Join the energy revolution
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/75 md:text-base 2xl:text-xl">
                We are inviting launching partners across all major cities and small towns to bring sustainable, intelligent energy solutions to their communities.
              </p>
              <Link href="/contact" className="soft-btn soft-btn--secondary mx-auto !border-white/20 !bg-white !text-brand-ink">
                Join as a Launching Partner <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
