"use client";

import {CheckCircleIcon} from "lucide-react";

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
            <div className="text-left mb-16">
                <h2 className=" text-[#2C2F8F] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">From Suspicion
                    to Certainty in Minutes</h2>
            </div>

            {featureContent.map((sec: Section, i) => (
                <section
                    key={i}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                    {/* Left: text */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {sec.title}
                        </h2>
                        <ul className="space-y-4">
                            {sec.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-green-500 mt-1"/>
                                    <span className="ml-3 text-gray-700">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: dummy image */}
                    <div
                        className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        {/* replace with <Image> when you have a real src */}
                        <span className="text-gray-400">Image Placeholder</span>
                    </div>
                </section>
            ))}
        </div>
    );
}
