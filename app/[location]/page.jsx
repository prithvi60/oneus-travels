import MiniBlogDetails from "@/components/MiniBlogDetails";
import DefaultLayout from "@/components/home/DefaultLayout";
import { TourHeroSection } from "@/components/services/TourHeroSection";
import { TourPackageTable } from "@/components/services/TourPackageTable";
import { TourPackages } from "@/components/services/TourPackages";
import { leisureLists } from "@/libs/data";
import { LOCATION_QUERY } from "@/sanity/Queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const revalidate = 10;

const page = async ({ params }) => {
  const location = await params.location.replace(/-/g, " ");
  // const slug = params.location;
  const post = await client.fetch(
    LOCATION_QUERY,
    { slug: location },
    {
      cache: "no-cache",
      next: {
        tags: ["post", "news", "caseStudy", "location"],
      },
    }
  );

  return (
    <div>
      <DefaultLayout>
        <TourHeroSection />
        <TourPackages location={params.location.replace(/-/g, " ")} />
        <TourPackageTable location={params.location.replace(/-/g, " ")} />
        {post !== null && (
          <MiniBlogDetails post={post} />
        )}
      </DefaultLayout>
    </div>
  );
};
export default page;
