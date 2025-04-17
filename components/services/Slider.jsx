"use client";
import Image from "next/image";
import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute top-28 md:top-36 -right-[22px] md:-right-6 xl:-right-11 cursor-pointer z-20"
      }
      onClick={onClick}
    >
      <FaCircleArrowRight className="text-2xl lg:text-3xl text-secondary hover:text-orange-500" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "absolute top-28 md:top-36 -left-[22px] md:-left-6 xl:-left-11 cursor-pointer z-20"
      }
      onClick={onClick}
    >
      <FaCircleArrowLeft className="text-2xl lg:text-3xl text-secondary hover:text-orange-500" />
    </div>
  );
}

function SimpleSlider({ lists }) {
  const path = usePathname();
  const settings = {
    infinite: false,
    loop: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
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
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto space-y-6 md:space-y-10 slider-container !gap-10 relative">
      {lists.length === 0 ? (
        <div className="block space-y-6 text-center py-3.5 md:py-7 text-secondary">
          <div className="relative w-24 h-24 mx-auto overflow-hidden">
            <Image
              fill
              title="background image"
              src={"/tourism.png"}
              alt="no package available"
              className="object-contain"
              quality={100}
            />
          </div>
          <h4 className="text-lg font-semibold tracking-wide font-Gilroy">
            No Packages Available
          </h4>
          <p className="text-base font-normal font-Poppins">
            Sorry, we currently have no tourist packages to display. Please
            check back later for new and exciting offers!
            <br />
            <br />
            Let me know if you'd like me to make any changes!
          </p>
        </div>
      ) : (
        <Slider {...settings} className="!py-2.5">
          {lists.map((item, id) => (
            <Link
              href={`${path}/${item.location.replace(/\s/g, "-")
              }`}
              title="location"
              className="relative w-full my-2.5 h-[35vh] md:h-[40vh] cursor-pointer shadow-lg rounded-md overflow-hidden group"
              key={id}
            >
              <div className="relative overflow-hidden w-full h-[20vh] md:h-[30vh]">
                <Image
                  fill
                  title="background image"
                  sizes="(min-width: 1940px) 201px, (min-width: 1040px) 169px, (min-width: 780px) 151px, (min-width: 660px) 168px, (min-width: 340px) 92px, calc(355vw - 1044px)"
                  src={item.img}
                  alt="background image"
                  className="object-cover object-center transition-all ease-linear md:px-0 group-hover:scale-105 duration-400"
                  quality={100}
                />
                <div className="absolute w-max bottom-3 left-1.5 bg-black/40 px-2.5 py-1 rounded-2xl">
                  <h3 className="text-xs font-bold tracking-wide capitalize md:text-sm md:leading-relaxed font-Gilroy text-primary">
                    {"Best Time"}
                  </h3>
                  <h3 className="text-sm font-bold tracking-wide capitalize md:text-base md:leading-relaxed font-Gilroy text-primary">
                    {item.bestTime}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col w-full h-auto gap-2 px-2.5 pt-3.5 capitalize sm:gap-0 sm:items-center sm:justify-between sm:flex-row font-Poppins">
                <div className="font-medium text-secondary ">
                  <h5 className="text-[11px] sm:text-xs text-left opacity-60">
                    Place
                  </h5>
                  <h5 className="text-xs tracking-wide sm:text-sm line-clamp-1">
                    {item.location}
                  </h5>
                  {/* <p className="text-[11px] sm:text-xs opacity-60 font-Poppins">
                  {item.packages}+packages
                </p> */}
                </div>
                <div className="font-medium text-secondary font-Poppins">
                  <h5 className="text-[11px] sm:text-xs text-left opacity-60">
                    starting from
                  </h5>
                  <p className="text-sm font-semibold tracking-wider text-left text-green-600 sm:text-base">
                    {item.startingPrice}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </section>
  );
}

export default SimpleSlider;
