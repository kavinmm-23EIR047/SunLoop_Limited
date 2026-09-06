'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BatteryCharging, CarFront, CheckCircle2, ChevronDown, Sun } from 'lucide-react';
import { products } from '../../data/products';
import { Button } from '../../components/UI';

const categoryImages: Record<string, string> = {
  solar: '/images/solar-panels.png',
  lithium: '/images/energy-storage.png',
  ess: '/images/energy-storage.png',
  ev: '/images/ac-charging.png',
};

const icons = [Sun, BatteryCharging, CarFront];
const iconColors = ['text-orange-500', 'text-emerald-500', 'text-purple-500'];
const iconBgs = ['bg-orange-50 border-orange-100', 'bg-emerald-50 border-emerald-100', 'bg-purple-50 border-purple-100'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const filteredProducts = selectedCategory === 'all' ? products : products.filter((product) => product.id === selectedCategory);
  const selectedTitle = selectedCategory === 'all' ? 'All Products' : products.find((product) => product.id === selectedCategory)?.title;

  const handleSelect = (id: string) => {
    setSelectedCategory(id);
    setDropdownOpen(false);
    window.setTimeout(() => document.getElementById(id === 'all' ? 'product-list' : id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <main className="min-h-screen bg-white pb-8 font-sans">

      {/* ═══ HERO HEADER ═══ */}
      <section className="bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-hero-bg.png"
            alt="Sunloop Energy Products"
            className="h-full w-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="container relative z-10 pt-36 pb-16 md:pt-44 md:pb-24">
          <p className="eyebrow mb-3 text-brand-primary">Clean Energy Hardware Portfolio</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl text-white">
            Products Built for a <span className="text-brand-primary">Better Energy</span> Future.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 font-normal">
            Explore Sunloop&apos;s Solar Power Plants, Energy Storage Systems (ESS), and EV Charging Infrastructure — all connected through the Sunloop AI Portal.
          </p>
        </div>
      </section>

      {/* ═══ STICKY FILTER BAR ═══ */}
      <div ref={selectorRef} className="sticky top-[72px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="container flex items-center gap-6 py-3">
          <div className="relative shrink-0">
            <button
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
              className="flex items-center gap-2 border-b-2 border-brand-primary px-1 py-2 text-xs font-bold text-brand-primary focus:outline-none"
            >
              Products <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full z-40 w-72 overflow-hidden border border-slate-200 bg-white shadow-xl rounded-lg"
                >
                  {['all', ...products.map((product) => product.id)].map((id) => (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      className={`block w-full border-b border-slate-100 px-4 py-3 text-left text-xs transition last:border-0 hover:bg-slate-50 ${
                        id === selectedCategory ? 'font-bold text-brand-primary' : 'text-slate-800 font-medium'
                      }`}
                    >
                      {id === 'all' ? 'All Products' : products.find((product) => product.id === id)?.title}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="hidden text-xs text-slate-500 font-medium sm:block">{selectedTitle}</span>
          <div className="ml-auto flex gap-2 overflow-x-auto">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === product.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50'
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ PRODUCT LIST ═══ */}
      <div id="product-list" className="container mt-12 space-y-16">
        <AnimatePresence mode="wait">
          {filteredProducts.map((product, index) => {
            const globalIndex = products.findIndex((item) => item.id === product.id);
            const Icon = icons[globalIndex];
            const iconColor = iconColors[globalIndex];
            const iconBg = iconBgs[globalIndex];
            const imageLeft = index % 2 === 0;
            const imgUrl = categoryImages[product.id] || categoryImages.solar;

            return (
              <motion.section
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="scroll-mt-36"
              >
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

                  {/* IMAGE CARD */}
                  <div
                    className={`relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm min-h-[360px] ${
                      imageLeft ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      onError={(e) => {
                        (e.target as HTMLElement).setAttribute('src', '/images/solar-panels.png');
                      }}
                      alt={product.title}
                      className="h-full w-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                    {/* Overlay content */}
                    <div className="relative z-10 p-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                        {product.eyebrow}
                      </span>
                      <span className="rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-slate-700">
                        {product.range}
                      </span>
                    </div>

                    <div className="relative z-10 p-6 mt-auto">
                      <div className={`h-12 w-12 rounded-lg ${iconBg} border flex items-center justify-center mb-3`}>
                        <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.5} />
                      </div>
                      <p className="text-xl font-bold text-white">{product.title}</p>
                      <p className="mt-1 text-xs text-white/70 font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  {/* TEXT & SPECS */}
                  <div className={`space-y-5 ${imageLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <p className="eyebrow text-brand-primary">{product.eyebrow}</p>
                    <h2 className="text-2xl font-bold md:text-3xl text-slate-900">{product.title}</h2>
                    <p className="text-sm font-semibold text-brand-primary">{product.tagline}</p>
                    <p className="leading-relaxed text-slate-600 text-sm">{product.desc}</p>

                    {/* Sub-products */}
                    <div className="grid gap-3 pt-2">
                      {product.subProducts.map((sub) => (
                        <div key={sub.name} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                              <h3 className="text-sm font-bold text-slate-900">{sub.name}</h3>
                            </div>
                            <span className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                              {sub.specs}
                            </span>
                          </div>
                          <p className="pl-[26px] pt-1.5 text-xs leading-relaxed text-slate-500">{sub.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={product.id === 'ev' ? '/products/ev-charging' : product.id === 'lithium' ? '/products/energy-storage' : '/products/solar-power'}
                        className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-[#c95315] transition-colors"
                      >
                        View {product.title} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        Get Quote <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.section>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}
