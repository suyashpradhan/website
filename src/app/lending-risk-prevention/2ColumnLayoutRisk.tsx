"use client";

import {CheckCircleIcon} from "lucide-react";
import React from "react";

const featureContent = [
    {
        title: "Card Fraud Prevention\n",
        subHeading: 'Stop fraudsters before they steal',
        features: [
            "Stolen Card Detection (real-time BIN checks, velocity monitoring)",
            "Friendly Fraud Blocking (behavioral analysis catches \"buyer’s remorse\" fraud)",
            "Card Testing Protection (flags rapid-fire card testing attacks)",
        ],
        video: '/videos/CreditCard.mp4'
    },
    {
        title: "Smarter Credit Underwriting",
        subHeading: 'Lend more, lose less',

        features: [
            "NTC Underwriting (AI predicts risk for thin-file borrowers)",
            "Delinquency Analytics (spots high-risk borrowers before they default)",
            "Self-Serve LOS (drag-and-drop rules, no engineering needed)",
        ],
        video: '/videos/CreditAssessment.mp4'
    },
    {
        title: "Lending-as-a-Service\n",
        subHeading: 'Scale without the fraud headaches',

        features: [
            "White-Label Underwriting (embed risk scoring into your app)\n",
            "Automated Decisioning (real-time approvals, no manual reviews)",
        ],
        video: '/videos/OnlineTransactions.mp4'
    },
];


type Section = {
    subHeading?: string;
    title: string;
    features: string[];
    imgSrc?: string;
    imgAlt?: string;
    video?: string;
};


export default function TwoColumnSectionsRisk() {
    return (
        <div className="space-y-24">
            <h2 className="text-[#2C2F8F] text-left text-3xl md:text-4xl lg:text-5xl font-bold">
                The End-to-End Defence Against Lending Fraud
            </h2>

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