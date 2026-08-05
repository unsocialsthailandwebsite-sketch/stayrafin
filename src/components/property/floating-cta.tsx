"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"

export function FloatingCTA({ propertyName, brochureUrl }: { propertyName: string, whatsapp?: string, phone?: string, brochureUrl?: string }) {
    // Hardcoded number as per user request to ensure consistency
    const phoneNumber = "917340031394";
    const message = `Hi, I am interested in booking ${propertyName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-stayra-gold/10 sticky top-24">
            <div className="text-center mb-6">
                <h3 className="font-serif text-xl text-stayra-charcoal mb-2">Ready to Experience?</h3>
                <p className="text-sm text-gray-500">
                    Direct booking with our concierge.<br />No hidden fees.
                </p>
            </div>

            <div className="space-y-3">
                <Button
                    onClick={() => window.open(whatsappUrl, '_blank')}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2"
                >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                </Button>

                <a
                    href={brochureUrl || '/brochure.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="w-full text-xs text-gray-400 hover:text-stayra-green flex items-center justify-center gap-2 py-2 transition-colors cursor-pointer"
                >
                    <FileText className="w-3 h-3" />
                    Download Catalogue
                </a>
            </div>

            <div className="mt-4 text-center">
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                    ● Typical response: &lt; 2 hours
                </span>
            </div>
        </div>
    );
}
