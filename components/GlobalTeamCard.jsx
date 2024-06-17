import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { PrimaryButton } from "./Button";

export const GlobalTeamCard = ({ imgSrc, desc }) => {
  return (
    <div className="w-full h-full relative space-y-2 md:space-y-5">
      <div className="relative w-full lg:w-3/5 h-[180px] md:h-[380px] overflow-hidden">
        <Image
          alt="team image"
          src={imgSrc}
          quality={100}
          fill
          title="team image"
          sizes="(min-width: 1300px) 691px, (min-width: 1040px) calc(40vw + 179px), calc(100vw - 48px)"
          className="object-cover object-center rounded-3xl shadow-md"
        />
      </div>
      <Card className="w-full lg:max-w-[600px] !rounded-3xl p-2.5 md:p-5 lg:absolute lg:top-10 lg:right-20">
        <CardHeader className="flex gap-3 font-Lato">
          <h5 className="font-semibold text-lg md:text-xl">One Program</h5>
        </CardHeader>
        <CardBody>
          <p className="text-sm md:text-base font-Lato">{desc}</p>
        </CardBody>
        <CardFooter>
          <PrimaryButton roleType={"button"} text={"Find out more"} />
        </CardFooter>
      </Card>
    </div>
  );
};
