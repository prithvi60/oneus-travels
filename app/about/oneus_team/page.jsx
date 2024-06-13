import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "The CTM Global Network provides customers with consistency and assurance wherever they travel. Combining CTM’s wholly owned operations across Australia and New Zealand, North America, Europe, and Asia and a global network of best-in-class independent travel management companies across approximately 100 countries, the CTM Global Network allows our customers to enjoy consistency of service supported by compatible systems and processes in every market they travel in for maximum savings, efficiency and compliance.",
  "So whether you’re accessing CTM’s network in Paris, Seattle, Sydney or Taiwan, rest assured you’re working with a local leader in travel management who truly understands your business’s travel needs.",
  "That’s the CTM difference.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_2.jpg"} />
      <WelcomeBoard
        title={"Leadership Team"}
        desc={
          "CTM is an award-winning global provider of innovative and cost-effective travel management solutions to the corporate market. We understand the complex travel needs of businesses large and small in every global market, and are committed to developing tailored travel solutions that drive results."
        }
        shortNotes={data}
      />
    </main>
  );
};

export default page;
