import ImgSlider from "../ImgSlider";

const NepalContent = () => {
  const myCustomImages = [
    { id: 10, imgUrl: "/places/nepal/1.jpeg", altText: "1st slide" },
    { id: 11, imgUrl: "/places/nepal/2.jpeg", altText: "2nd slide" },
    { id: 12, imgUrl: "/places/nepal/3.jpeg", altText: "3rd slide" },
    { id: 13, imgUrl: "/places/nepal/4.jpeg", altText: "4th slide" },
    { id: 14, imgUrl: "/places/nepal/5.jpeg", altText: "5th slide" },
    { id: 15, imgUrl: "/places/nepal/6.jpeg", altText: "6th slide" },
    { id: 16, imgUrl: "/places/nepal/7.jpeg", altText: "7th slide" },
    { id: 17, imgUrl: "/places/nepal/8.jpeg", altText: "8th slide" },
    { id: 18, imgUrl: "/places/nepal/9.jpeg", altText: "9th slide" },
    { id: 19, imgUrl: "/places/nepal/10.jpeg", altText: "10th slide" },
  ];
  return (
    <>
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Discover Nepal!
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        Where Spiritual Calm Meets Himalayan Adventure
      </p>

      {/* Introduction */}
      <p className="text-base font-normal font-Poppins mt-4">
        Nestled in the lap of the Himalayas, Nepal is a land where serenity and
        adventure coexist in perfect balance. From sacred pilgrimages that
        cleanse the soul to adrenaline-filled mountain escapades that ignite the
        spirit, Nepal offers something for every traveler. Whether you seek
        divine peace at Muktinath or the thrill of paragliding over Pokhara’s
        emerald lakes, OneUs Travels curates journeys that connect you deeply
        with this enchanting land.
      </p>

      {/* A Country of Dual Experiences */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        A Country of Dual Experiences
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Nepal is more than just a destination, it’s an emotion shaped by
        devotion, mountains, and timeless traditions. For the spiritually
        inclined, places like Kathmandu, Pokhara, Jomsom, and Muktinath offer
        sacred experiences surrounded by breathtaking Himalayan views. Pilgrims
        visit the 108 ice-cold water fountains of Muktinath, perform holy
        rituals along the Kali Gandaki River, and find peace in the divine
        rhythm of temple bells.
      </p>
      <p className="text-base font-normal font-Poppins mt-4">
        For adventurers, Nepal’s rugged landscapes promise world-class thrills.
        Experience paragliding, bungee jumping, zip-lining, mountain flights, or
        a scenic trek through Chitwan National Park. Wander through Pokhara’s
        serene Phewa Lake, marvel at the Seti River Gorge, or take the Manokamna
        cable car for sweeping valley views.
      </p>

      {/* Why Nepal with OneUs Travels */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Nepal with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        With OneUs Travels, every journey is planned to perfection - from
        comfortable flights and premium stays to spiritual guides and adventure
        coordination. We ensure your Nepal trip feels effortless, fulfilling,
        and unforgettable.
      </p>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Pilgrimage Journeys:</span> Visit
          Kathmandu, Pokhara, Jomsom, and Muktinath with guided rituals and
          local insights.
        </li>
        <li>
          <span className="font-semibold">Adventure Escapades:</span> Explore
          Pokhara, Chitwan, and Kathmandu through adventure sports and scenic
          explorations.
        </li>
        <li>
          <span className="font-semibold">Custom Itineraries:</span> Choose
          comfort with 3-, 4-, or 5-star stays that include great food and
          amenities.
        </li>
      </ul>

      <p className="text-base font-normal font-Poppins mt-4">
        Experience Nepal’s best with experts who understand both its spiritual
        soul and adventurous heart.
      </p>

      {/* Continue Exploring (Hyperlinks) */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Continue Exploring
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <a
            href="/blog/nepal-pilgrimage-journey-a-spiritual-path-from-kathmandu-to-muktinath"
            className="text-blue-600 hover:underline"
          >
            Read the full Nepal Pilgrimage Blog
          </a>
        </li>
        <li>
          <a
            href="/blog/nepal-adventure-trip-pokhara-chitwan-kathmandu"
            className="text-blue-600 hover:underline"
          >
            Read the full Nepal Adventure Blog
          </a>
        </li>
      </ul>

      {/* Call to Action */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Plan Your Nepal Journey with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Whether it’s a journey of faith or a quest for thrill, OneUs Travels
        turns your Nepal dream into a perfectly curated experience. Contact us
        today to design your personalized Nepal itinerary and travel with
        complete peace of mind.
      </p>
      <ImgSlider images={myCustomImages} />
    </>
  );
};
const MaldivesContent = () => {
  return (
    <>
      {/* Title */}
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Maldives Leisure Trip
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        Private island stays, overwater villas, and effortless luxury in the
        heart of the Indian Ocean
      </p>

      {/* Introduction */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Introduction
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        The Maldives is one of the world’s most sought-after leisure
        destinations, known for its crystal-clear waters, private island
        resorts, and relaxed luxury experiences. Ideal for short international
        getaways, the Maldives offers a perfect escape for couples,
        honeymooners, and families seeking comfort, privacy, and scenic beauty.
      </p>
      <p className="text-base font-normal font-Poppins mt-4 mb-4">
        With direct flights from India and visa-free entry for Indian travelers,
        the Maldives is both accessible and effortlessly luxurious. OneUs
        Travels curates Maldives leisure trips that focus on seamless travel,
        premium stays, and stress-free planning.
      </p>
      <p>
        <a
          href="https://share.google/RoSMdkcjdKpoRJHGx"
          className="text-base font-normal font-Poppins text-blue-600"
        >
          https://share.google/RoSMdkcjdKpoRJHGx
        </a>
      </p>
      {/* Why Visit Maldives */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Visit the Maldives
      </h3>

      <h4 className="font-semibold font-Gilroy mt-4">
        Visa-Free & Easy Access
      </h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Visa-free country for Indians with no visa cost</li>
        <li>Typical trip duration: 3 to 4 nights</li>
        <li>All international flights land at Malé, the main island</li>
        <li>Direct flights from Bangalore, making travel highly convenient</li>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">Private Island Resorts</h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Most hotels are located on individual islands</li>
        <li>
          Resorts are classified as 4-star or 5-star, offering premium
          facilities
        </li>
        <li>All resorts provide half-board or full-board meal plans</li>
        <li>
          Many hotels offer complimentary upgrades from half-board to full-board
          when booking a 3-night stay
        </li>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">Seamless Transfers</h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Complimentary airport transfers are usually included</li>
        <li>Transfers are done via speed boat or sea plane</li>
        <li>
          Island hopping between resorts is available at an additional cost of
          USD 200+ per person
        </li>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">
        Luxury Stays & Iconic Villas
      </h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          Water Bungalows / Overwater Villas are the highlight of Maldives
        </li>
        <li>
          Built directly over the sea, offering unmatched views and privacy
        </li>
        <li>Select villas come with private pools</li>
        <li>Designed especially for young couples and newlyweds</li>
        <li>Children below 5 years are not permitted in overwater villas</li>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">
        Water Sports & Experiences
      </h4>
      <p className="text-base font-normal font-Poppins mt-2">
        The Maldives offers a wide range of water-based activities, including:
      </p>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Jet skiing</li>
        <li>Speed boating</li>
        <li>Parasailing</li>
        <li>Scuba diving</li>
        <li>Snorkelling</li>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">
        Honeymoon-Friendly Destination
      </h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Honeymoon couples must provide proof of honeymoon</li>
        <li>Eligible for complimentary experiences such as:</li>
        <ul className="list-disc list-inside ml-6">
          <li>Honeymoon cake</li>
          <li>Candlelight dinner</li>
          <li>Flower bed decorations</li>
        </ul>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">
        Family-Friendly Benefits
      </h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          Popular packages include 2 nights in a Beach Villa + 1 night in an
          Overwater Villa
        </li>
        <li>
          In some resorts, up to 2 children under 5 years are allowed
          complimentary
        </li>
      </ul>

      <h4 className="font-semibold font-Gilroy mt-6">Alcohol Regulations</h4>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Maldives follows strict alcohol regulations</li>
        <li>Alcohol cannot be carried through the airport</li>
        <li>Resorts serve alcohol under restricted permissions</li>
        <li>Alcohol prices at resorts are comparatively high</li>
      </ul>

      {/* Why Maldives */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why the Maldives is an Amazing Place to Visit
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        The Maldives stands out as a destination where luxury meets simplicity.
        With private islands, calm blue waters, premium resorts, and carefully
        curated experiences, it offers a peaceful yet indulgent holiday. Whether
        it’s a honeymoon, anniversary, or a short leisure break, the Maldives
        delivers exclusivity, comfort, and unforgettable moments.
      </p>

      {/* Why OneUs */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Book Your Maldives Trip with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        OneUs Travels approaches Maldives travel as a curated leisure
        experience, not a standard package.
      </p>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>Right resort selection based on your travel purpose</li>
        <li>Transparent guidance on transfers, meal plans, and villa types</li>
        <li>Smooth coordination from flight booking to island transfers</li>
        <li>Clear communication on inclusions, upgrades, and restrictions</li>
      </ul>

      <p className="text-base font-normal font-Poppins mt-4">
        With OneUs Travels, your Maldives holiday is thoughtfully planned,
        professionally managed, and completely hassle-free.
      </p>

      <p className="text-base font-normal font-Poppins mt-4 font-semibold">
        📩 Plan your Maldives leisure trip with OneUs Travels today and
        experience island luxury the right way.
      </p>

      {/* FAQs */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        FAQs - Maldives Leisure Travel
      </h3>

      <p className="text-base font-normal font-Poppins mt-2 font-semibold">
        Is the Maldives visa-free for Indians?
      </p>
      <p className="text-base font-normal font-Poppins">
        Yes. The Maldives is a visa-free country for Indian passport holders
        with no visa cost.
      </p>

      <p className="text-base font-normal font-Poppins mt-2 font-semibold">
        How many nights are ideal for a Maldives trip?
      </p>
      <p className="text-base font-normal font-Poppins">
        A 3 to 4-night stay is ideal for a relaxed Maldives leisure trip.
      </p>

      <p className="text-base font-normal font-Poppins mt-2 font-semibold">
        Are airport transfers included in Maldives packages?
      </p>
      <p className="text-base font-normal font-Poppins">
        Most resorts provide complimentary transfers via speed boat or sea
        plane.
      </p>

      <p className="text-base font-normal font-Poppins mt-2 font-semibold">
        Can children stay in overwater villas?
      </p>
      <p className="text-base font-normal font-Poppins">
        Children below 5 years are not allowed in overwater villas.
      </p>

      <p className="text-base font-normal font-Poppins mt-2 font-semibold">
        When is the best time to visit the Maldives?
      </p>
      <p className="text-base font-normal font-Poppins">
        The best time is from November to April, though prices are higher. July
        and August offer lower costs due to fewer crowds.
      </p>
    </>
  );
};

const renderLocationContent = (location) => {
  switch (location) {
    case "Nepal":
      return <NepalContent />;

    case "Maldives":
      return <MaldivesContent />;

    default:
      return (
        <>
          <h1 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
            {location === "North East"
              ? "North East States of India and West Bengal"
              : location}{" "}
            Holiday Packages
          </h1>

          <p className="text-base font-normal font-Poppins">
            {`Embark on a captivating exploration of the pristine Andaman and Nicobar Archipelago, enclosed by the spotless, clean water of the Bay of Bengal, with our exclusive ${location} Tour Packages. Located to the east of the Indian mainland, these 527 islands, of which only a few are open to tourists, offer a mesmerizing escape.`}
          </p>
        </>
      );
  }
};

export const TourPackages = ({ location }) => {
  return (
    <section className="w-full h-auto space-y-6 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] px-7 lg:px-0 pt-10 md:space-y-10">
      {renderLocationContent(location)}
      {/* {location === "Nepal" ? (
        // Display the custom Nepal content
        <NepalContent />
      ) : (
        <>
          <h1 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
            {location === "North East"
              ? "North East States of India and West Bengal"
              : location}{" "}
            Holiday Packages
          </h1>
          <p className="text-base font-normal font-Poppins">{`Embark on a captivating exploration of the pristine Andaman and Nicobar Archipelago, enclosed by the spotless, clean water of the Bay of Bengal, with our exclusive ${location} Tour Packages. Located to the east of the Indian mainland, these 527 islands, of which only a few are open to tourists, offer a mesmerizing escape.`}</p>
        </>
      )} */}
    </section>
  );
};
