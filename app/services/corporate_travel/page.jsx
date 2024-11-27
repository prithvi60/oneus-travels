import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import {
  corporateTravelBreadcrumbsData,
  corporateTravelServiceData,
} from "@/libs/schema";

const page = () => {
  return (
    <main>
      <JsonLd data={corporateTravelServiceData} />
      <JsonLd data={corporateTravelBreadcrumbsData} />
      <OtherHero imgSrc={"/bg_1.jpg"} />
      <WelcomeBoard
        title={"Corporate Travel Services"}
        desc={
          "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we’re committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
        }
      />
      <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
        <div className="space-y-6 md:space-y-8">
          <p className="text-base font-normal font-Poppins">
            Providing all the travel services for the corporate and their
            employees to travel in comfort. Travel services include domestic and
            international Flight and Hotel Booking, Visa services, Cab services,
            etc.
          </p>
        </div>
      </section>
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;
