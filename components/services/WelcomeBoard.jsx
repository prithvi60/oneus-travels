"use client";

import React from "react";

export const WelcomeBoard = ({ title, desc }) => {

  return (
    <section className="w-full h-auto space-y-6 md:!py-12 lg:!py-14 padding md:space-y-10">
      <div className="block space-y-5">
        <h2 className="text-2xl font-bold tracking-normal font-Gilroy text-secondary md:text-3xl xl:text-4xl">
          {title}
        </h2>
        <div className="w-full">
          <p className="text-base md:text-lg font-Poppins">{desc}</p>
        </div>
      </div>
    </section>
  );
};
