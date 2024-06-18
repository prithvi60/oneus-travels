import Script from "next/script";

const JSONLD = ({ data }) => (
  <Script
    defer
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JSONLD;
