import Link from "next/link";
import React from "react";
import { OtherBtn } from "../Button";
import Image from "next/image";
import { whyOneusStory } from "@/libs/data";

export const Story = () => {
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <p className="text-base md:text-lg font-Poppins">
        Established in 2015, OneUs Travels Pvt Ltd has grown into a global
        leader in travel management, offering expert services in corporate
        travels, events, leisure, loyalty, and wholesale travel. With nearly a
        decade of experience, we provide innovative, cost-effective travel
        solutions designed to maximize ROI for our clients.
      </p>
      <p className="text-base md:text-lg font-Poppins">
        Our success lies in merging personalized service with advanced
        technology, giving businesses an edge with efficient travel management
        that cuts costs and boosts productivity. At OneUs, we don’t just plan
        trips—we revolutionize your travel experience with seamless, tech-driven
        processes.
      </p>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Transforming Corporate Travel Management for 9+ Years
        </h4>
        <p className="text-base font-normal font-Poppins">
          For over nine years, OneUs Travels Pvt Ltd has redefined corporate
          travel by delivering custom solutions that fit company policies,
          budgets, and the latest industry trends. We understand the importance
          of travel in business growth, which is why we eliminate manual
          processes and outdated strategies that often lead to profit loss.
          <br />
          <br />
          By using automation, self-service tools, and cutting-edge proprietary
          software, we make travel management efficient and cost-effective.
          Since 2020, we’ve expanded our corporate services to businesses of all
          sizes and industries, ensuring seamless travel operations and
          essential back-office support.
        </p>
      </div>
      <div className="pt-5 w-max">
        <Link href={"/technology"}>
          <OtherBtn
            roleType={"button"}
            text={"Discover our latest technology solutions here"}
          />
        </Link>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Certified Excellence in Business Travel Management
        </h4>
        <p className="text-base font-normal font-Poppins">
          At OneUs Travels, we don’t just comply with industry standards—we set
          new ones. Our range of certifications showcases our leadership in
          business travel management and proves our commitment to delivering
          top-tier service.
          <br />
          <br />
          <span className="text-lg font-medium underline underline-offset-4 font-Gilroy">
            Certified Expertise:
          </span>{" "}
          With numerous industry certifications, we ensure our clients receive
          reliable, high-quality travel management services every time.
          <br />
          <br />
          <span className="text-lg font-medium underline underline-offset-4 font-Gilroy">
            Quality Assurance:
          </span>{" "}
          Our certifications highlight our dedication to continuous improvement
          and innovation, providing you with the best travel solutions.
          <br />
          <br />
          <span className="text-lg font-medium underline underline-offset-4 font-Gilroy">
            Industry Recognition :
          </span>{" "}
          : As a recognized leader in corporate travel, our certifications
          reflect the trust and credibility we’ve earned in the competitive
          travel landscape.
        </p>
        <p className="text-base font-normal font-Poppins">
          Choose OneUs Travels for certified, expert-backed solutions that
          guarantee superior travel experiences. Join our satisfied clients and
          experience why we’re the best in business travel.
        </p>
        <div className="pt-5 w-max">
          <Link href={"#contact"}>
            <OtherBtn
              roleType={"button"}
              text={"Plan Your Business Travel Now"}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-10 md:gap-16 xl:gap-20">
        {whyOneusStory.map((list, id) => (
          <div
            className="flex flex-col items-center justify-center gap-4 group"
            key={id}
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                fill
                alt={list.note}
                src={list.src}
                className="object-contain transition-all ease-in-out cursor-pointer group-hover:scale-110 duration-400"
              />
            </div>
            <h4 className="text-base font-semibold tracking-wider text-center capitalize transition-colors duration-500 ease-in-out sm:text-lg font-Gilroy group-hover:text-warning">
              {list.note}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
