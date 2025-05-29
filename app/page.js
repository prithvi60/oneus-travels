import { WelcomeSection } from "@/components/home/WelcomeSection";
import { TravelTechnologyCard } from "@/components/home/TravelTechnologyCard";
import { GlobalTeam } from "@/components/home/GlobalTeam";
import { HomePageHero } from "@/components/home/Hero";
import DefaultLayout from "@/components/home/DefaultLayout";

export default function Home() {
  return (
    <main className="relative">
      <DefaultLayout>
        <HomePageHero />
        <WelcomeSection />
        <GlobalTeam />
        <TravelTechnologyCard />
      </DefaultLayout>
    </main>
  );
}
