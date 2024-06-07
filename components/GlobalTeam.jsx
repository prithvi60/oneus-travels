"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { PrimaryButton } from "./Button";
import { GlobalTeamCard } from "./GlobalTeamCard";
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
      <h4 className="text-2xl font-semibold tracking-normal font-Montserrat text-secondary md:text-3xl xl:text-4xl">
        Global Travel, Powered By One Travel Team
      </h4>
      <div className="space-y-7">
        <p className="w-full h-full text-base font-lato">
          No matter how large, diverse, and complex your business or travel
          needs, we’re committed to designing simple, safe and sustainable
          solutions that deliver measurable results.
        </p>
        <p className="w-full h-full text-base font-lato">
          At CTM, we take a highly consultative and curated approach to
          designing your global travel program, ensuring a solution that meets
          your business’s unique goals, challenges and opportunities.
        </p>
        <p className="w-full h-full text-base font-lato">
          We work with your team to source and select the right solutions for
          your business and people in every market you operate in and package
          them up into one program, accessed through an integrated technology
          ecosystem, and supported by one global travel team, to give your
          unique global travel program a place to call “home”.
        </p>
      </div>
      <GlobalTeamCard
        imgSrc={"/card_bg_1.jpg"}
        desc={
          "Every aspect of your business travel, strategic meetings and corporate events needs consolidated into one strategic program to maximize savings, efficiencies and duty of care."
        }
      />
      <div className="relative flex flex-col-reverse w-full h-full gap-2 lg:gap-0 lg:flex-row lg:justify-end lg:items-center">
        <Card className="w-full lg:max-w-[600px] z-20 !rounded-3xl p-2.5 md:p-5 lg:absolute lg:top-10 lg:left-16">
          <CardHeader className="flex gap-3 font-Lato">
            <h5 className="text-lg font-semibold md:text-xl">One Program</h5>
          </CardHeader>
          <CardBody>
            <p className="text-sm md:text-base font-Lato">
              Every aspect of your business travel, strategic meetings and
              corporate events needs consolidated into one strategic program to
              maximize savings, efficiencies and duty of care.
            </p>
          </CardBody>
          <CardFooter>
            <PrimaryButton roleType={"button"} text={"Find out more"} />
          </CardFooter>
        </Card>
        <div className="relative w-full lg:w-3/5 h-[180px] md:h-[380px] overflow-hidden">
          <Image
            alt="team image"
            src={"/card_bg_2.jpg"}
            fill
            quality={100}
            className="object-cover object-center shadow-md rounded-3xl"
          />
        </div>
      </div>
      <GlobalTeamCard
        imgSrc={"/card_bg_1.jpg"}
        desc={
          "Every aspect of your business travel, strategic meetings and corporate events needs consolidated into one strategic program to maximize savings, efficiencies and duty of care."
        }
      />
    </section>
  );
};
