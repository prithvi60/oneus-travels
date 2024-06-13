import Image from "next/image";

export const OtherHero = ({imgSrc}) => {
  return (
    <section>
      <div className="relative overflow-hidden w-full h-[40vh] md:md:h-[55vh] mb-4 md:mb-8">
        <Image
          fill
          sizes="calc(101.19vw - 36px)"
          src={imgSrc}
          alt="background image"
          className="object-cover object-center md:px-0"
          quality={100}
        />
      </div>
    </section>
  );
};
