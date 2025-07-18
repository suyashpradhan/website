import {AnimatePresence, motion} from "motion/react";
import {useEffect, useState} from "react";
import Link from "next/link";

const videos = ["/video1.mp4", "/video2.mp4"]; // add more if needed

export function Hero() {
    const [index, setIndex] = useState(0);

    // ⏱ change video every 3000ms
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % videos.length);
        }, 3000);
        return () => clearInterval(id);
    }, []);

    // Determine if we should highlight (for example, when index is 0)
    const isHighlighted = index === 0;

    return (
        <section className="max-w-7xl mx-auto pt-2 px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left: text */}
                <div>
                    <h1
                        className={`
              font-display 
              text-5xl font-medium tracking-tight 
              sm:text-7xl 
              ${isHighlighted ? "text-[#2C2F8F]" : "text-slate-900"}
            `}
                    >
                        Protect Commerce{" "}
                        <span className="relative whitespace-nowrap">
              <span
                  className={`relative block 
                  ${
                      isHighlighted
                          ? "text-slate-900"    /* highlight span */
                          : "text-[#2C2F8F]"     /* default span */
                  }
                `}
              >
                Enable Growth
              </span>
            </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                        QuarkfinAI’s self-serve risk governance engine maximises business
                        growth and revenue while ensuring every user and transaction is
                        verified, trusted, and secure.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/pricing">
                            <button type="button"
                                    className=" cursor-pointer bg-[#2C2F8F] text-white px-4 py-4 rounded hover:bg-[#3A50D9] transition hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                                Get Started For Free
                            </button>

                        </Link>

                        <button
                            className="cursor-pointer border border-[#2C2F8F] text-[#2C2F8F] px-6 py-3 rounded hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                            See How It Works
                        </button>
                    </div>
                </div>

                {/* Right: video */}
                <div className="relative w-full overflow-hidden rounded-lg">
                    <AnimatePresence mode="wait">
                        <motion.video
                            key={videos[index]}
                            src={videos[index]}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.4}}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
