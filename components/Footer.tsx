'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-brand-ink pt-16 pb-6 border-t border-black/5 font-sans">
      {/* TOP NEWSLETTER & ACTION BAR */}
      <div className="w-full px-4 pb-16">
        <div className="rounded-[2rem] bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-start gap-8">
          
          <div className="w-full lg:w-auto lg:flex-none flex justify-center lg:justify-start">
            <img src="/images/solar-card-illustration.png" alt="Solar energy illustration" className="h-40 sm:h-44 w-auto object-contain" />
          </div>

          <div className="w-full lg:w-[35%] space-y-3 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86526] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100/50">
              <Sparkles className="h-3.5 w-3.5" /> Stay Ahead in Clean Tech
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink">
              Join the Sunloop Energy Ecosystem
            </h3>
            <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
              Subscribe to get commercial tariff saving insights, solar AI updates, and product announcements.
            </p>
          </div>

          <div className="w-full lg:ml-auto lg:w-[35%] flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-slate" />
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full rounded-xl border border-black/10 bg-white pl-12 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-brand-ink placeholder-brand-slate focus:border-[#E86526] focus:outline-none transition shadow-sm"
              />
            </div>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#c95315] transition shrink-0">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
        </div>
      </div>

      {/* RICH 3-COLUMN NAVIGATION GRID */}
      <div className="w-full px-4 pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {/* COLUMN 1: BRAND & MISSION */}
          <div className="space-y-5">
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo.png"
                alt="Sunloop Energy"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-brand-slate font-medium leading-relaxed">
              Engineering intelligent clean energy ecosystems — Solar PV Plants, LiFePO4 ESS, and EV Fast Chargers powered by AI Portal telemetry.
            </p>

            <div className="space-y-3 pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink shadow-sm w-max">
                <Globe className="h-4 w-4 text-[#E86526]" /> UN SDG 7 - Clean Energy
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink shadow-sm w-max">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> ISO 9001 &amp; CE Certified
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS & SOLUTIONS */}
          <div className="space-y-4 pt-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86526]">Products</span>
              <ul className="space-y-2 text-sm font-medium text-brand-slate mt-3">
                <li><Link href="/products/solar-power" className="hover:text-[#E86526] transition">Solar Power</Link></li>
                <li><Link href="/products/energy-storage" className="hover:text-[#E86526] transition">Energy Storage</Link></li>
                <li><Link href="/products/ev-charging" className="hover:text-[#E86526] transition">EV Chargers</Link></li>
                <li><Link href="/products" className="hover:text-brand-ink transition text-[#E86526] font-bold">View All →</Link></li>
              </ul>
            </div>
            <div className="pt-2 border-t border-black/5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86526]">Solutions</span>
              <ul className="space-y-2 text-sm font-medium text-brand-slate mt-3">
                <li><Link href="/solutions/home-owners" className="hover:text-[#E86526] transition">Home Owners</Link></li>
                <li><Link href="/solutions/business-owners" className="hover:text-[#E86526] transition">Business Owners</Link></li>
                <li><Link href="/solutions/smart-microgrid" className="hover:text-[#E86526] transition">Microgrids</Link></li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: CONTACT & LOCATION */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E86526]">Contact</span>
            <div className="space-y-3 text-sm font-medium text-brand-slate">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E86526] shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E86526] shrink-0" />
                <a href="mailto:info@sunloopenergy.com" className="hover:text-[#E86526] transition">info@sunloopenergy.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E86526] shrink-0" />
                <a href="tel:+914222987654" className="hover:text-[#E86526] transition">+91 (0422) 298-7654</a>
              </div>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E86526] hover:text-brand-ink transition"
                >
                  Start a Conversation <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL & COPYRIGHT BAR */}
      <div className="w-full px-4 pt-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm sm:text-base text-brand-slate font-medium">
        <div>
          © 2026 Sunloop Energy Limited. Powering Tomorrow, Sustainably.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link href="/privacy" className="hover:text-brand-ink transition">Privacy Policy</Link>
          <span className="text-black/10">|</span>
          <Link href="/terms" className="hover:text-brand-ink transition">Terms of Service</Link>
          <span className="text-black/10">|</span>
          <Link href="/security" className="hover:text-brand-ink transition">AI &amp; Security Compliance</Link>
          <span className="text-black/10">|</span>
          <Link href="/returns" className="hover:text-brand-ink transition">Return &amp; Refund Policy</Link>
          <span className="text-black/10">|</span>
          <Link href="/shipping" className="hover:text-brand-ink transition">Shipping Policy</Link>
          <span className="text-black/10">|</span>
          <Link href="/disclaimer" className="hover:text-brand-ink transition">Disclaimer</Link>
          <span className="text-black/10">|</span>
          <Link href="/sitemap" className="hover:text-brand-ink transition">Sitemap</Link>
        </div>
        </div>
      </div>
    </footer>
  );
}
