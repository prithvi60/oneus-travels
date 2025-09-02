"use client"
import { useState } from "react";
import Link from "next/link";
import { MdFlight } from "react-icons/md";

const Menu = ({ menuItems }) => {
  const [showAllPlaces, setShowAllPlaces] = useState(false);

  return (
    <>
      {menuItems.map((item, i) => (
        <div key={i}>
          {item.subMenu && (
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight:
                  item.menuTitle === "Explore Places"
                    ? showAllPlaces
                      ? item.subMenu.length * 40
                      : 6 * 40
                    : "auto",
              }}
            >
              {item.subMenu
                .slice(
                  0,
                  item.menuTitle === "Explore Places" && !showAllPlaces
                    ? 6
                    : item.subMenu.length
                )
                .map((list, idx) => (
                  <div className="flex items-start gap-2 mb-2 ms-4" key={idx}>
                    <MdFlight className="mt-1 text-base rotate-45 text-secondary" />
                    <Link
                      href={list.subMenuRef}
                      className="font-semibold text-secondary hover:text-success font-Poppins"
                    >
                      {list.listMenu}
                    </Link>
                  </div>
                ))}
              {item.menuTitle === "Explore Places" && item.subMenu.length > 6 && (
                <button
                  onClick={() => setShowAllPlaces(!showAllPlaces)}
                  className="flex items-center gap-2 ms-4 text-secondary font-semibold hover:text-success font-Poppins transition"
                >
                  <MdFlight className="mt-1 text-base rotate-45" />
                  {showAllPlaces ? "See Less" : "See More"}
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Menu;
