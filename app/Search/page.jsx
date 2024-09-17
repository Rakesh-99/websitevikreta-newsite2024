"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../../components/Blogs/Input";
import { SearchSVG } from "../../components/Blogs/Input/close.jsx";
import React from 'react';
import dynamic from "next/dynamic";

const SearchPage = dynamic(() => import("../../components/search/SearchPage"), {
   ssr: false,
});
const Search = () => {
  const [query, setQuery] = useState("");
  const [searchBarValue, setSearchBarValue] = useState(""); // Move useState inside the component

  const handleSearch = () => {
    const searchQuery = searchBarValue.trim();
    if (searchQuery) {
      window.open(`/Search?query=${encodeURIComponent(searchQuery)}`, "_self");
    } else {
      window.open("/Search", "_self");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, []);

  return (
    <div>
      {query ? (
        <>
        <section className="topsec">
          <div className="container">
            <div className="related-searches-box">
              <div className="box-shadow"></div>
              <h4 className="related-searches-heading">Results for {query}</h4>
            </div>
            <div className="placeholder">
              <Input
                size="xs"
                shape="square"
                name="Search Input"
                placeholder={`Search Here`}
                value={searchBarValue} // Bind the input value
                onChange={(e) => setSearchBarValue(e.target.value)}
                suffix={
                  <div className="flex h-[18px] w-[18px] items-center justify-center">
                    {searchBarValue?.length > 0 ? (
                      <SearchSVG
                        onClick={handleSearch}
                        height={16}
                        width={18}
                      />
                    ) : (
                      <SearchSVG
                        width={18}
                        height={16}
                        alt="Search"
                        className="my-0.5 h-[16px] w-[18px]"
                      />
                    )}
                  </div>
                }
                className="mr-4 gap-2.5 text-black-900 md:mr-0"
              />
            </div>
          </div>
        </section>
        <SearchPage />
        </>
      ) : (
        <h1>Please enter a search term.</h1>
      )}
    </div>
  );
};

export default Search;
