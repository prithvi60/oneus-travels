import React from "react";
import { whyOneusIcons, whyUsAccordion } from "@/libs/data";
import { AccordionComponent } from "./WhyOneusAccordion";
import Image from "next/image";

export const WhyOneus = () => {
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-3 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Your No.1 Premier Travel Partner
        </h4>
        <p className="text-base font-normal font-Poppins">
          OneUS Travels is committed to being your top choice for travel
          management. We prioritize service, innovation, and cost savings over
          size. As a leading travel management company, we possess the scale to
          deliver maximum value, the expertise to provide local market insights,
          and the agility to anticipate and meet future travel needs.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Transforming Corporate Travel
        </h4>
        <p className="text-base font-normal font-Poppins">
          OneUS Travels was established with a mission to revolutionize the
          corporate travel industry. We constantly challenge the status quo, ask
          critical questions, and develop innovative solutions to enhance global
          business travel. Our dedication to continuous improvement ensures that
          your travel programs evolve and adapt to new opportunities.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          The Spirit of Entrepreneurship
        </h4>
        <p className="text-base font-normal font-Poppins">
          At OneUS Travels, our unique approach stems from a deeply ingrained
          entrepreneurial spirit. We work hard, seize opportunities, keep things
          simple, and always act with integrity and positivity. This ethos
          transcends borders, cultures, and industries, fostering long-lasting
          partnerships and delivering meaningful results for clients worldwide.
          <br />
          <br />
          The Oneus community emphasizes empowerment, accountability,
          flexibility, agility, connectivity, and collaboration. These core
          values drive OneUS Travels to think and act as one cohesive unit,
          ensuring we are the best travel management partner for our clients,
          employees, and partners across the globe.
        </p>
      </div>
      <h3 className="text-lg font-semibold tracking-wider md:text-xl font-Gilroy">
        Here are more reasons to choose us!
      </h3>
      {whyUsAccordion.map((list, idx) => (
        <AccordionComponent list={list} key={idx} idx={idx} />
      ))}
      <div className="flex flex-wrap items-center justify-center gap-8 pt-10 md:gap-12 xl:gap-16">
        {whyOneusIcons.map((list, id) => (
          <div
            className="flex flex-col items-center justify-center gap-4 group"
            key={id}
          >
            <div className="relative w-9 h-9">
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
