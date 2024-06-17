import { clients } from "@/libs/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const OurClients = () => {
  return (
    <section className="w-full h-full px-[24px] py-7 space-y-5">
      <h1 className="text-lg font-semibold text-center capitalize md:text-3xl font-montserrat text-secondary">
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
