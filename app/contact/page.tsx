'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MapPin, Plus, Minus, Mail, Phone, Factory, Building2, Send } from 'lucide-react';
import { Reveal } from '../../components/UI';
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

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.952 3.71 1.453 5.711 1.454h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.414z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solution: 'Commercial & Industrial Solar PV + ESS',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();

    // Construct structured WhatsApp message
    const lines = [
      `*New Solar / Clean Energy Enquiry - Sunloop Energy*`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${formData.name || 'N/A'}`,
      `📧 *Email:* ${formData.email || 'N/A'}`,
      `📞 *Phone:* ${formData.phone || 'N/A'}`,
      `🏢 *Company:* ${formData.company || 'N/A'}`,
      `⚡ *Interested Solution:* ${formData.solution || 'General Enquiry'}`,
      `📝 *Message / Requirements:*`,
      `${formData.message || 'No additional details provided.'}`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via Sunloop Energy Portal_`,
    ];

    const messageText = lines.join('\n');
    const waUrl = `https://wa.me/917339536677?text=${encodeURIComponent(messageText)}`;

    setWhatsappRedirectUrl(waUrl);
    setSent(true);

    // Open WhatsApp in a new tab/window immediately
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
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
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center space-y-5">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white shadow-lg animate-bounce">
                <Check className="h-8 w-8" aria-hidden="true" />
              </span>
              <div className="space-y-2 max-w-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink tracking-tight">
                  Enquiry Ready!
                </h2>
                <p className="text-sm text-brand-slate font-normal leading-relaxed">
                  We are redirecting you to WhatsApp with your enquiry details. If WhatsApp did not open automatically, click the button below:
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Send Enquiry on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      solution: 'Commercial & Industrial Solar PV + ESS',
                      message: '',
                    });
                  }}
                  className="text-xs font-semibold text-brand-slate hover:text-brand-ink underline"
                >
                  Submit another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5">
              <div className="space-y-1">
                <span className="eyebrow">Get in touch</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-ink tracking-tight">Let's talk energy.</h2>
                <p className="text-xs text-brand-slate">
                  Fill out your requirement and you will be connected directly to our engineering team on WhatsApp.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-brand-ink">Your Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-sm font-semibold text-brand-ink">Phone / WhatsApp Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="text-sm font-semibold text-brand-ink">Company / Organization</label>
                  <input
                    id="contact-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-solution" className="text-sm font-semibold text-brand-ink">Interested Solution</label>
                <select
                  id="contact-solution"
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option>Commercial &amp; Industrial Solar PV + ESS</option>
                  <option>Residential Rooftop Solar System</option>
                  <option>Lithium Battery Storage System (ESS)</option>
                  <option>EV Charging Infrastructure (AC / DC Fast)</option>
                  <option>Solar Water Pumping System</option>
                  <option>Smart Microgrid Solution</option>
                  <option>Sunloop AI Portal Telemetry</option>
                  <option>Other / General Enquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-sm font-semibold text-brand-ink">Message / Requirement Details *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={inputClasses}
                  placeholder="Share details about your property, connected load, or timeline..."
                />
              </div>

              <button
                type="submit"
                className="soft-btn w-full sm:w-auto mt-2 inline-flex items-center justify-center gap-2 bg-[#E86526] hover:bg-[#d45214] text-white font-bold py-3 px-6 rounded-xl transition"
              >
                <span>Submit &amp; Chat on WhatsApp</span>
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </Reveal>

        {/* HQ INFORMATION CARD */}
        <Reveal>
          <div className="rounded-3xl bg-brand-ink p-8 md:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between h-full border border-white/10">
            <div className="relative z-10 space-y-8">
              <div>
                <span className="eyebrow text-[#E86526]">GET IN TOUCH</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Come build a greener tomorrow with us.
                </h2>
              </div>

              <div className="space-y-6 text-sm font-normal text-white/80">
                {/* Corporate Office */}
                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Corporate Office</strong>
                    <span className="text-white/70 leading-relaxed block">{contact.office.address}</span>
                    <a
                      href={contact.office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#E86526] font-semibold hover:underline mt-1"
                    >
                      View on Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Factory Address */}
                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <Factory className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Factory &amp; Manufacturing Unit</strong>
                    <span className="text-white/70 leading-relaxed block">{contact.factory.address}</span>
                    <a
                      href={contact.factory.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#E86526] font-semibold hover:underline mt-1"
                    >
                      View on Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Email Support</strong>
                    <a href={`mailto:${contact.email}`} className="text-white/70 hover:text-white transition">{contact.email}</a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#E86526] shrink-0 border border-white/10">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold text-sm mb-0.5">Direct Line &amp; WhatsApp</strong>
                    <a href={`tel:${contact.phoneRaw}`} className="text-white/70 hover:text-white transition block font-mono">{contact.phone}</a>
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold hover:underline mt-1"
                    >
                      Chat on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 mt-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs text-white/60 font-medium">Engineers active Mon–Sat (9:00 AM – 7:00 PM IST)</span>
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
