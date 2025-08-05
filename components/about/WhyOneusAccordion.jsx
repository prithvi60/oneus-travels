"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { OtherBtn } from "../Button";

export const AccordionComponent = ({ list, idx }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["0"]));
  return (
    <Accordion
      variant="light"
      //   defaultExpandedKeys={["0"]}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <AccordionItem
        key={idx}
        aria-label={list.title}
        title={list.title}
        indicator={({ isOpen }) =>
          isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />
        }
        classNames={{
          base: "text-secondary font-RobotoSlab font-normal",
          heading: "transition-all duration-300 ease-linear",
          title: "!text-secondary font-semibold !capitalize text-xl",
          indicator:
            "!transition-transform !duration-300 !ease-linear text-xl !rotate-0 data-[open=true]:!rotate-0 text-secondary",
        }}
      >
        <p className="text-base font-normal sm:text-lg text-zinc-600 mb-8">
          {list.desc}
        </p>
        <div>
          <Link href="/contact" className="mt-8">
            <OtherBtn text={list.cta} />
          </Link>
        </div>
      </AccordionItem>
    </Accordion>
  );
};
