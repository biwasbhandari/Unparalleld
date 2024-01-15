"use client";
import { ChangeEvent, FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  tshirtSizeFilter: string;
  searchQuery: string;
  setTshirtSizeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  tshirtSizeFilter,
  searchQuery,
  setTshirtSizeFilter,
  setSearchQuery,
}) => {
  const handleTshirtSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTshirtSizeFilter(event.target.value);
  };

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const router = useRouter();
  const handleFilterSearch = () => {
    // nvaigate to the tshirt page with the query
    router.push(
      `/tshirts?tshirtSize=${tshirtSizeFilter}&searchQuery=${searchQuery}`
    );
  };

  return (
    <section className="px-4 py-6 rounded-lg">
      <div className="conatiner mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Tshirt Size
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-2 capitalize rounded leading-tight border"
              onChange={handleTshirtSizeChange}
              value={tshirtSizeFilter}
            >
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
        </div>
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2">Search</label>
          <input
            type="search"
            id="search"
            placeholder="search..."
            className="w-full px-4 py-3 rounded leading-tight border"
            value={searchQuery}
            onChange={handleSearchQuery}
          />
        </div>
        <Button variant="outline" onClick={handleFilterSearch}>
          Search
        </Button>
      </div>
    </section>
  );
};
export default Search;
