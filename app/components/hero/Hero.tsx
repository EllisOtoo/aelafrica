import HeroBackground from "./HeroBackground";
import HeroBrand from "./HeroBrand";
import HeroContent from "./HeroContent";

/**
 * Full-screen hero section built from smaller pieces so it can evolve easily.
 */
const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[min(900px,100vh)] w-full items-center overflow-hidden bg-[#111111]">
      <HeroBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-24 sm:px-8 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <HeroContent />
          <div className="hidden w-px self-stretch bg-white/15 md:block" />
          <HeroBrand />
        </div>
      </div>
    </section>
  );
};

export default Hero;
