import React from 'react';

const Logo = ({ height = 50, showText = true, className = "" }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', userSelect: 'none' }}>
      <svg
        height={height}
        viewBox="0 0 450 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      >
        {/* "sun" text */}
        <text
          x="10"
          y="75"
          fill="#FF6B00"
          fontFamily="Outfit, sans-serif"
          fontWeight="700"
          fontSize="68"
          letterSpacing="-1.5px"
        >
          sun
        </text>

        {/* Custom Infinity Loop with integrated plug/socket */}
        <g transform="translate(118, 12)">
          {/* Main Infinity Path */}
          <path
            d="M 68,54 
               C 105,92 150,92 178,64 
               C 206,36 206,0 178,-10 
               C 150,-20 110,25 68,54 
               C 26,83 -14,103 -42,75 
               C -70,47 -70,11 -42,1 
               C -14,-9 30,16 68,54 Z"
            fill="none"
            stroke="#2C2C2E"
            strokeWidth="10"
            strokeLinecap="round"
            transform="translate(100, 10)"
          />
          
          {/* Socket side details (on the left side loop curve) */}
          <circle cx="58" cy="85" r="9" fill="#FF6B00" />
          <circle cx="58" cy="85" r="5" fill="#FFFFFF" />
          
          {/* Electrical plug prongs details (on the right side loop curve) */}
          <path
            d="M 235,38 L 245,34 M 231,44 L 241,40"
            stroke="#FF6B00"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Infinity center crossing accent */}
          <circle cx="168" cy="64" r="3" fill="#FF6B00" />
        </g>

        {/* "p" text next to the loop */}
        <text
          x="348"
          y="75"
          fill="#FF6B00"
          fontFamily="Outfit, sans-serif"
          fontWeight="700"
          fontSize="68"
          letterSpacing="-1.5px"
        >
          p
        </text>

        {/* "energy" text below */}
        {showText && (
          <text
            x="48"
            y="125"
            fill="#5E5E62"
            fontFamily="Outfit, sans-serif"
            fontWeight="400"
            fontSize="32"
            letterSpacing="21.5px"
          >
            energy
          </text>
        )}
      </svg>
    </div>
  );
};

export default Logo;
