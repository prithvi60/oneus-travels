import { OtherBtn } from "@/components/Button";
import DefaultLayout from "@/components/home/DefaultLayout";
import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { meetingEventServiceData } from "@/libs/schema";

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <JsonLd data={meetingEventServiceData} />
        <OtherHero imgSrc={"/bg_4.jpg"} />
        <WelcomeBoard
          title={"Global Meetings & Events Management Services"}
          desc={"Strategic Planning. Flawless Execution. Measurable Results."}
        />
        <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              500+ Events. One Trusted Partner
            </h2>
            <p className="w-full h-full text-base font-normal font-Poppins">
              Since 2017, OneUs Travel has partnered with global enterprises to
              deliver high-impact, business-aligned events across continents.
              From regional summits to global sales conferences, we provide
              full-service Global Meetings and Events support — seamlessly
              aligned with your brand goals, KPIs, and budgets.
            </p>
            <p className="w-full h-full text-base font-normal font-Poppins">
              With over 500 successful corporate events delivered worldwide, our
              team brings deep expertise in corporate event planning, logistics,
              travel, and experience design. We serve as an extension of your
              internal team, ensuring every event is crafted with purpose,
              professionalism, and precision.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-8">
              <OtherBtn
                roleType={"button"}
                text={"📞 Talk to Our Event Strategy Team"}
                tag
              />
              <OtherBtn
                roleType={"button"}
                text={"📩 Plan Your Next Global Event with Us"}
              />
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              End-to-End Business Event Management
            </h2>
            <p className="text-base font-normal font-Poppins">
              Our comprehensive Event Management Services cover everything from
              initial ideation to post-event reporting. Whether you’re launching
              a new product, aligning regional teams, or hosting VIP client
              meetings, OneUs handles the complexity so you can focus on
              outcomes.
            </p>
            <p className="text-base font-normal font-Poppins">
              Our business event capabilities include:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {[
                "Full event conceptualization and strategy",
                "Mainstage keynotes and breakout session planning",
                "One-on-one sales and investor meetings",
                "MICE logistics, travel, and accommodation coordination",
                "Venue sourcing and global vendor management",
                "Delegate communication, RSVP management, and branding",
                "On-site staffing, technical production, and real-time troubleshooting",
                "Post-event analytics and impact reporting",
              ].map((list, idx) => (
                <li key={idx} className="text-base font-normal font-Poppins">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              We align each touchpoint with your objectives, from agenda design
              to speaker prep — ensuring your event is not just an experience,
              but a measurable success.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Custom Events Built for ROI
            </h2>
            <p className="text-base font-normal font-Poppins">
              Every company has different goals. That’s why we don’t offer
              cookie-cutter solutions. Instead, we specialize in designing
              customized business events that serve clear strategic functions -
              from team enablement to customer acquisition.
            </p>
            <p className="text-base font-normal font-Poppins">
              We begin by collaborating closely with your internal stakeholders
              to understand:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {[
                "Business goals and audience profiles",
                "Budget expectations and ROI metrics",
                "Brand standards and desired impact",
              ].map((list, idx) => (
                <li key={idx} className="text-base font-normal font-Poppins">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-base font-normal font-Poppins">
              This foundation allows us to craft a seamless, cost-effective
              event that aligns with your messaging, KPIs, and travel policy.
            </p>
            <p className="text-base font-normal font-Poppins">
              Whether it’s a C-level retreat, an international partner summit,
              or a global training program, our Business Event Management
              solutions deliver outcomes that move the needle.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Custom Events Built for ROI
            </h2>
            <p className="text-base font-normal font-Poppins">
              We begin by collaborating closely with your internal stakeholders
              to understand:
            </p>
            <ul className="block space-y-0 list-disc list-outside ml-4">
              {golbalMeeting.map((list, idx) => (
                <li
                  key={idx}
                  className="text-base font-normal font-Poppins space-y-5"
                >
                  <h3 className="text-lg md:text-xl font-semibold tracking-wide font-Gilroy">
                    {list.title}
                  </h3>
                  <p className="text-base font-normal font-Poppins">
                    {list.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">
              Let’s Build Your Next Big Event
            </h2>
            <p className="w-full h-full text-base font-normal font-Poppins">
              When you choose OneUs Travel as your corporate event partner, you
              gain more than just a logistics provider. You gain a strategic
              ally committed to delivering high-value outcomes through flawless
              execution, creative excellence, and meticulous planning.
            </p>
            <p className="w-full h-full text-base font-normal font-Poppins">
              With over 500 successful corporate events delivered worldwide, our
              team brings deep expertise in corporate event planning, logistics,
              travel, and experience design. We serve as an extension of your
              internal team, ensuring every event is crafted with purpose,
              professionalism, and precision.
            </p>
            <div className="w-full flex flex-col gap-5">
              <OtherBtn
                roleType={"button"}
                text={"📞 Talk to Our Event Strategy Team today"}
                tag
              />
              <OtherBtn
                roleType={"button"}
                text={
                  "📩 Plan Your Next Global Event with Us and make every moment matter"
                }
              />
            </div>
          </div>
        </section>
      </DefaultLayout>
    </main>
  );
};

export default page;

const golbalMeeting = [
  {
    title: "Proven Track Record",
    desc: "Over 500 events executed for global clients, including Fortune 500s and top-tier MNCs.",
  },
  {
    title: "Strategic Collaboration",
    desc: "We work hand-in-hand with your events or marketing team, aligning on vision, timelines, and execution down to the last detail.",
  },
  {
    title: "Global Reach",
    desc: "We operate across international hubs, leveraging a curated network of venues, vendors, and local event teams to ensure on-ground excellence anywhere in the world.",
  },
  {
    title: "Tech-Enabled Execution",
    desc: "From virtual RSVPs to post-event data analysis, we use smart tools to simplify communication, coordination, and performance tracking.",
  },
  {
    title: "Fully Integrated with MICE Travel",
    desc: "Our in-house travel team streamlines flights, accommodations, group transfers, and visa coordination - all as part of our MICE Travel Solutions. You get one partner, one plan, and zero disconnect between travel and event logistics.",
  },
];
