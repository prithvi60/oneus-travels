import { Story } from "@/components/about/Story";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_1.jpg"} />
      <WelcomeBoard
        title={"OneUs Story"}
        desc={
          "Founded in 2015, Oneus Travels Pvt Ltd has evolved from a small start-up into a leading global travel management company. Specializing in corporate, events, leisure, loyalty, and wholesale travel, we pride ourselves on delivering innovative and cost-effective solutions."
        }
      />
      <Story />
    </main>
  );
};

export default page;
