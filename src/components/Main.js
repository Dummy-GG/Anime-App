import AnimeCard from "./AnimeCard"
import { React, useEffect, useState, useContext } from "react"
import DataContext from "../DataContext/DataContext"
const Main = ({ busy }) => {
  const [count,setCount] = useState(0)
  const [animeList, setAnimeList] = useState([])
  const {currentFetch,setCurrentFetch} = useContext(DataContext)
  console.log(currentFetch)
  const getAnimeGenre = async () => {
    const animeGenre = await fetch("https://api.jikan.moe/v4/anime?status=complete")
    const animeGenreJson = await animeGenre.json()
    setAnimeList(animeGenreJson.data)
    setCount(1)
    
  }
  useEffect(() => {
   count === 0 && currentFetch === "Main" && getAnimeGenre()
   console.log(count)
  }, [currentFetch])
  /*useEffect(() => {
    (async () => setAnimeList(await anime))()
    console.log(animeList)
  })*/
  //console.log(anime)
  return (
    <>
      <h2>Animes</h2>
      <div className="main">
        { animeList?.map((anime) => (
          <AnimeCard image={anime.images.jpg.image_url} title={anime.title} key={anime.mal_id} />
       ))}
      </div>
      </>
    )
  }
  
  export default Main