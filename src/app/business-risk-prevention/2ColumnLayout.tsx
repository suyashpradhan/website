"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";
import Image from "next/image";

const featureContent = [
    {
        title: "AI-Powered Business Vetting",
        features: [
            "Domain Reputation Scoring (We flag fake/phishing sites)",
            "Geo-Fencing (We block high-risk jurisdictions)",
            "IP Forensics (We detect VPNs, proxies, spoofing)",
            "Website Legitimacy Engine (We analyze content changes, TOR links)",
        ],
    },
    {
        title: "Financial DNA Analysis",
        features: [
            "Bank Guarantee Verification (Our AI cross-checks amounts/dates)",
            "Financial Health Scoring (We predict cash flow risks)",
            "Beneficial Owner Mapping (We uncover hidden ownership)",
        ],
    },
    {
        title: "24/7 Merchant Monitoring",
        features: [
            "MCC Alerts (We notify when high-risk categories change)",
            "Social Media Sentinel (We flag deleted LinkedIn profiles)",
            "Website Defacement Detection (We spot bait-and-switch)",
        ],
    },
];


type Section = {
    title: string;
    features: string[];
    imgSrc?: string;
    imgAlt?: string;
};


export default function TwoColumnSections() {
    return (
        <div className="space-y-24">
            <h2 className="text-[#2C2F8F] text-left text-3xl md:text-4xl lg:text-5xl font-bold">
                From Suspicion to Certainty in Minutes
            </h2>

            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                const TextBlock = (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {sec.title}
                        </h2>
                        <ul className="space-y-4">
                            {sec.features.map((feat, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-green-500 mt-1"/>
                                    <span className="ml-3 text-gray-700">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
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