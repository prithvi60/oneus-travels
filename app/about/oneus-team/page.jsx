import { OneusTeam } from "@/components/about/OneusTeam";
import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"Meet the OneUs Team"}
          desc={
            "At Oneus Travels, our success is driven by a dynamic and visionary leadership team. Our board members and leaders bring decades of experience and strategic insight, guiding Oneus towards unparalleled growth and excellence. Our leadership team is here to ensure your journey is nothing short of exceptional."
          }
        />
        <OneusTeam />
      </DefaultLayout>
    </main>
  );
};

export default page;
