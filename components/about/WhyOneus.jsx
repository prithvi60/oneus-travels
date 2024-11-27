import React from "react";
import { whyOneusIcons, whyUsAccordion } from "@/libs/data";
import { AccordionComponent } from "./WhyOneusAccordion";
import Image from "next/image";
import { OtherBtn } from "../Button";
import Link from "next/link";

export const WhyOneus = () => {
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-3 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
        Your No.1 Premier Travel Partner for Business Travels
        </h4>
        <p className="text-base font-normal font-Poppins">
        At OneUS Travels, we are committed to being your top travel management partner. Our focus is on delivering superior service, innovation, and cost savings for your corporate travels. We combine global reach with local expertise, offering customized solutions that meet your current and future travel needs.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Transforming Corporate Travel
        </h4>
        <p className="text-base font-normal font-Poppins">
        We were founded with one mission: to revolutionize business travel management. By constantly challenging the status quo, asking the right questions, and embracing innovation, we ensure your corporate travel programs evolve and adapt to new opportunities. Continuous improvement is at the core of everything we do, ensuring a better travel experience for your business.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
        Entrepreneurial Spirit Drives Our Success
        </h4>
        <p className="text-base font-normal font-Poppins">
        Our unique, entrepreneurial spirit empowers us to seize opportunities, keep things simple, and act with integrity. This mindset transcends industries and borders, helping us form lasting partnerships worldwide. At OneUS Travels, we believe in collaboration, agility, and accountability—values that define how we operate and deliver results.
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

      <div className="grid grid-cols-2 gap-8 pt-10 place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-3">
        {whyOneusIcons.map((list, id) => (
          <div
            className="flex flex-col items-center justify-center gap-4 group last:col-span-2 last:lg:col-auto"
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
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
        Maximize Business Travel Efficiency with OneUS Travels
        </h4>
        <p className="text-base font-normal font-Poppins">
        Choosing OneUS Travels means opting for business travel solutions that streamline your operations, cut costs, and ensure a seamless experience. Our 24/7 support and customized offerings guarantee that your company’s travel needs are met without compromise.
        </p>
        <div>
        <Link href="#contact" className="mt-8">
      <OtherBtn text={"Plan Your Business Travel Now"} />
      </Link>
      </div>
      </div>
    </section>
  );
};
