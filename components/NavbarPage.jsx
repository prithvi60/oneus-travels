"use client";
import { menuItems, menuItemsMobile } from "@/libs/data";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { MenuBtnCorporate, MenuBtnMember } from "./Button";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function NavbarPage() {
  const path = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsOpen, setIsOpen] = useState(true);
  const [percent, setPercent] = useState(null);

  const handleClick = (ref) => {
    setIsMenuOpen(false);
    router.push(`${ref}`);
  };

  const handleScroll = () => {
    const ele = document.body;
    const scrollPosition = window.scrollY; // => scroll position
    let percentage =
      ((scrollPosition + window.innerHeight) / ele.clientHeight) * 100;
    setPercent(Math.trunc(percentage));
    // console.log(Math.trunc(percentage));
  };

  // Scroll based color change side effect

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [percent]);

  // console.log(isMenuOpen);

  return (
    <Navbar
      // position="static"
      isBlurred="false"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          `${
            percent >= 0 && percent <= 18
              ? "!bg-transparent shadow-none"
              : percent >= 35 && percent <= 74
              ? "bg-success shadow-md"
              : percent >= 75 && percent <= 95
              ? "bg-info shadow-md"
              : "bg-primary shadow-md"
          } fixed top-0 left-0 py-4 transition-all duration-500 ease-linear`,
        ],
        wrapper: ["gap-2 lg:gap-4"],
        item: [`data-[active=true]: !text-success`],
        menuItem: ["data-[active=true]: !text-success pt-2"],
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          },
          exit: {
            y: -500,
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          },
        },
      }}
    >
      <NavbarBrand className="space-x-3 grow-0">
        {percent >= 0 && percent <= 18 ? (
          <div className="relative">
            <div className="absolute block w-9 h-9 border-[6px] -z-10 -top-3 left-1/2 -translate-x-1/2 border-success rounded-full"></div>
            <div className="relative w-20 h-12 md:h-16 md:w-36 clip-custom">
              <Image
                onClick={() => router.push("/")}
                // width={130}
                // height={130}
                fill
                title="OneUs logo image"
                alt="Logo"
                src={"/Oneus_Logo_2.png"}
                className="object-contain object-center transition-transform duration-1000 ease-linear border-4 cursor-pointer bg-primary border-success"
              />
            </div>
            {/* <div className="absolute w-6 h-6 right-2 -z-10 -bottom-3">
              <Image
                fill
                title="wheel svg"
                src={"/wheel_2.svg"}
                alt="wheel svg"
                className="rounded-full bg-success/90"
              />
            </div> */}
          </div>
        ) : (
          <motion.div
            className="relative"
            initial={{ x: -30, scale: 0.3, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "backInOut" }}
          >
            <div className="absolute block w-9 h-9 border-[6px] -z-10 -top-3 left-1/2 -translate-x-1/2 border-secondary/85 rounded-full"></div>
            <div className="relative w-20 h-12 md:h-16 md:w-36 clip-custom">
              <Image
                onClick={() => router.push("/")}
                // width={130}
                // height={130}
                fill
                title="OneUs logo image"
                alt="Logo"
                src={"/Oneus_Logo_1.svg"}
                className="object-contain object-center transition-transform duration-500 ease-linear border-4 cursor-pointer rounded-xl bg-primary border-secondary/85"
              />
            </div>
          </motion.div>
        )}
      </NavbarBrand>

      {/* Desktop menu bar */}
      <NavbarContent
        className="hidden lg_2:flex gap-1.5 lg:gap-5 font-WorkSans"
        justify="center"
      >
        <NavbarItem>
          <Link
            aria-label={`know more about Technology`}
            title={"Technology"}
            aria-current={`Technology page`}
            href={"/technology"}
            className={`text-sm lg:text-lg xl:text-xl ${
              percent >= 0 && percent <= 18
                ? "text-primary hover:text-info"
                : percent >= 35 && percent <= 95
                ? "text-primary hover:text-secondary"
                : "text-secondary hover:text-info"
            } py-10 scroll-smooth tracking-wider cursor-pointer font-semibold`}
          >
            Technology
          </Link>
        </NavbarItem>
        {menuItems.map((item, id) => (
          <NavbarItem key={id} className="relative group">
            <div>
              <div
                className={`text-base ${
                  percent >= 0 && percent <= 18
                    ? "text-primary group-hover:text-info"
                    : percent >= 35 && percent <= 95
                    ? "text-primary group-hover:text-secondary"
                    : "text-secondary group-hover:text-info"
                } py-10 cursor-default tracking-wider text-sm lg:text-lg xl:text-xl flex items-center lg:gap-2 transition-all ease-linear `}
                onClick={() => handleClick(item.ref)}
              >
                <h4
                  className={`${
                    item.ref !== "" && "cursor-pointer"
                  } font-semibold capitalize`}
                >
                  {item.menuTitle}
                </h4>
                <MdOutlineKeyboardArrowDown
                  className={`${
                    percent >= 0 && percent <= 18
                      ? "text-primary group-hover:text-info"
                      : percent >= 35 && percent <= 95
                      ? "text-primary group-hover:text-secondary"
                      : "text-secondary group-hover:text-info"
                  } text-lg font-semibold group-hover:rotate-180 transition-all`}
                />
              </div>
              {item.subMenu && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={`absolute hidden ${
                    IsOpen === false ? "hidden" : "group-hover:block"
                  } group-hover:block top-[102px] left-0 bg-primary p-4 shadow-md rounded-xl font-WorkSans group-hover:border-4 border-secondary`}
                  // first:pt-14 last:pb-14 outline-4 outline-dashed outline-secondary
                >
                  <div className="absolute hidden w-12 h-12 border-8 -z-10 -top-7 left-5 border-secondary rounded-xl group-hover:block"></div>
                  {item?.subMenu?.map((l, index) => (
                    <Link
                      // title={l.listMenu}
                      className={`flex items-center gap-2 mb-2 text-secondary text-sm cursor-pointer lg:text-lg hover:text-info w-full h-full font-normal z-10`}
                      key={index}
                      href={l.subMenuRef}
                      onClick={() => setIsOpen(false)}
                    >
                      <GiCommercialAirplane className="text-lg lg:text-xl text-secondary" />
                      <h4 className="underline underline-offset-8">
                        {l.listMenu}
                      </h4>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Login button For employee and client */}

      <NavbarContent className="!justify-end space-x-1 md:mt-0 md:space-x-4 gap-0 md:gap-1">
        <NavbarItem>
          <Link
            href="/"
            title="Login"
            // className="flex flex-col lg:flex-row items-center justify-center lg:gap-2.5"
          >
            <MenuBtnMember
              text={"member"}
              roleType={"text"}
              percent={percent}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/"
            title="Login"
            // className="flex flex-col lg:flex-row items-center justify-center lg:gap-2.5"
          >
            <MenuBtnCorporate
              text={"corporate"}
              roleType={"text"}
              percent={percent}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Toggle button */}

      <NavbarContent className="lg_2:!hidden !flex-grow-0" justify="end">
        <NavbarMenuToggle
          // onChange={(isMenuToggle) => setIsMenuToggle(!isMenuToggle)}
          className="!h-auto px-2 py-5 rounded-full bg-primary w-max"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile view menubar */}

      <NavbarMenu
        className="items-start !columns-2 gap-20 py-0 !z-[1000] top-0"
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            },
            exit: {
              x: 1000,
              transition: {
                duration: 0.4,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <h4
          onClick={() => setIsMenuOpen(false)}
          className="absolute p-2 text-xl border-2 rounded-full shadow-lg cursor-pointer right-5 top-6 border-secondary"
        >
          <AiOutlineClose className="text-red-500" />
        </h4>
        <div className="w-full h-[400px] grid grid-cols-2 gap-y-9 gap-x-6 pt-16">
          {/* className="w-full h-[400px] columns-2 gap-4" */}
          {menuItemsMobile.map((item, index) => (
            <NavbarMenuItem
              key={index}
              className="aspect-auto break-inside-avoid-column"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                aria-label={`know more about ${item.menuTitle}`}
                title={item.menuTitle}
                aria-current={`${item.menuTitle} page`}
                href={item.ref}
                className={`${
                  path === item.menuTitle
                    ? "text-success"
                    : "text-secondary hover:text-success"
                } w-full h-full text-base sm:text-lg lg:text-xl font-WorkSans font-semibold ${
                  item.menuTitle === "Technology" &&
                  "underline underline-offset-1"
                }`}
              >
                {item.menuTitle}
              </Link>
              {item.subMenu?.map((l, id) => (
                <div
                  key={id}
                  className="px-2 pb-1 !pt-0 font-WorkSans font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    aria-label={`know more about ${l.list}`}
                    title={l.list}
                    aria-current={`${l.list} page`}
                    href={`${item.ref}${l.subMenuRef}`}
                    className={`w-full h-full text-sm sm:text-base lg:text-lg hover:text-info`}
                  >
                    <h4>{l.list}</h4>
                  </Link>
                </div>
              ))}
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex items-center order-3 w-full gap-5 pt-5">
          <Link
            href={"/"}
            title="facebook logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaFacebookF className="p-2 text-3xl rounded-full cursor-pointer bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
          <Link
            href={"/"}
            title="twitter logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaXTwitter className="p-2 text-3xl rounded-full cursor-pointer bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
          <Link
            href={"/"}
            title="linkedin logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaLinkedinIn className="p-2 text-3xl rounded-full cursor-pointer bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
