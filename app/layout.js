import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import NavbarPage from "@/components/NavbarPage";
import Footer from "@/components/Footer";
import AppContextProvider from "@/hooks/UseHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={`${lato.variable} ${montserrat.variable}`}>
          <NavbarPage />
          <Providers>{children}</Providers>
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}
