import Hero from "./components/hero/Hero";
import ClientsSection from "./components/home/ClientsSection";
import MissionCta from "./components/home/MissionCta";
import NewsletterSignup from "./components/home/NewsletterSignup";
import WhyChooseUs from "./components/home/WhyChooseUs";
import StatsBar from "./components/stats/StatsBar";

export default function Home() {
  return (
    <main className="min-h-screen -mt-28 md:-mt-32">
      <Hero />
      <StatsBar />
      <MissionCta />
      <ClientsSection />
      <WhyChooseUs />
      <NewsletterSignup />
    </main>
  );
}
