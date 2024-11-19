import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "The OneUs Travels Global Network provides customers with consistency and assurance wherever they travel. Combining OneUs Travels’s wholly owned operations across Australia and New Zealand, North America, Europe, and Asia and a global network of best-in-class independent travel management companies across approximately 100 countries, the OneUs Travels Global Network allows our customers to enjoy consistency of service supported by compatible systems and processes in every market they travel in for maximum savings, efficiency and compliance.",
  "So whether you’re accessing OneUs Travels’s network in Paris, Seattle, Sydney or Taiwan, rest assured you’re working with a local leader in travel management who truly understands your business’s travel needs.",
  "That’s the OneUs Travels difference.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_1.jpg"} />
      <WelcomeBoard
        title={"Blog"}
        desc={
          "OneUs Travels is an award-winning global provider of innovative and cost-effective travel management solutions to the corporate market. We understand the complex travel needs of businesses large and small in every global market, and are committed to developing tailored travel solutions that drive results."
        }
        
      />
    </main>
  );
};

export default page;
