'use client';

import { ArrowUpRight, Check, Eye, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { Button, Reveal, SectionTitle } from '../../components/UI';

const values = [
  ['Innovation', 'We adopt AI, automation, and digital intelligence to keep our systems ahead of the curve.', Lightbulb],
  ['Sustainability', 'Every deployment reduces carbon emissions and supports a cleaner future.', Sparkles],
  ['Customer Success', 'Our customers are long-term partners — their savings and uptime define our success.', HeartHandshake],
  ['Reliability', 'Every system is engineered for dependable performance over decades, not just years.', ShieldCheck],
  ['Transparency', 'Full visibility from design through monitoring — honest communication, measurable results.', Eye],
  ['Excellence', 'We hold ourselves to a high standard in engineering, safety, and service.', Target],
] as const;

export default function Company() {
  return (
    <main className="font-sans bg-[#FAFAF3]">
      <section className="pb-20 pt-36 md:pt-44 border-b border-black/5">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="eyebrow mb-3">About Sunloop Energy</p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl text-brand-ink">
              Transforming how energy is <span className="text-brand-primary">generated, stored, and consumed.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-brand-slate font-normal max-w-4xl">
              Sunloop Energy is a next-generation clean energy company founded in 2016 in Coimbatore, Tamil Nadu, by a team dedicated to transforming how energy is generated, stored, and consumed.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-slate font-normal max-w-4xl">
              We design and deploy Solar Power Plants, Energy Storage Systems, and EV Charging Infrastructure — all connected through our proprietary AI Energy Management Portal. This gives homeowners, businesses, industries, and institutions complete visibility and control over their energy assets, backed by real-time monitoring, predictive analytics, and automation that lowers costs and improves reliability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container max-w-5xl py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="dark-panel p-8 text-white rounded-3xl relative overflow-hidden bg-brand-ink">
            <div className="relative z-10 space-y-4">
              <p className="eyebrow text-[#E86526]">VISION</p>
              <h2 className="text-2xl font-bold">To power homes, businesses, and industries with Clean, Optimized, Renewable Energy (CORE) — delivered through advanced Solar, Storage, and EV Charging systems built for the long term.</h2>
            </div>
          </Reveal>

          <Reveal className="panel p-8 rounded-3xl bg-white shadow-card border border-black/10">
            <div className="space-y-4">
              <p className="eyebrow">MISSION</p>
              <h2 className="text-2xl font-bold text-brand-ink">To design, deploy, and manage intelligent renewable energy solutions that reduce our customers' electricity costs and carbon footprint simultaneously, while ensuring long-term energy security through world-class engineering and support.</h2>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <SectionTitle eyebrow="WHAT WE'RE COMMITTED TO" title="World-class engineering & support" />
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2 text-xs font-semibold text-brand-ink">
          {[
            'Delivering high-efficiency Solar Power Plants engineered for maximum yield.',
            'Building reliable Energy Storage Systems for uninterrupted power and demand optimization.',
            'Expanding smart EV Charging Infrastructure to support India\'s transition to electric mobility.',
            'Integrating every deployment into the AI Energy Management Portal for real-time monitoring and predictive insights.',
            'Providing engineering, installation, and after-sales support our customers can rely on.',
          ].map((x) => (
            <Reveal key={x} className="flex items-start gap-3 border-b border-black/10 py-3.5">
              <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
              <span>{x}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 border-t border-black/5">
        <div className="container max-w-5xl">
          <Reveal>
            <SectionTitle eyebrow="OUR VALUES" title="Built to last. Guided by principles." />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, desc, Icon]) => (
              <Reveal className="panel p-6 rounded-2xl bg-white shadow-xs border border-black/10 hover:shadow-card transition" key={title}>
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
    </main>
  );
}
