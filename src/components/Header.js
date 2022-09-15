import {MdHome,MdCollectionsBookmark} from "react-icons/md"
import InputField from "./InputField"

const Header = () => {
  
    return (
    <header className="header">
        <h2 className="h2">AnimeSpring</h2>
        
        <InputField/>
        <div className="navbtn">
          <a href="/"><MdHome  fontSize="25px"/> Home</a>
          <a href="/collection"><MdCollectionsBookmark fontSize="25px"/> Collection</a>
        </div>
    </header>
  )
}

export default Header
