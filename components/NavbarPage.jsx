"use client";
import { AppContext } from "@/hooks/UseHooks";
import { menuItems } from "@/libs/data";
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
import { Tooltip } from "@nextui-org/tooltip";
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
  const [isOpen, setIsOpen] = useState(true);
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
        className="hidden gap-4 sm:flex font-Lato"
        justify="center"
      >
        {menuItems.map((item, id) => (
          <NavbarItem
            key={id}
            isActive={path === item.menuTitle}
            onClick={() => handleClick(item.ref)}
          >
            {/* <Tooltip
            // isOpen={isOpen}
            // onOpenChange={(open) => setIsOpen(open)}
            placement="bottom"
            color="primary"
            offset={35}
            classNames={{
              content: [
                "bg-primary h-full rounded-none bg-success"
              ],
            }}
              content={
                <div className="h-full px-1 py-2 w-dvw bg-primary">
                  <div className="font-bold text-small">Custom Content</div>
                  <div className="text-tiny">This is a custom tooltip content</div>
                </div>
              }
            > */}
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
            {/* </Tooltip> */}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="mt-4 space-x-1 md:mt-0 md:space-x-4"
      >
        <Link href="/" className="block">
          <IoPersonOutline
            className={`text-sm md:text-xl  ${
              isInView ? "text-primary" : "text-secondary"
            }`}
          />
          <h5 className="mt-1 text-xs font-medium tracking-normal capitalize md:text-base font-Montserrat text-secondary">
            Employee
          </h5>
        </Link>
        <Link href="/" className="block">
          <IoPersonOutline
            className={`text-sm md:text-xl  ${
              isInView ? "text-primary" : "text-secondary"
            }`}
          />
          <h5 className="mt-1 text-xs font-medium tracking-normal capitalize md:text-base font-Montserrat text-secondary">
            client
          </h5>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="sm:!hidden !flex-grow-0 mt-4 md:mt-0"
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
        <div className="w-full h-[400px] columns-2 gap-4">
          {menuItems.map((item, index) => (
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
                  item.menuTitle === "Technology" && "underline underline-offset-1"
                }`}
              >
                {item.menuTitle}
              </Link>
              {item.subMenu?.map((l, id) => (
                <NavbarMenuItem key={id} className="px-6 !pt-0 font-Lato">
                  <Link
                    aria-label={`know more about ${l.list}`}
                    title={l.list}
                    aria-current={`${l.list} page`}
                    href={l.subMenuRef}
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
