"use client"

import Navbar from "@/app/components/Navbar";
import React, {useEffect} from "react";
import Footer from "@/components/Footer";
import {MainComponent} from "@/app/solutions/digital-lending/MainComponent";
import {SolutionsTable} from "@/app/solutions/digital-lending/SolutionsTable";

export default function DigitalLendingPage() {

    useEffect(() => {
        import('aos').then((AOS) =>
            AOS.init({
                duration: 1200,
            })
        );
    }, []);

    return (
        <>
            <div className="font-sora text-[#1F1F1F] scroll-smooth antialiased">
                <Navbar/>
                {/* Hero Section */}
                <section
                    className="py-20 relative overflow-hidden bg-gradient-to-b from-[#2C2F8F]/10 to-background pt-16 md:pt-24 lg:pt-32">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid items-center lg:grid-cols-2 lg:gap-6">
                            {/* ←←← Left side: your existing copy/buttons */}
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-md font-bold uppercase tracking-normal text-[#2C2F8F]">
                                        Digital Lending Solution
                                    </h1>
                                    <h1 className="text-6xl font-semibold tracking-tighter text-gray-800">
                                        Approving NTC Borrowers? <br/>1 in 3 Could Be Fraud. <br/>We Spot Them.
                                    </h1>
                                    <p className="pt-4 text-md text-muted-foreground ">
                                        QuarkfinAI’s lending risk platform catches synthetic identities, prevents loan
                                        stacking, and slashes defaults, so you can grow your book confidently
                                    </p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-4">
                                    <button
                                        className="relative px-8 py-3 overflow-hidden rounded-[6px] text-white transition group">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-110 transition-transform"></div>
                                        <span className="relative z-10 px-8 py-3 rounded-[6px]">Start Free Trial</span>
                                    </button>
                                    <button
                                        className="border border-[#2C2F8F] px-6 py-3 rounded text-[#2C2F8F] hover:bg-[#2C2F8F] hover:text-white transition shadow">
                                        See How It Works
                                    </button>
                                </div>
                            </div>

                            <div
                                className="w-full overflow-hidden flex items-center justify-center">
                                {/* Swap this for a real <Image> when you have one */}
                                <video
                                    src="/videos/H2.mp4"
                                    className="rounded-lg w-full max-w-lg mx-auto"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* 2 Column Layout with text on left and image on right */}
            <section data-aos="fade-up" className="px-6 py-32 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <SolutionsTable/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-32">
                <div className=" max-w-7xl mx-auto">
                    <MainComponent/>
                </div>
            </section>


            <section>
                {/* Final CTA */}
                <section className="w-full font-sora bg-[#2C2F8F] py-12 md:py-24 lg:py-32 text-white">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Underwrite 100 Loans Free. See the Difference.
                                </h2>
                                <p>
                                    Free analysis of your last 100 defaults
                                    + 30-day loan monitoring trial
                                    + No integration required (CSV upload option).
                                </p>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4">
                                <button className="p-[3px] relative">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm"/>
                                    <span
                                        className="relative z-10 px-8 py-3 bg-black rounded-[6px] text-white hover:bg-transparent transition">
                Start Free Trial
              </span>
                                </button>

                                <button
                                    className="border bg-white border-white text-black px-6 py-3 rounded hover:bg-white hover:text- hover:scale-105 transition shadow">
                                    Talk to Fraud Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}