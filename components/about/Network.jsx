import Link from "next/link";
import React from "react";
import { OtherBtn } from "../Button";
import Image from "next/image";
import { whyOneusStory } from "@/libs/data";

export const Network = () => {
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <p className="text-base md:text-lg font-Poppins">
      OneUs Travels, an award-winning leader in <strong>corporate travel management</strong>, provides innovative and <strong>cost-effective travel solutions</strong> worldwide. Over the years, we have built a robust <strong>global network</strong> of trusted partners, suppliers, and service providers, enabling us to cater to businesses of all sizes and industries.
      </p>
      <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
      How Our Global Network Benefits You
      </h4>
      <ul className="list-disc pl-5">
        <li><strong>Seamless Coordination</strong>: Our extensive network allows for smooth communication and coordination, ensuring that every aspect of your travel plan is managed efficiently.</li>
        <li><strong>Local Expertise</strong>: With partners in various regions, we offer localized knowledge and insights, helping you navigate different markets and cultures for a more enriching travel experience.</li>
        <li><strong>Real-Time Support</strong>: Our global partners provide 24/7 support, allowing us to address any issues promptly and keep your travel plans on track, no matter where you are in the world.</li>
        <li><strong>Cost Efficiency</strong>: Leveraging our global network enables us to negotiate better rates and terms, ultimately reducing your travel expenses while maximizing the quality of your experience.</li>
        <li><strong>Comprehensive Solutions</strong>: From accommodations and transportation to event planning and emergency support, our global network ensures that all your travel needs are met under one roof.</li>
      </ul>
      <p className="text-base font-normal font-Poppins">
      By partnering with OneUs Travels, you can experience the benefits of a global network that enhances your corporate travel management, ensuring a smooth and efficient planning process.
      </p>
      <p className="text-base font-normal font-Poppins">
      <strong>Choose OneUs Travels</strong> for a global, future-driven approach to <strong>business travel management</strong>.
      </p>
      <p className="text-base font-normal font-Poppins">
      To experience seamless, cost-effective travel management. Click below to get started!
      </p>
      <div className="pt-5 w-max">
      <Link href={"#contact"}>
          <OtherBtn roleType={"button"} text={"Plan Your Business Travel Now"} />
        </Link>
      </div>
      
    
    </section>
  );
};
