"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { SecondaryButton } from "./Button";
import Link from "next/link";

export const GlobalTeamCard = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative flex flex-col items-center w-full h-full space-y-2 sm:flex-row sm:justify-center md:space-y-0">
      <div className="absolute hidden w-12 h-12 border-8 rounded-full lg:w-14 lg:h-14 sm:block -z-10 top-5 -left-1 md:-left-5 lg:left-3 xl:-left-6 border-secondary"></div>
      <div className="relative w-full sm:w-[40%] md:w-full lg:w-2/5 xl:w-1/2 h-[200px] md:h-[320px] overflow-hidden">
        <Image
          alt="team image"
          src={imgSrc}
          quality={100}
          fill
          title="team image"
          sizes="(min-width: 1300px) 691px, (min-width: 1040px) calc(40vw + 179px), calc(100vw - 48px)"
          className="object-cover object-center shadow-md rounded-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl sm:rounded-br-none sm:rounded-tr-none"
        />
      </div>
      <Card className="w-full sm:w-[50%] md:w-full lg:w-1/2 xl:w-1/2  sm:!rounded-tr-3xl sm:!rounded-br-3xl sm:!rounded-bl-none sm:!rounded-tl-none p-2.5 md:p-5 sm:!shadow-none bg-secondary text-primary h-[200px] md:h-[320px]">
        <CardHeader className="flex gap-3 font-WorkSans">
          <h5 className="text-lg font-semibold md:text-xl">{title}</h5>
        </CardHeader>
        <CardBody className="h-full">
          <p className="text-sm md:text-base font-WorkSans">{desc}</p>
        </CardBody>
        <CardFooter>
          <Link href={"#contact"}>
            <SecondaryButton roleType={"button"} text={"Find out more"} />
          </Link>
        </CardFooter>
      </Card>
      <div className="absolute z-0 w-10 h-10 -right-2 md:w-16 md:h-16 -bottom-2 md:-bottom-5 sm:right-4 md:-right-4 lg:right-10 xl:-right-3">
        <Image
          fill
          title="wheel svg"
          src={"/wheel_2.svg"}
          alt="wheel svg"
          className="rounded-full bg-primary animate-rotate"
        />
      </div>
    </div>
  );
};

export const GlobalTeamCardReverse = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative flex flex-col-reverse items-center w-full h-full space-y-2 sm:flex-row sm:justify-center md:space-y-0">
      <div
        className="absolute z-10 w-10 h-10 -left-4 md:w-16 md:h-16 -bottom-6 md:-bottom-8 sm:left-4 md:-left-4 lg:left-10 xl:-left-6"
        // animate={{ rotate: [0, 360] }}
        // transition={{ duration: 2, loop: Infinity }}
      >
        <Image
          fill
          title="wheel svg"
          src={"/wheel_2.svg"}
          alt="wheel svg"
          className="rotate-90 rounded-full bg-primary animate-rotate"
        />
      </div>
      <Card className="w-full sm:w-[50%] md:w-full lg:w-1/2 xl:w-1/2  sm:!rounded-tl-3xl sm:!rounded-bl-3xl sm:!rounded-br-none sm:!rounded-tr-none p-2.5 md:p-5 sm:!shadow-none bg-secondary text-primary h-[200px] md:h-[320px]">
        <CardHeader className="flex gap-3 font-WorkSans">
          <h5 className="text-lg font-semibold md:text-xl">{title}</h5>
        </CardHeader>
        <CardBody className="h-full">
          <p className="text-sm md:text-base font-WorkSans">{desc}</p>
        </CardBody>
        <CardFooter>
          <Link href={"#contact"}>
            <SecondaryButton roleType={"button"} text={"Find out more"} />
          </Link>
        </CardFooter>
      </Card>
      <div className="relative w-full sm:w-[40%] md:w-full lg:w-2/5 xl:w-1/2 h-[200px] md:h-[320px] overflow-hidden">
        <Image
          alt="team image"
          src={imgSrc}
          quality={100}
          fill
          title="team image"
          sizes="(min-width: 1300px) 691px, (min-width: 1040px) calc(40vw + 179px), calc(100vw - 48px)"
          className="object-cover object-center shadow-md rounded-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none sm:rounded-tl-none"
        />
      </div>
      <div className="absolute hidden w-12 h-12 border-8 rounded-full lg:w-14 lg:h-14 sm:block -z-10 top-5 -right-1 md:-right-5 lg:right-3 xl:-right-7 border-secondary"></div>
    </div>
  );
};
