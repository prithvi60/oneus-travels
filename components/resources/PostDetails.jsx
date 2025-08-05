import { PortableText } from "next-sanity";
import { Contact } from "../Contact";

const PostDetails = ({ post }) => {

    return (
        <section className="relative w-full h-full flex justify-between gap-5 padding">
            <div className="font-Gilroy space-6 md:space-y-10 lg:w-3/5">
                <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl">
                    {post.title}
                </h2>
                <div className="max-w-7xl font-Poppins prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-lg lg:prose-p:text-xl prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
                    <PortableText value={post.blockContent} components={customComponents} />
                </div>
            </div>
            <Contact blog />
            {/* <div className="">

            </div> */}
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