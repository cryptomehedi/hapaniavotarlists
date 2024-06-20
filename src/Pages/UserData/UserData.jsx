import { useLocation } from "react-router-dom";
// import dataLists from "../../Data/DataList.json"
import DisplayData from "../Home/DisplayData";
import { useContext, useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import { VotarContext } from "../../Context/VotarContext";
// import Spinner from "../Shared/Spinner"

const UserData = () => {
  const [dataLists, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useContext(VotarContext);
  useEffect(() => {
    if (data) {
      setDatalist(data);
      setLoading(false);
    }
  }, [data]);

  let userData;
  const path = useLocation().pathname.slice(1);
  if (path === "menLists") {
    userData = dataLists.filter((i) => i.gender === "male");
  } else {
    userData = dataLists.filter((i) => i.gender === "female");
  }
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-3">
          {userData
            .sort((a, b) => (a.SLN > b.SLN ? 1 : -1))
            .map((i) => {
              return (
                <div key={i._id} className="order-first">
                  <DisplayData votar={i} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default UserData;
