import { MdSearch } from "react-icons/md"
import { React, useEffect,useContext} from "react"
import DataContext from "../DataContext/DataContext"
const InputField = () => {
  const { input, setInput,handleSearch } = useContext(DataContext)
 
  
    return (
      <form className="search" onSubmit={handleSearch}>
        <input type="text" placeholder="Search Anime..." value={input} onChange={(e)=>setInput(e.target.value)} />
        <a href={`/searched/${input}`}><MdSearch className="icon" color="greenyellow" fontSize="20px"/></a>
      </form>
    )
  }
  
  export default InputField
