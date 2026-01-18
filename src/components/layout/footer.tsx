import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stayra-charcoal text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="font-serif text-2xl font-bold">STAYRA</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Curated luxury living sanctuaries where memories are woven into every sunlit corner.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Our Collection", href: "/properties" },
                                { label: "The Stayra Experience", href: "/experience" },
                                { label: "About Us", href: "/about" },
                                { label: "List Your Property", href: "/list-property" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-stayra-gold transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-serif text-lg mb-6">Connect</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Instagram", href: "#", icon: Instagram },
                                { label: "Facebook", href: "#", icon: Facebook },
                                { label: "LinkedIn", href: "#", icon: Linkedin },
                            ].map((social) => (
                                <li key={social.label}>
                                    <Link
                                        href={social.href}
                                        className="flex items-center gap-2 text-gray-400 hover:text-stayra-gold transition-colors text-sm"
                                    >
                                        <social.icon className="h-4 w-4" />
                                        {social.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-lg mb-6">Contact</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>+91-9876543210</li>
                            <li>hello@stayra.in</li>
                            <li>Jaipur, Rajasthan</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Stayra. All sanctuaries reserved.</p>
                </div>
            </div>
        </footer>
    );
}
