"use client";
import { Input, Textarea } from "@nextui-org/input";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Checkbox } from "@nextui-org/checkbox";
import { PrimaryButton } from "./Button";

const lists = ["list1", "list", "list3", "list4", "list5"];

export const ContactForm = () => {
  return (
    <section className="w-full h-full p-[24px] bg-secondary" id="contact">
      <form
        action=""
        method="post"
        className="w-full md:w-3/4 lg:w-1/2 h-auto bg-[#133548] rounded-md p-7 mx-auto space-y-4"
      >
        <h4 className="text-lg font-semibold tracking-normal font-Montserrat text-primary md:text-xl xl:text-2xl">
          Take your first step towards better business travel with Corporate
          Travel Management.
        </h4>
        <h5 className="text-sm font-lato text-primary">
          Contact our team for an obligation-free review of your global travel
          management needs today.
        </h5>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          <Input
            isRequired
            size="lg"
            type="firstName"
            label="First Name"
            labelPlacement={"outside"}
            radius="full"
            color="primary"
            variant="faded"
            placeholder="Enter Your First Name"
            endContent={
              <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
            }
          />
          <Input
            isRequired
            size="lg"
            type="lastName"
            label="Last Name"
            labelPlacement={"outside"}
            placeholder="Enter Your Last Name"
            radius="full"
            color="primary"
            variant="faded"
            endContent={
              <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
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
            variant="faded"
            color="primary"
            endContent={
              <IoMailOutline className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
            }
          />
          <Input
            size="lg"
            type="text"
            label="Phone Number"
            labelPlacement={"outside"}
            placeholder="Enter Your Ph. No."
            radius="full"
            variant="faded"
            color="primary"
            endContent={
              <FaPhoneAlt className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
            }
          />
          <Input
            isRequired
            size="lg"
            type="text"
            label="Company Name"
            labelPlacement={"outside"}
            placeholder="Enter Your Company Name"
            radius="full"
            variant="faded"
            color="primary"
            className="md:col-span-2"
            endContent={
              <HiOutlineBuildingOffice2 className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
            }
          />
        </div>
        <div className="py-5"> 
        <Select
          isRequired
          size="lg"
          label="Where are you located?"
          labelPlacement={"outside"}
          placeholder="Select your region"
          radius="full"
          color="secondary"
          variant="faded"
          className="max-w-ful"
          classNames={{ label: "text-primary capitalize" }}
        >
          {lists.map((list, idx) => (
            <SelectItem key={idx}>{list}</SelectItem>
          ))}
        </Select>
        </div>
        <div className="pb-10">
          <RadioGroup
            classNames={{ label: "text-primary capitalize" }}
            color="primary"
            label="Is your company a CTM customer?"
          >
            <Radio value="yes" classNames={{ label: "text-primary" }}>
              Yes
            </Radio>
            <Radio value="no" classNames={{ label: "text-primary" }}>
              No
            </Radio>
          </RadioGroup>
        </div>
        <Select
          isRequired
          size="lg"
          label="How Can I Help You ?"
          labelPlacement={"outside"}
          placeholder="How Can I Help You ?"
          radius="full"
          color="secondary"
          variant="faded"
          className="mt-5 max-w-ful"
          classNames={{ label: "text-primary capitalize" }}
        >
          {lists.map((list, idx) => (
            <SelectItem key={idx}>{list}</SelectItem>
          ))}
        </Select>
        <Textarea
          isRequired
          label="Comments"
          labelPlacement="outside"
          placeholder="Comments Please..."
          className="max-w-full"
          variant="faded"
          color="primary"
        />
        <Checkbox
          classNames={{
            label: "text-primary capitalize ps-5 leading-sung text-base",
          }}
          radius="sm"
          color="success"
          size="lg"
        >
          YES, I want to receive the latest travel news, insights and offers to
          my inbox!
        </Checkbox>
        <PrimaryButton roleType={"submit"} text={"Submit"} />
      </form>
    </section>
  );
};
