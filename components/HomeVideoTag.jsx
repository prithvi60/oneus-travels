import { SecondaryButton } from "./Button";

export const HomeVideoTag = () => {
  return (
    <section className="w-full h-full py-[24px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 w-full h-full bg-[#8DB63D] p-[24px]">
        <h4 className="text-lg font-semibold text-center md:text-xl font-montserrat text-primary">
          Take a tour of CTM's global travel solutions
        </h4>
        <SecondaryButton
          roleType={"button"}
          text={"Explore our Travel Ecosystem"}
        />
      </div>
      <video muted autoPlay controls className="w-full h-dvh" preload="auto">
        <source
          src="https://ik.imagekit.io/webibee/sample_video%20(1).mp4?updatedAt=1717496685038"
          type="video/mp4"
        />
      </video>
    </section>
  );
};
