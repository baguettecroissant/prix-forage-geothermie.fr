"use client";

import { useState } from "react";
import Link from "next/link";
import { IconBackhoe, IconBook, IconAward, IconMapPin, IconMenu2, IconX } from "@tabler/icons-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/guides", label: "Guides", icon: IconBook },
        { href: "/marques", label: "Marques", icon: IconAward },
        { href: "/annuaire", label: "Annuaire", icon: IconMapPin },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <IconBackhoe className="h-7 w-7 text-accent group-hover:text-secondary transition-colors" />
                    <span className="text-xl md:text-2xl font-bold text-primary tracking-tight font-heading">
                        Prix<span className="text-secondary">Forage</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-slate-600 hover:text-secondary font-medium transition-colors"
                        >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA + Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <Link href="/devis" className="hidden sm:inline-flex items-center bg-accent hover:bg-blue-700 text-white text-sm md:text-base px-5 md:px-8 py-2.5 md:py-3 shadow-md hover:shadow-lg transition-all rounded-lg font-medium">
                        <IconBackhoe className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Devis Gratuit
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-secondary transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
                    <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-3 p-3 text-slate-700 hover:bg-warm hover:text-secondary rounded-lg font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <link.icon className="h-5 w-5" />
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-slate-100">
                            <Link href="/devis" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-blue-700 text-white h-12 rounded-lg font-medium transition-colors">
                                <IconBackhoe className="h-5 w-5" />
                                Devis Gratuit
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
