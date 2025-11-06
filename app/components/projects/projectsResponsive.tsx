// components/ProjectsResponsive.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reuse the same Project type as before
type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  location: string;
  excerpt: string;
  cta?: string;
  image?: string;
  accent?: string;
};

/* ---------------- Mobile carousel ---------------- */
function MobileProjectCarousel({ items }: { items: Project[] }) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [active, setActive] = useState(0);

  // Observe which card is centered to update dots
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll("li"));
    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry with largest intersectionRatio
        const best = entries
          .slice()
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!best) return;
        const idx = cards.findIndex((el) => el === best.target);
        if (idx !== -1) setActive(idx);
      },
      { root: track, threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const snapTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (child)
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  };

  return (
    <section
      className="md:hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
    >
      <ul
        ref={trackRef}
        className="
          flex gap-4 px-4 pb-6 pt-2
          overflow-x-auto scroll-smooth snap-x snap-mandatory
          [-webkit-overflow-scrolling:touch] [overscroll-behavior-x:contain]
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((p) => (
          <li
            key={p.id}
            className="
              snap-center shrink-0 w-[92vw]
              rounded-3xl border border-neutral-200 bg-white overflow-hidden
            "
          >
            {/* Media */}
            <div className="relative aspect-[16/9] w-full bg-neutral-100">
              {p.image ? (
                // swap to next/image if you prefer
                <img
                  src={p.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: "#D4D4D8" }}
                />
              )}
              <span
                className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: p.accent ?? "#EAB308", color: "#111827" }}
                aria-hidden
              >
                {p.number}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900">
                {p.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 text-[13px]">
                <div>
                  <div className="text-neutral-500">Client</div>
                  <div className="font-medium text-neutral-900">{p.client}</div>
                </div>
                <div>
                  <div className="text-neutral-500">Location</div>
                  <div className="font-medium text-neutral-900">
                    {p.location}
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 text-[15px] leading-6 line-clamp-4">
                {p.excerpt}
              </p>

              <div className="pt-1">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-3 text-sm font-semibold"
                >
                  {p.cta ?? "View project"}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 pb-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => snapTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? "w-6 bg-neutral-900" : "w-2.5 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default MobileProjectCarousel;
