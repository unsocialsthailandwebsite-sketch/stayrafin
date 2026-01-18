"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingCTAProps {
    propertyName: string;
    whatsapp: string;
    phone: string;
}

export function FloatingCTA({ propertyName, whatsapp, phone }: FloatingCTAProps) {
    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            `Hi Stayra Team! I'm interested in booking ${propertyName}.\n\nMy preferred dates: \nNumber of guests: \n\nLooking forward to hearing from you!`
        );
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

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
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                    onClick={handleWhatsApp}
                >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Inquiry
                </Button>
                <Button
                    variant="outline"
                    className="w-full border-stayra-charcoal text-stayra-charcoal"
                    onClick={() => window.open(`tel:${phone}`)}
                >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Concierge
                </Button>
            </div>

            <div className="mt-4 text-center">
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                    ● Typical response: &lt; 2 hours
                </span>
            </div>
        </div>
    );
}
