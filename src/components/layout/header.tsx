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
    { name: "About", href: "/about" },
    { name: "Our Villas", href: "/properties", hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blog", href: "#", hasDropdown: true },
    { name: "Contact", href: "/contact" },
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

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
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
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-stayra-gold uppercase tracking-wide",
                                    isScrolled ? "text-white/90 hover:text-white" : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Search Icon */}
                        <button className="text-white hover:text-stayra-gold transition-colors">
                            <Search className="w-5 h-5" strokeWidth={2.5} />
                        </button>

                        {/* Book Your Stay Button - White Pill */}
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
                                <Button variant="primary" size="lg" className="mt-4 w-full max-w-xs bg-stayra-green text-white">
                                    Book Your Stay
                                </Button>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
