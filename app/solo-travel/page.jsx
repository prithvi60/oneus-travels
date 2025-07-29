import { OtherBtn } from "@/components/Button";
import DefaultLayout from "@/components/home/DefaultLayout";
import { OtherHero } from "@/components/OtherHero";

const page = () => {
  return (
    <main>
      <DefaultLayout>
        <OtherHero imgSrc={"/bg_1.jpg"} />
        <section className="w-full h-auto padding ">
          <h1 className="text-[32px] md:text-[40px] lg:text-[42px] tracking-normal font-bold font-Gilroy text-secondary mb-8">
            Solo Travel: Discover the World on Your Terms
          </h1>
          <section className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">Discover Yourself, One Journey at a Time</h2>
              <p className="w-full h-full text-base font-normal font-Poppins">
                Solo travel is more than just a vacation - it’s an experience that empowers, inspires, and transforms. Whether you're craving quiet reflection in the mountains or an adrenaline rush in a new city, our Solo Travel Packages are designed for individuals who want to explore the world freely and confidently.
              </p>

              <p className="w-full h-full text-base font-normal font-Poppins">
                At Oneus Travels, we help first-time solo travelers and seasoned adventurers alike design trips that are safe, seamless, and deeply personal. From choosing destinations to handling logistics, our travel experts work with you to craft Customized Travel Itineraries that reflect your pace, budget, and dreams.
              </p>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">Curated Freedom: Our Solo Travel Packages</h2>
              <div className="space-y-5 text-secondary">
                <p className="w-full h-full text-base font-normal font-Poppins">
                  Whether you're heading to Goa, Greece, or Galle, we ensure that each itinerary offers:
                </p>
                <ul className="block space-y-0 list-disc list-outside ml-4">
                  {["Handpicked stays ideal for solo travelers", "Local experiences that are enriching and authentic", "Real-time concierge support during your trip", "Flexible schedules to match your energy and mood"].map((list, idx) => (
                    <li key={idx} className="text-base font-normal font-Poppins">{list}</li>
                  ))}
                </ul>
                <p className="w-full h-full text-base font-normal font-Poppins">
                  Looking for Budget Friendly Solo Trips? We’ve got options that keep costs low without compromising on quality. Think boutique hostels, cultural tours, hidden gems - all within reach.
                </p>
                <p className="w-full h-full text-base font-normal font-Poppins">🎒 Plan Your Solo Trip today and unlock the journey of a lifetime.</p>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">Travel Safe, Travel Smart</h2>
              <div className="space-y-5 text-secondary">
                <p className="w-full h-full text-base font-normal font-Poppins">
                  We understand that safety is a top concern, especially for solo explorers. That’s why we go the extra mile to ensure your comfort, security, and peace of mind.
                </p>
                <p className="w-full h-full text-base font-normal font-Poppins">Here’s how we support safe solo travel:</p>
                <ul className="block space-y-0 list-disc list-outside ml-4">
                  {["All accommodations are pre-verified and centrally located", "We offer destination-specific safety tips and cultural guidance", "24/7 on-trip assistance via our travel concierge service", "Emergency response support in case of unexpected events"].map((list, idx) => (
                    <li key={idx} className="text-base font-normal font-Poppins">{list}</li>
                  ))}
                </ul>
                <p className="w-full h-full text-base font-normal font-Poppins">
                  Special attention is given to Women Solo Travel from handpicked female-friendly stays to optional female local guides and safer route suggestions. Our mission is to give you the confidence to travel on your own, with full support from a team you can trust.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">Your Itinerary, Your Way</h2>
              <div className="space-y-5 text-secondary">
                <p className="w-full h-full text-base font-normal font-Poppins">
                  We don’t believe in one-size-fits-all trips. Your solo travel journey deserves the same personalization as your passport.
                </p>
                <p className="w-full h-full text-base font-normal font-Poppins">With our Customized Travel Itineraries, you get:</p>
                <ul className="block space-y-0 list-disc list-outside ml-4">
                  {["Day-by-day plans based on your interests", "Balanced mix of relaxation, adventure, and exploration", "Suggestions for group add-ons or solo activities", "Transparent costing that fits your budget goals"].map((list, idx) => (
                    <li key={idx} className="text-base font-normal font-Poppins">{list}</li>
                  ))}
                </ul>
                <p className="w-full h-full text-base font-normal font-Poppins">
                  From flight bookings and visa help to dining recommendations and hidden spots, we’re with you from start to finish.
                </p>
                <p className="w-full h-full text-base font-normal font-Poppins">✍️ Get a Personalized Itinerary now - your solo story starts here.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-[32px] lg:leading-7 tracking-normal font-bold font-Gilroy text-secondary mb-8">Let’s Create Your Journey</h2>
              <ul className="block space-y-0 list-disc list-outside ml-4">
                {["10+ years of travel planning experience", "Dedicated solo travel consultants", "Domestic and international coverage", "Flexible options for both luxury and budget travelers", "Passionate about empowering solo journeys"].map((list, idx) => (
                  <li key={idx} className="text-base font-normal font-Poppins">{list}</li>
                ))}
              </ul>
              <p className="w-full h-full text-base font-normal font-Poppins">
                At OneUs Travels, we’re more than just a travel provider—we're your partner in creating a hassle-free and comfortable travel experience. Our dedication to results-driven solutions, combined with the trust we've earned globally, is what sets us apart.
              </p>
              <OtherBtn roleType={"button"} text={"📩 Plan Your Solo Trip"} />
              <OtherBtn roleType={"button"} text={"📞 Talk to our travel expert today"} />
            </div>
          </section>
        </section>
      </DefaultLayout>
    </main>
  );
};

export default page;
