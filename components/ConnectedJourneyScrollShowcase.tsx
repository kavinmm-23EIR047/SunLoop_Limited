'use client';

import React from 'react';
import { CarFront, Sparkles, Sun, Zap } from 'lucide-react';

interface StageCardData {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  foot: string;
  icon: React.ElementType;
  isDark?: boolean;
}

const stages: StageCardData[] = [
  {
    num: '01',
    eyebrow: 'PHASE ONE',
    title: 'Start Today',
    desc: 'Purchase any single solution that fits your current operational needs - Solar PV, Battery ESS, or EV Fast Chargers.',
    foot: 'Solar / Storage / EV -> Includes Complimentary AI Portal',
    icon: Sun,
  },
  {
    num: '02',
    eyebrow: 'PHASE TWO',
    title: 'Add When You Need',
    desc: 'Expand with Energy Storage Systems when backup power, load shaving, or zero-outage security is required.',
    foot: 'Solar + ESS -> Automated Peak-Shaving Active',
    icon: Zap,
  },
  {
    num: '03',
    eyebrow: 'PHASE THREE',
    title: 'Expand Further',
    desc: 'Integrate EV Charging Infrastructure when you own an EV or want to monetize commercial parking spaces.',
    foot: 'Solar + ESS + EV -> Smart Microgrid Control',
    icon: CarFront,
  },
  {
    num: '04',
    eyebrow: 'COMPLETE ECOSYSTEM',
    title: 'One Ecosystem. Endless Benefits.',
    desc: 'All three pillars synchronized in real time under the Sunloop AI Energy Management Portal.',
    foot: 'Smarter Decisions - Peak Savings - Greener Tomorrow',
    icon: Sparkles,
    isDark: true,
  },
];

export default function ConnectedJourneyScrollShowcase() {
  return (
    <section className="relative overflow-clip bg-white border-y border-black/5 py-16 md:py-32">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none opacity-[0.03]">
        <span className="font-sans text-[12vw] font-black tracking-tighter text-brand-ink">ecosystem</span>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center md:mb-24">
          <span className="eyebrow inline-block">ONE CONNECTED JOURNEY</span>
          <h2 className="text-3xl text-brand-ink sm:text-4xl md:text-5xl leading-tight">Start with what you need.<br/>Add what you want.</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-slate md:text-base">
            A modular clean-energy growth path. Start with one system and expand when the time is right.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl pb-10">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            // Sticky top position offsets each card slightly below the previous one
            const stickyTop = `calc(12vh + ${index * 24}px)`;
            // Provide a large bottom margin to allow for scrolling before the next card overlaps.
            // For the last card, calculate exactly how much margin is needed for it to reach 
            // its sticky top position without any extra "dead zone" scrolling.
            const isLast = index === stages.length - 1;
            const lastCardMargin = `max(0px, calc(100vh - 12vh - ${index * 24}px - 450px))`;
            
            return (
              <div
                key={stage.num}
                className="sticky w-full"
                style={{
                  top: stickyTop,
                  zIndex: index,
                  marginBottom: isLast ? lastCardMargin : '40vh',
                }}
              >
                <article
                  className={`flex min-h-[380px] flex-col justify-between rounded-[2rem] border p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-12 transition-transform duration-500 ease-out hover:scale-[1.01] ${
                    stage.isDark ? 'border-brand-ink bg-brand-ink text-white' : 'border-black/10 bg-white text-brand-ink'
                  }`}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-5xl font-bold text-brand-primary">{stage.num}</span>
                      <div className={`grid h-14 w-14 place-items-center rounded-2xl border shadow-sm ${stage.isDark ? 'border-white/10 bg-white/10 text-brand-primary' : 'border-orange-100 bg-orange-50 text-brand-primary'}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.15em] text-brand-primary">{stage.eyebrow}</span>
                    <h3 className={`mb-4 text-2xl sm:text-3xl font-medium leading-tight tracking-tight ${stage.isDark ? 'text-white' : 'text-brand-ink'}`}>{stage.title}</h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${stage.isDark ? 'text-white/80' : 'text-brand-slate'}`}>{stage.desc}</p>
                  </div>
                  <div className={`mt-10 border-t pt-5 text-[11px] sm:text-xs font-bold uppercase tracking-wide leading-relaxed text-brand-primary ${stage.isDark ? 'border-white/10' : 'border-black/10'}`}>
                    {stage.foot}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
