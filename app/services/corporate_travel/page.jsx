import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import {
  corporateTravelBreadcrumbsData,
  corporateTravelServiceData,
} from "@/libs/schema";

const page = () => {
  return (
    <main>
      <JsonLd data={corporateTravelServiceData} />
      <JsonLd data={corporateTravelBreadcrumbsData} />
      <OtherHero imgSrc={"/bg_1.jpg"} />
      <WelcomeBoard
        title={"Corporate Travel"}
        desc={
          "Global business is complex, driven by global objectives and underpinned by regional diverse and complex your travel needs, we’re committed to designing simple, safe and sustainable travel solutions that delivers measurable results."
        }
        
      />
      {/* <SliderTabs /> */}
    </main>
  );
};

export default page;
