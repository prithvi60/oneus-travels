"use client";
import Script from "next/script";

const JsonLd = ({ data }) => (
  <Script
    defer
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
