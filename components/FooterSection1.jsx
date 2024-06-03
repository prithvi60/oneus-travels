import { Input } from "@nextui-org/input";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PrimaryButton } from "./PrimaryButton";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export const FooterSection1 = ({items}) => {
  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-2 md:flex-row md:items-start md:justify-between lg:justify-evenly">
      <div className="relative order-1 w-full md:w-24 md:mt-10 h-14 md:h-20 xl:h-20">
        <Image
          fill
          alt="Logo"
          src={"/travel_logo.png"}
          className="object-contain"
        />
      </div>
      <ul className="grid order-3 grid-cols-2 gap-4 md:pt-10 md:order-2">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link className="flex items-center gap-2" href={item.ref}>
              <FaAngleRight size={14} className="text-secondary" />
              <h4 className="text-base font-medium text-secondary hover:text-success">
                {item.menuTitle}
              </h4>
            </Link>
          </li>
        ))}
      </ul>
      <div className="order-2 block md:order-3">
        <h3 className="pb-3 text-base font-semibold tracking-wider capitalize font-Montserrat nd:text-lg">
          Subscribe for latest news:
        </h3>
        <form className="space-y-12">
          <Input
            isRequired
            size="lg"
            type="firstName"
            label="First Name"
            labelPlacement={"outside"}
            placeholder="Enter Your Name"
            radius="full"
            color="secondary"
            variant="bordered"
            endContent={
              <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
            }
          />
          <Input
            isRequired
            size="lg"
            type="email"
            label="Email"
            labelPlacement={"outside"}
            placeholder="Enter Your Email"
            radius="full"
            variant="bordered"
            color="secondary"
            endContent={
              <IoMailOutline className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
            }
          />
          <PrimaryButton text={"submit"} roleType={"submit"} />
        </form>
      </div>
    </div>
  );
};
