import { HomePageHero } from "@/components/HomePageHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ContactForm } from "@/components/ContactForm";
import { TravelTechnologyCard } from "@/components/TravelTechnologyCard";
import { HomeVideoTag } from "@/components/HomeVideoTag";
import { Testimonial } from "@/components/Testimonial";
import { OurClients } from "@/components/OurClients";

export default function Home() {
  return (
    <main>
      <HomePageHero/>
      <WelcomeSection/>
      <OurClients/>
      <ContactForm />
      <TravelTechnologyCard/>
      <HomeVideoTag />
      <Testimonial />
    </main>
  );
}
