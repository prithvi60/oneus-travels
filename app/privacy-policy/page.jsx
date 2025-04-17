import { OtherHero } from "@/components/OtherHero";
import { Privacy_Policy_TC } from "@/components/Privacy_Policy_TC";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { personalInformation, privacyPolicy } from "@/libs/data";
import { LuPackageSearch } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import DefaultLayout from "@/components/home/DefaultLayout";

const page = () => {
  return (
    <section>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"OneUs Travels Internet Privacy Policy"}
          desc={
            "Hello. We are OneUs. Here's how we protect your personal data and respect your privacy."
          }
        />
        <p className="text-base font-normal font-Poppins padding !py-0">
          This Privacy Policy (“Policy”) governs the protection and processing of
          personal data by OneUs Travels (hereinafter referred to as “OneUs”) in
          connection with personal data provided by any individual (“User”, “You”,
          “Your” and “Yours”) who has purchased, intends to purchase, or inquiries
          about any product(s) or service(s) offered by OneUs through any of its
          interface channels including website, self-booking portal, and mobile
          app (collectively referred to as “Sites”) and any other such medium.
          <br />
          <br />
          OneUs provides travel-related services, leisure packages, and visa
          services, collectively termed as “Services”.
        </p>
        <div className="block space-y-3.5 padding !py-0 !pt-5">
          <h5 className="text-lg font-normal font-Poppins">
            OneUs values your privacy rights. When you visit our Sites or utilize
            our Services, we may collect Personal Information from you directly or
            indirectly. The categories of Personal Information we may collect
            include:
          </h5>
          <ul className="space-y-4">
            {personalInformation.map((list, id) => (
              <li className="flex items-start gap-2" key={id}>
                <LuPackageSearch className="text-2xl sm:text-3xl text-secondary basis-[10%] md:basis-[6%]" />
                <div className="block space-y-3.5 basis-[90%] md:basis-[94%]">
                  <h5 className="text-base font-semibold capitalize sm:text-lg font-Gilroy">
                    {list.title}
                  </h5>
                  <p className="text-base font-normal font-Poppins">
                    {list.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Privacy_Policy_TC data={privacyPolicy} />
        <div className="block space-y-3.5 padding !py-0 !pb-5 font-Gilroy">
          <h5 className="text-lg font-normal">
            If you have any questions or concerns regarding your privacy issues,
            please contact the OneUs Grievance Officer:
          </h5>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-2">
              <IoPersonCircle className="text-lg sm:text-xl text-secondary basis-[10%] md:basis-[6%]" />
              <h5 className="basis-[90%] md:basis-[94%] text-base font-semibold capitalize sm:text-lg font-Poppins">
                Mrs. Jaya Bharathi A
              </h5>
            </li>
            <li className="flex items-start gap-2 font-Poppins">
              <FaPhoneVolume className="text-lg sm:text-xl text-secondary basis-[10%] md:basis-[6%]" />
              <h5 className="basis-[90%] md:basis-[94%] text-base font-normal capitalize sm:text-lg">
                Telephone : +91 7418223757
              </h5>
            </li>
            <li className="flex items-start gap-2 font-Poppins">
              <MdOutlineMarkEmailUnread className="text-lg sm:text-xl text-secondary basis-[10%] md:basis-[6%]" />
              <h5 className="basis-[90%] md:basis-[94%] text-base font-normal capitalize sm:text-lg">
                Email : jayabharathi@oneustravels.com
              </h5>
            </li>
          </ul>
          <p className="text-base font-normal font-Poppins">
            OneUs reserves the right to revise this privacy policy from time to
            time at its discretion to make the policy user-friendly and compliant
            with statutory requirements.
          </p>
        </div>
      </DefaultLayout>
    </section>
  );
};

export default page;
