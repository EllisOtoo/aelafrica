"use client";

import { forwardRef } from "react";

/**
 * Hero heading and body copy rendered separately so the parent can animate it.
 */
const HeroContent = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="hero-content w-5xl mx-auto">
    <h1>
      Architecture
      <br />
      <span>In Motion.</span>
    </h1>
    <p>
      Where precision engineering meets tranquil design. Building the future,
      one line at a time.
    </p>
  </div>
));

HeroContent.displayName = "HeroContent";

export default HeroContent;
