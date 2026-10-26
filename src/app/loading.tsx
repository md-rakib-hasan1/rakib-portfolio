import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090B12] px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="aurora-badge flex size-16 items-center justify-center rounded-2xl text-[#9B7BFF] shadow-lg shadow-[#9B7BFF]/20">
          <LoaderCircle size={32} className="animate-spin text-[#55D6FF]" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#F4F5FA]">
            Loading <span className="gradient-text">Portfolio</span>
          </h2>

          <p className="mt-1 text-xs text-[#A3A9BA]">
            Preparing experience...
          </p>
        </div>

        <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-[#9B7BFF] to-[#55D6FF]" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
