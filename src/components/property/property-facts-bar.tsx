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

type AmenityRule = {
  test: RegExp;
  icon: typeof Users;
  name: string;
  /** Lower sorts earlier — controls which five show before "+N Amenities". */
  rank: number;
  /** Billed separately rather than included in the nightly rate. */
  chargeable?: boolean;
};

const AMENITY_ICONS: AmenityRule[] = [
  { test: /pool|swim/i, icon: Waves, name: "Private Pool", rank: 1 },
  { test: /bbq|barbecue/i, icon: Flame, name: "BBQ Grill", rank: 2, chargeable: true },
  { test: /bonfire/i, icon: Flame, name: "Bonfire", rank: 3, chargeable: true },
  { test: /bath ?tub/i, icon: Bath, name: "Bathtub", rank: 4 },
  { test: /hill|forest|view|scenic|secluded/i, icon: Mountain, name: "Hill Views", rank: 5 },
  { test: /game|console|board/i, icon: Gamepad2, name: "Board Games", rank: 6 },
  { test: /lawn|garden/i, icon: Trees, name: "Lawn", rank: 7 },
  { test: /balcon|sit-out/i, icon: Sun, name: "Balconies", rank: 8 },
  { test: /air condition|\bac\b|cooling/i, icon: Snowflake, name: "Air Con", rank: 9 },
  { test: /wifi|wi-fi|internet/i, icon: Wifi, name: "Wi-Fi", rank: 10 },
  { test: /\btv\b|television/i, icon: Tv, name: "TV", rank: 11 },
  { test: /sound|music|speaker/i, icon: Music, name: "Sound System", rank: 12 },
  { test: /interior|earthy/i, icon: Home, name: "Designer Interiors", rank: 13 },
  { test: /housekeep|clean|toiletr|linen/i, icon: Sparkles, name: "Housekeeping", rank: 14 },
  { test: /parking|car/i, icon: Car, name: "Parking", rank: 15 },
  { test: /terrace|rooftop|patio/i, icon: Sun, name: "Rooftop", rank: 16 },
  { test: /bathroom/i, icon: Bath, name: "Ensuite Baths", rank: 17 },
  { test: /chef|meal|kitchen|dining|food/i, icon: UtensilsCrossed, name: "Meals", rank: 18 },
  { test: /bedroom/i, icon: BedDouble, name: "Bedrooms", rank: 19 },
];

const FALLBACK_RANK = 90;

const matchFor = (text: string) => AMENITY_ICONS.find((a) => a.test.test(text));

/** Prefer a canonical short name; otherwise trim to a natural break. */
function shortLabel(raw: string) {
  const m = matchFor(raw);
  if (m) return m.name;
  let s = raw.replace(/\(.*?\)/g, "").trim();
  s = s.split(/\s[—–-]\s|,|&|\bwith\b|\bamidst\b/i)[0].trim();
  const words = s.split(/\s+/);
  if (words.length > 2) s = words.slice(0, 2).join(" ");
  return s;
}

/**
 * "Outdoor BBQ & bonfire setup" is one line but two amenities. Split on
 * and/& only when both halves are recognised, so we don't mangle lines like
 * "Indoor & board games".
 */
function expand(line: string): string[] {
  const parts = line.split(/\s*&\s*|\s+and\s+/i).map((p) => p.trim()).filter(Boolean);
  if (parts.length < 2) return [line];
  const matched = parts.filter((p) => matchFor(p));
  return matched.length >= 2 ? matched : [line];
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
      list = Array.from(new Set(list)).flatMap(expand);
    }

    const baths = list.find((t) => /bathroom/i.test(t));
    const bathNum = baths?.match(/(\d+)\s*(?:ensuite\s*)?bathrooms?/i);
    if (bathNum) found.push({ icon: Bath, label: `${bathNum[1]}+ Bathrooms` });
    if (list.some((t) => /chef|meal/i.test(t)))
      found.push({ icon: UtensilsCrossed, label: "Meals Available" });

    setFacts(found);
    setAmenities(list);

    // ---- mount point: inside the title column, directly under the specs line
    const anchor = h1.parentElement;
    if (!anchor) return;
    const node = document.createElement("div");
    node.setAttribute("data-facts-bar", "");
    anchor.appendChild(node);
    setHost(node);

    return () => { node.remove(); };
  }, []);

  /**
   * The floating booking panel next to this column measures its own height
   * once on mount and pulls itself up with a fixed negative margin so it
   * lines up with the title. That measurement is taken before this bar has
   * expanded to show every amenity, so toggling "+N Amenities" grows this
   * column without the panel knowing — it stays pulled up by the old amount
   * and ends up overlapping the newly-revealed rows. Nudging a resize event
   * after the DOM settles makes it re-measure against the new height.
   */
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
    return () => clearTimeout(t);
  }, [showAll]);

  if (!host || (facts.length === 0 && amenities.length === 0)) return null;

  // One tile per distinct label, ordered so the most sellable show first.
  const seenLabels = new Set<string>();
  const unique = amenities
    .map((raw) => {
      const rule = matchFor(raw);
      return {
        raw,
        label: shortLabel(raw),
        icon: rule?.icon || Check,
        rank: rule?.rank ?? FALLBACK_RANK,
        chargeable: !!rule?.chargeable,
      };
    })
    .filter((a) => {
      if (!a.label || seenLabels.has(a.label)) return false;
      seenLabels.add(a.label);
      return true;
    })
    .sort((a, b) => a.rank - b.rank);

  const visible = showAll ? unique : unique.slice(0, 5);
  const remaining = Math.max(unique.length - 5, 0);
  const anyChargeable = visible.some((a) => a.chargeable);

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
      {unique.length > 0 && (
        <>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
            {visible.map((a, i) => (
              <div
                key={`${a.label}-${i}`}
                className="w-20 text-center"
                title={a.chargeable ? `${a.raw} — chargeable extra` : a.raw}
              >
                <div className="relative w-12 h-12 mx-auto grid place-items-center border border-gray-200 rounded-lg bg-white">
                  <a.icon className="w-5 h-5 text-stayra-charcoal" strokeWidth={1.5} />
                  {a.chargeable && (
                    <span
                      aria-label="Chargeable extra"
                      className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-stayra-gold text-white text-[9px] font-bold grid place-items-center leading-none shadow-sm"
                    >
                      ₹
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[11px] leading-tight text-gray-600">
                  {a.label}
                </div>
              </div>
            ))}

            {remaining > 0 && (
              <button
                onClick={() => setShowAll((s) => !s)}
                className="self-center text-sm font-semibold text-stayra-green hover:underline whitespace-nowrap"
              >
                {showAll ? "Show fewer" : `+${remaining} Amenities`}
              </button>
            )}
          </div>

          {anyChargeable && (
            <p className="mt-3 text-[11px] text-gray-400">
              <span className="inline-grid place-items-center w-3.5 h-3.5 rounded-full bg-stayra-gold text-white text-[8px] font-bold align-middle mr-1.5">₹</span>
              Chargeable extra — arranged on request
            </p>
          )}
        </>
      )}
    </div>,
    host
  );
}
