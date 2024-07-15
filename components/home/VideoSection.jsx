import Image from "next/image";
import { SecondaryButton } from "../Button";

const VideoSection = () => {
  return (
    <section className="w-full h-full py-[32px] overflow-hidden">
      <div className="z-20 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 w-full h-full bg-secondary p-[24px] ">
        <h1 className="text-lg font-semibold text-center md:text-xl font-Gilroy text-primary">
          Take a tour of OneUs’s global travel solutions
        </h1>
        <SecondaryButton text={"Explore our Travel Ecosystem"} />
      </div>
      <div className="relative w-full h-full">
        <video muted loop autoPlay className="w-full h-full -z-10" preload="auto">
          <source
            src="https://ik.imagekit.io/webibee/sapme_video%20(1).mp4?updatedAt=1720766756761"
            type="video/mp4"
          />
        </video>
        <div className="absolute z-10 w-full h-full text-xl font-bold tracking-wider text-center -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 top-1/2 left-1/2 sm:text-5xl xl:text-7xl font-Gilroy">
        <h4 className="flex items-center justify-center w-full h-full capitalize text-opacity-70 text-primary animate-pulse"> Arriving shortly ...</h4>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
