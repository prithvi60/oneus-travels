import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "As a result, we continue to develop a highly engaged workforce and strategic thinking across every member of our team for the long-term benefit of our customers, partners and investors.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_1.jpg"} />
      <WelcomeBoard
        title={
          "Our commitment to customers, employees, partners and shareholders"
        }
        desc={
          "OneUs Travels is committed to delivering on the company’s vision and customer value proposition. Our board, leadership team and employees are all invested in creating and sustaining a workplace culture that supports equality of opportunity, empowerment, collaboration and recognition."
        }
        
      />
    </main>
  );
};

export default page;
