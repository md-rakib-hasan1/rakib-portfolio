type BrandMarkProps = {
  className?: string;
};

const BrandMark = ({ className = "" }: BrandMarkProps) => {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-xl border border-blue-200/20 bg-gradient-to-br from-[#3987ff] via-[#2167d0] to-[#164aab] shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105 ${className}`}
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
            <stop offset="1" stopColor="#8AB8FF" />
          </linearGradient>
        </defs>

        {/* Orbit ring — back half (drawn behind the core) */}
        <ellipse
          cx="20"
          cy="20"
          rx="16.5"
          ry="7"
          transform="rotate(-32 20 20)"
          stroke="#DDF5FF"
          strokeOpacity="0.5"
          strokeWidth="1.7"
        />

        {/* Glowing core */}
        <circle cx="20" cy="20" r="6.4" fill="url(#brandmark-core)" />
        <circle
          cx="18.2"
          cy="18.2"
          r="1.7"
          fill="#FFFFFF"
          fillOpacity="0.75"
        />

        {/* Orbit ring — front half, passing over the core */}
        <path
          d="M34 11.26A16.5 7 -32 0 1 6 28.74"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Satellite riding the orbit */}
        <circle cx="21.2" cy="27.4" r="3.1" fill="#9FE7FF" fillOpacity="0.3" />
        <circle cx="21.2" cy="27.4" r="1.7" fill="#FFFFFF" />
      </svg>
    </span>
  );
};

export default BrandMark;
