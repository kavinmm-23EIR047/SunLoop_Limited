'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Bot,
  X,
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { evProducts, EVProductVariant } from '../../../data/evProducts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EVChargingPage() {
  const [activeModal, setActiveModal] = useState<EVProductVariant | null>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.ev-product-image').forEach((image) => {
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
            backgroundImage: `url('/products/EV charger/DC EV Charger.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <Reveal className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              EV Charging Infrastructure
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Safe, fast, and reliable AC and DC charging — engineered for every segment, from home garages to public highway charging hubs. Every charger connects to the Sunloop AI Portal for real-time monitoring, remote management, and payment integration.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition"
              >
                Request Charger Quote <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/ai-portal"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <Bot className="h-3.5 w-3.5 text-brand-apricot" /> Smart Charging AI Portal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EV CHARGER TYPES SUMMARY TABLE */}
      <section className="py-12 bg-[#FAFAF5] border-b border-black/5">
        <div className="container max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-bold text-brand-ink">EV Charger Infrastructure Categories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
              <span className="inline-block rounded-xl bg-orange-50 border border-orange-100 px-3 py-1 text-xs font-bold text-brand-primary">
                AC EV CHARGERS
              </span>
              <h3 className="text-xl font-bold text-brand-ink">AC EV Chargers — 7.4 kW to 22 kW</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Smart charging for residential communities, commercial buildings, industrial fleets, and public charging networks.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
              <span className="inline-block rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600">
                DC FAST CHARGERS
              </span>
              <h3 className="text-xl font-bold text-brand-ink">DC Fast EV Chargers — 30 kW to 240 kW</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                High-performance fast charging built for businesses and investors capitalizing on the growing EV market — ideal for fuel stations, highways, malls, hotels, and fleet depots, enabling recurring charging revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION WITH GROUPED CATEGORIES */}
      <section className="py-14 md:py-20 bg-white">
        <div ref={catalogRef} className="container max-w-5xl mx-auto px-4 space-y-24">
          
          {/* RESIDENTIAL EV CHARGERS GROUP */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              AC EV Chargers (7.4 kW – 22 kW)
            </h2>
            <div className="space-y-16">
              {evProducts.filter(p => p.keywords.includes('residential')).map((prod, index) => {
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
                        <p className="text-[15px] text-[#333333] font-medium">Power: <span className="font-normal">{prod.power}</span></p>
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
                      className={`ev-product-image relative aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
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
                          OCPP COMPLIANT
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COMMERCIAL & INDUSTRIAL EV CHARGERS GROUP */}
          <div className="space-y-12 pt-8 border-t border-black/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] tracking-tight">
              DC Fast EV Chargers (30 kW – 240 kW)
            </h2>
            <div className="space-y-16">
              {evProducts.filter(p => p.keywords.includes('commercial')).map((prod, index) => {
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
                        <p className="text-[15px] text-[#333333] font-medium">Power: <span className="font-normal">{prod.power}</span></p>
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
                      className={`ev-product-image relative aspect-[4/3] flex items-center justify-center ${isEven ? 'order-2' : 'order-2 md:order-1'}`}
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
                          OCPP COMPLIANT
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

      {/* SPECIFICATIONS MODAL DIALOG */}
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
                  <span className="text-[10px] font-semibold text-brand-primary uppercase">{activeModal.category} · {activeModal.series}</span>
                  <h3 className="text-lg font-bold text-brand-ink">{activeModal.title} Specs</h3>
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
                  <h4 className="text-[11px] font-semibold text-brand-ink uppercase tracking-wider">Features &amp; Protections</h4>
                  {activeModal.tech.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-brand-ink">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex justify-end gap-3">
                <Button href="/contact" onClick={() => setActiveModal(null)}>
                  Request Formal Quotation <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
