import { ImBarcode } from "react-icons/im";
import { IoPersonOutline } from "react-icons/io5";
// import { FaTruckPlane } from "react-icons/fa6";
import {FaUserTie, FaUsers } from "react-icons/fa";

export const PrimaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="relative px-3.5 py-2.5 flex items-center gap-0.5 hover:bg-success/80 bg-success transition-all duration-1000 shadow-md ease-soft-spring group after:content-[''] after:bg-primary after:h-5 after:w-5 after:rounded-full after:absolute after:top-[14px] after:-right-[12px] rounded-l-xl"
    >
      {/* before:content-[''] before:bg-primary before:h-6 before:w-6 before:rounded-full before:absolute before:top-[14px] before:-left-[12px] */}
      {/* <h2 className="text-xs font-semibold tracking-wide -rotate-90 text-primary font-WorkSans">OneUs</h2> */}
      {/* <div className="flex items-center gap-1.5 bg-primary
       p-2"> */}
      <h3 className="w-full text-xs font-semibold tracking-wider uppercase sm:text-sm font-WorkSans text-primary">
        {text}
      </h3>
      {/* <FaTruckPlane
          className="text-lg font-semibold md:text-xl text-secondary"
        /> */}
      {/* </div> */}
      <ImBarcode className="text-3xl font-semibold rotate-90 text-primary me-2" />
    </button>
  );
};

export const SecondaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="relative px-3.5 py-2.5 flex items-center gap-0.5 hover:bg-primary/80 bg-primary transition-all duration-1000 shadow-md ease-soft-spring group after:content-[''] after:bg-secondary after:h-5 after:w-5 after:rounded-full after:absolute after:top-[14px] after:-right-[12px] rounded-l-xl"
    >
      <h3 className="w-full text-xs font-semibold tracking-wider uppercase sm:text-sm font-WorkSans text-secondary">
        {text}
      </h3>
      <ImBarcode className="text-3xl font-semibold rotate-90 text-secondary me-2" />
    </button>
  );
};

export const MenuBtnMember = ({ text, roleType, percent }) => {
  return (
    <button
      type={roleType}
      role="button"
      className={`bg-primary hover:bg-primary/80 text-secondary relative shadow-lg px-3.5 py-1.5 flex flex-col sm:flex-row
     items-center gap-0.5 sm:gap-0 transition-all ease-linear group rounded-full border-2 border-secondary`}
      //  ${
      //     percent >= 0 && percent <= 18
      //       ? "bg-transparent text-primary"
      //       : percent >= 35 && percent <= 74
      //       ? "bg-primary hover:bg-primary/80 after:bg-success"
      //       : percent >= 75 && percent <= 95
      //       ? "bg-primary hover:bg-primary/80 after:bg-info"
      //       : "bg-success hover:bg-success/80 after:bg-primary"
      //   }
    >
      <FaUserTie
        className={`text-base md:text-lg 
        `}
        // ${
        //   percent >= 0 && percent <= 18
        //     ? "text-primary"
        //     : percent >= 35 && percent <= 74
        //     ? "text-secondary"
        //     : percent >= 75 && percent <= 95
        //     ? "text-secondary"
        //     : "text-primary"
        // }
      />
      <h3
        className={`mt-1 text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-WorkSans block `}
        // ${
        //   percent >= 0 && percent <= 18
        //     ? "text-primary"
        //     : percent >= 35 && percent <= 74
        //     ? "text-secondary"
        //     : percent >= 75 && percent <= 95
        //     ? "text-secondary"
        //     : "text-primary"
        // }
      >
        {text}
      </h3>
    </button>
  );
};

export const MenuBtnCorporate = ({ text, roleType, percent }) => {
  return (
    <button
      type={roleType}
      role="button"
      className={`bg-primary hover:bg-primary/80 text-secondary relative shadow-lg px-3.5 py-1.5 flex flex-col sm:flex-row
     items-center gap-0.5 sm:gap-0 transition-all ease-linear group rounded-full border-2 border-secondary`}
      //  ${
      //     percent >= 0 && percent <= 18
      //       ? "bg-transparent text-primary"
      //       : percent >= 35 && percent <= 74
      //       ? "bg-primary hover:bg-primary/80 after:bg-success"
      //       : percent >= 75 && percent <= 95
      //       ? "bg-primary hover:bg-primary/80 after:bg-info"
      //       : "bg-success hover:bg-success/80 after:bg-primary"
      //   }
    >
      <FaUsers
        className={`text-base md:text-lg 
        `}
        // ${
        //   percent >= 0 && percent <= 18
        //     ? "text-primary"
        //     : percent >= 35 && percent <= 74
        //     ? "text-secondary"
        //     : percent >= 75 && percent <= 95
        //     ? "text-secondary"
        //     : "text-primary"
        // }
      />
      <h3
        className={`mt-1 text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-WorkSans block`}
        // ${
        //   percent >= 0 && percent <= 18
        //     ? "text-primary"
        //     : percent >= 35 && percent <= 74
        //     ? "text-secondary"
        //     : percent >= 75 && percent <= 95
        //     ? "text-secondary"
        //     : "text-primary"
        // }
      >
        {text}
      </h3>
    </button>
  );
};
