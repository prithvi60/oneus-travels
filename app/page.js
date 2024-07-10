import { HomePageHero } from "@/components/HomePageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { OurClients } from "@/components/OurClients";
import { GlobalTeam } from "@/components/GlobalTeam";
import { localBusinessData, structuredDataForOrg } from "@/libs/schema";
import JsonLd from "@/components/JsonLd";
import Development from "@/components/Development";

export default function Home() {
  return (
    <main className="relative">
      <JsonLd data={structuredDataForOrg} />
      <JsonLd data={localBusinessData} />
      <Development />
      <HomePageHero />
      <WelcomeSection />
      <OurClients />
      <GlobalTeam />
      <TravelTechnologyCard />
    </main>
  );
}
