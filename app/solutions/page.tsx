'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BatteryCharging,
  Droplets,
  Grid2X2,
  ShieldCheck,
  Sun,
  Zap,
} from 'lucide-react';
import { Button, Reveal } from '../../components/UI';

const solutionCards = [
  {
    title: 'Solar PV Solution',
    shortTitle: 'Solar power',
    description: 'High-performance on-grid and hybrid solar systems designed around your roof, demand profile and long-term savings.',
    href: '/solutions/solar-pv',
    image: '/images/Residential Solar PV System Solution.png',
    icon: Sun,
    label: 'Generate',
  },
  {
    title: 'Solar & Storage',
    shortTitle: 'Solar with storage',
    description: 'Pair efficient PV generation with dependable battery backup for greater self-consumption and power continuity.',
    href: '/solutions/solar-storage',
    image: '/images/Residential Solar + Storage System Solution.jpg',
    icon: BatteryCharging,
    label: 'Store',
  },
  {
    title: 'Solar, Storage & EV Charging',
    shortTitle: 'Complete ecosystem',
    description: 'An integrated home, commercial, or fleet energy system that brings solar, storage, EV charging and control together.',
    href: '/solutions/solar-storage-ev-charging',
    image: '/images/Residential Solar + Storage + EV Charging Solution.png',
    icon: Zap,
    label: 'Enable',
  },
  {
    title: 'Solar Water Pumping',
    shortTitle: 'Agricultural pumping',
    description: 'Reliable solar-powered pumping engineered for farms, irrigation networks, livestock and remote water sources.',
    href: '/solutions/solar-water-pumping',
    image: '/images/solar-ac-water-pumping-solution.png',
    icon: Droplets,
    label: 'Move',
  },
  {
    title: 'Smart Microgrid',
    shortTitle: 'Utility-scale control',
    description: 'Grid-scale solar, containerized storage and EV infrastructure coordinated by intelligent microgrid controls.',
    href: '/solutions/smart-microgrid',
    image: '/images/microgrid-hero.png',
    icon: Grid2X2,
    label: 'Orchestrate',
  },
];

export default function Solutions() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] font-sans">
      <section className="relative isolate h-[58vh] min-h-[26rem] max-h-[40rem] overflow-hidden bg-brand-ink text-white">
        <img
          src="/images/ecosystem-hero.png"
          alt="Sunloop integrated energy solutions"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/70 to-brand-ink/15" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-md bg-brand-primary px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Integrated energy solutions
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              A smarter energy system for every need.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <Reveal className="mb-10 max-w-2xl md:mb-12">
          <p className="eyebrow">Choose your solution</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Energy engineered around real-world demands.</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-slate sm:text-base">
            Explore complete systems built to generate, store, use and manage clean energy with confidence.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {solutionCards.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.href} delay={index * 0.06} className={index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
                <Link
                  href={solution.href}
                  className="group flex h-full overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_18px_55px_-42px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:border-brand-primary/25 hover:shadow-xl"
                >
                  <div className="grid w-full md:grid-cols-[40%_60%] lg:flex lg:flex-col">
                    <div className="relative min-h-56 overflow-hidden lg:h-64">
                      <img
                        src={solution.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-brand-ink shadow-sm">
                        <Icon className="h-4 w-4 text-brand-primary" />
                        0{index + 1} · {solution.label}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-primary">{solution.shortTitle}</p>
                      <h2 className="mt-2 text-xl font-bold leading-tight text-brand-ink sm:text-2xl">{solution.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-brand-slate">{solution.description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-ink transition group-hover:text-brand-primary">
                        Explore solution <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="eyebrow">One connected platform</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Start with one system. Scale to a complete ecosystem.</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-brand-slate lg:justify-self-end">
              Every solution can be enhanced with intelligent monitoring, centralized controls and a phased expansion plan—without replacing what you already have.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sun, title: 'Generate', description: 'Solar production matched to your site.' },
              { icon: BatteryCharging, title: 'Store', description: 'Battery capacity for backup and flexibility.' },
              { icon: Zap, title: 'Use', description: 'Smart charging for vehicles and loads.' },
              { icon: ShieldCheck, title: 'Optimise', description: 'AI-powered monitoring and daily insight.' },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-black/[0.07] bg-[#FAFAF5] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-brand-ink p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-apricot">Design your system</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">Tell us your load, location and objectives. Our team will engineer a practical, scalable solution.</p>
            </div>
            <Button href="/contact" className="shrink-0">Talk to an expert <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
