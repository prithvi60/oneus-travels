"use client";
import { AppContext } from "@/hooks/UseHooks";
import { menuItems, menuItemsMobile, subCategories } from "@/libs/data";
// import { Link } from "@nextui-org/link";
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
import { useContext, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function NavbarPage() {
  const path = usePathname();
  const router = useRouter();
  let { isInView } = useContext(AppContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [isActivated, setIsActivated] = useState(null);
  const [subMenuBar, setSubMenuBar] = useState(menuItems[0].menuTitle);
  const handleClick = (ref) => {
    setIsMenuOpen(false);
    router.push(`${ref}`);
  };
  const handleEnter = (value) => {
    // if (value === "Technology") {
    //   setIsOpen(false);
    // } else {
    //   setIsOpen(true);
    //   }
    setSubMenuBar(value);
  };

  // const handleLeave = () => {
  //   setIsOpen(false);
  // };

  // console.log(isOpen);
  return (
    <Navbar
      isBlurred="false"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: [
          `${
            isInView ? "bg-success opacity-70 " : ""
          } py-4 shadow-md transition-all duration-500 ease-linear`,
        ],
        item: [`data-[active=true]: !text-success`],
        menuItem: ["data-[active=true]: !text-success pt-2"],
      }}
    >
      <NavbarContent className="pr-2 " justify="start">
        <NavbarBrand className="space-x-3 ">
          <Image
            onClick={() => router.push("/")}
            width={130}
            height={130}
            alt="Logo"
            src={"/Oneus_Logo_2.png"}
            className="object-cover object-center cursor-pointer"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-10 md:flex font-Lato"
        justify="center"
      >
        {menuItems.map((item, id) => (
          <NavbarItem
            key={id}
            isActive={path === item.menuTitle}
            onClick={() => handleClick(item.ref)}
            className="group"
          >
            <div
              // aria-label={`know more about ${item.menuTitle}`}
              // title={item.menuTitle}
              // aria-current={`${item.menuTitle} page`}
              // href={item.ref}
              className={`text-base ${
                isInView
                  ? "text-primary hover:text-secondary"
                  : "text-secondary hover:text-success"
              } py-10 `}
              onMouseEnter={() => handleEnter(item.menuTitle)}
              // onMouseLeave={() => handleLeave(item.menuTitle)}
            >
              {item.menuTitle}
            </div>
            {/* sub menu categories */}
            <ul
              className={`absolute ${
                subMenuBar === "Technology"
                  ? "hidden"
                  : "group-hover:flex group-hover:transition-all group-hover:delay-150 group-hover:ease-linear group-hover:duration-700 group-hover:top-20"
              } left-0 w-full h-[30vh] bg-primary shadow-md pt-2 pb-6 hidden md:justify-start lg:justify-center items-start gap-5`}
            >
              {subCategories?.map((l, index) => (
                <li
                  key={index}
                  className="text-secondary first:ms-24 first:me-16 lg:first:ms-8 lg:first:me-16"
                >
                  {l.lists.map((sub, idx) => (
                    <Link
                      className="text-sm block pb-2 cursor-pointer"
                      key={idx}
                      href={sub.subMenuRef}
                      // onClick={() => router.replace("/services/corporate_travel")}
                    >
                      {sub.list}
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        // justify="end"
        className="!justify-start md:!justify-end mt-4 space-x-1 md:mt-0 md:space-x-4"
      >
        <Link href="/" className="flex flex-col items-center justify-center">
          <IoPersonOutline
            className={`text-sm md:text-xl ${
              isInView ? "text-primary" : "text-secondary"
            }`}
          />
          <h5
            className={`${
              isInView ? "text-primary" : "text-secondary"
            } mt-1 text-xs font-medium tracking-normal capitalize md:text-base font-Montserrat`}
          >
            Employee
          </h5>
        </Link>
        <Link href="/" className="flex flex-col items-center justify-center">
          <IoPersonOutline
            className={`text-sm md:text-xl  ${
              isInView ? "text-primary" : "text-secondary"
            }`}
          />
          <h5
            className={`${
              isInView ? "text-primary" : "text-secondary"
            } mt-1 text-xs font-medium tracking-normal capitalize md:text-base font-Montserrat`}
          >
            client
          </h5>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="md:!hidden !flex-grow-0 mt-4 md:mt-0"
        justify="end"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

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
                <NavbarMenuItem key={id} className="px-2 !pt-0 font-Lato">
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
          <Link href={"/"}>
            <FaFacebookF className="p-2 text-3xl rounded-full cursor-pointer bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
          <Link href={"/"}>
            <FaXTwitter className="p-2 text-3xl rounded-full cursor-pointer bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
          <Link href={"/"}>
            <FaLinkedinIn className="p-2 text-3xl rounded-full cursor-pointer bg-secondary text-primary hover:bg-success hover:animate-pulse" />
          </Link>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

// const subCategories = () => {
//   return (
//     <div className="absolute top-10 left-0 w-full h-[50vh] bg-primary shadow-md p-5 flex justify-center items-center gap-5">
//       <div>List1</div>
//       <div>list 2</div>
//     </div>
//   );
// };
