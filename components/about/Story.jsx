import Link from "next/link";
import React from "react";
import { OtherBtn } from "../Button";
import Image from "next/image";
import { whyOneusStory } from "@/libs/data";

export const Story = () => {
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <p className="text-base md:text-lg font-Poppins">
        Our success stems from combining personalized service excellence with
        cutting-edge technology, ensuring significant returns on investment for
        our clients. Experience the future of travel with OneUS, where expertise
        meets technology for unmatched results.
      </p>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Revolutionizing Corporate Travel Management
        </h4>
        <p className="text-base font-normal font-Poppins">
          Since 2015, Oneus Travels Pvt Ltd has been at the forefront of
          delivering tailored travel solutions for corporate clients, aligning
          with their policies, budgets, and trends. Recognizing the integral
          role travel plays in businesses, we streamline the often cumbersome
          management process. Traditional manual methods, haphazard
          decision-making, and outdated approaches can lead to significant
          losses in profitability.
          <br />
          <br />
          At Oneus, we leverage advanced technology, process automation, and
          self-service options to transform the travel experience. Our
          innovative packaging and proprietary software solutions are designed
          to address these challenges, enhancing efficiency and reducing costs.
          Established in 2020, we now serve corporate clients across various
          industries and sizes, providing essential back-office support to
          optimize their business travel operations.
        </p>
      </div>
      <div className="pt-5 w-max">
        <Link href={"/technology"}>
          <OtherBtn roleType={"button"} text={"Discover our latest tech"} />
        </Link>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Certified in Every Market
        </h4>
        <p className="text-base font-normal font-Poppins">
          At Oneus Travels Pvt Ltd, we don’t just meet industry standards—we set
          them. Our commitment to excellence is validated by a suite of
          prestigious certifications that underscore our leadership in travel
          management. Here’s why our certifications make us the best in the
          market:
          <br />
          <br />
          <span className="text-lg font-medium underline underline-offset-4 font-Gilroy">
            Certified Excellence :
          </span>{" "}
          We hold numerous certifications that affirm our adherence to the
          highest industry standards, ensuring reliability and top-notch
          service.
          <br />
          <br />
          <span className="text-lg font-medium underline underline-offset-4 font-Gilroy">
            Unmatched Quality Assurance :
          </span>{" "}
          Our certifications reflect our dedication to continuous improvement
          and innovation, guaranteeing the best solutions for your travel needs.
          <br />
          <br />
          <span className="text-lg font-medium underline underline-offset-4 font-Gilroy">
            Industry Recognition :
          </span>{" "}
          As a recognized leader, our credentials signify trust and credibility
          in the competitive landscape of travel management.
        </p>
        <p className="text-base font-normal font-Poppins">
          Join the ranks of satisfied clients who benefit from our certified
          excellence. With Oneus Travels, you’re choosing a partner that is not
          only experienced but officially recognized for delivering superior
          travel solutions. Discover the communities that recognize us as best
        </p>
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
        {/* <div
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                fill
                alt={"IATA"}
                src={"/iata.png"}
                className="object-contain transition-all ease-in-out cursor-pointer group-hover:scale-110 duration-400"
              />
            </div>
            <h4 className="text-base font-semibold tracking-wider text-center capitalize transition-colors duration-500 ease-in-out sm:text-lg font-Gilroy group-hover:text-warning">
              {"IATA"}
            </h4>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                fill
                alt={"India Tourism"}
                src={"/Incredible_India.png"}
                className="object-contain transition-all ease-in-out cursor-pointer group-hover:scale-110 duration-400"
              />
            </div>
            <h4 className="text-base font-semibold tracking-wider text-center capitalize transition-colors duration-500 ease-in-out sm:text-lg font-Gilroy group-hover:text-warning">
              {"India Tourism"}
            </h4>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                fill
                alt={"Australia Newzeland Chamber"}
                src={"/Adobe_Express.png"}
                className="object-contain transition-all ease-in-out cursor-pointer group-hover:scale-110 duration-400"
              />
            </div>
            <h4 className="text-base font-semibold tracking-wider text-center capitalize transition-colors duration-500 ease-in-out sm:text-lg font-Gilroy group-hover:text-warning">
              {"Australia Newzeland Chamber"}
            </h4>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                fill
                alt={"Madras Chamber of commerce"}
                src={"/madraschamber.png"}
                className="object-contain transition-all ease-in-out cursor-pointer group-hover:scale-110 duration-400"
              />
            </div>
            <h4 className="text-base font-semibold tracking-wider text-center capitalize transition-colors duration-500 ease-in-out sm:text-lg font-Gilroy group-hover:text-warning">
              {"Madras Chamber of commerce"}
            </h4>
          </div><div
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
              <Image
                fill
                alt={"International Trade Council"}
                src={"/international_trade_council.png"}
                className="object-contain transition-all ease-in-out cursor-pointer group-hover:scale-110 duration-400"
              />
            </div>
            <h4 className="text-base font-semibold tracking-wider text-center capitalize transition-colors duration-500 ease-in-out sm:text-lg font-Gilroy group-hover:text-warning">
              {"International Trade Council"}
            </h4>
          </div> */}
      </div>
    </section>
  );
};
