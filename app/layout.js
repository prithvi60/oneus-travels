import { Work_Sans,Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import NavbarPage from "@/components/NavbarPage";
import Footer from "@/components/Footer";
import AppContextProvider from "@/hooks/UseHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactForm } from "@/components/ContactForm";
import { Testimonial } from "@/components/Testimonial";
import { SalesIq } from "@/components/SalesIq";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
  weight: ["600","400","700","300"],
  display: "swap"
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-sourceSerif",
  weight: "900",
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
        <body className={`${workSans.variable} ${sourceSerif.variable}`}>
          <NavbarPage />
          <Providers>{children}</Providers>
          <ContactForm />
          <Testimonial />
          <Footer />
          <SalesIq />
        </body>
      </AppContextProvider>
    </html>
  );
}
