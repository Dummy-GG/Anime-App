import AnimeCard from "./AnimeCard"
import { React, useContext, useEffect, useState} from "react"
import DataContext from "../DataContext/DataContext"
const Main = () => {

  const [animeList, setAnimeList] = useState([])
  const {currentFetch} = useContext(DataContext)
  const [loading,setLoading] = useState(true)
  const getAnime = async () => {
    console.log(currentFetch)
    const animeGenre = await fetch("https://api.jikan.moe/v4/top/anime")
    const animeGenreJson = await animeGenre.json().then((animeGenreJson) => {
      setAnimeList(animeGenreJson.data)
      setLoading(false)
    })
  }
  useEffect(() => {
   currentFetch === "Main" && getAnime()
    
  },[currentFetch])
  
  return (
    <>
      <h2>Animes</h2>
      <div className="main">
        {loading && <p>loading..</p>}
        {!loading &&  animeList.map((anime) => (
          <AnimeCard image={anime.images.jpg.image_url} title={anime.title} key={anime.mal_id} />
       ))}
      </div>
      </>
    )
  }
  
  export default Main