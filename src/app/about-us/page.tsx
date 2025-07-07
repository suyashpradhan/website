"use client"

import {Award, Calendar, Heart, Target, TrendingUp, Users} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
    {
        name: "Bidya",
        role: "CEO & Founder",
        image: "/placeholder.svg?height=300&width=300",
        bio: 'Nothing',
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Sachinn",
        role: "Head of Marketing",
        image: "/placeholder.svg?height=300&width=300",
        bio: 'Nothing',
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Mehul Dhikonia",
        role: "CTO",
        image: "/placeholder.svg?height=300&width=300",
        bio: 'Nothing',
        linkedin: "#",
        twitter: "#",
    },
]

const timeline = [
    {
        year: "2018",
        title: "Company Founded",
        description: "Started with a small team of 3 people in a garage, driven by a big vision.",
    },
    {
        year: "2019",
        title: "First Product Launch",
        description: "Launched our flagship product and acquired our first 1,000 customers.",
    },
    {
        year: "2020",
        title: "Series A Funding",
        description: "Raised $5M in Series A funding to accelerate growth and expand the team.",
    },
    {
        year: "2021",
        title: "International Expansion",
        description: "Expanded operations to Europe and Asia, serving customers globally.",
    },
    {
        year: "2022",
        title: "Major Partnership",
        description: "Formed strategic partnerships with industry leaders to enhance our offerings.",
    },
    {
        year: "2023",
        title: "AI Integration",
        description: "Integrated cutting-edge AI technology to improve user experience.",
    },
    {
        year: "2024",
        title: "Market Leader",
        description: "Became the leading solution in our category with over 100,000 users.",
    },
]

const stats = [
    {number: "100K+", label: "Happy Customers"},
    {number: "50+", label: "Team Members"},
    {number: "25+", label: "Countries Served"},
    {number: "99.9%", label: "Uptime"},
]

const values = [
    {
        icon: <Users className="w-8 h-8"/>,
        title: "Customer First",
        description: "We put our customers at the center of everything we do, ensuring their success is our success.",
    },
    {
        icon: <Target className="w-8 h-8"/>,
        title: "Innovation",
        description: "We constantly push boundaries and embrace new technologies to solve complex problems.",
    },
    {
        icon: <Heart className="w-8 h-8"/>,
        title: "Integrity",
        description: "We operate with transparency, honesty, and ethical practices in all our interactions.",
    },
    {
        icon: <Award className="w-8 h-8"/>,
        title: "Excellence",
        description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
    },
]

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Our Company</h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                            We're on a mission to transform the way businesses operate through innovative technology
                            solutions and
                            exceptional service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-[#2C2f8f] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Join Our Team
                            </button>
                            <button
                                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Our Story
                            </button>
                        </div>
                    </div>
                </section>

                {/* Mission, Vision, Values */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We believe in creating technology that makes a positive impact on businesses and
                                communities
                                worldwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {values.map((value, index) => (
                                <div key={index}
                                     className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 mb-6">
                                    To empower businesses of all sizes with cutting-edge technology solutions that drive
                                    growth, efficiency,
                                    and innovation. We strive to make complex technology accessible and valuable for
                                    everyone.
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600">
                                    To be the global leader in business technology solutions, creating a world where
                                    every
                                    organization can
                                    harness the power of technology to achieve their full potential.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg p-8 text-center">
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, index) => (
                                        <div key={index}>
                                            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                            <div className="text-gray-700 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our diverse team of experts brings together decades of experience in technology, design,
                                and
                                business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <img src={member.image || "/placeholder.svg"} alt={member.name}
                                         className="w-full h-64 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                        <div className="flex space-x-3">
                                            <a href={member.linkedin}
                                               className="text-gray-400 hover:text-blue-600 transition-colors">
                                                <span className="sr-only">LinkedIn</span>
                                                <div
                                                    className="w-5 h-5 bg-gray-400 hover:bg-blue-600 rounded transition-colors"></div>
                                            </a>
                                            <a href={member.twitter}
                                               className="text-gray-400 hover:text-blue-600 transition-colors">
                                                <span className="sr-only">Twitter</span>
                                                <div
                                                    className="w-5 h-5 bg-gray-400 hover:bg-blue-600 rounded transition-colors"></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Timeline */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From a small startup to an industry leader, here's how we've grown over the years.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div
                                className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>

                            <div className="space-y-12">
                                {timeline.map((item, index) => (
                                    <div key={index} className="relative flex items-center">
                                        {/* Timeline dot */}
                                        <div
                                            className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                                        {/* Content */}
                                        <div
                                            className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}>
                                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                                <div className="flex items-center mb-2">
                                                    <Calendar className="w-5 h-5 text-blue-600 mr-2"/>
                                                    <span className="text-blue-600 font-semibold">{item.year}</span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Culture Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
                                <p className="text-gray-600 mb-6">
                                    We foster an inclusive, collaborative environment where innovation thrives. Our team
                                    is
                                    our greatest
                                    asset, and we invest in their growth, well-being, and success.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                                            <p className="text-gray-600">
                                                We encourage professional development and provide learning
                                                opportunities.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Users className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Work-Life Balance</h4>
                                            <p className="text-gray-600">
                                                We believe in maintaining a healthy balance between work and personal
                                                life.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Heart className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Diversity & Inclusion</h4>
                                            <p className="text-gray-600">We celebrate diversity and create an inclusive
                                                environment for all.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/placeholder.svg?height=250&width=250"
                                    alt="Team collaboration"
                                    className="rounded-lg shadow-sm"
                                />
                                <img
                                    src="/placeholder.svg?height=250&width=250"
                                    alt="Office environment"
                                    className="rounded-lg shadow-sm mt-8"
                                />
                                <img
                                    src="/placeholder.svg?height=250&width=250"
                                    alt="Team meeting"
                                    className="rounded-lg shadow-sm -mt-8"
                                />
                                <img src="/placeholder.svg?height=250&width=250" alt="Company event"
                                     className="rounded-lg shadow-sm"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2C2F8F]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Whether you're looking to work with us or join our team, we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                View Open Positions
                            </button>
                            <button
                                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
