import {
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
  } from "react-icons/fa6";
  import Link from "next/link";

export const FooterSection2 = () => {
  return (
    <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-3 place-content-evenly">
        <h3 className="flex items-center justify-center order-2 text-sm font-medium tracking-wide capitalize font-Lato text-secondary hover:text-success md:order-1">
          © 2024 Corporate Travel Management
        </h3>
        <div className="flex items-center order-1 text-sm font-medium tracking-wide capitalize justify-evenly font-Lato md:order-2">
          <Link
            href={"/privacy_policy"}
            className="underline text-secondary hover:text-success underline-offset-2"
          >
            Privacy policy
          </Link>
          <Link
            href={"/terms_condition"}
            className="underline text-secondary hover:text-success underline-offset-2 hover:decoration-success"
          >
            terms&condition
          </Link>
        </div>
        <div className="items-center justify-center order-3 hidden w-full gap-5 md:flex">
          <Link href={"/"}>
            <FaFacebookF className="p-2 text-3xl rounded-full cursor-pointer md:text-4xl bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
          <Link href={"/"}>
            <FaXTwitter className="p-2 text-3xl rounded-full cursor-pointer md:text-4xl bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
          <Link href={"/"}>
            <FaLinkedinIn className="p-2 text-3xl rounded-full cursor-pointer md:text-4xl bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
        </div>
      </div>
  )
}
