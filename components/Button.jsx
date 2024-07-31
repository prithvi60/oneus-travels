import { ImBarcode } from "react-icons/im";
import { IoPersonOutline } from "react-icons/io5";
// import { FaTruckPlane } from "react-icons/fa6";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { TbArrowBigRightLines } from "react-icons/tb";

export const PrimaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="relative px-3.5 py-2.5 flex items-center gap-0.5 hover:bg-success/80 bg-success transition-all duration-1000 shadow-md ease-soft-spring group after:content-[''] after:bg-primary after:h-5 after:w-5 after:rounded-full after:absolute after:top-[14px] after:-right-[12px] rounded-l-xl"
    >
      <h3 className="w-full text-xs font-semibold tracking-wider uppercase sm:text-sm font-Gilroy text-primary">
        {text}
      </h3>
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
      <h3 className="w-full text-xs font-semibold tracking-wider uppercase sm:text-sm font-Gilroy text-secondary">
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
      className={`bg-primary text-secondary relative shadow-lg px-3.5 py-1.5 flex flex-col sm:flex-row
     items-center gap-0 sm:gap-2 rounded-full border-2 border-secondary hover:bg-info hover:text-white transition-colors duration-200 ease-linear`}
    >
      <FaUsers className={`text-base md:text-lg`} />
      <h3
        className={`text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-Gilroy block`}
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
      className={`bg-primary text-secondary relative shadow-lg px-3.5 py-1.5 flex flex-col sm:flex-row
     items-center gap-0 sm:gap-2 hover:bg-info hover:text-white transition-colors duration-200 ease-linear rounded-full border-2 border-secondary`}
    >
      <FaUserTie className={`text-base md:text-lg`} />
      <h3
        className={`text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-Gilroy block`}
      >
        {text}
      </h3>
    </button>
  );
};

// Common button

export const OtherBtn = ({ text }) => {
  return (
    <button
      type="button"
      role="button"
      className={`bg-primary hover:bg-primary/80 hover:scale-95 text-secondary relative shadow-lg px-3.5 py-1.5 flex
     items-center gap-0 sm:gap-2 transition-all ease-linear group rounded-full border-2 border-secondary`}
    >
      <h3
        className={`text-xs font-semibold tracking-normal capitalize md:text-sm lg:text-base font-Gilroy block`}
      >
        {text}
      </h3>
      <TbArrowBigRightLines className={`text-base md:text-lg`} />
    </button>
  );
};

export const SubmitBtn = ({ text }) => {
  return (
    <button
      type="submit"
      role="button"
      className={`bg-success hover:bg-success/80 text-primary relative shadow-lg px-5 py-2 transition-all ease-linear group rounded-full`}
    >
      <h3
        className={`font-semibold tracking-normal capitalize text-base font-Gilroy block`}
      >
        {text}
      </h3>
    </button>
  );
};
