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
    <main className="font-sans bg-white overflow-hidden">
      {/* STATIC SOLAR HERO SECTION */}
      <SolarHero />

      {/* FLOATING STATS BANNER CARD (Refined Modern UI Layout) */}
      <section className="relative z-30 -mt-4 md:-mt-6 mb-20">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl border border-black/[0.08] bg-white p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.9fr] items-center">
                {/* Left Heading */}
                <div className="space-y-2">
                  <p className="eyebrow flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Integrated Clean Energy
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-ink leading-snug tracking-tight">
                    Building a sustainable future with{' '}
                    <span className="text-brand-primary relative inline-block">
                      unified energy
                      <svg className="absolute left-0 -bottom-1 w-full h-2 text-emerald-500/70" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                    </span>{' '}
                    ecosystems.
                  </h3>
                </div>

                {/* Right 4 Stat Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/10 pt-4 sm:pt-0">
                  <div className="text-center sm:px-3 pt-3 sm:pt-0 group">
                    <div className="mx-auto mb-2.5 grid h-11 w-11 place-items-center rounded-2xl bg-orange-50 text-brand-primary border border-orange-100 group-hover:scale-105 transition-transform">
                      <Sun className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block tracking-tight">Solar Power</strong>
                    <span className="text-xs text-brand-slate font-medium">3 kW to MW+</span>
                  </div>

                  <div className="text-center sm:px-3 pt-3 sm:pt-0 group">
                    <div className="mx-auto mb-2.5 grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105 transition-transform">
                      <Zap className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block tracking-tight">ESS Storage</strong>
                    <span className="text-xs text-brand-slate font-medium">5 to 500 kWh</span>
                  </div>

                  <div className="text-center sm:px-3 pt-3 sm:pt-0 group">
                    <div className="mx-auto mb-2.5 grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-105 transition-transform">
                      <CarFront className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block tracking-tight">EV Chargers</strong>
                    <span className="text-xs text-brand-slate font-medium">7.4 to 240 kW</span>
                  </div>

                  <div className="text-center sm:px-3 pt-3 sm:pt-0 group">
                    <div className="mx-auto mb-2.5 grid h-11 w-11 place-items-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <strong className="text-sm md:text-base font-bold text-brand-ink block tracking-tight">AI Portal</strong>
                    <span className="text-xs text-brand-slate font-medium">Included 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SUNLOOP WAY SECTION (RIGHT BELOW HERO) */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-y border-black/[0.06]">
        <div className="container grid gap-12 md:grid-cols-[.9fr_1.1fr] items-center">
          <Reveal className="space-y-4">
            <span className="eyebrow">The Sunloop Way</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-brand-ink tracking-tight">
              Energy that thinks ahead.
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-brand-slate font-normal">{about}</p>
            <div className="pt-2">
              <Link href="/company" className="inline-flex items-center gap-2 font-bold text-xs text-brand-primary hover:text-brand-secondary group">
                More about Sunloop Energy <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <Stats />
          </Reveal>
        </div>
      </section>

      {/* SCROLL-DRIVEN REVEAL PRODUCT SHOWCASE */}
      <section className="bg-white border-b border-black/[0.06]">
        <div className="pt-16 pb-4 md:pt-20 md:pb-8 text-center max-w-3xl mx-auto px-4 space-y-3">
          <Reveal>
            <span className="eyebrow justify-center">OUR CORE SOLUTIONS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight">
              Integrated Clean Energy Ecosystem
            </h2>
            <p className="text-sm md:text-base text-brand-slate font-normal max-w-xl mx-auto">
              Generate. Store. Drive. Experience each clean technology solution designed to work together seamlessly.
            </p>
          </Reveal>
        </div>

        <ProductStickyShowcase />
      </section>

      {/* ONE CONNECTED JOURNEY STAGES (SCROLL-DRIVEN CARD SPREAD SHOWCASE) */}
      <ConnectedJourneyScrollShowcase />

      {/* STANDALONE FLOATING CTA BANNER */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E86526] via-[#F95738] to-[#D45214] text-white p-10 md:p-20 shadow-[0_25px_60px_rgba(232,101,38,0.25)] border border-orange-500/20">
            {/* Background Light Effects */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Foreground Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4.5 py-1.5 text-xs font-bold text-white uppercase tracking-widest backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-white" /> Sustainable Energy Ecosystem
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] text-white tracking-tight">
                “We don’t just install energy systems, we create intelligent energy ecosystems.”
              </h2>

              <p className="text-sm md:text-base text-white/90 font-normal max-w-2xl mx-auto leading-relaxed">
                Connect your Solar, ESS Battery Storage, and EV Charging infrastructure under Sunloop's proprietary AI Portal.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-xs sm:text-sm font-extrabold text-[#E86526] shadow-xl hover:bg-neutral-50 transition transform hover:-translate-y-0.5"
                >
                  Start Your Energy Journey <ArrowUpRight className="h-4.5 w-4.5 text-[#E86526]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
