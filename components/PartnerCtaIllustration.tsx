'use client';

import React from 'react';

/**
 * Clean Horizontal Clean Energy Ecosystem Illustration
 * Seamless vector artwork showing Solar PV array, Smart Energy Hub, and Sunloop ESS + EV Charger.
 * Designed to fit horizontally side-by-side on desktop/tablet, and as a clean horizontal banner.
 */
export function PartnerCtaVectorArt({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {/* Ambient Atmosphere */}
        <radialGradient id="cta-ambient-sun" cx="20%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E86526" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#EA580C" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0A0F1D" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="cta-ambient-ess" cx="80%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0A0F1D" stopOpacity="0" />
        </radialGradient>

        {/* Photovoltaic Cell Gradients */}
        <linearGradient id="cta-pv-face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="cta-pv-glint" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="40%" stopColor="#E86526" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="cta-glow-orange" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#E86526" floodOpacity="0.75" />
        </filter>
        <filter id="cta-glow-green" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Atmospheric Glow Backdrops */}
      <rect width="100%" height="100%" fill="url(#cta-ambient-sun)" rx="16" />
      <rect width="100%" height="100%" fill="url(#cta-ambient-ess)" rx="16" />

      {/* Tech Blueprint Horizon Line */}
      <line x1="20" y1="230" x2="500" y2="230" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="240" x2="490" y2="240" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" />

      {/* Constellation Regional Partner Nodes Across India */}
      <g opacity="0.35" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 5">
        <line x1="60" y1="50" x2="170" y2="70" />
        <line x1="170" y1="70" x2="260" y2="40" />
        <line x1="260" y1="40" x2="360" y2="65" />
        <line x1="360" y1="65" x2="460" y2="50" />
      </g>
      <circle cx="60" cy="50" r="2.5" fill="#E86526" />
      <circle cx="170" cy="70" r="3" fill="#38BDF8" />
      <circle cx="260" cy="40" r="2.5" fill="#FEF08A" />
      <circle cx="360" cy="65" r="3" fill="#10B981" />
      <circle cx="460" cy="50" r="2.5" fill="#06B6D4" />

      {/* ========================================================
          LEFT: COMMERCIAL / UTILITY SOLAR ARRAY
          ======================================================== */}
      <g id="cta-solar-array" transform="translate(25, 90)">
        {/* Support Mounts */}
        <line x1="45" y1="85" x2="45" y2="140" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="125" y1="65" x2="125" y2="140" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />

        {/* Solar PV Surface */}
        <polygon
          points="0,95 125,50 180,72 40,126"
          fill="url(#cta-pv-face)"
          stroke="#94A3B8"
          strokeWidth="1.75"
        />
        <polygon
          points="0,95 125,50 180,72 40,126"
          fill="url(#cta-pv-glint)"
        />

        {/* Grid Cells */}
        <line x1="42" y1="80" x2="80" y2="114" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
        <line x1="84" y1="65" x2="122" y2="99" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
        <line x1="126" y1="52" x2="164" y2="86" stroke="#38BDF8" strokeWidth="0.8" opacity="0.7" />
        <line x1="15" y1="104" x2="155" y2="61" stroke="#E86526" strokeWidth="1.2" opacity="0.85" />

        {/* Sparkle Glare */}
        <path d="M75 75 L78 71 L81 75 L78 79 Z" fill="#FFFFFF" opacity="0.95" />

        {/* Label Chip */}
        <rect x="25" y="125" width="62" height="18" rx="4" fill="#0F172A" stroke="#E86526" strokeWidth="1" />
        <text x="56" y="138" textAnchor="middle" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" fill="#FDBA74">
          SOLAR PV
        </text>
      </g>

      {/* ========================================================
          CENTER: SUNLOOP CONNECTED ENERGY NEXUS
          ======================================================== */}
      <g id="cta-energy-nexus" transform="translate(255, 140)">
        {/* Pulsing Concentric Radar Rings */}
        <circle cx="0" cy="0" r="36" stroke="#E86526" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
        <circle cx="0" cy="0" r="26" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.75" />
        
        {/* Sunloop Brand Loop Emblem */}
        <path
          d="M-10 -7 C-4 -14, 4 -14, 10 -7 C15 -1, 15 6, 9 10 C3 14, -5 13, -10 6 C-15 0, -14 -9, -5 -11"
          stroke="#E86526"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#cta-glow-orange)"
        />
        <circle cx="0" cy="0" r="4.5" fill="#10B981" filter="url(#cta-glow-green)" />

        {/* Horizontal Energy Conduits */}
        <path d="M-36 0 L-68 0 C-82 0, -88 40, -100 50" stroke="#E86526" strokeWidth="2" fill="none" filter="url(#cta-glow-orange)" />
        <path d="M36 0 L68 0 C82 0, 88 40, 100 50" stroke="#06B6D4" strokeWidth="2" fill="none" />

        {/* Central Pan-India Network Badge */}
        <rect x="-50" y="45" width="100" height="22" rx="11" fill="#0F172A" stroke="#E86526" strokeWidth="1.25" />
        <text x="0" y="59" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#FFFFFF">
          PAN-INDIA NETWORK
        </text>
      </g>

      {/* ========================================================
          RIGHT: SUNLOOP ESS BATTERY CONTAINER & EV FAST CHARGER
          ======================================================== */}
      <g id="cta-ess-charger" transform="translate(365, 105)">
        {/* Sunloop Lithium ESS Unit */}
        <rect x="0" y="20" width="62" height="105" rx="4" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
        <line x1="10" y1="35" x2="35" y2="35" stroke="#E86526" strokeWidth="2" strokeLinecap="round" />
        
        {/* Battery SOC Green Indicator Bars */}
        <rect x="10" y="46" width="9" height="8" rx="1.5" fill="#10B981" filter="url(#cta-glow-green)" />
        <rect x="23" y="46" width="9" height="8" rx="1.5" fill="#10B981" filter="url(#cta-glow-green)" />
        <rect x="36" y="46" width="9" height="8" rx="1.5" fill="#10B981" filter="url(#cta-glow-green)" />
        
        <rect x="10" y="64" width="42" height="2.5" fill="#475569" />
        <rect x="10" y="73" width="42" height="2.5" fill="#475569" />
        <rect x="10" y="82" width="42" height="2.5" fill="#475569" />
        <rect x="10" y="91" width="42" height="2.5" fill="#475569" />

        {/* Dual Fast EV Charger Pedestal */}
        <rect x="74" y="35" width="28" height="90" rx="5" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
        <rect x="79" y="42" width="18" height="5" rx="1.5" fill="#10B981" />
        
        {/* Interactive Charger Screen with Lightning */}
        <rect x="80" y="54" width="16" height="24" rx="2" fill="#020617" stroke="#38BDF8" strokeWidth="1" />
        <path d="M89 60 L86 67 H91 L88 74" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Charging Cable */}
        <path d="M102 80 C112 86, 114 104, 102 115" stroke="#06B6D4" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Label Chip */}
        <rect x="24" y="115" width="60" height="18" rx="4" fill="#0F172A" stroke="#10B981" strokeWidth="1" />
        <text x="54" y="128" textAnchor="middle" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" fill="#6EE7B7">
          ESS + EV
        </text>
      </g>
    </svg>
  );
}

/**
 * Standard PartnerCtaIllustration: Backwards-compatible export
 */
export function PartnerCtaIllustration() {
  return null;
}
