import { OtherHero } from "@/components/OtherHero";
import { Privacy_Policy_TC } from "@/components/Privacy_Policy_TC";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";
import { bookingTC } from "@/libs/data";

const page = () => {
  return (
    <section>
      <OtherHero imgSrc={"/bg_3.jpg"} />
      <WelcomeBoard
        title={"Booking Terms and Conditions"}
        desc={
          "Please read the following terms and conditions carefully. By making a booking with OneUs Travels, you agree to these terms and conditions. References to 'us,' 'we,' 'our,' and 'OneUs Travels' in these booking terms and conditions include our company OneUs Travels."
        }
      />
      <Privacy_Policy_TC data={bookingTC} />
    </section>
  );
};

export default page;
