'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, BatteryCharging, CarFront, CheckCircle2, ChevronDown, Sun } from 'lucide-react';
import { products } from '../../data/products';
import { Button } from '../../components/UI';

const categoryImages: Record<string, string> = {
  solar: '/images/solar-panels.png',
  lithium: '/images/energy-storage.png',
  ess: '/images/energy-storage.png',
  ev: '/images/ac-charging.png',
};

const icons = [Sun, BatteryCharging, CarFront];

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
    <main className="min-h-screen bg-[#FAFAF3] pb-8 pt-28 md:pt-32 font-sans">
      <div className="container mb-12">
        <p className="eyebrow mb-3">Clean energy hardware portfolio</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl text-brand-ink">
          Products built for a <span className="text-brand-primary">better energy</span> future.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-slate font-normal">
          Explore Sunloop’s Solar, Lithium Battery Storage and EV Charger solutions with solid industrial build quality.
        </p>
      </div>

      <div ref={selectorRef} className="sticky top-[72px] z-30 border-y border-black/10 bg-white/95 backdrop-blur-md">
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
                  className="absolute left-0 top-full z-40 w-72 overflow-hidden border border-black/10 bg-white shadow-xl rounded-xl"
                >
                  {['all', ...products.map((product) => product.id)].map((id) => (
                    <button
                      key={id}
                      onClick={() => handleSelect(id)}
                      className={`block w-full border-b border-black/5 px-4 py-3 text-left text-xs transition last:border-0 hover:bg-[#FAFAF3] ${
                        id === selectedCategory ? 'font-bold text-brand-primary' : 'text-brand-ink font-medium'
                      }`}
                    >
                      {id === 'all' ? 'All Products' : products.find((product) => product.id === id)?.title}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="hidden text-xs text-brand-slate font-medium sm:block">{selectedTitle}</span>
          <div className="ml-auto flex gap-2 overflow-x-auto">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === product.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-white border border-black/10 text-brand-ink hover:bg-[#FAFAF3]'
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="product-list" className="container mt-8 space-y-12">
        <AnimatePresence mode="wait">
          {filteredProducts.map((product, index) => {
            const Icon = icons[products.findIndex((item) => item.id === product.id)];
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
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={`relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-brand-ink p-8 text-white shadow-card ${
                      imageLeft ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      onError={(e) => {
                        (e.target as HTMLElement).setAttribute(
                          'src',
                          '/images/solar-panels.png'
                        );
                      }}
                      alt={product.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-25"
                    />
                    <div className="relative flex items-center justify-between z-10">
                      <span className="rounded-lg bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-apricot">
                        {product.eyebrow}
                      </span>
                      <span className="text-xs text-white/70 font-medium">{product.range}</span>
                    </div>

                    <div className="relative mx-auto grid h-40 w-40 place-items-center rounded-full border border-white/20 bg-brand-ink/80 z-10 shadow-lg">
                      <Icon className="h-16 w-16 text-brand-apricot" strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10">
                      <p className="text-2xl font-bold">{product.title}</p>
                      <p className="mt-1 text-xs text-white/70 font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  <div className={`space-y-6 ${imageLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <p className="eyebrow">{product.eyebrow}</p>
                    <h2 className="text-3xl font-bold md:text-4xl text-brand-ink">{product.title}</h2>
                    <p className="text-base font-semibold text-brand-primary">{product.tagline}</p>
                    <p className="leading-relaxed text-brand-slate text-xs font-normal">{product.desc}</p>
                    <div className="grid gap-3 pt-2">
                      {product.subProducts.map((sub) => (
                        <div key={sub.name} className="rounded-xl border border-black/10 bg-white p-4 shadow-xs">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-primary" />
                              <h3 className="text-sm font-bold text-brand-ink">{sub.name}</h3>
                            </div>
                            <span className="rounded-lg bg-[#FAFAF3] border border-black/5 px-2.5 py-0.5 text-xs font-semibold text-brand-secondary">
                              {sub.specs}
                            </span>
                          </div>
                          <p className="pl-6 pt-1 text-xs leading-relaxed text-brand-slate font-normal">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <Button href={product.id === 'ev' ? '/products/ev-charging' : product.id === 'lithium' ? '/products/energy-storage' : '/products/solar-power'}>
                        View Dedicated {product.title} Page <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button href="/contact" secondary>
                        Get Quote <ArrowUpRight className="h-4 w-4" />
                      </Button>
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
