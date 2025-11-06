type SectionHeroProps = {
  label?: string;
  caption: string;
  subCaption?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

/**
 * Minimal hero variant for interior pages. Accepts a caption + sub-caption
 * and adapts colors for dark or light surfaces.
 */
const SectionHero = ({
  label,
  caption,
  subCaption,
  align = "left",
  tone = "dark",
}: SectionHeroProps) => {
  const isCentered = align === "center";
  const containerAlignment = isCentered
    ? "items-center text-center"
    : "items-start text-left";
  const isLight = tone === "light";
  const themeClasses = isLight
    ? "bg-[#F5EFE8] text-[#2C1404]"
    : "g-[#F5EFE8] text-[#2C1404]";
  const accentColor = isLight ? "#B06315" : "#EAA315";
  const bodyColor = isLight ? "#5C3410" : "rgba(255,255,255,0.8)";
  const glowColor = isLight ? "#EAA315" : "#EAA315";

  return (
    <section className={`relative overflow-hidden ${themeClasses}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute left-[5%] top-10 h-32 w-32 rounded-full blur-3xl ${
            isLight ? "bg-[#ffffff]/40" : "bg-white/5"
          }`}
          aria-hidden
        />
        <div
          className="absolute right-[8%] -bottom-6 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: `${glowColor}26` }}
          aria-hidden
        />
      </div>
      <div
        className={`relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-20 sm:px-8 md:px-10 lg:px-0 ${containerAlignment}`}
      >
        {label && (
          <span
            className="text-xs font-semibold uppercase tracking-[0.32em]"
            style={{ color: accentColor }}
          >
            {label}
          </span>
        )}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
          {caption}
        </h1>
        {subCaption && (
          <p
            className="max-w-3xl text-base font-medium leading-relaxed sm:text-lg md:text-xl"
            // style={{ color: bodyColor }}
          >
            {subCaption}
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionHero;
