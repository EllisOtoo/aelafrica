import Hero from "./components/hero/Hero";
import MissionCta from "./components/home/MissionCta";
import StatsBar from "./components/stats/StatsBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Hero />
      <StatsBar />
      <MissionCta />
    </main>
  );
}
