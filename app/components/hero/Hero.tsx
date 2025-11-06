import React from "react";
import HeroHeading from "./HeroHeading";
import HeroSubcopy from "./HeroSubcopy";
import HeroCtas from "./HeroCtas";

type HeroProps = {
  title: string;
  text: string;
  backgroundImage?: string; // path in public/, e.g. "/hero.jpg"
  overlayOpacity?: number; // 0 to 1
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  title,
  text,
  backgroundImage = "/hero.jpg",
  overlayOpacity = 0.45,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section
      className="relative isolate min-h-[92svh] w-full overflow-clip bg-zinc-950"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), url(${backgroundImage})`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-6 px-6 py-28 sm:gap-8 sm:px-8 md:gap-10 lg:px-12">
        <HeroHeading title={title} />
        <HeroSubcopy text={text} />
        <HeroCtas
          primaryLabel={primaryCta.label}
          primaryHref={primaryCta.href}
          secondaryLabel={secondaryCta?.label}
          secondaryHref={secondaryCta?.href}
        />
      </div>

      {/* bottom gradient fade for smooth transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}


