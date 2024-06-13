import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "Corporate Travel Management’s (CTM’s) specialist meetings and events division, Event Travel Management (ETM), delivers strategic value to global travel programs through the consolidation of your meetings and events expendit.At ETM, we believe in the power of experiences that engage, excite and inspire people to perform. We call it “Connected Experiences",
  "Our unique blend of creativity, customer service, and innovative event technology drives transformative corporate event experiences which deliver on your business’s strategic objectives.",
  "From unique destinations and event experiences to engaging event technology, intuitive reporting, and robust supplier negotiations, our expert teams can tailor an event solution to fit every budget and business need.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_3.jpg"} />
      <WelcomeBoard
        title={"Global Meetings & Events Management"}
        desc={
          "Corporate Travel Management’s (CTM’s) specialist meetings and events division, Event Travel Management (ETM), delivers strategic value to global travel programs through the consolidation of your meetings and events expenditure."
        }
        shortNotes={data}
      />
    </main>
  );
};

export default page;
