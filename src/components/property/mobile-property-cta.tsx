"use client"

import { Button } from "@/components/ui/button"

interface MobilePropertyCTAProps {
    propertyName: string;
    whatsapp: string;
}

export function MobilePropertyCTA({ propertyName, whatsapp }: MobilePropertyCTAProps) {
    const handleCatalogueOpen = () => {
        window.open('/brochure.pdf', '_blank');
    };

    const handleWhatsAppChat = () => {
        const message = encodeURIComponent(`Hi, I am interested in booking ${propertyName}`);
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 pb-8 md:pb-4 bg-white border-t border-gray-200 z-40 safe-area-bottom">
            <div className="flex gap-3">
                <Button
                    variant="outline"
                    className="flex-1 text-xs border-gray-300 text-gray-600"
                    onClick={handleCatalogueOpen}
                >
                    Catalogue
                </Button>
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
