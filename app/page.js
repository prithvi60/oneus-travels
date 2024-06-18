import { HomePageHero } from "@/components/HomePageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { HomeVideoTag } from "@/components/HomeVideoTag";
import { OurClients } from "@/components/OurClients";
import { GlobalTeam } from "@/components/GlobalTeam";
import JSONLD from "@/components/JSONLD";

export const metadata = {
  title: 'OneUs Travel Agency',
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "One Us Travel Agency",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8910",
      contactType: "customer service",
    },
  };
  return (
    <main>
      <JSONLD data={structuredData} />
      <HomePageHero />
      <WelcomeSection />
      <OurClients />
      <GlobalTeam />
      <TravelTechnologyCard />
      <HomeVideoTag />
    </main>
  );
}
