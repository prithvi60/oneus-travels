import { HomePageHero } from "@/components/HomePageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { HomeVideoTag } from "@/components/HomeVideoTag";
import { OurClients } from "@/components/OurClients";
import { GlobalTeam } from "@/components/GlobalTeam";
import { localBusinessData, structuredDataForOrg } from "@/libs/schema";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="relative">
      <JsonLd data={structuredDataForOrg} />
      <JsonLd data={localBusinessData} />
      <HomePageHero />
      <OurClients />
      <WelcomeSection />
      <GlobalTeam />
      <TravelTechnologyCard />
      {/* <HomeVideoTag /> */}
    </main>
  );
}
