import Image from "next/image";
import { SecondaryButton } from "./Button";

export const HomeVideoTag = () => {
  return (
    <section className="w-full h-full py-[32px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 w-full h-full bg-[#8DB63D] p-[24px]">
        <h1 className="text-lg font-semibold text-center md:text-xl font-montserrat text-primary">
          Take a tour of CTM's global travel solutions
        </h1>
        <SecondaryButton
          roleType={"button"}
          text={"Explore our Travel Ecosystem"}
        />
      </div>
      {/* <video muted autoPlay controls className="w-full h-dvh" preload="auto">
        <source
          src="https://ik.imagekit.io/webibee/sample_video%20(1).mp4?updatedAt=1717496685038"
          type="video/mp4"
        />
      </video> */}
      <div className="relative w-full overflow-hidden shadow-md h-dvh">
        <Image fill alt="banner" title="banner" src={"/sample_1.jpg"} className="object-cover object-center"/>
      </div>
    </section>
  );
};
