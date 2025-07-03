"use client"

import {useState} from "react"
import {Check, ChevronDown, ChevronUp, Star, X} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
    {
        name: "Starter",
        description: "Perfect for individuals getting started",
        monthlyPrice: 9,
        yearlyPrice: 90,
        features: ["Up to 5 projects", "10GB storage", "Basic support", "Standard templates", "Mobile app access"],
        popular: false,
        buttonText: "Get Started",
    },
    {
        name: "Pro",
        description: "Best for growing businesses",
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: [
            "Up to 25 projects",
            "100GB storage",
            "Priority support",
            "Premium templates",
            "Advanced analytics",
            "Team collaboration",
            "API access",
        ],
        popular: true,
        buttonText: "Start Free Trial",
    },
    {
        name: "Premium",
        description: "For established companies",
        monthlyPrice: 59,
        yearlyPrice: 590,
        features: [
            "Up to 100 projects",
            "500GB storage",
            "24/7 phone support",
            "Custom templates",
            "Advanced analytics",
            "Team collaboration",
            "Full API access",
            "Custom integrations",
            "White-label options",
        ],
        popular: false,
        buttonText: "Start Free Trial",
    },
    {
        name: "Enterprise",
        description: "For large organizations",
        monthlyPrice: 99,
        yearlyPrice: 990,
        features: [
            "Unlimited projects",
            "Unlimited storage",
            "Dedicated support",
            "Custom everything",
            "Advanced security",
            "SSO integration",
            "Custom contracts",
            "On-premise deployment",
            "Training & onboarding",
        ],
        popular: false,
        buttonText: "Contact Sales",
    },
]

const features = [
    {name: "Projects", starter: "5", pro: "25", premium: "100", enterprise: "Unlimited"},
    {name: "Storage", starter: "10GB", pro: "100GB", premium: "500GB", enterprise: "Unlimited"},
    {name: "Team Members", starter: "1", pro: "5", premium: "25", enterprise: "Unlimited"},
    {name: "API Access", starter: false, pro: true, premium: true, enterprise: true},
    {name: "Custom Templates", starter: false, pro: false, premium: true, enterprise: true},
    {name: "Priority Support", starter: false, pro: true, premium: true, enterprise: true},
    {name: "Phone Support", starter: false, pro: false, premium: true, enterprise: true},
    {name: "SSO Integration", starter: false, pro: false, premium: false, enterprise: true},
    {name: "Custom Contracts", starter: false, pro: false, premium: false, enterprise: true},
]

const faqs = [
    {
        question: "Can I change my plan at any time?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start your trial.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by invoice.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, contact us for a full refund.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we take security seriously. All data is encrypted in transit and at rest, and we're SOC 2 Type II compliant with regular security audits.",
    },
    {
        question: "Do you offer discounts for nonprofits or students?",
        answer:
            "Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for more information.",
    },
    {
        question: "What kind of support do you provide?",
        answer:
            "Support varies by plan: Starter gets email support, Pro gets priority email support, Premium gets phone support, and Enterprise gets dedicated support.",
    },
]

export default function MainComponent() {
    const [isYearly, setIsYearly] = useState(false)
    const [openIndex, setOpenIndex] = useState<number | null>(null)


    return (
        <>
            <Navbar/>
            <div className="py-12 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Select the perfect plan for your needs. Upgrade or downgrade at any time.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                    <span
                        className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                isYearly ? "bg-blue-600" : "bg-gray-200"
                            }`}
                        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                }`}
            />
                        </button>
                        <span
                            className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>Yearly</span>
                        {isYearly && (
                            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Save 17%</span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl border-2 p-6 shadow-sm transition-all hover:shadow-lg ${
                                plan.popular ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-white"
                            }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div
                                        className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        <Star className="w-3 h-3 fill-current"/>
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

                                {/* Price */}
                                <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                                    <span className="text-gray-600 ml-1">/{isYearly ? "year" : "month"}</span>
                                </div>

                                {isYearly && (
                                    <p className="text-sm text-green-600 font-medium">
                                        ${plan.monthlyPrice * 12 - plan.yearlyPrice} saved annually
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}

                            <button
                                className=" cursor-pointer border border-[#2C2F8F] text-[#2C2F8F] px-6 py-3 rounded hover:bg-[#2C2F8F] hover:text-white hover:scale-105 transition shadow">
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                See exactly what's included in each plan to make the best choice for your needs.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                                    <th className="text-center py-4 px-6 font-semibold text-primary-800 bg-primary-50">Pro</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Premium</th>
                                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                                </tr>
                                </thead>
                                <tbody>
                                {features.map((feature, index) => (
                                    <tr key={feature.name} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="py-4 px-6 font-medium text-gray-900">{feature.name}</td>
                                        <td className="py-4 px-6 text-center">
                                            {typeof feature.starter === "boolean" ? (
                                                feature.starter ? (
                                                    <Check className="w-5 h-5 text-green-500 mx-auto"/>
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto"/>
                                                )
                                            ) : (
                                                <span className="text-gray-700">{feature.starter}</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-primary-50">
                                            {typeof feature.pro === "boolean" ? (
                                                feature.pro ? (
                                                    <Check className="w-5 h-5 text-green-500 mx-auto"/>
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto"/>
                                                )
                                            ) : (
                                                <span className="text-primary-800 font-semibold">{feature.pro}</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {typeof feature.premium === "boolean" ? (
                                                feature.premium ? (
                                                    <Check className="w-5 h-5 text-green-500 mx-auto"/>
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto"/>
                                                )
                                            ) : (
                                                <span className="text-gray-700">{feature.premium}</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {typeof feature.enterprise === "boolean" ? (
                                                feature.enterprise ? (
                                                    <Check className="w-5 h-5 text-green-500 mx-auto"/>
                                                ) : (
                                                    <X className="w-5 h-5 text-gray-300 mx-auto"/>
                                                )
                                            ) : (
                                                <span className="text-gray-700">{feature.enterprise}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="text-center mt-2">
                    <p className="text-gray-600 mb-4">Need a custom solution? We're here to help.</p>
                    <div>Contact Sales</div>
                </div>
            </div>

            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked
                            Questions</h2>
                        <p className="text-lg text-gray-600">
                            Got questions? We've got answers. If you can't find what you're looking for, contact our
                            support team.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-primary-800"/>
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-primary-800"/>
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
