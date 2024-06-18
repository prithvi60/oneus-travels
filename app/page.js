import { HomePageHero } from "@/components/HomePageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { HomeVideoTag } from "@/components/HomeVideoTag";
import { OurClients } from "@/components/OurClients";
import { GlobalTeam } from "@/components/GlobalTeam";
import { localBusinessData, structuredDataForOrg } from "@/libs/schema";
import JsonLD from "@/components/JsonLD";

export default function Home() {
  return (
    <main>
      <JsonLD data={structuredDataForOrg} />
      <JsonLD data={localBusinessData} />
      <HomePageHero />
      <WelcomeSection />
      <OurClients />
      <GlobalTeam />
      <TravelTechnologyCard />
      <HomeVideoTag />
    </main>
  );
}
