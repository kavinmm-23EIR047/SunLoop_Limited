'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Bot,
  Zap,
  Sun,
  BatteryCharging,
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#121417] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      {/* TOP NEWSLETTER & ACTION BAR */}
      <div className="container max-w-7xl mx-auto px-4 pb-12 border-b border-white/10">
        <div className="rounded-3xl bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/10 p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#E86526] uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              <Sparkles className="h-3 w-3" /> Stay Ahead in Clean Tech
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Join the Sunloop Energy Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-normal">
              Subscribe to get commercial tariff saving insights, solar AI updates, and product announcements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-72">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#E86526] focus:outline-none transition"
              />
            </div>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E86526] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#c95315] transition shrink-0">
              Subscribe <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* RICH 5-COLUMN NAVIGATION GRID */}
      <div className="container max-w-7xl mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {/* COLUMN 1: BRAND & MISSION */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-xl text-white group">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xs border border-white/20 transition-transform group-hover:scale-105">
                <img
                  src="/images/logo.png"
                  alt="Sunloop Energy"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-white/60 font-normal leading-relaxed">
              Engineering intelligent clean energy ecosystems — Solar PV Plants, LiFePO4 ESS, and EV Fast Chargers powered by AI Portal telemetry.
            </p>

            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/70 font-medium">
                <Globe className="h-3 w-3 text-[#E86526]" /> UN SDG 7 · Clean Energy
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/70 font-medium">
                <ShieldCheck className="h-3 w-3 text-emerald-400" /> ISO 9001 &amp; CE Certified
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E86526]">
              Products Portfolio
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/products/solar-power" className="hover:text-white transition flex items-center gap-1.5">
                  <Sun className="h-3.5 w-3.5 text-amber-400 shrink-0" /> Solar Power Plants (3kW - MW+)
                </Link>
              </li>
              <li>
                <Link href="/products/energy-storage" className="hover:text-white transition flex items-center gap-1.5">
                  <BatteryCharging className="h-3.5 w-3.5 text-blue-400 shrink-0" /> Lithium ESS (5kWh - 1000kWh+)
                </Link>
              </li>
              <li>
                <Link href="/products/ev-charging" className="hover:text-white transition flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-[#E86526] shrink-0" /> AC Smart EV Wallbox (7.4-22kW)
                </Link>
              </li>
              <li>
                <Link href="/products/ev-charging" className="hover:text-white transition flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-[#E86526] shrink-0" /> DC Fast Charging Hubs (30-240kW)
                </Link>
              </li>
              <li>
                <Link href="/ai-portal" className="hover:text-white transition flex items-center gap-1.5">
                  <Bot className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> AI Portal Energy Dashboard
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition text-white/40 pt-1 block">
                  View Full Product Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SOLUTIONS & SECTORS */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E86526]">
              Sectors &amp; Solutions
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/solutions/home-owners" className="hover:text-white transition">
                  Home Owners (Residential PV + ESS)
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-owners" className="hover:text-white transition">
                  Business Owners (C&amp;I Solar &amp; Shaving)
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-owners" className="hover:text-white transition">
                  Industrial Manufacturing Plants
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-owners" className="hover:text-white transition">
                  EV Fleet Charging Depots
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-owners" className="hover:text-white transition">
                  Highway Fast Charging Hubs
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-owners" className="hover:text-white transition">
                  Utility Solar &amp; Microgrids
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: AI & TECHNOLOGY */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E86526]">
              AI &amp; Smart Tech
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/ai-portal" className="hover:text-white transition">
                  Autonomous Robot String Scans
                </Link>
              </li>
              <li>
                <Link href="/ai-portal" className="hover:text-white transition">
                  Real-Time AI Yield Optimization
                </Link>
              </li>
              <li>
                <Link href="/ai-portal" className="hover:text-white transition">
                  Time-of-Day (TOD) Tariff Shifting
                </Link>
              </li>
              <li>
                <Link href="/ai-portal" className="hover:text-white transition">
                  OCPP 1.6 / 2.0 Open Gateway
                </Link>
              </li>
              <li>
                <Link href="/ai-portal" className="hover:text-white transition">
                  Microgrid Smart Controller
                </Link>
              </li>
              <li>
                <Link href="/ai-portal" className="hover:text-white transition">
                  24/7 Thermal Diagnostics
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: HEADQUARTERS & CONTACT */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E86526]">
              Find &amp; Contact Us
            </span>
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E86526] shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E86526] shrink-0" />
                <a href="mailto:info@sunloopenergy.com" className="hover:text-white transition">info@sunloopenergy.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E86526] shrink-0" />
                <a href="tel:+914222987654" className="hover:text-white transition">+91 (0422) 298-7654</a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86526] hover:underline"
                >
                  Start a Conversation <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL & COPYRIGHT BAR */}
      <div className="container max-w-7xl mx-auto px-4 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
        <div>
          © 2026 Sunloop Energy Limited. Powering Tomorrow, Sustainably.
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/security" className="hover:text-white transition">AI &amp; Security Compliance</Link>
          <Link href="/sitemap" className="hover:text-white transition">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
