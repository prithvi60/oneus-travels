import Image from "next/image";

export const OtherHero = ({imgSrc}) => {
  return (
    <section>
      <div className="relative overflow-hidden w-full h-[40vh] md:md:h-[55vh]">
        <Image
          fill
          sizes="100vw"
          src={imgSrc}
          alt="background image"
          className="object-cover object-center md:px-0"
          quality={100}
          title="background image"
        />
      </div>
    </section>
  );
};
