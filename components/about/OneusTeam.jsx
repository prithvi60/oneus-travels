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
        Get to know the brilliant minds behind our innovative travel solutions:
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
            className="flex flex-col items-center justify-center p-4 shadow-xl rounded-xl group w-full max-w-[295px] sm:w-[260px] h-80 cursor-pointer"
            key={idx}
            onClick={() => setVal(list.name)}
          >
            <div className="relative w-full h-44">
              <Image
                fill
                alt={list.name}
                src={list.src}
                className="object-contain object-top p-1 transition-all ease-in-out group-hover:scale-105 duration-400"
              />
              <div className="absolute w-11 h-11 -bottom-1 left-6">
                <Image
                  fill
                  alt={"oneus logo"}
                  src={"/oneus-logo-2.svg"}
                  className="object-contain p-0.5 rounded-full cursor-pointer bg-primary transition-all ease-in-out group-hover:scale-105 border border-secondary duration-400"
                />
              </div>
            </div>
            <div className="pt-6 space-y-3 text-center">
              <h4 className="text-lg font-semibold tracking-wider transition-all ease-linear md:text-xl font-Gilroy group-hover:text-info duration-400">
                {list.name}
              </h4>
              <p className="text-sm font-normal tracking-wide transition-all duration-500 ease-linear font-Poppins group-hover:text-info">
                {list.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
