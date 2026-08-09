'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import { Reveal } from '../../../components/UI';

const integratedSolutions = [
  {
    number: '01',
    title: 'Residential Solar + Storage + EV Charging Solution',
    description: 'SunEvo’s all-in-one home energy solution integrates PV inverters, energy storage systems, and EV chargers, enabling your home to be fully powered by clean energy—day or night, rain or shine.',
    image: '/images/Residential Solar + Storage + EV Charging Solution.png',
    imageAlt: 'Residential solar, storage and EV charging solution',
  },
  {
    number: '02',
    title: 'Commercial Solar + Storage + EV Charging Solution',
    description: 'Reduce traditional energy consumption and lower charging costs by providing customers with a one-stop zero-carbon charging station that integrates solar generation, energy storage, and EV charging, enabling higher returns.',
    image: '/images/Commercial Solar + Storage + EV Charging Solution.png',
    imageAlt: 'Commercial solar, storage and EV charging solution',
  },
];

export default function SolarStorageEVChargingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 pt-16 font-sans">
      <section className="relative flex min-h-[390px] items-center overflow-hidden bg-brand-ink text-white sm:min-h-[460px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url('/images/ecosystem-hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <Reveal className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-apricot"><Zap className="h-3.5 w-3.5" /> 03 / Charge</span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Solar &amp; Storage &amp; EV Charging Solution</h1>
            <p className="text-sm leading-relaxed text-white/90 md:text-base">A smart, future-proof energy ecosystem that unifies clean solar generation, battery storage, and EV charging infrastructure.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl space-y-16 px-4">
          {integratedSolutions.map((solution, index) => (
            <div key={solution.number} className="grid items-center gap-8 border-b border-black/[0.07] pb-16 last:border-0 last:pb-0 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <span className="eyebrow inline-block">SOLUTION {solution.number}</span>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-ink md:text-3xl">{solution.title}</h2>
                <p className="text-sm leading-relaxed text-brand-slate">{solution.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 pt-2 text-xs font-bold text-brand-primary hover:underline">Learn More <ArrowUpRight className="h-3.5 w-3.5" /></Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className={index % 2 === 1 ? 'md:order-2' : ''}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-md">
                  <img src={solution.image} alt={solution.imageAlt} className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-ink px-3 py-1 text-[10px] font-bold text-white shadow-sm">SOLUTION {solution.number}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
