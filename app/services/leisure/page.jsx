import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "With Corporate Travel Management (CTM), you can consolidate every aspect of your business travel,strategic meetings and corporate event management needs to maximize savings, efficiencies and duty of care across your entire business travel portfolio.",
  "That’s the CTM difference.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_3.jpg"} />
      <WelcomeBoard
        title={"Leisure"}
        desc={
          "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we’re committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
        }
        shortNotes={data}
      />
    </main>
  );
};

export default page;
