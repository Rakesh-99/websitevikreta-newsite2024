import React from "react";

import SearchResults from "./SearchResults";

// import Sanity
import { getBlogPageData } from "../../sanity/sanity-utils";


export default async function BlogsPage() {
   const blogPageData = await getBlogPageData();
   return (
      <>
         <SearchResults newsPageData={blogPageData} />

         
      </>
   );
}
