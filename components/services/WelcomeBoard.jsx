"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const WelcomeBoard = ({ title, desc, shortNotes }) => {
  const router = useRouter();
  return (
    <section className="w-full h-auto px-[24px] py-7 max-w-[1200px] mx-auto space-y-6 md:space-y-10">
      <div className="flex flex-col items-start justify-center gap-6 md:flex-row">
        <h2 className="text-2xl font-semibold tracking-normal font-Montserrat text-secondary md:text-3xl xl:text-4xl">
          {title}
        </h2>
        <div className="w-full space-y-4 md:space-y-8 font-Lato md:w-3/5">
          <p className="text-base md:text-lg">{desc}</p>
          <ul>
            {shortNotes?.map((list, idx) => (
              <li key={idx} className="my-4 text-sm md:my-8">
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
