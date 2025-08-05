"use client";
import React from "react";
import { ContactForm } from "./ContactForm";
import { usePathname } from "next/navigation";

export const ContactFormComponent = () => {
    const path = usePathname().split("/")[1];
    return (
        <div className={`${path === "contact" ? "hidden" : "block"}`}>
            <ContactForm />
        </div>
    );
};
