import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
const PostCards = ({ posts, href, title }) => {
    return (
        <section className="w-full space-y-6 padding md:space-y-10">
            <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl">
                {title}
            </h2>
            <div className="grid w-full grid-cols-1 gap-4 place-content-center place-items-center lg:grid-cols-3 md:grid-cols-2">
                {posts.map((post, idx) => (
                    <PostCard post={post} key={idx} href={href} />
                ))}
            </div>
        </section>
    );
};

export default PostCards;

const PostCard = ({ post, href }) => {
    const readableTime = post.plainBody.filter(Boolean).join(" ");

    const calculateReadTime = (text) => {
        const wordsPerMinute = 200;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        return readingTime;
    };

    const blogContent = readableTime || "";
    const readingTime = calculateReadTime(blogContent);
    return (
        <Card
            as={Link}
            href={`${href}/${post.slug.current}`}
            className="w-full p-1 space-y-5 group"
        >
            <CardHeader>
                <div className="relative w-full overflow-hidden h-52">
                    <Image
                        alt={post.imageAlt}
                        src={post.imageUrl}
                        className="object-cover object-center"
                        fill
                    />
                </div>
            </CardHeader>
            <CardBody className="py-2 overflow-visible">
                <p className="w-full text-sm leading-tight font-Poppins md:text-base line-clamp-3">
                    {post.summary}
                </p>
            </CardBody>
            <CardFooter className="flex items-center justify-between font-Poppins">
                <h4 className="flex items-center gap-2 text-sm capitalize font-Poppins">
                    <span>
                        <FaRegClock className="text-base text-secondary font-Montserrat" />
                    </span>
                    {readingTime} min{readingTime > 1 ? "s" : ""} Read
                </h4>
                <div className="text-sm tracking-wide underline capitalize transition-all ease-linear group-hover:text-info underline-offset-2 decoration-white group-hover:scale-110 duration-400 font-Poppins">
                    view
                </div>
            </CardFooter>
        </Card>
    );
};
