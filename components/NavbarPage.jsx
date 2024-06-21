"use client";
import { menuItems, menuItemsMobile, subCategories } from "@/libs/data";
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
import { IoPersonOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  // DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function NavbarPage() {
  const path = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isOpenState, setIsOpenState] = useState(false);
  const [percent, setPercent] = useState(null);
  // const [isActivated, setIsActivated] = useState(null);
  const [subMenuBar, setSubMenuBar] = useState(menuItems[0].menuTitle);
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

  // console.log(isOpenState);

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
          } fixed top-0 left-0 py-4 transition-all duration-500 ease-linear gap-2 lg:gap-4`,
        ],
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
          <div className="relative w-28 h-14 md:w-24 md:h-10 lg:h-16 lg:w-36">
            <Image
              onClick={() => router.push("/")}
              // width={130}
              // height={130}
              fill
              title="OneUs logo image"
              alt="Logo"
              src={"/Oneus_Logo_2.png"}
              className="object-contain object-center px-2.5 rounded-full cursor-pointer bg-primary transition-transform duration-1000 ease-linear"
            />
          </div>
        ) : (
          <div className="relative w-28 h-14 md:w-24 md:h-10 lg:h-16 lg:w-36">
            <Image
              onClick={() => router.push("/")}
              // width={130}
              // height={130}
              fill
              title="OneUs logo image"
              alt="Logo"
              src={"/Oneus_Logo_1.png"}
              className="object-contain object-center px-2.5 rounded-full cursor-pointer bg-primary transition-transform duration-1000 ease-linear"
            />
          </div>
        )}
      </NavbarBrand>

      {/* Other menu bar */}
      <NavbarContent
        className="hidden gap-2 lg:gap-4 xl:gap-10 md:flex font-Lato"
        justify="start"
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <NavbarItem>
          <Link
            aria-label={`know more about Technology`}
            title={"Technology"}
            aria-current={`Technology page`}
            href={"/technology"}
            className={`text-base lg:text-lg xl:text-xl ${
              percent >= 0 && percent <= 18
                ? "text-primary hover:text-primary/50"
                : percent >= 35 && percent <= 95
                ? "text-primary hover:text-secondary"
                : "text-secondary hover:text-success"
            } py-10 scroll-smooth tracking-wider cursor-pointer`}
            // onMouseEnter={() => setSubMenuBar("Technology")}
          >
            Technology
          </Link>
        </NavbarItem>
        {menuItems.map((list, id) => (
          <NavbarItem
            key={id}
            isActive={path === list.menuTitle}
            onClick={() => handleClick(item.ref)}
          >
            {/* <div
              className={`text-base ${
                percent >= 0 && percent <= 18
                  ? "text-primary hover:text-primary/50"
                  : percent >= 35 && percent <= 95
                  ? "text-primary hover:text-secondary"
                  : "text-secondary hover:text-success"
              } py-10 cursor-default ${
                item.ref !== "" && "cursor-pointer"
              } scroll-smooth tracking-wider text-base lg:text-lg xl:text-xl flex items-center gap-2 group`}
              onMouseEnter={() => setSubMenuBar(item.menuTitle)}
            >
              <h4>{item.menuTitle}</h4>
              <MdOutlineKeyboardArrowDown
                className={`${
                  percent >= 0 && percent <= 18
                    ? "text-primary group-hover:text-primary/50"
                    : percent >= 35 && percent <= 95
                    ? "text-primary group-hover:text-secondary"
                    : "text-secondary group-hover:text-success"
                } text-lg transition-all duration-400 ease-linear ${
                  isOpen === true && "rotate-180"
                }`}
              />
            </div> */}
            <Dropdown
              // isOpen={isOpenState}
              // onOpenChange={(isOpen) => setIsOpenState(isOpen)}
            >
              <DropdownTrigger>
                <div
                  className={`text-base ${
                    percent >= 0 && percent <= 18
                      ? "text-primary hover:text-primary/50"
                      : percent >= 35 && percent <= 95
                      ? "text-primary hover:text-secondary"
                      : "text-secondary hover:text-success"
                  } py-10 cursor-default ${
                    list.ref !== "" && "cursor-pointer"
                  } scroll-smooth tracking-wider text-base lg:text-lg xl:text-xl flex items-center lg:gap-2 group`}
                  // onMouseEnter={() => setSubMenuBar(list.menuTitle)}
                >
                  <h4 className="capitalize">{list.menuTitle}</h4>
                  <MdOutlineKeyboardArrowDown
                    className={`${
                      percent >= 0 && percent <= 18
                        ? "text-primary group-hover:text-primary/50"
                        : percent >= 35 && percent <= 95
                        ? "text-primary group-hover:text-secondary"
                        : "text-secondary group-hover:text-success"
                    } text-lg transition-all duration-400 ease-linear `}
                    // ${
                    //   isOpen === true && "rotate-180"
                    // }
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={list.subMenu}>
                {(item) => (
                  <DropdownItem
                    key={item.listMenu}
                    color={item.listMenu === "delete" ? "danger" : "default"}
                    className={item.listMenu === "delete" ? "text-danger" : ""}
                  >
                    <Link href={`${list.menuTitle}/${item.subMenuRef}`}>
                      {item.listMenu}
                    </Link>
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ))}

        {/* {isOpen && (
          <ul
            className={`absolute flex top-20 left-0 w-full ${
              percent >= 0 && percent <= 18 && "bg-transparent shadow-none"
            } h-[30vh] bg-primary shadow-md pt-2 pb-6 justify-center items-start`}
          >
            {val?.map((l, index) => (
              <li
                // initial={{ opacity: 0, y: -500 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, ease: "easeIn" }}
                key={index}
                className={`text-secondary ${
                  l.menuTitle === "Services"
                    ? "first:-ms-[130px] lg:first:-ms-[135px]"
                    : l.menuTitle === "About"
                    ? "first:ms-3 lg:first:ms-18"
                    : l.menuTitle === "Resources"
                    ? "first:ms-[156px] lg:first:ms-64"
                    : l.menuTitle === "Contact"
                    ? "first:ms-[352px] lg:first:ms-[530px]"
                    : ""
                } ${
                  percent >= 0 &&
                  percent <= 15 &&
                  "bg-primary px-5 py-3 shadow-md rounded-md"
                }`}
              >
                {l.lists.map((sub, idx) => (
                  <Link
                    title={sub.list}
                    className="block pb-2 text-base cursor-pointer lg:text-lg hover:text-info"
                    key={idx}
                    href={sub.subMenu}
                    onClick={() => setIsOpen(false)}
                  >
                    {sub.list}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        )} */}
      </NavbarContent>

      {/* Login button For employee and client */}

      <NavbarContent className="!justify-start md:!justify-end  space-x-1 md:mt-0 md:space-x-4 md:gap-1">
        <NavbarItem>
          <Link
            href="/"
            title="Login"
            className="flex flex-col lg:flex-row items-center justify-center lg:gap-2.5"
          >
            <IoPersonOutline
              className={`text-sm md:text-xl ${
                percent >= 0 && percent <= 18
                  ? "text-primary"
                  : percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              }`}
            />
            <div
              className={`${
                percent >= 0 && percent <= 18
                  ? "text-primary hover:text-info"
                  : percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              } mt-1 text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-Montserrat block text-center`}
            >
              <h3>Member </h3>
              {/* <h3>Login</h3> */}
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/"
            title="Login"
            className="flex flex-col lg:flex-row items-center justify-center lg:gap-2.5"
          >
            <IoPersonOutline
              className={`text-sm md:text-xl ${
                percent >= 0 && percent <= 18
                  ? "text-primary"
                  : percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              }`}
            />
            <div
              className={`${
                percent >= 0 && percent <= 18
                  ? "text-primary hover:text-info"
                  : percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              } mt-1 text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-Montserrat block text-center`}
            >
              <h3>corporate</h3>
              {/* <h3>Login</h3> */}
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Toggle button */}

      <NavbarContent className="md:!hidden !flex-grow-0 " justify="end">
        <NavbarMenuToggle
          className="!h-auto px-2 py-5 rounded-full bg-primary w-max"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile view menubar */}

      <NavbarMenu
        className="items-start !columns-2 py-0 !z-[1000] !top-24 !gap-0"
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: 500,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <div className="w-full h-[400px] grid grid-cols-2 gap-x-6">
          {/* className="w-full h-[400px] columns-2 gap-4" */}
          {menuItemsMobile.map((item, index) => (
            <NavbarMenuItem
              key={index}
              className="!pt-0 aspect-auto break-inside-avoid-column"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link
                aria-label={`know more about ${item.menuTitle}`}
                title={item.menuTitle}
                aria-current={`${item.menuTitle} page`}
                href={item.ref}
                className={`${
                  path === item.menuTitle
                    ? "text-success"
                    : "text-secondary hover:text-success"
                } w-full h-full text-base ${
                  item.menuTitle === "Technology" &&
                  "underline underline-offset-1"
                }`}
              >
                {item.menuTitle}
              </Link>
              {item.subMenu?.map((l, id) => (
                <NavbarMenuItem
                  key={id}
                  className="px-2 !pt-0 font-Lato"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    aria-label={`know more about ${l.list}`}
                    title={l.list}
                    aria-current={`${l.list} page`}
                    href={`${item.ref}${l.subMenuRef}`}
                    className={`w-full h-full text-xs`}
                  >
                    {l.list}
                  </Link>
                </NavbarMenuItem>
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
