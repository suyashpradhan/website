"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, CreditCard, LineChart, Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import IndustryDashboard from "./industry-dashboard"

const industries = [
    {
        id: "d2c",
        name: "D2C/eCommerce",
        description: "Stop promo abuse, fake accounts, and RTO chaos before they hurt margins.",
        icon: ShoppingBag,
        color: "bg-blue-50",
        accentColor: "bg-blue-500",
        textColor: "text-blue-500",
        dashboard: "/images/d2c-dashboard.png",

    },
    {
        id: "payment",
        name: "Payment Gateways",
        description: "Automate KYB and merchant monitoring. Onboard faster, safer.",
        icon: CreditCard,
        color: "bg-purple-50",
        accentColor: "bg-purple-500",
        textColor: "text-purple-500",
        dashboard: "/images/payment-dashboard.png",

    },
    {
        id: "lending",
        name: "Digital Lending",
        description: "AI-driven underwriting for NTC customers. Higher approval rates, lower defaults.",
        icon: LineChart,
        color: "bg-green-50",
        accentColor: "bg-green-500",
        textColor: "text-green-500",
        dashboard: "/images/lending-dashboard.png",

    },
    {
        id: "travel",
        name: "Travel/Q-Commerce",
        description: "Block card testing and account takeovers in high-velocity transactions.",
        icon: Plane,
        color: "bg-amber-50",
        accentColor: "bg-amber-500",
        textColor: "text-amber-500",
        dashboard: "/images/travel-dashboard.png",
    },
]

export default function IndustrySolutions() {
    const [activeTab, setActiveTab] = useState(industries[0].id)

    const activeIndustry = industries.find((industry) => industry.id === activeTab) || industries[0]

    return (
        <div className="w-full">
            <div className="flex flex-col space-y-8">
                <div className="flex flex-wrap gap-2 md:gap-4">
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            onClick={() => setActiveTab(industry.id)}
                            className={cn(
                                "px-4 py-3 rounded-lg flex gap-2 transition-all duration-300 font-medium cursor-pointer",
                                activeTab === industry.id
                                    ? `${industry.color} ${industry.textColor} border border-${industry.textColor}`
                                    : "bg-gray-50 text-gray-600 hover:bg-gray-100",
                            )}
                        >
                            <industry.icon className="h-5 w-5" />
                            <span>{industry.name}</span>
                        </button>
                    ))}
                </div>

                <div className="relative h-[500px] w-full overflow-hidden rounded-xl border bg-white shadow-sm">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 p-6 md:p-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                                <div className="flex flex-col">
                                    <h3 className={cn("text-2xl font-bold mb-4", activeIndustry.textColor)}>{activeIndustry.name}</h3>
                                    <p className="text-gray-700 text-lg mb-6">{activeIndustry.description}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <IndustryDashboard industry={activeIndustry} />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
