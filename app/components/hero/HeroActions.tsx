"use client";

import Link from "next/link";

/**
 * CTA buttons that drive engagement from the hero section.
 */
const HeroActions = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F8D064] via-[#EAA315] to-[#C4721D] px-8 py-4 text-sm font-bold uppercase tracking-[0.28em] text-[#2C1404] shadow-[0_18px_48px_rgba(0,0,0,0.3)] transition duration-150 hover:translate-y-[-1px] hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        >
          Get a Quote
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm transition duration-150 hover:border-white/50 hover:bg-white/10"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeroActions;
