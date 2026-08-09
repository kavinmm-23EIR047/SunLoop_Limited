'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap } from 'lucide-react';

export function BlinkingRobotIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Top Antenna Pole */}
        <line x1="20" y1="10" x2="20" y2="4" stroke="#E86526" strokeWidth="2.5" strokeLinecap="round" />

        {/* Top Antenna Glowing Signal Light (Pings) */}
        <circle cx="20" cy="3" r="2.5" fill="#10B981" />
        <circle cx="20" cy="3" r="4.5" fill="#10B981" className="animate-ping opacity-75" />

        {/* Robot Head Outer Shell */}
        <rect x="6" y="10" width="28" height="24" rx="6" fill="#1E2022" stroke="#E86526" strokeWidth="2.5" />

        {/* Side Ear Connectors */}
        <rect x="2" y="18" width="4" height="8" rx="2" fill="#E86526" />
        <rect x="34" y="18" width="4" height="8" rx="2" fill="#E86526" />

        {/* Eye Visor Glass Area */}
        <rect x="10" y="15" width="20" height="9" rx="3" fill="#0F172A" />

        {/* Left Eye (Blinks dynamically using Motion) */}
        <motion.circle
          cx="15"
          cy="19.5"
          r="2.5"
          fill="#38BDF8"
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ repeat: Infinity, duration: 3.2, times: [0, 0.45, 0.5, 0.55, 1] }}
        />

        {/* Right Eye (Blinks dynamically using Motion) */}
        <motion.circle
          cx="25"
          cy="19.5"
          r="2.5"
          fill="#38BDF8"
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ repeat: Infinity, duration: 3.2, times: [0, 0.45, 0.5, 0.55, 1] }}
        />

        {/* Digital Mouth Scanner Line */}
        <motion.rect
          x="14"
          y="27"
          width="12"
          height="2"
          rx="1"
          fill="#E86526"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        />
      </svg>
    </div>
  );
}

interface AnimatedCounterProps {
  targetValue: number;
  prefix?: string;
  unit?: string;
  duration?: number;
}

function AnimatedCounter({ targetValue, prefix = '', unit = '', duration = 1400 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutProgress * targetValue);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    const animationId = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, targetValue, duration]);

  return (
    <div ref={counterRef} className="flex items-baseline font-sans">
      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink tracking-tight leading-none">
        {prefix}{count}{unit}
      </span>
    </div>
  );
}

export default function Stats() {
  const statsList = [
    {
      id: 1,
      targetValue: 2016,
      prefix: '',
      unit: '',
      title: 'Est. 2016',
      subtitle: 'Headquartered in Coimbatore, Tamil Nadu',
      isRobot: false,
      icon: Sun,
      isDark: false,
    },
    {
      id: 2,
      targetValue: 3,
      prefix: '',
      unit: '-in-1',
      title: 'Solutions',
      subtitle: 'Solar PV + ESS Storage + EV Chargers',
      isRobot: false,
      icon: Zap,
      isDark: false,
    },
    {
      id: 3,
      targetValue: 1,
      prefix: '',
      unit: ' Unified',
      title: 'AI Portal Platform',
      subtitle: 'Real-time telemetry & autonomous robot control',
      isRobot: true,
      isDark: true,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {statsList.map((stat) => {
        const IconComp = stat.icon;
        return (
          <div
            key={stat.id}
            className={`rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-card border ${
              stat.isDark
                ? 'bg-brand-ink text-white border-brand-ink sm:col-span-2 shadow-2xl relative overflow-hidden'
                : 'bg-[#FAFAF3] text-brand-ink border-black/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              {stat.isRobot ? (
                <div className="flex items-center gap-2.5">
                  <BlinkingRobotIcon className="h-8 w-8" />
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> ROBOT BOT ONLINE
                  </span>
                </div>
              ) : (
                IconComp && (
                  <IconComp className="h-6 w-6 text-brand-primary" />
                )
              )}

              {stat.isDark && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-brand-apricot uppercase tracking-wider">
                  COMPLIMENTARY PLATFORM
                </span>
              )}
            </div>

            <AnimatedCounter
              targetValue={stat.targetValue}
              prefix={stat.prefix}
              unit={stat.unit}
            />

            <h4 className={`mt-2 text-sm font-bold ${stat.isDark ? 'text-white' : 'text-brand-ink'}`}>
              {stat.title}
            </h4>

            <p className={`mt-1 text-xs font-normal ${stat.isDark ? 'text-white/80' : 'text-brand-slate'}`}>
              {stat.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
