"use client";

import {CheckCircle, XCircle} from "lucide-react";
import React from "react";
import Image from "next/image";


const featureContent = [
    {
        title: "Card Testing Forcefield",
        features: ['Stolen card testing', 'Bots', 'Velocity attacks'],
        works: ['200ms Blocking: Identifies card testing patterns in real-time\n', 'Device Fingerprinting: Links devices across failed attempts', 'Proxy/VPN Detection: Blocks hidden fraud hubs']
    },
    {
        title: "Smart Promo Protection",
        features: ['Discount budgets', ' Loyalty points', 'Signup bonuses\n'],
        works: ['Household Linking: Limits offers per physical address', 'Behavioral AI: Spots scripted coupon harvesting', 'Geo-Validation: Blocks offshore exploiters']
    },
    {
        title: "Booking Intent Scoring\n",
        features: [' Fake reservations  ', 'No-show losses ', 'Inventory spoilage'],
        works: ['Affluence AI: Analyzes 80+ signals to predict real travelers', 'Journey Mapping: Flags illogical routes (e.g., NYC→Paris for $1)', 'Dynamic Hold: Releases high-risk bookings pre-checkout']

    }
];


type Section = {
    subHeading?: string;
    title: string;
    features?: string[];
    works?: string[];
};


export default function SolutionsPageLayout() {
    return (
        <div className="space-y-24">
            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                const TextBlock = (
                    <>
                        <div>
                            <h1 className="text-sm font-bold uppercase tracking-normal text-[#2C2F8F]">
                                {sec.subHeading}
                            </h1>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {sec.title}
                            </h2>
                            <ul className="space-y-4">
                                {sec?.features?.map((feat, i) => (
                                    <li key={i} className="flex items-center">
                                        <XCircle className="h-6 w-6 flex-shrink-0 text-red-500 mt-1"/>
                                        <span className="ml-3 text-gray-700">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-green-50 mt-8 p-6 rounded-xl mb-8">
                                <h3 className="text-lg font-semibold text-green-900 mb-4">How It Works:</h3>

                                {sec?.works?.map((work, i) => (
                                    <div className="space-y-12 mb-4" key={i}>
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0"/>
                                            <span className="text-green-800">
                      {work}
                    </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );

                const ImageBlock = (
                    <div
                        className="w-full overflow-hidden flex items-center justify-center">
                        {/* Swap this for a real <Image> when you have one */}
                        <Image
                            height={700}
                            width={700}
                            src={'https://kzmisvh5wvcb96m3c5zs.lite.vusercontent.net/placeholder.svg?height=300&width=500&text=D2C/eCommerce'}
                            alt="image"/>
                    </div>
                );

                return (
                    <section
                        key={idx}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        {isReversed ? (
                            <>
                                {ImageBlock}
                                {TextBlock}
                            </>
                        ) : (
                            <>
                                {TextBlock}
                                {ImageBlock}
                            </>
                        )}
                    </section>
                );
            })}
        </div>
    );
}