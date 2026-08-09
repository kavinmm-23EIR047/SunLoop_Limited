'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu,
  X,
  ArrowUpRight,
  Bot,
  ChevronDown,
  Zap,
  Sun,
  BatteryCharging,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ProductDropdownItem {
  id: string;
  title: string;
  specs: string;
  desc: string;
  href: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const productServices: ProductDropdownItem[] = [
  {
    id: 'lithium',
    title: 'Lithium Battery Storage',
    specs: '5 kWh – 500 kWh+',
    desc: 'LiFePO4 battery storage for 24/7 backup & peak shaving savings.',
    href: '/products/energy-storage',
    icon: BatteryCharging,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-100',
  },
  {
    id: 'ev',
    title: 'EV Charging Stations',
    specs: '7.4 kW – 240 kW',
    desc: 'AC & DC fast chargers with smart load balancing & OCPP billing.',
    href: '/products/ev-charging',
    icon: Zap,
    color: 'text-[#E86526]',
    bgColor: 'bg-orange-50 border-orange-100',
  },
  {
    id: 'solar',
    title: 'Solar Power Plants',
    specs: '3 kW – MW+ Scale',
    desc: 'High-yield rooftop & ground solar PV arrays with AI telemetry.',
    href: '/products/solar-power',
    icon: Sun,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 border-amber-100',
  },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const isDarkHeader = isHome && !scrolled;

  return (
    <header
      id="site-header"
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-xs py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className={`flex items-center gap-3 font-sans text-lg font-bold group ${isDarkHeader ? 'text-white' : 'text-brand-ink'}`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-primary text-white font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="tracking-tight">
            sunloop<span className="text-brand-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`hidden items-center gap-7 text-sm font-medium md:flex ${isDarkHeader ? 'text-white' : 'text-brand-ink'}`}>
          <Link href="/" className="transition hover:text-brand-primary">
            Home
          </Link>

          {/* PRODUCTS DROPDOWN MEGA-MENU TRIGGER */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 py-1 transition hover:text-brand-primary font-medium focus:outline-none"
            >
              <span>Products</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDarkHeader ? 'text-white/80' : 'text-brand-slate'
                } ${dropdownOpen ? 'rotate-180 text-brand-primary' : ''}`}
              />
            </button>

            {/* DROPDOWN VERTICAL LIST PANEL (MATCHES IMAGE 2) */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-xl z-50 overflow-hidden text-left"
                >
                  <div className="space-y-1">
                    <Link
                      href="/products/energy-storage"
                      onClick={() => setDropdownOpen(false)}
                      className="block w-full rounded-xl px-4 py-2.5 text-xs font-semibold text-brand-ink hover:text-brand-primary hover:bg-orange-50/60 transition"
                    >
                      Lithium Battery
                    </Link>
                    <Link
                      href="/products/ev-charging"
                      onClick={() => setDropdownOpen(false)}
                      className="block w-full rounded-xl px-4 py-2.5 text-xs font-semibold text-brand-ink hover:text-brand-primary hover:bg-orange-50/60 transition"
                    >
                      EV Charger
                    </Link>
                    <Link
                      href="/products/solar-power"
                      onClick={() => setDropdownOpen(false)}
                      className="block w-full rounded-xl px-4 py-2.5 text-xs font-semibold text-brand-ink hover:text-brand-primary hover:bg-orange-50/60 transition"
                    >
                      Solar Power
                    </Link>
                    <div className="border-t border-black/5 my-1 pt-1">
                      <Link
                        href="/products"
                        onClick={() => setDropdownOpen(false)}
                        className="block w-full rounded-xl px-4 py-2.5 text-xs font-bold text-brand-primary hover:bg-orange-50/80 transition"
                      >
                        All Products →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/solutions/home-owners" className="transition hover:text-brand-primary">
            Home Owners
          </Link>

          <Link href="/solutions/business-owners" className="transition hover:text-brand-primary">
            Business Owners
          </Link>

          {/* Solid Clean AI Portal Link */}
          <Link
            href="/ai-portal"
            className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold shadow-2xs transition backdrop-blur-md ${
              isDarkHeader
                ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40'
                : 'border border-black/10 bg-white/80 text-brand-ink hover:border-brand-primary hover:bg-white'
            }`}
          >
            <Bot className="h-4 w-4 text-brand-primary" />
            AI Portal Dashboard
            <span className="rounded-md bg-brand-primary px-1.5 py-0.5 text-[9px] font-bold text-white uppercase">
              SOLID UI
            </span>
          </Link>

          <Link href="/company" className="transition hover:text-brand-primary">
            Company
          </Link>

          <Link
            href="/contact"
            className="rounded-xl bg-brand-primary px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#c95315] transition hover:shadow-md"
          >
            Get a Quote <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden p-2 ${isDarkHeader ? 'text-white' : 'text-brand-ink'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileOpen && (
        <nav className="container grid gap-2 border-t border-black/10 pb-5 pt-4 md:hidden bg-white/98 backdrop-blur-xl shadow-xl mt-2 rounded-2xl text-xs font-semibold">
          <Link onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-brand-bg text-brand-ink" href="/">
            Home
          </Link>

          {/* Mobile Expandable Products Accordion */}
          <div>
            <button
              onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
              className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-brand-ink hover:bg-brand-bg font-semibold"
            >
              <span>Products (3 Services)</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsExpanded ? 'rotate-180 text-brand-primary' : ''}`} />
            </button>

            {mobileProductsExpanded && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-brand-primary/20 ml-3 mt-1">
                {productServices.map((svc) => (
                  <Link
                    key={svc.id}
                    onClick={() => setMobileOpen(false)}
                    href={svc.href}
                    className="block rounded-lg p-2 hover:bg-orange-50/50"
                  >
                    <strong className="block text-brand-ink font-bold text-xs">{svc.title}</strong>
                    <span className="text-[10px] text-brand-primary font-semibold">{svc.specs}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-brand-bg text-brand-ink" href="/solutions">
            Solutions
          </Link>

          <Link
            onClick={() => setMobileOpen(false)}
            className="rounded-xl px-3 py-2.5 bg-brand-bg text-brand-primary flex items-center gap-2 font-bold"
            href="/ai-portal"
          >
            <Bot className="h-4 w-4" /> AI Portal Dashboard (Clean Solid)
          </Link>

          <Link onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-brand-bg text-brand-ink" href="/company">
            Company
          </Link>

          <Link onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 bg-brand-primary text-white text-center font-bold" href="/contact">
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
