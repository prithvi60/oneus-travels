import Link from "next/link";
import { PrimaryButton } from "../Button";

export const WelcomeSection = () => {
  return (
    <section className="w-full h-auto space-y-4 padding">
      <h1 className="w-full text-[32px] font-Gilroy md:text-[40px] lg:text-[42px] font-bold leading-tight text-secondary pt-5">
        Welcome to OneUs Travels, <br /> your go-to partner for business travels worldwide
      </h1>
      <p className="text-xl font-semibold font-Poppins">
        We make travel smarter and more efficient, with a focus on saving you time, money, and effort. Whether you're managing corporate travel or exploring the world for business, OneUs has you covered with tailored travel solutions that keep your safety and sustainability front and center.
      </p>
      <p className="text-base font-normal font-Poppins">
        At OneUs, we're not just a travel management company—we're your strategic partner. With us, you experience business travels like never before. Our customized travel programs are designed with you in mind, ensuring smooth and expert service wherever your business takes you.
      </p>
      <p className="text-base font-normal font-Poppins">
        When you choose OneUs Travels, you’re choosing a different kind of travel experience—crafted to fit your business needs in every region you work in. We design travel programs that deliver strategic value to your business and convenience to every team member.
      </p>
      <p className="text-base font-normal font-Poppins">
        Transform your business travels with OneUs! Let us be your guide to smarter, more effective travel. <Link href="#contact" className="underline">Plan your travel with us</Link> and discover how our custom travel management solutions can make your journey seamless.
      </p>
      <h3 className="text-lg font-semibold font-Poppins">
        Travel Management, Powered by OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins">
        Whether you’re a multinational corporation or a growing enterprise, OneUs Travels has the expertise and resources to enhance your business travel experience. We are committed to designing simple, safe, and sustainable travel solutions that deliver measurable results, consistently exceeding your expectations and making a meaningful impact for you and your community.
      </p>
      <p className="text-base font-normal font-Poppins">
        At OneUs Travels, we take a tailored and collaborative approach to crafting your international travel experience. We ensure our strategy aligns with your company's unique objectives, challenges, and opportunities.
      </p>
      <p className="text-base font-normal font-Poppins">
        When you partner with us, we identify and implement the ideal solutions for your business and team across all markets you operate in, seamlessly integrating them into a cohesive program. With our <Link href="/technology" className="underline">advanced technology platform</Link> and dedicated global travel team, OneUs Travels ensures your customized global travel program is easily accessible and fully supported, making us the perfect fit for your needs.
      </p>
      <h3 className="text-lg font-semibold font-Poppins">
        This is the <Link href="/booking-tc" className="underline">OneUs Promise.</Link>
      </h3>
      <div className="pt-5 w-max">
        <Link
          // href={"/sample.pdf"}
          // title="brochure"
          // download={"OneUsTravels.pdf"}
          // type="file"
          // target="_blank"
          href={"/about/our-vision"}
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
