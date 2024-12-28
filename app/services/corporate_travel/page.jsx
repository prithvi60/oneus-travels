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
        title={"Our Corporate Travel Services"}
        desc={
          "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we’re committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
        }
      />
      <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
        {/* <h2 className="text-xl font-semibold font-Gilroy">Our Corporate Travel Services</h2> */}
        <p className="text-base font-normal font-Poppins">
          Our travel services to corporates are designed specifically understanding travel trends, policies, and budgets of the corporate with all the comfort and travel facilities for the travellers. Our team knows the intricacies of the corporate travel flows and have simplified the trips into three clicks - Select, Approve, and Book. Our innovative technology recommends the trip based on their policies, preferences, and patterns. Our experienced and professional team helps the traveller not only to plan and book the travel, but they also provide consultation for visa, immigration services, and transfers.
        </p>
      </section>
      <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
        <h2 className="text-xl font-semibold font-Gilroy">Travel Technology - Most Efficient Corporate Travel Platform</h2>
        <h3 className="text-lg font-semibold font-Gilroy">Easy Integration</h3>
        <p className="text-base font-normal font-Poppins">
          Our platform can seamlessly integrate with your current business technology.
        </p>
        <h3 className="text-lg font-semibold font-Gilroy">Unified Digital Platform</h3>
        <p className="text-base font-normal font-Poppins">
          A simple and quick corporate travel platform gives a variety of options, simpler approval steps, policy adherence with the travellers' comfort and facilities.
        </p>
        <h3 className="text-lg font-semibold font-Gilroy">Spend Management</h3>
        <p className="text-base font-normal font-Poppins">
          A single platform for complete management of travel expenses that delivers increased visibility over your cash flow.
        </p>
        <h3 className="text-lg font-semibold font-Gilroy">Exclusive Services</h3>
        <p className="text-base font-normal font-Poppins">
          Manage your business travel program and personalized service for your travelers.
        </p>
      </section>
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;
