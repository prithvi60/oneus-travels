import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { travelCardList } from "@/libs/data";

export const TravelTechnologyCard = () => {
  return (
    <section className="w-full h-auto space-y-5 padding md:space-y-10">
      <h2 className="tracking-normal font-Gilroy font-bold text-secondary text-[32px] md:text-[40px] lg:text-[42px] pb-6 md:pb-2 capitalize">
        Advanced travel technology for Corporates
        {/* Ground-Breaking Corporate Travel Technology */}
      </h2>
      <div className="grid w-full h-full grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 md:items-center md:justify-center md:gap-12 ">
        {travelCardList.map((list, id) => (
          <div className="relative w-full h-full" key={id}>
            <Card className="w-full md:min-w-80 min-h-[350px] sm:min-h-[470px] group relative !overflow-auto z-10">
              <CardHeader className="flex gap-3 !p-0">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    alt="card img"
                    title="card img"
                    fill
                    src={list.img}
                    sizes="(min-width: 1220px) 350px, (min-width: 780px) calc(32.38vw - 39px), (min-width: 440px) 350px, 81.67vw"
                    className="object-cover object-center transition-all duration-200 ease-linear group-hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardBody className="p-5 space-y-3">
                <h3 className="text-base font-semibold tracking-normal font-Gilroy md:text-lg xl:text-xl text-secondary">
                  {list.title}
                </h3>
                <p className="text-sm font-normal font-Poppins md:text-base line-clamp-6">
                  {list.desc}
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
