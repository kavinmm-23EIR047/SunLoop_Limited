'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Check, House, Factory, Mountain, Sun, BatteryCharging, Zap, ShieldCheck } from 'lucide-react';
import { solutions } from '../../data/solutions';
import { Button, Reveal, SectionTitle } from '../../components/UI';

const icons = [House, Building2, Factory];

const solutionImages = [
  '/images/residential-energy.png',
  '/images/commercial-energy.png',
  '/images/ecosystem-hero.png',
];

export default function Solutions() {
  return (
    <main className="font-sans bg-white">

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-hero-bg.png"
            alt="Sunloop Energy Solutions"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>
        <div className="container relative z-10 pt-36 pb-20 md:pt-44 md:pb-28">
          <Reveal>
            <p className="eyebrow mb-3 text-brand-primary">Solutions by Segment</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl text-white">
              One Ecosystem, <span className="text-brand-primary">Every Segment.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 font-normal">
              From homes to heavy industry and remote microgrids, Sunloop Energy brings generation, storage, charging, and AI intelligence together — customized for your exact needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ SOLUTIONS GRID ═══ */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = icons[i];
            const imgUrl = solutionImages[i];
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group h-full flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={imgUrl}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary border border-white/50">
                      <Icon className="h-3.5 w-3.5" />
                      Segment 0{i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">{s.desc}</p>

                    {/* Checklist */}
                    <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6 flex-1">
                      {s.items.map((x) => (
                        <div className="flex items-start gap-2.5" key={x}>
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-700">{x}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-[#c95315] transition-colors w-fit"
                    >
                      Explore Solution <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══ CONNECTED PLATFORM SECTION ═══ */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Start Small. Scale Anytime."
              title="Everything Connected to One Platform."
              desc="Purchase any one system initially and receive a complimentary AI-Powered Portal for daily insights and complete control."
            />
          </Reveal>
          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sun, title: 'Solar Power Plant', desc: 'Generate clean energy and reduce electricity bills.', dark: false },
              { icon: BatteryCharging, title: 'Energy Storage System', desc: 'Store energy, ensure backup, and optimise consumption.', dark: false },
              { icon: Zap, title: 'EV Charging Station', desc: 'Charge your EV smartly and conveniently.', dark: false },
              { icon: ShieldCheck, title: 'Sunloop AI Energy Portal', desc: 'Real-time monitoring, daily reports, AI insights, and more.', dark: true },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className={`relative p-6 rounded-xl h-full ${item.dark ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 shadow-sm'}`}>
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 ${item.dark ? 'bg-brand-primary/20 text-brand-primary' : 'bg-orange-50 border border-orange-100 text-brand-primary'}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-2">0{i + 1}</span>
                  <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                  <p className={`text-xs leading-relaxed ${item.dark ? 'text-white/60' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/contact">
              Build Your Ecosystem <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
