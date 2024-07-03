import {
  Work_Sans,
  Source_Serif_4,
  Poppins,
  Alice,
  Lora,
  Oswald,
  DM_Sans,
  Roboto,
  Roboto_Condensed,
} from "next/font/google";
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
  weight: ["600", "400", "700", "300"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-sourceSerif",
  weight: "900",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["800",'400'],
});

const alice = Alice({
  subsets: ["latin"],
  variable: "--font-alice",
  weight: "400",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: "400",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: "700",
});

const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-DMSans",
  weight: "800",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "900",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
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
        <body
          className={`${workSans.variable} ${sourceSerif.variable} ${poppins.variable} ${alice.variable} ${lora.variable} ${oswald.variable} ${DMSans.variable} ${roboto.variable} ${robotoCondensed.variable}`}
        >
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
