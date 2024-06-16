import { useEffect, useState } from "react";
import dataLists from "../../Data/DataList.json"
import DisplayData from "./DisplayData";

const SearchBar = () => {
    const [votar, setVotar] = useState([])
    const [search, setSearch] = useState()

    useEffect(() => {
      if (dataLists) {
        let filtered = dataLists
  
        if (search) {
          filtered = filtered.filter(list =>
            list.NID.toString().startsWith(search) || list.SLN.toString().startsWith(search)
          )
        }
        console.log(filtered);
        setVotar(filtered)
      }
    }, [search])
    



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSpin(true)
    //     const number = e.target.value
    //     const serial =  dataLists.find(votar =>  votar.NID == +number);
    //     // const serial =  dataLists.find(votar =>  number.includes(votar.NID));
    //     const serial2 =  dataLists.filter(votar =>  votar.NID.includes(number));
    //     setVotar(serial);
    //     console.log( serial2);

    //     setTimeout(() => {
    //         setSpin(false)
    //     }, 500);
    // }
    
  return (
    <div>
      <form className="flex items-center max-w-sm mx-auto">
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
            onChange={e=> setSearch(e.target.value)}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input Votar NID Number"
            required
          />
        </div>
      </form>

      {
        <div>{ votar.length > 0 ? votar.sort((a, b) => (a.SLN > b.SLN) ? 1 : -1).map(votar=> <DisplayData key={votar.id} votar={votar} />)  : <div className="text-center mt-5 text-red-400 font-bold text-2xl">No Data Found</div> }  </div>
      } 

    </div>
  );
};
export default SearchBar;
