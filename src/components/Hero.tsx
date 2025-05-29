// app/components/Hero.tsx (or wherever you keep it)
export function Hero() {
    return (
        <section className="max-w-7xl mx-auto pt-2 px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                        Protect Commerce{' '}
                        <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative block text-[#2C2F8F]">Enable Growth</span>
            </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                        QuarkfinAI’s self-serve risk governance engine maximises business
                        growth and revenue while ensuring every user and transaction is
                        verified, trusted, and secure.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm" />
                            <span className="relative z-10 px-8 py-3 bg-black rounded-[6px] text-white hover:bg-transparent transition">
                Get Started for free
              </span>
                        </button>

                        <button className="border border-[#2C2F8F] text-[#2C2F8F] px-6 py-3 rounded hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                            See How It Works
                        </button>
                    </div>
                </div>

                {/* Right: video */}
                <div className="w-full">
                    <video
                        src="/video.mp4"
                        className="w-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
}
