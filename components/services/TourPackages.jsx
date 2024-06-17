
export const TourPackages = ({location}) => {
  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto space-y-6 md:space-y-10">
        <div className="space-y-6 md:space-y-10">
        <h1  className="text-xl font-semibold tracking-normal capitalize font-Montserrat text-secondary md:text-2xl xl:text-3xl">{location} Holiday Packages</h1>
        <p className="text-base font-Lato">{`Embark on a captivating exploration of the pristine Andaman and Nicobar Archipelago, enclosed by the spotless, clean water of the Bay of Bengal, with our exclusive ${location} Tour Packages. Located to the east of the Indian mainland, these 527 islands, of which only a few are open to tourists, offer a mesmerizing escape.`}</p>
        </div>
        <h2  className="text-xl font-semibold tracking-normal capitalize font-Montserrat text-secondary md:text-2xl xl:text-3xl"> best selling {location} Holiday Packages</h2>
    </section>
  )
}
