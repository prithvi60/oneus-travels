import Link from "next/link";
import React from "react";
import { OtherBtn } from "../Button";

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
    </section>
  );
};
