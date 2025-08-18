import { ContactForm } from "@/components/home/ContactForm";
import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";

export default function ContactPage() {
  return (
    <DefaultLayout>
      {/* <OtherHero imgSrc={"/bg_1.jpg"} /> */}
      <ContactForm contact />
    </DefaultLayout>
  );
}