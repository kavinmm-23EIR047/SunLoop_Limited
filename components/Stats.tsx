'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Leaf,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';

export default function SunloopWaySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">

      {/* Row 1: Text + Hero Illustration */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">

        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col justify-center lg:col-span-4 lg:pt-4">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-orange-600">
            10 Years of Energy Expertise · One Smarter Future
          </span>
          <div className="mt-2 h-[3px] w-8 rounded-full bg-orange-600" aria-hidden="true" />
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            We Didn't Just Start Today. <br />
            <span className="text-orange-600">We've Been Powering Progress for Over a Decade.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-600 font-normal">
            Sunloop Energy was started in 2016 by a dynamic team dedicated to transforming the way clean energy is generated, stored, managed, and consumed.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-600">
            Headquartered in Coimbatore, Tamil Nadu, we specialize in delivering intelligent solar power plants, lithium ESS energy storage, and smart EV charging infrastructure — all unified through our AI Energy Portal.
          </p>
          <a
            href="/company"
            className="mt-6 inline-flex items-center gap-1.5 text-sm md:text-base font-semibold text-orange-600 transition-colors hover:text-orange-700 min-h-[44px]"
          >
            More about Sunloop Energy <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
          </a>
        </div>

        {/* RIGHT COLUMN: Hero Illustration Only */}
        <div className="lg:col-span-8">
          <div className="relative h-[340px] w-full overflow-hidden rounded-[20px] bg-[#fbfaf9] border border-black/5 shadow-sm sm:h-[400px] lg:h-[500px]">
            <img
              src="/images/solar-card-illustration.png"
              alt="Illustration of a home with solar panels installed on the roof"
              className="absolute -bottom-1 left-0 h-[105%] w-[50%] object-contain object-left-bottom"
              loading="lazy"
            />
            <img
              src="/images/ev-card-illustration.png"
              alt="Illustration of an EV charging at a residential charging station"
              className="absolute -bottom-1 right-0 h-[105%] w-[58%] object-contain object-right-bottom mix-blend-multiply"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Stat Cards - Full Width */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2.2fr]">

        {/* Stat Card 1: 2016 */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col justify-between rounded-[16px] border border-black/5 bg-white p-4 shadow-sm"
        >
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-orange-600">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold tracking-tight text-neutral-900">
              2016
            </span>
            <span className="block mt-0.5 text-xs font-semibold text-orange-600">
              Established 2016
            </span>
            <p className="mt-1.5 text-xs text-neutral-500 leading-snug">
              Headquartered in Coimbatore, Tamil Nadu
            </p>
          </div>
        </motion.div>

        {/* Stat Card 2: 3-in-1 */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col justify-between rounded-[16px] border border-black/5 bg-white p-4 shadow-sm"
        >
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-orange-600">
            <Zap className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold tracking-tight text-neutral-900">
              3-in-1
            </span>
            <span className="block mt-0.5 text-xs font-semibold text-orange-600">
              Solutions
            </span>
            <p className="mt-1.5 text-xs text-neutral-500 leading-snug">
              Solar PV + ESS Storage + EV Chargers
            </p>
          </div>
        </motion.div>

        {/* AI Portal Platform Card */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-[16px] bg-[#121316] text-white shadow-md flex flex-col justify-between sm:col-span-2 lg:col-span-1"
        >
          {/* Full background image */}
          <img
            src="/images/ai-portal-robot-card.png"
            alt="Sunloop AI Portal interface showing real-time energy monitoring"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/80 to-transparent" />

          <div className="relative z-10 p-5 max-w-[60%]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium tracking-wide text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
              Robot Bot Online
            </span>

            <h3 className="mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
              AI Portal Platform
            </h3>
            <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
              Real-time telemetry and autonomous robot control for smarter operations.
            </p>

            <a
              href="/ai-portal"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-orange-600 px-3 py-1.5 text-xs font-semibold text-orange-500 transition-colors hover:bg-orange-600 hover:text-white min-h-[36px]"
            >
              Complimentary Platform <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Row 3: Bottom Features Bar - Full Width */}
      <div className="mt-5 grid grid-cols-2 gap-px rounded-[20px] border border-black/5 bg-black/5 shadow-sm overflow-hidden sm:grid-cols-4">
        {[
          {
            icon: Leaf,
            title: 'Clean & Sustainable',
            text: 'Driving the future with renewable energy.',
          },
          {
            icon: BarChart3,
            title: 'Smart & Intelligent',
            text: 'AI-powered energy management for efficiency.',
          },
          {
            icon: ShieldCheck,
            title: 'Reliable & Secure',
            text: 'Built for safety, reliability and long-term value.',
          },
          {
            icon: Users,
            title: 'Future Ready',
            text: 'Innovating today for a greener tomorrow.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 bg-white p-4 md:p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1 text-xs text-neutral-500 leading-snug">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
