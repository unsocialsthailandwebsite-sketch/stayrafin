"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
    Users, BedDouble, Bath, Waves, Trees, Flame, Gamepad2, Wifi, Snowflake,
    Tv, Car, UtensilsCrossed, Sparkles, Music, Sun, Mountain, Home, Check,
} from "lucide-react";

/**
 * Facts + amenity chips, rendered directly beneath the property title.
 *
 * The property template is a single very large file, so rather than editing it
 * this component reads what's already on the page — the specs line under the
 * H1 and the rendered amenities list — and portals itself into place. That
 * means it stays in sync automatically and works for every property.
 */

type Fact = { icon: typeof Users; label: string };

const AMENITY_ICONS: { test: RegExp; icon: typeof Users }[] = [
    { test: /pool|swim/i, icon: Waves },
    { test: /lawn|garden|green/i, icon: Trees },
    { test: /bbq|barbecue|bonfire|fire/i, icon: Flame },
    { test: /game|console|board/i, icon: Gamepad2 },
    { test: /wifi|wi-fi|internet/i, icon: Wifi },
    { test: /air condition|\bac\b|cooling/i, icon: Snowflake },
    { test: /\btv\b|television/i, icon: Tv },
    { test: /parking|car/i, icon: Car },
    { test: /bath ?tub|bathtub/i, icon: Bath },
    { test: /chef|meal|kitchen|dining|food/i, icon: UtensilsCrossed },
    { test: /housekeep|clean|toiletr|linen/i, icon: Sparkles },
    { test: /sound|music|speaker/i, icon: Music },
    { test: /terrace|rooftop|balcon|sit-out|patio/i, icon: Sun },
    { test: /hill|forest|view|scenic/i, icon: Mountain },
    { test: /bedroom|room|interior/i, icon: Home },
];

const iconFor = (text: string) =>
    AMENITY_ICONS.find((a) => a.test.test(text))?.icon || Check;

/** Trim a long amenity line down to something that fits under an icon. */
function shortLabel(raw: string) {
    let s = raw.replace(/\(.*?\)/g, "").trim();
    s = s.split(/\s[—–-]\s|,|&/)[0].trim();
    const words = s.split(/\s+/);
    if (words.length > 3) s = words.slice(0, 3).join(" ");
    return s.replace(/\s+$/, "");
}

export function PropertyFactsBar() {
    const [host, setHost] = useState<HTMLElement | null>(null);
    const [facts, setFacts] = useState<Fact[]>([]);
    const [amenities, setAmenities] = useState<string[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const h1 = document.querySelector("h1");
        if (!h1) return;

        // ---- facts, read from the specs line under the title
        const specsEl = h1.parentElement?.querySelector("p");
        const specs = specsEl?.textContent || "";
        const found: Fact[] = [];

        const guests = specs.match(/up to\s*(\d+)\s*guests/i) || specs.match(/(\d+)\s*guests/i);
        if (guests) found.push({ icon: Users, label: `Up to ${guests[1]} Guests` });

        const beds = specs.match(/(\d+)\s*bedrooms?/i);
        if (beds) found.push({ icon: BedDouble, label: `${beds[1]} Bedrooms` });

        // ---- amenities, read from the rendered amenities list
        const headings = Array.from(document.querySelectorAll<HTMLElement>("h2, h3"));
        const amenHeading = headings.find((h) =>
            (h.textContent || "").trim().toLowerCase().startsWith("amenities")
        );
        let list: string[] = [];
        if (amenHeading) {
            const scope = amenHeading.parentElement || document.body;
            list = Array.from(scope.querySelectorAll<HTMLElement>("li, [class*='grid'] > div"))
                .map((el) => (el.textContent || "").trim())
                .filter((t) => t.length > 2 && t.length < 90);
            list = Array.from(new Set(list));
        }

        const baths = list.find((t) => /bathroom/i.test(t));
        const bathNum = baths?.match(/(\d+)\s*(?:ensuite\s*)?bathrooms?/i);
        if (bathNum) found.push({ icon: Bath, label: `${bathNum[1]}+ Bathrooms` });
        if (list.some((t) => /chef|meal/i.test(t)))
            found.push({ icon: UtensilsCrossed, label: "Meals Available" });

        setFacts(found);
        setAmenities(list);

        // ---- mount point, directly after the title block
        const anchor = h1.closest("div")?.parentElement || h1.parentElement;
        if (!anchor) return;
        const node = document.createElement("div");
        node.setAttribute("data-facts-bar", "");
        anchor.appendChild(node);
        setHost(node);

        return () => { node.remove(); };
    }, []);

    if (!host || (facts.length === 0 && amenities.length === 0)) return null;

    const visible = showAll ? amenities : amenities.slice(0, 5);
    const remaining = Math.max(amenities.length - 5, 0);

    return createPortal(
        <div className="mt-5">
            {/* Facts */}
            {facts.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                    {facts.map((f) => (
                        <span
                            key={f.label}
                            className="inline-flex items-center gap-2 bg-stayra-green/5 border border-stayra-green/15 text-stayra-charcoal rounded-md px-3 py-2 text-sm font-medium"
                        >
                            <f.icon className="w-4 h-4 text-stayra-green" />
                            {f.label}
                        </span>
                    ))}
                </div>
            )}

            {/* Amenity icons */}
            {amenities.length > 0 && (
                <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
                    {visible.map((a, i) => {
                        const Icon = iconFor(a);
                        return (
                            <div key={`${a}-${i}`} className="w-20 text-center" title={a}>
                                <div className="w-12 h-12 mx-auto grid place-items-center border border-gray-200 rounded-lg bg-white">
                                    <Icon className="w-5 h-5 text-stayra-charcoal" strokeWidth={1.5} />
                                </div>
                                <div className="mt-2 text-[11px] leading-tight text-gray-600">
                                    {shortLabel(a)}
                                </div>
                            </div>
                        );
                    })}

                    {remaining > 0 && (
                        <button
                            onClick={() => setShowAll((s) => !s)}
                            className="self-center text-sm font-semibold text-stayra-green hover:underline whitespace-nowrap"
                        >
                            {showAll ? "Show fewer" : `+${remaining} Amenities`}
                        </button>
                    )}
                </div>
            )}
        </div>,
        host
    );
}
