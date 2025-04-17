import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import PostCards from "@/components/resources/PostCards";
import { client } from "@/sanity/lib/client";
import { NEWS_QUERIES } from "@/sanity/Queries";

export const revalidate = 10;

const page = async () => {
  const posts = await client.fetch(
    NEWS_QUERIES,
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
        <PostCards href={"/news"} title={"News"} posts={posts} />
      </DefaultLayout>
    </main>
  );
};

export default page;
