import { React, useEffect, useState,useContext} from "react"
import AnimeCard from "./AnimeCard"
import DataContext from "../DataContext/DataContext"
const Tops = () => {
  const [topAnime, setTopAnime] = useState([])
  const { currentFetch, setCurrentFetch } = useContext(DataContext);
  const [loading,setLoading] = useState(true)
  const getTopAnime =async () => {
    const top = await fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity")
    const topJson = await top.json().then((topJson) => {
      setTopAnime(topJson.data)
      setLoading(false)
      setCurrentFetch("Main")
    })
  }
  
  useEffect(() => {
   currentFetch === "Top" && getTopAnime()
    
  },[currentFetch])
 // console.log(top5Anime)
  return (
    <>
      <h2>Top Five Animes</h2>
      <main className="topAnime">
        {loading && <p>loading...</p>}
        {!loading && topAnime.map((anime) => (<AnimeCard image={anime.images.jpg.image_url} title={anime.title_english} key={anime.mal_id} />))}
      </main>
      </>
    )
  }
  
  export default Tops
