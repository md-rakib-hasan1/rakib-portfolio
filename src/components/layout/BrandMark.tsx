type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className = "" }: BrandMarkProps) => {
  return (
    <span
      aria-hidden="true"
      className={`relative flex shrink-0 items-center justify-center rounded-xl border border-[rgba(155,123,255,0.35)] bg-gradient-to-br from-[#121626] via-[#101422] to-[#0A0D18] p-1.5 shadow-[0_0_18px_rgba(155,123,255,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#55D6FF]/50 group-hover:shadow-[0_0_24px_rgba(85,214,255,0.3)] ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
      >
        <defs>
          {/* Aurora Violet to Cyan Gradient */}
          <linearGradient
            id="brand-aurora-primary"
            x1="4"
            y1="4"
            x2="36"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#B8A2FF" />
            <stop offset="45%" stopColor="#9B7BFF" />
            <stop offset="100%" stopColor="#55D6FF" />
          </linearGradient>

          {/* Cyan Accent Gradient */}
          <linearGradient
            id="brand-aurora-cyan"
            x1="16"
            y1="8"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#55D6FF" />
            <stop offset="100%" stopColor="#9B7BFF" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="aurora-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient subtle back ring */}
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="9"
          stroke="url(#brand-aurora-primary)"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          strokeDasharray="2 3"
        />

        {/* Interconnected Modern Geometric Monogram 'R' & 'H' */}
        {/* Left vertical pillar of 'R' */}
        <path
          d="M10 9C10 7.89543 10.8954 7 12 7V33C10.8954 33 10 32.1046 10 31V9Z"
          fill="url(#brand-aurora-primary)"
        />

        {/* Upper curved loop of 'R' */}
        <path
          d="M12 7H21C24.3137 7 27 9.46243 27 12.5C27 15.5376 24.3137 18 21 18H12V7Z"
          stroke="url(#brand-aurora-primary)"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Diagonal dynamic kick of 'R' transitioning into 'H' */}
        <path
          d="M19 17L28 33"
          stroke="url(#brand-aurora-cyan)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Right vertical pillar of 'H' */}
        <path
          d="M30 11V31"
          stroke="url(#brand-aurora-cyan)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Glowing pulse satellite node */}
        <circle
          cx="28"
          cy="12.5"
          r="1.8"
          fill="#55D6FF"
          filter="url(#aurora-glow)"
        />
        <circle cx="28" cy="12.5" r="1" fill="#FFFFFF" />
      </svg>
    </span>
  );
};

export default BrandMark;
