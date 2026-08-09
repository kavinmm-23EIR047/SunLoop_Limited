'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MapPin } from 'lucide-react';
import { Button, Reveal, SectionTitle } from '../../components/UI';
import { contact } from '../../data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="font-sans bg-[#FAFAF3]">
      <section className="pb-16 pt-36 md:pt-44 border-b border-black/5">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-3">Let’s build what’s next</p>
            <h1 className="text-4xl font-bold md:text-6xl text-brand-ink">
              Start your energy <span className="text-brand-primary">journey.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-slate font-normal">
              Tell us what you’re working toward. We’ll help you find the right place to begin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container grid gap-10 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
        <Reveal className="panel p-6 md:p-9 bg-white shadow-card rounded-2xl">
          {sent ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white">
                <Check className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-brand-ink">Thanks for reaching out.</h2>
              <p className="mt-2 text-xs text-brand-slate font-normal">
                Your message is received. Our engineering team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4">
              <div>
                <p className="eyebrow mb-1">Get in touch</p>
                <h2 className="text-2xl font-bold text-brand-ink">Let’s talk energy.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold text-brand-ink">
                  Name
                  <input
                    required
                    className="mt-1.5 w-full rounded-xl border border-black/15 bg-[#FAFAF3] px-3.5 py-2.5 text-xs font-normal text-brand-ink outline-none focus:border-brand-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-xs font-semibold text-brand-ink">
                  Email
                  <input
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-xl border border-black/15 bg-[#FAFAF3] px-3.5 py-2.5 text-xs font-normal text-brand-ink outline-none focus:border-brand-primary"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold text-brand-ink">
                  Phone
                  <input
                    className="mt-1.5 w-full rounded-xl border border-black/15 bg-[#FAFAF3] px-3.5 py-2.5 text-xs font-normal text-brand-ink outline-none focus:border-brand-primary"
                    placeholder="Phone number"
                  />
                </label>
                <label className="text-xs font-semibold text-brand-ink">
                  Company
                  <input
                    className="mt-1.5 w-full rounded-xl border border-black/15 bg-[#FAFAF3] px-3.5 py-2.5 text-xs font-normal text-brand-ink outline-none focus:border-brand-primary"
                    placeholder="Optional"
                  />
                </label>
              </div>
              <label className="text-xs font-semibold text-brand-ink">
                Interested solution
                <select className="mt-1.5 w-full rounded-xl border border-black/15 bg-[#FAFAF3] px-3.5 py-2.5 text-xs font-normal text-brand-ink outline-none focus:border-brand-primary">
                  <option>Solar Power Plant</option>
                  <option>ESS Battery Storage</option>
                  <option>EV Charging Infrastructure</option>
                  <option>Full Clean Ecosystem</option>
                  <option>AI Portal Only</option>
                </select>
              </label>
              <label className="text-xs font-semibold text-brand-ink">
                Message
                <textarea
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-black/15 bg-[#FAFAF3] px-3.5 py-2.5 text-xs font-normal text-brand-ink outline-none focus:border-brand-primary"
                  placeholder="Tell us a little about your energy goals..."
                />
              </label>
              <button className="rounded-xl bg-brand-primary px-5 py-3 text-xs font-bold text-white hover:bg-[#c95315] transition">
                Send enquiry <ArrowUpRight className="ml-2 inline h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-brand-ink p-8 text-white shadow-card relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop"
              alt="Sunloop HQ"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <p className="eyebrow text-brand-apricot">Sunloop Energy</p>
              <h2 className="mt-8 text-2xl font-bold">Come build a greener tomorrow with us.</h2>
              <div className="mt-8 grid gap-5 text-xs font-normal">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-apricot" />
                  <span>
                    <b className="block text-white font-bold">Headquarters</b>
                    <span className="text-white/70">{contact.hq}</span>
                  </span>
                </div>
                <div>
                  <b className="block text-white font-bold">Website</b>
                  <span className="text-white/70">{contact.website}</span>
                </div>
                <div>
                  <b className="block text-white font-bold">Email / Phone</b>
                  <span className="text-white/70">
                    {contact.email}
                    <br />
                    {contact.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
