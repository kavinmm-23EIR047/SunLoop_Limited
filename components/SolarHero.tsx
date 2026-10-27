'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const mobileSliderRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  const scrollToSlide = useCallback((index: number) => {
    const slider = mobileSliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-solution-slide]'));
    if (!slides.length) return;

    const nextIndex = (index + slides.length) % slides.length;
    const slide = slides[nextIndex];
    const left = slide.offsetLeft - slides[0].offsetLeft - (slider.clientWidth - slide.clientWidth) / 2;

    slider.scrollTo({ left, behavior: 'smooth' });
    setActiveSlide(nextIndex);
  }, []);

  useEffect(() => {
    if (sliderPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        const slider = mobileSliderRef.current;
        const slides = slider?.querySelectorAll<HTMLElement>('[data-solution-slide]');
        if (!slider || !slides?.length) return 0;

        const nextIndex = (current + 1) % slides.length;
        const slide = slides[nextIndex];
        const left = slide.offsetLeft - slides[0].offsetLeft - (slider.clientWidth - slide.clientWidth) / 2;
        slider.scrollTo({ left, behavior: 'smooth' });
        return nextIndex;
      });
    }, 4500);

    return () => window.clearInterval(timer);
  }, [sliderPaused]);

  const handleSliderScroll = useCallback(() => {
    const slider = mobileSliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll<HTMLElement>('[data-solution-slide]'));
    if (!slides.length) return;

    const sliderCenter = slider.getBoundingClientRect().left + slider.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.getBoundingClientRect().left + slide.clientWidth / 2;
      const distance = Math.abs(sliderCenter - slideCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveSlide(nearestIndex);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(max-width: 768px)"
              srcSet="/images/solar-hero-bg-mobile.jpg"
            />
            <motion.img
              src="/images/solar-hero-bg-4k.png"
              alt="Sunloop Energy solar carport canopy, BESS container, and EV charging plaza along Avinashi Road bypass in Coimbatore"
              className="absolute inset-0 h-full w-full object-cover object-center"
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
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-5 font-bold tracking-tight text-white leading-[1.1]"
            >
              Powering Tomorrow,{' '}
              <span className="text-[#E86526]">Sustainably.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal"
            >
              We design, build and manage solar power plants, energy storage systems and EV charging infrastructure through one AI energy management portal.
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

          {/* SOLUTIONS — DESKTOP COLLAGE, TABLET GRID, MOBILE SLIDER */}
          <motion.div
            variants={scaleIn(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#E86526]">
                  What We Do
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Intelligent Energy Solutions
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  Integrated solar, energy storage, EV charging and AI-powered energy management.
                </p>
              </div>
              <Link
                href="/solutions"
                className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-[#E86526] transition hover:gap-3 sm:inline-flex"
              >
                View All Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {(() => {
              const features = [
                {
                  icon: Sun,
                  title: 'Smart Solar Solutions',
                  desc: 'High-efficiency solar power plants for homes, commercial rooftops and utility-scale projects.',
                  href: '/products/solar-power',
                  badge: 'Solar PV',
                  image: '/images/residential-solar-pv-system-solution.png',
                },
                {
                  icon: BatteryCharging,
                  title: 'Energy Storage Systems',
                  desc: 'Reliable and modular lithium battery storage (5 kWh to 2 MWh) for 24/7 uninterrupted power.',
                  href: '/products/energy-storage',
                  badge: 'LiFePO4 ESS',
                  image: '/images/C&I Solar + Energy Storage Solution.png',
                },
                {
                  icon: Zap,
                  title: 'EV Charging Infrastructure',
                  desc: 'Fast AC and DC charging solutions (7.4 kW to 240 kW) for residential and commercial fleets.',
                  href: '/products/ev-charging',
                  badge: 'OCPP 1.6J',
                  image: '/images/commercial-solar-storage-ev-charging-solution.png',
                },
                {
                  icon: Cpu,
                  title: 'AI Energy Management',
                  desc: 'AI-powered monitoring, remote optimization and peak-shaving control with real-time analytics.',
                  href: '/ai-portal',
                  badge: 'Cloud AI',
                  image: '/images/ai-portal-robot-card.png',
                },
              ];

              return (
                <>
                  {/* DESKTOP: LARGE FEATURE + THREE RIGHT-HAND BANNERS */}
                  <div className="hidden grid-cols-3 gap-4 lg:grid lg:h-[500px] lg:grid-rows-3">
                    <Link
                      href={features[0].href}
                      className="group relative col-span-2 row-span-3 flex min-h-0 flex-col justify-between overflow-hidden rounded-[24px] bg-slate-900 p-6 xl:p-7"
                    >
                      <img
                        src={features[0].image}
                        alt={features[0].title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E86526] text-white">
                          <Sun className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800">
                          Solar PV
                        </span>
                      </div>

                      <div className="relative z-10 mt-auto max-w-lg pt-8">
                        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                          Clean energy for tomorrow
                        </span>
                        <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-white xl:text-4xl">
                          Smart Solar<br />Solutions
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-5 text-white/85">
                          {features[0].desc}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                          Explore Solution
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>

                    <div className="col-span-1 row-span-3 flex min-h-0 flex-col gap-3">
                      {features.slice(1).map((feature) => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          className="group relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden rounded-[20px] bg-[#F1F0EB] p-4 xl:p-5"
                        >
                          <div className="absolute inset-0">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              loading="lazy"
                              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
                          </div>

                          <div className="relative z-10 flex items-center justify-between gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#E86526] shadow-sm">
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-slate-600">
                              {feature.badge}
                            </span>
                          </div>

                          <div className="relative z-10 mt-2 max-w-[78%]">
                            <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900 xl:text-lg">
                              {feature.title}
                            </h3>
                            <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-600">
                              {feature.desc}
                            </p>
                            <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#E86526]">
                              Explore Solution
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* TABLET: TWO-COLUMN IMAGE GRID */}
                  <div className="hidden grid-cols-2 gap-4 sm:grid lg:hidden">
                    {features.map((feature, index) => (
                      <Link
                        key={feature.title}
                        href={feature.href}
                        className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[20px] bg-slate-100 p-4 ${index === 0 ? 'col-span-2 min-h-[280px]' : ''}`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/5' : 'bg-gradient-to-t from-white via-white/85 to-white/20'}`} />

                        <div className="relative z-10 flex items-center justify-between gap-3">
                          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${index === 0 ? 'bg-[#E86526] text-white' : 'bg-white text-[#E86526]'}`}>
                            <feature.icon className="h-5 w-5" />
                          </div>
                          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase text-slate-700">
                            {feature.badge}
                          </span>
                        </div>

                        <div className={`relative z-10 mt-6 max-w-sm ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                          <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                            {feature.title}
                          </h3>
                          <p className={`mt-2 text-sm leading-6 ${index === 0 ? 'text-white/85' : 'text-slate-600'}`}>
                            {feature.desc}
                          </p>
                          <div className={`mt-3 inline-flex items-center gap-2 text-sm font-semibold ${index === 0 ? 'text-white' : 'text-[#E86526]'}`}>
                            Explore Solution
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* MOBILE: HORIZONTAL SWIPEABLE BANNERS */}
                  <div className="-mx-4 sm:hidden">
                    <div
                      ref={mobileSliderRef}
                      onScroll={handleSliderScroll}
                      onTouchStart={() => setSliderPaused(true)}
                      onTouchEnd={() => setSliderPaused(false)}
                      onMouseEnter={() => setSliderPaused(true)}
                      onMouseLeave={() => setSliderPaused(false)}
                      className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                      aria-label="Energy solutions. Swipe horizontally to explore."
                    >
                      {features.map((feature, index) => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          data-solution-slide
                          className="group relative flex h-[260px] w-[84vw] max-w-[360px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[20px] bg-slate-100 p-4"
                        >
                          <img
                            src={feature.image}
                            alt={feature.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-active:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

                          <div className="relative z-10 flex items-center justify-between gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E86526] text-white">
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-700">
                              {feature.badge}
                            </span>
                          </div>

                          <div className="relative z-10 mt-auto max-w-[310px] pt-5">
                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-300">
                              Solution 0{index + 1}
                            </span>
                            <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
                              {feature.title}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">
                              {feature.desc}
                            </p>
                            <div className="mt-3 flex items-center justify-between border-t border-white/25 pt-3 text-sm font-semibold text-white">
                              Explore Solution
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-1 flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => scrollToSlide(activeSlide - 1)}
                        aria-label="Previous solution"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-orange-50 hover:text-[#E86526]"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                      </button>

                      <div className="flex items-center justify-center gap-1.5" aria-label={`Slide ${activeSlide + 1} of ${features.length}`}>
                        {features.map((feature, index) => (
                          <button
                            key={feature.title}
                            type="button"
                            onClick={() => scrollToSlide(index)}
                            aria-label={`Go to ${feature.title}`}
                            aria-current={activeSlide === index ? 'true' : undefined}
                            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-6 bg-[#E86526]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => scrollToSlide(activeSlide + 1)}
                        aria-label="Next solution"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-orange-50 hover:text-[#E86526]"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-5 flex justify-center">
                      <Link
                        href="/solutions"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E86526]"
                      >
                        View All Solutions
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>
    </>
  );
}
