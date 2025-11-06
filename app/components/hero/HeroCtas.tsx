import React from "react";

type HeroCtasProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function HeroCtas({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: HeroCtasProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <a
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-full bg-[#d5901e] px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#b87812] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:text-lg"
      >
        {primaryLabel}
      </a>
      {secondaryLabel && secondaryHref ? (
        <a
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:text-lg"
        >
          {secondaryLabel}
        </a>
      ) : null}
    </div>
  );
}


