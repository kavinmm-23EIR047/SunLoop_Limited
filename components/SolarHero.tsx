'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, BatteryCharging, Zap, Cpu, ChevronDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, delay } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay } },
});

export default function SolarHero() {
  return (
    <>
      <section className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/solar-hero-bg-mobile.jpg"
            />
            <motion.img
              src="/images/solar-hero-bg-4k.png"
              alt="Solar PV arrays, ESS battery containers, and EV charging infrastructure powering sustainable energy"
              className="h-full w-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-7xl pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-3xl">
            {/* Trust Badge / Decade Pill — Sleek Frosted Glassmorphism */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs text-white shadow-lg mb-4 sm:mb-5 max-w-full"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#E86526] animate-pulse shrink-0" />
              <span className="font-bold text-[#FFA07A] text-[11px] sm:text-xs tracking-wide uppercase whitespace-nowrap">
                10+ Years
              </span>
              <span className="text-white/30 text-[10px]">|</span>
              <span className="text-white/90 font-medium text-[11px] sm:text-xs truncate">
                A Decade of Clean Energy Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="visible"
              className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-5 font-extrabold tracking-tight leading-[1.12]"
            >
              Powering Tomorrow,{' '}
              <span className="hero-accent">Sustainably.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal"
            >
              Solar power plants, energy storage systems, and EV charging
              infrastructure — designed, built, and managed through one
              AI energy management portal.
            </motion.p>

            {/* CTA Buttons — Horizontal Side-by-Side */}
            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center gap-2.5 sm:gap-4 flex-wrap"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-brand-primary px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-[#c95315] transition-all duration-300 min-h-[44px] whitespace-nowrap"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 min-h-[44px] whitespace-nowrap"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeIn(1.2)}
          initial="hidden"
          animate="visible"
          className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="text-[11px] font-semibold tracking-wide text-white/60">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-4 w-4 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* CONNECTED RADIUS CARDS SECTION (OUTSIDE HERO) */}
      <section className="relative z-20 bg-[#FAFAF7] pt-4 pb-14 sm:pb-20 border-b border-black/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          
          {/* CONNECTED FLOATING STATS RADIUS BAR */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative -mt-14 sm:-mt-16 z-30 mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-[0_15px_40px_rgba(0,0,0,0.07)] p-4 sm:p-7 grid grid-cols-3 divide-x divide-black/10"
          >
            <div className="px-2 sm:px-6 text-center sm:text-left">
              <div className="text-xl sm:text-3xl font-extrabold text-[#E86526] tracking-tight">500+</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-700 mt-0.5 uppercase tracking-wide">Sites Deployed</div>
            </div>
            <div className="px-2 sm:px-6 text-center sm:text-left">
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">10+ Yrs</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-700 mt-0.5 uppercase tracking-wide">Industry Leadership</div>
            </div>
            <div className="px-2 sm:px-6 text-center sm:text-left">
              <div className="text-xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">24/7</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-700 mt-0.5 uppercase tracking-wide">AI Monitoring</div>
            </div>
          </motion.div>

          {/* 4 CORE PILLARS RADIUS CARDS */}
          <motion.div
            variants={scaleIn(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              {
                icon: Sun,
                title: 'Smart Solar Solutions',
                desc: 'High-efficiency solar power plants for homes, commercial rooftops, and utility-scale projects.',
                href: '/products/solar-power',
                badge: 'Solar PV',
              },
              {
                icon: BatteryCharging,
                title: 'Energy Storage Systems',
                desc: 'Reliable and modular lithium battery storage (5 kWh to 2 MWh) for 24/7 uninterrupted power.',
                href: '/products/energy-storage',
                badge: 'LiFePO4 ESS',
              },
              {
                icon: Zap,
                title: 'EV Charging Infrastructure',
                desc: 'Fast AC & DC charging solutions (7.4 kW to 240 kW) engineered for residential and commercial fleets.',
                href: '/products/ev-charging',
                badge: 'OCPP 1.6J',
              },
              {
                icon: Cpu,
                title: 'AI Energy Management',
                desc: 'Intelligent monitoring, remote optimization, and peak-shaving control with real-time analytics.',
                href: '/ai-portal',
                badge: 'Cloud AI',
              },
            ].map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative flex flex-col justify-between p-6 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.08] hover:border-[#E86526] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E86526] group-hover:bg-[#E86526] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wide group-hover:bg-orange-50 group-hover:text-[#E86526] transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  <strong className="block text-base font-bold text-slate-900 mb-2 group-hover:text-[#E86526] transition-colors">
                    {feature.title}
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#E86526]">
                  <span>Explore Solution</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
