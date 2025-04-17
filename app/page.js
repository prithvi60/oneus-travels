import { WelcomeSection } from "@/components/home/WelcomeSection";
import { TravelTechnologyCard } from "@/components/home/TravelTechnologyCard";
import { OurClients } from "@/components/home/OurClients";
import { GlobalTeam } from "@/components/home/GlobalTeam";
import VideoSection from "@/components/home/VideoSection";
import { HomePageHero } from "@/components/home/Hero";
import DefaultLayout from "@/components/home/DefaultLayout";
import Head from "next/head";

export default function Home() {
  return (
    <main className="relative">
      <Head>
        {/* This appears in browser tab */}
        <title>Tab Title - Short Version</title>

        {/* These are meta titles for SEO/social */}
        <meta
          name="title"
          content="Full Meta Title - Longer Descriptive Version"
        />
        <meta
          property="og:title"
          content="Social Sharing Title - Optimized Version"
        />
        <meta
          name="twitter:title"
          content="Twitter Card Title - Special Version"
        />
      </Head>
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
