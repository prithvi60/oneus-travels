import { HomePageHero } from "@/components/HomePageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { OurClients } from "@/components/OurClients";
import { GlobalTeam } from "@/components/GlobalTeam";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="relative">
      <HomePageHero />
      <WelcomeSection />
      <OurClients />
      <VideoSection />
      <GlobalTeam />
      <TravelTechnologyCard />
    </main>
  );
}
