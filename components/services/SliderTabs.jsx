"use client";
import { useState } from "react";
import SimpleSlider from "./Slider";
import Popover from "../Popover";
import PopoverComp from "../Popover";

const SliderTabs = () => {
  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] space-y-6 md:space-y-10 mx-auto">
      <Timeline />
      <SimpleSlider />
    </section>
  );
};

export default SliderTabs;

const Timeline = () => {
  const tabs = [
    "1 to 3 days",
    "4 to 6 days",
    "7 to 9 days",
    "10 to 12 days",
    "13 days or more",
  ];
  const [isActive, setIsActive] = useState("1 to 3 days");

  return (
    <div className="relative z-0 flex justify-between items-center w-4/5 mx-auto gap-4 sm:gap-0">
      {tabs.map((item, id) => (
        <div
          key={id}
          className="relative w-auto h-full pt-10 group flex flex-col items-center"
          onClick={() => setIsActive(item)}
        >
          <div
            className={`relative before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-[150%]  before:bg-primary before:p-2.5 before:content-[''] before:z-10 before:border before:border-secondary before:rounded-full group-hover:after:absolute group-hover:after:w-3.5 group-hover:after:h-3.5 group-hover:after:top-1 group-hover:after:left-1/2 group-hover:after:transform group-hover:after:-translate-x-1/2 group-hover:after:bg-success group-hover:after:z-20 group-hover:cursor-pointer`}
          ></div>

          <div
            className={`relative after:w-full after:sm:w-max after:absolute p-3.5 text-sm font-medium rounded-md sm:text-base font-Lato after:text-secondary group-hover:bg-success group-hover:text-primary group-hover:before:absolute group-hover:before:w-3 group-hover:before:h-3 group-hover:before:rotate-45 group-hover:before:-top-1 group-hover:before:left-1/2 group-hover:before:-translate-x-1/2 group-hover:before:bg-success group-hover:shadow-md ${
              isActive === item
                ? "text-primary bg-success after:absolute after:w-3.5 after:h-3.5 after:top-1 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-success after:z-20"
                : ""
            }`}
          >
            {item}
          </div>
        </div>
      ))}
      <div
        className="before:absolute before:w-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-secondary before:h-0.5 before:rounded-md before:content-[''] before:bg-opacity-50 before:z-10"
        style={{ top: "calc(50% + 1.5rem)", left: "50%" }}
      ></div>
    </div>
  );
};
