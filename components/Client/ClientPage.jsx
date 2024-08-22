"use-react"

import React, { useEffect, useState } from "react";
// import BlogsHero from "./BlogsHero";
import Client from "../../app/client/page";

import { getClientPageData } from "../../sanity/sanity-utils";

export default function BlogsPage() {
  const [clientPageData, setClientPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClientPageData();
      setClientPageData(data);
    };
    fetchData();
  }, []);

  if (!clientPageData) {
    return <div>Loading...</div>; // Optionally, show a loading indicator
  }

  return (
    <>
      <Client clientData={clientPageData} />
    </>
  );
}
