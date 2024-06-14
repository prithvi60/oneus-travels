import { Input } from "@nextui-org/input";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { PrimaryButton } from "./Button";

export const FooterSection1 = ({ items }) => {
  return (
    <div className="flex flex-col w-full h-full gap-8 md:gap-2 md:flex-row md:items-start md:justify-between lg:justify-evenly">
      <div className="relative order-1 w-full h-20 md:w-28 md:mt-10 md:h-24">
        <Image
          fill
          alt="Logo"
          src={"/Oneus_Logo_1.png"}
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
        <form
          action="https://public.herotofu.com/v1/19317a90-2945-11ef-b910-172fda062bcc"
          method="post"
          acceptCharset="UTF-8"
          className="space-y-12"
        >
          <Input
            name="firstName"
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
            name="email"
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
          <Input
            isReadOnly
            name="default value"
            isRequired
            size="lg"
            type="text"
            label="text"
            defaultValue="subscribe details"
            radius="full"
            variant="bordered"
            color="secondary"
            className="hidden"
          />
          <PrimaryButton text={"submit"} roleType={"submit"} />
        </form>
      </div>
    </div>
  );
};
