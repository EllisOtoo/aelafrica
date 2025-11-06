const desktopBackground = "url('/images/hero-desktop.jpg')";
const mobileBackground = "url('/images/hero-mobile.jpg')";

/**
 * Renders responsive background imagery with gradient overlays so the hero copy stays legible.
 * The actual asset files should live under `public/images/` with the names referenced below.
 */
const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: desktopBackground }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: mobileBackground }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-black/35" />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
    </div>
  );
};

export default HeroBackground;
