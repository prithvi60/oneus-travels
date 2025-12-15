import MiniBlogDetails from "@/components/MiniBlogDetails";
import DefaultLayout from "@/components/home/DefaultLayout";
import { TourHeroSection } from "@/components/services/TourHeroSection";
import { TourPackageTable } from "@/components/services/TourPackageTable";
import { TourPackages } from "@/components/services/TourPackages";
import { LOCATION_QUERY } from "@/sanity/Queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { leisureLists } from "@/libs/data";
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
        {params.location.replace(/-/g, " ") === "europe" ? (
         leisureLists.filter((item) => item.category === "europe").map((list, idx) => (
          <>
          <TourPackages key={idx} location={list.location} />
           <TourPackageTable location={list.location} />
           </>
         ) )
        ) :  <>
            <TourPackages location={params.location.replace(/-/g, " ")} />
            <TourPackageTable location={params.location.replace(/-/g, " ")} />
          </>}
        {post !== null && <MiniBlogDetails post={post} />}
      </DefaultLayout>
    </div>
  );
};
export default page;
