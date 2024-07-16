"use client";

import React from "react";

export const WelcomeBoard = ({ title, desc }) => {

  return (
    <section className="w-full h-auto space-y-6 md:!py-12 lg:!py-14 padding md:space-y-10">
      <div className="flex flex-col items-start justify-center gap-6 md:flex-row">
        <h2 className="text-2xl font-bold tracking-normal font-Gilroy text-secondary md:text-3xl xl:text-4xl">
          {title}
        </h2>
        <div className="w-full space-y-4 md:space-y-8 md:w-3/5">
          <p className="text-base md:text-lg font-Poppins">{desc}</p>
          {/* <ul>
            {shortNotes?.map((list, idx) => (
              <li key={idx} className="my-4 text-sm md:my-8">
                {list}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
};
