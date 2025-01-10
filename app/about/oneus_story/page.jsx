import { Story } from "@/components/about/Story";
import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"OneUs Travels: Story of Your Trusted Partner in Corporate and Business Travel"}
          desc={
            "Founded in 2015, Oneus Travels Pvt Ltd has evolved from a small start-up into a leading global travel management company. Specializing in corporate, events, leisure, loyalty, and wholesale travel, we pride ourselves on delivering innovative and cost-effective solutions."
          }
        />
        <Story />
      </DefaultLayout>
    </main>
  );
};

export default page;
