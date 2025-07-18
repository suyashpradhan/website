"use client"
import Navbar from "@/app/components/Navbar"
import Footer from "@/components/Footer"

const teamMembers = [
    {
        name: "Bidya",
        role: "CEO & Founder",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Nothing",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Sachinn",
        role: "Head of Marketing",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Nothing",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Mehul Dhikonia",
        role: "CTO",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Nothing",
        linkedin: "#",
        twitter: "#",
    },
]

const brandLogos = [
    {name: "Amazon", logo: "/logos/5.jpeg"},
    {name: "PA Media", logo: "/logos/7.jpeg"},
    {name: "CRED", logo: "/logos/1.jpeg"},
    {name: "Deliveryhero", logo: "/logos/6.jpeg"},
    {name: "Bureauid", logo: "/logos/9.jpeg"},
    {name: "Chargebee", logo: "/logos/3.jpeg"},
    {name: "Oracle", logo: "/logos/2.jpeg"},
    {name: "MoEngage", logo: "/logos/8.jpeg"},
    {name: "Practo", logo: "/logos/4.jpeg"},
    {name: "Infotrie", logo: "/logos/10.jpeg"},
    {name: "Premier Logic", logo: "/logos/11.jpeg"},
]

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-white">
                {/* Our Story Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About QuarkfinAI</h1>

                        </div>
                        <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed">
                            <p className="mb-6 text-lg">
                                We built QuarkfinAI out of frustration from watching good businesses get blindsided by
                                fraud, over and
                                over. Enterprises with bold ideas, scaling companies on the verge of breakthroughs, have
                                all been
                                derailed by preventable threats. The existing tools meant to protect them are relics of
                                the past:
                                clunky, expensive, and built for legacy, not innovators, or built for scale. We knew
                                there had to be a
                                better way!
                            </p>
                            <p className="mb-6 text-lg">
                                So we built it ourselves. Drawing on years in fraud prevention, we designed QuarkfinAI
                                to be what we'd
                                always needed: smart enough to outthink modern risks, but so simple that any team could
                                use it. No army
                                of techies required. In an era where AI is rewriting the rules of fraud daily, we
                                flipped the script:
                                instead of reacting to losses, we help businesses stop threats before they strike.
                            </p>
                            <p className="text-lg">
                                Not to be dramatic, but this isn't just software; it's a shield for ambition. Because
                                every company, big
                                or small, deserves to grow fearlessly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Where trust drives growth, and growth builds trust.
                                </p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To become the trusted risk intelligence layer, an always-learning AI platform that
                                    makes
                                    high-velocity, high-trust transactions possible for every business, in every market.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brands Ticker Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Team background
                            </h2>
                        </div>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll">
                                {/* First set of logos */}
                                {brandLogos.map((brand, index) => (
                                    <div key={index} className="flex-shrink-0 mx-8">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            height={120}
                                            width={120}
                                            className="h-12 w-auto duration-300 opacity-100 transition-opacity"
                                        />
                                    </div>
                                ))}
                                {brandLogos.map((brand, index) => (
                                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                                        <img
                                            src={brand.logo || "/placeholder.svg"}
                                            alt={brand.name}
                                            className="h-12 w-auto duration-300 opacity-100 transition-opacity"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The People Behind the
                                Magic</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our diverse team of experts brings together decades of experience in technology, design,
                                and business.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-64 object-cover"
                                    />
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
            </div>
            <Footer/>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: calc(200% + 4rem);
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </>
    )
}
