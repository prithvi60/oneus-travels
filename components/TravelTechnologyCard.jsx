import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { travelCardList } from "@/libs/data";

export const TravelTechnologyCard = () => {
  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto space-y-5 md:space-y-10">
      <h2 className="tracking-normal font-SourceSerif text-secondary text-[32px] md:text-[40px] lg:text-[42px] pb-16 md:pb-10">
        Ground-Breaking Corporate Travel Technology
      </h2>
      <div className="flex flex-col items-center justify-center w-full h-full gap-16 mt-20 md:flex-row md:gap-10">
        {travelCardList.map((list, id) => (
          // <div className="relative w-full h-full pb-14" key={id}>
          //   <div className="absolute z-0 w-32 h-32 -translate-x-1/2 border-8 md:w-24 md:h-24 lg:w-32 lg:h-32 -top-12 left-1/2 border-secondary rounded-t-xl">
          //     <div className="relative">
          //       <div className="absolute z-0 w-14 h-14 -top-2 -right-[54px] -rotate-90">
          //         <Image
          //           fill
          //           title="wheel svg"
          //           src={"/tag.svg"}
          //           alt="wheel svg"
          //         />
          //       </div>
          //     </div>
          //   </div>
          //   <Card className="w-full min-h-[350px] sm:min-h-[500px] group relative !overflow-auto z-10 border-[6px] border-secondary">
          //     <CardHeader className="flex gap-3 !p-0">
          //       <div className="relative w-full h-56 overflow-hidden">
          //         <Image
          //           alt="card img"
          //           title="card img"
          //           fill
          //           src={list.img}
          //           sizes="(min-width: 1220px) 350px, (min-width: 780px) calc(32.38vw - 39px), (min-width: 440px) 350px, 81.67vw"
          //           className="object-cover object-center transition-all duration-200 ease-linear group-hover:scale-110"
          //         />
          //       </div>
          //     </CardHeader>
          //     <CardBody className="p-5 space-y-3">
          //       <h3 className="text-base font-semibold tracking-normal font-WorkSans md:text-lg xl:text-xl text-secondary">
          //         {list.title}
          //       </h3>
          //       <p className="text-sm font-normal font-WorkSans md:text-base line-clamp-6">
          //         {list.desc}
          //       </p>
          //     </CardBody>
          //   </Card>
          //   <div className="absolute z-0 w-16 h-16 bottom-6 left-10">
          //     <Image
          //       fill
          //       title="wheel svg"
          //       src={"/wheel-angle.svg"}
          //       alt="wheel svg"
          //     />
          //   </div>
          //   <div className="absolute z-0 w-16 h-16 bottom-6 right-10">
          //     <Image
          //       fill
          //       title="wheel svg"
          //       src={"/wheel-angle.svg"}
          //       alt="wheel svg"
          //     />
          //   </div>
          // </div>
          <div className="relative w-full h-full pb-14" key={id}>
            <div className="absolute z-0 w-12 h-12 border-8 rounded-full md:w-12 md:h-12 lg:w-14 lg:h-14 -top-5 left-5 border-secondary">
              {/* <div className="relative">
              <div className="absolute z-0 w-11 h-11 -top-3 -right-[44px] -rotate-90">
                <Image
                  fill
                  title="wheel svg"
                  src={"/tag.svg"}
                  alt="wheel svg"
                />
              </div>
            </div> */}
            </div>
            <Card className="w-full min-h-[350px] sm:min-h-[500px] group relative !overflow-auto z-10">
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
                <h3 className="text-base font-semibold tracking-normal font-WorkSans md:text-lg xl:text-xl text-secondary">
                  {list.title}
                </h3>
                <p className="text-sm font-normal font-WorkSans md:text-base line-clamp-6">
                  {list.desc}
                </p>
              </CardBody>
            </Card>
            <div className="absolute z-10 w-14 h-14 -right-2 md:w-16 md:h-16 bottom-6 md:bottom-6 md:-right-4 lg:-right-2 xl:-right-3">
              <Image
                fill
                title="wheel svg"
                src={"/wheel_2.svg"}
                alt="wheel svg"
                className="rounded-full bg-primary animate-rotate"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
