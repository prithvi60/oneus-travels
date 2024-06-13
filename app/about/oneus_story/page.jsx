import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "Established in 1994, CTM has grown from a two-person start-up into one of the world’s most successful travel management companies. Our proven business strategy combines personalized service excellence with market-leading technology to deliver a return on investment to our customers.",
  "From Australian-founded travel management company (TMC) to becoming one of the largest and most successful TMCs in the world, CTM’s Founder and MD Jamie Pherous shares the company’s 30-year growth journey, from humble beginnings to becoming a global award-winning TMC.",
  "Discover the foundational principles of CTM’s success: an entrepreneurial culture, customer-first innovation strategy, visionary leadership, and astute financial planning that continues to deliver agility, relevance and value in every global market.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_2.jpg"} />
      <WelcomeBoard
        title={"OneUs Story"}
        desc={
          "Corporate Travel Management Pty Ltd (CTM) (ASX:CTD) is a global provider of innovative and cost-effective travel solutions spanning corporate, events, leisure, loyalty and wholesale travel."
        }
        shortNotes={data}
      />
    </main>
  );
};

export default page;
