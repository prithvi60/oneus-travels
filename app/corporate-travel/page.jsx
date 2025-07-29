import { OtherBtn } from "@/components/Button";
import DefaultLayout from "@/components/home/DefaultLayout";
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
      <DefaultLayout>
        <JsonLd data={corporateTravelServiceData} />
        <JsonLd data={corporateTravelBreadcrumbsData} />
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"Corporate Travel Services by OneUs Travel"}
          desc={"Seamless, Strategic, and Tailored for Modern Business"}
        />
        <section className="w-full h-auto space-y-5 md:space-y-6 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Business Travel, Handled Like Business
            </h2>
            <p className="text-base font-normal font-Poppins">
              At OneUs Travel, we understand that every minute counts when you're
              on the move for work. Whether it's a cross-country meeting, an
              international conference, or a team incentive trip, our Corporate
              Travel solutions are designed to keep your business running smoothly
              - wherever business takes you.
              <br />
              We specialize in delivering Business Travel Solutions that are
              professional, cost-effective, and stress-free, ensuring that your
              team travels with comfort, clarity, and confidence.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <OtherBtn
                roleType={"button"}
                text={"📩 Request a Corporate Quote"}
                tag
                href={"#contact"}
              />
              <OtherBtn
                roleType={"button"}
                text={"📞 Schedule a Travel Strategy Call"}
                href={"#contact"}
              />
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Tailored Itineraries for Every Team
            </h2>
            <p className="text-base font-normal font-Poppins">
              No two companies are the same, and neither are their travel needs.
              That’s why we build Customized Corporate Itineraries that align with
              your organization’s goals, travel policies, and preferred schedules.
            </p>
            <p className="text-base font-normal font-Poppins">
              Whether it’s a startup sending executives overseas or a large team
              attending an annual retreat, OneUs Travel provides:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {[
                "Curated flight and hotel bookings",
                "Group travel coordination (small to large scale)",
                "Visa assistance and travel documentation",
                "Airport transfers and executive car services",
                "Custom add-ons for team-building or leisure extensions",
              ].map((list, idx) => (
                <li key={idx} className="text-base font-normal font-Poppins">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              Our travel planners are available to optimize your itinerary at
              every step - because we know corporate travel should work around
              you, not the other way around.
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              End-to-End Corporate Travel Management
            </h2>
            <p className="text-base font-normal font-Poppins">
              OneUs offers full-service Corporate Travel Management that takes care of logistics from the first inquiry to the final boarding pass - and beyond. We combine hands-on expertise with smart tech-enabled systems to streamline the entire experience.
            </p>
            <p className="text-base font-medium underline underline-offset-2 font-Poppins">
              Our End-to-End Services Include:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {endToEnd.map((list, idx) => (
                <li key={idx} className="space-y-1">
                  <h3 className="text-base md:text-lg font-medium font-Gilroy">{list.title}</h3>
                  <p className="text-base font-normal font-Poppins">{list.desc}</p>
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              From CEOs to interns, we ensure every journey is managed with the same professionalism and care.
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Why OneUs for Your Company
            </h2>
            <p className="text-base font-normal font-Poppins">
              We know the challenges corporate travel planners face - sudden changes, last-minute requests, budget concerns, and policy compliance. That’s where our experience and agility come in.
            </p>
            <p className="text-base font-medium underline underline-offset-2 font-Poppins">
              Partnering with OneUs Travel means:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {["Centralized control with personalized service", "Priority support for urgent travel needs", "Reliable vendor network across domestic & international locations", "Consistent policy adherence with room for custom approvals", "A single point of contact to simplify everything"].map((list, idx) => (
                <li key={idx} className="space-y-1">
                  {/* <h3 className="text-base md:text-lg font-medium font-Gilroy">{list.title}</h3> */}
                  <p className="text-base font-normal font-Poppins">{list}</p>
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              Whether you’re traveling for business growth, collaboration, or recognition - we make sure the logistics never slow you down.
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Partner with Us
            </h2>
            <p className="text-base font-normal font-Poppins">
              Whether you’re a growing startup or an established enterprise, we’re here to simplify and optimize travel for companies of every size.
            </p>
            <p className="text-base font-normal font-Poppins">
              Let us take the stress out of corporate travel so you can focus on what really matters — your business.
            </p>
            <div className="w-full flex flex-col gap-4">
              <OtherBtn
                roleType={"button"}
                text={"📞 Schedule a Travel Strategy Call to discuss your goals"}
                tag
                href={"#contact"}
              />
              <OtherBtn
                roleType={"button"}
                text={"📩 Request a Corporate Quote and get started today"}
                href={"#contact"}
              />
            </div>
          </div>
        </section>
      </DefaultLayout>
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;

const endToEnd = [
  {
    title: "✈️ Flights & Hotels:", desc: "Best-in-class corporate deals, preferred rates, and flexible cancellation"
  },

  {
    title: "🏢 MICE Services:", desc: "Planning for Meetings, Incentives, Conferences, Exhibitions"
  },
  {
    title: "📊 Budget Optimization:", desc: "Transparent cost planning and savings tracking"
  },
  {
    title: "💬 24/7 Support:", desc: "Dedicated assistance for bookings, changes, and on-trip emergencies"
  },
  {
    title: "📲 Smart Coordination:", desc: "Central dashboards and traveler profiles for admins and HR teams"
  },
]