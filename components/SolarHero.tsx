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
            src="/images/solar-hero-bg.png"
            alt="Solar PV, ESS Battery Container and EV Charging Infrastructure"
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 max-w-7xl pt-36 pb-20 lg:pt-44 lg:pb-24">
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 rounded-sm bg-brand-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-white mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Unified Solar · ESS · EV Ecosystem
            </motion.div>

            <motion.h1
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="visible"
              className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              Powering Tomorrow,{' '}
              <span className="hero-accent">Sustainably.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="hero-subtitle text-lg sm:text-xl md:text-2xl max-w-2xl mb-10"
            >
              Sunloop Energy designs, builds, and manages solar power plants,
              energy storage systems, and EV charging infrastructure — unified
              through one AI Energy Management Portal.
            </motion.p>

            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2.5 rounded-sm bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-brand-secondary transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-base font-bold text-brand-primary hover:bg-brand-bg-subtle transition-all duration-300"
              >
                Get a Quote
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp(0.8)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-8 border-t border-white/25 pt-8"
            >
              {[
                { value: '500+', label: 'Sites Deployed' },
                { value: '10 Yr', label: 'Energy Expertise' },
                { value: '24/7', label: 'AI Monitoring' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs font-bold text-white/80 uppercase tracking-wider">{stat.label}</div>
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
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
            <ChevronDown className="h-5 w-5 text-white/70" />
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
                className="group flex items-start gap-4 p-4 rounded-sm hover:bg-brand-bg-subtle transition-colors duration-200"
              >
                <div className="h-12 w-12 shrink-0 rounded-sm bg-brand-bg-subtle border-2 border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <strong className="block text-base font-bold text-brand-ink mb-1">{feature.title}</strong>
                  <p className="text-sm text-brand-slate leading-relaxed">{feature.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary mt-2 group-hover:gap-2 transition-all duration-200">
                    Learn More <ArrowRight className="h-4 w-4" />
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
