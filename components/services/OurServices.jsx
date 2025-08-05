import React from "react";
import { OtherHero } from "../OtherHero";
import DefaultLayout from "../home/DefaultLayout";
import { WelcomeBoard } from "./WelcomeBoard";
import { FaLink } from "react-icons/fa";
import { OtherBtn } from "../Button";
import { leisureTravelLists, ourServices, whyTravelLists } from "@/libs/data";
import Link from "next/link";
import OurServiceCard from "./OurServiceCard";

const OurServices = () => {
  return (
    <div>
      <DefaultLayout>
        {/* <JsonLd data={meetingEventServiceData} /> */}
        <OtherHero imgSrc={"/bg_4.jpg"} />
        <WelcomeBoard
          title={"Expertly Curated Travel Solutions by OneUS"}
          desc={""}
        />
        <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
          <div className="space-y-5">
            <p className="text-base font-normal font-Poppins">
              At OneUS Travels, we know that no two journeys are alike—because
              no two travelers are. That’s why we provide comprehensive,
              tailor-made travel solutions across five core segments: Solo
              Travel, Corporate Travel, Leisure Holidays, Visa Assistance, and
              Meetings & Events. Whether you're a solo explorer, a business
              executive, a vacationing family, or an event coordinator, we’re
              here to make your travel experience seamless, efficient, and
              unforgettable.
            </p>
            <p className="text-base font-normal font-Poppins">
              From the moment you dream of a destination to the moment you
              return, our expert travel planners and global network of partners
              ensure your journey is safe, smart, and personalized—every step of
              the way.
            </p>
          </div>
          <div className="space-y-5">
            <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
              Why Travel Leisurely with OneUS?
            </h4>
            <p className="text-base font-normal font-Poppins">
              At OneUS Travels, comfort isn’t an add-on—it’s the foundation of
              every journey we create. We believe that travel should be
              exciting, not exhausting. That’s why we offer end-to-end travel
              services across five specialized categories: Solo Travel,
              Corporate Travel, Leisure Getaways, Visa Services, and Meetings &
              Events.
              <br />
              <br />
              Whether you’re traveling alone, planning a business trip,
              organizing an event, or simply seeking a stress-free holiday, we
              handle everything—from your visa paperwork and hotel bookings to
              daily itineraries and local support. Our goal? To ensure you never
              have to worry about what’s next. Just tell us where you want to
              go—or even just how you want to feel—and we’ll take care of the
              rest.
              <br />
              <br />
              With OneUS, your journey is not only customized and professional,
              but always comfortable, secure, and truly effortless.
            </p>
          </div>
          <OurServiceCard data={ourServices} />
          <div className="space-y-5">
            <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl">
              Why Thousands Choose OneUS Travels ?
            </h2>
            <p className="text-base font-normal font-Poppins">
              At OneUS, we don’t just book trips—we craft journeys. Whether
              you’re planning a solo escape, a business mission, or a family
              holiday, our promise is simple: comfort, clarity, and complete
              care.
            </p>
            <div className="space-y-4 md:space-y-6 text-secondary">
              <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
                What Sets Us Apart
              </h4>
              <div className="block space-y-3 md:space-y-5">
                {whyTravelLists.map((list, idx) => (
                  <ul
                    key={idx}
                    className="block space-y-0 list-disc list-outside ml-4"
                  >
                    <li className="text-base font-normal font-Poppins">
                      <span className="text-base font-bold font-Poppins">
                        {list.title}
                      </span>
                      {list.desc}
                    </li>
                  </ul>
                ))}
              </div>
              <OtherBtn
                roleType={"button"}
                text={"Talk to a Travel Consultant Today"}
              />
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
              Start Your Journey Here
            </h4>
            <p className="text-base font-normal font-Poppins">
              Feeling overwhelmed by options? Start where it feels right—or
              reach out and we'll co-create your ideal itinerary. Every service
              is backed by our full support, real-time updates, and built-in
              comfort.
            </p>
            <ul className="block space-y-1">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-x-1 text-base md:text-lg hover:underline hover:underline-offset-4 w-max"
                  >
                    <span>
                      <FaLink className="text-sm md:text-base text-gray-400" />
                    </span>
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
            <OtherBtn
              roleType={"button"}
              text={"Plan My Travel"}
              href={"/contact"}
            />
          </div>
        </section>
      </DefaultLayout>
    </div>
  );
};

export default OurServices;

const links = [
  { link: "Solo Travel", href: "/solo-travel" },
  { link: "Corporate Travel", href: "/corporate-travel" },
  { link: "Leisure", href: "/leisure" },
  { link: "Visa Services", href: "/visa-services" },
  { link: "Meetings & Events", href: "/services/meetings-and-events" },
];
