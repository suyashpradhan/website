"use client"

import type React from "react"
import {useState} from "react"
import {Mail, Send} from "lucide-react"
import Footer from "@/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({name: "", email: "", subject: "", message: ""})
        }, 3000)
    }

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Mail className="w-6 h-6 text-blue-600 mt-1"/>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                            <p className="text-gray-600">hello@quarkinfin.ai</p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div
                                            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                                        <p className="text-gray-600">Thank you for contacting us. We'll get back to you
                                            soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name"
                                                       className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone-number"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                id="phone-number"
                                                name="phone-number"
                                                required
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Phone Number"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message"
                                                   className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                                placeholder="Tell us more about your inquiry..."
                                            />
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#2C2F8F] text-white py-3 cursor-pointer px-6 rounded-lg font-medium hover-[#2C2F4F] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            ></circle>
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            ></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5 mr-2"/>
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    {/*<div className="mt-16">*/}
                    {/*    <div className="bg-white rounded-lg shadow-sm overflow-hidden">*/}
                    {/*        <div className="h-96 bg-gray-200 flex items-center justify-center">*/}
                    {/*            <div className="text-center">*/}
                    {/*                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4"/>*/}
                    {/*                <p className="text-gray-500 text-lg">Interactive Map Placeholder</p>*/}
                    {/*                <p className="text-gray-400 text-sm">123 Business Street, New York, NY 10001</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <Footer/>
        </>
    )
}
