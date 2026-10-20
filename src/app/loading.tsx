
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="watercolor-glow flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <LoaderCircle
            size={34}
            className="animate-spin text-blue-400"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Loading<span className="gradient-text"> Portfolio</span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Preparing something awesome for you...
          </p>
        </div>

        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-400" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
