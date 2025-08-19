import { PortableText } from "next-sanity";

const MiniBlogDetails = ({ post }) => {
    return (
        <section className="w-full h-auto space-y-6 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] px-7 lg:px-0 pt-10 md:space-y-10">
            <div className="max-w-7xl font-Poppins prose prose-blue mx-auto prose-h1:text-3.5xl prose-h1:font-bold prose-h2:text-xl md:prose-h2:text-2xl xl:prose-h2:text-3xl prose-h2:font-bold prose-h3:text-xl md:prose-h3:text-2xl xl:prose-h3:text-3xl prose-h3:font-bold prose-h4:text-xl md:prose-h4:text-2xl xl:prose-h4:text-3xl prose-h5:text-xl md:prose-h5:text-2xl xl:prose-h5:text-3xl prose-h4:font-bold prose-p:leading-relaxed prose-p:text-base prose-p:mt-4 prose-p:mb-4 prose-blockquote:leading-relaxed prose-blockquote:text-lg lg:prose-blockquote:text-xl prose-list:list-disc prose-list-decimal">
                <PortableText value={post.blockContent} components={customComponents} />
            </div>
        </section>
    );
};

export default MiniBlogDetails;

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
