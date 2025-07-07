"use client"

import {useEffect, useState} from "react"
import {ChevronRight} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    {id: "introduction", title: "Introduction"},
    {id: "information-collection", title: "Information We Collect"},
    {id: "how-we-use", title: "How We Use Your Information"},
    {id: "information-sharing", title: "Information Sharing"},
    {id: "data-security", title: "Data Security"},
    {id: "cookies", title: "Cookies and Tracking"},
    {id: "third-party", title: "Third-Party Services"},
    {id: "data-retention", title: "Data Retention"},
    {id: "your-rights", title: "Your Rights"},
    {id: "children-privacy", title: "Children's Privacy"},
    {id: "changes", title: "Changes to This Policy"},
    {id: "contact", title: "Contact Us"},
]

export default function Page() {
    const [activeSection, setActiveSection] = useState("introduction")

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
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
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
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                                    <p className="text-gray-600">Last updated: January 1, 2024</p>
                                </header>

                                <div className="prose prose-gray max-w-none">
                                    <section id="introduction" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Welcome to our Privacy Policy. Your privacy is critically important to us.
                                            This
                                            Privacy Policy
                                            explains how we collect, use, disclose, and safeguard your information when
                                            you
                                            visit our website
                                            and use our services.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            By using our service, you agree to the collection and use of information in
                                            accordance with this
                                            policy. We will not use or share your information with anyone except as
                                            described in this Privacy
                                            Policy.
                                        </p>
                                    </section>

                                    <section id="information-collection" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We
                                            Collect</h2>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We may collect personally identifiable information, such as your name, email
                                            address, phone number,
                                            and postal address when you voluntarily provide it to us.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Usage Data</h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We may also collect information about how you access and use our service.
                                            This
                                            usage data may
                                            include your computer's Internet Protocol address, browser type, browser
                                            version, the pages you
                                            visit, the time and date of your visit, and other diagnostic data.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>IP address and location data</li>
                                            <li>Browser and device information</li>
                                            <li>Pages visited and time spent</li>
                                            <li>Referring website information</li>
                                        </ul>
                                    </section>

                                    <section id="how-we-use" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your
                                            Information</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">We use the collected data for
                                            various purposes:</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>To provide and maintain our service</li>
                                            <li>To notify you about changes to our service</li>
                                            <li>To provide customer support</li>
                                            <li>To gather analysis or valuable information to improve our service</li>
                                            <li>To monitor the usage of our service</li>
                                            <li>To detect, prevent and address technical issues</li>
                                            <li>To send you marketing communications (with your consent)</li>
                                        </ul>
                                    </section>

                                    <section id="information-sharing" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information
                                            Sharing</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We do not sell, trade, or otherwise transfer your personal information to
                                            third
                                            parties without your
                                            consent, except in the following circumstances:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>With service providers who assist us in operating our website</li>
                                            <li>When required by law or to protect our rights</li>
                                            <li>In connection with a merger, acquisition, or sale of assets</li>
                                            <li>With your explicit consent</li>
                                        </ul>
                                    </section>

                                    <section id="data-security" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            The security of your data is important to us. We implement appropriate
                                            technical
                                            and organizational
                                            measures to protect your personal information against unauthorized access,
                                            alteration, disclosure,
                                            or destruction.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            However, please remember that no method of transmission over the Internet or
                                            method of electronic
                                            storage is 100% secure. While we strive to use commercially acceptable means
                                            to
                                            protect your
                                            personal information, we cannot guarantee its absolute security.
                                        </p>
                                    </section>

                                    <section id="cookies" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking
                                            Technologies</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We use cookies and similar tracking technologies to track activity on our
                                            service and hold certain
                                            information. Cookies are files with small amounts of data which may include
                                            an
                                            anonymous unique
                                            identifier.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Types of Cookies We
                                            Use</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>
                                                <strong>Essential Cookies:</strong> Required for the website to function
                                                properly
                                            </li>
                                            <li>
                                                <strong>Analytics Cookies:</strong> Help us understand how visitors
                                                interact
                                                with our website
                                            </li>
                                            <li>
                                                <strong>Marketing Cookies:</strong> Used to deliver relevant
                                                advertisements
                                            </li>
                                            <li>
                                                <strong>Preference Cookies:</strong> Remember your settings and
                                                preferences
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="third-party" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party
                                            Services</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Our service may contain links to other sites that are not operated by us. We
                                            may
                                            also use
                                            third-party services to help us operate our website and provide our
                                            services.
                                        </p>
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">Third-Party Services We
                                            Use</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Google Analytics for website analytics</li>
                                            <li>Payment processors for handling transactions</li>
                                            <li>Email service providers for communications</li>
                                            <li>Cloud storage providers for data hosting</li>
                                        </ul>
                                    </section>

                                    <section id="data-retention" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We will retain your personal information only for as long as is necessary
                                            for
                                            the purposes set out
                                            in this Privacy Policy. We will retain and use your information to the
                                            extent
                                            necessary to comply
                                            with our legal obligations, resolve disputes, and enforce our policies.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Usage data is generally retained for a shorter period of time, except when
                                            this
                                            data is used to
                                            strengthen the security or to improve the functionality of our service.
                                        </p>
                                    </section>

                                    <section id="your-rights" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            You have certain rights regarding your personal information:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>
                                                <strong>Right to Access:</strong> Request copies of your personal data
                                            </li>
                                            <li>
                                                <strong>Right to Rectification:</strong> Request correction of
                                                inaccurate
                                                data
                                            </li>
                                            <li>
                                                <strong>Right to Erasure:</strong> Request deletion of your personal
                                                data
                                            </li>
                                            <li>
                                                <strong>Right to Restrict Processing:</strong> Request limitation of
                                                data
                                                processing
                                            </li>
                                            <li>
                                                <strong>Right to Data Portability:</strong> Request transfer of your
                                                data
                                            </li>
                                            <li>
                                                <strong>Right to Object:</strong> Object to processing of your personal
                                                data
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="children-privacy" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's
                                            Privacy</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Our service does not address anyone under the age of 13. We do not knowingly
                                            collect personally
                                            identifiable information from children under 13.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            If you are a parent or guardian and you are aware that your child has
                                            provided
                                            us with personal
                                            information, please contact us. If we become aware that we have collected
                                            personal information from
                                            children without verification of parental consent, we take steps to remove
                                            that
                                            information from our
                                            servers.
                                        </p>
                                    </section>

                                    <section id="changes" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This
                                            Privacy
                                            Policy</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            We may update our Privacy Policy from time to time. We will notify you of
                                            any
                                            changes by posting the
                                            new Privacy Policy on this page and updating the "Last updated" date.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            You are advised to review this Privacy Policy periodically for any changes.
                                            Changes to this Privacy
                                            Policy are effective when they are posted on this page.
                                        </p>
                                    </section>

                                    <section id="contact" className="mb-12">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            If you have any questions about this Privacy Policy, please contact us:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <ul className="text-gray-700 space-y-2">
                                                <li>
                                                    <strong>Email:</strong> privacy@example.com
                                                </li>
                                                <li>
                                                    <strong>Phone:</strong> +1 (555) 123-4567
                                                </li>
                                                <li>
                                                    <strong>Address:</strong> 123 Privacy Street, Data City, DC 12345
                                                </li>
                                                <li>
                                                    <strong>Website:</strong> www.example.com/contact
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
