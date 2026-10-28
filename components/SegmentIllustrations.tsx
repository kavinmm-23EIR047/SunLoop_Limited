'use client';

import React from 'react';

// ============================================================================
// 1. ILLUSTRATOR ICONS (Badges for Card Headers)
// ============================================================================

/**
 * Residential / Homeowners Illustrator Icon
 * Modern eco-home with rooftop solar array, radiant sun and energy spark
 */
export function HomeownerIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="home-icon-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FFEDD5" />
        </linearGradient>
        <linearGradient id="home-icon-solar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E86526" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
        <linearGradient id="home-icon-sun" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>

      {/* Background Rounded Squircle */}
      <rect width="48" height="48" rx="14" fill="url(#home-icon-bg)" stroke="#FDBA74" strokeWidth="1.5" />

      {/* Sun Rays */}
      <circle cx="36" cy="12" r="4.5" fill="url(#home-icon-sun)" />
      <path d="M36 4.5V6.5M36 17.5V19.5M28.5 12H30.5M41.5 12H43.5M30.7 6.7L32.1 8.1M39.9 15.9L41.3 17.3M41.3 6.7L39.9 8.1M32.1 15.9L30.7 17.3" stroke="#F59E0B" strokeWidth="1.25" strokeLinecap="round" />

      {/* Modern House Base */}
      <path d="M11 25.5L24 15L37 25.5V38.5C37 39.6 36.1 40.5 35 40.5H13C11.9 40.5 11 39.6 11 38.5V25.5Z" fill="#FFFFFF" stroke="#9A3412" strokeWidth="1.75" strokeLinejoin="round" />
      
      {/* Front Door & Window */}
      <rect x="21" y="30" width="6" height="10.5" rx="1.5" fill="#FFEDD5" stroke="#C2410C" strokeWidth="1.2" />
      <rect x="14" y="27" width="4.5" height="4.5" rx="1" fill="#FEF3C7" stroke="#EA580C" strokeWidth="1" />
      <rect x="29.5" y="27" width="4.5" height="4.5" rx="1" fill="#FEF3C7" stroke="#EA580C" strokeWidth="1" />

      {/* Solar Panel on Left Roof Pitch */}
      <polygon points="15,22.5 23.5,15.5 25.5,17.5 17,24.5" fill="url(#home-icon-solar)" stroke="#7C2D12" strokeWidth="1" />
      <line x1="19.2" y1="19" x2="21.2" y2="21" stroke="#FED7AA" strokeWidth="0.8" />

      {/* Energy Sparkle */}
      <path d="M24 23L22.5 26.5H25.5L24 30" stroke="#E86526" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Commercial / Business Illustrator Icon
 * Modern commercial high-rise building with solar canopy and EV charge lightning
 */
export function BusinessIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="biz-icon-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="100%" stopColor="#D1FAE5" />
        </linearGradient>
        <linearGradient id="biz-icon-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="biz-icon-bldg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E6F4EA" />
        </linearGradient>
      </defs>

      {/* Background Rounded Squircle */}
      <rect width="48" height="48" rx="14" fill="url(#biz-icon-bg)" stroke="#A7F3D0" strokeWidth="1.5" />

      {/* Rear High-Rise Building */}
      <rect x="25" y="10" width="14" height="30" rx="2" fill="url(#biz-icon-bldg)" stroke="#065F46" strokeWidth="1.5" />
      {/* Rear Windows */}
      <line x1="28" y1="14" x2="31" y2="14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="14" x2="36" y2="14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="18" x2="31" y2="18" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="18" x2="36" y2="18" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="22" x2="31" y2="22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="22" x2="36" y2="22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />

      {/* Front Modern Office / Facility */}
      <rect x="10" y="18" width="17" height="22" rx="2" fill="#FFFFFF" stroke="#065F46" strokeWidth="1.75" />
      
      {/* Front Windows */}
      <rect x="13.5" y="22" width="4" height="4" rx="0.75" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
      <rect x="19.5" y="22" width="4" height="4" rx="0.75" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
      <rect x="13.5" y="28" width="4" height="4" rx="0.75" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
      <rect x="19.5" y="28" width="4" height="4" rx="0.75" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
      
      {/* Main Glass Door */}
      <rect x="16.5" y="34" width="4.5" height="6" rx="0.5" fill="#10B981" />

      {/* Rooftop Solar Canopy Array */}
      <polygon points="9,18 18,14 28,14 19,18" fill="url(#biz-icon-green)" stroke="#064E3B" strokeWidth="1" />
      <line x1="14" y1="16" x2="23" y2="16" stroke="#A7F3D0" strokeWidth="0.75" />

      {/* EV Charging Pulse Badge */}
      <circle cx="34" cy="31" r="6" fill="#059669" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M34.5 28L32.5 31H35.5L33.5 34" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Utility & B2B Illustrator Icon
 * High-voltage transmission pylon, solar farm ray and containerized battery ESS
 */
export function UtilityIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ut-icon-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="ut-icon-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Background Rounded Squircle */}
      <rect width="48" height="48" rx="14" fill="url(#ut-icon-bg)" stroke="#BFDBFE" strokeWidth="1.5" />

      {/* Electrical Transmission Pylon / Tower */}
      <path d="M22 10H26M19 18H29M16 26H32M24 8V38M20 10L28 26M28 10L20 26M17 26L21 38M31 26L27 38" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ground Line */}
      <line x1="8" y1="40" x2="40" y2="40" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left Utility Solar Panel */}
      <polygon points="7,35 15,31 16,39 8,40" fill="url(#ut-icon-blue)" stroke="#1E3A8A" strokeWidth="1" />
      
      {/* Right Mega BESS Storage Container */}
      <rect x="31" y="31" width="11" height="9" rx="1" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="1.25" />
      <line x1="34" y1="33" x2="34" y2="38" stroke="#3B82F6" strokeWidth="0.75" />
      <line x1="37" y1="33" x2="37" y2="38" stroke="#3B82F6" strokeWidth="0.75" />
      <circle cx="39.5" cy="33.5" r="0.75" fill="#22C55E" />

      {/* High-Voltage Flash Badge */}
      <circle cx="36" cy="13" r="5.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.25" />
      <path d="M36.5 10.5L34.5 13H37.5L35.5 15.5" stroke="#FFFFFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ============================================================================
// 2. LARGE BESPOKE SVG VECTOR ILLUSTRATIONS (Rich Card Visuals)
// ============================================================================

/**
 * Residential / Homeowners Hero Vector Illustration
 * Features:
 * - Architectural contemporary modern villa
 * - Rooftop Solar PV Matrix with realistic cell grids & solar glints
 * - Sunloop Lithium Home ESS Battery unit on the wall with glowing status LEDs
 * - Connected EV home charger with orange power pulse
 * - Radiant clean energy sun & atmospheric waves
 * - Floating interactive telemetry pills: "100% Self-Powered" & "24/7 Grid Security"
 */
export function HomeownersIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {/* Soft Sun Atmosphere Glow */}
        <radialGradient id="res-sun-glow" cx="80%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#FED7AA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Photovoltaic Panel Glaze Gradient */}
        <linearGradient id="res-pv-glaze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="45%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="res-pv-reflection" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="35%" stopColor="#E86526" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
        </linearGradient>

        {/* Villa Wall Warm Gradient */}
        <linearGradient id="res-wall-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>

        <linearGradient id="res-accent-wall" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Sunloop Battery Gradient */}
        <linearGradient id="res-ess-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Soft Shadows */}
        <filter id="res-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.07" />
        </filter>
        <filter id="res-glow-orange" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#E86526" floodOpacity="0.5" />
        </filter>
        <filter id="res-glow-green" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10B981" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Atmospheric Background Glow */}
      <rect width="540" height="380" fill="url(#res-sun-glow)" rx="24" />

      {/* Radiant Sun in Sky */}
      <g transform="translate(420, 70)">
        {/* Soft Outer Halo */}
        <circle cx="0" cy="0" r="48" fill="#FDBA74" opacity="0.25" />
        <circle cx="0" cy="0" r="32" fill="#FED7AA" opacity="0.4" />
        <circle cx="0" cy="0" r="20" fill="#F97316" />
        <circle cx="-3" cy="-3" r="18" fill="#FB923C" />
        <circle cx="-6" cy="-6" r="6" fill="#FEF08A" opacity="0.8" />

        {/* Irradiance Ray Vectors */}
        <g stroke="#F97316" strokeWidth="1.75" strokeLinecap="round" opacity="0.75">
          <line x1="0" y1="-28" x2="0" y2="-36" />
          <line x1="0" y1="28" x2="0" y2="36" />
          <line x1="-28" y1="0" x2="-36" y2="0" />
          <line x1="28" y1="0" x2="36" y2="0" />
          <line x1="-20" y1="-20" x2="-26" y2="-26" />
          <line x1="20" y1="20" x2="26" y2="26" />
          <line x1="20" y1="-20" x2="26" y2="-26" />
          <line x1="-20" y1="20" x2="-26" y2="26" />
        </g>
      </g>

      {/* Solar Irradiance Energy Beams to Roof */}
      <path
        d="M395 85 L280 160"
        stroke="#F97316"
        strokeWidth="1.2"
        strokeDasharray="4 6"
        opacity="0.4"
      />
      <path
        d="M410 95 L340 168"
        stroke="#E86526"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.5"
      />

      {/* Ground Foundation Horizon */}
      <path
        d="M30 330 C120 326 260 328 380 324 C440 322 490 325 520 327"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 342 C160 338 310 340 430 337 C480 335 510 338 520 340"
        stroke="#E2E8F0"
        strokeWidth="1.2"
        strokeDasharray="6 8"
      />

      {/* ========================================================
          MODERN ARCHITECTURAL ECO-HOME
          ======================================================== */}
      <g filter="url(#res-shadow)">
        {/* Main Villa Building Body */}
        <rect x="80" y="180" width="300" height="145" rx="8" fill="url(#res-wall-grad)" stroke="#94A3B8" strokeWidth="1.5" />
        
        {/* First Floor Architectural Balcony / Terrace Inset */}
        <rect x="80" y="180" width="130" height="145" fill="url(#res-accent-wall)" stroke="#CBD5E1" strokeWidth="1" />
        <rect x="95" y="200" width="100" height="42" rx="4" fill="#0F172A" opacity="0.85" />
        {/* Balcony Glass Panel */}
        <rect x="95" y="244" width="100" height="16" fill="#38BDF8" opacity="0.3" stroke="#0284C7" strokeWidth="1" />
        <line x1="95" y1="205" x2="195" y2="205" stroke="#38BDF8" strokeWidth="0.75" opacity="0.5" />

        {/* Ground Floor Panoramic Living Room Glass Windows */}
        <rect x="228" y="238" width="136" height="82" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
        {/* Window Interior Warmth & Mullions */}
        <rect x="232" y="242" width="62" height="74" fill="#FEF3C7" opacity="0.15" />
        <rect x="298" y="242" width="62" height="74" fill="#FEF3C7" opacity="0.12" />
        <line x1="296" y1="238" x2="296" y2="320" stroke="#475569" strokeWidth="1.5" />
        <line x1="232" y1="280" x2="360" y2="280" stroke="#475569" strokeWidth="1" strokeDasharray="2 3" />

        {/* Contemporary Front Entrance Door */}
        <rect x="110" y="268" width="38" height="57" rx="2" fill="#E86526" stroke="#C2410C" strokeWidth="1.5" />
        <circle cx="140" cy="298" r="2.5" fill="#FFFFFF" />
        <line x1="104" y1="325" x2="154" y2="325" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

        {/* Pitched Architectural Roof with Solar Mount */}
        <polygon
          points="60,180 230,118 400,180"
          fill="#1E293B"
          stroke="#0F172A"
          strokeWidth="2"
        />

        {/* Fascia & Eaves Line */}
        <polygon
          points="54,183 230,115 406,183 400,187 230,121 60,187"
          fill="#E86526"
        />

        {/* ========================================================
            ROOFTOP SOLAR PHOTOVOLTAIC (PV) ARRAY
            ======================================================== */}
        <g id="res-solar-array">
          {/* Panel Base Rack 1 (Left Roof Slope) */}
          <polygon
            points="90,174 216,128 222,148 98,178"
            fill="url(#res-pv-glaze)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          {/* Panel Glaze Highlight */}
          <polygon
            points="90,174 216,128 222,148 98,178"
            fill="url(#res-pv-reflection)"
          />
          {/* PV Cell Grid Lines Left */}
          <line x1="122" y1="162" x2="128" y2="176" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
          <line x1="154" y1="150" x2="160" y2="168" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
          <line x1="186" y1="138" x2="192" y2="158" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
          <line x1="94" y1="175" x2="219" y2="137" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />

          {/* Panel Base Rack 2 (Right Roof Slope) */}
          <polygon
            points="238,128 368,174 360,178 232,148"
            fill="url(#res-pv-glaze)"
            stroke="#475569"
            strokeWidth="1.5"
          />
          {/* Panel Glaze Highlight */}
          <polygon
            points="238,128 368,174 360,178 232,148"
            fill="url(#res-pv-reflection)"
          />
          {/* PV Cell Grid Lines Right */}
          <line x1="270" y1="138" x2="264" y2="158" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
          <line x1="302" y1="150" x2="296" y2="168" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
          <line x1="334" y1="162" x2="328" y2="176" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
          <line x1="235" y1="137" x2="364" y2="175" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />

          {/* Solar Panel Specular Sparkles */}
          <path d="M150 144 L154 140 L158 144 L154 148 Z" fill="#FFFFFF" opacity="0.9" />
          <path d="M290 148 L293 145 L296 148 L293 151 Z" fill="#FFFFFF" opacity="0.9" />
        </g>
      </g>

      {/* ========================================================
          SUNLOOP LITHIUM HOME ESS BATTERY (Mounted on Side Wall)
          ======================================================== */}
      <g id="res-wall-ess" transform="translate(390, 205)" filter="url(#res-shadow)">
        {/* ESS Wall Bracket Mounting & Shadow */}
        <rect x="0" y="0" width="58" height="98" rx="6" fill="url(#res-ess-body)" stroke="#94A3B8" strokeWidth="1.5" />
        
        {/* Glass Front Screen Inset */}
        <rect x="5" y="8" width="48" height="28" rx="3" fill="#0F172A" />
        {/* Sunloop Brand Orange Indicator Line */}
        <line x1="9" y1="14" x2="26" y2="14" stroke="#E86526" strokeWidth="2" strokeLinecap="round" />
        {/* Battery SOC LED Status Bar */}
        <rect x="9" y="22" width="7" height="8" rx="1" fill="#10B981" filter="url(#res-glow-green)" />
        <rect x="18" y="22" width="7" height="8" rx="1" fill="#10B981" filter="url(#res-glow-green)" />
        <rect x="27" y="22" width="7" height="8" rx="1" fill="#10B981" filter="url(#res-glow-green)" />
        <rect x="36" y="22" width="7" height="8" rx="1" fill="#10B981" filter="url(#res-glow-green)" />

        {/* Lower Vent Ribs */}
        <line x1="10" y1="52" x2="48" y2="52" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="60" x2="48" y2="60" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="68" x2="48" y2="68" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* ESS Status Pulse Dot */}
        <circle cx="29" cy="84" r="3.5" fill="#10B981" filter="url(#res-glow-green)" />
      </g>

      {/* Energy Conduit Line from Roof PV -> Wall ESS */}
      <path
        d="M366 182 L388 182 L388 240 L390 240"
        stroke="#E86526"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#res-glow-orange)"
      />

      {/* ========================================================
          HOME SMART EV WALLBOX & CHARGING CABLE
          ======================================================== */}
      <g id="res-ev-charger" transform="translate(460, 245)">
        {/* Wallbox Enclosure */}
        <rect x="0" y="0" width="28" height="42" rx="4" fill="#0F172A" stroke="#E86526" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
        <path d="M14.5 10L12.5 14H15.5L13.5 18" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Coiled Flexible Orange Charging Cable */}
        <path
          d="M14 42 C14 55, -20 65, -30 75 C-35 80, -25 85, -15 85"
          stroke="#E86526"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Connector Plug Head */}
        <rect x="-15" y="81" width="12" height="7" rx="2" fill="#1E293B" stroke="#E86526" strokeWidth="1" />
      </g>

      {/* ========================================================
          FLOATING TELEMETRY CHIPS / BADGES (Illustrator Style)
          ======================================================== */}
      {/* Badge 1: 100% Self-Powered */}
      <g transform="translate(38, 120)" filter="url(#res-shadow)">
        <rect x="0" y="0" width="138" height="34" rx="17" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="1.5" />
        <circle cx="18" cy="17" r="7" fill="#FEF3C7" />
        <path d="M18.5 13L16.5 17H19.5L17.5 21" stroke="#E86526" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#9A3412">
          100% Self-Powered
        </text>
      </g>

      {/* Badge 2: 24/7 Energy Backup */}
      <g transform="translate(360, 312)" filter="url(#res-shadow)">
        <rect x="0" y="0" width="148" height="34" rx="17" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
        <circle cx="18" cy="17" r="5" fill="#10B981" filter="url(#res-glow-green)" />
        <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">
          24/7 Backup Security
        </text>
      </g>
    </svg>
  );
}

/**
 * Commercial / Business Hero Vector Illustration
 * Features:
 * - Multi-story corporate headquarters / manufacturing plant with tinted glass facade
 * - Rooftop commercial solar array tilted racks
 * - Dual Commercial EV Charging pedestals with EV cars / charging cords
 * - Energy flow / peak-shaving telemetry lines
 * - Floating badges: "Peak Shaving" & "30–500 kW System"
 */
export function BusinessesIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {/* Emerald Ambient Glow */}
        <radialGradient id="biz-ambient-glow" cx="80%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#D1FAE5" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="biz-bldg-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="60%" stopColor="#064E3B" />
          <stop offset="100%" stopColor="#022C22" />
        </linearGradient>

        <linearGradient id="biz-bldg-facade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>

        <linearGradient id="biz-solar-panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#047857" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        {/* Filters */}
        <filter id="biz-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#064E3B" floodOpacity="0.1" />
        </filter>
        <filter id="biz-glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10B981" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Ambient Backdrop */}
      <rect width="500" height="360" fill="url(#biz-ambient-glow)" rx="24" />

      {/* Tech Isometric Blueprint Grid in Background */}
      <g opacity="0.25" stroke="#059669" strokeWidth="0.75" strokeDasharray="3 5">
        <line x1="40" y1="180" x2="460" y2="180" />
        <line x1="40" y1="240" x2="460" y2="240" />
        <line x1="200" y1="60" x2="200" y2="330" />
        <line x1="340" y1="60" x2="340" y2="330" />
      </g>

      {/* Ground Horizon */}
      <line x1="20" y1="315" x2="480" y2="315" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="326" x2="460" y2="326" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 6" />

      {/* ========================================================
          MODERN COMMERCIAL FACILITY / HEADQUARTERS
          ======================================================== */}
      {/* Secondary Background Wing */}
      <g filter="url(#biz-shadow)">
        <rect x="70" y="110" width="130" height="205" rx="4" fill="url(#biz-bldg-facade)" stroke="#94A3B8" strokeWidth="1.5" />
        {/* Wing Windows Grid */}
        <g fill="#059669" opacity="0.3">
          <rect x="85" y="125" width="22" height="14" rx="2" />
          <rect x="115" y="125" width="22" height="14" rx="2" />
          <rect x="145" y="125" width="22" height="14" rx="2" />
          <rect x="85" y="150" width="22" height="14" rx="2" />
          <rect x="115" y="150" width="22" height="14" rx="2" />
          <rect x="145" y="150" width="22" height="14" rx="2" />
          <rect x="85" y="175" width="22" height="14" rx="2" />
          <rect x="115" y="175" width="22" height="14" rx="2" />
          <rect x="145" y="175" width="22" height="14" rx="2" />
          <rect x="85" y="200" width="22" height="14" rx="2" />
          <rect x="115" y="200" width="22" height="14" rx="2" />
          <rect x="145" y="200" width="22" height="14" rx="2" />
        </g>
      </g>

      {/* Primary Commercial Tower */}
      <g filter="url(#biz-shadow)">
        <rect x="175" y="65" width="170" height="250" rx="6" fill="url(#biz-bldg-glass)" stroke="#047857" strokeWidth="2" />
        
        {/* Curtain Wall Glass Panels */}
        <g stroke="#10B981" strokeWidth="0.8" opacity="0.6">
          <line x1="215" y1="65" x2="215" y2="315" />
          <line x1="255" y1="65" x2="255" y2="315" />
          <line x1="295" y1="65" x2="295" y2="315" />

          <line x1="175" y1="100" x2="345" y2="100" />
          <line x1="175" y1="135" x2="345" y2="135" />
          <line x1="175" y1="170" x2="345" y2="170" />
          <line x1="175" y1="205" x2="345" y2="205" />
          <line x1="175" y1="240" x2="345" y2="240" />
          <line x1="175" y1="275" x2="345" y2="275" />
        </g>

        {/* Diagonal Light Glaze */}
        <path d="M190 65 L270 65 L210 315 L175 315 Z" fill="#FFFFFF" opacity="0.06" />

        {/* Corporate Grand Entrance */}
        <rect x="225" y="275" width="70" height="40" rx="3" fill="#047857" stroke="#34D399" strokeWidth="1.5" />
        <rect x="238" y="285" width="20" height="30" fill="#D1FAE5" opacity="0.7" />
        <rect x="262" y="285" width="20" height="30" fill="#D1FAE5" opacity="0.7" />

        {/* ========================================================
            ROOFTOP COMMERCIAL SOLAR PV ARRAY RACKS
            ======================================================== */}
        <g id="biz-roof-solar">
          {/* Rack Row 1 */}
          <polygon points="182,58 245,45 250,56 187,69" fill="url(#biz-solar-panel)" stroke="#34D399" strokeWidth="1.2" />
          <line x1="203" y1="53" x2="208" y2="64" stroke="#6EE7B7" strokeWidth="0.8" />
          <line x1="224" y1="49" x2="229" y2="60" stroke="#6EE7B7" strokeWidth="0.8" />

          {/* Rack Row 2 */}
          <polygon points="260,58 323,45 328,56 265,69" fill="url(#biz-solar-panel)" stroke="#34D399" strokeWidth="1.2" />
          <line x1="281" y1="53" x2="286" y2="64" stroke="#6EE7B7" strokeWidth="0.8" />
          <line x1="302" y1="49" x2="307" y2="60" stroke="#6EE7B7" strokeWidth="0.8" />
          
          {/* Rooftop Solar Glare Sparkle */}
          <path d="M250 48 L253 44 L256 48 L253 52 Z" fill="#FFFFFF" />
        </g>
      </g>

      {/* ========================================================
          COMMERCIAL DUAL EV CHARGING PLAZA
          ======================================================== */}
      <g id="biz-ev-station" transform="translate(365, 205)" filter="url(#biz-shadow)">
        {/* EV Pedestal Base */}
        <rect x="0" y="0" width="36" height="110" rx="6" fill="#0F172A" stroke="#059669" strokeWidth="2" />
        
        {/* Neon Emerald Top Accent */}
        <rect x="4" y="5" width="28" height="6" rx="2" fill="#10B981" filter="url(#biz-glow-emerald)" />
        
        {/* Interactive Touch Display */}
        <rect x="6" y="20" width="24" height="34" rx="3" fill="#022C22" stroke="#34D399" strokeWidth="1" />
        {/* Charging Lightning Icon on screen */}
        <path d="M18.5 27 L16 34 H20.5 L18 41" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="47" r="2" fill="#10B981" />

        {/* Dual Cable Holders & Plugs */}
        <path d="M0 65 C-12 70, -14 90, -4 100" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M36 65 C48 70, 50 90, 40 100" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        
        {/* Charging Bay Marking on Ground */}
        <polygon points="-30,105 66,105 78,118 -42,118" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
        <text x="10" y="115" fontFamily="sans-serif" fontSize="8" fontWeight="800" fill="#047857">EV</text>
      </g>

      {/* ========================================================
          FLOATING BUSINESS BADGES / METRICS
          ======================================================== */}
      {/* Badge 1: Peak Demand Shaving */}
      <g transform="translate(35, 75)" filter="url(#biz-shadow)">
        <rect x="0" y="0" width="134" height="34" rx="17" fill="#FFFFFF" stroke="#6EE7B7" strokeWidth="1.5" />
        <circle cx="18" cy="17" r="7" fill="#D1FAE5" />
        <path d="M14 20 L17 15 L20 18 L23 13" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#065F46">
          -40% Peak Demand
        </text>
      </g>

      {/* Badge 2: 30 - 500 kW Commercial */}
      <g transform="translate(26, 260)" filter="url(#biz-shadow)">
        <rect x="0" y="0" width="142" height="34" rx="17" fill="#022C22" stroke="#10B981" strokeWidth="1.5" />
        <circle cx="18" cy="17" r="5" fill="#10B981" filter="url(#biz-glow-emerald)" />
        <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#ECFDF5">
          30 - 500 kW Commercial
        </text>
      </g>
    </svg>
  );
}

/**
 * Utilities & B2B Hero Vector Illustration
 * Features:
 * - Utility-Scale Solar Farm Arrays stretching to horizon
 * - 40ft Industrial Containerized BESS Battery enclosure with HVAC cooling & hazard sign
 * - High-Voltage Transmission Substation Pylon & power lines
 * - Cloud SCADA telemetry dispatch
 * - Floating badges: "1 MW+ Utility Scale" & "SCADA Microgrid"
 */
export function UtilityIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {/* Cobalt Ambient Glow */}
        <radialGradient id="ut-ambient-glow" cx="80%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#DBEAFE" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="ut-container-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        <linearGradient id="ut-solar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="60%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        {/* Filters */}
        <filter id="ut-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1E3A8A" floodOpacity="0.1" />
        </filter>
        <filter id="ut-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#3B82F6" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Ambient Backdrop */}
      <rect width="500" height="360" fill="url(#ut-ambient-glow)" rx="24" />

      {/* Grid Coordinates Coordinate Lines */}
      <g opacity="0.25" stroke="#2563EB" strokeWidth="0.75" strokeDasharray="3 5">
        <line x1="30" y1="140" x2="470" y2="140" />
        <line x1="30" y1="210" x2="470" y2="210" />
      </g>

      {/* Ground Horizon */}
      <line x1="20" y1="315" x2="480" y2="315" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

      {/* ========================================================
          HIGH-VOLTAGE TRANSMISSION PYLON (Background Gantry Tower)
          ======================================================== */}
      <g id="ut-transmission-tower" transform="translate(60, 45)" opacity="0.9">
        {/* Tower Main Lattice Truss */}
        <path
          d="M30 0 L15 150 M30 0 L45 150 M15 150 L5 270 M45 150 L55 270"
          stroke="#1E40AF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Horizontal Crossarms */}
        <line x1="0" y1="50" x2="60" y2="50" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-10" y1="95" x2="70" y2="95" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="140" x2="52" y2="140" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Cross Bracing X Braces */}
        <line x1="20" y1="50" x2="38" y2="95" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="38" y1="50" x2="20" y2="95" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="16" y1="95" x2="42" y2="140" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="42" y1="95" x2="16" y2="140" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="13" y1="140" x2="47" y2="200" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="47" y1="140" x2="13" y2="200" stroke="#3B82F6" strokeWidth="1.5" />

        {/* Insulator Bells & Suspension */}
        <circle cx="0" cy="55" r="2.5" fill="#60A5FA" />
        <circle cx="60" cy="55" r="2.5" fill="#60A5FA" />
        <circle cx="-10" cy="100" r="2.5" fill="#60A5FA" />
        <circle cx="70" cy="100" r="2.5" fill="#60A5FA" />

        {/* Overhead Catenary Power Transmission Lines */}
        <path d="M60 55 C160 85, 300 70, 440 45" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.65" />
        <path d="M70 100 C170 125, 320 115, 440 90" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.65" />
      </g>

      {/* ========================================================
          UTILITY-SCALE SOLAR FARM ARRAYS (Vanishing Perspective)
          ======================================================== */}
      <g id="ut-solar-farm" transform="translate(130, 200)">
        {/* Array Row 1 */}
        <polygon points="0,75 55,50 115,50 60,75" fill="url(#ut-solar-grad)" stroke="#60A5FA" strokeWidth="1" />
        <polygon points="70,75 125,50 185,50 130,75" fill="url(#ut-solar-grad)" stroke="#60A5FA" strokeWidth="1" />
        <polygon points="140,75 195,50 255,50 200,75" fill="url(#ut-solar-grad)" stroke="#60A5FA" strokeWidth="1" />
        
        {/* Array Row 2 (Closer, Larger) */}
        <polygon points="10,110 75,80 145,80 80,110" fill="url(#ut-solar-grad)" stroke="#93C5FD" strokeWidth="1.2" />
        <polygon points="90,110 155,80 225,80 160,110" fill="url(#ut-solar-grad)" stroke="#93C5FD" strokeWidth="1.2" />
        <polygon points="170,110 235,80 305,80 240,110" fill="url(#ut-solar-grad)" stroke="#93C5FD" strokeWidth="1.2" />

        {/* Tracker Mount Posts */}
        <line x1="77" y1="110" x2="77" y2="115" stroke="#475569" strokeWidth="2" />
        <line x1="157" y1="110" x2="157" y2="115" stroke="#475569" strokeWidth="2" />
        <line x1="237" y1="110" x2="237" y2="115" stroke="#475569" strokeWidth="2" />
      </g>

      {/* ========================================================
          INDUSTRIAL 40FT CONTAINERIZED BESS UNIT
          ======================================================== */}
      <g id="ut-container-bess" transform="translate(290, 175)" filter="url(#ut-shadow)">
        {/* Concrete Foundation Plinth */}
        <rect x="-10" y="132" width="195" height="12" rx="2" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />

        {/* Heavy Duty Container Enclosure */}
        <rect x="0" y="25" width="175" height="110" rx="4" fill="url(#ut-container-grad)" stroke="#2563EB" strokeWidth="2" />
        
        {/* Roof Industrial HVAC Chillers */}
        <rect x="25" y="10" width="40" height="16" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />
        <line x1="35" y1="14" x2="55" y2="14" stroke="#94A3B8" strokeWidth="1" />
        <line x1="35" y1="18" x2="55" y2="18" stroke="#94A3B8" strokeWidth="1" />

        <rect x="95" y="10" width="40" height="16" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />
        <line x1="105" y1="14" x2="125" y2="14" stroke="#94A3B8" strokeWidth="1" />
        <line x1="105" y1="18" x2="125" y2="18" stroke="#94A3B8" strokeWidth="1" />

        {/* Ribbed Corrugation Texture */}
        <g stroke="#334155" strokeWidth="1.5">
          <line x1="20" y1="35" x2="20" y2="125" />
          <line x1="35" y1="35" x2="35" y2="125" />
          <line x1="50" y1="35" x2="50" y2="125" />
          <line x1="65" y1="35" x2="65" y2="125" />
          <line x1="80" y1="35" x2="80" y2="125" />
          <line x1="95" y1="35" x2="95" y2="125" />
          <line x1="110" y1="35" x2="110" y2="125" />
          <line x1="125" y1="35" x2="125" y2="125" />
          <line x1="140" y1="35" x2="140" y2="125" />
          <line x1="155" y1="35" x2="155" y2="125" />
        </g>

        {/* Central Access Door & Locking Bar */}
        <rect x="70" y="32" width="35" height="100" fill="#0F172A" stroke="#3B82F6" strokeWidth="1" />
        <line x1="88" y1="35" x2="88" y2="130" stroke="#60A5FA" strokeWidth="1.5" />

        {/* Safety Warning Emblem & System Telemetry Status LED */}
        <polygon points="30,45 36,55 24,55" fill="#FACC15" />
        <path d="M30 48 L30 51 M30 53 L30 54" stroke="#000000" strokeWidth="0.8" />
        
        {/* Status Indicator Bar */}
        <rect x="110" y="45" width="35" height="8" rx="2" fill="#020617" />
        <circle cx="116" cy="49" r="2" fill="#22C55E" filter="url(#ut-glow-blue)" />
        <circle cx="123" cy="49" r="2" fill="#22C55E" />
        <circle cx="130" cy="49" r="2" fill="#22C55E" />
        <circle cx="137" cy="49" r="2" fill="#38BDF8" />

        {/* Substation Ground Cable */}
        <path d="M-5 130 C-25 130, -35 150, -50 150" stroke="#3B82F6" strokeWidth="2.5" fill="none" />
      </g>

      {/* ========================================================
          FLOATING UTILITY BADGES / METRICS
          ======================================================== */}
      {/* Badge 1: 1 MW+ Microgrid Scale */}
      <g transform="translate(30, 18)" filter="url(#ut-shadow)">
        <rect x="0" y="0" width="138" height="34" rx="17" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
        <circle cx="18" cy="17" r="7" fill="#DBEAFE" />
        <path d="M18.5 13 L16.5 17 H19.5 L17.5 21" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1E40AF">
          1 MW+ Microgrid
        </text>
      </g>

      {/* Badge 2: Central SCADA & AI Dispatch */}
      <g transform="translate(16, 260)" filter="url(#ut-shadow)">
        <rect x="0" y="0" width="154" height="34" rx="17" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="18" cy="17" r="5" fill="#38BDF8" filter="url(#ut-glow-blue)" />
        <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">
          SCADA &amp; AI Dispatch
        </text>
      </g>
    </svg>
  );
}

