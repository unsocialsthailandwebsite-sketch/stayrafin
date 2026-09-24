"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MobilePropertyCTAProps {
  propertyName: string;
  whatsapp: string;
  brochureUrl?: string;
}

/**
 * Per-property nightly "from" rate for the WHOLE property, in INR, before taxes.
 * Keep in step with PROPERTY_CONFIG in floating-cta.tsx.
 * Leave a property out to hide the price on mobile.
 */
const PRICE_FROM: Record<string, number> = {
  "Kankas House": 40000,
  "Choti Haveli": 8000,
};

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

function prettyDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export function MobilePropertyCTA({ propertyName, whatsapp, brochureUrl }: MobilePropertyCTAProps) {
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState(todayISO(1));
  const [checkOut, setCheckOut] = useState(todayISO(2));
  const [guests, setGuests] = useState(2);

  const priceFrom = PRICE_FROM[propertyName];

  const nights = (() => {
    const a = new Date(checkIn + "T00:00:00").getTime();
    const b = new Date(checkOut + "T00:00:00").getTime();
    const n = Math.round((b - a) / 86400000);
    return n > 0 ? n : 0;
  })();

  const handleWhatsAppChat = () => {
    const body = nights > 0
      ? `Hi, I'd like to check availability for ${propertyName}.\n\nCheck-in: ${prettyDate(checkIn)}\nCheck-out: ${prettyDate(checkOut)}\nNights: ${nights}\nGuests: ${guests}`
      : `Hi, I am interested in booking ${propertyName}`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <>
      {/* Slide-up date sheet */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full bg-white rounded-t-2xl p-5 pb-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-stayra-charcoal">Check availability</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="p-1 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 border border-gray-200 rounded-md overflow-hidden mb-3">
              <label className="p-3 border-r border-gray-200">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Check in</span>
                <input
                  type="date"
                  value={checkIn}
                  min={todayISO()}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (e.target.value >= checkOut) {
                      const d = new Date(e.target.value + "T00:00:00");
                      d.setDate(d.getDate() + 1);
                      setCheckOut(d.toISOString().slice(0, 10));
                    }
                  }}
                  className="w-full text-sm text-stayra-charcoal bg-transparent outline-none"
                />
              </label>
              <label className="p-3">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Check out</span>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-sm text-stayra-charcoal bg-transparent outline-none"
                />
              </label>
            </div>

            <label className="block border border-gray-200 rounded-md p-3 mb-4">
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Guests</span>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full text-sm text-stayra-charcoal bg-transparent outline-none"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                ))}
              </select>
            </label>

            {priceFrom && nights > 0 && (
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-500">{inr(priceFrom)} × {nights} {nights === 1 ? "night" : "nights"}</span>
                <span className="font-bold text-stayra-charcoal">from {inr(priceFrom * nights)}</span>
              </div>
            )}

            <Button
              onClick={handleWhatsAppChat}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold"
            >
              Send enquiry on WhatsApp
            </Button>
            <p className="text-[11px] text-gray-400 text-center mt-3">
              Direct booking · no platform commission
            </p>
          </div>
        </div>
      )}

      {/* Sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 pb-8 md:pb-4 bg-white border-t border-gray-200 z-40 safe-area-bottom">
        <div className="flex items-center gap-3">
          {priceFrom ? (
            <div className="shrink-0">
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold leading-none">From</div>
              <div className="font-serif text-lg text-stayra-charcoal font-bold leading-tight">{inr(priceFrom)}</div>
              <div className="text-[10px] text-gray-400 leading-none">per night</div>
            </div>
          ) : (
            <a
              href={brochureUrl || '/brochure.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex-1 text-xs border border-gray-300 text-gray-600 rounded-md flex items-center justify-center font-medium py-2 px-3 hover:bg-gray-50 transition-colors"
            >
              Catalogue
            </a>
          )}
          <Button
            onClick={() => setOpen(true)}
            className="flex-[2] bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-sm font-bold"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </>
  );
}
