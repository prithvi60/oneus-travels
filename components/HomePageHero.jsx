"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export const HomePageHero = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
  }, []);

  // console.log(loader);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   // fade: true,
  //   loop: true,
  //   speed: 2000,
  //   autoplaySpeed: 4000,
  //   cssEase: "linear",
  //   appendDots: (dots) => <ul>{dots}</ul>,
  //   customPaging: (i) => <div className="slick__dots--custom"></div>,
  // };
  return (
    <section className="relative w-full h-full overflow-hidden slider-container">
      {/* <Slider {...settings}>
        {sliders.map((item, id) => (
          <div
            className="relative w-full h-full px-2.5 md:px-0 cursor-auto"
            key={id}
          >
            <div className="relative overflow-hidden w-full h-[40vh] md:md:h-[55vh]">
              <Image
                fill
                title="background image"
                sizes="(min-width: 2060px) 2060px, (min-width: 1940px) 1940px, (min-width: 1220px) 1220px, (min-width: 1100px) 1100px, (min-width: 840px) 840px, (min-width: 760px) calc(33.33vw + 487px), (min-width: 660px) 640px, 280px"
                src={item.imgSrc}
                alt="background image"
                className="object-cover object-center md:px-0"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCADFAqYDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBv/EABUQAQEAAAAAAAAAAAAAAAAAAAAR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOaAAAFAAAEBQFAAFABQQFAAFAAQBQAAAAAAAAAAAABFAQABFAQBUQAEAUQAEAVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRRHSCgIKAAAACigAoAKKCKCICgAoCCgAoCCgIKAgoggoCCijIoCCgMigIjSCIjSAiNIoiKAyKgCKKiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0KI7QUBBRRFAAAUUUAFRAUAFABREAUEFARRQQUBBQEFAQUBEaQEFARGkBBQGRRUZFAZFAZRpARFFGRUARQRAAAAAAAAAAAAAAAAAAAABQEUAAAABAAGgBqAACgIoAACqCiCigiiogCgiigigICgIoIAoCCgIKAgqAgoogoCIoCI0gIKgIKgIigiIoqso0gMioogqCCKIiAAAAAAAAAAAAAAAoAAAoCKKCCiCCgIKAoCtQAAAAABQUVUVEFFABUQBQAUAFBFAQBQQUBBQEFAQUBAAQUBAAQVAQVAQVAQVFERUBEaQGRUUQAEFQQAEQVEAAAAAAAAAUABQAUEUUEUEAFBBQEFAQBWoAAAAoKCooKCoCooigIKCiAAKAAqKAAIAACgIKgAAAAIAAioAigIACIooiKgIKgIiooiKgIAAioIACAAIKgACAAAoKAAKAgoACgAoIAAAKCCgMgK1AAFQBQFBUUFVBBVRRFAQVUBFABQAFRRAAAAFEAUQAAAABAAEVAAQABRAQBFQBABEVFERUBAAEVBAAQAABAAAAAURQAAUBBQAUAFEVAABRAFEAQBWoAAAAACiKoqoqIqoAqoIjQigogCqgIoigKgCiAKIAogCiAAAAIAAIIACAoIAICAIqCoiooIIAAIIAAAgIAAIAAAAAAKIAqoAqoAqoAoCCiAKAAADIA0AAFQUUQBQBVVARpWVEVUEFVAFVlRFEUFEAUQBVQBRAFEBFQQFEAVAAEAARRUEABAAQBBAEBQQQFQAAQRUBAAAAAAAAAAAAAVAFVAFEURRAFVlQUQBRAEVBGiiAKIAogCgKqqyoiqyoNCCI0IA0MqCqytBRARSoA0IUFEpQUQBRkBRAFEABAFQRRUEBUEBUEAQRRUEABBFQEAAAAAAAAAAAAAAAAAABUAURQAAUQEUQBRABUB0oggogKogCiAKqAKrKgqsqCqyoiqytBRAGisqC0SgKIAogClQEWlQBaVAFRAFEABBRUQBUQAKgAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAogCiAAAKIAogCiAKAKAAKggqoAqsqCqyoiiAKqAKIAogCiAKIAogCiAAICiAAgoCAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAooIgoAAAoAAAKAAAAAAAAAAgAACCAAgKAAIAKIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"
              />
            </div>
            <div className="absolute flex flex-col items-start w-full gap-3 md:items-center left-7 md:left-0 md:w-full md:flex-row md:justify-around lg:justify-between lg:w-9/12 xl:w-3/5 bottom-10 md:bottom-16 xl:left-40">
              <div className="block w-4/5 space-y-3 md:w-3/5 md:space-y-5">
                <h3 className="text-3xl font-bold tracking-wide capitalize md:leading-relaxed md:text-4xl xl:text-5xl font-WorkSans text-primary">
                  {item.shortNote}
                </h3>
                <h4 className="text-lg font-bold tracking-wide capitalize md:leading-relaxed md:text-xl xl:text-2xl font-WorkSans text-primary">
                  {item.note}
                </h4>
              </div>
              <SecondaryButton roleType={"button"} text={"Find out more"} />
            </div>
          </div>
        ))}
      </Slider> */}
      {/* <div className="absolute top-0 left-0 w-full h-[40vh] md:md:h-[55vh]"> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-7xl text-center capitalize text-primary sm:text-[100px] lg:text-[120px] xl:text-[160px] flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap font-Gilroy rounded-md py-2 px-3.5 z-10">
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
      <video
        muted
        loop
        autoPlay
        playsInline
        className={`h-[75vh] w-full object-cover translat-y-0 transition-all duration-700 ease-linear brightness-[0.55] -z-10`}
        // onLoadedData={() => setLoader(true)}
      >
        <source
          src={
            "https://ik.imagekit.io/webibee/sample_video.mp4?updatedAt=1718791322485"
          }
          // src="/sample_video.mp4"
          type="video/mp4"
        />
      </video>

      {/* </div> */}
    </section>
  );
};
