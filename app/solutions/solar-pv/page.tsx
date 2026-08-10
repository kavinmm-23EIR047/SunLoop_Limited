'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sun } from 'lucide-react';
import { Reveal } from '../../../components/UI';

const solarPVSolutions = [
  {
    number: '01',
    title: 'Residential Solar PV System Solution',
    description: 'Transform your home into a powerhouse with Sunloop’s residential PV system, harnessing the power of the sun to provide sustainable and green electricity for your life.',
    image: '/images/Residential Solar PV System Solution.png',
    imageAlt: 'Residential rooftop solar PV system',
  },
  {
    number: '02',
    title: 'Commercial & Industrial Solar PV System Solution',
    description: 'The high-performance commercial PV system from Sunloop can lower energy costs and carbon emissions of your office building or commercial building.',
    image: '/images/Commercial & Industrial Solar PV System Solution.jpg',
    imageAlt: 'Commercial and industrial solar PV system',
  },
  {
    number: '03',
    title: 'Utility-Scale PV Power Plant Solutions',
    description: 'Designed to adapt to diverse environments such as deserts, plateaus, and coastal regions, our solutions enhance power generation efficiency while reducing O&M costs. With lower LCOE and advanced grid-forming capabilities, we empower the stable operation of the next-generation power system.',
    image: '/images/solar-hero-bg-realistic.png',
    imageAlt: 'Utility-scale solar PV power plant',
  },
];

export default function SolarPVSolutionPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 pt-16 font-sans">
      <section className="relative w-full">
        {/* Native Image for perfect scaling on desktop */}
        <img
          src="/images/solar-panels.png"
          alt="Solar PV System Solutions"
          className="w-full h-[500px] lg:h-auto lg:max-h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container relative z-10 mx-auto max-w-5xl px-4">
            <Reveal className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-apricot">
                <Sun className="h-3.5 w-3.5" /> Solar PV Solutions
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Solar PV System Solutions</h1>
              <p className="text-sm leading-relaxed text-white/90 md:text-base">
                Clean, reliable solar power systems designed for homes, businesses, industry, and utility-scale generation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl space-y-16 px-4">
          {solarPVSolutions.map((solution, index) => (
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
                <Link href="/contact" className="inline-flex items-center gap-1 pt-2 text-xs font-bold text-brand-primary hover:underline">
                  Discuss Your Project <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
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
                  <span className="absolute left-4 top-4 rounded-full bg-brand-ink px-3 py-1 text-[10px] font-bold text-white shadow-sm">
                    SOLUTION {solution.number}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
