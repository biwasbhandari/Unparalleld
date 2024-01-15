"use client";
import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [tshirtSizeFilter, setTshirtSizeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Search
        tshirtSizeFilter={tshirtSizeFilter}
        searchQuery={searchQuery}
        setTshirtSizeFilter={setTshirtSizeFilter}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};
export default PageSearch;
