
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-xl text-center">
        <div className="watercolor-glow mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Compass size={38} className="text-blue-400" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Error 404
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Lost in <span className="gradient-text">Space?</span>
        </h1>

        <p className="mx-auto mb-8 max-w-md leading-7 text-slate-400">
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back to the portfolio.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
