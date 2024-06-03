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
    <footer className="w-full h-full p-6 space-y-10 font-Lato">
      <FooterSection1 items={footerItems} />
      <FooterSection2 />
    </footer>
  );
};

export default Footer;
