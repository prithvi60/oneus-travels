"use client";
import { useState } from "react";
import SimpleSlider from "./Slider";
import { Select, SelectItem } from "@nextui-org/select";

const tabs = [
  "Short Breaks (1-3 days)",
  "Mini Vacations (4-5 days)",
  "Extended Getaways (5+ days)",
];

const category = ["india", "asia", "europe"];

const SliderTabs = () => {
  return (
    <section className="w-full space-y-6 md:space-y-10">
      <Timeline />
    </section>
  );
};

export default SliderTabs;

const Timeline = () => {
  const [isActive, setIsActive] = useState(tabs[0]);

  return (
    <div className="relative z-0 w-full space-y-4">
      <div className="w-full shadow-lg bg-secondary">
        <div className="flex flex-col items-center justify-center w-full gap-2.5 md:gap-5 md:flex-row px-7 lg:px-0 ">
          <div className="flex items-center w-full md:w-max gap-3.5 p-5 overflow-x-auto hideScroll">
            {tabs.map((item, idx) => (
              <div
                className={`flex items-center relative w-max gap-2.5 h-full py-1 px-2 sm:px-5  ${
                  isActive === item && "bg-primary shadow-lg"
                }  rounded-full cursor-pointer hover:bg-primary group transition-all duration-500 ease-in-out`}
                key={idx}
                onClick={() => setIsActive(item)}
              >
                <div
                  className={`text-sm font-semibold sm:text-base  font-Gilroy whitespace-nowrap ${
                    isActive === item && "text-secondary"
                  } text-primary group-hover:text-secondary`}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
          <Select
            placeholder="Select Category"
            size={"md"}
            // onChange={handleSelectionChange}
            className="items-center"
            classNames={{
              base: "w-full max-w-[320px] h-full capitalize pb-5 md:py-5",
              value: "!text-secondary font-medium",
              mainWrapper: "max-w-[220px]",
              popoverContent: "!p-0",
              trigger: "bg-primary !text-secondary",
              innerWrapper: "capitalize",
              listbox:
                "bg-secondary !text-primary data-[hover=true]:!text-secondary rounded-md capitalize",
            }}
          >
            {category.map((c, idx) => (
              <SelectItem key={idx}>{c}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <SimpleSlider />
    </div>
  );
};
