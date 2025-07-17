"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "AI-Powered Business Vetting",
        features: [
            "Domain Reputation Scoring (We flag fake/phishing sites)",
            "Geo-Fencing (We block high-risk jurisdictions)",
            "IP Forensics (We detect VPNs, proxies, spoofing)",
            "Website Legitimacy Engine (We analyze content changes, TOR links)",
        ],
        video: "/videos/DataExtraction.mp4",
    },
    {
        title: "Financial DNA Analysis",
        features: [
            "Bank Guarantee Verification (Our AI cross-checks amounts/dates)",
            "Financial Health Scoring (We predict cash flow risks)",
            "Beneficial Owner Mapping (We uncover hidden ownership)",
        ],
        video: "/videos/FinancialData.mp4",
    },
    {
        title: "24/7 Merchant Monitoring",
        features: [
            "MCC Alerts (We notify when high-risk categories change)",
            "Social Media Sentinel (We flag deleted LinkedIn profiles)",
            "Website Defacement Detection (We spot bait-and-switch)",
        ],
        video: "/videos/DataExtraction1.mp4",
    },
];

type Section = {
    title: string;
    features: string[];
    video?: string;
};

export default function TwoColumnSections() {
    return (
        <div className="space-y-24 px-4 sm:px-6 lg:px-12 py-10">
            <h2 className="text-[#2C2F8F] text-left text-3xl md:text-4xl lg:text-5xl font-bold">
                From Suspicion to Certainty in Minutes
            </h2>

            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                return (
                    <section
                        key={idx}
                        className={`flex flex-col-reverse lg:flex-row ${
                            isReversed ? "lg:flex-row-reverse" : ""
                        } items-center gap-10`}
                    >
                        {/* Text */}
                        <div className="w-full lg:w-1/2">
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

                        {/* Video */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <video
                                src={sec.video}
                                className="rounded-lg w-full max-w-md sm:max-w-lg"
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
