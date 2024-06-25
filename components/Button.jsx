import { ImBarcode } from "react-icons/im";
// import { FaTruckPlane } from "react-icons/fa6";

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
