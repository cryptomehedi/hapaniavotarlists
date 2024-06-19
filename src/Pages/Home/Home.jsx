import { useEffect } from "react"
import SearchBar from "./SearchBar"
import axios from "axios"

const Home = () => {
  useEffect(()=>{
    axios.get('https://hapaniavotarlists-server.vercel.app')
    .then(data => {
      if (data.data !== "Server Running")
      window.location.reload()
    })
  },[])
  return (
    <div>
        <SearchBar/>
    </div>
  )
}
export default Home