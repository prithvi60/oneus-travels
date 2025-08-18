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
import { MenuBtnCorporate, MenuBtnMember, OtherBtn, OutlineBtn } from "../Button";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function NavbarPage() {
  const path = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsOpen, setIsOpen] = useState(true);
  const [percent, setPercent] = useState(null);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollValue, setScrollValue] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  });
  const handleClick = (ref) => {
    setIsMenuOpen(false);
    router.push(`${ref}`);
  };

  const handleScroll = () => {
    const ele = document.body.clientHeight;
    const scrollPosition = window.scrollY;
    setScrollYValue(() => scrollPosition); // => scroll position
    let percentage = ((scrollPosition + window.innerHeight) / ele) * 100;
    setPercent(() => Math.trunc(percentage));
    // console.log(Math.trunc(percentage));
    const percent1 = Math.floor(ele * 0.05);
    const percent2 = Math.floor(ele * 0.25);
    const percent3 = Math.floor(ele * 0.60);
    const percent4 = Math.floor(ele * 0.85);
    setScrollValue({
      value1: percent1,
      value2: percent2,
      value3: percent3,
      value4: percent4,
    });
  };

  // Scroll based color change side effect
  // 96 + 36
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [percent]);

  return (
    <Navbar
      // position="static"
      isBlurred="false"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          ` ${scrollYValue <= scrollValue.value1
            ? "!bg-transparent shadow-none"
            : scrollYValue <= scrollValue.value2
              ? "bg-primary shadow-md"
              : scrollYValue <= scrollValue.value3 && path === "/"
                ? "bg-secondary shadow-md"
                : scrollYValue <= scrollValue.value4 && path === "/"
                  ? "bg-success shadow-md"
                  : "bg-primary shadow-md"
          } fixed left-0 py-4 transition-all duration-500 ease-linear`,
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
        {scrollYValue <= scrollValue.value1 ? (
          <div className="relative">
            {path === "/leisure" ? (
              <div className="relative w-20 h-12 md:h-14 md:w-32">
                <Image
                  onClick={() => router.push("/")}
                  fill
                  title="OneUs logo"
                  alt="Logo"
                  src={"/logos/travelsleisure.png"}
                  className="object-contain p-2 rounded-full cursor-pointer bg-primary"
                />
              </div>
            ) : path === "/visa-services" || path === "/contact" ? (
              <div className="relative w-20 h-12 md:h-14 md:w-32">
                <Image
                  onClick={() => router.push("/")}
                  fill
                  title="OneUs logo"
                  alt="Logo"
                  src={"/logos/travelsvisa.png"}
                  className="object-contain p-2 rounded-full cursor-pointer bg-primary"
                />
              </div>
            ) : (
              <div className="relative w-20 h-12 bg-white rounded-full shadow-xl md:h-14 md:w-32">
                <Image
                  onClick={() => router.push("/")}
                  fill
                  title="OneUs logo"
                  alt="Logo"
                  src={"/logos/travels.png"}
                  className="object-contain object-center p-2 cursor-pointer"
                />
              </div>
            )}
          </div>
        ) : (
          <motion.div
            className="relative"
            initial={{ x: -30, scale: 0.3, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "backInOut" }}
          >
            <div className="relative w-[52px] h-12 md:h-[64px] md:w-[66px]">
              <Image
                onClick={() => router.push("/")}
                fill
                title="OneUs logo"
                alt="Logo"
                src={"/logos/blueicon.png"}
                className="object-contain p-0.5 rounded-full cursor-pointer bg-primary"
              />
            </div>
          </motion.div>
        )}
      </NavbarBrand>

      {/* Desktop menu bar */}
      <NavbarContent
        className="hidden lg:flex ms-5 gap-1.5 lg:gap-5 font-Gilroy"
        justify="center"
      >
        <NavbarItem className="w-fit">
          <Link
            aria-label={`know more about OneUs`}
            title={"Home"}
            aria-current={`Home page`}
            href={"/"}
            className={`text-sm lg:text-lg xl:text-xl ${path === "/contact" ? "text-secondary" : scrollYValue <= scrollValue.value1
              ? "text-primary"
              : scrollYValue <= scrollValue.value2
                ? "text-secondary"
                : scrollYValue <= scrollValue.value3 && path === "/"
                  ? "text-primary"
                  : scrollYValue > scrollValue.value3 &&
                    scrollYValue <= scrollValue.value4 &&
                    path === "/"
                    ? "text-primary"
                    : "text-secondary"
              } hover:text-info py-10 scroll-smooth tracking-wider cursor-pointer font-semibold`}
          >
            Home
          </Link>
        </NavbarItem>
        {menuItems.slice(0, 2).map((item, id) => (
          <NavbarItem key={id} className="relative group">
            <div>
              <div
                className={`text-base ${path === "/contact" ? "text-secondary" : scrollYValue <= scrollValue.value1
                  ? "text-primary"
                  : scrollYValue <= scrollValue.value2
                    ? "text-secondary"
                    : scrollYValue <= scrollValue.value3 && path === "/"
                      ? "text-primary"
                      : scrollYValue > scrollValue.value3 &&
                        scrollYValue <= scrollValue.value4 &&
                        path === "/"
                        ? "text-primary"
                        : "text-secondary"
                  } group-hover:text-info py-10 cursor-default tracking-wider text-sm lg:text-lg xl:text-xl flex items-center lg:gap-2 transition-all ease-linear `}
                onClick={() => handleClick(item.ref)}
              >
                <h4
                  className={`${item.ref !== "" && "cursor-pointer"
                    } font-semibold capitalize`}
                >
                  {item.menuTitle}
                </h4>
                {item.subMenu && (
                  <MdOutlineKeyboardArrowDown
                    className={`${path === "/contact" ? "text-secondary" : scrollYValue <= scrollValue.value1
                      ? "text-primary"
                      : scrollYValue <= scrollValue.value2
                        ? "text-secondary"
                        : scrollYValue <= scrollValue.value3 && path === "/"
                          ? "text-primary"
                          : scrollYValue > scrollValue.value3 &&
                            scrollYValue <= scrollValue.value4 &&
                            path === "/"
                            ? "text-primary"
                            : "text-secondary"
                      } group-hover:text-info text-lg font-semibold group-hover:rotate-180 transition-all`}
                  />
                )}
              </div>
              {item.subMenu && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={`absolute hidden ${IsOpen === false ? "hidden" : "group-hover:block"
                    } group-hover:block top-[102px] left-0 bg-secondary/90 p-4 shadow-md rounded-xl font-Gilroy`}
                >
                  {item?.subMenu?.map((l, index) => (
                    <Link
                      title={l.listMenu}
                      className={`flex items-center gap-2 mb-2 text-primary text-sm cursor-pointer lg:text-lg w-full h-full font-normal z-10 hover:text-info`}
                      key={index}
                      href={l.subMenuRef}
                      onClick={() => setIsOpen(false)}
                    >
                      <h4 className="hover:underline hover:underline-offset-8">
                        {l.listMenu}
                      </h4>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </NavbarItem>
        ))}
        {menuItems.slice(2, menuItems.length).map((item, id) => (
          <NavbarItem key={id} className="relative group">
            <div>
              <div
                className={`text-base ${path === "/contact" ? "text-secondary" : scrollYValue <= scrollValue.value1
                  ? "text-primary"
                  : scrollYValue <= scrollValue.value2
                    ? "text-secondary"
                    : scrollYValue <= scrollValue.value3 && path === "/"
                      ? "text-primary"
                      : scrollYValue > scrollValue.value3 &&
                        scrollYValue <= scrollValue.value4 &&
                        path === "/"
                        ? "text-primary"
                        : "text-secondary"
                  } group-hover:text-info py-10 cursor-default tracking-wider text-sm lg:text-lg xl:text-xl flex items-center lg:gap-2 transition-all ease-linear `}
                onClick={() => handleClick(item.ref)}
              >
                <h4
                  className={`${item.ref !== "" && "cursor-pointer"
                    } font-semibold capitalize`}
                >
                  {item.menuTitle}
                </h4>
                {item.subMenu && (
                  <MdOutlineKeyboardArrowDown
                    className={`${path === "/contact" ? "text-secondary" : scrollYValue <= scrollValue.value1
                      ? "text-primary"
                      : scrollYValue <= scrollValue.value2
                        ? "text-secondary"
                        : scrollYValue <= scrollValue.value3 && path === "/"
                          ? "text-primary"
                          : scrollYValue > scrollValue.value3 &&
                            scrollYValue <= scrollValue.value4 &&
                            path === "/"
                            ? "text-primary"
                            : "text-secondary"
                      } group-hover:text-info text-lg font-semibold group-hover:rotate-180 transition-all`}
                  />
                )}
              </div>
              {item.subMenu && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={`absolute hidden ${IsOpen === false ? "hidden" : "group-hover:block"
                    } group-hover:block top-[102px] left-0 bg-secondary/90 p-4 shadow-md rounded-xl font-Gilroy`}
                >
                  {item?.subMenu?.map((l, index) => (
                    <Link
                      title={l.listMenu}
                      className={`flex items-center gap-2 mb-2 text-primary text-sm cursor-pointer lg:text-lg w-full h-full font-normal z-10 hover:text-info`}
                      key={index}
                      href={l.subMenuRef}
                      onClick={() => setIsOpen(false)}
                    >
                      <h4 className="hover:underline hover:underline-offset-8">
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
        <div className="hidden 2xl:block">
          <OtherBtn text={"Speak to a Travel Expert"} href={"/contact"} />
        </div>
        <Link href="/contact" className="hidden md:block 2xl:hidden">
          <OutlineBtn text={"Contact"} colorChange={path === "/contact" ? "text-secondary border-primary" : scrollYValue <= scrollValue.value1
            ? "text-primary hover:text-secondary border-primary"
            : scrollYValue <= scrollValue.value2
              ? "text-secondary border-primary"
              : scrollYValue <= scrollValue.value3 && path === "/"
                ? "text-primary border-success"
                : scrollYValue > scrollValue.value3 &&
                  scrollYValue <= scrollValue.value4 &&
                  path === "/"
                  ? "text-primary border-primary"
                  : "text-secondary border-success"
          } />
        </Link>
        <NavbarItem>
          <Link href="https://oneustravels.paxes.com/authenticate/log-in" title="Login">
            <MenuBtnCorporate text={"corporate"} roleType={"text"} font />
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
                className={`${path === item.menuTitle
                  ? "text-success"
                  : "text-secondary hover:text-success"
                  } w-full h-full text-base sm:text-lg lg:text-xl font-Gilroy font-semibold ${item.menuTitle === "Technology" &&
                  "underline underline-offset-1"
                  }`}
              >
                {item.menuTitle}
              </Link>
              {item.subMenu?.map((l, id) => (
                <div
                  key={id}
                  className="px-2 pb-1 !pt-0 font-Gilroy font-normal"
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
