"use client";

import Head from 'next/head';
import {  useEffect } from 'react';
import {
  PuzzlePieceIcon,
  ChartBarIcon,
  ServerStackIcon,
} from '@heroicons/react/24/solid';
import 'aos/dist/aos.css';
import Navbar from "@/app/components/Navbar";
import {Integrations} from "@/components/Integrations";
import {Customers} from "@/components/Customers";
import {CustomerProfile} from "@/components/CustomerProfile";
import {PrimaryFeatures} from "@/components/MadeForBusiness";
import {Hero} from "@/components/Hero";
import {Features2} from "@/components/Features2";
import Footer from "@/components/Footer";

export default function Home() {

  useEffect(() => {
    import('aos').then((AOS) =>
        AOS.init({
          duration: 1200,
        })
    );
  }, []);

  const cardContent = [
    { icon: PuzzlePieceIcon, title: 'Grow Revenue' },
    { icon: ChartBarIcon, title: 'Modernize Operations' },
    { icon: ServerStackIcon, title: 'Good Customer Base' },
  ];


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
                  {/*<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">*/}

                  {/*    /!* Left Content *!/*/}
                  {/*    <div>*/}
                  {/*        <h1 className="text-4xl md:text-6xl font-bold text-[#2C2F8F] leading-tight">*/}
                  {/*            Protect Commerce<br/>Enable Growth*/}
                  {/*        </h1>*/}
                  {/*        <p className="mt-6 text-gray-600">*/}
                  {/*            QuarkfinAI maximizes business growth and revenue by providing actionable decisions using*/}
                  {/*            AI-powered fraud and risk platform.*/}
                  {/*        </p>*/}
                  {/*        <div className="mt-8 space-x-4">*/}

                  {/*            <button className="p-[3px] relative">*/}
                  {/*                <div*/}
                  {/*                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm"/>*/}
                  {/*                <div*/}
                  {/*                    className="px-8 py-3  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">*/}
                  {/*                    Get Started*/}
                  {/*                </div>*/}
                  {/*            </button>*/}
                  {/*            <button*/}
                  {/*                className="border border-[#2C2F8F] text-[#2C2F8F] px-6 py-3 rounded hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">*/}
                  {/*                Watch Demo*/}
                  {/*            </button>*/}
                  {/*        </div>*/}
                  {/*    </div>*/}

                  {/*    /!* Right Image Placeholder *!/*/}
                  {/*    <div*/}
                  {/*        className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">*/}
                  {/*        <span className="text-gray-500">[ Image Placeholder ]</span>*/}
                  {/*    </div>*/}

                  {/*</div>*/}
                  <Hero/>
              </section>

              {/* Features Section */}
              <section data-aos="fade-up" className="px-6 py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-1 text-left font-bold">Built for Confident Growth</h2>
                  <p className="text-left text-lg text-gray-600 mb-10">Meet your business goals with QuarkfinAI, harness AI-driven risk insights and flexible decisioning to scale securely.</p>
                  </div>
                  {/*<div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">*/}
                  {/*    {cardContent.map((card) => (*/}
                  {/*        <div key={card.title}*/}
                  {/*             className="bg-white p-6 rounded shadow hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">*/}
                  {/*            <card.icon className="w-10 h-10 text-[#2C2F8F] text-left mb-6"/>*/}
                  {/*            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>*/}
                  {/*            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing*/}
                  {/*                elit.</p>*/}
                  {/*            <a*/}
                  {/*                href="#"*/}
                  {/*                className="text-[#3A50D9] text-sm mt-8 font-medium inline-flex items-center group"*/}
                  {/*            >*/}
                  {/*                Learn More*/}
                  {/*                <svg*/}
                  {/*                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"*/}
                  {/*                    fill="none"*/}
                  {/*                    stroke="currentColor"*/}
                  {/*                    strokeWidth="2"*/}
                  {/*                    viewBox="0 0 24 24"*/}
                  {/*                >*/}
                  {/*                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>*/}
                  {/*                </svg>*/}
                  {/*            </a>*/}
                  {/*        </div>*/}
                  {/*    ))}*/}
                  {/*</div>*/}
                  <div className="max-w-7xl mx-auto">
                  <Features2/>
                  </div>
              </section>


              {/* Made to delight your customers */}
              <section data-aos="fade-up" className="px-6 py-16">
                  <div className=" max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-10">
                          Made to delight your customers
                      </h2>
                      <Customers/>

                      <button className="p-[3px] relative">
                          <div
                              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-sm"/>
                          <div
                              className="px-8 py-3  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                             Get a demo
                          </div>
                      </button>
                  </div>
              </section>


              {/* Made for every business */}
              <section data-aos="fade-up" className="py-16">
                  <PrimaryFeatures/>
              </section>

              {/* Made for Any Customer Profile */}
              <section data-aos="fade-up" className="px-6 py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-2">
                          Made for Any Customer Profile
                      </h2>
                      <p className="text-left text-lg text-gray-600 mb-10">Meet your business goals with QuarkfinAI,
                          harness AI-driven risk insights and flexible decisioning to scale securely.</p>
                  </div>
                  <CustomerProfile/>
              </section>


              {/* Integrations */}
              <section data-aos="fade-up" className="px-6 py-16">
                  <div className="max-w-7xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-left text-[#2C2F8F] mb-12">Integrate the way you
                          want it!</h2>
                      <Integrations/>
                  </div>
              </section>

              {/* Footer */}
              <Footer/>
          </div>
      </>
  );
}
