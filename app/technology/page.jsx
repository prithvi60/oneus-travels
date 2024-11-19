import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import Link from "next/link";

const data = [
  "The OneUs Travels Global Network provides customers with consistency and assurance wherever they travel. Combining OneUs Travels’s wholly owned operations across Australia and New Zealand, North America, Europe, and Asia and a global network of best-in-class independent travel management companies across approximately 100 countries, the OneUs Travels Global Network allows our customers to enjoy consistency of service supported by compatible systems and processes in every market they travel in for maximum savings, efficiency and compliance.",
  "So whether you’re accessing OneUs Travels’s network in Paris, Seattle, Sydney or Taiwan, rest assured you’re working with a local leader in travel management who truly understands your business’s travel needs.",
  "That’s the OneUs Travels difference.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_1.jpg"} />
      {/* <WelcomeBoard
        title={"OneUs Travels: Comfort and Innovation in Every Journey"}
        desc={
         "" // "OneUs Travels is an award-winning global provider of innovative and cost-effective travel management solutions to the corporate market. We understand the complex travel needs of businesses large and small in every global market, and are committed to developing tailored travel solutions that drive results."
        }
        
      /> */}
      <section className="w-full h-auto padding ">
      <h3 className="text-[32px] md:text-[40px] lg:text-[42px] tracking-normal font-bold font-Gilroy text-secondary mb-8">
      OneUs Travels: Comfort and Innovation in Every Journey
      </h3>
           <div className="space-y-7">
        <p className="w-full h-full text-base font-normal font-Poppins">
        At OneUs Travels, we elevate your travel experience by combining comfort with cutting-edge technology. Our approach is rooted in understanding customer needs, evolving rapidly to meet changing expectations. We pride ourselves on delivering effective solutions even before you ask, building on the trust you’ve placed in us.
        </p>
   
        <p className="w-full h-full text-base font-normal font-Poppins">
        As an award-winning global travel management company, we specialize in providing affordable, innovative, and smart travel solutions tailored to businesses worldwide. We understand the complexities of corporate travel and work across various business sectors, customizing our services to meet specific needs. Whether it's optimizing costs or simplifying travel planning, our commitment is to make every journey smooth and efficient.
        </p>
        <p className="w-full h-full text-base font-normal font-Poppins">
        We know that in today's fast-paced world, businesses demand flexibility and innovation in travel management. That's why we stay ahead of the curve, using advanced technology to anticipate your needs and provide seamless travel solutions. Our expertise in handling complex travel requirements ensures that every trip is handled with care and precision, no matter the scale.
        </p>
        <p className="w-full h-full text-base font-normal font-Poppins">
        At OneUs Travels, we’re more than just a travel provider—we're your partner in creating a hassle-free and comfortable travel experience. Our dedication to results-driven solutions, combined with the trust we've earned globally, is what sets us apart.
        </p>
      </div>
      </section>
    </main>
  );
};

export default page;
