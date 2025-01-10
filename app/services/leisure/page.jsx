import DefaultLayout from "@/components/home/DefaultLayout";
import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import SliderTabs from "@/components/services/SliderTabs";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { leisureServiceData } from "@/libs/schema";

const data = [
  "With Corporate Travel Management (OneUs Travels), you can consolidate every aspect of your business travel,strategic meetings and corporate event management needs to maximize savings, efficiencies and duty of care across your entire business travel portfolio.",
  "That’s the OneUs Travels difference.",
];

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <JsonLd data={leisureServiceData} />
        <OtherHero imgSrc={"/bg_2.jpg"} />
        <WelcomeBoard
          title={"Leisure Services"}
          desc={
            "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we’re committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
          }

        />
        <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
          <div className="space-y-6 md:space-y-8">
            <p className="text-base font-normal font-Poppins">
              We provide customised budgeted and luxury travel or pre planned itineraries across the world
              Our major Destinations are Europe, Middle East - Dubai, Abudhabi , Indonesia, Singapore, Malaysia, South Korea, Thailand, Srilanka, Australia, US
            </p>
            <p className="text-base font-normal font-Poppins">
              Our Luxury Destinations are Reunion Islands, Fiji Islands, Maldives, Mauritius, Hawaii Islands, Cruises.
            </p>
          </div>
        </section>
        <SliderTabs />
      </DefaultLayout>
    </main>
  );
};

export default page;
