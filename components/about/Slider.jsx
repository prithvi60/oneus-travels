"use client";
import Image from "next/image";
import Slider from "react-slick";
import { timelines } from "@/libs/data";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute top-24 md:top-36 -right-4 lg:-right-20 cursor-pointer z-20"
      }
      onClick={onClick}
    >
      <FaCircleArrowRight className="text-2xl lg:text-3xl text-success hover:text-orange-500" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute top-24 md:top-36 -left-4 lg:-left-20 cursor-pointer z-20"
      }
      onClick={onClick}
    >
      <FaCircleArrowLeft className="text-2xl lg:text-3xl text-success hover:text-orange-500" />
    </div>
  );
}

function SimpleSlider() {
  // const [index, setIndex] = useState(0)
  // console.log(index);
  const settings = {
    infinite: false,
    loop: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // afterChange: (i) => (setIndex(i)),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto space-y-6 md:space-y-10 slider-container !gap-10 relative px-">
      <Slider {...settings}>
        {timelines.map((item, id) => (
          <div
            className="relative w-full px-2.5 cursor-auto h-[35vh] md:h-[45vh]"
            key={id}
          >
            <div className="relative overflow-hidden w-full h-[23vh] md:h-[33vh]">
              <Image
                fill
                sizes="calc(101.19vw - 36px)"
                src={item.imgSrc}
                alt="background image"
                className="object-cover object-center md:px-0"
                quality={100}
              />
              <div className="absolute w-full bottom-1 md:bottom-3 left-3 md:left-7">
                <h2 className="w-4/5 text-xs font-bold tracking-wide capitalize md:text-sm md:leading-relaxed md:w-3/5 font-Montserrat text-primary">
                  {"best time"}
                </h2>
                <h2 className="w-4/5 text-sm font-bold tracking-wide capitalize md:text-base md:leading-relaxed md:w-3/5 font-Montserrat text-primary">
                  {item.months}
                </h2>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto gap-2 pt-1 capitalize sm:gap-0 sm:items-center sm:justify-between sm:flex-row font-Lato">
              <div className="font-medium text-secondary">
                <h5 className="text-xs sm:text-sm">{item.location}</h5>
                <p className="text-[11px] sm:text-xs opacity-60">
                  {item.packages}+packages
                </p>
              </div>
              <div className="font-medium text-secondary">
                <h5 className="text-[11px] sm:text-xs text-left opacity-60">
                  starting from
                </h5>
                <p className="text-sm font-semibold text-left text-green-600 sm:text-base">
                  ₹ {item.cost}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
