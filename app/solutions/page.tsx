'use client';

import { ArrowUpRight, Building2, Check, House, Factory, Mountain } from 'lucide-react';
import { solutions } from '../../data/solutions';
import { Button, Reveal, SectionTitle } from '../../components/UI';

const icons = [House, Building2, Factory, Mountain];

const solutionImages = [
  '/images/residential-energy.png', // Residential
  '/images/commercial-energy.png', // Commercial
  '/images/solar-panels.png', // Industrial
  '/images/ecosystem-hero.png', // Remote & Microgrid
];


export default function Solutions() {
  return (
    <main className="font-sans bg-white">
      <section className="pb-20 pt-36 md:pt-44 border-b border-black/5">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-3">Solutions by segment</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl text-brand-ink">
              One ecosystem, <span className="text-brand-primary">every segment.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-slate font-normal">
              From homes to heavy industry and remote microgrids, Sunloop Energy brings generation, storage, charging, and solid intelligence together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((s, i) => {
            const Icon = icons[i];
            const imgUrl = solutionImages[i];
            return (
              <Reveal key={s.title} delay={i * 0.12} className="panel p-6 md:p-8 overflow-hidden shadow-xs hover:shadow-card transition">
                <div className="h-44 -mx-6 -mt-6 mb-6 overflow-hidden relative border-b border-black/10">
                  <img src={imgUrl} alt={s.title} className="h-full w-full object-cover" />
                  <span className="absolute top-3 right-3 rounded-lg bg-brand-ink/90 text-white px-2.5 py-1 text-xs font-bold">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 border border-orange-100 text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                    SEGMENT 0{i + 1}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-brand-ink">{s.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-brand-slate font-normal">{s.desc}</p>
                <div className="mt-6 grid gap-2.5 border-t border-black/10 pt-4 text-xs font-semibold text-brand-ink">
                  {s.items.map((x) => (
                    <div className="flex items-center gap-2.5" key={x}>
                      <Check className="h-4 w-4 text-brand-primary" />
                      {x}
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 border-t border-black/5">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="Start small. Scale anytime."
              title="Everything connected to one solid platform."
              desc="Purchase any one system initially and get complimentary AI Powered Portal for daily insights and control."
            />
          </Reveal>
          <div className="relative mt-12 grid gap-4 md:grid-cols-4">
            {[
              'Solar Power Plant',
              'Energy Storage System',
              'EV Charging Station',
              'Sunloop AI Energy Portal',
            ].map((x, i) => (
              <Reveal key={x} className={`relative p-6 rounded-2xl ${i === 3 ? 'bg-brand-ink text-white' : 'panel'}`}>
                <span className="text-xs font-bold text-brand-primary block">0{i + 1}</span>
                <h3 className="mt-8 text-base font-bold">{x}</h3>
                <p className={`mt-2 text-xs leading-relaxed ${i === 3 ? 'text-white/70' : 'text-brand-slate'} font-normal`}>
                  {
                    [
                      'Generate clean energy and reduce electricity bills',
                      'Store energy, ensure backup and optimize consumption',
                      'Charge your EV smartly and conveniently',
                      'Real-time monitoring, daily reports, AI insights & more',
                    ][i]
                  }
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/contact">
              Build your ecosystem <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
