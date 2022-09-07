import { React, useEffect, useState,useContext} from "react"
import AnimeCard from "./AnimeCard"
import DataContext from "../DataContext/DataContext"
const Tops = ({setBusy}) => {
  const [topAnime, setTopAnime] = useState([])
  const {currentFetch,setCurrentFetch} = useContext(DataContext)

  const getTopAnime = async () => {
    const topAnime = await fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity")
    const topAnimeJson = await topAnime.json()
    setCurrentFetch("Main")
    setTopAnime(topAnimeJson.data)
    
  }
  useEffect(() => {
    currentFetch==="Top" && getTopAnime()
  }, [currentFetch])
 // console.log(top5Anime)
  return (
    <>
      <h2>Top Five Animes</h2>
      <main className="topAnime">
        
        {topAnime?.map((anime) => (<AnimeCard image={anime.images.jpg.image_url} title={anime.title_english} key={anime.mal_id} />))}
      </main>
      </>
    )
  }
  
  export default Tops
