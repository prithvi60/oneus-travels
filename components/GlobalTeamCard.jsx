import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { PrimaryButton } from "./Button";
import Link from "next/link";

export const GlobalTeamCard = ({ title, imgSrc, desc }) => {
  return (
    <div className="relative w-full h-full flex items-center space-y-2 md:space-y-0">
      <div className="relative w-full lg:w-3/5 h-[180px] md:h-[380px] overflow-hidden">
        <Image
          alt="team image"
          src={imgSrc}
          quality={100}
          fill
          title="team image"
          sizes="(min-width: 1300px) 691px, (min-width: 1040px) calc(40vw + 179px), calc(100vw - 48px)"
          className="object-cover object-center shadow-md rounded-tl-3xl rounded-bl-3xl"
        />
      </div>
      <Card className="w-full -z-10 lg:w-2/5 rounded-none rounded-tr-3xl rounded-br-3xl p-2.5 md:p-5 !shadow-none bg-secondary/90 text-primary h-[180px] md:h-[380px]">
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
