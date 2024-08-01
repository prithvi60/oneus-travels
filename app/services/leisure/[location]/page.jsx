import { TourHeroSection } from "@/components/services/TourHeroSection";
import { TourPackageTable } from "@/components/services/TourPackageTable";
import { TourPackages } from "@/components/services/TourPackages";

const page = ({ params }) => {
  return (
    <div>
      <TourHeroSection />
      <TourPackages location={params.location.replace(/%20/g, " ")}/>
      <TourPackageTable />
    </div>
  );
};
export default page;
