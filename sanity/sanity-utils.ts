import { createClient, groq } from "next-sanity";

// ! ===============================================================
// ! Defining global client object
// ! ===============================================================
// #region Global Declarations
const client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "",
   useCdn: true,
});




export async function getNewsPageData() {
  return client.fetch(
     groq`
        {
           "news": 
              *[_type=="news"] | order(date desc){
                 _id,
                 _createdAt,
                 title,
                 url,
                 slug,
                 categories[]->,
                 btnIsRedirect,
                 date,
                 description,
                 "imageURL": image.asset->url,
                 image
              },
           "categories": 
              *[_type=="blogCategories"]{
                 _id,
                 _createdAt,
                 categoryKey,
                 title,
              }
        }`,

  );
}

export async function getArticleData(slug: string) {
  return client.fetch(
     groq`*[_type=="news" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        title,
        slug,
        description,
        "imageURL": image.asset->url,
        image,
        content
     }`,

  );
}

export async function getMiscPageData(slug: string) {
  return client.fetch(
     groq`*[_type=="miscellaneousPage" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        pageTitle,
        slug,
        content
     }`,

  );
}


// #endregion
