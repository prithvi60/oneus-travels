
import { WhyOneus } from "@/components/about/WhyOneus";
import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "This commitment to continuous improvement ensures our customers’ travel programs are always evolving and adapting to the opportunities that lie ahead.",
];

const page = () => {
  return (
    <main className="">
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard title={"Why Choose OneUS Travels?"} />
        <WhyOneus />
      </DefaultLayout>
    </main>
  );
};

export default page;
