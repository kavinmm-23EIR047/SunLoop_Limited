'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    eyebrow: 'Phase One',
    title: 'Start Today',
    desc: 'Purchase any single solution that fits your current needs — Solar PV, Battery ESS, or EV Fast Chargers.',
    foot: 'Solar / Storage / EV → Includes Complimentary AI Portal',
    icon: Sun,
  },
  {
    num: '02',
    eyebrow: 'Phase Two',
    title: 'Add When You Need',
    desc: 'Expand with energy storage when backup power, load shaving, or zero-outage security is required.',
    foot: 'Solar + ESS → Automated Peak-Shaving Active',
    icon: Zap,
  },
  {
    num: '03',
    eyebrow: 'Phase Three',
    title: 'Expand Further',
    desc: 'Integrate EV charging infrastructure when you own an EV or want to monetize commercial parking spaces.',
    foot: 'Solar + ESS + EV → Smart Microgrid Control',
    icon: CarFront,
  },
  {
    num: '04',
    eyebrow: 'Complete Ecosystem',
    title: 'One Ecosystem. Endless Benefits.',
    desc: 'All three pillars synchronized in real time under the Sunloop AI Energy Management Portal.',
    foot: 'Smarter Decisions · Peak Savings · Greener Tomorrow',
    icon: Sparkles,
    isDark: true,
  },
];

export default function ConnectedJourneyScrollShowcase() {
  return (
    <section className="relative overflow-clip border-y border-black/5 bg-white py-8 md:py-12 lg:py-14">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none opacity-[0.03]" aria-hidden="true">
        <span className="font-sans text-[12vw] font-black tracking-tighter text-brand-ink">ecosystem</span>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-6 max-w-3xl space-y-3 text-center md:mb-8">
          <span className="eyebrow inline-block">Why Sunloop</span>
          <h2 className="text-3xl text-brand-ink sm:text-4xl md:text-5xl font-bold leading-tight">One Connected Energy Ecosystem</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-brand-slate md:text-base">
            We don't sell isolated products. We build one connected ecosystem that scales with you — start with a single system today and expand into a fully integrated solar, storage and EV microgrid whenever you're ready.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const stackOffset = index * 14;
            const stickyTop = `calc(12vh + ${stackOffset}px)`;
            const isLast = index === stages.length - 1;
            
            return (
              <div
                key={stage.num}
                className="sticky w-full"
                style={{
                  top: stickyTop,
                  zIndex: index,
                  marginBottom: isLast ? 0 : 'clamp(180px, 30vh, 360px)',
                }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 22, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex min-h-[350px] flex-col justify-between rounded-[1.5rem] border p-6 shadow-[0_20px_55px_rgba(15,23,42,0.12)] transition-transform duration-500 ease-out hover:scale-[1.01] sm:min-h-[380px] sm:rounded-[2rem] sm:p-9 lg:h-[410px] ${
                    stage.isDark ? 'border-brand-ink bg-brand-ink text-white' : 'border-black/10 bg-white text-brand-ink'
                  }`}
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between sm:mb-6">
                      <span className="text-4xl font-bold text-brand-primary sm:text-5xl">{stage.num}</span>
                      <div className={`grid h-12 w-12 place-items-center rounded-xl border shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl ${stage.isDark ? 'border-white/10 bg-white/10 text-brand-primary' : 'border-orange-100 bg-orange-50 text-brand-primary'}`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <span className="mb-2 block text-xs font-semibold tracking-wide text-brand-primary sm:mb-3">{stage.eyebrow}</span>
                    <h3 className={`mb-3 text-xl font-semibold leading-tight tracking-tight sm:mb-4 sm:text-3xl ${stage.isDark ? 'text-white' : 'text-brand-ink'}`}>{stage.title}</h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${stage.isDark ? 'text-white/80' : 'text-brand-slate'}`}>{stage.desc}</p>
                  </div>
                  <div className={`mt-6 border-t pt-4 text-xs font-semibold tracking-wide leading-relaxed text-brand-primary sm:mt-8 sm:pt-5 sm:text-sm ${stage.isDark ? 'border-white/10' : 'border-black/10'}`}>
                    {stage.foot}
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
