"use client"

import {useEffect, useState} from "react"
import {ChevronRight, FileText, Scale, Shield} from "lucide-react"
import Footer from "@/components/Footer";
import Navbar from "@/app/components/Navbar";

const sections = [
    {id: "acceptance", title: "Acceptance of Terms"},
    {id: "description", title: "Description of Service"},
    {id: "user-accounts", title: "User Accounts"},
    {id: "acceptable-use", title: "Acceptable Use Policy"},
    {id: "prohibited-uses", title: "Prohibited Uses"},
    {id: "content", title: "Content and Intellectual Property"},
    {id: "privacy", title: "Privacy Policy"},
    {id: "payments", title: "Payments and Billing"},
    {id: "termination", title: "Termination"},
    {id: "disclaimers", title: "Disclaimers"},
    {id: "limitation", title: "Limitation of Liability"},
    {id: "indemnification", title: "Indemnification"},
    {id: "governing-law", title: "Governing Law"},
    {id: "changes", title: "Changes to Terms"},
    {id: "contact", title: "Contact Information"},
]

export default function TermsConditions() {
    const [activeSection, setActiveSection] = useState("acceptance")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section.id)
                if (element) {
                    const {offsetTop, offsetHeight} = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
                                <div className="flex items-center mb-4">
                                    <Scale className="w-6 h-6 text-blue-600 mr-2"/>
                                    <h2 className="text-lg font-semibold text-gray-900">Table of Contents</h2>
                                </div>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center justify-between group ${
                                                activeSection === section.id
                                                    ? "bg-blue-100 text-blue-700 font-medium"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            }`}
                                        >
                                            <span>{section.title}</span>
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    activeSection === section.id ? "text-blue-700" : "text-gray-400 group-hover:text-gray-600"
                                                }`}
                                            />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3 mt-8 lg:mt-0">
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <header className="mb-8">
                                    <div className="flex items-center mb-4">
                                        <FileText className="w-8 h-8 text-blue-600 mr-3"/>
                                        <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
                                    </div>
                                    <p className="text-gray-600 mb-2">Last updated: January 1, 2024</p>
                                    <p className="text-gray-600">Effective date: January 1, 2024</p>
                                </header>

                                <div className="prose prose-gray max-w-none">
                                    <section id="acceptance" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of
                                            Terms</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            By accessing and using this website and our services, you accept and agree
                                            to be
                                            bound by the terms
                                            and provision of this agreement. If you do not agree to abide by the above,
                                            please do not use this
                                            service.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            These Terms of Service ("Terms") govern your use of our website located at
                                            www.example.com (the
                                            "Service") operated by Example Company ("us", "we", or "our").
                                        </p>
                                    </section>

                                    <section id="description" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of
                                            Service</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Our service provides a platform for users to access various digital tools
                                            and
                                            resources. We reserve
                                            the right to modify, suspend, or discontinue any aspect of the service at
                                            any
                                            time.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Access to our web-based platform and tools</li>
                                            <li>Customer support and technical assistance</li>
                                            <li>Regular updates and feature enhancements</li>
                                            <li>Data storage and backup services</li>
                                        </ul>
                                    </section>

                                    <section id="user-accounts" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            When you create an account with us, you must provide information that is
                                            accurate, complete, and
                                            current at all times. You are responsible for safeguarding the password and
                                            for
                                            all activities that
                                            occur under your account.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Account
                                            Responsibilities</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Maintain the security of your login credentials</li>
                                            <li>Notify us immediately of any unauthorized use of your account</li>
                                            <li>Ensure all account information is accurate and up-to-date</li>
                                            <li>Comply with all applicable laws and regulations</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed">
                                            You may not use another person's account without permission. We reserve the
                                            right to refuse service,
                                            terminate accounts, or cancel orders at our sole discretion.
                                        </p>
                                    </section>

                                    <section id="acceptable-use" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use
                                            Policy</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            You may use our service for lawful purposes only. You agree to use the
                                            service
                                            in a manner
                                            consistent with any and all applicable laws and regulations.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Acceptable Uses
                                            Include</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Using the service for legitimate business or personal purposes</li>
                                            <li>Accessing content and features as intended</li>
                                            <li>Providing accurate information when required</li>
                                            <li>Respecting the rights and privacy of other users</li>
                                        </ul>
                                    </section>

                                    <section id="prohibited-uses" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited
                                            Uses</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            You may not use our service for any unlawful purpose or to solicit others to
                                            perform unlawful acts.
                                            The following activities are strictly prohibited:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Violating any local, state, national, or international law</li>
                                            <li>Transmitting or procuring the sending of any advertising or promotional
                                                material
                                            </li>
                                            <li>Impersonating or attempting to impersonate another person or entity</li>
                                            <li>Engaging in any other conduct that restricts or inhibits anyone's use of
                                                the
                                                service
                                            </li>
                                            <li>Attempting to gain unauthorized access to any portion of the service
                                            </li>
                                            <li>Using the service to transmit viruses, malware, or other harmful code
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="content" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Content and
                                            Intellectual Property</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The service and its original content, features, and functionality are and
                                            will
                                            remain the exclusive
                                            property of Example Company and its licensors. The service is protected by
                                            copyright, trademark, and
                                            other laws.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">User Content</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Our service may allow you to post, link, store, share and otherwise make
                                            available certain
                                            information, text, graphics, videos, or other material. You are responsible
                                            for
                                            the content that you
                                            post to the service.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>You retain ownership of your content</li>
                                            <li>You grant us a license to use, display, and distribute your content</li>
                                            <li>You are responsible for ensuring your content doesn't violate any laws
                                            </li>
                                            <li>We reserve the right to remove content that violates these terms</li>
                                        </ul>
                                    </section>

                                    <section id="privacy" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy Policy</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Your privacy is important to us. Please review our Privacy Policy, which
                                            also
                                            governs your use of
                                            the service, to understand our practices.
                                        </p>
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5"/>
                                                <p className="text-blue-800">
                                                    Our Privacy Policy explains how we collect, use, and protect your
                                                    information when you use our
                                                    service. By using our service, you agree to the collection and use
                                                    of
                                                    information in accordance
                                                    with our Privacy Policy.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="payments" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Payments and
                                            Billing</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            If you purchase a subscription or make a payment for our services, you agree
                                            to
                                            provide current,
                                            complete, and accurate purchase and account information.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Payment Terms</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>All fees are non-refundable unless otherwise stated</li>
                                            <li>Subscription fees are billed in advance on a recurring basis</li>
                                            <li>We reserve the right to change our pricing at any time</li>
                                            <li>Failed payments may result in service suspension</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed">
                                            You are responsible for providing accurate billing information and promptly
                                            updating your account
                                            with any changes to your payment method.
                                        </p>
                                    </section>

                                    <section id="termination" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We may terminate or suspend your account immediately, without prior notice
                                            or
                                            liability, for any
                                            reason whatsoever, including without limitation if you breach the Terms.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Grounds for
                                            Termination</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                            <li>Violation of these Terms of Service</li>
                                            <li>Fraudulent or illegal activity</li>
                                            <li>Non-payment of fees</li>
                                            <li>Abuse of the service or other users</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed">
                                            Upon termination, your right to use the service will cease immediately. If
                                            you
                                            wish to terminate
                                            your account, you may simply discontinue using the service.
                                        </p>
                                    </section>

                                    <section id="disclaimers" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimers</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The information on this website is provided on an "as is" basis. To the
                                            fullest
                                            extent permitted by
                                            law, this Company excludes all representations, warranties, conditions and
                                            terms.
                                        </p>
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                            <p className="text-yellow-800 font-medium">
                                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
                                                WARRANTIES OF
                                                ANY KIND, WHETHER
                                                EXPRESS OR IMPLIED.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="limitation" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of
                                            Liability</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            In no event shall Example Company, nor its directors, employees, partners,
                                            agents, suppliers, or
                                            affiliates, be liable for any indirect, incidental, special, consequential,
                                            or
                                            punitive damages.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Our total liability to you for any damages arising from or related to this
                                            agreement shall not
                                            exceed the amount you have paid us in the twelve (12) months immediately
                                            preceding the event giving
                                            rise to the claim.
                                        </p>
                                    </section>

                                    <section id="indemnification" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12.
                                            Indemnification</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            You agree to defend, indemnify, and hold harmless Example Company and its
                                            licensee and licensors,
                                            and their employees, contractors, agents, officers and directors, from and
                                            against any and all
                                            claims, damages, obligations, losses, liabilities, costs or debt, and
                                            expenses
                                            (including but not
                                            limited to attorney's fees).
                                        </p>
                                    </section>

                                    <section id="governing-law" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            These Terms shall be interpreted and governed by the laws of the State of
                                            [State], without regard to
                                            its conflict of law provisions.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Our failure to enforce any right or provision of these Terms will not be
                                            considered a waiver of
                                            those rights.
                                        </p>
                                    </section>

                                    <section id="changes" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to
                                            Terms</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We reserve the right, at our sole discretion, to modify or replace these
                                            Terms
                                            at any time. If a
                                            revision is material, we will try to provide at least 30 days notice prior
                                            to
                                            any new terms taking
                                            effect.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            What constitutes a material change will be determined at our sole
                                            discretion. By
                                            continuing to
                                            access or use our service after those revisions become effective, you agree
                                            to
                                            be bound by the
                                            revised terms.
                                        </p>
                                    </section>

                                    <section id="contact" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact
                                            Information</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            If you have any questions about these Terms and Conditions, please contact
                                            us:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <ul className="text-gray-700 space-y-2">
                                                <li>
                                                    <strong>Email:</strong> legal@example.com
                                                </li>
                                                <li>
                                                    <strong>Phone:</strong> +1 (555) 123-4567
                                                </li>
                                                <li>
                                                    <strong>Address:</strong> 123 Legal Street, Terms City, TC 12345
                                                </li>
                                                <li>
                                                    <strong>Website:</strong> www.example.com/legal
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
