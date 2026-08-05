"use client"

import { Button } from "@/components/ui/button"

interface MobilePropertyCTAProps {
    propertyName: string;
    whatsapp: string;
    brochureUrl?: string;
}

export function MobilePropertyCTA({ propertyName, whatsapp, brochureUrl }: MobilePropertyCTAProps) {
    const handleCatalogueOpen = () => {
        window.open(brochureUrl || '/brochure.pdf', '_blank');
    };

    const handleWhatsAppChat = () => {
        const message = encodeURIComponent(`Hi, I am interested in booking ${propertyName}`);
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 pb-8 md:pb-4 bg-white border-t border-gray-200 z-40 safe-area-bottom">
            <div className="flex gap-3">
                <a
                    href={brochureUrl || '/brochure.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex-1 text-xs border border-gray-300 text-gray-600 rounded-md flex items-center justify-center font-medium py-2 px-3 hover:bg-gray-50 transition-colors"
                >
                    Catalogue
                </a>
                <Button
                    onClick={handleWhatsAppChat}
                    className="flex-[2] bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-sm font-bold"
                >
                    Chat & Book
                </Button>
            </div>
        </div>
    );
}
