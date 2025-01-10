import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";
import { Privacy_Policy_TC } from "@/components/Privacy_Policy_TC";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { termsOfUse } from "@/libs/data";

const page = () => {
  return (
    <section>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <WelcomeBoard
          title={"Terms of Use"}
          desc={
            "This website is created, designed and provided by OneUs Travels. This page outlines the terms of use under which you may access this site. Please read these terms of use carefully. If you do not agree to these terms, do not use this site. By using this site, you signify your acceptance of these terms of use."
          }
        />
        <Privacy_Policy_TC data={termsOfUse} />
      </DefaultLayout>
    </section>
  );
};

export default page;
