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
const BhutanContent = () => {
  const myCustomImages = [
    { id: 20, imgUrl: "/places/bhutan/1.jpeg", altText: "Tiger's Nest" },
    { id: 21, imgUrl: "/places/bhutan/2.jpeg", altText: "Punakha Dzong" },
    { id: 22, imgUrl: "/places/bhutan/3.jpeg", altText: "Thimphu City" },
    { id: 23, imgUrl: "/places/bhutan/4.jpeg", altText: "Dochula Pass" },
    { id: 24, imgUrl: "/places/bhutan/5.jpeg", altText: "Phuentsholing" },
    { id: 25, imgUrl: "/places/bhutan/6.jpeg", altText: "Paro Valley" },
    { id: 26, imgUrl: "/places/bhutan/7.jpeg", altText: "Buddha Point" },
    { id: 27, imgUrl: "/places/bhutan/8.jpeg", altText: "Suspension Bridge" },
    { id: 28, imgUrl: "/places/bhutan/9.jpeg", altText: "Kyichu Lhakhang" },
    { id: 29, imgUrl: "/places/bhutan/10.jpeg", altText: "Himalayan View" },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Discover Bhutan!
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        A Peaceful Journey Through Monasteries, Mountain Passes, and Timeless
        Traditions
      </p>

      {/* Introduction */}
      <p className="text-base font-normal font-Poppins mt-4">
        Bhutan is a serene leisure destination where nature, culture, and
        mindful living come together. Known for its peaceful landscapes and
        preserved traditions, Bhutan offers travelers a calm yet enriching
        holiday experience. With OneUs Travels, you can enjoy a slow-paced
        journey, allowing you to truly absorb the majesty of the Himalayas and
        the spiritual depth of its monasteries.
      </p>

      {/* Why Visit Bhutan */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        A Destination for Mindful Travel
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        For those seeking calm, Bhutan offers an experience that prioritizes
        balance over speed. Whether you are exploring the vibrant markets of
        Thimphu, witnessing the architectural grandeur of Punakha Dzong, or
        taking in the panoramic views from Dochula Pass, every moment feels
        intentional. It is a land where Gross National Happiness is a reality,
        not just a philosophy.
      </p>
      <p className="text-base font-normal font-Poppins mt-4">
        Adventure seekers and spiritual pilgrims alike will find their peak at
        the iconic Tiger’s Nest (Taktsang Monastery), perched precariously on a
        cliffside. The hike offers a perfect mix of physical challenge and
        spiritual reward, making it the highlight of any Bhutanese escapade.
      </p>

      {/* Why Bhutan with OneUs Travels */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Bhutan with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        OneUs Travels ensures your Bhutan trip is planned with complete clarity,
        handling everything from documentation to local coordination so you can
        travel with peace of mind.
      </p>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Seamless Entry:</span> Assistance with
          mandatory entry permits and smooth coordination through Phuentsholing
          or Paro.
        </li>
        <li>
          <span className="font-semibold">Cultural Immersion:</span> Guided
          tours of Thimphu, Punakha, and Paro with insights into Bhutanese
          heritage.
        </li>
        <li>
          <span className="font-semibold">Professional Support:</span> Clear
          guidance on the Sustainable Development Fee (SDF) and all local
          regulations.
        </li>
      </ul>

      {/* Important Information */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Important Travel Information
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Visa:</span> Not required for Indians
          (Entry Permit mandatory).
        </li>
        <li>
          <span className="font-semibold">Stay:</span> 5 nights recommended for
          a comfortable pace.
        </li>
        <li>
          <span className="font-semibold">SDF:</span> ₹1200 per person/day for
          Indians (usually included in our packages).
        </li>
      </ul>

      {/* Call to Action */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Plan Your Bhutan Journey with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4 mb-6">
        Experience a destination that values nature, tradition, and soul.
        Contact us today to design your personalized Bhutan itinerary and
        explore the Land of the Thunder Dragon with total ease.
      </p>

      {/* <ImgSlider images={myCustomImages} /> */}
    </>
  );
};
const PenangContent = () => {
  const myCustomImages = [
    {
      id: 30,
      imgUrl: "/places/penang/1.jpeg",
      altText: "Georgetown Street Art",
    },
    {
      id: 31,
      imgUrl: "/places/penang/2.jpeg",
      altText: "Penang Hill Funicular",
    },
    { id: 32, imgUrl: "/places/penang/3.jpeg", altText: "Kek Lok Si Temple" },
    {
      id: 33,
      imgUrl: "/places/penang/4.jpeg",
      altText: "The Top Komtar Skywalk",
    },
    {
      id: 34,
      imgUrl: "/places/penang/5.jpeg",
      altText: "Entopia Butterfly Farm",
    },
    {
      id: 35,
      imgUrl: "/places/penang/6.jpeg",
      altText: "Batu Ferringhi Beach",
    },
    {
      id: 36,
      imgUrl: "/places/penang/7.jpeg",
      altText: "Pinang Peranakan Mansion",
    },
    { id: 37, imgUrl: "/places/penang/8.jpeg", altText: "Clan Jetties" },
    { id: 38, imgUrl: "/places/penang/9.jpeg", altText: "Mariamman Temple" },
    {
      id: 39,
      imgUrl: "/places/penang/10.jpeg",
      altText: "Penang Night Market",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Discover Penang!
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        The Pearl of the Orient: A Fusion of Heritage, Culture, and Modern
        Thrills
      </p>

      {/* Introduction */}
      <p className="text-base font-normal font-Poppins mt-4">
        Penang is a vibrant island in Malaysia that seamlessly blends colonial
        charm with futuristic attractions. From the UNESCO-listed streets of
        Georgetown to the lush canopy of Penang Hill, this destination offers a
        sensory journey unlike any other. Whether you are chasing world-class
        street food or the adrenaline of a glass skywalk, OneUs Travels curates
        the perfect 4-night experience to show you the very best of this
        tropical gem.
      </p>

      {/* Why Visit Penang */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        A Cultural and Modern Melting Pot
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Penang is famous for its diversity. You can spend your morning exploring
        the intricate carvings of the Mariamman Temple and your afternoon
        walking through Entopia, a sanctuary housing over 15,000 butterflies.
        For those who love heights, the Rainbow Skywalk at The Top Komtar offers
        heart-racing views from the 68th floor, while the historic funicular
        train provides a scenic climb to the summit of Penang Hill.
      </p>

      {/* Itinerary Overview */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Your 5-Day Journey at a Glance
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Nature & Biodiversity:</span> Immerse
          yourself in the living classrooms of Entopia and the Butterfly Farm.
        </li>
        <li>
          <span className="font-semibold">Heritage & Culture:</span> Guided city
          tours covering Georgetown’s colonial architecture and the Mariamman
          Temple.
        </li>
        <li>
          <span className="font-semibold">Modern Adventure:</span> Full access
          to The Top Komtar, including the Skywalk, Observatory Deck, and
          Boutique Aquarium.
        </li>
        <li>
          <span className="font-semibold">Scenic Heights:</span> Experience the
          world’s steepest funicular tunnel ride up to Penang Hill.
        </li>
      </ul>

      {/* Why Penang with OneUs Travels */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Book with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Our Penang holiday package is designed for a stress-free experience,
        combining premium 3-star accommodations with seamless private transfers.
        We handle the logistics so you can focus on the flavors and sights.
      </p>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Private Transfers:</span> Dedicated
          sedan cars for airport and hotel movements.
        </li>
        <li>
          <span className="font-semibold">Curated Inclusions:</span> Pre-booked
          entry to all major attractions like Komtar and Entopia.
        </li>
        <li>
          <span className="font-semibold">Expert Planning:</span> Itineraries
          balanced perfectly between guided exploration and leisure time.
        </li>
      </ul>

      {/* Travel Tips */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Quick Travel Tips
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Penang is tropical; carry light clothing and an umbrella. While cards
        are widely accepted, keep some Malaysian Ringgit (MYR) for the legendary
        hawker stalls. Most importantly, respect local traditions by dressing
        modestly when visiting religious sites.
      </p>

      {/* Call to Action */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Start Your Penang Story
      </h3>
      <p className="text-base font-normal font-Poppins mt-4 mb-6">
        From the serene butterfly gardens to the bustling night markets, Penang
        is waiting to be explored. Contact OneUs Travels today to book your
        4N/5D getaway and experience the perfect blend of tradition and
        modernity.
      </p>

      {/* <ImgSlider images={myCustomImages} /> */}
    </>
  );
};
const UnitedKingdomContent = () => {
  const myCustomImages = [
    {
      id: 40,
      imgUrl: "/places/uk/1.jpeg",
      altText: "Big Ben and Palace of Westminster",
    },
    {
      id: 41,
      imgUrl: "/places/uk/2.jpeg",
      altText: "Edinburgh Castle Skyline",
    },
    { id: 42, imgUrl: "/places/uk/3.jpeg", altText: "Stonehenge Monoliths" },
    { id: 43, imgUrl: "/places/uk/4.jpeg", altText: "Windsor Castle Exterior" },
    { id: 44, imgUrl: "/places/uk/5.jpeg", altText: "Tower Bridge London" },
    { id: 45, imgUrl: "/places/uk/6.jpeg", altText: "Glen Nevis Landscapes" },
    {
      id: 46,
      imgUrl: "/places/uk/7.jpeg",
      altText: "Westminster Abbey Interior",
    },
    {
      id: 47,
      imgUrl: "/places/uk/8.jpeg",
      altText: "Isle of Wight Coastal Views",
    },
    { id: 48, imgUrl: "/places/uk/9.jpeg", altText: "Roman Baths in Bath" },
    { id: 49, imgUrl: "/places/uk/10.jpeg", altText: "Highland Scenery" },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Discover the United Kingdom!
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        A Journey Through History, Royalty, Culture, and Scenic Landscapes
      </p>

      {/* Introduction */}
      <p className="text-base font-normal font-Poppins mt-4">
        The United Kingdom is a destination where history is not just
        preserved—it is lived and breathed. From the timeless streets of London
        to the rugged green highlands of Scotland, the UK offers a layered
        experience of royal heritage, architectural marvels, and cultural hubs.
        Whether you are standing before the ancient stones of Stonehenge or
        cruising the River Thames, OneUs Travels helps you navigate this storied
        land with clarity and ease.
      </p>

      {/* England: The Ceremonial Heart */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        London & Royal Heritage
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        London serves as the perfect starting point, blending global modernism
        with deep-rooted traditions. Visit <strong>Westminster Abbey</strong> to
        see the Coronation Chair—the oldest piece of furniture in the UK still
        used for its original purpose—or witness an active royal residence at{" "}
        <strong>Windsor Castle</strong>. Beyond the city, the prehistoric
        mystery of Stonehenge and the Roman history of Bath offer glimpses into
        a past spanning thousands of years.
      </p>

      {/* Scotland & Natural Beauty */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Scotland: Nature & Castles
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        For those seeking scenic grandeur, Scotland’s landscapes are
        unparalleled. Explore the historic charm of Edinburgh’s Royal Mile or
        head to
        <strong> Fort William</strong> to experience Glen Nevis. From cable car
        rides offering panoramic mountain views to boat trips for seal watching,
        the UK’s northern reaches provide a breathtaking contrast to the
        bustling streets of England.
      </p>

      {/* Travel Information */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Essential Travel Insights
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Best Time to Visit:</span> March to
          September offers pleasant weather and long days perfect for
          exploration.
        </li>
        <li>
          <span className="font-semibold">Visa for Indians:</span> Processing
          usually takes 6 days to 1 month; express options are available for
          urgent travel.
        </li>
        <li>
          <span className="font-semibold">Island Escapes:</span> Consider adding
          relaxed day-trips to the Isle of Wight or Isle of Man for a local
          picnic-style experience.
        </li>
      </ul>

      {/* Why UK with OneUs Travels */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Plan Your UK Journey with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        We believe the UK should not be restricted to a fixed package. We offer
        a consultative approach to help you build an itinerary that matches your
        interests, from royal history to highland adventures.
      </p>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Custom Itineraries:</span> Fully
          flexible plans covering England, Scotland, or both.
        </li>
        <li>
          <span className="font-semibold">Visa Guidance:</span> Expert
          assistance with timelines and documentation for a smooth application
          process.
        </li>
        <li>
          <span className="font-semibold">Logical Routing:</span> We ensure your
          travel between cities is efficient, giving you more time to explore.
        </li>
      </ul>

      {/* Call to Action */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Start Your British Adventure
      </h3>
      <p className="text-base font-normal font-Poppins mt-4 mb-6">
        Whether you’re a history enthusiast or a nature lover, the United
        Kingdom offers a rare balance of experiences. Contact OneUs Travels
        today to structure your personalized UK itinerary and travel with
        confidence.
      </p>

      {/* <ImgSlider images={myCustomImages} /> */}
    </>
  );
};
const AndamanContent = () => {
  const myCustomImages = [
    {
      id: 50,
      imgUrl: "/places/andaman/1.jpeg",
      altText: "Radhanagar Beach Sunset",
    },
    {
      id: 51,
      imgUrl: "/places/andaman/2.jpeg",
      altText: "Cellular Jail National Memorial",
    },
    {
      id: 52,
      imgUrl: "/places/andaman/3.jpeg",
      altText: "Havelock Island Scuba",
    },
    {
      id: 53,
      imgUrl: "/places/andaman/4.jpeg",
      altText: "Corbyn's Cove Palms",
    },
    {
      id: 54,
      imgUrl: "/places/andaman/5.jpeg",
      altText: "Chidyatapu Sunset Point",
    },
    {
      id: 55,
      imgUrl: "/places/andaman/6.jpeg",
      altText: "Private Ferry Transfer",
    },
    {
      id: 56,
      imgUrl: "/places/andaman/7.jpeg",
      altText: "Elephant Beach Snorkeling",
    },
    {
      id: 57,
      imgUrl: "/places/andaman/8.jpeg",
      altText: "Neil Island Natural Bridge",
    },
    { id: 58, imgUrl: "/places/andaman/9.jpeg", altText: "Ross Island Ruins" },
    {
      id: 59,
      imgUrl: "/places/andaman/10.jpeg",
      altText: "Andaman Tropical Forest",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Discover Andaman!
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        Where Turquoise Seas and Golden Shores Welcome You
      </p>

      {/* Introduction */}
      <p className="text-base font-normal font-Poppins mt-4">
        A tropical paradise of emerald waters and white sandy beaches, the
        Andaman Islands are India’s most enchanting beach escape. Nestled in the
        Bay of Bengal, this serene destination offers a rare blend of natural
        beauty, rich marine life, and poignant colonial history. Whether you are
        walking barefoot on Radhanagar Beach or watching the sunset from
        Chidyatapu, OneUs Travels ensures your island getaway is seamless and
        soul-stirring.
      </p>

      {/* Experience Highlights */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Island Bliss and Historic Echoes
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Andaman is a world of its own, where the rush of the mainland feels a
        lifetime away. Experience the emotional{" "}
        <strong>Light and Sound Show</strong> at the historic Cellular Jail, a
        tribute to India's freedom struggle. Then, escape to{" "}
        <strong>Havelock Island (Swaraj Dweep)</strong> to visit Radhanagar
        Beach, voted one of the best in Asia. From the mangroves of Chidyatapu
        to the shimmering lagoons, every corner of the archipelago is a postcard
        waiting to happen.
      </p>

      {/* Why Andaman with OneUs Travels */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        The OneUs Advantage: Effortless Island Travel
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Island travel requires precision—ferry schedules, entry permits, and
        local transfers must align perfectly. Our 3 Nights / 4 Days package is
        curated to balance relaxation with discovery, starting at{" "}
        <strong>INR 16,500 per person</strong>.
      </p>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Curated Stays:</span> Handpicked
          hotels in Port Blair and Havelock for maximum comfort.
        </li>
        <li>
          <span className="font-semibold">Seamless Transfers:</span> Private AC
          vehicles and pre-booked private ferry tickets (Makruzz/Nautika).
        </li>
        <li>
          <span className="font-semibold">Dedicated Briefings:</span> On-ground
          tour managers provide daily briefings to keep you informed and
          relaxed.
        </li>
      </ul>

      {/* Travel Tips */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Travel Tips for the Islands
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Best Time:</span> October to May
          offers the calmest seas.
        </li>
        <li>
          <span className="font-semibold">Connectivity:</span> Expect a digital
          detox; internet can be patchy.
        </li>
        <li>
          <span className="font-semibold">Eco-Awareness:</span> Respect marine
          regulations and avoid littering.
        </li>
        <li>
          <span className="font-semibold">Essentials:</span> Carry light
          cottons, high-SPF sunscreen, and some cash.
        </li>
      </ul>

      {/* Call to Action */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Your Tropical Escape Awaits
      </h3>
      <p className="text-base font-normal font-Poppins mt-4 mb-6">
        Andaman is more than a destination; it’s a feeling of peace and pristine
        beauty. Let OneUs Travels handle the details while you soak in the
        sunshine. Contact us today to plan your perfect 4-day island retreat.
      </p>

      {/* <ImgSlider images={myCustomImages} /> */}
    </>
  );
};

const BaliContent = () => {
  const myCustomImages = [
    {
      id: 60,
      imgUrl: "/places/bali/1.jpeg",
      altText: "Lempuyang Gates of Heaven",
    },
    {
      id: 61,
      imgUrl: "/places/bali/2.jpeg",
      altText: "Uluwatu Temple Cliffside",
    },
    {
      id: 62,
      imgUrl: "/places/bali/3.jpeg",
      altText: "Tegalalang Rice Terraces",
    },
    {
      id: 63,
      imgUrl: "/places/bali/4.jpeg",
      altText: "Kelingking Beach Nusa Penida",
    },
    {
      id: 64,
      imgUrl: "/places/bali/5.jpeg",
      altText: "Tirta Gangga Water Palace",
    },
    { id: 65, imgUrl: "/places/bali/6.jpeg", altText: "Mount Batur Kintamani" },
    { id: 66, imgUrl: "/places/bali/7.jpeg", altText: "Tanah Lot Temple" },
    {
      id: 67,
      imgUrl: "/places/bali/8.jpeg",
      altText: "White Water Rafting Ayung",
    },
    { id: 68, imgUrl: "/places/bali/9.jpeg", altText: "Ubud Art Market" },
    { id: 69, imgUrl: "/places/bali/10.jpeg", altText: "Kecak Fire Dance" },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
        Experience Paradise in Bali!
      </h2>
      <p className="text-base font-normal font-Poppins mt-4">
        The Island of the Gods: A 6-Night Journey of Culture, Adventure, and
        Serenity
      </p>

      {/* Introduction */}
      <p className="text-base font-normal font-Poppins mt-4">
        Bali is more than just a destination—it’s a tropical dream. From the
        misty peaks of Kintamani volcano to the turquoise shores of Nusa Penida,
        this island offers a profound balance of spiritual calm and high-octane
        adventure. OneUs Travels curates a 6-night experience that takes you
        from the "Gates of Heaven" to the adrenaline-filled rapids of the
        jungle, ensuring a journey that is as seamless as it is magical.
      </p>

      {/* Highlights of the Journey */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Beyond the Horizon: What Awaits You
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        Your Balinese escape is designed to showcase every facet of island life.
        Marvel at the iconic <strong>Lempuyang Temple</strong> and the royal
        beauty of <strong>Tirta Gangga</strong>. For thrill-seekers, the island
        offers everything from white water rafting to ATV forest rides. As the
        sun sets over <strong>Uluwatu</strong>, the rhythmic chants of the Kecak
        Fire Dance provide a hauntingly beautiful window into Bali's deep-rooted
        cultural heritage.
      </p>

      {/* Itinerary Focus */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        A Curated 7-Day Adventure
      </h3>
      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Island Exploration:</span> A full-day
          tour of Nusa Penida, visiting Kelingking Cliff, Broken Beach, and
          Angel’s Billabong.
        </li>
        <li>
          <span className="font-semibold">Spiritual Landmarks:</span> Visit the
          dramatic cliffside Uluwatu Temple and the world-famous Gates of
          Heaven.
        </li>
        <li>
          <span className="font-semibold">Volcano & Valleys:</span> Stunning
          views of Mount Batur at Kintamani combined with the cultural heart of
          Ubud.
        </li>
        <li>
          <span className="font-semibold">Adrenaline Rush:</span> Tackle white
          water rafting on the Kokat River and an off-road ATV tandem ride.
        </li>
      </ul>

      {/* Why Bali with OneUs Travels */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Why Book with OneUs Travels
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        We handle the complexities of Balinese travel—from private Hi-Ace
        transfers to entrance fees—so you can focus on the memories.
      </p>

      <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
        <li>
          <span className="font-semibold">Premium Transfers:</span> Private
          vehicles with dedicated English-speaking drivers for every tour.
        </li>
        <li>
          <span className="font-semibold">Transparent Inclusions:</span> Daily
          breakfast, bottled water, and all parking and entrance fees covered.
        </li>
        <li>
          <span className="font-semibold">Personalized Service:</span> A
          traditional Balinese welcome with flower garlands the moment you land.
        </li>
      </ul>

      {/* Quick Travel Guide */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Traveler’s Essentials
      </h3>
      <p className="text-base font-normal font-Poppins mt-4">
        The best time to visit is April to October for ideal beach weather.
        While Bali is welcoming, remember to dress modestly for temple visits
        (sarongs are typically available). Indian travelers can easily obtain a
        <strong> Visa on Arrival</strong>—just ensure your passport is valid for
        at least six months!
      </p>

      {/* Call to Action */}
      <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
        Your Balinese Dream Starts Here
      </h3>
      <p className="text-base font-normal font-Poppins mt-4 mb-6">
        Whether it's a romantic getaway, a family adventure, or a solo quest for
        peace, Bali never fails to enchant. Let OneUs Travels turn your dream
        holiday into reality. Contact us today to book your 6N/7D Bali package.
      </p>

      <ImgSlider images={myCustomImages} />
    </>
  );
};

const renderLocationContent = (location) => {
  // console.log("Rendering content for location:", location);
  switch (location) {
    case "Nepal":
      return <NepalContent />;

    case "Maldives":
      return <MaldivesContent />;

    case "Bhutan":
      return <BhutanContent />;

    case "Penang":
      return <PenangContent />;
    case "Bali":
      return <BaliContent />;

    case "Andaman":
      return <AndamanContent />;
    case "United Kingdom":
      return <UnitedKingdomContent />;
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
