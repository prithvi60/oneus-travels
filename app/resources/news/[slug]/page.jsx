import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import PostDetails from "@/components/resources/PostDetails";
import { client } from "@/sanity/lib/client";
import { NEWS_QUERY } from "@/sanity/Queries";
export const revalidate = 10;
const page = async ({ params }) => {
  const slug = params.slug;
  const post = await client.fetch(
    NEWS_QUERY,
    { slug },
    {
      cache: "no-cache",
      next: {
        tags: ["post", "news", "caseStudy"],
      },
    }
  );
  return (
    <main>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <PostDetails post={post} />
      </DefaultLayout>
    </main>
  );
};

export default page;
