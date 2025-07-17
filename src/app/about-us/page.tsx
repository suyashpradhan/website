"use client"

import {Award, Heart, Target, Users} from "lucide-react"
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

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2C2F8F]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Whether you're looking to work with us or join our team, we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
