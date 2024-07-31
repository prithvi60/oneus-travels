import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarPage from "@/components/home/NavbarPage";
import Footer from "@/components/home/Footer";
import AppContextProvider from "@/hooks/UseHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactForm } from "@/components/home/ContactForm";
import { Testimonial } from "@/components/home/Testimonial";
import { SalesIq } from "@/components/home/SalesIq";
import localFont from "next/font/local";
import Development from "@/components/Development";
import { Providers } from "./Provider";

const gilroy = localFont({
  src: [
    {
      path: "../public/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});

// Meta Data
export async function generateMetadata() {
  return {
    title: "OneUs Travel Website",
    description:
      "Craft your dream vacation! Explore destinations, find deals on flights & hotels, plan your itinerary - all in one place.",
    robots: "index, follow",
    applicationName: "OneUs Travel Website Agency",
    authors: [{ name: "OneUs Travel Agency" }],
    generator: "Next.js",
    keywords: [
      "OneUs",
      "Travels",
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
      canonical: "/resources/blog",
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      // url: `https://webibee.com`,
      title: "OneUs Travel Website",
      description:
        "Craft your dream vacation! Explore destinations, find deals on flights & hotels, plan your itinerary - all in one place.",
      siteName: "OneUs Travel Agency",
      // images: [
      //   {
      //     url: "../public/oneus-logo-1.svg",
      //   },
      // ],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={`${gilroy.variable} ${poppins.variable}`}>
          <Providers>
            <Development />
            <NavbarPage />
            {children}
            <ContactForm />
            <Testimonial />
            <Footer />
            <SalesIq />
          </Providers>
        </body>
      </AppContextProvider>
    </html>
  );
}
