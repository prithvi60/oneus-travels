import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "Many of our customers come to Corporate Travel Management (OneUs Travels) with global travel programs that simply aren’t delivering on their cost savings, efficiency or duty of care objectives. As the trusted travel management provider to thousands of businesses around the world, across a wide range of industries and business segments, our knowledge and experience delivers strategic outcomes for every customer.",
  "But don’t take our word for it. Hear what our customers have to say!",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_3.jpg"} />
      <WelcomeBoard
        title={"Customer Case Studies"}
        desc={
          "We love global business travel, but we get the biggest kicks when we’re able to solve complex challenges that drive our expert travel teams to think outside of the box."
        }
        
      />
    </main>
  );
};

export default page;
