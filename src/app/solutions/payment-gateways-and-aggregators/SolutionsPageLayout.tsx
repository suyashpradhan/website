"use client";

import {CheckCircle, XCircle} from "lucide-react";
import React from "react";
import Image from "next/image";


const featureContent = [
    {
        title: "AI-Powered Merchant Onboarding",
        features: ['Fake businesses', 'Shell companies ', 'High-risk MCC hiding'],
        works: ['Instant KYB: Verifies domain age, financials, and ownership in less than 5 mins', 'Geo-Fencing: Auto-blocks jurisdictions with high fraud rates', ' AML Sentinel: Screens 200+ global watchlists (OFAC, PEPs, sanctions)']
    },
    {
        title: "Chargeback Shield",
        features: ['MCC changes', 'Website defacement', 'Social media deletions'],
        works: ['MCC Alerts: Notifies when merchants shift to high-risk categories', 'Content Snapshotting: Archives TOS pages to prevent bait-and-switch', 'Sentiment Analysis: Flags merchant reputation drops']
    },
    {
        title: "Chargeback Prevention",
        features: ['Friendly fraud', 'Card testing', 'Merchant collusion'],
        works: ['Behavioral Scoring: Identifies suspicious transaction patterns', 'Dispute Automation: Substitutes evidence for 85% of chargebacks', 'Guarantee: We cover costs if fraud slips through']

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