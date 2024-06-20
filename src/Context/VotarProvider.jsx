import { useEffect, useState } from "react";
import { VotarContext } from "./VotarContext";
import axios from "axios";

export const VotarProvider = ({ children }) => {
  const [dataLists, setDatalist] = useState([]);

  useEffect(() => {
    axios
      .get("https://hapaniavotarlists-server.vercel.app/api/v1/votarList")
      .then((data) => setDatalist(data.data));
  }, [setDatalist]);

  return (
    <VotarContext.Provider value={dataLists}>{children}</VotarContext.Provider>
  );
};
