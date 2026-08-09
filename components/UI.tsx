'use client';

import type { ReactNode } from 'react';
import { Activity, BatteryCharging, Bot, Gauge, Leaf, Zap, Check, ArrowUpRight } from 'lucide-react';

import { motion } from 'framer-motion';

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  distance?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  once = true,
}: RevealProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.94 };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getVisible = () => {
    switch (direction) {
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getVisible()}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 25,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  distance?: number;
}) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
        };
    }
  };

  return (
    <motion.div variants={getVariants()} className={className}>
      {children}
    </motion.div>
  );
}

export function Button({
  children,
  href = '/contact',
  secondary = false,
  className = '',
  onClick,
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const base = secondary
    ? `soft-btn soft-btn--secondary ${className}`
    : `soft-btn ${className}`;
  return (
    <a href={href} onClick={onClick} className={base}>
      {children}
    </a>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-sans text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-brand-slate font-normal">{desc}</p>}
    </div>
  );
}

export function OrbVisual({ label = 'SUNLOOP AI PLATFORM' }: { label?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[540px] overflow-hidden rounded-3xl border border-black/10 bg-brand-ink text-white p-6 shadow-2xl">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-brand-primary text-white font-bold text-xs">
            S
          </div>
          <span className="font-bold tracking-wider text-white uppercase text-[11px]">{label}</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-400 font-bold text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE TELEMETRY
        </span>
      </div>

      {/* Center Metric Display */}
      <div className="py-3 text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-1 text-xs font-bold text-brand-apricot border border-white/10">
          <Bot className="h-4 w-4 text-brand-apricot" /> Autonomous AI Core Online
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Unified Energy Intelligence
        </h3>
        <p className="text-xs text-white/70 font-normal max-w-sm mx-auto">
          Solar PV · Battery Storage · EV Fast Chargers
        </p>
      </div>

      {/* Bottom Telemetry Grid */}
      <div className="grid grid-cols-3 gap-3 text-center text-xs mt-6 pt-4 border-t border-white/10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <span className="block text-white/60 text-[10px] font-semibold mb-0.5">Solar PV</span>
          <b className="font-bold text-white text-sm">48.2 kW</b>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <span className="block text-white/60 text-[10px] font-semibold mb-0.5">ESS Battery</span>
          <b className="font-bold text-white text-sm">92.4 kWh</b>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <span className="block text-white/60 text-[10px] font-semibold mb-0.5">CO₂ Offset</span>
          <b className="font-bold text-emerald-400 text-sm">210 kg</b>
        </div>
      </div>
    </div>
  );
}

export function DashboardVisual() {
  return (
    <div className="dashboard-shell relative mx-auto w-full max-w-[590px] overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-card">
      {/* Dashboard Header Bar */}
      <div className="flex items-center justify-between rounded-xl bg-brand-ink px-4 py-3 text-white">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-primary">
            <Gauge className="h-4 w-4 text-white" />
          </span>
          <span className="text-xs font-bold tracking-wide font-sans">
            AI Energy Management Portal
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-green-400">
          <i className="h-1.5 w-1.5 rounded-full bg-green-400" /> LIVE
        </span>
      </div>

      {/* Main Grid Card area */}
      <div className="grid gap-3 p-1 pt-4 sm:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-xl border border-black/5 bg-[#FAFAF3] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-brand-slate">Total Generation</p>
              <strong className="mt-1 block font-sans text-3xl font-bold text-brand-ink">
                48.2 <small className="text-sm font-semibold">kW</small>
              </strong>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-primary border border-black/5 shadow-xs">
              <Zap className="h-4 w-4" />
            </span>
          </div>

          <div className="relative mt-6 h-20">
            <svg viewBox="0 0 320 80" className="h-full w-full" preserveAspectRatio="none">
              <path
                d="M0 65 C35 60 35 40 70 48 S110 68 140 38 S180 18 210 30 S250 55 280 18 S304 18 320 8"
                fill="none"
                stroke="#E16622"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex justify-between text-[10px] font-medium text-brand-slate">
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
          </div>
        </div>

        <div className="grid gap-2.5">
          <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-3">
            <div>
              <p className="text-[11px] font-medium text-brand-slate">Solar Output</p>
              <strong className="block font-sans text-lg font-bold text-brand-ink">38.4 kW</strong>
              <span className="text-[10px] font-semibold text-green-600">Optimal Yield</span>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-50 text-brand-primary border border-orange-100">
              <Leaf className="h-4 w-4" />
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-3">
            <div>
              <p className="text-[11px] font-medium text-brand-slate">Energy Stored</p>
              <strong className="block font-sans text-lg font-bold text-brand-ink">92.4 kWh</strong>
              <span className="text-[10px] font-semibold text-blue-600">88% Capacity</span>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <BatteryCharging className="h-4 w-4" />
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-black/5 bg-brand-ink p-3 text-white">
            <div>
              <p className="text-[11px] font-medium text-white/70">Robot Bots</p>
              <strong className="block font-sans text-lg font-bold text-white">3 Active</strong>
              <span className="text-[10px] font-semibold text-green-400">Zero Faults</span>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-brand-apricot">
              <Bot className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-black/5 px-2 pt-2 text-[10px] font-medium text-brand-slate">
        <span className="flex items-center gap-1.5">
          <Bot className="h-3.5 w-3.5 text-brand-primary" /> Clean Solid Interface Active
        </span>
        <span>Updated real-time</span>
      </div>
    </div>
  );
}
