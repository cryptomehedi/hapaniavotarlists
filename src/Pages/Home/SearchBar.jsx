import { useContext, useState } from "react";
import DisplayData from "./DisplayData";
import { VotarContext } from "../../Context/VotarContext";
import allCategories from "../../Data/categories.json";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("ekdala");
  const [searchText, setSearchText] = useState("");
  const votarList = useContext(VotarContext);

  const filteredList =
    votarList.length > 1 && selectedCategory === "ekdala"
      ? votarList.filter(
          (votar) =>
            votar.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : votarList.filter(
          (votar) =>
            votar.address === selectedCategory &&
            votar.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="flex">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className=" py-2.5 w-32 px-2 text-sm font-medium  text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          >
            {allCategories.map((category, i) => (
              <option key={i} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="relative w-full">
            <input
              type="search"
              onChange={(e) => setSearchText(e.target.value)}
              id="location-search"
              className="block flex-initial p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Input Votar Name"
              required
            />
          </div>
        </div>
      </form>

      {
        <div>
          {filteredList.length > 0 ? (
            filteredList
              .sort((a, b) => (a.SLN > b.SLN ? 1 : -1))
              .map((votar) => <DisplayData key={votar._id} votar={votar} />)
          ) : (
            <div className="text-center mt-5 text-red-400 font-bold text-2xl">
              No Data Found
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default SearchBar;
