import Image from "next/image"

export const TourHeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full h-[30vh] md:md:h-[40vh] mb-4 md:mb-8">
        <Image
          fill
          title="background image"
          sizes="calc(101.19vw - 36px)"
          src={"/bg_1.jpg"}
          alt="background image"
          className="object-cover object-center md:px-0"
          quality={100}
        />
      </div>
  )
}
