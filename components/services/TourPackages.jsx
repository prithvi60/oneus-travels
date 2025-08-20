export const TourPackages = ({ location }) => {
  return (
    <section className="w-full h-auto space-y-6 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] px-7 lg:px-0 pt-10 md:space-y-10">
      <h1 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        {location === "North East"
          ? "North East States of India and West Bengal"
          : location}{" "}
        Holiday Packages
      </h1>
      <p className="text-base font-normal font-Poppins">{`Embark on a captivating exploration of the pristine Andaman and Nicobar Archipelago, enclosed by the spotless, clean water of the Bay of Bengal, with our exclusive ${location} Tour Packages. Located to the east of the Indian mainland, these 527 islands, of which only a few are open to tourists, offer a mesmerizing escape.`}</p>
    </section>
  );
};
