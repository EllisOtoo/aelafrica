import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-zinc-950 pt-32">
      <Hero
        title="Trusted Solutions in Plumbing & Civil Engineering"
        text="With over 40 years of excellence, Alpha Engineering delivers responsive, safe, and dependable solutions for Ghana's most vital public and private infrastructure projects."
        backgroundImage="/hero.jpg"
        primaryCta={{ label: "Contact Us", href: "#contact" }}
        secondaryCta={{ label: "Explore Our Projects", href: "#projects" }}
      />
    </main>
  );
}
