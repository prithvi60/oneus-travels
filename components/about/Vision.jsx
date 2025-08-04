import Link from "next/link";
import React from "react";
import { OtherBtn } from "../Button";
import Image from "next/image";
import { whyOneusStory } from "@/libs/data";

export const Vision = () => {
  return (
    <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
      <p className="text-base md:text-lg font-Poppins">
        At OneUs Travels, our commitment to delivering exceptional value and service to our customers, employees, partners, and shareholders is at the core of everything we do. Our board, leadership team, and employees are dedicated to fostering a workplace culture that promotes equality of opportunity, empowerment, collaboration, and recognition.
      </p>
      <p className="text-base md:text-lg font-Poppins">
        Our success lies in merging personalized service with advanced technology, giving businesses an edge with efficient travel management that cuts costs and boosts productivity. At OneUs, we don’t just plan trips—we revolutionize your travel experience with seamless, tech-driven processes.
      </p>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Transforming Corporate Travel Management for 9+ Years
        </h4>
        <p className="text-base font-normal font-Poppins">
          For over nine years, OneUs Travels Pvt Ltd has redefined corporate travel by delivering custom solutions that fit company policies, budgets, and the latest industry trends. We understand the importance of travel in business growth, which is why we eliminate manual processes and outdated strategies that often lead to profit loss.
          <br />
          <br />
          By using automation, self-service tools, and cutting-edge proprietary software, we make travel management efficient and cost-effective. Since 2020, we’ve expanded our corporate services to businesses of all sizes and industries, ensuring seamless travel operations and essential back-office support.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6 text-secondary">
        <h4 className="text-lg font-semibold tracking-wide capitalize font-Gilroy md:text-xl">
          Our Vision for Corporate Travel Excellence
        </h4>
        <p className="text-base font-normal font-Poppins">
          Since our inception in 2015, OneUs Travels has operated with a clear vision: to transform the <strong>corporate travel management</strong> landscape by providing innovative and tailored solutions that meet the unique needs of businesses worldwide. We began as a small start-up, identifying the challenges companies faced in managing <strong>business travel</strong>. Our founders recognized the need for a more streamlined, technology-driven approach to travel management, which has guided our journey and growth over the years.
        </p>
        <p className="text-base font-normal font-Poppins">
          As we continue to execute this vision, we focus on leveraging advanced technology and building a robust global network to enhance our service offerings. This commitment allows us to adapt to the evolving needs of our clients and stay ahead of industry trends. By aligning our strategic goals with our vision, we are driving <strong>business growth</strong> and creating substantial benefits for our clients, including:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Tailored Travel Solutions</strong>: Our vision empowers us to deliver customized <strong>corporate travel solutions</strong> that align with our clients' specific goals and requirements.</li>
          <li><strong>Efficiency and Cost Savings</strong>: By embracing technology and innovation, we streamline travel processes, reduce costs, and optimize resource allocation for our clients.</li>
          <li><strong>Enhanced Customer Experience</strong>: Our focus on collaboration and empowerment ensures that we listen to our clients’ feedback, leading to continuous improvement and higher satisfaction rates.</li>
          <li><strong>Sustainable Growth</strong>: Our vision promotes a culture of integrity and accountability, strengthening our relationships with stakeholders and fostering long-term success for all.</li>
        </ul>
        <p className="text-base font-normal font-Poppins">
          At OneUs Travels, our vision is not just a statement; it is the driving force behind our growth and our unwavering commitment to providing exceptional value in <strong>corporate travel management</strong>. Experience the difference that our vision makes for your <strong>business travel</strong> needs.
        </p>
        <p className="text-base font-normal font-Poppins">
          Choose OneUs Travels as your trusted partner for all your <strong>corporate travel management</strong> needs, and let us help you navigate the complexities of business travel with confidence and ease.
        </p>
      </div>
      <div className="pt-5 w-max">
        <Link href={"#contact"}>
          <OtherBtn roleType={"button"} text={"Speak to a Travel Expert"} />
        </Link>
      </div>


    </section>
  );
};
