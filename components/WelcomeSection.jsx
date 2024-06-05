import Link from "next/link";
import { PrimaryButton } from "./Button";

export const WelcomeSection = () => {
  return (
    <section className="w-full h-full px-[24px] py-7 space-y-4">
      <div className="w-full text-[32px] font-bold font-Montserrat md:text-[40px] lg:text-[42px] leading-tight pt-5">
        <h1>Welcome to CTM.</h1>
        <h1>We Do Global Business Travel, Differently.</h1>
      </div>
      <p className="text-base font-lato">
        Corporate Travel Management (CTM) is a global leader in business travel
        management services. We drive savings, efficiency, safety and
        sustainability to companies and their travelers in every corner of the
        world.
      </p>
      <p className="text-sm font-Lato">
        When you partner with CTM, you’ll enjoy the experience of global travel
        done differently – a uniquely designed global travel management program,
        built with you and for you, consistently and expertly delivered in every
        region you operate in. We design travel programs that drive strategic
        results for every part of your business and every member of your team,
        in every region you operate in.
      </p>
      <h4 className="text-base font-medium font-lato">
        That’s the CTM difference.
      </h4>
      <p className="text-sm font-lato">
        If you are looking for a tailored travel management solution, delivering
        customer service excellence, innovative travel technology and a
        demonstrable return on investment, you’re in the right place.
      </p>
      <div className="pt-5 w-max">
        <Link href={"/sample.pdf"} download={"sample_file.pdf"} type="file" target="_blank">
      <PrimaryButton
        roleType={"button"}
        text={"view our global capabilities"}
      />
        </Link>
      </div>
    </section>
  );
};
