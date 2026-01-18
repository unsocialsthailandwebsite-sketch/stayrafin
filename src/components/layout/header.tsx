"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Our Collection", href: "/properties" },
    { name: "The Stayra Experience", href: "/experience" },
    { name: "About Us", href: "/about" },
    { name: "List Your Property", href: "/list-property" },
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
                        ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="relative z-50">
                        <span
                            className={cn(
                                "font-serif text-2xl font-bold tracking-tight transition-colors",
                                isScrolled || isMobileMenuOpen ? "text-stayra-charcoal" : "text-white"
                            )}
                        >
                            STAYRA
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-stayra-gold",
                                    isScrolled ? "text-stayra-charcoal" : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            variant="primary"
                            size="sm"
                            className={cn(
                                "ml-4",
                                !isScrolled && "bg-white text-stayra-charcoal hover:bg-white/90"
                            )}
                        >
                            Book Now
                        </Button>
                    </nav>

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
                                    isScrolled ? "text-stayra-charcoal" : "text-white"
                                )}
                            />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
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
                                    className="text-2xl font-serif text-stayra-charcoal font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="primary" size="lg" className="mt-4 w-full max-w-xs">
                                Book Now
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
