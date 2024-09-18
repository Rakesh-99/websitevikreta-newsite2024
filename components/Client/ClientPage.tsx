// "use client"
// import React, { useEffect, useState } from "react";
// // import Client from "./contactus/page"; // Update the import path
// import type { Metadata } from 'next';
// import { getClientPageData } from "../../sanity/sanity-utils";
// import Client from "../../app/client/page";

// // Metadata for the page
// export const generateMetadata = (): Metadata => ({
//   title: 'Clients Page',
//   description: 'This is the clients page',
// });

// const Page = () => {
//   const [clientData, setClientData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getClientPageData();
//       setClientData(data);
//     };
//     fetchData();
//   }, []);

//   if (!clientData) {
//     return <div>Loading...</div>; // Show loading indicator while data is being fetched
//   }

//   return <Client/>;
// };

// export default Page;
