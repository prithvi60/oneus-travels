"use client";
import { useState } from "react";
import SimpleSlider from "./Slider";
import { Select, SelectItem } from "@nextui-org/select";

const tabs = [
  "1 - 3 days",
  "4 - 6 days",
  "7 - 9 days",
  "10 - 12 days",
  "13 days or more",
];

const SliderTabs = () => {
  return (
    <section className="w-full space-y-6 md:space-y-10">
      <Timeline />
      <SimpleSlider />
    </section>
  );
};

export default SliderTabs;

const Timeline = () => {
  const [isActive, setIsActive] = useState("1 - 3 days");

  return (
    <div className="relative z-0 w-full shadow-lg bg-secondary">
      <div className="flex flex-col-reverse items-center justify-center w-full gap-2.5 md:gap-5 md:flex-row px-7 lg:px-0 ">
      {/* sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] */}
        <Select
          label="Filter:"
          placeholder="Select Category"
          labelPlacement={"outside-left"}
          size={"md"}
          // color="success"
          // onChange={handleSelectionChange}
          className="items-center"
          classNames={{
            base: "w-full max-w-[320px] h-full capitalize py-5",
            value:
              "!text-primary data-[hover=true]:!text-warning font-medium",
            label:
              "w-max h-full !text-primary text-lg tracking-wider font-medium",
            mainWrapper: "min-w-[180px] ",
            popoverContent: "!p-0",
            trigger:
              "bg-transparent data-[hover=true]:bg-secondary data-[hover=true]:bg-opacity-50 !text-primary",
            innerWrapper:
              "capitalize ",
            listbox:
              "bg-secondary !text-primary data-[hover=true]:!text-secondary rounded-md capitalize",
          }}
        >
          {tabs.map((range, idx) => (
            <SelectItem key={idx}>{range}</SelectItem>
          ))}
        </Select>
        <div className="flex items-center w-full md:w-max gap-3.5 p-5 overflow-x-auto hideScroll">
          {tabs.map((item, idx) => (
            <div
              className={`flex items-center relative w-max gap-2.5 h-full py-1 px-2 sm:px-5  ${
                isActive === item && "bg-primary shadow-lg"
              }  rounded-full cursor-pointer hover:bg-primary group transition-all duration-500 ease-in-out`}
              key={idx}
              onClick={() => setIsActive(item)}
            >
              {/* <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                <Image alt="tour package icon" fill src={"/tour.png"} />
              </div> */}
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
      </div>
    </div>
  );
};

{
  /* <div className="absolute z-10 right-14 md:!right-0 top-14 md:top-0">
        <Select
          // label="Filter:"
          placeholder="Select Category"
          labelPlacement={"outside-left"}
          size={"md"}
          // color="success"
          // onChange={handleSelectionChange}
          className="items-center"
          classNames={{
            base: "w-full max-w-xs h-full capitalize",
            value: "!text-white font-medium",
            label:
              "w-full h-full !text-primary text-lg tracking-wider font-medium",
            mainWrapper: "min-w-[230px]",
            popoverContent: "!p-0",
            trigger:
              "bg-info !text-white data-[hover=true]:bg-info data-[hover=true]:bg-opacity-80",
            innerWrapper: "capitalize !text-white",
            listbox: "bg-info !text-white rounded-md capitalize",
          }}
        >
          {priceRange.map((range, idx) => (
            <SelectItem key={idx}>{range}</SelectItem>
          ))}
        </Select>
      </div> */
}
