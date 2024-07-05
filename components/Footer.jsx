import { menuItems } from "@/libs/data";
import { FooterSection1 } from "./FooterSection1";
import { FooterSection2 } from "./FooterSection2";

const footerItems = [
  { menuTitle: "Services", ref: "/services" },
  { menuTitle: "Technology", ref: "/technology" },
  { menuTitle: "About", ref: "/about" },
  { menuTitle: "Resources", ref: "/resources" },
  { menuTitle: "Contact", ref: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full h-full px-[24px] py-7 space-y-10">
      <FooterSection1 items={menuItems} />
      <FooterSection2 />
    </footer>
  );
};

export default Footer;
