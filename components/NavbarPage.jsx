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

export default function NavbarPage() {
  const path = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  }, []);

  // Filtering the subCategories data

  const val = subCategories.filter((item) => {
    if (item.menuTitle === subMenuBar) return item.lists;
  });

  return (
    <Navbar
      isBlurred="false"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          `${
            percent >= 35 && percent <= 74
              ? "bg-success"
              : percent >= 75 && percent <= 95
              ? "bg-info"
              : "bg-primary"
          } py-4 shadow-md transition-all duration-500 ease-linear h-auto`,
        ],
        item: [`data-[active=true]: !text-success`],
        menuItem: ["data-[active=true]: !text-success pt-2"],
      }}
    >
      <NavbarBrand className="space-x-3">
        <Image
          onClick={() => router.push("/")}
          width={130}
          height={130}
          title="OneUs logo image"
          alt="Logo"
          src={"/Oneus_Logo_2.png"}
          className="object-cover object-center cursor-pointer"
        />
      </NavbarBrand>

      {/* Technology menu bar */}
      <NavbarContent
        className="hidden pr-2 lg:pr-6 md:flex font-Lato"
        justify="center"
      >
        <NavbarItem>
          <Link
            aria-label={`know more about Technology`}
            title={"Technology"}
            aria-current={`Technology page`}
            href={"/technology"}
            className={`text-base ${
              percent >= 35 && percent <= 95
                ? "text-primary hover:text-secondary"
                : "text-secondary hover:text-success"
            } py-10 scroll-smooth tracking-wider cursor-pointer`}
            onMouseEnter={() => setSubMenuBar("Technology")}
          >
            Technology
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Other menu bar */}
      <NavbarContent
        className="hidden gap-5 lg:gap-10 md:flex font-Lato"
        justify="center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {menuItems.map((item, id) => (
          <NavbarItem
            key={id}
            isActive={path === item.menuTitle}
            onClick={() => handleClick(item.ref)}
          >
            <div
              // aria-label={`know more about ${item.menuTitle}`}
              // title={item.menuTitle}
              // aria-current={`${item.menuTitle} page`}
              // href={item.ref}
              className={`text-base ${
                percent >= 35 && percent <= 95
                  ? "text-primary hover:text-secondary"
                  : "text-secondary hover:text-success"
              } py-10 cursor-default ${
                item.ref !== "" && "cursor-pointer"
              } scroll-smooth tracking-wider`}
              onMouseEnter={() => setSubMenuBar(item.menuTitle)}
            >
              {item.menuTitle}
            </div>
          </NavbarItem>
        ))}

        {isOpen && (
          <ul
            className={`absolute flex transition-all delay-150 ease-linear duration-700 top-20 left-0 w-full h-[30vh] bg-primary shadow-md pt-2 pb-6 justify-center items-start`}
          >
            {val?.map((l, index) => (
              <li
                key={index}
                className={`text-secondary ${
                  l.menuTitle === "Services"
                    ? "first:-ms-[130px] lg:first:-ms-[135px]"
                    : l.menuTitle === "About"
                    ? "first:ms-3 lg:first:ms-12"
                    : l.menuTitle === "Resources"
                    ? "first:ms-[156px] lg:first:ms-56"
                    : l.menuTitle === "Contact"
                    ? "first:ms-[352px] lg:first:ms-[468px]"
                    : ""
                } `}
              >
                {l.lists.map((sub, idx) => (
                  <Link
                    title={sub.list}
                    className="block pb-2 text-sm cursor-pointer"
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
        )}
      </NavbarContent>

      {/* Login button For employee and client */}

      <NavbarContent className="!justify-start md:!justify-end mt-4 space-x-1 md:mt-0 md:space-x-4">
        <NavbarItem>
          <Link
            href="/"
            title="Login"
            className="flex flex-col items-center justify-center"
          >
            <IoPersonOutline
              className={`text-sm md:text-xl ${
                percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              }`}
            />
            <h3
              className={`${
                percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              } mt-1 text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-Montserrat`}
            >
              Employee
            </h3>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/"
            title="Login"
            className="flex flex-col items-center justify-center"
          >
            <IoPersonOutline
              className={`text-sm md:text-xl ${
                percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              }`}
            />
            <h3
              className={`${
                percent >= 35 && percent <= 95
                  ? "text-primary"
                  : "text-secondary"
              } mt-1 text-xs font-medium tracking-normal capitalize md:text-sm lg:text-base font-Montserrat`}
            >
              client
            </h3>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Toggle button */}

      <NavbarContent
        className="md:!hidden !flex-grow-0 mt-4 md:mt-0"
        justify="end"
      >
        <NavbarMenuToggle
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
