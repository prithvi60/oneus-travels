import { clients } from "@/libs/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const OurClients = () => {
  return (
    <section className="w-full h-full space-y-5 padding">
      <h1 className="w-full font-Gilroy font-bold text-[32px] md:text-[40px] lg:text-[42px] text-secondary leading-tight pt-5 capitalize">
        Some of our precious clients
      </h1>
      <div className="w-full h-full py-10">
        <Marquee autoFill pauseOnHover gradient gradientWidth={60}>
          {clients.map((item, idx) => (
            <div key={idx} className="h-full px-5 overflow-hidden">
              {/* <div className="relative w-24 h-16 transition-all ease-linear cursor-pointer hover:scale-110 duration-400 "> */}
              <Image
                width={110}
                height={75}
                alt="client logo"
                src={item}
                style={{ width: "auto", height: "auto" }}
                title="client logo"
                className="transition-all ease-linear cursor-pointer hover:scale-110 duration-400 "
              />
              {/* </div> */}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
