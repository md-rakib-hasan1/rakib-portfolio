import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090B12] px-6">
      <div className="mx-auto max-w-xl text-center">
        <div className="aurora-badge mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl text-[#55D6FF] shadow-lg shadow-[#9B7BFF]/20">
          <Compass size={38} />
        </div>

        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#9B7BFF] uppercase">
          Error 404 · Page Not Found
        </p>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#F4F5FA] sm:text-5xl">
          Lost in the <span className="gradient-text">Aurora?</span>
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm sm:text-base leading-7 text-[#A3A9BA]">
          The page or project you are looking for does not exist or may have been moved.
          Let&apos;s get you back to the main portfolio.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#7B58EE] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9B7BFF]/25 transition-all hover:brightness-110"
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
