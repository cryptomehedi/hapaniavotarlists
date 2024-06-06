import { useState } from "react";
import dataLists from "../../Data/DataList.json"
import DisplayData from "./DisplayData";
import Spinner from "../Shared/Spinner";

const SearchBar = () => {
    const [votar, setVotar] = useState()
    const [spin, setSpin] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSpin(true)
        const number = e.target.value
        const serial =  dataLists.find(i =>  i.NID == +number);
        setVotar(serial);

        setTimeout(() => {
            setSpin(false)
        }, 500);
    }
    
  return (
    <div>
      <form onChange={handleSubmit} className="flex items-center max-w-sm mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="number"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input Votar NID Number"
            required
          />
        </div>
      </form>

      {
        spin ? <div className="mt-5 text-center"><Spinner /></div> : <div>{ votar ? <DisplayData votar={votar} /> : <div className="text-center mt-5 text-red-400 font-bold text-2xl">No Data Found</div> }  </div>
      }

    </div>
  );
};
export default SearchBar;