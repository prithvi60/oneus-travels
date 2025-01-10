import DefaultLayout from "@/components/home/DefaultLayout";
import JsonLd from "@/components/JsonLd";
import { OtherHero } from "@/components/OtherHero";
import PostCards from "@/components/resources/PostCards";
import { blogPostBreadcrumbsData, blogPostData } from "@/libs/schema";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

const page = async () => {
  const posts = await client.fetch(
    POSTS_QUERY,
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
        <JsonLd data={blogPostData} />
        <JsonLd data={blogPostBreadcrumbsData} />
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <PostCards posts={posts} title={"Blog"} href={"/resources/blog"} />
      </DefaultLayout>
    </main>
  );
};

export default page;
