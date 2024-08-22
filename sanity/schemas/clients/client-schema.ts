const client = {
    name: "client",
    title: "Client",
    type: "document",
    fields: [
       {
          name: "name",
          title: "Client Name",
          type: "string",
       },
       {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "name" },
       },
       {
          name: "logo",
          title: "Logo",
          type: "image",
          options: { hotspot: true },
          fields: [
             {
                name: "alt",
                title: "Alt",
                type: "string",
             },
          ],
       },
       {
          name: "website",
          title: "Website",
          type: "url",
       },
       {
          name: "description",
          title: "Description",
          type: "string",
       },
       {
          name: "contact",
          title: "Contact Information",
          type: "object",
          fields: [
             {
                name: "phone",
                title: "Phone Number",
                type: "string",
             },
             {
                name: "email",
                title: "Email",
                type: "string",
             },
          ],
       },
       {
          name: "projects",
          title: "Projects",
          type: "array",
          of: [
             {
                type: "reference",
                to: [{ type: "string"}],
             },
          ],
       },
       {
          name: "testimonials",
          title: "Testimonials",
          type: "array",
          of: [
             {
                type: "object",
                fields: [
                   {
                      name: "testimonial",
                      title: "Testimonial",
                      type: "text",
                   },
                   {
                      name: "author",
                      title: "Author",
                      type: "string",
                   },
                ],
             },
          ],
       },
    ],
 };
 
 export default client;
 