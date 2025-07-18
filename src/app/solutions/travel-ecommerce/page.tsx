"use client"

import Navbar from "@/app/components/Navbar";
import React, {useEffect} from "react";
import Footer from "@/components/Footer";
import {MainComponent} from "@/app/solutions/travel-ecommerce/MainComponent";
import {SolutionsTable} from "@/app/solutions/travel-ecommerce/SolutionsTable";
import Link from "next/link";

export default function TravelCommercePage() {

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
                                        Travel and Quick Commerce Solution
                                    </h1>
                                    <h1 className="text-6xl font-semibold tracking-tighter text-gray-800">
                                        Stop Fraudsters From Hijacking, Your High-Velocity Transactions </h1>
                                    <p className="pt-4 text-md text-muted-foreground ">
                                        QuarkfinAI blocks card testing, fake accounts, and promo abuse—so you can focus
                                        on delivering experiences, not fighting fraud
                                    </p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-4">
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

                            {/* →→→ Right side: Animated Dashboard */}
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
                        <div className="flex flex-col items-center justify-center space-y-4 text-center px-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    See Your Hidden Fraud Exposure </h2>
                                <p>
                                    Free scan of last 1,000 transactions

                                    + 14-day card testing protection

                                    + No integration required (CSV upload option).
                                </p>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4">
                                <Link href="/pricing">
                                    <button type="button"
                                            className=" cursor-pointer text-[#2C2F8F] bg-white px-4 py-4 rounded hover:bg-[#3A50D9] transition  hover:text-white hover:scale-105 transition shadow">
                                        Get Started For Free
                                    </button>
                                </Link>

                                <button
                                    className="cursor-pointer border border-white text-white px-6 py-3 rounded hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                                    Talk to an expert
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