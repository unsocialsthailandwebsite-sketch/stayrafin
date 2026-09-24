"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"

/**
 * Per-property booking facts.
 *
 * Keyed by the property title exactly as it appears in the CMS / mock data.
 *
 * priceFrom — lowest nightly rate for the WHOLE property, in INR, before taxes.
 * Leave undefined to hide the price block entirely; the panel then
 * behaves exactly as it did before.
 */
type PropertyConfig = {
  priceFrom?: number;
  guests?: number;
};

const PROPERTY_CONFIG: Record<string, PropertyConfig> = {
  "Kankas House": {
    priceFrom: 40000,
    guests: 12,
  },
  "Choti Haveli": {
    priceFrom: 8000,
  },
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

export function FloatingCTA({ propertyName, brochureUrl }: { propertyName: string, whatsapp?: string, phone?: string, brochureUrl?: string }) {
  // Hardcoded number as per user request to ensure consistency
  const phoneNumber = "917340031394";

  const cfg = PROPERTY_CONFIG[propertyName] || {};

  const [checkIn, setCheckIn] = useState(todayISO(1));
  const [checkOut, setCheckOut] = useState(todayISO(2));
  const [guests, setGuests] = useState(cfg.guests && cfg.guests >= 6 ? 6 : 2);

  /**
   * The title block sits in its own row above the two-column grid, so this
   * panel naturally starts well below the property name. Pull it up on large
   * screens so it lines up with the heading, the way booking panels normally do.
   */
  const wrapRef = useRef<HTMLDivElement>(null);
  const liftRef = useRef(0);
  const [lift, setLift] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = wrapRef.current;
      const h1 = document.querySelector("h1");
      if (!el || !h1) return;
      if (window.innerWidth < 1024) {
        liftRef.current = 0;
        setLift(0);
        return;
      }
      // Add back the lift already applied to recover the natural position.
      const naturalTop = el.getBoundingClientRect().top + window.scrollY + liftRef.current;
      const headingTop = h1.getBoundingClientRect().top + window.scrollY;
      const delta = Math.round(naturalTop - headingTop);
      const next = Math.max(0, Math.min(delta, 420));
      liftRef.current = next;
      setLift(next);
    };

    measure();
    // Images and the facts bar settle after hydration, so measure again.
    const t1 = setTimeout(measure, 400);
    const t2 = setTimeout(measure, 1200);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(checkIn + "T00:00:00").getTime();
    const b = new Date(checkOut + "T00:00:00").getTime();
    const n = Math.round((b - a) / 86400000);
    return n > 0 ? n : 0;
  }, [checkIn, checkOut]);

  const message = nights > 0
    ? `Hi, I'd like to check availability for ${propertyName}.\n\nCheck-in: ${prettyDate(checkIn)}\nCheck-out: ${prettyDate(checkOut)}\nNights: ${nights}\nGuests: ${guests}`
    : `Hi, I am interested in booking ${propertyName}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div ref={wrapRef} style={lift ? { marginTop: -lift } : undefined}>
      <div className="bg-white rounded-lg shadow-lg border border-stayra-gold/10 sticky top-24 overflow-hidden">
        {/* Price / heading */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          {cfg.priceFrom ? (
            <>
              <div className="flex items-baseline gap-2">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">From</span>
                <span className="font-serif text-3xl text-stayra-charcoal font-bold">{inr(cfg.priceFrom)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">per night, entire property</p>
              <p className="text-xs text-stayra-gold font-semibold mt-2">Check availability for our best price</p>
            </>
          ) : (
            <>
              <h3 className="font-serif text-xl text-stayra-charcoal mb-1">Check availability</h3>
              <p className="text-sm text-gray-500">Direct with our concierge. No platform commission.</p>
            </>
          )}
        </div>

        {/* Dates + guests */}
        <div className="p-6 pt-5">
          <div className="grid grid-cols-2 border border-gray-200 rounded-md overflow-hidden mb-3">
            <label className="p-3 border-r border-gray-200 cursor-pointer">
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
            <label className="p-3 cursor-pointer">
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

          <label className="block border border-gray-200 rounded-md p-3 mb-4 cursor-pointer">
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Guests</span>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full text-sm text-stayra-charcoal bg-transparent outline-none cursor-pointer"
            >
              {Array.from({ length: cfg.guests || 12 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
              ))}
            </select>
          </label>

          {cfg.priceFrom && nights > 0 && (
            <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b border-gray-100">
              <span className="text-gray-500">{inr(cfg.priceFrom)} × {nights} {nights === 1 ? "night" : "nights"}</span>
              <span className="font-bold text-stayra-charcoal">from {inr(cfg.priceFrom * nights)}</span>
            </div>
          )}

          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Check Availability
          </Button>

          <a
            href={brochureUrl || '/brochure.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full text-xs text-gray-400 hover:text-stayra-green flex items-center justify-center gap-2 py-3 transition-colors cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            Download Catalogue
          </a>

          <div className="text-center">
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
              ● Typical response: &lt; 2 hours
            </span>
          </div>

          <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
            Booking direct means no platform commission,<br />and the same team on site during your stay.
          </p>
        </div>
      </div>
    </div>
  );
}
