import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import NavbarPage from "@/components/NavbarPage";
import Footer from "@/components/Footer";
import AppContextProvider from "@/hooks/UseHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactForm } from "@/components/ContactForm";
import { Testimonial } from "@/components/Testimonial";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "600",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

// Meta Data
export async function generateMetadata() {
  return {
    title: "Travel Website",
    description:
      "Craft your dream vacation! Explore destinations, find deals on flights & hotels, plan your itinerary - all in one place.",
    robots: "index, follow",
    applicationName: "Travel Website Agency",
    authors: [{ name: "Travel Agency" }],
    generator: "Next.js",
    keywords: [
      "Travel",
      "Travelodge",
      "Train Ticket Booking",
      "Trip",
      "Trip Planner",
      "Hotels",
      "Flights",
      "Vacation",
      "Travel Agency",
      "Travel And Tourism",
      "travel agency near me",
      "best tour companies",
      "local travel agents",
    ],
    referrer: "origin-when-cross-origin",
    creator: "Prithvi, Gokul Gandhi",
    publisher: "Travel Agency",
    // metadataBase: new URL("https://webibee.com/"),
    alternates: {
      canonical: "/blog",
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      // url: `https://webibee.com`,
      title: "Travel Website",
      description:
        "Craft your dream vacation! Explore destinations, find deals on flights & hotels, plan your itinerary - all in one place.",
      siteName: "Travel Agency",
      // images: [
      //   {
      //     url: "https://ik.imagekit.io/webibee/Agency/brain-logo.svg",
      //   },
      // ],
    },
  };
}

//  <Script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho salesiq = $zoho.salesiq || {widgetcode:"siqa4899e43c1edb3d41b065b921424741aa5b9a7e68d3939967b7fba6c4d3cb0f3", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</Script> 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={`${lato.variable} ${montserrat.variable}`}>
          <NavbarPage />
          <Providers>{children}</Providers>
          <ContactForm />
          <Testimonial />
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}
