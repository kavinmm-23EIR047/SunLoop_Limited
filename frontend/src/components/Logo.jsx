import React from 'react';
import logoImage from '../assets/logo.png';

const Logo = ({ height = 50, showText = true, className = "" }) => {
  const imageHeight = showText ? height : Math.round(height * 0.72);

  return (
    <div
      className={`logo-container ${className}`}
      style={{ display: 'flex', alignItems: 'center', userSelect: 'none' }}
    >
      <img
        src={logoImage}
        alt="Sunloop Energy"
        style={{
          display: 'block',
          height: `${imageHeight}px`,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default Logo;
