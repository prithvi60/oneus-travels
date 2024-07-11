import React from "react";
import JsonLd from "./JsonLd";
import { localBusinessData, structuredDataForOrg } from "@/libs/schema";

export const JsonLdComponents = () => {
  return (
    <>
      <JsonLd data={structuredDataForOrg} />
      <JsonLd data={localBusinessData} />
    </>
  );
};
