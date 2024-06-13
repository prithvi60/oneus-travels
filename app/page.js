import { HomePageHero } from "@/components/HomePageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { HomeVideoTag } from "@/components/HomeVideoTag";
import { OurClients } from "@/components/OurClients";
import { GlobalTeam } from "@/components/GlobalTeam";

export default function Home() {
  return (
    <main>
        <HomePageHero />
        <WelcomeSection />
        <OurClients />
        <GlobalTeam />
        <TravelTechnologyCard />
        <HomeVideoTag />
    </main>
  );
}
