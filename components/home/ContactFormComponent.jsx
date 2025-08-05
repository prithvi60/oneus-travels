"use client";
import React from "react";
import { ContactForm } from "./ContactForm";
import { usePathname } from "next/navigation";

export const ContactFormComponent = () => {
    const path = usePathname().split("/")[1];
    const isPath = usePathname().startsWith("/blog")

    return (
        <div className={`${path === "contact" ? "hidden" : "block"} ${isPath && "block lg:hidden"}`}>
            <ContactForm />
        </div>
    );
};
