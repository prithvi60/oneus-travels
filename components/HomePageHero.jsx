"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import { sliders } from "@/libs/data";
import { SecondaryButton } from "./Button";

export const HomePageHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="slick__dots--custom"></div>,
  };
  return (
    <section className="w-full h-full overflow-hidden slider-container">
      <Slider {...settings}>
        {sliders.map((item, id) => (
          <div
            className="relative w-full h-full px-2.5 md:px-0 cursor-auto"
            key={id}
          >
            <div className="relative overflow-hidden w-full h-[40vh] md:md:h-[55vh]">
              <Image
                fill
                title="background image"
                sizes="(min-width: 2060px) 2060px, (min-width: 1940px) 1940px, (min-width: 1220px) 1220px, (min-width: 1100px) 1100px, (min-width: 840px) 840px, (min-width: 760px) calc(33.33vw + 487px), (min-width: 660px) 640px, 280px"
                src={item.imgSrc}
                alt="background image"
                className="object-cover object-center md:px-0"
                quality={100}
              />
            </div>
            <div className="absolute flex flex-col items-start w-full gap-3 md:items-center left-7 md:left-0 md:w-full md:flex-row md:justify-around lg:justify-between lg:w-9/12 xl:w-3/5 bottom-10 md:bottom-16 xl:left-40">
              <h2 className="w-4/5 text-3xl font-bold tracking-wide capitalize md:leading-relaxed md:w-3/5 md:text-4xl xl:text-5xl font-Montserrat text-primary">
                {item.note}
              </h2>
              <SecondaryButton roleType={"button"} text={"Find out more"} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
