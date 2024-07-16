import Link from "next/link";
import { GiCommercialAirplane } from "react-icons/gi";

export const Privacy_Policy_TC = ({data}) => {
  return (
    <div className="!pt-0 space-y-6 padding ">
      {data.map((item, idx) => (
        <div className="block space-y-6" key={idx}>
          <h4 className="text-lg font-semibold tracking-wide capitalize sm:text-xl lg:text-2xl font-Gilroy">
            {item.title}
          </h4>
          <div>
            {item.listItems === "" || item.listItems ? (
              <div className="block space-y-3.5">
                <h4 className="text-lg font-normal font-Poppins">{item.listItems}</h4>
                <ul className="space-y-4">
                  {item.desc.map((list, id) => (
                    <li
                      className="flex items-start gap-2 sm:items-center"
                      key={id}
                    >
                      <GiCommercialAirplane className="text-xl sm:text-2xl text-secondary basis-[12%] md:basis-[6%]" />
                      <p className="text-base font-normal font-Poppins basis-[88%] md:basis-[94%]">
                        {list}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-4">
                {item.desc.map((list, id) => (
                  <li className="text-base font-normal font-Poppins" key={id}>
                    <p className="text-base font-normal basis-[88%] md:basis-[94%]">
                        {list}
                        {item.linkText && (
                          <span>
                            <Link
                              href={item?.link}
                              className="mx-1 text-black underline capitalize underline-offset-4 decoration-warning"
                            >
                              {item.linkText}
                            </Link>
                          </span>
                        )}
                      </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
