"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { JsonLdComponents } from "../JsonLdComponents";

export const HomePageHero = () => {
  const [blur, setBlur] = useState(true);
  const loadingImage = useRef();

  useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener("load", () => {
      setBlur(false);
    });
  }, []);
  return (
    <section className="relative w-full h-full overflow-hidden slider-container">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-7xl text-center capitalize text-primary sm:text-[100px] lg:text-[120px] xl:text-[160px] flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-Gilroy font-bold rounded-md py-2 px-3.5 z-10">
        <h4>oneUs</h4>
        <h4>travels</h4>
      </div>

      <div className="absolute block -translate-x-1/2 rounded-md bottom-0.5 left-1/2 z-10">
        <h4 className="w-full h-full text-lg font-normal text-center capitalize text-primary md:text-xl font-Poppins">
          we are certified by
        </h4>
        <div className="relative w-full h-20 md:h-28">
          <Image
            fill
            priority
            title="background image"
            sizes="(min-width: 2060px) 2060px, (min-width: 1940px) 1940px, (min-width: 1220px) 1220px, (min-width: 1100px) 1100px, (min-width: 840px) 840px, (min-width: 760px) calc(33.33vw + 487px), (min-width: 660px) 640px, 280px"
            src={"/IATA-logo-2.svg"}
            alt="background image"
            className="object-contain md:px-0"
            quality={100}
          />
        </div>
      </div>
      {blur === true && (
        <div className="absolute top-0 left-0 z-0 w-full h-[90vh]">
          <Image
            priority
            loading={"eager"}
            alt="bg image"
            src={"/sample_image.png"}
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            className="blur-sm"
          />
        </div>
      )}
      <video
        muted
        loop
        autoPlay
        playsInline
        ref={loadingImage}
        className={`h-[90vh] w-full object-cover object-top translate-y-0 transition-all duration-700 ease-linear brightness-[0.55] -z-10`}
      >
        <source
          src={
            "https://ik.imagekit.io/webibee/oneus-sample.mp4?updatedAt=1722576543757"
          }
          type="video/mp4"
        />
      </video>

      {/* <JsonLdComponents /> */}
    </section>
  );
};
