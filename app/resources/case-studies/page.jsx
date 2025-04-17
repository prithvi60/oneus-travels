import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import PostCards from "@/components/resources/PostCards";
import { client } from "@/sanity/lib/client";
import { CSS_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

const page = async () => {
  const posts = await client.fetch(
    CSS_QUERY,
    {},
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
        <PostCards href={"/resources/case-studies"} title={"Case Studies"} posts={posts} />
      </DefaultLayout>
    </main>
  );
};

export default page;
