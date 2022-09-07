import { MdSearch } from "react-icons/md"
const InputField = () => {
    return (
        <form className="search">
        <input type="text" placeholder="Search Ainme..." />
        <button  ><MdSearch color="greenyellow" fontSize="20px"/></button>
      </form>
    )
  }
  
  export default InputField
