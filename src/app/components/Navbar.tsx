"use client";

import {
    Bars3Icon,
    CalendarDaysIcon,
    CalendarIcon,
    ChartBarIcon,
    ChartPieIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    HomeIcon,
    PuzzlePieceIcon,
    ServerStackIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import {useState} from 'react';
import Image from "next/image";
import logo from '@/images/logos/logo.jpg'
import Link from 'next/link'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState<string | null>(null);
    const [langOpen, setLangOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {
            label: 'Products',
            icon: PuzzlePieceIcon,
            links: [
                {
                    title: 'Consumer Risk Prevention',
                    desc: 'AI-Powered Fraud Defense',
                    icon: CalendarIcon,
                    url: '/consumer-risk-prevention'
                },
                {
                    title: 'Business Risk Prevention',
                    desc: 'No Risky Merchants',
                    icon: ChartPieIcon,
                    url: '/business-risk-prevention'
                },
                {
                    title: 'Lending Risk Prevention',
                    desc: 'AI-based fraud detection',
                    icon: CalendarDaysIcon,
                    url: '/lending-risk-prevention'
                },
            ],
        },
        {
            label: 'Solutions',
            icon: ChartBarIcon,
            links: [
                {
                    title: 'D2C & eCommerce',
                    desc: 'Custom fit your process',
                    icon: CalendarIcon,
                    url: 'solutions/d2c-ecommerce'
                },
                {
                    title: 'Payment Gateways & Aggregators',
                    desc: 'Modernize operations',
                    icon: ChartPieIcon,
                    url: 'solutions/payment-gateways-and-aggregators'
                },
                {
                    title: 'Digital Lending',
                    desc: 'Unify user flow',
                    icon: CalendarDaysIcon,
                    url: 'solutions/digital-lending'
                },
                {
                    title: 'Travel & Quick Commerce',
                    desc: 'Unify user flow',
                    icon: CalendarDaysIcon,
                    url: 'solutions/travel-ecommerce'
                },
            ],
        },
        {
            label: 'Resources',
            icon: HomeIcon,
            links: [],
        },
        {
            label: 'Integrations',
            icon: ServerStackIcon,
            links: [
                {title: 'Shopify', desc: 'Ecom integration', icon: CalendarIcon, url: '/coming-soon'},
                {title: 'WooCommerce', desc: 'Plug & play store', icon: ChartPieIcon, url: '/coming-soon'},
                {title: 'Direct APIs', desc: 'Flexible developer stack', icon: CalendarDaysIcon, url: '/coming-soon'},
                {title: 'SDK', desc: 'Flexible mobile developer stack', icon: CalendarDaysIcon, url: '/coming-soon'},
                {title: 'Web SDK', desc: 'Flexible web developer stack', icon: CalendarDaysIcon, url: '/coming-soon'},
            ],
        },
        {
            label: 'About QuarkfinAI',
            icon: HomeIcon,
            links: [
                {title: 'Contact Us', desc: 'Driving intelligent commerce', icon: CalendarIcon, url: '/contact-us'},
                {title: 'About us', desc: 'Driving intelligent commerce', icon: CalendarIcon, url: '/about-us'},
                {title: 'Careers', desc: 'Join us', icon: CalendarDaysIcon, url: '/coming-soon'},
            ],
        },
    ];

    const languages = [
        {code: 'EN', label: 'English', flag: '🇺🇸'},
        {code: 'DE', label: 'Deutsch', flag: '🇩🇪'},
        {code: 'MX', label: 'Español', flag: '🇲🇽'},
        {code: 'JP', label: '日本語', flag: '🇯🇵'},
    ];

    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <nav className="px-6 py-4 shadow-md bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + Nav */}
                <div className="flex items-center space-x-8">
                    <div className="text-2xl font-bold text-[#2C2F8F]">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="QuarkfinAI logo"
                                width={120}
                                height={100}
                                priority
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => item.links.length > 0 && setNavOpen(item.label)}
                                onMouseLeave={() => setNavOpen(null)}
                            >
                                <Link href='#' passHref>
                                    <button
                                        className="cursor-pointer flex items-center text-sm font-medium text-gray-800 hover:text-[#2C2F8F] transition"
                                    >
                                        {item.label}
                                        {item.links.length > 0 && (
                                            navOpen === item.label ? (
                                                <ChevronUpIcon
                                                    className="w-4 h-4 ml-1 transition-transform duration-300"/>
                                            ) : (
                                                <ChevronDownIcon
                                                    className="w-4 h-4 ml-1 transition-transform duration-300"/>
                                            )
                                        )}
                                    </button>
                                </Link>

                                {item.links.length > 0 && (
                                    <div
                                        className={` cursor-pointer absolute top-full mt-4 bg-white border border-gray-100 shadow-xl rounded-xl w-80 p-4 z-50 transition-all duration-300 ease-in-out origin-top transform ${
                                            navOpen === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                        }`}
                                    >
                                        <ul className="space-y-4">
                                            {item.links.map((link) => (
                                                <Link
                                                    key={link.title}
                                                    href={link.url ?? ''}
                                                    className="flex items-start space-x-3 group cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-gray-100"
                                                >
                                                    <link.icon
                                                        className="w-5 h-5 mt-1 text-gray-400 group-hover:text-[#2C2F8F]"/>
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-500 group-hover:text-[#2C2F8F]">
                                                            {link.title}
                                                        </p>
                                                        <p className="text-sm text-gray-400">{link.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Language dropdown */}
                    <div
                        onMouseEnter={() => setLangOpen(true)}
                        onMouseLeave={() => setLangOpen(false)}
                        className="relative"
                    >
                        <button
                            className="flex items-center text-sm font-medium text-gray-800 hover:text-[#2C2F8F] transition"
                        >
                            EN
                            {langOpen ? (
                                <ChevronUpIcon className="w-4 h-4 ml-1 transition-transform duration-300"/>
                            ) : (
                                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300"/>
                            )}
                        </button>

                        <div
                            className={`absolute top-full mt-4 bg-white border border-gray-100 shadow-xl rounded-xl w-60 p-4 z-50 transition-all duration-300 ease-in-out origin-top transform ${
                                langOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                            }`}
                        >
                            <ul className="space-y-4">
                                {languages.map((lang) => (
                                    <li
                                        key={lang.code}
                                        className="flex items-start space-x-3 group cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-gray-100"
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 group-hover:text-[#2C2F8F]">
                                                {lang.label}
                                            </p>
                                            <p className="text-sm text-gray-400">{lang.code}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Link href="/pricing">
                        <button
                            className=" cursor-pointer bg-[#2C2F8F] text-white px-4 py-2 rounded hover:bg-[#3A50D9] transition">
                            Book A Demo
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? (
                            <XMarkIcon className="w-6 h-6 text-[#2C2F8F]"/>
                        ) : (
                            <Bars3Icon className="w-6 h-6 text-[#2C2F8F]"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden mt-4 space-y-4">
                    {navItems.map((item) => (
                        <details key={item.label} className="group">
                            <summary
                                className="cursor-pointer px-4 py-2 flex justify-between items-center text-sm text-gray-800 hover:text-[#2C2F8F]"
                            >
                                {item.label}
                                {item.links.length > 0 && (
                                    <ChevronDownIcon
                                        className="w-4 h-4 ml-1 group-open:rotate-180 transition-transform"/>
                                )}
                            </summary>
                            {item.links.length > 0 && (
                                <ul className="pl-6 pr-4 pt-2 space-y-3">
                                    {item.links.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.url ?? ''}
                                            className="flex items-start space-x-3 group cursor-pointer p-3 rounded-md transition-all duration-200 hover:bg-gray-100"
                                        >
                                            <li className="text-sm text-gray-600">{link.title}</li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </details>
                    ))}
                    <div className="px-4 pt-4">
                        <h4 className="block text-sm font-medium mb-2 text-[#2C2F8F]">Language</h4>
                        <ul className="space-y-3">
                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-all hover:bg-gray-100 ${
                                        selectedLang.code === lang.code ? 'bg-gray-100' : ''
                                    }`}
                                    onClick={() => setSelectedLang(lang)}
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    <span className="text-sm text-gray-800 font-medium">{lang.label}</span>
                                    <span className="text-xs text-gray-400 ml-auto">{lang.code}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="w-full mt-6 bg-[#2C2F8F] text-white py-2 rounded hover:bg-[#3A50D9] transition">
                            Book a Demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
