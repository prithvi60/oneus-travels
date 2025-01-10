import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import SliderTabs from "@/components/services/SliderTabs";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "With Corporate Travel Management (OneUs Travels), you can consolidate every aspect of your business travel,strategic meetings and corporate event management needs to maximize savings, efficiencies and duty of care across your entire business travel portfolio.",
  "That’s the OneUs Travels difference.",
];

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"Corporate Travel"}
          desc={
            "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we’re committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
          }

        />
        <SliderTabs />
      </DefaultLayout>
    </main>
  );
};

export default page;
