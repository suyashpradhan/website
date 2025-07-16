"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "Quark Secure (Intelligent Onboarding)",
        features: ['Fake accounts', 'RTO fraud ', 'Guest checkout scams'],
        video: '/videos/CustomerRelationshipManager.mp4'
    },
    {
        title: "Chargeback Shield",
        features: [' Friendly fraud ', 'Card testing ', ' Merchant scams'],
        video: '/videos/Shield.mp4'
    },
    {
        title: "Promo Abuse Protection",
        features: ['Coupon stacking', 'Fake referrals', ' Loyalty fraud'],
        video: '/videos/Promo.mp4'
    }
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
        <div className="space-y-24">
            {featureContent.map((sec: Section, idx) => {
                const isReversed = idx % 2 === 1;

                const TextBlock = (
                    <div>
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
                );

                const ImageBlock = (
                    <div
                        className="w-full overflow-hidden flex">
                        {/* Swap this for a real <Image> when you have one */}
                        <video
                            src={sec?.video}
                            className="rounded-lg w-full max-w-lg mx-auto"
                            autoPlay
                            muted
                            loop
                        />
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
