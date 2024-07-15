import { OtherHero } from "@/components/OtherHero";
import { Privacy_Policy_TC } from "@/components/Privacy_Policy_TC";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { privacyPolicy } from "@/libs/data";

const page = () => {
  return (
    <section>
      <OtherHero imgSrc={"/bg_2.jpg"} />
      <WelcomeBoard
        title={"OneUs Travels Internet Privacy Policy"}
        desc={
          "Hello. We are OneUs. Here's how we protect your personal data and respect your privacy."
        }
      />
      <Privacy_Policy_TC data={privacyPolicy} />
    </section>
  );
};

export default page;
