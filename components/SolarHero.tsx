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
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
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
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-7xl pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24">
          <div className="max-w-3xl">
            {/* Trust Badge / Decade Pill — Sleek Frosted Glassmorphism */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs text-white shadow-lg mb-6 sm:mb-8 max-w-full"
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
              className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 font-extrabold tracking-tight leading-[1.12]"
            >
              Powering Tomorrow,{' '}
              <span className="hero-accent">Sustainably.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal"
            >
              Solar power plants, energy storage systems, and EV charging
              infrastructure — designed, built, and managed through one
              AI energy management portal.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#c95315] transition-all duration-300 min-h-[44px]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 min-h-[44px]"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={fadeUp(0.8)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-3 sm:gap-10 border-t border-white/20 pt-6 sm:pt-8"
            >
              {[
                { value: '500+', label: 'Sites Deployed' },
                { value: '10+ Yrs', label: 'Industry Leadership' },
                { value: '24/7', label: 'AI Monitoring' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white/70 tracking-wide mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeIn(1.2)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs font-semibold tracking-wide text-white/60">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-20 bg-white border-b border-brand-border">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 py-10 sm:py-14">
          <motion.div
            variants={scaleIn(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Sun, title: 'Smart Solar Solutions', desc: 'High-efficiency solar power plants for homes, businesses, and industries.', href: '/products/solar-power' },
              { icon: BatteryCharging, title: 'Energy Storage Systems', desc: 'Reliable and scalable energy storage for uninterrupted power.', href: '/products/energy-storage' },
              { icon: Zap, title: 'EV Charging Infrastructure', desc: 'Future-ready EV charging solutions for a sustainable tomorrow.', href: '/products/ev-charging' },
              { icon: Cpu, title: 'AI Energy Management', desc: 'Intelligent monitoring and control with real-time insights.', href: '/ai-portal' },
            ].map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200 min-h-[44px]"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E86526]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-slate-900 mb-1">{feature.title}</strong>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary mt-2 group-hover:gap-2 transition-all duration-200">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
