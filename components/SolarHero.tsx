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
  const raysRef = useRef<SVGSVGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Hide site header and robot assistant initially so ONLY the Sun is visible at scroll 0
      gsap.set('#site-header, #robot-assistant', { opacity: 0, pointerEvents: 'none' });

      // Target position in upper-left clear sky area (~150px X, ~110px Y) avoiding all text/badges
      const isMobile = window.innerWidth < 768;
      const targetX = isMobile ? window.innerWidth * -0.30 : window.innerWidth * -0.38;
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
      // PHASE 1, 2 & 3 (0% -> 65%):
      // - Foreground Sun moves from center to upper-left clear sky target
      // - Sun gradually scales down to ~48px (scale: 0.20 of 240px base)
      // - Background image zooms out (1.18 -> 1.0) and reveals (0 -> 1.0)
      // ----------------------------------------------------
      tl.to(
        sunRef.current,
        {
          x: targetX,
          y: targetY,
          scale: 0.20,
          opacity: 1,
          filter: 'drop-shadow(0 0 12px rgba(255,210,110,0.65))',
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
        // PHASE 4 & 5 (55% -> 85%):
        // - Soft warm sunlight rays project from FIXED upper-left Sun toward Solar Panel
        // ----------------------------------------------------
        .to(
          raysRef.current,
          {
            opacity: 0.75,
            ease: 'power2.out',
            duration: 1.5,
          },
          2.4
        )
        .to(
          raysRef.current,
          {
            opacity: 0.35,
            ease: 'power1.out',
            duration: 1.2,
          },
          3.6
        )

        // ----------------------------------------------------
        // PHASE 6 & 7:
        // - As background scene zooms out and reveals, Navbar & Robot Assistant fade in cleanly!
        // - Hero content fades in
        // ----------------------------------------------------
        .to(
          '#site-header, #robot-assistant',
          {
            opacity: 1,
            pointerEvents: 'auto',
            ease: 'power2.out',
            duration: 1.5,
          },
          1.8
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 1.5,
          },
          2.4
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#0A0D14] text-white flex items-center"
    >
      {/* BACKGROUND SCENE: Initially hidden/subdued (opacity 0, scale 1.18), zooms out & reveals on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-0 scale-[1.18]"
        style={{ transformOrigin: 'center center' }}
      >
        <img
          src="/images/solar-hero-bg.png"
          alt="Solar Energy Landscape Environment"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02]"
        />
        {/* Soft left vignette for content readability */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[50%] bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* FOREGROUND TRANSPARENT SUN: Centered initially (50%, 50%), moves to clear sky target at ~48px size with OPACITY 1.0 */}
      <div
        ref={sunRef}
        className="absolute z-20 pointer-events-none w-48 h-48 sm:w-56 sm:h-56 md:w-[240px] md:h-[240px]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          src="/images/sun.png"
          alt="Sun"
          className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,200,80,0.7)]"
        />
      </div>

      {/* SUBTLE NATURAL SUNLIGHT RAYS SVG: Radiates warm light rays from upper-left Sun (120, 160) toward Solar Panel */}
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

        {/* Soft Ray Cones projecting from fixed Sun target (120, 160) towards Solar Panel */}
        <polygon points="120,160 320,680 420,680" fill="url(#sunRayGrad1)" />
        <polygon points="120,160 200,720 300,720" fill="url(#sunRayGrad2)" />
        <polygon points="120,160 450,550 550,580" fill="url(#sunRayGrad1)" />
      </svg>

      {/* HOMEPAGE HERO CONTENT: Initially hidden (opacity 0), fades in cleanly as intro completes */}
      <div
        ref={contentRef}
        className="container relative z-30 mx-auto px-4 pt-32 md:pt-40 opacity-0 translate-y-6"
      >
        <div className="max-w-xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-amber-300 shadow-md mb-5">
              <span className="text-amber-300">✦</span> Next-Gen Solar PV + ESS + EV Ecosystem
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-md">
              Powering Tomorrow,<br />
              <span className="text-[#E86526] drop-shadow-sm">Sustainably.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/90 max-w-md font-normal leading-relaxed drop-shadow-sm">
              Clean. Intelligent. Integrated. Generate, store, and manage your renewable energy through Sunloop Energy's unified AI platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#E86526] px-7 py-3.5 text-sm font-semibold text-white shadow-xl hover:bg-[#c95315] transition group"
              >
                Contact Us <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* 4 Micro-Features Row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/25 pt-6 text-xs text-white/95 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-300 shrink-0" />
                <div>
                  <b>Est. 2016</b>
                  <small className="block text-[10px] text-white/80 leading-tight">Coimbatore, TN</small>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-300 shrink-0" />
                <div>
                  <b>3-in-1 Tech</b>
                  <small className="block text-[10px] text-white/80 leading-tight">Solar + ESS + EV</small>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-emerald-300 shrink-0" />
                <div>
                  <b>100% Clean</b>
                  <small className="block text-[10px] text-white/80 leading-tight">Renewable Energy</small>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-amber-300 shrink-0" />
                <div>
                  <b>AI Powered</b>
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
