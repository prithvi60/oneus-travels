"use client";
import { useState, useRef } from "react";
import SimpleSlider from "./Slider";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImBarcode } from "react-icons/im";

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
      <Timeline />
      {/* <DaysTimeline /> */}
      <SimpleSlider />
    </section>
  );
};

export default SliderTabs;

const Timeline = () => {
  const [isActive, setIsActive] = useState("1 - 3 days");

  return (
    <div className="relative z-0 flex items-center w-full gap-2 sm:gap-0 bg-success after:content-[''] after:bg-primary after:h-10 after:w-10 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[25px] shadow-lg rounded-md overflow-hidden">
      {/* <h5 className="font-semibold -rotate-90 text-primary font-Gilroy me-2">
        Oneus
        <br /> Travel
      </h5> */}
      {/* Tabs */}
      <div className="w-[80%] sm:w-[92%] ">
        <div className="flex w-full gap-3.5 p-5 overflow-auto hideScroll">
          {tabs.map((item, idx) => (
            <div
              className={`flex items-center relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-max after:h-2 after:bg-secondary gap-2.5 h-full py-1 px-2 sm:px-5 w-full ${
                isActive === item && "bg-primary shadow-lg"
              }  rounded-full cursor-pointer border-2 border-secondary hover:bg-primary group transition-all duration-500 ease-in-out`}
              key={idx}
              onClick={() => setIsActive(item)}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                <Image
                  alt="tour package icon"
                  // width={28}
                  // height={28}
                  fill
                  src={"/tour.png"}
                />
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
      <ImBarcode className="w-[20%] sm:w-[8%] text-4xl sm:text-5xl font-semibold rotate-90 text-primary me-4 md:me-6 lg:me-0" />
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
