"use client"

import Navbar from "@/app/components/Navbar";
import {useEffect} from "react";
import Footer from "@/components/Footer";
import TwoColumnSectionsRisk from "@/app/lending-risk-prevention/2ColumnLayoutRisk";
import HowItWorksRisk from "@/app/lending-risk-prevention/HowItWorksLending";
import {ComparsionTableRisk} from "@/app/lending-risk-prevention/ComparisonTableRisk";

export default function LendingRiskPrevention() {

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
                                        Lending Risk Prevention
                                    </h1>
                                    <h1 className="text-6xl font-semibold tracking-tighter text-gray-800">
                                        Fraudulent Loans? <br/>Not On Our Watch.
                                    </h1>
                                    <p className="pt-4 text-md text-muted-foreground ">
                                        AI-powered fraud prevention and smarter underwriting so you can lend confidently
                                        to more customers without the risk.
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

                            {/* →→→ Right side: Animated Dashboard */}
                        </div>
                    </div>
                </section>
            </div>


            {/* 2 Column Layout with text on left and image on right */}
            <section data-aos="fade-up" className="px-6 py-32 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <TwoColumnSectionsRisk/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-32">
                <div className=" max-w-7xl mx-auto">
                    <HowItWorksRisk/>
                </div>
            </section>

            <section data-aos="fade-up" className="px-6 py-32 bg-gray-100">
                <div className=" max-w-7xl mx-auto">
                    <ComparsionTableRisk/>
                </div>
            </section>

            <section>
                {/* Final CTA */}
                <section className="w-full font-sora bg-[#2C2F8F] py-12 md:py-24 lg:py-32 text-white">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    How Much Is Fraud Costing You?
                                </h2>
                                <p>
                                    Get 1,000 free loan screenings + fraud protection for 30 days. No contracts.
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