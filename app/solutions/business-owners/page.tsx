'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Medal,
  ArrowRight,
  MonitorSmartphone,
  School,
  Hospital,
  Factory,
  Bus,
  ShoppingCart,
  MapPin,
  Car,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';
import { SolutionHero } from '../../../components/SolutionHero';

const INSTALLATION_TYPES = [
  { title: 'Schools', icon: School, img: '/images/india-installation-schools.jpg', fallback: '/images/commercial-industrial-solar-pv-system-solution.jpg' },
  { title: 'Medical Facilities', icon: Hospital, img: '/images/india-installation-hospitals.jpg', fallback: '/images/ci-solar-energy-storage-solution.png' },
  { title: 'Factories', icon: Factory, img: '/images/india-installation-factories.jpg', fallback: '/images/commercial-industrial-solar-pv-system-solution.jpg' },
  { title: 'Transportation', icon: Bus, img: '/images/india-installation-transportation.jpg', fallback: '/images/ac-charging.png' },
  { title: 'Malls', icon: ShoppingCart, img: '/images/india-installation-malls.jpg', fallback: '/images/commercial-solar-storage-ev-charging-solution.png' },
  { title: 'Carports', icon: Car, img: '/images/india-installation-carports.jpg', fallback: '/images/ac-charging.png' },
];

export default function BusinessOwnersSolutionPage() {
  const galleryRef = React.useRef<HTMLDivElement>(null);
  const scrollGallery = (direction: -1 | 1) => {
    const track = galleryRef.current;
    const card = track?.querySelector<HTMLElement>('[data-gallery-card]');
    if (!track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      <SolutionHero
        image="/images/india-solar-storage-ev-hero.webp"
        imageAlt="Commercial solar, storage and EV charging solution"
        eyebrow="For Businesses"
        title="Reduce operating costs & open a new revenue stream."
        description="Sunloop's commercial ecosystem combines rooftop or ground-mounted solar, scalable ESS and DC fast EV charging."
        icon={Building2}
        metric="Solar / ESS / DC fast charging"
      />

      {/* FEATURE CARDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900">Generate More, Store More, Earn More</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Feature 1 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Building2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Utilize Your Rooftop</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Make full use of your commercial roof area to produce clean energy for your enterprise.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Energize Your Earnings</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ESS integration provides backup power during outages and improves energy resilience.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Industry-leading Protection</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  System-level protection across the PV array and ESS helps keep people and property safe.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Medal className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Excellent Quality &amp; Reliability</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineered for decades of continuous, high-yield clean energy output.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* SYSTEM TOPOLOGY FLOW DIAGRAM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
              System Topology
            </h2>
            <img 
              src="/images/flow_diagram_business.png" 
              alt="System Flow Diagram" 
              className="max-w-5xl w-full mx-auto rounded-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* 2. "SMART." PRODUCT SHOWCASE */}
      <section className="py-24 bg-[#FAFAF5]">
        <div className="container mx-auto px-4 space-y-32">
          
          {/* Block 1: Solar Module */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  <span className="text-[#E86526]">Smart</span> Solar Module
                </h2>
                <h3 className="text-xl font-bold text-slate-700 mt-4">
                  A Smarter Choice for Your Business
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg mt-2">
                  Smart Module Controllers monitor your commercial PV arrays in real-time, giving you total visibility over your facility's generation.
                </p>
                <div className="mt-8">
                  <Link href="/products/solar-power" className="inline-flex items-center gap-2 font-bold text-[#E86526] hover:text-slate-900 transition-colors">
                    Explore Commercial Solar <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/Solar power/30-500kW Hybrid Commercial Solar System Kits.png" 
                  alt="Commercial Solar Array" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1588523326756-327c81a25db9?q=80&w=800'); }}
                />
              </Reveal>
            </div>
          </div>

          {/* Block 2: Hybrid Inverter (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6 md:pl-12">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  <span className="text-emerald-600">Smart</span> PV Controllers
                </h2>
                <h3 className="text-xl font-bold text-slate-700 mt-4">
                  Your Magic PV Box
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg mt-2">
                  Protect your business and property with our heavy-duty commercial hybrid inverters, seamlessly managing peak loads and grid synchronization.
                </p>
                <div className="mt-8">
                  <Link href="/products/solar-power" className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-slate-900 transition-colors">
                    Explore Central Inverters <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100 to-transparent rounded-[3rem] transform -rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/Energy Storage Cabinet.png" 
                  alt="Commercial Inverter" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', '/images/india-hero-ess-banner.webp'); }}
                />
              </Reveal>
            </div>
          </div>

          {/* Block 3: Battery Bank */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  <span className="text-blue-600">Smart</span> Energy Storage
                </h2>
                <h3 className="text-xl font-bold text-slate-700 mt-4">
                  Your Reliable Power Bank
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg mt-2">
                  Stacked commercial lithium battery cabinets store solar energy for nighttime operations or grid outages, ensuring your business never stops.
                </p>
                <div className="mt-8">
                  <Link href="/products/energy-storage" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-slate-900 transition-colors">
                    Explore BESS Cabinets <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/Energy Storage Container.png" 
                  alt="Stacked Lithium Battery Storage" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800'); }}
                />
              </Reveal>
            </div>
          </div>

          {/* Block 4: EV Charger (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6 md:pl-12">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  <span className="text-amber-500">Smart</span> EV Charger
                </h2>
                <h3 className="text-xl font-bold text-slate-700 mt-4">
                  Drive with Sun Power
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg mt-2">
                  Deploy solar-powered commercial EV charging stations for your fleet or employees. Cut utility bills by charging from solar or off-peak power.
                </p>
                <div className="mt-8">
                  <Link href="/products/ev-charging" className="inline-flex items-center gap-2 font-bold text-amber-500 hover:text-slate-900 transition-colors">
                    Explore Fleet EV Charging <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-amber-100 to-transparent rounded-[3rem] transform -rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/EV charger/DC EV Charger.png" 
                  alt="Commercial EV Charging Station" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', '/images/ac-charging.png'); }}
                />
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INSTALLATION TYPES GALLERY */}
      <section className="border-t border-slate-100 bg-white py-16 md:py-20">
        <div className="container mx-auto space-y-8 px-4 md:space-y-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                We power a wide variety of installation types to suit every business and organization
              </h2>
              <p className="text-slate-500">From commercial rooftops to expansive industrial carports, our modular architecture adapts to any environment.</p>
            </Reveal>
            <div className="flex shrink-0 gap-2 self-end sm:self-auto">
              <button type="button" onClick={() => scrollGallery(-1)} aria-label="Previous installation types" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => scrollGallery(1)} aria-label="Next installation types" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <Reveal>
            <div
              ref={galleryRef}
              role="region"
              aria-label="Business installation examples"
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-6"
            >
              {INSTALLATION_TYPES.map((type) => (
                <article data-gallery-card key={type.title} className="group relative aspect-square w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md sm:w-[300px] lg:w-[calc((100%_-_4.5rem)_/_4)]">
                  <img
                    src={type.img}
                    alt={`${type.title} clean energy installation example`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = type.fallback; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 sm:bottom-5 sm:left-5">
                    <div className="rounded-lg border border-white/30 bg-white/20 p-2 backdrop-blur-md">
                      <type.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="font-bold tracking-wide text-white">{type.title}</span>
                  </div>
                </article>
              ))}

              <Link href="/contact" className="group flex aspect-square w-[78vw] shrink-0 snap-start flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center shadow-sm transition-colors hover:bg-emerald-100 sm:w-[300px] lg:w-[calc((100%_-_4.5rem)_/_4)]">
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-emerald-900">Custom Solution?</h3>
                <p className="mt-2 text-xs text-emerald-700">Contact our engineering team to map out your unique facility.</p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. AI PORTAL / MONITORING SECTION */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest border border-white/5">
                  <MonitorSmartphone className="h-4 w-4" /> SunLoop AI Portal
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                  Property on the Hand.<br/>Visibility on the Go.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg mt-4">
                  Combined with the Smart PV Controller, details of each module and ESS cabinet can be visible and checked anytime, anywhere—protecting your organization's assets and maximizing yield.
                </p>
                <div className="mt-10">
                  <Link
                    href="/ai-portal"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition transform hover:-translate-y-0.5"
                  >
                    View B2B Dashboard
                  </Link>
                </div>
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <Reveal>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                  <img 
                    src="/images/sunloop-ai-app-dashboard.jpg" 
                    alt="SunLoop AI Dashboard Mockup" 
                    className="relative z-10 w-full max-w-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700"
                    onError={(e) => { (e.target as HTMLElement).setAttribute('src', '/images/india-hero-ai-banner.jpg'); }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT / CTA FOOTER */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFAF5] opacity-50" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Start a green zero-carbon business today.
            </h2>
            <p className="text-slate-500 text-lg mt-4 mb-12">
              Our B2B engineering team is ready to design the perfect commercial energy system for your facility.
            </p>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const company = (form.elements.namedItem('company') as HTMLInputElement)?.value || '';
                const position = (form.elements.namedItem('position') as HTMLInputElement)?.value || '';
                const fullName = (form.elements.namedItem('fullName') as HTMLInputElement)?.value || '';
                const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
                const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

                const text = `*New Commercial & Industrial (C&I) Solar/Storage Enquiry*\n━━━━━━━━━━━━━━━━━━━━━━━\n🏢 *Company:* ${company}\n👤 *Contact:* ${fullName} (${position || 'N/A'})\n📧 *Work Email:* ${email}\n📞 *Phone:* ${phone}\n⚡ *Solution:* C&I Solar PV & Storage Peak-Shaving\n📝 *Message:* ${message || 'We would like to request an industrial energy feasibility assessment.'}\n━━━━━━━━━━━━━━━━━━━━━━━\n_Sent via Sunloop Energy_`;
                const waUrl = `https://wa.me/917339536677?text=${encodeURIComponent(text)}`;
                if (typeof window !== 'undefined') {
                  window.open(waUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 text-left space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Company Name *</label>
                  <input name="company" required type="text" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Your Position / Title</label>
                  <input name="position" type="text" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Facilities Manager" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Full Name *</label>
                  <input name="fullName" required type="text" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Work Email *</label>
                  <input name="email" required type="email" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="john@acmecorp.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Phone Number *</label>
                  <input name="phone" required type="tel" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Your Message</label>
                <textarea name="message" rows={4} className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Tell us about your commercial property and energy needs..." />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="consent" defaultChecked required className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                  I consent to SunLoop contacting me regarding my commercial enquiry via phone, email, or WhatsApp.
                </label>
              </div>

              <button type="submit" className="w-full rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-emerald-700 transition-colors focus:ring-4 focus:ring-emerald-500/30">
                Submit Commercial Inquiry &amp; Send on WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
