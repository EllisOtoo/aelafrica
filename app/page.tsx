import Hero from "./components/hero/Hero";
import ClientsSection from "./components/home/ClientsSection";
import MissionCta from "./components/home/MissionCta";
import StatsBar from "./components/stats/StatsBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <MissionCta />
      <ClientsSection />
    </main>
  );
}
