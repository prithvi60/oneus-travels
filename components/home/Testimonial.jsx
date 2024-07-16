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
    <section className="flex flex-col items-center justify-center w-full h-full gap-10 padding !py-8">
      <h3 className="w-full text-[32px] font-bold font-Gilroy md:text-[40px] lg:text-[42px] text-center text-secondary leading-tight">
        Testimonial
      </h3>
      <div className="relative w-full h-full mb-10 slider-container md:w-3/5">
        <Slider {...settings}>
          {testimonialList.map((list, id) => (
            <div
              key={id}
              className="w-full mx-auto space-y-5 text-base font-normal leading-snug text-center text-secondary md:text-lg font-Poppins"
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
