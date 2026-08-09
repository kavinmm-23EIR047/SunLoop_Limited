'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, BatteryCharging } from 'lucide-react';
import { Reveal } from '../../../components/UI';

const storageSolutions = [
  {
    number: '01',
    title: 'Residential Solar + Storage System Solution',
<<<<<<< HEAD
    description: 'Store daytime solar energy for use after sunset, with dependable backup power for the moments that matter.',
    image: '/images/residential-energy.png',
=======
    description: 'SunEvo Smart Home PV and Energy Storage System provides an all-in-one solution that covers power generation, energy storage, charging, and power consumption. With efficiency and safety at its core, it delivers clean energy to more households, empowering a better, smarter, and more sustainable future.',
    image: '/images/Residential Solar + Storage System Solution.jpg',
>>>>>>> 9dcb0dd4328201b294c11e7843bec6e038fbdbef
    imageAlt: 'Residential solar and battery storage system',
  },
  {
    number: '02',
    title: 'C&I Solar + Energy Storage Solution',
<<<<<<< HEAD
    description: 'Combine solar and storage to reduce peak-demand costs, improve resilience, and use more of the energy you generate.',
    image: '/images/commercial-energy.png',
=======
    description: 'Maximize energy utilization efficiency with an intelligent solar-plus-storage hybrid system. Seamlessly integrate solar power, batteries, and the grid to achieve uninterrupted power supply, reduced energy costs, and sustainable energy management.',
    image: '/images/C&I Solar + Energy Storage Solution.png',
>>>>>>> 9dcb0dd4328201b294c11e7843bec6e038fbdbef
    imageAlt: 'Commercial solar and energy storage system',
  },
  {
    number: '03',
    title: 'Utility-Scale Solar + Energy Storage Solution',
<<<<<<< HEAD
    description: 'Large-scale storage supports renewable generation, grid stability, and predictable energy supply.',
    image: '/images/solar-hero-bg-realistic.png',
=======
    description: 'By integrating solar and storage, the system enhances renewable energy utilization and ensures stable and reliable grid support.',
    image: '/images/Utility-Scale Solar + Energy Storage Solution.jpg',
>>>>>>> 9dcb0dd4328201b294c11e7843bec6e038fbdbef
    imageAlt: 'Utility-scale solar and energy storage solution',
  },
];

export default function SolarStoragePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 pt-16 font-sans">
      <section className="relative flex min-h-[460px] items-center overflow-hidden bg-brand-ink text-white sm:min-h-[560px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url('/images/hero-ess.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <Reveal className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-apricot">
              <BatteryCharging className="h-3.5 w-3.5" /> 02 / Store
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Solar &amp; Storage Solution</h1>
            <p className="text-sm leading-relaxed text-white/90 md:text-base">A Solar &amp; Storage Solution combines photovoltaic systems with battery storage to deliver resilient, efficient, and sustainable power.</p>
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl space-y-16 px-4">
          {storageSolutions.map((solution, index) => (
            <Reveal key={solution.number} className="grid items-center gap-8 border-b border-black/[0.07] pb-16 last:border-0 last:pb-0 md:grid-cols-2 md:gap-12">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm">
                  <img src={solution.image} alt={solution.imageAlt} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-ink px-3 py-1 text-[10px] font-bold text-white shadow-sm">SOLUTION {solution.number}</span>
                </div>
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
=======
      <section className="py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl space-y-16 px-4">
          {storageSolutions.map((solution, index) => (
            <div key={solution.number} className="grid items-center gap-8 border-b border-black/[0.07] pb-16 last:border-0 last:pb-0 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
>>>>>>> 9dcb0dd4328201b294c11e7843bec6e038fbdbef
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
