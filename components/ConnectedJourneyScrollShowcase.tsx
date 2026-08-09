'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sun, Zap, CarFront, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface StageCardData {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  foot: string;
  icon: React.ElementType;
  isDark?: boolean;
}

const stagesData: StageCardData[] = [
  {
    num: '01',
    eyebrow: 'PHASE ONE',
    title: 'Start Today',
    desc: 'Purchase any single solution that fits your current operational needs — whether Solar PV, Battery ESS, or EV Fast Chargers.',
    foot: 'Solar / Storage / EV → Includes Complimentary AI Portal',
    icon: Sun,
  },
  {
    num: '02',
    eyebrow: 'PHASE TWO',
    title: 'Add When You Need',
    desc: 'Expand with Energy Storage Systems (ESS) when power backup, load shaving, or zero-outage security is required.',
    foot: 'Solar + ESS → Automated Peak-Shaving Active',
    icon: Zap,
  },
  {
    num: '03',
    eyebrow: 'PHASE THREE',
    title: 'Expand Further',
    desc: 'Integrate EV Charging Infrastructure when driving electric vehicles or monetizing commercial parking spaces.',
    foot: 'Solar + ESS + EV → Smart Microgrid Control',
    icon: CarFront,
  },
  {
    num: '04',
    eyebrow: 'COMPLETE ECOSYSTEM',
    title: 'One Ecosystem. Endless Benefits.',
    desc: 'All 3 pillars synchronized in real-time under Sunloop AI Energy Management Portal for maximum ROI & sustainability.',
    foot: 'Smarter Decisions · Peak Savings · Greener Tomorrow',
    icon: Sparkles,
    isDark: true,
  },
];

export default function ConnectedJourneyScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Staggered card reveals as user scrolls down
  const rawOpacity1 = useTransform(scrollYProgress, [0.05, 0.22], [0.2, 1]);
  const opacity1 = useSpring(rawOpacity1, { stiffness: 100, damping: 20 });
  const rawY1 = useTransform(scrollYProgress, [0.05, 0.22], [30, 0]);
  const y1 = useSpring(rawY1, { stiffness: 100, damping: 20 });

  const rawOpacity2 = useTransform(scrollYProgress, [0.2, 0.42], [0, 1]);
  const opacity2 = useSpring(rawOpacity2, { stiffness: 100, damping: 20 });
  const rawY2 = useTransform(scrollYProgress, [0.2, 0.42], [40, 0]);
  const y2 = useSpring(rawY2, { stiffness: 100, damping: 20 });

  const rawOpacity3 = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const opacity3 = useSpring(rawOpacity3, { stiffness: 100, damping: 20 });
  const rawY3 = useTransform(scrollYProgress, [0.4, 0.62], [40, 0]);
  const y3 = useSpring(rawY3, { stiffness: 100, damping: 20 });

  const rawOpacity4 = useTransform(scrollYProgress, [0.6, 0.82], [0, 1]);
  const opacity4 = useSpring(rawOpacity4, { stiffness: 100, damping: 20 });
  const rawY4 = useTransform(scrollYProgress, [0.6, 0.82], [40, 0]);
  const y4 = useSpring(rawY4, { stiffness: 100, damping: 20 });

  const cardAnimations = [
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
    { opacity: opacity4, y: y4 },
  ];

  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.5], [0.12, 0.04]);

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-[#FAFAF3]">
      {/* Sticky Stage */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden border-y border-black/5 py-8">
        {/* Background Watermark */}
        <motion.div
          style={{ opacity: watermarkOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        >
          <span className="font-sans text-[12vw] font-black tracking-tighter text-brand-ink/10">
            one connected journey
          </span>
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          {/* Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-1.5">
            <span className="eyebrow inline-block">ONE CONNECTED JOURNEY</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-ink">
              Start with what you need. Add what you want.
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate font-normal">
              Modular 3-in-1 clean energy growth path. Purchase any 1 system initially and get our complimentary AI Powered Portal.
            </p>
          </div>

          {/* 4 Cards Grid - Spread & Reveal on Scroll */}
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stagesData.map((stage, idx) => {
              const IconComp = stage.icon;
              const anim = cardAnimations[idx];

              return (
                <motion.div
                  key={stage.num}
                  style={{
                    opacity: anim.opacity,
                    y: anim.y,
                  }}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                    stage.isDark
                      ? 'bg-[#0F172A] text-white border border-white/15 shadow-[0_20px_50px_rgba(15,23,42,0.25)] ring-1 ring-white/10'
                      : 'bg-white text-brand-ink border border-black/[0.08] shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-2xl'
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                          stage.isDark ? 'text-[#E86526]' : 'text-brand-primary'
                        }`}
                      >
                        {stage.num}
                      </span>
                      <div
                        className={`grid h-11 w-11 place-items-center rounded-2xl ${
                          stage.isDark
                            ? 'bg-white/10 text-[#E86526] border border-white/10'
                            : 'bg-orange-50 text-brand-primary border border-orange-100'
                        }`}
                      >
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.14em] block mb-1.5 ${
                        stage.isDark ? 'text-[#E86526]' : 'text-brand-primary'
                      }`}
                    >
                      {stage.eyebrow}
                    </span>

                    <h3 className={`text-xl font-bold tracking-tight mb-2.5 leading-snug ${stage.isDark ? 'text-white' : 'text-brand-ink'}`}>
                      {stage.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm font-normal leading-relaxed ${
                        stage.isDark ? 'text-white/85' : 'text-brand-slate'
                      }`}
                    >
                      {stage.desc}
                    </p>
                  </div>

                  {/* Footer Tagline */}
                  <div
                    className={`mt-6 border-t pt-4 text-[11px] font-bold leading-relaxed ${
                      stage.isDark
                        ? 'border-white/10 text-[#E86526]'
                        : 'border-black/[0.06] text-[#E86526]'
                    }`}
                  >
                    {stage.foot}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-white/90 border border-black/10 px-4 py-1.5 backdrop-blur-md shadow-xs text-[10px] font-bold text-brand-primary tracking-widest uppercase">
          <span className="h-2 w-2 rounded-full bg-[#E86526] animate-ping" /> SCROLL TO UNLOCK ECOSYSTEM
        </div>
      </div>
    </div>
  );
}
