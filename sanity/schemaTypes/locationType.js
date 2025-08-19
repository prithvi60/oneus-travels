import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const locationType = defineType({
  name: "location",
  title: "Location Mini Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      title: "Block Content",
      name: "blockContent",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    }),
  ],
});
