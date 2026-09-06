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
      <div className="container pb-16">
        <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6 md:p-8 flex flex-col lg:flex-row items-center justify-start gap-8">
          
          <div className="w-full lg:w-auto lg:flex-none flex justify-center lg:justify-start">
            <img src="/images/solar-card-illustration.png" alt="Solar energy illustration showing a residential solar installation" className="h-40 sm:h-44 w-auto object-contain" loading="lazy" />
          </div>

          <div className="w-full lg:w-[35%] space-y-3 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E86526] tracking-wide bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100/50">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Stay Ahead in Clean Tech
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
              <label htmlFor="footer-email" className="sr-only">Your business email address</label>
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-slate" aria-hidden="true" />
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your business email"
                className="w-full rounded-xl border border-black/10 bg-white pl-12 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-brand-ink placeholder-brand-slate focus:border-[#E86526] focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition shadow-sm min-h-[44px]"
              />
            </div>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E86526] px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-[#c95315] transition shrink-0 min-h-[44px]">
              Subscribe <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          
        </div>
      </div>

      {/* RICH 3-COLUMN NAVIGATION GRID */}
      <div className="container pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {/* COLUMN 1: BRAND & MISSION */}
          <div className="space-y-5">
            <Link href="/" className="inline-block group" aria-label="Sunloop Energy — Home">
              <img
                src="/images/logo.png"
                alt="Sunloop Energy"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </Link>

            <p className="text-sm text-brand-slate font-normal leading-relaxed">
              Engineering intelligent clean energy ecosystems — solar power plants, battery energy storage, and EV fast chargers, unified through the Sunloop AI Portal.
            </p>

            <div className="space-y-3 pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-ink shadow-sm w-max">
                <Globe className="h-4 w-4 text-[#E86526]" aria-hidden="true" /> UN SDG 7 — Affordable &amp; Clean Energy
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-brand-ink shadow-sm w-max">
                <ShieldCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" /> ISO 9001 &amp; CE Certified
              </div>
            </div>

            {/* Social Icons — with proper aria-labels */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com/company/sunloop-energy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sunloop Energy on LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/sunloopenergy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sunloop Energy on Twitter"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/@sunloopenergy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sunloop Energy on YouTube"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/sunloopenergy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sunloop Energy on Instagram"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-brand-slate hover:bg-[#E86526] hover:text-white hover:border-[#E86526] transition shadow-sm"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS & SOLUTIONS */}
          <div className="space-y-5 pt-2">
            <div>
              <span className="text-xs font-semibold tracking-wide text-[#E86526]">Products</span>
              <ul className="space-y-2.5 text-sm font-normal text-brand-slate mt-3">
                <li><Link href="/products/solar-power" className="hover:text-[#E86526] transition py-1 inline-block">Solar Power Plants</Link></li>
                <li><Link href="/products/energy-storage" className="hover:text-[#E86526] transition py-1 inline-block">Energy Storage Systems (ESS)</Link></li>
                <li><Link href="/products/ev-charging" className="hover:text-[#E86526] transition py-1 inline-block">EV Charging Infrastructure</Link></li>
                <li><Link href="/products" className="hover:text-brand-ink transition text-[#E86526] font-semibold py-1 inline-block">View All →</Link></li>
              </ul>
            </div>
            <div className="pt-2 border-t border-black/5">
              <span className="text-xs font-semibold tracking-wide text-[#E86526]">Solutions</span>
              <ul className="space-y-2.5 text-sm font-normal text-brand-slate mt-3">
                <li><Link href="/solutions/home-owners" className="hover:text-[#E86526] transition py-1 inline-block">For Homeowners</Link></li>
                <li><Link href="/solutions/business-owners" className="hover:text-[#E86526] transition py-1 inline-block">For Businesses</Link></li>
                <li><Link href="/solutions/smart-microgrid" className="hover:text-[#E86526] transition py-1 inline-block">For Utilities &amp; Developers</Link></li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: CONTACT & LOCATION */}
          <div className="space-y-5 pt-2">
            <span className="text-xs font-semibold tracking-wide text-[#E86526]">Contact</span>
            <div className="space-y-4 text-sm font-normal text-brand-slate">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#E86526] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#E86526] shrink-0" aria-hidden="true" />
                <a href="mailto:info@sunloopenergy.com" className="hover:text-[#E86526] transition">info@sunloopenergy.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#E86526] shrink-0" aria-hidden="true" />
                <a href="tel:+914222987654" className="hover:text-[#E86526] transition">+91 (0422) 298-7654</a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E86526] hover:text-brand-ink transition min-h-[44px]"
                >
                  Start a Conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL & COPYRIGHT BAR */}
      <div className="container pt-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-slate font-normal">
          <div>
            © 2026 Sunloop Energy Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-brand-ink transition py-1">Privacy Policy</Link>
            <span className="text-black/10" aria-hidden="true">|</span>
            <Link href="/terms" className="hover:text-brand-ink transition py-1">Terms of Service</Link>
            <span className="text-black/10" aria-hidden="true">|</span>
            <Link href="/security" className="hover:text-brand-ink transition py-1">AI &amp; Security Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
