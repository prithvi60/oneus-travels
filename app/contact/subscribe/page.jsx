import DefaultLayout from "@/components/home/DefaultLayout";
import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { contactPageData } from "@/libs/schema";

const data = [
  "We give you complete control over the communications you receive via your email preference center, ensuring you only receive the types of information that matter to you.",
  "Subscribe today!",
];

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <JsonLd data={contactPageData} />
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"Subscribe Today!"}
          desc={
            "Corporate Travel Management (OneUs Travels) provides quality business travel news, insights, product updates, and special offers direct to your inbox, helping you get the most out of your business travel experience."
          }

        />
      </DefaultLayout>
    </main>
  );
};

export default page;
