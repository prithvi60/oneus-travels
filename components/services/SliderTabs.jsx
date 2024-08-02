"use client";
import { useState } from "react";
import SimpleSlider from "./Slider";
import { Select, SelectItem } from "@nextui-org/select";
import { leisureLists } from "@/libs/data";

const tabs = [
  "Short Breaks (1-3 days)",
  "Mini Vacations (4-5 days)",
  "Extended Getaways (5+ days)",
];
// .replace("Extended Getaways", "").trim().replace("(", "").replace(")", "")
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
  const [value, setValue] = useState([]);
  // const [data, setData] = useState(null);
  const lists = leisureLists.filter((item) => item.days === isActive);

  // select value updated
  const handleSelectionChange = (e) => {
    setValue(() => e.target.value);
  };

  // here,filtering the data according to the tab selected.
  const regionFilteredData = lists.filter((item) =>
    value.length !== 0
      ? item.category === category[Number(value)] && item
      : lists
  );

  return (
    <div className="relative z-0 w-full space-y-4">
      <div className="w-full shadow-lg bg-secondary">
        <div className="flex flex-col items-center justify-center w-full gap-2.5 lg:gap-5 lg:flex-row px-7 lg:px-0 ">
          <div className="flex justify-center items-center w-full md:w-max gap-3.5 py-5 lg:p-5 flex-wrap lg:flex-nowrap">
            {tabs.map((item, idx) => (
              <div
                className={`flex items-center relative w-max gap-2.5 h-full py-1 px-2 sm:px-5  ${
                  isActive === item && "bg-primary shadow-lg"
                }  rounded-full cursor-pointer hover:bg-primary group transition-all duration-500 ease-in-out`}
                key={idx}
                onClick={() => setIsActive(item)}
              >
                <div
                  className={`hidden sm:block font-semibold text-base  font-Gilroy whitespace-nowrap ${
                    isActive === item && "text-secondary"
                  } text-primary group-hover:text-secondary`}
                >
                  {item}
                </div>
                <div
                  className={`block sm:hidden text-base font-semibold font-Gilroy ${
                    isActive === item && "text-secondary"
                  } text-primary`}
                >
                  {item.match(/\((.*)\)/)[1]}
                </div>
              </div>
            ))}
          </div>
          <Select
            aria-label="Region"
            placeholder="Region"
            size={"md"}
            onChange={handleSelectionChange}
            selectedKeys={value}
            className="items-center"
            classNames={{
              base: "w-full max-w-[320px] h-full capitalize pb-5 lg:py-5",
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
      <SimpleSlider lists={regionFilteredData} />
    </div>
  );
};
