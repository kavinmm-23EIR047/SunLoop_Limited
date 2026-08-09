'use client';

import { ArrowUpRight, Check, Eye, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { Button, Reveal, SectionTitle } from '../../components/UI';

const values = [
  ['Innovation', 'We continuously embrace new technologies, AI, automation and digital intelligence to create smarter energy solutions.', Lightbulb],
  ['Sustainability', 'Every solution we deliver contributes toward reducing carbon emissions and protecting the environment for future generations.', Sparkles],
  ['Customer Success', 'Our customers are our long-term partners. Their growth, savings and operational excellence define our success.', HeartHandshake],
  ['Reliability', 'We design robust systems using proven engineering practices to ensure dependable performance for years.', ShieldCheck],
  ['Transparency', 'From design and installation to monitoring and reporting, we believe in complete visibility, honest communication and measurable results.', Eye],
  ['Excellence', 'We pursue excellence in engineering, execution, safety, service and customer experience.', Target],
] as const;

export default function Company() {
  return (
    <main className="font-sans bg-[#FAFAF3]">
      <section className="pb-20 pt-36 md:pt-44 border-b border-black/5">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-3">About Sunloop Energy</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl text-brand-ink">
              Clean energy, <span className="text-brand-primary">thoughtfully engineered.</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-slate font-normal">
              Sunloop Energy is a next-generation clean energy company started in 2016 by a young and dynamic team dedicated to transforming the way energy is generated, stored, managed and consumed. We are headquartered in Coimbatore, Tamil Nadu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="panel bg-brand-ink p-8 text-white rounded-2xl shadow-card relative overflow-hidden">
            <img
              src="/images/ecosystem-hero.png"
              alt="Engineering Team"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <p className="eyebrow text-brand-apricot">Our vision</p>
              <h2 className="mt-8 text-2xl font-bold">A sustainable future for generations to come.</h2>
              <p className="mt-4 text-xs leading-relaxed text-white/70 font-normal">
                To empower homes, businesses, and industries with Clean, Optimized, Renewable Energy (CORE) solutions through advanced Solar Power Plants, Energy Storage Systems, and EV Charging Infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal className="panel p-8 rounded-2xl bg-white shadow-card">
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-8 text-2xl font-bold text-brand-ink">Measurable value for every customer.</h2>
            <p className="mt-4 text-xs leading-relaxed text-brand-slate font-normal">
              We are committed to delivering innovative, efficient and future-ready energy solutions that help our customers reduce their utility bill and carbon footprint at the same time, while achieving long-term energy security.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <SectionTitle eyebrow="We are committed to" title="Engineering the full journey." />
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2 text-xs font-semibold text-brand-ink">
          {[
            'Delivering world-class Solar Power Plants with maximum efficiency',
            'Building reliable Energy Storage Systems for uninterrupted power and energy optimization',
            'Expanding smart EV Charging Infrastructure to support India’s electric mobility revolution',
            'Integrating every solution into our AI Energy Management Portal',
            'Providing exceptional engineering, execution and after-sales support',
          ].map((x) => (
            <Reveal key={x} className="flex items-center gap-3 border-b border-black/10 py-3.5">
              <Check className="h-4 w-4 text-brand-primary shrink-0" />
              {x}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 border-t border-black/5">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Our values" title="Built to last. Guided by what matters." />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, desc, Icon]) => (
              <Reveal className="panel p-6 rounded-2xl bg-white shadow-xs hover:shadow-card transition" key={title}>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-primary border border-orange-100 mb-6">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-ink">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-slate font-normal">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink py-20 text-center text-white md:py-28">
        <div className="container">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
              “We don’t just install energy systems, we create intelligent energy ecosystems.”
            </blockquote>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {['Intelligent', 'Reliable', 'Sustainable', 'Future-Ready', 'AI-Driven', 'Built to Last'].map((x) => (
                <span className="rounded-xl border border-white/20 px-3 py-1.5 text-xs text-white/80 font-medium" key={x}>
                  {x}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
