"use client";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { RiMailSendLine } from "react-icons/ri";
import { Contact } from "../Contact";

export const ContactForm = ({ contact }) => {
  return (
    <section
      className={`w-full h-full md:h-auto ${contact ? "mb-12" : "my-12"} relative bg-[url('/world_map_sm.png')] lg:bg-[url('/world_map_lg.png')] shadow-md bg-no-repeat bg-cover lg:bg-contain bg-center z-0`}
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
                  sales@oneustravels.com
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
};
