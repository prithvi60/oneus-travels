import { OneusTeam } from "@/components/about/OneusTeam";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_2.jpg"} />
      <WelcomeBoard
        title={"oneus Team"}
        desc={
          "At Oneus Travels, our success is driven by a dynamic and visionary leadership team. Our board members and leaders bring decades of experience and strategic insight, guiding Oneus towards unparalleled growth and excellence. Our leadership team is here to ensure your journey is nothing short of exceptional."
        }
      />
      <OneusTeam />
    </main>
  );
};

export default page;
