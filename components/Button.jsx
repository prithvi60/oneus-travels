import { ImBarcode } from "react-icons/im";
import { FaTruckPlane } from "react-icons/fa6";

export const PrimaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="relative px-3.5 py-2.5 flex items-center gap-0.5 hover:bg-success/80 bg-success transition-all duration-1000 shadow-md ease-soft-spring group before:content-[''] before:bg-primary before:h-6 before:w-6 before:rounded-full before:absolute before:top-[16px] before:-left-[12px] after:content-[''] after:bg-primary after:h-6 after:w-6 after:rounded-full after:absolute after:top-[16px] after:-right-[12px]"
    >
      <h2 className="text-xs text-primary font-WorkSans font-semibold tracking-wide -rotate-90">OneUs</h2>
      <div className="flex items-center gap-1.5 bg-primary
       p-2">
        <h3 className="text-xs font-semibold tracking-wider uppercase sm:text-sm font-WorkSans text-secondary w-full">
          {text}
        </h3>
        <FaTruckPlane
          className="text-lg md:text-xl font-semibold text-secondary"
        />
      </div>
      <ImBarcode className="text-3xl rotate-90 font-semibold text-primary" />
    </button>
  );
};

export const SecondaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="relative px-3.5 py-2.5 flex items-center gap-0.5 hover:bg-primary/80 bg-primary transition-all duration-1000 shadow-md ease-soft-spring group before:content-[''] before:bg-secondary before:h-6 before:w-6 before:rounded-full before:absolute before:top-[16px] before:-left-[12px] after:content-[''] after:bg-secondary after:h-6 after:w-6 after:rounded-full after:absolute after:top-[16px] after:-right-[12px]"
    >
      <h2 className="text-xs text-secondary font-WorkSans font-semibold tracking-wide -rotate-90">OneUs</h2>
      <div className="flex items-center gap-1.5 bg-secondary
       p-2">
        <h3 className="text-xs font-semibold tracking-wider uppercase sm:text-sm font-WorkSans text-primary w-full">
          {text}
        </h3>
        <FaTruckPlane
          className="text-lg md:text-xl font-semibold text-primary"
        />
      </div>
      <ImBarcode className="text-3xl rotate-90 font-semibold text-secondary" />
    </button>
  );
};

export const PrimaryButtonWelcome = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="relative px-3.5 py-2.5 flex items-center gap-0.5 hover:bg-success/80 bg-success transition-all duration-1000 shadow-md ease-soft-spring group before:content-[''] before:bg-primary before:h-6 before:w-6 before:rounded-full before:absolute before:top-[16px] before:-left-[12px] after:content-[''] after:bg-primary after:h-6 after:w-6 after:rounded-full after:absolute after:top-[16px] after:-right-[12px]"
    >
      <h2 className="text-xs text-primary font-WorkSans font-semibold tracking-wide -rotate-90">OneUs</h2>
      <div className="flex items-center gap-1.5 bg-primary
       p-2">
        <h3 className="text-xs font-semibold tracking-wider uppercase sm:text-sm font-WorkSans text-secondary w-min sm:w-full">
          {text}
        </h3>
        <FaTruckPlane
          className="text-lg sm:text-xl font-semibold text-secondary"
        />
      </div>
      <ImBarcode className="text-3xl rotate-90 font-semibold text-primary" />
    </button>
  );
};