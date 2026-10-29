'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Sun, BatteryCharging, Zap, Cpu, ChevronDown } from 'lucide-react';
import { CountUp } from './CountUp';

const heroSlides = [
  {
    image: '/images/solar-hero-bg.webp',
    mobileImage: '/images/solar-hero-bg-mobile.webp',
    alt: 'Sunloop solar carport, energy storage and EV charging hub',
    label: 'Solar / Storage / EV charging',
  },
  {
    image: '/images/india-solar-storage-ev-hero.webp',
    alt: 'Integrated solar, battery storage and EV charging installation',
    label: 'Integrated energy systems',
  },
  {
    image: '/images/india-hero-ess-banner.webp',
    alt: 'Commercial solar installation with battery energy storage',
    label: 'Solar + battery storage',
  },
  {
    image: '/images/india-hero-ev-banner.webp',
    alt: 'EV charging infrastructure powered by clean energy',
    label: 'Clean EV charging',
  },
];

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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      heroSlides.forEach((slide, index) => {
        if (index === activeHeroSlide) return;
        const image = new window.Image();
        image.decoding = 'async';
        image.fetchPriority = 'low';
        image.src = slide.image;

        if (slide.mobileImage) {
          const mobileImage = new window.Image();
          mobileImage.decoding = 'async';
          mobileImage.fetchPriority = 'low';
          mobileImage.src = slide.mobileImage;
        }
      });
    }, 700);

    return () => window.clearTimeout(timer);
  }, [activeHeroSlide]);

  useEffect(() => {
    if (heroPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [heroPaused]);

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
      <section
        className="relative flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden sm:min-h-[68vh] lg:min-h-[68vh]"
        role="region"
        aria-label="Featured clean energy solutions"
        aria-roledescription="carousel"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
        onFocusCapture={() => setHeroPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeroPaused(false);
        }}
      >
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.picture
              key={heroSlides[activeHeroSlide].image}
              className="absolute inset-0 block h-full w-full"
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {heroSlides[activeHeroSlide].mobileImage && (
                <source media="(max-width: 768px)" srcSet={heroSlides[activeHeroSlide].mobileImage} />
              )}
              <img
                src={heroSlides[activeHeroSlide].image}
                alt={heroSlides[activeHeroSlide].alt}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority={activeHeroSlide === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            </motion.picture>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent md:via-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/35 sm:hidden" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-8 sm:py-12 lg:py-12">
          <div className="mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-2xl flex-col justify-center gap-6 text-center sm:mx-0 sm:min-h-0 sm:justify-start sm:gap-0 sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:mb-6 sm:justify-start">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold text-brand-ink shadow-lg backdrop-blur-md sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                10+ years in clean energy
              </motion.span>
              <motion.span
                key={activeHeroSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
                className="inline-flex items-center rounded-full border border-white/30 bg-black/25 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-xs"
              >
                {heroSlides[activeHeroSlide].label}
              </motion.span>
            </div>

            {/* Headline */}
            <div className="py-0 sm:my-0 sm:py-0">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                className="home-hero-title mb-0 whitespace-normal text-[clamp(2.25rem,9vw,3.1rem)] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:mb-4 sm:text-5xl sm:leading-[1.04] md:text-6xl lg:text-7xl"
              >
                Clean energy for a<span className="hidden sm:inline">{' '}</span><br className="sm:hidden" />
                <motion.span
                  key={activeHeroSlide}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
                  className="inline-block text-[#FF874A]"
                >
                  brighter future.
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.48 }}
                className="mx-auto mt-5 w-full max-w-[32ch] whitespace-normal break-words px-2 text-center text-sm font-medium leading-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:hidden"
              >
                Powering smarter mobility and sustainable spaces.
              </motion.p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.58 }}
              className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-6 sm:justify-start"
              role="group"
              aria-label="Choose hero image"
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveHeroSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${slide.label}`}
                  aria-pressed={activeHeroSlide === index}
                  className={`h-1.5 rounded-full border border-white/70 transition-all duration-300 ${activeHeroSlide === index ? 'w-7 bg-brand-primary' : 'w-1.5 bg-white/70 hover:bg-white'}`}
                />
              ))}
              <span className="ml-1 text-[10px] font-medium tracking-wide text-white/85">
                {String(activeHeroSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.72 }}
              className="flex w-full flex-row flex-nowrap items-center justify-center gap-2 sm:w-auto sm:justify-start sm:gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-brand-primary px-3 py-3 text-[13px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#c95315] sm:min-h-[44px] sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:min-h-[44px] sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Explore Solutions
              </Link>
            </motion.div>

            </div>

          </div>
        </div>

        <motion.div
          variants={fadeIn(1.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
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
      <section className="relative z-20 bg-[#FAFAF7] pt-2 pb-6 sm:pb-8 border-b border-black/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          
          {/* CONNECTED FLOATING STATS RADIUS BAR */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="stats-border-pulse relative -mt-14 sm:-mt-16 z-30 mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl bg-white border border-orange-200 shadow-[0_15px_40px_rgba(0,0,0,0.07)] p-4 sm:p-7 grid grid-cols-3 divide-x divide-black/10"
          >
            <div className="px-2 sm:px-6 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-medium text-[#E86526] tracking-tight"><CountUp end={500} suffix="+" /></div>
              <div className="mt-0.5 whitespace-nowrap text-[9px] font-medium uppercase tracking-normal text-slate-700 sm:text-xs sm:tracking-wide">Sites Deployed</div>
            </div>
            <div className="px-2 sm:px-6 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight"><CountUp end={10} suffix="+ Yrs" /></div>
              <div className="mt-0.5 whitespace-nowrap text-[9px] font-medium uppercase tracking-normal text-slate-700 sm:text-xs sm:tracking-wide">Industry Leadership</div>
            </div>
            <div className="px-2 sm:px-6 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-medium text-emerald-600 tracking-tight"><CountUp end={24} suffix="/7" /></div>
              <div className="mt-0.5 whitespace-nowrap text-[9px] font-medium uppercase tracking-normal text-slate-700 sm:text-xs sm:tracking-wide">AI Monitoring</div>
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
                  image: '/images/india-solar-power-plant.jpg',
                },
                {
                  icon: BatteryCharging,
                  title: 'Energy Storage Systems',
                  desc: 'Reliable and modular lithium battery storage (5 kWh to 2 MWh) for 24/7 uninterrupted power.',
                  href: '/products/energy-storage',
                  badge: 'LiFePO4 ESS',
                  image: '/images/india-hero-ess-banner.webp',
                },
                {
                  icon: Zap,
                  title: 'EV Charging Infrastructure',
                  desc: 'Fast AC and DC charging solutions (7.4 kW to 240 kW) for residential and commercial fleets.',
                  href: '/products/ev-charging',
                  badge: 'OCPP 1.6J',
                  image: '/images/india-hero-ev-banner.webp',
                },
                {
                  icon: Cpu,
                  title: 'AI Energy Management',
                  desc: 'AI-powered monitoring, remote optimization and peak-shaving control with real-time analytics.',
                  href: '/ai-portal',
                  badge: 'Cloud AI',
                  image: '/images/india-hero-ai-banner.jpg',
                },
              ];

              return (
                <>
                  {/* DESKTOP: LARGE FEATURE + THREE RIGHT-HAND BANNERS */}
                  <div className="hidden grid-cols-3 gap-4 lg:grid lg:h-[500px] lg:grid-rows-3">
                    <Link
                      href={features[0].href}
                      className="group relative col-span-2 row-span-3 flex min-h-0 flex-col justify-between overflow-hidden rounded-[24px] border border-orange-100/40 bg-slate-900 p-6 shadow-sm xl:p-7"
                    >
                      <img
                        src={features[0].image}
                        alt={features[0].title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E86526] text-white shadow-md">
                          <Sun className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                          Solar PV
                        </span>
                      </div>

                      <div className="relative z-10 mt-auto space-y-2">
                        <span className="inline-flex rounded-md bg-[#E86526] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-xs">
                          Clean Energy for Tomorrow
                        </span>
                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-white xl:text-3xl drop-shadow-md">
                          {features[0].title}
                        </h3>
                        <div className="inline-flex items-center gap-2 pt-1 text-xs font-semibold text-orange-400 transition-colors group-hover:text-white">
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
                          className="group relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden rounded-[20px] border border-orange-100/40 bg-slate-900 p-4 shadow-sm xl:p-5"
                        >
                          <div className="absolute inset-0">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              loading="lazy"
                              className="h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/25 to-transparent" />
                          </div>

                          <div className="relative z-10 flex items-center justify-between gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E86526] text-white shadow-md">
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-md">
                              {feature.badge}
                            </span>
                          </div>

                          <div className="relative z-10 mt-auto flex items-end justify-between gap-2 pt-2">
                            <h3 className="text-sm font-bold leading-snug tracking-tight text-white drop-shadow-md xl:text-base">
                              {feature.title}
                            </h3>
                            <div className="shrink-0 flex items-center text-xs font-semibold text-orange-400 transition-colors group-hover:text-white">
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                        className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[20px] border border-orange-100/40 bg-slate-900 p-4 ${index === 0 ? 'col-span-2 min-h-[280px]' : ''}`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                        <div className="relative z-10 flex items-center justify-between gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E86526] text-white shadow-sm">
                            <feature.icon className="h-5 w-5" />
                          </div>
                          <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-md">
                            {feature.badge}
                          </span>
                        </div>

                        <div className="relative z-10 mt-auto flex items-end justify-between gap-2 pt-4">
                          <div>
                            {index === 0 && (
                              <span className="mb-1.5 inline-flex rounded-md bg-[#E86526] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                Clean Energy for Tomorrow
                              </span>
                            )}
                            <h3 className="text-lg font-bold leading-tight text-white drop-shadow-md sm:text-xl">
                              {feature.title}
                            </h3>
                          </div>
                          <div className="shrink-0 flex items-center text-xs font-semibold text-orange-400 transition-colors group-hover:text-white">
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
                          className="group relative flex h-[260px] w-[84vw] max-w-[360px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[20px] border border-orange-100/40 bg-slate-900 p-4"
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
                          <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-md">
                              {feature.badge}
                            </span>
                          </div>

                          <div className="relative z-10 mt-auto flex items-end justify-between gap-2 pt-2">
                            <div>
                              <span className="mb-1 inline-flex rounded-md bg-[#E86526] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                Solution 0{index + 1}
                              </span>
                              <h3 className="text-base font-bold leading-tight text-white drop-shadow-md">
                                {feature.title}
                              </h3>
                            </div>
                            <div className="shrink-0 flex items-center text-xs font-semibold text-orange-400 group-active:text-white">
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
