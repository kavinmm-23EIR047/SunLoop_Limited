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
  Car
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';

const INSTALLATION_TYPES = [
  { title: 'Schools', icon: School, img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600' },
  { title: 'Medical Facilities', icon: Hospital, img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600' },
  { title: 'Factories', icon: Factory, img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=600' },
  { title: 'Transportation', icon: Bus, img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600' },
  { title: 'Malls', icon: ShoppingCart, img: 'https://images.unsplash.com/photo-1519567281023-8324687593c6?q=80&w=600' },
  { title: 'Stadiums', icon: MapPin, img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600' },
  { title: 'Carports', icon: Car, img: 'https://images.unsplash.com/photo-1620023616223-9c8dfb6cf2c2?q=80&w=600' },
];

export default function BusinessOwnersSolutionPage() {
  return (
    <main className="min-h-screen bg-white pt-[64px] font-sans overflow-hidden">
      
      <section className="relative w-full">
        {/* Native Image for perfect scaling on desktop */}
        <img
          src="/images/commercial-solar-storage-ev-charging-solution.png"
          alt="Commercial Solar Solution"
          className="w-full h-[500px] lg:h-auto lg:max-h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm md:text-base mb-4">
                For Businesses
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto mb-4">
                Reduce operating costs &amp; open a new revenue stream.
              </h1>
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-normal">
                Sunloop's commercial ecosystem combines Rooftop or Ground-Mounted Solar, scalable ESS, and DC Fast EV Charging.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

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
                  ESS integration supplies emergency power during outages and ensures total power security.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Industry-leading Protection</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  System-level safety protection from PV arrays to ESS, guaranteeing personnel and property safety.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-12">
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-[#E86526]">Smart</span> Solar Module
                </h2>
                <h3 className="text-xl font-bold text-slate-700 mt-4">
                  A Wonderful Option for Your Life
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
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
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', '/images/C&I Solar + Energy Storage Solution.png'); }}
                />
              </Reveal>
            </div>
          </div>

          {/* Block 3: Battery Bank */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
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
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 space-y-12">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              We power a wide variety of installation types to suit every business and organization
            </h2>
            <p className="text-slate-500">From commercial rooftops to expansive industrial carports, our modular architecture adapts to any environment.</p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {INSTALLATION_TYPES.map((type, idx) => (
                <div key={type.title} className="group relative overflow-hidden rounded-2xl aspect-square shadow-md border border-slate-200">
                  <img src={type.img} alt={type.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/30">
                      <type.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-white tracking-wide">{type.title}</span>
                  </div>
                </div>
              ))}
              
              {/* Extra block for layout balancing if needed, or link to contact */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square shadow-md bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center text-center p-6 hover:bg-emerald-100 transition-colors">
                <div className="bg-emerald-500 p-4 rounded-full text-white mb-4 shadow-lg">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-emerald-900">Custom Solution?</h4>
                <p className="text-xs text-emerald-700 mt-2">Contact our engineering team to map out your unique facility.</p>
              </div>
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
                <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
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
                    src="/images/connected-portal.png" 
                    alt="SunLoop AI Dashboard Mockup" 
                    className="relative z-10 w-full max-w-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700"
                    onError={(e) => { (e.target as HTMLElement).setAttribute('src', '/images/ai-portal-robot-card.png'); }}
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Start a green zero-carbon business today.
            </h2>
            <p className="text-slate-500 text-lg mt-4 mb-12">
              Our B2B engineering team is ready to design the perfect commercial energy system for your facility.
            </p>
            
            <form className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 text-left space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Company Name</label>
                  <input type="text" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Your Position / Title</label>
                  <input type="text" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Facilities Manager" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Full Name</label>
                  <input type="text" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Work Email</label>
                  <input type="email" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="john@acmecorp.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                  <input type="tel" className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Your Message</label>
                <textarea rows={4} className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Tell us about your commercial property and energy needs..." />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="consent" className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                  I consent to SunLoop collecting and processing my data in accordance with the Privacy Policy for business correspondence. I understand I can unsubscribe at any time.
                </label>
              </div>

              <button type="button" className="w-full rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-emerald-700 transition-colors focus:ring-4 focus:ring-emerald-500/30">
                Submit Commercial Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
