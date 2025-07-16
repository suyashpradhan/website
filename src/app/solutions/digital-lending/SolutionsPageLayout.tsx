"use client";

import {CheckCircle, XCircle} from "lucide-react";
import React from "react";


const featureContent = [
    {
        title: "Synthetic Identity Detection",
        features: ['Stolen SSNs', 'Fabricated credit histories', 'Ghost applicants'],
        works: ['Cross-Lender Network: Flags identities applying simultaneously elsewhere', 'Document Forensics: Detects tampered pay stubs/bank statements', ' Behavioral Scoring: Analyzes application patterns (typing speed, device hops)'],
        video: '/videos/Sol1.mp4'

    },
    {
        title: "Smart NTC Underwriting",
        features: ['Safe thin-file lending', 'Lower defaults', 'Higher approval rates'],
        works: ['Alternative Data Scoring: Analyzes cash flow, education, and employment signals', 'Portfolio Immunization: Learns from your historical defaults', 'Self-Serve Rules Engine: Drag-and-drop credit policies'],
        video: '/videos/Sol2.mp4'

    },
    {
        title: "Loan Stacking Shield",
        features: ['Multi-lender exposure ', 'Bust-out schemes'],
        works: ['Real-Time Consortium Data: Shares risk alerts across lender network', 'Velocity Checks: Flags rapid sequential applications', 'Device Fingerprinting: Links borrowers across aliases'],
        video: '/videos/Sol3.mp4'

    }
];


type Section = {
    subHeading?: string;
    title: string;
    features?: string[];
    works?: string[];
    video?: string;
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