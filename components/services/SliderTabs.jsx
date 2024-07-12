"use client";
import { useState } from "react";
import SimpleSlider from "./Slider";
import Image from "next/image";

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
      <div className="w-full">
        <div className="flex md:justify-center md:items-center w-full gap-3.5 p-5 overflow-auto hideScroll">
          {tabs.map((item, idx) => (
            <div
              className={`flex items-center relative w-max gap-2.5 h-full py-1 px-2 sm:px-5  ${
                isActive === item && "bg-primary shadow-lg"
              }  rounded-full cursor-pointer hover:bg-primary group transition-all duration-500 ease-in-out`}
              key={idx}
              onClick={() => setIsActive(item)}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                <Image alt="tour package icon" fill src={"/tour.png"} />
              </div>
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

// const DaysTimeline = () => {
//   return (
//     <div className="py-20 bg-neutral-100">
//       <SlideTabs />
//     </div>
//   );
// };

// const SlideTabs = () => {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   return (
//     <ul
//       onMouseLeave={() => {
//         setPosition((pv) => ({
//           ...pv,
//           opacity: 0,
//         }));
//       }}
//       className="relative mx-auto flex w-fit rounded-full border-2 border-[#3880CB] bg-white p-1"
//     >
//       {tabs.map((item, id) => (
//         <Tab key={id} setPosition={setPosition}>
//           <div className={"w-16 md:w-fit line-clamp-1 md:line-clamp-2"}>
//             {" "}
//             {item}
//           </div>
//         </Tab>
//       ))}

//       <Cursor position={position} />
//     </ul>
//   );
// };

// const Tab = ({ children, setPosition }) => {
//   const ref = useRef(null);

//   return (
//     <li
//       ref={ref}
//       onMouseEnter={() => {
//         if (!ref?.current) return;

//         const { width } = ref.current.getBoundingClientRect();

//         setPosition({
//           left: ref.current.offsetLeft,
//           width,
//           opacity: 1,
//         });
//       }}
//       className="relative z-10 block cursor-pointer px-1  py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
//     >
//       {children}
//     </li>
//   );
// };

// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{
//         ...position,
//       }}
//       className="absolute z-0 h-7 rounded-full bg-[#3880CB] md:h-12"
//     />
//   );
// };
