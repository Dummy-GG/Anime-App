import Tops from "./Tops"

import Main from "./Main"
import { useState } from "react"
const Home = () => {
    const [busy, setBusy] = useState(false)
    return (
        <div>
            <Tops  setBusy={setBusy} />
            <Main  busy={busy}/>
        </div>
    )
  }
  
  export default Home