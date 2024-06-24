import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const links = [
  { link: "Privacy policy", ref: "/privacy_policy" },
  { link: "terms&Condition", ref: "/terms_condition" },
  { link: "Return policy", ref: "/return_policy" },
  { link: "Travel policy", ref: "/travel_policy" },
];

export const FooterSection2 = () => {
  return (
    <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-3 place-content-evenly">
      <h3 className="flex items-center justify-center order-2 text-sm font-normal tracking-wide capitalize font-WorkSans text-secondary hover:text-success md:order-1">
        © 2024 Corporate Travel Management
      </h3>
      <div className="flex flex-wrap items-center order-1 gap-3 text-sm font-normal tracking-wide capitalize justify-evenly font-WorkSans md:order-2">
        {links.map((item, idx) => (
          <Link
            key={idx}
            title={item.link}
            href={item.ref}
            className="underline text-secondary hover:text-success underline-offset-2"
          >
            {item.link}
          </Link>
        ))}
      </div>
      <div className="items-center justify-center order-3 hidden w-full gap-5 md:flex">
        <Link href={"/"} title="facebook logo">
          <FaFacebookF className="p-2 text-3xl rounded-full cursor-pointer md:text-4xl bg-secondary text-primary hover:bg-success hover:animate-pulse" />
        </Link>
        <Link href={"/"} title="twitter logo">
          <FaXTwitter className="p-2 text-3xl rounded-full cursor-pointer md:text-4xl bg-secondary text-primary hover:bg-success hover:animate-pulse" />
        </Link>
        <Link href={"/"} title="linkedin logo">
          <FaLinkedinIn className="p-2 text-3xl rounded-full cursor-pointer md:text-4xl bg-secondary text-primary hover:bg-success hover:animate-pulse" />
        </Link>
      </div>
    </div>
  );
};
