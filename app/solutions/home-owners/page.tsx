'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Banknote,
  ShieldCheck,
  Cpu,
  LayoutTemplate,
  ArrowRight,
  Smartphone
} from 'lucide-react';
import { Reveal, Button } from '../../../components/UI';

export default function HomeOwnersSolutionPage() {
  return (
    <main className="min-h-screen bg-white pt-[64px] font-sans overflow-hidden">
      
      <section className="relative w-full">
        {/* Native Image for perfect scaling on desktop */}
        <img
          src="/images/residential-solar-storage-ev-charging-solution.png"
          alt="Residential Solar Solution"
          className="w-full h-[500px] lg:h-auto lg:max-h-[90vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm md:text-base mb-4">
                For Homeowners
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto mb-4">
                Turn your home into a self-sufficient energy system.
              </h1>
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-normal">
                Sunloop's residential package pairs Rooftop Solar, Wall-Mounted ESS, and an AC EV Charger — all managed from a single app.
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
              <h3 className="text-3xl font-bold text-slate-900">Green Power with Enhanced Safety</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Feature 1 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-orange-50 flex items-center justify-center text-brand-primary">
                  <Banknote className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Cost Saving</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Save electricity cost and reduce your dependence on the grid.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-orange-50 flex items-center justify-center text-brand-primary">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Enhanced Safety</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Meet the higher safety standard, ensure personnel and property safety.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-orange-50 flex items-center justify-center text-brand-primary">
                  <Cpu className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Your Smart Energy Home</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Predict your system generation and consumption to ensure better energy management.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-2xl bg-orange-50 flex items-center justify-center text-brand-primary">
                  <LayoutTemplate className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Less is More</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Modern design fit with your home style with elegance.
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
              src="/images/flow_diagram_home.png" 
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
                  <span className="text-[#E86526]">Smart</span> Solar Module
                </h2>
                <h3 className="text-xl font-bold text-neutral-700 mt-4">
                  A Wonderful Option for Your Life
                </h3>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-lg mt-2">
                  Smart Module Controllers monitor your PV modules in real time to give you the visibility and confidence you deserve.
                </p>
                <div className="mt-8">
                  <Link href="/products/solar-power" className="inline-flex items-center gap-2 font-bold text-[#E86526] hover:text-neutral-900 transition-colors">
                    Explore Solar Solutions <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/Solar power/3-50kW Hybrid Residential Solar System Kits.png" 
                  alt="Residential Solar Panels" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1509391366360-515437fc53c9?q=80&w=800'); }}
                />
              </Reveal>
            </div>
          </div>

          {/* Block 2: Hybrid Inverter (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6 md:pl-12">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
                  <span className="text-[#E86526]">Smart</span> Hybrid Inverter
                </h2>
                <h3 className="text-xl font-bold text-neutral-700 mt-4">
                  Your Magic PV Box
                </h3>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-lg mt-2">
                  Smart PV Controllers protect the safety of your life and property, seamlessly converting DC to AC power with grid intelligence.
                </p>
                <div className="mt-8">
                  <Link href="/products/solar-power" className="inline-flex items-center gap-2 font-bold text-[#E86526] hover:text-neutral-900 transition-colors">
                    Explore Inverters <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100 to-transparent rounded-[3rem] transform -rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/Wall Mount Low Voltage Pack.png" 
                  alt="Hybrid Inverter" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800'); }}
                />
              </Reveal>
            </div>
          </div>

          {/* Block 3: Battery Bank */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 space-y-6">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
                  <span className="text-[#E86526]">Smart</span> Battery Bank
                </h2>
                <h3 className="text-xl font-bold text-neutral-700 mt-4">
                  Your Reliable Power Bank
                </h3>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-lg mt-2">
                  Energy storage systems intelligently store excess solar energy for use at night or during rainy days, without wasting any generated power.
                </p>
                <div className="mt-8">
                  <Link href="/products/energy-storage" className="inline-flex items-center gap-2 font-bold text-[#E86526] hover:text-neutral-900 transition-colors">
                    Explore Battery ESS <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/Stackable High Voltage Pack.png" 
                  alt="Residential Battery Storage" 
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
                <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
                  <span className="text-[#E86526]">Smart</span> EV Charger
                </h2>
                <h3 className="text-xl font-bold text-neutral-700 mt-4">
                  Drive with Sun Power
                </h3>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-lg mt-2">
                  Smart EV chargers cut electricity bills and carbon emissions by charging your vehicle directly from solar power or off-peak grid power.
                </p>
                <div className="mt-8">
                  <Link href="/products/ev-charging" className="inline-flex items-center gap-2 font-bold text-[#E86526] hover:text-neutral-900 transition-colors">
                    Explore EV Chargers <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal className="relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-amber-100 to-transparent rounded-[3rem] transform -rotate-3 scale-105 -z-10" />
                <img 
                  src="/products/EV charger/AC EV Charger.png" 
                  alt="Residential EV Charging Station" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-2xl border border-white/50 bg-white p-4"
                  onError={(e) => { (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1632235952309-84b2326b9a89?q=80&w=800'); }}
                />
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* 3. APP / MONITORING SECTION */}
      <section className="py-24 bg-neutral-900 text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest border border-white/5">
                  <Smartphone className="h-4 w-4" /> SunLoop AI Portal
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
                  24/7 Monitoring,<br/>Connected on the Cloud.
                </h2>
                <h3 className="text-2xl font-semibold text-orange-400 mt-6">
                  Visibility on the Go
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mt-4">
                  The Sunloop Portal provides real-time visibility and AI-driven control over your energy generation, storage, and consumption from anywhere in the world.
                </p>
                <div className="mt-10">
                  <Link
                    href="/ai-portal"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-neutral-900 shadow-xl hover:bg-neutral-100 transition transform hover:-translate-y-0.5"
                  >
                    View App Dashboard
                  </Link>
                </div>
              </Reveal>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <Reveal>
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
                  <img 
                    src="/images/ai-portal-robot-card.png" 
                    alt="SunLoop App Mockup Dashboard" 
                    className="relative z-10 w-[280px] md:w-[320px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-neutral-800"
                    onError={(e) => { (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600'); }}
                  />
                  <div className="absolute -top-6 -right-6 h-12 w-12 bg-orange-500 rounded-full animate-ping opacity-75" />
                  <div className="absolute -bottom-6 -left-6 h-8 w-8 bg-emerald-500 rounded-full animate-ping opacity-75 delay-700" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT / CTA FOOTER */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFAF5] opacity-50" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Start a new green life today.
            </h2>
            <p className="text-neutral-500 text-lg mt-4 mb-12">
              Our experts are ready to design the perfect solar and storage system for your home.
            </p>
            
            <form className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-black/5 text-left space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase">First Name</label>
                  <input type="text" className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase">Last Name</label>
                  <input type="text" className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase">Email Address</label>
                  <input type="email" className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase">Phone Number</label>
                  <input type="tel" className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 uppercase">Your Message</label>
                <textarea rows={4} className="w-full rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="Tell us about your home and energy needs..." />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="consent" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                <label htmlFor="consent" className="text-xs text-neutral-500 leading-relaxed">
                  I consent to SunLoop collecting and processing my data in accordance with the Privacy Policy. I understand I can unsubscribe at any time.
                </label>
              </div>

              <button type="button" className="w-full rounded-xl bg-[#E86526] px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-[#c95315] transition-colors focus:ring-4 focus:ring-orange-500/30">
                Submit Request
              </button>
            </form>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
