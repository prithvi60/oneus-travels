"use client";
import { Input, Textarea } from "@nextui-org/input";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Select, SelectItem } from "@nextui-org/select";
import { SecondaryButton, SubmitBtn } from "../Button";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { RiMailSendLine } from "react-icons/ri";

const lists = ["list1", "list2", "list3", "list4", "list5"];

export const ContactForm = () => {
  return (
    <section
      className="w-full h-full md:h-auto my-12 relative bg-[url('/world_map_sm.png')] lg:bg-[url('/world_map_lg.png')] shadow-md bg-no-repeat bg-cover lg:bg-contain bg-center z-0"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-opacity-85 bg-[#F8F9F8]"></div>
      <div className="z-20 text-center w-full h-full bg-secondary p-[24px]">
        <h1 className="text-lg text-[32px] md:text-[40px] lg:text-[42px] font-Gilroy font-bold text-primary">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 py-6 sm:gap-8 lg:flex-row padding sm:py-10 xl:py-14">
        <div className="z-20 w-full lg:w-1/2">
          <div className="md:space-y-6">
            <h4 className="text-2xl font-bold tracking-wider text-center font-Gilroy md:text-3xl text-secondary">
              Stay Connected
            </h4>
            <div className="flex flex-col items-center justify-center sm:gap-10 sm:flex-row lg:block">
              <div className="flex flex-col items-center justify-center w-full text-center sm:gap-3 sm:flex-row lg:block">
                <div className="p-2 mt-3.5 rounded-full lg:mx-auto bg-primary/80 w-max">
                  <LiaPhoneVolumeSolid className="w-full text-lg rounded-full text-secondary md:text-xl animate-pulse" />
                </div>
                <h5 className="text-lg font-normal tracking-wider text-secondary font-Poppins md:text-xl">
                  +91-98408 84460
                </h5>
              </div>
              <div className="flex flex-col items-center justify-center w-full text-center sm:gap-3 sm:flex-row lg:block">
                <div className="p-2 mt-3.5 rounded-full lg:mx-auto bg-primary/80 w-max">
                  <RiMailSendLine className="w-full text-lg rounded-full text-secondary md:text-xl animate-pulse" />
                </div>
                <h5 className="text-lg font-normal tracking-wider text-secondary font-Poppins md:text-xl">
                  oneustravel@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>
        <form
          action="https://public.herotofu.com/v1/19317a90-2945-11ef-b910-172fda062bcc"
          method="post"
          acceptCharset="UTF-8"
          className="z-20 w-full h-auto space-y-4 rounded-md lg:w-1/2"
        >
          {/* bg-[#133548] */}
          <h3 className="text-lg font-semibold tracking-normal font-Gilroy text-secondary md:text-xl xl:text-2xl">
            Take your first step towards better business travel with Corporate
            Travel Management.
          </h3>
          {/* <h5 className="text-sm font-Gilroy text-primary">
            Contact our team for an obligation-free review of your global travel
            management needs today.
          </h5> */}
          <div className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2">
            <Input
              classNames={{
                inputWrapper: "bg-primary font-Poppins font-normal",
              }}
              name="firstName"
              isRequired
              size="lg"
              type="firstName"
              label="First Name"
              labelPlacement={"outside"}
              radius="full"
              color="secondary"
              variant="faded"
              placeholder="Enter Your First Name"
              endContent={
                <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
              }
            />
            <Input
              classNames={{
                inputWrapper: "bg-primary font-Poppins font-normal",
              }}
              name="lastName"
              isRequired
              size="lg"
              type="lastName"
              label="Last Name"
              labelPlacement={"outside"}
              placeholder="Enter Your Last Name"
              radius="full"
              color="secondary"
              variant="faded"
              endContent={
                <MdOutlineDriveFileRenameOutline className="flex-shrink-0 text-2xl opacity-50 pointer-events-none text-secondary-300" />
              }
            />
            <Input
              classNames={{
                inputWrapper: "bg-primary font-Poppins font-normal",
              }}
              name="email"
              isRequired
              size="lg"
              type="email"
              label="Email"
              labelPlacement={"outside"}
              placeholder="Enter Your Email"
              radius="full"
              variant="faded"
              color="secondary"
              endContent={
                <IoMailOutline className="flex-shrink-0 text-lg opacity-50 pointer-events-none text-secondary-300" />
              }
            />
            <Input
              classNames={{
                inputWrapper: "bg-primary font-Poppins font-normal",
              }}
              name="phone number"
              size="lg"
              type="text"
              label="Phone Number"
              labelPlacement={"outside"}
              placeholder="Enter Your Ph. No."
              radius="full"
              variant="faded"
              color="secondary"
              endContent={
                <FaPhoneAlt className="flex-shrink-0 text-lg opacity-50 pointer-events-none text-secondary-300" />
              }
            />
            <Input
              classNames={{
                inputWrapper: "bg-primary font-Poppins font-normal",
              }}
              name="company name"
              isRequired
              size="lg"
              type="text"
              label="Company Name"
              labelPlacement={"outside"}
              placeholder="Enter Your Company Name"
              radius="full"
              variant="faded"
              color="secondary"
              className="md:col-span-2"
              endContent={
                <HiOutlineBuildingOffice2 className="flex-shrink-0 text-lg opacity-50 pointer-events-none text-secondary-300" />
              }
            />
          </div>
          <div className="py-1.5">
            <Select
              name="location"
              isRequired
              size="lg"
              label="Where are you located?"
              labelPlacement={"outside"}
              placeholder="Select your region"
              radius="full"
              color="secondary"
              variant="faded"
              className="max-w-ful"
              classNames={{
                label: "text-secondary capitalize font-Poppins font-normal",
                trigger: "bg-primary",
              }}
            >
              {lists.map((list, idx) => (
                <SelectItem key={idx}>{list}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="pb-6">
            <RadioGroup
              classNames={{
                label: "text-secondary capitalize font-Poppins font-normal",
              }}
              color="secondary"
              label="Is your company a CTM customer?"
            >
              <Radio
                value="yes"
                classNames={{
                  label: "text-secondary font-Poppins font-normal",
                }}
              >
                Yes
              </Radio>
              <Radio
                value="no"
                classNames={{
                  label: "text-secondary font-Poppins font-normal",
                }}
              >
                No
              </Radio>
            </RadioGroup>
          </div>
          <Select
            name="selecting options"
            isRequired
            size="lg"
            label="How Can I Help You ?"
            labelPlacement={"outside"}
            placeholder="How Can I Help You ?"
            radius="full"
            color="secondary"
            variant="faded"
            className="mt-5 max-w-ful"
            classNames={{
              label: "text-secondary capitalize font-Poppins font-normal",
              trigger: "bg-primary",
            }}
          >
            {lists.map((list, idx) => (
              <SelectItem key={idx}>{list}</SelectItem>
            ))}
          </Select>
          <Textarea
            classNames={{
              inputWrapper: "bg-primary font-Poppins font-normal",
            }}
            name="comments"
            isRequired
            label="Comments"
            labelPlacement="outside"
            placeholder="Comments Please..."
            className="max-w-full"
            variant="faded"
            color="secondary"
            size="lg"
          />
          <SubmitBtn text={"Submit"} />
        </form>
      </div>
      {/* </div> */}
    </section>
  );
};
