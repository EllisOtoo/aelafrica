import Link from "next/link";

/**
 * CTA buttons that drive engagement from the hero section.
 */
const HeroActions = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#EAA315] px-8 py-4 text-sm font-bold uppercase tracking-[0.28em] text-[#7F4511] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-150 hover:bg-[#f2b436]"
      >
        Contact Us
      </Link>
      <Link
        href="#about"
        className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition duration-150 hover:border-white/40 hover:bg-white/10"
      >
        <span>Learn More</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7F4511] transition duration-150 group-hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M8 6.857v10.286a1 1 0 0 0 1.555.832l7.333-5.143a1 1 0 0 0 0-1.664L9.555 6.025A1 1 0 0 0 8 6.857Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default HeroActions;
