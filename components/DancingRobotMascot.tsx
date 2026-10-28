'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface DancingRobotMascotProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isDancing?: boolean;
  mood?: 'happy' | 'thinking' | 'waving';
}

export function DancingRobotMascot({
  className = '',
  size = 'md',
  isDancing = true,
  mood = 'happy',
}: DancingRobotMascotProps) {
  // Dimensions map for responsive sizing across headers, floating buttons, and modals
  const sizeMap = {
    xs: 'w-8 h-8',
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };

  const currentSizeClass = sizeMap[size] || sizeMap.md;

  // Gentle, calm idle breathing float (no wild dancing, per user instruction)
  const floatVariants = {
    idle: {
      y: isDancing ? [0, -3, 0] : 0,
      transition: {
        duration: 3.2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Natural robot eye blinking animation:
  // Eyes stay open for ~3.3 seconds, then a crisp robotic blink shut (ry=45) for ~120ms, and snaps back open!
  const eyelidVariants = {
    blink: {
      ry: [0, 0, 0, 0, 0, 45, 0],
      transition: {
        duration: 3.6,
        repeat: Infinity,
        times: [0, 0.7, 0.88, 0.94, 0.96, 0.98, 1],
        ease: 'easeInOut',
      },
    },
  };

  const eyelidSeamVariants = {
    blink: {
      opacity: [0, 0, 0, 0, 0, 1, 0],
      transition: {
        duration: 3.6,
        repeat: Infinity,
        times: [0, 0.7, 0.88, 0.94, 0.96, 0.98, 1],
        ease: 'easeInOut',
      },
    },
  };

  // Subtle technological iris glow pulse when eyes are open
  const irisPulseVariants = {
    pulse: {
      opacity: [0.15, 0.45, 0.15],
      transition: {
        duration: 2.4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Antenna online beacon status
  const antennaBeaconVariants = {
    pulse: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.25, 1],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={floatVariants}
      animate="idle"
      className={`relative select-none shrink-0 ${currentSizeClass} ${className}`}
      aria-label="SunLoop AI Robot Assistant"
    >
      <svg
        viewBox="0 0 980 980"
        className="w-full h-full overflow-visible drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Orange Glow Filter for Eye Lens */}
          <filter id="robot-eye-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#E86526" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* ========================================================
            1. BASE ROBOT ARTWORK (Exact User Design & Brand Theme)
            ======================================================== */}
        <image
          href="/images/sunloop-robot.png"
          x="0"
          y="0"
          width="980"
          height="980"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* ========================================================
            2. ANIMATED ROBOT EYE BLINKING & IRIS GLOW
            ======================================================== */}
        {/* Left Eye (Center cx: 404, cy: 299, r: 45) */}
        <g id="robot-left-eye">
          {/* Subtle Ambient Iris Glow */}
          <motion.circle
            cx={404}
            cy={299}
            r={38}
            stroke="#E86526"
            strokeWidth={4}
            fill="none"
            filter="url(#robot-eye-glow)"
            variants={irisPulseVariants}
            animate="pulse"
          />

          {/* Motorized Robot Eyelid: Animates Closed & Open */}
          <motion.ellipse
            cx={404}
            cy={299}
            rx={45}
            fill="#0C1232"
            stroke="#060A1A"
            strokeWidth={2}
            variants={eyelidVariants}
            animate="blink"
          />

          {/* Eyelid Energy Seam Light */}
          <motion.line
            x1={404 - 42}
            y1={299}
            x2={404 + 42}
            y2={299}
            stroke="#E86526"
            strokeWidth={3}
            strokeLinecap="round"
            variants={eyelidSeamVariants}
            animate="blink"
          />
        </g>

        {/* Right Eye (Center cx: 571, cy: 296, r: 45) */}
        <g id="robot-right-eye">
          {/* Subtle Ambient Iris Glow */}
          <motion.circle
            cx={571}
            cy={296}
            r={38}
            stroke="#E86526"
            strokeWidth={4}
            fill="none"
            filter="url(#robot-eye-glow)"
            variants={irisPulseVariants}
            animate="pulse"
          />

          {/* Motorized Robot Eyelid: Animates Closed & Open */}
          <motion.ellipse
            cx={571}
            cy={296}
            rx={45}
            fill="#0C1232"
            stroke="#060A1A"
            strokeWidth={2}
            variants={eyelidVariants}
            animate="blink"
          />

          {/* Eyelid Energy Seam Light */}
          <motion.line
            x1={571 - 42}
            y1={296}
            x2={571 + 42}
            y2={296}
            stroke="#E86526"
            strokeWidth={3}
            strokeLinecap="round"
            variants={eyelidSeamVariants}
            animate="blink"
          />
        </g>

        {/* ========================================================
            3. ANTENNA ONLINE STATUS BEACONS
            ======================================================== */}
        <g id="robot-antennas">
          {/* Left Antenna Tip (293, 138) */}
          <motion.circle
            cx={293}
            cy={138}
            r={5}
            fill="#E86526"
            variants={antennaBeaconVariants}
            animate="pulse"
          />

          {/* Right Antenna Tip (683, 138) */}
          <motion.circle
            cx={683}
            cy={138}
            r={5}
            fill="#E86526"
            variants={antennaBeaconVariants}
            animate="pulse"
          />
        </g>
      </svg>
    </motion.div>
  );
}

// Export both names for backwards compatibility
export { DancingRobotMascot as SunloopRobotMascot };
