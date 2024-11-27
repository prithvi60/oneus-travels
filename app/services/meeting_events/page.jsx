import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import SliderTabs from "@/components/services/SliderTabs";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { meetingEventServiceData } from "@/libs/schema";

const data = [
  "Corporate Travel Management’s (OneUs Travels’s) specialist meetings and events division, Event Travel Management (ETM), delivers strategic value to global travel programs through the consolidation of your meetings and events expendit.At ETM, we believe in the power of experiences that engage, excite and inspire people to perform. We call it “Connected Experiences",
  "Our unique blend of creativity, customer service, and innovative event technology drives transformative corporate event experiences which deliver on your business’s strategic objectives.",
  "From unique destinations and event experiences to engaging event technology, intuitive reporting, and robust supplier negotiations, our expert teams can tailor an event solution to fit every budget and business need.",
];

const page = () => {
  return (
    <main>
      <JsonLd data={meetingEventServiceData} />
      <OtherHero imgSrc={"/bg_1.jpg"} />
      <WelcomeBoard
        title={"Global Meetings & Events Management Services"}
        desc={
          "Corporate Travel Management’s (OneUs Travels’s) specialist meetings and events division, Event Travel Management (ETM), delivers strategic value to global travel programs through the consolidation of your meetings and events expenditure."
        }
        
      />
                  <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
        <div className="space-y-6 md:space-y-8">
              <p className="text-base font-normal font-Poppins">
              Since 2017, we have been doing the Events for our corporates across the globe, We have a process where our expertise shall sit with the marketing team or event team to understand their event expected outcome based on their budget and excise, so that we shall design the event accordingly.
        </p>
        <p className="text-base font-normal font-Poppins">
        Our team have done more than 500+ events globally for prominent MNCs whose events are very successful with the desired outcome. we have designed the main events with the break out  training session and One-On-One sales session for our corporates.
        </p>
      </div>
      </section>
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;
