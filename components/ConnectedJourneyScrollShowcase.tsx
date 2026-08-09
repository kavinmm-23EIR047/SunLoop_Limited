'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const journeyProgress = useSpring(scrollYProgress, { stiffness: 42, damping: 30, mass: 0.9 });

  useMotionValueEvent(journeyProgress, 'change', (latest) => {
    setActiveStage(Math.min(stages.length - 1, Math.floor(latest * stages.length)));
  });

  const watermarkOpacity = useTransform(journeyProgress, [0, 0.5], [0.12, 0.04]);

  return (
    <section ref={containerRef} className="relative h-[360vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden border-y border-black/5 py-8">
        <motion.div style={{ opacity: watermarkOpacity }} className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="font-sans text-[12vw] font-black tracking-tighter text-brand-ink/10">one connected journey</span>
        </motion.div>

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-8 max-w-3xl space-y-2 text-center sm:mb-10">
            <span className="eyebrow inline-block">ONE CONNECTED JOURNEY</span>
            <h2 className="text-2xl text-brand-ink md:text-4xl">Start with what you need. Add what you want.</h2>
            <p className="text-xs leading-relaxed text-brand-slate sm:text-sm">
              A modular clean-energy growth path. Start with one system and expand when the time is right.
            </p>
          </div>

          <div className="relative mx-auto min-h-[390px] max-w-xl">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const active = index === activeStage;
              return (
                <motion.article
                  key={stage.num}
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : 24, scale: active ? 1 : 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 flex flex-col justify-between rounded-3xl border p-6 shadow-[0_18px_50px_rgba(36,36,36,0.1)] sm:p-8 ${
                    stage.isDark ? 'border-brand-ink bg-brand-ink text-white' : 'border-black/10 bg-white text-brand-ink'
                  }`}
                  aria-hidden={!active}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className={`text-4xl font-bold ${stage.isDark ? 'text-brand-primary' : 'text-brand-primary'}`}>{stage.num}</span>
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${stage.isDark ? 'border-white/10 bg-white/10 text-brand-primary' : 'border-orange-100 bg-orange-50 text-brand-primary'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-brand-primary">{stage.eyebrow}</span>
                    <h3 className={`mb-3 text-2xl leading-tight ${stage.isDark ? 'text-white' : 'text-brand-ink'}`}>{stage.title}</h3>
                    <p className={`text-sm leading-relaxed ${stage.isDark ? 'text-white/75' : 'text-brand-slate'}`}>{stage.desc}</p>
                  </div>
                  <div className={`mt-8 border-t pt-4 text-xs font-bold leading-relaxed text-brand-primary ${stage.isDark ? 'border-white/10' : 'border-black/10'}`}>
                    {stage.foot}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-primary shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 animate-ping rounded-full bg-brand-primary" /> SCROLL TO UNLOCK ECOSYSTEM
        </div>
      </div>
    </section>
  );
}
