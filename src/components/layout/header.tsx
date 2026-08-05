"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StayraLogo } from "@/components/ui/stayra-logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Properties", href: "/properties", hasDropdown: true },
    { name: "Partner With Us", href: "/partner-with-us" },
    { name: "Collaborate With Us", href: "/collaborate-with-us" },
    { name: "Blogs", href: "/blogs" },
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
                <div className="container mx-auto px-4 grid grid-cols-2 xl:grid-cols-[1fr_auto_1fr] items-center relative">
                    {/* Left: Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-2 justify-self-start">
                        {/* Brand Logo */}
                        <StayraLogo className="h-8 w-auto" variant="light" />
                    </Link>

                    {/* Center: Desktop Nav */}
                    <nav className="hidden xl:flex items-center justify-self-center gap-4 2xl:gap-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-1 text-xs 2xl:text-sm font-light transition-colors hover:text-stayra-gold capitalize tracking-wide py-4 whitespace-nowrap",
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
                                                Chotti Haveli
                                            </Link>
                                            <Link
                                                href="/properties/kankas-house"
                                                className="block px-6 py-3 text-sm text-stayra-charcoal hover:bg-gray-50 hover:text-stayra-gold transition-colors font-medium"
                                            >
                                                Kankas House
                                            </Link>
                                            <span className="block px-6 py-3 text-sm text-gray-400 font-medium cursor-not-allowed">
                                                Thailand (Coming Soon)
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="hidden xl:flex items-center justify-self-end gap-4 2xl:gap-6">
                        {/* Search Icon */}


                        {/* Call Icon & Number */}
                        <a href="tel:+917340031394" className={cn("flex items-center gap-2 transition-colors hover:text-stayra-gold font-medium text-xs 2xl:text-sm", isScrolled ? "text-white" : "text-white")}>
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <span className="hidden 2xl:inline whitespace-nowrap">+91 73400 31394</span>
                        </a>

                        {/* Book Your Stay Button - White Pill */}
                        <a href="https://wa.me/917340031394?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20stay" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="primary"
                                size="default"
                                className={cn(
                                    "bg-white text-stayra-green hover:bg-gray-100 rounded-full px-3 py-1.5 2xl:px-4 uppercase text-[10px] 2xl:text-xs tracking-widest font-bold flex items-center gap-1.5 2xl:gap-2"
                                )}
                            >
                                Book Your Stay
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden relative z-50 p-2 justify-self-end"
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
                            className="fixed inset-0 z-40 bg-white pt-24 px-4 xl:hidden flex flex-col items-center gap-8"
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
