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
} from 'lucide-react';

const solutionServices = [
  { title: 'Solar PV Solution', href: '/solutions/solar-pv' },
  { title: 'Solar & Storage Solution', href: '/solutions/solar-storage' },
  { title: 'Solar + Storage + EV Charging', href: '/solutions/solar-storage-ev-charging' },
  { title: 'Solar Water Pumping', href: '/solutions/solar-water-pumping' },
  { title: 'Smart Microgrid Solution', href: '/solutions/smart-microgrid' },
];

const productServices = [
  {
    id: 'lithium',
    title: 'Lithium Battery Storage',
    specs: '5 kWh – 500 kWh+',
    href: '/products/energy-storage',
    icon: BatteryCharging,
  },
  {
    id: 'ev',
    title: 'EV Charging Stations',
    specs: '7.4 kW – 240 kW',
    href: '/products/ev-charging',
    icon: Zap,
  },
  {
    id: 'solar',
    title: 'Solar Power Plants',
    specs: '3 kW – MW+ Scale',
    href: '/products/solar-power',
    icon: Sun,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const [mobileSolutionsExpanded, setMobileSolutionsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > (window.innerHeight - 80));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  const isDarkHeader = isHome && !pastHero;

  return (
    <header
      id="site-header"
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isDarkHeader
          ? scrolled
            ? 'bg-slate-950/70 backdrop-blur-xl py-2'
            : 'bg-transparent py-4'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm py-2'
            : 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm py-3'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Sunloop Energy — Home">
          <img
            src="/images/logo.png"
            alt="Sunloop Energy"
            className={`h-9 sm:h-10 w-auto object-contain transition-all group-hover:scale-105 ${isDarkHeader ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className={`hidden items-center gap-5 lg:gap-6 text-sm font-medium xl:flex transition-colors duration-300 ${isDarkHeader ? 'text-white/90' : 'text-slate-700'}`}
        >
          <Link
            href="/"
            className={`transition py-2 relative whitespace-nowrap ${
              pathname === '/' ? 'text-[#E86526] font-semibold' : 'hover:text-[#E86526]'
            }`}
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 py-2 font-medium transition hover:text-[#E86526] focus:outline-none"
            >
              <span>Solutions</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 opacity-60 ${
                  solutionsOpen ? 'rotate-180 text-[#E86526]' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-black/10 bg-white p-1.5 text-left shadow-xl"
                  role="menu"
                >
                  <div className="space-y-0.5">
                    {solutionServices.map((solution) => (
                      <Link
                        key={solution.title}
                        href={solution.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block w-full rounded-lg px-4 py-2.5 text-sm font-medium text-brand-ink transition hover:bg-orange-50/60 hover:text-[#E86526]"
                        role="menuitem"
                      >
                        {solution.title}
                      </Link>
                    ))}
                    <div className="border-t border-black/5 my-0.5 pt-0.5">
                      <Link
                        href="/solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="block w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-[#E86526] hover:bg-orange-50/80 transition"
                        role="menuitem"
                      >
                        All Solutions →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 py-2 transition hover:text-[#E86526] font-medium focus:outline-none"
            >
              <span>Products</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 opacity-60 ${
                  dropdownOpen ? 'rotate-180 text-[#E86526]' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-black/10 bg-white p-1.5 shadow-xl z-50 overflow-hidden text-left"
                  role="menu"
                >
                  <div className="space-y-0.5">
                    <Link
                      href="/products/energy-storage"
                      onClick={() => setDropdownOpen(false)}
                      className="block w-full rounded-lg px-4 py-2.5 text-sm font-medium text-brand-ink hover:text-[#E86526] hover:bg-orange-50/60 transition"
                      role="menuitem"
                    >
                      Lithium Battery Storage
                    </Link>
                    <Link
                      href="/products/ev-charging"
                      onClick={() => setDropdownOpen(false)}
                      className="block w-full rounded-lg px-4 py-2.5 text-sm font-medium text-brand-ink hover:text-[#E86526] hover:bg-orange-50/60 transition"
                      role="menuitem"
                    >
                      EV Fast Chargers
                    </Link>
                    <Link
                      href="/products/solar-power"
                      onClick={() => setDropdownOpen(false)}
                      className="block w-full rounded-lg px-4 py-2.5 text-sm font-medium text-brand-ink hover:text-[#E86526] hover:bg-orange-50/60 transition"
                      role="menuitem"
                    >
                      Solar Power Plants
                    </Link>
                    <div className="border-t border-black/5 my-0.5 pt-0.5">
                      <Link
                        href="/products"
                        onClick={() => setDropdownOpen(false)}
                        className="block w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-[#E86526] hover:bg-orange-50/80 transition"
                        role="menuitem"
                      >
                        All Products →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dedicated top-level links for Home Owners and Business Owners */}
          <Link
            href="/solutions/home-owners"
            className={`transition py-2 relative whitespace-nowrap ${
              pathname === '/solutions/home-owners' ? 'text-[#E86526] font-semibold' : 'hover:text-[#E86526]'
            }`}
          >
            Home Owners
          </Link>

          <Link
            href="/solutions/business-owners"
            className={`transition py-2 relative whitespace-nowrap ${
              pathname === '/solutions/business-owners' ? 'text-[#E86526] font-semibold' : 'hover:text-[#E86526]'
            }`}
          >
            Business Owners
          </Link>

          {/* AI Portal — subtle text link */}
          <Link
            href="/ai-portal"
            className={`flex items-center gap-1.5 py-2 font-medium transition whitespace-nowrap hover:text-[#E86526] ${
              pathname === '/ai-portal' ? 'text-[#E86526]' : ''
            }`}
          >
            <Bot className={`h-4 w-4 ${isDarkHeader ? 'text-white/70' : 'text-[#E86526]'}`} />
            AI Portal
          </Link>

          <Link href="/company" className="transition hover:text-[#E86526] whitespace-nowrap py-2">
            Company
          </Link>

          {/* Primary CTA — the only prominent button */}
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-lg bg-[#E86526] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#c95315] transition ml-1"
          >
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`xl:hidden flex items-center justify-center h-11 w-11 rounded-lg transition ${isDarkHeader ? 'text-white hover:bg-white/10' : 'text-brand-ink hover:bg-slate-100'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-black/10 bg-white shadow-xl overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="container grid gap-1 py-4 text-sm font-medium">
              <Link
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 min-h-[44px] flex items-center hover:bg-slate-50 text-brand-ink"
                href="/"
              >
                Home
              </Link>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  onClick={() => setMobileSolutionsExpanded(!mobileSolutionsExpanded)}
                  aria-expanded={mobileSolutionsExpanded}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 min-h-[44px] font-medium text-brand-ink hover:bg-slate-50"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsExpanded ? 'rotate-180 text-brand-primary' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileSolutionsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="ml-4 mt-1 space-y-0.5 border-l-2 border-brand-primary/20 py-1 pl-4 overflow-hidden"
                    >
                      {solutionServices.map((solution) => (
                        <Link
                          key={solution.title}
                          href={solution.href}
                          onClick={() => setMobileOpen(false)}
                          className="block w-full rounded-lg py-2.5 px-3 min-h-[44px] flex items-center text-sm text-brand-ink hover:bg-orange-50/50 hover:text-brand-primary"
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                  aria-expanded={mobileProductsExpanded}
                  className="w-full flex items-center justify-between rounded-lg px-4 py-3 min-h-[44px] text-brand-ink hover:bg-slate-50 font-medium"
                >
                  <span>Products</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsExpanded ? 'rotate-180 text-brand-primary' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileProductsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="pl-4 py-1 space-y-0.5 border-l-2 border-brand-primary/20 ml-4 mt-1 overflow-hidden"
                    >
                      {productServices.map((svc) => (
                        <Link
                          key={svc.id}
                          onClick={() => setMobileOpen(false)}
                          href={svc.href}
                          className="block rounded-lg py-2.5 px-3 min-h-[44px] hover:bg-orange-50/50"
                        >
                          <strong className="block text-sm text-brand-ink font-semibold">{svc.title}</strong>
                          <span className="text-xs text-brand-primary font-medium">{svc.specs}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 min-h-[44px] flex items-center hover:bg-slate-50 text-brand-ink font-medium"
                href="/solutions/home-owners"
              >
                Home Owners
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 min-h-[44px] flex items-center hover:bg-slate-50 text-brand-ink font-medium"
                href="/solutions/business-owners"
              >
                Business Owners
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 min-h-[44px] flex items-center gap-2 text-brand-primary font-semibold hover:bg-orange-50/50"
                href="/ai-portal"
              >
                <Bot className="h-4 w-4" /> AI Portal
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 min-h-[44px] flex items-center hover:bg-slate-50 text-brand-ink"
                href="/company"
              >
                Company
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 min-h-[44px] flex items-center justify-center bg-brand-primary text-white text-center font-semibold mt-2"
                href="/contact"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
