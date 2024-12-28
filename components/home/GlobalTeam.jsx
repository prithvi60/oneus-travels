"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { PrimaryButton } from "../Button";
import { GlobalTeamCard, GlobalTeamCardReverse } from "./GlobalTeamCard";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/hooks/UseHooks";
import { useInView } from "framer-motion";
import Link from "next/link";

export const GlobalTeam = () => {
  const globalRef = useRef(null);
  const isInViewState = useInView(globalRef, { margin: "-80%" });
  let { setIsInView } = useContext(AppContext);

  useEffect(() => {
    setIsInView(isInViewState);
  }, [isInViewState]);
  return (
    <section
      className="w-full h-auto space-y-6 padding md:space-y-10 "
      ref={globalRef}
    >
      <h3 className="text-[32px] md:text-[40px] lg:text-[42px] tracking-normal font-bold font-Gilroy text-secondary">
        Corporate Meetings & Events
      </h3>
      <div className="space-y-7">
        <p className="w-full h-full text-base font-normal font-Poppins">
        Elevate your corporate meetings and events with OneUs Travels' specialized event management team,  <Link href="/about/oneus_team" className="underline">OneT</Link>. Our experienced event planners create meticulously organized and reschedulable meetings and events that not only enhance attendee experiences but also deliver strategic advantages for your business—all while optimizing your travel expenditure.
        </p>
        <h3 className="text-lg font-semibold font-Poppins">
        Unlock Exclusive Benefits
      </h3>
        <p className="w-full h-full text-base font-normal font-Poppins">
        Leverage our extensive network of suppliers to access exclusive corporate deals on accommodations, travel arrangements, and entertainment, saving you both time and money. Centralize your corporate and event-related travel expenses through OneUs Travels to strengthen your negotiating power with suppliers, maximizing your budget's potential.
        </p>
        <p className="w-full h-full text-base font-normal font-Poppins">
        Whether you’re organizing corporate functions, crucial meetings, large-scale conferences, group excursions, team-building activities, or sales incentives, our  <Link href="/services/corporate_travel" className="underline">tailored event management solutions</Link> are designed to exceed your expectations and drive your business growth. We’ve got your back!
        </p>
        <p className="w-full h-full text-base font-normal font-Poppins">
        <Link href="#contact" className="underline"> Partner with OneUs Travels</Link> for a seamlessly integrated event experience that delivers outstanding results for your business, your team, and your budget. Let us handle the details, so you can focus on what matters most—building connections and achieving your goals.
        </p>
      </div>
      <GlobalTeamCard
        title={"One Strategy"}
        sub={"Crafted for You"}
        imgSrc={"/card_bg_5.jpg"}
        desc={"Utilize our strategic solutions tailored to your specific needs and goals."}
      />

      <GlobalTeamCardReverse
        title={"One Forum"}
        sub={"Simplified and Organized"}
        imgSrc={"/card_bg_6.jpg"}
        desc={
          "Experience a centralized forum designed to streamline our services and ensure seamless communication. "
        }
      />

      <GlobalTeamCard
        title={"One Community"}
        sub={"Dedicated Support"}
        imgSrc={"/card_bg_7.jpg"}
        desc={
          "Benefit from a dedicated team assigned to your company, providing consistent and personalized service every step of the way."
        }
      />

      <GlobalTeamCardReverse
        title={"One Standard"}
        sub={"Excellence Guaranteed"}
        imgSrc={"/card_bg_4.jpg"}
        desc={
          "Enjoy services that uphold your business standards and are approved by AITA, ensuring quality and compliance."
        }
      />
    </section>
  );
};
