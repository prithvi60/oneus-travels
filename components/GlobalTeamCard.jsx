"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { OtherBtn } from "./Button";
import Link from "next/link";

export const GlobalTeamCard = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative flex flex-col items-center w-full h-full gap-2 sm:gap-0 sm:flex-row sm:justify-center">
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
        <CardHeader className="flex gap-3 font-Gilroy">
          <h5 className="text-lg font-semibold md:text-xl">{title}</h5>
        </CardHeader>
        <CardBody className="h-full">
          <p className="text-sm md:text-base font-Gilroy">{desc}</p>
        </CardBody>
        <CardFooter>
          <Link href={"#contact"}>
            <OtherBtn roleType={"button"} text={"Find out more"} />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export const GlobalTeamCardReverse = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative flex flex-col-reverse items-center w-full h-full gap-2 sm:gap-0 sm:flex-row sm:justify-center">
      <Card className="w-full sm:w-[50%] md:w-full lg:w-1/2 xl:w-1/2  sm:!rounded-tl-3xl sm:!rounded-bl-3xl sm:!rounded-br-none sm:!rounded-tr-none p-2.5 md:p-5 sm:!shadow-none bg-secondary text-primary h-[200px] md:h-[320px]">
        <CardHeader className="flex gap-3 font-Gilroy">
          <h5 className="text-lg font-semibold md:text-xl">{title}</h5>
        </CardHeader>
        <CardBody className="h-full">
          <p className="text-sm md:text-base font-Gilroy">{desc}</p>
        </CardBody>
        <CardFooter>
          <Link href={"#contact"}>
            <OtherBtn text={"Find out more"} />
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
    </div>
  );
};
