import DefaultLayout from "@/components/home/DefaultLayout";
import { TourHeroSection } from "@/components/services/TourHeroSection";
import { TourPackageTable } from "@/components/services/TourPackageTable";
import { TourPackages } from "@/components/services/TourPackages";
import { leisureLists } from "@/libs/data";
import { notFound } from "next/navigation";
const page = ({ params }) => {
  const location = params.location.replace(/-/g, " ");

  // Check if location exists in leisureLists
  const isValidLocation = leisureLists.some(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (!isValidLocation) {
    notFound(); // Triggers Next.js built-in 404
  }


  return (
    <div>
      <DefaultLayout>
        <TourHeroSection />
        <TourPackages location={params.location.replace(/-/g, " ")} />
        <TourPackageTable location={params.location.replace(/-/g, " ")} />
      </DefaultLayout>
    </div>
  );
};
export default page;
