import { FaAngleRight } from "react-icons/fa6";

export const PrimaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="flex items-center gap-2 px-7 py-2.5  hover:bg-success bg-primary border-2 border-success rounded-full transition-all duration-1000 ease-soft-spring group"
    >
      <h4 className="text-sm font-semibold tracking-wider uppercase font-lato text-secondary group-hover:text-primary">{text}</h4>
      <FaAngleRight size={16} className="font-semibold text-secondary group-hover:text-primary" />
    </button>
  );
};

export const SecondaryButton = ({ text, roleType }) => {
  return (
    <button
      type={roleType}
      role="button"
      className="flex items-center gap-2 px-7 py-2.5  hover:bg-secondary bg-primary border-2 border-secondary rounded-full transition-all duration-1000 ease-soft-spring group"
    >
      <h4 className="text-sm font-semibold tracking-wider uppercase font-lato text-secondary group-hover:text-primary">{text}</h4>
      <FaAngleRight size={16} className="font-semibold text-secondary group-hover:text-primary" />
    </button>
  );
};
