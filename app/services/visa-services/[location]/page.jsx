import DefaultLayout from "@/components/home/DefaultLayout";
import { TourHeroSection } from "@/components/services/TourHeroSection";
import { TourPackageTable } from "@/components/services/TourPackageTable";
import { TourPackages } from "@/components/services/TourPackages";

const page = ({ params }) => {
  return (
    <div>
      <DefaultLayout>
        <TourHeroSection />
        <TourPackages location={params.location} />
        <TourPackageTable location={params.location} />
      </DefaultLayout>
    </div>
  );
};
export default page;
