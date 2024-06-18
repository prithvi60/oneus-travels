"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { PrimaryButton } from "./Button";
import { GlobalTeamCard, GlobalTeamCardReverse } from "./GlobalTeamCard";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/hooks/UseHooks";
import { useInView } from "framer-motion";

export const GlobalTeam = () => {
  const globalRef = useRef(null);
  const isInViewState = useInView(globalRef, { margin: "-80%" });
  let { setIsInView } = useContext(AppContext);

  useEffect(() => {
    setIsInView(isInViewState);
  }, [isInViewState]);
  return (
    <section
      className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto space-y-6 md:space-y-10 "
      ref={globalRef}
    >
      <h3 className="text-2xl font-semibold tracking-normal font-Montserrat text-secondary md:text-3xl xl:text-4xl">
        Corporate Meetings & Events
      </h3>
      <div className="space-y-7">
        <p className="w-full h-full text-base font-lato">
          Elevate your corporate meetings and events with Oneus Travels'
          specialized event management team, OneT. Our seasoned event planners
          ensure meticulously reschedulable meetings and events that not only
          enhance attendee experiences but also yield strategic advantages for
          your business, while optimizing your travel expenditure.
        </p>
        <p className="w-full h-full text-base font-lato">
          Tap into our extensive network of suppliers to capitalize on exclusive
          corporate deals for accommodations, travel arrangements, and
          entertainment, saving you both time and money. Furthermore, centralize
          your corporate and event-related travel expenses through Oneus Travels
          to strengthen your bargaining position with suppliers, unlocking the
          full potential of your budget.
        </p>
        <p className="w-full h-full text-base font-lato">
          Whether you're organizing corporate functions, pivotal meetings,
          large-scale conferences, group excursions, team-building initiatives,
          or sales incentives, we tailor our event management solutions to
          surpass expectations and fuel your business growth so we’ve got your
          back!
        </p>
        <p className="w-full h-full text-base font-lato">
          Partner with us for a seamlessly integrated event experience that
          drives the best results for your business, people, and budget.
        </p>
      </div>
      <GlobalTeamCard
        title={"One Strategy,"}
        imgSrc={"/card_bg_1.jpg"}
        desc={"Using strategic solutions curated to your need."}
      />

      <GlobalTeamCardReverse
        title={"One Forum"}
        imgSrc={"/card_bg_2.jpg"}
        desc={
          "We provide a singular simplified forum to ensure organized service "
        }
      />

      <GlobalTeamCard
        title={"One Community"}
        imgSrc={"/card_bg_3.jpg"}
        desc={
          "A specific group of team assigned for your company to ensure consistent service"
        }
      />

      <GlobalTeamCardReverse
        title={"One Standard"}
        imgSrc={"/card_bg_1.jpg"}
        desc={
          "All services maintaining to your business standard and approved by AITA"
        }
      />
    </section>
  );
};
