// components/HorizontalProjectAccordion.tsx
"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  number: string; // "01", "02", …
  title: string; // "Suramadu Solar Farm"
  client: string; // "PT Perusahaan Listrik Negara (Persero)"
  location: string; // "Surabaya, Indonesia"
  excerpt: string;
  cta?: string;
  image?: string; // optional bg image url (we can keep a color placeholder)
  accent?: string; // hex for the side rail (e.g., brand yellow)
};

export default function HorizontalProjectAccordion({
  items,
  initialIndex = 1,
  collapsedWidth = 96, // px side rail
  maxExpanded = 980, // px cap for middle panel
}: {
  items: Project[];
  initialIndex?: number;
  collapsedWidth?: number;
  maxExpanded?: number;
}) {
  const [active, setActive] = useState(
    Math.min(initialIndex, items.length - 1)
  );

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(items.length - 1);
      }
    },
    [items.length]
  );

  return (
    <div className="hidden md:block">
      <div
        className="w-full h-[78vh] overflow-hidden border border-neutral-200 bg-white"
        role="tablist"
        aria-label="Projects"
        onKeyDown={onKey}
      >
        <div className="flex h-full w-full">
          {items.map((p, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={p.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${p.id}`}
                id={`tab-${p.id}`}
                type="button"
                onClick={() => setActive(i)}
                className="relative h-full focus:outline-none border-r border-neutral-200 overflow-hidden"
                style={{
                  // active grows to fill remaining space; others stay at fixed rail width
                  flex: isActive ? "1 1 0%" : `0 0 ${collapsedWidth}px`,
                  minWidth: isActive ? 0 : collapsedWidth,
                }}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 32 }}
              >
                {/* Collapsed rail content (vertical label) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{ background: p.accent ?? "#EAB308" }} // brand yellow fallback
                    aria-hidden
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                    <div className="text-[28px] font-semibold tracking-tight text-neutral-900">
                      {p.number}
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-900 text-sm font-medium [writing-mode:vertical-rl] rotate-180">
                    {p.title}
                  </div>
                </div>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`panel-${p.id}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${p.id}`}
                      className="relative h-full w-full"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35 }}
                    >
                      {/* Top content area */}
                      <div className="grid grid-cols-12 gap-6 p-10">
                        <div className="col-span-12 lg:col-span-7 text-left">
                          <div className="text-3xl lg:text-[34px] font-semibold text-neutral-900">
                            {p.title}
                          </div>

                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-left">
                            <div>
                              <div className="text-neutral-500">Client</div>
                              <div className="mt-1 font-medium text-neutral-900">
                                {p.client}
                              </div>
                            </div>
                            <div>
                              <div className="text-neutral-500">Location</div>
                              <div className="mt-1 font-medium text-neutral-900">
                                {p.location}
                              </div>
                            </div>
                          </div>

                          <p className="mt-6 text-neutral-700 leading-7 text-left">
                            {p.excerpt}
                          </p>
                        </div>

                        <div className="col-span-12 lg:col-span-5 flex items-start lg:items-end justify-start lg:justify-end">
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40"
                          >
                            {p.cta ?? "View project"}
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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

                      {/* Media strip */}
                      <div className="relative px-10 pb-10">
                        <div className="h-[32vh] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                          {/* image or placeholder */}
                          {p.image ? (
                            <img
                              src={p.image}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div
                              className="h-full w-full"
                              style={{ background: "#D4D4D8" }}
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile: stack panels vertically (simpler UX) */}
        <style jsx global>{`
          @media (max-width: 768px) {
            [role="tablist"] > div {
              display: block;
              height: auto;
            }
            [role="tablist"] button {
              width: 100% !important;
              flex: none !important;
              min-width: 0 !important;
              height: auto;
            }
            [role="tablist"] button > div[aria-hidden] {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
