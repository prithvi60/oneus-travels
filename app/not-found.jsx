import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[35px] lg:px-[60px] lg:py-12 font-Lato bg-primary text-secondary space-y-6 mx-auto h-full w-full text-center">
      {/* <div className='relative w-56 h-56 -mt-5'> */}
      <Image
        src={"/404_page.png"}
        title="404 page not found"
        height={300}
        width={300}
        alt="404 page not found"
        className="object-contain mx-auto"
      />
      {/* </div> */}
      <h2 className="text-3xl capitalize font-Lora md:text-5xl">
        Looking for something <span className="animate-pulse">?</span>
      </h2>
      <p className="text-base md:text-lg">
        We&apos;re sorry. The web address you entered can&apos;t be found on our
        site. Your page may have moved or may no longer be available.{" "}
        <em>Please try one of the options below:</em>
      </p>
      <p className="text-base md:text-lg">
        Try to access the page using the navigation above.
      </p>
      <p className="text-base md:text-lg">
        If you typed the page address in the address bar, make sure that
        it&apos;s spelled correctly.
      </p>
      <div className="flex items-center justify-center w-full">
        <Link
        title="back to home"
          href={"/"}
        >
          <h4
              className={`text-lg text-primary bg-success px-8 py-4 rounded-full hover:bg-success/75`}
            >
              Go Back To Home
            </h4>
          
        </Link>
      </div>
    </section>
  );
}
