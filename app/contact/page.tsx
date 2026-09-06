'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MapPin, Plus, Minus, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import { Reveal, SectionTitle } from '../../components/UI';
import { contact } from '../../data/content';

const faqs = [
  {
    q: 'What solar & energy storage systems do you engineer?',
    a: 'We design and deploy turnkey Solar PV plants (3 kW to MW+ scale), LiFePO4 Lithium Battery ESS (5 kWh to 1000 kWh+), and AC/DC EV Fast Charging Hubs for homes, commercial complexes, and industrial facilities.'
  },
  {
    q: 'How does the AI Portal Energy Dashboard work?',
    a: 'Our AI Portal provides 24/7 real-time telemetry, automated Time-of-Day tariff peak shaving, remote string diagnostics, and intelligent EV load balancing from a unified web interface.'
  },
  {
    q: 'What is the typical ROI payback period for commercial solar & ESS?',
    a: 'Commercial and industrial solar PV combined with peak-shaving ESS typically achieves full payback within 3 to 4 years through utility bill reductions and accelerated tax depreciation benefits.'
  },
  {
    q: 'Are your EV charging stations compatible with all EV models?',
    a: 'Yes, our AC Wallbox and DC Fast Chargers support standard Type 2, CCS2, and OCPP 1.6/2.0 open protocol billing gateways — compatible with all EV cars, buses, and commercial fleets.'
  },
  {
    q: 'How can I request a site audit or commercial quote?',
    a: 'You can submit the inquiry form on this page or email us directly at info@sunloopenergy.com. Our engineering team will prepare a detailed solar yield and tariff saving report within 24 hours.'
  }
];

const inputClasses = "w-full rounded-xl border border-black/10 bg-[#F8FAFC] px-4 py-3 text-sm font-normal text-brand-ink outline-none focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition min-h-[44px]";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="font-sans bg-[#F8FAFC]">
      {/* HERO SECTION */}
      <section className="pb-16 pt-36 md:pt-44 border-b border-black/[0.06] bg-white">
        <div className="container max-w-6xl">
          <Reveal className="space-y-3">
            <span className="eyebrow">Let's build what's next</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-ink tracking-tight leading-[1.1]">
              Start your energy <span className="text-brand-primary">journey.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-brand-slate font-normal">
              Tell us what you're working toward. Our engineering team will analyze your requirements and recommend the optimal solution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM & HQ CARDS */}
      <section className="container max-w-6xl grid gap-10 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
        <Reveal className="panel p-8 md:p-10 bg-white shadow-sm rounded-3xl border border-black/[0.08]">
          {sent ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center space-y-4">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white shadow-lg">
                <Check className="h-8 w-8" aria-hidden="true" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink tracking-tight">Thanks for reaching out.</h2>
              <p className="text-sm text-brand-slate font-normal max-w-md leading-relaxed">
                Your message has been received. Our clean energy engineers will review your request and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5">
              <div className="space-y-1">
                <span className="eyebrow">Get in touch</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink tracking-tight">Let's talk energy.</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-brand-ink">Your Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-sm font-semibold text-brand-ink">Business Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-sm font-semibold text-brand-ink">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className={inputClasses}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="text-sm font-semibold text-brand-ink">Company / Organization</label>
                  <input
                    id="contact-company"
                    name="company"
                    className={inputClasses}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-solution" className="text-sm font-semibold text-brand-ink">Interested Solution</label>
                <select id="contact-solution" name="solution" className={inputClasses}>
                  <option>Commercial &amp; Industrial Solar PV + ESS</option>
                  <option>Residential Rooftop Solar System</option>
                  <option>Lithium Battery Storage System (ESS)</option>
                  <option>EV Charging Infrastructure (AC / DC Fast)</option>
                  <option>Full Unified 3-in-1 Ecosystem</option>
                  <option>AI Portal Only</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-sm font-semibold text-brand-ink">Message / Requirement Details *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className={inputClasses}
                  placeholder="Share details about your property, connected load, or timeline..."
                />
              </div>

              <button type="submit" className="soft-btn w-full sm:w-auto mt-2">
                Send Enquiry <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </Reveal>

        {/* HQ INFORMATION CARD */}
        <Reveal>
          <div className="rounded-3xl bg-brand-ink p-8 md:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between h-full border border-white/10">
            <div className="relative z-10 space-y-8">
              <div>
                <span className="eyebrow text-[#E86526]">Headquarters</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Come build a greener tomorrow with us.
                </h2>
              </div>

              <div className="space-y-6 text-sm font-normal text-white/80">
                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Primary Location</strong>
                    <span className="text-white/70 leading-relaxed block">{contact.hq}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Email Support</strong>
                    <a href="mailto:info@sunloopenergy.com" className="text-white/70 hover:text-white transition">{contact.email}</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Direct Line</strong>
                    <a href="tel:+914222987654" className="text-white/70 hover:text-white transition">{contact.phone}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 mt-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs text-white/60 font-medium">Engineers active Mon–Sat (9 AM – 7 PM IST)</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white border-t border-black/[0.06]">
        <div className="container max-w-4xl mx-auto px-4 space-y-12">
          <Reveal className="text-center space-y-3">
            <span className="eyebrow justify-center">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-slate font-normal max-w-xl mx-auto leading-relaxed">
              Everything you need to know about our solar PV systems, battery storage, and AI telemetry platform.
            </p>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={faq.q} className="rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-base text-brand-ink hover:text-brand-primary transition gap-4 min-h-[56px]"
                  >
                    <span>{faq.q}</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F8FAFC] text-brand-ink shrink-0 border border-black/[0.06]">
                      {isOpen ? <Minus className="h-4 w-4 text-[#E86526]" aria-hidden="true" /> : <Plus className="h-4 w-4 text-brand-slate" aria-hidden="true" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-brand-slate font-normal leading-relaxed border-t border-black/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
