import "./globals.css";
import { Poppins } from "next/font/google";
import AppContextProvider from "@/hooks/UseHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";
import { Providers } from "./Provider";
import GoogleAnalytics from "../libs/GoogleAnalytics";
import ReCaptchaProvider from "./ReCaptchaProvider";
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
    title: "Comfortable & Customisable Holiday Packages | OneUs Travels",
    description:
      "Craft your dream vacation! Explore destinations, find deals on flights & hotels, plan your itinerary - all in one place.",
    other: {
      title:
        "Holiday Packages Tailored for Comfortable & Customisable Travel | OneUs Travels",
    },
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
    metadataBase: new URL("https://www.oneustravels.com/"),
    alternates: {
      canonical: "/blog",
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://www.oneustravels.com`,
      title:
        "Holiday Packages Tailored for Comfortable & Customisable Travel | OneUs Travels",
      description:
        "Craft your dream vacation! Explore destinations, find deals on flights & hotels, plan your itinerary - all in one place.",
      siteName: "OneUs Travel",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={`${gilroy.variable} ${poppins.variable}`}>
          <GoogleAnalytics />
          <ReCaptchaProvider>
            <Providers>{children}</Providers>
          </ReCaptchaProvider>
        </body>
      </AppContextProvider>
    </html>
  );
}
