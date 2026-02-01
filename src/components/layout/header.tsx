"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StayraLogo } from "@/components/ui/stayra-logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Properties", href: "/properties", hasDropdown: true },
    { name: "Partner With Us", href: "/partner-with-us" },
    { name: "Collaborate With Us", href: "/collaborate-with-us" },
    { name: "Contact Us", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isHome = pathname === "/";

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || !isHome
                        ? "bg-stayra-green/95 backdrop-blur-md py-4 shadow-sm"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between relative">
                    {/* Left: Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-2">
                        <StayraLogo className="h-8 w-auto" variant="light" />
                    </Link>

                    {/* Center: Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 w-max">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-stayra-gold uppercase tracking-wide py-4 whitespace-nowrap",
                                        isScrolled ? "text-white/90 hover:text-white" : "text-white/90 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.name === "Our Properties" && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-sm shadow-xl border-t-2 border-stayra-gold py-2">
                                            <Link
                                                href="/properties/choti-haveli"
                                                className="block px-6 py-3 text-sm text-stayra-charcoal hover:bg-gray-50 hover:text-stayra-gold transition-colors font-medium"
                                            >
                                                Choti Haveli
                                            </Link>
                                            <Link
                                                href="/properties/the-kukas-villa"
                                                className="block px-6 py-3 text-sm text-stayra-charcoal hover:bg-gray-50 hover:text-stayra-gold transition-colors font-medium"
                                            >
                                                The Kukas Villa
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Search Icon */}


                        {/* Book Your Stay Button - White Pill */}
                        <a href="https://wa.me/917340031394?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20stay" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="primary"
                                size="lg"
                                className={cn(
                                    "bg-white text-stayra-green hover:bg-gray-100 rounded-full px-6 py-2 uppercase text-xs tracking-widest font-bold flex items-center gap-2"
                                )}
                            >
                                Book Your Stay
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-stayra-charcoal" />
                        ) : (
                            <Menu
                                className={cn(
                                    "h-6 w-6 transition-colors",
                                    isScrolled ? "text-white" : "text-white"
                                )}
                            />
                        )}
                    </button>
                </div>
            </header >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden flex flex-col items-center gap-8"
                        >
                            <nav className="flex flex-col items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-serif text-stayra-charcoal font-medium flex items-center gap-2"
                                    >
                                        {link.name}
                                        {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                                    </Link>
                                ))}
                                <a href="https://wa.me/917340031394?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20stay" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                                    <Button variant="primary" size="lg" className="w-full bg-stayra-green text-white">
                                        Book Your Stay
                                    </Button>
                                </a>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
