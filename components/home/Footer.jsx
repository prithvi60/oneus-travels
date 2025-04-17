import { menuItems } from "@/libs/data";
import { FooterSection1 } from "./FooterSection1";
import { FooterSection2 } from "./FooterSection2";

const Footer = () => {
  return (
    <footer className="w-full h-full !py-8 space-y-10 padding">
      <FooterSection1 items={menuItems} />
      <FooterSection2 />
    </footer>
  );
};

export default Footer;
