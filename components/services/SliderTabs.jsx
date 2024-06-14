"use client";
import { useState } from "react";
import SimpleSlider from "./Slider";

const tabs = ["1 to 3 days", "4 to 6 days", "7 to 9 days","10 to 12 days", "13 days or more"];

const SliderTabs = () => {
  const [isActive, setIsActive] = useState("1 to 3 days");

  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] space-y-6 md:space-y-10 z-0 mx-auto">
      <div className="relative z-0 flex justify-between items-center w-4/5 mx-auto gap-4 sm:gap-0 before:absolute before:w-full before:top-2 before:left-0 before:bg-secondary before:h-0.5 before:rounded-md before:content-[''] before:bg-opacity-50 before:z-10">
        {tabs.map((item, id) => (
          <div
            key={id}
            className="relative w-auto h-full pt-10 group"
            onClick={() => setIsActive(item)}
          >
            <div
              className={`before:absolute before:top-0 before:left-0 before:sm:left-0 before:bg-primary before:p-2.5 before:content-[''] before:z-10 before:border-1.5 before:border-secondary before:rounded-full group-hover:after:absolute group-hover:after:w-3.5 group-hover:after:rounded-full group-hover:after:h-3.5 group-hover:after:top-1 group-hover:after:z-20 group-hover:after:left-[43.5%] group-hover:after:sm:left-1 group-hover:after:bg-success group-hover:cursor-pointer ${
                isActive === item &&
                "after:absolute after:w-3.5 after:rounded-full after:h-3.5 after:top-1 after:z-20 after:left-[43.5%] after:sm:left-1 after:bg-success"
              }`}
            >
              <div
                className={`relative after:w-full after:sm:w-max after:absolute p-3.5 text-sm font-medium rounded-md sm:text-base font-Lato after:text-secondary group-hover:bg-success group-hover:text-primary group-hover:before:absolute group-hover:before:w-3 group-hover:before:h-3 group-hover:before:rotate-45 group-hover:before:-top-1 group-hover:before:left-[45%] group-hover:before:bg-success group-hover:shadow-md ${
                  isActive === item &&
                  "!text-primary bg-success before:absolute before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-1 before:bg-success"
                }`}
              >
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
      <SimpleSlider />
    </section>
  );
};

export default SliderTabs;
