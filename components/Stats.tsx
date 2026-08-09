'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Grid2X2, Sun, Zap } from 'lucide-react';

const cardClass = 'relative overflow-hidden rounded-3xl border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(36,36,36,0.08)] sm:p-8';

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <motion.article whileHover={{ y: -4 }} className={cardClass}>
        <div className="relative z-10">
          <div className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-orange-50 text-brand-primary shadow-[0_8px_24px_rgba(232,101,38,0.18)]">
            <Sun className="h-7 w-7" />
          </div>
          <div className="h-px w-12 bg-brand-primary" />
          <div className="mt-5 text-5xl font-bold tracking-tight text-brand-ink">2016</div>
          <h3 className="mt-3 text-base font-bold text-brand-ink">Est. 2016</h3>
          <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-brand-slate">Headquartered in Coimbatore, Tamil Nadu</p>
        </div>
        <div className="pointer-events-none absolute -bottom-6 -right-8 h-40 w-56 opacity-80">
          <img src="/images/solar-panels.png" alt="Solar panels" className="h-full w-full object-contain object-right-bottom" />
        </div>
        <div className="absolute right-7 top-8 grid grid-cols-4 gap-1 opacity-60">
          {Array.from({ length: 16 }).map((_, i) => <span key={i} className="h-1 w-1 rounded-full bg-brand-primary" />)}
        </div>
      </motion.article>

      <motion.article whileHover={{ y: -4 }} className={cardClass}>
        <div className="relative z-10">
          <div className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-orange-50 text-brand-primary shadow-[0_8px_24px_rgba(232,101,38,0.18)]">
            <Zap className="h-7 w-7" />
          </div>
          <div className="h-px w-12 bg-brand-primary" />
          <div className="mt-5 text-5xl font-bold tracking-tight text-brand-ink">3-in-1</div>
          <h3 className="mt-3 text-base font-bold text-brand-ink">Solutions</h3>
          <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-brand-slate">Solar PV + ESS Storage + EV Chargers</p>
        </div>
        <div className="pointer-events-none absolute -bottom-4 -right-5 h-44 w-52 opacity-80">
          <img src="/images/hero-evcharger.png" alt="EV charging station" className="h-full w-full object-contain object-right-bottom" />
        </div>
        <div className="absolute right-7 top-8 grid grid-cols-4 gap-1 opacity-60">
          {Array.from({ length: 16 }).map((_, i) => <span key={i} className="h-1 w-1 rounded-full bg-brand-primary" />)}
        </div>
      </motion.article>

      <motion.article whileHover={{ y: -4 }} className="relative min-h-[280px] overflow-hidden rounded-3xl border border-brand-ink bg-brand-ink p-7 text-white shadow-[0_22px_60px_rgba(36,36,36,0.22)] sm:col-span-2 sm:p-8">
        <div className="relative z-10 max-w-[340px]">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-brand-primary/40 bg-brand-primary/10 text-brand-primary">
              <Bot className="h-6 w-6" />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-primary" /> ROBOT BOT ONLINE
            </span>
          </div>
          <div className="h-px w-12 bg-brand-primary" />
          <h3 className="mt-5 text-3xl font-bold text-white">AI Portal Platform</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">Real-time telemetry &amp; autonomous robot control</p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary">
            Complimentary Platform <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
        <div className="absolute -bottom-10 right-[-8%] hidden h-[290px] w-[62%] overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:block">
          <img src="/images/connected-portal.png" alt="Sunloop AI portal dashboard" className="h-full w-full object-cover object-left-top opacity-80" />
        </div>
        <Grid2X2 className="absolute bottom-7 right-7 h-6 w-6 text-brand-primary/60 md:hidden" />
      </motion.article>
    </div>
  );
}
