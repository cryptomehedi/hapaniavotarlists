import { useLocation } from "react-router-dom"
// import dataLists from "../../Data/DataList.json"
import DisplayData from "../Home/DisplayData"
import { useEffect, useState } from "react"
import axios from "axios"

const UserData = () => {
  const [dataLists, setDatalist] = useState([])

  useEffect(() => {
    axios.get('https://hapaniavotarlists-server.vercel.app/api/v1/votarList')
    .then(data => setDatalist(data.data))
  }, [])
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
                 return <div key={i._id} className="order-first" >
                     <DisplayData votar={i}/>
                </div>
            })
        }
    </div>
  )
}
export default UserData