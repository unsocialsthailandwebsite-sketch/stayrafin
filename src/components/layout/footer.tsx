import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { StayraLogo } from "@/components/ui/stayra-logo";

export function Footer() {
    return (
        <footer className="bg-stayra-green text-white pt-16 pb-8 border-t border-stayra-gold/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand & Social */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <StayraLogo className="h-10 w-auto" variant="light" />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs font-sans">
                            A sanctuary of serenity where luxury meets nature. Experience the ultimate in comfort and style at our exclusive villa resort.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-stayra-gold transition-colors text-white">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/stayra.in/?hl=en" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-stayra-gold transition-colors text-white">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-stayra-gold transition-colors text-white">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-stayra-gold transition-colors text-white">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Menu */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-white">Quick Menu</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'About', href: '/about' },
                                { name: 'Our Properties', href: '/properties' },
                                { name: 'Booking', href: '#' },
                                { name: 'Blog', href: '#' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/60 hover:text-stayra-gold transition-colors text-sm font-sans">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-white">Support</h4>
                        <ul className="space-y-3">
                            {['FAQ', 'Privacy & Policy', 'Accessibility', 'Legal', 'Sitemap'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 hover:text-stayra-gold transition-colors text-sm font-sans">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-white">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start text-white/60 text-sm font-sans">
                                <span>📍</span>
                                <span>Jalan Raya Ubud No. 123, Bali, Indonesia 80571</span>
                            </li>
                            <li className="flex gap-3 items-center text-white/60 text-sm font-sans">
                                <span>📞</span>
                                <span>+62 81 234 567 890</span>
                            </li>
                            <li className="flex gap-3 items-center text-white/60 text-sm font-sans">
                                <span>✉️</span>
                                <span>info@stayraresort.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40 font-sans">
                    <p>© {new Date().getFullYear()} Stayra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
