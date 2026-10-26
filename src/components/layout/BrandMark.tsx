type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className = "" }: BrandMarkProps) => {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-xl border border-[#9B7BFF]/30 bg-gradient-to-br from-[#9B7BFF] via-[#7B58EE] to-[#55D6FF] shadow-lg shadow-[#9B7BFF]/25 transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="size-[82%]"
      >
        <defs>
          <linearGradient
            id="brandmark-core"
            x1="13.5"
            y1="13.5"
            x2="26.5"
            y2="26.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset="0.6" stopColor="#E0D6FF" />
            <stop offset="1" stopColor="#55D6FF" />
          </linearGradient>
        </defs>

        {/* Orbit ring — back half (drawn behind the core) */}
        <ellipse
          cx="20"
          cy="20"
          rx="16.5"
          ry="7"
          transform="rotate(-32 20 20)"
          stroke="#55D6FF"
          strokeOpacity="0.45"
          strokeWidth="1.7"
        />

        {/* Glowing core */}
        <circle cx="20" cy="20" r="6.4" fill="url(#brandmark-core)" />
        <circle
          cx="18.2"
          cy="18.2"
          r="1.7"
          fill="#FFFFFF"
          fillOpacity="0.85"
        />

        {/* Orbit ring — front half, passing over the core */}
        <path
          d="M34 11.26A16.5 7 -32 0 1 6 28.74"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Satellite riding the orbit */}
        <circle cx="21.2" cy="27.4" r="3.1" fill="#55D6FF" fillOpacity="0.4" />
        <circle cx="21.2" cy="27.4" r="1.7" fill="#FFFFFF" />
      </svg>
    </span>
  );
};

export default BrandMark;
