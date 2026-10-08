import React from 'react';

interface GoldCrestProps {
  className?: string;
  size?: number;
}

export const GoldCrest: React.FC<GoldCrestProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faecd0" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a0761e" />
        </linearGradient>
      </defs>
      {/* Outer subtle shield / diamond frame */}
      <path
        d="M24 2L42 12V28C42 38 24 46 24 46C24 46 6 38 6 28V12L24 2Z"
        stroke="url(#crestGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Internal botanical leaf / apothecary laurel */}
      <path
        d="M24 10V38"
        stroke="url(#crestGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Rose petal / botanical flourish curves */}
      <path
        d="M24 16C28 13 33 15 32 20C31 24 26 25 24 28"
        stroke="url(#crestGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M24 16C20 13 15 15 16 20C17 24 22 25 24 28"
        stroke="url(#crestGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="14" r="1.5" fill="url(#crestGold)" />
      <circle cx="24" cy="38" r="1.5" fill="url(#crestGold)" />
    </svg>
  );
};
