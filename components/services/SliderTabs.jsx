"use client";
import { useState, useRef } from "react";
import SimpleSlider from "./Slider";
import { motion } from "framer-motion";

const tabs = [
  "1 - 3 days",
  "4 - 6 days",
  "7 - 9 days",
  "10 - 12 days",
  "13 days or more",
];
const SliderTabs = () => {
  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] space-y-6 md:space-y-10 mx-auto">
      {/* <Timeline /> */}
      <DaysTimeline />
      <SimpleSlider />
    </section>
  );
};

export default SliderTabs;

const Timeline = () => {
  const [isActive, setIsActive] = useState("1 to 3 days");

  return (
    <div className="relative z-0 flex justify-between items-center w-4/5 mx-auto gap-4 sm:gap-0 overflow-x-auto">
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
            className={`min-w-[100px] relative after:w-full after:sm:w-max after:absolute p-3.5 text-sm font-medium rounded-md sm:text-base font-Lato after:text-secondary group-hover:bg-success group-hover:text-primary group-hover:before:absolute group-hover:before:w-3 group-hover:before:h-3 group-hover:before:rotate-45 group-hover:before:-top-1 group-hover:before:left-1/2 group-hover:before:-translate-x-1/2 group-hover:before:bg-success group-hover:shadow-md ${
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

const DaysTimeline = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-[#3880CB] bg-white p-1"
    >
      {tabs.map((item, id) => (
        <Tab key={id} setPosition={setPosition}>
          <div className={"w-16 md:w-fit line-clamp-1 md:line-clamp-2"}>
            {" "}
            {item}
          </div>
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-1  py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#3880CB] md:h-12"
    />
  );
};
