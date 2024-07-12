import Image from "next/image";
import { SecondaryButton } from "./Button";

const VideoSection = () => {
  return (
    <section className="w-full h-full py-[32px]">
      <div className="z-20 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 w-full h-full bg-secondary p-[24px]">
        <h1 className="text-lg font-semibold text-center md:text-xl font-Gilroy text-primary">
          Take a tour of OneUs’s global travel solutions
        </h1>
        <SecondaryButton text={"Explore our Travel Ecosystem"} />
      </div>
      <video muted autoPlay className="w-full h-full" preload="auto">
        <source
          src="https://ik.imagekit.io/webibee/sapme_video%20(1).mp4?updatedAt=1720766756761"
          type="video/mp4"
        />
      </video>
      {/* <div className="relative w-full overflow-hidden shadow-md h-dvh">
        <Image
          fill
          alt="banner"
          title="banner"
          src={"/sample_1.jpg"}
          className="object-cover object-center"
        />
      </div> */}
    </section>
  );
};

export default VideoSection;
