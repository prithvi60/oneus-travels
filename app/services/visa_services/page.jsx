import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import SliderTabs from "@/components/services/SliderTabs";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { visaServiceData } from "@/libs/schema";

const data = [
  "Corporate Travel Management’s (OneUs Travels’s) specialist meetings and events division, Event Travel Management (ETM), delivers strategic value to global travel programs through the consolidation of your meetings and events expendit.At ETM, we believe in the power of experiences that engage, excite and inspire people to perform. We call it “Connected Experiences",
  "Our unique blend of creativity, customer service, and innovative event technology drives transformative corporate event experiences which deliver on your business’s strategic objectives.",
  "From unique destinations and event experiences to engaging event technology, intuitive reporting, and robust supplier negotiations, our expert teams can tailor an event solution to fit every budget and business need.",
];

const page = () => {
  return (
    <main>
      <JsonLd data={visaServiceData} />
      <OtherHero imgSrc={"/bg_2.jpg"} />
      <WelcomeBoard
        title={"Visa Services"}
        desc={
          "Corporate Travel Management’s (OneUs Travels’s) specialist meetings and events division, Event Travel Management (ETM), delivers strategic value to global travel programs through the consolidation of your meetings and events expenditure."
        }
      />
      <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
        <div className="space-y-6 md:space-y-8">
          <p className="text-base font-normal font-Poppins">
            Our Visa expertise helps you get the visa starting from the Visa
            documents, filling in applications, required itineraries and getting
            the appointments for any countries. We have a success ratio of 99.9%
            of Visa as we follow a process defined by the embassies and
            streamlined procedures.
          </p>
        </div>
      </section>
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;
