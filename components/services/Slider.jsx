"use client";
import Image from "next/image";
import Slider from "react-slick";
import { timelines } from "@/libs/data";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const path = usePathname();
  const settings = {
    infinite: false,
    loop: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
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
      <Slider {...settings}>
        {timelines.map((item, id) => (
          <Link
            href={`${path}/${item.location}`}
            title="location"
            className="relative w-full px-2.5 h-[35vh] md:h-[45vh] cursor-pointer"
            key={id}
          >
            <div className="relative overflow-hidden w-full h-[23vh] md:h-[33vh]">
              <Image
                fill
                title="background image"
                sizes="(min-width: 1940px) 201px, (min-width: 1040px) 169px, (min-width: 780px) 151px, (min-width: 660px) 168px, (min-width: 340px) 92px, calc(355vw - 1044px)"
                src={item.imgSrc}
                alt="background image"
                className="object-cover object-center md:px-0"
                quality={100}
              />
              <div className="absolute w-full bottom-1 md:bottom-3 left-3 md:left-7">
                <h3 className="w-4/5 text-xs font-bold tracking-wide capitalize md:text-sm md:leading-relaxed md:w-3/5 font-WorkSans text-primary">
                  {"best time"}
                </h3>
                <h3 className="w-4/5 text-sm font-bold tracking-wide capitalize md:text-base md:leading-relaxed md:w-3/5 font-WorkSans text-primary">
                  {item.months}
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto gap-2 pt-1 capitalize sm:gap-0 sm:items-center sm:justify-between sm:flex-row font-WorkSans">
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
          </Link>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
