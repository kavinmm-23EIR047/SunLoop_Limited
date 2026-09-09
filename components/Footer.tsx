'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
  Clock,
  Factory,
  Building2,
} from 'lucide-react';
import { contact } from '../data/content';

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

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-brand-ink pt-16 pb-8 border-t border-black/[0.06] font-sans">
      {/* TOP NEWSLETTER & ACTION BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-3xl bg-white border border-black/[0.07] shadow-[0_10px_35px_rgba(0,0,0,0.03)] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="w-full lg:w-auto flex justify-center lg:justify-start shrink-0">
            <img
              src="/images/solar-card-illustration.png"
              alt="Solar Energy Ecosystem"
              className="h-32 sm:h-36 md:h-40 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:max-w-xl space-y-3 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86526] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Clean Tech &amp; AI Innovation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-ink">
              Join the Sunloop Energy Ecosystem
            </h3>
            <p className="text-sm text-brand-slate leading-relaxed">
              Subscribe for commercial tariff savings insights, solar yield analytics, and next-generation battery storage updates.
            </p>
          </div>

          <div className="w-full lg:w-[380px] shrink-0">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="relative w-full">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-slate" aria-hidden="true" />
                <input
                  type="email"
                  placeholder="Enter business email"
                  className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] pl-10 pr-3 py-3 text-sm text-brand-ink placeholder-brand-slate/70 focus:border-[#E86526] focus:bg-white focus:outline-none transition shadow-2xs min-h-[44px]"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#E86526] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#d45214] active:scale-[0.98] transition shrink-0 min-h-[44px]"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* MAIN 4-COLUMN FOOTER NAVIGATION & DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* COLUMN 1: BRAND PROFILE & SOCIALS (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group" aria-label="Sunloop Energy Homepage">
              <img
                src="/images/logo.png"
                alt="Sunloop Energy"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </Link>

            <p className="text-sm text-brand-slate font-normal leading-relaxed">
              Engineering intelligent clean energy ecosystems — Solar Power Plants, Battery Energy Storage Systems (BESS), and EV Fast Chargers, connected through the Sunloop AI Portal.
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink shadow-2xs">
                <Globe className="h-4 w-4 text-[#E86526]" aria-hidden="true" />
                <span>UN SDG 7 — Clean &amp; Affordable Energy</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink shadow-2xs block w-fit">
                <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>ISO 9001:2015 &amp; CE Certified</span>
              </div>
            </div>

            {/* Social Media (Only WhatsApp and Instagram) */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-3">
                Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* WhatsApp button */}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-emerald-500/20 bg-emerald-50/70 text-emerald-800 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition shadow-2xs text-xs font-bold"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-600 group-hover:text-white" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                </a>

                {/* Instagram button */}
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-pink-500/20 bg-pink-50/60 text-pink-800 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent transition shadow-2xs text-xs font-bold"
                >
                  <Instagram className="h-4 w-4 text-pink-600" aria-hidden="true" />
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PRODUCTS & SOLUTIONS (col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86526] block mb-3">
                Products
              </span>
              <ul className="space-y-2 text-sm font-medium text-brand-slate">
                <li><Link href="/products/solar-power" className="hover:text-[#E86526] transition">Solar Power Plants</Link></li>
                <li><Link href="/products/energy-storage" className="hover:text-[#E86526] transition">Battery Storage (ESS)</Link></li>
                <li><Link href="/products/ev-charging" className="hover:text-[#E86526] transition">EV Fast Chargers</Link></li>
                <li><Link href="/products" className="text-[#E86526] font-bold hover:underline inline-flex items-center gap-1">All Products →</Link></li>
              </ul>
            </div>

            <div className="pt-2 border-t border-black/[0.06]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E86526] block mb-3">
                Solutions
              </span>
              <ul className="space-y-2 text-sm font-medium text-brand-slate">
                <li><Link href="/solutions/home-owners" className="hover:text-[#E86526] transition">For Homeowners</Link></li>
                <li><Link href="/solutions/business-owners" className="hover:text-[#E86526] transition">For Commercial &amp; Industrial</Link></li>
                <li><Link href="/solutions/solar-storage" className="hover:text-[#E86526] transition">Solar &amp; ESS Integration</Link></li>
                <li><Link href="/solutions/solar-water-pumping" className="hover:text-[#E86526] transition">Solar Water Pumping</Link></li>
                <li><Link href="/ai-portal" className="hover:text-[#E86526] transition">Sunloop AI Portal</Link></li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: OFFICE & FACTORY LOCATIONS (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E86526] block mb-1">
              Our Locations
            </span>

            {/* Corporate Office */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-2xs space-y-2 hover:border-[#E86526]/40 transition">
              <div className="flex items-center gap-2 text-brand-ink font-bold text-xs">
                <div className="grid h-6 w-6 place-items-center rounded-lg bg-orange-50 text-[#E86526]">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <span>Corporate Office</span>
              </div>
              <p className="text-xs text-brand-slate leading-relaxed font-normal">
                {contact.office.address}
              </p>
              <a
                href={contact.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E86526] hover:underline pt-1"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Factory Address */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-2xs space-y-2 hover:border-[#E86526]/40 transition">
              <div className="flex items-center gap-2 text-brand-ink font-bold text-xs">
                <div className="grid h-6 w-6 place-items-center rounded-lg bg-orange-50 text-[#E86526]">
                  <Factory className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <span>Factory &amp; Works</span>
              </div>
              <p className="text-xs text-brand-slate leading-relaxed font-normal">
                {contact.factory.address}
              </p>
              <a
                href={contact.factory.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E86526] hover:underline pt-1"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* COLUMN 4: DIRECT CONTACT & INQUIRIES (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E86526] block mb-1">
              Contact &amp; Support
            </span>

            <div className="space-y-3 text-sm font-medium text-brand-slate">
              {/* Phone */}
              <div className="flex items-start gap-3 rounded-2xl border border-black/[0.08] bg-white p-3.5 shadow-2xs">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-orange-50 text-[#E86526] shrink-0">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-brand-slate block uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="text-sm font-extrabold text-brand-ink hover:text-[#E86526] transition font-mono tracking-tight block mt-0.5"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 rounded-2xl border border-black/[0.08] bg-white p-3.5 shadow-2xs">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-orange-50 text-[#E86526] shrink-0">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-brand-slate block uppercase tracking-wider">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs sm:text-sm font-bold text-brand-ink hover:text-[#E86526] transition block mt-0.5 break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2.5 px-2 py-1 text-xs text-brand-slate">
                <Clock className="h-4 w-4 text-[#E86526] shrink-0" aria-hidden="true" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>

              {/* Direct Link */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#E86526] transition"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL & COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-black/[0.06]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-brand-slate font-medium">
          <div>
            © 2026 Sunloop Energy Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
            <Link href="/privacy" className="hover:text-brand-ink transition">Privacy Policy</Link>
            <span className="text-black/20">·</span>
            <Link href="/terms" className="hover:text-brand-ink transition">Terms of Service</Link>
            <span className="text-black/20">·</span>
            <Link href="/security" className="hover:text-brand-ink transition">AI &amp; Security Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
