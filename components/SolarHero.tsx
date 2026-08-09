'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ShieldCheck, Zap, Leaf, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from './UI';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolarHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<SVGSVGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Ensure site header and robot assistant are always visible and interactive
      gsap.set('#site-header, #robot-assistant', { opacity: 1, pointerEvents: 'auto' });

      // Target position in upper-left clear sky area (~150px X, ~110px Y) avoiding all text/badges
      const isMobile = window.innerWidth < 768;
      const targetX = isMobile ? window.innerWidth * -0.25 : window.innerWidth * -0.32;
      const targetY = isMobile ? window.innerHeight * -0.28 : window.innerHeight * -0.34;

      // Master Timeline scrubbed with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=1600',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ----------------------------------------------------
      // PHASE 1:
      // - 7 Planets fade out & scale down as scroll starts
      // - Foreground Sun moves smoothly to upper-left clear sky target
      // - Background image zooms out & reveals
      // ----------------------------------------------------
      tl.to(
        planetsRef.current,
        {
          opacity: 0,
          scale: 0.6,
          filter: 'blur(6px)',
          ease: 'power2.out',
          duration: 2.2,
        },
        0
      )
        .to(
          sunRef.current,
          {
            x: targetX,
            y: targetY,
            scale: 0.22,
            opacity: 1,
            filter: 'drop-shadow(0 0 16px rgba(255,210,110,0.8))',
            ease: 'power2.out',
            duration: 3,
          },
          0
        )
        .to(
          raysRef.current,
          {
            x: targetX,
            y: targetY,
            ease: 'power2.out',
            duration: 3,
          },
          0
        )
        .to(
          bgRef.current,
          {
            opacity: 1,
            scale: 1.0,
            ease: 'power2.out',
            duration: 3,
          },
          0
        )

        // ----------------------------------------------------
        // PHASE 2:
        // - Soft warm sunlight rays project from Sun toward Solar Panel
        // ----------------------------------------------------
        .to(
          raysRef.current,
          {
            opacity: 0.75,
            ease: 'power2.out',
            duration: 1.5,
          },
          2.0
        )
        .to(
          raysRef.current,
          {
            opacity: 0.35,
            ease: 'power1.out',
            duration: 1.2,
          },
          3.2
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#0A0D14] text-white flex items-center"
    >
      {/* BACKGROUND SCENE: Plain space initially (opacity 0), smoothly fades in & reveals landscape on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-0 scale-[1.15]"
        style={{ transformOrigin: 'center center' }}
      >
        <img
          src="/images/solar-hero-bg.png"
          alt="Solar Energy Landscape Environment"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.05]"
        />
        {/* Deep gradient overlay on left for optimal text contrast */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#0A0D14]/95 via-[#0A0D14]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0D14] to-transparent pointer-events-none" />
      </div>

      {/* 7 PLANETS SOLAR SYSTEM SPREAD: Floating around central Sun initially */}
      <div
        ref={planetsRef}
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
      >
        {/* Subtle Orbital Ring Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-amber-500/20 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-cyan-500/15 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-blue-500/15 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/10" />

        {/* Planet 1: Mercury */}
        <div className="absolute top-[38%] left-[43%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-800 via-amber-600 to-amber-300 shadow-[0_0_10px_rgba(217,119,6,0.8)] border border-amber-300/40" />
          <span className="text-[10px] font-bold text-amber-200/90 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Mercury</span>
        </div>

        {/* Planet 2: Venus */}
        <div className="absolute top-[28%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-600 via-amber-400 to-yellow-100 shadow-[0_0_14px_rgba(251,191,36,0.9)] border border-orange-200/40" />
          <span className="text-[10px] font-bold text-orange-200/90 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Venus</span>
        </div>

        {/* Planet 3: Earth */}
        <div className="absolute top-[66%] left-[38%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-blue-700 via-cyan-400 to-emerald-400 shadow-[0_0_18px_rgba(56,189,248,0.9)] border border-cyan-200/50">
            {/* Moon */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-slate-200 shadow-[0_0_6px_#fff]" />
          </div>
          <span className="text-[10px] font-extrabold text-cyan-200 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Earth</span>
        </div>

        {/* Planet 4: Mars */}
        <div className="absolute top-[72%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-800 via-orange-600 to-amber-500 shadow-[0_0_14px_rgba(239,68,68,0.9)] border border-red-300/40" />
          <span className="text-[10px] font-bold text-red-200/90 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Mars</span>
        </div>

        {/* Planet 5: Jupiter */}
        <div className="absolute top-[22%] left-[69%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-amber-700 via-amber-400 to-orange-800 shadow-[0_0_24px_rgba(245,158,11,0.7)] border border-amber-300/40" />
          <span className="text-[10px] font-bold text-amber-100 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Jupiter</span>
        </div>

        {/* Planet 6: Saturn */}
        <div className="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-amber-200 to-yellow-100 shadow-[0_0_20px_rgba(252,211,77,0.8)] border border-amber-200/50 flex items-center justify-center">
            {/* Saturn Ring */}
            <div className="absolute w-16 h-5 rounded-full border-2 border-amber-300/70 rotate-[-25deg] shadow-[0_0_8px_rgba(252,211,77,0.6)]" />
          </div>
          <span className="text-[10px] font-bold text-amber-200/90 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Saturn</span>
        </div>

        {/* Planet 7: Uranus */}
        <div className="absolute top-[18%] left-[33%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-700 via-cyan-400 to-sky-200 shadow-[0_0_16px_rgba(45,212,191,0.8)] border border-teal-200/40" />
          <span className="text-[10px] font-bold text-teal-200/90 tracking-wider uppercase backdrop-blur-xs px-1.5 py-0.5 rounded bg-black/50 border border-white/10">Uranus</span>
        </div>
      </div>

      {/* FOREGROUND TRANSPARENT SUN: Centered in the middle of the screen */}
      <div
        ref={sunRef}
        className="absolute z-20 pointer-events-none w-52 h-52 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          src="/images/sun.png"
          alt="Sun"
          className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,190,60,0.85)]"
        />
      </div>

      {/* SUBTLE NATURAL SUNLIGHT RAYS SVG: Dynamically synchronized to Sun position */}
      <svg
        ref={raysRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-0 transition-opacity duration-300"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sunRayGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#FFB74D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E86526" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sunRayGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF59D" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#FFA726" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft Ray Cones emanating from exact Sun center (500, 500) translated in lockstep with Sun */}
        <polygon points="500,500 340,900 440,900" fill="url(#sunRayGrad1)" />
        <polygon points="500,500 210,950 310,950" fill="url(#sunRayGrad2)" />
        <polygon points="500,500 660,850 760,880" fill="url(#sunRayGrad1)" />
      </svg>

      {/* HOMEPAGE HERO CONTENT: Fully visible on load with high z-index & perfect contrast */}
      <div
        ref={contentRef}
        className="container relative z-30 mx-auto px-4 pt-20 md:pt-24 pb-12 opacity-100 translate-y-0"
      >
        <div className="max-w-xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-amber-300 shadow-md mb-5">
              <span className="text-amber-300">✦</span> Next-Gen Solar PV + ESS + EV Ecosystem
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-lg">
              Powering Tomorrow,<br />
              <span className="text-[#E86526] drop-shadow-md">Sustainably.</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-white/95 max-w-md font-normal leading-relaxed drop-shadow-sm">
              Clean. Intelligent. Integrated. Generate, store, and manage your renewable energy through Sunloop Energy's unified AI platform.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E86526] px-8 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-[#c95315] transition group transform hover:-translate-y-0.5"
              >
                Contact Us <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* 4 Micro-Features Row */}
            <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/20 pt-5 text-xs text-white/95 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-300 shrink-0" />
                <div>
                  <b className="text-white">Est. 2016</b>
                  <small className="block text-[10px] text-white/80 leading-tight">Coimbatore, TN</small>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-300 shrink-0" />
                <div>
                  <b className="text-white">3-in-1 Tech</b>
                  <small className="block text-[10px] text-white/80 leading-tight">Solar + ESS + EV</small>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-emerald-300 shrink-0" />
                <div>
                  <b className="text-white">100% Clean</b>
                  <small className="block text-[10px] text-white/80 leading-tight">Renewable Energy</small>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-amber-300 shrink-0" />
                <div>
                  <b className="text-white">AI Powered</b>
                  <small className="block text-[10px] text-white/80 leading-tight">24/7 Smart Portal</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
