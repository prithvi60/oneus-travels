import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { PrimaryButton, SecondaryButton } from "./Button";
import Link from "next/link";

export const GlobalTeamCard = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative w-full h-full flex-col sm:flex-row flex sm:justify-center items-center space-y-2 md:space-y-0">
      <div className="hidden sm:block absolute -z-10 w-14 h-14 md:w-20 md:h-20 top-5 -rotate-12 -left-1 md:-left-3 xl:-left-14">
        <Image fill title="wheel svg" src={"/handle.svg"} alt="handle svg"/>
      </div>
      <div className="relative w-full sm:w-[40%] md:w-full lg:w-2/5 xl:w-3/5 h-[180px] md:h-[380px] overflow-hidden">
        <Image
          alt="team image"
          src={imgSrc}
          quality={100}
          fill
          title="team image"
          sizes="(min-width: 1300px) 691px, (min-width: 1040px) calc(40vw + 179px), calc(100vw - 48px)"
          className="object-cover object-center shadow-md rounded-3xl sm:rounded-tl-3xl sm:rounded-bl-3xl"
        />
      </div>
      <Card className="w-full sm:w-[50%] md:w-full lg:w-1/2 xl:w-2/5  sm:!rounded-tr-3xl sm:!rounded-br-3xl rounded-3xl p-2.5 md:p-5 sm:!shadow-none bg-secondary text-primary h-[200px] md:h-[380px]">
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
      <div className="hidden sm:block absolute z-0 w-10 h-10 md:w-14 md:h-14 -bottom-2 md:-bottom-5 right-6 md:right-8 xl:-right-5">
        <Image fill title="wheel svg" src={"/wheel.png"} alt="wheel svg" className="bg-primary p-1 rounded-full" />
      </div>
    </div>
  );
};

export const GlobalTeamCardReverse = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative flex flex-col-reverse w-full h-full gap-2 lg:gap-0 lg:flex-row lg:justify-end lg:items-center">
      <Card className="w-full lg:max-w-[600px] z-20 !rounded-3xl p-2.5 md:p-5 lg:absolute lg:top-10 lg:left-16 h-auto md:h-56">
        <CardHeader className="flex gap-3 font-WorkSans">
          <h5 className="text-lg font-semibold md:text-xl">{title}</h5>
        </CardHeader>
        <CardBody className="h-full">
          <p className="text-sm md:text-base font-WorkSans">{desc}</p>
        </CardBody>
        <CardFooter>
          <Link href={"#contact"}>
            <PrimaryButton roleType={"button"} text={"Find out more"} />
          </Link>
        </CardFooter>
      </Card>
      <div className="relative w-full lg:w-3/5 h-[180px] md:h-[380px] overflow-hidden">
        <Image
          alt="team image"
          src={imgSrc}
          fill
          title="team image"
          quality={100}
          sizes="(min-width: 1300px) 691px, (min-width: 1040px) calc(40vw + 179px), calc(100vw - 48px)"
          className="object-cover object-center shadow-md rounded-3xl"
        />
      </div>
    </div>
  );
};
