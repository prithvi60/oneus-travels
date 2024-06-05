"use client";
import { AppContext } from "@/hooks/UseHooks";
import { menuItems } from "@/libs/data";
import { Link } from "@nextui-org/link";
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
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

export default function NavbarPage() {
  const path = usePathname();
  const router = useRouter();
  let { isInView } = useContext(AppContext);
  console.log(isInView);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isActivated, setIsActivated] = useState(null);

  const handleClick = (ref) => {
    setIsMenuOpen(false);
    router.push(`${ref}`);
  };

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
        <NavbarBrand
          className="space-x-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            width={50}
            height={50}
            alt="Logo"
            src={"/travel_logo.png"}
            className="object-contain"
          />
          <p
            className={`hidden text-2xl font-bold font-Montserrat text-inherit md:block ${
              isInView ? "text-primary" : ""
            }`}
          >
            OneUs
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 sm:flex font-Lato"
        justify="center"
      >
        {menuItems.map((item, id) => (
          <NavbarItem
            key={id}
            isActive={path === item.menuTitle}
            onClick={() => handleClick(item.ref)}
          >
            <Link
              aria-label={`know more about ${item.menuTitle}`}
              title={item.menuTitle}
              aria-current={`${item.menuTitle} page`}
              href={item.ref}
              className={`text-base ${
                isInView
                  ? "text-primary hover:text-secondary"
                  : "text-secondary hover:text-success"
              }`}
            >
              {item.menuTitle}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="space-x-4">
        <Link href="/">
          <FaSignInAlt
            className={`text-base md:text-xl  ${
              isInView ? "text-primary" : "text-secondary"
            }`}
          />
        </Link>
        <Link href="/">
          <IoMdLogIn
            className={`text-base md:text-xl  ${
              isInView ? "text-primary" : "text-secondary"
            }`}
          />
        </Link>
      </NavbarContent>

      <NavbarContent className="sm:!hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu
        className="items-center !pt-10 !z-[1000] !top-24"
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="space-y-5">
            <Link
              aria-label={`know more about ${item.menuTitle}`}
              title={item.menuTitle}
              aria-current={`${item.menuTitle} page`}
              href={item.ref}
              className={`${
                path === item.menuTitle
                  ? "text-success"
                  : "text-secondary hover:text-success"
              } w-full h-full text-base`}
            >
              {item.menuTitle}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
