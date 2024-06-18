import Script from "next/script";

const JsonLD = ({ data }) => (
  <Script
    defer
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLD;
