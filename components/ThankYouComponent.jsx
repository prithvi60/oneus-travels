import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./Button";

export const ThankYouComponent = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-Poppins space-y-6">
      <h3 className="text-3xl font-semibold text-center md:text-6xl font-Poppins text-success">
        <div className="relative mx-auto h-14 w-14 md:h-28 md:w-28 text-warning">
          <Image
            src={"/thumbs-up.gif"}
            fill
            title="thumbs up"
            alt="thumbs up"
            className="object-contain -mt-2"
          />
        </div>
        Thank You !
      </h3>
      <p className="w-full text-lg text-center md:text-2xl text-success">
        We&apos;ve received your submission.
      </p>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-5">
        <Link
          scroll={false}
          href={"/"}
          // className={`block rounded-full px-6 py-3 bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
        >
          <PrimaryButton roleType={"button"} text={"back to home"} />
        </Link>
      </div>
    </section>
  );
};
