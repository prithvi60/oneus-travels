import { OtherHero } from "@/components/OtherHero";
import { WelcomeBoard } from "@/components/services/WelcomeBoard";

const data = [
  "This commitment to continuous improvement ensures our customers’ travel programs are always evolving and adapting to the opportunities that lie ahead.",
];

const page = () => {
  return (
    <main>
      <OtherHero imgSrc={"/bg_3.jpg"} />
      <WelcomeBoard
        title={"Why CTM ?"}
        desc={
          "Corporate Travel Management (CTM) was founded on the principle of challenging the status quo, asking questions and designing solutions that simply make global business travel better."
        }
        shortNotes={data}
      />
    </main>
  );
};

export default page;
