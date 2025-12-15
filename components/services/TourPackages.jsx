const NepalContent = () => (
    <>
        <h2 className="text-xl font-semibold tracking-normal capitalize font-Gilroy text-secondary md:text-2xl xl:text-3xl">
            Discover Nepal!
        </h2>
        <p className="text-base font-normal font-Poppins mt-4">
            Where Spiritual Calm Meets Himalayan Adventure
        </p>

        {/* Introduction */}
        <p className="text-base font-normal font-Poppins mt-4">
            Nestled in the lap of the Himalayas, Nepal is a land where serenity and adventure coexist in perfect balance. From sacred pilgrimages that cleanse the soul to adrenaline-filled mountain escapades that ignite the spirit, Nepal offers something for every traveler. Whether you seek divine peace at Muktinath or the thrill of paragliding over Pokhara’s emerald lakes, OneUs Travels curates journeys that connect you deeply with this enchanting land.
        </p>
        
        {/* A Country of Dual Experiences */}
        <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
            A Country of Dual Experiences
        </h3>
        <p className="text-base font-normal font-Poppins mt-4">
            Nepal is more than just a destination, it’s an emotion shaped by devotion, mountains, and timeless traditions. For the spiritually inclined, places like Kathmandu, Pokhara, Jomsom, and Muktinath offer sacred experiences surrounded by breathtaking Himalayan views. Pilgrims visit the 108 ice-cold water fountains of Muktinath, perform holy rituals along the Kali Gandaki River, and find peace in the divine rhythm of temple bells.
        </p>
        <p className="text-base font-normal font-Poppins mt-4">
            For adventurers, Nepal’s rugged landscapes promise world-class thrills. Experience paragliding, bungee jumping, zip-lining, mountain flights, or a scenic trek through Chitwan National Park. Wander through Pokhara’s serene Phewa Lake, marvel at the Seti River Gorge, or take the Manokamna cable car for sweeping valley views.
        </p>

        {/* Why Nepal with OneUs Travels */}
        <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
            Why Nepal with OneUs Travels
        </h3>
        <p className="text-base font-normal font-Poppins mt-4">
            With OneUs Travels, every journey is planned to perfection - from comfortable flights and premium stays to spiritual guides and adventure coordination. We ensure your Nepal trip feels effortless, fulfilling, and unforgettable.
        </p>

        <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
            <li><span className="font-semibold">Pilgrimage Journeys:</span> Visit Kathmandu, Pokhara, Jomsom, and Muktinath with guided rituals and local insights.</li>
            <li><span className="font-semibold">Adventure Escapades:</span> Explore Pokhara, Chitwan, and Kathmandu through adventure sports and scenic explorations.</li>
            <li><span className="font-semibold">Custom Itineraries:</span> Choose comfort with 3-, 4-, or 5-star stays that include great food and amenities.</li>
        </ul>
        
        <p className="text-base font-normal font-Poppins mt-4">
            Experience Nepal’s best with experts who understand both its spiritual soul and adventurous heart.
        </p>

        {/* Continue Exploring (Hyperlinks) */}
        <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
            Continue Exploring
        </h3>
        <ul className="list-disc list-inside text-base font-normal font-Poppins ml-4 mt-2 space-y-1">
            <li><a href="/blog/nepal-pilgrimage-journey-a-spiritual-path-from-kathmandu-to-muktinath" className="text-blue-600 hover:underline">Read the full Nepal Pilgrimage Blog</a></li>
            <li><a href="/blog/nepal-adventure-trip-pokhara-chitwan-kathmandu" className="text-blue-600 hover:underline">Read the full Nepal Adventure Blog</a></li>
        </ul>

        {/* Call to Action */}
        <h3 className="text-lg font-semibold tracking-normal capitalize font-Gilroy text-secondary mt-6">
            Plan Your Nepal Journey with OneUs Travels
        </h3>
        <p className="text-base font-normal font-Poppins mt-4">
            Whether it’s a journey of faith or a quest for thrill, OneUs Travels turns your Nepal dream into a perfectly curated experience. Contact us today to design your personalized Nepal itinerary and travel with complete peace of mind.
        </p>
    </>
);
export const TourPackages = ({ location }) => {
  return (
    <section className="w-full h-auto space-y-6 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] px-7 lg:px-0 pt-10 md:space-y-10">
 
      {location === "Nepal" ? (
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
    )}
    </section>
  );
};
