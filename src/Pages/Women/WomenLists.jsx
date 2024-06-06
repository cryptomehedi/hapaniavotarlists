import dataLists from "../../Data/DataList.json"
import DisplayData from "../Home/DisplayData"

const WomenLists = () => {
    const womenLists = dataLists.filter(i => i.gender === "female")
    return (
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4">
          {
              womenLists.sort((a, b) => (a.SLN > b.SLN) ? 1 : -1).map(i => {
                   return <div key={i.id} className="order-first" >
                       <DisplayData votar={i}/>
                  </div>
              })
          }
      </div>
  )
}
export default WomenLists