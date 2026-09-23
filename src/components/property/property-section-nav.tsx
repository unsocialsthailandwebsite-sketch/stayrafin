"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky in-page tab nav for property pages.
 *
 * The property template doesn't put ids on its sections, so rather than
 * touching that file this component finds each section at runtime by its
 * heading text and scrolls to it. Tabs whose section isn't present on a given
 * property are dropped, so it degrades cleanly across different layouts.
 */

type Target = { id: string; label: string; match: string[] };

const TARGETS: Target[] = [
    { id: "overview", label: "Overview", match: ["about "] },
    { id: "amenities", label: "Amenities", match: ["amenities at", "amenities"] },
    { id: "photos", label: "Photos", match: ["photos of"] },
    { id: "spaces", label: "The Spaces", match: ["the spaces"] },
    { id: "experience", label: "Experience", match: ["the stayra experience", "stayra experience"] },
    { id: "reviews", label: "Reviews", match: ["what guests say", "guest experiences", "reviews"] },
    { id: "location", label: "Location", match: ["location & weather", "location and weather", "location of", "villa location"] },
    { id: "nearby", label: "Nearby", match: ["nearby"] },
];

const HEADER_OFFSET = 104;

export function PropertySectionNav() {
    const [items, setItems] = useState<{ id: string; label: string }[]>([]);
    const [active, setActive] = useState<string>("");
    const map = useRef<Record<string, HTMLElement>>({});
    const listRef = useRef<HTMLDivElement>(null);

    // Discover sections once the page has hydrated
    useEffect(() => {
        const headings = Array.from(
            document.querySelectorAll<HTMLElement>("h2, h3")
        );

        const found: { id: string; label: string }[] = [];
        const used = new Set<HTMLElement>();

        for (const t of TARGETS) {
            const hit = headings.find((h) => {
                if (used.has(h)) return false;
                const txt = (h.textContent || "").trim().toLowerCase();
                if (!txt) return false;
                return t.match.some((m) => txt.startsWith(m) || txt.includes(m));
            });
            if (hit) {
                used.add(hit);
                map.current[t.id] = hit;
                found.push({ id: t.id, label: t.label });
            }
        }
        setItems(found);
    }, []);

    // Highlight whichever section is currently at the top of the viewport
    useEffect(() => {
        if (items.length === 0) return;
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                let current = items[0].id;
                for (const it of items) {
                    const el = map.current[it.id];
                    if (!el) continue;
                    if (el.getBoundingClientRect().top - HEADER_OFFSET - 24 <= 0) current = it.id;
                }
                setActive(current);
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [items]);

    // Keep the active pill in view on mobile
    useEffect(() => {
        if (!active || !listRef.current) return;
        const el = listRef.current.querySelector<HTMLElement>(`[data-tab="${active}"]`);
        if (!el) return;
        const list = listRef.current;
        const left = el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2;
        list.scrollTo({ left: Math.max(left, 0), behavior: "smooth" });
    }, [active]);

    const go = (id: string) => {
        const el = map.current[id];
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (items.length < 2) return null;

    return (
        <nav
            aria-label="Property sections"
            className="sticky top-16 md:top-20 z-30 -mx-4 px-4 py-3 bg-white/95 backdrop-blur border-b border-gray-100"
        >
            <div
                ref={listRef}
                className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-none"
                style={{ scrollbarWidth: "none" }}
            >
                {items.map((it) => {
                    const isActive = active === it.id;
                    return (
                        <button
                            key={it.id}
                            data-tab={it.id}
                            onClick={() => go(it.id)}
                            aria-current={isActive ? "true" : undefined}
                            className={[
                                "shrink-0 rounded-md px-4 py-2 text-sm transition-colors whitespace-nowrap border",
                                isActive
                                    ? "bg-stayra-green text-white border-stayra-green font-semibold"
                                    : "bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100 hover:text-stayra-charcoal",
                            ].join(" ")}
                        >
                            {it.label}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
