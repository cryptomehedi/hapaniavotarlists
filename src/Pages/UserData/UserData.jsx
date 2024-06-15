import { useLocation } from "react-router-dom"
import dataLists from "../../Data/DataList.json"
import DisplayData from "../Home/DisplayData"

const UserData = () => {
    let userData
    const path = useLocation().pathname.slice(1)
    if (path === "menLists"){
         userData = dataLists.filter(i => i.gender === "male")
      } else {
        userData = dataLists.filter(i => i.gender === "female")
      }
  return (
    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-3">
        {
            userData.sort((a, b) => (a.SLN > b.SLN) ? 1 : -1).map(i => {
                 return <div key={i.id} className="order-first" >
                     <DisplayData votar={i}/>
                </div>
            })
        }
    </div>
  )
}
export default UserData