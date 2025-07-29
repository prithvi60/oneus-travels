import { OtherBtn } from "@/components/Button";
import DefaultLayout from "@/components/home/DefaultLayout";
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
      <DefaultLayout>
        <JsonLd data={visaServiceData} />
        <OtherHero imgSrc={"/bg_3.jpg"} />
        <WelcomeBoard
          title={"Visa Services by OneUs Travel"}
          desc={"Trusted. Hassle-Free. Globally Recognized."}
        />
        <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Visa Made Simple
            </h2>
            <p className="text-base font-normal font-Poppins">
              Getting a visa doesn’t have to be overwhelming. Whether you’re
              planning a vacation, preparing for higher studies, or traveling
              for work, OneUs Travel provides end-to-end Visa Services that take
              the stress out of international travel.
            </p>
            <p className="text-base font-normal font-Poppins">
              We’re an award-winning global travel management company with years
              of experience handling applications for tourist, student,
              business, and transit visas. From your very first enquiry to final
              visa stamping, our team ensures a smooth, error-free, and timely
              process.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <OtherBtn
                roleType={"button"}
                text={"📩 Start Your Visa Application"}
                tag
              />
              <OtherBtn
                roleType={"button"}
                text={"📞 Get a Free Visa Consultation"}
              />
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              End-to-End Support for All Visa Types
            </h2>
            <p className="text-base font-normal font-Poppins">
              Our goal is to simplify your journey, no matter the visa type. We
              offer personalized Visa Consultation to help you understand
              eligibility, required documents, embassy protocols, and timelines
              for each destination.
            </p>
            <p className="text-base font-normal font-Poppins">
              We assist with:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {[
                "Tourist Visas: For leisure, family visits, or holiday plans",
                "Business Visas: For meetings, conferences, and corporate travel",
                "Student Visas: For international education and study programs",
                "Transit Visas: For stopovers during long-haul journeys",
                "Work Visas: For long-term employment or relocation abroad",
              ].map((list, idx) => (
                <li key={idx} className="text-base font-normal font-Poppins">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              With OneUs Travel, you’ll receive expert support on form filling,
              appointment bookings, biometric requirements, embassy
              documentation, and interview preparation - everything you need for
              a successful application.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Countries We Cover
            </h2>
            <p className="text-base font-normal font-Poppins">
              We specialize in providing Travel Visa Help for popular and
              high-volume destinations. Our team stays updated with the latest
              visa regulations and document requirements for each country.
            </p>
            <p className="text-base font-normal font-Poppins">
              Most requested visa destinations include:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {[
                "United States",
                "United Kingdom",
                "Schengen Area (France, Germany, Italy, Switzerland, etc.)",
                "United Arab Emirates (UAE)",
                "Singapore",
                "Australia",
                "Canada",
                "Malaysia",
                "Japan",
                "South Korea",
              ].map((list, idx) => (
                <li key={idx} className="text-base font-normal font-Poppins">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              Whether it’s a single-entry tourist visa or a long-term student
              visa, we manage every application with region-specific expertise.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Why Trust OneUs Travel
            </h2>
            <p className="text-base font-normal font-Poppins">
              OneUs Travel is more than just a travel agency. We’re a globally
              recognized travel management company with a reputation for
              professionalism, compliance, and customer-first service.
            </p>
            <p className="text-base font-normal font-Poppins">
              Here's why clients choose us for visa services:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {[
                "Award-Winning Experience across multiple industries and countries",
                "Personalized Guidance from certified visa specialists",
                "Error-Free Processing that meets embassy standards",
                "Assistance to resolve questions or concerns instantly",
                "Corporate Visa Solutions for employee travel and bulk applications",
              ].map((list, idx) => (
                <li key={idx} className="text-base font-normal font-Poppins">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              We work closely with individuals, families, and corporate teams to
              provide tailored support and ensure a confident, smooth visa
              journey for all.
            </p>
            <div className="w-full flex flex-col gap-4">
              <OtherBtn
                roleType={"button"}
                text={
                  "📩 Start Your Visa Application today and travel without worry"
                }
                tag
              />
              <OtherBtn
                roleType={"button"}
                text={"📞 Get a Free Visa Consultation to explore your options"}
              />
            </div>
            <p className="text-base font-normal font-Poppins">
              Let OneUs Travel be your trusted partner in navigating the visa
              process with ease and confidence.
            </p>
          </div>
        </section>
      </DefaultLayout>
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;
