const careers = {
  name: "careers",
  title: "Careers",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "stipend",
      title: "Stipend",
      type: "string",
    },
    {
      name: "applyBy",
      title: "Apply By",
      type: "date",
    },
    {
      name: "jobType",
      title: "Job Type",
      type: "string",
    },
    {
      name: "noOfOpenings",
      title: "Number of Openings",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "about",
      title: "About the Job/Internship",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills Required",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "eligibility",
      title: "Who Can Apply",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "otherRequirements",
      title: "Other Requirements",
      type: "text",
    },
    {
      name: "perks",
      title: "Perks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "isOpeningActive",
      title: "Is Opening Active",
      type: "boolean",
    },
  ],
};

export default careers;
