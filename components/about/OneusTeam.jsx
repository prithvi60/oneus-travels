"use client";
import { team } from "@/libs/data";
import Image from "next/image";
import React, { useState } from "react";

const tabs = ["Board", "Regional & Global Leadership"];

export const OneusTeam = () => {
  const [isActive, setIsActive] = useState("Board");
  const [val, setVal] = useState(null);
  const data = team.filter((list) => list.category === isActive && list);
  const data2 = data[0].card.filter((item) =>
    item.name === val ? item : null
  );
  // console.log({ val, data2 });
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <p className="text-base font-normal font-Poppins">
      At OneUs Travels, our strength lies in our talented team of professionals who are dedicated to delivering exceptional corporate travel solutions. Each team member brings a unique set of skills and experiences, working collaboratively to ensure our clients receive innovative and effective travel management services. Together, we strive for excellence and are committed to transforming your business travel experience. Get to know the brilliant minds behind OneUs Travels below!
      </p>
      <div className="w-full rounded-md shadow-lg bg-secondary">
        <div className="flex justify-center items-center w-full gap-3.5 p-5 overflow-x-auto hideScroll">
          {tabs.map((item, idx) => (
            <div
              className={`flex items-center relative w-max gap-2.5 h-full py-1 px-2 sm:px-5  ${
                isActive === item && "bg-primary shadow-lg"
              }  rounded-full cursor-pointer hover:bg-primary group transition-all duration-500 ease-in-out`}
              key={idx}
              onClick={() => setIsActive(item)}
            >
              <div
                className={`text-sm font-semibold sm:text-base  font-Gilroy whitespace-nowrap capitalize ${
                  isActive === item && "text-secondary"
                } text-primary group-hover:text-secondary`}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h4
        className={`text-2xl font-semibold sm:text-3xl font-Gilroy capitalize text-secondary text-center w-full`}
      >
        {data[0].category}
      </h4>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {data[0].card.map((list, idx) => (
          <div
            className="flex flex-col items-center justify-center p-4 shadow-xl rounded-xl group w-full sm:w-[270px]  md:w-[280px] h-80 cursor-pointer"
            key={idx}
            onClick={() => setVal(list.name)}
          >
            <div className="relative">
              <div className="relative mx-auto overflow-hidden border-4 rounded-full w-44 h-44 border-[#78AADA]">
                <Image
                  fill
                  alt={list.name}
                  src={list.src}
                  className="object-contain object-top p-1 transition-all ease-in-out group-hover:scale-105 duration-400"
                />
              </div>
              <div className="absolute right-0 w-11 h-11 -bottom-1">
                <Image
                  fill
                  alt={"oneus logo"}
                  src={"/oneus-logo-2.svg"}
                  className="object-contain rounded-full bg-primary"
                />
              </div>
            </div>
            <div className="pt-6 space-y-3 text-center">
              <h4 className="text-lg font-semibold tracking-wider transition-all ease-linear font-Gilroy group-hover:text-info duration-400">
                {list.name}
              </h4>
              <p className="text-sm font-normal tracking-wide transition-all duration-500 ease-linear font-Poppins group-hover:text-info">
                {list.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base font-normal font-Poppins">
      United by our shared commitment to integrity, collaboration, and continuous improvement, our team is well-equipped to handle diverse travel needs. With expertise across various sectors of the travel industry, we have successfully managed complex travel arrangements for clients of all sizes.
      </p>
      <p className="text-base font-normal font-Poppins">
      We encourage you to connect with our team members to discover how we can tailor our services to meet your specific travel requirements. Contact us today to experience the OneUs difference in your corporate travel management!
      </p>
    </section>
  );
};
