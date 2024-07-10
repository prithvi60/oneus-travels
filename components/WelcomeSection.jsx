import Link from "next/link";
import { PrimaryButton } from "./Button";

export const WelcomeSection = () => {
  return (
    <section className="w-full h-auto space-y-4 padding">
      <h1 className="w-full text-[32px] font-Gilroy md:text-[40px] lg:text-[42px] font-bold leading-tight text-secondary pt-5">
        Welcome to Oneus Travels <br /> Your Global Travel Companion
      </h1>
      <p className="text-lg font-normal font-Gilroy">
        OneUs is a leading provider of business travel management solutions
        worldwide. We enable businesses and tourists with maximum savings,
        effectiveness, safety, and sustainability all across the globe. At
        OneUs, we are more than just a travel management company; we are your
        strategic partner in navigating the world of corporate travel.
      </p>
      <p className="text-base font-normal font-Gilroy">
        With OneUs by your side, you’ll discover a whole new global travel
        experience. Our uniquely tailored travel management programs are crafted
        with you and just for you, guaranteeing consistent and expert service
        across every region you operate.
      </p>
      <p className="text-base font-normal font-Gilroy">
        When you partner with CTM, you’ll enjoy the experience of global travel
        done differently – a uniquely designed global travel management program,
        built with you and for you, consistently and expertly delivered in every
        region you operate in. We design travel programs that drive strategic
        results for every part of your business and every member of your team,
        in every region you operate in.
      </p>
      <p className="text-base font-normal font-Gilroy">
        Contact us to learn more about our tailored travel management solutions
        and unlock a world of possibilities with OneUs Travels.
      </p>
      <h3 className="text-lg font-semibold font-Gilroy">
        Travel Management, Fueled by One Travel Team
      </h3>
      <p className="text-base font-normal font-Gilroy">
        Whether you're a multinational corporation or a growing enterprise, we
        have the expertise and resources to elevate your business travel
        experience. Our commitment to designing the simplest, safest and
        sustainable solutions that deliver measurable results remains
        unwavering, ensuring that we consistently exceed your expectations and
        drive meaningful impact for you and your community.
      </p>
      <p className="text-base font-normal font-Gilroy">
        At Oneus Travels, we adopt a tailored and collaborative approach to
        crafting your international travel experience, ensuring a strategy that
        aligns with your company's distinct objectives, challenges, and
        opportunities.
      </p>
      <p className="text-base font-normal font-Gilroy">
        When we partner with your team, we identify and implement the ideal
        solutions for your business and people across all the markets you
        operate in, seamlessly integrating them into a unified program. With our
        advanced technology platform and dedicated global travel team, OneUs
        Travels ensures your custom global travel program is easily accessible
        and seamlessly supported, making us the perfect fit for your needs.
      </p>
      <h3 className="text-lg font-semibold font-Gilroy">
        This is the OneUs Promise.
      </h3>
      <div className="pt-5 w-max">
        <Link
          href={"/sample.pdf"}
          title="brochure"
          download={"sample_file.pdf"}
          type="file"
          target="_blank"
        >
          <PrimaryButton
            roleType={"button"}
            text={"view our global capabilities"}
          />
        </Link>
      </div>
    </section>
  );
};
