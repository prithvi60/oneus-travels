import { OtherBtn } from "@/components/Button";
import DefaultLayout from "@/components/home/DefaultLayout";
import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import SliderTabs from "@/components/services/SliderTabs";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { leisureTravelLists } from "@/libs/data";
import { leisureServiceData } from "@/libs/schema";
import Link from "next/link";

const data = [
  "With Corporate Travel Management (OneUs Travels), you can consolidate every aspect of your business travel,strategic meetings and corporate event management needs to maximize savings, efficiencies and duty of care across your entire business travel portfolio.",
  "That's the OneUs Travels difference.",
];

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <JsonLd data={leisureServiceData} />
        <OtherHero imgSrc={"/bg_2.jpg"} />
        <WelcomeBoard
          title={"Leisure Travel | OneUS Travels"}
          desc={
            "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we're committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
          }
        />
        <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-lg font-semibold tracking-normal capitalize font-Poppins text-secondary md:text-xl xl:text-2xl">
              Your Dream Vacation, Perfectly Planned
            </h2>
            <p className="text-base font-normal font-Poppins">
              Discover the joy of stress-free holidays with OneUS Travels. From the snow-capped Alps to the sun-kissed beaches of Bali, we curate international leisure trips that blend comfort, culture, and personal connection. Whether you're planning a honeymoon, a solo recharge, or a family adventure, we handle every detail—so you can simply enjoy the journey.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-7">
            <OtherBtn roleType={"button"} text={"Plan Your Trip"} tag />
            <OtherBtn roleType={"button"} text={"Get a Custom Itinerary"} />
          </div>
          <div className="space-y-4 md:space-y-6 text-secondary pt-10">
            <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
              Why Travel Leisurely with OneUS?
            </h4>
            <p className="text-base font-normal font-Poppins">
              Make every holiday unforgettable with a travel partner that puts comfort and customization first. Whether you’re dreaming of a scenic European rail tour, a tropical island escape, or a multi-country cultural adventure, OneUS Travels crafts journeys with your convenience at heart.
            </p>
            <div className="block space-y-6 md:space-y-8">
              {leisureTravelLists.map((list, idx) => (
                <div key={idx} className="block space-y-2">
                  <p className="text-base font-normal font-Poppins"><span className="text-base font-semibold font-Poppins">{list.title}</span>{list.desc}</p>
                  <button type="button"
                    role="button" className="hover:scale-95 transition-all">
                    <Link title={list.hrefName} href={list.href} className="underline underline-offset-4 text-base font-Poppins">
                      {list.hrefName}
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SliderTabs />
      </DefaultLayout>
    </main>
  );
};

export default page;
