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
  const myCustomImages = [
    { id: 1, imgUrl: "/places/maldives/1.jpeg", altText: "Maldives slide 1" },
    { id: 2, imgUrl: "/places/maldives/2.jpeg", altText: "Maldives slide 2" },
    { id: 3, imgUrl: "/places/maldives/3.jpeg", altText: "Maldives slide 3" },
    { id: 4, imgUrl: "/places/maldives/4.jpeg", altText: "Maldives slide 4" },
    { id: 5, imgUrl: "/places/maldives/5.jpeg", altText: "Maldives slide 5" },
  ];

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
      <p className="text-base font-normal font-Poppins mt-4">
        The Maldives is one of the world’s most sought-after leisure destinations,
        celebrated for its crystal-clear waters, private island resorts, and
        calm luxury experiences. Ideal for short international getaways, the
        Maldives is perfect for couples, honeymooners, and families seeking
        privacy, comfort, and scenic beauty.
      </p>
      <p className="text-base font-normal font-Poppins mt-4">
        With direct flights from India and visa-free entry for Indian travelers,
        the Maldives is both accessible and indulgent. OneUs Travels curates
        Maldives leisure trips focused on seamless travel, premium stays, and
        stress-free planning.
      </p>

      {/* Why Visit Maldives */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Visit the Maldives
      </h3>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-2">
        <li>
          <span className="font-semibold">Visa-Free & Easy Access:</span> Visa-free
          country for Indians, direct flights to Malé, ideal 3–4 night trips.
        </li>
        <li>
          <span className="font-semibold">Private Island Resorts:</span> Each
          resort is on its own island, offering unmatched privacy and premium
          service.
        </li>
        <li>
          <span className="font-semibold">Seamless Transfers:</span> Complimentary
          speedboat or seaplane transfers included with most resorts.
        </li>
        <li>
          <span className="font-semibold">Luxury Villas:</span> Overwater villas
          with sea views, private decks, and optional private pools.
        </li>
        <li>
          <span className="font-semibold">Water Sports:</span> Jet skiing,
          parasailing, snorkelling, scuba diving, and more.
        </li>
      </ul>

      {/* Honeymoon */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Honeymoon-Friendly Destination
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        The Maldives is one of the top honeymoon destinations globally. Honeymoon
        couples (with proof) are eligible for complimentary experiences such as
        honeymoon cakes, candlelight dinners, and flower bed decorations, making
        the stay even more special.
      </p>

      {/* Family Friendly */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Family-Friendly Benefits
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Many resorts offer family-friendly packages like 2 nights in a Beach
        Villa and 1 night in an Overwater Villa. In select resorts, up to two
        children below 5 years can stay complimentary.
      </p>

      {/* Important Notes */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Important Travel Notes
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-2">
        <li>
          Alcohol cannot be carried through the airport; it is served only at
          resorts under regulation.
        </li>
        <li>
          Children below 5 years are not permitted in overwater villas.
        </li>
        <li>
          Island hopping between resorts is available at additional cost (USD
          200+ per person).
        </li>
      </ul>

      {/* Why Maldives */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why the Maldives is an Amazing Place to Visit
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        The Maldives perfectly blends luxury with simplicity. Private islands,
        calm blue waters, world-class resorts, and thoughtfully curated
        experiences make it an unforgettable destination for honeymoons,
        anniversaries, and short leisure breaks.
      </p>

      {/* Why OneUs */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Book Your Maldives Trip with OneUs Travels
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-2">
        <li>Resort selection tailored to your travel purpose</li>
        <li>Transparent guidance on meal plans and villa categories</li>
        <li>End-to-end coordination from flights to island transfers</li>
        <li>Clear communication on upgrades, inclusions, and restrictions</li>
      </ul>

      {/* CTA */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Plan Your Maldives Leisure Trip with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        With OneUs Travels, your Maldives holiday is thoughtfully planned,
        professionally managed, and completely hassle-free. Reach out today and
        experience island luxury the right way.
      </p>

      {/* <ImgSlider images={myCustomImages} /> */}
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
