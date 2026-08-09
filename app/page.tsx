'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Check,
  Leaf,
  Sun,
  Sparkles,
  Zap,
  BatteryCharging,
  CarFront,
  BarChart3,
  Cpu,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Activity,
  Headphones
} from 'lucide-react';
import { about } from '../data/content';
import { Reveal, Button, SectionTitle } from '../components/UI';
import Stats from '../components/Stats';
import SolarHero from '../components/SolarHero';
import ProductStickyShowcase from '../components/ProductStickyShowcase';
import ConnectedJourneyScrollShowcase from '../components/ConnectedJourneyScrollShowcase';


const stages = [

  [
    '01',
    'Start Today',
    'Choose any one system initially. Solar PV, Storage ESS, or EV Charging.',
    'Solar Power Plant → Monitor and optimize using AI Powered Portal',
  ],
  [
    '02',
    'Add When You Need',
    'Add Energy Storage System when backup or peak-shaving is required.',
    'Solar + ESS → Everything visible and managed in the same portal',
  ],
  [
    '03',
    'Expand Further',
    'Add EV Charging Station when you own an EV or monetize parking.',
    'Solar + ESS + EV Charger → One platform, complete control',
  ],
  [
    '04',
    'One Ecosystem. Endless Benefits.',
    'All systems working together for smarter energy management.',
    'Smarter decisions. Higher savings. Greener tomorrow.',
  ],
];

export default function Home() {
  const [activeTeaserTab, setActiveTeaserTab] = useState<'assistant' | 'telemetry' | 'robots'>('assistant');
  const [teaserQuery, setTeaserQuery] = useState('Predict solar generation & run robot agent string scan');
  const [teaserOutput, setTeaserOutput] = useState(
    '☀️ **Solar Yield Forecast**: 48.2 kW expected peak today.\n🤖 **Robot Agent Alpha**: All 12 array strings healthy with 0 thermal hot-spots detected.'
  );

  const handleRunTeaser = (promptText: string) => {
    setTeaserQuery(promptText);
    if (promptText.includes('Solar')) {
      setTeaserOutput('☀️ **Solar Analysis**: Cloud-cover models indicate optimum 44.5 kWh daily yield. Automated tilt tracking engaged.');
    } else if (promptText.includes('Battery') || promptText.includes('ESS')) {
      setTeaserOutput('⚡ **ESS Battery Strategy**: Peak-shaving active. Discharging 30 kW from 6 PM to 9 PM to save peak tariff costs.');
    } else if (promptText.includes('Robot')) {
      setTeaserOutput('🤖 **Robot Agent Dispatch**: 3 Autonomous bots verified. Inverter diagnostic scan complete with 100% health index.');
    } else {
      setTeaserOutput('✨ **Clean Solid AI Portal**: Instant 1-click control activated. All energy nodes running at peak efficiency.');
    }
  };

  return (
    <main className="font-sans">
      {/* STATIC SOLAR HERO SECTION */}
      <SolarHero />

      {/* FLOATING STATS BANNER CARD (From Image 1 Layout) */}
      <section className="relative z-30 -mt-10 mb-16">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.9fr] items-center">
                {/* Left Heading */}
                <div>
                  <p className="eyebrow text-emerald-600 font-bold mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-6 rounded-full bg-emerald-500" /> Generate. Store. Drive.
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-ink leading-snug">
                    Building a sustainable future with{' '}
                    <span className="text-brand-primary relative inline-block font-extrabold">
                      integrated energy
                      <svg className="absolute left-0 -bottom-1 w-full h-2 text-emerald-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                    </span>{' '}
                    solutions.
                  </h3>
                </div>

                {/* Right 4 Stat Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/10 pt-4 sm:pt-0">
                  <div className="text-center sm:px-3 pt-3 sm:pt-0">
                    <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-brand-primary">
                      <Sun className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block">Solar Power</strong>
                    <span className="text-xs text-brand-slate font-medium">3 kW to MW+</span>
                  </div>

                  <div className="text-center sm:px-3 pt-3 sm:pt-0">
                    <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block">ESS Storage</strong>
                    <span className="text-xs text-brand-slate font-medium">5 to 500 kWh</span>
                  </div>

                  <div className="text-center sm:px-3 pt-3 sm:pt-0">
                    <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-blue-100 text-blue-600">
                      <CarFront className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block">EV Chargers</strong>
                    <span className="text-xs text-brand-slate font-medium">7.4 to 240 kW</span>
                  </div>

                  <div className="text-center sm:px-3 pt-3 sm:pt-0">
                    <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-amber-100 text-amber-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block">AI Portal</strong>
                    <span className="text-xs text-brand-slate font-medium">Free & Included</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SUNLOOP WAY SECTION (RIGHT BELOW HERO) */}
      <section className="py-16 md:py-24 bg-white border-b border-black/5">
        <div className="container grid gap-12 md:grid-cols-[.85fr_1.15fr] items-center">
          <Reveal>
            <span className="eyebrow mb-2 inline-block">The Sunloop way</span>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl text-brand-ink">
              Energy that thinks ahead.
            </h2>
            <p className="mt-3 text-xs md:text-sm leading-relaxed text-brand-slate font-normal">{about}</p>
            <Link href="/company" className="mt-5 inline-flex items-center gap-2 font-semibold text-xs text-brand-primary hover:underline">
              More about Sunloop <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal>
            <Stats />
          </Reveal>
        </div>
      </section>

      {/* SCROLL-DRIVEN REVEAL PRODUCT SHOWCASE */}
      <section className="bg-white border-b border-black/5">
        <div className="pt-12 pb-2 md:pt-16 md:pb-6 text-center max-w-2xl mx-auto px-4">
          <Reveal>
            <span className="eyebrow mb-1.5 inline-block">OUR CORE SOLUTIONS</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
              Integrated Clean Energy Ecosystem
            </h2>
            <p className="mt-2 text-xs md:text-sm text-brand-slate font-normal">
              Generate. Store. Drive. Scroll down to experience each solution.
            </p>
          </Reveal>
        </div>

        <ProductStickyShowcase />
      </section>

      {/* ONE CONNECTED JOURNEY STAGES (SCROLL-DRIVEN CARD SPREAD SHOWCASE) */}
      <ConnectedJourneyScrollShowcase />



      {/* STANDALONE FLOATING CTA BANNER */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E86526] via-[#F95738] to-[#D45214] text-white p-8 md:p-16 shadow-2xl border border-orange-500/20">
            {/* Foreground Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
              <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1 text-xs font-bold text-white uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-white" /> Pathway to Sustainable Future
              </span>

              <h2 className="text-3xl font-extrabold leading-tight md:text-5xl text-white tracking-tight">
                “We don’t just install energy systems, we create intelligent energy ecosystems.”
              </h2>

              <p className="text-xs md:text-base text-white/95 font-medium max-w-2xl mx-auto leading-relaxed">
                Connect your Solar, ESS Battery Storage, and EV Charging infrastructure under Sunloop's proprietary AI Portal.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-extrabold text-[#E86526] shadow-xl hover:bg-neutral-100 transition transform hover:-translate-y-0.5"
                >
                  Start Your Energy Journey <ArrowUpRight className="h-4 w-4 text-[#E86526]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
