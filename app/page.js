import { WelcomeSection } from "@/components/home/WelcomeSection";
import { TravelTechnologyCard } from "@/components/home/TravelTechnologyCard";
import { OurClients } from "@/components/home/OurClients";
import { GlobalTeam } from "@/components/home/GlobalTeam";
import VideoSection from "@/components/home/VideoSection";
import { HomePageHero } from "@/components/home/Hero";
import DefaultLayout from "@/components/home/DefaultLayout";

export default function Home() {
  return (
    <main className="relative">
      <DefaultLayout>
        <HomePageHero />
        <WelcomeSection />
        {/* <OurClients /> */}
        {/* <VideoSection /> */}
        <GlobalTeam />
        <TravelTechnologyCard />
      </DefaultLayout>
    </main>
  );
}
