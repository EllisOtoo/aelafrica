import HeroActions from "./HeroActions";

/**
 * Structured hero copy so heading, supporting text, and CTAs stay cohesive.
 */
const HeroContent = () => {
  return (
    <div className="flex max-w-3xl flex-col gap-8 text-white">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#EAA315] md:text-sm">
          Engineering • Infrastructure • Plumbing
        </span>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-[4.5rem]">
          Engineering Excellence. Building Trust Since 1981.
        </h1>
        <p className="text-base leading-relaxed text-white/80 md:text-lg">
          With decades of experience in plumbing and civil engineering, Alpha
          Engineering has an excellent track record in both the public and
          private sectors, building long-term, trusted relationships.
        </p>
      </div>

      <HeroActions />
    </div>
  );
};

export default HeroContent;
