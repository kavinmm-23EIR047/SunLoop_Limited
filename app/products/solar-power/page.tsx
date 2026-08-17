'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sun,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Bot,
  X,
  Sliders,
  Award,
  Zap,
  Check
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { solarProducts, SolarProductVariant } from '../../../data/solarProducts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolarPowerPage() {
  const [activeModal, setActiveModal] = useState<SolarProductVariant | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.solar-product-image').forEach((image) => {
        gsap.fromTo(image, { autoAlpha: 0, x: 100 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: image, start: 'top 86%', once: true },
        });
      });
    }, catalogRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAF5] pt-16 pb-16 font-sans">
      {/* HERO BANNER */}
      <section className="relative w-full h-[460px] sm:h-[560px] md:h-[640px] overflow-hidden bg-brand-ink text-white flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-1000"
          style={{
            backgroundImage: `url('/products/Solar power/30-500kW Hybrid Commercial Solar System Kits.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Solar Power Plants
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              We deliver end-to-end Solar Power Plant solutions — design, engineering, installation, commissioning, and long-term maintenance — using high-efficiency panels and inverters tailored to your scale and site conditions.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Solar Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <Bot className="h-3.5 w-3.5 text-brand-apricot" /> Solar AI Portal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPACITY MATRIX & DEPLOYMENT TYPES */}
      <section className="py-12 bg-[#FAFAF5] border-b border-black/5">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-ink mb-4">Capacity Overview by Segment</h2>
            <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8F9FA] border-b border-black/10 font-bold text-brand-ink">
                  <tr>
                    <th className="p-4">Segment</th>
                    <th className="p-4">Capacity Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 font-medium text-brand-slate">
                  <tr>
                    <td className="p-4 font-bold text-brand-ink">Residential</td>
                    <td className="p-4">3 kW – 30 kW</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-brand-ink">Commercial &amp; Industrial</td>
                    <td className="p-4">5 kW – 500 kW</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-brand-ink">Utility-Scale</td>
                    <td className="p-4">1 MW and above</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-ink mb-4">Deployment Types</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-5 space-y-2 shadow-xs">
                <h3 className="text-base font-bold text-brand-ink">Rooftop Solar (Residential)</h3>
                <p className="text-xs text-brand-slate leading-relaxed">Elevated rooftop systems for Indian homes.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5 space-y-2 shadow-xs">
                <h3 className="text-base font-bold text-brand-ink">Rooftop Solar (Industrial)</h3>
                <p className="text-xs text-brand-slate leading-relaxed">Industrial rooftop systems for factories and commercial buildings.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5 space-y-2 shadow-xs">
                <h3 className="text-base font-bold text-brand-ink">Ground-Mounted Solar</h3>
                <p className="text-xs text-brand-slate leading-relaxed">Large-scale ground plants for maximum energy generation, built for utility and industrial clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION WITH GROUPED CATEGORIES */}
      <section className="py-14 md:py-20 bg-white">
        <div ref={catalogRef} className="container max-w-5xl mx-auto px-4 space-y-24">
          
          {/* RESIDENTIAL SOLAR GROUP */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              Residential Solar Power Systems (3 kW – 30 kW)
            </h2>
            <div className="space-y-16">
              {solarProducts.filter(p => p.category === 'residential').map((prod, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={prod.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`space-y-6 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                    >
                      <div>
                        <h3 className="text-[22px] md:text-2xl font-bold text-[#111111] mb-1">
                          {prod.title}
                        </h3>
                        <p className="text-[15px] text-[#666666] font-normal">
                          {prod.series}
                        </p>
                      </div>

                      <div className="space-y-1">
                          <p className="text-[15px] text-[#333333] font-medium">Capacity: <span className="font-normal">{prod.capacity}</span></p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setActiveModal(prod)}
                          className="inline-flex items-center justify-center rounded-full border border-brand-primary/30 bg-orange-50 px-6 py-2 text-[13px] font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                        >
                          View Full Specifications
                        </button>
                      </div>
                    </motion.div>

                    <div
                      className={`solar-product-image relative aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                    >
                      <div className="group relative flex h-full w-full items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(71,85,105,0.28)] transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = prod.fallbackImage;
                          }}
                        />
                        <div className="absolute top-3.5 right-3.5 rounded-full bg-brand-ink px-3 py-0.5 text-[9px] font-semibold text-white shadow-xs">
                          30-YEAR PV WARRANTY
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COMMERCIAL SOLAR GROUP */}
          <div className="space-y-12 pt-8 border-t border-black/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              Commercial & Industrial Solar PV
            </h2>
            <div className="space-y-16">
              {solarProducts.filter(p => p.category === 'commercial').map((prod, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={prod.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`space-y-6 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                    >
                      <div>
                        <h3 className="text-[22px] md:text-2xl font-bold text-[#111111] mb-1">
                          {prod.title}
                        </h3>
                        <p className="text-[15px] text-[#666666] font-normal">
                          {prod.series}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[15px] text-[#333333] font-medium">Capacity: <span className="font-normal">{prod.capacity}</span></p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setActiveModal(prod)}
                          className="inline-flex items-center justify-center rounded-full border border-brand-primary/30 bg-orange-50 px-6 py-2 text-[13px] font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                        >
                          View Full Specifications
                        </button>
                      </div>
                    </motion.div>

                    <div
                      className={`solar-product-image relative aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
                    >
                      <div className="group relative flex h-full w-full items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(71,85,105,0.28)] transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = prod.fallbackImage;
                          }}
                        />
                        <div className="absolute top-3.5 right-3.5 rounded-full bg-brand-ink px-3 py-0.5 text-[9px] font-semibold text-white shadow-xs">
                          30-YEAR PV WARRANTY
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS MODAL */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-xl space-y-5 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-semibold text-brand-primary uppercase">{activeModal.categoryLabel}</span>
                  <h3 className="text-lg font-bold text-brand-ink">{activeModal.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="grid h-7 w-7 place-items-center rounded-full bg-black/5 text-brand-ink hover:bg-black/10 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <p className="text-brand-slate font-normal">{activeModal.desc}</p>
                
                {/* Warranties */}
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 space-y-1">
                  <h4 className="text-[11px] font-bold text-amber-900 uppercase">System Warranties</h4>
                  {activeModal.warranties.map((w) => (
                    <div key={w} className="flex items-center gap-2 text-amber-900 font-medium">
                      <Check className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#FAFAF5] border border-black/[0.06] p-3.5 space-y-2">
                  <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider mb-2">Technical Parameters</h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeModal.specs.map((s) => (
                      <div key={s.label} className="border-b border-black/5 pb-1.5">
                        <span className="text-[9px] text-brand-slate font-medium block">{s.label}</span>
                        <strong className="text-brand-ink font-semibold">{s.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider">Features &amp; Highlights</h4>
                  {activeModal.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-brand-ink">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex justify-end gap-3">
                <Button href="/contact" onClick={() => setActiveModal(null)}>
                  Request System Quotation <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
