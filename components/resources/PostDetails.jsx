import { PortableText } from "next-sanity";
import { Contact } from "../Contact";

const PostDetails = ({ post }) => {

    return (
        <section className="relative w-full h-full flex justify-between gap-8 xl:gap-12 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-full xl:max-w-fit 2xl:ml-80 px-7 py-12 sm:py-16 xl:py-20">
            <div className="font-Gilroy space-6 md:space-y-10 lg:w-[70%]">
                <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl">
                    {post.title}
                </h2>
                <div className="max-w-7xl font-Poppins prose prose-blue mx-auto  prose-p:leading-relaxed prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
                    <PortableText value={post.blockContent} components={customComponents} />
                </div>
            </div>
            <Contact blog />
        </section>
    )
}

export default PostDetails

const customComponents = {
    types: {
        image: ({ value }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={value?.imageUrl} // Use the resolved `imageUrl` from GROQ
                alt={value?.alt || "Image"}
                className="w-full h-full max-w-md max-h-full mx-auto mt-20 mb-20 md:mt-20 md:mb-10"
            />
        ),
    },
};