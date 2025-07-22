"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "Quark Secure (Intelligent Onboarding)",
        features: ["Fake accounts", "RTO fraud", "Guest checkout scams"],
        video: "/videos/CustomerRelationshipManager.mp4",
    },
    {
        title: "Chargeback Shield",
        features: ["Friendly fraud", "Card testing", "Merchant scams"],
        video: "/videos/Shield.mp4",
    },
    {
        title: "Promo Abuse Protection",
        features: ["Coupon stacking", "Fake referrals", "Loyalty fraud"],
        video: "/videos/Promo.mp4",
    },
];

type Section = {
    subHeading?: string;
    title: string;
    features?: string[];
    image?: string;
    video?: string;
};

export default function SolutionsPageLayout() {
    return (
        <div className="px-4 sm:px-6 lg:px-12 py-12">
            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                return (
                    <section
                        key={idx}
                        className={`flex flex-col-reverse lg:flex-row ${
                            isReversed ? "lg:flex-row-reverse" : ""
                        } items-center gap-1`}
                    >
                        {/* Text */}
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-sm font-bold uppercase tracking-normal text-[#2C2F8F]">
                                {sec.subHeading}
                            </h1>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {sec.title}
                            </h2>
                            <ul className="space-y-4">
                                {sec?.features?.map((feat, i) => (
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
                                src={sec?.video}
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
