"use client";
import { testimonialList } from "@/libs/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute -bottom-14 md:top-16 right-20 md:-right-16 cursor-pointer"
      }
      onClick={onClick}
    >
      <FaCircleArrowRight className="text-3xl hover:text-success" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute -bottom-14 md:top-16 left-20 md:-left-16 cursor-pointer"
      }
      onClick={onClick}
    >
      <FaCircleArrowLeft className="text-3xl hover:text-success" />
    </div>
  );
}

export const Testimonial = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="w-full h-full px-[24px] py-7 flex flex-col justify-center items-center gap-10">
      <Image
        height={180}
        width={180}
        quality={100}
        alt="testimonial log"
        title="testimonial logo"
        src={"/testimonial.png"}
        className="object-cover object-center"
      />
      <h4 className="text-lg font-semibold tracking-wide text-center uppercase font-Montserrat md:text-xl text-secondary">
        Testimonial
      </h4>
      <div className="relative w-full h-full mb-10 slider-container md:w-3/5 lg:w-1/2 xl:w-2/5">
        <Slider {...settings}>
          {testimonialList.map((list, id) => (
            <div
              key={id}
              className="w-full mx-auto space-y-5 text-base leading-snug text-center text-secondary md:text-lg font-lato"
            >
              <p>{list.review}</p>
              <h4>- {list.name} -</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
