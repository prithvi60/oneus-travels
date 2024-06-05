import { clients } from "@/libs/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const OurClients = () => {
  return (
    <section className="w-full h-full p-[24px] space-y-5">
      <h4 className="text-lg font-semibold text-center capitalize md:text-3xl font-montserrat text-secondary">
        Some of our precious clients
      </h4>
      <div className="w-full h-full py-10">
        <Marquee autoFill pauseOnHover gradient gradientWidth={120}>
          {clients.map((item, idx) => (
            <div key={idx} className="h-full px-5 overflow-hidden">
              
              {/* <div className="relative w-24 h-16 transition-all ease-linear cursor-pointer hover:scale-110 duration-400 "> */}
                <Image
                  width={110}
                  height={75}
                  alt="client logo"
                  src={item}
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
