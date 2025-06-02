"use client";

import Head from 'next/head';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Navbar from "@/app/components/Navbar";
import {Integrations} from "@/components/Integrations";
import {Customers} from "@/components/Customers";
import {PrimaryFeatures} from "@/components/MadeForBusiness";
import {Hero} from "@/components/Hero";
import {Features2} from "@/components/Features2";
import Footer from "@/components/Footer";
import '../app/globals.css'

export default function Home() {

  useEffect(() => {
    import('aos').then((AOS) =>
        AOS.init({
          duration: 1200,
        })
    );
  }, []);


  return (
      <>
        <Head>
          <title>QuarkfinAI</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
              href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap"
              rel="stylesheet"
          />
        </Head>

          <div className="font-sora text-[#1F1F1F] scroll-smooth antialiased">
              <Navbar/>

              {/* Hero Section */}
              <section data-aos="fade-in" className="px-6 py-20">
                  <Hero/>
              </section>

              {/* Features Section */}
              <section data-aos="fade-up" className="px-6 py-16 bg-gray-100">
                  <div className="max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-1 text-left font-bold">Commerce protection that works while you sleep</h2>
                  {/*<p className="text-left text-lg text-gray-600 mb-10">Meet your business goals with QuarkfinAI, harness AI-driven risk insights and flexible decisioning to scale securely.</p>*/}
                  </div>
                  <div className="max-w-7xl mx-auto">
                  <Features2/>
                  </div>
              </section>


              {/* how it works */}
              <section data-aos="fade-up" className="px-6 py-16">
                  <div className=" max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-10">
                          How It Works
                      </h2>
                      <Customers/>

                      <button className="p-[3px] relative">
                          <div
                              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm"/>
                          <div
                              className="px-8 py-3  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                             Try free for 14 Days
                          </div>
                      </button>
                  </div>
              </section>


              {/* Made for every business */}
              <section data-aos="fade-up" className="px-6 py-16 bg-gray-100">
                  <div className=" max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-10">
                          Built for your industry's toughest fraud problems
                      </h2>
                      <PrimaryFeatures/>
                  </div>
              </section>

              {/* Made for Any Customer Profile */}
              {/*<section data-aos="fade-up" className="px-6 py-16 bg-gray-50">*/}
              {/*    <div className="max-w-7xl mx-auto">*/}
              {/*        <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-2">*/}
              {/*            Made for Any Customer Profile*/}
              {/*        </h2>*/}
              {/*        <p className="text-left text-lg text-gray-600 mb-10">Meet your business goals with QuarkfinAI,*/}
              {/*            harness AI-driven risk insights and flexible decisioning to scale securely.</p>*/}
              {/*    </div>*/}
              {/*    <CustomerProfile/>*/}
              {/*</section>*/}


              {/* Integrations */}
              <section data-aos="fade-up" className="px-6 py-16">
                  <div className="max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-12">Integrate the way you
                          want it!</h2>
                      <Integrations/>
                  </div>
              </section>

              {/* CTA Section */}
              <section data-aos="fade-up" className="px-6 py-32 bg-gray-100">
                  <div className="max-w-7xl mx-auto">
                      <div
                          className="flex flex-col items-center justify-center space-y-6 text-center"
                      >
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                              Fraud-free growth starts here.
                          </h2>
                          <p className="mx-auto max-w-[700px] md:text-xl">
                              No upfront costs. No lengthy contracts. Just results.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-4">
                              <button className="p-[3px] relative">
                                  <div
                                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm"/>
                                  <span
                                      className="relative z-10 px-8 py-3 bg-black rounded-[6px] text-white hover:bg-transparent transition">
                Get Started
              </span>
                              </button>

                              <button
                                  className="border border-[#2C2F8F] text-[#2C2F8F] px-6 py-3 rounded hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                                  Talk to an expert
                              </button>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Footer */}
              <Footer/>
          </div>
      </>
  );
}
