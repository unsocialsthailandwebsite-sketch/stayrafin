"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Users, BedDouble, BedSingle, Bath, ShowerHead, Waves, Trees, Flame, CookingPot,
  Gamepad2, Wifi, Snowflake, Tv, Car, UtensilsCrossed, ChefHat, Sparkles, Music,
  Sun, Mountain, Home, Building2, Wind, Shirt, Laptop, Refrigerator, Droplets,
  Camera, ShieldAlert, Check,
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

type Category =
  | "Experiences"
  | "Common Amenities"
  | "Bathroom"
  | "Living Room"
  | "Bedrooms"
  | "Kitchen"
  | "Misc.";

type AmenityRule = {
  test: RegExp;
  icon: typeof Users;
  name: string;
  /** Lower sorts earlier — controls which five show before "+N Amenities". */
  rank: number;
  /** Groups the expanded view into labelled sections, room-by-room. */
  category: Category;
  /** Billed separately rather than included in the nightly rate. */
  chargeable?: boolean;
};

// Category order controls the section order in the expanded view.
const CATEGORY_ORDER: Category[] = [
  "Experiences",
  "Common Amenities",
  "Bathroom",
  "Living Room",
  "Bedrooms",
  "Kitchen",
  "Misc.",
];

// Every rule below uses its own icon — no two amenities should ever render
// the same glyph. Where two real-world things are easy to conflate (a
// bathtub fixture vs. the count of ensuite bathrooms; a grill vs. an open
// bonfire; a private kitchen vs. chef-prepared meals) they're deliberately
// split onto different icons rather than sharing one.
const AMENITY_ICONS: AmenityRule[] = [
  { test: /pool|swim/i, icon: Waves, name: "Private Pool", rank: 1, category: "Experiences" },
  { test: /bbq|barbecue/i, icon: CookingPot, name: "BBQ Grill", rank: 2, category: "Experiences", chargeable: true },
  { test: /bonfire/i, icon: Flame, name: "Bonfire", rank: 3, category: "Experiences", chargeable: true },
  { test: /game|console|board/i, icon: Gamepad2, name: "Board Games", rank: 4, category: "Experiences" },
  { test: /lawn|garden/i, icon: Trees, name: "Lawn", rank: 5, category: "Experiences" },
  { test: /hill|forest|view|scenic|secluded/i, icon: Mountain, name: "Hill Views", rank: 6, category: "Experiences" },
  { test: /balcon|sit-out/i, icon: Sun, name: "Balconies", rank: 7, category: "Common Amenities" },
  { test: /air condition|\bac\b|cooling/i, icon: Snowflake, name: "Air Con", rank: 8, category: "Common Amenities" },
  { test: /wifi|wi-fi|internet/i, icon: Wifi, name: "Wi-Fi", rank: 9, category: "Common Amenities" },
  { test: /interior|earthy/i, icon: Home, name: "Designer Interiors", rank: 10, category: "Common Amenities" },
  { test: /housekeep|clean|toiletr|linen/i, icon: Sparkles, name: "Housekeeping", rank: 11, category: "Common Amenities" },
  { test: /terrace|rooftop|patio/i, icon: Building2, name: "Rooftop", rank: 12, category: "Common Amenities" },
  { test: /bath ?tub/i, icon: Bath, name: "Bathtub", rank: 13, category: "Bathroom" },
  { test: /bathroom/i, icon: ShowerHead, name: "Ensuite Baths", rank: 14, category: "Bathroom" },
  { test: /hair ?dryer/i, icon: Wind, name: "Hair Dryer", rank: 15, category: "Bathroom" },
  { test: /towel/i, icon: Shirt, name: "Fresh Towels", rank: 16, category: "Bathroom" },
  { test: /\btv\b|television/i, icon: Tv, name: "TV", rank: 17, category: "Living Room" },
  { test: /sound|music|speaker/i, icon: Music, name: "Sound System", rank: 18, category: "Living Room" },
  { test: /bedroom/i, icon: BedDouble, name: "Bedrooms", rank: 19, category: "Bedrooms" },
  { test: /workstation|work desk/i, icon: Laptop, name: "Workstation", rank: 20, category: "Bedrooms" },
  { test: /extra mattress|mattress/i, icon: BedSingle, name: "Extra Mattress", rank: 21, category: "Bedrooms" },
  { test: /chef|meal|\bdining\b|\bfood\b/i, icon: UtensilsCrossed, name: "Meals", rank: 22, category: "Kitchen" },
  { test: /kitchen/i, icon: ChefHat, name: "Private Kitchen", rank: 23, category: "Kitchen" },
  { test: /refrigerator|\bfridge\b/i, icon: Refrigerator, name: "Refrigerator", rank: 24, category: "Kitchen" },
  { test: /water purifier|purifier/i, icon: Droplets, name: "Water Purifier", rank: 25, category: "Kitchen" },
  { test: /parking|car/i, icon: Car, name: "Parking", rank: 26, category: "Misc." },
  { test: /cctv|surveillance/i, icon: Camera, name: "CCTV", rank: 27, category: "Misc." },
  { test: /fire extinguisher|extinguisher/i, icon: ShieldAlert, name: "Fire Extinguisher", rank: 28, category: "Misc." },
];

const FALLBACK_RANK = 90;
const FALLBACK_CATEGORY: Category = "Misc.";

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

type AmenityItem = {
  raw: string;
  label: string;
  icon: typeof Users;
  rank: number;
  category: Category;
  chargeable: boolean;
};

/** One icon + label tile, shared by the collapsed and grouped expanded views. */
function AmenityTile({ a }: { a: AmenityItem }) {
  return (
    <div
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
  );
}

export function PropertyFactsBar() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);

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

    // Some properties list bathrooms as one combined line — Kankas House's
    // "4 ensuite bathrooms + 1 common bathroom" is 5 total, not 4. Summing
    // every digit found across all bathroom-mentioning lines (rather than
    // just reading the first number) gets this right without hardcoding a
    // property-specific total.
    const bathLines = list.filter((t) => /bathroom/i.test(t) && /\d/.test(t));
    const bathTotal = bathLines.reduce((sum, line) => {
      const nums = line.match(/\d+/g) || [];
      return sum + nums.reduce((s, n) => s + parseInt(n, 10), 0);
    }, 0);
    if (bathTotal > 0)
      found.push({ icon: Bath, label: `${bathTotal} Bathroom${bathTotal === 1 ? "" : "s"}` });
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

  /**
   * This bar is portaled under the H1, which sits in a full-width header row
   * ABOVE the two-column grid that holds the main content and the sticky
   * booking panel. Left unconstrained, the amenity row happily wraps across
   * the *entire* page width — running underneath the booking panel, which
   * sits on top of it (and visually overlaps upward via its own negative
   * margin). Capping our width to match the main content column below fixes
   * that: measure the "lg:col-span-2" column so rows wrap before reaching
   * the sidebar, same as the content underneath it already does.
   */
  useEffect(() => {
    const measureWidth = () => {
      if (window.innerWidth < 1024) {
        setMaxWidth(undefined);
        return;
      }
      const main = document.querySelector('[class*="lg:col-span-2"]') as HTMLElement | null;
      if (main) setMaxWidth(main.clientWidth);
    };
    measureWidth();
    const t1 = setTimeout(measureWidth, 400);
    const t2 = setTimeout(measureWidth, 1200);
    window.addEventListener("resize", measureWidth);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measureWidth);
    };
  }, []);

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
        category: rule?.category ?? FALLBACK_CATEGORY,
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
  const anyChargeable = unique.some((a) => a.chargeable);

  // Expanded view groups amenities by room/category (Experiences, Bathroom,
  // Kitchen, ...) instead of one long undifferentiated row — easier to scan
  // once there are 20+ items, and only categories with at least one match
  // for this property are rendered.
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: unique.filter((a) => a.category === category),
  })).filter((g) => g.items.length > 0);

  return createPortal(
    // mt-3/mb-3 on mobile (was a flat mt-5/mb-5): trims a bit more vertical
    // space so the amenity row has a better chance of landing inside the
    // first viewport on a phone, alongside the shrunk hero image.
    <div className="mt-3 md:mt-5" style={maxWidth ? { maxWidth } : undefined}>
      {/* Facts */}
      {facts.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3 md:mb-5">
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

      {/* Amenity icons.
          Collapsed: a flat quick-glance row of the top 5. Expanded: grouped
          into labelled sections (Experiences, Bathroom, Kitchen, ...) —
          matches the room-by-room amenity layout used by comparable villa
          listing sites, one long undifferentiated grid gets hard to scan
          past ~15 items. */}
      {unique.length > 0 && (
        <>
          {!showAll ? (
            <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
              {visible.map((a, i) => (
                <AmenityTile key={`${a.label}-${i}`} a={a} />
              ))}

              {remaining > 0 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="self-center text-sm font-semibold text-stayra-green hover:underline whitespace-nowrap"
                >
                  +{remaining} Amenities
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-5">
              {grouped.map((g) => (
                <div key={g.category}>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-stayra-charcoal/50 mb-2.5">
                    {g.category}
                  </h3>
                  <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
                    {g.items.map((a, i) => (
                      <AmenityTile key={`${a.label}-${i}`} a={a} />
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowAll(false)}
                className="text-sm font-semibold text-stayra-green hover:underline"
              >
                Show fewer
              </button>
            </div>
          )}

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
